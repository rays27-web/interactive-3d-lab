/**
 * Panda Physics Tutor Service Layer
 *
 * Implements provider abstraction:
 * 1. Checks for real AI backend connection if configured (via environment variable / proxy).
 * 2. If unavailable or unconfigured, transitions to a clearly labeled Local Fallback Engine
 *    supporting comprehensive Class 11-12 / JEE gravitation curriculum.
 * 3. Never exposes private API credentials on the client.
 */

import { AI_TUTOR_NAME, PROVIDER_STATUS } from './tutorConfig.js'

// Check environment for configured AI provider endpoint (optional proxy)
const AI_ENDPOINT =
  typeof import.meta !== 'undefined' && import.meta.env?.VITE_AI_API_URL
    ? import.meta.env.VITE_AI_API_URL
    : null

export function getProviderStatus() {
  if (AI_ENDPOINT) {
    return PROVIDER_STATUS.CONFIGURED
  }
  return PROVIDER_STATUS.LOCAL_FALLBACK
}

/**
 * Universal Gravitational Constant & Physical References
 */
const G_CONST = 6.6743e-11 // N m²/kg²
const EARTH_RADIUS = 6.371e6 // m
const EARTH_MASS = 5.972e24 // kg

/**
 * Parses numerical query for mass and distance inputs (e.g. "two 5 kg masses separated by 2 m")
 */
function parseMassAndDistance(text) {
  const massMatches = [...text.matchAll(/(\d+(?:\.\d+)?)\s*(?:kg|kilogram)/gi)]
  const distMatch = text.match(/(\d+(?:\.\d+)?)\s*(?:m|meter)/i)

  if (massMatches.length >= 2 && distMatch) {
    const m1 = parseFloat(massMatches[0][1])
    const m2 = parseFloat(massMatches[1][1])
    const r = parseFloat(distMatch[1])
    return { m1, m2, r }
  } else if (massMatches.length === 1 && distMatch) {
    const m = parseFloat(massMatches[0][1])
    const r = parseFloat(distMatch[1])
    return { m1: m, m2: m, r }
  }
  return null
}

/**
 * Determines problem category from text query
 */
function categorizeQuery(text = '', context = {}) {
  const lower = text.toLowerCase()

  if (lower.includes('hint') || lower.includes('clue')) {
    return 'hint'
  }
  if (
    lower.includes('wrong') ||
    lower.includes('mistake') ||
    lower.includes('error') ||
    lower.includes('why did i get') ||
    lower.includes('where did i go wrong')
  ) {
    return 'mistake'
  }

  // Active quiz question query
  if (
    context?.source === 'quiz' &&
    context?.question &&
    (lower.includes('this question') ||
      lower.includes('how to solve') ||
      lower.includes('explain question') ||
      lower.includes('what is the answer') ||
      lower.includes('which option') ||
      lower.includes('why option') ||
      lower.includes('help with this') ||
      lower.includes('clue for this'))
  ) {
    return 'quizQuestion'
  }

  // Active experiment telemetry query
  if (
    context?.source === 'experiment' &&
    (lower.includes('telemetry') ||
      lower.includes('this planet') ||
      lower.includes('weight here') ||
      lower.includes('gravity here') ||
      lower.includes('why is weight'))
  ) {
    return 'experimentTelemetry'
  }

  if (
    parseMassAndDistance(lower) ||
    lower.includes('calculate the force') ||
    lower.includes('find the force') ||
    lower.includes('numerical') ||
    (lower.includes('mass') && lower.includes('distance') && lower.includes('force'))
  ) {
    return 'numerical'
  }

  return 'topic'
}

/**
 * Built-in local fallback engine that generates deep, structured physics explanations
 */
function generateLocalFallbackResponse({ prompt, context, level = 'LEARN', image = null, hintLevel = 1 }) {
  const queryType = categorizeQuery(prompt, context)
  const lower = (prompt || '').toLowerCase()

  // 1. PROGRESSIVE HINTS
  if (queryType === 'hint') {
    const topic = context?.topic || 'Gravitational Physics'
    const hints = [
      'HINT 1 (Conceptual Direction): Identify whether the question involves an attractive force, orbital equilibrium (centripetal balance), or an energy threshold.',
      'HINT 2 (Governing Formula): If force between masses, use F = G(m₁m₂)/r². If orbit, balance m(v²/r) = GMm/r². If escaping, set total mechanical energy E = K + U ≥ 0.',
      'HINT 3 (First Calculation Step): Always convert all distances to standard SI metres (m) and masses to kilograms (kg). Use centre-to-centre distance, not surface altitude.',
      'HINT 4 (Explicit Guidance): Substitute G = 6.67 × 10⁻¹¹ N·m²/kg². Square the radial distance r in the denominator before dividing.',
    ]
    return {
      type: 'hint',
      level,
      isFallback: true,
      providerName: 'Local Physics Engine',
      summary: `Progressive hint for ${topic}:`,
      hintLevel: Math.min(hintLevel, 4),
      hintText: hints[Math.min(hintLevel - 1, 3)],
      nextHintAvailable: hintLevel < 4,
    }
  }

  // 2. MISTAKE ANALYSIS
  if (queryType === 'mistake') {
    return {
      type: 'mistake',
      level,
      isFallback: true,
      providerName: 'Local Physics Engine',
      summary: 'Student Error & Reasoning Diagnosis:',
      likelyError: 'Common calculation error: Either forgetting to square the radial distance (using r instead of r²), or using surface altitude h instead of centre distance (R + h).',
      whyItHappened:
        'In inverse-square laws (F ∝ 1/r²), omitting the exponent changes the scaling completely. Furthermore, gravity acts from the mass centre of spherical bodies, so distance must include planetary radius R.',
      howToAvoid:
        '1. Explicitly write out r² = (distance) × (distance) before computing.\n2. When an object is at height h above Earth, always set r = R_Earth + h.',
      keyPoints: [
        'Newtonian gravitation strictly requires centre-to-centre distance.',
        'Always check dimensional consistency: Force must yield Newtons [kg·m/s²].',
      ],
    }
  }

  // 3. NUMERICAL TWO-MASS GRAVITATIONAL PROBLEM
  const numData = parseMassAndDistance(lower)
  if (numData) {
    const { m1, m2, r } = numData
    const force = (G_CONST * m1 * m2) / (r * r)
    const forceScientific = force.toExponential(3)

    return {
      type: 'numerical',
      level,
      isFallback: true,
      providerName: 'Local Physics Engine',
      summary: `Step-by-step solution for mutual gravitational attraction between ${m1} kg and ${m2} kg at ${r} m:`,
      steps: [
        {
          step: 'STEP 1',
          label: 'Understand the Problem',
          content: `Two spherical bodies with masses m₁ = ${m1} kg and m₂ = ${m2} kg are positioned with a centre-to-centre separation of r = ${r} m in free space. The goal is to determine their mutual gravitational attractive force.`,
          givens: [`Mass 1: m₁ = ${m1} kg`, `Mass 2: m₂ = ${m2} kg`, `Centre-to-centre distance: r = ${r} m`],
          unknown: 'Gravitational Force F (in Newtons)',
        },
        {
          step: 'STEP 2',
          label: 'Identify the Governing Concept',
          content:
            "Use Newton's Universal Law of Gravitation. Every particle in the universe attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between their centres.",
        },
        {
          step: 'STEP 3',
          label: 'Write the Governing Formula',
          formula: 'F = \\frac{G m_1 m_2}{r^2}',
          content: 'The classical inverse-square central force formula.',
        },
        {
          step: 'STEP 4',
          label: 'Explain Every Symbol',
          symbols: [
            { symbol: 'G', meaning: 'Universal Gravitational Constant (6.6743 × 10⁻¹¹ N·m²/kg²)' },
            { symbol: 'm₁', meaning: `Mass of first body (${m1} kg)` },
            { symbol: 'm₂', meaning: `Mass of second body (${m2} kg)` },
            { symbol: 'r', meaning: `Distance between their centres (${r} m)` },
            { symbol: 'F', meaning: 'Mutual gravitational force of attraction (N)' },
          ],
        },
        {
          step: 'STEP 5',
          label: 'Substitute Values',
          formula: `F = \\frac{(6.6743 \\times 10^{-11}) \\cdot (${m1}) \\cdot (${m2})}{(${r})^2}`,
          content: `Substituting SI values: mass product = ${m1 * m2} kg², distance squared = ${r * r} m².`,
        },
        {
          step: 'STEP 6',
          label: 'Calculate Step-by-Step',
          content: `Numerator: (6.6743 × 10⁻¹¹) × ${m1 * m2} = ${(6.6743e-11 * m1 * m2).toExponential(4)}.\nDenominator: ${r}² = ${r * r}.\nDividing yields: F = ${forceScientific} N.`,
        },
        {
          step: 'STEP 7',
          label: 'Check Units',
          content: '[N·m²/kg²] × [kg] × [kg] / [m²] = N (Newtons). The dimensional homogeneity holds perfectly.',
        },
        {
          step: 'STEP 8',
          label: 'Final Answer',
          formula: `F \\approx ${forceScientific}\\text{ N}`,
          content: `The mutual gravitational attraction is ${forceScientific} N.`,
        },
        {
          step: 'STEP 9',
          label: 'Physics Interpretation',
          content:
            'This force is extraordinarily small because G is of order 10⁻¹¹. Between everyday laboratory masses, gravity is negligible compared to friction, but for astronomical masses (planets and stars), it dominates the cosmos.',
        },
      ],
      keyPoints: [
        'Gravitational force strictly follows the inverse-square law: doubling distance quarters the force.',
        'By Newton’s Third Law, both bodies experience the EXACT same magnitude of force in opposite directions, regardless of their mass ratio.',
        'G is universal across all spacetime; it does not change with temperature, medium, or celestial location.',
      ],
      questionPattern:
        'When a question asks for mutual attraction between two masses at a distance, immediately apply Newton’s Universal Law F = G(m₁m₂)/r².',
      traps: [
        '⚠ Do not forget to square the radial distance in the denominator.',
        '⚠ Do not confuse G (Universal Constant = 6.67×10⁻¹¹) with local surface acceleration g (e.g. 9.81 m/s²).',
      ],
      similarProblem: {
        title: 'Try This Similar Problem:',
        question: `If the distance between these two masses was increased from ${r} m to ${r * 2} m, by what factor would the gravitational force change?`,
        hint: 'Use the inverse-square relationship: F₂ / F₁ = (r₁ / r₂)²',
      },
    }
  }

  // 3. ACTIVE QUIZ QUESTION GUIDANCE
  if (queryType === 'quizQuestion') {
    return handleQuizQuestionResponse({ prompt, context, level })
  }

  // 4. ACTIVE EXPERIMENT TELEMETRY GUIDANCE
  if (queryType === 'experimentTelemetry') {
    return handleExperimentTelemetryResponse({ prompt, context, level })
  }

  // 5. TOPIC KNOWLEDGE BASE MATCHING
  const matchedTopic = findTopicMatch(prompt, context?.topic)
  if (matchedTopic) {
    return {
      type: 'conceptual',
      level,
      isFallback: true,
      providerName: 'Local Physics Engine',
      summary: matchedTopic.summary,
      answer: matchedTopic.answer,
      formula: matchedTopic.formula,
      symbols: matchedTopic.symbols || null,
      why: matchedTopic.why,
      keyPoints: matchedTopic.keyPoints || [],
      traps: matchedTopic.traps || [],
    }
  }

  // 6. General Physics Response Fallback
  const activePlanet = context?.telemetry?.planetName || 'Earth'
  const activeG = context?.telemetry?.gravity || '9.81 m/s²'

  return {
    type: 'general',
    level,
    isFallback: true,
    providerName: 'Local Physics Engine',
    summary: `Physics Guidance (${context?.topic || 'Universal Gravitation'}):`,
    answer:
      `I am ready to help you solve and understand physics! In our current 3D lab simulation, we are exploring ${activePlanet} (surface gravity g = ${activeG}).`,
    why:
      'You can ask me questions about Newton’s Universal Law, variation of g with height or depth, gravitational field & potential, Kepler’s planetary laws, or satellite and escape velocities.',
    keyPoints: [
      'Select a topic chip or ask any question from Class 11-12 & JEE syllabus.',
      'Use the [ GIVE ME A HINT ] button for progressive 4-level hints.',
      'Upload a problem image or use the camera to analyze questions.',
    ],
  }
}

/**
 * COMPREHENSIVE CURRICULUM TOPIC KNOWLEDGE BASE
 * Covers all 5 modules and core Class 11-12 / JEE gravitation questions
 */
const TOPIC_KNOWLEDGE_BASE = {
  // --- TOPIC 1: FUNDAMENTAL & NEWTON'S UNIVERSAL LAW ---
  universalLaw: {
    matchKeywords: [
      "newton's universal law",
      'universal law of gravitation',
      'universal law',
      "newton's law of gravitation",
      'universal gravitation',
      'inverse square law',
      'product of masses',
    ],
    title: "Newton's Universal Law of Gravitation",
    summary: 'The Fundamental Law of Mutual Gravitational Attraction:',
    answer:
      'Every point mass in the universe attracts every other point mass with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres.',
    formula: 'F = \\frac{G m_1 m_2}{r^2}',
    symbols: [
      { symbol: 'F', meaning: 'Mutual gravitational attractive force (N)' },
      { symbol: 'G', meaning: 'Universal Gravitational Constant (6.6743 × 10⁻¹¹ N·m²/kg²)' },
      { symbol: 'm₁, m₂', meaning: 'Interacting point masses (kg)' },
      { symbol: 'r', meaning: 'Centre-to-centre separation distance (m)' },
    ],
    why:
      'Gravity is an inverse-square law because field flux dilutes over the surface area of a sphere (4πr²). It is purely attractive because mass in classical physics is strictly positive with no repulsive counterpart.',
    keyPoints: [
      'Inverse-Square Law: Doubling distance reduces force to 1/4th (F ∝ 1/r²).',
      'Acts along the line joining mass centres (Central Force, zero torque τ = 0).',
      'Strictly conservative force: Work done in a closed path is zero (∮ F⃗·dr⃗ = 0).',
      'Medium-independent: Gravity is unaffected by intervening physical matter.',
    ],
    traps: [
      '⚠ Always measure r from centre of mass to centre of mass, never from planetary surfaces.',
      '⚠ Doubling both masses and doubling distance leaves the force completely unchanged.',
    ],
  },

  gConstantVsLittleG: {
    matchKeywords: ['difference between g and g', 'what is g', 'what does g mean', 'cavendish', 'dimensions of g'],
    title: 'Universal Constant G vs Local Acceleration g',
    summary: 'Comparison: G (Universal Invariant) vs g (Local Field Acceleration):',
    answer:
      'G is the Universal Gravitational Constant that governs gravitational interaction everywhere in the cosmos. In contrast, g is the local acceleration experienced by a free-falling body near a specific celestial surface.',
    formula: 'g = \\frac{GM}{R^2}',
    symbols: [
      { symbol: 'G', meaning: 'Universal constant = 6.6743 × 10⁻¹¹ N·m²/kg² (Scalar, identical everywhere)' },
      { symbol: 'g', meaning: 'Local gravitational acceleration (Vector, e.g. 9.81 m/s² on Earth, 1.62 m/s² on Moon)' },
      { symbol: 'M', meaning: 'Mass of attracting celestial body (kg)' },
      { symbol: 'R', meaning: 'Radius of celestial body (m)' },
    ],
    why:
      'G is an intrinsic fundamental constant of spacetime measured by Cavendish using a torsion balance. Local g depends directly on the planet’s mass M and radius R, so g varies across celestial bodies, altitudes, and depths.',
    keyPoints: [
      'Dimensions of G: [M⁻¹ L³ T⁻²]. It is a universal scalar.',
      'Dimensions of g: [L T⁻²] (acceleration). It is a vector pointing toward planet center.',
      'g on Earth surface: ≈ 9.81 m/s²; on Moon: ≈ 1.62 m/s² (1/6th Earth); on Jupiter: ≈ 24.79 m/s².',
    ],
    traps: [
      '⚠ Confusing G with g in numerical questions leads to dimensional and magnitude errors of 10¹¹!',
    ],
  },

  vectorFormSuperposition: {
    matchKeywords: [
      'vector form',
      'superposition',
      'action reaction',
      "newton's third law",
      'newton third law',
      'principle of superposition',
      'net force',
    ],
    title: 'Vector Form of Gravitation & Principle of Superposition',
    summary: 'Vector Gravitational Interaction & Multi-Mass Superposition:',
    answer:
      'In vector notation, the gravitational force exerted ON mass 1 BY mass 2 is F⃗₁₂ = - [G m₁ m₂ / r²] r̂₁₂. For multiple masses, the net force is the vector sum of individual forces: F⃗_net = Σ F⃗ᵢ.',
    formula: '\\vec{F}_{12} = -\\frac{G m_1 m_2}{r^2} \\hat{r}_{12} = -\\vec{F}_{21}',
    symbols: [
      { symbol: 'F⃗₁₂', meaning: 'Force on mass 1 due to mass 2 (N)' },
      { symbol: 'r̂₁₂', meaning: 'Unit vector pointing from mass 1 to mass 2' },
      { symbol: 'F⃗_net', meaning: 'Resultant vector sum of forces on target mass' },
    ],
    why:
      "Newton's Third Law holds strictly: F⃗₁₂ = -F⃗₂₁ (action and reaction are equal in magnitude and opposite in direction). Gravitational forces between pairs are unaffected by the presence of surrounding third bodies.",
    keyPoints: [
      'Forces must be added vectorially: resolve into x, y, z components before summing.',
      'A particle at the center of a symmetric ring, square, or sphere of masses experiences ZERO net force.',
      'Gravitational force satisfies the shell theorem: spherical mass behaves as a point mass at its center.',
    ],
    traps: [
      '⚠ Never add scalar magnitudes directly when finding net force on a multi-body configuration!',
    ],
  },

  // --- TOPIC 2: ACCELERATION DUE TO GRAVITY (g) & VARIATIONS ---
  variationWithHeight: {
    matchKeywords: ['decrease with height', 'altitude', 'variation with height', 'g at height', 'above earth', 'g_h'],
    title: 'Variation of Acceleration due to Gravity (g) with Altitude',
    summary: 'How Gravity (g) Decreases as Altitude Increases:',
    answer:
      'As altitude h increases above the planetary surface, radial distance from the planet’s centre of mass increases (r = R + h), causing local gravitational acceleration to weaken according to the inverse-square law.',
    formula: 'g_h = g \\left(\\frac{R}{R+h}\\right)^2 \\approx g \\left(1 - \\frac{2h}{R}\\right) \\quad [\\text{for } h \\ll R]',
    symbols: [
      { symbol: 'g', meaning: 'Surface gravitational acceleration (9.81 m/s² on Earth)' },
      { symbol: 'g_h', meaning: 'Gravitational acceleration at altitude h above surface' },
      { symbol: 'R', meaning: 'Mean radius of Earth (6,371 km)' },
      { symbol: 'h', meaning: 'Height / altitude above planetary surface' },
    ],
    why:
      'At surface: g = GM/R². At height h: g_h = GM/(R+h)². Expanding with binomial theorem for small h (h < 5% R ≈ 320 km) gives g_h ≈ g(1 - 2h/R). For large altitudes (e.g. satellites at h = R), the exact formula must be used: g_h = g / (1 + 1)² = g/4.',
    keyPoints: [
      'Fractional change for small heights: Δg / g = -2h / R.',
      'Percentage change rule: For every 1% increase in height (relative to R), g drops by 2%.',
      'At altitude h = R (one Earth radius above surface): g_h = g / 4 = 2.45 m/s².',
      'At infinite altitude (h → ∞): g → 0.',
    ],
    traps: [
      '⚠ NEVER use g(1 - 2h/R) when h is comparable to R (e.g. h = R or h = 6400 km). That formula is only valid for small h < 320 km!',
    ],
  },

  variationWithDepth: {
    matchKeywords: ['depth', 'inside earth', 'under earth', 'centre of earth', 'center of earth', 'g at depth', 'g_d'],
    title: 'Variation of Acceleration due to Gravity (g) with Depth',
    summary: 'How Gravity (g) Decreases Linearly Inside the Earth:',
    answer:
      'Inside a uniform spherical planet at depth d beneath the surface, gravity decreases linearly toward zero: g_d = g (1 - d/R). At the exact geometric centre of the Earth (d = R), g = 0.',
    formula: 'g_d = g \\left(1 - \\frac{d}{R}\\right) = g \\left(\\frac{r}{R}\\right)',
    symbols: [
      { symbol: 'g_d', meaning: 'Gravitational acceleration at depth d below surface' },
      { symbol: 'd', meaning: 'Depth beneath planetary surface (m)' },
      { symbol: 'r', meaning: 'Distance from planet centre = R - d' },
      { symbol: 'R', meaning: 'Planet radius (m)' },
    ],
    why:
      'By Newton’s Shell Theorem, the outer spherical shell of thickness d exerts ZERO net gravitational force on the particle inside it. Only the enclosed inner core of radius r = (R - d) attracts the mass. Since core mass M_enc ∝ r³ and force ∝ M_enc / r², g_d ∝ r³/r² = r.',
    keyPoints: [
      'g decreases linearly with depth d, reaching exactly zero at Earth’s center: g_centre = 0.',
      'At depth d = R/2 (halfway to center): g_d = g / 2.',
      'Comparison: The decrease in g at height h (2h/R) is TWICE as fast as the decrease at depth d (d/R) for small distances.',
    ],
    traps: [
      '⚠ At Earth’s centre, g = 0 (zero weight), but gravitational potential is at its deepest negative value (V_centre = -1.5 GM/R)!',
    ],
  },

  variationWithLatitudeRotation: {
    matchKeywords: ['rotation', 'latitude', 'equator', 'pole', 'diurnal', 'spin of earth', 'omega', 'centrifugal'],
    title: 'Variation of g with Latitude & Planetary Rotation',
    summary: 'How Earth’s Rotation Reduces Apparent Gravity at the Equator:',
    answer:
      'Due to diurnal planetary spin with angular velocity ω, objects experience an apparent centrifugal outward acceleration, reducing apparent surface gravity at latitude λ according to g’ = g - ω²R cos²λ.',
    formula: "g' = g - \\omega^2 R \\cos^2\\lambda",
    symbols: [
      { symbol: "g'", meaning: 'Effective / apparent gravitational acceleration at latitude λ' },
      { symbol: 'g', meaning: 'True gravitational acceleration without rotation' },
      { symbol: 'ω', meaning: 'Angular speed of rotation (7.29 × 10⁻⁵ rad/s for Earth)' },
      { symbol: 'R', meaning: 'Equatorial radius of Earth' },
      { symbol: 'λ', meaning: 'Latitude angle (0° at Equator, 90° at Poles)' },
    ],
    why:
      'At the Equator (λ = 0°): cos 0° = 1, so g_eq = g - ω²R (minimum gravity). At the Poles (λ = 90°): cos 90° = 0, so g_pole = g (maximum gravity, untouched by rotation because rotational radius is 0).',
    keyPoints: [
      'g_pole - g_equator = ω²R ≈ 0.034 m/s² due to rotation.',
      'Earth’s oblate shape (equator bulge by ~21 km) further enhances the difference: total g_pole - g_equator ≈ 0.05 m/s².',
      'Condition for weightlessness at Equator: set g - ω²R = 0 ⇒ ω_crit = √(g/R) ≈ 1.24 × 10⁻³ rad/s (Earth must spin ~17 times faster).',
    ],
    traps: [
      '⚠ Remember that latitude λ is measured from the Equator (0° at equator, 90° at poles). If given colatitude θ from pole, use sin²θ.',
    ],
  },

  massVsWeight: {
    matchKeywords: ['mass vs weight', 'difference between mass and weight', 'what is weight', 'weightless'],
    title: 'Mass vs Weight Invariance',
    summary: 'Fundamental Distinction between Mass and Gravitational Weight:',
    answer:
      'Mass (m) is the fundamental scalar measure of an object’s inertia and quantity of matter [kg], invariant throughout the universe. Weight (W = mg) is the gravitational force exerted on that mass [N], which varies with location and acceleration frame.',
    formula: 'W = m \\cdot g',
    symbols: [
      { symbol: 'm', meaning: 'Mass (kg) — scalar, constant everywhere' },
      { symbol: 'W', meaning: 'Weight (N) — vector force pointing toward planet center' },
      { symbol: 'g', meaning: 'Local surface gravitational acceleration (m/s²)' },
    ],
    why:
      'A 70 kg astronaut has an intrinsic mass of 70 kg on Earth, Moon, Jupiter, and deep space. However, their weight on Earth is 70 × 9.81 = 686.7 N, on the Moon is 70 × 1.62 = 113.4 N (1/6th), and in free fall orbit is 0 N (apparent weightlessness).',
    keyPoints: [
      'Mass is measured using a beam balance (comparison balance, location-independent).',
      'Weight is measured using a spring balance (calibrated to local gravity).',
      'In free-fall elevator or orbital flight: true gravity is nonzero, but normal contact force N = 0 (weightlessness).',
    ],
    traps: [
      '⚠ Everyday scales calibrate kilograms based on Earth’s 9.81 m/s². On the Moon, a spring scale would read 1/6th of your mass!',
    ],
  },

  // --- TOPIC 3: GRAVITATIONAL FIELD & POTENTIAL ---
  gravitationalField: {
    matchKeywords: ['gravitational field', 'field intensity', 'field strength', 'e = -dv/dr', 'force per unit mass'],
    title: 'Gravitational Field Intensity (E⃗)',
    summary: 'Gravitational Field as Force Per Unit Test Mass:',
    answer:
      'The gravitational field intensity E⃗ at a point in space is defined as the gravitational force experienced per unit positive test mass placed at that point: E⃗ = F⃗ / m₀ = - (GM / r²) r̂.',
    formula: '\\vec{E} = -\\frac{GM}{r^2} \\hat{r} = -\\frac{dV}{dr} \\hat{r}',
    symbols: [
      { symbol: 'E⃗', meaning: 'Gravitational field intensity vector (N/kg or m/s²)' },
      { symbol: 'm₀', meaning: 'Infinitesimal test mass (kg)' },
      { symbol: 'M', meaning: 'Source mass creating the field (kg)' },
      { symbol: 'r', meaning: 'Radial distance from source mass centre (m)' },
    ],
    why:
      'The field concept removes the concept of instant "action-at-a-distance". Mass M establishes a gravitational field throughout space, and any second mass placed in this field interacts locally with the field.',
    keyPoints: [
      'Gravitational field intensity is numerically and dimensionally equal to acceleration due to gravity: |E| = g.',
      'Direction is always radially inward toward the attracting center of mass.',
      'Gravitational field is conservative: its line integral around any closed loop is zero (∮ E⃗·dr⃗ = 0).',
    ],
    traps: [
      '⚠ Test mass m₀ must be infinitesimally small so that its own gravitational field does not disturb the source configuration.',
    ],
  },

  potentialWhyNegative: {
    matchKeywords: ['potential negative', 'why is gravitational potential negative', 'why potential negative', 'negative potential'],
    title: 'Why Gravitational Potential is Strictly Negative',
    summary: 'Physical Origin of Negative Gravitational Potential:',
    answer:
      'Gravitational potential is strictly negative because we define zero potential at infinity (r → ∞), and Newtonian gravity is purely an attractive force.',
    formula: 'V(r) = -\\int_{\\infty}^r \\vec{E} \\cdot d\\vec{r} = -\\frac{GM}{r}',
    symbols: [
      { symbol: 'V(r)', meaning: 'Gravitational potential at distance r (J/kg)' },
      { symbol: 'E⃗', meaning: 'Gravitational field vector' },
      { symbol: 'G', meaning: 'Universal Gravitational Constant' },
      { symbol: 'M', meaning: 'Attracting source mass' },
    ],
    why:
      '1. Universal Baseline: At r → ∞, masses are infinitely separated and experience zero force, making V(∞) = 0 the only natural reference.\n2. Work Done by Attraction: As a test mass moves from infinity toward Earth, the attractive field pulls it inward, doing POSITIVE work on it. By definition, ΔV = -W_field / m. Therefore, potential must drop below zero into negative values.\n3. Bound State: A negative potential signifies that the mass is trapped in a gravitational potential well. Positive energy must be added from outside to liberate it to infinity.',
    keyPoints: [
      'V is maximum (zero) at r = ∞ and becomes increasingly negative as r decreases toward the source.',
      'Potential energy of mass m in field: U(r) = m · V(r) = -GMm / r.',
      'Higher altitude means HIGHER potential (less negative).',
    ],
    traps: [
      '⚠ -50 J/kg is a HIGHER potential than -100 J/kg! Just like temperature, -5°C is warmer than -10°C.',
    ],
  },

  shellTheorem: {
    matchKeywords: [
      'shell theorem',
      "newton's shell theorem",
      'shell theorems',
      'hollow sphere',
      'spherical shell',
      'inside a shell',
      'field inside shell',
      'cavity',
    ],
    title: 'Newton’s Shell Theorems (Hollow & Spherical Shells)',
    summary: 'Gravitational Field & Potential for Uniform Spherical Shells:',
    answer:
      'For a thin uniform spherical shell of mass M and radius R: outside the shell (r ≥ R), it behaves as if all mass is concentrated at the center. Inside the shell cavity (r < R), the gravitational field is IDENTICALLY ZERO everywhere, and potential is constant: V_in = -GM/R.',
    formula: 'E_{in} = 0, \\quad V_{in} = -\\frac{GM}{R} = \\text{constant} \\quad [r < R]',
    symbols: [
      { symbol: 'E_in', meaning: 'Field intensity inside the cavity = 0 N/kg' },
      { symbol: 'V_in', meaning: 'Potential inside cavity = -GM/R (same as on the surface)' },
      { symbol: 'E_out', meaning: 'Field outside shell = GM/r²' },
      { symbol: 'V_out', meaning: 'Potential outside shell = -GM/r' },
    ],
    why:
      'Inside the shell, opposing solid-angle patches of mass exert forces that cancel out exactly due to the inverse-square law (dM ∝ r² balances 1/r² force). Since E = -dV/dr = 0, potential cannot change with position inside, staying locked at its surface value -GM/R.',
    keyPoints: [
      'Field inside a uniform spherical shell is 0 everywhere, not just at the center!',
      'Potential inside is constant and equal to surface potential: V(r) = -GM/R for all r ≤ R.',
      'No work is done in moving a test mass between any two points inside a spherical shell.',
    ],
    traps: [
      '⚠ Trap: Thinking potential is zero inside because field is zero. Field is the DERIVATIVE of potential (E = -dV/dr). When derivative is zero, potential is CONSTANT, not zero!',
    ],
  },

  solidSphereFieldPotential: {
    matchKeywords: ['solid sphere', 'inside solid sphere', 'solid earth', 'center potential', 'self energy'],
    title: 'Field & Potential for a Uniform Solid Sphere',
    summary: 'Internal & External Mechanics of a Solid Celestial Planet:',
    answer:
      'Outside a uniform solid sphere (r ≥ R): E = GM/r² and V = -GM/r. Inside (r ≤ R): E increases linearly with radius E = GMr/R³, while potential forms a parabolic curve: V(r) = -[GM/(2R³)](3R² - r²). At the center (r = 0), V_centre = -1.5 GM/R.',
    formula: 'V_{\\text{centre}} = -\\frac{3}{2} \\frac{GM}{R} = 1.5 \\cdot V_{\\text{surface}}',
    symbols: [
      { symbol: 'V_centre', meaning: 'Gravitational potential at the center = -1.5 GM/R' },
      { symbol: 'V_surface', meaning: 'Gravitational potential at the surface = -GM/R' },
      { symbol: 'E_inside', meaning: 'Field inside solid sphere = GMr/R³ (linear with r)' },
      { symbol: 'U_self', meaning: 'Gravitational self-energy = - (3/5) GM²/R' },
    ],
    why:
      'Only the mass enclosed within radius r attracts a particle at radius r. Enclosed mass M_enc = M(r/R)³. Thus E(r) = G M_enc / r² = GMr/R³. Integrating E from surface to center yields the central potential V_centre = -1.5 GM/R.',
    keyPoints: [
      'Field is linear from center (E=0) to surface (E=GM/R²), then drops as 1/r² outside.',
      'Potential is deepest (most negative) at the planet center: V_centre = 1.5 V_surface.',
      'Gravitational self-energy required to assemble a solid sphere: U_self = - (3/5) GM²/R.',
    ],
    traps: [
      '⚠ Never assume central potential is zero just because central gravity/field is zero!',
    ],
  },

  // --- TOPIC 4: KEPLER'S LAWS OF PLANETARY MOTION ---
  keplerFirstLaw: {
    matchKeywords: [
      "kepler's first law",
      'kepler first law',
      "kepler's 1st law",
      'kepler 1st law',
      'first law of planetary',
      'law of orbits',
      'ellipse',
      'perihelion',
      'aphelion',
      'eccentricity',
    ],
    title: "Kepler's First Law (Law of Orbits)",
    summary: 'Planetary Orbits are Ellipses with the Sun at One Focus:',
    answer:
      'All planets move in elliptical orbits with the Sun located at one of the two focal points (foci). The orbit is parameterized by semi-major axis a, semi-minor axis b, and orbital eccentricity e.',
    formula: 'r_p = a(1 - e), \\quad r_a = a(1 + e), \\quad 2a = r_p + r_a',
    symbols: [
      { symbol: 'a', meaning: 'Semi-major axis of the elliptical orbit' },
      { symbol: 'b', meaning: 'Semi-minor axis = a√(1 - e²)' },
      { symbol: 'e', meaning: 'Eccentricity (0 ≤ e < 1 for bound elliptical orbit; e=0 is circle)' },
      { symbol: 'r_p', meaning: 'Perihelion distance (closest approach to Sun)' },
      { symbol: 'r_a', meaning: 'Aphelion distance (farthest point from Sun)' },
    ],
    why:
      'Under an inverse-square central attractive force (F ∝ 1/r²), the general bound solution of the equation of motion is an ellipse. Circular orbits are simply special cases where eccentricity e = 0.',
    keyPoints: [
      'The Sun is at one focus, NOT at the center of the ellipse.',
      'Perihelion is closest approach: r_p = a(1 - e).',
      'Aphelion is farthest approach: r_a = a(1 + e).',
      'Major axis: 2a = r_p + r_a. Distance between foci: 2ae.',
    ],
    traps: [
      '⚠ The Sun is never at the geometric center of the ellipse, only at one focus.',
    ],
  },

  keplerSecondLaw: {
    matchKeywords: [
      "kepler's second law",
      'kepler second law',
      "kepler's 2nd law",
      'kepler 2nd law',
      'second law of planetary',
      'law of areas',
      'areal velocity',
      'angular momentum',
      'faster at perihelion',
    ],
    title: "Kepler's Second Law (Law of Areas & Angular Momentum)",
    summary: 'Equal Areas in Equal Times & Angular Momentum Conservation:',
    answer:
      'The radius vector joining the Sun and a planet sweeps out equal areas in equal intervals of time (constant areal velocity: dA/dt = constant). A planet moves fastest at perihelion (closest) and slowest at aphelion (farthest).',
    formula: '\\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant} \\implies v_p r_p = v_a r_a',
    symbols: [
      { symbol: 'dA/dt', meaning: 'Areal velocity (area swept per unit time)' },
      { symbol: 'L', meaning: 'Orbital angular momentum = m (r × v) = constant' },
      { symbol: 'm', meaning: 'Mass of orbiting planet' },
      { symbol: 'v_p, v_a', meaning: 'Orbital speed at perihelion and aphelion' },
      { symbol: 'r_p, r_a', meaning: 'Radial distance at perihelion and aphelion' },
    ],
    why:
      'Gravitational pull acts directly toward the Sun (collinear with radius vector r⃗). Therefore, torque τ⃗ = r⃗ × F⃗ = 0. By Newton’s rotational law, τ⃗ = dL⃗/dt = 0, so orbital angular momentum L⃗ is strictly conserved!',
    keyPoints: [
      "Kepler's Second Law is a direct mathematical consequence of Angular Momentum Conservation.",
      'Velocity ratio: v_p / v_a = r_a / r_p = (1 + e) / (1 - e).',
      'Mechanical energy is conserved: (1/2)m v_p² - GMm/r_p = (1/2)m v_a² - GMm/r_a.',
    ],
    traps: [
      '⚠ Linear momentum is NOT conserved (direction and speed change). Angular momentum ABOUT THE SUN is conserved.',
    ],
  },

  keplerThirdLaw: {
    matchKeywords: [
      "kepler's third law",
      'kepler third law',
      "kepler's 3rd law",
      'kepler 3rd law',
      'third law of planetary',
      'law of periods',
      'harmonic law',
      't2',
      't^2',
      't2 proportional to a3',
      'orbital period',
    ],
    title: "Kepler's Third Law (Harmonic Law of Periods)",
    summary: 'The Square of Orbital Period is Proportional to the Cube of Semi-Major Axis:',
    answer:
      'The square of the orbital period T of revolution of any planet around the Sun is directly proportional to the cube of the semi-major axis a of its elliptical orbit: T² ∝ a³.',
    formula: 'T^2 = \\frac{4\\pi^2}{GM} a^3 \\implies \\left(\\frac{T_1}{T_2}\\right)^2 = \\left(\\frac{a_1}{a_2}\\right)^3',
    symbols: [
      { symbol: 'T', meaning: 'Orbital period of revolution' },
      { symbol: 'a', meaning: 'Semi-major axis (mean orbital radius)' },
      { symbol: 'M', meaning: 'Mass of central body (e.g. Sun or Earth)' },
      { symbol: 'G', meaning: 'Universal Gravitational Constant' },
    ],
    why:
      'For circular orbit: centripetal balance m(v²/r) = GMm/r² gives v² = GM/r. Substituting orbital period T = 2πr / v gives T² = (4π²r²) / (GM/r) = (4π²/GM) r³. For an ellipse, r is replaced by semi-major axis a.',
    keyPoints: [
      'T² / a³ is an identical constant for all planets orbiting the SAME central body.',
      'Speed scaling: v ∝ 1/√a (planets further away move significantly slower).',
      'If radius doubles (a₂ = 2a₁), period increases by 2^(3/2) = √8 ≈ 2.83 times.',
    ],
    traps: [
      '⚠ When comparing two satellites around Earth and two planets around Sun, the constant (4π²/GM) is DIFFERENT because the central mass M is different!',
    ],
  },

  // --- TOPIC 5: SATELLITE & ESCAPE VELOCITY ---
  escapeVelocity: {
    matchKeywords: ['escape velocity', 'escape speed', 'v_e', 'how to escape', 'minimum speed to escape'],
    title: 'Escape Velocity (v_e) from Celestial Surfaces',
    summary: 'Minimum Velocity Required to Permanently Escape Gravitational Fields:',
    answer:
      'Escape velocity is the minimum projection speed required for an object launched from a celestial surface to overcome its gravitational potential well and reach infinity (r → ∞) with zero residual kinetic energy.',
    formula: 'v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR} = \\sqrt{2} \\cdot v_o',
    symbols: [
      { symbol: 'v_e', meaning: 'Escape velocity from surface (≈ 11.2 km/s on Earth)' },
      { symbol: 'g', meaning: 'Surface acceleration due to gravity (9.81 m/s² on Earth)' },
      { symbol: 'R', meaning: 'Radius of celestial body (6,371 km for Earth)' },
      { symbol: 'v_o', meaning: 'Surface circular orbital velocity (≈ 7.92 km/s)' },
    ],
    why:
      'By conservation of total mechanical energy, E_initial = E_final. At surface: (1/2)m v_e² - GMm/R. At infinity (r → ∞): U(∞) = 0 and K(∞) ≥ 0. Setting E_initial ≥ 0 yields v_e = √(2GM/R).',
    keyPoints: [
      'v_e is completely INDEPENDENT of projectile mass: a feather and a rocket need the exact same 11.2 km/s on Earth.',
      'v_e is INDEPENDENT of projection angle (in vacuum, ignoring air resistance and ground collision).',
      'Escape velocity is exactly √2 (≈ 1.414) times surface orbital speed: v_e = √2 v_o.',
      'On Moon: v_e ≈ 2.38 km/s (thermal gas speeds exceed this, which is why the Moon has no atmosphere!).',
    ],
    traps: [
      '⚠ Thinking heavier objects need higher escape speeds. Mass cancels completely out of the energy equation!',
    ],
  },

  orbitalVelocityEnergy: {
    matchKeywords: ['orbital velocity', 'orbital speed', 'v_o', 'satellite speed', 'circular orbit', 'energy of satellite', 'binding energy'],
    title: 'Orbital Velocity & Total Mechanical Energy of Satellites',
    summary: 'Orbital Speed, Kinetic, Potential, and Binding Energy in Orbit:',
    answer:
      'An orbiting satellite of mass m at distance r = (R + h) travels at orbital speed v_o = √(GM/r). Its total mechanical energy is negative (E = -GMm / 2r), proving it is trapped in a bound gravitational orbit.',
    formula: 'v_o = \\sqrt{\\frac{GM}{r}}, \\quad K = \\frac{GMm}{2r}, \\quad U = -\\frac{GMm}{r}, \\quad E = -\\frac{GMm}{2r}',
    symbols: [
      { symbol: 'v_o', meaning: 'Orbital velocity = √(GM/r)' },
      { symbol: 'K', meaning: 'Kinetic energy = (1/2) m v_o² = + GMm / 2r' },
      { symbol: 'U', meaning: 'Gravitational potential energy = - GMm / r = - 2K' },
      { symbol: 'E', meaning: 'Total mechanical energy = K + U = - GMm / 2r = - K = U/2' },
      { symbol: 'B.E.', meaning: 'Binding Energy = - E = + GMm / 2r' },
    ],
    why:
      'Gravitational attraction provides the required centripetal acceleration: m(v_o² / r) = GMm / r² ⇒ v_o² = GM/r. Because potential energy is twice the magnitude of kinetic energy and negative (Virial Theorem), total energy is negative.',
    keyPoints: [
      'Key Energy Ratio: E : K : U = -1 : 1 : -2.',
      'Binding Energy is the energy required to remove the satellite to infinity: B.E. = +GMm / 2r.',
      'If satellite speed increases by factor √2 (41.4%), total energy becomes zero and it escapes into a parabolic trajectory.',
      'If orbital radius decreases (due to atmospheric drag), potential energy decreases, kinetic energy INCREASES, and the satellite actually speeds up while spiraling down!',
    ],
    traps: [
      '⚠ When height increases, orbital speed DECREASES (v_o ∝ 1/√r), but total energy INCREASES (becomes less negative).',
    ],
  },

  geostationarySatellites: {
    matchKeywords: ['geostationary', 'geosynchronous', 'parking orbit', '24 hours', '36000 km', 'communication satellite'],
    title: 'Geostationary & Geosynchronous Satellites',
    summary: 'Equatorial Satellites Synchronized with Earth’s Diurnal Rotation:',
    answer:
      'A geostationary satellite has an orbital period of exactly 24 hours (matching Earth’s diurnal rotation period), orbits in Earth’s equatorial plane from West to East, and therefore appears stationary relative to any ground observer.',
    formula: 'T = 24\\text{ hrs} \\implies r = \\left(\\frac{GMT^2}{4\\pi^2}\\right)^{1/3} \\approx 42,200\\text{ km}, \\quad h \\approx 35,800\\text{ km}',
    symbols: [
      { symbol: 'T', meaning: 'Orbital period = 24 hours (86,400 seconds)' },
      { symbol: 'r', meaning: 'Orbital radius from Earth’s centre ≈ 42,200 km ≈ 6.6 R_Earth' },
      { symbol: 'h', meaning: 'Height above Earth’s surface = r - R ≈ 35,800 km ≈ 36,000 km' },
      { symbol: 'v_o', meaning: 'Orbital speed ≈ 3.08 km/s' },
    ],
    why:
      'Applying Kepler’s Third Law T² = (4π²/GM) r³ for T = 86,400 s yields r ≈ 4.22 × 10⁷ m. Subtracting Earth’s radius R = 6.37 × 10⁶ m gives the altitude h ≈ 35,800 km.',
    keyPoints: [
      'Must orbit strictly in the EQUATORIAL plane (orbit plane cannot be tilted or polar).',
      'Direction of orbit must be WEST to EAST (prograde, matching Earth rotation).',
      'Used universally for telecommunications, GPS synchronization, and television broadcast.',
      'Three geostationary satellites separated by 120° can cover virtually the entire globe (excluding polar caps).',
    ],
    traps: [
      '⚠ A geosynchronous satellite has T = 24 hrs but may be inclined to the equator (traces a figure-8 in the sky). Only an EQUATORIAL geosynchronous orbit is truly geostationary!',
    ],
  },

  weightlessnessInOrbit: {
    matchKeywords: ['weightlessness', 'free fall in orbit', 'normal reaction zero', 'apparent weight'],
    title: 'Weightlessness in Orbit (Physics of Free Fall)',
    summary: 'Why Astronauts Float in Orbit (Zero Normal Reaction):',
    answer:
      'Astronauts inside an orbiting satellite feel weightless not because gravity is zero, but because both the astronaut and the spacecraft are in perpetual free fall toward the planet with the exact same acceleration (a = g_local).',
    formula: 'N = m (g_{\\text{local}} - a) = m (g - g) = 0\\text{ N}',
    symbols: [
      { symbol: 'N', meaning: 'Normal reaction force exerted by the spaceship floor = 0' },
      { symbol: 'g_local', meaning: 'Actual gravitational acceleration at orbit altitude (≈ 8.7 m/s² on ISS)' },
      { symbol: 'a', meaning: 'Centripetal free-fall acceleration = g_local' },
    ],
    why:
      'At the International Space Station altitude (h ≈ 400 km), gravity is still ~89% as strong as on the surface (g ≈ 8.7 m/s²). The feeling of weight requires a supporting contact force (normal reaction N). Since both floor and astronaut fall at the same rate, N = 0.',
    keyPoints: [
      'Gravity in orbit is definitely NOT zero! True weight W = mg_local is active and curves the path into orbit.',
      'Apparent weight is ZERO because there is no normal reaction force.',
      'Any freely falling frame of reference is a locally inertial frame (Einstein’s Equivalence Principle).',
    ],
    traps: [
      '⚠ Never say "gravity is zero in space". Gravity is what holds the satellite and Moon in orbit!',
    ],
  },
}

/**
 * Searches the topic knowledge base for best-matching topic
 */
function findTopicMatch(text = '', topicKey = null) {
  const lower = text.toLowerCase()

  // 1. Specificity-ranked lookup across knowledge base (longest matching keyword wins)
  let bestMatch = null
  let maxMatchLength = 0

  for (const item of Object.values(TOPIC_KNOWLEDGE_BASE)) {
    for (const kw of item.matchKeywords) {
      const kwLower = kw.toLowerCase()
      if (lower.includes(kwLower) && kwLower.length > maxMatchLength) {
        maxMatchLength = kwLower.length
        bestMatch = item
      }
    }
  }

  if (bestMatch) {
    return bestMatch
  }

  // 2. Module fallback mappings
  if (lower.includes('height') || lower.includes('altitude')) return TOPIC_KNOWLEDGE_BASE.variationWithHeight
  if (lower.includes('depth')) return TOPIC_KNOWLEDGE_BASE.variationWithDepth
  if (lower.includes('rotation') || lower.includes('latitude')) return TOPIC_KNOWLEDGE_BASE.variationWithLatitudeRotation
  if (lower.includes('kepler')) return TOPIC_KNOWLEDGE_BASE.keplerThirdLaw
  if (lower.includes('escape')) return TOPIC_KNOWLEDGE_BASE.escapeVelocity
  if (lower.includes('orbital') || lower.includes('satellite')) return TOPIC_KNOWLEDGE_BASE.orbitalVelocityEnergy
  if (lower.includes('potential')) return TOPIC_KNOWLEDGE_BASE.potentialWhyNegative
  if (lower.includes('field')) return TOPIC_KNOWLEDGE_BASE.gravitationalField
  if (lower.includes('universal') || lower.includes('newton')) return TOPIC_KNOWLEDGE_BASE.universalLaw

  return null
}

/**
 * Handles Active Quiz Question Queries with customized pedagogical scaffolding
 */
function handleQuizQuestionResponse({ prompt, context, level }) {
  const q = context.question
  const questionText = q?.question || 'the active quiz question'
  const concept = q?.concept || context.topic || 'Gravitational Physics'
  const formula = q?.formula || 'F = \\frac{G m_1 m_2}{r^2}'
  const stepByStep = q?.stepByStep || null

  return {
    type: 'quizGuidance',
    level,
    isFallback: true,
    providerName: 'Local Physics Engine',
    summary: `Guidance for Question #${q?.number || ''}: ${concept}`,
    answer: `Let's analyze this problem step-by-step: "${questionText}"`,
    formula: formula,
    why:
      stepByStep?.given
        ? `Given: ${stepByStep.given}. Asked: ${stepByStep.asked || 'Determine correct parameter'}. Principle: ${q?.hint || 'Apply core gravitation law'}.`
        : `This question tests ${concept}. Read the given parameters carefully and apply the governing equation.`,
    keyPoints: [
      `Governing topic: ${context.topic || 'Gravitation'} (${level} level).`,
      'Always convert all distance parameters to SI meters (e.g. km to × 10³ m) before calculating.',
      stepByStep?.keyTakeaway || 'Verify the dimensional consistency of your chosen option.',
    ],
    traps: [
      stepByStep?.commonTrap
        ? `⚠ Common Trap: ${stepByStep.commonTrap}`
        : '⚠ Be cautious of algebraic powers and radial distance measured from planetary surface vs planetary centre.',
    ],
    similarProblem: {
      title: 'Practice Clue:',
      question: 'Identify which variable is held constant in this problem before setting up ratios.',
      hint: 'Ratios allow constants like G and 4π² to cancel completely!',
    },
  }
}

/**
 * Handles Active 3D Experiment Telemetry Queries
 */
function handleExperimentTelemetryResponse({ prompt, context, level }) {
  const telem = context.telemetry || {}
  const planet = telem.planetName || 'Earth'
  const gVal = telem.gravity || '9.81 m/s²'
  const massVal = telem.mass || '70 kg'
  const weightVal = telem.weight || '686.7 N'

  return {
    type: 'experimentGuidance',
    level,
    isFallback: true,
    providerName: 'Local Physics Engine',
    summary: `Simulation Telemetry Analysis (${planet}):`,
    answer: `In our active 3D lab on ${planet}, surface gravitational acceleration is g = ${gVal}. An object of mass ${massVal} has a downward gravitational weight of W = ${weightVal}.`,
    formula: 'W = m \\cdot g = m \\left(\\frac{GM_{\\text{planet}}}{R_{\\text{planet}}^2}\\right)',
    symbols: [
      { symbol: 'm', meaning: `Object Mass = ${massVal} (Scalar, invariant across planets)` },
      { symbol: 'g', meaning: `Local Surface Gravity = ${gVal} (Determined by planet's mass and radius)` },
      { symbol: 'W', meaning: `Local Weight Force = ${weightVal} (The downward gravitational pull)` },
    ],
    why:
      `The mass ${massVal} represents the object's fundamental inertia, which never changes. Its weight ${weightVal} is the force with which ${planet} pulls it toward the planetary center. The grid deformation beneath the planet visualizes the curvature of the spacetime potential well.`,
    keyPoints: [
      `Weight is directly proportional to local surface gravity: W ∝ g.`,
      `On the Moon (g ≈ 1.62 m/s²), weight is 1/6th of Earth; on Jupiter (g ≈ 24.79 m/s²), weight is ~2.5x Earth.`,
      `Mass remains exactly ${massVal} regardless of celestial location.`,
    ],
    traps: [
      '⚠ Do not confuse mass [kg] with weight [N]. Bathroom scales display kg on Earth by assuming g = 9.81 m/s².',
    ],
  }
}

/**
 * Main Tutor Service Query API
 *
 * Checks if real AI provider endpoint is configured.
 * If configured: sends prompt, context, history, and optional image to the AI backend.
 * If not configured: runs the comprehensive Local Fallback Engine with a clear label.
 */
export async function queryTutor({
  prompt,
  context = {},
  history = [],
  level = 'LEARN',
  image = null,
  hintLevel = 1,
}) {
  const providerStatus = getProviderStatus()

  // Real AI provider call if configured
  if (providerStatus === PROVIDER_STATUS.CONFIGURED && AI_ENDPOINT) {
    try {
      const response = await fetch(AI_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tutor: AI_TUTOR_NAME,
          prompt,
          level,
          context,
          history: history.slice(-6), // Send last 6 turns for context
          image,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        return {
          ...data,
          isFallback: false,
          providerName: 'Connected AI Model',
        }
      }
      console.warn('[PandaTutor] External AI Provider returned error, falling back to local physics engine.')
    } catch (err) {
      console.warn('[PandaTutor] External AI Provider connection failed, falling back to local physics engine.', err)
    }
  }

  // Local fallback engine with realistic brief latency
  await new Promise((r) => setTimeout(r, 450))
  return generateLocalFallbackResponse({ prompt, context, level, image, hintLevel })
}
