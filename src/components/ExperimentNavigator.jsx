import { useState } from 'react'
import { experimentRegistry } from '../experiments/registry'

function ExperimentNavigator({ activeExperiment, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  function selectExperiment(experiment) {
    if (experiment.status !== 'active') return
    onSelect(experiment)
    setIsOpen(false)
  }

  return (
    <nav className="experiment-nav" aria-label="Experiment index">
      {isOpen && (
        <div className="experiment-index">
          <p className="index-label">EXPERIMENT INDEX</p>
          {experimentRegistry.map((experiment) => (
            <button
              className={`experiment-option ${experiment.id === activeExperiment.id ? 'is-active' : ''}`}
              disabled={experiment.status !== 'active'}
              key={experiment.id}
              onClick={() => selectExperiment(experiment)}
              type="button"
            >
              <span>{experiment.index}</span>
              <span>{experiment.name}</span>
              <small>{experiment.status === 'active' ? 'ACTIVE' : 'SIGNAL LOCKED'}</small>
            </button>
          ))}
        </div>
      )}
      <button
        aria-expanded={isOpen}
        className="experiment-trigger"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <span className="trigger-orbit" aria-hidden="true" />
        <span>{activeExperiment.index} / {activeExperiment.name}</span>
        <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
    </nav>
  )
}

export default ExperimentNavigator
