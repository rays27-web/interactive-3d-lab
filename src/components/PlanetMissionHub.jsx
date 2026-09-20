import React, { useEffect } from 'react'
import { EXPERIMENT_MISSIONS_DATA } from '../physics/experimentMissions'

export function PlanetMissionHub({
  isOpen,
  onToggleOpen,
  onClose,
  onOpenMission,
}) {
  const planetData = EXPERIMENT_MISSIONS_DATA.planet || {}
  const missions = planetData.missions || []

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

  return (
    <>
      {/* Compact Mission Launcher Trigger Button */}
      <button
        aria-expanded={isOpen}
        aria-label="Open Experiment Missions"
        className={`planet-mission-hub-trigger ${isOpen ? 'is-active' : ''}`}
        onClick={onToggleOpen}
        title="Open Experiment Missions"
        type="button"
      >
        <span aria-hidden="true" className="hub-trigger-dot">◯</span>
        <span className="hub-trigger-index">01</span>
        <span className="hub-trigger-sep">/</span>
        <span className="hub-trigger-name">PLANET</span>
        <span className="hub-trigger-mission-tag">MISSIONS</span>
        <span aria-hidden="true" className="hub-trigger-toggle">{isOpen ? '−' : '+'}</span>
        <span className="hub-hover-tooltip">Open Experiment Missions</span>
      </button>

      {/* Popover / Drawer when opened */}
      {isOpen && (
        <div className="planet-mission-hub-overlay">
          <div className="planet-mission-hub-backdrop" onClick={onClose} aria-hidden="true" />
          <div
            aria-label="Planet Experiment Missions"
            className="planet-mission-hub-drawer"
            role="dialog"
          >
            {/* Header */}
            <div className="hub-drawer-header">
              <div className="hub-title-group">
                <span className="hub-eyebrow">EXPERIMENT 01 · SCIENTIFIC MISSIONS</span>
                <h2 className="hub-heading">PLANET — GRAVITY &amp; SURFACE PHYSICS</h2>
                <p className="hub-subtitle">Select an interactive mission to test hypotheses with live 3D physics.</p>
              </div>
              <button
                aria-label="Close planet missions drawer"
                className="hub-close-btn"
                onClick={onClose}
                type="button"
              >
                ✕
              </button>
            </div>

            {/* Missions List */}
            <div className="hub-missions-list">
              {missions.map((mission, idx) => {
                const difficulties = ['INTERMEDIATE', 'FOUNDATIONAL', 'ADVANCED']
                const diffTag = difficulties[idx] || 'INTERMEDIATE'
                return (
                  <div key={mission.id} className="hub-mission-card">
                    <div className="hub-card-header">
                      <div className="hub-card-badges-row">
                        <span className="hub-mission-badge">MISSION {mission.number}</span>
                        <span className={`hub-diff-tag diff-${diffTag.toLowerCase()}`}>{diffTag}</span>
                      </div>
                      {mission.condition && (
                        <span className="hub-mission-param-tag">
                          {mission.condition.metric}: {mission.baselineParams?.rotationSpeed || 1.0}× ➔ {mission.condition.target}{mission.condition.unit || ''}
                        </span>
                      )}
                    </div>
                    <h3 className="hub-card-title">{mission.title}</h3>
                    <p className="hub-card-objective">
                      {idx === 0
                        ? 'Investigate how rotation changes a planet\'s shape, creating equatorial expansion and polar flattening.'
                        : idx === 1
                        ? 'Examine how atmospheric density alters planetary limb scattering and Rayleigh halo visibility.'
                        : 'Compare measured gravitational weight force (W = mg) across terrestrial and gas giant worlds.'}
                    </p>
                    <div className="hub-card-footer">
                      <button
                        className="hub-open-mission-btn"
                        onClick={() => {
                          onOpenMission(idx)
                          onClose()
                        }}
                        type="button"
                      >
                        <span>OPEN MISSION</span>
                        <span className="hub-btn-arrow">➔</span>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PlanetMissionHub
