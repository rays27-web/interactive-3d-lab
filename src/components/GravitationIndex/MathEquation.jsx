import React from 'react'

/**
 * Reusable accessible math equation components
 * Provides crisp vector over-arrows, unit vector hats, stacked fractions,
 * and vector/scalar distinction badges without external heavy dependencies.
 */

export function VectorSym({ symbol, sub, sup, className = '' }) {
  return (
    <span className={`math-sym-wrap math-vector ${className}`} title={`${symbol} (Vector quantity)`}>
      <span className="math-vector-arrow" aria-hidden="true">
        <svg viewBox="0 0 16 6" width="14" height="6" fill="none">
          <path
            d="M1 3.5h12M10.5 1.2l3 2.3-3 2.3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="math-base-sym">{symbol}</span>
      {sub && <sub className="math-sub">{sub}</sub>}
      {sup && <sup className="math-sup">{sup}</sup>}
    </span>
  )
}

export function UnitVectorSym({ symbol, sub, className = '' }) {
  return (
    <span className={`math-sym-wrap math-unit-vector ${className}`} title={`${symbol} (Unit vector — direction only)`}>
      <span className="math-hat-accent" aria-hidden="true">
        <svg viewBox="0 0 12 6" width="11" height="6" fill="none">
          <path
            d="M1.5 5L6 1.5L10.5 5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="math-base-sym">{symbol}</span>
      {sub && <sub className="math-sub">{sub}</sub>}
    </span>
  )
}

export function Fraction({ num, den, className = '' }) {
  return (
    <span className={`math-fraction ${className}`}>
      <span className="math-num">{num}</span>
      <span className="math-bar" aria-hidden="true" />
      <span className="math-den">{den}</span>
    </span>
  )
}

export function QuantityBadge({ type }) {
  const isVector = type?.toLowerCase() === 'vector'
  return (
    <span className={`math-qty-badge ${isVector ? 'is-vector' : 'is-scalar'}`}>
      <span className="qty-dot" aria-hidden="true" />
      {isVector ? 'VECTOR' : 'SCALAR'}
    </span>
  )
}
