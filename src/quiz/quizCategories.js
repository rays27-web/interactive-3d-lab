/**
 * 5 Core Gravitation Index Topics for the Physics Quiz Module
 * Exactly aligned with the Gravitation Index curriculum:
 * 01. Fundamental & Newton's Universal Law
 * 02. Acceleration Due to Gravity
 * 03. Gravitational Field & Potential
 * 04. Kepler's Laws of Planetary Motion
 * 05. Satellite & Escape Velocity
 */

export const QUIZ_TOPICS = [
  {
    id: 'fundamentalNewtonLaw',
    number: '01',
    name: "FUNDAMENTAL & NEWTON'S UNIVERSAL LAW",
    shortName: "Newton's Law",
    icon: '🌌',
    description: 'Universal force nature, inverse-square law, constant G, dimensions, Cavendish torsion balance, point masses, and vector superposition.',
  },
  {
    id: 'accelerationDueToGravity',
    number: '02',
    name: 'ACCELERATION DUE TO GRAVITY (g)',
    shortName: 'Gravity (g)',
    icon: '🌍',
    description: 'Surface gravity, variation with altitude, variation with depth, planetary rotation, latitude effect, and mass vs weight invariance.',
  },
  {
    id: 'gravitationalFieldPotential',
    number: '03',
    name: 'GRAVITATIONAL FIELD & POTENTIAL',
    shortName: 'Field & Potential',
    icon: '🧭',
    description: 'Field vector g⃗ = F⃗/m, scalar potential V = -GM/r, potential energy U = -GMm/r, equipotential surfaces, spherical shells, and field-potential gradient.',
  },
  {
    id: 'keplerLaws',
    number: '04',
    name: "KEPLER'S LAWS OF PLANETARY MOTION",
    shortName: "Kepler's Laws",
    icon: '🪐',
    description: 'Law of orbits (ellipses), areal velocity and angular momentum conservation, harmonic law T² ∝ a³, perihelion and aphelion dynamics.',
  },
  {
    id: 'satelliteEscapeVelocity',
    number: '05',
    name: 'SATELLITE & ESCAPE VELOCITY',
    shortName: 'Satellites & Escape',
    icon: '🛰️',
    description: 'Orbital velocity vo = √(GM/r), escape velocity ve = √(2GM/R), period of revolution, bound energy states, and geostationary orbits.',
  },
]

// Backward compatibility alias for any older component references
export const QUIZ_CATEGORIES = QUIZ_TOPICS
