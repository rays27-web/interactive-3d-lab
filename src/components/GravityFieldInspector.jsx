import { PLANETS_DATA } from '../data/planets'

function GravityFieldInspector({
  planet = PLANETS_DATA[2],
  onSelectPlanet,
  onTriggerDrop,
  objectMassKg = 70,
  onChangeObjectMass,
  isCollapsed = false,
  onToggleCollapse,
  hasActiveOverlay = false,
}) {
  const g = planet?.surfaceGravityMs2 || 9.81
  const weightN = (objectMassKg * g).toFixed(1)

  if (isCollapsed) {
    return (
      <div
        aria-expanded={false}
        className={`gravity-field-inspector is-collapsed ${hasActiveOverlay ? 'has-active-overlay' : ''}`}
      >
        <div
          className="collapsed-tab-content"
          onClick={onToggleCollapse}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onToggleCollapse?.() }}
          role="button"
          tabIndex={0}
          title="Expand Gravity Field Inspector"
        >
          <span className="collapsed-tab-dot" aria-hidden="true">◉</span>
          <span className="collapsed-tab-text">GRAVITY FIELD</span>
          <span className="collapsed-gravity-value">g = {g.toFixed(2)} m/s²</span>
          <span className="collapsed-tab-badge">
            <span className="planet-pill-dot" style={{ background: planet.color }} />
            {planet.name.toUpperCase()}
          </span>
          <span className="collapsed-mass-pill">{objectMassKg} kg</span>
        </div>
        <button
          aria-expanded={false}
          aria-label="Expand Gravity Field Inspector"
          className="inspector-toggle-btn inspector-expand-btn"
          onClick={onToggleCollapse}
          title="Expand Gravity Field Inspector"
          type="button"
        >
          <span aria-hidden="true">[ + ]</span>
        </button>
      </div>
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
            aria-label="Minimize Gravity Field Inspector"
            className="inspector-toggle-btn inspector-collapse-btn"
            onClick={onToggleCollapse}
            title="Minimize Gravity Field Inspector"
            type="button"
          >
            <span aria-hidden="true">[ − ]</span>
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

      {/* Interactive Object Mass Slider Control */}
      <div className="inspector-mass-control-card">
        <div className="inspector-mass-header">
          <span className="metric-label">OBJECT MASS (m)</span>
          <div className="inspector-mass-input-group">
            <input
              aria-label="Object mass in kilograms"
              className="inspector-mass-number-input"
              max="100"
              min="1"
              onChange={(e) => {
                const val = Math.min(100, Math.max(1, Number(e.target.value) || 1))
                onChangeObjectMass?.(val)
              }}
              step="1"
              type="number"
              value={objectMassKg}
            />
            <span className="metric-unit">kg</span>
          </div>
        </div>
        <input
          aria-label="Adjust object mass slider"
          className="inspector-mass-slider"
          max="100"
          min="1"
          onChange={(e) => onChangeObjectMass?.(Number(e.target.value))}
          step="1"
          type="range"
          value={objectMassKg}
        />
        <div className="inspector-mass-scale-labels">
          <span>1 kg</span>
          <div className="inspector-mass-presets">
            {[10, 50, 70, 100].map((preset) => (
              <button
                key={preset}
                className={`mass-preset-btn ${objectMassKg === preset ? 'is-active' : ''}`}
                onClick={() => onChangeObjectMass?.(preset)}
                type="button"
              >
                {preset}kg
              </button>
            ))}
          </div>
          <span>100 kg</span>
        </div>
      </div>

      {/* Visual Dynamic Formula Relationship: m × g = W */}
      <div className="inspector-formula-calc-card">
        <span className="calc-card-eyebrow">EQUATION · W = m × g</span>
        <div className="calc-equation-display">
          <div className="calc-term term-mass">
            <span className="term-label">OBJECT MASS</span>
            <span className="term-val">{objectMassKg} <small>kg</small></span>
          </div>
          <span className="calc-operator">×</span>
          <div className="calc-term term-gravity">
            <span className="term-label">SURFACE GRAVITY</span>
            <span className="term-val">{g.toFixed(2)} <small>m/s²</small></span>
          </div>
          <span className="calc-operator">=</span>
          <div className="calc-term term-weight">
            <span className="term-label">WEIGHT FORCE</span>
            <span className="term-val">{weightN} <small>N</small></span>
          </div>
        </div>
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

      {/* Educational Distinction Callout */}
      <div className="inspector-distinction-banner">
        <span className="banner-badge">CRITICAL DISTINCTION</span>
        <div className="banner-title">MASS OF OBJECT ≠ PLANETARY MASS</div>
        <p className="banner-text">
          Changing object mass changes weight (<strong>W = m × g</strong>), not the planet's surface gravity.
        </p>
      </div>

      {/* Educational Guidance */}
      <div className="inspector-guidance">
        <div className="guidance-step">
          <span className="guidance-tag physics-tag">MASS VS WEIGHT</span>
          <div className="guidance-bullets">
            <p className="guidance-text"><strong>MASS (kg):</strong> Amount of matter in the object.</p>
            <p className="guidance-text"><strong>WEIGHT (N):</strong> Gravitational force acting on the object.</p>
            <p className="guidance-text"><strong>EQUATION:</strong> W = m × g</p>
          </div>
        </div>
        <div className="guidance-step">
          <span className="guidance-tag watch-tag">FREE FALL PHYSICS</span>
          <p className="guidance-text">
            For ideal free fall, acceleration is <strong>a = g</strong> (identical for all masses). The spring scale measures weight <strong>W</strong> upon landing.
          </p>
        </div>
      </div>
    </aside>
  )
}

export default GravityFieldInspector
