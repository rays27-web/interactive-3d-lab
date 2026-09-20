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

function createPlanetTexture(planetData) {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const id = planetData?.id || 'earth'
  const baseColor = planetData?.surfaceColorHex || planetData?.color || '#286ea3'

  // Fill base surface color
  ctx.fillStyle = baseColor
  ctx.fillRect(0, 0, 1024, 512)

  if (id === 'jupiter' || id === 'saturn') {
    // Gas giant cloud bands (zones and belts)
    const bandCount = 28
    for (let i = 0; i < bandCount; i++) {
      const y = (i / bandCount) * 512
      const h = 512 / bandCount
      const isBelt = i % 2 === 0
      ctx.fillStyle = isBelt ? 'rgba(0, 0, 0, 0.20)' : 'rgba(255, 255, 255, 0.16)'
      ctx.fillRect(0, y, 1024, h)
      ctx.fillStyle = isBelt ? 'rgba(190, 85, 30, 0.15)' : 'rgba(255, 240, 210, 0.12)'
      ctx.fillRect(0, y + h * 0.25, 1024, h * 0.5)
    }
    if (id === 'jupiter') {
      // Great Red Spot
      ctx.fillStyle = 'rgba(200, 60, 30, 0.85)'
      ctx.beginPath()
      ctx.ellipse(620, 310, 52, 30, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = 'rgba(250, 190, 150, 0.6)'
      ctx.lineWidth = 4
      ctx.stroke()
    }
  } else if (id === 'mars') {
    // Mars: darker volcanic provinces (Syrtis Major, Tharsis, Acidalia) + white polar caps
    ctx.fillStyle = 'rgba(60, 20, 12, 0.40)'
    const darkPatches = [
      [320, 220, 110, 70],
      [580, 260, 140, 80],
      [780, 210, 90, 60],
      [180, 310, 80, 50],
      [480, 170, 70, 45],
    ]
    darkPatches.forEach(([cx, cy, rx, ry]) => {
      ctx.beginPath()
      ctx.ellipse(cx, cy, rx, ry, 0.2, 0, Math.PI * 2)
      ctx.fill()
    })
    ctx.fillStyle = 'rgba(245, 250, 255, 0.85)'
    ctx.fillRect(0, 0, 1024, 28)
    ctx.fillRect(0, 484, 1024, 28)
  } else {
    // Earth / Terrestrial / General Exoplanetary landmasses & continents
    ctx.fillStyle = id === 'earth' ? 'rgba(46, 125, 50, 0.55)' : 'rgba(0, 0, 0, 0.24)'
    const continents = [
      [520, 230, 95, 110], // Africa
      [530, 120, 80, 60],  // Europe
      [680, 150, 130, 85], // Asia
      [240, 140, 90, 75],  // North America
      [310, 320, 75, 105], // South America
      [820, 350, 55, 45],  // Australia
    ]
    continents.forEach(([cx, cy, rx, ry]) => {
      ctx.beginPath()
      ctx.ellipse(cx, cy, rx, ry, -0.15, 0, Math.PI * 2)
      ctx.fill()
    })
    if (id === 'earth') {
      ctx.fillStyle = 'rgba(240, 248, 255, 0.8)'
      ctx.fillRect(0, 0, 1024, 24)
      ctx.fillRect(0, 488, 1024, 24)
      ctx.strokeStyle = 'rgba(72, 209, 204, 0.38)'
      ctx.lineWidth = 6
      continents.forEach(([cx, cy, rx, ry]) => {
        ctx.beginPath()
        ctx.ellipse(cx, cy, rx + 8, ry + 8, -0.15, 0, Math.PI * 2)
        ctx.stroke()
      })
    }
  }

  // Subtle coordinate graticule on texture
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)'
  ctx.lineWidth = 1
  for (let lat = 1; lat < 6; lat++) {
    const y = (lat / 6) * 512
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(1024, y)
    ctx.stroke()
  }
  ctx.strokeStyle = 'rgba(115, 255, 211, 0.28)'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(0, 256)
  ctx.lineTo(1024, 256)
  ctx.stroke()

  for (let lon = 0; lon < 12; lon++) {
    const x = (lon / 12) * 1024
    ctx.strokeStyle = lon === 0 ? 'rgba(115, 255, 211, 0.38)' : 'rgba(255, 255, 255, 0.12)'
    ctx.lineWidth = lon === 0 ? 2 : 1
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, 512)
    ctx.stroke()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.ClampToEdgeWrapping
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function createSpacetimeWellGeometry(sourceX = -1.9, sourceZ = 0, g = 9.81) {
  const xMin = -4.8, xMax = 3.6, xSteps = 28
  const zMin = -3.2, zMax = 3.2, zSteps = 20
  const yBase = -1.40
  const wellDepth = 0.35 + 0.85 * (g / 9.81)

  const positions = []

  // Horizontal lines along X
  for (let j = 0; j <= zSteps; j++) {
    const z = zMin + (j / zSteps) * (zMax - zMin)
    for (let i = 0; i < xSteps; i++) {
      const x1 = xMin + (i / xSteps) * (xMax - xMin)
      const x2 = xMin + ((i + 1) / xSteps) * (xMax - xMin)

      const d1 = Math.sqrt((x1 - sourceX) ** 2 + (z - sourceZ) ** 2)
      const d2 = Math.sqrt((x2 - sourceX) ** 2 + (z - sourceZ) ** 2)

      const y1 = yBase - wellDepth / (1.0 + 0.80 * d1)
      const y2 = yBase - wellDepth / (1.0 + 0.80 * d2)

      positions.push(x1, y1, z, x2, y2, z)
    }
  }

  // Lines along Z
  for (let i = 0; i <= xSteps; i++) {
    const x = xMin + (i / xSteps) * (xMax - xMin)
    for (let j = 0; j < zSteps; j++) {
      const z1 = zMin + (j / zSteps) * (zMax - zMin)
      const z2 = zMin + ((j + 1) / zSteps) * (zMax - zMin)

      const d1 = Math.sqrt((x - sourceX) ** 2 + (z1 - sourceZ) ** 2)
      const d2 = Math.sqrt((x - sourceX) ** 2 + (z2 - sourceZ) ** 2)

      const y1 = yBase - wellDepth / (1.0 + 0.80 * d1)
      const y2 = yBase - wellDepth / (1.0 + 0.80 * d2)

      positions.push(x, y1, z1, x, y2, z2)
    }
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  return geometry
}

export function createPlanetScene(container, initialParams = {}, callbacks = {}) {
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2('#050614', 0.014)

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200)
  camera.position.set(0, 0.4, 8.8)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor('#050614', 1)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  container.appendChild(renderer.domElement)

  const world = new THREE.Group()
  scene.add(world)

  let rotationSpeed = initialParams.rotationSpeed ?? 1.0
  let currentPlanetData = PLANETS_DATA.find((p) => p.id === 'earth') || PLANETS_DATA[2]

  // Phase 3A: Mission 01 Simulation Calibration State
  const calibrationState = {
    active: false,
    angularVelocity: 1.0,
    targetOblateness: 0.0,
  }
  const targetScale = new THREE.Vector3(1, 1, 1)
  let focusPulseTimer = 0

  // Planet Sphere Mesh with Procedural Surface Geography Map
  // Proportioned as the primary gravitational attractor in the chamber
  let currentTexture = createPlanetTexture(currentPlanetData)
  const planetMaterial = new THREE.MeshStandardMaterial({
    color: currentPlanetData.surfaceColorHex || '#286ea3',
    map: currentTexture,
    roughness: 0.55,
    metalness: 0.1,
  })

  const planetGeometry = new THREE.SphereGeometry(1.38, 64, 48)
  const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial)

  // Surface Reference Features: Attached directly as children to planetMesh
  // Hierarchy: world -> planetTiltGroup -> planetMesh -> surfaceReference
  const surfaceReference = new THREE.Group()
  surfaceReference.name = 'surfaceReference'
  planetMesh.add(surfaceReference)

  // 1. Subtle 3D Coordinate Graticule (Meridians & Parallels) at R = 1.384
  const graticuleRadius = 1.384
  const graticulePositions = []

  // Meridians (every 30 degrees = 12 meridians)
  const meridianCount = 12
  const meridianSegments = 48
  for (let m = 0; m < meridianCount; m++) {
    const lon = (m / meridianCount) * Math.PI * 2
    for (let s = 0; s < meridianSegments; s++) {
      const phi1 = -Math.PI / 2 + (s / meridianSegments) * Math.PI
      const phi2 = -Math.PI / 2 + ((s + 1) / meridianSegments) * Math.PI
      graticulePositions.push(
        graticuleRadius * Math.cos(phi1) * Math.sin(lon),
        graticuleRadius * Math.sin(phi1),
        graticuleRadius * Math.cos(phi1) * Math.cos(lon),
        graticuleRadius * Math.cos(phi2) * Math.sin(lon),
        graticuleRadius * Math.sin(phi2),
        graticuleRadius * Math.cos(phi2) * Math.cos(lon),
      )
    }
  }

  // Parallels (Equator, +/-30 deg, +/-60 deg)
  const latitudes = [-Math.PI / 3, -Math.PI / 6, 0, Math.PI / 6, Math.PI / 3]
  const parallelSegments = 64
  latitudes.forEach((lat) => {
    const y = graticuleRadius * Math.sin(lat)
    const r = graticuleRadius * Math.cos(lat)
    for (let s = 0; s < parallelSegments; s++) {
      const th1 = (s / parallelSegments) * Math.PI * 2
      const th2 = ((s + 1) / parallelSegments) * Math.PI * 2
      graticulePositions.push(
        r * Math.sin(th1), y, r * Math.cos(th1),
        r * Math.sin(th2), y, r * Math.cos(th2),
      )
    }
  })

  const graticuleGeo = new THREE.BufferGeometry()
  graticuleGeo.setAttribute('position', new THREE.Float32BufferAttribute(graticulePositions, 3))
  const graticuleMat = new THREE.LineBasicMaterial({
    color: '#87baff',
    transparent: true,
    opacity: 0.22,
    depthWrite: false,
  })
  const graticuleMesh = new THREE.LineSegments(graticuleGeo, graticuleMat)
  surfaceReference.add(graticuleMesh)

  // 2. Equatorial Prime Meridian Scientific Datum Marker
  const markerGeo = new THREE.RingGeometry(0.035, 0.065, 32)
  const markerMat = new THREE.MeshBasicMaterial({
    color: '#73ffd3',
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.80,
    depthWrite: false,
  })
  const datumMarker = new THREE.Mesh(markerGeo, markerMat)
  datumMarker.position.set(0, 0, graticuleRadius)
  surfaceReference.add(datumMarker)

  // Subtle Prime Meridian tick / crosshair
  const crossGeo = new THREE.BufferGeometry()
  crossGeo.setAttribute('position', new THREE.Float32BufferAttribute([
    -0.10, 0, graticuleRadius + 0.001,  0.10, 0, graticuleRadius + 0.001,
    0, -0.10, graticuleRadius + 0.001,  0, 0.10, graticuleRadius + 0.001,
  ], 3))
  const crossMat = new THREE.LineBasicMaterial({ color: '#73ffd3', transparent: true, opacity: 0.70, depthWrite: false })
  const crossMesh = new THREE.LineSegments(crossGeo, crossMat)
  surfaceReference.add(crossMesh)

  // 3. Polar Axis Indicator Markers (Crisp 3D spheres that never blow up into billboard squares)
  const poleGroup = new THREE.Group()
  const poleDotGeo = new THREE.SphereGeometry(0.022, 12, 12)
  const poleDotMat = new THREE.MeshBasicMaterial({ color: '#73ffd3' })
  const northPole = new THREE.Mesh(poleDotGeo, poleDotMat)
  northPole.position.set(0, graticuleRadius + 0.01, 0)
  const southPole = new THREE.Mesh(poleDotGeo, poleDotMat)
  southPole.position.set(0, -graticuleRadius - 0.01, 0)
  poleGroup.add(northPole, southPole)
  surfaceReference.add(poleGroup)

  // Planetary axial tilt group: located at the gravitational source position (-1.9, 0, 0)
  const planetTiltGroup = new THREE.Group()
  planetTiltGroup.position.set(-1.9, 0, 0)
  planetTiltGroup.rotation.z = (currentPlanetData.axialTiltDeg * Math.PI) / 180
  planetTiltGroup.add(planetMesh)
  world.add(planetTiltGroup)

  // Atmospheric Fresnel Rim around the attractor
  const atmosphereUniforms = {
    uTime: { value: 0 },
    uPointer: { value: new THREE.Vector2() },
    uInnerColor: { value: new THREE.Color(currentPlanetData.color || '#4ab7ff') },
    uOuterColor: { value: new THREE.Color('#7c72ff') },
    uAtmosphereIntensity: { value: initialParams.atmosphereIntensity ?? 1.0 },
  }
  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.48, 64, 64),
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
  atmosphere.position.set(0, 0, 0)
  planetTiltGroup.add(atmosphere)

  // 3D Gravitational Field Chamber Structures
  const fieldGroup = new THREE.Group()
  world.add(fieldGroup)

  // A. Spacetime Curvature Manifold Grid (dips toward attractor according to g)
  let wellGeo = createSpacetimeWellGeometry(-1.9, 0, currentPlanetData.surfaceGravityMs2)
  const wellMat = new THREE.LineBasicMaterial({
    color: '#38a2ff',
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
  })
  const wellMesh = new THREE.LineSegments(wellGeo, wellMat)
  fieldGroup.add(wellMesh)

  // B. Concentric Gravitational Equipotential Rings around attractor
  const equipotentialGeo = new THREE.BufferGeometry()
  const equipotentialPositions = []
  const ringRadii = [1.85, 2.55, 3.40]
  const ringSegments = 64
  ringRadii.forEach((r) => {
    for (let s = 0; s < ringSegments; s++) {
      const th1 = (s / ringSegments) * Math.PI * 2
      const th2 = ((s + 1) / ringSegments) * Math.PI * 2
      equipotentialPositions.push(
        -1.9 + r * Math.sin(th1), -0.1, r * Math.cos(th1),
        -1.9 + r * Math.sin(th2), -0.1, r * Math.cos(th2),
      )
    }
  })
  equipotentialGeo.setAttribute('position', new THREE.Float32BufferAttribute(equipotentialPositions, 3))
  const equipotentialMat = new THREE.LineBasicMaterial({
    color: '#73ffd3',
    transparent: true,
    opacity: 0.22,
    depthWrite: false,
  })
  const equipotentialMesh = new THREE.LineSegments(equipotentialGeo, equipotentialMat)
  fieldGroup.add(equipotentialMesh)

  // C. Curved Gravitational Flux Trajectories (Streamlines directed toward the source)
  const fluxGeo = new THREE.BufferGeometry()
  const fluxPositions = []
  const streamlineOrigins = [
    [3.2, 1.8, -1.2],
    [3.0, 0.9, 1.4],
    [2.8, -0.6, -1.5],
    [1.8, 2.2, 0.8],
    [0.2, 2.4, -1.0],
  ]
  streamlineOrigins.forEach(([ox, oy, oz]) => {
    const steps = 32
    for (let s = 0; s < steps; s++) {
      const t1 = s / steps
      const t2 = (s + 1) / steps
      const ctrlX = (ox - 1.9) * 0.5
      const ctrlY = oy * 0.3 - 0.4
      const ctrlZ = oz * 0.6

      const x1 = (1 - t1) ** 2 * ox + 2 * (1 - t1) * t1 * ctrlX + t1 ** 2 * -1.9
      const y1 = (1 - t1) ** 2 * oy + 2 * (1 - t1) * t1 * ctrlY + t1 ** 2 * 0
      const z1 = (1 - t1) ** 2 * oz + 2 * (1 - t1) * t1 * ctrlZ + t1 ** 2 * 0

      const x2 = (1 - t2) ** 2 * ox + 2 * (1 - t2) * t2 * ctrlX + t2 ** 2 * -1.9
      const y2 = (1 - t2) ** 2 * oy + 2 * (1 - t2) * t2 * ctrlY + t2 ** 2 * 0
      const z2 = (1 - t2) ** 2 * oz + 2 * (1 - t2) * t2 * ctrlZ + t2 ** 2 * 0

      fluxPositions.push(x1, y1, z1, x2, y2, z2)
    }
  })
  fluxGeo.setAttribute('position', new THREE.Float32BufferAttribute(fluxPositions, 3))
  const fluxMat = new THREE.LineBasicMaterial({
    color: '#87baff',
    transparent: true,
    opacity: 0.20,
    depthWrite: false,
  })
  const fluxMesh = new THREE.LineSegments(fluxGeo, fluxMat)
  fieldGroup.add(fluxMesh)

  // Phase 29: Interactive Free-Fall & Spring Scale Apparatus
  // Positioned in clear, unobstructed view in the right half of the chamber
  const apparatusGroup = new THREE.Group()
  apparatusGroup.position.set(1.35, -0.25, 0)
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
  let objectMass = initialParams.objectMass ?? 70.0
  const testObjectGeo = new THREE.BoxGeometry(0.45, 0.45, 0.45)
  const testObjectMat = new THREE.MeshStandardMaterial({ color: '#ffb450', roughness: 0.3, metalness: 0.7 })
  const testObjectMesh = new THREE.Mesh(testObjectGeo, testObjectMat)
  testObjectMesh.position.y = 1.6
  apparatusGroup.add(testObjectMesh)

  // Downward Gravitational Force Vector Arrow (W = mg)
  const arrowDir = new THREE.Vector3(0, -1, 0)
  const arrowOrigin = new THREE.Vector3(0, -0.225, 0)
  const weightArrow = new THREE.ArrowHelper(arrowDir, arrowOrigin, 1.0, 0xff5533, 0.2, 0.12)
  testObjectMesh.add(weightArrow)



  // Free fall physics state
  let isDropping = false
  let isDropPaused = false
  let dropVelocityY = 0
  let dropPosY = 1.6
  let surfaceAcceleration = currentPlanetData.surfaceGravityMs2 // e.g. 9.81

  function updateWeightArrow(g, mass = objectMass) {
    // Arrow length is strictly proportional to gravitational weight force W = m * g
    // Earth baseline: mass = 70 kg, g = 9.81 m/s² => W = 686.7 N => arrowLength = 1.0
    const weightRatio = (mass * g) / (70.0 * 9.81)
    const arrowLength = Math.max(0.20, Math.min(2.5, weightRatio * 1.0))
    const headLength = 0.20 * Math.min(1.4, Math.max(0.5, Math.sqrt(weightRatio)))
    const headWidth = 0.12 * Math.min(1.4, Math.max(0.5, Math.sqrt(weightRatio)))
    weightArrow.setLength(arrowLength, headLength, headWidth)
  }

  function getRestingHeight(g, mass = objectMass) {
    // Proportional spring compression under gravitational weight W = m * g:
    // Earth baseline: mass = 70 kg, g = 9.81 m/s² => W = 686.7 N
    const weightRatio = (mass * g) / (70.0 * 9.81)
    const compression = 0.06 + 0.16 * Math.min(2.5, Math.max(0.15, weightRatio))
    return -0.50 - compression
  }

  function triggerDrop(g = currentPlanetData.surfaceGravityMs2) {
    surfaceAcceleration = g
    dropPosY = 1.6
    dropVelocityY = 0
    isDropping = true
    isDropPaused = false
    testObjectMesh.position.y = dropPosY
    updateWeightArrow(g, objectMass)
    springMesh.scale.y = 1.0
    springMesh.position.y = -0.95
  }

  function resetDrop() {
    isDropping = false
    isDropPaused = false
    dropPosY = 1.6
    dropVelocityY = 0
    testObjectMesh.position.y = dropPosY
    springMesh.scale.y = 1.0
    springMesh.position.y = -0.95
    updateWeightArrow(surfaceAcceleration, objectMass)
  }

  function pauseDrop() {
    isDropPaused = true
  }

  function resumeDrop() {
    isDropPaused = false
  }

  function togglePauseDrop() {
    isDropPaused = !isDropPaused
    return isDropPaused
  }

  // Initial setup of apparatus visuals
  updateWeightArrow(surfaceAcceleration, objectMass)

  function setPlanet(planetId) {
    const p = PLANETS_DATA.find((item) => item.id === planetId)
    if (!p) return
    currentPlanetData = p
    surfaceAcceleration = p.surfaceGravityMs2

    // Update 3D appearance & procedural surface map
    if (currentTexture) currentTexture.dispose()
    currentTexture = createPlanetTexture(p)
    planetMaterial.map = currentTexture
    planetMaterial.color.set(p.surfaceColorHex || p.color)
    planetMaterial.needsUpdate = true
    planetTiltGroup.rotation.z = (p.axialTiltDeg * Math.PI) / 180

    atmosphereUniforms.uInnerColor.value.set(p.color)
    atmosphere.visible = p.id !== 'mercury' // Mercury has no significant atmosphere

    // Update Spacetime Curvature Well Geometry to reflect new surface gravity
    wellMesh.geometry.dispose()
    wellMesh.geometry = createSpacetimeWellGeometry(-1.9, 0, p.surfaceGravityMs2)

    // Update weight arrow & trigger visual drop on planet change
    updateWeightArrow(p.surfaceGravityMs2, objectMass)
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

    // Calibrated continuous angular velocity around local polar axis
    // Base speed ~0.33 rad/s produces ~0.0055 rad/frame at 60 FPS (dt ≈ 0.0167s)
    const baseRotationSpeed = 0.33
    const activeOmega = calibrationState.active ? calibrationState.angularVelocity : 1.0
    planetMesh.rotation.y += baseRotationSpeed * activeOmega * rotationSpeed * dt

    // Smooth oblateness deformation: equator expands (X, Z), poles compress (Y)
    // Educational visualization factor: bulgeFactor = (angularVelocity - 1.0) * 0.12
    const bulgeFactor = calibrationState.active
      ? Math.max(0, (calibrationState.angularVelocity - 1.0) * 0.12)
      : 0.0
    targetScale.set(1.0 + bulgeFactor, 1.0 - bulgeFactor * 0.5, 1.0 + bulgeFactor)

    const lerpFactor = Math.min(1.0, dt * 3.5)
    planetMesh.scale.lerp(targetScale, lerpFactor)
    atmosphere.scale.lerp(targetScale, lerpFactor)

    // Subtle camera focus pulse when calibration begins (subtle -0.15 forward shift decaying over 0.6s)
    let pulseZ = 0
    if (focusPulseTimer > 0) {
      focusPulseTimer = Math.max(0, focusPulseTimer - dt)
      const progress = focusPulseTimer / 0.6
      pulseZ = Math.sin((1.0 - progress) * Math.PI) * -0.15
    }

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.45, 0.02)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.40 - pointer.y * 0.28, 0.02)
    camera.position.z = 8.8 + pulseZ
    camera.lookAt(0, 0, 0)

    // Free fall physics simulation
    const currentRestingHeight = getRestingHeight(surfaceAcceleration, objectMass)
    if (isDropping && !isDropPaused) {
      // Normalized educational acceleration: dt * g * scaleFactor
      dropVelocityY -= surfaceAcceleration * dt * 0.42
      dropPosY += dropVelocityY * dt
      if (dropPosY <= currentRestingHeight) {
        dropPosY = currentRestingHeight
        // Small inelastic rebound
        if (Math.abs(dropVelocityY) > 0.4) {
          dropVelocityY = -dropVelocityY * 0.22
        } else {
          dropVelocityY = 0
          isDropping = false
        }
      }
    }
    testObjectMesh.position.y = dropPosY

    // Dynamic spring scale compression matching the bottom of the test mass
    if (dropPosY < -0.50) {
      const currentSpringH = Math.max(0.08, (dropPosY - 0.225) - (-1.125))
      springMesh.scale.y = currentSpringH / 0.45
      springMesh.position.y = -1.125 + currentSpringH / 2
    } else {
      springMesh.scale.y = 1.0
      springMesh.position.y = -0.95
    }

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
      objectMass = Number(params.objectMass) || 70.0
      const s = Math.min(1.4, Math.max(0.6, Math.cbrt(objectMass / 70)))
      testObjectMesh.scale.setScalar(s)
      updateWeightArrow(surfaceAcceleration, objectMass)
      if (!isDropping) {
        dropPosY = getRestingHeight(surfaceAcceleration, objectMass)
        testObjectMesh.position.y = dropPosY
        const currentSpringH = Math.max(0.08, (dropPosY - 0.225) - (-1.125))
        springMesh.scale.y = currentSpringH / 0.45
        springMesh.position.y = -1.125 + currentSpringH / 2
      }
    }
  }

  const dispose = () => {
    cancelAnimationFrame(frameId)
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('resize', resize)
    if (currentTexture) currentTexture.dispose()
    planetGeometry.dispose()
    planetMaterial.dispose()
    graticuleGeo.dispose()
    graticuleMat.dispose()
    markerGeo.dispose()
    markerMat.dispose()
    crossGeo.dispose()
    crossMat.dispose()
    poleDotGeo.dispose()
    poleDotMat.dispose()
    wellGeo.dispose()
    wellMat.dispose()
    equipotentialGeo.dispose()
    equipotentialMat.dispose()
    fluxGeo.dispose()
    fluxMat.dispose()
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
    resetDrop,
    pauseDrop,
    resumeDrop,
    togglePauseDrop,
    getDropState: () => ({
      isDropping,
      isPaused: isDropPaused,
      dropPosY,
      dropVelocityY,
      surfaceAcceleration,
      objectMass,
    }),
    setObjectMass: (m) => {
      objectMass = Number(m) || 70.0
      const s = Math.min(1.4, Math.max(0.6, Math.cbrt(objectMass / 70)))
      testObjectMesh.scale.setScalar(s)
      updateWeightArrow(surfaceAcceleration, objectMass)
      if (!isDropping) {
        dropPosY = getRestingHeight(surfaceAcceleration, objectMass)
        testObjectMesh.position.y = dropPosY
        const currentSpringH = Math.max(0.08, (dropPosY - 0.225) - (-1.125))
        springMesh.scale.y = currentSpringH / 0.45
        springMesh.position.y = -1.125 + currentSpringH / 2
      }
    },
    getRotationState: () => ({
      rotationSpeed,
      planetRotationY: planetMesh.rotation.y,
      axialTiltDeg: currentPlanetData.axialTiltDeg,
      worldPosY: world.position.y,
      hasSurfaceReference: Boolean(surfaceReference),
      referenceChildCount: surfaceReference.children.length,
    }),
    setCalibration: ({ angularVelocity = 1.0, targetOblateness = 0, active = true } = {}) => {
      calibrationState.active = Boolean(active)
      calibrationState.angularVelocity = Number(angularVelocity) || 1.0
      calibrationState.targetOblateness = Number(targetOblateness) || 0.0
      if (active) {
        focusPulseTimer = 0.6
      }
    },
    resetCalibration: () => {
      calibrationState.active = false
      calibrationState.angularVelocity = 1.0
      calibrationState.targetOblateness = 0.0
      focusPulseTimer = 0
    },
    getCalibrationState: () => ({
      ...calibrationState,
      currentScale: {
        x: Number(planetMesh.scale.x.toFixed(4)),
        y: Number(planetMesh.scale.y.toFixed(4)),
        z: Number(planetMesh.scale.z.toFixed(4)),
      },
      currentAngularVelocity: calibrationState.active ? calibrationState.angularVelocity : 1.0,
      isOblate: planetMesh.scale.x > 1.01,
    }),
  }

  return {
    dispose,
    updateParams,
    sceneApi,
    selectPlanet: setPlanet,
    triggerDrop,
    resetDrop,
    pauseDrop,
    resumeDrop,
    togglePauseDrop,
    setObjectMass: sceneApi.setObjectMass,
    getRotationState: sceneApi.getRotationState,
    setCalibration: sceneApi.setCalibration,
    resetCalibration: sceneApi.resetCalibration,
    getCalibrationState: sceneApi.getCalibrationState,
  }
}
