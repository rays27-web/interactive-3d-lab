import { useState } from 'react'
import ScientificIcon from './ScientificIcon'
import { EXPERIMENT_MISSIONS_DATA } from '../physics/experimentMissions'

const EXPERIMENT_ICONS = {
  'planet': 'planet',
  'galaxy': 'orbit',
  'black-hole': 'gravity',
  'fluid': 'velocity',
  'pulsar': 'time',
  'solar-system': 'distance',
}

function ExperimentHeader({ experiment, onOpenMission }) {
  // Phase 54 & 56: Default state must be collapsed/closed on initial load
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isEquationOpen, setIsEquationOpen] = useState(false)
  const meta = EXPERIMENT_MISSIONS_DATA[experiment.id] || EXPERIMENT_MISSIONS_DATA.planet
  const iconName = EXPERIMENT_ICONS[experiment.id] || 'planet'

  return (
    <header
      aria-label="Experiment Educational Overview"
      className={`experiment-educational-header experiment-header-banner ${isCollapsed ? 'is-collapsed' : 'is-expanded'}`}
    >
      <div className="exp-header-top exp-header-left">
        <div className="exp-header-title-row">
          <ScientificIcon
            ariaLabel={`${experiment.name} experiment symbol`}
            className="exp-header-icon"
            name={iconName}
            size={18}
          />
          <div className="exp-header-heading-group">
            <div className="exp-header-badge">
              <span className="badge-num">{experiment.index}</span>
              <span className="badge-title">{experiment.name}</span>
              <span className="badge-field">· {meta.theme}</span>
            </div>
          </div>
        </div>

        <div className="exp-header-actions">
          {/* Phase 54 & 56: Compact toggle entry point for Scientific Inquiry */}
          <button
            aria-expanded={!isCollapsed}
            aria-label={isCollapsed ? 'Expand scientific inquiry panel' : 'Collapse scientific inquiry panel'}
            className="exp-header-toggle-btn inquiry-toggle-entry"
            onClick={() => setIsCollapsed((prev) => !prev)}
            type="button"
          >
            <ScientificIcon name="question" size={13} />
            <span>SCIENTIFIC INQUIRY</span>
            <span className="toggle-state-text">{isCollapsed ? '▾ EXPAND' : '▴ MINIMIZE'}</span>
          </button>

          {onOpenMission && (
            <button
              className="exp-header-mission-btn"
              onClick={onOpenMission}
              type="button"
            >
              <ScientificIcon name="target" size={13} />
              <span className="exp-header-btn-text">START INQUIRY MISSION</span>
            </button>
          )}
        </div>
      </div>

      {!isCollapsed && (
        <div className="exp-header-details">
          {/* 1. WHAT AM I EXPLORING? */}
          <div className="exp-header-row inquiry-question-row">
            <span className="exp-header-label">
              <ScientificIcon name="question" size={13} />
              WHAT AM I EXPLORING?
            </span>
            <p className="exp-header-question">{meta.primaryQuestion}</p>
          </div>

          <div className="exp-header-triplet exp-header-specs inquiry-quad-specs">
            {/* 2. WHAT CAN I CHANGE? */}
            <div className="exp-header-col exp-spec-col">
              <span className="exp-header-label spec-label">
                <ScientificIcon name="control" size={12} />
                WHAT CAN I CHANGE?
              </span>
              <span className="exp-header-val spec-val">{meta.controlsSummary}</span>
            </div>

            {/* 3. WHAT SHOULD I WATCH? */}
            <div className="exp-header-col exp-spec-col">
              <span className="exp-header-label spec-label">
                <ScientificIcon name="observe" size={12} />
                WHAT SHOULD I WATCH?
              </span>
              <span className="exp-header-val spec-val">{meta.observablesSummary}</span>
            </div>

            {/* 4. WHY DOES IT MATTER? */}
            <div className="exp-header-col exp-spec-col law-col">
              <span className="exp-header-label spec-label">
                <ScientificIcon name="equation" size={12} />
                WHY DOES IT MATTER?
              </span>
              <span className="exp-header-val spec-val font-mono">{meta.governingPrinciple}</span>
            </div>
          </div>

          {/* Optional Equation Toggle */}
          {meta.formula && (
            <div className="exp-header-equation-row">
              <button
                type="button"
                className="exp-header-equation-toggle"
                onClick={() => setIsEquationOpen((prev) => !prev)}
              >
                <span>{isEquationOpen ? '▾ HIDE GOVERNING EQUATION' : '▸ SHOW GOVERNING EQUATION'}</span>
              </button>
              {isEquationOpen && (
                <div className="exp-header-equation-box">
                  <code>{meta.formula}</code>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  )
}

export default ExperimentHeader
