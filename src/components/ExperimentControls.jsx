import { useState } from 'react'

function ExperimentControls({ experiment, values = {}, onChange, onReset }) {
  const [isOpen, setIsOpen] = useState(false)
  const controls = experiment.controls || []

  if (controls.length === 0) return null

  return (
    <div className="experiment-controls">
      <button
        aria-expanded={isOpen}
        className={`controls-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        <span className="controls-trigger-icon" aria-hidden="true">⌁</span>
        <span>PARAMETERS</span>
        <span className="controls-trigger-symbol" aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && (
        <div className="controls-panel" role="region" aria-label="Experiment parameters">
          <div className="controls-header">
            <span className="controls-title">OBSERVATION TELEMETRY</span>
            <span className="controls-index">{experiment.index} / {experiment.name}</span>
          </div>

          <div className="controls-list">
            {controls.map((control) => {
              const currentValue = values[control.id] ?? control.default
              const displayValue = control.format ? control.format(currentValue) : currentValue

              if (control.type === 'toggle') {
                const isActive = Boolean(currentValue)
                return (
                  <div className="control-item control-item-toggle" key={control.id}>
                    <div className="control-label-row">
                      <span className="control-label">{control.label}</span>
                      <span className={`control-value ${isActive ? 'is-alert' : ''}`}>
                        {displayValue}
                      </span>
                    </div>
                    <button
                      className={`control-toggle-btn ${isActive ? 'is-active' : ''}`}
                      onClick={() => onChange(control.id, !currentValue)}
                      type="button"
                    >
                      {isActive ? 'RESUME SIMULATION' : 'HALT SIMULATION'}
                    </button>
                  </div>
                )
              }

              return (
                <div className="control-item" key={control.id}>
                  <div className="control-label-row">
                    <label className="control-label" htmlFor={`control-${control.id}`}>
                      {control.label}
                    </label>
                    <span className="control-value">{displayValue}</span>
                  </div>
                  <input
                    aria-label={control.label}
                    className="control-slider"
                    id={`control-${control.id}`}
                    max={control.max}
                    min={control.min}
                    onChange={(e) => onChange(control.id, parseFloat(e.target.value))}
                    step={control.step}
                    type="range"
                    value={currentValue}
                  />
                </div>
              )
            })}
          </div>

          <div className="controls-footer">
            <button className="controls-reset-btn" onClick={onReset} type="button">
              RESET TO BASELINE
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExperimentControls
