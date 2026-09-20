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
          <ScientificIcon aria-hidden="true" name="planet" size={16} />
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

      {/* 8-Planet Quick Selector */}
      <div aria-label="Select planetary body" className="planet-selector-pills" role="radiogroup">
        {PLANETS_DATA.map((p) => {
          const isSelected = p.id === activePlanetId
          return (
            <button
              aria-checked={isSelected}
              aria-label={`Select ${p.name}`}
              className={`planet-pill-btn ${isSelected ? 'is-active' : ''}`}
              key={p.id}
              onClick={() => handleSelect(p.id)}
              role="radio"
              style={{ '--planet-accent': p.color }}
              type="button"
            >
              <span aria-hidden="true" className="planet-pill-dot" />
              <span className="planet-pill-name">{p.name}</span>
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
              <small>(Constant across universe: 1–200 kg)</small>
            </label>
            <input
              aria-label="Adjust object mass in kilograms"
              className="mass-slider"
              id="object-mass-slider"
              max={200}
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
            <div className="readout-col weight-pill active-col active-planet">
              <span className="readout-label weight-lbl">{currentPlanet.name.toUpperCase()} WEIGHT</span>
              <strong className="readout-val weight-val highlight">{weightNewtons} N</strong>
              <small>({weightRatio}× Earth weight)</small>
            </div>
          </div>

          {/* 8-Planet Dynamic Weight Table */}
          <div className="card-comparison-table-wrap">
            <div className="table-caption">
              <strong>COMPARE THE SAME OBJECT ({objectMassKg} kg) ACROSS ALL PLANETS</strong>
              <p>Mass stays {objectMassKg} kg everywhere. Weight depends on local surface gravity (W = m · g).</p>
            </div>
            <table className="card-comparison-table">
              <thead>
                <tr>
                  <th>PLANET</th>
                  <th style={{ textAlign: 'right' }}>GRAVITY</th>
                  <th style={{ textAlign: 'right' }}>WEIGHT (W = mg)</th>
                  <th style={{ textAlign: 'right' }}>vs EARTH</th>
                </tr>
              </thead>
              <tbody>
                {PLANETS_DATA.map((p) => {
                  const pG = p.surfaceGravityMs2
                  const pWeight = (objectMassKg * pG).toFixed(1)
                  const pRatio = (pG / 9.81).toFixed(2)
                  const isCurrent = p.id === activePlanetId
                  return (
                    <tr
                      key={p.id}
                      className={`card-table-row ${isCurrent ? 'is-active' : ''}`}
                      onClick={() => handleSelect(p.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <td>
                        <span className="planet-pill-dot" style={{ background: p.color, display: 'inline-block', marginRight: '6px' }} />
                        <strong>{p.name}</strong>
                      </td>
                      <td style={{ textAlign: 'right' }}>{pG.toFixed(2)} m/s²</td>
                      <td style={{ textAlign: 'right', color: isCurrent ? '#73ffd3' : '#ffffff', fontWeight: 'bold' }}>{pWeight} N</td>
                      <td style={{ textAlign: 'right', color: '#ffb866' }}>{pRatio}×</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="apparatus-actions apparatus-drop-action">
            {onTriggerDrop && (
              <button
                className="drop-test-btn test-drop-btn"
                onClick={() => onTriggerDrop(surfaceG)}
                type="button"
              >
                <ScientificIcon aria-hidden="true" name="run" size={13} />
                <span>TEST DROP IN 3D (g = {surfaceG.toFixed(2)} m/s²)</span>
              </button>
            )}
          </div>

          {/* Phase 59: Student Guidance & Prediction */}
          <div className="apparatus-student-guidance">
            <div className="guidance-block">
              <span className="guidance-label">WHAT TO WATCH</span>
              <p className="guidance-text">Drop the same object on different planets. Compare how its motion changes.</p>
            </div>
            <div className="guidance-block prediction-block">
              <span className="guidance-label prediction-label">PREDICT</span>
              <p className="guidance-text">Which planet will make the object accelerate fastest?</p>
            </div>
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
