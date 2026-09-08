import * as THREE from 'three'

function createGalaxyParticles(count, initialParams = {}) {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  const brightness = new Float32Array(count)
  const phases = new Float32Array(count)
  const radii = new Float32Array(count)

  const coreColor = new THREE.Color('#fff8ed')
  const bulgeColor = new THREE.Color('#eed4a8')
  const armColor = new THREE.Color('#74aeff')
  const rimColor = new THREE.Color('#345892')
  const color = new THREE.Color()

  const arms = 4
  const maxRadius = 8.6

  for (let index = 0; index < count; index += 1) {
    // Exponent below 2 concentrates stars toward the central bulge
    const radius = maxRadius * Math.pow(Math.random(), 1.65)
    const isArmStar = Math.random() > 0.22

    let angle
    let distance
    if (isArmStar) {
      const arm = Math.floor(Math.random() * arms)
      const armOffset = (arm / arms) * Math.PI * 2
      // Logarithmic spiral progression
      const spiralAngle = Math.pow(radius, 0.74) * 1.82 + armOffset
      const spread = (Math.random() - 0.5) * (0.09 + radius * 0.16)
      const radialNoise = (Math.random() - 0.5) * (0.05 + radius * 0.04)
      angle = spiralAngle + spread
      distance = radius + radialNoise
    } else {
      // Inter-arm stellar disk population
      angle = Math.random() * Math.PI * 2
      distance = radius + (Math.random() - 0.5) * 0.18
    }

    // 3D Obate Bulge: thick ellipsoidal center, thinning into a flat disk
    const verticalDispersion = (Math.random() + Math.random() + Math.random() - 1.5) * (2 / 3)
    const bulgeHeight = 0.52 * Math.exp(-radius / 1.7)
    const diskHeight = 0.055 + radius * 0.024
    const y = verticalDispersion * (bulgeHeight + diskHeight)

    positions[index * 3] = Math.cos(angle) * distance
    positions[index * 3 + 1] = y
    positions[index * 3 + 2] = Math.sin(angle) * distance

    // Stellar spectral gradient
    const normRadius = Math.min(radius / maxRadius, 1)
    if (normRadius < 0.28) {
      color.copy(coreColor).lerp(bulgeColor, normRadius / 0.28)
    } else if (normRadius < 0.70) {
      color.copy(bulgeColor).lerp(armColor, (normRadius - 0.28) / 0.42)
    } else {
      color.copy(armColor).lerp(rimColor, (normRadius - 0.70) / 0.30)
    }
    color.offsetHSL(0, 0, (Math.random() - 0.5) * 0.08)
    color.toArray(colors, index * 3)

    sizes[index] = 1.6 + Math.random() * 2.7
    // Intense core luminosity falloff
    brightness[index] = 0.65 + Math.random() * 0.55 + Math.exp(-radius / 1.6) * 0.62
    phases[index] = Math.random() * Math.PI * 2
    radii[index] = radius
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))
  geometry.setAttribute('aBrightness', new THREE.BufferAttribute(brightness, 1))
  geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1))
  geometry.setAttribute('aRadius', new THREE.BufferAttribute(radii, 1))

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uWaveIntensity: { value: initialParams.densityWave ?? 1.0 },
      uStellarDrift: { value: initialParams.stellarDrift ?? 1.0 },
    },
    vertexShader: `
      attribute float aSize;
      attribute float aBrightness;
      attribute float aPhase;
      attribute float aRadius;
      attribute vec3 color;
      uniform float uTime;
      uniform float uWaveIntensity;
      uniform float uStellarDrift;
      varying vec3 vColor;
      varying float vBrightness;
      void main() {
        vec3 animatedPosition = position;
        animatedPosition.y += sin(uTime * 0.14 * (0.3 + 0.7 * uStellarDrift) + aPhase) * (0.010 + aRadius * 0.0028) * uStellarDrift;
        vec4 viewPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
        vColor = color;
        float waveModulation = 0.72 + 0.28 * sin(aRadius * 1.6 - uTime * 0.22) * uWaveIntensity;
        vBrightness = aBrightness * (0.86 + sin(uTime * 0.34 + aPhase) * 0.14) * waveModulation;
        gl_PointSize = min(15.0, aSize * vBrightness * (165.0 / -viewPosition.z) * (0.65 + 0.35 * uWaveIntensity));
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vBrightness;
      void main() {
        float dist = length(gl_PointCoord - 0.5);
        float core = 1.0 - smoothstep(0.0, 0.22, dist);
        float halo = 1.0 - smoothstep(0.12, 0.5, dist);
        float particle = halo * 0.70 + core * 0.30;
        gl_FragColor = vec4(vColor * vBrightness, particle * 0.82);
      }
    `,
  })

  return new THREE.Points(geometry, material)
}

function createDistantStars() {
  const count = 900
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  const phases = new Float32Array(count)
  const palette = [new THREE.Color('#d8e9ff'), new THREE.Color('#87baff'), new THREE.Color('#ffffff'), new THREE.Color('#bca6ff')]

  for (let index = 0; index < count; index += 1) {
    const radius = 24 + Math.random() * 64
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[index * 3 + 1] = radius * Math.cos(phi)
    positions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
    palette[Math.floor(Math.random() * palette.length)].toArray(colors, index * 3)
    sizes[index] = 3.0 + Math.random() * 3.4
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
        vTwinkle = 0.68 + sin(uTime * 0.72 + aPhase) * 0.32;
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = min(12.0, aSize * vTwinkle * (140.0 / -viewPosition.z));
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vTwinkle;
      void main() {
        float dist = length(gl_PointCoord - 0.5);
        float soft = 1.0 - smoothstep(0.18, 0.5, dist);
        gl_FragColor = vec4(vColor, soft * vTwinkle * 0.55);
      }
    `,
  })

  return new THREE.Points(geometry, material)
}

export function createGalaxyScene(container, initialParams = {}) {
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2('#040612', 0.020)

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200)
  camera.position.set(0, 5.6, 13.2)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor('#040612', 1)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  container.appendChild(renderer.domElement)

  let rotationSpeed = initialParams.rotationSpeed ?? 1.0
  let isPaused = Boolean(initialParams.isPaused)

  const particleCount = window.innerWidth < 700 ? 14000 : 30000
  const galaxy = createGalaxyParticles(particleCount, initialParams)
  galaxy.rotation.x = -0.36
  scene.add(galaxy)

  const distantStars = createDistantStars()
  scene.add(distantStars)

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

  let lastTimestamp = performance.now()
  let totalElapsed = 0
  let frameId

  function animate() {
    const now = performance.now()
    const delta = (now - lastTimestamp) / 1000
    lastTimestamp = now

    if (!isPaused) {
      totalElapsed += delta
    }
    const elapsed = totalElapsed

    pointer.lerp(target, 0.025)
    galaxy.material.uniforms.uTime.value = elapsed
    distantStars.material.uniforms.uTime.value = elapsed

    galaxy.rotation.y = elapsed * 0.016 * rotationSpeed + pointer.x * 0.075
    galaxy.rotation.z = THREE.MathUtils.lerp(galaxy.rotation.z, -pointer.y * 0.06, 0.018)
    galaxy.position.y = Math.sin(elapsed * 0.17 * rotationSpeed) * 0.13

    distantStars.rotation.y = elapsed * 0.002 + pointer.x * 0.012
    distantStars.rotation.x = pointer.y * 0.008

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.72, 0.018)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 5.6 - pointer.y * 0.42, 0.018)
    camera.lookAt(0, 0, 0)

    renderer.render(scene, camera)
    frameId = requestAnimationFrame(animate)
  }
  animate()

  function updateParams(params) {
    if (!params) return
    if (params.rotationSpeed !== undefined) {
      rotationSpeed = params.rotationSpeed
    }
    if (params.densityWave !== undefined) {
      galaxy.material.uniforms.uWaveIntensity.value = params.densityWave
    }
    if (params.stellarDrift !== undefined) {
      galaxy.material.uniforms.uStellarDrift.value = params.stellarDrift
    }
    if (params.isPaused !== undefined) {
      isPaused = Boolean(params.isPaused)
    }
  }

  const dispose = () => {
    cancelAnimationFrame(frameId)
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('resize', resize)
    galaxy.geometry.dispose()
    galaxy.material.dispose()
    distantStars.geometry.dispose()
    distantStars.material.dispose()
    renderer.dispose()
    renderer.domElement.remove()
  }

  return { dispose, updateParams }
}

