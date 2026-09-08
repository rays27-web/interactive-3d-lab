import { useState } from 'react'
import { experimentRegistry } from '../experiments/registry'
import { EXPERIMENT_MISSIONS_DATA } from '../physics/experimentMissions'
import ScientificIcon from './ScientificIcon'

const SCIENTIFIC_DESCRIPTORS = {
  'planet': 'Gravity & Surface Physics',
  'galaxy': 'Gravity & Galactic Motion',
  'black-hole': 'Extreme Gravity',
  'fluid': 'Pressure & Flow',
  'pulsar': 'Rotation & Periodic Signals',
  'solar-system': 'Orbital Mechanics',
}

const LEARNING_PROGRESSION = [
  { step: '01', title: 'Planetary Formation & Surface Physics', desc: 'Centrifugal deformation, scale height, and atmospheric Rayleigh scattering' },
  { step: '02', title: 'Galactic Collective Motion & Waves', desc: 'Lin-Shu density wave theory, differential rotation, and disc stability' },
  { step: '03', title: 'Extreme Gravitation & Relativistic Singularities', desc: 'Curved null geodesics, Einstein rings, and relativistic Doppler boosting' },
  { step: '04', title: 'Continuum Hydrodynamics & Turbulence', desc: 'Incompressible curl fields, Navier-Stokes cascades, and thermal buoyancy' },
  { step: '05', title: 'Relativistic Electrodynamics & Radiation', desc: 'Precessing magnetic dipoles, synchrotron beams, and the cosmic lighthouse' },
  { step: '06', title: 'Multi-Body Celestial Mechanics & Gravity', desc: 'Keplerian orbital harmonics, inverse-square law, and escape velocities' },
]

function ExperimentNavigator({
  activeExperiment,
  onSelect,
  isOpen: controlledIsOpen,
  onToggleOpen,
  onClose,
  onOpenGravityLab,
  onOpenChallenge,
  onOpenMeasure,
  onOpenAskLab,
  onOpenHistory,
  onOpenMission,
}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const isControlled = controlledIsOpen !== undefined
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen

  const handleToggle = () => {
    if (onToggleOpen) {
      onToggleOpen()
    } else {
      setInternalIsOpen((prev) => !prev)
    }
  }

  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      setInternalIsOpen(false)
    }
  }

  const handleSelect = (exp) => {
    if (exp.status !== 'active') return
    onSelect(exp)
    handleClose()
  }

  return (
    <>
      {/* Upper-Left Educational Index Drawer */}
      {isOpen && (
        <aside
          aria-label="Laboratory Experiment Index"
          className="experiment-index-drawer"
          id="experiment-index-drawer"
          role="region"
        >
          <div className="index-drawer-header">
            <div className="index-drawer-title-group">
              <span className="index-drawer-tag">LABORATORY DIRECTORY</span>
              <h2 className="index-drawer-title">EXPERIMENT INDEX</h2>
            </div>
            <button
              aria-label="Close experiment index"
              className="index-drawer-close-btn"
              onClick={handleClose}
              type="button"
            >
              ✕
            </button>
          </div>

          {/* Primary Experiments Section */}
          <div className="index-drawer-section">
            <div className="index-section-header-row">
              <span className="index-section-label">ACTIVE EXPERIMENTS (01–06)</span>
              {onOpenMission && (
                <button
                  className="index-mission-shortcut-btn"
                  onClick={() => {
                    onOpenMission()
                    handleClose()
                  }}
                  type="button"
                >
                  🎯 ACTIVE MISSION →
                </button>
              )}
            </div>
            <div className="index-experiments-list">
              {experimentRegistry.map((exp) => {
                const isActive = exp.id === activeExperiment.id
                const descriptor = SCIENTIFIC_DESCRIPTORS[exp.id] || exp.scientificField || 'Scientific Simulation'
                const expMeta = EXPERIMENT_MISSIONS_DATA[exp.id]
                return (
                  <button
                    aria-current={isActive ? 'true' : undefined}
                    className={`index-exp-card ${isActive ? 'is-active' : ''}`}
                    disabled={exp.status !== 'active'}
                    key={exp.id}
                    onClick={() => handleSelect(exp)}
                    type="button"
                  >
                    <div className="index-exp-num">{exp.index}</div>
                    <div className="index-exp-info">
                      <div className="index-exp-name-row">
                        <span className="index-exp-name">{exp.name}</span>
                        {isActive ? (
                          <span className="index-active-pill">
                            <span className="active-dot" aria-hidden="true" /> ACTIVE
                          </span>
                        ) : (
                          <span className="index-status-hint">
                            {exp.status === 'active' ? 'AVAILABLE' : 'LOCKED'}
                          </span>
                        )}
                      </div>
                      <span className="index-exp-desc">{descriptor}</span>
                      {expMeta && (
                        <div className="index-exp-curriculum">
                          <div className="curriculum-item">
                            <span className="curriculum-tag">QUESTION</span>
                            <span className="curriculum-text">{expMeta.primaryQuestion}</span>
                          </div>
                          <div className="curriculum-grid">
                            <div className="curriculum-subitem">
                              <span className="curriculum-tag">CONTROL</span>
                              <span className="curriculum-text">{expMeta.controlsSummary}</span>
                            </div>
                            <div className="curriculum-subitem">
                              <span className="curriculum-tag">MEASURE</span>
                              <span className="curriculum-text">{expMeta.observablesSummary}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Connected Learning Progression (Phases 22 & 23) */}
          <div className="index-drawer-section progression-section">
            <span className="index-section-label">CONNECTED LEARNING PROGRESSION</span>
            <div className="progression-timeline">
              {LEARNING_PROGRESSION.map((step) => {
                const isCurrent = step.step === activeExperiment.index
                return (
                  <div className={`progression-node ${isCurrent ? 'is-current' : ''}`} key={step.step}>
                    <div className="progression-dot-col">
                      <span className="progression-dot" aria-hidden="true" />
                      <span className="progression-line" aria-hidden="true" />
                    </div>
                    <div className="progression-info">
                      <div className="progression-title-row">
                        <span className="progression-step">{step.step}</span>
                        <strong className="progression-title">{step.title}</strong>
                      </div>
                      <p className="progression-desc">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Secondary Laboratory Instruments Section */}
          <div className="index-drawer-section secondary-tools-section">
            <span className="index-section-label">LABORATORY INSTRUMENTS</span>
            <div className="index-tools-grid">
              <button
                className="index-tool-btn"
                onClick={() => {
                  onOpenGravityLab?.()
                  handleClose()
                }}
                type="button"
              >
                <ScientificIcon name="planet" size={18} className="tool-icon" />
                <div className="tool-text">
                  <strong>GRAVITY LAB</strong>
                  <span>Orbital Mechanics</span>
                </div>
              </button>

              <button
                className="index-tool-btn"
                onClick={() => {
                  onOpenChallenge?.()
                  handleClose()
                }}
                type="button"
              >
                <ScientificIcon name="target" size={18} className="tool-icon" />
                <div className="tool-text">
                  <strong>EXPERIMENT DEMOS</strong>
                  <span>Live 3D Parameter Trials</span>
                </div>
              </button>

              <button
                className="index-tool-btn"
                onClick={() => {
                  onOpenMeasure?.()
                  handleClose()
                }}
                type="button"
              >
                <ScientificIcon name="ruler" size={18} className="tool-icon" />
                <div className="tool-text">
                  <strong>MEASUREMENTS</strong>
                  <span>Single & Relative Metrics</span>
                </div>
              </button>

              <button
                className="index-tool-btn"
                onClick={() => {
                  onOpenAskLab?.()
                  handleClose()
                }}
                type="button"
              >
                <ScientificIcon name="atom" size={18} className="tool-icon" />
                <div className="tool-text">
                  <strong>ASK THE LAB</strong>
                  <span>Physics Inquiry Mapper</span>
                </div>
              </button>

              <button
                className="index-tool-btn"
                onClick={() => {
                  onOpenHistory?.()
                  handleClose()
                }}
                type="button"
              >
                <ScientificIcon name="clipboard" size={18} className="tool-icon" />
                <div className="tool-text">
                  <strong>EXPERIMENT LOG</strong>
                  <span>Empirical Observations</span>
                </div>
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Bottom Footer Navigator Trigger */}
      <nav aria-label="Experiment index" className="experiment-nav">
        <button
          aria-controls="experiment-index-drawer"
          aria-expanded={isOpen}
          aria-label="Toggle experiment index"
          className="experiment-trigger"
          onClick={handleToggle}
          type="button"
        >
          <span aria-hidden="true" className="trigger-orbit" />
          <span>{activeExperiment.index} / {activeExperiment.name}</span>
          <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
        </button>
      </nav>
    </>
  )
}

export default ExperimentNavigator
