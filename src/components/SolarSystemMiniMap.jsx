import { CELESTIAL_BODIES } from '../scenes/SolarSystemScene'

function SolarSystemMiniMap({ planetStates = [], selectedPlanetId, onSelectPlanet }) {
  // SVG coordinate bounds: -48 to +48 fits Neptune (orbit radius ~43)
  const maxExtent = 46

  return (
    <div aria-label="Solar System radar overview" className="sol-minimap">
      <div className="minimap-header">
        <span className="minimap-title">SYSTEM RADAR</span>
        <span className="minimap-hint">CLICK TO TARGET</span>
      </div>

      <svg className="minimap-svg" viewBox="-50 -50 100 100">
        {/* Orbital Track Rings */}
        {CELESTIAL_BODIES.slice(1).map((b) => (
          <circle
            className={`minimap-orbit ${selectedPlanetId === b.id ? 'is-selected' : ''}`}
            cx="0"
            cy="0"
            key={`orbit-${b.id}`}
            onClick={() => onSelectPlanet(b.id)}
            r={b.orbitRadius}
          />
        ))}

        {/* Central Sun */}
        <circle
          className={`minimap-sun ${selectedPlanetId === 'sun' ? 'is-selected' : ''}`}
          cx="0"
          cy="0"
          onClick={() => onSelectPlanet('sun')}
          r="2.8"
        />

        {/* Planet Position Pips */}
        {planetStates.map((state) => {
          if (state.id === 'sun') return null
          const isSelected = selectedPlanetId === state.id
          // Map x, z coordinates directly to SVG viewBox
          return (
            <g key={`pip-${state.id}`}>
              <circle
                className={`minimap-planet ${isSelected ? 'is-selected' : ''}`}
                cx={state.x}
                cy={state.z}
                fill={state.color}
                onClick={() => onSelectPlanet(state.id)}
                r={isSelected ? 2.4 : 1.6}
              >
                <title>{state.name}</title>
              </circle>
              {isSelected && (
                <circle
                  className="minimap-ping"
                  cx={state.x}
                  cy={state.z}
                  r="4.2"
                />
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default SolarSystemMiniMap
