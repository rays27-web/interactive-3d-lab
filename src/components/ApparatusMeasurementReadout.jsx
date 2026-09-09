import { PLANETS_DATA } from '../data/planets'

function ApparatusMeasurementReadout({
  planet = PLANETS_DATA[2],
  objectMassKg = 70,
  hasActiveOverlay = false,
}) {
  const g = planet?.surfaceGravityMs2 || 9.81
  const weightN = (objectMassKg * g).toFixed(1)

  return (
    <aside
      aria-label="Object Measurement Readout"
      className={`object-measurement-readout apparatus-readout-hud ${hasActiveOverlay ? 'has-active-overlay' : ''}`}
      data-testid="object-measurement-readout"
    >
      <div className="readout-hud-header">
        <span className="readout-hud-dot" aria-hidden="true">◉</span>
        <span className="readout-hud-title">OBJECT MEASUREMENT</span>
      </div>

      <div className="readout-hud-grid">
        <div className="readout-hud-row row-mass">
          <span className="readout-hud-label">MASS</span>
          <span className="readout-hud-val">
            <strong className="hud-num">{objectMassKg}</strong> <span className="hud-unit">kg</span>
          </span>
        </div>

        <div className="readout-hud-row row-gravity">
          <span className="readout-hud-label">GRAVITY</span>
          <span className="readout-hud-val">
            <strong className="hud-num">{g.toFixed(2)}</strong> <span className="hud-unit">m/s²</span>
          </span>
        </div>

        <div className="readout-hud-row row-weight">
          <span className="readout-hud-label">WEIGHT</span>
          <span className="readout-hud-val highlight">
            <strong className="hud-num">{weightN}</strong> <span className="hud-unit">N</span>
          </span>
        </div>
      </div>

      <div className="readout-hud-footer">
        <span className="readout-hud-formula">W = m × g</span>
      </div>
    </aside>
  )
}

export default ApparatusMeasurementReadout
