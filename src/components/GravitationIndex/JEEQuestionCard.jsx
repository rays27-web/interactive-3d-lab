import { useState } from 'react'

function JEEQuestionCard({ pyq }) {
  const { source, year, difficulty, concept, question, options, hint, correctAnswer, solution } = pyq
  const [showHint, setShowHint] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  const difficultyClass =
    difficulty === 'FOUNDATION'
      ? 'diff-foundation'
      : difficulty === 'MODERATE'
      ? 'diff-moderate'
      : 'diff-advanced'

  return (
    <div className="grav-pyq-card">
      <div className="pyq-header">
        <div className="pyq-source-row">
          <span className="pyq-source-badge">
            {source} • {year}
          </span>
          <span className={`pyq-diff-badge ${difficultyClass}`}>{difficulty}</span>
        </div>
        <span className="pyq-concept-pill">{concept}</span>
      </div>

      <p className="pyq-question-text">{question}</p>

      {options && options.length > 0 && (
        <div className="pyq-options-grid">
          {options.map((opt) => (
            <div key={opt.label} className="pyq-option-item">
              <span className="option-label">{opt.label}</span>
              <span className="option-text">{opt.text}</span>
            </div>
          ))}
        </div>
      )}

      {/* Action Toggles */}
      <div className="pyq-actions-row">
        <button
          aria-expanded={showHint}
          className={`pyq-btn pyq-hint-btn ${showHint ? 'is-active' : ''}`}
          onClick={() => setShowHint((prev) => !prev)}
          type="button"
        >
          <span>💡 {showHint ? 'HIDE HINT' : 'HINT'}</span>
        </button>

        <button
          aria-expanded={showAnswer}
          className={`pyq-btn pyq-ans-btn ${showAnswer ? 'is-active' : ''}`}
          onClick={() => setShowAnswer((prev) => !prev)}
          type="button"
        >
          <span>✓ {showAnswer ? 'HIDE ANSWER' : 'SHOW ANSWER'}</span>
        </button>

        <button
          aria-expanded={showSolution}
          className={`pyq-btn pyq-sol-btn ${showSolution ? 'is-active' : ''}`}
          onClick={() => setShowSolution((prev) => !prev)}
          type="button"
        >
          <span>≡ {showSolution ? 'HIDE SOLUTION' : 'SHOW FULL SOLUTION'}</span>
        </button>
      </div>

      {/* Hint Box */}
      {showHint && (
        <div className="pyq-reveal-box hint-box">
          <span className="reveal-tag">CONCEPTUAL HINT</span>
          <p className="reveal-text">{hint}</p>
        </div>
      )}

      {/* Answer Box */}
      {showAnswer && (
        <div className="pyq-reveal-box ans-box">
          <span className="reveal-tag">CORRECT ANSWER</span>
          <strong className="reveal-ans">{correctAnswer}</strong>
        </div>
      )}

      {/* Solution Box */}
      {showSolution && (
        <div className="pyq-reveal-box sol-box">
          <span className="reveal-tag">STEP-BY-STEP SOLUTION</span>
          <pre className="reveal-sol-text">{solution}</pre>
        </div>
      )}
    </div>
  )
}

export default JEEQuestionCard
