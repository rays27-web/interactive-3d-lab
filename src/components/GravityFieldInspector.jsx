import { PLANETS_DATA } from '../data/planets'

function GravityFieldInspector({
  planet = PLANETS_DATA[2],
  onSelectPlanet,
  onTriggerDrop,
  onResetDrop,
  onTogglePauseDrop,
  isDropPaused = false,
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
          title="Expand Gravity Field Info"
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
          aria-label="Expand Gravity Field Info"
          className="inspector-toggle-btn inspector-expand-btn"
          onClick={onToggleCollapse}
          title="Expand Gravity Field Info"
          type="button"
        >
          <span aria-hidden="true">[ + ]</span>
        </button>
      </div>
    )
  }

  return (
    <aside
      aria-label="Gravity Field Info & Object Measurement"
      className={`gravity-field-inspector is-expanded ${hasActiveOverlay ? 'has-active-overlay' : ''}`}
      role="region"
    >
      {/* Header */}
      <div className="inspector-header">
        <div className="inspector-title-group">
          <span className="inspector-eyebrow">GRAVITY FIELD INFO</span>
          <h2 className="inspector-title">{planet.name.toUpperCase()}</h2>
        </div>
        <div className="inspector-header-actions">
          <span className="inspector-planet-badge">
            {planet.type?.toUpperCase() || 'PLANET'} · {(planet.massEarths ?? planet.massEarth ?? 1.0).toFixed(2)} M⊕
          </span>
          <button
            aria-expanded={true}
            aria-label="Minimize Gravity Field Info"
            className="inspector-toggle-btn inspector-collapse-btn"
            onClick={onToggleCollapse}
            title="Minimize Gravity Field Info"
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

      {/* Interactive Object Mass Slider Control (1 - 200 kg) */}
      <div className="inspector-mass-control-card">
        <div className="inspector-mass-header">
          <span className="metric-label">OBJECT MASS (m)</span>
          <div className="inspector-mass-input-group">
            <input
              aria-label="Object mass in kilograms"
              className="inspector-mass-number-input"
              max="200"
              min="1"
              onChange={(e) => {
                const val = Math.min(200, Math.max(1, Number(e.target.value) || 1))
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
          max="200"
          min="1"
          onChange={(e) => onChangeObjectMass?.(Number(e.target.value))}
          step="1"
          type="range"
          value={objectMassKg}
        />
        <div className="inspector-mass-scale-labels">
          <span>1 kg</span>
          <div className="inspector-mass-presets">
            {[10, 50, 70, 100, 150, 200].map((preset) => (
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
          <span>200 kg</span>
        </div>
      </div>

      {/* Object Measurement Section (Single Source of Truth) */}
      <div className="inspector-measurements-panel">
        <div className="measurements-header">
          <span className="measurements-title">OBJECT MEASUREMENT</span>
          <span className="measurements-formula">W = m × g</span>
        </div>

        <div className="measurements-grid">
          <div className="measurement-row row-mass">
            <span className="measurement-label">MASS</span>
            <span className="measurement-value">
              <strong className="num-val">{objectMassKg}</strong> <span className="unit-val">kg</span>
            </span>
          </div>

          <div className="measurement-row row-gravity">
            <span className="measurement-label">GRAVITY</span>
            <span className="measurement-value">
              <strong className="num-val">{g.toFixed(2)}</strong> <span className="unit-val">m/s²</span>
            </span>
          </div>

          <div className="measurement-row row-weight">
            <span className="measurement-label">WEIGHT</span>
            <span className="measurement-value highlight">
              <strong className="num-val">{weightN}</strong> <span className="unit-val">N</span>
            </span>
          </div>
        </div>

        <p className="measurements-note">
          Mass remains constant on every planet. Weight depends on gravitational acceleration.
        </p>
      </div>

      {/* Compact Experiment Controls: [ DROP OBJECT ] [ RESET ] [ PAUSE ] */}
      <div className="inspector-controls-strip">
        <button
          className="inspector-drop-btn"
          onClick={() => onTriggerDrop?.(g)}
          type="button"
          aria-label="Drop test object"
          title="Drop test object under local gravity"
        >
          <span className="drop-icon" aria-hidden="true">⤓</span>
          <span>DROP OBJECT</span>
        </button>

        {onResetDrop && (
          <button
            className="inspector-reset-btn"
            onClick={() => onResetDrop?.()}
            type="button"
            aria-label="Reset experiment"
            title="Reset object to starting height"
          >
            <span aria-hidden="true">↺</span>
            <span>RESET</span>
          </button>
        )}

        {onTogglePauseDrop && (
          <button
            className={`inspector-pause-btn ${isDropPaused ? 'is-paused' : ''}`}
            onClick={() => onTogglePauseDrop?.()}
            type="button"
            aria-label={isDropPaused ? 'Resume free fall' : 'Pause free fall'}
            title={isDropPaused ? 'Resume free fall' : 'Pause free fall'}
          >
            <span aria-hidden="true">{isDropPaused ? '▶' : '⏸'}</span>
            <span>{isDropPaused ? 'RESUME' : 'PAUSE'}</span>
          </button>
        )}
      </div>

      {/* Educational Distinction Callout */}
      <div className="inspector-distinction-banner">
        <span className="banner-badge">CRITICAL DISTINCTION</span>
        <div className="banner-title">MASS OF OBJECT ≠ PLANETARY MASS</div>
        <p className="banner-text">
          Changing object mass changes weight (<strong>W = m × g</strong>), not the planet's surface gravity.
        </p>
      </div>

      {/* Educational Planetary Weight Comparison Table across all 8 Planets */}
      <div className="inspector-comparison-card">
        <div className="comparison-card-header">
          <span className="comparison-tag">PLANETARY WEIGHT COMPARISON</span>
          <span className="comparison-formula">m = {objectMassKg} kg</span>
        </div>
        <p className="comparison-explainer">
          Compare the same object on different planets. Surface gravity determines the object's weight.
        </p>

        <div className="comparison-table-wrapper">
          <table className="comparison-table" aria-label="Planetary Surface Gravity and Object Weight Comparison">
            <thead>
              <tr>
                <th scope="col">PLANET</th>
                <th scope="col" className="text-right">GRAVITY (g)</th>
                <th scope="col" className="text-right">WEIGHT (W)</th>
                <th scope="col" className="text-right">vs EARTH</th>
              </tr>
            </thead>
            <tbody>
              {PLANETS_DATA.map((p) => {
                const pG = p.surfaceGravityMs2
                const pWeight = (objectMassKg * pG).toFixed(1)
                const ratio = (pG / 9.81).toFixed(2)
                const isSelected = p.id === planet.id
                return (
                  <tr
                    key={p.id}
                    className={`comparison-row ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => onSelectPlanet?.(p.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        onSelectPlanet?.(p.id)
                      }
                    }}
                    title={`Click to switch to ${p.name} (g = ${pG.toFixed(2)} m/s²)`}
                  >
                    <td className="planet-col">
                      <span className="planet-dot" style={{ background: p.color }} aria-hidden="true" />
                      <strong className="planet-name">{p.name}</strong>
                      {isSelected && <span className="current-indicator">ACTIVE</span>}
                    </td>
                    <td className="text-right gravity-col">
                      {pG.toFixed(2)} <span className="unit">m/s²</span>
                    </td>
                    <td className="text-right weight-col">
                      <strong className="weight-num">{pWeight}</strong> <span className="unit">N</span>
                    </td>
                    <td className="text-right ratio-col">
                      {ratio}×
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </aside>
  )
}

export default GravityFieldInspector
