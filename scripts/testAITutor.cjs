/**
 * Automated Test Runner for Panda Physics Tutor
 *
 * Verifies tutor configuration, provider status, pedagogical sequence generation,
 * progressive hints, mistake diagnosis, and 3D lab / quiz context ingestion.
 */

const assert = require('assert')

async function runAITutorTests() {
  console.log('====================================================')
  console.log('       AUTOMATED PANDA AI TUTOR TEST RUNNER         ')
  console.log('====================================================\n')

  let passed = 0
  let failed = 0

  function test(name, fn) {
    try {
      fn()
      console.log(`✓ ${name}`)
      passed++
    } catch (err) {
      console.error(`✗ ${name}`)
      console.error(`  Error: ${err.message}`)
      failed++
    }
  }

  async function asyncTest(name, fn) {
    try {
      await fn()
      console.log(`✓ ${name}`)
      passed++
    } catch (err) {
      console.error(`✗ ${name}`)
      console.error(`  Error: ${err.message}`)
      failed++
    }
  }

  // Dynamic import of ES modules
  const { AI_TUTOR_NAME, TUTOR_LEVELS, createTutorContext, PROVIDER_STATUS } = await import('../src/tutor/tutorConfig.js')
  const { queryTutor, getProviderStatus } = await import('../src/tutor/tutorService.js')

  // TEST 1: Identity & Configuration
  test('TUTOR-01: Correct mascot identity name is exported', () => {
    assert.strictEqual(AI_TUTOR_NAME, 'Panda Physics Tutor')
  })

  test('TUTOR-02: 3 learning levels exist (LEARN, JEE_MAIN, JEE_ADVANCED)', () => {
    assert.ok(TUTOR_LEVELS.LEARN)
    assert.ok(TUTOR_LEVELS.JEE_MAIN)
    assert.ok(TUTOR_LEVELS.JEE_ADVANCED)
  })

  test('TUTOR-03: Provider status correctly detects unconfigured local fallback', () => {
    const status = getProviderStatus()
    assert.strictEqual(status, PROVIDER_STATUS.LOCAL_FALLBACK)
  })

  test('TUTOR-04: createTutorContext produces complete context schema', () => {
    const ctx = createTutorContext({
      source: 'quiz',
      topic: 'gravitationalFieldPotential',
      experimentId: 'planet',
      telemetry: { gravity: '9.81 m/s²', planetName: 'Earth' },
      question: { number: 1, question: 'Sample quiz question' },
      explanationLevel: 'JEE_MAIN',
    })
    assert.strictEqual(ctx.source, 'quiz')
    assert.strictEqual(ctx.topic, 'gravitationalFieldPotential')
    assert.strictEqual(ctx.experimentId, 'planet')
    assert.strictEqual(ctx.telemetry.gravity, '9.81 m/s²')
    assert.strictEqual(ctx.explanationLevel, 'JEE_MAIN')
    assert.strictEqual(ctx.question.number, 1)
  })

  // TEST 5: Conceptual Explanation
  await asyncTest('TUTOR-05: Conceptual query returns clear answer, why, and key points', async () => {
    const res = await queryTutor({
      prompt: 'What is escape velocity?',
      level: 'LEARN',
    })
    assert.strictEqual(res.type, 'conceptual')
    assert.ok(res.answer && res.answer.includes('minimum'))
    assert.ok(res.why)
    assert.ok(res.formula)
    assert.ok(Array.isArray(res.keyPoints) && res.keyPoints.length > 0)
    assert.strictEqual(res.isFallback, true)
  })

  // TEST 6: Numerical Problem Solving
  await asyncTest('TUTOR-06: Numerical problem generates complete 9-step pedagogical sequence', async () => {
    const res = await queryTutor({
      prompt: 'Two masses of 5 kg each are separated by 2 m. Calculate the gravitational force.',
      level: 'JEE_MAIN',
    })
    assert.strictEqual(res.type, 'numerical')
    assert.ok(Array.isArray(res.steps))
    assert.strictEqual(res.steps.length, 9, 'Must contain exactly 9 pedagogical steps')

    // Verify key steps
    assert.strictEqual(res.steps[0].step, 'STEP 1')
    assert.ok(res.steps[0].givens)
    assert.strictEqual(res.steps[1].step, 'STEP 2')
    assert.strictEqual(res.steps[2].step, 'STEP 3')
    assert.ok(res.steps[2].formula)
    assert.strictEqual(res.steps[7].step, 'STEP 8')
    assert.ok(res.steps[7].formula)
    assert.strictEqual(res.steps[8].step, 'STEP 9')

    // Transferable extras
    assert.ok(Array.isArray(res.keyPoints) && res.keyPoints.length >= 2)
    assert.ok(res.questionPattern)
    assert.ok(Array.isArray(res.traps) && res.traps.length > 0)
    assert.ok(res.similarProblem)
  })

  // TEST 7: Progressive Hints
  await asyncTest('TUTOR-07: Hint query returns progressive hint level', async () => {
    const res1 = await queryTutor({ prompt: 'hint', hintLevel: 1 })
    assert.strictEqual(res1.type, 'hint')
    assert.strictEqual(res1.hintLevel, 1)
    assert.ok(res1.hintText.includes('HINT 1'))
    assert.strictEqual(res1.nextHintAvailable, true)

    const res4 = await queryTutor({ prompt: 'hint', hintLevel: 4 })
    assert.strictEqual(res4.hintLevel, 4)
    assert.ok(res4.hintText.includes('HINT 4'))
    assert.strictEqual(res4.nextHintAvailable, false)
  })

  // TEST 8: Mistake Analysis
  await asyncTest('TUTOR-08: Student error query triggers diagnostic mistake analysis', async () => {
    const res = await queryTutor({
      prompt: 'I got 12 N instead of 6 N. Where did I go wrong?',
    })
    assert.strictEqual(res.type, 'mistake')
    assert.ok(res.likelyError)
    assert.ok(res.whyItHappened)
    assert.ok(res.howToAvoid)
    assert.ok(Array.isArray(res.keyPoints))
  })

  // TEST 9: 3D Lab Telemetry Ingestion
  await asyncTest('TUTOR-09: Telemetry context is ingested into general guidance', async () => {
    const res = await queryTutor({
      prompt: 'Hello Panda',
      context: createTutorContext({
        source: 'experiment',
        experimentId: 'planet',
        telemetry: { planetName: 'Jupiter', gravity: '24.79 m/s²', mass: '70 kg' },
      }),
    })
    assert.strictEqual(res.type, 'general')
    assert.ok(res.answer.includes('Jupiter'))
    assert.ok(res.answer.includes('24.79 m/s²'))
  })

  // TEST 10: Variation of g with Height
  await asyncTest('TUTOR-10: Variation of g with height query returns formula g_h and altitude explanation', async () => {
    const res = await queryTutor({
      prompt: 'Explain variation of g with height',
      level: 'JEE_MAIN',
    })
    assert.strictEqual(res.type, 'conceptual')
    assert.ok(res.formula && res.formula.includes('g_h'))
    assert.ok(res.answer && res.answer.includes('altitude'))
    assert.ok(Array.isArray(res.keyPoints) && res.keyPoints.length > 0)
    assert.ok(Array.isArray(res.traps) && res.traps.length > 0)
  })

  // TEST 11: Variation of g with Depth
  await asyncTest('TUTOR-11: Variation of g with depth query returns formula g_d and central zero gravity', async () => {
    const res = await queryTutor({
      prompt: 'What is the value of g at depth d inside Earth?',
      level: 'JEE_MAIN',
    })
    assert.strictEqual(res.type, 'conceptual')
    assert.ok(res.formula && res.formula.includes('g_d'))
    assert.ok(res.answer && res.answer.includes('centre of the Earth'))
    assert.ok(Array.isArray(res.keyPoints))
  })

  // TEST 12: Kepler's Laws of Planetary Motion
  await asyncTest('TUTOR-12: Kepler laws query returns harmonic law formula and orbital mechanics', async () => {
    const res = await queryTutor({
      prompt: "Explain Kepler's third law of planetary motion",
      level: 'JEE_ADVANCED',
    })
    assert.strictEqual(res.type, 'conceptual')
    assert.ok(res.formula && res.formula.includes('T^2'))
    assert.ok(res.why && res.why.includes('centripetal'))
    assert.ok(Array.isArray(res.keyPoints))
  })

  // TEST 13: Newton's Shell Theorem
  await asyncTest('TUTOR-13: Shell theorem query returns zero field E=0 inside hollow spherical cavity', async () => {
    const res = await queryTutor({
      prompt: "Explain Newton's shell theorem for hollow sphere",
      level: 'JEE_MAIN',
    })
    assert.strictEqual(res.type, 'conceptual')
    assert.ok(res.formula && res.formula.includes('E_{in} = 0'))
    assert.ok(res.answer && res.answer.includes('IDENTICALLY ZERO'))
  })

  // TEST 14: Active Quiz Question Guidance
  await asyncTest('TUTOR-14: Active quiz question context query generates dedicated problem breakdown', async () => {
    const res = await queryTutor({
      prompt: 'How to solve this question?',
      context: createTutorContext({
        source: 'quiz',
        topic: 'gravitationalFieldPotential',
        question: {
          number: 4,
          question: 'Calculate gravitational potential at radius r outside a solid sphere.',
          concept: 'Gravitational Potential',
          formula: 'V = -\\frac{GM}{r}',
          hint: 'Remember potential is zero at infinity.',
          stepByStep: {
            given: 'Mass M, distance r > R',
            asked: 'Potential V',
            keyTakeaway: 'Gravitational potential is always negative.',
            commonTrap: 'Omitting the negative sign in the potential equation.',
          },
        },
      }),
    })
    assert.strictEqual(res.type, 'quizGuidance')
    assert.ok(res.summary.includes('Question #4'))
    assert.strictEqual(res.formula, 'V = -\\frac{GM}{r}')
    assert.ok(res.why.includes('Given: Mass M'))
    assert.ok(res.traps[0].includes('Omitting the negative sign'))
  })

  // TEST 15: Active 3D Experiment Telemetry Guidance
  await asyncTest('TUTOR-15: Active experiment telemetry query generates W = mg breakdown with planetary gravity', async () => {
    const res = await queryTutor({
      prompt: 'Why is weight here different on this planet?',
      context: createTutorContext({
        source: 'experiment',
        experimentId: 'planet',
        telemetry: {
          planetName: 'Mars',
          gravity: '3.72 m/s²',
          mass: '60 kg',
          weight: '223.2 N',
        },
      }),
    })
    assert.strictEqual(res.type, 'experimentGuidance')
    assert.ok(res.summary.includes('Mars'))
    assert.ok(res.answer.includes('3.72 m/s²'))
    assert.ok(res.answer.includes('223.2 N'))
    assert.ok(res.formula.includes('W = m'))
    assert.ok(Array.isArray(res.symbols) && res.symbols.length === 3)
  })
  console.log('====================================================\n')

  if (failed > 0) {
    process.exit(1)
  }
}

runAITutorTests().catch((err) => {
  console.error('Fatal Test Runner Error:', err)
  process.exit(1)
})
