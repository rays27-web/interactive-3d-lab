import React, { useState } from 'react'
import { QUIZ_CATEGORIES } from '../../quiz/quizCategories'

export function QuizStartScreen({ onStartQuiz }) {
  const [selectedLevel, setSelectedLevel] = useState('MIXED')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCount, setSelectedCount] = useState(20)

  const examLevels = [
    { id: 'MIXED', label: 'MIXED LEVELS', desc: 'Comprehensive mix of Class 11-12, Main & Advanced' },
    { id: 'CLASS 11-12', label: 'CLASS 11–12', desc: 'Board & Foundation Concepts + Core Numericals' },
    { id: 'JEE MAIN', label: 'JEE MAIN', desc: 'Speed, Precision & Standard Competitive Problems' },
    { id: 'JEE ADVANCED', label: 'JEE ADVANCED', desc: 'Deep Multi-Step Analytical & Conceptual Traps' },
  ]

  const countOptions = [10, 20, 30, 50]

  const handleStart = () => {
    onStartQuiz({
      level: selectedLevel,
      categoryId: selectedCategory,
      count: selectedCount,
    })
  }

  return (
    <div className="quiz-start-screen">
      <div className="quiz-start-header">
        <span className="quiz-badge-curriculum">EXAM SIMULATION & PRACTICE</span>
        <h2 className="quiz-main-title">PHYSICS QUIZ</h2>
        <p className="quiz-main-subtitle">
          Practice concepts, calculations, and exam-style problems in Gravitation.
        </p>
      </div>

      <div className="quiz-setup-sections">
        {/* 1. Choose Preparation Level */}
        <div className="quiz-setup-group">
          <label className="quiz-setup-label">
            <span className="setup-step-num">01</span> CHOOSE YOUR PREPARATION LEVEL
          </label>
          <div className="quiz-level-grid">
            {examLevels.map((lvl) => (
              <button
                key={lvl.id}
                className={`quiz-level-card ${selectedLevel === lvl.id ? 'is-selected' : ''}`}
                onClick={() => setSelectedLevel(lvl.id)}
                type="button"
              >
                <div className="level-card-top">
                  <span className="level-radio-dot" />
                  <strong className="level-title">{lvl.label}</strong>
                </div>
                <p className="level-desc">{lvl.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Choose Topic */}
        <div className="quiz-setup-group">
          <label className="quiz-setup-label">
            <span className="setup-step-num">02</span> CHOOSE SYLLABUS TOPIC
          </label>
          <div className="quiz-topic-chips-wrap">
            <button
              className={`quiz-topic-chip ${selectedCategory === 'all' ? 'is-selected' : ''}`}
              onClick={() => setSelectedCategory('all')}
              type="button"
            >
              <span className="chip-icon">🌌</span>
              <span>ALL GRAVITATION TOPICS (FULL SYLLABUS)</span>
            </button>

            {QUIZ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`quiz-topic-chip ${selectedCategory === cat.id ? 'is-selected' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
              >
                <span className="chip-icon">{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Choose Question Count */}
        <div className="quiz-setup-group">
          <label className="quiz-setup-label">
            <span className="setup-step-num">03</span> SELECT QUESTION COUNT
          </label>
          <div className="quiz-count-row">
            {countOptions.map((cnt) => (
              <button
                key={cnt}
                className={`quiz-count-btn ${selectedCount === cnt ? 'is-selected' : ''}`}
                onClick={() => setSelectedCount(cnt)}
                type="button"
              >
                <span className="count-num">{cnt}</span>
                <span className="count-label">QUESTIONS</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Start Button */}
      <div className="quiz-start-footer">
        <button className="quiz-start-primary-btn" onClick={handleStart} type="button">
          <span className="btn-icon">⚡</span>
          <span>START QUIZ ({selectedCount} QUESTIONS)</span>
        </button>
      </div>
    </div>
  )
}

export default QuizStartScreen
