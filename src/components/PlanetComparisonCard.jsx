import { useState } from 'react'
import { PLANETS_DATA, SCALE_DISCLAIMER } from '../data/planets'
import ScientificIcon from './ScientificIcon'

function PlanetComparisonCard({
  selectedPlanetId = 'earth',
  onSelectPlanet,
  objectMassKg = 70,
  onChangeObjectMass,
  onTriggerDrop,
  onRunExperiment,
  isPlanetExperiment = true,
  onClose,
}) {
  const [activePlanetId, setActivePlanetId] = useState(selectedPlanetId)
  const currentPlanet = PLANETS_DATA.find((p) => p.id === activePlanetId) || PLANETS_DATA[2] // Earth default

  // Calculate local weight in Newtons: W = m * g
  const surfaceG = currentPlanet.surfaceGravityMs2
  const weightNewtons = (objectMassKg * surfaceG).toFixed(1)
  const earthWeightNewtons = (objectMassKg * 9.81).toFixed(1)
  const weightRatio = (surfaceG / 9.81).toFixed(2)

  const handleSelect = (planetId) => {
    setActivePlanetId(planetId)
    onSelectPlanet?.(planetId)
  }

  return (
    <aside
      aria-label="Planetary Physics & Mass vs Weight Inspector"
      className="planet-comparison-card"
      role="region"
    >
      <div className="card-header">
        <div className="card-title-row">
          <ScientificIcon name="planet" size={16} />
          <div>
            <span className="card-tag">PLANETARY GRAVITY APPARATUS</span>
            <h2 className="card-heading">{currentPlanet.name.toUpperCase()}</h2>
          </div>
        </div>
        {onClose && (
          <button aria-label="Close planet inspector" className="card-close-btn" onClick={onClose} type="button">
            ✕
          </button>
        )}
      </div>

      {/* 8-Planet Quick Selector Pills */}
      <div aria-label="Select planetary body" className="planet-selector-pills" role="radiogroup">
        {PLANETS_DATA.map((p) => {
          const isSelected = p.id === activePlanetId
          return (
            <button
              aria-checked={isSelected}
              className={`planet-pill-btn ${isSelected ? 'is-active' : ''}`}
              key={p.id}
              onClick={() => handleSelect(p.id)}
              role="radio"
              style={{ '--planet-accent': p.color }}
              type="button"
            >
              <span className="planet-pill-dot" />
              <span>{p.name.slice(0, 3).toUpperCase()}</span>
            </button>
          )
        })}
      </div>

      {/* Planet Physical Metrics Grid */}
      <div className="planet-stats-grid">
        <div className="stat-box">
          <span className="stat-label">TYPE</span>
          <strong className="stat-val">{currentPlanet.type.split(' ')[0]}</strong>
        </div>
        <div className="stat-box">
          <span className="stat-label">MASS (M)</span>
          <strong className="stat-val">{currentPlanet.massEarths.toFixed(2)} M⊕</strong>
        </div>
        <div className="stat-box">
          <span className="stat-label">RADIUS (R)</span>
          <strong className="stat-val">{currentPlanet.radiusKm.toLocaleString()} km</strong>
        </div>
        <div className="stat-box highlight-box">
          <span className="stat-label">SURFACE GRAVITY (g = GM/R²)</span>
          <strong className="stat-val highlight">{currentPlanet.surfaceGravityMs2.toFixed(2)} m/s² ({currentPlanet.surfaceGravityG.toFixed(2)}g)</strong>
        </div>
      </div>

      {/* Phase 29: Mass vs Weight Interactive Apparatus */}
      {isPlanetExperiment && (
        <div className="mass-weight-apparatus">
          <div className="apparatus-header">
            <span className="apparatus-tag">MASS vs WEIGHT EXPERIMENT</span>
            <span className="apparatus-formula">W = m · g</span>
          </div>

          <div className="mass-control-row">
            <label className="mass-control-label" htmlFor="object-mass-slider">
              OBJECT MASS (m):
              <strong>{objectMassKg} kg</strong>
              <small>(Constant across universe)</small>
            </label>
            <input
              aria-label="Adjust object mass in kilograms"
              className="mass-slider"
              id="object-mass-slider"
              max={150}
              min={1}
              onChange={(e) => onChangeObjectMass?.(parseFloat(e.target.value))}
              step={1}
              type="range"
              value={objectMassKg}
            />
          </div>

          <div className="weight-readout-card weight-comparison-display">
            <div className="readout-col weight-pill">
              <span className="readout-label weight-lbl">EARTH BASELINE WEIGHT</span>
              <strong className="readout-val weight-val">{earthWeightNewtons} N</strong>
              <small>(at 9.81 m/s²)</small>
            </div>
            <div className="readout-arrow vs-arrow" aria-hidden="true">➔</div>
            <div className="readout-col weight-pill active-col active-planet">
              <span className="readout-label weight-lbl">{currentPlanet.name.toUpperCase()} WEIGHT</span>
              <strong className="readout-val weight-val highlight">{weightNewtons} N</strong>
              <small>({weightRatio}× Earth weight)</small>
            </div>
          </div>

          <div className="apparatus-actions apparatus-drop-action">
            {onTriggerDrop && (
              <button
                className="drop-test-btn test-drop-btn"
                onClick={() => onTriggerDrop(surfaceG)}
                type="button"
              >
                <ScientificIcon name="run" size={13} />
                <span>TEST DROP IN 3D (g = {surfaceG.toFixed(2)} m/s²)</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Educational Concept & Core Question */}
      <div className="card-concept-box">
        <span className="concept-tag">EDUCATIONAL CONCEPT: {currentPlanet.educationalConcept.toUpperCase()}</span>
        <p className="concept-question">"{currentPlanet.coreQuestion}"</p>
        <p className="concept-summary">{currentPlanet.whySummary}</p>
      </div>

      <div className="card-footer-row card-footer-scale">
        <span className="scale-disclaimer-pill scale-disclaimer" title={SCALE_DISCLAIMER.description}>
          ⚠️ {SCALE_DISCLAIMER.label}
        </span>
        {onRunExperiment && (
          <button
            className="card-run-btn"
            onClick={() => onRunExperiment(currentPlanet)}
            type="button"
          >
            RUN EXPERIMENT →
          </button>
        )}
      </div>
    </aside>
  )
}

export default PlanetComparisonCard
