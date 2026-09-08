import { CELESTIAL_BODIES } from '../scenes/SolarSystemScene'

function PlanetSelector({ selectedPlanetId, onSelectPlanet }) {
  return (
    <nav aria-label="Solar System planetary selector" className="planet-selector-bar">
      <div className="planet-selector-scroll">
        {CELESTIAL_BODIES.map((body) => {
          const isSelected = selectedPlanetId === body.id
          return (
            <button
              aria-label={`Select ${body.name}`}
              aria-pressed={isSelected}
              className={`planet-selector-btn ${isSelected ? 'is-selected' : ''}`}
              key={body.id}
              onClick={() => onSelectPlanet(body.id)}
              type="button"
            >
              <span
                aria-hidden="true"
                className="planet-pip"
                style={{
                  backgroundColor: body.color,
                  boxShadow: isSelected ? `0 0 10px ${body.color}` : 'none',
                }}
              />
              <span className="planet-name">{body.name}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default PlanetSelector
