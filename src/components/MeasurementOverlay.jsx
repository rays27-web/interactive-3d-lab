import React, { useState, useEffect } from 'react'
import { CELESTIAL_PHYSICS_DATA } from '../physics/celestialConstants'
import { formatPhysicsValue } from '../physics/formatPhysicsValue'

const MEASUREMENT_MODES = [
  { id: 'distance', label: 'DISTANCE', symbol: 'r', unit: 'AU / units' },
  { id: 'velocity', label: 'VELOCITY', symbol: 'v', unit: 'km/s' },
  { id: 'force', label: 'GRAV FORCE', symbol: 'F', unit: 'N' },
  { id: 'period', label: 'ORBIT PERIOD', symbol: 'T', unit: 'yr / days' },
  { id: 'acceleration', label: 'ACCELERATION', symbol: 'a', unit: 'm/s²' },
]

function MeasurementOverlay({
  isOpen,
  onClose,
  activeTarget,
  simulationDistance = 11.18,
  simulationSpeed = 9.45,
  sceneApi,
}) {
  const [measurementType, setMeasurementType] = useState('single') // 'single' | 'relative'
  const [selectedMode, setSelectedMode] = useState('distance')
  const [targetAId, setTargetAId] = useState('earth')
  const [targetBId, setTargetBId] = useState('sun')
  const [relativeLive, setRelativeLive] = useState(null)

  useEffect(() => {
    if (!isOpen || measurementType !== 'relative' || !sceneApi?.getTwoBodyMetrics) return undefined

    const updateInterval = setInterval(() => {
      const metrics = sceneApi.getTwoBodyMetrics(targetAId, targetBId)
      setRelativeLive(metrics)
    }, 100)

    return () => clearInterval(updateInterval)
  }, [isOpen, measurementType, targetAId, targetBId, sceneApi])

  if (!isOpen) return null

  const target = activeTarget || CELESTIAL_PHYSICS_DATA[3] // Default Earth
  const bodyA = CELESTIAL_PHYSICS_DATA.find((b) => b.id === targetAId) || CELESTIAL_PHYSICS_DATA[3]
  const bodyB = CELESTIAL_PHYSICS_DATA.find((b) => b.id === targetBId) || CELESTIAL_PHYSICS_DATA[0]

  // Calculate reference two-body physics
  const distAU = Math.abs((bodyA.distAU || 0) - (bodyB.distAU || 0)) || 1.0
  const distMeters = distAU * 1.495978707e11
  const mA = bodyA.massKg || 5.972e24
  const mB = bodyB.massKg || 1.989e30
  const G = 6.6743e-11
  const mutualForceN = (G * mA * mB) / (distMeters * distMeters)
  const accAMs2 = mutualForceN / mA
  const accBMs2 = mutualForceN / mB

  return (
    <div
      aria-label="Scientific Measurement Laboratory Overlay"
      className="measurement-overlay"
      role="region"
    >
      <div className="measurement-header">
        <div className="measurement-title-group">
          <span className="measurement-tag">CALIBRATED MEASUREMENT HUD</span>
          <h2 className="measurement-title">MEASUREMENT LABORATORY</h2>
        </div>
        <div className="measurement-header-actions">
          {/* Toggle between Single Body and Two-Body Relative */}
          <div className="system-type-toggle">
            <button
              className={`type-toggle-btn ${measurementType === 'single' ? 'is-active' : ''}`}
              onClick={() => setMeasurementType('single')}
              type="button"
            >
              SINGLE TARGET
            </button>
            <button
              className={`type-toggle-btn ${measurementType === 'relative' ? 'is-active' : ''}`}
              onClick={() => setMeasurementType('relative')}
              type="button"
            >
              TWO-BODY RELATIVE
            </button>
          </div>
          <button
            aria-label="Close Measurement Overlay"
            className="measurement-close-btn"
            onClick={onClose}
            type="button"
          >
            ✕
          </button>
        </div>
      </div>

      {measurementType === 'single' ? (
        <>
          {/* Mode Switcher Tabs */}
          <div
            aria-label="Measurement dimension selection"
            className="measurement-mode-tabs"
            role="tablist"
          >
            {MEASUREMENT_MODES.map((m) => {
              const isActive = selectedMode === m.id
              return (
                <button
                  aria-selected={isActive}
                  className={`measurement-mode-btn ${isActive ? 'is-active' : ''}`}
                  key={m.id}
                  onClick={() => setSelectedMode(m.id)}
                  role="tab"
                  type="button"
                >
                  <span className="mode-symbol">{m.symbol}</span>
                  <span className="mode-label">{m.label}</span>
                </button>
              )
            })}
          </div>

          {/* Educational Notice Banner on Scale Distinctions */}
          <div className="scale-notice-banner">
            <span className="notice-icon">⚠</span>
            <div className="notice-text">
              <strong>VISUALIZATION SCALE DISTINCTION:</strong>
              <span>
                {' '}Never confuse visualization coordinates with ground-truth astronomical metrics.
                Visual distances use power-law scaling (r_vis ∝ a⁰·⁵⁸) to render inner and outer planets
                simultaneously within human perceptual limits.
              </span>
            </div>
          </div>

          {/* 3-Tier Metric Card */}
          <div className="measurement-tiers-container">
            {/* TIER 1: REFERENCE VALUE */}
            <div className="measurement-tier-card tier-reference">
              <div className="tier-badge">TIER 1 · ASTRONOMICAL GROUND TRUTH</div>
              <div className="tier-main-label">REFERENCE VALUE</div>

              {selectedMode === 'distance' && (
                <>
                  <div className="tier-value">
                    {target.distAU > 0 ? `${target.distAU.toFixed(2)} AU` : '0 AU (Central Star)'}
                  </div>
                  <div className="tier-subtext">
                    {target.semiMajorAxisMeters > 0
                      ? formatPhysicsValue(target.semiMajorAxisMeters / 1e3, 'km')
                      : 'Center of coordinate frame'}
                  </div>
                </>
              )}

              {selectedMode === 'velocity' && (
                <>
                  <div className="tier-value">
                    {formatPhysicsValue(target.orbitalSpeedKmS, 'km/s')}
                  </div>
                  <div className="tier-subtext">
                    {formatPhysicsValue(target.orbitalSpeedMs, 'm/s')} circular orbital velocity
                  </div>
                </>
              )}

              {selectedMode === 'force' && (
                <>
                  <div className="tier-value">
                    {formatPhysicsValue(
                      (6.6743e-11 * 1.98847e30 * (target.massKg || 0)) /
                        Math.max(1, (target.semiMajorAxisMeters || 1) ** 2),
                      'N',
                      { forceScientific: true }
                    )}
                  </div>
                  <div className="tier-subtext">
                    F = G·(M☉·m) / r² mutual gravitational attraction
                  </div>
                </>
              )}

              {selectedMode === 'period' && (
                <>
                  <div className="tier-value">
                    {target.orbitalPeriodDays > 0 ? `${target.orbitalPeriodDays} days` : '—'}
                  </div>
                  <div className="tier-subtext">
                    {target.orbitalPeriodDays > 0
                      ? `${(target.orbitalPeriodDays / 365.25).toFixed(2)} sidereal years`
                      : 'Central anchor'}
                  </div>
                </>
              )}

              {selectedMode === 'acceleration' && (
                <>
                  <div className="tier-value">
                    {formatPhysicsValue(target.surfaceGravityMs2, 'm/s²')}
                  </div>
                  <div className="tier-subtext">
                    Surface gravitational acceleration g = GM / R²
                  </div>
                </>
              )}
            </div>

            {/* TIER 2: SIMULATION VALUE */}
            <div className="measurement-tier-card tier-simulation">
              <div className="tier-badge">TIER 2 · NUMERICAL INTEGRATION STATE</div>
              <div className="tier-main-label">SIMULATION VALUE</div>

              {selectedMode === 'distance' && (
                <>
                  <div className="tier-value">
                    {simulationDistance ? `${simulationDistance.toFixed(2)} units` : '11.18 units'}
                  </div>
                  <div className="tier-subtext">
                    Euclidean coordinate vector distance |r_sim| in Three.js world space
                  </div>
                </>
              )}

              {selectedMode === 'velocity' && (
                <>
                  <div className="tier-value">
                    {simulationSpeed ? `${simulationSpeed.toFixed(2)} u/s` : '9.45 u/s'}
                  </div>
                  <div className="tier-subtext">
                    Velocity Verlet integrator magnitude |v_sim| = √(vx² + vz²)
                  </div>
                </>
              )}

              {selectedMode === 'force' && (
                <>
                  <div className="tier-value">
                    {target.distAU > 0
                      ? `${(1.0 / target.distAU ** 2).toFixed(2)} F₀`
                      : '1.00 F₀'}
                  </div>
                  <div className="tier-subtext">
                    Normalized gravitational force relative to 1 AU Earth baseline
                  </div>
                </>
              )}

              {selectedMode === 'period' && (
                <>
                  <div className="tier-value">
                    {target.distAU > 0
                      ? `${(target.distAU ** 1.5).toFixed(2)} T₀`
                      : '—'}
                  </div>
                  <div className="tier-subtext">
                    Normalized Keplerian period T = a^(3/2) in simulation years
                  </div>
                </>
              )}

              {selectedMode === 'acceleration' && (
                <>
                  <div className="tier-value">
                    {target.distAU > 0
                      ? `${(1.0 / target.distAU ** 2).toFixed(3)} a₀`
                      : '0 a₀'}
                  </div>
                  <div className="tier-subtext">
                    Gravitational acceleration vector a = -GM·r̂ / (|r|² + ε²)
                  </div>
                </>
              )}
            </div>

            {/* TIER 3: VISUALIZATION SCALE */}
            <div className="measurement-tier-card tier-visualization">
              <div className="tier-badge">TIER 3 · VISUAL PROJECTION SCALE</div>
              <div className="tier-main-label">VISUALIZATION SCALE</div>

              <div className="tier-value">
                {selectedMode === 'distance' ? 'r_vis ∝ a⁰·⁵⁸' : 'CALIBRATED'}
              </div>
              <div className="tier-subtext">
                {selectedMode === 'distance'
                  ? 'Compresses 77:1 ratio (Mercury:Neptune) down to 7.7:1 for simultaneous viewport visibility'
                  : 'Proportionally scaled to preserve visual hierarchy and orbital stability'}
              </div>
              <div className="scale-comparison-tag">
                <span>TARGET ENTITY: {target.name}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* TWO-BODY RELATIVE MEASUREMENT MODE */
        <div className="relative-measurement-view">
          <div className="relative-selector-bar">
            <div className="body-select-group">
              <label htmlFor="body-a-select">BODY A:</label>
              <select
                id="body-a-select"
                onChange={(e) => setTargetAId(e.target.value)}
                value={targetAId}
              >
                {CELESTIAL_PHYSICS_DATA.map((b) => (
                  <option key={b.id} value={b.id}>{b.name.toUpperCase()}</option>
                ))}
              </select>
            </div>
            <span className="relative-interact-icon" aria-hidden="true">⇄</span>
            <div className="body-select-group">
              <label htmlFor="body-b-select">BODY B:</label>
              <select
                id="body-b-select"
                onChange={(e) => setTargetBId(e.target.value)}
                value={targetBId}
              >
                {CELESTIAL_PHYSICS_DATA.map((b) => (
                  <option key={b.id} value={b.id}>{b.name.toUpperCase()}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="measurement-tiers-container">
            {/* TIER 1: MUTUAL FORCE & DISTANCE */}
            <div className="measurement-tier-card tier-reference">
              <div className="tier-badge">NEWTON'S THIRD LAW (F_AB = -F_BA)</div>
              <div className="tier-main-label">MUTUAL GRAVITATIONAL FORCE</div>
              <div className="tier-value">
                {formatPhysicsValue(mutualForceN, 'N', { forceScientific: true })}
              </div>
              <div className="tier-subtext">
                Equal and opposite attractive force exerted between {bodyA.name} and {bodyB.name}
              </div>
              <div className="relative-metrics-mini">
                <div className="mini-metric">
                  <span className="mini-label">DISTANCE (AU)</span>
                  <span className="mini-val">{distAU.toFixed(3)} AU</span>
                </div>
                <div className="mini-metric">
                  <span className="mini-label">DISTANCE (KM)</span>
                  <span className="mini-val">{formatPhysicsValue(distMeters / 1e3, 'km')}</span>
                </div>
              </div>
            </div>

            {/* TIER 2: ASYMMETRIC ACCELERATION */}
            <div className="measurement-tier-card tier-simulation">
              <div className="tier-badge">INVERSE MASS ACCELERATION (a = F / m)</div>
              <div className="tier-main-label">ACCELERATION RATIO</div>
              <div className="tier-value">
                {bodyA.id === 'sun' || bodyB.id === 'sun'
                  ? `${formatPhysicsValue(Math.max(accAMs2, accBMs2), 'm/s²')} (Planet)`
                  : `${(Math.max(accAMs2, accBMs2) / Math.max(1e-15, Math.min(accAMs2, accBMs2))).toFixed(1)} : 1`}
              </div>
              <div className="tier-subtext">
                Acceleration is inversely proportional to mass: lighter body undergoes vast majority of orbital curvature
              </div>
              <div className="relative-metrics-mini">
                <div className="mini-metric">
                  <span className="mini-label">{bodyA.name.toUpperCase()} ACCEL</span>
                  <span className="mini-val">{formatPhysicsValue(accAMs2, 'm/s²', { forceScientific: true })}</span>
                </div>
                <div className="mini-metric">
                  <span className="mini-label">{bodyB.name.toUpperCase()} ACCEL</span>
                  <span className="mini-val">{formatPhysicsValue(accBMs2, 'm/s²', { forceScientific: true })}</span>
                </div>
              </div>
            </div>

            {/* TIER 3: LIVE SIMULATION RELATIVE VECTOR */}
            <div className="measurement-tier-card tier-visualization">
              <div className="tier-badge">LIVE 3D SIMULATION STATE</div>
              <div className="tier-main-label">RELATIVE SEPARATION</div>
              <div className="tier-value">
                {relativeLive ? `${relativeLive.dist} units` : '11.18 units'}
              </div>
              <div className="tier-subtext">
                Instantaneous coordinate distance in WebGL scene graph
              </div>
              <div className="relative-metrics-mini">
                <div className="mini-metric">
                  <span className="mini-label">REL SPEED</span>
                  <span className="mini-val">{relativeLive ? `${relativeLive.relSpeed} u/s` : '—'}</span>
                </div>
                <div className="mini-metric">
                  <span className="mini-label">SIM FORCE</span>
                  <span className="mini-val">{relativeLive ? `${relativeLive.force} F_sim` : '—'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MeasurementOverlay
