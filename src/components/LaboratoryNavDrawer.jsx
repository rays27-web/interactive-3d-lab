import { useEffect } from 'react'
import { availableExperiments } from '../experiments/registry'

const EXPERIMENT_SUBTITLES = {
  'planet': 'Gravity & Surface Physics',
  'galaxy': 'Galactic Structure',
  'black-hole': 'Gravitational Collapse',
  'fluid': 'Fluid Dynamics',
  'pulsar': 'Rotational / Stellar Physics',
  'solar-system': 'Orbital Motion',
}

function LaboratoryNavDrawer({
  isOpen,
  onClose,
  onSelectExperiment,
  activeExperiment,
}) {
  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose?.()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop overlay — clicking outside closes the drawer */}
      <div
        className="lab-nav-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        aria-label="Laboratory Modules"
        className="lab-nav-drawer"
        role="dialog"
      >
        <div className="lab-nav-drawer-header">
          <div className="lab-nav-title-group">
            <span className="lab-nav-tag">LABORATORY MODULES</span>
            <h2 className="lab-nav-title">EXPERIMENTS</h2>
          </div>
          <button
            aria-label="Close laboratory modules drawer"
            className="lab-nav-close-btn"
            onClick={onClose}
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="lab-nav-list" role="list">
          {availableExperiments.map((exp) => {
            const isActive = exp.id === activeExperiment?.id
            const subtitle = EXPERIMENT_SUBTITLES[exp.id] || exp.scientificField || 'Physics Simulation'

            return (
              <button
                aria-current={isActive ? 'true' : undefined}
                className={`lab-nav-item ${isActive ? 'is-active' : ''}`}
                key={exp.id}
                onClick={() => {
                  onSelectExperiment?.(exp)
                  onClose?.()
                }}
                role="listitem"
                type="button"
              >
                <span className="lab-nav-num">{exp.index}</span>
                <div className="lab-nav-item-content">
                  <div className="lab-nav-name-row">
                    <strong className="lab-nav-name">{exp.name}</strong>
                    {isActive && (
                      <span className="lab-nav-active-badge">
                        <span className="active-dot" aria-hidden="true" /> ACTIVE
                      </span>
                    )}
                  </div>
                  <span className="lab-nav-desc">{subtitle}</span>
                </div>
              </button>
            )
          })}
        </div>
      </aside>
    </>
  )
}

export default LaboratoryNavDrawer
