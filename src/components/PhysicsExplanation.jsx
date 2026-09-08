import { useState } from 'react'
import ScientificIcon from './ScientificIcon'

/**
 * PhysicsExplanation — "WHY DID THIS HAPPEN?" Scientific Explanation Card
 * 4-Level Progressive Disclosure:
 * Level 1: Intuition (Conceptual clarity & physical analogy)
 * Level 2: Governing Equations (Formal physical laws)
 * Level 3: Mathematical Derivation (Step-by-step proof & mechanics)
 * Level 4: Advanced Astrophysical Constraints (Limits, relativity, edge cases)
 */
function PhysicsExplanation({
  title = 'Orbital Mechanics & Gravitation',
  whatChanged,
  whatHappened,
  deltaData,
  formula,
  curriculumRef = 'NCERT / Classical & Relativistic Physics',
  derivation,
  progressiveData,
  isOpen = true,
  onClose,
  onRecord,
}) {
  const [activeLevel, setActiveLevel] = useState(1) // 1 | 2 | 3 | 4

  if (!isOpen) return null

  // Build 4-level content from progressiveData or fallback from legacy props
  const levels = {
    1: progressiveData?.level1 || {
      title: 'Level 1: Intuition (Physical Analogy)',
      content: whatHappened || 'Interacting forces reach a dynamic equilibrium based on conservation laws.',
    },
    2: progressiveData?.level2 || {
      title: 'Level 2: Governing Equations',
      content: formula
        ? `Primary governing relation:\n  ${formula}`
        : 'Equilibrium is dictated by Newton’s equations of motion and conservation of energy.',
    },
    3: progressiveData?.level3 || {
      title: 'Level 3: Mathematical Derivation',
      content: derivation || 'Evaluating conservation of mechanical energy and angular momentum yields the closed-form physical state.',
    },
    4: progressiveData?.level4 || {
      title: 'Level 4: Advanced Physical Constraints',
      content: 'Under relativistic, hydrodynamic, or extreme field regimes, nonlinear perturbations and boundary conditions modulate the ideal analytical solution.',
    },
  }

  const currentLevelData = levels[activeLevel] || levels[1]

  return (
    <aside
      aria-label="Physical Principle 4-Level Explanation"
      className="physics-explanation-card"
      role="region"
    >
      <div className="explanation-header">
        <div className="explanation-badge">
          <span className="badge-dot" aria-hidden="true" />
          <span>WHY DID THIS HAPPEN? · 4-LEVEL DISCLOSURE</span>
        </div>
        <button
          aria-label="Close explanation"
          className="explanation-close-btn"
          onClick={onClose}
          type="button"
        >
          ×
        </button>
      </div>

      <div className="explanation-body">
        <h4 className="explanation-title">{title}</h4>

        {whatChanged && (
          <div className="explanation-field">
            <span className="field-tag">VARIABLE PERTURBATION</span>
            <p className="field-desc highlight">{whatChanged}</p>
          </div>
        )}

        {deltaData && (
          <div className="explanation-delta-box">
            <div className="delta-header">
              <span className="delta-tag">QUANTITATIVE EMPIRICAL DELTA</span>
              <span className="delta-ratio-badge">{deltaData.ratio || 'Δ Measured'}</span>
            </div>
            <div className="delta-values-row">
              <div className="delta-col">
                <span className="delta-lbl">BASELINE</span>
                <span className="delta-num">{deltaData.baseline}</span>
              </div>
              <span className="delta-arrow" aria-hidden="true">➔</span>
              <div className="delta-col">
                <span className="delta-lbl">CALIBRATED</span>
                <span className="delta-num highlight">{deltaData.current}</span>
              </div>
            </div>
            {deltaData.whyText && (
              <p className="delta-why-text">{deltaData.whyText}</p>
            )}
          </div>
        )}

        {/* 4-Level Progressive Disclosure Tabs */}
        <div aria-label="Explanation depth levels" className="progressive-tabs" role="tablist">
          {[
            { id: 1, label: '1 · INTUITION' },
            { id: 2, label: '2 · EQUATION' },
            { id: 3, label: '3 · DERIVATION' },
            { id: 4, label: '4 · ADVANCED' },
          ].map((tab) => (
            <button
              aria-selected={activeLevel === tab.id}
              className={`progressive-tab ${activeLevel === tab.id ? 'is-active' : ''}`}
              key={tab.id}
              onClick={() => setActiveLevel(tab.id)}
              role="tab"
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Level Card */}
        <div className="progressive-level-card" role="tabpanel">
          <div className="progressive-level-header">
            <span className="progressive-level-badge">DEPTH LEVEL 0{activeLevel}</span>
            <strong className="progressive-level-title">{currentLevelData.title}</strong>
          </div>
          <div className="progressive-level-body">
            <pre className="progressive-text">{currentLevelData.content}</pre>
          </div>
        </div>

        {formula && activeLevel === 2 && (
          <div className="explanation-field">
            <span className="field-tag">FORMAL EQUATION</span>
            <div className="field-formula" tabIndex={0}>
              <code>{formula}</code>
            </div>
          </div>
        )}

        {curriculumRef && (
          <div className="explanation-curriculum">
            <ScientificIcon name="atom" size={14} className="curriculum-icon" />
            <span className="curriculum-text">{curriculumRef}</span>
          </div>
        )}
      </div>

      <div className="explanation-footer">
        {onRecord && (
          <button
            className="explanation-action-btn primary"
            onClick={onRecord}
            type="button"
          >
            RECORD IN EXPERIMENT LOG
          </button>
        )}
        <button
          className="explanation-action-btn secondary"
          onClick={onClose}
          type="button"
        >
          DISMISS
        </button>
      </div>
    </aside>
  )
}

export default PhysicsExplanation
