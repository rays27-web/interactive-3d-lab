import { useState } from 'react'
import { EXPERIMENT_MISSIONS_DATA } from '../physics/experimentMissions'

function WhatAmIDoingPanel({
  experiment,
  currentParams = {},
  onOpenMission,
  onOpenExplanation,
  activeMission,
}) {
  const [isMinimized, setIsMinimized] = useState(true)
  const meta = EXPERIMENT_MISSIONS_DATA[experiment.id] || EXPERIMENT_MISSIONS_DATA.planet

  return (
    <aside
      aria-label="Educational Inquiry HUD"
      className={`what-am-i-doing-panel ${isMinimized ? 'is-minimized' : ''}`}
      role="region"
    >
      <div className="hud-header">
        <div className="hud-title-group">
          <span className="hud-tag">SCIENTIFIC INQUIRY</span>
          <span className="hud-experiment">{experiment.index} · {meta.theme}</span>
        </div>
        <button
          aria-expanded={!isMinimized}
          aria-label={isMinimized ? 'Expand scientific inquiry HUD' : 'Minimize scientific inquiry HUD'}
          className="hud-toggle-btn"
          onClick={() => setIsMinimized((prev) => !prev)}
          type="button"
        >
          {isMinimized ? '▾ EXPAND' : '▴ MINIMIZE'}
        </button>
      </div>

      {!isMinimized && (
        <div className="hud-body">
          {/* Question */}
          <div className="hud-block hud-question-block">
            <span className="hud-block-label">SCIENTIFIC QUESTION</span>
            <p className="hud-question-text">{meta.primaryQuestion}</p>
          </div>

          <div className="hud-grid">
            {/* What I Control */}
            <div className="hud-block">
              <span className="hud-block-label">WHAT I CONTROL</span>
              <div className="hud-params-pills">
                {experiment.controls?.map((ctrl) => {
                  const val = currentParams[ctrl.id] ?? ctrl.default
                  const formatted = ctrl.format ? ctrl.format(val) : val
                  return (
                    <div className="hud-pill" key={ctrl.id}>
                      <span className="pill-name">{ctrl.label.split(' ')[0]}</span>
                      <strong className="pill-val">{formatted}</strong>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* What I Observe */}
            <div className="hud-block">
              <span className="hud-block-label">WHAT I OBSERVE</span>
              <p className="hud-text-desc">{meta.observablesSummary}</p>
            </div>
          </div>

          {/* Principle / Formula */}
          <div className="hud-block hud-principle-block">
            <div className="hud-principle-row">
              <span className="hud-block-label">GOVERNING PRINCIPLE</span>
              <button
                className="hud-learn-btn"
                onClick={onOpenExplanation}
                type="button"
              >
                WHY? (4-LEVEL EXPLANATION) →
              </button>
            </div>
            <div className="hud-formula-code">
              <code>{meta.formula}</code>
            </div>
          </div>

          {/* Mission CTA */}
          <div className="hud-footer">
            <div className="hud-mission-status">
              <span className="mission-status-dot" aria-hidden="true" />
              <span>{activeMission ? `MISSION ${activeMission.number}: ${activeMission.title}` : 'EXPLORATION MODE'}</span>
            </div>
            <button
              className="hud-mission-btn"
              onClick={onOpenMission}
              type="button"
            >
              <span>🎯</span>
              <span>{activeMission ? 'CONTINUE MISSION' : 'START MISSION'}</span>
            </button>
          </div>
        </div>
      )}
    </aside>
  )
}

export default WhatAmIDoingPanel
