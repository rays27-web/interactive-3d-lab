import * as THREE from 'three'
import { PLANETS_DATA } from '../data/planets'

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

export function createPlanetScene(container, initialParams = {}, callbacks = {}) {
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
  let currentPlanetData = PLANETS_DATA.find((p) => p.id === 'earth') || PLANETS_DATA[2]

  // Planet Sphere Mesh
  const planetMaterial = new THREE.MeshStandardMaterial({
    color: currentPlanetData.surfaceColorHex || '#286ea3',
    roughness: 0.55,
    metalness: 0.1,
  })

  const planetGeometry = new THREE.SphereGeometry(2.15, 64, 48)
  const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial)

  // Planetary axial tilt group: preserves axial tilt while rotating around local polar axis
  const planetTiltGroup = new THREE.Group()
  planetTiltGroup.rotation.z = (currentPlanetData.axialTiltDeg * Math.PI) / 180
  planetTiltGroup.add(planetMesh)
  world.add(planetTiltGroup)

  // Atmospheric Fresnel Rim
  const atmosphereUniforms = {
    uTime: { value: 0 },
    uPointer: { value: new THREE.Vector2() },
    uInnerColor: { value: new THREE.Color(currentPlanetData.color || '#4ab7ff') },
    uOuterColor: { value: new THREE.Color('#7c72ff') },
    uAtmosphereIntensity: { value: initialParams.atmosphereIntensity ?? 1.0 },
  }
  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(2.31, 64, 64),
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
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

  // Phase 29: Interactive Free-Fall & Spring Scale Apparatus
  const apparatusGroup = new THREE.Group()
  apparatusGroup.position.set(3.2, -0.4, 0)
  scene.add(apparatusGroup)

  // Spring Scale Base Pad
  const scaleBaseGeo = new THREE.CylinderGeometry(0.75, 0.85, 0.15, 32)
  const scaleBaseMat = new THREE.MeshStandardMaterial({ color: '#16284e', roughness: 0.4, metalness: 0.8 })
  const scaleBase = new THREE.Mesh(scaleBaseGeo, scaleBaseMat)
  scaleBase.position.y = -1.2
  apparatusGroup.add(scaleBase)

  // Spring Cylinder
  const springGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.45, 16)
  const springMat = new THREE.MeshStandardMaterial({ color: '#73ffd3', roughness: 0.3, metalness: 0.6 })
  const springMesh = new THREE.Mesh(springGeo, springMat)
  springMesh.position.y = -0.95
  apparatusGroup.add(springMesh)

  // Falling Test Mass Cube
  let objectMass = 70.0
  const testObjectGeo = new THREE.BoxGeometry(0.45, 0.45, 0.45)
  const testObjectMat = new THREE.MeshStandardMaterial({ color: '#ffb450', roughness: 0.3, metalness: 0.7 })
  const testObjectMesh = new THREE.Mesh(testObjectGeo, testObjectMat)
  testObjectMesh.position.y = 1.6
  apparatusGroup.add(testObjectMesh)

  // Downward Gravitational Force Vector Arrow (W = mg)
  const arrowDir = new THREE.Vector3(0, -1, 0)
  const arrowOrigin = new THREE.Vector3(0, 0, 0)
  const weightArrow = new THREE.ArrowHelper(arrowDir, arrowOrigin, 1.2, 0xff5533, 0.25, 0.15)
  testObjectMesh.add(weightArrow)

  // Free fall physics state
  let isDropping = false
  let dropVelocityY = 0
  let dropPosY = 1.6
  let surfaceAcceleration = currentPlanetData.surfaceGravityMs2 // e.g. 9.81
  const restingHeight = -0.65

  function triggerDrop(g = currentPlanetData.surfaceGravityMs2) {
    surfaceAcceleration = g
    dropPosY = 1.6
    dropVelocityY = 0
    isDropping = true
  }

  function setPlanet(planetId) {
    const p = PLANETS_DATA.find((item) => item.id === planetId)
    if (!p) return
    currentPlanetData = p
    surfaceAcceleration = p.surfaceGravityMs2

    // Update 3D appearance
    planetMaterial.color.set(p.surfaceColorHex || p.color)
    planetTiltGroup.rotation.z = (p.axialTiltDeg * Math.PI) / 180

    atmosphereUniforms.uInnerColor.value.set(p.color)
    atmosphere.visible = p.id !== 'mercury' // Mercury has no significant atmosphere

    // Scale weight vector arrow proportionally to local surface gravity
    const lengthNorm = Math.min(2.5, Math.max(0.4, (p.surfaceGravityMs2 / 9.81) * 1.2))
    weightArrow.setLength(lengthNorm, 0.25, 0.15)

    // Trigger visual drop on planet change to demonstrate local gravity
    triggerDrop(p.surfaceGravityMs2)
  }

  // Lighting
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
  let lastTime = performance.now()
  let frameId

  function animate() {
    const now = performance.now()
    const dt = Math.min(0.05, (now - lastTime) / 1000)
    lastTime = now
    const elapsed = (now - startedAt) / 1000

    pointer.lerp(target, 0.028)
    atmosphereUniforms.uTime.value = elapsed
    atmosphereUniforms.uPointer.value.copy(pointer)

    planetMesh.rotation.y += 0.00125 * rotationSpeed
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.45, 0.02)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.35 - pointer.y * 0.28, 0.02)
    camera.lookAt(0.5, 0, 0)

    // Free fall physics simulation
    if (isDropping) {
      // Normalized educational acceleration: dt * g * scaleFactor
      dropVelocityY -= surfaceAcceleration * dt * 0.42
      dropPosY += dropVelocityY * dt
      if (dropPosY <= restingHeight) {
        dropPosY = restingHeight
        // Small inelastic rebound
        if (Math.abs(dropVelocityY) > 0.4) {
          dropVelocityY = -dropVelocityY * 0.25
        } else {
          dropVelocityY = 0
          isDropping = false
        }
      }
    }
    testObjectMesh.position.y = dropPosY

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
    if (params.selectedPlanetId !== undefined) {
      setPlanet(params.selectedPlanetId)
    }
    if (params.objectMass !== undefined) {
      objectMass = params.objectMass
      const s = Math.min(1.4, Math.max(0.6, Math.cbrt(objectMass / 70)))
      testObjectMesh.scale.setScalar(s)
    }
  }

  const dispose = () => {
    cancelAnimationFrame(frameId)
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('resize', resize)
    planetGeometry.dispose()
    planetMaterial.dispose()
    atmosphere.geometry.dispose()
    atmosphere.material.dispose()
    scaleBaseGeo.dispose()
    scaleBaseMat.dispose()
    springGeo.dispose()
    springMat.dispose()
    testObjectGeo.dispose()
    testObjectMat.dispose()
    ;[farStars, middleStars, nearStars].forEach((layer) => {
      layer.geometry.dispose()
      layer.material.dispose()
    })
    renderer.dispose()
    renderer.domElement.remove()
  }

  // Expose API for React components
  const sceneApi = {
    selectPlanet: setPlanet,
    triggerDrop,
    setObjectMass: (m) => {
      objectMass = m
      const s = Math.min(1.4, Math.max(0.6, Math.cbrt(m / 70)))
      testObjectMesh.scale.setScalar(s)
    },
  }

  return {
    dispose,
    updateParams,
    sceneApi,
    selectPlanet: setPlanet,
    triggerDrop,
    setObjectMass: sceneApi.setObjectMass,
  }
}
