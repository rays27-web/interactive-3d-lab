import React, { useState } from 'react'
import { QUIZ_TOPICS, QUIZ_CATEGORIES } from '../../quiz/quizCategories'
import { QuizFormulaText } from './QuizFormulaText'

function parseQuestionHint(question) {
  if (!question) return { formula: '', principle: '', steps: [] }

  const rawHint = question.hint || ''
  let formula = question.formula || question.stepByStep?.formula || ''

  // If formula contains "= [number]" at the end and has an algebraic formula before it, extract core formula
  // e.g. "v_p / v_a = (1 + e) / (1 - e) = 10.429" -> core formula is "v_p / v_a = (1 + e) / (1 - e)"
  let cleanFormula = formula
  if (formula.includes('=')) {
    const parts = formula.split('=').map((s) => s.trim())
    if (parts.length >= 3 && !isNaN(Number(parts[parts.length - 1]))) {
      cleanFormula = parts.slice(0, parts.length - 1).join(' = ')
    }
  }

  let principle = ''
  let mathBody = rawHint

  // Check if hint starts with a principle title before a colon (e.g. "Conservation of angular momentum: ...")
  if (rawHint.includes(':')) {
    const colonIdx = rawHint.indexOf(':')
    const prefix = rawHint.slice(0, colonIdx).trim()
    const rest = rawHint.slice(colonIdx + 1).trim()

    // Ensure prefix looks like a title (not just a variable like "At r = R:")
    if (prefix.length < 60 && !prefix.includes('=')) {
      principle = prefix
      mathBody = rest
    }
  }

  // If formula is empty, see if mathBody has an equation before '⇒'
  if (!cleanFormula && mathBody.includes('=')) {
    const firstPart = mathBody.split(/(?:⇒|⟹|\\implies)/)[0].trim()
    if (firstPart.includes('=')) {
      cleanFormula = firstPart
    }
  }

  // Parse steps from mathBody
  let steps = []
  if (mathBody.includes('⇒') || mathBody.includes('⟹') || mathBody.includes('\\implies')) {
    steps = mathBody
      .split(/(?:⇒|⟹|\\implies)/)
      .map((s) => s.trim())
      .filter(Boolean)
  } else if (mathBody.includes(';') && mathBody.includes('=')) {
    steps = mathBody
      .split(';')
      .map((s) => s.trim())
      .filter(Boolean)
  } else if (/\.\s+(?=[A-Z])/.test(mathBody)) {
    const rawParts = mathBody
      .split(/\.\s+(?=[A-Z])/)
      .map((s) => s.trim())
      .filter(Boolean)
    if (rawParts.length > 1 && rawParts.every((p) => p.length >= 4)) {
      steps = rawParts
    } else {
      steps = [mathBody]
    }
  } else {
    steps = [mathBody]
  }

  // Clean trailing period
  steps = steps.map((st) => st.replace(/\.$/, '').trim()).filter(Boolean)

  return {
    formula: cleanFormula || formula,
    fullFormula: formula,
    principle,
    steps,
  }
}

export function QuizActiveQuestion({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onPrevQuestion,
  onNextQuestion,
  isLastQuestion,
  correctCount = 0,
  onOpenAITutor,
}) {
  const [showHint, setShowHint] = useState(false)

  const hintData = React.useMemo(() => parseQuestionHint(question), [question])

  if (!question) return null

  const topicKey = question.topic || question.category
  const category = QUIZ_TOPICS.find((c) => c.id === topicKey) ||
    QUIZ_CATEGORIES.find((c) => c.id === topicKey) || {
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

  const stepByStep = question.stepByStep

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
                <span className="cat-icon">{category.icon}</span> {category.shortName || category.name}
              </span>
              <span className={`quiz-diff-tag diff-${(question.difficulty || 'MEDIUM').toLowerCase()}`}>
                {question.difficulty || 'MEDIUM'}
              </span>
              {question.examLevel && (
                <span className={`quiz-exam-tag exam-${question.examLevel.replace(/\s+/g, '-').toLowerCase()}`}>
                  {question.examLevel}
                </span>
              )}
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

        {/* Collapsible Structured Concept & Formula Guide */}
        <div className="quiz-hint-wrapper">
          <button
            type="button"
            className={`quiz-hint-toggle-btn ${showHint ? 'is-open' : ''}`}
            onClick={() => setShowHint(!showHint)}
          >
            <span className="hint-bulb">💡</span>
            <span>{showHint ? 'HIDE CONCEPT & FORMULA CLUE' : 'NEED A CLUE? SHOW FORMULA & STEPS'}</span>
            <span className="hint-chevron">{showHint ? '▲' : '▼'}</span>
          </button>
          {showHint && (
            <div className="quiz-hint-panel" role="region" aria-label="Concept Clue and Governing Formula">
              <div className="hint-panel-top">
                <span className="hint-panel-badge">💡 CONCEPT & FORMULA GUIDE</span>
              </div>

              {/* 1. Dedicated Governing Formula Box */}
              {hintData.formula && (
                <div className="hint-formula-card">
                  <div className="hint-card-label">
                    <span className="hint-icon">📐</span>
                    <span>GOVERNING FORMULA / KEY EQUATION</span>
                  </div>
                  <div className="hint-formula-box">
                    <QuizFormulaText text={hintData.formula} className="hint-primary-formula" />
                  </div>
                </div>
              )}

              {/* 2. Physics Principle / Law */}
              {hintData.principle && (
                <div className="hint-principle-card">
                  <div className="hint-card-label">
                    <span className="hint-icon">⚡</span>
                    <span>CORE PRINCIPLE / LAW</span>
                  </div>
                  <div className="hint-principle-text">
                    <QuizFormulaText text={hintData.principle} />
                  </div>
                </div>
              )}

              {/* 3. Step-by-Step Mathematical Clue Breakdown */}
              {hintData.steps && hintData.steps.length > 0 && (
                <div className="hint-steps-card">
                  <div className="hint-card-label">
                    <span className="hint-icon">🔢</span>
                    <span>STEP-BY-STEP MATHEMATICAL CLUE</span>
                  </div>
                  <div className="hint-steps-list">
                    {hintData.steps.map((step, idx) => (
                      <div key={idx} className="hint-step-item">
                        <span className="hint-step-pill">STEP {idx + 1}</span>
                        <div className="hint-step-math">
                          <QuizFormulaText text={step} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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

            {/* Step-by-Step Derivation System */}
            <div className="feedback-solution-block">
              <div className="solution-heading">
                <span className="solution-icon">📐</span>
                <span>STEP-BY-STEP SOLUTION & DERIVATION</span>
              </div>

              {stepByStep ? (
                <div className="step-by-step-container">
                  {stepByStep.given && (
                    <div className="solution-step-item">
                      <span className="step-label">1. GIVEN & CONSTRAINTS:</span>
                      <QuizFormulaText text={stepByStep.given} className="step-content" />
                    </div>
                  )}

                  {stepByStep.asked && (
                    <div className="solution-step-item">
                      <span className="step-label">2. ASKED / TARGET:</span>
                      <QuizFormulaText text={stepByStep.asked} className="step-content" />
                    </div>
                  )}

                  {stepByStep.formula && (
                    <div className="solution-step-item">
                      <span className="step-label">3. GOVERNING EQUATION:</span>
                      <div className="solution-formula-box">
                        <QuizFormulaText text={stepByStep.formula} className="step-math-formula" />
                      </div>
                    </div>
                  )}

                  {stepByStep.substitution && (
                    <div className="solution-step-item">
                      <span className="step-label">4. SUBSTITUTION & VALUES:</span>
                      <QuizFormulaText text={stepByStep.substitution} className="step-content" />
                    </div>
                  )}

                  {stepByStep.calculation && (
                    <div className="solution-step-item">
                      <span className="step-label">5. CALCULATION STEPS:</span>
                      <QuizFormulaText text={stepByStep.calculation} className="step-content" />
                    </div>
                  )}

                  {stepByStep.finalAnswer && (
                    <div className="solution-step-item is-final-step">
                      <span className="step-label">6. FINAL ANSWER:</span>
                      <QuizFormulaText text={stepByStep.finalAnswer} className="step-final-box" />
                    </div>
                  )}

                  {stepByStep.keyTakeaway && (
                    <div className="solution-callout-takeaway">
                      <span className="callout-badge">💡 KEY TAKEAWAY</span>
                      <QuizFormulaText text={stepByStep.keyTakeaway} className="callout-text" />
                    </div>
                  )}

                  {stepByStep.commonTrap && (
                    <div className="solution-callout-trap">
                      <span className="callout-badge">⚠️ COMMON TRAP</span>
                      <QuizFormulaText text={stepByStep.commonTrap} className="callout-text" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="solution-content">
                  <QuizFormulaText text={question.explanation} className="solution-math" />
                </div>
              )}
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
          {onOpenAITutor && (
            <button
              type="button"
              className="quiz-ask-tutor-btn"
              onClick={() =>
                onOpenAITutor({
                  source: 'quiz',
                  topic: question.topic || question.category || 'gravitation',
                  question: {
                    number: currentIndex + 1,
                    question: question.question,
                    concept: question.conceptTested || question.concept,
                    formula: question.formula,
                    hint: question.hint,
                    difficulty: question.difficulty,
                    options: question.options,
                    stepByStep: question.stepByStep,
                  },
                })
              }
              title="Ask Panda AI Tutor for hints or conceptual explanation"
            >
              <span className="quiz-panda-icon">🐼</span>
              <span>ASK AI TUTOR</span>
            </button>
          )}
        </div>

        <div className="footer-actions">
          {currentIndex > 0 && (
            <button
              type="button"
              className="quiz-prev-btn"
              onClick={onPrevQuestion}
              title="Return to Previous Question"
            >
              <span className="prev-arrow">←</span>
              <span>PREVIOUS</span>
            </button>
          )}

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

