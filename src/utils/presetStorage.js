/**
 * Safe, schema-validated localStorage utility for experiment parameter presets.
 * Defense-in-depth principles applied:
 * - Strict schema validation and bounds clamping.
 * - Prototype-pollution prevention.
 * - Graceful fallback on corrupted JSON or storage quota errors.
 * - Zero sensitive data handling.
 */

const STORAGE_KEY = 'i3d_lab_presets_v1'
const MAX_PRESETS_PER_EXPERIMENT = 6

/**
 * Safely parse and retrieve all stored presets from localStorage.
 * @returns {Record<string, Array<{ id: string, name: string, createdAt: number, params: Record<string, number|boolean> }>>}
 */
function getAllRawPresets() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return {}
    }
    // Filter out prototype pollution vectors
    const sanitized = Object.create(null)
    for (const [key, val] of Object.entries(parsed)) {
      if (key !== '__proto__' && key !== 'constructor' && key !== 'prototype' && Array.isArray(val)) {
        sanitized[key] = val
      }
    }
    return sanitized
  } catch {
    // If localStorage is blocked, corrupted, or unavailable (e.g. private mode)
    return {}
  }
}

/**
 * Validate and sanitize parameters against experiment control definitions.
 * Clamps numerical values strictly to [min, max], validates booleans, and drops unknown keys.
 * @param {Record<string, number|boolean>} rawParams
 * @param {Array<object>} controls
 * @returns {Record<string, number|boolean>}
 */
export function sanitizePresetParams(rawParams, controls = []) {
  if (!rawParams || typeof rawParams !== 'object') return {}
  const sanitized = {}

  for (const ctrl of controls) {
    if (!ctrl?.id) continue
    const val = rawParams[ctrl.id]

    if (ctrl.type === 'toggle') {
      sanitized[ctrl.id] = typeof val === 'boolean' ? val : Boolean(ctrl.default)
    } else {
      const num = typeof val === 'number' && !Number.isNaN(val) ? val : ctrl.default
      const clamped = Math.min(ctrl.max, Math.max(ctrl.min, num))
      sanitized[ctrl.id] = Number(clamped.toFixed(3))
    }
  }

  return sanitized
}

/**
 * Load validated presets for a given experiment ID.
 * @param {string} experimentId
 * @param {Array<object>} controls
 * @returns {Array<{ id: string, name: string, createdAt: number, params: Record<string, number|boolean> }>}
 */
export function loadPresets(experimentId, controls = []) {
  if (!experimentId) return []
  const all = getAllRawPresets()
  const list = all[experimentId]
  if (!Array.isArray(list)) return []

  const validated = []
  for (const item of list) {
    if (!item || typeof item !== 'object') continue
    const id = typeof item.id === 'string' && item.id.length > 0 ? item.id : `preset_${Date.now()}`
    const name = typeof item.name === 'string' && item.name.trim().length > 0
      ? item.name.trim().slice(0, 32)
      : 'SAVED PRESET'
    const createdAt = typeof item.createdAt === 'number' ? item.createdAt : Date.now()
    const params = sanitizePresetParams(item.params, controls)

    validated.push({ id, name, createdAt, params })
  }

  return validated
}

/**
 * Save a new preset for an experiment.
 * @param {string} experimentId
 * @param {string} name
 * @param {Record<string, number|boolean>} params
 * @param {Array<object>} controls
 * @returns {{ success: boolean, preset?: object, error?: string }}
 */
export function savePreset(experimentId, name, params, controls = []) {
  if (!experimentId) return { success: false, error: 'Invalid experiment ID' }

  try {
    const all = getAllRawPresets()
    const currentList = loadPresets(experimentId, controls)

    if (currentList.length >= MAX_PRESETS_PER_EXPERIMENT) {
      return { success: false, error: `Maximum of ${MAX_PRESETS_PER_EXPERIMENT} presets reached` }
    }

    const safeName = (name && typeof name === 'string' ? name.trim().slice(0, 32) : '') ||
      `PRESET 0${currentList.length + 1}`

    const newPreset = {
      id: `pre_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      name: safeName.toUpperCase(),
      createdAt: Date.now(),
      params: sanitizePresetParams(params, controls),
    }

    currentList.push(newPreset)
    all[experimentId] = currentList

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
    return { success: true, preset: newPreset }
  } catch (err) {
    return { success: false, error: 'Failed to write to local storage' }
  }
}

/**
 * Delete a specific preset by ID.
 * @param {string} experimentId
 * @param {string} presetId
 * @returns {boolean}
 */
export function deletePreset(experimentId, presetId) {
  if (!experimentId || !presetId) return false

  try {
    const all = getAllRawPresets()
    const currentList = all[experimentId]
    if (!Array.isArray(currentList)) return false

    all[experimentId] = currentList.filter((item) => item?.id !== presetId)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
    return true
  } catch {
    return false
  }
}

/**
 * Reset all saved presets for a given experiment.
 * @param {string} experimentId
 * @returns {boolean}
 */
export function resetAllPresets(experimentId) {
  if (!experimentId) return false

  try {
    const all = getAllRawPresets()
    delete all[experimentId]
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
    return true
  } catch {
    return false
  }
}
