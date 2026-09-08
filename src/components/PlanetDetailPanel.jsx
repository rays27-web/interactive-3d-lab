function PlanetDetailPanel({
  planet,
  onClose,
  onFocus,
  onToggleFollow,
  isFollowing,
}) {
  if (!planet) return null

  const isSun = planet.id === 'sun'

  return (
    <aside
      aria-label={`${planet.name} telemetry dossier`}
      className="planet-detail-panel"
      role="region"
    >
      <header className="planet-detail-header">
        <div>
          <span className="planet-detail-tag">CELESTIAL BODY METRICS</span>
          <h2 className="planet-detail-title" style={{ color: planet.color }}>
            {planet.name}
          </h2>
          <span className="planet-detail-type">{planet.type}</span>
        </div>
        <button
          aria-label="Close planet dossier"
          className="planet-detail-close-btn"
          onClick={onClose}
          type="button"
        >
          ✕
        </button>
      </header>

      <div className="planet-detail-grid">
        <div className="planet-detail-item">
          <span className="detail-label">SEMI-MAJOR AXIS</span>
          <span className="detail-val">{planet.realDistAU} AU</span>
        </div>

        <div className="planet-detail-item">
          <span className="detail-label">ORBITAL PERIOD</span>
          <span className="detail-val">{planet.realPeriodYr}</span>
        </div>

        <div className="planet-detail-item">
          <span className="detail-label">MEAN ORBITAL VELOCITY</span>
          <span className="detail-val">{planet.realSpeedKmS} km/s</span>
        </div>

        <div className="planet-detail-item">
          <span className="detail-label">PLANETARY MASS</span>
          <span className="detail-val">{planet.realMassKg}</span>
        </div>

        <div className="planet-detail-item">
          <span className="detail-label">VOLUMETRIC RADIUS</span>
          <span className="detail-val">{planet.realRadiusKm}</span>
        </div>

        <div className="planet-detail-item">
          <span className="detail-label">SURFACE GRAVITY</span>
          <span className="detail-val">{planet.surfaceGravity}</span>
        </div>

        <div className="planet-detail-item">
          <span className="detail-label">NATURAL SATELLITES</span>
          <span className="detail-val">{planet.moons} MOONS</span>
        </div>

        <div className="planet-detail-item">
          <span className="detail-label">AXIAL TILT (OBLIQUITY)</span>
          <span className="detail-val">{planet.tiltDeg}°</span>
        </div>
      </div>

      {/* Live Simulation Kinematics */}
      <div className="planet-detail-sim">
        <span className="sim-title">LIVE SIMULATION KINEMATICS</span>
        <div className="sim-metrics-row">
          <div>
            <span className="sim-sublabel">CURRENT DIST</span>
            <span className="sim-subval">{planet.simDistance ?? '—'} u</span>
          </div>
          <div>
            <span className="sim-sublabel">INSTANT SPEED</span>
            <span className="sim-subval">{planet.simSpeed ?? '—'} u/s</span>
          </div>
          <div>
            <span className="sim-sublabel">COORDINATES</span>
            <span className="sim-subval">
              {planet.simPos ? `(${planet.simPos.join(', ')})` : '—'}
            </span>
          </div>
        </div>
      </div>

      <footer className="planet-detail-actions">
        <button
          className="planet-action-btn btn-focus"
          onClick={() => onFocus(planet.id)}
          type="button"
        >
          ⊙ FOCUS CAMERA
        </button>
        {!isSun && (
          <button
            className={`planet-action-btn btn-follow ${isFollowing ? 'is-following' : ''}`}
            onClick={onToggleFollow}
            type="button"
          >
            {isFollowing ? '✓ FOLLOWING' : '⌖ FOLLOW PLANET'}
          </button>
        )}
      </footer>
    </aside>
  )
}

export default PlanetDetailPanel
