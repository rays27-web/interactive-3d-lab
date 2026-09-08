import { useState } from 'react'
import { PLANETS_DATA, SCALE_DISCLAIMER } from '../data/planets'
import ScientificIcon from './ScientificIcon'
import InfoTooltip from './InfoTooltip'

function PlanetDetailPanel({
  planet,
  onClose,
  onFocus,
  onToggleFollow,
  isFollowing,
  sceneApi,
  onWatchPlanet,
  onSetSpeed,
  onTogglePause,
  isPaused = false,
  simulationSpeed = 1.0,
}) {
  const [activeTab, setActiveTab] = useState('overview') // 'overview' | 'compare' | 'experiments'
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [isEquationOpen, setIsEquationOpen] = useState(false)
  const [compareTargetId, setCompareTargetId] = useState('earth')
  const [velocityResult, setVelocityResult] = useState(null)
  const [distanceResult, setDistanceResult] = useState(null)
  const [isWatching, setIsWatching] = useState(false)

  if (!planet) return null

  const isSun = planet.id === 'sun'

  // Match enriched pedagogical data
  const enriched = PLANETS_DATA.find((p) => p.id === planet.id) || planet
  const compareTarget = PLANETS_DATA.find((p) => p.id === compareTargetId) || PLANETS_DATA[2] // Earth default

  // Display strings with fallbacks
  const distDisplay = enriched.distanceMillionKm || `${enriched.distanceFromSunMillionKm || enriched.realDistAU || '—'} million km`
  const speedDisplay = enriched.orbitalSpeed || `${enriched.orbitalVelocityKmS || enriched.realSpeedKmS || '—'} km/s`
  const periodDisplay = enriched.orbitalPeriod || enriched.realPeriodYr || '—'
  const whyItMatters = enriched.whyItMatters || enriched.whySummary || 'Orbital motion is governed by distance from the Sun and gravitational attraction.'
  const question = enriched.educationalQuestion || enriched.coreQuestion || 'How does this planet move around the Sun?'

  const handleWatchMotion = () => {
    setIsWatching(true)
    if (onWatchPlanet) {
      onWatchPlanet(planet.id)
    } else {
      sceneApi?.watchPlanet?.(planet.id)
      onFocus?.(planet.id)
    }
  }

  const handleApplyVelocity = (mult) => {
    sceneApi?.setBodyVelocity?.(planet.id, mult)
    let desc = ''
    if (mult < 0.6) {
      desc = 'Too slow (0.50×): Gravity overpowers centripetal inertia, plunging the planet inward toward the Sun in a decaying spiral.'
    } else if (mult < 0.9) {
      desc = 'Sub-circular (0.75×): Orbit drops inward into a decaying, high-eccentricity elliptical loop.'
    } else if (Math.abs(mult - 1.0) < 0.05) {
      desc = 'Stable circular speed (1.00×): Centripetal acceleration (v²/r) exactly balances solar gravity (GM/r²).'
    } else if (mult < 1.35) {
      desc = 'Super-circular (1.25×): Excess kinetic energy stretches the orbit into an elongated outer ellipse.'
    } else {
      desc = 'Escape speed (1.50×): Velocity exceeds escape threshold (v_e = √2 · v_0); the planet breaks free on an open hyperbolic path!'
    }
    setVelocityResult({ mult, desc })
  }

  const handleApplyDistance = (mult) => {
    sceneApi?.setBodyDistance?.(planet.id, mult)
    let desc = ''
    if (mult < 0.8) {
      desc = 'Closer orbit (0.50×): Distance halved. Solar gravity quadruples (1/r² = 4×), forcing higher orbital speed and a much shorter period.'
    } else if (Math.abs(mult - 1.0) < 0.05) {
      desc = 'Normal orbit (1.00×): Restored to standard baseline astronomical distance.'
    } else {
      desc = 'Farther orbit (2.00×): Distance doubled. Solar gravity quarters (1/r² = 0.25×), resulting in a slower orbital speed and a much longer period.'
    }
    setDistanceResult({ mult, desc })
  }

  return (
    <aside
      aria-label={`${enriched.name} educational inspector`}
      className="planet-detail-panel educational-inspector"
      role="region"
    >
      {/* Header */}
      <header className="planet-detail-header">
        <div className="header-title-group">
          <div className="title-row">
            <span
              className="planet-header-pip"
              style={{ backgroundColor: enriched.color || '#4fa3e3' }}
            />
            <h2 className="planet-detail-title" style={{ color: enriched.color || '#f4f8ff' }}>
              {enriched.name.toUpperCase()}
            </h2>
            <span className="planet-detail-type">{enriched.type}</span>
          </div>
          <span className="planet-detail-tag">SOLAR SYSTEM PHYSICS</span>
        </div>
        <button
          aria-label="Close planet inspector"
          className="planet-detail-close-btn"
          onClick={onClose}
          type="button"
        >
          ✕
        </button>
      </header>

      {/* Navigation Tabs */}
      <div className="inspector-tabs-nav" role="tablist">
        <button
          aria-selected={activeTab === 'overview'}
          className={`inspector-tab-btn ${activeTab === 'overview' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('overview')}
          role="tab"
          type="button"
        >
          🔭 OVERVIEW
        </button>
        {!isSun && (
          <button
            aria-selected={activeTab === 'compare'}
            className={`inspector-tab-btn ${activeTab === 'compare' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('compare')}
            role="tab"
            type="button"
          >
            ⚖️ COMPARE
          </button>
        )}
        {!isSun && (
          <button
            aria-selected={activeTab === 'experiments'}
            className={`inspector-tab-btn ${activeTab === 'experiments' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('experiments')}
            role="tab"
            type="button"
          >
            🧪 EXPERIMENTS
          </button>
        )}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="inspector-tab-content">
          {/* Scale Notice */}
          <div className="inspector-scale-banner">
            <span className="scale-banner-icon">⚠️</span>
            <span className="scale-banner-text">
              VISUAL SCALE IS COMPRESSED — DISTANCES AND PLANET SIZES ARE NOT TO SCALE.
            </span>
            <InfoTooltip
              ariaLabel="About visual scale compression"
              content="Real planetary distances span millions of kilometers. Visual scales are compressed so planets remain observable on screen. Physical numbers shown are exact."
            />
          </div>

          {/* Primary 3 Metrics */}
          {!isSun ? (
            <div className="primary-metrics-grid">
              <div className="metric-box">
                <span className="metric-label">DISTANCE FROM SUN</span>
                <strong className="metric-val highlight">{distDisplay}</strong>
                <span className="metric-sub">{enriched.distanceAU || `${enriched.realDistAU || '—'} AU`}</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">ORBITAL SPEED</span>
                <strong className="metric-val">{speedDisplay}</strong>
                <span className="metric-sub">Mean velocity</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">ORBITAL PERIOD</span>
                <strong className="metric-val">{periodDisplay}</strong>
                <span className="metric-sub">One full revolution</span>
              </div>
            </div>
          ) : (
            <div className="primary-metrics-grid">
              <div className="metric-box">
                <span className="metric-label">SOLAR MASS</span>
                <strong className="metric-val highlight">1.989 × 10³⁰ kg</strong>
                <span className="metric-sub">333,000× Earth</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">SURFACE GRAVITY</span>
                <strong className="metric-val">274.0 m/s²</strong>
                <span className="metric-sub">27.9× Earth (g)</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">SYSTEM ANCHOR</span>
                <strong className="metric-val">99.86%</strong>
                <span className="metric-sub">Total Solar System mass</span>
              </div>
            </div>
          )}

          {/* WHY IT MATTERS Callout */}
          <div className="why-it-matters-card">
            <div className="card-tag-row">
              <span className="card-badge">WHY IT MATTERS</span>
            </div>
            <p className="why-it-matters-text">{whyItMatters}</p>
          </div>

          {/* WATCH MOTION ACTION BAR */}
          {!isSun && (
            <div className="watch-motion-action-card">
              <div className="watch-btn-row">
                <button
                  className="watch-motion-btn"
                  onClick={handleWatchMotion}
                  type="button"
                >
                  🔭 {isWatching ? 'FOCUSING & WATCHING MOTION' : `WATCH THIS PLANET (${enriched.name.toUpperCase()})`}
                </button>
                <button
                  className={`follow-toggle-btn ${isFollowing ? 'is-following' : ''}`}
                  onClick={onToggleFollow}
                  type="button"
                >
                  {isFollowing ? '✓ FOLLOWING' : '⌖ FOLLOW'}
                </button>
              </div>

              {/* Playback Speed Controls (0.25x, 0.5x, 1x, 2x, Pause) */}
              <div className="motion-controls-row">
                <button
                  className={`motion-pause-btn ${isPaused ? 'is-paused' : ''}`}
                  onClick={() => {
                    if (onTogglePause) onTogglePause()
                    else sceneApi?.togglePause?.()
                  }}
                  type="button"
                >
                  {isPaused ? '▶ RESUME' : '⏸ PAUSE'}
                </button>
                <div className="speed-pills-group" role="group" aria-label="Playback speed">
                  {[0.25, 0.5, 1.0, 2.0].map((spd) => {
                    const isSelected = Math.abs(simulationSpeed - spd) < 0.05
                    return (
                      <button
                        key={spd}
                        className={`speed-pill-btn ${isSelected ? 'is-active' : ''}`}
                        onClick={() => {
                          if (onSetSpeed) onSetSpeed(spd)
                          else sceneApi?.setSimulationSpeed?.(spd)
                        }}
                        type="button"
                      >
                        {spd}×
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Core Educational Question Block */}
          {!isSun && (
            <div className="planet-question-card educational-question-card">
              <span className="question-tag">EDUCATIONAL QUESTION</span>
              <h3 className="planet-question-title question-main-heading">"{question}"</h3>

              {enriched.whatShouldIWatch && (
                <div className="question-substep">
                  <strong className="substep-label">WHAT SHOULD I WATCH?</strong>
                  <p className="substep-text">{enriched.whatShouldIWatch}</p>
                </div>
              )}

              {enriched.whatDidYouNotice && (
                <div className="question-substep notice-substep">
                  <strong className="substep-label">WHAT DID YOU NOTICE?</strong>
                  <p className="substep-text">"{enriched.whatDidYouNotice}"</p>
                </div>
              )}

              {enriched.why && (
                <div className="question-substep why-substep">
                  <strong className="substep-label">WHY?</strong>
                  <p className="substep-text">{enriched.why}</p>
                </div>
              )}

              {/* Optional Equation Toggle */}
              {enriched.equation && (
                <div className="equation-accordion-block">
                  <button
                    className="equation-toggle-btn"
                    onClick={() => setIsEquationOpen((prev) => !prev)}
                    type="button"
                  >
                    <span>{isEquationOpen ? '▾ HIDE GOVERNING EQUATION' : '▸ SHOW GOVERNING EQUATION'}</span>
                    <span className="equation-tag-hint">{enriched.equationName}</span>
                  </button>
                  {isEquationOpen && (
                    <div className="equation-drawer-content">
                      <div className="equation-math-box">
                        <code>{enriched.equation}</code>
                      </div>
                      <p className="equation-math-desc">{enriched.equationExplanation}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {!isSun && (
            <div className="overview-actions-row">
              <button
                type="button"
                className="overview-run-exp-btn"
                onClick={() => setActiveTab('experiments')}
              >
                🧪 RUN EXPERIMENT ON {enriched.name.toUpperCase()} →
              </button>
            </div>
          )}

          {/* Expandable Advanced Astronomical Data */}
          <div className="advanced-data-accordion">
            <button
              className="advanced-toggle-btn view-planet-facts-btn"
              onClick={() => setIsAdvancedOpen((prev) => !prev)}
              type="button"
            >
              <span>{isAdvancedOpen ? '▾ HIDE PLANET FACTS' : '▸ VIEW PLANET FACTS'}</span>
              <span className="advanced-badge">{isAdvancedOpen ? 'OPEN' : 'MASS · RADIUS · DENSITY · GRAVITY'}</span>
            </button>

            {isAdvancedOpen && (
              <div className="advanced-data-grid">
                <div className="advanced-item">
                  <span className="adv-label">PLANETARY MASS</span>
                  <strong className="adv-val">{enriched.realMassKg || `${enriched.massKg?.toExponential(2) || '—'} kg`}</strong>
                </div>
                <div className="advanced-item">
                  <span className="adv-label">VOLUMETRIC RADIUS</span>
                  <strong className="adv-val">{enriched.realRadiusKm || `${enriched.radiusKm?.toLocaleString() || '—'} km`}</strong>
                </div>
                <div className="advanced-item">
                  <span className="adv-label">SURFACE GRAVITY</span>
                  <strong className="adv-val">{enriched.surfaceGravity || `${enriched.surfaceGravityMs2 || '—'} m/s²`}</strong>
                </div>
                <div className="advanced-item">
                  <span className="adv-label">MEAN DENSITY</span>
                  <strong className="adv-val">{enriched.densityGcm3 ? `${enriched.densityGcm3} g/cm³` : '—'}</strong>
                </div>
                <div className="advanced-item">
                  <span className="adv-label">AXIAL TILT (OBLIQUITY)</span>
                  <strong className="adv-val">{enriched.tiltDeg ? `${enriched.tiltDeg}°` : '—'}</strong>
                </div>
                <div className="advanced-item">
                  <span className="adv-label">NATURAL SATELLITES</span>
                  <strong className="adv-val">{enriched.moons !== undefined ? `${enriched.moons} MOONS` : '—'}</strong>
                </div>
                <div className="advanced-item">
                  <span className="adv-label">SIMULATION DISTANCE</span>
                  <strong className="adv-val">{planet.simDistance ?? '—'} units</strong>
                </div>
                <div className="advanced-item">
                  <span className="adv-label">SIMULATION SPEED</span>
                  <strong className="adv-val">{planet.simSpeed ?? '—'} u/s</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: COMPARE */}
      {activeTab === 'compare' && !isSun && (
        <div className="inspector-tab-content compare-view">
          <div className="compare-header-row">
            <span className="compare-title-label">COMPARE WITH:</span>
            <div className="compare-pills-row" role="radiogroup" aria-label="Select comparison target">
              {PLANETS_DATA.map((p) => {
                const isSelected = p.id === compareTargetId
                return (
                  <button
                    key={p.id}
                    className={`compare-pill-btn ${isSelected ? 'is-active' : ''}`}
                    onClick={() => setCompareTargetId(p.id)}
                    type="button"
                  >
                    <span className="pill-dot" style={{ backgroundColor: p.color }} />
                    {p.name.slice(0, 3).toUpperCase()}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="comparison-cards-container">
            {/* Metric 1: Distance */}
            <div className="comparison-metric-card">
              <span className="comp-metric-header">DISTANCE FROM SUN</span>
              <div className="comp-columns">
                <div className="comp-col primary-col">
                  <span className="comp-body-name" style={{ color: enriched.color }}>{enriched.name}</span>
                  <strong className="comp-val">{distDisplay}</strong>
                  <span className="comp-sub">{enriched.distanceAU}</span>
                </div>
                <div className="comp-divider">VS</div>
                <div className="comp-col target-col">
                  <span className="comp-body-name" style={{ color: compareTarget.color }}>{compareTarget.name}</span>
                  <strong className="comp-val">{compareTarget.distanceMillionKm}</strong>
                  <span className="comp-sub">{compareTarget.distanceAU}</span>
                </div>
              </div>
            </div>

            {/* Metric 2: Orbital Speed */}
            <div className="comparison-metric-card">
              <span className="comp-metric-header">ORBITAL SPEED</span>
              <div className="comp-columns">
                <div className="comp-col primary-col">
                  <span className="comp-body-name" style={{ color: enriched.color }}>{enriched.name}</span>
                  <strong className="comp-val">{speedDisplay}</strong>
                </div>
                <div className="comp-divider">VS</div>
                <div className="comp-col target-col">
                  <span className="comp-body-name" style={{ color: compareTarget.color }}>{compareTarget.name}</span>
                  <strong className="comp-val">{compareTarget.orbitalSpeed}</strong>
                </div>
              </div>
            </div>

            {/* Metric 3: Orbital Period */}
            <div className="comparison-metric-card">
              <span className="comp-metric-header">ORBITAL PERIOD</span>
              <div className="comp-columns">
                <div className="comp-col primary-col">
                  <span className="comp-body-name" style={{ color: enriched.color }}>{enriched.name}</span>
                  <strong className="comp-val">{periodDisplay}</strong>
                </div>
                <div className="comp-divider">VS</div>
                <div className="comp-col target-col">
                  <span className="comp-body-name" style={{ color: compareTarget.color }}>{compareTarget.name}</span>
                  <strong className="comp-val">{compareTarget.orbitalPeriod}</strong>
                </div>
              </div>
            </div>

            {/* Plain-Language Comparative Conclusion */}
            <div className="comparison-conclusion-card">
              <span className="conclusion-badge">PHYSICAL CONCLUSION</span>
              <p className="conclusion-text">
                {enriched.distanceFromSunAU < compareTarget.distanceFromSunAU
                  ? `${enriched.name} is closer to the Sun (${distDisplay}) than ${compareTarget.name} (${compareTarget.distanceMillionKm}) and moves faster (${speedDisplay} vs ${compareTarget.orbitalSpeed}). It completes an orbit in much less time.`
                  : enriched.distanceFromSunAU > compareTarget.distanceFromSunAU
                  ? `${enriched.name} is farther from the Sun (${distDisplay}) than ${compareTarget.name} (${compareTarget.distanceMillionKm}) and moves slower (${speedDisplay} vs ${compareTarget.orbitalSpeed}). It takes much longer to complete an orbit.`
                  : `${enriched.name} has the exact same baseline distance and speed as itself.`}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: EXPERIMENTS */}
      {activeTab === 'experiments' && !isSun && (
        <div className="inspector-tab-content experiments-view">
          {/* Velocity Experiment (Part K) */}
          <div className="experiment-module-card">
            <div className="module-header-row">
              <span className="module-badge">EXPERIMENT 1</span>
              <strong className="module-title">CHANGE ORBITAL VELOCITY</strong>
            </div>
            <p className="module-question">"What happens if I change the planet's orbital velocity?"</p>

            <div className="experiment-buttons-row">
              {[
                { mult: 0.5, label: '0.50× (Sub-Orbital)' },
                { mult: 0.75, label: '0.75× (Inward)' },
                { mult: 1.0, label: '1.00× (Stable)' },
                { mult: 1.25, label: '1.25× (Eccentric)' },
                { mult: 1.5, label: '1.50× (Escape)' },
              ].map((preset) => {
                const isSelected = velocityResult?.mult === preset.mult
                return (
                  <button
                    key={preset.mult}
                    className={`exp-preset-btn ${isSelected ? 'is-active' : ''}`}
                    onClick={() => handleApplyVelocity(preset.mult)}
                    type="button"
                  >
                    {preset.label}
                  </button>
                )
              })}
            </div>

            {velocityResult && (
              <div className="experiment-feedback-box">
                <strong className="feedback-title">PHYSICAL OUTCOME ({velocityResult.mult}×):</strong>
                <p className="feedback-text">{velocityResult.desc}</p>
                <button
                  className="exp-reset-btn"
                  onClick={() => {
                    sceneApi?.resetBody?.(planet.id)
                    setVelocityResult(null)
                  }}
                  type="button"
                >
                  ↺ RESET TO STABLE ORBIT
                </button>
              </div>
            )}
          </div>

          {/* Distance Experiment (Part L) */}
          <div className="experiment-module-card">
            <div className="module-header-row">
              <span className="module-badge">EXPERIMENT 2</span>
              <strong className="module-title">CHANGE ORBITAL DISTANCE</strong>
            </div>
            <p className="module-question">"What happens when a planet is farther from the Sun?"</p>

            <div className="experiment-buttons-row">
              {[
                { mult: 0.5, label: '0.50× CLOSER' },
                { mult: 1.0, label: '1.00× NORMAL' },
                { mult: 2.0, label: '2.00× FARTHER' },
              ].map((preset) => {
                const isSelected = distanceResult?.mult === preset.mult
                return (
                  <button
                    key={preset.mult}
                    className={`exp-preset-btn ${isSelected ? 'is-active' : ''}`}
                    onClick={() => handleApplyDistance(preset.mult)}
                    type="button"
                  >
                    {preset.label}
                  </button>
                )
              })}
            </div>

            {distanceResult && (
              <div className="experiment-feedback-box">
                <strong className="feedback-title">PHYSICAL OUTCOME ({distanceResult.mult}×):</strong>
                <p className="feedback-text">{distanceResult.desc}</p>
                <button
                  className="exp-reset-btn"
                  onClick={() => {
                    sceneApi?.resetBody?.(planet.id)
                    setDistanceResult(null)
                  }}
                  type="button"
                >
                  ↺ RESET TO NORMAL DISTANCE
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </aside>
  )
}

export default PlanetDetailPanel
