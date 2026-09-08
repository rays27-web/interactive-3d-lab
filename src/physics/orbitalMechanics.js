/**
 * Orbital Mechanics Calculation Utilities
 * Interactive 3D Lab — Physics Foundation
 *
 * Pure, reusable functions for Keplerian & circular orbital dynamics.
 * All units are standard SI unless explicitly specified:
 * - Mass: kilograms (kg)
 * - Orbital radius: meters (m)
 * - Velocity: meters per second (m/s)
 * - Acceleration: meters per second squared (m/s²)
 * - Period: seconds (s)
 */

import { G_SI } from './gravity'

/**
 * Validate that a numerical input is a finite, strictly positive number.
 * @param {*} val - Numerical value
 * @returns {number|null} Validated positive number or null
 */
function validateStrictlyPositive(val) {
  if (typeof val !== 'number' || !Number.isFinite(val) || val <= 0) {
    return null
  }
  return val
}

/**
 * Validate that a numerical input is a finite, non-negative number.
 * @param {*} val - Numerical value
 * @returns {number|null} Validated non-negative number or null
 */
function validateNonNegative(val) {
  if (typeof val !== 'number' || !Number.isFinite(val) || val < 0) {
    return null
  }
  return val
}

/**
 * Calculate the circular orbital period around a central mass M at orbital radius r:
 * T = 2π · √(r³ / (G · M))
 *
 * @param {number} M - Central body mass in kilograms (kg)
 * @param {number} r - Semi-major axis / orbital radius in meters (m)
 * @param {number} [G=G_SI] - Gravitational constant
 * @returns {number} Orbital period in seconds (s). Returns 0 if inputs are invalid.
 */
export function calculateOrbitalPeriod(M, r, G = G_SI) {
  const validM = validateStrictlyPositive(M)
  const validR = validateStrictlyPositive(r)
  const validG = validateStrictlyPositive(G)

  if (validM === null || validR === null || validG === null) {
    return 0
  }

  const rCubed = validR * validR * validR
  const GM = validG * validM
  const term = rCubed / GM

  if (!Number.isFinite(term) || term <= 0) return 0

  const period = 2 * Math.PI * Math.sqrt(term)
  return Number.isFinite(period) ? period : 0
}

/**
 * Calculate centripetal acceleration for a body in circular motion with speed v at radius r:
 * a_c = v² / r
 *
 * @param {number} v - Orbital velocity in meters per second (m/s)
 * @param {number} r - Orbital radius in meters (m)
 * @returns {number} Centripetal acceleration in m/s². Returns 0 if inputs are invalid.
 */
export function calculateCentripetalAcceleration(v, r) {
  const validV = validateNonNegative(v)
  const validR = validateStrictlyPositive(r)

  if (validV === null || validR === null) {
    return 0
  }

  const a = (validV * validV) / validR
  return Number.isFinite(a) ? a : 0
}

/**
 * Calculate the Keplerian Harmonic constant ratio:
 * K = T² / r³
 * For circular Keplerian orbits around a common central mass, this ratio equals 4π² / (G · M).
 *
 * @param {number} periodSeconds - Orbital period in seconds (s)
 * @param {number} radiusMeters - Semi-major axis in meters (m)
 * @returns {number} Ratio in s² / m³. Returns 0 if inputs are invalid.
 */
export function calculateKeplerRatio(periodSeconds, radiusMeters) {
  const validT = validateStrictlyPositive(periodSeconds)
  const validR = validateStrictlyPositive(radiusMeters)

  if (validT === null || validR === null) {
    return 0
  }

  const tSq = validT * validT
  const rCu = validR * validR * validR

  const ratio = tSq / rCu
  return Number.isFinite(ratio) ? ratio : 0
}

/**
 * Calculate the semi-major axis from orbital period:
 * r = ³√((G · M · T²) / (4π²))
 *
 * @param {number} M - Central mass in kilograms (kg)
 * @param {number} periodSeconds - Orbital period in seconds (s)
 * @param {number} [G=G_SI] - Gravitational constant
 * @returns {number} Semi-major axis in meters (m). Returns 0 if inputs are invalid.
 */
export function calculateSemiMajorAxisFromPeriod(M, periodSeconds, G = G_SI) {
  const validM = validateStrictlyPositive(M)
  const validT = validateStrictlyPositive(periodSeconds)
  const validG = validateStrictlyPositive(G)

  if (validM === null || validT === null || validG === null) {
    return 0
  }

  const numerator = validG * validM * validT * validT
  const denominator = 4 * Math.PI * Math.PI
  const term = numerator / denominator

  if (!Number.isFinite(term) || term <= 0) return 0

  const r = Math.cbrt(term)
  return Number.isFinite(r) ? r : 0
}
