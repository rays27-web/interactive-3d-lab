import React, { useState, useEffect } from 'react'
import { loadAndSampleQuestions, evaluateQuizSession } from '../../quiz/quizEngine'
import { recordQuestionsAnswered } from '../../quiz/questionHistory'
import { loadQuestionById } from '../../quiz/questionBank.js'
import { QuizStartScreen } from './QuizStartScreen'
import { QuizActiveQuestion } from './QuizActiveQuestion'
import { QuizResultsScreen } from './QuizResultsScreen'
import { QuizReviewScreen } from './QuizReviewScreen'

export function PhysicsQuizModal({ isOpen, onClose, onOpenAITutor }) {
  const [viewMode, setViewMode] = useState('start') // 'start' | 'active' | 'results' | 'review'
  const [activeQuestions, setActiveQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [evaluation, setEvaluation] = useState(null)

  // Reset or initialize on open/close
  useEffect(() => {
    if (!isOpen) {
      // Delay reset slightly to allow smooth close animation if desired
      const t = setTimeout(() => {
        setViewMode('start')
        setActiveQuestions([])
        setCurrentQuestionIndex(0)
        setUserAnswers({})
        setEvaluation(null)
      }, 300)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Dev & Automated Test hook to directly load a specific question on demand
  useEffect(() => {
    window.__LOAD_QUIZ_QUESTION_BY_ID__ = async (id) => {
      const target = await loadQuestionById(id)
      if (target) {
        setActiveQuestions([target])
        setCurrentQuestionIndex(0)
        setUserAnswers({})
        setEvaluation(null)
        setViewMode('active')
      }
      return target
    }
    return () => {
      delete window.__LOAD_QUIZ_QUESTION_BY_ID__
    }
  }, [])

  if (!isOpen) return null

  // 1. Start a new quiz session with chosen options (lazy-loading requested questions on demand)
  const handleStartQuiz = async (config) => {
    try {
      const questions = await loadAndSampleQuestions(config)
      // Mark questions as seen in history
      recordQuestionsAnswered(questions.map((q) => q.id))
      setActiveQuestions(questions)
      setCurrentQuestionIndex(0)
      setUserAnswers({})
      setEvaluation(null)
      setViewMode('active')
    } catch (err) {
      console.error('Failed to load questions for quiz session:', err)
    }
  }

  // 2. User selects an answer option for current question
  const handleSelectOption = (optionKey) => {
    const activeQ = activeQuestions[currentQuestionIndex]
    if (!activeQ) return
    setUserAnswers((prev) => ({
      ...prev,
      [activeQ.id]: optionKey,
    }))
  }

  // 3. User advances to next question or finishes quiz
  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < activeQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      // Complete quiz and evaluate
      const evalReport = evaluateQuizSession(activeQuestions, userAnswers)
      setEvaluation(evalReport)
      setViewMode('results')
    }
  }

  // 3b. User returns to previous question
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  // 4. Navigation between results & review
  const handleReviewAll = () => {
    setViewMode('review')
  }

  const handleBackToResults = () => {
    setViewMode('results')
  }

  const handleRetakeQuiz = () => {
    setViewMode('start')
    setActiveQuestions([])
    setCurrentQuestionIndex(0)
    setUserAnswers({})
    setEvaluation(null)
  }

  // Calculate live correct count so far
  const correctCount = activeQuestions.slice(0, currentQuestionIndex + 1).reduce((acc, q) => {
    if (userAnswers[q.id] && userAnswers[q.id] === q.correctAnswer) {
      return acc + 1
    }
    return acc
  }, 0)

  const currentQ = activeQuestions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === activeQuestions.length - 1

  return (
    <div className="physics-quiz-overlay" role="dialog" aria-modal="true" aria-label="Physics Quiz Modal">
      <div className="physics-quiz-backdrop" onClick={onClose} />

      <div className="physics-quiz-container">
        {/* Top Header Controls */}
        <div className="physics-quiz-top-nav">
          <div className="quiz-header-identity">
            <span className="quiz-logo-mark">⚡</span>
            <div className="quiz-title-stack">
              <span className="quiz-subheading">INTERACTIVE 3D LAB · ASSESSMENT SUITE</span>
              <h1 className="quiz-header-heading">GRAVITATION MASTERY QUIZ</h1>
            </div>
          </div>

          <div className="quiz-header-actions">
            {viewMode === 'active' && (
              <button
                type="button"
                className="quiz-header-btn-ghost"
                onClick={handleRetakeQuiz}
                title="Restart Quiz"
              >
                ↻ RESTART
              </button>
            )}
            <button
              type="button"
              className="quiz-modal-close-btn"
              onClick={onClose}
              aria-label="Close Quiz"
              title="Close Quiz (Esc)"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Dynamic View Mode Router */}
        <div className="physics-quiz-content-area">
          {viewMode === 'start' && <QuizStartScreen onStartQuiz={handleStartQuiz} />}

          {viewMode === 'active' && currentQ && (
            <QuizActiveQuestion
              question={currentQ}
              currentIndex={currentQuestionIndex}
              totalQuestions={activeQuestions.length}
              selectedOption={userAnswers[currentQ.id]}
              onSelectOption={handleSelectOption}
              onPrevQuestion={handlePrevQuestion}
              onNextQuestion={handleNextQuestion}
              isLastQuestion={isLastQuestion}
              correctCount={correctCount}
              onOpenAITutor={onOpenAITutor}
            />
          )}

          {viewMode === 'results' && evaluation && (
            <QuizResultsScreen
              evaluation={evaluation}
              onReviewAll={handleReviewAll}
              onRetakeQuiz={handleRetakeQuiz}
            />
          )}

          {viewMode === 'review' && evaluation && (
            <QuizReviewScreen
              evaluation={evaluation}
              onBackToResults={handleBackToResults}
              onRetakeQuiz={handleRetakeQuiz}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PhysicsQuizModal
