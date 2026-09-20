/**
 * Lightweight Question Metadata Index for Interactive 3D Physics Lab
 *
 * Provides fast, synchronous metadata access (id, topic, difficulty, examLevel)
 * for all 1,051 questions without loading the 1.9 MB of question bodies,
 * formulas, options, explanations, and step-by-step solutions into the main bundle.
 *
 * Used by QuizStartScreen to render accurate topic counts and difficulty statistics.
 */

const TOPIC_CONFIGS = [
  { id: 'fundamentalNewtonLaw', prefix: 'FNL', easy: 70, medium: 70, hard: 70 },
  { id: 'accelerationDueToGravity', prefix: 'ADG', easy: 70, medium: 70, hard: 70 },
  {
    id: 'gravitationalFieldPotential',
    prefix: 'GFP',
    easy: 70,
    medium: 70,
    hard: 70,
    extra: [{ id: 'q-field-h03', difficulty: 'HARD', examLevel: 'JEE ADVANCED' }],
  },
  { id: 'keplerLaws', prefix: 'KLP', easy: 70, medium: 70, hard: 70 },
  { id: 'satelliteEscapeVelocity', prefix: 'SEV', easy: 70, medium: 70, hard: 70 },
]

export const QUESTION_METADATA = []
export const QUESTION_METADATA_BY_TOPIC = {}
export const QUESTION_ID_TO_TOPIC = {}

TOPIC_CONFIGS.forEach(({ id, prefix, easy, medium, hard, extra = [] }) => {
  const topicList = []

  const addTier = (tierLetter, count, difficulty, examLevel) => {
    for (let i = 1; i <= count; i++) {
      const qId = `${prefix}-${tierLetter}-${String(i).padStart(3, '0')}`
      const meta = { id: qId, topic: id, category: id, difficulty, examLevel }
      topicList.push(meta)
      QUESTION_METADATA.push(meta)
      QUESTION_ID_TO_TOPIC[qId] = id
    }
  }

  addTier('E', easy, 'EASY', 'CLASS 11-12')
  addTier('M', medium, 'MEDIUM', 'JEE MAIN')
  addTier('H', hard, 'HARD', 'JEE ADVANCED')

  extra.forEach((ex) => {
    const meta = { id: ex.id, topic: id, category: id, difficulty: ex.difficulty, examLevel: ex.examLevel }
    topicList.push(meta)
    QUESTION_METADATA.push(meta)
    QUESTION_ID_TO_TOPIC[ex.id] = id
  })

  QUESTION_METADATA_BY_TOPIC[id] = topicList
})

/**
 * Fast lookup for a question's parent topic ID from its question ID.
 * Supports prefix matching as well as exact lookup in the index.
 * @param {string} id - Question ID (e.g. "FNL-E-001", "q-field-h03")
 * @returns {string|null} Topic ID or null if unknown
 */
export function getQuestionTopic(id) {
  if (!id || typeof id !== 'string') return null
  if (QUESTION_ID_TO_TOPIC[id]) return QUESTION_ID_TO_TOPIC[id]

  if (id.startsWith('FNL-')) return 'fundamentalNewtonLaw'
  if (id.startsWith('ADG-')) return 'accelerationDueToGravity'
  if (id.startsWith('GFP-') || id === 'q-field-h03') return 'gravitationalFieldPotential'
  if (id.startsWith('KLP-')) return 'keplerLaws'
  if (id.startsWith('SEV-')) return 'satelliteEscapeVelocity'

  return null
}

export default QUESTION_METADATA
