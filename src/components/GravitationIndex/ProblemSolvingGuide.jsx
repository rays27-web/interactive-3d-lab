import { useState } from 'react'

function ProblemSolvingGuide({ framework }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { title, subtitle, warning, steps } = framework

  return (
    <div className={`grav-guide-section ${isExpanded ? 'is-open' : ''}`}>
      <button
        aria-expanded={isExpanded}
        className="grav-guide-header-btn"
        onClick={() => setIsExpanded((prev) => !prev)}
        type="button"
      >
        <div className="guide-header-titles">
          <span className="guide-eyebrow">JEE MASTER FRAMEWORK</span>
          <h3 className="guide-main-title">{title}</h3>
          <span className="guide-subtitle">{subtitle}</span>
        </div>
        <span className="guide-toggle-icon" aria-hidden="true">
          {isExpanded ? '[ − ]' : '[ + ]'}
        </span>
      </button>

      {isExpanded && (
        <div className="grav-guide-body">
          {warning && (
            <div className="guide-warning-box">
              <span className="warning-icon">⚡</span>
              <p className="warning-text">{warning}</p>
            </div>
          )}

          <div className="guide-steps-list">
            {steps.map((item) => (
              <div key={item.step} className="guide-step-card">
                <div className="step-num-badge">STEP {item.step}</div>
                <div className="step-content">
                  <strong className="step-title">{item.title}</strong>
                  <p className="step-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProblemSolvingGuide
