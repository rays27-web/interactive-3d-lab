/**
 * Panda Physics Tutor Configuration & Pedagogical Settings
 *
 * Provides tutor identity, explanation levels, default context structure,
 * and quick-start prompts for Class 11-12 & JEE Physics students.
 */

export const AI_TUTOR_NAME = 'Panda Physics Tutor'

export const TUTOR_LEVELS = {
  LEARN: {
    id: 'LEARN',
    label: 'LEARN',
    title: 'Class 11–12 Conceptual Understanding',
    description: 'First-principles explanations, visual analogies, symbol meanings, and clear derivations.',
  },
  JEE_MAIN: {
    id: 'JEE_MAIN',
    label: 'JEE MAIN',
    title: 'JEE Main Problem Solving',
    description: 'Standard formula applications, speed tricks, common traps, and pattern recognition.',
  },
  JEE_ADVANCED: {
    id: 'JEE_ADVANCED',
    label: 'JEE ADVANCED',
    title: 'JEE Advanced Rigor',
    description: 'Multi-concept analysis, vector calculus, limiting cases, and alternative smart methods.',
  },
}

export const TUTOR_TOPIC_LIST = [
  {
    id: 'fundamentalNewtonLaw',
    name: "Newton's Law",
    icon: '🌌',
    description: "Universal force F = G(m₁m₂)/r², constant G vs g, vector form, and superposition.",
    prompt: "Explain Newton's Universal Law of Gravitation",
  },
  {
    id: 'accelerationDueToGravity',
    name: 'Variation of g',
    icon: '🌍',
    description: 'Surface gravity, variation with altitude, depth, latitude, and Earth rotation.',
    prompt: 'Why does g decrease with height and depth?',
  },
  {
    id: 'gravitationalFieldPotential',
    name: 'Field & Potential',
    icon: '🧭',
    description: 'Field intensity E⃗ = -dV/dr, negative potential, potential energy, and shell theorems.',
    prompt: 'Why is gravitational potential always negative?',
  },
  {
    id: 'keplerLaws',
    name: "Kepler's Laws",
    icon: '🪐',
    description: 'Elliptical orbits, areal velocity conservation (angular momentum), and harmonic law T² ∝ a³.',
    prompt: "Explain Kepler's Second and Third Laws",
  },
  {
    id: 'satelliteEscapeVelocity',
    name: 'Satellites & Escape',
    icon: '🛰️',
    description: 'Escape velocity ve = √(2gR), orbital speed vo, binding energy, and geostationary orbits.',
    prompt: 'Explain escape velocity and orbital velocity',
  },
]

export const DEFAULT_EXAMPLE_PROMPTS = [
  'What does G mean?',
  'Why does g decrease with height?',
  'How does g change with depth?',
  'Explain Kepler’s Second and Third Laws',
  'Explain escape velocity step by step',
  'What is the relation between orbital and escape velocity?',
  'Why is gravitational potential negative?',
  'What is the gravitational field inside a spherical shell?',
  'Two masses 5 kg each are 2 m apart. What is the gravitational force?',
  'Where did I go wrong in my calculation?',
]

/**
 * Creates a normalized context object for the AI Tutor session
 */
export function createTutorContext({
  source = 'general', // 'experiment' | 'quiz' | 'index' | 'general'
  topic = 'gravitationalFieldPotential',
  experimentId = 'planet',
  telemetry = {},
  question = null,
  explanationLevel = 'LEARN',
} = {}) {
  return {
    source,
    topic,
    experimentId,
    telemetry: telemetry || {},
    question: question || null,
    explanationLevel: explanationLevel || 'LEARN',
  }
}

/**
 * Provider status states
 */
export const PROVIDER_STATUS = {
  CONFIGURED: 'CONFIGURED',       // Real AI backend connected
  LOCAL_FALLBACK: 'LOCAL_FALLBACK', // Built-in educational physics fallback active
  UNAVAILABLE: 'UNAVAILABLE',     // Network/provider failure
}
