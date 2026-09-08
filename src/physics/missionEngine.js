/**
 * Mission Condition Evaluation Engine (Phase 44)
 * Evaluates live simulation state against measurable mathematical targets.
 * Supports comparators: '>=', '<=', 'approximately' (with tolerance), 'equals', 'between'.
 */

export function evaluateMissionCondition(condition, liveState = {}) {
  if (!condition) {
    return { isSuccess: false, progressPct: 0, statusText: 'No target condition defined' }
  }

  const { metric, comparator, target, tolerance = 0.05, min, max, unit = '' } = condition
  const currentVal = liveState[metric]

  if (currentVal === undefined || currentVal === null) {
    return {
      isSuccess: false,
      progressPct: 0,
      currentVal: '—',
      targetVal: `${target}${unit}`,
      statusText: `Waiting for ${metric} measurement...`,
    }
  }

  let isSuccess = false
  let progressPct = 0
  let statusText = ''

  switch (comparator) {
    case '>=': {
      isSuccess = currentVal >= target
      progressPct = Math.min(100, Math.max(0, Math.round((currentVal / target) * 100)))
      statusText = isSuccess
        ? `Target reached: ${currentVal.toFixed(2)}${unit} ≥ ${target}${unit}`
        : `Current: ${currentVal.toFixed(2)}${unit} (Needs ≥ ${target}${unit})`;
      break
    }
    case '<=': {
      isSuccess = currentVal <= target
      progressPct = isSuccess ? 100 : Math.min(100, Math.max(0, Math.round((target / currentVal) * 100)))
      statusText = isSuccess
        ? `Target reached: ${currentVal.toFixed(2)}${unit} ≤ ${target}${unit}`
        : `Current: ${currentVal.toFixed(2)}${unit} (Needs ≤ ${target}${unit})`;
      break
    }
    case 'approximately': {
      const diff = Math.abs(currentVal - target)
      isSuccess = diff <= tolerance
      const closeness = Math.max(0, 1 - diff / target)
      progressPct = Math.min(100, Math.round(closeness * 100))
      statusText = isSuccess
        ? `Target verified: ${currentVal.toFixed(2)}${unit} ≈ ${target}${unit} (±${tolerance})`
        : `Current: ${currentVal.toFixed(2)}${unit} (Target: ${target}${unit} ±${tolerance})`;
      break
    }
    case 'equals': {
      isSuccess = String(currentVal).toLowerCase() === String(target).toLowerCase()
      progressPct = isSuccess ? 100 : 0
      statusText = isSuccess
        ? `Condition verified: ${currentVal}`
        : `Selected: ${currentVal} (Target: ${target})`;
      break
    }
    case 'between': {
      isSuccess = currentVal >= min && currentVal <= max
      progressPct = isSuccess ? 100 : 50
      statusText = isSuccess
        ? `Within target range: ${currentVal.toFixed(2)} [${min} – ${max}]`
        : `Current: ${currentVal.toFixed(2)} (Target: [${min} – ${max}])`;
      break
    }
    default:
      isSuccess = false
      statusText = 'Unknown comparator'
  }

  return {
    isSuccess,
    progressPct,
    currentVal,
    targetVal: target,
    statusText,
  }
}
