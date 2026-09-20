// Topic 5: Satellite & Escape Velocity
// Total Questions: 210

export const questions = [
  {
    "id": "SEV-E-001",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the relation between escape speed v_e from a planet's surface and the orbital speed v_o of a satellite orbiting just above the surface?",
    "options": [
      {
        "label": "A",
        "text": "v_e = √2 · v_o ≈ 1.414 v_o"
      },
      {
        "label": "B",
        "text": "v_e = 2 · v_o"
      },
      {
        "label": "C",
        "text": "v_e = v_o / √2"
      },
      {
        "label": "D",
        "text": "v_e = 4 · v_o"
      }
    ],
    "correctAnswer": "A",
    "hint": "v_e = √(2GM/R) and v_o = √(GM/R). The ratio is v_e / v_o = √2.",
    "formula": "v_e = √2 · v_o",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 1",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v_e = √2 · v_o",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_e = √2 · v_o ≈ 1.414 v_o",
      "keyTakeaway": "Escape speed from the surface of any celestial body is strictly √2 times the surface circular orbital speed.",
      "commonTrap": "Doubling (2x) instead of multiplying by √2."
    },
    "explanation": "Escape speed from the surface of any celestial body is strictly √2 times the surface circular orbital speed. Formulated via v_e = √2 · v_o.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-002",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the approximate numerical value of escape velocity from the surface of the Earth?",
    "options": [
      {
        "label": "A",
        "text": "11.2 km/s"
      },
      {
        "label": "B",
        "text": "7.9 km/s"
      },
      {
        "label": "C",
        "text": "9.8 km/s"
      },
      {
        "label": "D",
        "text": "42.0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "v_e = √(2 g R) = √(2 × 9.8 m/s² × 6.4 × 10⁶ m) ≈ 11.2 km/s.",
    "formula": "v_e = √(2 g R) ≈ 11.2 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 2",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v_e = √(2 g R) ≈ 11.2 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 11.2 km/s",
      "keyTakeaway": "Earth's escape velocity is approximately 11.2 km/s (~25,000 mph).",
      "commonTrap": "Confusing escape speed (11.2 km/s) with near-surface circular orbital speed (7.9 km/s)."
    },
    "explanation": "Earth's escape velocity is approximately 11.2 km/s (~25,000 mph). Formulated via v_e = √(2 g R) ≈ 11.2 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-003",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the approximate orbital speed v_o of a satellite orbiting very close to Earth's surface?",
    "options": [
      {
        "label": "A",
        "text": "7.92 km/s (approx. 8 km/s)"
      },
      {
        "label": "B",
        "text": "11.2 km/s"
      },
      {
        "label": "C",
        "text": "3.0 km/s"
      },
      {
        "label": "D",
        "text": "1.6 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "v_o = √(g R) = √(9.8 × 6.4 × 10⁶) ≈ 7919 m/s ≈ 7.92 km/s.",
    "formula": "v_o = √(g R) ≈ 7.92 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 3",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v_o = √(g R) ≈ 7.92 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 7.92 km/s (approx. 8 km/s)",
      "keyTakeaway": "Near-Earth circular orbital speed is approximately 7.9 km/s.",
      "commonTrap": "Confusing orbital speed with escape speed (11.2 km/s)."
    },
    "explanation": "Near-Earth circular orbital speed is approximately 7.9 km/s. Formulated via v_o = √(g R) ≈ 7.92 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-004",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Does the escape velocity of an object from Earth depend on the angle of projection θ with the horizontal?",
    "options": [
      {
        "label": "A",
        "text": "No, it is independent of the projection angle (provided it doesn't collide with Earth)"
      },
      {
        "label": "B",
        "text": "Yes, projection at 45° requires minimum escape speed"
      },
      {
        "label": "C",
        "text": "Yes, vertical projection requires maximum escape speed"
      },
      {
        "label": "D",
        "text": "Yes, horizontal projection requires minimum speed"
      }
    ],
    "correctAnswer": "A",
    "hint": "Escape velocity is derived purely from scalar mechanical energy conservation: 1/2 m v² - GMm/R = 0.",
    "formula": "v_e = √(2GM/R) (independent of θ)",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 4",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v_e = √(2GM/R) (independent of θ)",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: No, it is independent of the projection angle (provided it doesn't collide with Earth)",
      "keyTakeaway": "Because energy is a scalar, escape speed is completely independent of launch angle.",
      "commonTrap": "Confusing projectile maximum range (which requires 45°) with escape velocity."
    },
    "explanation": "Because energy is a scalar, escape speed is completely independent of launch angle. Formulated via v_e = √(2GM/R) (independent of θ).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-005",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Does the escape velocity of an object depend on the mass m of the projected object?",
    "options": [
      {
        "label": "A",
        "text": "No, it is independent of the projectile's mass (v_e ∝ m⁰)"
      },
      {
        "label": "B",
        "text": "Yes, heavier objects require much higher escape speed"
      },
      {
        "label": "C",
        "text": "Yes, lighter objects require higher escape speed"
      },
      {
        "label": "D",
        "text": "Directly proportional to m"
      }
    ],
    "correctAnswer": "A",
    "hint": "In 1/2 m v² = G M m / R, the mass m cancels out completely.",
    "formula": "v_e = √(2 G M / R)",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 5",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v_e = √(2 G M / R)",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: No, it is independent of the projectile's mass (v_e ∝ m⁰)",
      "keyTakeaway": "Escape speed is an intrinsic property of the planet; a dust grain and a battleship have the exact same escape speed.",
      "commonTrap": "Assuming heavier rockets require higher escape speed (they require more energy/fuel, but the required speed is identical)."
    },
    "explanation": "Escape speed is an intrinsic property of the planet; a dust grain and a battleship have the exact same escape speed. Formulated via v_e = √(2 G M / R).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-006",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the orbital period T of a geostationary (geosynchronous) communications satellite?",
    "options": [
      {
        "label": "A",
        "text": "24 hours (1 sidereal day)"
      },
      {
        "label": "B",
        "text": "12 hours"
      },
      {
        "label": "C",
        "text": "84 minutes"
      },
      {
        "label": "D",
        "text": "365 days"
      }
    ],
    "correctAnswer": "A",
    "hint": "To appear fixed over a spot on Earth's equator, its period must match Earth's rotation period.",
    "formula": "T_geostationary = 24 hours",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 6",
      "asked": "Orbital speed or escape characteristic",
      "formula": "T_geostationary = 24 hours",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 24 hours (1 sidereal day)",
      "keyTakeaway": "A geostationary satellite has an orbital period of exactly 24 hours, orbiting in the equatorial plane from West to East.",
      "commonTrap": "Confusing with polar low-Earth orbit satellites (~90 minutes)."
    },
    "explanation": "A geostationary satellite has an orbital period of exactly 24 hours, orbiting in the equatorial plane from West to East. Formulated via T_geostationary = 24 hours.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-007",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "For a satellite in a circular orbit of radius r, what is the ratio of kinetic energy K to total mechanical energy E?",
    "options": [
      {
        "label": "A",
        "text": "K / E = -1 (K = -E)"
      },
      {
        "label": "B",
        "text": "K / E = 1 (K = E)"
      },
      {
        "label": "C",
        "text": "K / E = 2"
      },
      {
        "label": "D",
        "text": "K / E = -0.5"
      }
    ],
    "correctAnswer": "A",
    "hint": "K = G M m / (2r) and E = - G M m / (2r). Thus E = -K.",
    "formula": "E = - K = U / 2",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 7",
      "asked": "Orbital speed or escape characteristic",
      "formula": "E = - K = U / 2",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: K / E = -1 (K = -E)",
      "keyTakeaway": "In any bound gravitational circular orbit, total mechanical energy is negative and equals the negative of kinetic energy: E = -K.",
      "commonTrap": "Assuming total energy must be positive."
    },
    "explanation": "In any bound gravitational circular orbit, total mechanical energy is negative and equals the negative of kinetic energy: E = -K. Formulated via E = - K = U / 2.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-008",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the ratio of potential energy U to kinetic energy K for a satellite in circular orbit?",
    "options": [
      {
        "label": "A",
        "text": "U = - 2 K"
      },
      {
        "label": "B",
        "text": "U = - K"
      },
      {
        "label": "C",
        "text": "U = 2 K"
      },
      {
        "label": "D",
        "text": "U = - 1/2 K"
      }
    ],
    "correctAnswer": "A",
    "hint": "U = - G M m / r and K = 1/2 G M m / r = - U / 2.",
    "formula": "U = - 2 K",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 8",
      "asked": "Orbital speed or escape characteristic",
      "formula": "U = - 2 K",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U = - 2 K",
      "keyTakeaway": "The virial theorem for inverse-square gravity states that potential energy is twice the negative of kinetic energy: U = -2K.",
      "commonTrap": "Thinking U and K are equal in magnitude."
    },
    "explanation": "The virial theorem for inverse-square gravity states that potential energy is twice the negative of kinetic energy: U = -2K. Formulated via U = - 2 K.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-009",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the binding energy of a satellite of mass m in a circular orbit of radius r around a planet of mass M?",
    "options": [
      {
        "label": "A",
        "text": "B = G M m / (2r)"
      },
      {
        "label": "B",
        "text": "B = G M m / r"
      },
      {
        "label": "C",
        "text": "B = - G M m / (2r)"
      },
      {
        "label": "D",
        "text": "B = 2 G M m / r"
      }
    ],
    "correctAnswer": "A",
    "hint": "Binding energy is the minimum energy required to remove the satellite to infinity: B = -E = G M m / (2r).",
    "formula": "B = - E = + G M m / (2r)",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 9",
      "asked": "Orbital speed or escape characteristic",
      "formula": "B = - E = + G M m / (2r)",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: B = G M m / (2r)",
      "keyTakeaway": "Binding energy is the positive energy needed to overcome gravitational binding: B = +GMm/(2r).",
      "commonTrap": "Assigning a negative sign to binding energy."
    },
    "explanation": "Binding energy is the positive energy needed to overcome gravitational binding: B = +GMm/(2r). Formulated via B = - E = + G M m / (2r).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-010",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Why does the Moon lack a permanent atmosphere?",
    "options": [
      {
        "label": "A",
        "text": "The rms thermal speed of gas molecules exceeds the Moon's small escape velocity (~2.38 km/s)"
      },
      {
        "label": "B",
        "text": "The Moon has no gravitational field"
      },
      {
        "label": "C",
        "text": "The Moon's magnetic field blows the atmosphere away"
      },
      {
        "label": "D",
        "text": "Temperature is too cold for gases to exist"
      }
    ],
    "correctAnswer": "A",
    "hint": "Moon's escape velocity is small (~2.38 km/s), so lighter gas molecules readily exceed escape speed at daytime temperatures.",
    "formula": "v_rms > v_escape,Moon ≈ 2.38 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 10",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v_rms > v_escape,Moon ≈ 2.38 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: The rms thermal speed of gas molecules exceeds the Moon's small escape velocity (~2.38 km/s)",
      "keyTakeaway": "Gases escape a celestial body when their thermal root-mean-square speed exceeds local escape velocity.",
      "commonTrap": "Believing the Moon has zero gravity."
    },
    "explanation": "Gases escape a celestial body when their thermal root-mean-square speed exceeds local escape velocity. Formulated via v_rms > v_escape,Moon ≈ 2.38 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-011",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 1.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 6.46 km/s"
      },
      {
        "label": "B",
        "text": "v = 11.88 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 9.69 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(1.50) = 7.92 / √(1.50) = 6.46 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √1.50 = 6.46 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 11",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √1.50 = 6.46 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 6.46 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √1.50 = 6.46 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-012",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 1.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 5.99 km/s"
      },
      {
        "label": "B",
        "text": "v = 13.86 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 8.98 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(1.75) = 7.92 / √(1.75) = 5.99 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √1.75 = 5.99 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 12",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √1.75 = 5.99 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 5.99 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √1.75 = 5.99 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-013",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 2.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 5.60 km/s"
      },
      {
        "label": "B",
        "text": "v = 15.84 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 8.40 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(2.00) = 7.92 / √(2.00) = 5.60 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √2.00 = 5.60 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 13",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √2.00 = 5.60 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 5.60 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √2.00 = 5.60 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-014",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 2.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 5.28 km/s"
      },
      {
        "label": "B",
        "text": "v = 17.82 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 7.92 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(2.25) = 7.92 / √(2.25) = 5.28 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √2.25 = 5.28 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 14",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √2.25 = 5.28 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 5.28 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √2.25 = 5.28 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-015",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 2.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 5.01 km/s"
      },
      {
        "label": "B",
        "text": "v = 19.80 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 7.51 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(2.50) = 7.92 / √(2.50) = 5.01 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √2.50 = 5.01 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 15",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √2.50 = 5.01 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 5.01 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √2.50 = 5.01 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-016",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 2.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 4.78 km/s"
      },
      {
        "label": "B",
        "text": "v = 21.78 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 7.17 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(2.75) = 7.92 / √(2.75) = 4.78 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √2.75 = 4.78 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 16",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √2.75 = 4.78 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 4.78 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √2.75 = 4.78 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-017",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 3.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 4.57 km/s"
      },
      {
        "label": "B",
        "text": "v = 23.76 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 6.86 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(3.00) = 7.92 / √(3.00) = 4.57 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √3.00 = 4.57 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 17",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √3.00 = 4.57 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 4.57 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √3.00 = 4.57 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-018",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 3.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 4.40 km/s"
      },
      {
        "label": "B",
        "text": "v = 25.74 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 6.60 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(3.25) = 7.92 / √(3.25) = 4.40 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √3.25 = 4.40 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 18",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √3.25 = 4.40 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 4.40 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √3.25 = 4.40 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-019",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 3.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 4.24 km/s"
      },
      {
        "label": "B",
        "text": "v = 27.72 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 6.36 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(3.50) = 7.92 / √(3.50) = 4.24 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √3.50 = 4.24 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 19",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √3.50 = 4.24 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 4.24 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √3.50 = 4.24 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-020",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 3.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 4.09 km/s"
      },
      {
        "label": "B",
        "text": "v = 29.70 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 6.13 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(3.75) = 7.92 / √(3.75) = 4.09 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √3.75 = 4.09 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 20",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √3.75 = 4.09 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 4.09 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √3.75 = 4.09 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-021",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 4.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 3.96 km/s"
      },
      {
        "label": "B",
        "text": "v = 31.68 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 5.94 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(4.00) = 7.92 / √(4.00) = 3.96 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √4.00 = 3.96 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 21",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √4.00 = 3.96 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 3.96 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √4.00 = 3.96 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-022",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 4.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 3.84 km/s"
      },
      {
        "label": "B",
        "text": "v = 33.66 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 5.76 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(4.25) = 7.92 / √(4.25) = 3.84 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √4.25 = 3.84 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 22",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √4.25 = 3.84 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 3.84 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √4.25 = 3.84 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-023",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 4.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 3.73 km/s"
      },
      {
        "label": "B",
        "text": "v = 35.64 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 5.59 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(4.50) = 7.92 / √(4.50) = 3.73 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √4.50 = 3.73 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 23",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √4.50 = 3.73 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 3.73 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √4.50 = 3.73 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-024",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 4.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 3.64 km/s"
      },
      {
        "label": "B",
        "text": "v = 37.62 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 5.46 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(4.75) = 7.92 / √(4.75) = 3.64 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √4.75 = 3.64 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 24",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √4.75 = 3.64 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 3.64 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √4.75 = 3.64 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-025",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 5.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 3.54 km/s"
      },
      {
        "label": "B",
        "text": "v = 39.60 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 5.31 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(5.00) = 7.92 / √(5.00) = 3.54 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √5.00 = 3.54 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 25",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √5.00 = 3.54 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 3.54 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √5.00 = 3.54 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-026",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 5.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 3.45 km/s"
      },
      {
        "label": "B",
        "text": "v = 41.58 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 5.18 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(5.25) = 7.92 / √(5.25) = 3.45 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √5.25 = 3.45 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 26",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √5.25 = 3.45 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 3.45 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √5.25 = 3.45 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-027",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 5.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 3.37 km/s"
      },
      {
        "label": "B",
        "text": "v = 43.56 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 5.05 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(5.50) = 7.92 / √(5.50) = 3.37 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √5.50 = 3.37 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 27",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √5.50 = 3.37 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 3.37 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √5.50 = 3.37 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-028",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 5.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 3.30 km/s"
      },
      {
        "label": "B",
        "text": "v = 45.54 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 4.95 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(5.75) = 7.92 / √(5.75) = 3.30 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √5.75 = 3.30 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 28",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √5.75 = 3.30 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 3.30 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √5.75 = 3.30 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-029",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 6.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 3.23 km/s"
      },
      {
        "label": "B",
        "text": "v = 47.52 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 4.84 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(6.00) = 7.92 / √(6.00) = 3.23 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √6.00 = 3.23 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 29",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √6.00 = 3.23 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 3.23 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √6.00 = 3.23 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-030",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 6.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 3.17 km/s"
      },
      {
        "label": "B",
        "text": "v = 49.50 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 4.75 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(6.25) = 7.92 / √(6.25) = 3.17 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √6.25 = 3.17 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 30",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √6.25 = 3.17 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 3.17 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √6.25 = 3.17 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-031",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 6.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 3.10 km/s"
      },
      {
        "label": "B",
        "text": "v = 51.48 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 4.65 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(6.50) = 7.92 / √(6.50) = 3.10 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √6.50 = 3.10 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 31",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √6.50 = 3.10 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 3.10 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √6.50 = 3.10 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-032",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 6.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 3.05 km/s"
      },
      {
        "label": "B",
        "text": "v = 53.46 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 4.57 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(6.75) = 7.92 / √(6.75) = 3.05 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √6.75 = 3.05 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 32",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √6.75 = 3.05 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 3.05 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √6.75 = 3.05 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-033",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 7.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.99 km/s"
      },
      {
        "label": "B",
        "text": "v = 55.44 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 4.49 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(7.00) = 7.92 / √(7.00) = 2.99 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √7.00 = 2.99 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 33",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √7.00 = 2.99 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.99 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √7.00 = 2.99 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-034",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 7.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.94 km/s"
      },
      {
        "label": "B",
        "text": "v = 57.42 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 4.41 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(7.25) = 7.92 / √(7.25) = 2.94 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √7.25 = 2.94 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 34",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √7.25 = 2.94 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.94 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √7.25 = 2.94 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-035",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 7.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.89 km/s"
      },
      {
        "label": "B",
        "text": "v = 59.40 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 4.33 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(7.50) = 7.92 / √(7.50) = 2.89 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √7.50 = 2.89 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 35",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √7.50 = 2.89 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.89 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √7.50 = 2.89 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-036",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 7.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.84 km/s"
      },
      {
        "label": "B",
        "text": "v = 61.38 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 4.26 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(7.75) = 7.92 / √(7.75) = 2.84 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √7.75 = 2.84 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 36",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √7.75 = 2.84 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.84 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √7.75 = 2.84 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-037",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 8.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.80 km/s"
      },
      {
        "label": "B",
        "text": "v = 63.36 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 4.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(8.00) = 7.92 / √(8.00) = 2.80 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √8.00 = 2.80 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 37",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √8.00 = 2.80 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.80 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √8.00 = 2.80 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-038",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 8.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.76 km/s"
      },
      {
        "label": "B",
        "text": "v = 65.34 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 4.14 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(8.25) = 7.92 / √(8.25) = 2.76 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √8.25 = 2.76 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 38",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √8.25 = 2.76 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.76 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √8.25 = 2.76 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-039",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 8.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.72 km/s"
      },
      {
        "label": "B",
        "text": "v = 67.32 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 4.08 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(8.50) = 7.92 / √(8.50) = 2.72 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √8.50 = 2.72 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 39",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √8.50 = 2.72 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.72 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √8.50 = 2.72 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-040",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 8.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.68 km/s"
      },
      {
        "label": "B",
        "text": "v = 69.30 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 4.02 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(8.75) = 7.92 / √(8.75) = 2.68 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √8.75 = 2.68 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 40",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √8.75 = 2.68 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.68 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √8.75 = 2.68 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-041",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 9.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.64 km/s"
      },
      {
        "label": "B",
        "text": "v = 71.28 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.96 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(9.00) = 7.92 / √(9.00) = 2.64 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √9.00 = 2.64 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 41",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √9.00 = 2.64 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.64 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √9.00 = 2.64 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-042",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 9.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.61 km/s"
      },
      {
        "label": "B",
        "text": "v = 73.26 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.92 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(9.25) = 7.92 / √(9.25) = 2.61 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √9.25 = 2.61 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 42",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √9.25 = 2.61 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.61 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √9.25 = 2.61 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-043",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 9.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.57 km/s"
      },
      {
        "label": "B",
        "text": "v = 75.24 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.85 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(9.50) = 7.92 / √(9.50) = 2.57 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √9.50 = 2.57 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 43",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √9.50 = 2.57 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.57 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √9.50 = 2.57 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-044",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 9.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.53 km/s"
      },
      {
        "label": "B",
        "text": "v = 77.22 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.79 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(9.75) = 7.92 / √(9.75) = 2.53 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √9.75 = 2.53 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 44",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √9.75 = 2.53 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.53 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √9.75 = 2.53 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-045",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 10.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.50 km/s"
      },
      {
        "label": "B",
        "text": "v = 79.20 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.75 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(10.00) = 7.92 / √(10.00) = 2.50 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √10.00 = 2.50 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 45",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √10.00 = 2.50 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.50 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √10.00 = 2.50 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-046",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 10.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.47 km/s"
      },
      {
        "label": "B",
        "text": "v = 81.18 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.71 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(10.25) = 7.92 / √(10.25) = 2.47 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √10.25 = 2.47 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 46",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √10.25 = 2.47 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.47 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √10.25 = 2.47 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-047",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 10.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.45 km/s"
      },
      {
        "label": "B",
        "text": "v = 83.16 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.68 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(10.50) = 7.92 / √(10.50) = 2.45 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √10.50 = 2.45 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 47",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √10.50 = 2.45 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.45 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √10.50 = 2.45 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-048",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 10.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.42 km/s"
      },
      {
        "label": "B",
        "text": "v = 85.14 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.63 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(10.75) = 7.92 / √(10.75) = 2.42 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √10.75 = 2.42 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 48",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √10.75 = 2.42 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.42 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √10.75 = 2.42 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-049",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 11.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.39 km/s"
      },
      {
        "label": "B",
        "text": "v = 87.12 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.58 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(11.00) = 7.92 / √(11.00) = 2.39 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √11.00 = 2.39 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 49",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √11.00 = 2.39 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.39 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √11.00 = 2.39 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-050",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 11.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.36 km/s"
      },
      {
        "label": "B",
        "text": "v = 89.10 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.54 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(11.25) = 7.92 / √(11.25) = 2.36 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √11.25 = 2.36 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 50",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √11.25 = 2.36 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.36 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √11.25 = 2.36 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-051",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 11.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.34 km/s"
      },
      {
        "label": "B",
        "text": "v = 91.08 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.51 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(11.50) = 7.92 / √(11.50) = 2.34 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √11.50 = 2.34 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 51",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √11.50 = 2.34 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.34 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √11.50 = 2.34 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-052",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 11.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.31 km/s"
      },
      {
        "label": "B",
        "text": "v = 93.06 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.46 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(11.75) = 7.92 / √(11.75) = 2.31 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √11.75 = 2.31 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 52",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √11.75 = 2.31 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.31 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √11.75 = 2.31 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-053",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 12.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.29 km/s"
      },
      {
        "label": "B",
        "text": "v = 95.04 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.44 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(12.00) = 7.92 / √(12.00) = 2.29 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √12.00 = 2.29 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 53",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √12.00 = 2.29 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.29 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √12.00 = 2.29 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-054",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 12.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.27 km/s"
      },
      {
        "label": "B",
        "text": "v = 97.02 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.41 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(12.25) = 7.92 / √(12.25) = 2.27 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √12.25 = 2.27 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 54",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √12.25 = 2.27 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.27 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √12.25 = 2.27 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-055",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 12.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.24 km/s"
      },
      {
        "label": "B",
        "text": "v = 99.00 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.36 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(12.50) = 7.92 / √(12.50) = 2.24 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √12.50 = 2.24 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 55",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √12.50 = 2.24 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.24 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √12.50 = 2.24 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-056",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 12.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.22 km/s"
      },
      {
        "label": "B",
        "text": "v = 100.98 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.33 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(12.75) = 7.92 / √(12.75) = 2.22 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √12.75 = 2.22 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 56",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √12.75 = 2.22 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.22 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √12.75 = 2.22 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-057",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 13.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.19 km/s"
      },
      {
        "label": "B",
        "text": "v = 102.96 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.29 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(13.00) = 7.92 / √(13.00) = 2.19 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √13.00 = 2.19 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 57",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √13.00 = 2.19 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.19 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √13.00 = 2.19 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-058",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 13.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.18 km/s"
      },
      {
        "label": "B",
        "text": "v = 104.94 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.27 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(13.25) = 7.92 / √(13.25) = 2.18 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √13.25 = 2.18 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 58",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √13.25 = 2.18 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.18 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √13.25 = 2.18 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-059",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 13.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.15 km/s"
      },
      {
        "label": "B",
        "text": "v = 106.92 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.22 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(13.50) = 7.92 / √(13.50) = 2.15 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √13.50 = 2.15 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 59",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √13.50 = 2.15 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.15 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √13.50 = 2.15 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-060",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 13.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.14 km/s"
      },
      {
        "label": "B",
        "text": "v = 108.90 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.21 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(13.75) = 7.92 / √(13.75) = 2.14 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √13.75 = 2.14 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 60",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √13.75 = 2.14 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.14 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √13.75 = 2.14 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-061",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 14.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.11 km/s"
      },
      {
        "label": "B",
        "text": "v = 110.88 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.17 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(14.00) = 7.92 / √(14.00) = 2.11 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √14.00 = 2.11 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 61",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √14.00 = 2.11 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.11 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √14.00 = 2.11 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-062",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 14.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.10 km/s"
      },
      {
        "label": "B",
        "text": "v = 112.86 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.15 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(14.25) = 7.92 / √(14.25) = 2.10 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √14.25 = 2.10 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 62",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √14.25 = 2.10 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.10 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √14.25 = 2.10 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-063",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 14.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.08 km/s"
      },
      {
        "label": "B",
        "text": "v = 114.84 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.12 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(14.50) = 7.92 / √(14.50) = 2.08 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √14.50 = 2.08 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 63",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √14.50 = 2.08 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.08 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √14.50 = 2.08 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-064",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 14.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.06 km/s"
      },
      {
        "label": "B",
        "text": "v = 116.82 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.09 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(14.75) = 7.92 / √(14.75) = 2.06 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √14.75 = 2.06 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 64",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √14.75 = 2.06 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.06 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √14.75 = 2.06 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-065",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 15.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.04 km/s"
      },
      {
        "label": "B",
        "text": "v = 118.80 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.06 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(15.00) = 7.92 / √(15.00) = 2.04 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √15.00 = 2.04 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 65",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √15.00 = 2.04 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.04 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √15.00 = 2.04 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-066",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 15.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.03 km/s"
      },
      {
        "label": "B",
        "text": "v = 120.78 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.04 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(15.25) = 7.92 / √(15.25) = 2.03 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √15.25 = 2.03 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 66",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √15.25 = 2.03 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.03 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √15.25 = 2.03 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-067",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 15.50 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.01 km/s"
      },
      {
        "label": "B",
        "text": "v = 122.76 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.01 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(15.50) = 7.92 / √(15.50) = 2.01 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √15.50 = 2.01 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 67",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √15.50 = 2.01 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.01 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √15.50 = 2.01 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-068",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 15.75 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 2.00 km/s"
      },
      {
        "label": "B",
        "text": "v = 124.74 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 3.00 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(15.75) = 7.92 / √(15.75) = 2.00 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √15.75 = 2.00 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 68",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √15.75 = 2.00 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 2.00 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √15.75 = 2.00 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-069",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 16.00 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 1.98 km/s"
      },
      {
        "label": "B",
        "text": "v = 126.72 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 2.97 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(16.00) = 7.92 / √(16.00) = 1.98 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √16.00 = 1.98 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 69",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √16.00 = 1.98 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 1.98 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √16.00 = 1.98 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-E-070",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "A scientific research satellite moves in a stable circular orbit at a radial distance of r = 16.25 R from the center of the Earth (where R is Earth's radius). What is the orbital speed of this satellite in km/s? (Take near-surface orbital speed v_o = 7.92 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = 1.96 km/s"
      },
      {
        "label": "B",
        "text": "v = 128.70 km/s"
      },
      {
        "label": "C",
        "text": "v = 7.92 km/s"
      },
      {
        "label": "D",
        "text": "v = 2.94 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Orbital speed scales inversely with square root of radius: v = v_o / √(16.25) = 7.92 / √(16.25) = 1.96 km/s.",
    "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √16.25 = 1.96 km/s",
    "stepByStep": {
      "given": "Orbital setup for SEV Easy Question 70",
      "asked": "Orbital speed or escape characteristic",
      "formula": "v = √(G M / r) = v_o · √(R / r) = 7.92 / √16.25 = 1.96 km/s",
      "substitution": "Substitute radial distance into orbital velocity equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = 1.96 km/s",
      "keyTakeaway": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r.",
      "commonTrap": "Multiplying by √r instead of dividing."
    },
    "explanation": "Circular orbital speed decreases as altitude increases according to v ∝ 1/√r. Formulated via v = √(G M / r) = v_o · √(R / r) = 7.92 / √16.25 = 1.96 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-001",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 1.18 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 0.626 v_e (approx. 7.01 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 0.180 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 1.18 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(1.18² - 1) v_e = 0.626 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (1.18)² - 1 ] · 11.2 km/s = 7.01 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 1",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (1.18)² - 1 ] · 11.2 km/s = 7.01 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 0.626 v_e (approx. 7.01 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (1.18)² - 1 ] · 11.2 km/s = 7.01 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-002",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 1.26 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 0.767 v_e (approx. 8.59 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 0.260 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 1.26 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(1.26² - 1) v_e = 0.767 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (1.26)² - 1 ] · 11.2 km/s = 8.59 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 2",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (1.26)² - 1 ] · 11.2 km/s = 8.59 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 0.767 v_e (approx. 8.59 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (1.26)² - 1 ] · 11.2 km/s = 8.59 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-003",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 1.34 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 0.892 v_e (approx. 9.99 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 0.340 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 1.34 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(1.34² - 1) v_e = 0.892 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (1.34)² - 1 ] · 11.2 km/s = 9.99 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 3",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (1.34)² - 1 ] · 11.2 km/s = 9.99 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 0.892 v_e (approx. 9.99 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (1.34)² - 1 ] · 11.2 km/s = 9.99 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-004",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 1.42 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 1.008 v_e (approx. 11.29 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 0.420 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 1.42 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(1.42² - 1) v_e = 1.008 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (1.42)² - 1 ] · 11.2 km/s = 11.29 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 4",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (1.42)² - 1 ] · 11.2 km/s = 11.29 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 1.008 v_e (approx. 11.29 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (1.42)² - 1 ] · 11.2 km/s = 11.29 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-005",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 1.50 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 1.118 v_e (approx. 12.52 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 0.500 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 1.50 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(1.50² - 1) v_e = 1.118 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (1.50)² - 1 ] · 11.2 km/s = 12.52 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 5",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (1.50)² - 1 ] · 11.2 km/s = 12.52 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 1.118 v_e (approx. 12.52 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (1.50)² - 1 ] · 11.2 km/s = 12.52 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-006",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 1.58 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 1.223 v_e (approx. 13.70 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 0.580 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 1.58 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(1.58² - 1) v_e = 1.223 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (1.58)² - 1 ] · 11.2 km/s = 13.70 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 6",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (1.58)² - 1 ] · 11.2 km/s = 13.70 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 1.223 v_e (approx. 13.70 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (1.58)² - 1 ] · 11.2 km/s = 13.70 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-007",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 1.66 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 1.325 v_e (approx. 14.84 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 0.660 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 1.66 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(1.66² - 1) v_e = 1.325 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (1.66)² - 1 ] · 11.2 km/s = 14.84 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 7",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (1.66)² - 1 ] · 11.2 km/s = 14.84 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 1.325 v_e (approx. 14.84 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (1.66)² - 1 ] · 11.2 km/s = 14.84 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-008",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 1.74 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 1.424 v_e (approx. 15.95 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 0.740 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 1.74 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(1.74² - 1) v_e = 1.424 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (1.74)² - 1 ] · 11.2 km/s = 15.95 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 8",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (1.74)² - 1 ] · 11.2 km/s = 15.95 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 1.424 v_e (approx. 15.95 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (1.74)² - 1 ] · 11.2 km/s = 15.95 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-009",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 1.82 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 1.521 v_e (approx. 17.04 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 0.820 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 1.82 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(1.82² - 1) v_e = 1.521 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (1.82)² - 1 ] · 11.2 km/s = 17.04 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 9",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (1.82)² - 1 ] · 11.2 km/s = 17.04 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 1.521 v_e (approx. 17.04 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (1.82)² - 1 ] · 11.2 km/s = 17.04 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-010",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 1.90 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 1.616 v_e (approx. 18.10 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 0.900 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 1.90 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(1.90² - 1) v_e = 1.616 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (1.90)² - 1 ] · 11.2 km/s = 18.10 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 10",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (1.90)² - 1 ] · 11.2 km/s = 18.10 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 1.616 v_e (approx. 18.10 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (1.90)² - 1 ] · 11.2 km/s = 18.10 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-011",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 1.98 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 1.709 v_e (approx. 19.14 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 0.980 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 1.98 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(1.98² - 1) v_e = 1.709 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (1.98)² - 1 ] · 11.2 km/s = 19.14 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 11",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (1.98)² - 1 ] · 11.2 km/s = 19.14 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 1.709 v_e (approx. 19.14 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (1.98)² - 1 ] · 11.2 km/s = 19.14 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-012",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 2.06 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 1.801 v_e (approx. 20.17 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 1.060 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 2.06 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(2.06² - 1) v_e = 1.801 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (2.06)² - 1 ] · 11.2 km/s = 20.17 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 12",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (2.06)² - 1 ] · 11.2 km/s = 20.17 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 1.801 v_e (approx. 20.17 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (2.06)² - 1 ] · 11.2 km/s = 20.17 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-013",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 2.14 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 1.892 v_e (approx. 21.19 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 1.140 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 2.14 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(2.14² - 1) v_e = 1.892 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (2.14)² - 1 ] · 11.2 km/s = 21.19 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 13",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (2.14)² - 1 ] · 11.2 km/s = 21.19 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 1.892 v_e (approx. 21.19 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (2.14)² - 1 ] · 11.2 km/s = 21.19 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-014",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 2.22 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 1.982 v_e (approx. 22.20 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 1.220 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 2.22 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(2.22² - 1) v_e = 1.982 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (2.22)² - 1 ] · 11.2 km/s = 22.20 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 14",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (2.22)² - 1 ] · 11.2 km/s = 22.20 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 1.982 v_e (approx. 22.20 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (2.22)² - 1 ] · 11.2 km/s = 22.20 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-015",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 2.30 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 2.071 v_e (approx. 23.20 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 1.300 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 2.30 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(2.30² - 1) v_e = 2.071 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (2.30)² - 1 ] · 11.2 km/s = 23.20 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 15",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (2.30)² - 1 ] · 11.2 km/s = 23.20 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 2.071 v_e (approx. 23.20 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (2.30)² - 1 ] · 11.2 km/s = 23.20 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-016",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 2.38 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 2.160 v_e (approx. 24.19 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 1.380 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 2.38 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(2.38² - 1) v_e = 2.160 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (2.38)² - 1 ] · 11.2 km/s = 24.19 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 16",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (2.38)² - 1 ] · 11.2 km/s = 24.19 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 2.160 v_e (approx. 24.19 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (2.38)² - 1 ] · 11.2 km/s = 24.19 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-017",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 2.46 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 2.248 v_e (approx. 25.18 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 1.460 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 2.46 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(2.46² - 1) v_e = 2.248 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (2.46)² - 1 ] · 11.2 km/s = 25.18 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 17",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (2.46)² - 1 ] · 11.2 km/s = 25.18 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 2.248 v_e (approx. 25.18 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (2.46)² - 1 ] · 11.2 km/s = 25.18 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-018",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 2.54 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 2.335 v_e (approx. 26.15 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 1.540 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 2.54 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(2.54² - 1) v_e = 2.335 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (2.54)² - 1 ] · 11.2 km/s = 26.15 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 18",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (2.54)² - 1 ] · 11.2 km/s = 26.15 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 2.335 v_e (approx. 26.15 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (2.54)² - 1 ] · 11.2 km/s = 26.15 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-019",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 2.62 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 2.422 v_e (approx. 27.13 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 1.620 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 2.62 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(2.62² - 1) v_e = 2.422 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (2.62)² - 1 ] · 11.2 km/s = 27.13 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 19",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (2.62)² - 1 ] · 11.2 km/s = 27.13 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 2.422 v_e (approx. 27.13 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (2.62)² - 1 ] · 11.2 km/s = 27.13 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-020",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 2.70 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 2.508 v_e (approx. 28.09 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 1.700 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 2.70 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(2.70² - 1) v_e = 2.508 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (2.70)² - 1 ] · 11.2 km/s = 28.09 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 20",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (2.70)² - 1 ] · 11.2 km/s = 28.09 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 2.508 v_e (approx. 28.09 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (2.70)² - 1 ] · 11.2 km/s = 28.09 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-021",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 2.78 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 2.594 v_e (approx. 29.05 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 1.780 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 2.78 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(2.78² - 1) v_e = 2.594 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (2.78)² - 1 ] · 11.2 km/s = 29.05 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 21",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (2.78)² - 1 ] · 11.2 km/s = 29.05 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 2.594 v_e (approx. 29.05 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (2.78)² - 1 ] · 11.2 km/s = 29.05 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-022",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 2.86 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 2.679 v_e (approx. 30.00 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 1.860 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 2.86 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(2.86² - 1) v_e = 2.679 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (2.86)² - 1 ] · 11.2 km/s = 30.00 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 22",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (2.86)² - 1 ] · 11.2 km/s = 30.00 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 2.679 v_e (approx. 30.00 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (2.86)² - 1 ] · 11.2 km/s = 30.00 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-023",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 2.94 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 2.765 v_e (approx. 30.97 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 1.940 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 2.94 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(2.94² - 1) v_e = 2.765 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (2.94)² - 1 ] · 11.2 km/s = 30.97 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 23",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (2.94)² - 1 ] · 11.2 km/s = 30.97 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 2.765 v_e (approx. 30.97 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (2.94)² - 1 ] · 11.2 km/s = 30.97 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-024",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 3.02 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 2.850 v_e (approx. 31.92 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 2.020 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 3.02 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(3.02² - 1) v_e = 2.850 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (3.02)² - 1 ] · 11.2 km/s = 31.92 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 24",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (3.02)² - 1 ] · 11.2 km/s = 31.92 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 2.850 v_e (approx. 31.92 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (3.02)² - 1 ] · 11.2 km/s = 31.92 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-025",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A space probe is fired vertically upwards from Earth's surface with an initial launch speed of v = 3.10 v_e (where Earth's escape speed v_e = 11.2 km/s). What will be the residual speed v_∞ of the probe when it escapes completely into deep space?",
    "options": [
      {
        "label": "A",
        "text": "v_∞ = 2.934 v_e (approx. 32.86 km/s)"
      },
      {
        "label": "B",
        "text": "v_∞ = 2.100 v_e"
      },
      {
        "label": "C",
        "text": "v_∞ = 3.10 v_e"
      },
      {
        "label": "D",
        "text": "v_∞ = 0 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² - 1/2 m v_e² = 1/2 m v_∞² ⇒ v_∞ = √(v² - v_e²) = √(3.10² - 1) v_e = 2.934 v_e.",
    "formula": "v_∞ = √(v² - v_e²) = √[ (3.10)² - 1 ] · 11.2 km/s = 32.86 km/s",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 25",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "v_∞ = √(v² - v_e²) = √[ (3.10)² - 1 ] · 11.2 km/s = 32.86 km/s",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_∞ = 2.934 v_e (approx. 32.86 km/s)",
      "keyTakeaway": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²).",
      "commonTrap": "Directly subtracting velocities (v - v_e) instead of taking the root of the difference of squares."
    },
    "explanation": "Excess launch kinetic energy converts into residual kinetic energy at infinity: v_∞ = √(v² - v_e²). Formulated via v_∞ = √(v² - v_e²) = √[ (3.10)² - 1 ] · 11.2 km/s = 32.86 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-026",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 2 R to a higher circular orbit of radius r₂ = 4 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 8) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 16) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 2) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 4) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(2R) - 1/(4R) ] = (m g R² / 2) [ (2) / (8 R) ] = (1 / 8) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 8) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 26",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 8) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 8) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 8) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-027",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 3 R to a higher circular orbit of radius r₂ = 5 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 15) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 30) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 3) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 5) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(3R) - 1/(5R) ] = (m g R² / 2) [ (2) / (15 R) ] = (1 / 15) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 15) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 27",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 15) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 15) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 15) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-028",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 4 R to a higher circular orbit of radius r₂ = 6 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 24) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 48) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 4) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 6) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(4R) - 1/(6R) ] = (m g R² / 2) [ (2) / (24 R) ] = (1 / 24) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 24) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 28",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 24) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 24) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 24) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-029",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 5 R to a higher circular orbit of radius r₂ = 7 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 35) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 70) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 5) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 7) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(5R) - 1/(7R) ] = (m g R² / 2) [ (2) / (35 R) ] = (1 / 35) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 35) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 29",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 35) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 35) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 35) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-030",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 6 R to a higher circular orbit of radius r₂ = 8 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 48) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 96) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 6) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 8) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(6R) - 1/(8R) ] = (m g R² / 2) [ (2) / (48 R) ] = (1 / 48) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 48) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 30",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 48) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 48) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 48) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-031",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 7 R to a higher circular orbit of radius r₂ = 9 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 63) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 126) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 7) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 9) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(7R) - 1/(9R) ] = (m g R² / 2) [ (2) / (63 R) ] = (1 / 63) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 63) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 31",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 63) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 63) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 63) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-032",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 8 R to a higher circular orbit of radius r₂ = 10 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 80) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 160) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 8) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 10) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(8R) - 1/(10R) ] = (m g R² / 2) [ (2) / (80 R) ] = (1 / 80) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 80) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 32",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 80) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 80) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 80) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-033",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 9 R to a higher circular orbit of radius r₂ = 11 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 99) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 198) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 9) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 11) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(9R) - 1/(11R) ] = (m g R² / 2) [ (2) / (99 R) ] = (1 / 99) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 99) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 33",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 99) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 99) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 99) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-034",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 10 R to a higher circular orbit of radius r₂ = 12 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 120) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 240) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 10) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 12) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(10R) - 1/(12R) ] = (m g R² / 2) [ (2) / (120 R) ] = (1 / 120) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 120) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 34",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 120) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 120) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 120) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-035",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 11 R to a higher circular orbit of radius r₂ = 13 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 143) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 286) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 11) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 13) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(11R) - 1/(13R) ] = (m g R² / 2) [ (2) / (143 R) ] = (1 / 143) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 143) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 35",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 143) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 143) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 143) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-036",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 12 R to a higher circular orbit of radius r₂ = 14 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 168) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 336) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 12) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 14) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(12R) - 1/(14R) ] = (m g R² / 2) [ (2) / (168 R) ] = (1 / 168) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 168) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 36",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 168) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 168) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 168) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-037",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 13 R to a higher circular orbit of radius r₂ = 15 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 195) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 390) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 13) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 15) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(13R) - 1/(15R) ] = (m g R² / 2) [ (2) / (195 R) ] = (1 / 195) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 195) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 37",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 195) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 195) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 195) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-038",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 14 R to a higher circular orbit of radius r₂ = 16 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 224) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 448) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 14) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 16) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(14R) - 1/(16R) ] = (m g R² / 2) [ (2) / (224 R) ] = (1 / 224) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 224) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 38",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 224) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 224) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 224) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-039",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 15 R to a higher circular orbit of radius r₂ = 17 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 255) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 510) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 15) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 17) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(15R) - 1/(17R) ] = (m g R² / 2) [ (2) / (255 R) ] = (1 / 255) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 255) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 39",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 255) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 255) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 255) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-040",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 16 R to a higher circular orbit of radius r₂ = 18 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 288) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 576) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 16) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 18) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(16R) - 1/(18R) ] = (m g R² / 2) [ (2) / (288 R) ] = (1 / 288) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 288) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 40",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 288) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 288) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 288) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-041",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 17 R to a higher circular orbit of radius r₂ = 19 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 323) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 646) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 17) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 19) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(17R) - 1/(19R) ] = (m g R² / 2) [ (2) / (323 R) ] = (1 / 323) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 323) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 41",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 323) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 323) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 323) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-042",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 18 R to a higher circular orbit of radius r₂ = 20 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 360) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 720) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 18) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 20) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(18R) - 1/(20R) ] = (m g R² / 2) [ (2) / (360 R) ] = (1 / 360) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 360) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 42",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 360) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 360) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 360) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-043",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 19 R to a higher circular orbit of radius r₂ = 21 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 399) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 798) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 19) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 21) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(19R) - 1/(21R) ] = (m g R² / 2) [ (2) / (399 R) ] = (1 / 399) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 399) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 43",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 399) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 399) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 399) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-044",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 20 R to a higher circular orbit of radius r₂ = 22 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 440) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 880) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 20) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 22) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(20R) - 1/(22R) ] = (m g R² / 2) [ (2) / (440 R) ] = (1 / 440) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 440) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 44",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 440) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 440) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 440) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-045",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 21 R to a higher circular orbit of radius r₂ = 23 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 483) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 966) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 21) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 23) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(21R) - 1/(23R) ] = (m g R² / 2) [ (2) / (483 R) ] = (1 / 483) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 483) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 45",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 483) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 483) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 483) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-046",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 22 R to a higher circular orbit of radius r₂ = 24 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 528) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 1056) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 22) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 24) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(22R) - 1/(24R) ] = (m g R² / 2) [ (2) / (528 R) ] = (1 / 528) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 528) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 46",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 528) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 528) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 528) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-047",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 23 R to a higher circular orbit of radius r₂ = 25 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 575) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 1150) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 23) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 25) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(23R) - 1/(25R) ] = (m g R² / 2) [ (2) / (575 R) ] = (1 / 575) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 575) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 47",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 575) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 575) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 575) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-048",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 24 R to a higher circular orbit of radius r₂ = 26 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 624) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 1248) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 24) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 26) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(24R) - 1/(26R) ] = (m g R² / 2) [ (2) / (624 R) ] = (1 / 624) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 624) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 48",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 624) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 624) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 624) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-049",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 25 R to a higher circular orbit of radius r₂ = 27 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 675) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 1350) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 25) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 27) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(25R) - 1/(27R) ] = (m g R² / 2) [ (2) / (675 R) ] = (1 / 675) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 675) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 49",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 675) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 675) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 675) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-050",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "What is the additional energy ΔE required to transfer an artificial satellite of mass m from a circular orbit of radius r₁ = 26 R to a higher circular orbit of radius r₂ = 28 R (where R is Earth's radius and g is surface gravity)?",
    "options": [
      {
        "label": "A",
        "text": "ΔE = (1 / 728) m g R"
      },
      {
        "label": "B",
        "text": "ΔE = (1 / 1456) m g R"
      },
      {
        "label": "C",
        "text": "ΔE = (1 / 26) m g R"
      },
      {
        "label": "D",
        "text": "ΔE = (1 / 28) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "ΔE = E₂ - E₁ = (G M m / 2) [ 1/(26R) - 1/(28R) ] = (m g R² / 2) [ (2) / (728 R) ] = (1 / 728) m g R.",
    "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 728) m g R",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 50",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 728) m g R",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: ΔE = (1 / 728) m g R",
      "keyTakeaway": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂).",
      "commonTrap": "Using potential energy difference rather than total mechanical energy difference."
    },
    "explanation": "The energy required to transition between circular orbits is ΔE = (GMm/2)(1/r₁ - 1/r₂). Formulated via ΔE = (G M m / 2) · [ 1/r₁ - 1/r₂ ] = (1 / 728) m g R.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-051",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 12 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 26584 km"
      },
      {
        "label": "B",
        "text": "r ≈ 21100 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 39876 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (12 / 24)^(2/3) ≈ 26584 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (12/24)^(2/3) km ≈ 26584 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 51",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (12/24)^(2/3) km ≈ 26584 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 26584 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (12/24)^(2/3) km ≈ 26584 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-052",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 14 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 29462 km"
      },
      {
        "label": "B",
        "text": "r ≈ 24617 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 44193 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (14 / 24)^(2/3) ≈ 29462 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (14/24)^(2/3) km ≈ 29462 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 52",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (14/24)^(2/3) km ≈ 29462 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 29462 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (14/24)^(2/3) km ≈ 29462 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-053",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 16 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 32205 km"
      },
      {
        "label": "B",
        "text": "r ≈ 28133 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 48308 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (16 / 24)^(2/3) ≈ 32205 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (16/24)^(2/3) km ≈ 32205 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 53",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (16/24)^(2/3) km ≈ 32205 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 32205 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (16/24)^(2/3) km ≈ 32205 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-054",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 18 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 34835 km"
      },
      {
        "label": "B",
        "text": "r ≈ 31650 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 52253 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (18 / 24)^(2/3) ≈ 34835 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (18/24)^(2/3) km ≈ 34835 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 54",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (18/24)^(2/3) km ≈ 34835 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 34835 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (18/24)^(2/3) km ≈ 34835 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-055",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 20 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 37370 km"
      },
      {
        "label": "B",
        "text": "r ≈ 35167 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 56055 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (20 / 24)^(2/3) ≈ 37370 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (20/24)^(2/3) km ≈ 37370 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 55",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (20/24)^(2/3) km ≈ 37370 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 37370 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (20/24)^(2/3) km ≈ 37370 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-056",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 22 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 39822 km"
      },
      {
        "label": "B",
        "text": "r ≈ 38683 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 59733 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (22 / 24)^(2/3) ≈ 39822 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (22/24)^(2/3) km ≈ 39822 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 56",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (22/24)^(2/3) km ≈ 39822 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 39822 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (22/24)^(2/3) km ≈ 39822 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-057",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 24 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 42200 km"
      },
      {
        "label": "B",
        "text": "r ≈ 42200 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 63300 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (24 / 24)^(2/3) ≈ 42200 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (24/24)^(2/3) km ≈ 42200 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 57",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (24/24)^(2/3) km ≈ 42200 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 42200 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (24/24)^(2/3) km ≈ 42200 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-058",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 26 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 44513 km"
      },
      {
        "label": "B",
        "text": "r ≈ 45717 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 66770 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (26 / 24)^(2/3) ≈ 44513 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (26/24)^(2/3) km ≈ 44513 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 58",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (26/24)^(2/3) km ≈ 44513 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 44513 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (26/24)^(2/3) km ≈ 44513 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-059",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 28 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 46767 km"
      },
      {
        "label": "B",
        "text": "r ≈ 49233 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 70151 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (28 / 24)^(2/3) ≈ 46767 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (28/24)^(2/3) km ≈ 46767 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 59",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (28/24)^(2/3) km ≈ 46767 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 46767 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (28/24)^(2/3) km ≈ 46767 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-060",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 30 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 48969 km"
      },
      {
        "label": "B",
        "text": "r ≈ 52750 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 73454 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (30 / 24)^(2/3) ≈ 48969 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (30/24)^(2/3) km ≈ 48969 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 60",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (30/24)^(2/3) km ≈ 48969 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 48969 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (30/24)^(2/3) km ≈ 48969 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-061",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 32 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 51122 km"
      },
      {
        "label": "B",
        "text": "r ≈ 56267 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 76683 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (32 / 24)^(2/3) ≈ 51122 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (32/24)^(2/3) km ≈ 51122 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 61",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (32/24)^(2/3) km ≈ 51122 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 51122 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (32/24)^(2/3) km ≈ 51122 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-062",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 34 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 53230 km"
      },
      {
        "label": "B",
        "text": "r ≈ 59783 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 79845 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (34 / 24)^(2/3) ≈ 53230 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (34/24)^(2/3) km ≈ 53230 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 62",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (34/24)^(2/3) km ≈ 53230 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 53230 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (34/24)^(2/3) km ≈ 53230 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-063",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 36 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 55298 km"
      },
      {
        "label": "B",
        "text": "r ≈ 63300 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 82947 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (36 / 24)^(2/3) ≈ 55298 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (36/24)^(2/3) km ≈ 55298 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 63",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (36/24)^(2/3) km ≈ 55298 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 55298 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (36/24)^(2/3) km ≈ 55298 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-064",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 38 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 57327 km"
      },
      {
        "label": "B",
        "text": "r ≈ 66817 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 85991 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (38 / 24)^(2/3) ≈ 57327 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (38/24)^(2/3) km ≈ 57327 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 64",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (38/24)^(2/3) km ≈ 57327 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 57327 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (38/24)^(2/3) km ≈ 57327 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-065",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 40 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 59321 km"
      },
      {
        "label": "B",
        "text": "r ≈ 70333 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 88982 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (40 / 24)^(2/3) ≈ 59321 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (40/24)^(2/3) km ≈ 59321 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 65",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (40/24)^(2/3) km ≈ 59321 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 59321 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (40/24)^(2/3) km ≈ 59321 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-066",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 42 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 61283 km"
      },
      {
        "label": "B",
        "text": "r ≈ 73850 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 91925 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (42 / 24)^(2/3) ≈ 61283 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (42/24)^(2/3) km ≈ 61283 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 66",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (42/24)^(2/3) km ≈ 61283 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 61283 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (42/24)^(2/3) km ≈ 61283 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-067",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 44 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 63213 km"
      },
      {
        "label": "B",
        "text": "r ≈ 77367 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 94820 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (44 / 24)^(2/3) ≈ 63213 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (44/24)^(2/3) km ≈ 63213 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 67",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (44/24)^(2/3) km ≈ 63213 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 63213 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (44/24)^(2/3) km ≈ 63213 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-068",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 46 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 65114 km"
      },
      {
        "label": "B",
        "text": "r ≈ 80883 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 97671 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (46 / 24)^(2/3) ≈ 65114 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (46/24)^(2/3) km ≈ 65114 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 68",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (46/24)^(2/3) km ≈ 65114 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 65114 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (46/24)^(2/3) km ≈ 65114 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-069",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 48 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 66988 km"
      },
      {
        "label": "B",
        "text": "r ≈ 84400 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 100482 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (48 / 24)^(2/3) ≈ 66988 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (48/24)^(2/3) km ≈ 66988 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 69",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (48/24)^(2/3) km ≈ 66988 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 66988 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (48/24)^(2/3) km ≈ 66988 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-M-070",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planetary orbiter is designed to be synchronous over an exoplanet having the exact mass of Earth, but with a day length of T = 50 hours. What must be the orbital radius r of this synchronous satellite in kilometers? (Take Earth's 24-hour geostationary radius as 42,200 km)",
    "options": [
      {
        "label": "A",
        "text": "r ≈ 68836 km"
      },
      {
        "label": "B",
        "text": "r ≈ 87917 km"
      },
      {
        "label": "C",
        "text": "r ≈ 42,200 km"
      },
      {
        "label": "D",
        "text": "r ≈ 103254 km"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Kepler's 3rd law: r ∝ T^(2/3). r = 42200 × (50 / 24)^(2/3) ≈ 68836 km.",
    "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (50/24)^(2/3) km ≈ 68836 km",
    "stepByStep": {
      "given": "Orbital parameters for SEV Medium Question 70",
      "asked": "Residual velocity, transfer energy, or synchronous radius",
      "formula": "r = [ G M T² / (4π²) ]^(1/3) = 42200 · (50/24)^(2/3) km ≈ 68836 km",
      "substitution": "Substitute physical quantities into energetic relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: r ≈ 68836 km",
      "keyTakeaway": "Synchronous orbit radius scales with period as T^(2/3).",
      "commonTrap": "Assuming orbital radius is directly proportional to period (linear scaling)."
    },
    "explanation": "Synchronous orbit radius scales with period as T^(2/3). Formulated via r = [ G M T² / (4π²) ]^(1/3) = 42200 · (50/24)^(2/3) km ≈ 68836 km.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-001",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 3 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 2.797 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 3 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 5.594 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(3R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (3)^(3/2) - 1 ] · √(2R / g) = 2.797 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 1",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (3)^(3/2) - 1 ] · √(2R / g) = 2.797 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 2.797 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (3)^(3/2) - 1 ] · √(2R / g) = 2.797 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-002",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 4 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 4.667 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 4 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 9.334 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(4R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (4)^(3/2) - 1 ] · √(2R / g) = 4.667 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 2",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (4)^(3/2) - 1 ] · √(2R / g) = 4.667 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 4.667 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (4)^(3/2) - 1 ] · √(2R / g) = 4.667 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-003",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 5 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 6.787 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 5 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 13.574 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(5R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (5)^(3/2) - 1 ] · √(2R / g) = 6.787 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 3",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (5)^(3/2) - 1 ] · √(2R / g) = 6.787 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 6.787 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (5)^(3/2) - 1 ] · √(2R / g) = 6.787 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-004",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 6 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 9.131 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 6 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 18.262 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(6R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (6)^(3/2) - 1 ] · √(2R / g) = 9.131 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 4",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (6)^(3/2) - 1 ] · √(2R / g) = 9.131 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 9.131 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (6)^(3/2) - 1 ] · √(2R / g) = 9.131 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-005",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 7 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 11.680 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 7 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 23.360 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(7R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (7)^(3/2) - 1 ] · √(2R / g) = 11.680 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 5",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (7)^(3/2) - 1 ] · √(2R / g) = 11.680 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 11.680 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (7)^(3/2) - 1 ] · √(2R / g) = 11.680 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-006",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 8 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 14.418 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 8 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 28.836 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(8R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (8)^(3/2) - 1 ] · √(2R / g) = 14.418 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 6",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (8)^(3/2) - 1 ] · √(2R / g) = 14.418 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 14.418 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (8)^(3/2) - 1 ] · √(2R / g) = 14.418 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-007",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 9 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 17.333 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 9 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 34.666 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(9R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (9)^(3/2) - 1 ] · √(2R / g) = 17.333 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 7",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (9)^(3/2) - 1 ] · √(2R / g) = 17.333 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 17.333 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (9)^(3/2) - 1 ] · √(2R / g) = 17.333 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-008",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 10 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 20.415 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 10 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 40.830 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(10R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (10)^(3/2) - 1 ] · √(2R / g) = 20.415 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 8",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (10)^(3/2) - 1 ] · √(2R / g) = 20.415 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 20.415 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (10)^(3/2) - 1 ] · √(2R / g) = 20.415 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-009",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 11 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 23.655 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 11 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 47.310 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(11R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (11)^(3/2) - 1 ] · √(2R / g) = 23.655 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 9",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (11)^(3/2) - 1 ] · √(2R / g) = 23.655 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 23.655 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (11)^(3/2) - 1 ] · √(2R / g) = 23.655 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-010",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 12 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 27.046 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 12 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 54.092 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(12R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (12)^(3/2) - 1 ] · √(2R / g) = 27.046 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 10",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (12)^(3/2) - 1 ] · √(2R / g) = 27.046 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 27.046 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (12)^(3/2) - 1 ] · √(2R / g) = 27.046 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-011",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 13 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 30.581 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 13 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 61.162 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(13R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (13)^(3/2) - 1 ] · √(2R / g) = 30.581 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 11",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (13)^(3/2) - 1 ] · √(2R / g) = 30.581 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 30.581 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (13)^(3/2) - 1 ] · √(2R / g) = 30.581 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-012",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 14 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 34.255 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 14 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 68.510 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(14R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (14)^(3/2) - 1 ] · √(2R / g) = 34.255 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 12",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (14)^(3/2) - 1 ] · √(2R / g) = 34.255 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 34.255 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (14)^(3/2) - 1 ] · √(2R / g) = 34.255 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-013",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 15 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 38.063 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 15 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 76.126 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(15R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (15)^(3/2) - 1 ] · √(2R / g) = 38.063 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 13",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (15)^(3/2) - 1 ] · √(2R / g) = 38.063 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 38.063 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (15)^(3/2) - 1 ] · √(2R / g) = 38.063 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-014",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 16 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 42.000 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 16 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 84.000 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(16R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (16)^(3/2) - 1 ] · √(2R / g) = 42.000 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 14",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (16)^(3/2) - 1 ] · √(2R / g) = 42.000 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 42.000 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (16)^(3/2) - 1 ] · √(2R / g) = 42.000 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-015",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 17 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 46.062 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 17 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 92.124 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(17R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (17)^(3/2) - 1 ] · √(2R / g) = 46.062 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 15",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (17)^(3/2) - 1 ] · √(2R / g) = 46.062 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 46.062 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (17)^(3/2) - 1 ] · √(2R / g) = 46.062 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-016",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 18 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 50.245 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 18 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 100.490 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(18R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (18)^(3/2) - 1 ] · √(2R / g) = 50.245 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 16",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (18)^(3/2) - 1 ] · √(2R / g) = 50.245 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 50.245 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (18)^(3/2) - 1 ] · √(2R / g) = 50.245 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-017",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 19 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 54.546 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 19 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 109.092 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(19R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (19)^(3/2) - 1 ] · √(2R / g) = 54.546 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 17",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (19)^(3/2) - 1 ] · √(2R / g) = 54.546 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 54.546 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (19)^(3/2) - 1 ] · √(2R / g) = 54.546 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-018",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 20 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 58.962 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 20 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 117.924 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(20R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (20)^(3/2) - 1 ] · √(2R / g) = 58.962 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 18",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (20)^(3/2) - 1 ] · √(2R / g) = 58.962 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 58.962 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (20)^(3/2) - 1 ] · √(2R / g) = 58.962 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-019",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 21 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 63.489 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 21 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 126.978 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(21R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (21)^(3/2) - 1 ] · √(2R / g) = 63.489 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 19",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (21)^(3/2) - 1 ] · √(2R / g) = 63.489 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 63.489 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (21)^(3/2) - 1 ] · √(2R / g) = 63.489 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-020",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 22 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 68.126 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 22 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 136.252 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(22R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (22)^(3/2) - 1 ] · √(2R / g) = 68.126 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 20",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (22)^(3/2) - 1 ] · √(2R / g) = 68.126 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 68.126 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (22)^(3/2) - 1 ] · √(2R / g) = 68.126 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-021",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 23 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 72.869 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 23 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 145.738 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(23R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (23)^(3/2) - 1 ] · √(2R / g) = 72.869 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 21",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (23)^(3/2) - 1 ] · √(2R / g) = 72.869 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 72.869 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (23)^(3/2) - 1 ] · √(2R / g) = 72.869 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-022",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 24 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 77.717 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 24 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 155.434 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(24R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (24)^(3/2) - 1 ] · √(2R / g) = 77.717 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 22",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (24)^(3/2) - 1 ] · √(2R / g) = 77.717 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 77.717 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (24)^(3/2) - 1 ] · √(2R / g) = 77.717 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-023",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 25 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 82.667 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 25 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 165.334 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(25R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (25)^(3/2) - 1 ] · √(2R / g) = 82.667 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 23",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (25)^(3/2) - 1 ] · √(2R / g) = 82.667 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 82.667 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (25)^(3/2) - 1 ] · √(2R / g) = 82.667 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-024",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 26 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 87.717 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 26 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 175.434 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(26R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (26)^(3/2) - 1 ] · √(2R / g) = 87.717 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 24",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (26)^(3/2) - 1 ] · √(2R / g) = 87.717 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 87.717 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (26)^(3/2) - 1 ] · √(2R / g) = 87.717 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-025",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A particle is launched vertically upwards from Earth's surface with speed exactly equal to escape velocity (v = v_e = √(2gR)). How long does it take for the particle to reach a radial distance of r = 27 R from the Earth's center?",
    "options": [
      {
        "label": "A",
        "text": "t = 92.864 · √(2R / g)"
      },
      {
        "label": "B",
        "text": "t = 27 · √(2R / g)"
      },
      {
        "label": "C",
        "text": "t = √(2R / g)"
      },
      {
        "label": "D",
        "text": "t = 185.728 · √(2R / g)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since v = v_e at every point, dr/dt = √(2GM/r). Integrate: t = ∫_R^(27R) [dr / √(2GM/r)] = (2/3) (r^(3/2) - R^(3/2)) / √(2GM).",
    "formula": "t = (2/3) [ (27)^(3/2) - 1 ] · √(2R / g) = 92.864 · √(2R / g)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 25",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "t = (2/3) [ (27)^(3/2) - 1 ] · √(2R / g) = 92.864 · √(2R / g)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t = 92.864 · √(2R / g)",
      "keyTakeaway": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g).",
      "commonTrap": "Assuming constant acceleration or uniform deceleration during the ascent."
    },
    "explanation": "Radial parabolic trajectory time of flight follows t = (2/3)[(r/R)^(1.5) - 1] √(2R/g). Formulated via t = (2/3) [ (27)^(3/2) - 1 ] · √(2R / g) = 92.864 · √(2R / g).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-026",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 1 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(1 / 2) · v_e (approx. 7.92 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 2) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(1) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (1 R) / (1 + 1) = [ 1 / (1 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 1 / (1 + 1) ] · v_e = 0.707 · 11.2 km/s = 7.92 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 26",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 1 / (1 + 1) ] · v_e = 0.707 · 11.2 km/s = 7.92 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(1 / 2) · v_e (approx. 7.92 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 1 / (1 + 1) ] · v_e = 0.707 · 11.2 km/s = 7.92 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-027",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 2 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(2 / 3) · v_e (approx. 9.14 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 3) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(2) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (2 R) / (2 + 1) = [ 2 / (2 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 2 / (2 + 1) ] · v_e = 0.816 · 11.2 km/s = 9.14 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 27",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 2 / (2 + 1) ] · v_e = 0.816 · 11.2 km/s = 9.14 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(2 / 3) · v_e (approx. 9.14 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 2 / (2 + 1) ] · v_e = 0.816 · 11.2 km/s = 9.14 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-028",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 3 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(3 / 4) · v_e (approx. 9.70 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 4) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(3) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (3 R) / (3 + 1) = [ 3 / (3 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 3 / (3 + 1) ] · v_e = 0.866 · 11.2 km/s = 9.70 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 28",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 3 / (3 + 1) ] · v_e = 0.866 · 11.2 km/s = 9.70 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(3 / 4) · v_e (approx. 9.70 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 3 / (3 + 1) ] · v_e = 0.866 · 11.2 km/s = 9.70 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-029",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 4 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(4 / 5) · v_e (approx. 10.01 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 5) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(4) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (4 R) / (4 + 1) = [ 4 / (4 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 4 / (4 + 1) ] · v_e = 0.894 · 11.2 km/s = 10.01 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 29",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 4 / (4 + 1) ] · v_e = 0.894 · 11.2 km/s = 10.01 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(4 / 5) · v_e (approx. 10.01 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 4 / (4 + 1) ] · v_e = 0.894 · 11.2 km/s = 10.01 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-030",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 5 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(5 / 6) · v_e (approx. 10.23 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 6) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(5) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (5 R) / (5 + 1) = [ 5 / (5 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 5 / (5 + 1) ] · v_e = 0.913 · 11.2 km/s = 10.23 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 30",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 5 / (5 + 1) ] · v_e = 0.913 · 11.2 km/s = 10.23 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(5 / 6) · v_e (approx. 10.23 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 5 / (5 + 1) ] · v_e = 0.913 · 11.2 km/s = 10.23 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-031",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 6 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(6 / 7) · v_e (approx. 10.37 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 7) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(6) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (6 R) / (6 + 1) = [ 6 / (6 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 6 / (6 + 1) ] · v_e = 0.926 · 11.2 km/s = 10.37 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 31",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 6 / (6 + 1) ] · v_e = 0.926 · 11.2 km/s = 10.37 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(6 / 7) · v_e (approx. 10.37 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 6 / (6 + 1) ] · v_e = 0.926 · 11.2 km/s = 10.37 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-032",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 7 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(7 / 8) · v_e (approx. 10.47 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 8) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(7) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (7 R) / (7 + 1) = [ 7 / (7 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 7 / (7 + 1) ] · v_e = 0.935 · 11.2 km/s = 10.47 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 32",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 7 / (7 + 1) ] · v_e = 0.935 · 11.2 km/s = 10.47 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(7 / 8) · v_e (approx. 10.47 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 7 / (7 + 1) ] · v_e = 0.935 · 11.2 km/s = 10.47 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-033",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 8 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(8 / 9) · v_e (approx. 10.56 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 9) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(8) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (8 R) / (8 + 1) = [ 8 / (8 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 8 / (8 + 1) ] · v_e = 0.943 · 11.2 km/s = 10.56 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 33",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 8 / (8 + 1) ] · v_e = 0.943 · 11.2 km/s = 10.56 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(8 / 9) · v_e (approx. 10.56 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 8 / (8 + 1) ] · v_e = 0.943 · 11.2 km/s = 10.56 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-034",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 9 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(9 / 10) · v_e (approx. 10.63 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 10) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(9) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (9 R) / (9 + 1) = [ 9 / (9 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 9 / (9 + 1) ] · v_e = 0.949 · 11.2 km/s = 10.63 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 34",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 9 / (9 + 1) ] · v_e = 0.949 · 11.2 km/s = 10.63 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(9 / 10) · v_e (approx. 10.63 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 9 / (9 + 1) ] · v_e = 0.949 · 11.2 km/s = 10.63 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-035",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 10 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(10 / 11) · v_e (approx. 10.67 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 11) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(10) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (10 R) / (10 + 1) = [ 10 / (10 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 10 / (10 + 1) ] · v_e = 0.953 · 11.2 km/s = 10.67 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 35",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 10 / (10 + 1) ] · v_e = 0.953 · 11.2 km/s = 10.67 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(10 / 11) · v_e (approx. 10.67 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 10 / (10 + 1) ] · v_e = 0.953 · 11.2 km/s = 10.67 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-036",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 11 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(11 / 12) · v_e (approx. 10.72 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 12) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(11) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (11 R) / (11 + 1) = [ 11 / (11 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 11 / (11 + 1) ] · v_e = 0.957 · 11.2 km/s = 10.72 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 36",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 11 / (11 + 1) ] · v_e = 0.957 · 11.2 km/s = 10.72 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(11 / 12) · v_e (approx. 10.72 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 11 / (11 + 1) ] · v_e = 0.957 · 11.2 km/s = 10.72 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-037",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 12 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(12 / 13) · v_e (approx. 10.76 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 13) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(12) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (12 R) / (12 + 1) = [ 12 / (12 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 12 / (12 + 1) ] · v_e = 0.961 · 11.2 km/s = 10.76 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 37",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 12 / (12 + 1) ] · v_e = 0.961 · 11.2 km/s = 10.76 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(12 / 13) · v_e (approx. 10.76 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 12 / (12 + 1) ] · v_e = 0.961 · 11.2 km/s = 10.76 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-038",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 13 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(13 / 14) · v_e (approx. 10.80 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 14) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(13) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (13 R) / (13 + 1) = [ 13 / (13 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 13 / (13 + 1) ] · v_e = 0.964 · 11.2 km/s = 10.80 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 38",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 13 / (13 + 1) ] · v_e = 0.964 · 11.2 km/s = 10.80 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(13 / 14) · v_e (approx. 10.80 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 13 / (13 + 1) ] · v_e = 0.964 · 11.2 km/s = 10.80 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-039",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 14 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(14 / 15) · v_e (approx. 10.82 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 15) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(14) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (14 R) / (14 + 1) = [ 14 / (14 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 14 / (14 + 1) ] · v_e = 0.966 · 11.2 km/s = 10.82 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 39",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 14 / (14 + 1) ] · v_e = 0.966 · 11.2 km/s = 10.82 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(14 / 15) · v_e (approx. 10.82 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 14 / (14 + 1) ] · v_e = 0.966 · 11.2 km/s = 10.82 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-040",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 15 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(15 / 16) · v_e (approx. 10.84 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 16) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(15) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (15 R) / (15 + 1) = [ 15 / (15 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 15 / (15 + 1) ] · v_e = 0.968 · 11.2 km/s = 10.84 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 40",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 15 / (15 + 1) ] · v_e = 0.968 · 11.2 km/s = 10.84 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(15 / 16) · v_e (approx. 10.84 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 15 / (15 + 1) ] · v_e = 0.968 · 11.2 km/s = 10.84 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-041",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 16 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(16 / 17) · v_e (approx. 10.86 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 17) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(16) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (16 R) / (16 + 1) = [ 16 / (16 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 16 / (16 + 1) ] · v_e = 0.970 · 11.2 km/s = 10.86 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 41",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 16 / (16 + 1) ] · v_e = 0.970 · 11.2 km/s = 10.86 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(16 / 17) · v_e (approx. 10.86 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 16 / (16 + 1) ] · v_e = 0.970 · 11.2 km/s = 10.86 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-042",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 17 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(17 / 18) · v_e (approx. 10.89 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 18) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(17) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (17 R) / (17 + 1) = [ 17 / (17 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 17 / (17 + 1) ] · v_e = 0.972 · 11.2 km/s = 10.89 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 42",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 17 / (17 + 1) ] · v_e = 0.972 · 11.2 km/s = 10.89 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(17 / 18) · v_e (approx. 10.89 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 17 / (17 + 1) ] · v_e = 0.972 · 11.2 km/s = 10.89 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-043",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 18 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(18 / 19) · v_e (approx. 10.90 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 19) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(18) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (18 R) / (18 + 1) = [ 18 / (18 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 18 / (18 + 1) ] · v_e = 0.973 · 11.2 km/s = 10.90 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 43",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 18 / (18 + 1) ] · v_e = 0.973 · 11.2 km/s = 10.90 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(18 / 19) · v_e (approx. 10.90 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 18 / (18 + 1) ] · v_e = 0.973 · 11.2 km/s = 10.90 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-044",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 19 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(19 / 20) · v_e (approx. 10.92 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 20) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(19) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (19 R) / (19 + 1) = [ 19 / (19 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 19 / (19 + 1) ] · v_e = 0.975 · 11.2 km/s = 10.92 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 44",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 19 / (19 + 1) ] · v_e = 0.975 · 11.2 km/s = 10.92 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(19 / 20) · v_e (approx. 10.92 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 19 / (19 + 1) ] · v_e = 0.975 · 11.2 km/s = 10.92 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-045",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 20 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(20 / 21) · v_e (approx. 10.93 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 21) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(20) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (20 R) / (20 + 1) = [ 20 / (20 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 20 / (20 + 1) ] · v_e = 0.976 · 11.2 km/s = 10.93 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 45",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 20 / (20 + 1) ] · v_e = 0.976 · 11.2 km/s = 10.93 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(20 / 21) · v_e (approx. 10.93 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 20 / (20 + 1) ] · v_e = 0.976 · 11.2 km/s = 10.93 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-046",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 21 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(21 / 22) · v_e (approx. 10.94 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 22) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(21) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (21 R) / (21 + 1) = [ 21 / (21 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 21 / (21 + 1) ] · v_e = 0.977 · 11.2 km/s = 10.94 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 46",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 21 / (21 + 1) ] · v_e = 0.977 · 11.2 km/s = 10.94 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(21 / 22) · v_e (approx. 10.94 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 21 / (21 + 1) ] · v_e = 0.977 · 11.2 km/s = 10.94 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-047",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 22 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(22 / 23) · v_e (approx. 10.95 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 23) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(22) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (22 R) / (22 + 1) = [ 22 / (22 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 22 / (22 + 1) ] · v_e = 0.978 · 11.2 km/s = 10.95 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 47",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 22 / (22 + 1) ] · v_e = 0.978 · 11.2 km/s = 10.95 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(22 / 23) · v_e (approx. 10.95 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 22 / (22 + 1) ] · v_e = 0.978 · 11.2 km/s = 10.95 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-048",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 23 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(23 / 24) · v_e (approx. 10.96 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 24) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(23) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (23 R) / (23 + 1) = [ 23 / (23 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 23 / (23 + 1) ] · v_e = 0.979 · 11.2 km/s = 10.96 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 48",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 23 / (23 + 1) ] · v_e = 0.979 · 11.2 km/s = 10.96 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(23 / 24) · v_e (approx. 10.96 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 23 / (23 + 1) ] · v_e = 0.979 · 11.2 km/s = 10.96 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-049",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 24 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(24 / 25) · v_e (approx. 10.98 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 25) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(24) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (24 R) / (24 + 1) = [ 24 / (24 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 24 / (24 + 1) ] · v_e = 0.980 · 11.2 km/s = 10.98 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 49",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 24 / (24 + 1) ] · v_e = 0.980 · 11.2 km/s = 10.98 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(24 / 25) · v_e (approx. 10.98 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 24 / (24 + 1) ] · v_e = 0.980 · 11.2 km/s = 10.98 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-050",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the required vertical projection velocity v from the surface of the Earth to propel a rocket to a maximum peak altitude of h = 25 R above the Earth's surface? (Earth escape velocity v_e = 11.2 km/s)",
    "options": [
      {
        "label": "A",
        "text": "v = √(25 / 26) · v_e (approx. 10.99 km/s)"
      },
      {
        "label": "B",
        "text": "v = (1 / 26) · v_e"
      },
      {
        "label": "C",
        "text": "v = √(25) · v_e"
      },
      {
        "label": "D",
        "text": "v = 11.20 km/s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v² = ΔU = m g h / (1 + h/R) = m g (25 R) / (25 + 1) = [ 25 / (25 + 1) ] (1/2 m v_e²).",
    "formula": "v = √[ 25 / (25 + 1) ] · v_e = 0.981 · 11.2 km/s = 10.99 km/s",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 50",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "v = √[ 25 / (25 + 1) ] · v_e = 0.981 · 11.2 km/s = 10.99 km/s",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √(25 / 26) · v_e (approx. 10.99 km/s)",
      "keyTakeaway": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e.",
      "commonTrap": "Using flat-Earth formula v = √(2gh) which produces impossible speeds exceeding escape velocity."
    },
    "explanation": "To reach height h = n R, required launch speed is v = √(n / (n + 1)) v_e. Formulated via v = √[ 25 / (25 + 1) ] · v_e = 0.981 · 11.2 km/s = 10.99 km/s.",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-051",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 11000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (11000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (11000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (11000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (11000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 51",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (11000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-052",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 12000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (12000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (12000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (12000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (12000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 52",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (12000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-053",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 13000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (13000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (13000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (13000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (13000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 53",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (13000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-054",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 14000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (14000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (14000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (14000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (14000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 54",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (14000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-055",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 15000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (15000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (15000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (15000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (15000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 55",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (15000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-056",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 16000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (16000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (16000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (16000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (16000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 56",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (16000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-057",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 17000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (17000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (17000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (17000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (17000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 57",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (17000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-058",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 18000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (18000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (18000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (18000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (18000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 58",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (18000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-059",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 19000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (19000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (19000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (19000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (19000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 59",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (19000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-060",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 20000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (20000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (20000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (20000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (20000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 60",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (20000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-061",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 21000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (21000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (21000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (21000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (21000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 61",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (21000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-062",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 22000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (22000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (22000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (22000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (22000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 62",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (22000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-063",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 23000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (23000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (23000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (23000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (23000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 63",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (23000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-064",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 24000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (24000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (24000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (24000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (24000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 64",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (24000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-065",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 25000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (25000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (25000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (25000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (25000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 65",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (25000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-066",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 26000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (26000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (26000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (26000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (26000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 66",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (26000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-067",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 27000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (27000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (27000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (27000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (27000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 67",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (27000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-068",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 28000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (28000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (28000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (28000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (28000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 68",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (28000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-069",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 29000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (29000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (29000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (29000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (29000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 69",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (29000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  },
  {
    "id": "SEV-H-070",
    "topic": "satelliteEscapeVelocity",
    "topicName": "Satellite & Escape Velocity",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A hyperbolic interplanetary probe approaches a target planet of mass M with impact parameter b = 30000 km and excess hyperbolic arrival speed v_∞. What is the turning deflection angle δ between its inbound and outbound asymptotic trajectory directions?",
    "options": [
      {
        "label": "A",
        "text": "tan(δ / 2) = G M / [ (30000 km) · v_∞² ]"
      },
      {
        "label": "B",
        "text": "tan(δ / 2) = (30000 km) · v_∞² / (G M)"
      },
      {
        "label": "C",
        "text": "sin(δ) = G M / [ (30000 km) · v_∞ ]"
      },
      {
        "label": "D",
        "text": "cos(δ) = G M / [ (30000 km)² · v_∞² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "For a Rutherford/Newton hyperbolic scattering trajectory, the eccentricity is e = √(1 + (b v_∞² / GM)²). The deflection angle satisfies tan(δ/2) = 1/√(e² - 1) = GM / (b v_∞²).",
    "formula": "tan(δ / 2) = G M / (b · v_∞²)",
    "stepByStep": {
      "given": "Advanced orbital mechanics scenario 70",
      "asked": "Flight time, launch speed, or flyby deflection angle",
      "formula": "tan(δ / 2) = G M / (b · v_∞²)",
      "substitution": "Apply integral calculus / gravitational potential energy at high altitude",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: tan(δ / 2) = G M / [ (30000 km) · v_∞² ]",
      "keyTakeaway": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²).",
      "commonTrap": "Inverting the ratio (b v_∞² / GM)."
    },
    "explanation": "In a gravitational assist flyby, the asymptotic deflection angle satisfies tan(δ/2) = GM / (b v_∞²). Formulated via tan(δ / 2) = G M / (b · v_∞²).",
    "category": "satelliteEscapeVelocity"
  }
];

export default questions;
