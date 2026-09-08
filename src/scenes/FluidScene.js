import * as THREE from 'three'

// Analytical divergence-free curl velocity field shader
function createFluidMaterial(initialParams = {}) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uFlowVelocity: { value: initialParams.flowVelocity ?? 1.0 },
      uVorticityScale: { value: initialParams.vorticityScale ?? 1.0 },
      uViscosity: { value: initialParams.viscosity ?? 1.0 },
      uThermalBuoyancy: { value: initialParams.thermalBuoyancy ?? 1.0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
      uPointerVelocity: { value: new THREE.Vector2(0, 0) },
      uPixelRatio: { value: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1 },
    },
    vertexShader: `
      attribute float aLifetime;
      attribute float aPhase;
      attribute float aScale;
      attribute vec3 aSeed;

      uniform float uTime;
      uniform float uFlowVelocity;
      uniform float uVorticityScale;
      uniform float uViscosity;
      uniform float uThermalBuoyancy;
      uniform vec2 uPointer;
      uniform vec2 uPointerVelocity;
      uniform float uPixelRatio;

      varying vec3 vColor;
      varying float vAlpha;
      varying float vSpeed;

      // Analytical curl of a 3D procedural vector potential Psi(x, y, z, t)
      // Because div(curl(Psi)) = 0 identically, this velocity field is strictly divergence-free.
      vec3 computeCurl(vec3 p, float t, float freq, float visc) {
        vec3 pMod = p * (freq * 0.45);

        // Vector potential Psi components:
        // Psi.x = sin(p.y * 1.3 + t*0.35) * cos(p.z * 1.1) + 0.5 * sin(p.y * 2.7) * visc
        // Psi.y = sin(p.z * 1.4 - t*0.40) * cos(p.x * 1.2) + 0.5 * cos(p.z * 2.5) * visc
        // Psi.z = sin(p.x * 1.2 + t*0.30) * cos(p.y * 1.5) + 0.5 * sin(p.x * 2.8) * visc

        // Exact analytical derivatives dPsi_i / dx_j:
        float dPsiz_dy = -1.5 * sin(pMod.x * 1.2 + t * 0.30) * sin(pMod.y * 1.5);
        float dPsiy_dz = 1.4 * cos(pMod.z * 1.4 - t * 0.40) * cos(pMod.x * 1.2) - 1.25 * sin(pMod.z * 2.5) * visc;
        float vx = dPsiz_dy - dPsiy_dz;

        float dPsix_dz = -1.1 * sin(pMod.y * 1.3 + t * 0.35) * sin(pMod.z * 1.1);
        float dPsiz_dx = 1.2 * cos(pMod.x * 1.2 + t * 0.30) * cos(pMod.y * 1.5) + 1.4 * cos(pMod.x * 2.8) * visc;
        float vy = dPsix_dz - dPsiz_dx;

        float dPsiy_dx = -1.2 * sin(pMod.z * 1.4 - t * 0.40) * sin(pMod.x * 1.2);
        float dPsix_dy = 1.3 * cos(pMod.y * 1.3 + t * 0.35) * cos(pMod.z * 1.1) + 1.35 * cos(pMod.y * 2.7) * visc;
        float vz = dPsiy_dx - dPsix_dy;

        return vec3(vx, vy, vz);
      }

      void main() {
        // Compute cyclic particle age along fluid streamline
        float simTime = uTime * 0.42 * uFlowVelocity;
        float localAge = mod(simTime + aPhase, aLifetime);
        float progress = localAge / aLifetime;

        // Initialize particle from seed origin
        vec3 pos = aSeed;

        // Multi-step Euler streamline integration on the GPU
        float dt = localAge * 0.48;
        float viscNorm = clamp(1.0 / max(uViscosity, 0.2), 0.3, 2.2);

        // Step 1: Base advection
        vec3 v1 = computeCurl(pos, simTime * 0.8, uVorticityScale, viscNorm);
        pos += v1 * dt;

        // Thermal Buoyancy (Boussinesq approximation: central warm core ascends)
        float coreProximity = exp(-length(pos.xz) * 0.4);
        pos.y += (coreProximity * 1.8 - 0.45) * uThermalBuoyancy * localAge * 0.38;

        // Step 2: Intermediate refinement
        vec3 v2 = computeCurl(pos, simTime * 1.1 + 1.4, uVorticityScale * 1.3, viscNorm);
        pos += v2 * (dt * 0.42);

        // Kinetic pointer vortex impeller injection
        vec3 pointer3D = vec3(uPointer.x * 3.8, uPointer.y * 2.6, 0.0);
        vec3 toPointer = pos - pointer3D;
        float distToPointer = length(toPointer);
        float pointerInfluence = exp(-distToPointer * distToPointer * 0.35);

        // Induced vortex torque: v_torque = v_pointer x r_norm
        vec3 torque = cross(vec3(uPointerVelocity * 4.2, 0.0), toPointer / max(distToPointer, 0.2));
        pos += torque * pointerInfluence * 0.65;

        // Velocity magnitude for chromatic emission mapping
        float speed = length(v1 + v2) * uFlowVelocity;
        vSpeed = speed;

        // Astrochemical spectral gradient:
        // High-energy shear: Ionized Oxygen [O III] cyan (500.7 nm)
        // Mid-stream filament: Hydrogen-alpha H-alpha crimson (656.3 nm)
        // Dissipative margins: Neutral interstellar dust in deep violet
        vec3 colorOxygen = vec3(0.24, 0.96, 0.82);   // Ionized [O III] cyan
        vec3 colorHAlpha = vec3(0.96, 0.22, 0.48);   // H-alpha crimson/pink
        vec3 colorCore   = vec3(1.00, 0.88, 0.72);   // Hot core thermal emission
        vec3 colorDust   = vec3(0.22, 0.14, 0.52);   // Diffuse interstellar violet

        float tParam = clamp(speed * 0.45 + coreProximity * 0.35, 0.0, 1.0);
        vec3 emission;
        if (tParam > 0.65) {
          emission = mix(colorOxygen, colorCore, (tParam - 0.65) / 0.35);
        } else if (tParam > 0.30) {
          emission = mix(colorHAlpha, colorOxygen, (tParam - 0.30) / 0.35);
        } else {
          emission = mix(colorDust, colorHAlpha, tParam / 0.30);
        }
        vColor = emission;

        // Life cycle alpha: smooth emergence, sustained luminance, gentle dissipation
        float fadeIn = smoothstep(0.0, 0.18, progress);
        float fadeOut = 1.0 - smoothstep(0.72, 1.0, progress);
        vAlpha = fadeIn * fadeOut * (0.35 + 0.65 * clamp(speed * 0.5, 0.0, 1.0));

        vec4 viewPosition = modelViewMatrix * vec4(pos, 1.0);
        // Particle size attenuated by camera distance and screen pixel ratio
        float pointScale = aScale * uPixelRatio * (175.0 / -viewPosition.z);
        gl_PointSize = clamp(pointScale * (0.85 + 0.35 * speed), 1.5, 24.0);
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;
      varying float vSpeed;

      void main() {
        // Volumetric soft Gaussian radial falloff
        float dist = length(gl_PointCoord - 0.5);
        if (dist > 0.5) discard;

        float core = exp(-dist * dist * 14.0);
        float halo = 1.0 - smoothstep(0.08, 0.5, dist);
        float intensity = core * 0.65 + halo * 0.35;

        gl_FragColor = vec4(vColor, intensity * vAlpha * 0.85);
      }
    `,
  })
}

function createAmbientDust() {
  const count = 750
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  const phases = new Float32Array(count)

  const palette = [
    new THREE.Color('#38426d'),
    new THREE.Color('#2d567c'),
    new THREE.Color('#583f7a'),
    new THREE.Color('#6ba8cc'),
  ]

  for (let i = 0; i < count; i += 1) {
    const radius = 6.0 + Math.random() * 22.0
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.cos(phi) * 0.75
    positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)

    palette[Math.floor(Math.random() * palette.length)].toArray(colors, i * 3)
    sizes[i] = 2.0 + Math.random() * 3.5
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
        vTwinkle = 0.65 + sin(uTime * 0.6 + aPhase) * 0.35;
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = clamp(aSize * vTwinkle * (140.0 / -viewPosition.z), 1.0, 10.0);
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vTwinkle;
      void main() {
        float dist = length(gl_PointCoord - 0.5);
        if (dist > 0.5) discard;
        float alpha = (1.0 - smoothstep(0.12, 0.5, dist)) * vTwinkle * 0.42;
        gl_FragColor = vec4(vColor, alpha);
      }
    `,
  })

  return new THREE.Points(geometry, material)
}

export function createFluidScene(container, initialParams = {}) {
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2('#040510', 0.018)

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 150)
  camera.position.set(0, 0.6, 9.4)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor('#040510', 1)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  container.appendChild(renderer.domElement)

  // Fluid particle generation
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const particleCount = isMobile ? 14000 : 30000

  const positions = new Float32Array(particleCount * 3)
  const seeds = new Float32Array(particleCount * 3)
  const lifetimes = new Float32Array(particleCount)
  const phases = new Float32Array(particleCount)
  const scales = new Float32Array(particleCount)

  for (let i = 0; i < particleCount; i += 1) {
    // Clustered initial distribution: cylindrical jet core with radial Gaussian spread
    const radius = Math.pow(Math.random(), 1.5) * 2.2
    const theta = Math.random() * Math.PI * 2
    const height = (Math.random() - 0.5) * 3.4

    const x = Math.cos(theta) * radius
    const y = height
    const z = Math.sin(theta) * radius

    // Base position for Three.js bounding box
    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z

    // Seed origin passed to vertex shader
    seeds[i * 3] = x
    seeds[i * 3 + 1] = y
    seeds[i * 3 + 2] = z

    lifetimes[i] = 3.5 + Math.random() * 4.2
    phases[i] = Math.random() * 12.0
    scales[i] = 2.2 + Math.random() * 3.4
  }

  const fluidGeometry = new THREE.BufferGeometry()
  fluidGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  fluidGeometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 3))
  fluidGeometry.setAttribute('aLifetime', new THREE.BufferAttribute(lifetimes, 1))
  fluidGeometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1))
  fluidGeometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1))

  const fluidMaterial = createFluidMaterial(initialParams)
  const fluidParticles = new THREE.Points(fluidGeometry, fluidMaterial)
  scene.add(fluidParticles)

  const ambientDust = createAmbientDust()
  scene.add(ambientDust)

  // Interaction: smoothed pointer tracking and instantaneous velocity calculation
  const pointer = new THREE.Vector2(0, 0)
  const target = new THREE.Vector2(0, 0)
  const lastPointer = new THREE.Vector2(0, 0)
  const pointerVelocity = new THREE.Vector2(0, 0)

  function onPointerMove(event) {
    target.x = (event.clientX / window.innerWidth - 0.5) * 2
    target.y = -(event.clientY / window.innerHeight - 0.5) * 2
  }
  window.addEventListener('pointermove', onPointerMove, { passive: true })

  function resize() {
    const { clientWidth: width, clientHeight: height } = container
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
    fluidMaterial.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2)
  }
  window.addEventListener('resize', resize)
  resize()

  const startedAt = performance.now()
  let lastTime = startedAt
  let frameId

  function animate() {
    const now = performance.now()
    const elapsed = (now - startedAt) / 1000
    const delta = Math.min((now - lastTime) / 1000, 0.1)
    lastTime = now

    // Smooth pointer lerp
    pointer.lerp(target, 0.04)

    // Calculate pointer velocity for kinetic impeller torque
    if (delta > 0.001) {
      pointerVelocity.x = (pointer.x - lastPointer.x) / delta
      pointerVelocity.y = (pointer.y - lastPointer.y) / delta
      lastPointer.copy(pointer)
    }

    // Update uniforms
    fluidMaterial.uniforms.uTime.value = elapsed
    fluidMaterial.uniforms.uPointer.value.copy(pointer)
    fluidMaterial.uniforms.uPointerVelocity.value.lerp(pointerVelocity, 0.12)
    ambientDust.material.uniforms.uTime.value = elapsed

    // Cinematic camera parallax and gentle orbital drift
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.52, 0.02)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.6 + pointer.y * 0.38, 0.02)
    camera.lookAt(0, 0, 0)

    fluidParticles.rotation.y = elapsed * 0.035 + pointer.x * 0.08
    fluidParticles.rotation.x = Math.sin(elapsed * 0.12) * 0.04 - pointer.y * 0.06
    ambientDust.rotation.y = -elapsed * 0.012

    renderer.render(scene, camera)
    frameId = requestAnimationFrame(animate)
  }
  animate()

  function updateParams(params) {
    if (!params) return
    if (params.flowVelocity !== undefined) {
      fluidMaterial.uniforms.uFlowVelocity.value = params.flowVelocity
    }
    if (params.vorticityScale !== undefined) {
      fluidMaterial.uniforms.uVorticityScale.value = params.vorticityScale
    }
    if (params.viscosity !== undefined) {
      fluidMaterial.uniforms.uViscosity.value = params.viscosity
    }
    if (params.thermalBuoyancy !== undefined) {
      fluidMaterial.uniforms.uThermalBuoyancy.value = params.thermalBuoyancy
    }
  }

  const dispose = () => {
    cancelAnimationFrame(frameId)
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('resize', resize)

    fluidGeometry.dispose()
    fluidMaterial.dispose()

    ambientDust.geometry.dispose()
    ambientDust.material.dispose()

    renderer.dispose()
    renderer.domElement.remove()
  }

  return { dispose, updateParams }
}
