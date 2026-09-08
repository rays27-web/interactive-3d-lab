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
  const isSolarSystem = experiment.id === 'solar-system'

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

          {isSolarSystem && (
            <>
              <div className="dossier-section">
                <h3 className="dossier-section-title">FUNDAMENTAL GRAVITATIONAL LAWS</h3>
                <div className="dossier-laws-grid">
                  <div className="dossier-law-card">
                    <strong>NEWTON&apos;S LAW OF UNIVERSAL GRAVITATION</strong>
                    <code>F = G · (m₁ · m₂) / r²</code>
                    <p>Every celestial particle attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of their separation distance.</p>
                  </div>
                  <div className="dossier-law-card">
                    <strong>NEWTON&apos;S SECOND LAW OF MOTION</strong>
                    <code>F = m · a  ⟹  a = -G · M / r² · r̂</code>
                    <p>Gravitational acceleration is independent of the orbiting body&apos;s mass, causing all bodies at distance r to accelerate toward the central star identically.</p>
                  </div>
                </div>
              </div>

              <div className="dossier-section">
                <h3 className="dossier-section-title">KEPLER&apos;S LAWS OF PLANETARY MOTION</h3>
                <div className="dossier-laws-grid">
                  <div className="dossier-law-card">
                    <strong>1. LAW OF ELLIPSES</strong>
                    <p>Planetary orbits trace ellipses with the Sun located at one of the two foci, producing subtle perihelion and aphelion orbital distances.</p>
                  </div>
                  <div className="dossier-law-card">
                    <strong>2. LAW OF EQUAL AREAS</strong>
                    <p>A radius vector joining a planet to the Sun sweeps out equal areas during equal intervals of time; planets accelerate near perihelion.</p>
                  </div>
                  <div className="dossier-law-card">
                    <strong>3. HARMONIC LAW (T² ∝ a³)</strong>
                    <code>T² = (4π² / GM) · a³</code>
                    <p>The square of a planet&apos;s orbital period is strictly proportional to the cube of the semi-major axis of its orbit.</p>
                  </div>
                  <div className="dossier-law-card">
                    <strong>CELESTIAL EQUILIBRIUM & VELOCITY GRADIENT</strong>
                    <p>Planets do not fall into the Sun because tangential velocity generates centrifugal equilibrium (v = √(GM/r)). Outer planets move significantly slower because gravitational acceleration diminishes with 1/r².</p>
                  </div>
                </div>
              </div>
            </>
          )}

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
