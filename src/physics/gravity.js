/**
 * Gravity Calculation Utilities
 * Interactive 3D Lab — Physics Foundation
 *
 * Pure, reusable functions for Newtonian gravitation.
 * All units are standard SI unless explicitly specified:
 * - Mass: kilograms (kg)
 * - Distance / Radius: meters (m)
 * - Velocity: meters per second (m/s)
 * - Acceleration: meters per second squared (m/s²)
 * - Force: Newtons (N = kg·m/s²)
 */

/** Standard Newtonian Gravitational Constant (CODATA 2018): m³·kg⁻¹·s⁻² */
export const G_SI = 6.67430e-11

/** Standard Solar Mass: kg */
export const MASS_SUN = 1.98847e30

/** Standard Earth Mass: kg */
export const MASS_EARTH = 5.9722e24

/** Mean Volumetric Earth Radius: meters */
export const RADIUS_EARTH = 6.371e6

/** Astronomical Unit (exact IAU definition): meters */
export const AU_METERS = 1.495978707e11

/**
 * Validate that a numerical input is a finite, non-negative number.
 * @param {*} val - Value to test
 * @returns {number|null} Validated number or null if invalid
 */
function validateNonNegative(val) {
  if (typeof val !== 'number' || !Number.isFinite(val) || val < 0) {
    return null
  }
  return val
}

/**
 * Validate that a distance/radius input is a finite, strictly positive number.
 * @param {*} val - Distance in meters
 * @returns {number|null} Validated distance or null if invalid (zero, negative, non-number)
 */
function validateStrictlyPositive(val) {
  if (typeof val !== 'number' || !Number.isFinite(val) || val <= 0) {
    return null
  }
  return val
}

/**
 * Calculate the magnitude of Newtonian gravitational attractive force between two masses:
 * F = G · (m₁ · m₂) / r²
 *
 * @param {number} m1 - Mass of body 1 in kilograms (kg)
 * @param {number} m2 - Mass of body 2 in kilograms (kg)
 * @param {number} r - Center-to-center distance in meters (m)
 * @param {number} [G=G_SI] - Gravitational constant
 * @returns {number} Gravitational force in Newtons (N). Returns 0 if inputs are invalid or r <= 0.
 */
export function calculateGravitationalForce(m1, m2, r, G = G_SI) {
  const validM1 = validateNonNegative(m1)
  const validM2 = validateNonNegative(m2)
  const validR = validateStrictlyPositive(r)
  const validG = validateStrictlyPositive(G)

  if (validM1 === null || validM2 === null || validR === null || validG === null) {
    return 0
  }

  const force = (validG * validM1 * validM2) / (validR * validR)
  return Number.isFinite(force) ? force : 0
}

/**
 * Calculate the gravitational acceleration at distance r from a central mass M:
 * g = G · M / r²
 *
 * @param {number} M - Central mass in kilograms (kg)
 * @param {number} r - Distance from center in meters (m)
 * @param {number} [G=G_SI] - Gravitational constant
 * @returns {number} Gravitational acceleration in m/s². Returns 0 if inputs are invalid.
 */
export function calculateGravitationalAcceleration(M, r, G = G_SI) {
  const validM = validateNonNegative(M)
  const validR = validateStrictlyPositive(r)
  const validG = validateStrictlyPositive(G)

  if (validM === null || validR === null || validG === null) {
    return 0
  }

  const g = (validG * validM) / (validR * validR)
  return Number.isFinite(g) ? g : 0
}

/**
 * Calculate the circular orbital velocity around a central mass M at orbital radius r:
 * v = √(G · M / r)
 *
 * @param {number} M - Central mass in kilograms (kg)
 * @param {number} r - Orbital radius in meters (m)
 * @param {number} [G=G_SI] - Gravitational constant
 * @returns {number} Orbital velocity in m/s. Returns 0 if inputs are invalid.
 */
export function calculateOrbitalVelocity(M, r, G = G_SI) {
  const validM = validateNonNegative(M)
  const validR = validateStrictlyPositive(r)
  const validG = validateStrictlyPositive(G)

  if (validM === null || validR === null || validG === null) {
    return 0
  }

  const vSq = (validG * validM) / validR
  if (!Number.isFinite(vSq) || vSq < 0) return 0
  const v = Math.sqrt(vSq)
  return Number.isFinite(v) ? v : 0
}

/**
 * Calculate the escape velocity from the surface of a spherical body with mass M and radius R:
 * v_e = √(2 · G · M / R)
 *
 * @param {number} M - Body mass in kilograms (kg)
 * @param {number} R - Body radius in meters (m)
 * @param {number} [G=G_SI] - Gravitational constant
 * @returns {number} Escape velocity in m/s. Returns 0 if inputs are invalid.
 */
export function calculateEscapeVelocity(M, R, G = G_SI) {
  const validM = validateNonNegative(M)
  const validR = validateStrictlyPositive(R)
  const validG = validateStrictlyPositive(G)

  if (validM === null || validR === null || validG === null) {
    return 0
  }

  const veSq = (2 * validG * validM) / validR
  if (!Number.isFinite(veSq) || veSq < 0) return 0
  const ve = Math.sqrt(veSq)
  return Number.isFinite(ve) ? ve : 0
}
