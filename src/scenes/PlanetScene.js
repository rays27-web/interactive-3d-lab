import * as THREE from 'three'
import { PLANETS_DATA } from '../data/planets'

// Simple, high-contrast canvas sprite generator for in-scene educational typography
function createLabelSprite(initialText, options = {}) {
  const {
    fontSize = 24,
    textColor = '#ffffff',
    bgColor = 'rgba(7, 12, 30, 0.88)',
    borderColor = 'rgba(115, 255, 211, 0.45)',
    padding = 14,
    scale = 1.0,
  } = options

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = 512
  canvas.height = 128

  function draw(text, customTextColor = textColor, customBorderColor = borderColor) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Pill container
    ctx.font = `bold ${fontSize}px "DM Mono", monospace`
    const metrics = ctx.measureText(text)
    const boxWidth = Math.min(canvas.width - 16, metrics.width + padding * 2)
    const boxHeight = fontSize + padding * 1.5
    const boxX = (canvas.width - boxWidth) / 2
    const boxY = (canvas.height - boxHeight) / 2
    const radius = 8

    ctx.fillStyle = bgColor
    ctx.beginPath()
    ctx.roundRect(boxX, boxY, boxWidth, boxHeight, radius)
    ctx.fill()

    ctx.strokeStyle = customBorderColor
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.fillStyle = customTextColor
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, canvas.width / 2, canvas.height / 2)
  }

  draw(initialText)

  const texture = new THREE.CanvasTexture(canvas)
  texture.minFilter = THREE.LinearFilter
  texture.generateMipmaps = false

  const spriteMaterial = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
  })
  const sprite = new THREE.Sprite(spriteMaterial)
  sprite.scale.set(3.2 * scale, 0.8 * scale, 1)

  return {
    sprite,
    update: (newText, newColor, newBorder) => {
      draw(newText, newColor, newBorder)
      texture.needsUpdate = true
    },
    dispose: () => {
      texture.dispose()
      spriteMaterial.dispose()
    },
  }
}

// Subtle, non-distracting distant stars
function createCalmStarfield(count = 500) {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i += 1) {
    const r = 35 + Math.random() * 45
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.cos(phi)
    positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const mat = new THREE.PointsMaterial({
    color: '#8bb4e6',
    size: 1.4,
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
  })
  return new THREE.Points(geo, mat)
}

export function createPlanetScene(container, initialParams = {}, callbacks = {}) {
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2('#050614', 0.012)

  // Stable, calm camera — Part 15: No cinematic or mouse-induced wobble
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200)
  camera.position.set(0, 0, 10)
  camera.lookAt(0, 0, 0)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor('#050614', 1)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  container.appendChild(renderer.domElement)

  // Starfield
  const starfield = createCalmStarfield()
  scene.add(starfield)

  // Stable balanced lighting
  const keyLight = new THREE.DirectionalLight('#f0f7ff', 3.5)
  keyLight.position.set(-4, 3, 5)
  const fillLight = new THREE.DirectionalLight('#6ba1e6', 1.2)
  fillLight.position.set(4, -1, 3)
  const ambientLight = new THREE.AmbientLight('#15233c', 1.0)
  scene.add(keyLight, fillLight, ambientLight)

  // ----------------------------------------------------
  // PART 3: Clear Educational Visual (PLANET + OBJECT)
  // ----------------------------------------------------
  const planetX = -2.8
  let currentPlanetData = PLANETS_DATA.find((p) => p.id === 'earth') || PLANETS_DATA[2]

  // PLANET (Left Body, Mass M)
  const planetGroup = new THREE.Group()
  planetGroup.position.set(planetX, 0, 0)
  scene.add(planetGroup)

  const planetRadius = 1.35
  const planetGeo = new THREE.SphereGeometry(planetRadius, 48, 36)
  const planetMat = new THREE.MeshStandardMaterial({
    color: currentPlanetData.surfaceColorHex || '#2b6ea3',
    roughness: 0.55,
    metalness: 0.1,
  })
  const planetMesh = new THREE.Mesh(planetGeo, planetMat)
  planetGroup.add(planetMesh)

  // Subtle atmospheric rim
  const atmoGeo = new THREE.SphereGeometry(planetRadius * 1.05, 48, 36)
  const atmoMat = new THREE.MeshBasicMaterial({
    color: '#73b9ff',
    transparent: true,
    opacity: 0.18,
    side: THREE.BackSide,
  })
  const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat)
  planetGroup.add(atmoMesh)

  // Planet In-Scene Label
  const planetLabel = createLabelSprite('PLANET (Mass M)', {
    fontSize: 22,
    textColor: '#9fc7f8',
    borderColor: 'rgba(159, 199, 248, 0.4)',
    scale: 0.9,
  })
  planetLabel.sprite.position.set(planetX, 1.85, 0)
  scene.add(planetLabel.sprite)

  // OBJECT (Right Body, Test Mass m)
  let distanceParam = initialParams.distance ?? 1.0
  const objectGroup = new THREE.Group()
  scene.add(objectGroup)

  const objectRadius = 0.28
  const objectGeo = new THREE.SphereGeometry(objectRadius, 32, 24)
  const objectMat = new THREE.MeshStandardMaterial({
    color: '#ffbe3b',
    emissive: '#ff7700',
    emissiveIntensity: 0.45,
    roughness: 0.3,
    metalness: 0.7,
  })
  const objectMesh = new THREE.Mesh(objectGeo, objectMat)
  objectGroup.add(objectMesh)

  // Locator ring around object for immediate high visibility
  const ringGeo = new THREE.RingGeometry(0.38, 0.44, 32)
  const ringMat = new THREE.MeshBasicMaterial({
    color: '#ffffff',
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.75,
  })
  const ringMesh = new THREE.Mesh(ringGeo, ringMat)
  objectGroup.add(ringMesh)

  // Object In-Scene Label
  const objectLabel = createLabelSprite('OBJECT (m)', {
    fontSize: 20,
    textColor: '#ffd175',
    borderColor: 'rgba(255, 209, 117, 0.5)',
    scale: 0.8,
  })
  scene.add(objectLabel.sprite)

  // ----------------------------------------------------
  // PART 4: Visual Distance Indicator Line & Badge
  // ----------------------------------------------------
  const dimLineMat = new THREE.LineBasicMaterial({
    color: '#73ffd3',
    linewidth: 2,
    transparent: true,
    opacity: 0.85,
  })
  const dimLineGeo = new THREE.BufferGeometry()
  const dimLinePositions = new Float32Array(6 * 3)
  dimLineGeo.setAttribute('position', new THREE.BufferAttribute(dimLinePositions, 3))
  const dimLine = new THREE.LineSegments(dimLineGeo, dimLineMat)
  scene.add(dimLine)

  const distanceLabel = createLabelSprite('DISTANCE: 1.0× baseline', {
    fontSize: 21,
    textColor: '#73ffd3',
    borderColor: 'rgba(115, 255, 211, 0.6)',
    scale: 0.95,
  })
  scene.add(distanceLabel.sprite)

  // ----------------------------------------------------
  // PART 5: Visual Gravity Force Vector Arrow
  // ----------------------------------------------------
  const arrowDir = new THREE.Vector3(-1, 0, 0)
  const arrowOrigin = new THREE.Vector3(0, 0, 0)
  const forceArrow = new THREE.ArrowHelper(arrowDir, arrowOrigin, 1.4, 0xff4d36, 0.35, 0.22)
  scene.add(forceArrow)

  const forceLabel = createLabelSprite('GRAVITATIONAL PULL', {
    fontSize: 18,
    textColor: '#ff8a7a',
    borderColor: 'rgba(255, 77, 54, 0.4)',
    scale: 0.85,
  })
  scene.add(forceLabel.sprite)

  // ----------------------------------------------------
  // PART 7: Three Understandable Physical States Banner
  // ----------------------------------------------------
  const stateBanner = createLabelSprite('BASELINE: Distance 1.0× · Gravity 1.0×', {
    fontSize: 22,
    textColor: '#ffffff',
    borderColor: 'rgba(133, 189, 255, 0.5)',
    scale: 1.15,
  })
  stateBanner.sprite.position.set(0, 2.7, 0)
  scene.add(stateBanner.sprite)

  function getVisualPos(d) {
    const rVisual = 1.6 + 2.6 * d
    return planetX + rVisual
  }

  function applyDistance(d) {
    distanceParam = Math.max(0.5, Math.min(2.5, d))
    const objX = getVisualPos(distanceParam)
    objectGroup.position.set(objX, 0, 0)
    objectLabel.sprite.position.set(objX, 0.72, 0)

    // Update Distance Indicator Line
    const lineY = -0.85
    const tickH = 0.18
    const posArr = dimLineGeo.attributes.position.array
    posArr[0] = planetX; posArr[1] = lineY - tickH; posArr[2] = 0
    posArr[3] = planetX; posArr[4] = lineY + tickH; posArr[5] = 0
    posArr[6] = objX; posArr[7] = lineY - tickH; posArr[8] = 0
    posArr[9] = objX; posArr[10] = lineY + tickH; posArr[11] = 0
    posArr[12] = planetX; posArr[13] = lineY; posArr[14] = 0
    posArr[15] = objX; posArr[16] = lineY; posArr[17] = 0
    dimLineGeo.attributes.position.needsUpdate = true

    // Distance Label Sprite at midpoint
    const midX = (planetX + objX) / 2
    distanceLabel.sprite.position.set(midX, -1.35, 0)
    distanceLabel.update(`DISTANCE: ${distanceParam.toFixed(1)}× baseline`)

    // Inverse-Square Gravity Calculation: F / F0 = 1 / (d^2)
    const forceRatio = 1 / (distanceParam * distanceParam)
    const arrowLen = Math.max(0.45, Math.min(2.5, 1.4 / Math.pow(distanceParam, 1.35)))
    const headLen = Math.min(0.38, arrowLen * 0.32)
    const headW = Math.min(0.25, arrowLen * 0.22)

    forceArrow.position.set(objX, 0, 0)
    forceArrow.setLength(arrowLen, headLen, headW)

    let arrowColor = 0xff5533
    if (distanceParam < 0.95) arrowColor = 0xff2a2a
    else if (distanceParam > 1.05) arrowColor = 0xffaa33
    forceArrow.setColor(arrowColor)

    forceLabel.sprite.position.set(objX - arrowLen / 2, 0.42, 0)
    forceLabel.update(
      `PULL: ${forceRatio >= 1.0 ? forceRatio.toFixed(1) : forceRatio.toFixed(2)}×`,
      distanceParam < 0.95 ? '#ff7777' : distanceParam > 1.05 ? '#ffcc66' : '#ff9988'
    )

    // Three Understandable States (Part 7)
    if (distanceParam < 0.95) {
      stateBanner.update(
        'CLOSER: Gravity is stronger',
        '#73ffd3',
        'rgba(115, 255, 211, 0.7)'
      )
    } else if (distanceParam > 1.05) {
      stateBanner.update(
        'FARTHER: Gravity is weaker',
        '#ffb866',
        'rgba(255, 184, 102, 0.7)'
      )
    } else {
      stateBanner.update(
        'BASELINE: 1.0× Distance · 1.0× Gravity',
        '#ffffff',
        'rgba(133, 189, 255, 0.5)'
      )
    }
  }

  // Initial synchronization
  applyDistance(distanceParam)

  function resize() {
    const { clientWidth: width, clientHeight: height } = container
    if (width === 0 || height === 0) return
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
  }
  window.addEventListener('resize', resize)
  resize()

  let frameId
  let lastTime = performance.now()

  function animate() {
    const now = performance.now()
    const dt = Math.min(0.05, (now - lastTime) / 1000)
    lastTime = now

    // Calm planetary axial rotation only
    planetMesh.rotation.y += 0.0015
    ringMesh.rotation.z += 0.005

    renderer.render(scene, camera)
    frameId = requestAnimationFrame(animate)
  }
  animate()

  function updateParams(params) {
    if (!params) return
    if (params.distance !== undefined) {
      applyDistance(params.distance)
    }
    if (params.selectedPlanetId !== undefined) {
      const p = PLANETS_DATA.find((item) => item.id === params.selectedPlanetId)
      if (p) {
        currentPlanetData = p
        planetMat.color.set(p.surfaceColorHex || p.color)
      }
    }
  }

  function resetView() {
    camera.position.set(0, 0, 10)
    camera.lookAt(0, 0, 0)
  }

  const dispose = () => {
    cancelAnimationFrame(frameId)
    window.removeEventListener('resize', resize)
    planetGeo.dispose()
    planetMat.dispose()
    atmoGeo.dispose()
    atmoMat.dispose()
    objectGeo.dispose()
    objectMat.dispose()
    ringGeo.dispose()
    ringMat.dispose()
    dimLineGeo.dispose()
    dimLineMat.dispose()
    starfield.geometry.dispose()
    starfield.material.dispose()
    planetLabel.dispose()
    objectLabel.dispose()
    distanceLabel.dispose()
    forceLabel.dispose()
    stateBanner.dispose()
    renderer.dispose()
    renderer.domElement.remove()
  }

  const sceneApi = {
    setDistance: applyDistance,
    resetView,
    getPhysicsState: () => ({
      distance: distanceParam,
      forceRatio: 1 / (distanceParam * distanceParam),
      accelerationMs2: 9.81 / (distanceParam * distanceParam),
      stateLabel:
        distanceParam < 0.95
          ? 'Gravity is stronger'
          : distanceParam > 1.05
          ? 'Gravity is weaker'
          : 'Baseline',
    }),
    selectPlanet: (planetId) => {
      const p = PLANETS_DATA.find((item) => item.id === planetId)
      if (p) {
        currentPlanetData = p
        planetMat.color.set(p.surfaceColorHex || p.color)
      }
    },
    triggerDrop: () => {},
    setObjectMass: () => {},
  }

  return {
    dispose,
    updateParams,
    sceneApi,
    resetView,
    setDistance: applyDistance,
    selectPlanet: sceneApi.selectPlanet,
    triggerDrop: sceneApi.triggerDrop,
    setObjectMass: sceneApi.setObjectMass,
  }
}
