import React, { useState, useMemo } from 'react'
import { PHYSICS_CONCEPTS } from '../data/physicsConcepts'

export const CONCEPT_INQUIRIES = PHYSICS_CONCEPTS

export const EXPERIMENT_INQUIRIES = [
  {
    id: 'exp-distance',
    title: 'Change distance: What happens if you double orbital distance (2.0 AU)?',
    curriculum: 'Class 11 Physics, Chapter 8: Gravitation — Inverse-Square Law',
    experimentId: 'solar-system',
    experimentName: '06 / SOLAR SYSTEM',
    controlVariable: 'Orbital Distance: 1.00 AU ⟶ 2.00 AU',
    hypothesis:
      'Doubling orbit radius will drastically dilute gravitational attraction and lower the orbital speed required for circular balance.',
    actionLabel: 'SIMULATE 2.0× DISTANCE (RUN)',
    action: (helpers) => {
      helpers.setActiveExperiment('solar-system')
      helpers.sceneApi?.setBodyDistance?.('earth', 2.0)
    },
    measurement: {
      metricTitle: 'Gravitational Force Ratio (F / F₀)',
      baseline: '1.00 F₀ (100%) at 1.0 AU',
      measuredValue: '0.25 F₀ (25%) at 2.0 AU',
      delta: '-75.0%',
      velocityChange: 'Speed drops from 29.8 km/s to 21.1 km/s (-29.2%)',
    },
    why: "Newton's Inverse-Square Law states F ∝ 1/r². Doubling distance spreads the gravitational flux over 4× the spherical surface area (2² = 4), diluting the pull to exactly 25%. Because gravitational pull is weaker, less centripetal acceleration (v²/r) is needed to balance the orbit, so the planet moves slower.",
    understanding:
      'Distance has a geometric square-decay effect on gravity: doubling distance reduces gravitational pull by 75%, requiring outer planets to move significantly slower.',
    linkedConceptId: 'concept-gravity',
    keywords: ['distance', 'double', '2 au', 'inverse square', 'orbit', 'solar-system'],
  },
  {
    id: 'exp-slow-down',
    title: 'Slow down speed: What happens if a planet slows down in orbit (0.50×)?',
    curriculum: 'Class 11 Physics, Chapter 8: Gravitation — Orbital Decay & Collapse',
    experimentId: 'solar-system',
    experimentName: '06 / SOLAR SYSTEM',
    controlVariable: 'Orbital Velocity: 1.00× ⟶ 0.50× (14.9 km/s)',
    hypothesis:
      'If tangential speed falls below circular speed, inward gravitational pull will overpower centripetal inertia, plunging the planet sunward.',
    actionLabel: 'SIMULATE SLOWING DOWN (0.50×)',
    action: (helpers) => {
      helpers.setActiveExperiment('solar-system')
      helpers.sceneApi?.setBodyVelocity?.('earth', 0.5)
    },
    measurement: {
      metricTitle: 'Centripetal Acceleration Deficit',
      baseline: 'ac = g = 5.93 × 10⁻³ m/s² (Circular Balance)',
      measuredValue: 'ac = 0.25 g (-75.0% deficit)',
      delta: 'Inward Spiral',
      velocityChange: 'Trajectory decays from circular to inward elliptical plunge',
    },
    why: 'Centripetal acceleration needed to stay in orbit is ac = v²/r. Halving the speed (0.50×) slashes outward inertial requirement to (0.5)² = 0.25 of gravity. With inward gravity 4× stronger than inertia, the planet immediately plunges sunward into an inward decay spiral.',
    understanding:
      'Orbital stability requires a precise balance between tangential speed and gravity; slowing down destroys the orbit and triggers a gravitational plunge.',
    linkedConceptId: 'concept-orbit',
    keywords: ['slow', 'speed', 'velocity', 'spiral', 'fall', 'decay', 'solar-system'],
  },
  {
    id: 'exp-escape',
    title: 'Exceed threshold: What happens when speed reaches escape velocity (1.45×)?',
    curriculum: 'Class 11 Physics, Chapter 8: Gravitation — Escape Speed & Unbound Orbit',
    experimentId: 'solar-system',
    experimentName: '06 / SOLAR SYSTEM',
    controlVariable: 'Orbital Velocity: 1.00× ⟶ 1.45× (43.2 km/s)',
    hypothesis:
      'Boosting speed past √2 ≈ 1.414× provides positive mechanical energy (E > 0), causing the planet to permanently escape on an open hyperbolic path.',
    actionLabel: 'SIMULATE ESCAPE VELOCITY (1.45×)',
    action: (helpers) => {
      helpers.setActiveExperiment('solar-system')
      helpers.sceneApi?.setBodyVelocity?.('earth', 1.45)
    },
    measurement: {
      metricTitle: 'Orbital Eccentricity & Mechanical Energy',
      baseline: 'e = 0.00, E = -1.18 × 10³³ J (Bound Ellipse)',
      measuredValue: 'e = 1.12, E = +1.45 × 10³² J (Unbound Hyperbola)',
      delta: '+124% Energy',
      velocityChange: 'Speed exceeds escape threshold: ve = √2 · vorb',
    },
    why: 'Gravitational potential energy is negative (U = -GMm/r). Kinetic energy is K = ½mv². At v = √2 vorb, K = |U| and total energy E = 0. Exceeding this threshold (1.45×) gives positive total energy (E > 0), so gravity can never slow the craft to zero; it permanently escapes along a hyperbolic path.',
    understanding:
      'Escape velocity is an absolute energy threshold: below √2 · vorb gravity holds an object in a closed loop; above it, inertia breaks free forever.',
    linkedConceptId: 'concept-escape-velocity',
    keywords: ['escape', 'velocity', 'hyperbolic', 'speed', 'threshold', 'solar-system'],
  },
  {
    id: 'exp-planet-mass',
    title: 'Change planet: Compare weight of a 50 kg mass on Earth vs Jupiter',
    curriculum: 'Class 9/11 Physics — Planetary Surface Gravitational Acceleration',
    experimentId: 'planet',
    experimentName: '01 / PLANET',
    controlVariable: 'Target Surface: Earth (9.81 m/s²) ⟶ Jupiter (24.79 m/s²)',
    hypothesis:
      'A 50 kg test mass will retain the exact same 50 kg mass on Jupiter, but will register 2.53× more weight force on the spring scale.',
    actionLabel: 'MEASURE JUPITER GRAVITY (RUN)',
    action: (helpers) => {
      helpers.setActiveExperiment('planet')
      helpers.sceneApi?.selectPlanet?.('jupiter')
      helpers.sceneApi?.focusPlanet?.('jupiter')
    },
    measurement: {
      metricTitle: 'Surface Weight Comparison (W = mg)',
      baseline: 'Earth (1.00g): m = 50.0 kg, W = 490.5 N',
      measuredValue: 'Jupiter (2.53g): m = 50.0 kg, W = 1239.5 N',
      delta: '+152.7%',
      velocityChange: 'Downward surface acceleration g: 9.81 m/s² ⟶ 24.79 m/s²',
    },
    why: 'Surface gravity is g = GM/R². Jupiter has 318× the mass of Earth, but its radius is 11.2× larger. Since gravity scales inversely with R², g_Jup = (318 / 11.2²) · g_Earth ≈ 2.53 · 9.81 = 24.79 m/s². The mass (50 kg) remains identical, but the spring scale measures the downward force W = mg.',
    understanding:
      'Mass is universal and invariant; weight is a localized interaction force directly proportional to the local gravitational field.',
    linkedConceptId: 'concept-weight',
    keywords: ['jupiter', 'planet', 'weight', 'mass', 'surface', 'g', 'scale'],
  },
  {
    id: 'exp-pulsar-spin',
    title: 'Change pulsar period: Accelerate spin rate to 700 Hz (Millisecond Pulsar)',
    curriculum: 'Astrophysics — Rotational Period & Magnetic Dipole Sweep',
    experimentId: 'pulsar',
    experimentName: '05 / PULSAR',
    controlVariable: 'Rotational Period: 1.00 s ⟶ 0.0014 s (700 Hz)',
    hypothesis:
      'Spinning up the neutron star compresses pulse separation into millisecond intervals and sweeps radiation beams across the observer at ultra-high frequency.',
    actionLabel: 'ACCELERATE PULSAR SPIN (RUN)',
    action: (helpers) => {
      helpers.setActiveExperiment('pulsar')
    },
    measurement: {
      metricTitle: 'Pulse Period & Frequency Readout',
      baseline: 'Period P = 1.00 s, Frequency f = 1.0 Hz',
      measuredValue: 'Period P = 1.43 ms, Frequency f = 700.0 Hz',
      delta: '700× Flash Rate',
      velocityChange: 'Beam sweep angular velocity ω = 4,398 rad/s',
    },
    why: 'The pulse period detected on Earth is strictly the physical rotation period of the neutron star (P = 2π/ω). By rotating 700 times each second, the oblique magnetic beam sweeps through our line of sight every 1.4 milliseconds, recorded as rapid peaks on the signal oscilloscope.',
    understanding:
      'Pulsars are nature’s most precise astronomical clocks, converting conserved rotational angular momentum into rapid electromagnetic pulses.',
    linkedConceptId: 'concept-pulsar',
    keywords: ['pulsar', 'period', 'spin', 'frequency', 'oscilloscope', '700 hz'],
  },
  {
    id: 'exp-fluid-viscosity',
    title: 'Change viscosity: Transition from turbulent swirls to laminar flow',
    curriculum: 'Fluid Dynamics — Reynolds Number & Viscous Dissipation',
    experimentId: 'fluid',
    experimentName: '04 / FLUID',
    controlVariable: 'Dynamic Viscosity: μ = 0.001 ⟶ 0.100 Pa·s',
    hypothesis:
      'Increasing fluid viscosity dampens chaotic vorticity cascades and forces velocity vectors into smooth, parallel streamlines.',
    actionLabel: 'INCREASE VISCOSITY (RUN)',
    action: (helpers) => {
      helpers.setActiveExperiment('fluid')
    },
    measurement: {
      metricTitle: 'Reynolds Number & Vorticity Dissipation',
      baseline: 'Re = 8,500 (Chaotic Turbulent Eddies)',
      measuredValue: 'Re = 85 (Laminar Streamlines)',
      delta: '-99.0% Turbulence',
      velocityChange: 'Viscous diffusion overpowers non-linear advective momentum',
    },
    why: 'The Navier-Stokes equation balances advective momentum (driving swirls) against viscous diffusion (smoothing velocity gradients). Increasing viscosity lowers the Reynolds number below the critical threshold (Re < 2,000), causing viscous drag to suppress turbulent eddy formation.',
    understanding:
      'Viscosity acts as internal shear friction, converting turbulent vortex kinetic energy into thermal dissipation and stabilizing smooth streamlines.',
    linkedConceptId: 'concept-fluid-flow',
    keywords: ['fluid', 'viscosity', 'turbulence', 'laminar', 'reynolds', 'flow'],
  },
]

function AskTheLab({
  isOpen,
  onClose,
  onSelectExperiment,
  sceneApi,
  onOpenChallengeWithIndex,
  onRecordObservation,
}) {
  const [activeMode, setActiveMode] = useState('concept') // 'concept' | 'experiment'
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedConceptId, setSelectedConceptId] = useState(PHYSICS_CONCEPTS[0].id)
  const [selectedExpId, setSelectedExpId] = useState(EXPERIMENT_INQUIRIES[0].id)
  const [isEquationExpanded, setIsEquationExpanded] = useState(false)
  const [logSuccessMsg, setLogSuccessMsg] = useState(null)

  // Filter lists based on search
  const filteredConcepts = useMemo(() => {
    if (!searchQuery.trim()) return PHYSICS_CONCEPTS
    const q = searchQuery.toLowerCase()
    return PHYSICS_CONCEPTS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.simpleExplanation.toLowerCase().includes(q) ||
        item.coreUnderstanding.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.includes(q))
    )
  }, [searchQuery])

  const filteredExperiments = useMemo(() => {
    if (!searchQuery.trim()) return EXPERIMENT_INQUIRIES
    const q = searchQuery.toLowerCase()
    return EXPERIMENT_INQUIRIES.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.hypothesis.toLowerCase().includes(q) ||
        item.why.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.includes(q))
    )
  }, [searchQuery])

  const activeConcept = useMemo(() => {
    return (
      PHYSICS_CONCEPTS.find((c) => c.id === selectedConceptId) ||
      filteredConcepts[0] ||
      PHYSICS_CONCEPTS[0]
    )
  }, [selectedConceptId, filteredConcepts])

  const activeExperiment = useMemo(() => {
    return (
      EXPERIMENT_INQUIRIES.find((e) => e.id === selectedExpId) ||
      filteredExperiments[0] ||
      EXPERIMENT_INQUIRIES[0]
    )
  }, [selectedExpId, filteredExperiments])

  if (!isOpen) return null

  // Trigger 3D simulation calibration
  const handleRunSimulation = (expItem) => {
    const helpers = {
      setActiveExperiment: onSelectExperiment,
      sceneApi,
      openChallengeWithIndex: onOpenChallengeWithIndex,
    }
    expItem.action?.(helpers)
    onClose()
  }

  // Cross-link from Concept to Experiment
  const handleJumpToExperiment = (linkedId) => {
    if (!linkedId) return
    setActiveMode('experiment')
    setSelectedExpId(linkedId)
  }

  // Cross-link from Experiment to Concept
  const handleJumpToConcept = (linkedId) => {
    if (!linkedId) return
    setActiveMode('concept')
    setSelectedConceptId(linkedId)
  }

  // Log empirical observation to laboratory journal without opening full History panel
  const handleLogObservation = (expItem) => {
    if (!onRecordObservation) return
    onRecordObservation({
      experimentTitle: expItem.experimentName,
      parameterChanged: expItem.controlVariable,
      consequence: `${expItem.measurement.metricTitle}: ${expItem.measurement.measuredValue}`,
      observed: expItem.why,
      principle: expItem.understanding,
      curriculum: expItem.curriculum,
    })
    setLogSuccessMsg('Observation recorded ✓')
    setTimeout(() => {
      setLogSuccessMsg(null)
    }, 2800)
  }

  return (
    <div
      aria-label="Ask the Lab Dual-Track Scientific Inquiry System"
      className="ask-lab-drawer"
      role="region"
    >
      {/* Header */}
      <div className="ask-lab-header">
        <div className="ask-lab-title-group">
          <span className="ask-lab-tag">PHYSICAL INQUIRY & SIMULATION ENGINE</span>
          <h2 className="ask-lab-title">ASK THE LAB</h2>
        </div>
        <button
          aria-label="Close Ask the Lab"
          className="ask-lab-close-btn"
          onClick={onClose}
          type="button"
        >
          ✕
        </button>
      </div>

      {/* Dual-Track Mode Selector */}
      <div className="ask-lab-modes" role="tablist" aria-label="Inquiry Track Mode">
        <button
          aria-selected={activeMode === 'concept'}
          className={`ask-mode-btn ${activeMode === 'concept' ? 'is-active' : ''}`}
          onClick={() => setActiveMode('concept')}
          role="tab"
          type="button"
        >
          <span className="mode-btn-icon" aria-hidden="true">💡</span>
          <div className="mode-btn-text">
            <span className="mode-btn-label">BASIC CONCEPT</span>
            <span className="mode-btn-sub">Intuition · Analogy · Equations</span>
          </div>
        </button>

        <button
          aria-selected={activeMode === 'experiment'}
          className={`ask-mode-btn ${activeMode === 'experiment' ? 'is-active' : ''}`}
          onClick={() => setActiveMode('experiment')}
          role="tab"
          type="button"
        >
          <span className="mode-btn-icon" aria-hidden="true">🔬</span>
          <div className="mode-btn-text">
            <span className="mode-btn-label">EXPERIMENT</span>
            <span className="mode-btn-sub">Run Simulation · Measure · Why</span>
          </div>
        </button>
      </div>

      {/* Search Bar */}
      <div className="ask-lab-search-bar">
        <span className="search-icon" aria-hidden="true">🔍</span>
        <input
          aria-label="Search physics inquiries"
          className="search-input"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={
            activeMode === 'concept'
              ? 'Search 20 basic concepts (e.g., gravity, mass, orbit, pressure, pulsar)...'
              : 'Search experiments (e.g., change distance, slow down, escape, jupiter)...'
          }
          type="search"
          value={searchQuery}
        />
        {searchQuery && (
          <button
            className="search-clear-btn"
            onClick={() => setSearchQuery('')}
            type="button"
          >
            CLEAR
          </button>
        )}
      </div>

      {/* Main Dual-Track Layout */}
      <div className="ask-lab-layout">
        {/* Left Column: Inquiry Pills */}
        <div className="ask-lab-pills">
          {activeMode === 'concept' ? (
            filteredConcepts.length === 0 ? (
              <div className="no-questions-state">
                <p>No matching concepts found.</p>
              </div>
            ) : (
              filteredConcepts.map((item) => {
                const isSelected = activeConcept.id === item.id
                return (
                  <button
                    className={`question-pill-btn ${isSelected ? 'is-selected' : ''}`}
                    key={item.id}
                    onClick={() => {
                      setSelectedConceptId(item.id)
                      setIsEquationExpanded(false)
                    }}
                    type="button"
                  >
                    <span className="pill-q-mark">?</span>
                    <span className="pill-q-text">{item.title}</span>
                  </button>
                )
              })
            )
          ) : filteredExperiments.length === 0 ? (
            <div className="no-questions-state">
              <p>No matching experiments found.</p>
            </div>
          ) : (
            filteredExperiments.map((item) => {
              const isSelected = activeExperiment.id === item.id
              return (
                <button
                  className={`question-pill-btn ${isSelected ? 'is-selected' : ''}`}
                  key={item.id}
                  onClick={() => setSelectedExpId(item.id)}
                  type="button"
                >
                  <span className="pill-q-mark">⚡</span>
                  <span className="pill-q-text">{item.title}</span>
                </button>
              )
            })
          )}
        </div>

        {/* Right Column: Educational Card */}
        {activeMode === 'concept' && activeConcept && (
          <div className="ask-lab-card concept-flow">
            {/* Header Badge */}
            <div className="card-badge-row">
              <span className="card-badge">THEORETICAL CONCEPT</span>
              <span className="card-curriculum">{activeConcept.curriculum}</span>
            </div>

            <h3 className="card-question">{activeConcept.title}</h3>

            {/* Block 1: Simple Explanation (Beginner-Friendly First) */}
            <div className="card-block simple-expl-block">
              <div className="block-label">
                <span className="block-icon" aria-hidden="true">💡</span>
                <span>SIMPLE EXPLANATION</span>
              </div>
              <p className="block-content">{activeConcept.simpleExplanation}</p>
            </div>

            {/* Block 2: Everyday Example & Analogy */}
            <div className="card-block analogy-block">
              <div className="block-label">
                <span className="block-icon" aria-hidden="true">🍎</span>
                <span>EVERYDAY EXAMPLE & ANALOGY</span>
              </div>
              {activeConcept.everydayExample && (
                <p className="block-content" style={{ marginBottom: '6px' }}>
                  <strong>Real world:</strong> {activeConcept.everydayExample}
                </p>
              )}
              {activeConcept.analogy && (
                <p className="block-content">
                  <strong>Mental model:</strong> {activeConcept.analogy}
                </p>
              )}
            </div>

            {/* Block 3: Equation (Optional / Expandable) */}
            {activeConcept.formula && (
              <div className="card-block equation-block">
                <button
                  className="equation-toggle-btn"
                  onClick={() => setIsEquationExpanded((prev) => !prev)}
                  type="button"
                >
                  <div className="block-label">
                    <span className="block-icon" aria-hidden="true">📐</span>
                    <span>OPTIONAL EQUATION {isEquationExpanded ? '(COLLAPSE)' : '(EXPAND)'}</span>
                  </div>
                  <code className="equation-preview">{activeConcept.formula}</code>
                </button>

                {isEquationExpanded && activeConcept.variables && (
                  <div className="equation-details-box">
                    <span className="details-title">VARIABLE DEFINITIONS:</span>
                    <ul className="variables-list">
                      {activeConcept.variables.map((v) => (
                        <li key={v.sym}>
                          <code>{v.sym}</code>: <span>{v.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Block 4: Core Understanding Synthesis */}
            <div className="card-block understanding-block">
              <div className="block-label">
                <span className="block-icon" aria-hidden="true">🎯</span>
                <span>CORE IDEA</span>
              </div>
              <p className="understanding-text">{activeConcept.coreUnderstanding}</p>
            </div>

            {/* Bridge Action to Experiment */}
            {activeConcept.linkedExperimentId && (
              <div className="card-bridge-row">
                <button
                  className="bridge-action-btn"
                  onClick={() => handleJumpToExperiment(activeConcept.linkedExperimentId)}
                  type="button"
                >
                  <span>SEE THIS IN SIMULATION</span>
                  <span className="btn-icon" aria-hidden="true">→</span>
                </button>
              </div>
            )}
          </div>
        )}

        {activeMode === 'experiment' && activeExperiment && (
          <div className="ask-lab-card experiment-flow">
            {/* Header Badge */}
            <div className="card-badge-row">
              <span className="card-badge">EMPIRICAL INVESTIGATION</span>
              <span className="card-curriculum">{activeExperiment.curriculum}</span>
            </div>

            <h3 className="card-question">{activeExperiment.title}</h3>

            {/* Block 1: Control Variable & Hypothesis */}
            <div className="card-block variable-block">
              <div className="block-label">
                <span className="block-icon" aria-hidden="true">🕹️</span>
                <span>CONTROL VARIABLE & HYPOTHESIS</span>
              </div>
              <div className="variable-tag">{activeExperiment.controlVariable}</div>
              <p className="block-content">{activeExperiment.hypothesis}</p>
            </div>

            {/* Block 2: Run Simulation Action */}
            <div className="card-block run-action-block">
              <button
                className="visualize-action-btn primary-run-btn"
                onClick={() => handleRunSimulation(activeExperiment)}
                type="button"
              >
                <span className="btn-icon" aria-hidden="true">▶</span>
                <span>{activeExperiment.actionLabel}</span>
              </button>
            </div>

            {/* Block 3: Measurement */}
            <div className="card-block measurement-block">
              <div className="block-label">
                <span className="block-icon" aria-hidden="true">📊</span>
                <span>QUANTITATIVE MEASUREMENT</span>
              </div>
              <div className="measurement-grid">
                <div className="metric-box">
                  <span className="metric-name">{activeExperiment.measurement.metricTitle}</span>
                  <div className="metric-comparison">
                    <span className="baseline-val">Baseline: {activeExperiment.measurement.baseline}</span>
                    <span className="measured-val">Result: {activeExperiment.measurement.measuredValue}</span>
                  </div>
                </div>
                <div className="delta-badge">{activeExperiment.measurement.delta}</div>
              </div>
              {activeExperiment.measurement.velocityChange && (
                <div className="metric-subtext">
                  {activeExperiment.measurement.velocityChange}
                </div>
              )}
            </div>

            {/* Block 4: Why Did It Happen? */}
            <div className="card-block why-block">
              <div className="block-label">
                <span className="block-icon" aria-hidden="true">❓</span>
                <span>WHY DID IT HAPPEN? (CAUSAL MECHANISM)</span>
              </div>
              <p className="block-content">{activeExperiment.why}</p>
            </div>

            {/* Block 5: Understanding Synthesis */}
            <div className="card-block understanding-block">
              <div className="block-label">
                <span className="block-icon" aria-hidden="true">🎯</span>
                <span>CORE UNDERSTANDING</span>
              </div>
              <p className="understanding-text">{activeExperiment.understanding}</p>
            </div>

            {/* Action Buttons: Log to History & Bridge to Concept */}
            <div className="card-actions-split">
              {activeExperiment.linkedConceptId && (
                <button
                  className="bridge-link-btn"
                  onClick={() => handleJumpToConcept(activeExperiment.linkedConceptId)}
                  type="button"
                >
                  <span>📖 GOVERNING CONCEPT</span>
                </button>
              )}

              <div className="log-action-container">
                <button
                  className="log-history-btn"
                  onClick={() => handleLogObservation(activeExperiment)}
                  type="button"
                >
                  <span aria-hidden="true">📝</span>
                  <span>LOG TO LAB HISTORY</span>
                </button>
                {logSuccessMsg && <span className="log-feedback-toast">{logSuccessMsg}</span>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AskTheLab
