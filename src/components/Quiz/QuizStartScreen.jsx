import React, { useState, useMemo } from 'react'
import { QUIZ_TOPICS, QUIZ_CATEGORIES } from '../../quiz/quizCategories'
import { getAvailableQuestionCount, getAvailableQuestionStats } from '../../quiz/quizEngine'
import { resetQuestionHistory } from '../../quiz/questionHistory'

export function QuizStartScreen({ onStartQuiz }) {
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('MEDIUM')
  const [selectedCount, setSelectedCount] = useState(10)
  const [includeSeen, setIncludeSeen] = useState(true)
  const [historyVersion, setHistoryVersion] = useState(0)
  const [historyToast, setHistoryToast] = useState(null)

  const difficultyOptions = [
    {
      id: 'EASY',
      label: 'EASY',
      badge: 'FOUNDATION',
      desc: 'Direct definitions, single-step formula substitutions, core laws & units.',
    },
    {
      id: 'MEDIUM',
      label: 'MEDIUM',
      badge: 'JEE MAIN',
      desc: 'Multi-step calculations, ratio problems, vector geometry & standard exam traps.',
    },
    {
      id: 'HARD',
      label: 'HARD',
      badge: 'JEE ADVANCED',
      desc: 'Deep analytical derivations, integral calculus, boundary limits & complex systems.',
    },
    {
      id: 'ALL',
      label: 'ALL / MIXED',
      badge: 'COMPREHENSIVE',
      desc: 'Full balanced distribution across Easy, Medium, and Hard tiers.',
    },
  ]

  // Calculate live available and unseen question statistics for current selection
  const currentStats = useMemo(() => {
    return getAvailableQuestionStats({
      topic: selectedTopic,
      difficulty: selectedDifficulty,
    })
  }, [selectedTopic, selectedDifficulty, historyVersion])

  // Total available across all difficulties for current topic
  const totalTopicAvailable = useMemo(() => {
    return getAvailableQuestionCount({
      topic: selectedTopic,
      difficulty: 'ALL',
    })
  }, [selectedTopic])

  // Effective available count based on whether seen questions can be used
  const effectiveAvailable = includeSeen
    ? currentStats.totalAvailable
    : currentStats.unseenAvailable

  const countOptions = effectiveAvailable >= 100 ? [10, 20, 30, 50, 100] : [10, 20, 30, 50]

  const isExhausted = currentStats.unseenAvailable === 0 && currentStats.totalAvailable > 0
  const isOverCount = selectedCount !== 'ALL' && selectedCount > effectiveAvailable

  // Current topic title
  const currentTopicObj = QUIZ_TOPICS.find((t) => t.id === selectedTopic)
  const currentTopicName = currentTopicObj ? currentTopicObj.name : 'ALL GRAVITATION TOPICS'

  const handleResetHistory = () => {
    resetQuestionHistory()
    setHistoryVersion((v) => v + 1)
    setHistoryToast('Question history cleared. All questions are now available as new.')
    setTimeout(() => {
      setHistoryToast(null)
    }, 4000)
  }

  const handleSelectDifficulty = (diffId) => {
    setSelectedDifficulty(diffId)
    if (diffId === 'ALL') {
      // When choosing the 1k / comprehensive option, do NOT self-access / auto-restrict Step 03 to 10/20/30/50.
      // Automatically select the entire available question pool!
      setSelectedCount('ALL')
    } else if (selectedCount === 'ALL') {
      // Returning to a specific difficulty: default to 10 or keep reasonable count
      setSelectedCount(10)
    }
  }

  const handleStart = (overrideCount = null, forceIncludeSeen = null) => {
    const shouldIncludeSeen = forceIncludeSeen !== null ? forceIncludeSeen : includeSeen
    const maxAvail = shouldIncludeSeen ? currentStats.totalAvailable : currentStats.unseenAvailable
    
    let finalCount
    if (overrideCount) {
      finalCount = overrideCount
    } else if (selectedCount === 'ALL') {
      finalCount = 'ALL'
    } else {
      finalCount = selectedCount > maxAvail ? maxAvail : selectedCount
    }

    if (finalCount <= 0 && finalCount !== 'ALL') return

    onStartQuiz({
      topic: selectedTopic,
      categoryId: selectedTopic,
      difficulty: selectedDifficulty,
      count: finalCount,
      preferUnseen: true,
      includeSeenIfExhausted: shouldIncludeSeen,
    })
  }

  return (
    <div className="quiz-start-screen">
      <div className="quiz-start-header">
        <div className="quiz-setup-label-row">
          <span className="quiz-badge-curriculum">ASSESSMENT SUITE · GRAVITATION</span>
          <button
            type="button"
            className="quiz-reset-history-btn"
            onClick={handleResetHistory}
            title="Reset seen questions to practice the entire bank fresh"
          >
            ↻ RESET QUESTION HISTORY
          </button>
        </div>
        <h2 className="quiz-main-title">PHYSICS LAB QUIZ</h2>
        <p className="quiz-main-subtitle">
          Test your mastery with exact topic isolation, rigorous difficulty tiers, and step-by-step mathematical solutions.
        </p>

        {historyToast && (
          <div className="quiz-history-toast" role="status">
            <span>✓</span>
            <span>{historyToast}</span>
          </div>
        )}
      </div>

      <div className="quiz-setup-sections">
        {/* 1. Choose Syllabus Topic */}
        <div className="quiz-setup-group">
          <label className="quiz-setup-label">
            <span className="setup-step-num">01</span> CHOOSE SYLLABUS TOPIC (100% ISOLATED)
          </label>
          <div className="quiz-topic-chips-wrap">
            <button
              className={`quiz-topic-chip ${selectedTopic === 'all' ? 'is-selected' : ''}`}
              onClick={() => setSelectedTopic('all')}
              type="button"
            >
              <span className="chip-icon">🌌</span>
              <div className="chip-text-wrap">
                <span className="chip-title">ALL GRAVITATION TOPICS (FULL SYLLABUS)</span>
                <span className="chip-sub">Combined comprehensive curriculum bank</span>
              </div>
            </button>

            {QUIZ_TOPICS.map((topic) => {
              const topicTotal = getAvailableQuestionCount({ topic: topic.id, difficulty: 'ALL' })
              return (
                <button
                  key={topic.id}
                  className={`quiz-topic-chip ${selectedTopic === topic.id ? 'is-selected' : ''}`}
                  onClick={() => setSelectedTopic(topic.id)}
                  type="button"
                >
                  <span className="chip-icon">{topic.icon}</span>
                  <div className="chip-text-wrap">
                    <span className="chip-title">{topic.name}</span>
                    <span className="chip-sub">{topicTotal} questions available</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* 2. Choose Difficulty Tier */}
        <div className="quiz-setup-group">
          <label className="quiz-setup-label">
            <span className="setup-step-num">02</span> SELECT DIFFICULTY TIER (NO MIXING UNLESS REQUESTED)
          </label>
          <div className="quiz-difficulty-grid">
            {difficultyOptions.map((diff) => {
              const diffStats = getAvailableQuestionStats({
                topic: selectedTopic,
                difficulty: diff.id,
              })
              const isSelected = selectedDifficulty === diff.id

              return (
                <button
                  key={diff.id}
                  className={`quiz-difficulty-card ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => handleSelectDifficulty(diff.id)}
                  type="button"
                >
                  <div className="diff-card-header">
                    <span className="diff-title">{diff.label}</span>
                    <span className="diff-badge">{diff.badge}</span>
                  </div>
                  <p className="diff-desc">{diff.desc}</p>
                  <div className="diff-pool-info">
                    <div className="diff-pool-counts">
                      <span className="diff-unseen-tag">{diffStats.unseenAvailable} unseen</span>
                      <span className="diff-total-tag">/ {diffStats.totalAvailable} total</span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* 3. Choose Question Count */}
        <div className="quiz-setup-group">
          <div className="quiz-setup-label-row">
            <label className="quiz-setup-label">
              <span className="setup-step-num">03</span>
              {selectedDifficulty === 'ALL' && selectedCount === 'ALL'
                ? 'QUESTION COUNT (ALL 1,000+ QUESTIONS ACTIVE · STEP 03 BYPASSED)'
                : 'SELECT EXACT QUESTION COUNT'}
            </label>
            <span className="quiz-pool-indicator">
              Available: <strong>{currentStats.totalAvailable}</strong> · Unseen: <strong>{currentStats.unseenAvailable}</strong>
            </span>
          </div>

          {/* Full Curriculum 1k Mode Banner when ALL difficulty is active */}
          {selectedDifficulty === 'ALL' && (
            <div className="quiz-all-mode-banner">
              <div className="all-mode-left">
                <span className="all-mode-icon">🌌</span>
                <div className="all-mode-text">
                  <strong className="all-mode-title">FULL 1,000+ QUESTION BANK ACTIVE ({effectiveAvailable} QUESTIONS)</strong>
                  <span className="all-mode-desc">
                    Step 03 is automatically bypassed to include all questions. Select a smaller number below if you prefer a shorter quiz.
                  </span>
                </div>
              </div>
              <span className="all-mode-badge">{effectiveAvailable} QUESTIONS</span>
            </div>
          )}

          <div className="quiz-count-row">
            {countOptions.map((cnt) => {
              const isAvailable = cnt <= effectiveAvailable
              const isSelected = selectedCount === cnt

              return (
                <button
                  key={cnt}
                  className={`quiz-count-btn ${isSelected ? 'is-selected' : ''} ${
                    !isAvailable ? 'is-over-pool' : ''
                  }`}
                  onClick={() => setSelectedCount(cnt)}
                  type="button"
                >
                  <span className="count-num">{cnt}</span>
                  <span className="count-label">QUESTIONS</span>
                  {!isAvailable && (
                    <span className="count-over-tag">max {effectiveAvailable}</span>
                  )}
                </button>
              )
            })}

            {/* ALL / FULL POOL BUTTON */}
            <button
              className={`quiz-count-btn is-all-btn ${selectedCount === 'ALL' ? 'is-selected' : ''}`}
              onClick={() => setSelectedCount('ALL')}
              type="button"
              title={`Select all ${effectiveAvailable} available questions`}
            >
              <span className="count-num">{effectiveAvailable}</span>
              <span className="count-label">ALL / FULL POOL</span>
            </button>
          </div>

          <label className="quiz-checkbox-row">
            <input
              type="checkbox"
              checked={includeSeen}
              onChange={(e) => setIncludeSeen(e.target.checked)}
            />
            <span>Include previously completed questions if needed to reach target count</span>
          </label>
        </div>
      </div>

      {/* Honest Availability Notice if unseen questions exhausted */}
      {isExhausted && !includeSeen && (
        <div className="quiz-availability-alert exhausted" role="alert">
          <div className="alert-header">
            <span className="alert-icon">⚡</span>
            <strong className="alert-title">NEW QUESTION LIMIT REACHED</strong>
          </div>
          <p className="alert-body">
            You have completed all available questions for <strong>{currentTopicName}</strong> at <strong>{selectedDifficulty}</strong> difficulty.
            You can:
          </p>
          <ul style={{ margin: '4px 0 8px 18px', padding: 0, color: '#fef08a', fontSize: '12.5px', lineHeight: '1.6' }}>
            <li>Reset question history to practice all {currentStats.totalAvailable} questions again fresh</li>
            <li>Choose another difficulty tier</li>
            <li>Choose another syllabus topic</li>
            <li>Include previously completed questions to practice now</li>
          </ul>
          <div className="alert-actions">
            <button
              type="button"
              className="alert-action-btn primary"
              onClick={handleResetHistory}
            >
              ↻ RESET QUESTION HISTORY
            </button>
            {selectedDifficulty !== 'ALL' && (
              <button
                type="button"
                className="alert-action-btn secondary"
                onClick={() => setSelectedDifficulty('ALL')}
              >
                SWITCH TO ALL DIFFICULTIES ({totalTopicAvailable} AVAILABLE)
              </button>
            )}
            {selectedTopic !== 'all' && (
              <button
                type="button"
                className="alert-action-btn secondary"
                onClick={() => setSelectedTopic('all')}
              >
                SWITCH TO ALL TOPICS
              </button>
            )}
            <button
              type="button"
              className="alert-action-btn tertiary"
              onClick={() => {
                setIncludeSeen(true)
                handleStart(selectedCount, true)
              }}
            >
              PRACTICE PREVIOUS QUESTIONS ({selectedCount} Qs)
            </button>
          </div>
        </div>
      )}

      {/* Honest Availability Notice if requested count exceeds available questions */}
      {isOverCount && !isExhausted && (
        <div className="quiz-availability-alert" role="alert">
          <div className="alert-header">
            <span className="alert-icon">⚠️</span>
            <strong className="alert-title">HONEST AVAILABILITY NOTICE</strong>
          </div>
          <p className="alert-body">
            You requested <strong>{selectedCount} questions</strong>, but only{' '}
            <strong>{effectiveAvailable} {selectedDifficulty} questions</strong> are available for{' '}
            <em>{currentTopicName}</em>. We never substitute other topics or silently reduce your count.
          </p>
          <div className="alert-actions">
            <button
              type="button"
              className="alert-action-btn primary"
              onClick={() => handleStart(effectiveAvailable)}
            >
              START WITH ALL {effectiveAvailable} {selectedDifficulty} QUESTIONS
            </button>
            {totalTopicAvailable > effectiveAvailable && (
              <button
                type="button"
                className="alert-action-btn secondary"
                onClick={() => setSelectedDifficulty('ALL')}
              >
                SWITCH TO ALL DIFFICULTIES ({totalTopicAvailable} AVAILABLE)
              </button>
            )}
            <button
              type="button"
              className="alert-action-btn tertiary"
              onClick={() => setSelectedCount(effectiveAvailable >= 10 ? 10 : effectiveAvailable)}
            >
              SET COUNT TO {effectiveAvailable >= 10 ? 10 : effectiveAvailable}
            </button>
          </div>
        </div>
      )}

      {/* Live Configuration Summary & Start Button */}
      <div className="quiz-start-footer">
        <div className="quiz-config-summary">
          <span className="summary-pill">
            <span className="pill-label">TOPIC:</span> {currentTopicName}
          </span>
          <span className="summary-pill">
            <span className="pill-label">DIFFICULTY:</span> {selectedDifficulty}
          </span>
          <span className="summary-pill">
            <span className="pill-label">POOL:</span> {currentStats.totalAvailable} ({currentStats.unseenAvailable} new)
          </span>
          <span className="summary-pill">
            <span className="pill-label">TARGET:</span>{' '}
            {selectedCount === 'ALL'
              ? `All ${effectiveAvailable} Questions (Full Bank)`
              : isOverCount
              ? `${effectiveAvailable} (Adjusted)`
              : `${selectedCount} Questions`}
          </span>
        </div>

        <button
          className="quiz-start-primary-btn"
          onClick={() => handleStart()}
          type="button"
          disabled={effectiveAvailable === 0}
        >
          <span className="btn-icon">⚡</span>
          <span>
            {selectedCount === 'ALL'
              ? `START FULL EXAM (ALL ${effectiveAvailable} QUESTIONS)`
              : isOverCount
              ? `START QUIZ (${effectiveAvailable} AVAILABLE QUESTIONS)`
              : `START QUIZ (${selectedCount} QUESTIONS)`}
          </span>
        </button>
      </div>
    </div>
  )
}

export default QuizStartScreen

