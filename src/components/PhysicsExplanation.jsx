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
  const [maxUnlockedLevel, setMaxUnlockedLevel] = useState(1)

  if (!isOpen) return null

  // Build 4-level content from progressiveData or fallback from legacy props
  const levels = {
    1: progressiveData?.level1 || {
      title: 'Level 1: Intuition (Physical Analogy)',
      content: whatHappened || 'The object moved differently because changing the physical parameters adjusted the balance of gravitational and inertial forces.',
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

  const handleUnlockNext = () => {
    const next = Math.min(4, activeLevel + 1)
    setMaxUnlockedLevel((prev) => Math.max(prev, next))
    setActiveLevel(next)
  }

  return (
    <aside
      aria-label="Physical Principle 4-Level Explanation"
      className="physics-explanation-card"
      role="region"
    >
      <div className="explanation-header">
        <div className="explanation-badge">
          <span className="badge-dot" aria-hidden="true" />
          <span>WHY DID THIS HAPPEN?</span>
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

        {/* Level 1 Simple Explanation shown first */}
        <div className="progressive-level-card level-1-card" role="tabpanel">
          <div className="progressive-level-header">
            <span className="progressive-level-badge">LEVEL 1 · SIMPLE EXPLANATION</span>
            <strong className="progressive-level-title">{levels[1].title}</strong>
          </div>
          <div className="progressive-level-body">
            <p className="progressive-simple-text">{levels[1].content}</p>
          </div>
        </div>

        {/* Progressive Disclosure Unlocks */}
        {maxUnlockedLevel >= 2 && (
          <div className="unlocked-levels-nav" role="tablist">
            {[
              { id: 1, label: '1 · INTUITION' },
              { id: 2, label: '2 · THE PHYSICS (EQUATION)' },
              maxUnlockedLevel >= 3 && { id: 3, label: '3 · DERIVATION' },
              maxUnlockedLevel >= 4 && { id: 4, label: '4 · ADVANCED' },
            ].filter(Boolean).map((tab) => (
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
        )}

        {/* Deeper Levels Display when activeLevel > 1 */}
        {activeLevel > 1 && (
          <div className="progressive-level-card" role="tabpanel">
            <div className="progressive-level-header">
              <span className="progressive-level-badge">LEVEL 0{activeLevel}</span>
              <strong className="progressive-level-title">{currentLevelData.title}</strong>
            </div>
            <div className="progressive-level-body">
              <pre className="progressive-text">{currentLevelData.content}</pre>
            </div>
          </div>
        )}

        {/* Progressive Disclosure Action Triggers */}
        <div className="progressive-unlock-actions">
          {maxUnlockedLevel === 1 && (
            <button
              className="progressive-unlock-btn"
              onClick={handleUnlockNext}
              type="button"
            >
              📐 SHOW THE PHYSICS (EQUATION) →
            </button>
          )}
          {maxUnlockedLevel === 2 && activeLevel <= 2 && (
            <button
              className="progressive-unlock-btn"
              onClick={handleUnlockNext}
              type="button"
            >
              🔬 SHOW MATHEMATICAL DERIVATION →
            </button>
          )}
          {maxUnlockedLevel === 3 && activeLevel <= 3 && (
            <button
              className="progressive-unlock-btn"
              onClick={handleUnlockNext}
              type="button"
            >
              🌌 SHOW ADVANCED ASTROPHYSICAL CONSTRAINTS →
            </button>
          )}
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
