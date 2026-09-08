import { PLANETS_DATA } from '../data/planets'

function GravityFieldInspector({
  planet = PLANETS_DATA[2],
  onSelectPlanet,
  onTriggerDrop,
  objectMassKg = 70,
}) {
  const g = planet?.surfaceGravityMs2 || 9.81
  const weightN = (objectMassKg * g).toFixed(1)

  return (
    <div
      aria-label="Gravity Field Inspector"
      className="gravity-field-inspector"
      role="region"
    >
      {/* Header */}
      <div className="inspector-header">
        <div className="inspector-title-group">
          <span className="inspector-eyebrow">3D GRAVITY FIELD CHAMBER</span>
          <h2 className="inspector-title">{planet.name.toUpperCase()}</h2>
        </div>
        <span className="inspector-planet-badge">
          {planet.type?.toUpperCase() || 'PLANET'} · {(planet.massEarths ?? planet.massEarth ?? 1.0).toFixed(2)} M⊕
        </span>
      </div>

      {/* 8-Planet Selector */}
      <div className="inspector-planet-selector" role="group" aria-label="Select celestial body">
        {PLANETS_DATA.map((p) => {
          const isSelected = p.id === planet.id
          return (
            <button
              key={p.id}
              className={`inspector-planet-btn ${isSelected ? 'is-active' : ''}`}
              onClick={() => onSelectPlanet?.(p.id)}
              type="button"
              title={`${p.name} (g = ${p.surfaceGravityMs2} m/s²)`}
            >
              <span className="planet-code">{p.name.slice(0, 3).toUpperCase()}</span>
            </button>
          )
        })}
      </div>

      {/* Essential Physical Measurements (Large value, short label, one-line meaning) */}
      <div className="inspector-measurements">
        {/* Surface Gravity */}
        <div className="inspector-metric-card metric-gravity">
          <span className="metric-label">SURFACE GRAVITY (g)</span>
          <div className="metric-value-row">
            <strong className="metric-val">{g.toFixed(2)}</strong>
            <span className="metric-unit">m/s²</span>
          </div>
          <p className="metric-desc">Downward acceleration of free fall: a = g</p>
        </div>

        {/* Object Mass */}
        <div className="inspector-metric-card metric-mass">
          <span className="metric-label">OBJECT MASS (m)</span>
          <div className="metric-value-row">
            <strong className="metric-val">{objectMassKg}</strong>
            <span className="metric-unit">kg</span>
          </div>
          <p className="metric-desc">Invariant matter across the universe</p>
        </div>

        {/* Weight Force */}
        <div className="inspector-metric-card metric-weight">
          <span className="metric-label">WEIGHT FORCE (W = m · g)</span>
          <div className="metric-value-row">
            <strong className="metric-val">{weightN}</strong>
            <span className="metric-unit">N</span>
          </div>
          <p className="metric-desc">Downward force exerted on spring scale</p>
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

      {/* Student Educational Guidance */}
      <div className="inspector-guidance">
        <div className="guidance-step">
          <span className="guidance-tag watch-tag">WHAT TO WATCH</span>
          <p className="guidance-text">
            Drop the same object on different planets. Compare how quickly it accelerates.
          </p>
        </div>
        <div className="guidance-step">
          <span className="guidance-tag predict-tag">PREDICT</span>
          <p className="guidance-text">
            Which planet will make the object accelerate fastest?
          </p>
        </div>
        <div className="guidance-step">
          <span className="guidance-tag understand-tag">UNDERSTAND</span>
          <p className="guidance-text">
            Surface gravity determines both the rate of acceleration (a = g) and downward weight (W = mg).
          </p>
        </div>
      </div>
    </div>
  )
}

export default GravityFieldInspector
