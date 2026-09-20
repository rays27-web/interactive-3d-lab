import { useState } from 'react'
import ScientificIcon from './ScientificIcon'
import {
  MathFormulaRenderer,
  renderMathExpression,
  renderInlineMathProse,
  cleanLatexString,
  splitFormalEquations,
} from './MathFormulaRenderer'

/**
 * Standard physical descriptions for core governing laws
 */
const LAW_DESCRIPTIONS = {
  'surface gravitational acceleration': 'Surface gravity scales directly with planetary mass M and inversely with the square of planetary radius R.',
  'weight force on an object of mass m': 'Downward gravitational pull exerted on mass m in the local surface gravitational field g.',
  'free-fall drop time from height h': 'Duration of gravitational fall from rest through height h, completely independent of the falling object\'s mass.',
  'centrifugal reduction at the equator': 'Apparent surface gravity at the equator is reduced by the outward centrifugal inertial acceleration from planetary rotation.',
  'spiral pitch angle': 'Logarithmic spiral pattern linking radial distance to spiral arm galactic rotation angle.',
  'pattern speed': 'Rigid rotational angular frequency of the galactic spiral density wave pattern.',
  'epicyclic frequency': 'Radial oscillation frequency of stellar orbits in a non-axisymmetric galactic gravitational potential.',
  'gravitational deflection angle': 'General relativistic light-bending angle produced by compact mass M at impact parameter b.',
  'relativistic keplerian angular frequency': 'Keplerian orbital frequency in the strong gravity regime around a compact relativistic object.',
  'relativistic doppler boosting': 'Luminosity amplification of emitted radiation beamed along the observer\'s line of sight.',
  'relativistic doppler factor': 'Relativistic kinematic transformation factor accounting for bulk velocity β and viewing angle θ.',
  'dipole spin-down luminosity': 'Total rotational kinetic energy conversion rate into electromagnetic pulsar radiation.',
  'light cylinder radius': 'Co-rotating boundary radius where speed of light limits pulsar magnetosphere rotation.',
  'relativistic beaming angle': 'Angular opening cone of synchrotron emission beamed by ultra-relativistic particles.',
  'newtonian gravitational force': 'Inverse-square universal gravitational attraction acting between two planetary masses.',
  'circular orbital velocity': 'Stable orbital speed required for gravitational attraction to balance centripetal acceleration.',
  'escape velocity': 'Minimum initial launch speed required to escape the gravitational potential well to infinity.',
  'kepler\'s third law': 'Harmonic relationship between orbital period T and semi-major axis a of celestial orbits.',
}

/**
 * Parses Level 2 text into structured equation blocks:
 * Detects labels (ending with ':') and equation lines.
 */
function parseLevel2Blocks(content) {
  if (!content) return []
  const lines = String(content).split('\n')
  const blocks = []
  let currentLabel = ''
  let currentEq = ''
  let currentNote = ''

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i]
    const trimmed = rawLine.trim()
    if (!trimmed) continue

    const isEquation =
      rawLine.startsWith('  ') ||
      rawLine.startsWith('\t') ||
      trimmed.includes(' = ') ||
      trimmed.includes(' ⟹ ') ||
      trimmed.includes(' ∝ ') ||
      trimmed.includes(' ≡ ') ||
      trimmed.includes(' ≈ ')

    if (trimmed.endsWith(':')) {
      if (currentLabel || currentEq) {
        blocks.push({ label: currentLabel, eq: currentEq, note: currentNote })
        currentLabel = ''
        currentEq = ''
        currentNote = ''
      }
      currentLabel = trimmed.slice(0, -1)
    } else if (isEquation) {
      if (currentEq) {
        currentEq += '\n' + trimmed
      } else {
        currentEq = trimmed
      }
    } else {
      if (currentEq) {
        currentNote = currentNote ? `${currentNote} ${trimmed}` : trimmed
      } else if (!currentLabel) {
        currentLabel = trimmed
      } else {
        currentLabel += ' ' + trimmed
      }
    }
  }

  if (currentLabel || currentEq) {
    blocks.push({ label: currentLabel, eq: currentEq, note: currentNote })
  }

  return blocks
}

/**
 * Unifies level 2 prose blocks with formal LaTeX formulas.
 * Pairs each physical law description with its corresponding formal mathematical equation,
 * creating clean, self-contained educational formula cards with zero raw LaTeX and zero duplication.
 */
function buildUnifiedLevel2Cards(level2Content, formulaStr) {
  const textBlocks = parseLevel2Blocks(level2Content)
  const formalEqs = splitFormalEquations(formulaStr)

  if (textBlocks.length === 0 && formalEqs.length === 0) return []

  const cards = []
  const maxLen = Math.max(textBlocks.length, formalEqs.length)

  for (let i = 0; i < maxLen; i++) {
    const block = textBlocks[i] || null
    const formalEq = formalEqs[i] || null
    const rawTitle = block?.label || `Physical Law ${i + 1}`
    const title = rawTitle.replace(/^Level\s*\d+\s*:\s*/i, '').trim()
    const equationSource = formalEq || block?.eq || ''

    // Look up intuitive physical description
    const normKey = title.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim()
    let description = LAW_DESCRIPTIONS[normKey] || block?.note || ''

    let subformula = ''
    let subformulaLabel = ''
    if (formalEq && block?.eq && block.eq !== formalEq) {
      const blockLhs = block.eq.split('=')[0].replace(/[^a-zA-Z]/g, '').toLowerCase()
      const formalLhs = cleanLatexString(formalEq).split('=')[0].replace(/[^a-zA-Z]/g, '').toLowerCase()
      if (block.eq.includes(' = ') && blockLhs !== formalLhs) {
        subformula = block.eq
        subformulaLabel = 'Related Formulation'
      }
    }

    cards.push({
      id: `eq-card-${i}`,
      index: i + 1,
      title,
      formula: equationSource,
      description,
      subformula,
      subformulaLabel,
    })
  }

  return cards
}

/**
 * Renders prose content (Levels 1, 3, 4) with structured paragraphs,
 * bullet lists, and inline mathematical typography.
 */
function renderProseContent(content, prefix = 'prose') {
  if (!content) return null
  const paragraphs = String(content).split(/\n\s*\n/)

  return (
    <div className="progressive-prose-wrap">
      {paragraphs.map((para, pIdx) => {
        const trimmed = para.trim()
        if (!trimmed) return null

        if (trimmed.includes('•') || trimmed.includes('- ')) {
          const lines = trimmed.split('\n')
          return (
            <div key={`${prefix}-b-${pIdx}`} className="progressive-prose-block">
              {lines.map((line, lIdx) => {
                const lineTrim = line.trim()
                if (lineTrim.startsWith('•') || lineTrim.startsWith('-')) {
                  const bulletText = lineTrim.replace(/^[•\-]\s*/, '')
                  return (
                    <div key={`${prefix}-item-${lIdx}`} className="progressive-bullet-item">
                      <span className="progressive-bullet-dot">▸</span>
                      <div className="progressive-bullet-content">
                        {renderInlineMathProse(bulletText, `${prefix}-b-${lIdx}`)}
                      </div>
                    </div>
                  )
                }
                return (
                  <p key={`${prefix}-pl-${lIdx}`} className="progressive-body-paragraph">
                    {renderInlineMathProse(lineTrim, `${prefix}-pl-${lIdx}`)}
                  </p>
                )
              })}
            </div>
          )
        }

        return (
          <p key={`${prefix}-p-${pIdx}`} className="progressive-body-paragraph">
            {renderInlineMathProse(trimmed, `${prefix}-p-${pIdx}`)}
          </p>
        )
      })}
    </div>
  )
}

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

        {/* Progressive Disclosure Level Tabs (shown when Level 2+ unlocked) */}
        {maxUnlockedLevel >= 2 && (
          <div className="unlocked-levels-nav" role="tablist">
            {[
              { id: 1, label: '1 · INTUITION' },
              { id: 2, label: '2 · THE PHYSICS (EQUATIONS)' },
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

        {/* Level 1: Intuition */}
        {activeLevel === 1 && (
          <div className="progressive-level-card level-1-card" role="tabpanel">
            <div className="progressive-level-header">
              <span className="progressive-level-badge">LEVEL 01 · CONCEPTUAL INTUITION</span>
              <strong className="progressive-level-title">
                {levels[1].title?.replace(/^Level\s*1\s*:\s*(?:Intuition\s*)?/i, '') || 'Core Physical Intuition'}
              </strong>
            </div>
            <div className="progressive-level-body">
              {renderProseContent(levels[1].content, 'l1')}
            </div>
          </div>
        )}

        {/* Level 2: Governing Equations */}
        {activeLevel === 2 && (
          <div className="progressive-level-card level-2-card" role="tabpanel">
            <div className="progressive-level-header">
              <span className="progressive-level-badge">LEVEL 02 · GOVERNING EQUATIONS</span>
              <strong className="progressive-level-title">
                {levels[2].title && !levels[2].title.toLowerCase().startsWith('level 2')
                  ? levels[2].title
                  : 'Fundamental Laws & Mathematical Models'}
              </strong>
            </div>
            <div className="progressive-level-body">
              <div className="gov-eq-grid">
                {buildUnifiedLevel2Cards(levels[2].content, formula).map((card, cIdx) => (
                  <div key={card.id || cIdx} className="gov-eq-card">
                    <div className="gov-eq-header-row">
                      <span className="gov-eq-idx-badge">LAW 0{card.index}</span>
                      <strong className="gov-eq-label">{card.title}</strong>
                    </div>

                    <div className="gov-eq-display-box">
                      <div className="gov-eq-display">
                        {renderMathExpression(cleanLatexString(card.formula), `gov-${cIdx}`)}
                      </div>
                    </div>

                    {card.description && (
                      <p className="gov-eq-desc">{card.description}</p>
                    )}

                    {card.subformula && (
                      <div className="gov-eq-subformula-row">
                        <span className="gov-eq-sublabel">{card.subformulaLabel || 'RELATED FORMULATION'}:</span>
                        <span className="gov-eq-submath">
                          {renderMathExpression(cleanLatexString(card.subformula), `gov-sub-${cIdx}`)}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Level 3: Derivation */}
        {activeLevel === 3 && (
          <div className="progressive-level-card level-3-card" role="tabpanel">
            <div className="progressive-level-header">
              <span className="progressive-level-badge">LEVEL 03 · MATHEMATICAL DERIVATION</span>
              <strong className="progressive-level-title">
                {levels[3].title?.replace(/^Level\s*3\s*:\s*/i, '') || 'Proof & Mechanics'}
              </strong>
            </div>
            <div className="progressive-level-body">
              <div className="gov-eq-body">
                {renderProseContent(levels[3].content, 'l3')}
              </div>
            </div>
          </div>
        )}

        {/* Level 4: Advanced Constraints */}
        {activeLevel === 4 && (
          <div className="progressive-level-card level-4-card" role="tabpanel">
            <div className="progressive-level-header">
              <span className="progressive-level-badge">LEVEL 04 · ADVANCED ASTROPHYSICAL CONSTRAINTS</span>
              <strong className="progressive-level-title">
                {levels[4].title?.replace(/^Level\s*4\s*:\s*/i, '') || 'Astrophysical Constraints'}
              </strong>
            </div>
            <div className="progressive-level-body">
              {renderProseContent(levels[4].content, 'l4')}
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
              📐 SHOW THE PHYSICS (EQUATIONS) →
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
