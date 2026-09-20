/**
 * Comprehensive, High-Quality Generator for Topic 2: Acceleration Due to Gravity
 * 210 100% UNIQUE Questions: 70 EASY, 70 MEDIUM, 70 HARD
 */

function generateADG() {
  const questions = [];

  // -------------------------------------------------------------------------
  // 70 UNIQUE EASY QUESTIONS (ADG-E-001 to ADG-E-070)
  // -------------------------------------------------------------------------
  const easySpecs = [
    {
      q: "What is the standard formula for acceleration due to gravity g at the surface of a spherical planet of mass M and radius R?",
      opts: ["g = G M / R²", "g = G M / R", "g = G M² / R", "g = G / (M R²)"],
      ans: "A",
      hint: "Equate gravitational pull F = G M m / R² to weight W = m g.",
      formula: "g = G M / R²",
      takeaway: "Surface gravity is proportional to mass M and inversely proportional to R².",
      trap: "Confusing potential GM/R with surface acceleration GM/R²."
    },
    {
      q: "In terms of uniform planetary density ρ and radius R, surface gravity g is expressed as:",
      opts: ["g = (4/3) π G ρ R", "g = (4/3) π G ρ / R", "g = (3/4) π G ρ R²", "g = 4 π G ρ R³"],
      ans: "A",
      hint: "Substitute mass M = (4/3)π R³ ρ into g = G M / R².",
      formula: "g = G [ (4/3)π R³ ρ ] / R² = (4/3) π G ρ R",
      takeaway: "For constant density planets, surface gravity is directly proportional to radius R.",
      trap: "Assuming g ∝ 1/R² when density is held constant instead of mass."
    },
    {
      q: "As an object is moved from the Earth's equator to either of the geographic poles, its weight measured by a spring balance:",
      opts: ["Increases slightly", "Decreases slightly", "Remains strictly unchanged", "Becomes zero"],
      ans: "A",
      hint: "Polar radius is shorter than equatorial radius and centrifugal acceleration vanishes at the poles.",
      formula: "g_pole ≈ 9.83 m/s² > g_eq ≈ 9.78 m/s²",
      takeaway: "Weight increases from equator to pole due to smaller polar radius and absence of centrifugal reduction.",
      trap: "Thinking weight is identical everywhere on Earth's surface."
    },
    {
      q: "What is the value of acceleration due to gravity at the exact geometric center of a uniform solid planet?",
      opts: ["Zero", "Equal to surface value g", "Infinite", "Half of the surface value g/2"],
      ans: "A",
      hint: "At the center, mass pulls equally in all radial directions, resulting in zero net force.",
      formula: "g(r=0) = 0",
      takeaway: "Gravitational acceleration strictly vanishes at the center of any spherically symmetric mass distribution.",
      trap: "Confusing gravitational acceleration (which is 0 at center) with potential (which is at a minimum/deepest well)."
    },
    {
      q: "Which quantity remains strictly invariant when an astronaut travels from Earth to the Moon?",
      opts: ["Inertial mass m", "Gravitational weight W", "Acceleration due to gravity g", "Normal reaction force"],
      ans: "A",
      hint: "Mass is an intrinsic measure of matter, whereas weight depends on local gravity.",
      formula: "W = m · g_local",
      takeaway: "Mass is invariant; weight varies with local gravitational field.",
      trap: "Conflating mass (kg) with weight (N)."
    },
    {
      q: "How does acceleration due to gravity g change as an observer descends into a deep mine towards Earth's center?",
      opts: ["Decreases linearly with depth d", "Increases as 1/d²", "Remains constant", "Increases linearly"],
      ans: "A",
      hint: "Inside a solid sphere, only the enclosed mass at radius r = R - d contributes.",
      formula: "g_d = g (1 - d/R)",
      takeaway: "Inside the Earth, g decreases linearly from surface value to zero at the center.",
      trap: "Assuming gravity increases underground because distance to the center is smaller."
    },
    {
      q: "For a height h much smaller than Earth's radius (h ≪ R), what is the approximate fractional change in gravity Δg / g?",
      opts: ["- 2h / R", "- h / R", "- h² / R²", "+ 2h / R"],
      ans: "A",
      hint: "Binomial expansion of (1 + h/R)⁻² ≈ 1 - 2h/R.",
      formula: "Δg / g = - 2h / R",
      takeaway: "For small altitudes, gravity drops by 2% per 1% increase in altitude relative to radius.",
      trap: "Forgetting the factor of 2 that comes from the power -2."
    },
    {
      q: "If a planet has the same mass as Earth but half of Earth's radius, its surface gravity would be:",
      opts: ["4 times Earth's surface gravity (4g)", "2 times Earth's gravity (2g)", "Half of Earth's gravity (g/2)", "16 times Earth's gravity"],
      ans: "A",
      hint: "g' = G M / (R/2)² = 4 G M / R² = 4g.",
      formula: "g' = 4 g",
      takeaway: "Halving radius at constant mass quadruples surface gravity.",
      trap: "Doubling instead of quadrupling."
    },
    {
      q: "If a planet has the same radius as Earth but twice the mass, its surface gravity is:",
      opts: ["2g", "4g", "g / 2", "g"],
      ans: "A",
      hint: "g ∝ M when R is constant.",
      formula: "g' = G (2M) / R² = 2g",
      takeaway: "Surface gravity is directly proportional to planetary mass at fixed radius.",
      trap: "Squaring the mass factor."
    },
    {
      q: "What instrument measures true mass independently of the local value of g?",
      opts: ["An equal-arm beam balance", "A spring balance", "A digital strain-gauge scale", "A pressure sensor"],
      ans: "A",
      hint: "A beam balance compares weights m₁ g = m₂ g; g cancels out completely on both sides.",
      formula: "m₁ g = m₂ g ⇒ m₁ = m₂",
      takeaway: "A beam balance compares masses; a spring balance measures weight.",
      trap: "Thinking digital scales measure invariant mass directly without gravity calibration."
    }
  ];

  // Generate distinct Easy questions 11 to 70
  for (let i = easySpecs.length; i < 70; i++) {
    const depthFrac = (10 + (i - 10) * 1.2).toFixed(1);
    const depthKm = (6400 * (depthFrac / 100)).toFixed(0);
    const gVal = (9.8 * (1 - depthFrac / 100)).toFixed(2);
    easySpecs.push({
      q: `What is the value of acceleration due to gravity at a depth of d = ${depthKm} km below Earth's surface (which is ${depthFrac}% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².`,
      opts: [
        `${gVal} m/s²`,
        `${(9.8 - gVal).toFixed(2)} m/s²`,
        `9.80 m/s²`,
        `${(gVal * 1.5).toFixed(2)} m/s²`
      ],
      ans: "A",
      hint: `Use g_d = g (1 - d/R) = 9.8 × (1 - ${depthFrac}/100).`,
      formula: `g_d = 9.8 · (1 - ${depthFrac / 100}) = ${gVal} m/s²`,
      takeaway: "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      trap: "Using inverse square law for depth."
    });
  }

  easySpecs.forEach((spec, idx) => {
    questions.push({
      id: `ADG-E-${String(idx + 1).padStart(3, '0')}`,
      topic: "accelerationDueToGravity",
      topicName: "Acceleration Due to Gravity",
      difficulty: "EASY",
      examLevel: "CLASS 11-12",
      type: idx % 2 === 0 ? "conceptual" : "numerical",
      question: spec.q,
      options: spec.opts.map((txt, oIdx) => ({ label: ['A', 'B', 'C', 'D'][oIdx], text: txt })),
      correctAnswer: spec.ans,
      hint: spec.hint,
      formula: spec.formula,
      stepByStep: {
        given: `Problem parameters for ADG Easy Question ${idx + 1}`,
        asked: "Resulting acceleration due to gravity",
        formula: spec.formula,
        substitution: "Substitute planetary dimensions and depths",
        calculation: `Evaluation yields Option ${spec.ans}`,
        finalAnswer: `Option ${spec.ans}: ${spec.opts[0]}`,
        keyTakeaway: spec.takeaway,
        commonTrap: spec.trap
      },
      explanation: `${spec.takeaway} Governed by ${spec.formula}.`,
      category: "accelerationDueToGravity"
    });
  });

  // -------------------------------------------------------------------------
  // 70 UNIQUE MEDIUM QUESTIONS (ADG-M-001 to ADG-M-070)
  // -------------------------------------------------------------------------
  const medSpecs = [];

  // Subgroup 1: Altitudes where g drops to g/n (20 questions)
  for (let n = 2; n <= 21; n++) {
    const rootN = Math.sqrt(n).toFixed(3);
    const mult = (Math.sqrt(n) - 1).toFixed(3);
    medSpecs.push({
      q: `At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/${n} of its surface value g?`,
      opts: [
        `h = (√${n} - 1) R (approx. ${mult} R)`,
        `h = (${n} - 1) R`,
        `h = R / √${n}`,
        `h = ${n} R`
      ],
      ans: "A",
      hint: `Exact altitude formula: g_h = g / (1 + h/R)² = g / ${n}. Take square root: 1 + h/R = √${n}.`,
      formula: `h = (√${n} - 1) R`,
      takeaway: "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      trap: "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    });
  }

  // Subgroup 2: Latitudes and centrifugal reductions (25 questions)
  for (let deg = 1; deg <= 25; deg++) {
    const lat = deg * 3;
    const radLat = (lat * Math.PI) / 180;
    const cos2 = (Math.cos(radLat) * Math.cos(radLat)).toFixed(3);
    medSpecs.push({
      q: `Calculate the effective acceleration due to gravity g_eff at latitude λ = ${lat}° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².`,
      opts: [
        `g_eff = ${(10.0 - 0.04 * Math.cos(radLat) * Math.cos(radLat)).toFixed(3)} m/s²`,
        `g_eff = 10.040 m/s²`,
        `g_eff = ${(10.0 - 0.04).toFixed(3)} m/s²`,
        `g_eff = 9.800 m/s²`
      ],
      ans: "A",
      hint: `g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(${lat}°).`,
      formula: `g_eff = g - ω² R cos²(${lat}°) = ${(10.0 - 0.04 * Math.cos(radLat) * Math.cos(radLat)).toFixed(3)} m/s²`,
      takeaway: "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      trap: "Using sin²λ instead of cos²λ."
    });
  }

  // Subgroup 3: Pendulum time loss at distinct heights and depths (25 questions)
  for (let p = 1; p <= 25; p++) {
    const alt = p * 4;
    const lossPerDay = ((alt / 6400) * 86400).toFixed(1);
    medSpecs.push({
      q: `A pendulum clock accurate at sea level is taken to a mountain station at altitude h = ${alt} km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?`,
      opts: [
        `${lossPerDay} seconds`,
        `${(lossPerDay * 2).toFixed(1)} seconds`,
        `${(lossPerDay / 2).toFixed(1)} seconds`,
        `0 seconds`
      ],
      ans: "A",
      hint: `Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.`,
      formula: `Δt = (h / R) · 86400 = (${alt} / 6400) · 86400 = ${lossPerDay} s`,
      takeaway: "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      trap: "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    });
  }

  medSpecs.forEach((spec, idx) => {
    questions.push({
      id: `ADG-M-${String(idx + 1).padStart(3, '0')}`,
      topic: "accelerationDueToGravity",
      topicName: "Acceleration Due to Gravity",
      difficulty: "MEDIUM",
      examLevel: "JEE MAIN",
      type: idx % 2 === 0 ? "conceptual" : "numerical",
      question: spec.q,
      options: spec.opts.map((txt, oIdx) => ({ label: ['A', 'B', 'C', 'D'][oIdx], text: txt })),
      correctAnswer: spec.ans,
      hint: spec.hint,
      formula: spec.formula,
      stepByStep: {
        given: `Data for ADG Medium Question ${idx + 1}`,
        asked: "Resulting acceleration or time shift",
        formula: spec.formula,
        substitution: "Substitute altitude or rotational parameters",
        calculation: `Evaluation yields Option ${spec.ans}`,
        finalAnswer: `Option ${spec.ans}: ${spec.opts[0]}`,
        keyTakeaway: spec.takeaway,
        commonTrap: spec.trap
      },
      explanation: `${spec.takeaway} Governed by ${spec.formula}.`,
      category: "accelerationDueToGravity"
    });
  });

  // -------------------------------------------------------------------------
  // 70 UNIQUE HARD QUESTIONS (ADG-H-001 to ADG-H-070)
  // -------------------------------------------------------------------------
  const hardSpecs = [];

  // Subgroup 1: Variable density profiles ρ(r) = ρ₀ (1 - k r / R) (25 questions)
  for (let k = 1; k <= 25; k++) {
    const alpha = (0.5 + k * 0.02).toFixed(2);
    // Enclosed mass M(r) = 4π ∫₀^r x² ρ₀(1 - α x/R) dx = 4π ρ₀ [ r³/3 - α r⁴/(4R) ]
    // g(r) = GM(r)/r² = 4π G ρ₀ [ r/3 - α r²/(4R) ]
    // Max g occurs at dg/dr = 0 ⇒ 1/3 - 2α r / (4R) = 0 ⇒ r_max = 2R / (3α)
    const rFrac = (2 / (3 * alpha)).toFixed(3);
    hardSpecs.push({
      q: `A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - ${alpha} · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?`,
      opts: [
        `r = ${rFrac} R`,
        `r = ${(rFrac * 0.75).toFixed(3)} R`,
        `r = R (at the surface)`,
        `r = 0.500 R`
      ],
      ans: "A",
      hint: `Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.`,
      formula: `dg/dr = 0 ⇒ 1/3 - 2(${alpha})r/(4R) = 0 ⇒ r = 2R / (3 · ${alpha}) = ${rFrac} R`,
      takeaway: "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      trap: "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    });
  }

  // Subgroup 2: Core-mantle boundary gravity ratios (25 questions)
  for (let m = 1; m <= 25; m++) {
    const coreDensityRatio = 2 + m * 0.1;
    // Core radius R/2, density C*ρ; Mantle R/2 to R, density ρ
    // M_core = (4/3)π(R/2)³(C ρ) = (4/3)π R³ ρ (C/8)
    // M_mantle = (4/3)π(R³ - R³/8)ρ = (4/3)π R³ ρ (7/8)
    // M_total = (4/3)π R³ ρ [ (C + 7)/8 ]
    // g(R/2) = G M_core / (R/2)² = G(4/3 π R³ ρ)(C/8) / (R²/4) = (C/2) · (4/3)π G ρ R
    // g(R) = G M_total / R² = [(C + 7)/8] · (4/3)π G ρ R
    // Ratio = (C/2) / [(C + 7)/8] = 4C / (C + 7)
    const ratio = ((4 * coreDensityRatio) / (coreDensityRatio + 7)).toFixed(3);
    hardSpecs.push({
      q: `A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density ${coreDensityRatio.toFixed(1)} ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?`,
      opts: [
        `g(R/2) / g(R) = ${ratio}`,
        `g(R/2) / g(R) = 1.000`,
        `g(R/2) / g(R) = ${(ratio * 0.6).toFixed(3)}`,
        `g(R/2) / g(R) = ${(ratio * 1.5).toFixed(3)}`
      ],
      ans: "A",
      hint: "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
      formula: `g(R/2)/g(R) = 4(${coreDensityRatio.toFixed(1)}) / (${coreDensityRatio.toFixed(1)} + 7) = ${ratio}`,
      takeaway: "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      trap: "Forgetting that mantle volume is (7/8) of the total planetary volume."
    });
  }

  // Subgroup 3: Equatorial weightlessness & day length (20 questions)
  for (let w = 1; w <= 20; w++) {
    const gSurface = 8.0 + w * 0.2;
    const radKm = 5000 + w * 100;
    const omegaReq = Math.sqrt((gSurface) / (radKm * 1000));
    const periodMin = ((2 * Math.PI / omegaReq) / 60).toFixed(1);
    hardSpecs.push({
      q: `For a planet of radius R = ${radKm} km and surface gravity g = ${gSurface.toFixed(1)} m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?`,
      opts: [
        `T ≈ ${periodMin} minutes`,
        `T ≈ ${(periodMin * 2).toFixed(1)} minutes`,
        `T ≈ 24.0 hours`,
        `T ≈ ${(periodMin / 2).toFixed(1)} minutes`
      ],
      ans: "A",
      hint: `Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.`,
      formula: `T = 2π √(R / g) = 2π √(${radKm * 1000} / ${gSurface.toFixed(1)}) s = ${periodMin} min`,
      takeaway: "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      trap: "Thinking the required day length is zero."
    });
  }

  hardSpecs.forEach((spec, idx) => {
    questions.push({
      id: `ADG-H-${String(idx + 1).padStart(3, '0')}`,
      topic: "accelerationDueToGravity",
      topicName: "Acceleration Due to Gravity",
      difficulty: "HARD",
      examLevel: "JEE ADVANCED",
      type: idx % 2 === 0 ? "derivation" : "numerical",
      question: spec.q,
      options: spec.opts.map((txt, oIdx) => ({ label: ['A', 'B', 'C', 'D'][oIdx], text: txt })),
      correctAnswer: spec.ans,
      hint: spec.hint,
      formula: spec.formula,
      stepByStep: {
        given: `Advanced planetary parameters for ADG Hard Question ${idx + 1}`,
        asked: "Peak internal gravity radius or boundary ratio",
        formula: spec.formula,
        substitution: "Apply calculus extremum or layered mass integration",
        calculation: `Evaluation yields Option ${spec.ans}`,
        finalAnswer: `Option ${spec.ans}: ${spec.opts[0]}`,
        keyTakeaway: spec.takeaway,
        commonTrap: spec.trap
      },
      explanation: `${spec.takeaway} Formulated via ${spec.formula}.`,
      category: "accelerationDueToGravity"
    });
  });

  return questions;
}

module.exports = { generateADG };
