import React from 'react'

export function QuizResultsScreen({ evaluation, onReviewAll, onRetakeQuiz }) {
  if (!evaluation) return null

  const {
    score,
    total,
    accuracy,
    categoryBreakdown = [],
    strengths = [],
    needsPractice = [],
  } = evaluation

  // Performance Tier Assessment
  let tierBadge = {
    title: 'EXCELLENT MASTERY',
    badgeClass: 'tier-high',
    desc: 'You demonstrated deep conceptual understanding and high numerical accuracy across gravitation topics.',
  }

  if (accuracy >= 85) {
    tierBadge = {
      title: 'TOP JEE ADVANCED TIER',
      badgeClass: 'tier-elite',
      desc: 'Superb precision and mastery of complex gravitational traps and multi-body dynamics.',
    }
  } else if (accuracy >= 70) {
    tierBadge = {
      title: 'STRONG JEE MAIN / BOARD PREPARATION',
      badgeClass: 'tier-strong',
      desc: 'Solid foundation across core topics. Focus on fine-tuning edge cases and high-speed problem solving.',
    }
  } else if (accuracy >= 50) {
    tierBadge = {
      title: 'DEVELOPING FOUNDATION',
      badgeClass: 'tier-moderate',
      desc: 'Good grasp of basic definitions, but revision is recommended for potential energy signs and satellite formulas.',
    }
  } else {
    tierBadge = {
      title: 'CONCEPT REINFORCEMENT NEEDED',
      badgeClass: 'tier-reinforce',
      desc: 'Review the Gravitation Index theory sections, vector signs, and standard formulas before retaking.',
    }
  }

  return (
    <div className="quiz-results-screen">
      {/* Top Banner */}
      <div className="results-header-banner">
        <span className={`results-tier-badge ${tierBadge.badgeClass}`}>{tierBadge.title}</span>
        <h2 className="results-main-title">PERFORMANCE REPORT</h2>
        <p className="results-summary-text">{tierBadge.desc}</p>
      </div>

      {/* Score Summary Metrics */}
      <div className="results-metrics-grid">
        <div className="result-metric-card">
          <span className="metric-label">FINAL SCORE</span>
          <div className="metric-val-row">
            <span className="metric-big-num">{score}</span>
            <span className="metric-total-denom">/ {total}</span>
          </div>
          <span className="metric-subtext">Questions answered correctly</span>
        </div>

        <div className="result-metric-card highlight-card">
          <span className="metric-label">ACCURACY RATE</span>
          <div className="metric-val-row">
            <span className="metric-big-num">{accuracy}%</span>
          </div>
          <div className="metric-progress-track">
            <div
              className="metric-progress-fill"
              style={{
                width: `${accuracy}%`,
                backgroundColor: accuracy >= 70 ? '#10b981' : accuracy >= 50 ? '#f59e0b' : '#ef4444',
              }}
            />
          </div>
        </div>

        <div className="result-metric-card">
          <span className="metric-label">TOPIC PROFICIENCY</span>
          <div className="metric-val-row">
            <span className="metric-big-num">{strengths.length}</span>
            <span className="metric-total-denom">/ {categoryBreakdown.length}</span>
          </div>
          <span className="metric-subtext">Topics mastered (&ge;80% accuracy)</span>
        </div>
      </div>

      {/* Category Breakdown Section */}
      <div className="results-section">
        <h3 className="results-section-title">
          <span className="sec-icon">📊</span>
          <span>TOPIC-BY-TOPIC PERFORMANCE BREAKDOWN</span>
        </h3>
        <div className="category-breakdown-list">
          {categoryBreakdown.map((cat) => (
            <div key={cat.id} className="cat-breakdown-item">
              <div className="cat-breakdown-left">
                <span className="cat-breakdown-icon">{cat.icon}</span>
                <span className="cat-breakdown-name">{cat.name}</span>
              </div>
              <div className="cat-breakdown-center">
                <div className="cat-mini-bar-track">
                  <div
                    className="cat-mini-bar-fill"
                    style={{
                      width: `${cat.accuracy}%`,
                      backgroundColor:
                        cat.accuracy >= 80 ? '#10b981' : cat.accuracy >= 60 ? '#38bdf8' : '#f43f5e',
                    }}
                  />
                </div>
              </div>
              <div className="cat-breakdown-right">
                <span className="cat-score-text">
                  {cat.correct} / {cat.total}
                </span>
                <span
                  className={`cat-percent-tag ${
                    cat.accuracy >= 80 ? 'is-good' : cat.accuracy < 60 ? 'is-warn' : 'is-mid'
                  }`}
                >
                  {cat.accuracy}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths & Weaknesses Diagnosis */}
      <div className="results-diagnosis-grid">
        <div className="diagnosis-card strengths-card">
          <div className="diagnosis-header">
            <span className="diag-icon">⭐</span>
            <strong>KEY STRENGTHS (&ge;80%)</strong>
          </div>
          {strengths.length > 0 ? (
            <ul className="diag-list">
              {strengths.map((str, idx) => (
                <li key={idx} className="diag-item strength-item">
                  <span className="diag-bullet">✓</span> {str}
                </li>
              ))}
            </ul>
          ) : (
            <p className="diag-empty">
              Practice more mixed problems to establish strong mastery across all topics.
            </p>
          )}
        </div>

        <div className="diagnosis-card practice-card">
          <div className="diagnosis-header">
            <span className="diag-icon">🎯</span>
            <strong>RECOMMENDED FOR PRACTICE (&lt;60%)</strong>
          </div>
          {needsPractice.length > 0 ? (
            <ul className="diag-list">
              {needsPractice.map((np, idx) => (
                <li key={idx} className="diag-item practice-item">
                  <span className="diag-bullet">▲</span> {np}
                </li>
              ))}
            </ul>
          ) : (
            <p className="diag-empty positive">
              Terrific! No critical weak areas detected in this quiz session.
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="results-actions-footer">
        <button type="button" className="results-btn-secondary" onClick={onReviewAll}>
          <span className="btn-icon">🔍</span>
          <span>REVIEW ALL ANSWERS & SOLUTIONS</span>
        </button>
        <button type="button" className="results-btn-primary" onClick={onRetakeQuiz}>
          <span className="btn-icon">⚡</span>
          <span>TAKE ANOTHER QUIZ</span>
        </button>
      </div>
    </div>
  )
}

export default QuizResultsScreen
