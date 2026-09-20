/**
 * Lazy-Loading Question Bank Architecture for Interactive 3D Physics Lab
 *
 * WHY THIS LAZY LOADER EXISTS:
 * The 5 topic question modules contain 1,051 questions and total ~1.9 MB of data
 * (mathematical questions, LaTeX formulas, detailed 4-option derivations, and hints).
 * Statically importing them causes the entire 1.9 MB payload to be bundled into the
 * initial application bundle, slowing down initial page loads even if the user never
 * opens the quiz.
 *
 * WITH THIS LAZY LOADER:
 * 1. The initial application bundle loads 0 question bank files.
 * 2. When a student chooses a single topic (e.g. "Kepler's Laws"), ONLY that topic's
 *    file (~380 KB) is fetched on demand and cached in memory.
 * 3. In ALL-topics mode, all 5 banks are fetched in parallel only when starting the quiz.
 * 4. Lightweight counts and difficulty metadata are provided by `questionMetadata.js`
 *    so QuizStartScreen displays accurate statistics immediately and synchronously.
 */

import { getQuestionTopic } from './questionMetadata.js'

/**
 * Static mapping of topic IDs to dynamic import functions.
 * Using explicit, static paths allows Vite / Rollup to code-split each topic
 * into an independent chunk that is loaded strictly on demand.
 */
export const QUESTION_BANK_LOADERS = {
  fundamentalNewtonLaw: () => import('./questions/fundamentalNewtonLaw.js'),
  accelerationDueToGravity: () => import('./questions/accelerationDueToGravity.js'),
  gravitationalFieldPotential: () => import('./questions/gravitationalFieldPotential.js'),
  keplerLaws: () => import('./questions/keplerLaws.js'),
  satelliteEscapeVelocity: () => import('./questions/satelliteEscapeVelocity.js'),
}

/**
 * In-memory cache for loaded question banks.
 * Once a topic is fetched, subsequent quizzes on that topic read instantly from memory.
 */
export const QUESTION_BANK_BY_TOPIC = {
  fundamentalNewtonLaw: [],
  accelerationDueToGravity: [],
  gravitationalFieldPotential: [],
  keplerLaws: [],
  satelliteEscapeVelocity: [],
}

/**
 * In-memory flat collection of all loaded questions.
 */
export const QUESTION_BANK = []

/**
 * Internal helper to register newly loaded questions into the in-memory cache.
 */
function registerLoadedQuestions(topicId, questions) {
  QUESTION_BANK_BY_TOPIC[topicId] = questions
  questions.forEach((q) => {
    if (!QUESTION_BANK.some((existing) => existing.id === q.id)) {
      QUESTION_BANK.push(q)
    }
  })
}

/**
 * Load questions for a single topic on demand.
 * @param {string} topicId - Exact topic identifier
 * @returns {Promise<Array>} Array of question objects for the requested topic
 */
export async function loadTopicQuestions(topicId) {
  if (!topicId || !QUESTION_BANK_LOADERS[topicId]) {
    console.warn(`[Quiz Bank] Unknown or missing topic ID: "${topicId}"`)
    return []
  }

  // Return immediately if already cached in memory
  if (QUESTION_BANK_BY_TOPIC[topicId]?.length > 0) {
    return QUESTION_BANK_BY_TOPIC[topicId]
  }

  const loader = QUESTION_BANK_LOADERS[topicId]
  const module = await loader()
  const questions = module.questions || module.default || []

  registerLoadedQuestions(topicId, questions)
  return questions
}

/**
 * Load questions for multiple specified topics in parallel.
 * @param {string[]} [topicIds] - Array of topic identifiers, or all if omitted
 * @returns {Promise<Array>} Combined array of question objects
 */
export async function loadQuestionsForTopics(topicIds = null) {
  const topics = Array.isArray(topicIds) ? topicIds : Object.keys(QUESTION_BANK_LOADERS)
  const results = await Promise.all(topics.map((t) => loadTopicQuestions(t)))
  return results.flat()
}

/**
 * Load all 5 question banks in parallel (used when the user starts an ALL-topics quiz).
 * @returns {Promise<Array>} All 1,051 questions
 */
export async function loadAllQuestions() {
  return loadQuestionsForTopics(Object.keys(QUESTION_BANK_LOADERS))
}

/**
 * Load a single question by ID on demand (used by developer/test hook __LOAD_QUIZ_QUESTION_BY_ID__).
 * Resolves the question's topic from metadata, loads only that topic's module, and returns the question.
 * @param {string} id - Question ID (e.g. "FNL-E-001", "q-field-h03")
 * @returns {Promise<Object|null>} The loaded question object or null if not found
 */
export async function loadQuestionById(id) {
  if (!id) return null

  // Fast check: is it already in memory?
  const existing = QUESTION_BANK.find((q) => q.id === id)
  if (existing) return existing

  // Resolve topic from lightweight metadata index
  const topicId = getQuestionTopic(id)
  if (!topicId) {
    console.warn(`[Quiz Bank] Cannot resolve topic for question ID: "${id}"`)
    return null
  }

  const questions = await loadTopicQuestions(topicId)
  return questions.find((q) => q.id === id) || null
}

/**
 * Check whether a topic's question bank is currently loaded in memory.
 * @param {string} topicId
 * @returns {boolean}
 */
export function isTopicLoaded(topicId) {
  return Boolean(QUESTION_BANK_BY_TOPIC[topicId]?.length > 0)
}

export default QUESTION_BANK
