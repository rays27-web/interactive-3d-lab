import * as THREE from 'three'

function createAccretionDiskShaderMaterial(initialParams = {}, isLensedArc = false) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uAccretionVelocity: { value: initialParams.accretionVelocity ?? 1.0 },
      uDiskDensity: { value: initialParams.diskDensity ?? 1.0 },
      uEmissionIntensity: { value: initialParams.emissionIntensity ?? 1.0 },
      uIsLensedArc: { value: isLensedArc ? 1.0 : 0.0 },
    },
    vertexShader: `
      varying vec3 vWorldPosition;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uAccretionVelocity;
      uniform float uDiskDensity;
      uniform float uEmissionIntensity;
      uniform float uIsLensedArc;

      varying vec3 vWorldPosition;
      varying vec2 vUv;

      void main() {
        // Radius from black hole core
        float r = length(vWorldPosition.xz);
        if (uIsLensedArc > 0.5) {
          r = length(vWorldPosition.xy);
        }

        float innerRadius = 1.42;
        float outerRadius = 6.40;
        if (r < innerRadius || r > outerRadius) {
          discard;
        }

        // Angle around singularity
        float angle = atan(vWorldPosition.z, vWorldPosition.x);
        if (uIsLensedArc > 0.5) {
          angle = atan(vWorldPosition.y, vWorldPosition.x);
        }

        // Differential Keplerian shear: Omega proportional to r^-1.5
        float keplerianSpeed = pow(innerRadius / max(r, 0.6), 1.5) * 2.4 * uAccretionVelocity;
        float shearedAngle = angle - uTime * keplerianSpeed;

        // Procedural plasma turbulence
        float wave1 = sin(shearedAngle * 6.0 + sin(r * 4.2)) * 0.5 + 0.5;
        float wave2 = cos(shearedAngle * 13.0 - r * 7.5 + uTime * 0.5) * 0.5 + 0.5;
        float wave3 = sin(shearedAngle * 24.0 + r * 14.0) * 0.5 + 0.5;
        float turbulence = wave1 * 0.48 + wave2 * 0.36 + wave3 * 0.16;

        // Radial density: sharp rise at ISCO, exponential power decay toward outer rim
        float normR = (r - innerRadius) / (outerRadius - innerRadius);
        float iscoRamp = smoothstep(innerRadius, innerRadius + 0.18, r);
        float outerFalloff = 1.0 - smoothstep(outerRadius - 1.6, outerRadius, r);
        float densityProfile = iscoRamp * outerFalloff * pow(1.0 - normR * 0.65, 1.6);

        // Relativistic Doppler Beaming:
        // Disk rotates counter-clockwise: approaching side on left is boosted, receding on right is dimmed
        float vProjection = -sin(shearedAngle);
        if (uIsLensedArc > 0.5) {
          vProjection = -sin(shearedAngle) * 0.55;
        }
        float relativisticBeta = clamp(vProjection * pow(innerRadius / r, 0.6) * 0.55, -0.65, 0.65);
        float dopplerFactor = pow(1.0 + relativisticBeta, 3.2);

        // Stellar/plasma spectral gradient
        vec3 hotCore = vec3(0.95, 0.98, 1.00);
        vec3 innerGold = vec3(1.00, 0.68, 0.20);
        vec3 midAmber = vec3(0.90, 0.36, 0.08);
        vec3 outerRed = vec3(0.46, 0.06, 0.02);

        // Radiation temperature modulated by Doppler blueshift/redshift
        float effectiveTemp = clamp((1.0 - normR) + relativisticBeta * 0.35, 0.0, 1.0);

        vec3 color;
        if (effectiveTemp > 0.72) {
          color = mix(innerGold, hotCore, (effectiveTemp - 0.72) / 0.28);
        } else if (effectiveTemp > 0.38) {
          color = mix(midAmber, innerGold, (effectiveTemp - 0.38) / 0.34);
        } else {
          color = mix(outerRed, midAmber, effectiveTemp / 0.38);
        }

        // Lensed arc angular concentration
        float arcWeight = 1.0;
        if (uIsLensedArc > 0.5) {
          arcWeight = smoothstep(0.12, 0.88, abs(sin(angle))) * 0.82;
        }

        float alpha = densityProfile * (0.42 + turbulence * 0.58) * uDiskDensity * arcWeight;
        vec3 finalColor = color * dopplerFactor * (0.84 + turbulence * 0.44) * uEmissionIntensity;

        gl_FragColor = vec4(finalColor, alpha);
      }
    `,
  })
}

function createPhotonRingMaterial(initialParams = {}) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uEmissionIntensity: { value: initialParams.emissionIntensity ?? 1.0 },
      uTime: { value: 0 },
    },
    vertexShader: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: `
      uniform float uEmissionIntensity;
      uniform float uTime;
      varying vec3 vWorldPosition;
      void main() {
        float r = length(vWorldPosition.xz);
        float peak = 1.0 - abs(r - 1.40) / 0.07;
        if (peak <= 0.0) discard;
        float intensity = pow(peak, 2.5) * uEmissionIntensity * 2.8;
        vec3 photonColor = vec3(0.92, 0.96, 1.0);
        gl_FragColor = vec4(photonColor * intensity, peak * 0.95);
      }
    `,
  })
}

function createLensedStarfield(initialParams = {}) {
  const count = 1200
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  const phases = new Float32Array(count)
  const palette = [new THREE.Color('#d4e8ff'), new THREE.Color('#85b8ff'), new THREE.Color('#ffffff'), new THREE.Color('#ffdfb8')]

  for (let index = 0; index < count; index += 1) {
    const radius = 24 + Math.random() * 66
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[index * 3 + 1] = radius * Math.cos(phi)
    positions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
    palette[Math.floor(Math.random() * palette.length)].toArray(colors, index * 3)
    sizes[index] = 2.8 + Math.random() * 3.4
    phases[index] = Math.random() * Math.PI * 2
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))
  geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1))

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uLensingStrength: { value: initialParams.lensingStrength ?? 1.0 },
    },
    vertexShader: `
      attribute float aSize;
      attribute float aPhase;
      attribute vec3 color;
      uniform float uTime;
      uniform float uLensingStrength;
      varying vec3 vColor;
      varying float vTwinkle;
      varying float vShadowMask;

      void main() {
        vec4 viewPos = modelViewMatrix * vec4(position, 1.0);
        float rView = length(viewPos.xy);

        // Einstein radius approximation: deflection proportional to lensing strength / r
        float einsteinRadiusSq = 2.2 * uLensingStrength;
        float shadowRadius = 1.35;

        if (rView > 0.05) {
          float deflection = einsteinRadiusSq / rView;
          vec2 radialDir = normalize(viewPos.xy);
          viewPos.xy += radialDir * deflection * smoothstep(shadowRadius * 0.8, shadowRadius * 3.6, rView);
        }

        float deflectedR = length(viewPos.xy);
        vShadowMask = smoothstep(shadowRadius, shadowRadius + 0.22, deflectedR);

        // Gravitational magnification near the Einstein ring
        float magnification = 1.0 + smoothstep(1.4, 0.0, abs(deflectedR - sqrt(einsteinRadiusSq))) * 1.4 * uLensingStrength;

        vColor = color * magnification;
        vTwinkle = 0.68 + sin(uTime * 0.72 + aPhase) * 0.32;
        gl_PointSize = min(14.0, aSize * vTwinkle * magnification * (150.0 / -viewPos.z));
        gl_Position = projectionMatrix * viewPos;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vTwinkle;
      varying float vShadowMask;

      void main() {
        if (vShadowMask < 0.04) discard;
        float dist = length(gl_PointCoord - 0.5);
        float soft = 1.0 - smoothstep(0.18, 0.5, dist);
        gl_FragColor = vec4(vColor, soft * vTwinkle * vShadowMask * 0.75);
      }
    `,
  })

  return new THREE.Points(geometry, material)
}

export function createBlackHoleScene(container, initialParams = {}) {
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2('#04050d', 0.022)

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 200)
  camera.position.set(0, 2.2, 11.5)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor('#04050d', 1)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  container.appendChild(renderer.domElement)

  const blackHoleGroup = new THREE.Group()
  scene.add(blackHoleGroup)

  // 1. Central Event Horizon (Absolute Light Absorption Sphere)
  const horizonGeometry = new THREE.SphereGeometry(1.35, 64, 64)
  const horizonMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 })
  const horizonMesh = new THREE.Mesh(horizonGeometry, horizonMaterial)
  blackHoleGroup.add(horizonMesh)

  // 2. Photon Ring (Relativistic Orbital Caustic)
  const photonRingGeometry = new THREE.RingGeometry(1.36, 1.48, 128)
  const photonRingMaterial = createPhotonRingMaterial(initialParams)
  const photonRing = new THREE.Mesh(photonRingGeometry, photonRingMaterial)
  photonRing.rotation.x = Math.PI / 2
  blackHoleGroup.add(photonRing)

  // 3. Equatorial Accretion Disk
  const diskGeometry = new THREE.RingGeometry(1.42, 6.40, 128, 64)
  const diskMaterial = createAccretionDiskShaderMaterial(initialParams, false)
  const accretionDisk = new THREE.Mesh(diskGeometry, diskMaterial)
  accretionDisk.rotation.x = Math.PI / 2
  blackHoleGroup.add(accretionDisk)

  // 4. Gravitationally Lensed Upper/Lower Arc (Light bent over the horizon)
  const arcGeometry = new THREE.RingGeometry(1.42, 6.40, 128, 64)
  const arcMaterial = createAccretionDiskShaderMaterial(initialParams, true)
  const lensedArc = new THREE.Mesh(arcGeometry, arcMaterial)
  lensedArc.position.z = -0.15
  blackHoleGroup.add(lensedArc)

  // Tilt black hole system for optimal oblique perspective
  blackHoleGroup.rotation.x = -0.32

  // 5. Gravitationally Lensed Starfield
  const lensedStars = createLensedStarfield(initialParams)
  scene.add(lensedStars)

  const pointer = new THREE.Vector2()
  const target = new THREE.Vector2()
  function onPointerMove(event) {
    target.x = (event.clientX / window.innerWidth - 0.5) * 2
    target.y = (event.clientY / window.innerHeight - 0.5) * 2
  }
  window.addEventListener('pointermove', onPointerMove, { passive: true })

  function resize() {
    const { clientWidth: width, clientHeight: height } = container
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
  }
  window.addEventListener('resize', resize)
  resize()

  const startedAt = performance.now()
  let frameId

  function animate() {
    const elapsed = (performance.now() - startedAt) / 1000
    pointer.lerp(target, 0.025)

    diskMaterial.uniforms.uTime.value = elapsed
    arcMaterial.uniforms.uTime.value = elapsed
    photonRingMaterial.uniforms.uTime.value = elapsed
    lensedStars.material.uniforms.uTime.value = elapsed

    // Subtle systemic rotation and camera parallax
    blackHoleGroup.rotation.z = THREE.MathUtils.lerp(blackHoleGroup.rotation.z, pointer.x * 0.06, 0.018)
    blackHoleGroup.rotation.x = THREE.MathUtils.lerp(blackHoleGroup.rotation.x, -0.32 - pointer.y * 0.08, 0.018)
    blackHoleGroup.position.y = Math.sin(elapsed * 0.22) * 0.08

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.65, 0.018)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 2.2 - pointer.y * 0.40, 0.018)
    camera.lookAt(0, 0, 0)

    renderer.render(scene, camera)
    frameId = requestAnimationFrame(animate)
  }
  animate()

  function updateParams(params) {
    if (!params) return
    if (params.accretionVelocity !== undefined) {
      diskMaterial.uniforms.uAccretionVelocity.value = params.accretionVelocity
      arcMaterial.uniforms.uAccretionVelocity.value = params.accretionVelocity
    }
    if (params.lensingStrength !== undefined) {
      lensedStars.material.uniforms.uLensingStrength.value = params.lensingStrength
    }
    if (params.diskDensity !== undefined) {
      diskMaterial.uniforms.uDiskDensity.value = params.diskDensity
      arcMaterial.uniforms.uDiskDensity.value = params.diskDensity
    }
    if (params.emissionIntensity !== undefined) {
      diskMaterial.uniforms.uEmissionIntensity.value = params.emissionIntensity
      arcMaterial.uniforms.uEmissionIntensity.value = params.emissionIntensity
      photonRingMaterial.uniforms.uEmissionIntensity.value = params.emissionIntensity
    }
  }

  const dispose = () => {
    cancelAnimationFrame(frameId)
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('resize', resize)

    horizonGeometry.dispose()
    horizonMaterial.dispose()
    photonRingGeometry.dispose()
    photonRingMaterial.dispose()
    diskGeometry.dispose()
    diskMaterial.dispose()
    arcGeometry.dispose()
    arcMaterial.dispose()

    lensedStars.geometry.dispose()
    lensedStars.material.dispose()

    renderer.dispose()
    renderer.domElement.remove()
  }

  return { dispose, updateParams }
}
