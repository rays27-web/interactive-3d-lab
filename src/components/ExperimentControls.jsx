import { useState } from 'react'
import PresetManager from './PresetManager'
import InfoTooltip from './InfoTooltip'
import { EXPERIMENT_MISSIONS_DATA } from '../physics/experimentMissions'

function ExperimentControls({
  experiment,
  values = {},
  onChange,
  onReset,
  onApplyPreset,
  isOpen,
  onToggleOpen,
  onLearnMore,
}) {
  const [activeTab, setActiveTab] = useState('parameters') // 'parameters' | 'presets'
  const controls = experiment.controls || []
  const expMissions = EXPERIMENT_MISSIONS_DATA[experiment.id] || {}

  if (controls.length === 0) return null

  return (
    <div className="experiment-controls">
      <button
        aria-controls="controls-panel"
        aria-expanded={isOpen}
        className={`controls-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={onToggleOpen}
        type="button"
      >
        <span className="controls-trigger-icon" aria-hidden="true">⌁</span>
        <span>PARAMETERS</span>
        <span className="controls-trigger-symbol" aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && (
        <div
          aria-label="Experiment parameters and presets"
          className="controls-panel"
          id="controls-panel"
          role="region"
        >
          <div className="controls-header">
            <span className="controls-title">LABORATORY TELEMETRY</span>
            <span className="controls-index">{experiment.index} / {experiment.name}</span>
          </div>

          <div className="controls-tabs" role="tablist" aria-label="Controls sections">
            <button
              aria-selected={activeTab === 'parameters'}
              className={`controls-tab ${activeTab === 'parameters' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('parameters')}
              role="tab"
              type="button"
            >
              PARAMETERS
            </button>
            <button
              aria-selected={activeTab === 'presets'}
              className={`controls-tab ${activeTab === 'presets' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('presets')}
              role="tab"
              type="button"
            >
              PRESETS
            </button>
          </div>

          {activeTab === 'parameters' ? (
            <>
              {/* Step 5: Primary Action Row */}
              <div className="controls-primary-actions">
                <button
                  className="ctrl-action-btn ctrl-reset-action"
                  onClick={onReset}
                  type="button"
                >
                  ↺ RESET BASELINE
                </button>
              </div>

              {/* Step 5: Student Educational Guidance Block */}
              <div className="controls-guidance-card">
                <div className="guidance-item">
                  <span className="guidance-lbl">YOU ARE CHANGING:</span>
                  <strong className="guidance-val">
                    {experiment.id === 'planet' ? 'Rotational velocity (ω)' : controls[0]?.label || 'Physical Parameter'}
                  </strong>
                </div>
                <div className="guidance-item">
                  <span className="guidance-lbl">YOU ARE WATCHING:</span>
                  <span className="guidance-text">
                    {experiment.id === 'planet'
                      ? "How quickly the planet's surface turns around its axis."
                      : expMissions.observablesSummary || 'Dynamic 3D response & equilibrium'}
                  </span>
                </div>
              </div>

              <div className="controls-list">
                {controls.map((control) => {
                  const currentValue = values[control.id] ?? control.default
                  const displayValue = control.format ? control.format(currentValue) : currentValue
                  const guide = expMissions.parameterGuides?.[control.id]
                  const definition = guide?.definition || experiment.parameterGuides?.[control.id] || 'Primary simulation calibration parameter.'
                  const significance = guide?.significance || 'Modulates physical integration variables in real-time.'

                  if (control.type === 'toggle') {
                    const isActive = Boolean(currentValue)
                    return (
                      <div className="control-item control-item-toggle" key={control.id}>
                        <div className="control-label-row">
                          <span className="control-label-wrapper">
                            <span className="control-label">{control.label}</span>
                            <InfoTooltip
                              definition={definition}
                              onLearnMore={onLearnMore ? () => onLearnMore(control.id) : undefined}
                              significance={significance}
                              title={control.label}
                            />
                          </span>
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
                        <span className="control-label-wrapper">
                          <label className="control-label" htmlFor={`control-${control.id}`}>
                            {control.label}
                          </label>
                          <InfoTooltip
                            definition={definition}
                            onLearnMore={onLearnMore ? () => onLearnMore(control.id) : undefined}
                            significance={significance}
                            title={control.label}
                          />
                        </span>
                        <span className="control-value">{displayValue}</span>
                      </div>
                      <div className="slider-direction-hints" aria-hidden="true">
                        <span>Min ←</span>
                        <span>→ Max</span>
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
            </>
          ) : (
            <PresetManager
              experiment={experiment}
              onApplyPreset={onApplyPreset}
              onResetBaseline={onReset}
              values={values}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default ExperimentControls
