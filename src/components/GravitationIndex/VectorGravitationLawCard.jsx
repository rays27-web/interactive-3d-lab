import React from 'react'
import { VectorSym, UnitVectorSym, Fraction, QuantityBadge } from './MathEquation'

export function VectorGravitationLawCard({ subsection }) {
  const { title, points } = subsection

  return (
    <article className="grav-card grav-vector-law-card">
      <div className="grav-card-header-row">
        <h4 className="grav-card-title">{title}</h4>
        <span className="grav-hierarchy-pill">VECTOR FORMULATION</span>
      </div>

      {/* Main Unit Vector Form */}
      <div className="math-hierarchy-block">
        <div className="math-block-label">
          <span className="math-step-tag">FORM 1 · RADIAL UNIT VECTOR</span>
          <span className="math-sub-label">FORCE ON MASS 1 DUE TO MASS 2</span>
        </div>

        <div className="math-equation-stage">
          <div className="math-eq-row hero-eq">
            <VectorSym symbol="F" sub="12" />
            <span className="math-op">=</span>
            <span className="math-minus-sign">−</span>
            <Fraction
              num={<span className="math-scalar-group">G · m₁ · m₂</span>}
              den={<span className="math-scalar-group">r²</span>}
            />
            <UnitVectorSym symbol="r" sub="12" />
          </div>
          <div className="math-eq-caption">
            <VectorSym symbol="F" sub="12" /> is the attractive pull on mass 1 directed <em>toward</em> mass 2 (opposite to position vector <UnitVectorSym symbol="r" sub="12" />).
          </div>
        </div>
      </div>

      {/* Position Vector / Cubic Denominator Form */}
      <div className="math-hierarchy-block">
        <div className="math-block-label">
          <span className="math-step-tag">FORM 2 · DISPLACEMENT VECTOR</span>
          <span className="math-sub-label">IN TERMS OF POSITION VECTORS r⃗₁ AND r⃗₂</span>
        </div>

        <div className="math-equation-stage">
          <div className="math-eq-row secondary-eq">
            <VectorSym symbol="F" sub="12" />
            <span className="math-op">=</span>
            <span className="math-minus-sign">−</span>
            <Fraction
              num={<span className="math-scalar-group">G · m₁ · m₂</span>}
              den={<span>| <VectorSym symbol="r" sub="1" /> − <VectorSym symbol="r" sub="2" /> |³</span>}
            />
            <span className="math-vector-diff">( <VectorSym symbol="r" sub="1" /> − <VectorSym symbol="r" sub="2" /> )</span>
          </div>
          <div className="math-note-pill">
            <span>Note: Denominator power is <strong>cube (r³)</strong> when full vector (r⃗₁ − r⃗₂) replaces unit vector r̂₁₂!</span>
          </div>
        </div>
      </div>

      {/* Action-Reaction / Third Law Block */}
      <div className="math-action-reaction-card">
        <div className="ar-header">
          <span className="ar-tag">NEWTON'S THIRD LAW</span>
          <strong className="ar-title">EQUAL & OPPOSITE INTERACTION</strong>
        </div>
        <div className="ar-equation-row">
          <VectorSym symbol="F" sub="12" className="hero-sym" />
          <span className="math-op">=</span>
          <span className="math-minus-sign">−</span>
          <VectorSym symbol="F" sub="21" className="hero-sym" />
        </div>
        <p className="ar-desc">
          The gravitational force on mass 1 by mass 2 is strictly equal in magnitude and opposite in direction to the force on mass 2 by mass 1.
        </p>
      </div>

      {/* Symbols Breakdown Table */}
      <div className="math-symbols-section">
        <div className="math-symbols-header">
          <span className="symbols-title-tag">SYMBOL ROLES & DEFINITIONS</span>
        </div>

        <div className="math-symbols-table">
          <div className="symbol-row">
            <div className="sym-cell-sym"><VectorSym symbol="F" sub="12" /></div>
            <div className="sym-cell-name">Gravitational force exerted ON mass 1 BY mass 2</div>
            <div className="sym-cell-unit">N</div>
            <div className="sym-cell-badge"><QuantityBadge type="vector" /></div>
          </div>
          <div className="symbol-row">
            <div className="sym-cell-sym"><UnitVectorSym symbol="r" sub="12" /></div>
            <div className="sym-cell-name">Unit vector pointing from mass 1 to mass 2 (<VectorSym symbol="r" sub="12" /> / r)</div>
            <div className="sym-cell-unit">dimensionless</div>
            <div className="sym-cell-badge"><QuantityBadge type="vector" /></div>
          </div>
          <div className="symbol-row">
            <div className="sym-cell-sym"><span className="math-scalar-sym">r</span></div>
            <div className="sym-cell-name">Centre-to-centre distance (|r⃗₁ − r⃗₂|)</div>
            <div className="sym-cell-unit">m</div>
            <div className="sym-cell-badge"><QuantityBadge type="scalar" /></div>
          </div>
          <div className="symbol-row">
            <div className="sym-cell-sym"><span className="math-scalar-sym">m₁, m₂</span></div>
            <div className="sym-cell-name">Interacting point masses</div>
            <div className="sym-cell-unit">kg</div>
            <div className="sym-cell-badge"><QuantityBadge type="scalar" /></div>
          </div>
        </div>
      </div>

      {/* Bullet Points from Curriculum */}
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

export default VectorGravitationLawCard
