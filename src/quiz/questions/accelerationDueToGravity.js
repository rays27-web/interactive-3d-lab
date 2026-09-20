// Topic 2: Acceleration Due to Gravity
// Total Questions: 210

export const questions = [
  {
    "id": "ADG-E-001",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the standard formula for acceleration due to gravity g at the surface of a spherical planet of mass M and radius R?",
    "options": [
      {
        "label": "A",
        "text": "g = G M / R²"
      },
      {
        "label": "B",
        "text": "g = G M / R"
      },
      {
        "label": "C",
        "text": "g = G M² / R"
      },
      {
        "label": "D",
        "text": "g = G / (M R²)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Equate gravitational pull F = G M m / R² to weight W = m g.",
    "formula": "g = G M / R²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 1",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g = G M / R²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g = G M / R²",
      "keyTakeaway": "Surface gravity is proportional to mass M and inversely proportional to R².",
      "commonTrap": "Confusing potential GM/R with surface acceleration GM/R²."
    },
    "explanation": "Surface gravity is proportional to mass M and inversely proportional to R². Governed by g = G M / R².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-002",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "In terms of uniform planetary density ρ and radius R, surface gravity g is expressed as:",
    "options": [
      {
        "label": "A",
        "text": "g = (4/3) π G ρ R"
      },
      {
        "label": "B",
        "text": "g = (4/3) π G ρ / R"
      },
      {
        "label": "C",
        "text": "g = (3/4) π G ρ R²"
      },
      {
        "label": "D",
        "text": "g = 4 π G ρ R³"
      }
    ],
    "correctAnswer": "A",
    "hint": "Substitute mass M = (4/3)π R³ ρ into g = G M / R².",
    "formula": "g = G [ (4/3)π R³ ρ ] / R² = (4/3) π G ρ R",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 2",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g = G [ (4/3)π R³ ρ ] / R² = (4/3) π G ρ R",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g = (4/3) π G ρ R",
      "keyTakeaway": "For constant density planets, surface gravity is directly proportional to radius R.",
      "commonTrap": "Assuming g ∝ 1/R² when density is held constant instead of mass."
    },
    "explanation": "For constant density planets, surface gravity is directly proportional to radius R. Governed by g = G [ (4/3)π R³ ρ ] / R² = (4/3) π G ρ R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-003",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "As an object is moved from the Earth's equator to either of the geographic poles, its weight measured by a spring balance:",
    "options": [
      {
        "label": "A",
        "text": "Increases slightly"
      },
      {
        "label": "B",
        "text": "Decreases slightly"
      },
      {
        "label": "C",
        "text": "Remains strictly unchanged"
      },
      {
        "label": "D",
        "text": "Becomes zero"
      }
    ],
    "correctAnswer": "A",
    "hint": "Polar radius is shorter than equatorial radius and centrifugal acceleration vanishes at the poles.",
    "formula": "g_pole ≈ 9.83 m/s² > g_eq ≈ 9.78 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 3",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_pole ≈ 9.83 m/s² > g_eq ≈ 9.78 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases slightly",
      "keyTakeaway": "Weight increases from equator to pole due to smaller polar radius and absence of centrifugal reduction.",
      "commonTrap": "Thinking weight is identical everywhere on Earth's surface."
    },
    "explanation": "Weight increases from equator to pole due to smaller polar radius and absence of centrifugal reduction. Governed by g_pole ≈ 9.83 m/s² > g_eq ≈ 9.78 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-004",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at the exact geometric center of a uniform solid planet?",
    "options": [
      {
        "label": "A",
        "text": "Zero"
      },
      {
        "label": "B",
        "text": "Equal to surface value g"
      },
      {
        "label": "C",
        "text": "Infinite"
      },
      {
        "label": "D",
        "text": "Half of the surface value g/2"
      }
    ],
    "correctAnswer": "A",
    "hint": "At the center, mass pulls equally in all radial directions, resulting in zero net force.",
    "formula": "g(r=0) = 0",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 4",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g(r=0) = 0",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Zero",
      "keyTakeaway": "Gravitational acceleration strictly vanishes at the center of any spherically symmetric mass distribution.",
      "commonTrap": "Confusing gravitational acceleration (which is 0 at center) with potential (which is at a minimum/deepest well)."
    },
    "explanation": "Gravitational acceleration strictly vanishes at the center of any spherically symmetric mass distribution. Governed by g(r=0) = 0.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-005",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Which quantity remains strictly invariant when an astronaut travels from Earth to the Moon?",
    "options": [
      {
        "label": "A",
        "text": "Inertial mass m"
      },
      {
        "label": "B",
        "text": "Gravitational weight W"
      },
      {
        "label": "C",
        "text": "Acceleration due to gravity g"
      },
      {
        "label": "D",
        "text": "Normal reaction force"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass is an intrinsic measure of matter, whereas weight depends on local gravity.",
    "formula": "W = m · g_local",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 5",
      "asked": "Resulting acceleration due to gravity",
      "formula": "W = m · g_local",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Inertial mass m",
      "keyTakeaway": "Mass is invariant; weight varies with local gravitational field.",
      "commonTrap": "Conflating mass (kg) with weight (N)."
    },
    "explanation": "Mass is invariant; weight varies with local gravitational field. Governed by W = m · g_local.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-006",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "How does acceleration due to gravity g change as an observer descends into a deep mine towards Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "Decreases linearly with depth d"
      },
      {
        "label": "B",
        "text": "Increases as 1/d²"
      },
      {
        "label": "C",
        "text": "Remains constant"
      },
      {
        "label": "D",
        "text": "Increases linearly"
      }
    ],
    "correctAnswer": "A",
    "hint": "Inside a solid sphere, only the enclosed mass at radius r = R - d contributes.",
    "formula": "g_d = g (1 - d/R)",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 6",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = g (1 - d/R)",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Decreases linearly with depth d",
      "keyTakeaway": "Inside the Earth, g decreases linearly from surface value to zero at the center.",
      "commonTrap": "Assuming gravity increases underground because distance to the center is smaller."
    },
    "explanation": "Inside the Earth, g decreases linearly from surface value to zero at the center. Governed by g_d = g (1 - d/R).",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-007",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "For a height h much smaller than Earth's radius (h ≪ R), what is the approximate fractional change in gravity Δg / g?",
    "options": [
      {
        "label": "A",
        "text": "- 2h / R"
      },
      {
        "label": "B",
        "text": "- h / R"
      },
      {
        "label": "C",
        "text": "- h² / R²"
      },
      {
        "label": "D",
        "text": "+ 2h / R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Binomial expansion of (1 + h/R)⁻² ≈ 1 - 2h/R.",
    "formula": "Δg / g = - 2h / R",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 7",
      "asked": "Resulting acceleration due to gravity",
      "formula": "Δg / g = - 2h / R",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: - 2h / R",
      "keyTakeaway": "For small altitudes, gravity drops by 2% per 1% increase in altitude relative to radius.",
      "commonTrap": "Forgetting the factor of 2 that comes from the power -2."
    },
    "explanation": "For small altitudes, gravity drops by 2% per 1% increase in altitude relative to radius. Governed by Δg / g = - 2h / R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-008",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "If a planet has the same mass as Earth but half of Earth's radius, its surface gravity would be:",
    "options": [
      {
        "label": "A",
        "text": "4 times Earth's surface gravity (4g)"
      },
      {
        "label": "B",
        "text": "2 times Earth's gravity (2g)"
      },
      {
        "label": "C",
        "text": "Half of Earth's gravity (g/2)"
      },
      {
        "label": "D",
        "text": "16 times Earth's gravity"
      }
    ],
    "correctAnswer": "A",
    "hint": "g' = G M / (R/2)² = 4 G M / R² = 4g.",
    "formula": "g' = 4 g",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 8",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g' = 4 g",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 4 times Earth's surface gravity (4g)",
      "keyTakeaway": "Halving radius at constant mass quadruples surface gravity.",
      "commonTrap": "Doubling instead of quadrupling."
    },
    "explanation": "Halving radius at constant mass quadruples surface gravity. Governed by g' = 4 g.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-009",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "If a planet has the same radius as Earth but twice the mass, its surface gravity is:",
    "options": [
      {
        "label": "A",
        "text": "2g"
      },
      {
        "label": "B",
        "text": "4g"
      },
      {
        "label": "C",
        "text": "g / 2"
      },
      {
        "label": "D",
        "text": "g"
      }
    ],
    "correctAnswer": "A",
    "hint": "g ∝ M when R is constant.",
    "formula": "g' = G (2M) / R² = 2g",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 9",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g' = G (2M) / R² = 2g",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 2g",
      "keyTakeaway": "Surface gravity is directly proportional to planetary mass at fixed radius.",
      "commonTrap": "Squaring the mass factor."
    },
    "explanation": "Surface gravity is directly proportional to planetary mass at fixed radius. Governed by g' = G (2M) / R² = 2g.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-010",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What instrument measures true mass independently of the local value of g?",
    "options": [
      {
        "label": "A",
        "text": "An equal-arm beam balance"
      },
      {
        "label": "B",
        "text": "A spring balance"
      },
      {
        "label": "C",
        "text": "A digital strain-gauge scale"
      },
      {
        "label": "D",
        "text": "A pressure sensor"
      }
    ],
    "correctAnswer": "A",
    "hint": "A beam balance compares weights m₁ g = m₂ g; g cancels out completely on both sides.",
    "formula": "m₁ g = m₂ g ⇒ m₁ = m₂",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 10",
      "asked": "Resulting acceleration due to gravity",
      "formula": "m₁ g = m₂ g ⇒ m₁ = m₂",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: An equal-arm beam balance",
      "keyTakeaway": "A beam balance compares masses; a spring balance measures weight.",
      "commonTrap": "Thinking digital scales measure invariant mass directly without gravity calibration."
    },
    "explanation": "A beam balance compares masses; a spring balance measures weight. Governed by m₁ g = m₂ g ⇒ m₁ = m₂.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-011",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 640 km below Earth's surface (which is 10.0% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "8.82 m/s²"
      },
      {
        "label": "B",
        "text": "0.98 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "13.23 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 10.0/100).",
    "formula": "g_d = 9.8 · (1 - 0.1) = 8.82 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 11",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.1) = 8.82 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 8.82 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.1) = 8.82 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-012",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 717 km below Earth's surface (which is 11.2% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "8.70 m/s²"
      },
      {
        "label": "B",
        "text": "1.10 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "13.05 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 11.2/100).",
    "formula": "g_d = 9.8 · (1 - 0.11199999999999999) = 8.70 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 12",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.11199999999999999) = 8.70 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 8.70 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.11199999999999999) = 8.70 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-013",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 794 km below Earth's surface (which is 12.4% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "8.58 m/s²"
      },
      {
        "label": "B",
        "text": "1.22 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "12.87 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 12.4/100).",
    "formula": "g_d = 9.8 · (1 - 0.124) = 8.58 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 13",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.124) = 8.58 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 8.58 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.124) = 8.58 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-014",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 870 km below Earth's surface (which is 13.6% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "8.47 m/s²"
      },
      {
        "label": "B",
        "text": "1.33 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "12.71 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 13.6/100).",
    "formula": "g_d = 9.8 · (1 - 0.136) = 8.47 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 14",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.136) = 8.47 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 8.47 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.136) = 8.47 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-015",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 947 km below Earth's surface (which is 14.8% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "8.35 m/s²"
      },
      {
        "label": "B",
        "text": "1.45 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "12.52 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 14.8/100).",
    "formula": "g_d = 9.8 · (1 - 0.14800000000000002) = 8.35 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 15",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.14800000000000002) = 8.35 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 8.35 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.14800000000000002) = 8.35 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-016",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 1024 km below Earth's surface (which is 16.0% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "8.23 m/s²"
      },
      {
        "label": "B",
        "text": "1.57 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "12.35 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 16.0/100).",
    "formula": "g_d = 9.8 · (1 - 0.16) = 8.23 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 16",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.16) = 8.23 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 8.23 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.16) = 8.23 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-017",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 1101 km below Earth's surface (which is 17.2% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "8.11 m/s²"
      },
      {
        "label": "B",
        "text": "1.69 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "12.16 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 17.2/100).",
    "formula": "g_d = 9.8 · (1 - 0.172) = 8.11 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 17",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.172) = 8.11 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 8.11 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.172) = 8.11 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-018",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 1178 km below Earth's surface (which is 18.4% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "8.00 m/s²"
      },
      {
        "label": "B",
        "text": "1.80 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "12.00 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 18.4/100).",
    "formula": "g_d = 9.8 · (1 - 0.184) = 8.00 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 18",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.184) = 8.00 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 8.00 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.184) = 8.00 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-019",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 1254 km below Earth's surface (which is 19.6% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "7.88 m/s²"
      },
      {
        "label": "B",
        "text": "1.92 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "11.82 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 19.6/100).",
    "formula": "g_d = 9.8 · (1 - 0.196) = 7.88 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 19",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.196) = 7.88 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 7.88 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.196) = 7.88 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-020",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 1331 km below Earth's surface (which is 20.8% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "7.76 m/s²"
      },
      {
        "label": "B",
        "text": "2.04 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "11.64 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 20.8/100).",
    "formula": "g_d = 9.8 · (1 - 0.20800000000000002) = 7.76 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 20",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.20800000000000002) = 7.76 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 7.76 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.20800000000000002) = 7.76 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-021",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 1408 km below Earth's surface (which is 22.0% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "7.64 m/s²"
      },
      {
        "label": "B",
        "text": "2.16 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "11.46 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 22.0/100).",
    "formula": "g_d = 9.8 · (1 - 0.22) = 7.64 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 21",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.22) = 7.64 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 7.64 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.22) = 7.64 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-022",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 1485 km below Earth's surface (which is 23.2% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "7.53 m/s²"
      },
      {
        "label": "B",
        "text": "2.27 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "11.29 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 23.2/100).",
    "formula": "g_d = 9.8 · (1 - 0.23199999999999998) = 7.53 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 22",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.23199999999999998) = 7.53 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 7.53 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.23199999999999998) = 7.53 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-023",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 1562 km below Earth's surface (which is 24.4% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "7.41 m/s²"
      },
      {
        "label": "B",
        "text": "2.39 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "11.12 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 24.4/100).",
    "formula": "g_d = 9.8 · (1 - 0.244) = 7.41 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 23",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.244) = 7.41 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 7.41 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.244) = 7.41 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-024",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 1638 km below Earth's surface (which is 25.6% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "7.29 m/s²"
      },
      {
        "label": "B",
        "text": "2.51 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "10.94 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 25.6/100).",
    "formula": "g_d = 9.8 · (1 - 0.256) = 7.29 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 24",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.256) = 7.29 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 7.29 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.256) = 7.29 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-025",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 1715 km below Earth's surface (which is 26.8% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "7.17 m/s²"
      },
      {
        "label": "B",
        "text": "2.63 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "10.75 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 26.8/100).",
    "formula": "g_d = 9.8 · (1 - 0.268) = 7.17 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 25",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.268) = 7.17 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 7.17 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.268) = 7.17 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-026",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 1792 km below Earth's surface (which is 28.0% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "7.06 m/s²"
      },
      {
        "label": "B",
        "text": "2.74 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "10.59 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 28.0/100).",
    "formula": "g_d = 9.8 · (1 - 0.28) = 7.06 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 26",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.28) = 7.06 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 7.06 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.28) = 7.06 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-027",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 1869 km below Earth's surface (which is 29.2% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "6.94 m/s²"
      },
      {
        "label": "B",
        "text": "2.86 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "10.41 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 29.2/100).",
    "formula": "g_d = 9.8 · (1 - 0.292) = 6.94 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 27",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.292) = 6.94 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 6.94 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.292) = 6.94 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-028",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 1946 km below Earth's surface (which is 30.4% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "6.82 m/s²"
      },
      {
        "label": "B",
        "text": "2.98 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "10.23 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 30.4/100).",
    "formula": "g_d = 9.8 · (1 - 0.304) = 6.82 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 28",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.304) = 6.82 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 6.82 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.304) = 6.82 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-029",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 2022 km below Earth's surface (which is 31.6% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "6.70 m/s²"
      },
      {
        "label": "B",
        "text": "3.10 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "10.05 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 31.6/100).",
    "formula": "g_d = 9.8 · (1 - 0.316) = 6.70 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 29",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.316) = 6.70 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 6.70 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.316) = 6.70 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-030",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 2099 km below Earth's surface (which is 32.8% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "6.59 m/s²"
      },
      {
        "label": "B",
        "text": "3.21 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "9.88 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 32.8/100).",
    "formula": "g_d = 9.8 · (1 - 0.32799999999999996) = 6.59 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 30",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.32799999999999996) = 6.59 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 6.59 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.32799999999999996) = 6.59 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-031",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 2176 km below Earth's surface (which is 34.0% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "6.47 m/s²"
      },
      {
        "label": "B",
        "text": "3.33 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "9.71 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 34.0/100).",
    "formula": "g_d = 9.8 · (1 - 0.34) = 6.47 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 31",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.34) = 6.47 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 6.47 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.34) = 6.47 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-032",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 2253 km below Earth's surface (which is 35.2% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "6.35 m/s²"
      },
      {
        "label": "B",
        "text": "3.45 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "9.52 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 35.2/100).",
    "formula": "g_d = 9.8 · (1 - 0.35200000000000004) = 6.35 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 32",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.35200000000000004) = 6.35 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 6.35 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.35200000000000004) = 6.35 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-033",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 2330 km below Earth's surface (which is 36.4% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "6.23 m/s²"
      },
      {
        "label": "B",
        "text": "3.57 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "9.35 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 36.4/100).",
    "formula": "g_d = 9.8 · (1 - 0.364) = 6.23 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 33",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.364) = 6.23 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 6.23 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.364) = 6.23 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-034",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 2406 km below Earth's surface (which is 37.6% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "6.12 m/s²"
      },
      {
        "label": "B",
        "text": "3.68 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "9.18 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 37.6/100).",
    "formula": "g_d = 9.8 · (1 - 0.376) = 6.12 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 34",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.376) = 6.12 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 6.12 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.376) = 6.12 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-035",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 2483 km below Earth's surface (which is 38.8% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "6.00 m/s²"
      },
      {
        "label": "B",
        "text": "3.80 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "9.00 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 38.8/100).",
    "formula": "g_d = 9.8 · (1 - 0.38799999999999996) = 6.00 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 35",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.38799999999999996) = 6.00 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 6.00 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.38799999999999996) = 6.00 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-036",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 2560 km below Earth's surface (which is 40.0% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "5.88 m/s²"
      },
      {
        "label": "B",
        "text": "3.92 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "8.82 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 40.0/100).",
    "formula": "g_d = 9.8 · (1 - 0.4) = 5.88 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 36",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.4) = 5.88 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 5.88 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.4) = 5.88 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-037",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 2637 km below Earth's surface (which is 41.2% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "5.76 m/s²"
      },
      {
        "label": "B",
        "text": "4.04 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "8.64 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 41.2/100).",
    "formula": "g_d = 9.8 · (1 - 0.41200000000000003) = 5.76 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 37",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.41200000000000003) = 5.76 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 5.76 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.41200000000000003) = 5.76 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-038",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 2714 km below Earth's surface (which is 42.4% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "5.64 m/s²"
      },
      {
        "label": "B",
        "text": "4.16 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "8.46 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 42.4/100).",
    "formula": "g_d = 9.8 · (1 - 0.424) = 5.64 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 38",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.424) = 5.64 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 5.64 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.424) = 5.64 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-039",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 2790 km below Earth's surface (which is 43.6% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "5.53 m/s²"
      },
      {
        "label": "B",
        "text": "4.27 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "8.29 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 43.6/100).",
    "formula": "g_d = 9.8 · (1 - 0.436) = 5.53 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 39",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.436) = 5.53 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 5.53 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.436) = 5.53 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-040",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 2867 km below Earth's surface (which is 44.8% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "5.41 m/s²"
      },
      {
        "label": "B",
        "text": "4.39 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "8.12 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 44.8/100).",
    "formula": "g_d = 9.8 · (1 - 0.44799999999999995) = 5.41 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 40",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.44799999999999995) = 5.41 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 5.41 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.44799999999999995) = 5.41 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-041",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 2944 km below Earth's surface (which is 46.0% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "5.29 m/s²"
      },
      {
        "label": "B",
        "text": "4.51 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "7.94 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 46.0/100).",
    "formula": "g_d = 9.8 · (1 - 0.46) = 5.29 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 41",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.46) = 5.29 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 5.29 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.46) = 5.29 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-042",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 3021 km below Earth's surface (which is 47.2% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "5.17 m/s²"
      },
      {
        "label": "B",
        "text": "4.63 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "7.75 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 47.2/100).",
    "formula": "g_d = 9.8 · (1 - 0.47200000000000003) = 5.17 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 42",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.47200000000000003) = 5.17 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 5.17 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.47200000000000003) = 5.17 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-043",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 3098 km below Earth's surface (which is 48.4% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "5.06 m/s²"
      },
      {
        "label": "B",
        "text": "4.74 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "7.59 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 48.4/100).",
    "formula": "g_d = 9.8 · (1 - 0.484) = 5.06 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 43",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.484) = 5.06 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 5.06 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.484) = 5.06 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-044",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 3174 km below Earth's surface (which is 49.6% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "4.94 m/s²"
      },
      {
        "label": "B",
        "text": "4.86 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "7.41 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 49.6/100).",
    "formula": "g_d = 9.8 · (1 - 0.496) = 4.94 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 44",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.496) = 4.94 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 4.94 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.496) = 4.94 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-045",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 3251 km below Earth's surface (which is 50.8% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "4.82 m/s²"
      },
      {
        "label": "B",
        "text": "4.98 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "7.23 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 50.8/100).",
    "formula": "g_d = 9.8 · (1 - 0.508) = 4.82 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 45",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.508) = 4.82 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 4.82 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.508) = 4.82 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-046",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 3328 km below Earth's surface (which is 52.0% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "4.70 m/s²"
      },
      {
        "label": "B",
        "text": "5.10 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "7.05 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 52.0/100).",
    "formula": "g_d = 9.8 · (1 - 0.52) = 4.70 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 46",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.52) = 4.70 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 4.70 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.52) = 4.70 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-047",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 3405 km below Earth's surface (which is 53.2% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "4.59 m/s²"
      },
      {
        "label": "B",
        "text": "5.21 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "6.88 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 53.2/100).",
    "formula": "g_d = 9.8 · (1 - 0.532) = 4.59 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 47",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.532) = 4.59 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 4.59 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.532) = 4.59 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-048",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 3482 km below Earth's surface (which is 54.4% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "4.47 m/s²"
      },
      {
        "label": "B",
        "text": "5.33 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "6.71 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 54.4/100).",
    "formula": "g_d = 9.8 · (1 - 0.544) = 4.47 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 48",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.544) = 4.47 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 4.47 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.544) = 4.47 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-049",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 3558 km below Earth's surface (which is 55.6% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "4.35 m/s²"
      },
      {
        "label": "B",
        "text": "5.45 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "6.52 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 55.6/100).",
    "formula": "g_d = 9.8 · (1 - 0.556) = 4.35 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 49",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.556) = 4.35 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 4.35 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.556) = 4.35 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-050",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 3635 km below Earth's surface (which is 56.8% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "4.23 m/s²"
      },
      {
        "label": "B",
        "text": "5.57 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "6.35 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 56.8/100).",
    "formula": "g_d = 9.8 · (1 - 0.568) = 4.23 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 50",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.568) = 4.23 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 4.23 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.568) = 4.23 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-051",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 3712 km below Earth's surface (which is 58.0% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "4.12 m/s²"
      },
      {
        "label": "B",
        "text": "5.68 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "6.18 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 58.0/100).",
    "formula": "g_d = 9.8 · (1 - 0.58) = 4.12 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 51",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.58) = 4.12 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 4.12 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.58) = 4.12 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-052",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 3789 km below Earth's surface (which is 59.2% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "4.00 m/s²"
      },
      {
        "label": "B",
        "text": "5.80 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "6.00 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 59.2/100).",
    "formula": "g_d = 9.8 · (1 - 0.5920000000000001) = 4.00 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 52",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.5920000000000001) = 4.00 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 4.00 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.5920000000000001) = 4.00 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-053",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 3866 km below Earth's surface (which is 60.4% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "3.88 m/s²"
      },
      {
        "label": "B",
        "text": "5.92 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "5.82 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 60.4/100).",
    "formula": "g_d = 9.8 · (1 - 0.604) = 3.88 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 53",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.604) = 3.88 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 3.88 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.604) = 3.88 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-054",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 3942 km below Earth's surface (which is 61.6% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "3.76 m/s²"
      },
      {
        "label": "B",
        "text": "6.04 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "5.64 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 61.6/100).",
    "formula": "g_d = 9.8 · (1 - 0.616) = 3.76 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 54",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.616) = 3.76 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 3.76 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.616) = 3.76 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-055",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 4019 km below Earth's surface (which is 62.8% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "3.65 m/s²"
      },
      {
        "label": "B",
        "text": "6.15 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "5.47 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 62.8/100).",
    "formula": "g_d = 9.8 · (1 - 0.628) = 3.65 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 55",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.628) = 3.65 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 3.65 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.628) = 3.65 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-056",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 4096 km below Earth's surface (which is 64.0% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "3.53 m/s²"
      },
      {
        "label": "B",
        "text": "6.27 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "5.29 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 64.0/100).",
    "formula": "g_d = 9.8 · (1 - 0.64) = 3.53 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 56",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.64) = 3.53 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 3.53 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.64) = 3.53 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-057",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 4173 km below Earth's surface (which is 65.2% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "3.41 m/s²"
      },
      {
        "label": "B",
        "text": "6.39 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "5.12 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 65.2/100).",
    "formula": "g_d = 9.8 · (1 - 0.652) = 3.41 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 57",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.652) = 3.41 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 3.41 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.652) = 3.41 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-058",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 4250 km below Earth's surface (which is 66.4% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "3.29 m/s²"
      },
      {
        "label": "B",
        "text": "6.51 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "4.94 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 66.4/100).",
    "formula": "g_d = 9.8 · (1 - 0.664) = 3.29 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 58",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.664) = 3.29 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 3.29 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.664) = 3.29 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-059",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 4326 km below Earth's surface (which is 67.6% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "3.18 m/s²"
      },
      {
        "label": "B",
        "text": "6.62 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "4.77 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 67.6/100).",
    "formula": "g_d = 9.8 · (1 - 0.6759999999999999) = 3.18 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 59",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.6759999999999999) = 3.18 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 3.18 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.6759999999999999) = 3.18 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-060",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 4403 km below Earth's surface (which is 68.8% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "3.06 m/s²"
      },
      {
        "label": "B",
        "text": "6.74 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "4.59 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 68.8/100).",
    "formula": "g_d = 9.8 · (1 - 0.688) = 3.06 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 60",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.688) = 3.06 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 3.06 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.688) = 3.06 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-061",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 4480 km below Earth's surface (which is 70.0% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "2.94 m/s²"
      },
      {
        "label": "B",
        "text": "6.86 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "4.41 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 70.0/100).",
    "formula": "g_d = 9.8 · (1 - 0.7) = 2.94 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 61",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.7) = 2.94 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 2.94 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.7) = 2.94 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-062",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 4557 km below Earth's surface (which is 71.2% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "2.82 m/s²"
      },
      {
        "label": "B",
        "text": "6.98 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "4.23 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 71.2/100).",
    "formula": "g_d = 9.8 · (1 - 0.7120000000000001) = 2.82 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 62",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.7120000000000001) = 2.82 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 2.82 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.7120000000000001) = 2.82 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-063",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 4634 km below Earth's surface (which is 72.4% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "2.70 m/s²"
      },
      {
        "label": "B",
        "text": "7.10 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "4.05 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 72.4/100).",
    "formula": "g_d = 9.8 · (1 - 0.7240000000000001) = 2.70 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 63",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.7240000000000001) = 2.70 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 2.70 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.7240000000000001) = 2.70 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-064",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 4710 km below Earth's surface (which is 73.6% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "2.59 m/s²"
      },
      {
        "label": "B",
        "text": "7.21 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "3.88 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 73.6/100).",
    "formula": "g_d = 9.8 · (1 - 0.736) = 2.59 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 64",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.736) = 2.59 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 2.59 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.736) = 2.59 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-065",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 4787 km below Earth's surface (which is 74.8% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "2.47 m/s²"
      },
      {
        "label": "B",
        "text": "7.33 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "3.71 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 74.8/100).",
    "formula": "g_d = 9.8 · (1 - 0.748) = 2.47 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 65",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.748) = 2.47 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 2.47 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.748) = 2.47 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-066",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 4864 km below Earth's surface (which is 76.0% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "2.35 m/s²"
      },
      {
        "label": "B",
        "text": "7.45 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "3.53 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 76.0/100).",
    "formula": "g_d = 9.8 · (1 - 0.76) = 2.35 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 66",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.76) = 2.35 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 2.35 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.76) = 2.35 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-067",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 4941 km below Earth's surface (which is 77.2% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "2.23 m/s²"
      },
      {
        "label": "B",
        "text": "7.57 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "3.34 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 77.2/100).",
    "formula": "g_d = 9.8 · (1 - 0.772) = 2.23 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 67",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.772) = 2.23 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 2.23 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.772) = 2.23 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-068",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 5018 km below Earth's surface (which is 78.4% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "2.12 m/s²"
      },
      {
        "label": "B",
        "text": "7.68 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "3.18 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 78.4/100).",
    "formula": "g_d = 9.8 · (1 - 0.784) = 2.12 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 68",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.784) = 2.12 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 2.12 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.784) = 2.12 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-069",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the value of acceleration due to gravity at a depth of d = 5094 km below Earth's surface (which is 79.6% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "2.00 m/s²"
      },
      {
        "label": "B",
        "text": "7.80 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "3.00 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 79.6/100).",
    "formula": "g_d = 9.8 · (1 - 0.7959999999999999) = 2.00 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 69",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.7959999999999999) = 2.00 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 2.00 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.7959999999999999) = 2.00 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-E-070",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the value of acceleration due to gravity at a depth of d = 5171 km below Earth's surface (which is 80.8% of Earth's radius R = 6400 km)? Take surface gravity g = 9.80 m/s².",
    "options": [
      {
        "label": "A",
        "text": "1.88 m/s²"
      },
      {
        "label": "B",
        "text": "7.92 m/s²"
      },
      {
        "label": "C",
        "text": "9.80 m/s²"
      },
      {
        "label": "D",
        "text": "2.82 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use g_d = g (1 - d/R) = 9.8 × (1 - 80.8/100).",
    "formula": "g_d = 9.8 · (1 - 0.8079999999999999) = 1.88 m/s²",
    "stepByStep": {
      "given": "Problem parameters for ADG Easy Question 70",
      "asked": "Resulting acceleration due to gravity",
      "formula": "g_d = 9.8 · (1 - 0.8079999999999999) = 1.88 m/s²",
      "substitution": "Substitute planetary dimensions and depths",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1.88 m/s²",
      "keyTakeaway": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R).",
      "commonTrap": "Using inverse square law for depth."
    },
    "explanation": "At depth d inside Earth, acceleration due to gravity drops linearly as g(1 - d/R). Governed by g_d = 9.8 · (1 - 0.8079999999999999) = 1.88 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-001",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/2 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√2 - 1) R (approx. 0.414 R)"
      },
      {
        "label": "B",
        "text": "h = (2 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √2"
      },
      {
        "label": "D",
        "text": "h = 2 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 2. Take square root: 1 + h/R = √2.",
    "formula": "h = (√2 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 1",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√2 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√2 - 1) R (approx. 0.414 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√2 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-002",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/3 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√3 - 1) R (approx. 0.732 R)"
      },
      {
        "label": "B",
        "text": "h = (3 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √3"
      },
      {
        "label": "D",
        "text": "h = 3 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 3. Take square root: 1 + h/R = √3.",
    "formula": "h = (√3 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 2",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√3 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√3 - 1) R (approx. 0.732 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√3 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-003",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/4 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√4 - 1) R (approx. 1.000 R)"
      },
      {
        "label": "B",
        "text": "h = (4 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √4"
      },
      {
        "label": "D",
        "text": "h = 4 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 4. Take square root: 1 + h/R = √4.",
    "formula": "h = (√4 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 3",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√4 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√4 - 1) R (approx. 1.000 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√4 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-004",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/5 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√5 - 1) R (approx. 1.236 R)"
      },
      {
        "label": "B",
        "text": "h = (5 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √5"
      },
      {
        "label": "D",
        "text": "h = 5 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 5. Take square root: 1 + h/R = √5.",
    "formula": "h = (√5 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 4",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√5 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√5 - 1) R (approx. 1.236 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√5 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-005",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/6 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√6 - 1) R (approx. 1.449 R)"
      },
      {
        "label": "B",
        "text": "h = (6 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √6"
      },
      {
        "label": "D",
        "text": "h = 6 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 6. Take square root: 1 + h/R = √6.",
    "formula": "h = (√6 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 5",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√6 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√6 - 1) R (approx. 1.449 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√6 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-006",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/7 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√7 - 1) R (approx. 1.646 R)"
      },
      {
        "label": "B",
        "text": "h = (7 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √7"
      },
      {
        "label": "D",
        "text": "h = 7 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 7. Take square root: 1 + h/R = √7.",
    "formula": "h = (√7 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 6",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√7 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√7 - 1) R (approx. 1.646 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√7 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-007",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/8 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√8 - 1) R (approx. 1.828 R)"
      },
      {
        "label": "B",
        "text": "h = (8 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √8"
      },
      {
        "label": "D",
        "text": "h = 8 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 8. Take square root: 1 + h/R = √8.",
    "formula": "h = (√8 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 7",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√8 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√8 - 1) R (approx. 1.828 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√8 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-008",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/9 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√9 - 1) R (approx. 2.000 R)"
      },
      {
        "label": "B",
        "text": "h = (9 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √9"
      },
      {
        "label": "D",
        "text": "h = 9 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 9. Take square root: 1 + h/R = √9.",
    "formula": "h = (√9 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 8",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√9 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√9 - 1) R (approx. 2.000 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√9 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-009",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/10 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√10 - 1) R (approx. 2.162 R)"
      },
      {
        "label": "B",
        "text": "h = (10 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √10"
      },
      {
        "label": "D",
        "text": "h = 10 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 10. Take square root: 1 + h/R = √10.",
    "formula": "h = (√10 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 9",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√10 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√10 - 1) R (approx. 2.162 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√10 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-010",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/11 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√11 - 1) R (approx. 2.317 R)"
      },
      {
        "label": "B",
        "text": "h = (11 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √11"
      },
      {
        "label": "D",
        "text": "h = 11 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 11. Take square root: 1 + h/R = √11.",
    "formula": "h = (√11 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 10",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√11 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√11 - 1) R (approx. 2.317 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√11 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-011",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/12 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√12 - 1) R (approx. 2.464 R)"
      },
      {
        "label": "B",
        "text": "h = (12 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √12"
      },
      {
        "label": "D",
        "text": "h = 12 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 12. Take square root: 1 + h/R = √12.",
    "formula": "h = (√12 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 11",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√12 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√12 - 1) R (approx. 2.464 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√12 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-012",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/13 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√13 - 1) R (approx. 2.606 R)"
      },
      {
        "label": "B",
        "text": "h = (13 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √13"
      },
      {
        "label": "D",
        "text": "h = 13 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 13. Take square root: 1 + h/R = √13.",
    "formula": "h = (√13 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 12",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√13 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√13 - 1) R (approx. 2.606 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√13 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-013",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/14 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√14 - 1) R (approx. 2.742 R)"
      },
      {
        "label": "B",
        "text": "h = (14 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √14"
      },
      {
        "label": "D",
        "text": "h = 14 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 14. Take square root: 1 + h/R = √14.",
    "formula": "h = (√14 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 13",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√14 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√14 - 1) R (approx. 2.742 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√14 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-014",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/15 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√15 - 1) R (approx. 2.873 R)"
      },
      {
        "label": "B",
        "text": "h = (15 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √15"
      },
      {
        "label": "D",
        "text": "h = 15 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 15. Take square root: 1 + h/R = √15.",
    "formula": "h = (√15 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 14",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√15 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√15 - 1) R (approx. 2.873 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√15 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-015",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/16 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√16 - 1) R (approx. 3.000 R)"
      },
      {
        "label": "B",
        "text": "h = (16 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √16"
      },
      {
        "label": "D",
        "text": "h = 16 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 16. Take square root: 1 + h/R = √16.",
    "formula": "h = (√16 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 15",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√16 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√16 - 1) R (approx. 3.000 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√16 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-016",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/17 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√17 - 1) R (approx. 3.123 R)"
      },
      {
        "label": "B",
        "text": "h = (17 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √17"
      },
      {
        "label": "D",
        "text": "h = 17 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 17. Take square root: 1 + h/R = √17.",
    "formula": "h = (√17 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 16",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√17 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√17 - 1) R (approx. 3.123 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√17 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-017",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/18 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√18 - 1) R (approx. 3.243 R)"
      },
      {
        "label": "B",
        "text": "h = (18 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √18"
      },
      {
        "label": "D",
        "text": "h = 18 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 18. Take square root: 1 + h/R = √18.",
    "formula": "h = (√18 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 17",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√18 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√18 - 1) R (approx. 3.243 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√18 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-018",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/19 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√19 - 1) R (approx. 3.359 R)"
      },
      {
        "label": "B",
        "text": "h = (19 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √19"
      },
      {
        "label": "D",
        "text": "h = 19 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 19. Take square root: 1 + h/R = √19.",
    "formula": "h = (√19 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 18",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√19 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√19 - 1) R (approx. 3.359 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√19 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-019",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/20 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√20 - 1) R (approx. 3.472 R)"
      },
      {
        "label": "B",
        "text": "h = (20 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √20"
      },
      {
        "label": "D",
        "text": "h = 20 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 20. Take square root: 1 + h/R = √20.",
    "formula": "h = (√20 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 19",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√20 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√20 - 1) R (approx. 3.472 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√20 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-020",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "At what altitude h above the surface of a spherical planet of radius R does the acceleration due to gravity drop to exactly 1/21 of its surface value g?",
    "options": [
      {
        "label": "A",
        "text": "h = (√21 - 1) R (approx. 3.583 R)"
      },
      {
        "label": "B",
        "text": "h = (21 - 1) R"
      },
      {
        "label": "C",
        "text": "h = R / √21"
      },
      {
        "label": "D",
        "text": "h = 21 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Exact altitude formula: g_h = g / (1 + h/R)² = g / 21. Take square root: 1 + h/R = √21.",
    "formula": "h = (√21 - 1) R",
    "stepByStep": {
      "given": "Data for ADG Medium Question 20",
      "asked": "Resulting acceleration or time shift",
      "formula": "h = (√21 - 1) R",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: h = (√21 - 1) R (approx. 3.583 R)",
      "keyTakeaway": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors.",
      "commonTrap": "Using the linear approximation g(1 - 2h/R) which is completely invalid when h is comparable to R."
    },
    "explanation": "For large altitudes, always use the exact formula g_h = g / (1 + h/R)² to avoid approximation errors. Governed by h = (√21 - 1) R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-021",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 3° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(3°).",
    "formula": "g_eff = g - ω² R cos²(3°) = 9.960 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 21",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(3°) = 9.960 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.960 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(3°) = 9.960 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-022",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 6° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(6°).",
    "formula": "g_eff = g - ω² R cos²(6°) = 9.960 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 22",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(6°) = 9.960 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.960 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(6°) = 9.960 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-023",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 9° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.961 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(9°).",
    "formula": "g_eff = g - ω² R cos²(9°) = 9.961 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 23",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(9°) = 9.961 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.961 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(9°) = 9.961 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-024",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 12° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.962 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(12°).",
    "formula": "g_eff = g - ω² R cos²(12°) = 9.962 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 24",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(12°) = 9.962 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.962 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(12°) = 9.962 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-025",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 15° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.963 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(15°).",
    "formula": "g_eff = g - ω² R cos²(15°) = 9.963 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 25",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(15°) = 9.963 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.963 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(15°) = 9.963 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-026",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 18° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.964 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(18°).",
    "formula": "g_eff = g - ω² R cos²(18°) = 9.964 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 26",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(18°) = 9.964 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.964 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(18°) = 9.964 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-027",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 21° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.965 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(21°).",
    "formula": "g_eff = g - ω² R cos²(21°) = 9.965 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 27",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(21°) = 9.965 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.965 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(21°) = 9.965 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-028",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 24° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.967 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(24°).",
    "formula": "g_eff = g - ω² R cos²(24°) = 9.967 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 28",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(24°) = 9.967 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.967 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(24°) = 9.967 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-029",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 27° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.968 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(27°).",
    "formula": "g_eff = g - ω² R cos²(27°) = 9.968 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 29",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(27°) = 9.968 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.968 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(27°) = 9.968 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-030",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 30° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.970 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(30°).",
    "formula": "g_eff = g - ω² R cos²(30°) = 9.970 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 30",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(30°) = 9.970 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.970 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(30°) = 9.970 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-031",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 33° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.972 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(33°).",
    "formula": "g_eff = g - ω² R cos²(33°) = 9.972 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 31",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(33°) = 9.972 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.972 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(33°) = 9.972 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-032",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 36° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.974 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(36°).",
    "formula": "g_eff = g - ω² R cos²(36°) = 9.974 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 32",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(36°) = 9.974 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.974 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(36°) = 9.974 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-033",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 39° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.976 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(39°).",
    "formula": "g_eff = g - ω² R cos²(39°) = 9.976 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 33",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(39°) = 9.976 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.976 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(39°) = 9.976 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-034",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 42° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.978 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(42°).",
    "formula": "g_eff = g - ω² R cos²(42°) = 9.978 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 34",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(42°) = 9.978 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.978 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(42°) = 9.978 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-035",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 45° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.980 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(45°).",
    "formula": "g_eff = g - ω² R cos²(45°) = 9.980 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 35",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(45°) = 9.980 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.980 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(45°) = 9.980 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-036",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 48° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.982 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(48°).",
    "formula": "g_eff = g - ω² R cos²(48°) = 9.982 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 36",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(48°) = 9.982 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.982 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(48°) = 9.982 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-037",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 51° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.984 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(51°).",
    "formula": "g_eff = g - ω² R cos²(51°) = 9.984 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 37",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(51°) = 9.984 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.984 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(51°) = 9.984 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-038",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 54° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.986 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(54°).",
    "formula": "g_eff = g - ω² R cos²(54°) = 9.986 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 38",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(54°) = 9.986 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.986 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(54°) = 9.986 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-039",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 57° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.988 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(57°).",
    "formula": "g_eff = g - ω² R cos²(57°) = 9.988 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 39",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(57°) = 9.988 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.988 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(57°) = 9.988 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-040",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 60° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.990 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(60°).",
    "formula": "g_eff = g - ω² R cos²(60°) = 9.990 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 40",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(60°) = 9.990 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.990 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(60°) = 9.990 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-041",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 63° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.992 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(63°).",
    "formula": "g_eff = g - ω² R cos²(63°) = 9.992 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 41",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(63°) = 9.992 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.992 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(63°) = 9.992 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-042",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 66° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.993 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(66°).",
    "formula": "g_eff = g - ω² R cos²(66°) = 9.993 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 42",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(66°) = 9.993 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.993 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(66°) = 9.993 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-043",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 69° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.995 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(69°).",
    "formula": "g_eff = g - ω² R cos²(69°) = 9.995 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 43",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(69°) = 9.995 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.995 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(69°) = 9.995 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-044",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 72° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.996 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(72°).",
    "formula": "g_eff = g - ω² R cos²(72°) = 9.996 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 44",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(72°) = 9.996 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.996 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(72°) = 9.996 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-045",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Calculate the effective acceleration due to gravity g_eff at latitude λ = 75° on a planet with surface polar gravity g = 10.0 m/s², equatorial radius R = 6400 km, and rotational speed giving equatorial centrifugal acceleration ω² R = 0.04 m/s².",
    "options": [
      {
        "label": "A",
        "text": "g_eff = 9.997 m/s²"
      },
      {
        "label": "B",
        "text": "g_eff = 10.040 m/s²"
      },
      {
        "label": "C",
        "text": "g_eff = 9.960 m/s²"
      },
      {
        "label": "D",
        "text": "g_eff = 9.800 m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "g_eff = g - ω² R cos²(λ) = 10.0 - 0.04 × cos²(75°).",
    "formula": "g_eff = g - ω² R cos²(75°) = 9.997 m/s²",
    "stepByStep": {
      "given": "Data for ADG Medium Question 45",
      "asked": "Resulting acceleration or time shift",
      "formula": "g_eff = g - ω² R cos²(75°) = 9.997 m/s²",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g_eff = 9.997 m/s²",
      "keyTakeaway": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles.",
      "commonTrap": "Using sin²λ instead of cos²λ."
    },
    "explanation": "Centrifugal reduction of gravity scales with cos²λ, being maximum at equator and zero at poles. Governed by g_eff = g - ω² R cos²(75°) = 9.997 m/s².",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-046",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 4 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "54.0 seconds"
      },
      {
        "label": "B",
        "text": "108.0 seconds"
      },
      {
        "label": "C",
        "text": "27.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (4 / 6400) · 86400 = 54.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 46",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (4 / 6400) · 86400 = 54.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 54.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (4 / 6400) · 86400 = 54.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-047",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 8 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "108.0 seconds"
      },
      {
        "label": "B",
        "text": "216.0 seconds"
      },
      {
        "label": "C",
        "text": "54.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (8 / 6400) · 86400 = 108.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 47",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (8 / 6400) · 86400 = 108.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 108.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (8 / 6400) · 86400 = 108.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-048",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 12 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "162.0 seconds"
      },
      {
        "label": "B",
        "text": "324.0 seconds"
      },
      {
        "label": "C",
        "text": "81.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (12 / 6400) · 86400 = 162.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 48",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (12 / 6400) · 86400 = 162.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 162.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (12 / 6400) · 86400 = 162.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-049",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 16 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "216.0 seconds"
      },
      {
        "label": "B",
        "text": "432.0 seconds"
      },
      {
        "label": "C",
        "text": "108.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (16 / 6400) · 86400 = 216.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 49",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (16 / 6400) · 86400 = 216.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 216.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (16 / 6400) · 86400 = 216.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-050",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 20 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "270.0 seconds"
      },
      {
        "label": "B",
        "text": "540.0 seconds"
      },
      {
        "label": "C",
        "text": "135.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (20 / 6400) · 86400 = 270.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 50",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (20 / 6400) · 86400 = 270.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 270.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (20 / 6400) · 86400 = 270.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-051",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 24 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "324.0 seconds"
      },
      {
        "label": "B",
        "text": "648.0 seconds"
      },
      {
        "label": "C",
        "text": "162.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (24 / 6400) · 86400 = 324.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 51",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (24 / 6400) · 86400 = 324.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 324.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (24 / 6400) · 86400 = 324.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-052",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 28 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "378.0 seconds"
      },
      {
        "label": "B",
        "text": "756.0 seconds"
      },
      {
        "label": "C",
        "text": "189.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (28 / 6400) · 86400 = 378.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 52",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (28 / 6400) · 86400 = 378.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 378.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (28 / 6400) · 86400 = 378.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-053",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 32 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "432.0 seconds"
      },
      {
        "label": "B",
        "text": "864.0 seconds"
      },
      {
        "label": "C",
        "text": "216.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (32 / 6400) · 86400 = 432.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 53",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (32 / 6400) · 86400 = 432.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 432.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (32 / 6400) · 86400 = 432.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-054",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 36 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "486.0 seconds"
      },
      {
        "label": "B",
        "text": "972.0 seconds"
      },
      {
        "label": "C",
        "text": "243.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (36 / 6400) · 86400 = 486.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 54",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (36 / 6400) · 86400 = 486.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 486.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (36 / 6400) · 86400 = 486.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-055",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 40 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "540.0 seconds"
      },
      {
        "label": "B",
        "text": "1080.0 seconds"
      },
      {
        "label": "C",
        "text": "270.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (40 / 6400) · 86400 = 540.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 55",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (40 / 6400) · 86400 = 540.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 540.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (40 / 6400) · 86400 = 540.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-056",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 44 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "594.0 seconds"
      },
      {
        "label": "B",
        "text": "1188.0 seconds"
      },
      {
        "label": "C",
        "text": "297.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (44 / 6400) · 86400 = 594.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 56",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (44 / 6400) · 86400 = 594.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 594.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (44 / 6400) · 86400 = 594.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-057",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 48 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "648.0 seconds"
      },
      {
        "label": "B",
        "text": "1296.0 seconds"
      },
      {
        "label": "C",
        "text": "324.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (48 / 6400) · 86400 = 648.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 57",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (48 / 6400) · 86400 = 648.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 648.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (48 / 6400) · 86400 = 648.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-058",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 52 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "702.0 seconds"
      },
      {
        "label": "B",
        "text": "1404.0 seconds"
      },
      {
        "label": "C",
        "text": "351.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (52 / 6400) · 86400 = 702.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 58",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (52 / 6400) · 86400 = 702.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 702.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (52 / 6400) · 86400 = 702.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-059",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 56 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "756.0 seconds"
      },
      {
        "label": "B",
        "text": "1512.0 seconds"
      },
      {
        "label": "C",
        "text": "378.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (56 / 6400) · 86400 = 756.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 59",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (56 / 6400) · 86400 = 756.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 756.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (56 / 6400) · 86400 = 756.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-060",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 60 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "810.0 seconds"
      },
      {
        "label": "B",
        "text": "1620.0 seconds"
      },
      {
        "label": "C",
        "text": "405.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (60 / 6400) · 86400 = 810.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 60",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (60 / 6400) · 86400 = 810.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 810.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (60 / 6400) · 86400 = 810.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-061",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 64 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "864.0 seconds"
      },
      {
        "label": "B",
        "text": "1728.0 seconds"
      },
      {
        "label": "C",
        "text": "432.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (64 / 6400) · 86400 = 864.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 61",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (64 / 6400) · 86400 = 864.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 864.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (64 / 6400) · 86400 = 864.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-062",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 68 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "918.0 seconds"
      },
      {
        "label": "B",
        "text": "1836.0 seconds"
      },
      {
        "label": "C",
        "text": "459.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (68 / 6400) · 86400 = 918.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 62",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (68 / 6400) · 86400 = 918.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 918.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (68 / 6400) · 86400 = 918.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-063",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 72 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "972.0 seconds"
      },
      {
        "label": "B",
        "text": "1944.0 seconds"
      },
      {
        "label": "C",
        "text": "486.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (72 / 6400) · 86400 = 972.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 63",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (72 / 6400) · 86400 = 972.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 972.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (72 / 6400) · 86400 = 972.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-064",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 76 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "1026.0 seconds"
      },
      {
        "label": "B",
        "text": "2052.0 seconds"
      },
      {
        "label": "C",
        "text": "513.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (76 / 6400) · 86400 = 1026.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 64",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (76 / 6400) · 86400 = 1026.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1026.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (76 / 6400) · 86400 = 1026.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-065",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 80 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "1080.0 seconds"
      },
      {
        "label": "B",
        "text": "2160.0 seconds"
      },
      {
        "label": "C",
        "text": "540.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (80 / 6400) · 86400 = 1080.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 65",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (80 / 6400) · 86400 = 1080.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1080.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (80 / 6400) · 86400 = 1080.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-066",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 84 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "1134.0 seconds"
      },
      {
        "label": "B",
        "text": "2268.0 seconds"
      },
      {
        "label": "C",
        "text": "567.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (84 / 6400) · 86400 = 1134.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 66",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (84 / 6400) · 86400 = 1134.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1134.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (84 / 6400) · 86400 = 1134.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-067",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 88 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "1188.0 seconds"
      },
      {
        "label": "B",
        "text": "2376.0 seconds"
      },
      {
        "label": "C",
        "text": "594.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (88 / 6400) · 86400 = 1188.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 67",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (88 / 6400) · 86400 = 1188.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1188.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (88 / 6400) · 86400 = 1188.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-068",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 92 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "1242.0 seconds"
      },
      {
        "label": "B",
        "text": "2484.0 seconds"
      },
      {
        "label": "C",
        "text": "621.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (92 / 6400) · 86400 = 1242.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 68",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (92 / 6400) · 86400 = 1242.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1242.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (92 / 6400) · 86400 = 1242.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-069",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 96 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "1296.0 seconds"
      },
      {
        "label": "B",
        "text": "2592.0 seconds"
      },
      {
        "label": "C",
        "text": "648.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (96 / 6400) · 86400 = 1296.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 69",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (96 / 6400) · 86400 = 1296.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1296.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (96 / 6400) · 86400 = 1296.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-M-070",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A pendulum clock accurate at sea level is taken to a mountain station at altitude h = 100 km above sea level (Earth's radius R = 6400 km). How many seconds does this clock lose in one full day (86,400 seconds)?",
    "options": [
      {
        "label": "A",
        "text": "1350.0 seconds"
      },
      {
        "label": "B",
        "text": "2700.0 seconds"
      },
      {
        "label": "C",
        "text": "675.0 seconds"
      },
      {
        "label": "D",
        "text": "0 seconds"
      }
    ],
    "correctAnswer": "A",
    "hint": "Fractional change in period: ΔT/T = (1/2) Δg/g = (1/2)(2h/R) = h/R. Time lost = (h/R) × 86400 s.",
    "formula": "Δt = (h / R) · 86400 = (100 / 6400) · 86400 = 1350.0 s",
    "stepByStep": {
      "given": "Data for ADG Medium Question 70",
      "asked": "Resulting acceleration or time shift",
      "formula": "Δt = (h / R) · 86400 = (100 / 6400) · 86400 = 1350.0 s",
      "substitution": "Substitute altitude or rotational parameters",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1350.0 seconds",
      "keyTakeaway": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day.",
      "commonTrap": "Thinking a spring-mass balance clock loses time (spring clock period is independent of g!)."
    },
    "explanation": "A simple pendulum clock loses time at altitude according to Δt = (h/R) × 86400 seconds per day. Governed by Δt = (h / R) · 86400 = (100 / 6400) · 86400 = 1350.0 s.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-001",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.52 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 1.282 R"
      },
      {
        "label": "B",
        "text": "r = 0.962 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.52)r/(4R) = 0 ⇒ r = 2R / (3 · 0.52) = 1.282 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 1",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.52)r/(4R) = 0 ⇒ r = 2R / (3 · 0.52) = 1.282 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 1.282 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.52)r/(4R) = 0 ⇒ r = 2R / (3 · 0.52) = 1.282 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-002",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.54 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 1.235 R"
      },
      {
        "label": "B",
        "text": "r = 0.926 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.54)r/(4R) = 0 ⇒ r = 2R / (3 · 0.54) = 1.235 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 2",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.54)r/(4R) = 0 ⇒ r = 2R / (3 · 0.54) = 1.235 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 1.235 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.54)r/(4R) = 0 ⇒ r = 2R / (3 · 0.54) = 1.235 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-003",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.56 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 1.190 R"
      },
      {
        "label": "B",
        "text": "r = 0.892 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.56)r/(4R) = 0 ⇒ r = 2R / (3 · 0.56) = 1.190 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 3",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.56)r/(4R) = 0 ⇒ r = 2R / (3 · 0.56) = 1.190 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 1.190 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.56)r/(4R) = 0 ⇒ r = 2R / (3 · 0.56) = 1.190 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-004",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.58 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 1.149 R"
      },
      {
        "label": "B",
        "text": "r = 0.862 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.58)r/(4R) = 0 ⇒ r = 2R / (3 · 0.58) = 1.149 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 4",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.58)r/(4R) = 0 ⇒ r = 2R / (3 · 0.58) = 1.149 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 1.149 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.58)r/(4R) = 0 ⇒ r = 2R / (3 · 0.58) = 1.149 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-005",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.60 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 1.111 R"
      },
      {
        "label": "B",
        "text": "r = 0.833 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.60)r/(4R) = 0 ⇒ r = 2R / (3 · 0.60) = 1.111 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 5",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.60)r/(4R) = 0 ⇒ r = 2R / (3 · 0.60) = 1.111 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 1.111 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.60)r/(4R) = 0 ⇒ r = 2R / (3 · 0.60) = 1.111 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-006",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.62 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 1.075 R"
      },
      {
        "label": "B",
        "text": "r = 0.806 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.62)r/(4R) = 0 ⇒ r = 2R / (3 · 0.62) = 1.075 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 6",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.62)r/(4R) = 0 ⇒ r = 2R / (3 · 0.62) = 1.075 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 1.075 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.62)r/(4R) = 0 ⇒ r = 2R / (3 · 0.62) = 1.075 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-007",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.64 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 1.042 R"
      },
      {
        "label": "B",
        "text": "r = 0.782 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.64)r/(4R) = 0 ⇒ r = 2R / (3 · 0.64) = 1.042 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 7",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.64)r/(4R) = 0 ⇒ r = 2R / (3 · 0.64) = 1.042 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 1.042 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.64)r/(4R) = 0 ⇒ r = 2R / (3 · 0.64) = 1.042 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-008",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.66 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 1.010 R"
      },
      {
        "label": "B",
        "text": "r = 0.758 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.66)r/(4R) = 0 ⇒ r = 2R / (3 · 0.66) = 1.010 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 8",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.66)r/(4R) = 0 ⇒ r = 2R / (3 · 0.66) = 1.010 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 1.010 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.66)r/(4R) = 0 ⇒ r = 2R / (3 · 0.66) = 1.010 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-009",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.68 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.980 R"
      },
      {
        "label": "B",
        "text": "r = 0.735 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.68)r/(4R) = 0 ⇒ r = 2R / (3 · 0.68) = 0.980 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 9",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.68)r/(4R) = 0 ⇒ r = 2R / (3 · 0.68) = 0.980 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.980 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.68)r/(4R) = 0 ⇒ r = 2R / (3 · 0.68) = 0.980 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-010",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.70 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.952 R"
      },
      {
        "label": "B",
        "text": "r = 0.714 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.70)r/(4R) = 0 ⇒ r = 2R / (3 · 0.70) = 0.952 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 10",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.70)r/(4R) = 0 ⇒ r = 2R / (3 · 0.70) = 0.952 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.952 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.70)r/(4R) = 0 ⇒ r = 2R / (3 · 0.70) = 0.952 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-011",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.72 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.926 R"
      },
      {
        "label": "B",
        "text": "r = 0.695 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.72)r/(4R) = 0 ⇒ r = 2R / (3 · 0.72) = 0.926 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 11",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.72)r/(4R) = 0 ⇒ r = 2R / (3 · 0.72) = 0.926 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.926 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.72)r/(4R) = 0 ⇒ r = 2R / (3 · 0.72) = 0.926 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-012",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.74 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.901 R"
      },
      {
        "label": "B",
        "text": "r = 0.676 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.74)r/(4R) = 0 ⇒ r = 2R / (3 · 0.74) = 0.901 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 12",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.74)r/(4R) = 0 ⇒ r = 2R / (3 · 0.74) = 0.901 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.901 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.74)r/(4R) = 0 ⇒ r = 2R / (3 · 0.74) = 0.901 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-013",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.76 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.877 R"
      },
      {
        "label": "B",
        "text": "r = 0.658 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.76)r/(4R) = 0 ⇒ r = 2R / (3 · 0.76) = 0.877 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 13",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.76)r/(4R) = 0 ⇒ r = 2R / (3 · 0.76) = 0.877 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.877 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.76)r/(4R) = 0 ⇒ r = 2R / (3 · 0.76) = 0.877 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-014",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.78 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.855 R"
      },
      {
        "label": "B",
        "text": "r = 0.641 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.78)r/(4R) = 0 ⇒ r = 2R / (3 · 0.78) = 0.855 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 14",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.78)r/(4R) = 0 ⇒ r = 2R / (3 · 0.78) = 0.855 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.855 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.78)r/(4R) = 0 ⇒ r = 2R / (3 · 0.78) = 0.855 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-015",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.80 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.833 R"
      },
      {
        "label": "B",
        "text": "r = 0.625 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.80)r/(4R) = 0 ⇒ r = 2R / (3 · 0.80) = 0.833 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 15",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.80)r/(4R) = 0 ⇒ r = 2R / (3 · 0.80) = 0.833 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.833 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.80)r/(4R) = 0 ⇒ r = 2R / (3 · 0.80) = 0.833 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-016",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.82 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.813 R"
      },
      {
        "label": "B",
        "text": "r = 0.610 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.82)r/(4R) = 0 ⇒ r = 2R / (3 · 0.82) = 0.813 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 16",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.82)r/(4R) = 0 ⇒ r = 2R / (3 · 0.82) = 0.813 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.813 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.82)r/(4R) = 0 ⇒ r = 2R / (3 · 0.82) = 0.813 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-017",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.84 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.794 R"
      },
      {
        "label": "B",
        "text": "r = 0.596 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.84)r/(4R) = 0 ⇒ r = 2R / (3 · 0.84) = 0.794 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 17",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.84)r/(4R) = 0 ⇒ r = 2R / (3 · 0.84) = 0.794 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.794 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.84)r/(4R) = 0 ⇒ r = 2R / (3 · 0.84) = 0.794 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-018",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.86 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.775 R"
      },
      {
        "label": "B",
        "text": "r = 0.581 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.86)r/(4R) = 0 ⇒ r = 2R / (3 · 0.86) = 0.775 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 18",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.86)r/(4R) = 0 ⇒ r = 2R / (3 · 0.86) = 0.775 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.775 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.86)r/(4R) = 0 ⇒ r = 2R / (3 · 0.86) = 0.775 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-019",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.88 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.758 R"
      },
      {
        "label": "B",
        "text": "r = 0.569 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.88)r/(4R) = 0 ⇒ r = 2R / (3 · 0.88) = 0.758 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 19",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.88)r/(4R) = 0 ⇒ r = 2R / (3 · 0.88) = 0.758 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.758 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.88)r/(4R) = 0 ⇒ r = 2R / (3 · 0.88) = 0.758 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-020",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.90 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.741 R"
      },
      {
        "label": "B",
        "text": "r = 0.556 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.90)r/(4R) = 0 ⇒ r = 2R / (3 · 0.90) = 0.741 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 20",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.90)r/(4R) = 0 ⇒ r = 2R / (3 · 0.90) = 0.741 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.741 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.90)r/(4R) = 0 ⇒ r = 2R / (3 · 0.90) = 0.741 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-021",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.92 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.725 R"
      },
      {
        "label": "B",
        "text": "r = 0.544 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.92)r/(4R) = 0 ⇒ r = 2R / (3 · 0.92) = 0.725 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 21",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.92)r/(4R) = 0 ⇒ r = 2R / (3 · 0.92) = 0.725 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.725 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.92)r/(4R) = 0 ⇒ r = 2R / (3 · 0.92) = 0.725 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-022",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.94 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.709 R"
      },
      {
        "label": "B",
        "text": "r = 0.532 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.94)r/(4R) = 0 ⇒ r = 2R / (3 · 0.94) = 0.709 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 22",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.94)r/(4R) = 0 ⇒ r = 2R / (3 · 0.94) = 0.709 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.709 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.94)r/(4R) = 0 ⇒ r = 2R / (3 · 0.94) = 0.709 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-023",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.96 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.694 R"
      },
      {
        "label": "B",
        "text": "r = 0.520 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.96)r/(4R) = 0 ⇒ r = 2R / (3 · 0.96) = 0.694 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 23",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.96)r/(4R) = 0 ⇒ r = 2R / (3 · 0.96) = 0.694 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.694 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.96)r/(4R) = 0 ⇒ r = 2R / (3 · 0.96) = 0.694 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-024",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 0.98 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.680 R"
      },
      {
        "label": "B",
        "text": "r = 0.510 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.98)r/(4R) = 0 ⇒ r = 2R / (3 · 0.98) = 0.680 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 24",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(0.98)r/(4R) = 0 ⇒ r = 2R / (3 · 0.98) = 0.680 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.680 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(0.98)r/(4R) = 0 ⇒ r = 2R / (3 · 0.98) = 0.680 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-025",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A celestial body of radius R has a radially non-uniform density distribution given by ρ(r) = ρ₀ (1 - 1.00 · r/R) for 0 ≤ r ≤ R. At what internal radial distance r from the center does the gravitational acceleration reach its peak value?",
    "options": [
      {
        "label": "A",
        "text": "r = 0.667 R"
      },
      {
        "label": "B",
        "text": "r = 0.500 R"
      },
      {
        "label": "C",
        "text": "r = R (at the surface)"
      },
      {
        "label": "D",
        "text": "r = 0.500 R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Compute M(r) by integrating 4π x² ρ(x) dx, find g(r) = G M(r) / r², and solve dg/dr = 0.",
    "formula": "dg/dr = 0 ⇒ 1/3 - 2(1.00)r/(4R) = 0 ⇒ r = 2R / (3 · 1.00) = 0.667 R",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 25",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "dg/dr = 0 ⇒ 1/3 - 2(1.00)r/(4R) = 0 ⇒ r = 2R / (3 · 1.00) = 0.667 R",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r = 0.667 R",
      "keyTakeaway": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface.",
      "commonTrap": "Assuming gravity always increases monotonically to the surface as in uniform spheres."
    },
    "explanation": "In planets with density decreasing radially, gravity peaks inside the mantle rather than at the surface. Formulated via dg/dr = 0 ⇒ 1/3 - 2(1.00)r/(4R) = 0 ⇒ r = 2R / (3 · 1.00) = 0.667 R.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-026",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 2.1 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 0.923"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.554"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.385"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(2.1) / (2.1 + 7) = 0.923",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 26",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(2.1) / (2.1 + 7) = 0.923",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 0.923",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(2.1) / (2.1 + 7) = 0.923.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-027",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 2.2 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 0.957"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.574"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.435"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(2.2) / (2.2 + 7) = 0.957",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 27",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(2.2) / (2.2 + 7) = 0.957",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 0.957",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(2.2) / (2.2 + 7) = 0.957.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-028",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 2.3 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 0.989"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.593"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.484"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(2.3) / (2.3 + 7) = 0.989",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 28",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(2.3) / (2.3 + 7) = 0.989",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 0.989",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(2.3) / (2.3 + 7) = 0.989.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-029",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 2.4 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.021"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.613"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.531"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(2.4) / (2.4 + 7) = 1.021",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 29",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(2.4) / (2.4 + 7) = 1.021",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.021",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(2.4) / (2.4 + 7) = 1.021.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-030",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 2.5 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.053"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.632"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.579"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(2.5) / (2.5 + 7) = 1.053",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 30",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(2.5) / (2.5 + 7) = 1.053",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.053",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(2.5) / (2.5 + 7) = 1.053.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-031",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 2.6 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.083"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.650"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.624"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(2.6) / (2.6 + 7) = 1.083",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 31",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(2.6) / (2.6 + 7) = 1.083",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.083",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(2.6) / (2.6 + 7) = 1.083.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-032",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 2.7 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.113"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.668"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.669"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(2.7) / (2.7 + 7) = 1.113",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 32",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(2.7) / (2.7 + 7) = 1.113",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.113",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(2.7) / (2.7 + 7) = 1.113.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-033",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 2.8 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.143"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.686"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.715"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(2.8) / (2.8 + 7) = 1.143",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 33",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(2.8) / (2.8 + 7) = 1.143",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.143",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(2.8) / (2.8 + 7) = 1.143.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-034",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 2.9 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.172"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.703"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.758"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(2.9) / (2.9 + 7) = 1.172",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 34",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(2.9) / (2.9 + 7) = 1.172",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.172",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(2.9) / (2.9 + 7) = 1.172.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-035",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 3.0 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.200"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.720"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.800"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(3.0) / (3.0 + 7) = 1.200",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 35",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(3.0) / (3.0 + 7) = 1.200",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.200",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(3.0) / (3.0 + 7) = 1.200.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-036",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 3.1 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.228"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.737"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.842"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(3.1) / (3.1 + 7) = 1.228",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 36",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(3.1) / (3.1 + 7) = 1.228",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.228",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(3.1) / (3.1 + 7) = 1.228.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-037",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 3.2 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.255"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.753"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.882"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(3.2) / (3.2 + 7) = 1.255",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 37",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(3.2) / (3.2 + 7) = 1.255",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.255",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(3.2) / (3.2 + 7) = 1.255.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-038",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 3.3 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.282"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.769"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.923"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(3.3) / (3.3 + 7) = 1.282",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 38",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(3.3) / (3.3 + 7) = 1.282",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.282",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(3.3) / (3.3 + 7) = 1.282.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-039",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 3.4 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.308"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.785"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.962"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(3.4) / (3.4 + 7) = 1.308",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 39",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(3.4) / (3.4 + 7) = 1.308",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.308",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(3.4) / (3.4 + 7) = 1.308.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-040",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 3.5 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.333"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.800"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 1.999"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(3.5) / (3.5 + 7) = 1.333",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 40",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(3.5) / (3.5 + 7) = 1.333",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.333",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(3.5) / (3.5 + 7) = 1.333.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-041",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 3.6 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.358"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.815"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 2.037"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(3.6) / (3.6 + 7) = 1.358",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 41",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(3.6) / (3.6 + 7) = 1.358",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.358",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(3.6) / (3.6 + 7) = 1.358.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-042",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 3.7 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.383"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.830"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 2.075"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(3.7) / (3.7 + 7) = 1.383",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 42",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(3.7) / (3.7 + 7) = 1.383",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.383",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(3.7) / (3.7 + 7) = 1.383.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-043",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 3.8 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.407"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.844"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 2.111"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(3.8) / (3.8 + 7) = 1.407",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 43",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(3.8) / (3.8 + 7) = 1.407",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.407",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(3.8) / (3.8 + 7) = 1.407.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-044",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 3.9 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.431"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.859"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 2.147"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(3.9) / (3.9 + 7) = 1.431",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 44",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(3.9) / (3.9 + 7) = 1.431",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.431",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(3.9) / (3.9 + 7) = 1.431.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-045",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 4.0 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.455"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.873"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 2.183"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(4.0) / (4.0 + 7) = 1.455",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 45",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(4.0) / (4.0 + 7) = 1.455",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.455",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(4.0) / (4.0 + 7) = 1.455.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-046",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 4.1 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.477"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.886"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 2.216"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(4.1) / (4.1 + 7) = 1.477",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 46",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(4.1) / (4.1 + 7) = 1.477",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.477",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(4.1) / (4.1 + 7) = 1.477.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-047",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 4.2 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.500"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.900"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 2.250"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(4.2) / (4.2 + 7) = 1.500",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 47",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(4.2) / (4.2 + 7) = 1.500",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.500",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(4.2) / (4.2 + 7) = 1.500.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-048",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 4.3 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.522"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.913"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 2.283"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(4.3) / (4.3 + 7) = 1.522",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 48",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(4.3) / (4.3 + 7) = 1.522",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.522",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(4.3) / (4.3 + 7) = 1.522.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-049",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 4.4 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.544"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.926"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 2.316"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(4.4) / (4.4 + 7) = 1.544",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 49",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(4.4) / (4.4 + 7) = 1.544",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.544",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(4.4) / (4.4 + 7) = 1.544.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-050",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A differentiated planet of radius R has a dense metallic core of radius R/2 with uniform density 4.5 ρ₀, surrounded by a silicate mantle of outer radius R with uniform density ρ₀. What is the ratio of gravitational acceleration at the core-mantle boundary g(R/2) to that at the outer surface g(R)?",
    "options": [
      {
        "label": "A",
        "text": "g(R/2) / g(R) = 1.565"
      },
      {
        "label": "B",
        "text": "g(R/2) / g(R) = 1.000"
      },
      {
        "label": "C",
        "text": "g(R/2) / g(R) = 0.939"
      },
      {
        "label": "D",
        "text": "g(R/2) / g(R) = 2.348"
      }
    ],
    "correctAnswer": "A",
    "hint": "Calculate enclosed mass M(R/2) for the core, total mass M(R) for core + mantle, and evaluate g = G M(r) / r².",
    "formula": "g(R/2)/g(R) = 4(4.5) / (4.5 + 7) = 1.565",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 50",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "g(R/2)/g(R) = 4(4.5) / (4.5 + 7) = 1.565",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g(R/2) / g(R) = 1.565",
      "keyTakeaway": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity.",
      "commonTrap": "Forgetting that mantle volume is (7/8) of the total planetary volume."
    },
    "explanation": "In differentiated bodies, core mass concentration can cause boundary gravity to equal or exceed surface gravity. Formulated via g(R/2)/g(R) = 4(4.5) / (4.5 + 7) = 1.565.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-051",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "For a planet of radius R = 5100 km and surface gravity g = 8.2 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 82.6 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 165.2 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 41.3 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(5100000 / 8.2) s = 82.6 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 51",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(5100000 / 8.2) s = 82.6 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 82.6 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(5100000 / 8.2) s = 82.6 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-052",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "For a planet of radius R = 5200 km and surface gravity g = 8.4 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 82.4 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 164.8 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 41.2 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(5200000 / 8.4) s = 82.4 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 52",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(5200000 / 8.4) s = 82.4 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 82.4 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(5200000 / 8.4) s = 82.4 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-053",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "For a planet of radius R = 5300 km and surface gravity g = 8.6 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 82.2 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 164.4 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 41.1 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(5300000 / 8.6) s = 82.2 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 53",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(5300000 / 8.6) s = 82.2 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 82.2 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(5300000 / 8.6) s = 82.2 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-054",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "For a planet of radius R = 5400 km and surface gravity g = 8.8 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 82.0 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 164.0 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 41.0 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(5400000 / 8.8) s = 82.0 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 54",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(5400000 / 8.8) s = 82.0 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 82.0 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(5400000 / 8.8) s = 82.0 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-055",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "For a planet of radius R = 5500 km and surface gravity g = 9.0 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 81.9 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 163.8 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 41.0 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(5500000 / 9.0) s = 81.9 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 55",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(5500000 / 9.0) s = 81.9 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 81.9 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(5500000 / 9.0) s = 81.9 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-056",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "For a planet of radius R = 5600 km and surface gravity g = 9.2 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 81.7 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 163.4 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.9 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(5600000 / 9.2) s = 81.7 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 56",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(5600000 / 9.2) s = 81.7 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 81.7 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(5600000 / 9.2) s = 81.7 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-057",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "For a planet of radius R = 5700 km and surface gravity g = 9.4 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 81.5 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 163.0 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.8 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(5700000 / 9.4) s = 81.5 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 57",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(5700000 / 9.4) s = 81.5 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 81.5 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(5700000 / 9.4) s = 81.5 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-058",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "For a planet of radius R = 5800 km and surface gravity g = 9.6 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 81.4 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 162.8 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.7 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(5800000 / 9.6) s = 81.4 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 58",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(5800000 / 9.6) s = 81.4 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 81.4 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(5800000 / 9.6) s = 81.4 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-059",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "For a planet of radius R = 5900 km and surface gravity g = 9.8 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 81.3 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 162.6 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.6 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(5900000 / 9.8) s = 81.3 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 59",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(5900000 / 9.8) s = 81.3 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 81.3 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(5900000 / 9.8) s = 81.3 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-060",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "For a planet of radius R = 6000 km and surface gravity g = 10.0 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 81.1 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 162.2 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.5 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(6000000 / 10.0) s = 81.1 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 60",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(6000000 / 10.0) s = 81.1 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 81.1 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(6000000 / 10.0) s = 81.1 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-061",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "For a planet of radius R = 6100 km and surface gravity g = 10.2 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 81.0 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 162.0 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.5 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(6100000 / 10.2) s = 81.0 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 61",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(6100000 / 10.2) s = 81.0 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 81.0 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(6100000 / 10.2) s = 81.0 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-062",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "For a planet of radius R = 6200 km and surface gravity g = 10.4 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 80.9 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 161.8 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.5 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(6200000 / 10.4) s = 80.9 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 62",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(6200000 / 10.4) s = 80.9 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 80.9 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(6200000 / 10.4) s = 80.9 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-063",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "For a planet of radius R = 6300 km and surface gravity g = 10.6 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 80.7 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 161.4 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.4 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(6300000 / 10.6) s = 80.7 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 63",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(6300000 / 10.6) s = 80.7 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 80.7 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(6300000 / 10.6) s = 80.7 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-064",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "For a planet of radius R = 6400 km and surface gravity g = 10.8 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 80.6 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 161.2 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.3 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(6400000 / 10.8) s = 80.6 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 64",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(6400000 / 10.8) s = 80.6 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 80.6 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(6400000 / 10.8) s = 80.6 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-065",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "For a planet of radius R = 6500 km and surface gravity g = 11.0 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 80.5 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 161.0 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.3 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(6500000 / 11.0) s = 80.5 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 65",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(6500000 / 11.0) s = 80.5 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 80.5 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(6500000 / 11.0) s = 80.5 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-066",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "For a planet of radius R = 6600 km and surface gravity g = 11.2 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 80.4 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 160.8 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.2 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(6600000 / 11.2) s = 80.4 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 66",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(6600000 / 11.2) s = 80.4 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 80.4 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(6600000 / 11.2) s = 80.4 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-067",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "For a planet of radius R = 6700 km and surface gravity g = 11.4 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 80.3 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 160.6 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.1 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(6700000 / 11.4) s = 80.3 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 67",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(6700000 / 11.4) s = 80.3 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 80.3 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(6700000 / 11.4) s = 80.3 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-068",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "For a planet of radius R = 6800 km and surface gravity g = 11.6 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 80.2 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 160.4 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.1 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(6800000 / 11.6) s = 80.2 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 68",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(6800000 / 11.6) s = 80.2 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 80.2 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(6800000 / 11.6) s = 80.2 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-069",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "For a planet of radius R = 6900 km and surface gravity g = 11.8 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 80.1 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 160.2 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.0 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(6900000 / 11.8) s = 80.1 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 69",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(6900000 / 11.8) s = 80.1 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 80.1 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(6900000 / 11.8) s = 80.1 min.",
    "category": "accelerationDueToGravity"
  },
  {
    "id": "ADG-H-070",
    "topic": "accelerationDueToGravity",
    "topicName": "Acceleration Due to Gravity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "For a planet of radius R = 7000 km and surface gravity g = 12.0 m/s², what must be the length of its rotational day (period T) so that an object sitting at the equator experiences complete weightlessness (apparent weight W_app = 0)?",
    "options": [
      {
        "label": "A",
        "text": "T ≈ 80.0 minutes"
      },
      {
        "label": "B",
        "text": "T ≈ 160.0 minutes"
      },
      {
        "label": "C",
        "text": "T ≈ 24.0 hours"
      },
      {
        "label": "D",
        "text": "T ≈ 40.0 minutes"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set effective gravity at equator g - ω² R = 0 ⇒ ω = √(g/R). Period T = 2π / ω.",
    "formula": "T = 2π √(R / g) = 2π √(7000000 / 12.0) s = 80.0 min",
    "stepByStep": {
      "given": "Advanced planetary parameters for ADG Hard Question 70",
      "asked": "Peak internal gravity radius or boundary ratio",
      "formula": "T = 2π √(R / g) = 2π √(7000000 / 12.0) s = 80.0 min",
      "substitution": "Apply calculus extremum or layered mass integration",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T ≈ 80.0 minutes",
      "keyTakeaway": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period.",
      "commonTrap": "Thinking the required day length is zero."
    },
    "explanation": "Rotational period for equatorial weightlessness is T = 2π√(R/g), matching low-orbit satellite period. Formulated via T = 2π √(R / g) = 2π √(7000000 / 12.0) s = 80.0 min.",
    "category": "accelerationDueToGravity"
  }
];

export default questions;
