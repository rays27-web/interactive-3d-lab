import { useEffect } from 'react'

function ExperimentInfoPanel({ experiment, isOpen, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !experiment) return null

  const controls = experiment.controls || []
  const paramGuides = experiment.parameterGuides || {}

  return (
    <div className="dossier-overlay" onClick={onClose} role="presentation">
      <section
        aria-labelledby="dossier-title"
        aria-modal="true"
        className="dossier-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        <header className="dossier-header">
          <div>
            <span className="dossier-tag">SCIENTIFIC DOSSIER · EXP {experiment.index}</span>
            <h2 className="dossier-title" id="dossier-title">
              {experiment.name}
            </h2>
          </div>
          <button
            aria-label="Close scientific dossier"
            className="dossier-close-btn"
            onClick={onClose}
            type="button"
          >
            ✕
          </button>
        </header>

        <div className="dossier-body">
          <div className="dossier-section">
            <h3 className="dossier-section-title">PRIMARY DISCIPLINE</h3>
            <p className="dossier-field-text">{experiment.scientificField || 'Astrophysics & Graphics Simulation'}</p>
          </div>

          <div className="dossier-section">
            <h3 className="dossier-section-title">GOVERNING MODEL & EQUATIONS</h3>
            <div className="dossier-equation-box">
              <code>{experiment.equation || 'Analytical differential formulation'}</code>
            </div>
          </div>

          <div className="dossier-section">
            <h3 className="dossier-section-title">PHYSICAL PHENOMENON & OBSERVATION</h3>
            <p className="dossier-text">{experiment.observationGuide || experiment.description}</p>
          </div>

          <div className="dossier-section">
            <h3 className="dossier-section-title">EXPERIMENTAL PARAMETERS</h3>
            <div className="dossier-params-grid">
              {controls.map((ctrl) => (
                <div className="dossier-param-card" key={ctrl.id}>
                  <div className="dossier-param-header">
                    <span className="dossier-param-name">{ctrl.label}</span>
                    <span className="dossier-param-type">
                      {ctrl.type === 'toggle' ? 'BOOLEAN' : `[${ctrl.min} – ${ctrl.max}]`}
                    </span>
                  </div>
                  <p className="dossier-param-desc">
                    {paramGuides[ctrl.id] || 'Modulates corresponding simulation uniform.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="dossier-footer">
          <span className="dossier-footer-note">INTERACTIVE 3D LAB · COMMAND CENTER REFERENCE</span>
          <button className="dossier-footer-close" onClick={onClose} type="button">
            CLOSE DOSSIER [ESC]
          </button>
        </footer>
      </section>
    </div>
  )
}

export default ExperimentInfoPanel
