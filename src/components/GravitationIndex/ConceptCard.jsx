import React from 'react'
import { renderMathExpression, cleanLatexString, formatInlineMathText } from '../MathFormulaRenderer'

function ConceptCard({ subsection }) {
  const { title, summary, points, properties, cases, valueDisplay, siUnit, dimension, distinction, formulaDisplay, formulaAlt, question, answer, rules } = subsection

  return (
    <article className="grav-card grav-concept-card">
      <h4 className="grav-card-title">{title}</h4>
      
      {summary && (
        <p className="grav-card-summary">
          {formatInlineMathText(summary, `sum-${subsection.id}`)}
        </p>
      )}

      {/* Prominent Value / Display */}
      {valueDisplay && (
        <div className="grav-highlight-box">
          <span className="grav-highlight-val">{valueDisplay}</span>
          {siUnit && <span className="grav-highlight-meta">SI Unit: {siUnit}</span>}
          {dimension && <span className="grav-highlight-meta">Dimension: {dimension}</span>}
        </div>
      )}

      {/* Vector / Special Formula Display */}
      {formulaDisplay && (
        <div className="grav-formula-hero">
          <div className="grav-formula-render">
            {renderMathExpression(cleanLatexString(formulaDisplay), `concept-${subsection.id}`)}
          </div>
          {formulaAlt && (
            <div className="grav-formula-alt-math">
              <span className="grav-alt-label">Alt form:</span>
              <span className="grav-alt-render">
                {renderMathExpression(cleanLatexString(formulaAlt), `concept-alt-${subsection.id}`)}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Distinction Box (G vs g) */}
      {distinction && (
        <div className="grav-distinction-box">
          <strong className="grav-distinction-title">CRITICAL DISTINCTION: G vs g</strong>
          <div className="grav-distinction-item">
            <span className="distinction-tag tag-capital">G</span>
            <span className="distinction-text">{distinction.gCapital}</span>
          </div>
          <div className="grav-distinction-item">
            <span className="distinction-tag tag-small">g</span>
            <span className="distinction-text">{distinction.gSmall}</span>
          </div>
        </div>
      )}

      {/* Bullet Points */}
      {points && points.length > 0 && (
        <ul className="grav-point-list">
          {points.map((pt, idx) => (
            <li key={idx} className="grav-point-item">
              <span className="grav-bullet" aria-hidden="true">▪</span>
              <span>{formatInlineMathText(pt, `pt-${subsection.id}-${idx}`)}</span>
            </li>
          ))}
        </ul>
      )}

      {/* 8 Properties Grid */}
      {properties && properties.length > 0 && (
        <div className="grav-properties-grid">
          {properties.map((prop, idx) => (
            <div key={idx} className="grav-property-item">
              <span className="grav-property-num">{idx + 1}</span>
              <div className="grav-property-content">
                <strong className="grav-property-name">{prop.name}</strong>
                <p className="grav-property-desc">{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Special Cases */}
      {cases && cases.length > 0 && (
        <div className="grav-cases-list">
          {cases.map((c, idx) => (
            <div key={idx} className="grav-case-item">
              <span className="grav-case-tag">SPECIAL CASE</span>
              <strong className="grav-case-title">{c.title}</strong>
              <p className="grav-case-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Quick Check Question */}
      {question && (
        <div className="grav-quick-check-box">
          <div className="quick-check-header">
            <span className="quick-check-badge">QUICK CHECK</span>
            <strong className="quick-check-q">{question}</strong>
          </div>
          {answer && (
            <div className="quick-check-ans-row">
              <span className="ans-label">Answer:</span>
              <span className="ans-value">{answer}</span>
            </div>
          )}
          {rules && rules.length > 0 && (
            <div className="quick-check-rules">
              {rules.map((r, idx) => (
                <div key={idx} className="quick-check-rule-item">
                  <span className="rule-bullet">→</span>
                  <span>{r}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  )
}

export default ConceptCard
