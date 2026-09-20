import React, { useState } from 'react'

export function MissionObserveHUD({
  activeMission,
  onReturnToMission,
  onResetCalibration,
  sceneApi,
}) {
  const [isEquationMinimized, setIsEquationMinimized] = useState(false)

  const calibState = sceneApi?.getCalibrationState?.() || {}
  const angularVelocity = calibState.currentAngularVelocity || 2.5

  return (
    <aside
      aria-label="Mission 3D Observation HUD"
      className="mission-observe-hud"
      role="region"
    >
      {/* Top Banner */}
      <div className="observe-hud-header">
        <div className="observe-status-pill">
          <span className="observe-pulse-dot" aria-hidden="true" />
          <span className="observe-status-text">● SIMULATION RUNNING</span>
        </div>
        <div className="observe-mission-title-wrap">
          <span className="observe-mission-num">MISSION {activeMission?.number || '01'} · OBSERVE</span>
          <strong className="observe-mission-name">{activeMission?.title || 'Centrifugal Spin & Equatorial Bulge'}</strong>
        </div>
      </div>

      {/* Live Telemetry Metrics */}
      <div className="observe-telemetry-grid">
        <div className="observe-metric-card">
          <span className="metric-label">ANGULAR VELOCITY</span>
          <strong className="metric-val highlight">{angularVelocity.toFixed(1)}×</strong>
          <span className="metric-sub">ω = {angularVelocity.toFixed(1)} ω₀ (fast spin)</span>
        </div>

        <div className="observe-metric-card">
          <span className="metric-label">EQUATORIAL RADIUS (R<sub>e</sub>)</span>
          <strong className="metric-val text-green">6,486 km</strong>
          <span className="metric-sub delta-pos">+115 km (+1.8% expansion)</span>
        </div>

        <div className="observe-metric-card">
          <span className="metric-label">POLAR RADIUS (R<sub>p</sub>)</span>
          <strong className="metric-val text-coral">6,314 km</strong>
          <span className="metric-sub delta-neg">−57 km (−0.9% flattening)</span>
        </div>

        <div className="observe-metric-card">
          <span className="metric-label">EQUATORIAL GRAVITY (g<sub>eq</sub>)</span>
          <strong className="metric-val text-amber">9.60 m/s²</strong>
          <span className="metric-sub delta-neg">−0.18 m/s² centrifugal drop</span>
        </div>
      </div>

      {/* Governing Physics Equation Snippet */}
      <div className="observe-equation-box">
        <div className="observe-equation-head">
          <span className="eq-label">GOVERNING PHYSICS</span>
          <button
            type="button"
            className="observe-eq-toggle"
            onClick={() => setIsEquationMinimized(!isEquationMinimized)}
          >
            {isEquationMinimized ? 'SHOW' : 'HIDE'}
          </button>
        </div>
        {!isEquationMinimized && (
          <div className="observe-equation-content">
            <div className="observe-math-line">
              <span className="math-sym">a<sub>c</sub> = ω² R</span>
              <span className="math-sep">·</span>
              <span className="math-sym">g<sub>eff</sub> = g − ω² R</span>
            </div>
            <span className="observe-math-note">
              Centrifugal acceleration scales with ω²: (2.5)² = 6.25× baseline outward force at the equator.
            </span>
          </div>
        )}
      </div>

      {/* Footer Navigation Actions */}
      <div className="observe-hud-footer">
        {onResetCalibration && (
          <button
            type="button"
            className="observe-reset-btn"
            onClick={onResetCalibration}
            title="Reset rotation back to baseline 1.0×"
          >
            ↺ RESET
          </button>
        )}
        <button
          type="button"
          className="observe-return-btn"
          onClick={onReturnToMission}
        >
          <span>RETURN TO MISSION (STEP 04 OBSERVE)</span>
          <span className="return-arrow">➔</span>
        </button>
      </div>
    </aside>
  )
}

export default MissionObserveHUD
