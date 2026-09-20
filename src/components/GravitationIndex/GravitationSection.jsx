import { useState } from 'react'
import ConceptCard from './ConceptCard'
import FormulaCard from './FormulaCard'
import JEETrapCard from './JEETrapCard'
import JEEQuestionCard from './JEEQuestionCard'
import GravitationalFieldHierarchy from './GravitationalFieldHierarchy'
import SuperpositionCard from './SuperpositionCard'
import VectorGravitationLawCard from './VectorGravitationLawCard'

function GravitationSection({ module, isExpanded, onToggle }) {
  const { number, title, tag, description, subsections, pyqs } = module
  const [isPyqExpanded, setIsPyqExpanded] = useState(false)

  return (
    <section className={`grav-module-section ${isExpanded ? 'is-expanded' : ''}`}>
      {/* Module Header Button */}
      <button
        aria-expanded={isExpanded}
        className="grav-module-header-btn"
        onClick={onToggle}
        type="button"
      >
        <div className="module-header-meta">
          <span className="module-num">{number}</span>
          <div className="module-title-group">
            <span className="module-tag">{tag}</span>
            <h3 className="module-title">{title}</h3>
          </div>
        </div>
        <span className="module-toggle-icon" aria-hidden="true">
          {isExpanded ? '[ − ]' : '[ + ]'}
        </span>
      </button>

      {/* Expanded Module Content */}
      {isExpanded && (
        <div className="grav-module-body">
          {description && <p className="module-desc">{description}</p>}

          {/* Subsections */}
          <div className="module-subsections">
            {subsections.map((sub) => {
              if (sub.id === '3-a' || sub.type === 'field-hierarchy') {
                return <GravitationalFieldHierarchy key={sub.id} subsection={sub} />
              }
              if (sub.id === '3-b' || sub.type === 'superposition') {
                return <SuperpositionCard key={sub.id} subsection={sub} />
              }
              if (sub.id === '1-d' || sub.type === 'vector-law') {
                return <VectorGravitationLawCard key={sub.id} subsection={sub} />
              }
              if (sub.type === 'traps') {
                return <JEETrapCard key={sub.id} traps={sub.traps} title={sub.title} />
              }
              if (sub.type === 'formula') {
                return <FormulaCard key={sub.id} subsection={sub} />
              }
              return <ConceptCard key={sub.id} subsection={sub} />
            })}
          </div>

          {/* Practice with JEE PYQs (Concept-Linked) */}
          {pyqs && pyqs.length > 0 && (
            <div className={`grav-pyq-section ${isPyqExpanded ? 'is-open' : ''}`}>
              <button
                aria-expanded={isPyqExpanded}
                className="grav-pyq-trigger-btn"
                onClick={() => setIsPyqExpanded((prev) => !prev)}
                type="button"
              >
                <div className="pyq-trigger-left">
                  <span className="pyq-trigger-icon">🎯</span>
                  <span className="pyq-trigger-title">PRACTICE WITH JEE PYQs</span>
                  <span className="pyq-count-badge">{pyqs.length} PROBLEMS</span>
                </div>
                <span className="pyq-toggle-icon" aria-hidden="true">
                  {isPyqExpanded ? '[ HIDE PYQs ]' : '[ EXPLORE PYQs ]'}
                </span>
              </button>

              {isPyqExpanded && (
                <div className="grav-pyq-list">
                  {pyqs.map((pyq) => (
                    <JEEQuestionCard key={pyq.id} pyq={pyq} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default GravitationSection
