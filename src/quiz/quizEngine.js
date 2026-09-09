import { QUESTION_BANK } from './questionBank'
import { QUIZ_CATEGORIES } from './quizCategories'

/**
 * Filter and select questions according to user criteria
 * @param {Object} options
 * @param {string} options.level - 'CLASS 11-12' | 'JEE MAIN' | 'JEE ADVANCED' | 'MIXED'
 * @param {string} options.categoryId - 'all' or category ID like 'cat-01'
 * @param {number} options.count - 10, 20, 30, 50
 * @returns {Array} Selected question objects
 */
export function filterAndSampleQuestions({ level = 'MIXED', categoryId = 'all', count = 10 }) {
  let pool = [...QUESTION_BANK]

  // Filter by category
  if (categoryId && categoryId !== 'all') {
    pool = pool.filter((q) => q.category === categoryId)
  }

  // Filter by preparation level
  if (level && level !== 'MIXED') {
    pool = pool.filter((q) => q.examLevel === level)
  }

  // If pool is smaller than requested, fallback to including mixed levels from same category if applicable
  if (pool.length === 0) {
    pool = [...QUESTION_BANK]
  }

  // Shuffle pool using Fisher-Yates
  const shuffled = [...pool]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  // Return requested count
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

/**
 * Evaluate completed quiz and generate category breakdowns and diagnostic insights
 * @param {Array} questions - The quiz questions
 * @param {Object} userAnswers - Map of { [questionId]: 'A'|'B'|'C'|'D' }
 * @returns {Object} Evaluation summary
 */
export function evaluateQuizSession(questions = [], userAnswers = {}) {
  let score = 0
  let answeredCount = 0

  const categoryStats = {}
  QUIZ_CATEGORIES.forEach((cat) => {
    categoryStats[cat.id] = {
      id: cat.id,
      name: cat.name,
      shortName: cat.shortName,
      icon: cat.icon,
      total: 0,
      correct: 0,
    }
  })

  const detailedResults = questions.map((q, idx) => {
    const chosen = userAnswers[q.id]
    const isAnswered = Boolean(chosen)
    const isCorrect = chosen === q.correctAnswer

    if (isAnswered) answeredCount++
    if (isCorrect) score++

    if (categoryStats[q.category]) {
      categoryStats[q.category].total += 1
      if (isCorrect) {
        categoryStats[q.category].correct += 1
      }
    }

    return {
      index: idx + 1,
      question: q,
      chosen,
      isAnswered,
      isCorrect,
    }
  })

  const total = questions.length
  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0

  // Filter categories that had questions in this session
  const categoryBreakdown = Object.values(categoryStats)
    .filter((c) => c.total > 0)
    .map((c) => {
      const catAccuracy = Math.round((c.correct / c.total) * 100)
      return {
        ...c,
        accuracy: catAccuracy,
      }
    })

  // Diagnostic strengths (>= 80%) & needs practice (< 60%)
  const strengths = categoryBreakdown
    .filter((c) => c.accuracy >= 80)
    .map((c) => c.name)

  const needsPractice = categoryBreakdown
    .filter((c) => c.accuracy < 60)
    .map((c) => c.name)

  return {
    score,
    total,
    accuracy,
    answeredCount,
    unansweredCount: total - answeredCount,
    categoryBreakdown,
    strengths,
    needsPractice,
    detailedResults,
  }
}
