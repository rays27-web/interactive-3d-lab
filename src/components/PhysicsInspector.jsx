import { useMemo, useState } from 'react'
import {
  calculateEscapeVelocity,
  calculateGravitationalAcceleration,
  calculateGravitationalForce,
  calculateOrbitalVelocity,
} from '../physics/gravity'
import {
  calculateCentripetalAcceleration,
  calculateKeplerRatio,
  calculateOrbitalPeriod,
} from '../physics/orbitalMechanics'
import { formatPhysicsValue } from '../physics/formatPhysicsValue'
import { CELESTIAL_PHYSICS_DATA } from '../physics/celestialConstants'

/**
 * PhysicsInspector Component
 *
 * Interactive scientific telemetry panel displaying ground-truth reference metrics
 * and live derived physical calculations for celestial or experimental entities.
 */
function PhysicsInspector({
  target,
  isOpen,
  onClose,
  onSelectTarget,
}) {
  const [showDerivation, setShowDerivation] = useState(false)
  const activeTarget = useMemo(() => {
    if (!target) return CELESTIAL_PHYSICS_DATA[3] // Default to Earth
    if (typeof target === 'string') {
      return CELESTIAL_PHYSICS_DATA.find((c) => c.id === target) || CELESTIAL_PHYSICS_DATA[3]
    }
    const found = CELESTIAL_PHYSICS_DATA.find((c) => c.id === target.id)
    return found || target
  }, [target])

  // Pure dynamic physics calculations
  const calculated = useMemo(() => {
    if (!activeTarget) return null

    const m = activeTarget.massKg || 0
    const r = activeTarget.radiusMeters || 0
    const dist = activeTarget.semiMajorAxisMeters || 0
    const centralM = activeTarget.centralMassKg || 0

    // Surface Gravity: g = GM / R²
    const surfaceG = r > 0 && m > 0 ? calculateGravitationalAcceleration(m, r) : 0

    // Escape Velocity: ve = √(2GM / R)
    const escapeVel = r > 0 && m > 0 ? calculateEscapeVelocity(m, r) : 0

    // Orbital Velocity: v = √(GM / r)
    const orbitalVel = dist > 0 && centralM > 0 ? calculateOrbitalVelocity(centralM, dist) : 0

    // Gravitational Force with Central Mass: F = G·M·m / r²
    const gravForce = dist > 0 && centralM > 0 && m > 0
      ? calculateGravitationalForce(centralM, m, dist)
      : 0

    // Orbital Period: T = 2π√(r³ / GM)
    const periodSec = dist > 0 && centralM > 0
      ? calculateOrbitalPeriod(centralM, dist)
      : 0

    // Centripetal Acceleration: a = v² / r
    const centripetalAcc = dist > 0 && orbitalVel > 0
      ? calculateCentripetalAcceleration(orbitalVel, dist)
      : 0

    // Kepler Ratio: T² / r³
    const keplerRatio = periodSec > 0 && dist > 0
      ? calculateKeplerRatio(periodSec, dist)
      : 0

    return {
      surfaceG,
      escapeVel,
      orbitalVel,
      gravForce,
      periodSec,
      centripetalAcc,
      keplerRatio,
    }
  }, [activeTarget])

  if (!isOpen) return null

  return (
    <aside
      aria-label="Physics Inspector"
      aria-modal="false"
      className="physics-inspector-drawer"
      role="region"
    >
      <div className="inspector-header">
        <div className="inspector-title-group">
          <span className="inspector-tag">TELEMETRY ANALYZER</span>
          <h2 className="inspector-title">PHYSICS INSPECTOR</h2>
        </div>
        <button
          aria-label="Close Physics Inspector"
          className="inspector-close-btn"
          onClick={onClose}
          type="button"
        >
          ✕
        </button>
      </div>

      {/* Target Body Selector Pill Tabs */}
      <div
        aria-label="Select celestial body to inspect"
        className="inspector-target-selector"
        role="tablist"
      >
        {CELESTIAL_PHYSICS_DATA.map((body) => {
          const isSelected = activeTarget.id === body.id
          return (
            <button
              aria-selected={isSelected}
              className={`inspector-tab-btn ${isSelected ? 'is-active' : ''}`}
              key={body.id}
              onClick={() => onSelectTarget && onSelectTarget(body)}
              role="tab"
              type="button"
            >
              <span
                className="tab-pip"
                style={{ backgroundColor: body.color }}
              />
              <span>{body.name}</span>
            </button>
          )
        })}
      </div>

      <div className="inspector-content">
        {/* Active Object Banner */}
        <div className="inspector-body-banner">
          <div className="body-banner-left">
            <span
              className="body-banner-swatch"
              style={{ backgroundColor: activeTarget.color || '#4795d1' }}
            />
            <div>
              <div className="body-banner-name">{activeTarget.name}</div>
              <div className="body-banner-type">{activeTarget.type}</div>
            </div>
          </div>
        </div>

        {/* SECTION 1: REFERENCE VALUES */}
        <div className="inspector-section">
          <div className="section-label">
            <span>REFERENCE VALUES (ASTRONOMICAL TRUTH)</span>
          </div>
          <div className="inspector-metric-grid">
            <div className="inspector-card">
              <span className="metric-label">MASS (M)</span>
              <span className="metric-value">
                {formatPhysicsValue(activeTarget.massKg, 'kg', { forceScientific: true })}
              </span>
              <span className="metric-sub">
                {activeTarget.id === 'sun'
                  ? '1.00 M☉ (Solar mass)'
                  : activeTarget.massKg
                    ? `${(activeTarget.massKg / 5.9722e24).toFixed(3)} M⊕ (Earth masses)`
                    : '—'}
              </span>
            </div>

            <div className="inspector-card">
              <span className="metric-label">EQUATORIAL RADIUS (R)</span>
              <span className="metric-value">
                {formatPhysicsValue(activeTarget.radiusKm, 'km')}
              </span>
              <span className="metric-sub">
                {formatPhysicsValue(activeTarget.radiusMeters, 'm', { forceScientific: true })}
              </span>
            </div>

            <div className="inspector-card">
              <span className="metric-label">DISTANCE FROM SUN (r)</span>
              <span className="metric-value">
                {activeTarget.distAU > 0 ? `${activeTarget.distAU.toFixed(2)} AU` : '0 AU (Primary)'}
              </span>
              <span className="metric-sub">
                {activeTarget.semiMajorAxisMeters > 0
                  ? formatPhysicsValue(activeTarget.semiMajorAxisMeters / 1e3, 'km')
                  : 'Central emitter'}
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 2: CALCULATED PHYSICAL VALUES */}
        <div className="inspector-section">
          <div className="section-label">
            <span>CALCULATED VALUES (NEWTONIAN DYNAMICS)</span>
          </div>
          <div className="inspector-metric-grid">
            <div className="inspector-card">
              <div className="metric-header-row">
                <span className="metric-label">SURFACE GRAVITY (g)</span>
                <span className="metric-formula">g = GM / R²</span>
              </div>
              <span className="metric-value">
                {calculated?.surfaceG > 0
                  ? formatPhysicsValue(calculated.surfaceG, 'm/s²')
                  : '—'}
              </span>
              <span className="metric-sub">
                {calculated?.surfaceG > 0
                  ? `${(calculated.surfaceG / 9.80665).toFixed(2)} g (Earth standard)`
                  : '—'}
              </span>
            </div>

            <div className="inspector-card">
              <div className="metric-header-row">
                <span className="metric-label">ESCAPE VELOCITY (v_e)</span>
                <span className="metric-formula">v_e = √(2GM / R)</span>
              </div>
              <span className="metric-value">
                {calculated?.escapeVel > 0
                  ? formatPhysicsValue(calculated.escapeVel / 1e3, 'km/s')
                  : '—'}
              </span>
              <span className="metric-sub">
                {calculated?.escapeVel > 0
                  ? formatPhysicsValue(calculated.escapeVel, 'm/s')
                  : '—'}
              </span>
            </div>

            <div className="inspector-card">
              <div className="metric-header-row">
                <span className="metric-label">ORBITAL VELOCITY (v)</span>
                <span className="metric-formula">v = √(GM / r)</span>
              </div>
              <span className="metric-value">
                {calculated?.orbitalVel > 0
                  ? formatPhysicsValue(calculated.orbitalVel / 1e3, 'km/s')
                  : activeTarget.id === 'sun' ? '0 km/s' : '—'}
              </span>
              <span className="metric-sub">
                {calculated?.orbitalVel > 0
                  ? formatPhysicsValue(calculated.orbitalVel, 'm/s')
                  : 'Center of mass'}
              </span>
            </div>

            <div className="inspector-card">
              <div className="metric-header-row">
                <span className="metric-label">GRAVITATIONAL FORCE (F)</span>
                <span className="metric-formula">F = G·(M·m)/r²</span>
              </div>
              <span className="metric-value">
                {calculated?.gravForce > 0
                  ? formatPhysicsValue(calculated.gravForce, 'N', { forceScientific: true })
                  : '—'}
              </span>
              <span className="metric-sub">Attractive force with Sun</span>
            </div>

            <div className="inspector-card">
              <div className="metric-header-row">
                <span className="metric-label">ORBITAL PERIOD (T)</span>
                <span className="metric-formula">T = 2π√(r³/GM)</span>
              </div>
              <span className="metric-value">
                {calculated?.periodSec > 0
                  ? `${(calculated.periodSec / 86400).toFixed(1)} days`
                  : activeTarget.id === 'sun' ? '—' : '—'}
              </span>
              <span className="metric-sub">
                {calculated?.periodSec > 0
                  ? `${(calculated.periodSec / (86400 * 365.25)).toFixed(2)} yr`
                  : '—'}
              </span>
            </div>

            <div className="inspector-card">
              <div className="metric-header-row">
                <span className="metric-label">CENTRIPETAL ACCEL (a)</span>
                <span className="metric-formula">a = v² / r</span>
              </div>
              <span className="metric-value">
                {calculated?.centripetalAcc > 0
                  ? formatPhysicsValue(calculated.centripetalAcc, 'm/s²', { forceScientific: true })
                  : '—'}
              </span>
              <span className="metric-sub">Inward orbital acceleration</span>
            </div>
          </div>
        </div>

        {/* Dynamic Physics Diagnostic: WHAT IS HAPPENING / WHY */}
        <div className="inspector-diagnostic-section">
          <div className="diagnostic-header">
            <span className="diagnostic-pill">PHYSICAL ANALYSIS</span>
            <span className="diagnostic-badge">CLASS 11 CURRICULUM</span>
          </div>

          <div className="diagnostic-grid">
            <div className="diagnostic-item">
              <span className="diag-tag">WHAT IS HAPPENING</span>
              <p className="diag-text">
                {activeTarget.id === 'sun'
                  ? 'Central gravitational anchor. Sun resides at the primary focus of planetary Keplerian orbits.'
                  : `Centripetal acceleration v²/r (${formatPhysicsValue(calculated?.centripetalAcc || 0, 'm/s²', { forceScientific: true })}) precisely matches solar gravitational attraction GM/r². The body is in continuous free-fall around the star.`}
              </p>
            </div>

            <div className="diagnostic-item">
              <span className="diag-tag">GOVERNING EQUILIBRIUM</span>
              <div className="diag-formula-box">
                <code>F_grav = G·(M☉·m) / r² = m·v² / r ⟹ v = √(GM / r)</code>
              </div>
            </div>

            <div className="diagnostic-item">
              <span className="diag-tag">NCERT CURRICULUM REFERENCE</span>
              <p className="diag-curriculum">
                Class 11 Physics, Chapter 8: Gravitation — Satellite orbital speed, universal gravitation, and Kepler’s laws of planetary motion.
              </p>
            </div>
          </div>

          <div className="diagnostic-derivation-box">
            <button
              aria-expanded={showDerivation}
              className="derivation-toggle-btn"
              onClick={() => setShowDerivation((prev) => !prev)}
              type="button"
            >
              <span>{showDerivation ? '▾ HIDE MATHEMATICAL DERIVATION' : '▸ VIEW MATHEMATICAL DERIVATION'}</span>
            </button>
            {showDerivation && (
              <div className="derivation-content">
                <p className="derivation-text">
                  Equating Newton’s gravitational force to the required centripetal force:
                  G·M·m / r² = m·v² / r. Dividing by m and multiplying by r yields:
                  v² = G·M / r ⟹ v = √(G·M / r).
                  Total orbital mechanical energy:
                  E = K + U = ½·m·v² - G·M·m / r = ½·m·(G·M/r) - G·M·m / r = -G·M·m / (2r) &lt; 0 (Bound state).
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default PhysicsInspector
