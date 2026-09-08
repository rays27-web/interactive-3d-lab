import React, { useState, useEffect } from 'react'
import PhysicsExplanation from './PhysicsExplanation'

const EXPERIMENTS = [
  {
    id: 'inverse-square',
    number: '01',
    title: 'INVERSE-SQUARE GRAVITATION',
    subtitle: 'Observe how gravitational attraction decays quadratically with distance',
    targetBody: 'earth',
    targetBodyName: 'Earth',
    type: 'distance',
    formula: 'F = G·(M☉·m) / r²  ⟹  F ∝ 1/r²',
    curriculum: 'Class 11 Physics, Chapter 8: Gravitation — Universal Law of Gravitation',
    presets: [
      { label: '0.5× Distance (4.00× Force)', value: 0.5, desc: 'Perihelion compression: force quadruples' },
      { label: '1.0× Baseline (1.00× Force)', value: 1.0, desc: 'Nominal 1.0 AU circular orbit' },
      { label: '2.0× Distance (0.25× Force)', value: 2.0, desc: 'Aphelion extension: force drops to 25%' },
      { label: '3.0× Distance (0.11× Force)', value: 3.0, desc: 'Distant orbit: force falls to ~11%' },
    ],
    derivation: 'Gravitational flux spreads across a spherical surface of area A = 4πr². Doubling r multiplies the surface area by 4, diluting field intensity to exactly F(2r) = G·M·m / (2r)² = 0.25 F₀.',
    getObservation: (val) => {
      const forceRatio = 1.0 / (val * val)
      return `At r = ${val.toFixed(2)}× baseline, gravitational force F = ${forceRatio.toFixed(2)} F₀ (${(forceRatio * 100).toFixed(1)}% of baseline).`
    },
    getWhatChanged: (val) => `Orbital radius r set to ${val.toFixed(2)}× standard 1.0 AU distance.`,
    getWhatHappened: (val) => {
      const ratio = 1.0 / (val * val)
      if (val < 1.0) {
        return `Orbital distance compressed to ${val.toFixed(2)}×. Gravitational attraction intensified by ${(ratio).toFixed(2)}×, requiring stronger centripetal acceleration to hold orbit.`
      }
      return `Orbital distance dilated to ${val.toFixed(2)}×. Gravitational pull decayed quadratically to ${(ratio * 100).toFixed(1)}% of baseline force.`
    },
  },
  {
    id: 'orbital-velocity',
    number: '02',
    title: 'ORBITAL VELOCITY & STABILITY',
    subtitle: 'Explore the 3 physical regimes of Keplerian orbital speed',
    targetBody: 'earth',
    targetBodyName: 'Earth',
    type: 'velocity',
    formula: 'v_orb = √(G·M☉ / r)',
    curriculum: 'Class 11 Physics, Chapter 8: Gravitation — Orbital Speed of a Satellite',
    presets: [
      { label: '0.50× (Too Slow ⟹ Spiral)', value: 0.5, desc: 'Centripetal shortfall: gravity pulls planet sunward' },
      { label: '1.00× (Stable Circular)', value: 1.0, desc: 'Exact Keplerian balance: F_grav = m·v²/r' },
      { label: '1.30× (High-Eccentricity)', value: 1.3, desc: 'Excess kinetic energy stretches orbit into ellipse' },
    ],
    derivation: 'Equating Newton’s gravitational force to the required centripetal acceleration: G·M·m / r² = m·v² / r  ⟹  v_orb = √(G·M / r). If tangential speed v < v_orb, gravity dominates and the orbital radius collapses inward.',
    getObservation: (val) => {
      if (val <= 0.7) return `Velocity = ${val.toFixed(2)} v₀: Under-speed regime. Orbit destabilizes into an inward spiral toward the Sun.`
      if (val >= 1.25) return `Velocity = ${val.toFixed(2)} v₀: Super-circular regime. Orbit elongates into a highly eccentric ellipse.`
      return `Velocity = ${val.toFixed(2)} v₀: Balanced Keplerian regime. Stable quasi-circular orbit maintained.`
    },
    getWhatChanged: (val) => `Instantaneous tangential orbital velocity scaled to ${val.toFixed(2)}× nominal circular speed.`,
    getWhatHappened: (val) => {
      if (val <= 0.7) return 'Centripetal acceleration v²/r is insufficient to counteract solar gravity. Earth plummets inward in a decay trajectory.'
      if (val >= 1.25) return 'Excess kinetic energy exceeds circular orbital threshold. Trajectory elongates into an eccentric ellipse with distant aphelion.'
      return 'Centripetal acceleration matches gravitational pull perfectly. Continuous stable closed revolution.'
    },
  },
  {
    id: 'escape-velocity',
    number: '03',
    title: 'ESCAPE VELOCITY THRESHOLD',
    subtitle: 'Verify the parabolic escape boundary where total mechanical energy E = 0',
    targetBody: 'earth',
    targetBodyName: 'Earth',
    type: 'velocity',
    formula: 'v_e = √(2·G·M☉ / r) = √2 · v_orb ≈ 1.414 v₀',
    curriculum: 'Class 11 Physics, Chapter 8: Gravitation — Escape Speed & Energy Conservation',
    presets: [
      { label: '1.10× (Bound Ellipse, E < 0)', value: 1.1, desc: 'Kinetic energy < Gravitational binding energy' },
      { label: '1.42× (Parabolic Escape, E ≈ 0)', value: 1.42, desc: 'Critical threshold: escape to infinity at v = 0' },
      { label: '1.80× (Hyperbolic Escape, E > 0)', value: 1.8, desc: 'Unbounded trajectory permanently leaving Sun' },
    ],
    derivation: 'By conservation of mechanical energy: E_total = K + U = ½·m·v² - G·M·m / r. For an object to reach infinity with zero velocity (E_total = 0): ½·m·v_e² = G·M·m / r  ⟹  v_e = √(2·G·M / r) = √2 · v_orb.',
    getObservation: (val) => {
      if (val >= 1.414) return `Speed = ${val.toFixed(2)} v₀ (≥ √2 v₀): Escape condition fulfilled. Body follows an open parabolic/hyperbolic escape trajectory.`
      return `Speed = ${val.toFixed(2)} v₀ (< 1.414 v₀): Bound state. Total mechanical energy E < 0; body remains gravitationally trapped.`
    },
    getWhatChanged: (val) => `Orbital speed set to ${val.toFixed(2)}× baseline (Escape threshold = √2 ≈ 1.414×).`,
    getWhatHappened: (val) => {
      if (val >= 1.414) return 'Total mechanical energy E = K + U ≥ 0. The planet escapes solar gravitational binding into interstellar space.'
      return 'Total energy E < 0. Gravitational potential well binds the body into a closed orbit.'
    },
  },
  {
    id: 'surface-gravity',
    number: '04',
    title: 'GRAVITATIONAL ACCELERATION',
    subtitle: 'Compare planetary surface gravity across terrestrial and gas giant bodies',
    targetBody: 'jupiter',
    targetBodyName: 'Jupiter',
    type: 'comparison',
    formula: 'g = G·M / R²',
    curriculum: 'Class 11 Physics, Chapter 8: Gravitation — Acceleration Due to Gravity',
    presets: [
      { label: 'Mercury (3.70 m/s² | 0.38g)', value: 'mercury', g: 3.7, desc: 'Small rocky core, modest surface field' },
      { label: 'Earth (9.81 m/s² | 1.00g)', value: 'earth', g: 9.81, desc: 'Standard terrestrial reference' },
      { label: 'Mars (3.72 m/s² | 0.38g)', value: 'mars', g: 3.72, desc: 'Roughly 38% Earth gravity' },
      { label: 'Jupiter (24.79 m/s² | 2.53g)', value: 'jupiter', g: 24.79, desc: 'Deep gravitational well: 2.53× Earth g' },
    ],
    derivation: 'Weight on surface is W = m·g = G·M·m / R²  ⟹  g = G·M / R². Jupiter has 318× Earth’s mass but an 11× larger radius: g_Jup = 318 / (11)² · g_Earth ≈ 2.53 · 9.81 ≈ 24.8 m/s².',
    getObservation: (bodyId) => {
      const map = { mercury: '3.70 m/s² (0.38 g⊕)', earth: '9.81 m/s² (1.00 g⊕)', mars: '3.72 m/s² (0.38 g⊕)', jupiter: '24.79 m/s² (2.53 g⊕)' }
      return `Selected body surface gravitational acceleration g = ${map[bodyId] || '9.81 m/s²'}.`
    },
    getWhatChanged: (bodyId) => `Inspecting surface gravitational field for planetary body: ${bodyId.toUpperCase()}.`,
    getWhatHappened: (bodyId) => `Surface gravity scales proportionally to mass and inversely to the square of planetary radius (g = GM/R²).`,
  },
  {
    id: 'kepler-law',
    number: '05',
    title: "KEPLER'S HARMONIC LAW",
    subtitle: 'Demonstrate that T² / a³ is an invariant constant for all bodies orbiting the Sun',
    targetBody: 'mars',
    targetBodyName: 'Mars vs Earth',
    type: 'kepler',
    formula: 'T² / a³ = 4π² / (G·M☉) = 1.000 (AU/yr units)',
    curriculum: "Class 11 Physics, Chapter 8: Gravitation — Kepler's Third Law (Law of Periods)",
    presets: [
      { label: 'Earth (a = 1.00 AU, T = 1.00 yr)', a: 1.0, t: 1.0, desc: 'Harmonic ratio: (1.00)² / (1.00)³ = 1.00' },
      { label: 'Mars (a = 1.52 AU, T = 1.88 yr)', a: 1.524, t: 1.88, desc: 'Harmonic ratio: (1.88)² / (1.524)³ = 1.00' },
      { label: 'Jupiter (a = 5.20 AU, T = 11.86 yr)', a: 5.204, t: 11.86, desc: 'Harmonic ratio: (11.86)² / (5.204)³ = 1.00' },
    ],
    derivation: 'For circular motion: m·(2π·r / T)² / r = G·M·m / r²  ⟹  4π²·r / T² = G·M / r²  ⟹  T² / r³ = 4π² / (G·M). Because the central solar mass M is identical for all solar planets, T² / a³ is invariant.',
    getObservation: (item) => `Semi-major axis a = ${item.a} AU, Orbital period T = ${item.t} yr. Harmonic ratio T²/a³ = ${(item.t ** 2 / item.a ** 3).toFixed(3)}.`,
    getWhatChanged: (item) => `Comparative orbital period measurement across planetary semi-major axes.`,
    getWhatHappened: () => `Planetary orbital period increases nonlinearly with distance because outer planets travel longer orbits at lower orbital velocities.`,
  },
]

function ExperimentChallenge({
  isOpen,
  onClose,
  sceneApi,
  onRecordObservation,
}) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [activeValue, setActiveValue] = useState(1.0)
  const [isExplanationOpen, setIsExplanationOpen] = useState(false)
  const [activeExplanation, setActiveExplanation] = useState(null)
  const [liveObservation, setLiveObservation] = useState('')
  const [hasStarted, setHasStarted] = useState(false)

  const currentExp = EXPERIMENTS[activeIdx]

  useEffect(() => {
    // Reset state when switching experiment tabs
    const defPreset = currentExp.presets[1] || currentExp.presets[0]
    const defVal = defPreset?.value !== undefined ? defPreset.value : defPreset
    setActiveValue(defVal)
    setHasStarted(false)
    setIsExplanationOpen(false)
    setLiveObservation(currentExp.type === 'kepler' ? currentExp.getObservation(defPreset) : currentExp.getObservation(defVal))
  }, [activeIdx])

  if (!isOpen) return null

  const handleApplyParam = (val, preset) => {
    setActiveValue(val)
    setHasStarted(true)

    if (currentExp.type === 'distance') {
      sceneApi?.setBodyDistance?.(currentExp.targetBody, val)
    } else if (currentExp.type === 'velocity') {
      sceneApi?.setBodyVelocity?.(currentExp.targetBody, val)
    } else if (currentExp.type === 'comparison') {
      sceneApi?.selectPlanet?.(val)
      sceneApi?.focusPlanet?.(val)
    } else if (currentExp.type === 'kepler') {
      // Focus planet
      const pId = preset?.label?.split(' ')[0]?.toLowerCase() || 'earth'
      sceneApi?.selectPlanet?.(pId)
    }

    const obs = currentExp.type === 'kepler' ? currentExp.getObservation(preset) : currentExp.getObservation(val)
    setLiveObservation(obs)

    // Prepare scientific explanation
    setActiveExplanation({
      title: `${currentExp.title} — LIVE RESULT`,
      whatChanged: currentExp.getWhatChanged(val),
      whatHappened: currentExp.getWhatHappened(val),
      formula: currentExp.formula,
      curriculumRef: currentExp.curriculum,
      derivation: currentExp.derivation,
    })
  }

  const handleReset = () => {
    if (currentExp.type === 'distance' || currentExp.type === 'velocity') {
      sceneApi?.resetBody?.(currentExp.targetBody)
    } else {
      sceneApi?.resetAllBodies?.()
    }
    const defVal = currentExp.presets[1]?.value ?? 1.0
    setActiveValue(defVal)
    setHasStarted(false)
    setIsExplanationOpen(false)
    setLiveObservation('Simulation reset to baseline circular Keplerian orbit.')
  }

  const handleRecordToLog = () => {
    if (onRecordObservation) {
      onRecordObservation({
        experimentTitle: currentExp.title,
        parameterChanged: currentExp.getWhatChanged(activeValue),
        consequence: currentExp.getWhatHappened(activeValue),
        observed: liveObservation,
        principle: currentExp.formula,
        curriculum: currentExp.curriculum,
      })
    }
  }

  return (
    <div
      aria-label="Interactive Physics Experiment Lab"
      className="challenge-drawer"
      role="region"
    >
      <div className="challenge-header">
        <div className="challenge-title-group">
          <span className="challenge-tag">INTERACTIVE PHYSICS LABORATORY</span>
          <h2 className="challenge-title">PHYSICS EXPERIMENTS & DEMOS</h2>
        </div>
        <button
          aria-label="Close Physics Challenges"
          className="challenge-close-btn"
          onClick={onClose}
          type="button"
        >
          ✕
        </button>
      </div>

      {/* Tabs */}
      <div
        aria-label="Select physics demo"
        className="challenge-tabs"
        role="tablist"
      >
        {EXPERIMENTS.map((exp, idx) => {
          const isActive = idx === activeIdx
          return (
            <button
              aria-selected={isActive}
              className={`challenge-tab-btn ${isActive ? 'is-active' : ''}`}
              key={exp.id}
              onClick={() => setActiveIdx(idx)}
              role="tab"
              type="button"
            >
              <span className="challenge-tab-num">{exp.number}</span>
              <span className="challenge-tab-name">{exp.title}</span>
            </button>
          )
        })}
      </div>

      {/* Main Experiment Interactive Card */}
      <div className="challenge-content-card">
        <div className="challenge-banner-row">
          <div className="challenge-num-pill">EXPERIMENT {currentExp.number}</div>
          <div className="challenge-concept-pill">{currentExp.formula}</div>
        </div>

        <h3 className="challenge-name">{currentExp.title}</h3>
        <p className="challenge-instruction">{currentExp.subtitle}</p>

        {/* Action Controls */}
        <div className="challenge-interactive-box">
          <div className="interactive-header">
            <span className="slider-label">PHYSICAL PARAMETER REGIMES</span>
            <span className="slider-value">
              TARGET: {currentExp.targetBodyName.toUpperCase()}
            </span>
          </div>

          <div className="preset-pill-grid">
            {currentExp.presets.map((p, pIdx) => {
              const val = p.value !== undefined ? p.value : p
              const isSelected = activeValue === val
              return (
                <button
                  className={`preset-param-btn ${isSelected ? 'is-selected' : ''}`}
                  key={pIdx}
                  onClick={() => handleApplyParam(val, p)}
                  type="button"
                >
                  <span className="preset-btn-label">{p.label}</span>
                  <span className="preset-btn-desc">{p.desc}</span>
                </button>
              )
            })}
          </div>

          <div className="challenge-result-row">
            <div className="result-metric">
              <span className="result-label">LIVE 3D SIMULATION OBSERVATION</span>
              <span className="result-value live">{liveObservation}</span>
            </div>
            <div className="challenge-action-buttons">
              <button
                className="challenge-why-btn"
                onClick={() => setIsExplanationOpen((prev) => !prev)}
                type="button"
              >
                {isExplanationOpen ? 'HIDE WHY?' : '✦ WHY DID THIS HAPPEN?'}
              </button>
              <button
                className="challenge-reset-btn"
                onClick={handleReset}
                type="button"
              >
                RESET BASELINE
              </button>
            </div>
          </div>
        </div>

        {/* Embedded Why Did This Happen Explanation */}
        {isExplanationOpen && activeExplanation && (
          <PhysicsExplanation
            curriculumRef={activeExplanation.curriculumRef}
            derivation={activeExplanation.derivation}
            formula={activeExplanation.formula}
            isOpen={isExplanationOpen}
            onClose={() => setIsExplanationOpen(false)}
            onRecord={handleRecordToLog}
            title={activeExplanation.title}
            whatChanged={activeExplanation.whatChanged}
            whatHappened={activeExplanation.whatHappened}
          />
        )}
      </div>
    </div>
  )
}

export default ExperimentChallenge
