import React, { useState } from 'react'
import { QUIZ_CATEGORIES } from '../../quiz/quizCategories'
import { QuizFormulaText } from './QuizFormulaText'

export function QuizActiveQuestion({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onNextQuestion,
  isLastQuestion,
  correctCount = 0,
}) {
  const [showHint, setShowHint] = useState(false)

  if (!question) return null

  const category = QUIZ_CATEGORIES.find((c) => c.id === question.category) || {
    name: 'Gravitation',
    icon: '🌌',
  }

  const isAnswered = Boolean(selectedOption)
  const isCorrect = isAnswered && selectedOption === question.correctAnswer
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100)

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

  const handleOptionClick = (key) => {
    if (isAnswered) return
    onSelectOption(key)
  }

  return (
    <div className="quiz-active-screen">
      {/* Top Progress & Telemetry */}
      <div className="quiz-active-header">
        <div className="quiz-progress-meta">
          <div className="quiz-progress-track">
            <div className="quiz-progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
          <div className="quiz-meta-row">
            <span className="quiz-question-counter">
              QUESTION <strong>{String(currentIndex + 1).padStart(2, '0')}</strong> / {String(totalQuestions).padStart(2, '0')}
            </span>
            <div className="quiz-header-badges">
              <span className="quiz-cat-tag">
                <span className="cat-icon">{category.icon}</span> {category.name}
              </span>
              <span className={`quiz-exam-tag exam-${question.examLevel.replace(/\s+/g, '-').toLowerCase()}`}>
                {question.examLevel}
              </span>
              <span className={`quiz-diff-tag diff-${question.difficulty.toLowerCase()}`}>
                {question.difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Question Scrollable Body */}
      <div className="quiz-active-body">
        {/* Question Statement */}
        <div className="quiz-statement-card">
          <QuizFormulaText text={question.question || question.text} className="quiz-statement-text" />
        </div>

        {/* Collapsible Hint */}
        <div className="quiz-hint-wrapper">
          <button
            type="button"
            className={`quiz-hint-toggle-btn ${showHint ? 'is-open' : ''}`}
            onClick={() => setShowHint(!showHint)}
          >
            <span className="hint-bulb">💡</span>
            <span>{showHint ? 'HIDE HINT' : 'NEED A CLUE? SHOW HINT'}</span>
            <span className="hint-chevron">{showHint ? '▲' : '▼'}</span>
          </button>
          {showHint && (
            <div className="quiz-hint-content">
              <span className="hint-prefix">CONCEPT HINT:</span>
              <QuizFormulaText text={question.hint} className="hint-text" />
            </div>
          )}
        </div>

        {/* 4 Options Grid */}
        <div className="quiz-options-grid">
          {question.options.map((optStr, idx) => {
            const key = getOptionKey(optStr, idx)
            const cleanText = getOptionCleanText(optStr)
            const isUserSelected = selectedOption === key
            const isCorrectOption = question.correctAnswer === key

            let stateClass = ''
            if (isAnswered) {
              if (isCorrectOption) {
                stateClass = 'is-correct'
              } else if (isUserSelected) {
                stateClass = 'is-incorrect'
              } else {
                stateClass = 'is-dimmed'
              }
            }

            return (
              <button
                key={key}
                type="button"
                className={`quiz-option-card ${stateClass} ${isUserSelected ? 'is-selected' : ''}`}
                onClick={() => handleOptionClick(key)}
                disabled={isAnswered}
              >
                <div className="option-indicator">
                  <span className="option-letter">{key}</span>
                  {isAnswered && isCorrectOption && <span className="option-badge-icon">✓</span>}
                  {isAnswered && isUserSelected && !isCorrectOption && (
                    <span className="option-badge-icon">✗</span>
                  )}
                </div>
                <div className="option-body">
                  <QuizFormulaText text={cleanText} className="option-text" />
                </div>
              </button>
            )
          })}
        </div>

        {/* Immediate Feedback Card (When Answered) */}
        {isAnswered && (
          <div className={`quiz-feedback-card ${isCorrect ? 'is-correct-card' : 'is-incorrect-card'}`}>
            <div className="feedback-status-banner">
              <div className="feedback-status-left">
                <span className="status-icon">{isCorrect ? '✓' : '✗'}</span>
                <span className="status-title">
                  {isCorrect ? 'CORRECT ANSWER' : 'INCORRECT ANSWER'}
                </span>
              </div>
              <div className="feedback-status-right">
                <span className="feedback-correct-key">
                  Correct Answer: <strong>Option {question.correctAnswer}</strong>
                </span>
              </div>
            </div>

            {/* Step-by-step solution derivation */}
            <div className="feedback-solution-block">
              <div className="solution-heading">
                <span className="solution-icon">📐</span>
                <span>STEP-BY-STEP DERIVATION & EXPLANATION</span>
              </div>
              <div className="solution-content">
                <QuizFormulaText text={question.explanation} className="solution-math" />
              </div>
            </div>

            {/* Core concept tested */}
            {(question.conceptTested || question.concept) && (
              <div className="feedback-concept-tag">
                <span className="concept-label">CORE CONCEPT TESTED:</span>
                <span className="concept-name">{question.conceptTested || question.concept}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Controls */}
      <div className="quiz-active-footer">
        <div className="footer-stats">
          <span className="footer-score-pill">
            Score: <strong>{correctCount}</strong> / {currentIndex + (isAnswered ? 1 : 0)}
          </span>
        </div>
        <div className="footer-actions">
          <button
            type="button"
            className="quiz-next-btn"
            disabled={!isAnswered}
            onClick={onNextQuestion}
          >
            <span>{isLastQuestion ? 'FINISH QUIZ & VIEW REPORT' : 'NEXT QUESTION'}</span>
            <span className="next-arrow">➔</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuizActiveQuestion
