/**
 * Scientific Value Formatter Utility
 * Interactive 3D Lab — Physics Foundation
 *
 * Formats physical quantities with appropriate SI prefixes, scientific notation,
 * and standard units, avoiding excessive decimals while maintaining precision
 * for Class 11 physics educational visualization.
 */

const SUPERSCRIPTS = {
  '-': '⁻',
  '0': '⁰',
  '1': '¹',
  '2': '²',
  '3': '³',
  '4': '⁴',
  '5': '⁵',
  '6': '⁶',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹',
}

/**
 * Convert an integer exponent into Unicode superscripts (e.g. 24 -> ²⁴, -11 -> ⁻¹¹)
 * @param {number|string} exp
 * @returns {string}
 */
export function toUnicodeExponent(exp) {
  const str = String(exp)
  let result = ''
  for (let i = 0; i < str.length; i++) {
    result += SUPERSCRIPTS[str[i]] || str[i]
  }
  return result
}

/**
 * Format a number into standard scientific notation (e.g. 5.972 × 10²⁴)
 * @param {number} val - Number to format
 * @param {number} [decimals=2] - Fractional decimals
 * @returns {string}
 */
export function formatScientificNotation(val, decimals = 2) {
  if (typeof val !== 'number' || !Number.isFinite(val)) {
    return '—'
  }
  if (val === 0) return '0'

  const exponentialStr = val.toExponential(decimals)
  const [mantissa, exponent] = exponentialStr.split('e')
  const expInt = parseInt(exponent, 10)

  if (expInt === 0) {
    return Number(mantissa).toFixed(decimals)
  }

  return `${mantissa} × 10${toUnicodeExponent(expInt)}`
}

/**
 * Format a physical value with its appropriate unit, choosing standard or scientific notation
 * depending on order of magnitude.
 *
 * @param {number} val - Numerical quantity
 * @param {string} [unit=''] - Physical unit string (e.g. 'kg', 'm/s', 'm/s²', 'N', 'AU')
 * @param {Object} [options={}] - Formatting options
 * @param {number} [options.decimals=2] - Number of decimal places
 * @param {boolean} [options.forceScientific=false] - Always format in scientific notation
 * @param {boolean} [options.useGrouping=true] - Format with locale commas if standard number
 * @returns {string} Formatted string, e.g. "5.972 × 10²⁴ kg" or "29.78 km/s"
 */
export function formatPhysicsValue(val, unit = '', options = {}) {
  const { decimals = 2, forceScientific = false, useGrouping = true } = options

  if (typeof val !== 'number' || !Number.isFinite(val)) {
    return '—'
  }

  const absVal = Math.abs(val)
  const unitSuffix = unit ? ` ${unit}` : ''

  if (val === 0) {
    return `0${unitSuffix}`
  }

  // Large or very small magnitudes trigger scientific notation unless forced otherwise
  const isExtreme = absVal >= 1e5 || (absVal < 0.01 && absVal > 0)

  if (forceScientific || isExtreme) {
    return `${formatScientificNotation(val, decimals)}${unitSuffix}`
  }

  // Standard readable floating point
  let numStr
  if (useGrouping && absVal >= 1000) {
    numStr = val.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  } else {
    numStr = val.toFixed(decimals)
  }

  return `${numStr}${unitSuffix}`
}
