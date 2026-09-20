/**
 * Question History Tracking for Interactive 3D Physics Lab Quiz
 * 
 * Manages client-side persistent history of answered/served questions
 * using localStorage with an in-memory fallback.
 * Guarantees "always new questions" by prioritizing unseen questions.
 */

const STORAGE_KEY = 'interactive_3d_lab_quiz_history_v1'

// In-memory fallback for environments without localStorage
let inMemoryHistory = new Set()

/**
 * Safely access localStorage
 */
function getStorage() {
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage
  }
  return null
}

/**
 * Retrieve all previously seen question IDs as a Set
 * @returns {Set<string>}
 */
export function getSeenQuestionIds() {
  const storage = getStorage()
  if (!storage) {
    return new Set(inMemoryHistory)
  }

  try {
    const raw = storage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) {
      return new Set(parsed)
    }
    return new Set()
  } catch (err) {
    console.warn('Failed to parse quiz question history from localStorage:', err)
    return new Set(inMemoryHistory)
  }
}

/**
 * Record one or more question IDs as answered / served
 * @param {string|string[]} questionIds 
 */
export function recordQuestionsAnswered(questionIds) {
  if (!questionIds) return
  const idsToAdd = Array.isArray(questionIds) ? questionIds : [questionIds]
  if (idsToAdd.length === 0) return

  const seenSet = getSeenQuestionIds()
  idsToAdd.forEach((id) => {
    if (id && typeof id === 'string') {
      seenSet.add(id)
      inMemoryHistory.add(id)
    }
  })

  const storage = getStorage()
  if (storage) {
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(Array.from(seenSet)))
    } catch (err) {
      console.warn('Failed to save quiz question history to localStorage:', err)
    }
  }
}

/**
 * Reset all recorded question history (client-side only)
 */
export function resetQuestionHistory() {
  inMemoryHistory.clear()
  const storage = getStorage()
  if (storage) {
    try {
      storage.removeItem(STORAGE_KEY)
    } catch (err) {
      console.warn('Failed to clear quiz question history from localStorage:', err)
    }
  }
}

/**
 * Count how many questions in the pool have not yet been seen
 * @param {Array} questions 
 * @param {Set<string>} [seenIds]
 * @returns {number}
 */
export function getUnseenQuestionCount(questions = [], seenIds = null) {
  const seen = seenIds || getSeenQuestionIds()
  let unseen = 0
  for (let i = 0; i < questions.length; i++) {
    if (!seen.has(questions[i].id)) {
      unseen++
    }
  }
  return unseen
}

/**
 * Filter pool into unseen vs seen questions
 * @param {Array} questions 
 * @param {Set<string>} [seenIds]
 * @returns {{ unseen: Array, seen: Array }}
 */
export function partitionByHistory(questions = [], seenIds = null) {
  const seen = seenIds || getSeenQuestionIds()
  const unseenPool = []
  const seenPool = []

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i]
    if (seen.has(q.id)) {
      seenPool.push(q)
    } else {
      unseenPool.push(q)
    }
  }

  return { unseen: unseenPool, seen: seenPool }
}
