import * as THREE from 'three'

const STAR_COLORS = ['#d8e9ff', '#87baff', '#ffffff', '#bca6ff']

function createStarLayer({ count, minRadius, maxRadius, size, opacity }) {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  const phases = new Float32Array(count)
  const palette = STAR_COLORS.map((color) => new THREE.Color(color))

  for (let index = 0; index < count; index += 1) {
    const radius = minRadius + Math.random() * (maxRadius - minRadius)
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[index * 3 + 1] = radius * Math.cos(phi)
    positions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
    palette[Math.floor(Math.random() * palette.length)].toArray(colors, index * 3)
    sizes[index] = size * (0.55 + Math.random() * 0.9)
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
    uniforms: { uTime: { value: 0 }, uOpacity: { value: opacity } },
    vertexShader: `
      attribute float aSize;
      attribute float aPhase;
      attribute vec3 color;
      varying vec3 vColor;
      varying float vTwinkle;
      uniform float uTime;
      void main() {
        vColor = color;
        vTwinkle = 0.72 + sin(uTime * 0.8 + aPhase) * 0.28;
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        // Cap close particles so foreground depth never becomes visual noise.
        gl_PointSize = min(14.0, aSize * vTwinkle * (150.0 / -viewPosition.z));
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vTwinkle;
      uniform float uOpacity;
      void main() {
        float distanceFromCenter = length(gl_PointCoord - 0.5);
        float softPoint = 1.0 - smoothstep(0.22, 0.5, distanceFromCenter);
        gl_FragColor = vec4(vColor, softPoint * vTwinkle * uOpacity);
      }
    `,
  })

  return new THREE.Points(geometry, material)
}

export function createPlanetScene(container, initialParams = {}) {
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2('#050614', 0.014)

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200)
  camera.position.set(0, 0.35, 10)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor('#050614', 1)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  container.appendChild(renderer.domElement)

  const world = new THREE.Group()
  scene.add(world)

  let rotationSpeed = initialParams.rotationSpeed ?? 1.0

  // Keep physical lighting, then add a small procedural color/displacement layer.
  const surfaceUniforms = {
    uTime: { value: 0 },
    uDeformationIntensity: { value: initialParams.surfaceDeformation ?? 1.0 },
  }
  const planetMaterial = new THREE.MeshPhysicalMaterial({
    color: '#4389ce', roughness: 0.42, metalness: 0.12,
    clearcoat: 0.48, clearcoatRoughness: 0.34,
  })
  planetMaterial.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = surfaceUniforms.uTime
    shader.uniforms.uDeformationIntensity = surfaceUniforms.uDeformationIntensity
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;\nuniform float uDeformationIntensity;\nvarying float vSurfacePattern;')
      .replace('#include <begin_vertex>', `
        #include <begin_vertex>
        float broadWave = sin(position.x * 2.1 + uTime * 0.16) * sin(position.y * 2.7 - uTime * 0.11);
        float fineWave = sin(position.z * 7.0 + position.x * 3.0);
        vSurfacePattern = (broadWave * 0.7 + fineWave * 0.3) * uDeformationIntensity;
        transformed += normal * vSurfacePattern * 0.026;
      `)
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vSurfacePattern;')
      .replace('#include <color_fragment>', `
        #include <color_fragment>
        vec3 deepBlue = vec3(0.025, 0.12, 0.30);
        vec3 electricBlue = vec3(0.12, 0.56, 0.94);
        float colorBand = smoothstep(-0.7, 0.72, vSurfacePattern);
        diffuseColor.rgb = mix(deepBlue, electricBlue, colorBand);
      `)
  }
  planetMaterial.customProgramCacheKey = () => 'interactive-3d-lab-procedural-planet'

  const planet = new THREE.Mesh(new THREE.IcosahedronGeometry(2.15, 6), planetMaterial)
  planet.rotation.z = 0.28
  world.add(planet)

  const atmosphereUniforms = {
    uTime: { value: 0 },
    uPointer: { value: new THREE.Vector2() },
    uInnerColor: { value: new THREE.Color('#4ab7ff') },
    uOuterColor: { value: new THREE.Color('#7c72ff') },
    uAtmosphereIntensity: { value: initialParams.atmosphereIntensity ?? 1.0 },
  }
  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(2.31, 96, 96),
    new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.BackSide, blending: THREE.AdditiveBlending,
      uniforms: atmosphereUniforms,
      vertexShader: `
        varying vec3 vNormalDirection;
        varying vec3 vViewDirection;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vNormalDirection = normalize(mat3(modelMatrix) * normal);
          vViewDirection = normalize(cameraPosition - worldPosition.xyz);
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uPointer;
        uniform vec3 uInnerColor;
        uniform vec3 uOuterColor;
        uniform float uAtmosphereIntensity;
        varying vec3 vNormalDirection;
        varying vec3 vViewDirection;
        void main() {
          // Fresnel: edge-on surfaces receive a stronger rim than front-facing surfaces.
          float facing = max(dot(vNormalDirection, vViewDirection), 0.0);
          float fresnel = pow(1.0 - facing, 2.65);
          float breathing = 0.94 + sin(uTime * 0.55 + uPointer.x) * 0.06;
          vec3 atmosphereColor = mix(uInnerColor, uOuterColor, fresnel);
          gl_FragColor = vec4(atmosphereColor, fresnel * 0.82 * breathing * uAtmosphereIntensity);
        }
      `,
    }),
  )
  world.add(atmosphere)

  const keyLight = new THREE.DirectionalLight('#d9edff', 4.4)
  keyLight.position.set(-4, 4, 5)
  const rimLight = new THREE.PointLight('#4388ff', 24, 18, 2)
  rimLight.position.set(4, -1, -3)
  const fillLight = new THREE.PointLight('#b54dff', 12, 14, 2)
  fillLight.position.set(-5, -3, 2)
  scene.add(keyLight, rimLight, fillLight)

  const farStars = createStarLayer({ count: 1050, minRadius: 30, maxRadius: 78, size: 3.2, opacity: 0.56 })
  const middleStars = createStarLayer({ count: 420, minRadius: 13, maxRadius: 38, size: 5.5, opacity: 0.7 })
  const nearStars = createStarLayer({ count: 70, minRadius: 5.5, maxRadius: 18, size: 8.5, opacity: 0.32 })
  scene.add(farStars, middleStars, nearStars)

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
    pointer.lerp(target, 0.028)
    surfaceUniforms.uTime.value = elapsed * rotationSpeed
    atmosphereUniforms.uTime.value = elapsed
    atmosphereUniforms.uPointer.value.copy(pointer)

    world.rotation.y += 0.00125 * rotationSpeed
    world.rotation.x = THREE.MathUtils.lerp(world.rotation.x, pointer.y * 0.09, 0.018)
    world.rotation.z = THREE.MathUtils.lerp(world.rotation.z, 0.28 - pointer.x * 0.09, 0.018)
    world.position.y = Math.sin(elapsed * 0.52 * rotationSpeed) * 0.12
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.56, 0.02)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.35 - pointer.y * 0.34, 0.02)
    camera.lookAt(0, 0, 0)

    farStars.rotation.y = elapsed * 0.004 + pointer.x * 0.012
    farStars.rotation.x = pointer.y * 0.008
    middleStars.rotation.y = -elapsed * 0.009 + pointer.x * 0.028
    middleStars.rotation.x = pointer.y * 0.018
    nearStars.rotation.y = elapsed * 0.017 + pointer.x * 0.05
    nearStars.rotation.x = pointer.y * 0.032
    ;[farStars, middleStars, nearStars].forEach((layer) => { layer.material.uniforms.uTime.value = elapsed })

    renderer.render(scene, camera)
    frameId = requestAnimationFrame(animate)
  }
  animate()

  function updateParams(params) {
    if (!params) return
    if (params.rotationSpeed !== undefined) {
      rotationSpeed = params.rotationSpeed
    }
    if (params.atmosphereIntensity !== undefined) {
      atmosphereUniforms.uAtmosphereIntensity.value = params.atmosphereIntensity
    }
    if (params.surfaceDeformation !== undefined) {
      surfaceUniforms.uDeformationIntensity.value = params.surfaceDeformation
    }
  }

  const dispose = () => {
    cancelAnimationFrame(frameId)
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('resize', resize)
    planet.geometry.dispose()
    planetMaterial.dispose()
    atmosphere.geometry.dispose()
    atmosphere.material.dispose()
    ;[farStars, middleStars, nearStars].forEach((layer) => {
      layer.geometry.dispose()
      layer.material.dispose()
    })
    renderer.dispose()
    renderer.domElement.remove()
  }

  return { dispose, updateParams }
}
