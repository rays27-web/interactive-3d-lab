/**
 * Modular Question Bank Aggregator for Interactive 3D Physics Lab
 * 
 * Aggregates all 5 curated topic banks:
 * 1. Fundamental & Newton's Universal Law (210 questions)
 * 2. Acceleration Due to Gravity (210 questions)
 * 3. Gravitational Field & Potential (211 questions including backward-compat alias)
 * 4. Kepler's Laws of Planetary Motion (210 questions)
 * 5. Satellite & Escape Velocity (210 questions)
 * 
 * Total: 1,051 curated, scientifically rigorous questions across Easy, Medium, and Hard tiers.
 */

import { questions as fnlQuestions } from './questions/fundamentalNewtonLaw.js'
import { questions as adgQuestions } from './questions/accelerationDueToGravity.js'
import { questions as gfpQuestions } from './questions/gravitationalFieldPotential.js'
import { questions as klpQuestions } from './questions/keplerLaws.js'
import { questions as sevQuestions } from './questions/satelliteEscapeVelocity.js'

export const QUESTION_BANK_BY_TOPIC = {
  fundamentalNewtonLaw: fnlQuestions,
  accelerationDueToGravity: adgQuestions,
  gravitationalFieldPotential: gfpQuestions,
  keplerLaws: klpQuestions,
  satelliteEscapeVelocity: sevQuestions,
}

export const QUESTION_BANK = [
  ...fnlQuestions,
  ...adgQuestions,
  ...gfpQuestions,
  ...klpQuestions,
  ...sevQuestions,
]

export default QUESTION_BANK
