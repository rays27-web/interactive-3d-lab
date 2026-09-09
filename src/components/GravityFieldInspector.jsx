import { PLANETS_DATA } from '../data/planets'

function GravityFieldInspector({
  planet = PLANETS_DATA[2],
  onSelectPlanet,
  onTriggerDrop,
  objectMassKg = 70,
  isCollapsed = false,
  onToggleCollapse,
  hasActiveOverlay = false,
}) {
  const g = planet?.surfaceGravityMs2 || 9.81
  const weightN = (objectMassKg * g).toFixed(1)

  if (isCollapsed) {
    return (
      <button
        aria-expanded={false}
        aria-label="Expand Gravity Field Inspector"
        className={`gravity-field-inspector is-collapsed ${hasActiveOverlay ? 'has-active-overlay' : ''}`}
        onClick={onToggleCollapse}
        title="Expand Gravity Field Inspector"
        type="button"
      >
        <span className="collapsed-tab-symbol" aria-hidden="true">‹</span>
        <span className="collapsed-tab-text">GRAVITY</span>
        <span className="collapsed-tab-badge">
          <span className="planet-pill-dot" style={{ background: planet.color }} />
          {planet.name.toUpperCase()}
        </span>
      </button>
    )
  }

  return (
    <aside
      aria-label="Gravity Field Inspector"
      className={`gravity-field-inspector is-expanded ${hasActiveOverlay ? 'has-active-overlay' : ''}`}
      role="region"
    >
      {/* Header */}
      <div className="inspector-header">
        <div className="inspector-title-group">
          <span className="inspector-eyebrow">GRAVITY FIELD INSPECTOR</span>
          <h2 className="inspector-title">{planet.name.toUpperCase()}</h2>
        </div>
        <div className="inspector-header-actions">
          <span className="inspector-planet-badge">
            {planet.type?.toUpperCase() || 'PLANET'} · {(planet.massEarths ?? planet.massEarth ?? 1.0).toFixed(2)} M⊕
          </span>
          <button
            aria-expanded={true}
            aria-label="Collapse Gravity Field Inspector"
            className="inspector-collapse-btn"
            onClick={onToggleCollapse}
            title="Collapse panel"
            type="button"
          >
            <span aria-hidden="true">−</span>
          </button>
        </div>
      </div>

      {/* 8-Planet Quick Selector */}
      <div className="inspector-planet-selector" role="group" aria-label="Select celestial body">
        {PLANETS_DATA.map((p) => {
          const isSelected = p.id === planet.id
          return (
            <button
              key={p.id}
              aria-pressed={isSelected}
              className={`inspector-planet-btn ${isSelected ? 'is-active' : ''}`}
              data-planet={p.id}
              onClick={() => onSelectPlanet?.(p.id)}
              title={`${p.name} (g = ${p.surfaceGravityMs2} m/s²)`}
              type="button"
            >
              <span className="planet-pill-dot" style={{ background: p.color }} />
              <span className="planet-btn-name">{p.name.toUpperCase()}</span>
            </button>
          )
        })}
      </div>

      {/* Essential Physical Measurements with 3-Tier Hierarchy */}
      <div className="inspector-measurements">
        {/* Surface Gravity */}
        <div className="inspector-metric-card metric-gravity">
          <span className="metric-label">SURFACE GRAVITY</span>
          <div className="metric-value-row">
            <strong className="metric-val">{g.toFixed(2)}</strong>
            <span className="metric-unit">m/s²</span>
          </div>
          <p className="metric-desc">Downward acceleration at the surface.</p>
        </div>

        {/* Object Mass */}
        <div className="inspector-metric-card metric-mass">
          <span className="metric-label">OBJECT MASS</span>
          <div className="metric-value-row">
            <strong className="metric-val">{objectMassKg}</strong>
            <span className="metric-unit">kg</span>
          </div>
          <p className="metric-desc">Mass remains constant on every planet.</p>
        </div>

        {/* Weight Force */}
        <div className="inspector-metric-card metric-weight">
          <span className="metric-label">WEIGHT FORCE</span>
          <div className="metric-value-row">
            <strong className="metric-val">{weightN}</strong>
            <span className="metric-unit">N</span>
          </div>
          <p className="metric-desc">W = m × g</p>
        </div>
      </div>

      {/* Primary Action Button */}
      <button
        className="inspector-drop-btn"
        onClick={() => onTriggerDrop?.(g)}
        type="button"
      >
        <span className="drop-icon" aria-hidden="true">↓</span>
        <span>TEST DROP IN 3D (g = {g.toFixed(2)} m/s²)</span>
      </button>

      {/* Educational Guidance */}
      <div className="inspector-guidance">
        <div className="guidance-step">
          <span className="guidance-tag watch-tag">WHAT TO WATCH</span>
          <p className="guidance-text">
            Drop the same object on different planets. Compare how quickly it accelerates.
          </p>
        </div>
        <div className="guidance-step">
          <span className="guidance-tag physics-tag">PHYSICS</span>
          <p className="guidance-text">
            Surface gravity determines the object's acceleration. Weight changes because: <strong>W = m × g</strong>
          </p>
        </div>
      </div>
    </aside>
  )
}

export default GravityFieldInspector
