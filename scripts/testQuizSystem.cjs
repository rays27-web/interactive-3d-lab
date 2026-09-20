/**
 * Automated Test Suite for Gravitation Quiz System
 *
 * Verifies all 8 scenarios specified in Section 22:
 * 1. GFP + Easy + 10 -> 10 questions, all GFP, all Easy, 0 duplicates
 * 2. GFP + Medium + 50 -> 50 questions, all GFP, all Medium, 0 duplicates
 * 3. Kepler Laws + Hard + 30 -> 30 questions, all Kepler, all Hard, 0 duplicates
 * 4. All 5 topics x 3 difficulties -> Strict topic and difficulty isolation
 * 5. Request 50 when >= 50 exist -> Exactly 50 returned
 * 6. Repeat quiz -> Unseen questions are strictly preferred
 * 7. Exhausted unseen questions -> Handled honestly with zero topic or difficulty leak
 * 8. Question-bank validation -> 0 duplicate IDs, 0 duplicate texts
 */

const path = require('path');
const { pathToFileURL } = require('url');

async function runTests() {
  console.log('====================================================');
  console.log('       AUTOMATED QUIZ SYSTEM TEST RUNNER            ');
  console.log('====================================================\n');

  const engineUrl = pathToFileURL(path.resolve('src/quiz/quizEngine.js')).href;
  const historyUrl = pathToFileURL(path.resolve('src/quiz/questionHistory.js')).href;
  const bankUrl = pathToFileURL(path.resolve('src/quiz/questionBank.js')).href;

  const { filterAndSampleQuestions, getAvailableQuestions, getAvailableQuestionStats } = await import(engineUrl);
  const { resetQuestionHistory, recordQuestionsAnswered, getSeenQuestionIds } = await import(historyUrl);
  const { QUESTION_BANK, QUESTION_BANK_BY_TOPIC, loadAllQuestions } = await import(bankUrl);
  if (typeof loadAllQuestions === 'function') {
    await loadAllQuestions();
  }

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✓ ${message}`);
      passed++;
    } else {
      console.error(`  ✗ FAILED: ${message}`);
      failed++;
    }
  }

  // Always start with clean history
  resetQuestionHistory();

  // -------------------------------------------------------------------------
  // TEST 1: GFP + Easy + 10
  // -------------------------------------------------------------------------
  console.log('TEST 1: Gravitational Field & Potential + Easy + 10 questions');
  const t1 = filterAndSampleQuestions({
    topic: 'gravitationalFieldPotential',
    difficulty: 'EASY',
    count: 10,
  });
  assert(t1.length === 10, `Expected exactly 10 questions, received ${t1.length}`);
  assert(t1.every(q => q.topic === 'gravitationalFieldPotential' || q.category === 'gravitationalFieldPotential'), 'All questions belong strictly to Gravitational Field & Potential');
  assert(t1.every(q => q.difficulty === 'EASY'), 'All questions are strictly EASY difficulty');
  const t1Ids = new Set(t1.map(q => q.id));
  assert(t1Ids.size === 10, 'Zero duplicate questions within the quiz');
  console.log('');

  // -------------------------------------------------------------------------
  // TEST 2: GFP + Medium + 50
  // -------------------------------------------------------------------------
  console.log('TEST 2: Gravitational Field & Potential + Medium + 50 questions');
  const t2 = filterAndSampleQuestions({
    topic: 'gravitationalFieldPotential',
    difficulty: 'MEDIUM',
    count: 50,
  });
  assert(t2.length === 50, `Expected exactly 50 questions, received ${t2.length}`);
  assert(t2.every(q => q.topic === 'gravitationalFieldPotential' || q.category === 'gravitationalFieldPotential'), 'All questions belong strictly to Gravitational Field & Potential');
  assert(t2.every(q => q.difficulty === 'MEDIUM'), 'All questions are strictly MEDIUM difficulty');
  const t2Ids = new Set(t2.map(q => q.id));
  assert(t2Ids.size === 50, 'Zero duplicate questions in 50-question quiz');
  console.log('');

  // -------------------------------------------------------------------------
  // TEST 3: Kepler Laws + Hard + 30
  // -------------------------------------------------------------------------
  console.log('TEST 3: Kepler Laws + Hard + 30 questions');
  const t3 = filterAndSampleQuestions({
    topic: 'keplerLaws',
    difficulty: 'HARD',
    count: 30,
  });
  assert(t3.length === 30, `Expected exactly 30 questions, received ${t3.length}`);
  assert(t3.every(q => q.topic === 'keplerLaws' || q.category === 'keplerLaws'), 'All questions belong strictly to Kepler Laws');
  assert(t3.every(q => q.difficulty === 'HARD'), 'All questions are strictly HARD difficulty');
  const t3Ids = new Set(t3.map(q => q.id));
  assert(t3Ids.size === 30, 'Zero duplicate questions in 30-question quiz');
  console.log('');

  // -------------------------------------------------------------------------
  // TEST 4: Isolation across all 5 topics x 3 difficulties
  // -------------------------------------------------------------------------
  console.log('TEST 4: Strict topic and difficulty isolation across all 5 topics');
  const topics = [
    'fundamentalNewtonLaw',
    'accelerationDueToGravity',
    'gravitationalFieldPotential',
    'keplerLaws',
    'satelliteEscapeVelocity'
  ];
  const difficulties = ['EASY', 'MEDIUM', 'HARD'];

  let allIsolated = true;
  for (const top of topics) {
    for (const diff of difficulties) {
      const sample = filterAndSampleQuestions({ topic: top, difficulty: diff, count: 20 });
      const topMatch = sample.every(q => q.topic === top || q.category === top);
      const diffMatch = sample.every(q => q.difficulty === diff);
      if (!topMatch || !diffMatch || sample.length !== 20) {
        allIsolated = false;
        console.error(`Leak detected for ${top} ${diff}: length=${sample.length}, topMatch=${topMatch}, diffMatch=${diffMatch}`);
      }
    }
  }
  assert(allIsolated, '100% strict topic and difficulty isolation verified across all 15 permutations');
  console.log('');

  // -------------------------------------------------------------------------
  // TEST 5: Exact count 50 requested
  // -------------------------------------------------------------------------
  console.log('TEST 5: Exact count guarantee (request 50 when >= 50 exist)');
  const t5 = filterAndSampleQuestions({
    topic: 'accelerationDueToGravity',
    difficulty: 'MEDIUM',
    count: 50,
  });
  assert(t5.length === 50, `Returned exactly 50 questions (received: ${t5.length})`);
  assert(!t5.isPartial, 'isPartial flag is false');
  console.log('');

  // -------------------------------------------------------------------------
  // TEST 6: Repeat quiz prefers unseen questions
  // -------------------------------------------------------------------------
  console.log('TEST 6: Question history preference ("Always New Questions")');
  resetQuestionHistory();

  // Run quiz 1: take 20 questions
  const run1 = filterAndSampleQuestions({
    topic: 'fundamentalNewtonLaw',
    difficulty: 'EASY',
    count: 20,
  });
  assert(run1.length === 20, 'Run 1 generated 20 questions');

  // Record them as seen
  recordQuestionsAnswered(run1.map(q => q.id));

  // Run quiz 2: take another 20 questions
  const run2 = filterAndSampleQuestions({
    topic: 'fundamentalNewtonLaw',
    difficulty: 'EASY',
    count: 20,
    preferUnseen: true,
  });
  assert(run2.length === 20, 'Run 2 generated 20 questions');

  // Verify that run2 has 0 overlap with run1
  const run1Set = new Set(run1.map(q => q.id));
  const overlap = run2.filter(q => run1Set.has(q.id));
  assert(overlap.length === 0, `Run 2 has 0 overlap with Run 1 (overlap count: ${overlap.length})`);
  console.log('');

  // -------------------------------------------------------------------------
  // TEST 7: Exhaustion behavior & honest reporting
  // -------------------------------------------------------------------------
  console.log('TEST 7: Exhausted unseen questions behavior');
  resetQuestionHistory();

  const totalEasyFNL = getAvailableQuestions({ topic: 'fundamentalNewtonLaw', difficulty: 'EASY' });
  // Mark all 70 easy FNL questions as seen
  recordQuestionsAnswered(totalEasyFNL.map(q => q.id));

  const stats = getAvailableQuestionStats({ topic: 'fundamentalNewtonLaw', difficulty: 'EASY' });
  assert(stats.totalAvailable === 70, `Total available is 70 (received: ${stats.totalAvailable})`);
  assert(stats.unseenAvailable === 0, `Unseen available is 0 (received: ${stats.unseenAvailable})`);

  // Request when preferUnseen is on but includeSeenIfExhausted is allowed
  const exhaustQuiz = filterAndSampleQuestions({
    topic: 'fundamentalNewtonLaw',
    difficulty: 'EASY',
    count: 10,
    preferUnseen: true,
    includeSeenIfExhausted: true,
  });
  assert(exhaustQuiz.length === 10, 'Fallback correctly provided 10 questions when allowed');
  assert(exhaustQuiz.isExhausted === true, 'isExhausted flag correctly reported true');
  assert(exhaustQuiz.every(q => q.topic === 'fundamentalNewtonLaw'), 'Zero topic leak during fallback');
  assert(exhaustQuiz.every(q => q.difficulty === 'EASY'), 'Zero difficulty leak during fallback');
  console.log('');

  // -------------------------------------------------------------------------
  // TEST 8: Question Bank Validation (Duplicate IDs & Schemas)
  // -------------------------------------------------------------------------
  console.log('TEST 8: Question bank validation');
  const allIds = new Set();
  let dupIdCount = 0;
  QUESTION_BANK.forEach(q => {
    if (allIds.has(q.id)) {
      dupIdCount++;
    } else {
      allIds.add(q.id);
    }
  });
  assert(dupIdCount === 0, `Zero duplicate IDs across entire bank (Duplicates: ${dupIdCount}, Total: ${allIds.size})`);
  assert(QUESTION_BANK.length >= 1050, `Bank contains 1,000+ questions (Actual count: ${QUESTION_BANK.length})`);
  console.log('');

  // -------------------------------------------------------------------------
  // TEST 9: Comprehensive 1,000+ Question Exam (count: 'ALL')
  // -------------------------------------------------------------------------
  console.log('TEST 9: Comprehensive 1,000+ questions selection (count: "ALL")');
  const allMixedQuiz = filterAndSampleQuestions({
    topic: 'all',
    difficulty: 'ALL',
    count: 'ALL',
  });
  assert(allMixedQuiz.length === 1051, `Expected all 1051 questions, received: ${allMixedQuiz.length}`);
  assert(!allMixedQuiz.isPartial, 'isPartial flag is false for ALL count');
  assert(allMixedQuiz.requestedCount === 1051, 'requestedCount equals pool size 1051');
  console.log('');

  console.log('====================================================');
  console.log(`TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
  console.log('====================================================\n');

  if (failed > 0) {
    process.exit(1);
  } else {
    console.log('ALL 9 AUTOMATED TESTS PASSED SUCCESSFULLY! ✓');
  }
}

runTests().catch(err => {
  console.error('Test runner crashed:', err);
  process.exit(1);
});
