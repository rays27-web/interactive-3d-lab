import * as THREE from 'three'

// Astronomical reference constants and visualization scales
export const CELESTIAL_BODIES = [
  {
    id: 'sun',
    name: 'SUN',
    type: 'G-Type Main-Sequence Star',
    color: '#ffb732',
    emissiveColor: '#ff7700',
    visRadius: 2.4,
    orbitRadius: 0,
    orbitPeriod: 0,
    orbitalSpeed: 0,
    mass: 1000.0,
    realDistAU: 0,
    realPeriodYr: '—',
    realSpeedKmS: 0,
    realMassKg: '1.989 × 10³⁰ kg (333,000 M⊕)',
    realRadiusKm: '696,340 km (109 R⊕)',
    surfaceGravity: '274.0 m/s² (28.0 g)',
    moons: 0,
    tiltDeg: 7.25,
  },
  {
    id: 'mercury',
    name: 'MERCURY',
    type: 'Terrestrial Planet',
    color: '#9e968d',
    visRadius: 0.34,
    orbitRadius: 5.6,
    orbitPeriod: 0.24,
    orbitalSpeed: 13.36,
    mass: 0.055,
    realDistAU: 0.39,
    realPeriodYr: '88.0 days (0.24 yr)',
    realSpeedKmS: 47.36,
    realMassKg: '3.301 × 10²³ kg (0.055 M⊕)',
    realRadiusKm: '2,439.7 km (0.38 R⊕)',
    surfaceGravity: '3.7 m/s² (0.38 g)',
    moons: 0,
    tiltDeg: 0.03,
    inclinationDeg: 7.0,
  },
  {
    id: 'venus',
    name: 'VENUS',
    type: 'Terrestrial Planet',
    color: '#e8be78',
    visRadius: 0.52,
    orbitRadius: 8.2,
    orbitPeriod: 0.62,
    orbitalSpeed: 11.04,
    mass: 0.815,
    realDistAU: 0.72,
    realPeriodYr: '224.7 days (0.62 yr)',
    realSpeedKmS: 35.02,
    realMassKg: '4.867 × 10²⁴ kg (0.815 M⊕)',
    realRadiusKm: '6,051.8 km (0.95 R⊕)',
    surfaceGravity: '8.87 m/s² (0.90 g)',
    moons: 0,
    tiltDeg: 177.36,
    inclinationDeg: 3.39,
  },
  {
    id: 'earth',
    name: 'EARTH',
    type: 'Terrestrial Planet (Habitable)',
    color: '#4795d1',
    visRadius: 0.58,
    orbitRadius: 11.2,
    orbitPeriod: 1.0,
    orbitalSpeed: 9.45,
    mass: 1.0,
    realDistAU: 1.0,
    realPeriodYr: '365.25 days (1.00 yr)',
    realSpeedKmS: 29.78,
    realMassKg: '5.972 × 10²⁴ kg (1.00 M⊕)',
    realRadiusKm: '6,371.0 km (1.00 R⊕)',
    surfaceGravity: '9.81 m/s² (1.00 g)',
    moons: 1,
    tiltDeg: 23.44,
    inclinationDeg: 0.0,
  },
  {
    id: 'mars',
    name: 'MARS',
    type: 'Terrestrial Planet',
    color: '#c94a29',
    visRadius: 0.4,
    orbitRadius: 14.6,
    orbitPeriod: 1.88,
    orbitalSpeed: 8.28,
    mass: 0.107,
    realDistAU: 1.52,
    realPeriodYr: '687.0 days (1.88 yr)',
    realSpeedKmS: 24.07,
    realMassKg: '6.417 × 10²³ kg (0.107 M⊕)',
    realRadiusKm: '3,389.5 km (0.53 R⊕)',
    surfaceGravity: '3.72 m/s² (0.38 g)',
    moons: 2,
    tiltDeg: 25.19,
    inclinationDeg: 1.85,
  },
  {
    id: 'jupiter',
    name: 'JUPITER',
    type: 'Gas Giant',
    color: '#d6a06f',
    visRadius: 1.4,
    orbitRadius: 21.0,
    orbitPeriod: 11.86,
    orbitalSpeed: 6.9,
    mass: 317.8,
    realDistAU: 5.2,
    realPeriodYr: '4,332.6 days (11.86 yr)',
    realSpeedKmS: 13.07,
    realMassKg: '1.898 × 10²⁷ kg (317.8 M⊕)',
    realRadiusKm: '69,911 km (10.97 R⊕)',
    surfaceGravity: '24.79 m/s² (2.53 g)',
    moons: 95,
    tiltDeg: 3.13,
    inclinationDeg: 1.3,
  },
  {
    id: 'saturn',
    name: 'SATURN',
    type: 'Gas Giant with Rings',
    color: '#e5c282',
    visRadius: 1.15,
    orbitRadius: 28.0,
    orbitPeriod: 29.45,
    orbitalSpeed: 5.98,
    mass: 95.2,
    realDistAU: 9.58,
    realPeriodYr: '10,759 days (29.45 yr)',
    realSpeedKmS: 9.69,
    realMassKg: '5.683 × 10²⁶ kg (95.2 M⊕)',
    realRadiusKm: '58,232 km (9.14 R⊕)',
    surfaceGravity: '10.44 m/s² (1.06 g)',
    moons: 146,
    tiltDeg: 26.73,
    inclinationDeg: 2.49,
    hasRings: true,
  },
  {
    id: 'uranus',
    name: 'URANUS',
    type: 'Ice Giant',
    color: '#76d7ea',
    visRadius: 0.85,
    orbitRadius: 35.5,
    orbitPeriod: 84.0,
    orbitalSpeed: 5.31,
    mass: 14.5,
    realDistAU: 19.2,
    realPeriodYr: '30,685 days (84.01 yr)',
    realSpeedKmS: 6.81,
    realMassKg: '8.681 × 10²⁵ kg (14.5 M⊕)',
    realRadiusKm: '25,362 km (3.98 R⊕)',
    surfaceGravity: '8.69 m/s² (0.89 g)',
    moons: 28,
    tiltDeg: 97.77,
    inclinationDeg: 0.77,
  },
  {
    id: 'neptune',
    name: 'NEPTUNE',
    type: 'Ice Giant',
    color: '#3878e8',
    visRadius: 0.82,
    orbitRadius: 43.0,
    orbitPeriod: 164.8,
    orbitalSpeed: 4.82,
    mass: 17.1,
    realDistAU: 30.05,
    realPeriodYr: '60,190 days (164.8 yr)',
    realSpeedKmS: 5.43,
    realMassKg: '1.024 × 10²⁶ kg (17.1 M⊕)',
    realRadiusKm: '24,622 km (3.86 R⊕)',
    surfaceGravity: '11.15 m/s² (1.14 g)',
    moons: 16,
    tiltDeg: 28.32,
    inclinationDeg: 1.77,
  },
]

export function createSolarSystemScene(container, initialParams = {}, callbacks = {}) {
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2('#040510', 0.007)

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 400)
  // Cinematic orbital vantage: elevated view looking toward Sun and planetary disk
  camera.position.set(0, 36, 68)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor('#040510', 1)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  container.appendChild(renderer.domElement)

  // Simulation root groups
  const world = new THREE.Group()
  scene.add(world)

  const orbitLinesGroup = new THREE.Group()
  const trailsGroup = new THREE.Group()
  const gravityVectorsGroup = new THREE.Group()
  world.add(orbitLinesGroup)
  world.add(trailsGroup)
  world.add(gravityVectorsGroup)

  // Parameters with defense-in-depth clamping
  let simulationSpeed = Math.min(50, Math.max(0.1, initialParams.simulationSpeed ?? 1.0))
  let gravityStrength = Math.min(2.0, Math.max(0.0, initialParams.gravityStrength ?? 1.0))
  let orbitScale = Math.min(2.0, Math.max(0.5, initialParams.orbitScale ?? 1.0))
  let trailLengthParam = Math.min(1.0, Math.max(0.0, initialParams.trailLength ?? 0.6))
  let showOrbits = initialParams.showOrbits ?? true
  let showLabels = initialParams.showLabels ?? true
  let showTrails = initialParams.showTrails ?? true
  let showGravityVectors = initialParams.showGravityVectors ?? false
  let followPlanet = initialParams.followPlanet ?? false
  let isPaused = initialParams.isPaused ?? false
  let selectedPlanetId = initialParams.selectedPlanetId ?? null

  // 1. DISTANT STARFIELD
  const starCount = 1200
  const starPositions = new Float32Array(starCount * 3)
  const starColors = new Float32Array(starCount * 3)
  const palette = [new THREE.Color('#dce8ff'), new THREE.Color('#9ec5ff'), new THREE.Color('#ffffff'), new THREE.Color('#fed8a6')]
  for (let i = 0; i < starCount; i++) {
    const r = 160 + Math.random() * 80
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    starPositions[i * 3 + 1] = r * Math.cos(phi)
    starPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    palette[Math.floor(Math.random() * palette.length)].toArray(starColors, i * 3)
  }
  const starGeo = new THREE.BufferGeometry()
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
  starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3))
  const starMat = new THREE.PointsMaterial({
    size: 1.1,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    sizeAttenuation: false,
  })
  const starField = new THREE.Points(starGeo, starMat)
  scene.add(starField)

  // 2. LIGHTING
  // Omnidirectional solar irradiance from central star
  const sunLight = new THREE.PointLight('#fff2d4', 3.4, 250, 0.4)
  sunLight.position.set(0, 0, 0)
  world.add(sunLight)

  const ambientLight = new THREE.AmbientLight('#12162a', 0.6)
  scene.add(ambientLight)

  // 3. CELESTIAL BODIES SETUP & N-BODY ARRAYS
  const numBodies = CELESTIAL_BODIES.length
  // Positions, velocities, accelerations, masses preallocated in typed arrays
  const posArray = new Float64Array(numBodies * 3)
  const velArray = new Float64Array(numBodies * 3)
  const accArray = new Float64Array(numBodies * 3)
  const massArray = new Float64Array(numBodies)
  const baseRadiusArray = new Float64Array(numBodies)

  const bodyMeshes = []
  const orbitLines = []
  const trailBuffers = []
  const trailLineMeshes = []
  const MAX_TRAIL_POINTS = 96
  const trailIndex = new Int32Array(numBodies)
  const trailPointCount = new Int32Array(numBodies)

  // Shared Geometries
  const sphereGeoHigh = new THREE.SphereGeometry(1, 32, 24)
  const sphereGeoMid = new THREE.SphereGeometry(1, 24, 18)

  // Sun Shader & Core
  const sunData = CELESTIAL_BODIES[0]
  massArray[0] = sunData.mass
  baseRadiusArray[0] = 0

  const sunUniforms = {
    uTime: { value: 0 },
    uColorCore: { value: new THREE.Color('#fff2cc') },
    uColorGlow: { value: new THREE.Color('#ff8800') },
  }

  const sunMat = new THREE.ShaderMaterial({
    uniforms: sunUniforms,
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uColorCore;
      uniform vec3 uColorGlow;
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        // Dynamic solar surface convection granulation
        float gran = sin(vPosition.x * 6.0 + uTime * 0.8) *
                     sin(vPosition.y * 6.0 - uTime * 0.6) *
                     sin(vPosition.z * 6.0 + uTime * 0.7);
        float edge = 1.0 - max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0)));
        vec3 col = mix(uColorCore, uColorGlow, 0.35 + gran * 0.2 + edge * 0.45);
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  })
  const sunMesh = new THREE.Mesh(sphereGeoHigh, sunMat)
  sunMesh.scale.setScalar(sunData.visRadius)
  sunMesh.userData = { id: sunData.id, bodyIndex: 0, isSun: true }
  world.add(sunMesh)
  bodyMeshes.push(sunMesh)

  // Sun Corona Glow Billboard
  const coronaMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        float d = length(vUv - 0.5) * 2.0;
        float alpha = smoothstep(1.0, 0.1, d);
        float pulse = 0.95 + 0.05 * sin(uTime * 1.8);
        vec3 color = mix(vec3(1.0, 0.6, 0.1), vec3(1.0, 0.9, 0.4), alpha);
        gl_FragColor = vec4(color, pow(alpha, 2.2) * 0.85 * pulse);
      }
    `,
  })
  const coronaMesh = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), coronaMat)
  world.add(coronaMesh)

  // Planetary Materials & Setup
  for (let i = 1; i < numBodies; i++) {
    const b = CELESTIAL_BODIES[i]
    massArray[i] = b.mass
    baseRadiusArray[i] = b.orbitRadius

    // Starting polar angle evenly staggered
    const initTheta = (i * 2.39996) % (Math.PI * 2) // Golden angle offset
    const r = b.orbitRadius * orbitScale
    const incRad = ((b.inclinationDeg || 0) * Math.PI) / 180

    posArray[i * 3] = r * Math.cos(initTheta)
    posArray[i * 3 + 1] = r * Math.sin(initTheta) * Math.sin(incRad)
    posArray[i * 3 + 2] = r * Math.sin(initTheta) * Math.cos(incRad)

    // Stable circular Keplerian velocity v = sqrt(G*M_sun / r)
    // with G*M_sun = 1000
    const vMag = Math.sqrt(1000.0 / r)
    velArray[i * 3] = -vMag * Math.sin(initTheta)
    velArray[i * 3 + 1] = vMag * Math.cos(initTheta) * Math.sin(incRad)
    velArray[i * 3 + 2] = vMag * Math.cos(initTheta) * Math.cos(incRad)

    // Planet Mesh
    let mat
    if (b.id === 'earth') {
      // Procedural continents / ocean material
      mat = new THREE.MeshStandardMaterial({
        color: '#286ea3',
        roughness: 0.55,
        metalness: 0.1,
      })
      mat.onBeforeCompile = (shader) => {
        shader.vertexShader = shader.vertexShader.replace(
          '#include <common>',
          '#include <common>\nvarying vec3 vModelPos;'
        ).replace(
          '#include <begin_vertex>',
          '#include <begin_vertex>\nvModelPos = position;'
        )
        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <common>',
          '#include <common>\nvarying vec3 vModelPos;'
        ).replace(
          '#include <dithering_fragment>',
          `#include <dithering_fragment>
          // Procedural continental landmasses
          float continent = sin(vModelPos.x * 4.5) * sin(vModelPos.y * 3.8) + cos(vModelPos.z * 4.2) * 0.5;
          if (continent > 0.15) {
            gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.22, 0.48, 0.22), 0.75); // Earth vegetation/soil
          }
          `
        )
      }
    } else if (b.id === 'jupiter') {
      mat = new THREE.MeshStandardMaterial({ color: b.color, roughness: 0.65, metalness: 0.05 })
      mat.onBeforeCompile = (shader) => {
        shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vModelPos;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvModelPos = position;')
        shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vModelPos;').replace(
          '#include <dithering_fragment>',
          `#include <dithering_fragment>
          float latBand = sin(vModelPos.y * 14.0);
          gl_FragColor.rgb += vec3(latBand * 0.08, -latBand * 0.04, -latBand * 0.06);
          `
        )
      }
    } else {
      mat = new THREE.MeshStandardMaterial({ color: b.color, roughness: 0.7, metalness: 0.1 })
    }

    const mesh = new THREE.Mesh(sphereGeoMid, mat)
    mesh.scale.setScalar(b.visRadius)
    mesh.rotation.z = ((b.tiltDeg || 0) * Math.PI) / 180
    mesh.position.set(posArray[i * 3], posArray[i * 3 + 1], posArray[i * 3 + 2])
    mesh.userData = { id: b.id, bodyIndex: i }
    world.add(mesh)
    bodyMeshes.push(mesh)

    // Saturn Rings
    if (b.hasRings) {
      const ringGeo = new THREE.RingGeometry(b.visRadius * 1.45, b.visRadius * 2.55, 48)
      ringGeo.rotateX(Math.PI / 2)
      const ringMat = new THREE.MeshBasicMaterial({
        color: '#c9b486',
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85,
      })
      const ringMesh = new THREE.Mesh(ringGeo, ringMat)
      mesh.add(ringMesh)
    }

    // Planetary Orbit Path (Circle / Ellipse Guide)
    const orbitPoints = 64
    const orbitPositions = new Float32Array(orbitPoints * 3)
    for (let k = 0; k < orbitPoints; k++) {
      const angle = (k / orbitPoints) * Math.PI * 2
      orbitPositions[k * 3] = r * Math.cos(angle)
      orbitPositions[k * 3 + 1] = r * Math.sin(angle) * Math.sin(incRad)
      orbitPositions[k * 3 + 2] = r * Math.sin(angle) * Math.cos(incRad)
    }
    const orbitGeo = new THREE.BufferGeometry()
    orbitGeo.setAttribute('position', new THREE.BufferAttribute(orbitPositions, 3))
    const orbitMat = new THREE.LineBasicMaterial({
      color: b.color,
      transparent: true,
      opacity: 0.22,
    })
    const orbitLine = new THREE.LineLoop(orbitGeo, orbitMat)
    orbitLinesGroup.add(orbitLine)
    orbitLines.push(orbitLine)

    // Motion Trail Ring Buffer
    const trailPositions = new Float32Array(MAX_TRAIL_POINTS * 3)
    // Pre-populate with starting position
    for (let p = 0; p < MAX_TRAIL_POINTS; p++) {
      trailPositions[p * 3] = posArray[i * 3]
      trailPositions[p * 3 + 1] = posArray[i * 3 + 1]
      trailPositions[p * 3 + 2] = posArray[i * 3 + 2]
    }
    const trailGeo = new THREE.BufferGeometry()
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3))
    const trailMat = new THREE.LineBasicMaterial({
      color: b.color,
      transparent: true,
      opacity: 0.45,
    })
    const trailLine = new THREE.Line(trailGeo, trailMat)
    trailsGroup.add(trailLine)
    trailLineMeshes.push(trailLine)
    trailBuffers.push(trailPositions)
  }

  // Preallocated Gravity Vector Lines
  const gravVectorsGeo = new THREE.BufferGeometry()
  const gravVectorsPositions = new Float32Array(numBodies * 2 * 3)
  gravVectorsGeo.setAttribute('position', new THREE.BufferAttribute(gravVectorsPositions, 3))
  const gravVectorsMat = new THREE.LineSegments(
    gravVectorsGeo,
    new THREE.LineBasicMaterial({ color: '#ff6644', transparent: true, opacity: 0.6 })
  )
  gravityVectorsGroup.add(gravVectorsMat)
  gravityVectorsGroup.visible = showGravityVectors

  // Selection Marker Halo
  const selectHaloGeo = new THREE.RingGeometry(1.2, 1.35, 32)
  selectHaloGeo.rotateX(-Math.PI / 2)
  const selectHaloMat = new THREE.MeshBasicMaterial({
    color: '#73ffd3',
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9,
  })
  const selectHaloMesh = new THREE.Mesh(selectHaloGeo, selectHaloMat)
  selectHaloMesh.visible = false
  world.add(selectHaloMesh)

  // 4. PREALLOCATED SCRATCHPADS FOR ZERO ALLOCATION PER FRAME
  const scratchPos = new THREE.Vector3()
  const scratchTarget = new THREE.Vector3()
  const cameraTarget = new THREE.Vector3(0, 0, 0)
  const desiredCamPos = new THREE.Vector3()
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()

  // Camera Orbit State
  let camRadius = 72
  let camTheta = 0.45 // Azimuth
  let camPhi = 0.65 // Polar inclination
  let isDragging = false
  let prevMouseX = 0
  let prevMouseY = 0

  // 5. INTERACTIVE CAMERA & POINTER HANDLERS
  function onPointerDown(e) {
    if (e.target !== renderer.domElement) return
    isDragging = true
    prevMouseX = e.clientX
    prevMouseY = e.clientY
  }

  function onPointerMove(e) {
    if (!isDragging) return
    const dx = e.clientX - prevMouseX
    const dy = e.clientY - prevMouseY
    prevMouseX = e.clientX
    prevMouseY = e.clientY

    camTheta -= dx * 0.006
    camPhi = Math.max(0.05, Math.min(Math.PI / 2 - 0.04, camPhi - dy * 0.006))
  }

  function onPointerUp(e) {
    if (!isDragging) return
    isDragging = false

    // Check for click / planet selection
    const rect = renderer.domElement.getBoundingClientRect()
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(bodyMeshes, false)
    if (intersects.length > 0) {
      const hit = intersects[0].object
      const hitId = hit.userData.id
      selectPlanet(hitId)
    }
  }

  function onWheel(e) {
    e.preventDefault()
    camRadius = Math.max(8, Math.min(130, camRadius + e.deltaY * 0.06))
  }

  function onDblClick(e) {
    const rect = renderer.domElement.getBoundingClientRect()
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(bodyMeshes, false)
    if (intersects.length > 0) {
      const hitId = intersects[0].object.userData.id
      selectPlanet(hitId)
      focusPlanet(hitId)
    }
  }

  renderer.domElement.addEventListener('pointerdown', onPointerDown)
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('pointerup', onPointerUp)
  renderer.domElement.addEventListener('wheel', onWheel, { passive: false })
  renderer.domElement.addEventListener('dblclick', onDblClick)

  function resize() {
    const width = container.clientWidth
    const height = container.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }
  window.addEventListener('resize', resize)
  resize()

  // 6. PLANET SELECTION & FOCUS API
  function selectPlanet(planetId) {
    selectedPlanetId = planetId
    const body = CELESTIAL_BODIES.find((b) => b.id === planetId)
    if (!body) {
      selectHaloMesh.visible = false
      callbacks.onSelectPlanet?.(null)
      return
    }

    const idx = CELESTIAL_BODIES.indexOf(body)
    const mesh = bodyMeshes[idx]
    selectHaloMesh.scale.setScalar(body.visRadius * 1.5)
    selectHaloMesh.position.copy(mesh.position)
    selectHaloMesh.visible = true

    // Compute live instantaneous simulation metrics
    const x = posArray[idx * 3]
    const y = posArray[idx * 3 + 1]
    const z = posArray[idx * 3 + 2]
    const currentDist = Math.sqrt(x * x + y * y + z * z)
    const vx = velArray[idx * 3]
    const vy = velArray[idx * 3 + 1]
    const vz = velArray[idx * 3 + 2]
    const currentSpeed = Math.sqrt(vx * vx + vy * vy + vz * vz)

    callbacks.onSelectPlanet?.({
      ...body,
      simDistance: Number(currentDist.toFixed(2)),
      simSpeed: Number(currentSpeed.toFixed(2)),
      simPos: [Number(x.toFixed(1)), Number(y.toFixed(1)), Number(z.toFixed(1))],
    })
  }

  function focusPlanet(planetId) {
    selectPlanet(planetId)
    const body = CELESTIAL_BODIES.find((b) => b.id === planetId)
    if (!body) return
    const idx = CELESTIAL_BODIES.indexOf(body)
    if (idx === 0) {
      camRadius = 72
      camPhi = 0.65
    } else {
      camRadius = Math.max(6, body.visRadius * 8.5)
      camPhi = 0.45
    }
  }

  // 7. NUMERICAL N-BODY GRAVITATION & VELOCITY VERLET INTEGRATOR
  // Computes gravitational acceleration on all bodies in place
  const G_CONST = 1.0 // Normalized gravitational constant
  const EPSILON_SQ = 0.35 // Softening factor to prevent close encounter division-by-zero

  function computeAccelerations() {
    accArray.fill(0)
    if (gravityStrength <= 0) return

    for (let i = 0; i < numBodies; i++) {
      const xi = posArray[i * 3]
      const yi = posArray[i * 3 + 1]
      const zi = posArray[i * 3 + 2]

      for (let j = i + 1; j < numBodies; j++) {
        const dx = posArray[j * 3] - xi
        const dy = posArray[j * 3 + 1] - yi
        const dz = posArray[j * 3 + 2] - zi

        const distSq = dx * dx + dy * dy + dz * dz + EPSILON_SQ
        const dist = Math.sqrt(distSq)
        const invDist3 = 1.0 / (distSq * dist)

        // Force factor = G * m_i * m_j / dist^3
        const factor = G_CONST * gravityStrength * invDist3
        const ax = dx * factor
        const ay = dy * factor
        const az = dz * factor

        // a_i += m_j * delta
        accArray[i * 3] += massArray[j] * ax
        accArray[i * 3 + 1] += massArray[j] * ay
        accArray[i * 3 + 2] += massArray[j] * az

        // a_j -= m_i * delta
        accArray[j * 3] -= massArray[i] * ax
        accArray[j * 3 + 1] -= massArray[i] * ay
        accArray[j * 3 + 2] -= massArray[i] * az
      }
    }
  }

  // Velocity Verlet Step
  function stepSimulation(dt) {
    // 1. Half-step velocity
    for (let i = 0; i < numBodies * 3; i++) {
      velArray[i] += 0.5 * dt * accArray[i]
    }

    // 2. Full-step position (Sun remains fixed at center to anchor system frame)
    for (let i = 1; i < numBodies; i++) {
      posArray[i * 3] += dt * velArray[i * 3]
      posArray[i * 3 + 1] += dt * velArray[i * 3 + 1]
      posArray[i * 3 + 2] += dt * velArray[i * 3 + 2]
    }

    // 3. Recompute accelerations
    computeAccelerations()

    // 4. Second half-step velocity
    for (let i = 0; i < numBodies * 3; i++) {
      velArray[i] += 0.5 * dt * accArray[i]
    }
  }

  // Initial acceleration calculation
  computeAccelerations()

  // 8. ANIMATION LOOP
  let lastTimestamp = performance.now()
  let frameId
  let trailStepCount = 0
  let telemetryStepCount = 0

  function animate(now) {
    const deltaMs = Math.min(50, now - lastTimestamp)
    lastTimestamp = now
    const deltaSec = deltaMs / 1000

    sunUniforms.uTime.value = now / 1000
    coronaMat.uniforms.uTime.value = now / 1000

    // Corona faces camera
    coronaMesh.quaternion.copy(camera.quaternion)

    // Physics Step (Verlet substepping)
    if (!isPaused) {
      const effectiveDt = deltaSec * simulationSpeed * 0.95
      // 3 substeps for high numerical accuracy
      const substepDt = effectiveDt / 3
      for (let s = 0; s < 3; s++) {
        stepSimulation(substepDt)
      }
    }

    // Update body mesh positions and axial rotation
    for (let i = 1; i < numBodies; i++) {
      const mesh = bodyMeshes[i]
      mesh.position.set(posArray[i * 3], posArray[i * 3 + 1], posArray[i * 3 + 2])
      mesh.rotation.y += 0.015 * simulationSpeed
    }

    // Update trail ring buffers every 3 frames
    trailStepCount++
    if (trailStepCount >= 3 && showTrails) {
      trailStepCount = 0
      const activeTrailMax = Math.round(MAX_TRAIL_POINTS * trailLengthParam)

      for (let i = 1; i < numBodies; i++) {
        const buffer = trailBuffers[i - 1]
        const line = trailLineMeshes[i - 1]
        let idx = trailIndex[i]
        let count = trailPointCount[i]

        buffer[idx * 3] = posArray[i * 3]
        buffer[idx * 3 + 1] = posArray[i * 3 + 1]
        buffer[idx * 3 + 2] = posArray[i * 3 + 2]

        idx = (idx + 1) % MAX_TRAIL_POINTS
        count = Math.min(activeTrailMax, count + 1)
        trailIndex[i] = idx
        trailPointCount[i] = count

        line.geometry.attributes.position.needsUpdate = true
      }
    }

    // Update gravity vectors if enabled
    if (showGravityVectors) {
      for (let i = 1; i < numBodies; i++) {
        const base = i * 2 * 3
        gravVectorsPositions[base] = posArray[i * 3]
        gravVectorsPositions[base + 1] = posArray[i * 3 + 1]
        gravVectorsPositions[base + 2] = posArray[i * 3 + 2]

        // Vector length scaled to acceleration
        gravVectorsPositions[base + 3] = posArray[i * 3] + accArray[i * 3] * 0.4
        gravVectorsPositions[base + 4] = posArray[i * 3 + 1] + accArray[i * 3 + 1] * 0.4
        gravVectorsPositions[base + 5] = posArray[i * 3 + 2] + accArray[i * 3 + 2] * 0.4
      }
      gravVectorsGeo.attributes.position.needsUpdate = true
    }

    // Update selection halo position
    if (selectedPlanetId) {
      const selectedIndex = CELESTIAL_BODIES.findIndex((b) => b.id === selectedPlanetId)
      if (selectedIndex >= 0) {
        selectHaloMesh.position.set(
          posArray[selectedIndex * 3],
          posArray[selectedIndex * 3 + 1],
          posArray[selectedIndex * 3 + 2]
        )
      }
    }

    // Camera Tracking / Follow Planet
    if (followPlanet && selectedPlanetId) {
      const idx = CELESTIAL_BODIES.findIndex((b) => b.id === selectedPlanetId)
      if (idx >= 0) {
        scratchTarget.set(posArray[idx * 3], posArray[idx * 3 + 1], posArray[idx * 3 + 2])
        cameraTarget.lerp(scratchTarget, 0.08)
      }
    } else {
      cameraTarget.lerp(new THREE.Vector3(0, 0, 0), 0.05)
    }

    // Spherical Camera Positioning around target
    desiredCamPos.x = cameraTarget.x + camRadius * Math.sin(camPhi) * Math.sin(camTheta)
    desiredCamPos.y = cameraTarget.y + camRadius * Math.cos(camPhi)
    desiredCamPos.z = cameraTarget.z + camRadius * Math.sin(camPhi) * Math.cos(camTheta)
    camera.position.lerp(desiredCamPos, 0.08)
    camera.lookAt(cameraTarget)

    // Periodic telemetry update to parent (every ~200ms)
    telemetryStepCount++
    if (telemetryStepCount >= 12 && callbacks.onTelemetry) {
      telemetryStepCount = 0
      const states = []
      for (let i = 0; i < numBodies; i++) {
        states.push({
          id: CELESTIAL_BODIES[i].id,
          name: CELESTIAL_BODIES[i].name,
          color: CELESTIAL_BODIES[i].color,
          orbitRadius: CELESTIAL_BODIES[i].orbitRadius,
          x: posArray[i * 3],
          z: posArray[i * 3 + 2],
        })
      }
      callbacks.onTelemetry(states)
    }

    renderer.render(scene, camera)
    frameId = requestAnimationFrame(animate)
  }

  frameId = requestAnimationFrame(animate)

  // 9. UPDATE PARAMS API
  function updateParams(params) {
    if (!params) return
    if (params.simulationSpeed !== undefined) {
      simulationSpeed = Math.min(50, Math.max(0.1, params.simulationSpeed))
    }
    if (params.gravityStrength !== undefined) {
      gravityStrength = Math.min(2.0, Math.max(0.0, params.gravityStrength))
      computeAccelerations()
    }
    if (params.orbitScale !== undefined) {
      const newScale = Math.min(2.0, Math.max(0.5, params.orbitScale))
      if (Math.abs(newScale - orbitScale) > 0.01) {
        const ratio = newScale / orbitScale
        orbitScale = newScale
        for (let i = 1; i < numBodies; i++) {
          posArray[i * 3] *= ratio
          posArray[i * 3 + 1] *= ratio
          posArray[i * 3 + 2] *= ratio
          orbitLines[i - 1].scale.set(orbitScale, orbitScale, orbitScale)
        }
        computeAccelerations()
      }
    }
    if (params.trailLength !== undefined) {
      trailLengthParam = Math.min(1.0, Math.max(0.0, params.trailLength))
    }
    if (params.showOrbits !== undefined) {
      showOrbits = params.showOrbits
      orbitLinesGroup.visible = showOrbits
    }
    if (params.showTrails !== undefined) {
      showTrails = params.showTrails
      trailsGroup.visible = showTrails
    }
    if (params.showGravityVectors !== undefined) {
      showGravityVectors = params.showGravityVectors
      gravityVectorsGroup.visible = showGravityVectors
    }
    if (params.followPlanet !== undefined) {
      followPlanet = params.followPlanet
    }
    if (params.isPaused !== undefined) {
      isPaused = params.isPaused
    }
    if (params.selectedPlanetId !== undefined && params.selectedPlanetId !== selectedPlanetId) {
      selectPlanet(params.selectedPlanetId)
    }
  }

  // 10. DISPOSE LIFECYCLE
  const dispose = () => {
    cancelAnimationFrame(frameId)
    renderer.domElement.removeEventListener('pointerdown', onPointerDown)
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
    renderer.domElement.removeEventListener('wheel', onWheel)
    renderer.domElement.removeEventListener('dblclick', onDblClick)
    window.removeEventListener('resize', resize)

    // Dispose geometries & materials
    starGeo.dispose()
    starMat.dispose()
    sphereGeoHigh.dispose()
    sphereGeoMid.dispose()
    sunMat.dispose()
    coronaMesh.geometry.dispose()
    coronaMat.dispose()
    selectHaloGeo.dispose()
    selectHaloMat.dispose()
    gravVectorsGeo.dispose()
    gravVectorsMat.material.dispose()

    bodyMeshes.forEach((mesh) => {
      mesh.geometry?.dispose()
      mesh.material?.dispose()
    })
    orbitLines.forEach((line) => {
      line.geometry?.dispose()
      line.material?.dispose()
    })
    trailLineMeshes.forEach((line) => {
      line.geometry?.dispose()
      line.material?.dispose()
    })

    renderer.dispose()
    renderer.domElement.remove()
  }

  return {
    dispose,
    updateParams,
    selectPlanet,
    focusPlanet,
  }
}
