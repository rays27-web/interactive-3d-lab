import React from 'react'
import { VectorSym, QuantityBadge } from './MathEquation'

export function SuperpositionCard({ subsection }) {
  const { title, points } = subsection

  return (
    <article className="grav-card grav-superposition-card">
      <div className="grav-card-header-row">
        <h4 className="grav-card-title">{title}</h4>
        <span className="grav-hierarchy-pill">VECTOR SUPERPOSITION</span>
      </div>

      <div className="superposition-stage">
        <div className="superposition-main-box">
          <span className="superposition-header-tag">COMPACT VECTOR SUM</span>
          <div className="superposition-eq-hero">
            <VectorSym symbol="g" sub="net" className="hero-sym" />
            <span className="math-op">=</span>
            <span className="math-sigma">∑</span>
            <VectorSym symbol="g" sub="i" className="hero-sym" />
          </div>
          <p className="superposition-meaning">
            The total gravitational field at any point in space is the <strong>VECTOR SUM</strong> of the individual gravitational fields produced by all discrete point masses.
          </p>
        </div>

        <div className="superposition-expanded-box">
          <span className="superposition-header-tag">EXPANDED DISCRETE FORM</span>
          <div className="superposition-eq-expanded">
            <VectorSym symbol="g" sub="net" />
            <span className="math-op">=</span>
            <VectorSym symbol="g" sub="1" />
            <span className="math-op">+</span>
            <VectorSym symbol="g" sub="2" />
            <span className="math-op">+</span>
            <span className="math-dots">⋯</span>
            <span className="math-op">+</span>
            <VectorSym symbol="g" sub="n" />
          </div>
        </div>
      </div>

      {/* Prominent Vector Warning Alert */}
      <div className="superposition-warning-alert">
        <div className="warn-alert-header">
          <span className="warn-alert-icon">⚡</span>
          <strong className="warn-alert-title">CRITICAL JEE RULE: VECTORIAL ADDITION ONLY</strong>
        </div>
        <div className="warn-alert-body">
          <p>
            Gravitational fields must be added <strong>VECTORIALLY</strong>, never by simply adding their scalar magnitudes!
          </p>
          <div className="warn-example-badge">
            <span className="ex-label">Example:</span> If two identical fields of strength <em>g</em> act at 90°, the resultant is <strong>g√2</strong>, NOT 2g.
          </div>
        </div>
      </div>

      {/* Subsections Points */}
      {points && points.length > 0 && (
        <ul className="grav-point-list">
          {points.map((pt, idx) => (
            <li key={idx} className="grav-point-item">
              <span className="grav-bullet" aria-hidden="true">▪</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default SuperpositionCard
