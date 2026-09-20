import React from 'react'
import { VectorSym, UnitVectorSym, Fraction } from '../GravitationIndex/MathEquation'

/**
 * Cleanly formats mathematical expressions in quiz text,
 * supporting vectors (F⃗, g⃗, r⃗, d⃗, v⃗, p⃗, dr⃗), unit vectors (r̂, n̂, î, ĵ, k̂),
 * exponents (r², r³, x²), subscripts (F_net, g_eff), fractions (\frac{a}{b}),
 * and equations with proper spacing and zero missing-glyph tofu boxes.
 */
export function QuizFormulaText({ text, className = '' }) {
  if (!text) return null

  // Split by line breaks to preserve multi-line derivation steps
  const lines = String(text).split('\n')

  return (
    <div className={`quiz-math-text ${className}`}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="quiz-math-line">
          {formatMathLine(line, lineIdx)}
          {lineIdx < lines.length - 1 && <br />}
        </span>
      ))}
    </div>
  )
}

// Map unicode subscript digits to standard digits
const SUB_MAP = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  'ₑ': 'e', 'ₚ': 'p'
}

// Regex matching mathematical constructs
const MATH_TOKEN_REGEX = /(?:([a-zA-Z0-9]+)\u20D7([₀-₉₁-₉]|_(?:\{[^{}]+\}|[a-zA-Z0-9+-]+|₁|₂|₃|₀))?|([a-zA-Z0-9]+)⃗([₀-₉₁-₉]|_(?:\{[^{}]+\}|[a-zA-Z0-9+-]+|₁|₂|₃|₀))?|\\vec\{([a-zA-Z0-9]+)\}(?:_(?:\{[^{}]+\}|[a-zA-Z0-9+-]+|₁|₂|₃|₀))?|([a-zA-Z])\u0302|([a-zA-Z])̂|\\hat\{([a-zA-Z])\}|[rniĵîk]̂|\\frac\{([^{}]+)\}\{([^{}]+)\}|([a-zA-Z])_([a-zA-Z0-9+-]+|\{[^{}]+\})|([a-zA-Z0-9\)\]])\^([0-9+-]+|\{[^{}]+\}))/g

/**
 * Format an individual line of text, splitting into mathematical tokens
 * and plain prose.
 */
export function formatMathLine(line, lineKey = 0) {
  if (!line) return null

  const str = String(line)
  // If line has no math tokens, return as is
  const hasTokens = str.includes('\u20D7') || str.includes('⃗') || str.includes('\u0302') || str.includes('̂') || str.includes('\\frac') || str.includes('\\vec') || str.includes('\\hat') || str.includes('_') || str.includes('^')

  if (!hasTokens) {
    return str
  }

  // Tokenize the line
  const elements = []
  let lastIndex = 0
  let match
  let tokenIdx = 0

  MATH_TOKEN_REGEX.lastIndex = 0

  while ((match = MATH_TOKEN_REGEX.exec(str)) !== null) {
    if (match.index > lastIndex) {
      elements.push(
        <React.Fragment key={`txt-${lineKey}-${tokenIdx++}`}>
          {str.slice(lastIndex, match.index)}
        </React.Fragment>
      )
    }

    const fullMatch = match[0]

    // 1. Vector match
    if (match[1] || match[3] || match[5]) {
      const sym = match[1] || match[3] || match[5]
      let rawSub = match[2] || match[4] || ''
      if (rawSub.startsWith('_')) {
        rawSub = rawSub.slice(1).replace(/[{}]/g, '')
      } else if (SUB_MAP[rawSub]) {
        rawSub = SUB_MAP[rawSub]
      }
      elements.push(
        <VectorSym
          key={`vec-${lineKey}-${tokenIdx++}`}
          symbol={sym}
          sub={rawSub || undefined}
          className="quiz-inline-vector"
        />
      )
    }
    // 2. Unit Vector match
    else if (match[6] || match[7] || match[8] || fullMatch.includes('̂')) {
      const sym = match[6] || match[7] || match[8] || fullMatch.replace('̂', '')
      elements.push(
        <UnitVectorSym
          key={`uvec-${lineKey}-${tokenIdx++}`}
          symbol={sym}
          className="quiz-inline-uvector"
        />
      )
    }
    // 3. Stacked Fraction (\frac{a}{b})
    else if (match[9] && match[10]) {
      elements.push(
        <Fraction
          key={`frac-${lineKey}-${tokenIdx++}`}
          num={formatMathLine(match[9], `${lineKey}-num`)}
          den={formatMathLine(match[10], `${lineKey}-den`)}
          className="quiz-inline-frac"
        />
      )
    }
    // 4. Subscript variable (e.g. F_net, m_p)
    else if (match[11] && match[12]) {
      const base = match[11]
      const sub = match[12].replace(/[{}]/g, '')
      elements.push(
        <span key={`sub-${lineKey}-${tokenIdx++}`} className="math-var-sub">
          <span className="math-base-sym">{base}</span>
          <sub className="math-sub">{sub}</sub>
        </span>
      )
    }
    // 5. Exponent variable (e.g. R^2, (R/2)^3)
    else if (match[13] && match[14]) {
      const base = match[13]
      const exp = match[14].replace(/[{}]/g, '')
      elements.push(
        <span key={`pow-${lineKey}-${tokenIdx++}`} className="math-var-pow">
          <span className="math-base-sym">{base}</span>
          <sup className="math-sup">{exp}</sup>
        </span>
      )
    }

    lastIndex = MATH_TOKEN_REGEX.lastIndex
  }

  if (lastIndex < str.length) {
    elements.push(
      <React.Fragment key={`txt-end-${lineKey}-${tokenIdx++}`}>
        {str.slice(lastIndex)}
      </React.Fragment>
    )
  }

  return elements
}

export default QuizFormulaText
