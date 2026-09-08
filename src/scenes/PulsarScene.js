import * as THREE from 'three'

// Shader for the Relativistic Polar Radiation Beams (Lighthouse Cones)
function createBeamShaderMaterial(initialParams = {}) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uBeamCollimation: { value: initialParams.beamCollimation ?? 1.0 },
      uMagneticFlux: { value: initialParams.magneticFlux ?? 1.0 },
      uObserverPulse: { value: 0.0 },
    },
    vertexShader: `
      varying vec3 vPosition;
      varying vec2 vUv;
      varying vec3 vWorldNormal;
      varying vec3 vViewDir;

      void main() {
        vUv = uv;
        vPosition = position;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        vViewDir = normalize(cameraPosition - worldPos.xyz);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uBeamCollimation;
      uniform float uMagneticFlux;
      uniform float uObserverPulse;

      varying vec3 vPosition;
      varying vec2 vUv;
      varying vec3 vWorldNormal;
      varying vec3 vViewDir;

      void main() {
        // Height along the cone: vUv.y from 0 (base at neutron star) to 1 (outer space tip)
        float h = vUv.y;

        // Longitudinal attenuation: intense at polar gap, spreading outward
        float longitudinalFade = pow(1.0 - h, 1.6);
        float baseGlow = smoothstep(0.0, 0.12, h);

        // Lateral beam collimation profile: centered along the beam axis
        float lateralDist = abs(vUv.x - 0.5) * 2.0;
        float collimationPower = 2.0 + uBeamCollimation * 5.0;
        float lateralProfile = pow(max(1.0 - lateralDist, 0.0), collimationPower);

        // Relativistic flow modulation: high-frequency plasma shocks streaming outwards
        float shockWave = sin(h * 32.0 - uTime * 18.0) * 0.15 + 0.85;

        // Observer line-of-sight flash enhancement (the lighthouse pulse)
        float pulseBoost = 1.0 + uObserverPulse * 4.2 * uBeamCollimation;

        // Spectral radiation gradient: incandescent electric blue-white core to synchrotron violet halo
        vec3 coreColor = vec3(0.92, 0.98, 1.00);
        vec3 midColor = vec3(0.32, 0.82, 1.00);
        vec3 outerColor = vec3(0.55, 0.28, 0.95);

        vec3 beamColor = mix(outerColor, midColor, lateralProfile);
        beamColor = mix(beamColor, coreColor, pow(lateralProfile, 2.5));

        float alpha = longitudinalFade * baseGlow * lateralProfile * shockWave * uMagneticFlux * pulseBoost * 0.85;

        gl_FragColor = vec4(beamColor * pulseBoost, alpha);
      }
    `,
  })
}

// Shader for the Neutron Star Core with Relativistic Limb Darkening & Polar Hotspots
function createCoreShaderMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uObserverPulse: { value: 0.0 },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vViewDir;

      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vViewDir = normalize(cameraPosition - worldPos.xyz);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uObserverPulse;

      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vViewDir;

      void main() {
        // Relativistic limb darkening: center is brighter, edges darken
        float facing = max(dot(vNormal, vViewDir), 0.0);
        float limbDarkening = pow(facing, 0.65) * 0.75 + 0.25;

        // Polar cap thermal hotspots in local magnetic coordinates (Y-axis aligned)
        float polarDist = abs(normalize(vPosition).y);
        float isHotspot = smoothstep(0.78, 0.96, polarDist);

        // High-temperature stellar palette
        vec3 baseCrust = vec3(0.08, 0.22, 0.48);
        vec3 innerPlume = vec3(0.45, 0.82, 1.00);
        vec3 hotspotWhite = vec3(1.00, 0.96, 0.92);

        vec3 surfaceColor = mix(baseCrust, innerPlume, limbDarkening);
        surfaceColor = mix(surfaceColor, hotspotWhite, isHotspot * (0.85 + uObserverPulse * 0.45));

        gl_FragColor = vec4(surfaceColor, 1.0);
      }
    `,
  })
}

// Generates the closed dipolar magnetic field lines: r(theta) = r_0 * sin^2(theta)
function createDipoleFieldGeometry() {
  const lineCount = 20
  const segmentsPerLine = 42
  const positions = []
  const phases = []

  const r0Values = [2.6, 3.8, 5.0, 6.2]

  for (let rIdx = 0; rIdx < r0Values.length; rIdx += 1) {
    const r0 = r0Values[rIdx]
    const linesAtRadius = lineCount

    for (let l = 0; l < linesAtRadius; l += 1) {
      const phi = (l / linesAtRadius) * Math.PI * 2
      const linePhase = Math.random() * Math.PI * 2

      for (let s = 0; s < segmentsPerLine; s += 1) {
        // Parameter theta from near North pole (0.24) to near South pole (PI - 0.24)
        const t1 = 0.24 + (s / segmentsPerLine) * (Math.PI - 0.48)
        const t2 = 0.24 + ((s + 1) / segmentsPerLine) * (Math.PI - 0.48)

        // Dipole equation: rho = r0 * sin^3(theta), z = r0 * sin^2(theta) * cos(theta)
        const rho1 = r0 * Math.pow(Math.sin(t1), 3)
        const z1 = r0 * Math.pow(Math.sin(t1), 2) * Math.cos(t1)
        const x1 = rho1 * Math.cos(phi)
        const y1 = z1
        const z1Coord = rho1 * Math.sin(phi)

        const rho2 = r0 * Math.pow(Math.sin(t2), 3)
        const z2 = r0 * Math.pow(Math.sin(t2), 2) * Math.cos(t2)
        const x2 = rho2 * Math.cos(phi)
        const y2 = z2
        const z2Coord = rho2 * Math.sin(phi)

        positions.push(x1, y1, z1Coord, x2, y2, z2Coord)
        phases.push(s / segmentsPerLine, (s + 1) / segmentsPerLine)
      }
    }
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute('aLineParam', new THREE.Float32BufferAttribute(phases, 1))
  return geometry
}

function createDipoleFieldMaterial(initialParams = {}) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uMagneticFlux: { value: initialParams.magneticFlux ?? 1.0 },
    },
    vertexShader: `
      attribute float aLineParam;
      varying float vParam;

      void main() {
        vParam = aLineParam;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uMagneticFlux;
      varying float vParam;

      void main() {
        // Electron-positron synchrotron wave packets flowing along magnetic loops
        float wave = sin(vParam * 22.0 - uTime * 9.0) * 0.5 + 0.5;
        float pulse = pow(wave, 2.5);

        // Cyan-violet magnetic field illumination
        vec3 fieldColor = mix(vec3(0.25, 0.65, 1.0), vec3(0.75, 0.45, 1.0), vParam);
        float alpha = (0.28 + pulse * 0.72) * uMagneticFlux * 0.58;

        gl_FragColor = vec4(fieldColor * (0.9 + pulse * 0.6), alpha);
      }
    `,
  })
}

// Co-rotating Magnetospheric Synchrotron Plasma Particles
function createMagnetosphericPlasma(count, initialParams = {}) {
  const positions = new Float32Array(count * 3)
  const radii = new Float32Array(count)
  const phases = new Float32Array(count)
  const speeds = new Float32Array(count)
  const sizes = new Float32Array(count)

  for (let i = 0; i < count; i += 1) {
    // Toroidal distribution within light cylinder radius
    const radius = 1.4 + Math.pow(Math.random(), 1.6) * 5.4
    const angle = Math.random() * Math.PI * 2
    const height = (Math.random() - 0.5) * (0.35 + radius * 0.16)

    positions[i * 3] = Math.cos(angle) * radius
    positions[i * 3 + 1] = height
    positions[i * 3 + 2] = Math.sin(angle) * radius

    radii[i] = radius
    phases[i] = angle
    speeds[i] = 1.0 / Math.sqrt(radius)
    sizes[i] = 2.0 + Math.random() * 3.4
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('aRadius', new THREE.BufferAttribute(radii, 1))
  geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1))
  geometry.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1))
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uPlasmaDensity: { value: initialParams.plasmaDensity ?? 1.0 },
      uSpinVelocity: { value: initialParams.spinVelocity ?? 1.0 },
    },
    vertexShader: `
      attribute float aRadius;
      attribute float aPhase;
      attribute float aSpeed;
      attribute float aSize;

      uniform float uTime;
      uniform float uPlasmaDensity;
      uniform float uSpinVelocity;

      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        // Co-rotation with relativistic shear
        float currentAngle = aPhase + uTime * 2.8 * aSpeed * uSpinVelocity;
        vec3 animatedPos = vec3(
          cos(currentAngle) * aRadius,
          position.y + sin(uTime * 1.5 + aPhase) * 0.08,
          sin(currentAngle) * aRadius
        );

        vec4 viewPosition = modelViewMatrix * vec4(animatedPos, 1.0);

        // Synchrotron energy spectrum: cyan inner boundary to electric violet outer rim
        float normRadius = clamp((aRadius - 1.4) / 5.4, 0.0, 1.0);
        vec3 hotCyan = vec3(0.35, 0.95, 1.00);
        vec3 deepViolet = vec3(0.68, 0.25, 0.95);
        vColor = mix(hotCyan, deepViolet, normRadius);

        float twinkle = 0.75 + sin(uTime * 6.0 + aPhase * 4.0) * 0.25;
        vAlpha = (1.0 - normRadius * 0.65) * twinkle * uPlasmaDensity * 0.75;

        gl_PointSize = clamp(aSize * (150.0 / -viewPosition.z), 1.5, 18.0);
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        float dist = length(gl_PointCoord - 0.5);
        if (dist > 0.5) discard;
        float intensity = exp(-dist * dist * 12.0);
        gl_FragColor = vec4(vColor, intensity * vAlpha);
      }
    `,
  })

  return new THREE.Points(geometry, material)
}

// Background Distant Starfield
function createDistantStars() {
  const count = 800
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  const phases = new Float32Array(count)

  const palette = [
    new THREE.Color('#d4e8ff'),
    new THREE.Color('#94b8ff'),
    new THREE.Color('#ffffff'),
    new THREE.Color('#dfc4ff'),
  ]

  for (let i = 0; i < count; i += 1) {
    const radius = 22.0 + Math.random() * 64.0
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.cos(phi)
    positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)

    palette[Math.floor(Math.random() * palette.length)].toArray(colors, i * 3)
    sizes[i] = 2.4 + Math.random() * 3.2
    phases[i] = Math.random() * Math.PI * 2
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
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      attribute float aSize;
      attribute float aPhase;
      attribute vec3 color;
      varying vec3 vColor;
      varying float vTwinkle;
      uniform float uTime;

      void main() {
        vColor = color;
        vTwinkle = 0.7 + sin(uTime * 0.75 + aPhase) * 0.3;
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = clamp(aSize * vTwinkle * (140.0 / -viewPosition.z), 1.0, 12.0);
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vTwinkle;

      void main() {
        float dist = length(gl_PointCoord - 0.5);
        if (dist > 0.5) discard;
        float alpha = (1.0 - smoothstep(0.12, 0.5, dist)) * vTwinkle * 0.5;
        gl_FragColor = vec4(vColor, alpha);
      }
    `,
  })

  return new THREE.Points(geometry, material)
}

// Scene Factory
export function createPulsarScene(container, initialParams = {}) {
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2('#040510', 0.016)

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 180)
  camera.position.set(0, 1.2, 11.6)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor('#040510', 1)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  container.appendChild(renderer.domElement)

  // Top-level pulsar assembly
  const pulsarSystem = new THREE.Group()
  // Tilt the system's rotation axis by ~22 deg for optimal 3D perspective
  pulsarSystem.rotation.x = 0.38
  pulsarSystem.rotation.z = -0.16
  scene.add(pulsarSystem)

  // Rotating body (rotates around its local Y-axis)
  const rotatingBody = new THREE.Group()
  pulsarSystem.add(rotatingBody)

  // 1. Neutron Star Core
  const coreGeometry = new THREE.SphereGeometry(1.15, 64, 48)
  const coreMaterial = createCoreShaderMaterial()
  const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial)
  rotatingBody.add(coreMesh)

  // 2. Magnetic Assembly (inclined by Obliquity angle alpha = 37 deg)
  const magneticAssembly = new THREE.Group()
  magneticAssembly.rotation.z = 0.64 // ~36.7 degrees obliquity
  rotatingBody.add(magneticAssembly)

  // 3. Relativistic Polar Beams (Dual Cones along the magnetic axis)
  const beamMaterial = createBeamShaderMaterial(initialParams)

  // North polar cone
  const coneGeometryNorth = new THREE.CylinderGeometry(2.4, 0.35, 9.8, 36, 1, true)
  coneGeometryNorth.translate(0, 4.9 + 1.15, 0) // Shift outward so base starts at stellar surface
  const northBeam = new THREE.Mesh(coneGeometryNorth, beamMaterial)
  magneticAssembly.add(northBeam)

  // South polar cone
  const coneGeometrySouth = new THREE.CylinderGeometry(0.35, 2.4, 9.8, 36, 1, true)
  coneGeometrySouth.translate(0, -(4.9 + 1.15), 0)
  const southBeam = new THREE.Mesh(coneGeometrySouth, beamMaterial)
  magneticAssembly.add(southBeam)

  // 4. Dipolar Magnetic Field Lines
  const dipoleGeometry = createDipoleFieldGeometry()
  const dipoleMaterial = createDipoleFieldMaterial(initialParams)
  const dipoleLines = new THREE.LineSegments(dipoleGeometry, dipoleMaterial)
  magneticAssembly.add(dipoleLines)

  // 5. Magnetospheric Synchrotron Plasma Torus
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const plasmaCount = isMobile ? 6000 : 12000
  const plasmaTorus = createMagnetosphericPlasma(plasmaCount, initialParams)
  pulsarSystem.add(plasmaTorus)

  // 6. Distant Starfield
  const distantStars = createDistantStars()
  scene.add(distantStars)

  // Camera & Pointer interaction
  const pointer = new THREE.Vector2(0, 0)
  const target = new THREE.Vector2(0, 0)
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

  // State
  let spinVelocity = initialParams.spinVelocity ?? 1.0
  const startedAt = performance.now()
  let frameId

  // Vector scratchpads to avoid per-frame GC
  const magneticAxisWorld = new THREE.Vector3()
  const viewVector = new THREE.Vector3()
  const corePosWorld = new THREE.Vector3()
  const tempQuat = new THREE.Quaternion()

  function animate() {
    const elapsed = (performance.now() - startedAt) / 1000

    // Damped pointer parallax
    pointer.lerp(target, 0.032)

    // Pulsar rotation: spin around spin axis
    rotatingBody.rotation.y = elapsed * 3.8 * spinVelocity

    // Compute magnetic axis alignment with camera for authentic lighthouse flash
    magneticAssembly.getWorldDirection(magneticAxisWorld)
    // The beams are aligned with the local Y-axis of magneticAssembly
    magneticAxisWorld.set(0, 1, 0).applyQuaternion(magneticAssembly.getWorldQuaternion(tempQuat))

    viewVector.subVectors(camera.position, coreMesh.getWorldPosition(corePosWorld)).normalize()
    const alignment = Math.abs(magneticAxisWorld.dot(viewVector))

    // Sharp non-linear peak when beam sweeps across line of sight
    const collimation = beamMaterial.uniforms.uBeamCollimation.value
    const pulseFactor = Math.pow(alignment, 8.0 * collimation)

    // Update GLSL uniforms
    beamMaterial.uniforms.uTime.value = elapsed
    beamMaterial.uniforms.uObserverPulse.value = pulseFactor
    coreMaterial.uniforms.uTime.value = elapsed
    coreMaterial.uniforms.uObserverPulse.value = pulseFactor
    dipoleMaterial.uniforms.uTime.value = elapsed
    plasmaTorus.material.uniforms.uTime.value = elapsed
    distantStars.material.uniforms.uTime.value = elapsed

    // Camera parallax
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.72, 0.02)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1.2 - pointer.y * 0.48, 0.02)
    camera.lookAt(0, 0, 0)

    // Subtle systemic oscillation
    pulsarSystem.position.y = Math.sin(elapsed * 0.35) * 0.06
    distantStars.rotation.y = elapsed * 0.005

    renderer.render(scene, camera)
    frameId = requestAnimationFrame(animate)
  }
  animate()

  function updateParams(params) {
    if (!params) return
    if (params.spinVelocity !== undefined) {
      spinVelocity = params.spinVelocity
      plasmaTorus.material.uniforms.uSpinVelocity.value = params.spinVelocity
    }
    if (params.magneticFlux !== undefined) {
      beamMaterial.uniforms.uMagneticFlux.value = params.magneticFlux
      dipoleMaterial.uniforms.uMagneticFlux.value = params.magneticFlux
    }
    if (params.beamCollimation !== undefined) {
      beamMaterial.uniforms.uBeamCollimation.value = params.beamCollimation
    }
    if (params.plasmaDensity !== undefined) {
      plasmaTorus.material.uniforms.uPlasmaDensity.value = params.plasmaDensity
    }
  }

  const dispose = () => {
    cancelAnimationFrame(frameId)
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('resize', resize)

    coreGeometry.dispose()
    coreMaterial.dispose()

    coneGeometryNorth.dispose()
    coneGeometrySouth.dispose()
    beamMaterial.dispose()

    dipoleGeometry.dispose()
    dipoleMaterial.dispose()

    plasmaTorus.geometry.dispose()
    plasmaTorus.material.dispose()

    distantStars.geometry.dispose()
    distantStars.material.dispose()

    renderer.dispose()
    renderer.domElement.remove()
  }

  return { dispose, updateParams }
}
