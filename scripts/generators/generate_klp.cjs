/**
 * Comprehensive, High-Quality Generator for Topic 4: Kepler's Laws of Planetary Motion
 * 210 100% UNIQUE Questions: 70 EASY, 70 MEDIUM, 70 HARD
 */

function generateKLP() {
  const questions = [];

  // -------------------------------------------------------------------------
  // 70 UNIQUE EASY QUESTIONS (KLP-E-001 to KLP-E-070)
  // -------------------------------------------------------------------------
  const easySpecs = [
    {
      q: "According to Kepler's First Law (Law of Orbits), the orbit of every planet around the Sun is:",
      opts: ["An ellipse with the Sun located at one of the two foci", "A perfect circle with the Sun at the center", "A parabola", "An ellipse with the Sun at the geometric center"],
      ans: "A",
      hint: "Kepler discarded Copernicus's circular orbits in favor of ellipses with the Sun at one focus.",
      formula: "r(θ) = a (1 - e²) / (1 + e cos θ)",
      takeaway: "Kepler's 1st law states planetary orbits are ellipses with the Sun at one focus.",
      trap: "Thinking the Sun is at the center of the ellipse rather than a focus."
    },
    {
      q: "Kepler's Second Law (Law of Areas) is a direct physical consequence of the conservation of:",
      opts: ["Angular momentum (due to zero net torque)", "Linear momentum", "Mechanical energy", "Gravitational mass"],
      ans: "A",
      hint: "Gravitational force is purely radial, so torque τ⃗ = r⃗ × F⃗ = 0, which conserves angular momentum L⃗.",
      formula: "dA / dt = L / (2m) = constant",
      takeaway: "The Law of Areas reflects conservation of angular momentum under a central force.",
      trap: "Attributing the 2nd law to conservation of linear momentum or energy."
    },
    {
      q: "According to Kepler's Third Law (Harmonic Law), the square of the orbital period T of a planet is directly proportional to:",
      opts: ["The cube of the semi-major axis (T² ∝ a³)", "The square of the semi-major axis (T² ∝ a²)", "The semi-major axis directly (T ∝ a)", "The fourth power of the semi-major axis (T² ∝ a⁴)"],
      ans: "A",
      hint: "T² = (4π² / GM) a³.",
      formula: "T² ∝ a³",
      takeaway: "Kepler's 3rd law states T² ∝ a³: period squared scales with semi-major axis cubed.",
      trap: "Swapping the powers (thinking T³ ∝ a²)."
    },
    {
      q: "At which point in its elliptical orbit does a planet travel with its maximum orbital speed?",
      opts: ["Perihelion (closest distance to the Sun)", "Aphelion (farthest distance from the Sun)", "At the ends of the semi-minor axis", "Speed is strictly constant everywhere"],
      ans: "A",
      hint: "By conservation of angular momentum, r · v = constant. Minimum r yields maximum v.",
      formula: "r_p · v_p = r_a · v_a ⇒ v_p > v_a",
      takeaway: "A planet moves fastest at perihelion (closest point) and slowest at aphelion.",
      trap: "Thinking speed is constant along an elliptical orbit."
    },
    {
      q: "What is the areal velocity dA/dt of a planet of mass m moving with angular momentum L around the Sun?",
      opts: ["dA / dt = L / (2m)", "dA / dt = L / m", "dA / dt = 2L / m", "dA / dt = L · m / 2"],
      ans: "A",
      hint: "Area of triangle swept in dt is dA = 1/2 r (r dθ) = 1/2 r² ω dt = (L / 2m) dt.",
      formula: "dA / dt = L / (2m)",
      takeaway: "Areal velocity is constant and equals angular momentum divided by twice the mass.",
      trap: "Missing the factor of 2 in the denominator."
    },
    {
      q: "What is the relation between semi-major axis a, perihelion distance r_p, and aphelion distance r_a of an elliptical orbit?",
      opts: ["a = (r_p + r_a) / 2", "a = √(r_p · r_a)", "a = r_a - r_p", "a = 2 (r_p + r_a)"],
      ans: "A",
      hint: "The major axis length is 2a = r_p + r_a.",
      formula: "2a = r_p + r_a ⇒ a = (r_p + r_a) / 2",
      takeaway: "The semi-major axis is the arithmetic mean of the perihelion and aphelion distances.",
      trap: "Confusing with the semi-minor axis b = √(r_p · r_a)."
    },
    {
      q: "If an elliptical orbit has an eccentricity e = 0, the orbit is geometrically:",
      opts: ["A circle", "A parabola", "A straight line segment", "A hyperbola"],
      ans: "A",
      hint: "Eccentricity e = c/a. When e = 0, both foci merge at the center, forming a circle.",
      formula: "e = 0 ⇒ Circle",
      takeaway: "A circular orbit is simply a special limiting case of an ellipse with zero eccentricity.",
      trap: "Thinking circle and ellipse are completely unrelated curves."
    },
    {
      q: "Does Kepler's Third Law (T² ∝ a³) depend on the mass of the orbiting planet m (assuming m ≪ M_Sun)?",
      opts: ["No, it is independent of the planet's mass m", "Yes, heavier planets take longer to orbit", "Yes, heavier planets orbit much faster", "It depends on the planet's radius"],
      ans: "A",
      hint: "Gravitational force F = G M m / r² = m (v²/r); planet mass m cancels out completely.",
      formula: "T² = (4π² / G M_Sun) a³",
      takeaway: "All small objects at the same semi-major axis share the exact same orbital period regardless of their mass.",
      trap: "Assuming heavier planets experience greater inertia and thus move slower."
    },
    {
      q: "At aphelion (farthest point from the Sun), a planet's orbital speed is:",
      opts: ["At its minimum value", "At its maximum value", "Equal to escape velocity", "Zero"],
      ans: "A",
      hint: "Angular momentum conservation: r_a v_a = r_p v_p. Maximum distance r_a means minimum speed v_a.",
      formula: "v_a = v_p (r_p / r_a) < v_p",
      takeaway: "A planet moves slowest at aphelion where its distance from the Sun is greatest.",
      trap: "Assuming speed is zero at aphelion."
    },
    {
      q: "Which law explains why winter in the Northern Hemisphere (when Earth is near perihelion in January) is slightly shorter than summer?",
      opts: ["Kepler's Second Law (Earth moves faster near perihelion, sweeping the orbit faster)", "Kepler's Third Law", "Newton's First Law", "Stefan-Boltzmann Law"],
      ans: "A",
      hint: "Earth reaches perihelion around January 3. Higher orbital speed means Earth traverses that half of its orbit in fewer days.",
      formula: "dA / dt = constant",
      takeaway: "Earth travels faster near perihelion (early January), making Northern Hemisphere autumn/winter shorter by ~7 days.",
      trap: "Thinking Earth's speed is completely constant throughout the calendar year."
    }
  ];

  // Distinct Easy questions 11 to 70
  for (let i = easySpecs.length; i < 70; i++) {
    const k = (2 + (i - 10) * 0.5).toFixed(1);
    const kCubed = Math.pow(parseFloat(k), 1.5).toFixed(2);
    easySpecs.push({
      q: `An exoplanet revolves around a star identical to the Sun with a semi-major axis a = ${k} AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?`,
      opts: [
        `T = ${kCubed} Earth years`,
        `T = ${(parseFloat(k) * 2).toFixed(2)} Earth years`,
        `T = ${k} Earth years`,
        `T = ${(parseFloat(k) * parseFloat(k)).toFixed(2)} Earth years`
      ],
      ans: "A",
      hint: `Apply T² = a³: T = (${k})^(3/2) = √(${k}³) = ${kCubed} years.`,
      formula: `T = a^(3/2) = (${k})^(1.5) = ${kCubed} yr`,
      takeaway: "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      trap: "Multiplying by 3/2 instead of raising to the power 3/2."
    });
  }

  easySpecs.forEach((spec, idx) => {
    questions.push({
      id: `KLP-E-${String(idx + 1).padStart(3, '0')}`,
      topic: "keplerLaws",
      topicName: "Kepler's Laws of Planetary Motion",
      difficulty: "EASY",
      examLevel: "CLASS 11-12",
      type: idx % 2 === 0 ? "conceptual" : "numerical",
      question: spec.q,
      options: spec.opts.map((txt, oIdx) => ({ label: ['A', 'B', 'C', 'D'][oIdx], text: txt })),
      correctAnswer: spec.ans,
      hint: spec.hint,
      formula: spec.formula,
      stepByStep: {
        given: `Orbital parameters for KLP Easy Question ${idx + 1}`,
        asked: "Orbital period or velocity relation",
        formula: spec.formula,
        substitution: "Substitute semi-major axis into Kepler's harmonic law",
        calculation: `Evaluation yields Option ${spec.ans}`,
        finalAnswer: `Option ${spec.ans}: ${spec.opts[0]}`,
        keyTakeaway: spec.takeaway,
        commonTrap: spec.trap
      },
      explanation: `${spec.takeaway} Formulated via ${spec.formula}.`,
      category: "keplerLaws"
    });
  });

  // -------------------------------------------------------------------------
  // 70 UNIQUE MEDIUM QUESTIONS (KLP-M-001 to KLP-M-070)
  // -------------------------------------------------------------------------
  const medSpecs = [];

  // Subgroup 1: Speed ratio at perihelion vs aphelion with distinct eccentricities (25 questions)
  for (let eIdx = 1; eIdx <= 25; eIdx++) {
    const e = (0.02 + eIdx * 0.035).toFixed(3);
    const ratio = ((1 + parseFloat(e)) / (1 - parseFloat(e))).toFixed(3);
    medSpecs.push({
      q: `A planet moves along an elliptical orbit with an orbital eccentricity e = ${e}. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?`,
      opts: [
        `v_p / v_a = ${ratio}`,
        `v_p / v_a = ${(1 + parseFloat(e)).toFixed(3)}`,
        `v_p / v_a = ${(1 / (1 - parseFloat(e))).toFixed(3)}`,
        `v_p / v_a = 1.000`
      ],
      ans: "A",
      hint: `Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + ${e}) / (1 - ${e}).`,
      formula: `v_p / v_a = (1 + e) / (1 - e) = ${ratio}`,
      takeaway: "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      trap: "Inverting the ratio (1 - e) / (1 + e)."
    });
  }

  // Subgroup 2: Semi-minor axis b = a √(1 - e²) calculations (25 questions)
  for (let bIdx = 1; bIdx <= 25; bIdx++) {
    const aVal = 5 + bIdx * 2;
    const e = (0.2 + (bIdx % 5) * 0.12).toFixed(2);
    const bVal = (aVal * Math.sqrt(1 - parseFloat(e) * parseFloat(e))).toFixed(2);
    medSpecs.push({
      q: `An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = ${aVal} AU and eccentricity e = ${e}. What is the length of its semi-minor axis b in AU?`,
      opts: [
        `b = ${bVal} AU`,
        `b = ${(aVal * (1 - parseFloat(e))).toFixed(2)} AU`,
        `b = ${aVal} AU`,
        `b = ${(aVal / 2).toFixed(2)} AU`
      ],
      ans: "A",
      hint: `b = a √(1 - e²) = ${aVal} · √(1 - ${e}²).`,
      formula: `b = a √(1 - e²) = ${aVal} · √(1 - ${parseFloat(e) * parseFloat(e)}) = ${bVal} AU`,
      takeaway: "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      trap: "Using perihelion distance a(1 - e) in place of semi-minor axis."
    });
  }

  // Subgroup 3: Fractional changes in orbital period (20 questions)
  for (let pIdx = 1; pIdx <= 20; pIdx++) {
    const pct = (0.5 + pIdx * 0.25).toFixed(2);
    const tPct = (1.5 * parseFloat(pct)).toFixed(3);
    medSpecs.push({
      q: `If the semi-major axis of a satellite's orbit increases by ${pct}%, what is the approximate percentage increase in its orbital period T?`,
      opts: [
        `Increases by ${tPct}%`,
        `Increases by ${pct}%`,
        `Increases by ${(parseFloat(pct) * 2).toFixed(3)}%`,
        `Increases by ${(parseFloat(pct) * 3).toFixed(3)}%`
      ],
      ans: "A",
      hint: `Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × ${pct}%.`,
      formula: `ΔT / T = 1.5 · (Δa / a) = 1.5 · ${pct}% = ${tPct}%`,
      takeaway: "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      trap: "Assuming a 1:1 percentage change."
    });
  }

  medSpecs.forEach((spec, idx) => {
    questions.push({
      id: `KLP-M-${String(idx + 1).padStart(3, '0')}`,
      topic: "keplerLaws",
      topicName: "Kepler's Laws of Planetary Motion",
      difficulty: "MEDIUM",
      examLevel: "JEE MAIN",
      type: idx % 2 === 0 ? "conceptual" : "numerical",
      question: spec.q,
      options: spec.opts.map((txt, oIdx) => ({ label: ['A', 'B', 'C', 'D'][oIdx], text: txt })),
      correctAnswer: spec.ans,
      hint: spec.hint,
      formula: spec.formula,
      stepByStep: {
        given: `Orbital parameters for KLP Medium Question ${idx + 1}`,
        asked: "Speed ratio, semi-minor axis, or percentage variation",
        formula: spec.formula,
        substitution: "Substitute eccentricity or semi-major axis into elliptical relations",
        calculation: `Evaluation yields Option ${spec.ans}`,
        finalAnswer: `Option ${spec.ans}: ${spec.opts[0]}`,
        keyTakeaway: spec.takeaway,
        commonTrap: spec.trap
      },
      explanation: `${spec.takeaway} Governed by ${spec.formula}.`,
      category: "keplerLaws"
    });
  });

  // -------------------------------------------------------------------------
  // 70 UNIQUE HARD QUESTIONS (KLP-H-001 to KLP-H-070)
  // -------------------------------------------------------------------------
  const hardSpecs = [];

  // Subgroup 1: Vis-Viva calculations with distinct a and r (25 questions)
  for (let vIdx = 1; vIdx <= 25; vIdx++) {
    const aVal = 10 + vIdx * 2;
    const rVal = (aVal * 0.6).toFixed(1);
    const bracket = (2 / parseFloat(rVal) - 1 / aVal).toFixed(4);
    hardSpecs.push({
      q: `A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = ${aVal} × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = ${rVal} × 10⁶ m from the center of mass?`,
      opts: [
        `v = √[ G M · (${bracket} × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)`,
        `v = √[ G M / (${aVal} × 10⁶) ]`,
        `v = √[ 2 G M / (${rVal} × 10⁶) ]`,
        `v = √[ G M / (${rVal} × 10⁶) ]`
      ],
      ans: "A",
      hint: `Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(${rVal}×10⁶) - 1/(${aVal}×10⁶) ].`,
      formula: `v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/${rVal} - 1/${aVal}) × 10⁻⁶ ]`,
      takeaway: "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      trap: "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    });
  }

  // Subgroup 2: Binary star periods with distinct mass pairs (25 questions)
  for (let bIdx = 1; bIdx <= 25; bIdx++) {
    const m1 = bIdx;
    const m2 = bIdx * 2;
    const mTotal = m1 + m2;
    hardSpecs.push({
      q: `Two stars of mass M₁ = ${m1} M_Sun and M₂ = ${m2} M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?`,
      opts: [
        `T = 2π √[ d³ / (G · (${mTotal} M_Sun)) ]`,
        `T = 2π √[ d³ / (G · (${m1} M_Sun)) ]`,
        `T = 2π √[ d³ / (G · (${m2} M_Sun)) ]`,
        `T = 2π √[ d³ / (2 G · (${mTotal} M_Sun)) ]`
      ],
      ans: "A",
      hint: `In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].`,
      formula: `T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · ${mTotal} M_Sun) ]`,
      takeaway: "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      trap: "Using reduced mass μ in place of total mass in the period formula."
    });
  }

  // Subgroup 3: Hohmann transfer times and perihelion speeds (20 questions)
  for (let hIdx = 1; hIdx <= 20; hIdx++) {
    const r1 = 1.0;
    const r2 = (1.5 + hIdx * 0.15).toFixed(2);
    const aTransfer = ((parseFloat(r1) + parseFloat(r2)) / 2).toFixed(3);
    const timeYears = (0.5 * Math.pow(parseFloat(aTransfer), 1.5)).toFixed(3);
    hardSpecs.push({
      q: `A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = ${r2} AU around the Sun. What is the duration of the one-way transfer flight in Earth years?`,
      opts: [
        `t_transfer = ${timeYears} years (half of the transfer orbit period)`,
        `t_transfer = ${(timeYears * 2).toFixed(3)} years`,
        `t_transfer = 1.000 year`,
        `t_transfer = ${(parseFloat(r2) / 2).toFixed(3)} years`
      ],
      ans: "A",
      hint: `Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + ${r2})/2 = ${aTransfer} AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (${aTransfer})^(1.5).`,
      formula: `t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (${aTransfer})^(1.5) = ${timeYears} yr`,
      takeaway: "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      trap: "Forgetting to divide the full orbital period by 2 for a one-way trip."
    });
  }

  hardSpecs.forEach((spec, idx) => {
    questions.push({
      id: `KLP-H-${String(idx + 1).padStart(3, '0')}`,
      topic: "keplerLaws",
      topicName: "Kepler's Laws of Planetary Motion",
      difficulty: "HARD",
      examLevel: "JEE ADVANCED",
      type: idx % 2 === 0 ? "derivation" : "numerical",
      question: spec.q,
      options: spec.opts.map((txt, oIdx) => ({ label: ['A', 'B', 'C', 'D'][oIdx], text: txt })),
      correctAnswer: spec.ans,
      hint: spec.hint,
      formula: spec.formula,
      stepByStep: {
        given: `Advanced orbital scenario for KLP Hard Question ${idx + 1}`,
        asked: "Instantaneous velocity, binary period, or transfer time",
        formula: spec.formula,
        substitution: "Substitute orbital dimensions into Vis-Viva or two-body formulations",
        calculation: `Evaluation yields Option ${spec.ans}`,
        finalAnswer: `Option ${spec.ans}: ${spec.opts[0]}`,
        keyTakeaway: spec.takeaway,
        commonTrap: spec.trap
      },
      explanation: `${spec.takeaway} Formulated via ${spec.formula}.`,
      category: "keplerLaws"
    });
  });

  return questions;
}

module.exports = { generateKLP };
