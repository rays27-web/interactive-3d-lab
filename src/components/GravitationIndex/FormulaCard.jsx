import React from 'react'
import { renderMathExpression, cleanLatexString, formatInlineMathText } from '../MathFormulaRenderer'
import { formatMathSymbol } from '../ExperimentMission'

function FormulaCard({ subsection }) {
  const { title, statement, formulaDisplay, sequence, variables, notes, points } = subsection

  return (
    <article className="grav-card grav-formula-card">
      <h4 className="grav-card-title">{title}</h4>

      {statement && (
        <p className="grav-formula-statement">
          {formatInlineMathText(statement, `stmt-${subsection.id}`)}
        </p>
      )}

      {/* Structured Derivation / Physical Sequence */}
      {sequence && sequence.length > 0 ? (
        <div className="grav-derivation-sequence">
          <div className="grav-sequence-header">
            <span className="grav-sequence-badge">PHYSICAL SEQUENCE</span>
            <span className="grav-sequence-subtext">Step-by-step mathematical derivation:</span>
          </div>
          <div className="grav-sequence-steps">
            {sequence.map((step, idx) => (
              <div key={idx} className="grav-sequence-step-card">
                <div className="grav-step-header">
                  <span className="grav-step-pill">{step.step || `STEP 0${idx + 1}`}</span>
                  <span className="grav-step-label">{step.label}</span>
                </div>
                <div className="grav-step-formula-box">
                  <div className="grav-step-math">
                    {renderMathExpression(cleanLatexString(step.formula), `step-${subsection.id}-${idx}`)}
                  </div>
                </div>
                {step.explanation && (
                  <p className="grav-step-expl">
                    {formatInlineMathText(step.explanation, `expl-${subsection.id}-${idx}`)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : formulaDisplay ? (
        <div className="grav-formula-hero">
          <div className="grav-formula-render">
            {renderMathExpression(cleanLatexString(formulaDisplay), `form-${subsection.id}`)}
          </div>
        </div>
      ) : null}

      {variables && variables.length > 0 && (
        <div className="grav-vars-container">
          <span className="grav-vars-header">VARIABLE SPECIFICATIONS</span>
          <div className="grav-vars-table">
            {variables.map((v, idx) => (
              <div key={idx} className="grav-var-row">
                <span className="grav-var-symbol-math">
                  {formatMathSymbol ? formatMathSymbol(v.symbol) : v.symbol}
                </span>
                <span className="grav-var-name">{v.name}</span>
                {v.unit && <span className="grav-var-unit">[{v.unit}]</span>}
              </div>
            ))}
          </div>
        </div>
      )}

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

      {notes && (
        <div className="grav-note-box">
          <span className="grav-note-icon">💡</span>
          <span className="grav-note-text">
            {formatInlineMathText(notes, `note-${subsection.id}`)}
          </span>
        </div>
      )}
    </article>
  )
}

export default FormulaCard

