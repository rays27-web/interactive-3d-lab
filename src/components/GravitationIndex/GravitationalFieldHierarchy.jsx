import React from 'react'
import { VectorSym, UnitVectorSym, Fraction, QuantityBadge } from './MathEquation'

export function GravitationalFieldHierarchy({ subsection }) {
  const { title, statement, points } = subsection

  return (
    <article className="grav-card grav-field-hierarchy-card">
      <div className="grav-card-header-row">
        <h4 className="grav-card-title">{title}</h4>
        <span className="grav-hierarchy-pill">MATHEMATICAL HIERARCHY</span>
      </div>

      {statement && <p className="grav-formula-statement">{statement}</p>}

      {/* 1. DEFINITION BLOCK */}
      <div className="math-hierarchy-block definition-block">
        <div className="math-block-label">
          <span className="math-step-tag">01 · DEFINITION</span>
          <span className="math-sub-label">FORCE EXERTED PER UNIT TEST MASS</span>
        </div>

        <div className="math-equation-stage">
          <div className="math-eq-row large-eq">
            <VectorSym symbol="g" />
            <span className="math-op">=</span>
            <Fraction
              num={<VectorSym symbol="F" />}
              den={<span className="math-scalar-sym">m</span>}
            />
          </div>
          <div className="math-eq-caption">
            Gravitational field intensity <VectorSym symbol="g" /> equals gravitational force vector <VectorSym symbol="F" /> divided by test mass <span className="math-scalar-sym">m</span>.
          </div>
        </div>
      </div>

      {/* 2. POINT-MASS FIELD BLOCK */}
      <div className="math-hierarchy-block point-mass-block">
        <div className="math-block-label">
          <span className="math-step-tag">02 · POINT-MASS FIELD</span>
          <span className="math-sub-label">AT DISTANCE r FROM SOURCE MASS M</span>
        </div>

        <div className="math-equation-stage">
          <div className="math-eq-row hero-eq">
            <VectorSym symbol="g" />
            <span className="math-op">=</span>
            <span className="math-minus-sign" title="Negative sign points inward toward source mass">−</span>
            <Fraction
              num={<span className="math-scalar-group">G · M</span>}
              den={<span className="math-scalar-group">r<sup className="math-sup">2</sup></span>}
            />
            <UnitVectorSym symbol="r" />
          </div>

          <div className="math-breakdown-chips">
            <div className="math-chip">
              <span className="chip-label">MAGNITUDE</span>
              <code className="chip-val">GM / r²</code>
            </div>
            <div className="math-chip chip-direction">
              <span className="chip-label">DIRECTION VECTOR</span>
              <code className="chip-val">−r̂ (Inward)</code>
            </div>
          </div>
        </div>
      </div>

      {/* 3. DUAL MAGNITUDE & DIRECTION EQUIVALENTS */}
      <div className="math-duo-grid">
        <div className="math-duo-card magnitude-side">
          <div className="duo-card-header">
            <span className="duo-badge badge-mag">MAGNITUDE</span>
            <QuantityBadge type="scalar" />
          </div>
          <div className="duo-eq-row">
            <span className="math-abs-wrap">| <VectorSym symbol="g" /> |</span>
            <span className="math-op">=</span>
            <Fraction
              num="GM"
              den={<span>r<sup className="math-sup">2</sup></span>}
            />
          </div>
          <p className="duo-desc">
            Field magnitude is strictly <strong>non-negative</strong> (|g⃗| ≥ 0). It decreases with the square of distance (inverse-square law).
          </p>
        </div>

        <div className="math-duo-card direction-side">
          <div className="duo-card-header">
            <span className="duo-badge badge-dir">DIRECTION</span>
            <QuantityBadge type="vector" />
          </div>
          <div className="duo-direction-callout">
            <span className="dir-icon">↘ 🎯 ↙</span>
            <strong className="dir-title">TOWARDS SOURCE MASS M</strong>
          </div>
          <p className="duo-desc">
            Directed radially inward. Because gravity is strictly attractive, the field line points directly towards the center of mass M.
          </p>
        </div>
      </div>

      {/* 4. COMPACT SYMBOLS SPECIFICATION TABLE */}
      <div className="math-symbols-section">
        <div className="math-symbols-header">
          <span className="symbols-title-tag">VARIABLE & SYMBOL SPECIFICATIONS</span>
          <span className="symbols-subtitle">Vector vs. Scalar Distinction</span>
        </div>

        <div className="math-symbols-table">
          <div className="symbol-row">
            <div className="sym-cell-sym">
              <VectorSym symbol="g" />
            </div>
            <div className="sym-cell-name">Gravitational field intensity vector</div>
            <div className="sym-cell-unit">N/kg or m/s²</div>
            <div className="sym-cell-badge">
              <QuantityBadge type="vector" />
            </div>
          </div>

          <div className="symbol-row">
            <div className="sym-cell-sym">
              <VectorSym symbol="F" />
            </div>
            <div className="sym-cell-name">Gravitational force vector on test mass</div>
            <div className="sym-cell-unit">N (Newton)</div>
            <div className="sym-cell-badge">
              <QuantityBadge type="vector" />
            </div>
          </div>

          <div className="symbol-row">
            <div className="sym-cell-sym">
              <span className="math-scalar-sym">G</span>
            </div>
            <div className="sym-cell-name">Universal gravitational constant (6.674 × 10⁻¹¹)</div>
            <div className="sym-cell-unit">N·m²/kg²</div>
            <div className="sym-cell-badge">
              <QuantityBadge type="scalar" />
            </div>
          </div>

          <div className="symbol-row">
            <div className="sym-cell-sym">
              <span className="math-scalar-sym">M</span>
            </div>
            <div className="sym-cell-name">Source mass generating the field</div>
            <div className="sym-cell-unit">kg</div>
            <div className="sym-cell-badge">
              <QuantityBadge type="scalar" />
            </div>
          </div>

          <div className="symbol-row">
            <div className="sym-cell-sym">
              <span className="math-scalar-sym">m</span>
            </div>
            <div className="sym-cell-name">Test mass experiencing the field</div>
            <div className="sym-cell-unit">kg</div>
            <div className="sym-cell-badge">
              <QuantityBadge type="scalar" />
            </div>
          </div>

          <div className="symbol-row">
            <div className="sym-cell-sym">
              <span className="math-scalar-sym">r</span>
            </div>
            <div className="sym-cell-name">Radial distance from centre of source mass M</div>
            <div className="sym-cell-unit">m</div>
            <div className="sym-cell-badge">
              <QuantityBadge type="scalar" />
            </div>
          </div>

          <div className="symbol-row">
            <div className="sym-cell-sym">
              <UnitVectorSym symbol="r" />
            </div>
            <div className="sym-cell-name">
              Unit vector pointing <strong>radially outward</strong> from M (<UnitVectorSym symbol="r" /> = <VectorSym symbol="r" /> / r, |<UnitVectorSym symbol="r" />| = 1)
            </div>
            <div className="sym-cell-unit">dimensionless</div>
            <div className="sym-cell-badge">
              <QuantityBadge type="vector" />
            </div>
          </div>
        </div>
      </div>

      {/* 5. "WHY IS THERE A MINUS SIGN?" EXPLANATORY CARD */}
      <div className="math-minus-sign-expl">
        <div className="minus-expl-header">
          <span className="minus-expl-badge">CRITICAL CONCEPT</span>
          <h5 className="minus-expl-title">WHY IS THERE A MINUS SIGN IN g⃗ = −(GM / r²) r̂ ?</h5>
        </div>

        <div className="minus-expl-body">
          <div className="minus-expl-steps">
            <div className="minus-step-item">
              <span className="step-num">1</span>
              <p>
                By standard mathematical convention, the position unit vector <UnitVectorSym symbol="r" /> points <strong>radially outward</strong> away from the source mass M.
              </p>
            </div>
            <div className="minus-step-item">
              <span className="step-num">2</span>
              <p>
                In classical Newtonian gravitation, gravity is strictly <strong>attractive</strong> — it pulls inward toward source mass M.
              </p>
            </div>
            <div className="minus-step-item">
              <span className="step-num">3</span>
              <p>
                To reverse the outward vector <UnitVectorSym symbol="r" /> so it points inward toward M, we multiply by <strong>−1</strong>:
                <br />
                <span className="minus-highlight-math">−<UnitVectorSym symbol="r" /> = direction radially inward toward mass M</span>
              </p>
            </div>
          </div>

          <div className="minus-summary-box">
            <strong>Key Takeaway:</strong> The negative sign conveys <em>direction</em>, not negative magnitude. It explicitly states that gravitational field lines converge inward onto the source mass.
          </div>
        </div>
      </div>

      {/* 6. COMMON JEE TRAPS REGARDING VECTOR NOTATION */}
      <div className="math-trap-warning-box">
        <div className="trap-warn-header">
          <span className="trap-warn-icon">⚠️</span>
          <span className="trap-warn-title">COMMON JEE MISTAKES TO AVOID</span>
        </div>

        <div className="trap-warn-grid">
          <div className="trap-warn-item">
            <div className="trap-warn-tag">DO NOT CONFUSE</div>
            <div className="trap-warn-content">
              <strong>r vs. <VectorSym symbol="r" /> vs. <UnitVectorSym symbol="r" /></strong>
              <p>
                <strong>r</strong> = scalar distance (length ≥ 0)<br />
                <strong><VectorSym symbol="r" /></strong> = position vector (has both distance and direction)<br />
                <strong><UnitVectorSym symbol="r" /></strong> = unit vector (<VectorSym symbol="r" /> / r, pure direction, magnitude 1)
              </p>
            </div>
          </div>

          <div className="trap-warn-item">
            <div className="trap-warn-tag">MAGNITUDE IS ALWAYS ≥ 0</div>
            <div className="trap-warn-content">
              <strong>Never write field magnitude as negative</strong>
              <p>
                In <VectorSym symbol="g" /> = −(GM/r²)<UnitVectorSym symbol="r" />, the minus belongs with <UnitVectorSym symbol="r" />. The magnitude |<VectorSym symbol="g" />| = GM/r² is strictly positive.
              </p>
            </div>
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

export default GravitationalFieldHierarchy
