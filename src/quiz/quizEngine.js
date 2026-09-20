import { QUESTION_BANK, QUESTION_BANK_BY_TOPIC } from './questionBank.js'
import { QUIZ_TOPICS, QUIZ_CATEGORIES } from './quizCategories.js'
import {
  getSeenQuestionIds,
  getUnseenQuestionCount,
  partitionByHistory,
} from './questionHistory.js'

/**
 * Retrieve the available question pool matching exact topic and difficulty criteria.
 * ZERO topic leak and ZERO difficulty leak.
 * 
 * @param {Object} options
 * @param {string} options.topic - 'all' | 'fundamentalNewtonLaw' | 'accelerationDueToGravity' | etc.
 * @param {string} options.categoryId - alias for topic for backward compatibility
 * @param {string} options.difficulty - 'ALL' | 'EASY' | 'MEDIUM' | 'HARD'
 * @param {string} options.level - 'MIXED' | 'CLASS 11-12' | 'JEE MAIN' | 'JEE ADVANCED' (optional secondary filter)
 * @returns {Array} Matching questions from the question bank
 */
export function getAvailableQuestions({ topic = 'all', categoryId, difficulty = 'ALL', level = 'MIXED' } = {}) {
  const topicKey = topic !== 'all' ? topic : (categoryId && categoryId !== 'all' ? categoryId : 'all')

  let pool = [...QUESTION_BANK]

  // 1. Strict Topic Filtering
  if (topicKey && topicKey !== 'all') {
    pool = pool.filter((q) => q.topic === topicKey || q.category === topicKey)
  }

  // 2. Strict Difficulty Filtering
  if (difficulty && difficulty !== 'ALL' && difficulty !== 'MIXED') {
    pool = pool.filter((q) => q.difficulty === difficulty)
  } else if (level && level !== 'MIXED') {
    // Secondary fallback to exam level if difficulty wasn't explicitly selected
    pool = pool.filter((q) => q.examLevel === level)
  }

  return pool
}

/**
 * Get count of total available and unseen questions for given criteria
 */
export function getAvailableQuestionStats(options = {}) {
  const pool = getAvailableQuestions(options)
  const seenIds = getSeenQuestionIds()
  const unseenCount = getUnseenQuestionCount(pool, seenIds)

  return {
    totalAvailable: pool.length,
    unseenAvailable: unseenCount,
    seenAvailable: pool.length - unseenCount,
  }
}

/**
 * Get count of available questions for given topic and difficulty
 */
export function getAvailableQuestionCount(options = {}) {
  return getAvailableQuestions(options).length
}

/**
 * Shuffle an array in place using Fisher-Yates algorithm
 */
function shuffleArray(arr) {
  const array = [...arr]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

/**
 * Filter and sample questions according to user criteria with strict validation.
 * 
 * Guaranteed:
 * - 100% of questions belong strictly to the chosen topic.
 * - 100% of questions match the chosen difficulty (unless ALL/MIXED is selected).
 * - "Always new questions": strictly prioritizes unseen questions from history.
 * - Exact requested count returned if available in the eligible pool.
 *
 * @param {Object} options
 * @param {string} options.topic - Topic ID or 'all'
 * @param {string} options.categoryId - Backward compatibility alias
 * @param {string} options.difficulty - 'EASY' | 'MEDIUM' | 'HARD' | 'ALL'
 * @param {string} options.level - Exam level
 * @param {number} options.count - Requested question count (10, 20, 30, 50)
 * @param {boolean} options.preferUnseen - If true, prioritizes questions not yet seen
 * @param {boolean} options.includeSeenIfExhausted - If true, fills with seen questions if unseen are insufficient
 * @returns {Array} Array of sampled questions with attached metadata
 */
export function filterAndSampleQuestions({
  topic = 'all',
  categoryId,
  difficulty = 'MEDIUM',
  level = 'MIXED',
  count = 10,
  preferUnseen = true,
  includeSeenIfExhausted = true,
} = {}) {
  // Step 1 & 2: Strict Topic and Difficulty Isolation
  const pool = getAvailableQuestions({ topic, categoryId, difficulty, level })

  const seenIds = getSeenQuestionIds()
  const { unseen, seen } = partitionByHistory(pool, seenIds)

  const isAllCount = count === 'ALL' || count === 'all'
  const targetCount = isAllCount
    ? pool.length
    : Math.min(pool.length, Math.max(1, Number(count) || 10))

  let selected = []

  if (preferUnseen) {
    const shuffledUnseen = shuffleArray(unseen)

    if (shuffledUnseen.length >= targetCount) {
      // Sufficient unseen questions exist: take strictly from unseen pool
      selected = shuffledUnseen.slice(0, targetCount)
    } else {
      // Unseen questions are fewer than requested count
      selected = [...shuffledUnseen]

      if (includeSeenIfExhausted) {
        // Fill the remainder from the seen pool (shuffled)
        const needed = targetCount - selected.length
        const shuffledSeen = shuffleArray(seen)
        const filler = shuffledSeen.slice(0, needed)
        selected = [...selected, ...filler]
      }
    }
  } else {
    // If not preferring unseen, shuffle the entire eligible pool
    const shuffledPool = shuffleArray(pool)
    selected = shuffledPool.slice(0, Math.min(targetCount, shuffledPool.length))
  }

  // Final Fisher-Yates shuffle of the selected questions
  const finalResult = shuffleArray(selected)

  // Attach execution metadata
  finalResult.requestedCount = isAllCount ? pool.length : targetCount
  finalResult.availableCount = pool.length
  finalResult.unseenAvailable = unseen.length
  finalResult.seenAvailable = seen.length
  finalResult.isPartial = finalResult.length < targetCount
  finalResult.isExhausted = unseen.length === 0

  return finalResult
}

/**
 * Evaluate completed quiz and generate topic breakdowns and diagnostic insights
 * @param {Array} questions - The quiz questions
 * @param {Object} userAnswers - Map of { [questionId]: 'A'|'B'|'C'|'D' }
 * @returns {Object} Evaluation summary
 */
export function evaluateQuizSession(questions = [], userAnswers = {}) {
  let score = 0
  let answeredCount = 0

  const topicStats = {}
  QUIZ_TOPICS.forEach((top) => {
    topicStats[top.id] = {
      id: top.id,
      name: top.name,
      shortName: top.shortName,
      icon: top.icon,
      total: 0,
      correct: 0,
    }
  })

  const detailedResults = questions.map((q, idx) => {
    const chosen = userAnswers[q.id]
    const isAnswered = chosen !== undefined && chosen !== null
    const isCorrect = isAnswered && chosen === q.correctAnswer

    if (isAnswered) answeredCount++
    if (isCorrect) score++

    const topId = q.topic || q.category
    if (topicStats[topId]) {
      topicStats[topId].total++
      if (isCorrect) topicStats[topId].correct++
    }

    return {
      index: idx + 1,
      question: q,
      chosen,
      correctAnswer: q.correctAnswer,
      isCorrect,
    }
  })

  const total = questions.length
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0

  return {
    total,
    score,
    answeredCount,
    percentage,
    detailedResults,
    topicBreakdown: Object.values(topicStats).filter((t) => t.total > 0),
  }
}
