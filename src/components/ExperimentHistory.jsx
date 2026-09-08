import React, { useState } from 'react'

/**
 * ExperimentHistory Component
 *
 * In-memory experimental observation recorder.
 * Structured observation recording: Before, After, Observed, Principle, Result.
 */
function ExperimentHistory({
  isOpen,
  onClose,
  history = [],
  onClearHistory,
  onAddObservation,
  activeExperiment,
}) {
  const [copyStatus, setCopyStatus] = useState(null)

  if (!isOpen) return null

  const handleCopyLog = () => {
    if (!history.length) return
    const formattedText = history
      .map(
        (entry, i) =>
          `[OBSERVATION #${i + 1} | ${entry.timestamp}]
Experiment: ${entry.experiment || activeExperiment?.name}
Before: ${entry.prevValue || entry.before || 'Baseline'}
After: ${entry.newValue || entry.after || 'Modified'}
Observed: ${entry.observed || entry.explanation || 'Visual trajectory change'}
Principle: ${entry.principle || 'Newtonian Gravitation'}
Result: ${entry.measuredResult || 'Calculated'}`
      )
      .join('\n\n---\n\n')

    navigator.clipboard
      ?.writeText(formattedText)
      .then(() => {
        setCopyStatus('COPIED')
        setTimeout(() => setCopyStatus(null), 1800)
      })
      .catch(() => {
        setCopyStatus('FAILED')
        setTimeout(() => setCopyStatus(null), 1800)
      })
  }

  return (
    <div
      aria-label="Experiment Observation History Log"
      className="history-drawer"
      role="region"
    >
      <div className="history-header">
        <div className="history-title-group">
          <span className="history-tag">EMPIRICAL OBSERVATION LOG</span>
          <h2 className="history-title">EXPERIMENT HISTORY</h2>
        </div>
        <button
          aria-label="Close Experiment History"
          className="history-close-btn"
          onClick={onClose}
          type="button"
        >
          ✕
        </button>
      </div>

      <div className="history-actions-bar">
        <button
          className="history-action-btn btn-record"
          onClick={onAddObservation}
          type="button"
        >
          + RECORD CURRENT OBSERVATION
        </button>
        <button
          className="history-action-btn btn-export"
          disabled={!history.length}
          onClick={handleCopyLog}
          type="button"
        >
          {copyStatus || 'EXPORT OBSERVATIONS'}
        </button>
        <button
          className="history-action-btn btn-clear"
          disabled={!history.length}
          onClick={onClearHistory}
          type="button"
        >
          CLEAR LOG
        </button>
      </div>

      <div className="history-log-list">
        {history.length === 0 ? (
          <div className="history-empty-state">
            <span className="empty-icon">⌁</span>
            <p>No observations recorded yet.</p>
            <span className="empty-hint">
              Run an interactive experiment, modify parameters, observe the live 3D consequence, and record empirical measurements here.
            </span>
          </div>
        ) : (
          history.map((item, idx) => (
            <div className="history-entry-card" key={item.id || idx}>
              <div className="entry-meta-row">
                <span className="entry-timestamp">{item.timestamp}</span>
                <span className="entry-exp-badge">{item.experiment || item.experimentTitle || activeExperiment?.name}</span>
                <span className="entry-param">{item.parameter || item.parameterChanged || 'Parameter Update'}</span>
              </div>

              {/* Structured Before / After / Result Row */}
              <div className="entry-comparison-row">
                <div className="comp-item">
                  <span className="comp-label">BEFORE</span>
                  <span className="comp-val">{item.prevValue || item.before || '1.00× Baseline'}</span>
                </div>
                <span className="comp-arrow">→</span>
                <div className="comp-item">
                  <span className="comp-label">AFTER</span>
                  <span className="comp-val">{item.newValue || item.after || item.parameterChanged || 'Modified'}</span>
                </div>
                <div className="comp-result">
                  <span className="result-label">MEASURED RESULT</span>
                  <span className="result-val">{item.measuredResult || item.consequence || 'Simulation state updated'}</span>
                </div>
              </div>

              {/* Observed & Principle Structured Breakdown */}
              <div className="entry-structured-details">
                {item.observed && (
                  <div className="struct-field">
                    <span className="struct-tag">OBSERVED:</span>
                    <span className="struct-desc">{item.observed}</span>
                  </div>
                )}
                {item.principle && (
                  <div className="struct-field">
                    <span className="struct-tag">PRINCIPLE:</span>
                    <code className="struct-code">{item.principle}</code>
                  </div>
                )}
                {item.curriculum && (
                  <div className="struct-field">
                    <span className="struct-tag">CURRICULUM:</span>
                    <span className="struct-curriculum">{item.curriculum}</span>
                  </div>
                )}
                {item.explanation && !item.observed && (
                  <div className="entry-explanation">
                    <span className="expl-icon">💡</span>
                    <span>{item.explanation}</span>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ExperimentHistory
