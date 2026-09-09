import React, { useState } from 'react'
import { QUIZ_CATEGORIES } from '../../quiz/quizCategories'
import { QuizFormulaText } from './QuizFormulaText'

export function QuizReviewScreen({ evaluation, onBackToResults, onRetakeQuiz }) {
  const [filterMode, setFilterMode] = useState('all') // 'all' | 'correct' | 'incorrect'

  if (!evaluation) return null

  const { detailedResults = [], score, total } = evaluation

  const filteredResults = detailedResults.filter((item) => {
    if (filterMode === 'correct') return item.isCorrect
    if (filterMode === 'incorrect') return !item.isCorrect
    return true
  })

  // Format option letter e.g. "A", "B", "C", "D"
  const getOptionKey = (opt, idx) => {
    if (typeof opt === 'object' && opt !== null) {
      return opt.label || ['A', 'B', 'C', 'D'][idx] || 'A'
    }
    const match = String(opt).match(/^([A-D])\)/i)
    if (match) return match[1].toUpperCase()
    return ['A', 'B', 'C', 'D'][idx] || 'A'
  }

  const getOptionCleanText = (opt) => {
    if (typeof opt === 'object' && opt !== null) {
      return opt.text || ''
    }
    return String(opt).replace(/^[A-D]\)\s*/i, '').trim()
  }

  return (
    <div className="quiz-review-screen">
      {/* Top Header */}
      <div className="review-top-bar">
        <div className="review-title-wrap">
          <h2 className="review-title">DETAILED QUESTION REVIEW</h2>
          <span className="review-score-pill">
            Score: <strong>{score}</strong> / {total}
          </span>
        </div>

        {/* Filter Controls */}
        <div className="review-filter-tabs">
          <button
            type="button"
            className={`review-tab-btn ${filterMode === 'all' ? 'is-active' : ''}`}
            onClick={() => setFilterMode('all')}
          >
            ALL ({total})
          </button>
          <button
            type="button"
            className={`review-tab-btn is-correct-tab ${filterMode === 'correct' ? 'is-active' : ''}`}
            onClick={() => setFilterMode('correct')}
          >
            CORRECT ({score})
          </button>
          <button
            type="button"
            className={`review-tab-btn is-incorrect-tab ${filterMode === 'incorrect' ? 'is-active' : ''}`}
            onClick={() => setFilterMode('incorrect')}
          >
            INCORRECT ({total - score})
          </button>
        </div>
      </div>

      {/* Question Cards List */}
      <div className="review-questions-list">
        {filteredResults.length === 0 ? (
          <div className="review-empty-state">
            <p>No questions found under the selected filter.</p>
          </div>
        ) : (
          filteredResults.map((item) => {
            const { index, question, chosen, isCorrect } = item
            const category = QUIZ_CATEGORIES.find((c) => c.id === question.category) || {
              name: 'Gravitation',
              icon: '🌌',
            }

            return (
              <div
                key={question.id}
                className={`review-card ${isCorrect ? 'is-review-correct' : 'is-review-incorrect'}`}
              >
                {/* Header */}
                <div className="review-card-header">
                  <div className="review-card-left">
                    <span className="review-q-num">Q{String(index).padStart(2, '0')}</span>
                    <span className={`review-status-pill ${isCorrect ? 'pill-correct' : 'pill-incorrect'}`}>
                      {isCorrect ? '✓ CORRECT' : '✗ INCORRECT'}
                    </span>
                    <span className="review-cat-tag">
                      {category.icon} {category.name}
                    </span>
                  </div>
                  <div className="review-card-right">
                    <span className="review-level-tag">{question.examLevel}</span>
                    <span className="review-diff-tag">{question.difficulty}</span>
                  </div>
                </div>

                {/* Statement */}
                <div className="review-statement">
                  <QuizFormulaText text={question.question || question.text} />
                </div>

                {/* Options */}
                <div className="review-options-grid">
                  {question.options.map((optStr, optIdx) => {
                    const key = getOptionKey(optStr, optIdx)
                    const cleanText = getOptionCleanText(optStr)
                    const isChosen = chosen === key
                    const isRight = question.correctAnswer === key

                    let optClass = ''
                    if (isRight) {
                      optClass = 'is-right-answer'
                    } else if (isChosen && !isRight) {
                      optClass = 'is-wrong-answer'
                    } else {
                      optClass = 'is-neutral'
                    }

                    return (
                      <div key={key} className={`review-option-pill ${optClass}`}>
                        <div className="review-opt-key">
                          <span>{key}</span>
                          {isRight && <span className="key-badge">✓ CORRECT</span>}
                          {isChosen && !isRight && <span className="key-badge">YOUR PICK</span>}
                        </div>
                        <div className="review-opt-body">
                          <QuizFormulaText text={cleanText} />
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Solution Block */}
                <div className="review-solution-block">
                  <div className="solution-head">
                    <span className="head-icon">📐</span>
                    <strong>FULL SOLUTION DERIVATION</strong>
                  </div>
                  <div className="solution-body">
                    <QuizFormulaText text={question.explanation} />
                  </div>
                  {(question.conceptTested || question.concept) && (
                    <div className="solution-concept">
                      <span className="concept-label">CONCEPT TESTED:</span>
                      <span className="concept-val">{question.conceptTested || question.concept}</span>
                    </div>
                  )}
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Footer Navigation */}
      <div className="review-footer-bar">
        <button type="button" className="review-back-btn" onClick={onBackToResults}>
          <span>← BACK TO REPORT</span>
        </button>
        <button type="button" className="review-retake-btn" onClick={onRetakeQuiz}>
          <span className="btn-icon">⚡</span>
          <span>START NEW QUIZ</span>
        </button>
      </div>
    </div>
  )
}

export default QuizReviewScreen
