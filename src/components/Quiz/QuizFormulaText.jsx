import React from 'react'

/**
 * Cleanly formats mathematical expressions in quiz text,
 * supporting exponents (r², r³), vectors (F⃗, g⃗), unit vectors (r̂),
 * and equations with proper spacing.
 */
export function QuizFormulaText({ text, className = '' }) {
  if (!text) return null

  // Split by line breaks to preserve multi-line derivation steps in explanations
  const lines = text.split('\n')

  return (
    <div className={`quiz-math-text ${className}`}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="quiz-math-line">
          {formatMathLine(line)}
          {lineIdx < lines.length - 1 && <br />}
        </span>
      ))}
    </div>
  )
}

function formatMathLine(line) {
  // If the line contains an equation or formula indicator, apply monospace styling to the formula parts
  if (line.includes('=') || line.includes('∝') || line.includes('→') || line.includes('⟹')) {
    return <span className="math-equation-inline">{line}</span>
  }
  return line
}

export default QuizFormulaText
