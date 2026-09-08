import { useState } from 'react'
import InfoTooltip from './InfoTooltip'

const CAMERA_VIEWS = [
  {
    id: 'system',
    label: 'FULL SYSTEM',
    tooltip: 'Wide overview of all 8 planetary orbits around the central Sun',
  },
  {
    id: 'top',
    label: 'TOP VIEW',
    tooltip: 'High-angle orthogonal view highlighting orbital spacing and circular tracks',
  },
  {
    id: 'orbit',
    label: 'ORBIT VIEW',
    tooltip: 'Angled 3D orbital perspective showcasing orbital inclination and velocity',
  },
  {
    id: 'follow',
    label: 'FOLLOW PLANET',
    tooltip: 'Smooth tracking camera locked to the selected planet while keeping the Sun in view',
  },
]

const SPEED_PRESETS = [0.25, 0.5, 1.0, 2.0]

function SolarSystemToolbar({
  cameraView = 'system',
  onSelectCameraView,
  toggles = {
    showOrbits: true,
    showVelocityVectors: false,
    showGravityVectors: false,
    showDistance: false,
  },
  onToggleVisual,
  isPaused = false,
  onTogglePause,
  simSpeed = 1.0,
  onSetSpeed,
  selectedPlanet,
  onResetOrbits,
}) {
  const [showScaleModal, setShowScaleModal] = useState(false)

  return (
    <div aria-label="Solar System physics controls" className="sol-physics-toolbar">
      {/* Scale Notice Banner */}
      <div className="sol-scale-banner">
        <span className="sol-scale-badge">⚠️ SCALE NOTICE</span>
        <span className="sol-scale-text">
          Visual scale is compressed — planet sizes and distances are adjusted for visibility.
        </span>
        <button
          aria-expanded={showScaleModal}
          className="sol-scale-explain-btn"
          onClick={() => setShowScaleModal((prev) => !prev)}
          type="button"
        >
          {showScaleModal ? 'HIDE DETAILS ▲' : 'WHY? ▼'}
        </button>
      </div>

      {showScaleModal && (
        <div className="sol-scale-drawer" role="region" aria-label="Scale Explanation">
          <p className="sol-scale-drawer-text">
            <strong>Why are distances compressed?</strong> In our real Solar System, the Sun is 109 times wider than Earth, and Neptune is 30 times farther away than Earth. If drawn to exact true scale on this screen, the planets would be microscopic sub-pixel specks separated by hundreds of meters of pitch-black void! We compress radial distances so you can visually observe and compare real Keplerian orbital dynamics simultaneously.
          </p>
        </div>
      )}

      <div className="sol-toolbar-main">
        {/* Camera Views Group */}
        <div className="sol-toolbar-group">
          <span className="sol-group-label">CAMERA VIEW</span>
          <div className="sol-btn-row">
            {CAMERA_VIEWS.map((cam) => {
              const isActive = cameraView === cam.id
              const isDisabled = cam.id === 'follow' && !selectedPlanet
              return (
                <button
                  aria-pressed={isActive}
                  className={`sol-tool-btn ${isActive ? 'is-active' : ''}`}
                  disabled={isDisabled}
                  key={cam.id}
                  onClick={() => onSelectCameraView(cam.id)}
                  title={isDisabled ? 'Select a planet first to follow' : cam.tooltip}
                  type="button"
                >
                  {cam.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Visual Overlays / Toggles Group */}
        <div className="sol-toolbar-group">
          <span className="sol-group-label">PHYSICAL VECTORS</span>
          <div className="sol-btn-row">
            <label className={`sol-toggle-chip ${toggles.showOrbits ? 'is-checked' : ''}`}>
              <input
                checked={toggles.showOrbits}
                onChange={() => onToggleVisual('showOrbits')}
                type="checkbox"
              />
              <span>Orbit Path</span>
              <InfoTooltip
                ariaLabel="Info about Orbit Path"
                definition="Geometric orbital ellipse swept out by the celestial body over one complete revolution."
                significance="Reveals spacing and Keplerian harmony across the solar system."
                title="Orbital Path"
              />
            </label>

            <label className={`sol-toggle-chip ${toggles.showVelocityVectors ? 'is-checked' : ''}`}>
              <input
                checked={toggles.showVelocityVectors}
                onChange={() => onToggleVisual('showVelocityVectors')}
                type="checkbox"
              />
              <span>Velocity (v)</span>
              <InfoTooltip
                ariaLabel="Info about Velocity Vector"
                definition="Instantaneous tangential vector pointing in direction of forward momentum."
                significance="Without gravity, inertia would carry the planet along this straight velocity vector into deep space."
                title="Orbital Velocity Vector"
              />
            </label>

            <label className={`sol-toggle-chip ${toggles.showGravityVectors ? 'is-checked' : ''}`}>
              <input
                checked={toggles.showGravityVectors}
                onChange={() => onToggleVisual('showGravityVectors')}
                type="checkbox"
              />
              <span>Gravity (F_g)</span>
              <InfoTooltip
                ariaLabel="Info about Gravity Direction"
                definition="Centripetal gravitational pull directed straight toward the Sun's center of mass."
                significance="Continuously accelerates the planet perpendicular to velocity, curving its trajectory into a closed orbit."
                title="Centripetal Gravitational Vector"
              />
            </label>

            <label className={`sol-toggle-chip ${toggles.showDistance ? 'is-checked' : ''}`}>
              <input
                checked={toggles.showDistance}
                onChange={() => onToggleVisual('showDistance')}
                type="checkbox"
              />
              <span>Distance (r)</span>
              <InfoTooltip
                ariaLabel="Info about Distance Line"
                definition="Radial vector distance connecting the Sun's center to the planet."
                significance="Orbital period scales as T² ∝ r³ (Kepler's Third Law) and gravity weakens as 1/r²."
                title="Radial Distance"
              />
            </label>
          </div>
        </div>

        {/* Playback Speed & Controls Group */}
        <div className="sol-toolbar-group">
          <span className="sol-group-label">SIMULATION SPEED</span>
          <div className="sol-btn-row">
            <button
              aria-label={isPaused ? 'Resume simulation' : 'Pause simulation'}
              className={`sol-tool-btn sol-pause-btn ${isPaused ? 'is-paused' : ''}`}
              onClick={onTogglePause}
              type="button"
            >
              {isPaused ? '▶ RESUME' : '⏸ PAUSE'}
            </button>

            {SPEED_PRESETS.map((speed) => {
              const isActive = !isPaused && Math.abs(simSpeed - speed) < 0.05
              return (
                <button
                  aria-pressed={isActive}
                  className={`sol-tool-btn sol-speed-btn ${isActive ? 'is-active' : ''}`}
                  key={speed}
                  onClick={() => onSetSpeed(speed)}
                  type="button"
                >
                  {speed}×
                </button>
              )
            })}

            {onResetOrbits && (
              <button
                className="sol-tool-btn sol-reset-btn"
                onClick={onResetOrbits}
                title="Reset all orbital velocities and distances to circular Keplerian baseline"
                type="button"
              >
                ↺ RESET ORBITS
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolarSystemToolbar
