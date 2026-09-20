import React from 'react'
import { Fraction, VectorSym, UnitVectorSym } from './GravitationIndex/MathEquation'

// Greek letter dictionary mapping LaTeX codes to unicode symbols
const GREEK_MAP = {
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ',
  epsilon: 'ε', zeta: 'ζ', eta: 'η', theta: 'θ',
  iota: 'ι', kappa: 'κ', lambda: 'λ', mu: 'μ',
  nu: 'ν', xi: 'ξ', pi: 'π', rho: 'ρ',
  sigma: 'σ', tau: 'τ', upsilon: 'υ', phi: 'φ',
  chi: 'χ', psi: 'ψ', omega: 'ω',
  Gamma: 'Γ', Delta: 'Δ', Theta: 'Θ', Lambda: 'Λ',
  Xi: 'Ξ', Pi: 'Π', Sigma: 'Σ', Upsilon: 'Υ',
  Phi: 'Φ', Psi: 'Ψ', Omega: 'Ω',
}

// Math operator dictionary mapping LaTeX commands to unicode symbols
const OPERATOR_MAP = {
  nabla: '∇',
  times: '×',
  cdot: '·',
  approx: '≈',
  propto: '∝',
  equiv: '≡',
  pm: '±',
  mp: '∓',
  leq: '≤',
  geq: '≥',
  le: '≤',
  ge: '≥',
  implies: ' ⟹ ',
  iff: ' ⟺ ',
  to: '→',
  rightarrow: '→',
  neq: '≠',
  infty: '∞',
  partial: '∂',
  int: '∫',
  oint: '∮',
  sum: '∑',
  prod: '∏',
  sin: 'sin',
  cos: 'cos',
  tan: 'tan',
  log: 'log',
  ln: 'ln',
  min: 'min',
  max: 'max',
  const: 'const',
}

/**
 * Pre-processes LaTeX/ASCII math strings into normalized notation:
 * - Unwraps bold styling wrappers (\mathbf, \boldsymbol, \bm)
 * - Normalizes \text{...} into plain text
 * - Replaces LaTeX Greek and operator commands
 * - Normalizes exponents (², ³, ⁴ -> ^2, ^3, ^4)
 * - Normalizes subscripts (₀, ₁, ₂ -> _0, _1, _2)
 * - Ensures explicit multiplication dot for products like m g -> m · g
 * - Converts ASCII roots √(2h / g) into structured \sqrt{\frac{2h}{g}}
 */
export function cleanLatexString(raw) {
  if (!raw) return ''
  let str = String(raw).trim()

  // Remove \left and \right delimiters
  str = str.replace(/\\(?:left|right)\b/g, '')

  // Remove bold wrappers
  str = str.replace(/\\(?:mathbf|boldsymbol|bm)\{([^{}]+)\}/g, '$1')

  // Unwrap \text{...} to plain text inside formulas (e.g. \text{drop} -> drop)
  str = str.replace(/\\text\{([^{}]+)\}/g, '$1')
  str = str.replace(/_\{\{([^{}]+)\}\}/g, '_{$1}')
  str = str.replace(/\^\{\{([^{}]+)\}\}/g, '^{$1}')

  // Unescape percentage
  str = str.replace(/\\%/g, '%')

  // Replace LaTeX Greek and operator macros
  str = str.replace(/\\([a-zA-Z]+)/g, (match, word) => {
    if (GREEK_MAP[word]) return GREEK_MAP[word]
    if (OPERATOR_MAP[word]) return OPERATOR_MAP[word]
    return match
  })

  // Normalize unicode powers & subscripts to standard caret/underscore
  str = str.replace(/²/g, '^2').replace(/³/g, '^3').replace(/⁴/g, '^4')
  str = str.replace(/₀/g, '_0').replace(/₁/g, '_1').replace(/₂/g, '_2')

  // Normalize common multiplication like "m g" or "m * g" to "m · g"
  str = str.replace(/\bW\s*=\s*m\s+g\b/g, 'W = m · g')
  str = str.replace(/([a-zA-Zα-ωΑ-Ω])\s*\*\s*([a-zA-Zα-ωΑ-Ω])/g, '$1 · $2')

  // Wrap single unbraced subscripts in braces: e.g. K_∞ -> K_{∞}, v_e -> v_{e}, U_∞ -> U_{∞}
  str = str.replace(/_([a-zA-Z0-9α-ωΑ-Ω∞])/g, '_{$1}')

  // Convert ASCII root with fraction √(2h / g) -> \sqrt{\frac{2h}{g}}
  str = str.replace(/√\(([^()]+)\s*\/\s*([^()]+)\)/g, '\\sqrt{\\frac{$1}{$2}}')
  str = str.replace(/√\(([^()]+)\)/g, '\\sqrt{$1}')
  str = str.replace(/\\sqrt\{([^{}]+)\s*\/\s*([^{}]+)\}/g, '\\sqrt{\\frac{$1}{$2}}')

  return str
}

/**
 * Square Root Component with scalable SVG radical seamlessly connecting to the vinculum bar
 */
export function MathSqrt({ children, className = '' }) {
  return (
    <span className={`math-sqrt-wrap ${className}`}>
      <span className="math-sqrt-radical-box" aria-hidden="true">
        <svg viewBox="0 0 16 36" preserveAspectRatio="none" className="math-sqrt-svg">
          <path
            d="M1 20 L4 18 L7 32 L15 2 H16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="math-sqrt-content">
        {children}
      </span>
    </span>
  )
}

/**
 * Helper to find matching closing curly brace from startIdx
 */
function findMatchingBrace(str, startIdx) {
  let depth = 1
  for (let i = startIdx; i < str.length; i++) {
    if (str[i] === '{') depth++
    else if (str[i] === '}') {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

/**
 * Finds the earliest outer construct (\frac{ or \sqrt{)
 */
function parseFirstConstruct(str) {
  const candidates = []
  const fracIdx = str.indexOf('\\frac{')
  if (fracIdx !== -1) candidates.push({ type: 'frac', idx: fracIdx })
  const sqrtIdx = str.indexOf('\\sqrt{')
  if (sqrtIdx !== -1) candidates.push({ type: 'sqrt', idx: sqrtIdx })

  if (candidates.length === 0) return null
  candidates.sort((a, b) => a.idx - b.idx)
  return candidates[0]
}

/**
 * Tokenizer Regex for inline mathematical notation:
 * 1. Vectors: \vec{x} or x⃗
 * 2. Unit vectors: \hat{x} or x̂
 * 3. Dot accents: \dot{x}
 * 4. Joint Subscript + Superscript: x_{sub}^{pow} or x_sub^pow
 * 5. Subscript: x_{sub} or x_sub
 * 6. Superscript: x^{pow} or x^pow
 * 7. Mathematical Operators: =, +, -, ±, ×, ·, ÷, ≈, ∝, ≠, ≤, ≥, ≡, →, ⟹, ⟺
 * 8. Math functions/keywords: sin, cos, tan, log, ln, exp, min, max, const
 * 9. Numbers: 2, 9.81, 317.8
 * 10. Single Math Variables: g, G, M, R, W, m, t, h, ω, τ, ∞, etc.
 * 11. Text words (2+ letters): drop, eff, net, orb, planet, rot, min, final
 * 12. Delimiters: (, ), [, ], {, }, %
 */
const INLINE_MATH_REGEX = /(?:\\vec\{([a-zA-Z0-9α-ωΑ-Ω]+)\}|([a-zA-Z0-9α-ωΑ-Ω]+)⃗|\\hat\{([a-zA-Z0-9α-ωΑ-Ω]+)\}|([a-zA-Z0-9α-ωΑ-Ω]+)̂|\\dot\{([a-zA-Z0-9α-ωΑ-Ω]+)\}|([a-zA-Z0-9α-ωΑ-Ω\)\}\]])_(?:\{+([^{}]+)\}+|([a-zA-Z0-9+-α-ωΑ-Ω∞]+))\^(?:\{+([^{}]+)\}+|([a-zA-Z0-9+-α-ωΑ-Ω∞]+))|([a-zA-Z0-9α-ωΑ-Ω\)\}\]])_(?:\{+([^{}]+)\}+|([a-zA-Z0-9+-α-ωΑ-Ω∞]+))|([a-zA-Z0-9α-ωΑ-Ω\)\}\]])\^(?:\{+([^{}]+)\}+|([a-zA-Z0-9+-α-ωΑ-Ω∞]+))|([=+\-×·÷≈∝≠≤≥~≡±→]|⟹|⟺)|(\b(?:const|sin|cos|tan|log|ln|exp|min|max|det|lim)\b)|([0-9]+(?:\.[0-9]+)?)|([a-zA-Zα-ωΑ-Ω∞])|([a-zA-Z]{2,})|([()\[\]{}%]))/g

/**
 * Parses an individual mathematical expression into React elements,
 * supporting fractions, square roots, vectors, subscripts, exponents, operators, and math variables.
 */
export function renderMathExpression(expr, keyPrefix = 'math') {
  if (!expr) return null
  const str = String(expr).trim()
  if (!str) return null

  // 1. Recursive outer construct parsing (\frac and \sqrt)
  const first = parseFirstConstruct(str)

  if (first) {
    // A. Earliest construct is \frac{num}{den}
    if (first.type === 'frac') {
      const before = str.slice(0, first.idx)
      const numStart = first.idx + 6
      const numEnd = findMatchingBrace(str, numStart)
      if (numEnd !== -1 && str[numEnd + 1] === '{') {
        const denStart = numEnd + 2
        const denEnd = findMatchingBrace(str, denStart)
        if (denEnd !== -1) {
          const numContent = str.slice(numStart, numEnd)
          const denContent = str.slice(denStart, denEnd)
          const after = str.slice(denEnd + 1)

          return (
            <React.Fragment key={keyPrefix}>
              {before && renderMathExpression(before, `${keyPrefix}-fb`)}
              <Fraction
                num={renderMathExpression(numContent, `${keyPrefix}-num`)}
                den={renderMathExpression(denContent, `${keyPrefix}-den`)}
                className="formal-math-frac"
              />
              {after && renderMathExpression(after, `${keyPrefix}-fa`)}
            </React.Fragment>
          )
        }
      }
    }

    // B. Earliest construct is \sqrt{body}
    if (first.type === 'sqrt') {
      const before = str.slice(0, first.idx)
      const bodyStart = first.idx + 6
      const bodyEnd = findMatchingBrace(str, bodyStart)
      if (bodyEnd !== -1) {
        const bodyContent = str.slice(bodyStart, bodyEnd)
        const after = str.slice(bodyEnd + 1)

        return (
          <React.Fragment key={keyPrefix}>
            {before && renderMathExpression(before, `${keyPrefix}-sb`)}
            <MathSqrt key={`${keyPrefix}-sqrt`}>
              {renderMathExpression(bodyContent, `${keyPrefix}-sbody`)}
            </MathSqrt>
            {after && renderMathExpression(after, `${keyPrefix}-sa`)}
          </React.Fragment>
        )
      }
    }
  }

  // 2. Tokenize atomic inline math elements
  const elements = []
  let lastIdx = 0
  let match
  let tokenIdx = 0

  INLINE_MATH_REGEX.lastIndex = 0

  while ((match = INLINE_MATH_REGEX.exec(str)) !== null) {
    if (match.index > lastIdx) {
      const gap = str.slice(lastIdx, match.index)
      if (gap.trim()) {
        elements.push(
          <span key={`gap-${tokenIdx++}`} className="math-plain-chunk">
            {gap}
          </span>
        )
      }
    }

    // Vector
    if (match[1] || match[2]) {
      const sym = match[1] || match[2]
      elements.push(<VectorSym key={`vec-${tokenIdx++}`} symbol={sym} className="formal-inline-vector" />)
    }
    // Unit Vector
    else if (match[3] || match[4]) {
      const sym = match[3] || match[4]
      elements.push(<UnitVectorSym key={`uvec-${tokenIdx++}`} symbol={sym} className="formal-inline-uvector" />)
    }
    // Dot over variable (\dot{E})
    else if (match[5]) {
      const sym = match[5]
      elements.push(
        <span key={`dot-${tokenIdx++}`} className="math-sym-wrap math-dot">
          <span className="math-dot-accent" aria-hidden="true">˙</span>
          <span className="math-var">{sym}</span>
        </span>
      )
    }
    // Joint Subscript + Superscript (base_{sub}^{pow})
    else if (match[6] && (match[7] || match[8]) && (match[9] || match[10])) {
      const base = match[6]
      const sub = (match[7] || match[8]).replace(/[{}]/g, '')
      const pow = (match[9] || match[10]).replace(/[{}]/g, '')
      elements.push(
        <span key={`subsup-${tokenIdx++}`} className="math-var-subsup">
          <span className="math-var">{base}</span>
          <sub className="math-sub">{sub}</sub>
          <sup className="math-sup">{pow}</sup>
        </span>
      )
    }
    // Subscript: base_{sub} or base_sub
    else if (match[11] && (match[12] || match[13])) {
      const base = match[11]
      const sub = (match[12] || match[13]).replace(/[{}]/g, '')
      elements.push(
        <span key={`sub-${tokenIdx++}`} className="math-var-sub">
          <span className="math-var">{base}</span>
          <sub className="math-sub">{sub}</sub>
        </span>
      )
    }
    // Superscript: base^{pow} or base^pow
    else if (match[14] && (match[15] || match[16])) {
      const base = match[14]
      const pow = (match[15] || match[16]).replace(/[{}]/g, '')
      elements.push(
        <span key={`pow-${tokenIdx++}`} className="math-var-pow">
          <span className="math-var">{base}</span>
          <sup className="math-sup">{pow}</sup>
        </span>
      )
    }
    // Operator: e.g. =, +, -, ×, ·, ∝, ≈, ≡, ±
    else if (match[17]) {
      elements.push(
        <span key={`op-${tokenIdx++}`} className="math-op">
          {match[17]}
        </span>
      )
    }
    // Math function name (sin, cos, const)
    else if (match[18]) {
      elements.push(
        <span key={`fn-${tokenIdx++}`} className="math-fn">
          {match[18]}
        </span>
      )
    }
    // Numeric literal
    else if (match[19]) {
      elements.push(
        <span key={`num-${tokenIdx++}`} className="math-num-lit">
          {match[19]}
        </span>
      )
    }
    // Single mathematical variable (italic math font)
    else if (match[20]) {
      elements.push(
        <span key={`var-${tokenIdx++}`} className="math-var">
          {match[20]}
        </span>
      )
    }
    // Text word in math (upright font)
    else if (match[21]) {
      elements.push(
        <span key={`txt-${tokenIdx++}`} className="math-text-lit">
          {match[21]}
        </span>
      )
    }
    // Delimiters (, ), [, ], {, }
    else if (match[22]) {
      elements.push(
        <span key={`del-${tokenIdx++}`} className="math-delimiter">
          {match[22]}
        </span>
      )
    }

    lastIdx = match.index + match[0].length
  }

  if (lastIdx < str.length) {
    const end = str.slice(lastIdx)
    if (end.trim()) {
      elements.push(
        <span key={`end-${tokenIdx++}`} className="math-plain-chunk">
          {end}
        </span>
      )
    }
  }

  return elements.length > 0 ? elements : str
}

/**
 * Renders prose text that may contain embedded inline formulas,
 * preserving natural English sentence flow while rendering math symbols crisply.
 */
export function renderInlineMathProse(text, keyPrefix = 'prose') {
  if (!text) return null
  const str = String(text)

  // If text contains an equation line (e.g. "g_Jup / g_Earth = ...")
  if (str.includes(' = ') || str.includes('\\frac') || str.includes('√( ') || str.includes('^2')) {
    // Check if entire string is an equation
    if (/^[a-zA-Z0-9α-ωΑ-Ω_/\s=+\-·×()^²³.]+$/.test(str) && str.includes('=')) {
      return renderMathExpression(cleanLatexString(str), keyPrefix)
    }
  }

  // Tokenize sentences with inline math variables or units
  const INLINE_TOKEN_REGEX = /(?:([a-zA-Z0-9α-ωΑ-Ω])_([a-zA-Z0-9α-ωΑ-Ω∞]+|\{[^{}]+\})|([a-zA-Z0-9α-ωΑ-Ω])\^([0-9+-α-ωΑ-Ω]+|\{[^{}]+\})|(\b[0-9]+(?:\.[0-9]+)?\s*(?:kg|m\/s²|m\/s|N|s|km|g|bar)\b)|([α-ωΑ-Ω∞]))/g
  const parts = []
  let lastIdx = 0
  let match
  let pIdx = 0

  while ((match = INLINE_TOKEN_REGEX.exec(str)) !== null) {
    if (match.index > lastIdx) {
      parts.push(str.slice(lastIdx, match.index))
    }

    // Subscript in prose: e.g. R_surface, g_eff
    if (match[1] && match[2]) {
      const base = match[1]
      const sub = match[2].replace(/[{}]/g, '')
      parts.push(
        <span key={`${keyPrefix}-sub-${pIdx++}`} className="math-var-sub">
          <span className="math-var">{base}</span>
          <sub className="math-sub">{sub}</sub>
        </span>
      )
    }
    // Exponent in prose: e.g. R^2, r^3
    else if (match[3] && match[4]) {
      const base = match[3]
      const pow = match[4].replace(/[{}]/g, '')
      parts.push(
        <span key={`${keyPrefix}-pow-${pIdx++}`} className="math-var-pow">
          <span className="math-var">{base}</span>
          <sup className="math-sup">{pow}</sup>
        </span>
      )
    }
    // Numeric quantity with unit: e.g. 50 kg, 490 N, 24.79 m/s²
    else if (match[5]) {
      parts.push(
        <span key={`${keyPrefix}-unit-${pIdx++}`} className="math-qty-span">
          {match[5]}
        </span>
      )
    }
    // Greek symbol in prose: e.g. ω, τ
    else if (match[6]) {
      parts.push(
        <span key={`${keyPrefix}-gk-${pIdx++}`} className="math-var">
          {match[6]}
        </span>
      )
    }

    lastIdx = match.index + match[0].length
  }

  if (lastIdx < str.length) {
    parts.push(str.slice(lastIdx))
  }

  return parts.length > 0 ? parts : str
}

export const formatInlineMathText = renderInlineMathProse

/**
 * Splits a full equation string into individual equations
 * (e.g. separated by \quad, quad, or semicolons).
 */
export function splitFormalEquations(formulaStr) {
  if (!formulaStr) return []
  const raw = String(formulaStr).trim()
  return raw
    .split(/(?:,\s*)?\\quad\s*|(?:\s*,\s*)?quad\s*|;\s*/)
    .map((s) => s.trim())
    .filter(Boolean)
}

/**
 * MathFormulaRenderer: Main component that renders formal mathematical formulas
 * with stacked fractions, root radices, Greek letters, and publication-grade typography.
 */
export function MathFormulaRenderer({ formula, className = '' }) {
  if (!formula) return null

  const equations = splitFormalEquations(formula)

  return (
    <div className={`formal-equation-grid ${className}`}>
      {equations.map((eq, idx) => (
        <div key={idx} className="formal-equation-item">
          <span className="formal-equation-index">EQ {String(idx + 1).padStart(2, '0')}</span>
          <div className="formal-equation-math">
            {renderMathExpression(cleanLatexString(eq), `eq-${idx}`)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MathFormulaRenderer
