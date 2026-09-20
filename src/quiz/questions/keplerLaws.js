// Topic 4: Kepler's Laws of Planetary Motion
// Total Questions: 210

export const questions = [
  {
    "id": "KLP-E-001",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "According to Kepler's First Law (Law of Orbits), the orbit of every planet around the Sun is:",
    "options": [
      {
        "label": "A",
        "text": "An ellipse with the Sun located at one of the two foci"
      },
      {
        "label": "B",
        "text": "A perfect circle with the Sun at the center"
      },
      {
        "label": "C",
        "text": "A parabola"
      },
      {
        "label": "D",
        "text": "An ellipse with the Sun at the geometric center"
      }
    ],
    "correctAnswer": "A",
    "hint": "Kepler discarded Copernicus's circular orbits in favor of ellipses with the Sun at one focus.",
    "formula": "r(θ) = a (1 - e²) / (1 + e cos θ)",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 1",
      "asked": "Orbital period or velocity relation",
      "formula": "r(θ) = a (1 - e²) / (1 + e cos θ)",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: An ellipse with the Sun located at one of the two foci",
      "keyTakeaway": "Kepler's 1st law states planetary orbits are ellipses with the Sun at one focus.",
      "commonTrap": "Thinking the Sun is at the center of the ellipse rather than a focus."
    },
    "explanation": "Kepler's 1st law states planetary orbits are ellipses with the Sun at one focus. Formulated via r(θ) = a (1 - e²) / (1 + e cos θ).",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-002",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Kepler's Second Law (Law of Areas) is a direct physical consequence of the conservation of:",
    "options": [
      {
        "label": "A",
        "text": "Angular momentum (due to zero net torque)"
      },
      {
        "label": "B",
        "text": "Linear momentum"
      },
      {
        "label": "C",
        "text": "Mechanical energy"
      },
      {
        "label": "D",
        "text": "Gravitational mass"
      }
    ],
    "correctAnswer": "A",
    "hint": "Gravitational force is purely radial, so torque τ⃗ = r⃗ × F⃗ = 0, which conserves angular momentum L⃗.",
    "formula": "dA / dt = L / (2m) = constant",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 2",
      "asked": "Orbital period or velocity relation",
      "formula": "dA / dt = L / (2m) = constant",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Angular momentum (due to zero net torque)",
      "keyTakeaway": "The Law of Areas reflects conservation of angular momentum under a central force.",
      "commonTrap": "Attributing the 2nd law to conservation of linear momentum or energy."
    },
    "explanation": "The Law of Areas reflects conservation of angular momentum under a central force. Formulated via dA / dt = L / (2m) = constant.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-003",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "According to Kepler's Third Law (Harmonic Law), the square of the orbital period T of a planet is directly proportional to:",
    "options": [
      {
        "label": "A",
        "text": "The cube of the semi-major axis (T² ∝ a³)"
      },
      {
        "label": "B",
        "text": "The square of the semi-major axis (T² ∝ a²)"
      },
      {
        "label": "C",
        "text": "The semi-major axis directly (T ∝ a)"
      },
      {
        "label": "D",
        "text": "The fourth power of the semi-major axis (T² ∝ a⁴)"
      }
    ],
    "correctAnswer": "A",
    "hint": "T² = (4π² / GM) a³.",
    "formula": "T² ∝ a³",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 3",
      "asked": "Orbital period or velocity relation",
      "formula": "T² ∝ a³",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: The cube of the semi-major axis (T² ∝ a³)",
      "keyTakeaway": "Kepler's 3rd law states T² ∝ a³: period squared scales with semi-major axis cubed.",
      "commonTrap": "Swapping the powers (thinking T³ ∝ a²)."
    },
    "explanation": "Kepler's 3rd law states T² ∝ a³: period squared scales with semi-major axis cubed. Formulated via T² ∝ a³.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-004",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "At which point in its elliptical orbit does a planet travel with its maximum orbital speed?",
    "options": [
      {
        "label": "A",
        "text": "Perihelion (closest distance to the Sun)"
      },
      {
        "label": "B",
        "text": "Aphelion (farthest distance from the Sun)"
      },
      {
        "label": "C",
        "text": "At the ends of the semi-minor axis"
      },
      {
        "label": "D",
        "text": "Speed is strictly constant everywhere"
      }
    ],
    "correctAnswer": "A",
    "hint": "By conservation of angular momentum, r · v = constant. Minimum r yields maximum v.",
    "formula": "r_p · v_p = r_a · v_a ⇒ v_p > v_a",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 4",
      "asked": "Orbital period or velocity relation",
      "formula": "r_p · v_p = r_a · v_a ⇒ v_p > v_a",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Perihelion (closest distance to the Sun)",
      "keyTakeaway": "A planet moves fastest at perihelion (closest point) and slowest at aphelion.",
      "commonTrap": "Thinking speed is constant along an elliptical orbit."
    },
    "explanation": "A planet moves fastest at perihelion (closest point) and slowest at aphelion. Formulated via r_p · v_p = r_a · v_a ⇒ v_p > v_a.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-005",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the areal velocity dA/dt of a planet of mass m moving with angular momentum L around the Sun?",
    "options": [
      {
        "label": "A",
        "text": "dA / dt = L / (2m)"
      },
      {
        "label": "B",
        "text": "dA / dt = L / m"
      },
      {
        "label": "C",
        "text": "dA / dt = 2L / m"
      },
      {
        "label": "D",
        "text": "dA / dt = L · m / 2"
      }
    ],
    "correctAnswer": "A",
    "hint": "Area of triangle swept in dt is dA = 1/2 r (r dθ) = 1/2 r² ω dt = (L / 2m) dt.",
    "formula": "dA / dt = L / (2m)",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 5",
      "asked": "Orbital period or velocity relation",
      "formula": "dA / dt = L / (2m)",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: dA / dt = L / (2m)",
      "keyTakeaway": "Areal velocity is constant and equals angular momentum divided by twice the mass.",
      "commonTrap": "Missing the factor of 2 in the denominator."
    },
    "explanation": "Areal velocity is constant and equals angular momentum divided by twice the mass. Formulated via dA / dt = L / (2m).",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-006",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the relation between semi-major axis a, perihelion distance r_p, and aphelion distance r_a of an elliptical orbit?",
    "options": [
      {
        "label": "A",
        "text": "a = (r_p + r_a) / 2"
      },
      {
        "label": "B",
        "text": "a = √(r_p · r_a)"
      },
      {
        "label": "C",
        "text": "a = r_a - r_p"
      },
      {
        "label": "D",
        "text": "a = 2 (r_p + r_a)"
      }
    ],
    "correctAnswer": "A",
    "hint": "The major axis length is 2a = r_p + r_a.",
    "formula": "2a = r_p + r_a ⇒ a = (r_p + r_a) / 2",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 6",
      "asked": "Orbital period or velocity relation",
      "formula": "2a = r_p + r_a ⇒ a = (r_p + r_a) / 2",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: a = (r_p + r_a) / 2",
      "keyTakeaway": "The semi-major axis is the arithmetic mean of the perihelion and aphelion distances.",
      "commonTrap": "Confusing with the semi-minor axis b = √(r_p · r_a)."
    },
    "explanation": "The semi-major axis is the arithmetic mean of the perihelion and aphelion distances. Formulated via 2a = r_p + r_a ⇒ a = (r_p + r_a) / 2.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-007",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "If an elliptical orbit has an eccentricity e = 0, the orbit is geometrically:",
    "options": [
      {
        "label": "A",
        "text": "A circle"
      },
      {
        "label": "B",
        "text": "A parabola"
      },
      {
        "label": "C",
        "text": "A straight line segment"
      },
      {
        "label": "D",
        "text": "A hyperbola"
      }
    ],
    "correctAnswer": "A",
    "hint": "Eccentricity e = c/a. When e = 0, both foci merge at the center, forming a circle.",
    "formula": "e = 0 ⇒ Circle",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 7",
      "asked": "Orbital period or velocity relation",
      "formula": "e = 0 ⇒ Circle",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: A circle",
      "keyTakeaway": "A circular orbit is simply a special limiting case of an ellipse with zero eccentricity.",
      "commonTrap": "Thinking circle and ellipse are completely unrelated curves."
    },
    "explanation": "A circular orbit is simply a special limiting case of an ellipse with zero eccentricity. Formulated via e = 0 ⇒ Circle.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-008",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Does Kepler's Third Law (T² ∝ a³) depend on the mass of the orbiting planet m (assuming m ≪ M_Sun)?",
    "options": [
      {
        "label": "A",
        "text": "No, it is independent of the planet's mass m"
      },
      {
        "label": "B",
        "text": "Yes, heavier planets take longer to orbit"
      },
      {
        "label": "C",
        "text": "Yes, heavier planets orbit much faster"
      },
      {
        "label": "D",
        "text": "It depends on the planet's radius"
      }
    ],
    "correctAnswer": "A",
    "hint": "Gravitational force F = G M m / r² = m (v²/r); planet mass m cancels out completely.",
    "formula": "T² = (4π² / G M_Sun) a³",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 8",
      "asked": "Orbital period or velocity relation",
      "formula": "T² = (4π² / G M_Sun) a³",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: No, it is independent of the planet's mass m",
      "keyTakeaway": "All small objects at the same semi-major axis share the exact same orbital period regardless of their mass.",
      "commonTrap": "Assuming heavier planets experience greater inertia and thus move slower."
    },
    "explanation": "All small objects at the same semi-major axis share the exact same orbital period regardless of their mass. Formulated via T² = (4π² / G M_Sun) a³.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-009",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "At aphelion (farthest point from the Sun), a planet's orbital speed is:",
    "options": [
      {
        "label": "A",
        "text": "At its minimum value"
      },
      {
        "label": "B",
        "text": "At its maximum value"
      },
      {
        "label": "C",
        "text": "Equal to escape velocity"
      },
      {
        "label": "D",
        "text": "Zero"
      }
    ],
    "correctAnswer": "A",
    "hint": "Angular momentum conservation: r_a v_a = r_p v_p. Maximum distance r_a means minimum speed v_a.",
    "formula": "v_a = v_p (r_p / r_a) < v_p",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 9",
      "asked": "Orbital period or velocity relation",
      "formula": "v_a = v_p (r_p / r_a) < v_p",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: At its minimum value",
      "keyTakeaway": "A planet moves slowest at aphelion where its distance from the Sun is greatest.",
      "commonTrap": "Assuming speed is zero at aphelion."
    },
    "explanation": "A planet moves slowest at aphelion where its distance from the Sun is greatest. Formulated via v_a = v_p (r_p / r_a) < v_p.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-010",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Which law explains why winter in the Northern Hemisphere (when Earth is near perihelion in January) is slightly shorter than summer?",
    "options": [
      {
        "label": "A",
        "text": "Kepler's Second Law (Earth moves faster near perihelion, sweeping the orbit faster)"
      },
      {
        "label": "B",
        "text": "Kepler's Third Law"
      },
      {
        "label": "C",
        "text": "Newton's First Law"
      },
      {
        "label": "D",
        "text": "Stefan-Boltzmann Law"
      }
    ],
    "correctAnswer": "A",
    "hint": "Earth reaches perihelion around January 3. Higher orbital speed means Earth traverses that half of its orbit in fewer days.",
    "formula": "dA / dt = constant",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 10",
      "asked": "Orbital period or velocity relation",
      "formula": "dA / dt = constant",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Kepler's Second Law (Earth moves faster near perihelion, sweeping the orbit faster)",
      "keyTakeaway": "Earth travels faster near perihelion (early January), making Northern Hemisphere autumn/winter shorter by ~7 days.",
      "commonTrap": "Thinking Earth's speed is completely constant throughout the calendar year."
    },
    "explanation": "Earth travels faster near perihelion (early January), making Northern Hemisphere autumn/winter shorter by ~7 days. Formulated via dA / dt = constant.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-011",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 2.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 2.83 Earth years"
      },
      {
        "label": "B",
        "text": "T = 4.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 2.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 4.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (2.0)^(3/2) = √(2.0³) = 2.83 years.",
    "formula": "T = a^(3/2) = (2.0)^(1.5) = 2.83 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 11",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (2.0)^(1.5) = 2.83 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2.83 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (2.0)^(1.5) = 2.83 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-012",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 2.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 3.95 Earth years"
      },
      {
        "label": "B",
        "text": "T = 5.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 2.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 6.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (2.5)^(3/2) = √(2.5³) = 3.95 years.",
    "formula": "T = a^(3/2) = (2.5)^(1.5) = 3.95 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 12",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (2.5)^(1.5) = 3.95 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 3.95 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (2.5)^(1.5) = 3.95 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-013",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 3.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 5.20 Earth years"
      },
      {
        "label": "B",
        "text": "T = 6.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 3.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 9.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (3.0)^(3/2) = √(3.0³) = 5.20 years.",
    "formula": "T = a^(3/2) = (3.0)^(1.5) = 5.20 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 13",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (3.0)^(1.5) = 5.20 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 5.20 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (3.0)^(1.5) = 5.20 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-014",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 3.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 6.55 Earth years"
      },
      {
        "label": "B",
        "text": "T = 7.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 3.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 12.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (3.5)^(3/2) = √(3.5³) = 6.55 years.",
    "formula": "T = a^(3/2) = (3.5)^(1.5) = 6.55 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 14",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (3.5)^(1.5) = 6.55 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 6.55 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (3.5)^(1.5) = 6.55 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-015",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 4.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 8.00 Earth years"
      },
      {
        "label": "B",
        "text": "T = 8.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 4.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 16.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (4.0)^(3/2) = √(4.0³) = 8.00 years.",
    "formula": "T = a^(3/2) = (4.0)^(1.5) = 8.00 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 15",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (4.0)^(1.5) = 8.00 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 8.00 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (4.0)^(1.5) = 8.00 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-016",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 4.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 9.55 Earth years"
      },
      {
        "label": "B",
        "text": "T = 9.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 4.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 20.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (4.5)^(3/2) = √(4.5³) = 9.55 years.",
    "formula": "T = a^(3/2) = (4.5)^(1.5) = 9.55 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 16",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (4.5)^(1.5) = 9.55 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 9.55 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (4.5)^(1.5) = 9.55 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-017",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 5.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 11.18 Earth years"
      },
      {
        "label": "B",
        "text": "T = 10.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 5.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 25.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (5.0)^(3/2) = √(5.0³) = 11.18 years.",
    "formula": "T = a^(3/2) = (5.0)^(1.5) = 11.18 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 17",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (5.0)^(1.5) = 11.18 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 11.18 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (5.0)^(1.5) = 11.18 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-018",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 5.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 12.90 Earth years"
      },
      {
        "label": "B",
        "text": "T = 11.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 5.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 30.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (5.5)^(3/2) = √(5.5³) = 12.90 years.",
    "formula": "T = a^(3/2) = (5.5)^(1.5) = 12.90 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 18",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (5.5)^(1.5) = 12.90 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 12.90 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (5.5)^(1.5) = 12.90 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-019",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 6.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 14.70 Earth years"
      },
      {
        "label": "B",
        "text": "T = 12.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 6.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 36.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (6.0)^(3/2) = √(6.0³) = 14.70 years.",
    "formula": "T = a^(3/2) = (6.0)^(1.5) = 14.70 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 19",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (6.0)^(1.5) = 14.70 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 14.70 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (6.0)^(1.5) = 14.70 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-020",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 6.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 16.57 Earth years"
      },
      {
        "label": "B",
        "text": "T = 13.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 6.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 42.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (6.5)^(3/2) = √(6.5³) = 16.57 years.",
    "formula": "T = a^(3/2) = (6.5)^(1.5) = 16.57 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 20",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (6.5)^(1.5) = 16.57 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 16.57 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (6.5)^(1.5) = 16.57 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-021",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 7.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 18.52 Earth years"
      },
      {
        "label": "B",
        "text": "T = 14.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 7.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 49.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (7.0)^(3/2) = √(7.0³) = 18.52 years.",
    "formula": "T = a^(3/2) = (7.0)^(1.5) = 18.52 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 21",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (7.0)^(1.5) = 18.52 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 18.52 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (7.0)^(1.5) = 18.52 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-022",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 7.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 20.54 Earth years"
      },
      {
        "label": "B",
        "text": "T = 15.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 7.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 56.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (7.5)^(3/2) = √(7.5³) = 20.54 years.",
    "formula": "T = a^(3/2) = (7.5)^(1.5) = 20.54 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 22",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (7.5)^(1.5) = 20.54 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 20.54 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (7.5)^(1.5) = 20.54 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-023",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 8.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 22.63 Earth years"
      },
      {
        "label": "B",
        "text": "T = 16.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 8.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 64.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (8.0)^(3/2) = √(8.0³) = 22.63 years.",
    "formula": "T = a^(3/2) = (8.0)^(1.5) = 22.63 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 23",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (8.0)^(1.5) = 22.63 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 22.63 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (8.0)^(1.5) = 22.63 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-024",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 8.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 24.78 Earth years"
      },
      {
        "label": "B",
        "text": "T = 17.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 8.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 72.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (8.5)^(3/2) = √(8.5³) = 24.78 years.",
    "formula": "T = a^(3/2) = (8.5)^(1.5) = 24.78 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 24",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (8.5)^(1.5) = 24.78 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 24.78 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (8.5)^(1.5) = 24.78 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-025",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 9.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 27.00 Earth years"
      },
      {
        "label": "B",
        "text": "T = 18.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 9.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 81.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (9.0)^(3/2) = √(9.0³) = 27.00 years.",
    "formula": "T = a^(3/2) = (9.0)^(1.5) = 27.00 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 25",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (9.0)^(1.5) = 27.00 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 27.00 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (9.0)^(1.5) = 27.00 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-026",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 9.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 29.28 Earth years"
      },
      {
        "label": "B",
        "text": "T = 19.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 9.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 90.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (9.5)^(3/2) = √(9.5³) = 29.28 years.",
    "formula": "T = a^(3/2) = (9.5)^(1.5) = 29.28 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 26",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (9.5)^(1.5) = 29.28 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 29.28 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (9.5)^(1.5) = 29.28 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-027",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 10.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 31.62 Earth years"
      },
      {
        "label": "B",
        "text": "T = 20.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 10.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 100.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (10.0)^(3/2) = √(10.0³) = 31.62 years.",
    "formula": "T = a^(3/2) = (10.0)^(1.5) = 31.62 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 27",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (10.0)^(1.5) = 31.62 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 31.62 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (10.0)^(1.5) = 31.62 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-028",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 10.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 34.02 Earth years"
      },
      {
        "label": "B",
        "text": "T = 21.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 10.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 110.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (10.5)^(3/2) = √(10.5³) = 34.02 years.",
    "formula": "T = a^(3/2) = (10.5)^(1.5) = 34.02 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 28",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (10.5)^(1.5) = 34.02 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 34.02 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (10.5)^(1.5) = 34.02 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-029",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 11.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 36.48 Earth years"
      },
      {
        "label": "B",
        "text": "T = 22.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 11.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 121.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (11.0)^(3/2) = √(11.0³) = 36.48 years.",
    "formula": "T = a^(3/2) = (11.0)^(1.5) = 36.48 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 29",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (11.0)^(1.5) = 36.48 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 36.48 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (11.0)^(1.5) = 36.48 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-030",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 11.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 39.00 Earth years"
      },
      {
        "label": "B",
        "text": "T = 23.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 11.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 132.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (11.5)^(3/2) = √(11.5³) = 39.00 years.",
    "formula": "T = a^(3/2) = (11.5)^(1.5) = 39.00 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 30",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (11.5)^(1.5) = 39.00 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 39.00 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (11.5)^(1.5) = 39.00 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-031",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 12.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 41.57 Earth years"
      },
      {
        "label": "B",
        "text": "T = 24.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 12.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 144.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (12.0)^(3/2) = √(12.0³) = 41.57 years.",
    "formula": "T = a^(3/2) = (12.0)^(1.5) = 41.57 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 31",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (12.0)^(1.5) = 41.57 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 41.57 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (12.0)^(1.5) = 41.57 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-032",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 12.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 44.19 Earth years"
      },
      {
        "label": "B",
        "text": "T = 25.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 12.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 156.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (12.5)^(3/2) = √(12.5³) = 44.19 years.",
    "formula": "T = a^(3/2) = (12.5)^(1.5) = 44.19 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 32",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (12.5)^(1.5) = 44.19 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 44.19 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (12.5)^(1.5) = 44.19 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-033",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 13.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 46.87 Earth years"
      },
      {
        "label": "B",
        "text": "T = 26.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 13.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 169.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (13.0)^(3/2) = √(13.0³) = 46.87 years.",
    "formula": "T = a^(3/2) = (13.0)^(1.5) = 46.87 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 33",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (13.0)^(1.5) = 46.87 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 46.87 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (13.0)^(1.5) = 46.87 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-034",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 13.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 49.60 Earth years"
      },
      {
        "label": "B",
        "text": "T = 27.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 13.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 182.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (13.5)^(3/2) = √(13.5³) = 49.60 years.",
    "formula": "T = a^(3/2) = (13.5)^(1.5) = 49.60 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 34",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (13.5)^(1.5) = 49.60 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 49.60 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (13.5)^(1.5) = 49.60 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-035",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 14.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 52.38 Earth years"
      },
      {
        "label": "B",
        "text": "T = 28.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 14.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 196.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (14.0)^(3/2) = √(14.0³) = 52.38 years.",
    "formula": "T = a^(3/2) = (14.0)^(1.5) = 52.38 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 35",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (14.0)^(1.5) = 52.38 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 52.38 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (14.0)^(1.5) = 52.38 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-036",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 14.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 55.21 Earth years"
      },
      {
        "label": "B",
        "text": "T = 29.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 14.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 210.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (14.5)^(3/2) = √(14.5³) = 55.21 years.",
    "formula": "T = a^(3/2) = (14.5)^(1.5) = 55.21 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 36",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (14.5)^(1.5) = 55.21 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 55.21 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (14.5)^(1.5) = 55.21 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-037",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 15.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 58.09 Earth years"
      },
      {
        "label": "B",
        "text": "T = 30.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 15.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 225.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (15.0)^(3/2) = √(15.0³) = 58.09 years.",
    "formula": "T = a^(3/2) = (15.0)^(1.5) = 58.09 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 37",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (15.0)^(1.5) = 58.09 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 58.09 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (15.0)^(1.5) = 58.09 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-038",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 15.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 61.02 Earth years"
      },
      {
        "label": "B",
        "text": "T = 31.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 15.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 240.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (15.5)^(3/2) = √(15.5³) = 61.02 years.",
    "formula": "T = a^(3/2) = (15.5)^(1.5) = 61.02 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 38",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (15.5)^(1.5) = 61.02 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 61.02 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (15.5)^(1.5) = 61.02 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-039",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 16.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 64.00 Earth years"
      },
      {
        "label": "B",
        "text": "T = 32.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 16.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 256.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (16.0)^(3/2) = √(16.0³) = 64.00 years.",
    "formula": "T = a^(3/2) = (16.0)^(1.5) = 64.00 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 39",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (16.0)^(1.5) = 64.00 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 64.00 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (16.0)^(1.5) = 64.00 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-040",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 16.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 67.02 Earth years"
      },
      {
        "label": "B",
        "text": "T = 33.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 16.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 272.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (16.5)^(3/2) = √(16.5³) = 67.02 years.",
    "formula": "T = a^(3/2) = (16.5)^(1.5) = 67.02 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 40",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (16.5)^(1.5) = 67.02 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 67.02 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (16.5)^(1.5) = 67.02 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-041",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 17.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 70.09 Earth years"
      },
      {
        "label": "B",
        "text": "T = 34.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 17.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 289.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (17.0)^(3/2) = √(17.0³) = 70.09 years.",
    "formula": "T = a^(3/2) = (17.0)^(1.5) = 70.09 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 41",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (17.0)^(1.5) = 70.09 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 70.09 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (17.0)^(1.5) = 70.09 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-042",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 17.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 73.21 Earth years"
      },
      {
        "label": "B",
        "text": "T = 35.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 17.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 306.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (17.5)^(3/2) = √(17.5³) = 73.21 years.",
    "formula": "T = a^(3/2) = (17.5)^(1.5) = 73.21 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 42",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (17.5)^(1.5) = 73.21 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 73.21 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (17.5)^(1.5) = 73.21 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-043",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 18.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 76.37 Earth years"
      },
      {
        "label": "B",
        "text": "T = 36.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 18.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 324.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (18.0)^(3/2) = √(18.0³) = 76.37 years.",
    "formula": "T = a^(3/2) = (18.0)^(1.5) = 76.37 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 43",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (18.0)^(1.5) = 76.37 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 76.37 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (18.0)^(1.5) = 76.37 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-044",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 18.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 79.57 Earth years"
      },
      {
        "label": "B",
        "text": "T = 37.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 18.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 342.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (18.5)^(3/2) = √(18.5³) = 79.57 years.",
    "formula": "T = a^(3/2) = (18.5)^(1.5) = 79.57 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 44",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (18.5)^(1.5) = 79.57 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 79.57 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (18.5)^(1.5) = 79.57 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-045",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 19.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 82.82 Earth years"
      },
      {
        "label": "B",
        "text": "T = 38.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 19.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 361.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (19.0)^(3/2) = √(19.0³) = 82.82 years.",
    "formula": "T = a^(3/2) = (19.0)^(1.5) = 82.82 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 45",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (19.0)^(1.5) = 82.82 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 82.82 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (19.0)^(1.5) = 82.82 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-046",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 19.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 86.11 Earth years"
      },
      {
        "label": "B",
        "text": "T = 39.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 19.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 380.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (19.5)^(3/2) = √(19.5³) = 86.11 years.",
    "formula": "T = a^(3/2) = (19.5)^(1.5) = 86.11 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 46",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (19.5)^(1.5) = 86.11 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 86.11 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (19.5)^(1.5) = 86.11 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-047",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 20.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 89.44 Earth years"
      },
      {
        "label": "B",
        "text": "T = 40.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 20.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 400.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (20.0)^(3/2) = √(20.0³) = 89.44 years.",
    "formula": "T = a^(3/2) = (20.0)^(1.5) = 89.44 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 47",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (20.0)^(1.5) = 89.44 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 89.44 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (20.0)^(1.5) = 89.44 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-048",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 20.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 92.82 Earth years"
      },
      {
        "label": "B",
        "text": "T = 41.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 20.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 420.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (20.5)^(3/2) = √(20.5³) = 92.82 years.",
    "formula": "T = a^(3/2) = (20.5)^(1.5) = 92.82 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 48",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (20.5)^(1.5) = 92.82 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 92.82 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (20.5)^(1.5) = 92.82 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-049",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 21.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 96.23 Earth years"
      },
      {
        "label": "B",
        "text": "T = 42.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 21.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 441.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (21.0)^(3/2) = √(21.0³) = 96.23 years.",
    "formula": "T = a^(3/2) = (21.0)^(1.5) = 96.23 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 49",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (21.0)^(1.5) = 96.23 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 96.23 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (21.0)^(1.5) = 96.23 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-050",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 21.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 99.69 Earth years"
      },
      {
        "label": "B",
        "text": "T = 43.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 21.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 462.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (21.5)^(3/2) = √(21.5³) = 99.69 years.",
    "formula": "T = a^(3/2) = (21.5)^(1.5) = 99.69 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 50",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (21.5)^(1.5) = 99.69 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 99.69 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (21.5)^(1.5) = 99.69 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-051",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 22.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 103.19 Earth years"
      },
      {
        "label": "B",
        "text": "T = 44.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 22.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 484.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (22.0)^(3/2) = √(22.0³) = 103.19 years.",
    "formula": "T = a^(3/2) = (22.0)^(1.5) = 103.19 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 51",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (22.0)^(1.5) = 103.19 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 103.19 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (22.0)^(1.5) = 103.19 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-052",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 22.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 106.73 Earth years"
      },
      {
        "label": "B",
        "text": "T = 45.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 22.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 506.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (22.5)^(3/2) = √(22.5³) = 106.73 years.",
    "formula": "T = a^(3/2) = (22.5)^(1.5) = 106.73 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 52",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (22.5)^(1.5) = 106.73 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 106.73 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (22.5)^(1.5) = 106.73 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-053",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 23.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 110.30 Earth years"
      },
      {
        "label": "B",
        "text": "T = 46.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 23.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 529.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (23.0)^(3/2) = √(23.0³) = 110.30 years.",
    "formula": "T = a^(3/2) = (23.0)^(1.5) = 110.30 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 53",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (23.0)^(1.5) = 110.30 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 110.30 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (23.0)^(1.5) = 110.30 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-054",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 23.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 113.92 Earth years"
      },
      {
        "label": "B",
        "text": "T = 47.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 23.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 552.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (23.5)^(3/2) = √(23.5³) = 113.92 years.",
    "formula": "T = a^(3/2) = (23.5)^(1.5) = 113.92 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 54",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (23.5)^(1.5) = 113.92 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 113.92 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (23.5)^(1.5) = 113.92 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-055",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 24.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 117.58 Earth years"
      },
      {
        "label": "B",
        "text": "T = 48.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 24.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 576.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (24.0)^(3/2) = √(24.0³) = 117.58 years.",
    "formula": "T = a^(3/2) = (24.0)^(1.5) = 117.58 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 55",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (24.0)^(1.5) = 117.58 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 117.58 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (24.0)^(1.5) = 117.58 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-056",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 24.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 121.27 Earth years"
      },
      {
        "label": "B",
        "text": "T = 49.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 24.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 600.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (24.5)^(3/2) = √(24.5³) = 121.27 years.",
    "formula": "T = a^(3/2) = (24.5)^(1.5) = 121.27 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 56",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (24.5)^(1.5) = 121.27 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 121.27 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (24.5)^(1.5) = 121.27 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-057",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 25.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 125.00 Earth years"
      },
      {
        "label": "B",
        "text": "T = 50.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 25.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 625.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (25.0)^(3/2) = √(25.0³) = 125.00 years.",
    "formula": "T = a^(3/2) = (25.0)^(1.5) = 125.00 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 57",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (25.0)^(1.5) = 125.00 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 125.00 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (25.0)^(1.5) = 125.00 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-058",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 25.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 128.77 Earth years"
      },
      {
        "label": "B",
        "text": "T = 51.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 25.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 650.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (25.5)^(3/2) = √(25.5³) = 128.77 years.",
    "formula": "T = a^(3/2) = (25.5)^(1.5) = 128.77 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 58",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (25.5)^(1.5) = 128.77 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 128.77 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (25.5)^(1.5) = 128.77 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-059",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 26.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 132.57 Earth years"
      },
      {
        "label": "B",
        "text": "T = 52.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 26.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 676.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (26.0)^(3/2) = √(26.0³) = 132.57 years.",
    "formula": "T = a^(3/2) = (26.0)^(1.5) = 132.57 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 59",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (26.0)^(1.5) = 132.57 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 132.57 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (26.0)^(1.5) = 132.57 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-060",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 26.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 136.42 Earth years"
      },
      {
        "label": "B",
        "text": "T = 53.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 26.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 702.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (26.5)^(3/2) = √(26.5³) = 136.42 years.",
    "formula": "T = a^(3/2) = (26.5)^(1.5) = 136.42 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 60",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (26.5)^(1.5) = 136.42 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 136.42 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (26.5)^(1.5) = 136.42 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-061",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 27.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 140.30 Earth years"
      },
      {
        "label": "B",
        "text": "T = 54.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 27.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 729.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (27.0)^(3/2) = √(27.0³) = 140.30 years.",
    "formula": "T = a^(3/2) = (27.0)^(1.5) = 140.30 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 61",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (27.0)^(1.5) = 140.30 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 140.30 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (27.0)^(1.5) = 140.30 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-062",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 27.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 144.21 Earth years"
      },
      {
        "label": "B",
        "text": "T = 55.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 27.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 756.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (27.5)^(3/2) = √(27.5³) = 144.21 years.",
    "formula": "T = a^(3/2) = (27.5)^(1.5) = 144.21 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 62",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (27.5)^(1.5) = 144.21 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 144.21 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (27.5)^(1.5) = 144.21 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-063",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 28.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 148.16 Earth years"
      },
      {
        "label": "B",
        "text": "T = 56.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 28.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 784.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (28.0)^(3/2) = √(28.0³) = 148.16 years.",
    "formula": "T = a^(3/2) = (28.0)^(1.5) = 148.16 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 63",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (28.0)^(1.5) = 148.16 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 148.16 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (28.0)^(1.5) = 148.16 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-064",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 28.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 152.15 Earth years"
      },
      {
        "label": "B",
        "text": "T = 57.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 28.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 812.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (28.5)^(3/2) = √(28.5³) = 152.15 years.",
    "formula": "T = a^(3/2) = (28.5)^(1.5) = 152.15 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 64",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (28.5)^(1.5) = 152.15 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 152.15 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (28.5)^(1.5) = 152.15 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-065",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 29.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 156.17 Earth years"
      },
      {
        "label": "B",
        "text": "T = 58.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 29.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 841.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (29.0)^(3/2) = √(29.0³) = 156.17 years.",
    "formula": "T = a^(3/2) = (29.0)^(1.5) = 156.17 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 65",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (29.0)^(1.5) = 156.17 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 156.17 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (29.0)^(1.5) = 156.17 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-066",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 29.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 160.23 Earth years"
      },
      {
        "label": "B",
        "text": "T = 59.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 29.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 870.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (29.5)^(3/2) = √(29.5³) = 160.23 years.",
    "formula": "T = a^(3/2) = (29.5)^(1.5) = 160.23 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 66",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (29.5)^(1.5) = 160.23 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 160.23 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (29.5)^(1.5) = 160.23 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-067",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 30.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 164.32 Earth years"
      },
      {
        "label": "B",
        "text": "T = 60.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 30.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 900.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (30.0)^(3/2) = √(30.0³) = 164.32 years.",
    "formula": "T = a^(3/2) = (30.0)^(1.5) = 164.32 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 67",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (30.0)^(1.5) = 164.32 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 164.32 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (30.0)^(1.5) = 164.32 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-068",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 30.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 168.44 Earth years"
      },
      {
        "label": "B",
        "text": "T = 61.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 30.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 930.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (30.5)^(3/2) = √(30.5³) = 168.44 years.",
    "formula": "T = a^(3/2) = (30.5)^(1.5) = 168.44 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 68",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (30.5)^(1.5) = 168.44 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 168.44 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (30.5)^(1.5) = 168.44 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-069",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 31.0 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 172.60 Earth years"
      },
      {
        "label": "B",
        "text": "T = 62.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 31.0 Earth years"
      },
      {
        "label": "D",
        "text": "T = 961.00 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (31.0)^(3/2) = √(31.0³) = 172.60 years.",
    "formula": "T = a^(3/2) = (31.0)^(1.5) = 172.60 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 69",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (31.0)^(1.5) = 172.60 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 172.60 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (31.0)^(1.5) = 172.60 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-E-070",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "An exoplanet revolves around a star identical to the Sun with a semi-major axis a = 31.5 AU (where 1 AU is Earth's orbital radius). What is the orbital period T of this exoplanet in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "T = 176.79 Earth years"
      },
      {
        "label": "B",
        "text": "T = 63.00 Earth years"
      },
      {
        "label": "C",
        "text": "T = 31.5 Earth years"
      },
      {
        "label": "D",
        "text": "T = 992.25 Earth years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply T² = a³: T = (31.5)^(3/2) = √(31.5³) = 176.79 years.",
    "formula": "T = a^(3/2) = (31.5)^(1.5) = 176.79 yr",
    "stepByStep": {
      "given": "Orbital parameters for KLP Easy Question 70",
      "asked": "Orbital period or velocity relation",
      "formula": "T = a^(3/2) = (31.5)^(1.5) = 176.79 yr",
      "substitution": "Substitute semi-major axis into Kepler's harmonic law",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 176.79 Earth years",
      "keyTakeaway": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU).",
      "commonTrap": "Multiplying by 3/2 instead of raising to the power 3/2."
    },
    "explanation": "Orbital period in years for a solar-mass star is simply a^(3/2) in astronomical units (AU). Formulated via T = a^(3/2) = (31.5)^(1.5) = 176.79 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-001",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.055. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 1.116"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.055"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 1.058"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.055) / (1 - 0.055).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.116",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 1",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.116",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 1.116",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 1.116.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-002",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.090. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 1.198"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.090"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 1.099"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.090) / (1 - 0.090).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.198",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 2",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.198",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 1.198",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 1.198.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-003",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.125. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 1.286"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.125"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 1.143"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.125) / (1 - 0.125).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.286",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 3",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.286",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 1.286",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 1.286.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-004",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.160. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 1.381"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.160"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 1.190"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.160) / (1 - 0.160).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.381",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 4",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.381",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 1.381",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 1.381.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-005",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.195. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 1.484"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.195"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 1.242"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.195) / (1 - 0.195).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.484",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 5",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.484",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 1.484",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 1.484.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-006",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.230. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 1.597"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.230"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 1.299"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.230) / (1 - 0.230).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.597",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 6",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.597",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 1.597",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 1.597.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-007",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.265. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 1.721"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.265"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 1.361"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.265) / (1 - 0.265).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.721",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 7",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.721",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 1.721",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 1.721.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-008",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.300. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 1.857"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.300"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 1.429"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.300) / (1 - 0.300).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.857",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 8",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 1.857",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 1.857",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 1.857.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-009",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.335. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 2.008"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.335"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 1.504"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.335) / (1 - 0.335).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 2.008",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 9",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 2.008",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 2.008",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 2.008.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-010",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.370. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 2.175"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.370"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 1.587"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.370) / (1 - 0.370).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 2.175",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 10",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 2.175",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 2.175",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 2.175.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-011",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.405. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 2.361"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.405"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 1.681"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.405) / (1 - 0.405).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 2.361",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 11",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 2.361",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 2.361",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 2.361.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-012",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.440. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 2.571"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.440"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 1.786"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.440) / (1 - 0.440).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 2.571",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 12",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 2.571",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 2.571",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 2.571.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-013",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.475. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 2.810"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.475"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 1.905"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.475) / (1 - 0.475).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 2.810",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 13",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 2.810",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 2.810",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 2.810.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-014",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.510. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 3.082"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.510"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 2.041"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.510) / (1 - 0.510).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 3.082",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 14",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 3.082",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 3.082",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 3.082.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-015",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.545. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 3.396"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.545"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 2.198"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.545) / (1 - 0.545).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 3.396",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 15",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 3.396",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 3.396",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 3.396.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-016",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.580. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 3.762"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.580"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 2.381"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.580) / (1 - 0.580).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 3.762",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 16",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 3.762",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 3.762",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 3.762.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-017",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.615. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 4.195"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.615"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 2.597"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.615) / (1 - 0.615).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 4.195",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 17",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 4.195",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 4.195",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 4.195.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-018",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.650. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 4.714"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.650"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 2.857"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.650) / (1 - 0.650).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 4.714",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 18",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 4.714",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 4.714",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 4.714.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-019",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.685. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 5.349"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.685"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 3.175"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.685) / (1 - 0.685).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 5.349",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 19",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 5.349",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 5.349",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 5.349.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-020",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.720. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 6.143"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.720"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 3.571"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.720) / (1 - 0.720).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 6.143",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 20",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 6.143",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 6.143",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 6.143.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-021",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.755. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 7.163"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.755"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 4.082"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.755) / (1 - 0.755).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 7.163",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 21",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 7.163",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 7.163",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 7.163.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-022",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.790. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 8.524"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.790"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 4.762"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.790) / (1 - 0.790).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 8.524",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 22",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 8.524",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 8.524",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 8.524.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-023",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.825. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 10.429"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.825"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 5.714"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.825) / (1 - 0.825).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 10.429",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 23",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 10.429",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 10.429",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 10.429.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-024",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.860. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 13.286"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.860"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 7.143"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.860) / (1 - 0.860).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 13.286",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 24",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 13.286",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 13.286",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 13.286.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-025",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A planet moves along an elliptical orbit with an orbital eccentricity e = 0.895. What is the exact ratio of the planet's orbital speed at perihelion to its speed at aphelion (v_p / v_a)?",
    "options": [
      {
        "label": "A",
        "text": "v_p / v_a = 18.048"
      },
      {
        "label": "B",
        "text": "v_p / v_a = 1.895"
      },
      {
        "label": "C",
        "text": "v_p / v_a = 9.524"
      },
      {
        "label": "D",
        "text": "v_p / v_a = 1.000"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservation of angular momentum: r_p · v_p = r_a · v_a ⇒ v_p / v_a = r_a / r_p = a(1 + e) / [a(1 - e)] = (1 + 0.895) / (1 - 0.895).",
    "formula": "v_p / v_a = (1 + e) / (1 - e) = 18.048",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 25",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "v_p / v_a = (1 + e) / (1 - e) = 18.048",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_p / v_a = 18.048",
      "keyTakeaway": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e).",
      "commonTrap": "Inverting the ratio (1 - e) / (1 + e)."
    },
    "explanation": "The speed ratio between perihelion and aphelion is strictly given by (1 + e) / (1 - e). Governed by v_p / v_a = (1 + e) / (1 - e) = 18.048.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-026",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 7 AU and eccentricity e = 0.32. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 6.63 AU"
      },
      {
        "label": "B",
        "text": "b = 4.76 AU"
      },
      {
        "label": "C",
        "text": "b = 7 AU"
      },
      {
        "label": "D",
        "text": "b = 3.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 7 · √(1 - 0.32²).",
    "formula": "b = a √(1 - e²) = 7 · √(1 - 0.1024) = 6.63 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 26",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 7 · √(1 - 0.1024) = 6.63 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 6.63 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 7 · √(1 - 0.1024) = 6.63 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-027",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 9 AU and eccentricity e = 0.44. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 8.08 AU"
      },
      {
        "label": "B",
        "text": "b = 5.04 AU"
      },
      {
        "label": "C",
        "text": "b = 9 AU"
      },
      {
        "label": "D",
        "text": "b = 4.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 9 · √(1 - 0.44²).",
    "formula": "b = a √(1 - e²) = 9 · √(1 - 0.1936) = 8.08 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 27",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 9 · √(1 - 0.1936) = 8.08 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 8.08 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 9 · √(1 - 0.1936) = 8.08 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-028",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 11 AU and eccentricity e = 0.56. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 9.11 AU"
      },
      {
        "label": "B",
        "text": "b = 4.84 AU"
      },
      {
        "label": "C",
        "text": "b = 11 AU"
      },
      {
        "label": "D",
        "text": "b = 5.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 11 · √(1 - 0.56²).",
    "formula": "b = a √(1 - e²) = 11 · √(1 - 0.31360000000000005) = 9.11 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 28",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 11 · √(1 - 0.31360000000000005) = 9.11 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 9.11 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 11 · √(1 - 0.31360000000000005) = 9.11 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-029",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 13 AU and eccentricity e = 0.68. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 9.53 AU"
      },
      {
        "label": "B",
        "text": "b = 4.16 AU"
      },
      {
        "label": "C",
        "text": "b = 13 AU"
      },
      {
        "label": "D",
        "text": "b = 6.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 13 · √(1 - 0.68²).",
    "formula": "b = a √(1 - e²) = 13 · √(1 - 0.4624000000000001) = 9.53 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 29",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 13 · √(1 - 0.4624000000000001) = 9.53 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 9.53 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 13 · √(1 - 0.4624000000000001) = 9.53 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-030",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 15 AU and eccentricity e = 0.20. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 14.70 AU"
      },
      {
        "label": "B",
        "text": "b = 12.00 AU"
      },
      {
        "label": "C",
        "text": "b = 15 AU"
      },
      {
        "label": "D",
        "text": "b = 7.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 15 · √(1 - 0.20²).",
    "formula": "b = a √(1 - e²) = 15 · √(1 - 0.04000000000000001) = 14.70 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 30",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 15 · √(1 - 0.04000000000000001) = 14.70 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 14.70 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 15 · √(1 - 0.04000000000000001) = 14.70 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-031",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 17 AU and eccentricity e = 0.32. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 16.11 AU"
      },
      {
        "label": "B",
        "text": "b = 11.56 AU"
      },
      {
        "label": "C",
        "text": "b = 17 AU"
      },
      {
        "label": "D",
        "text": "b = 8.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 17 · √(1 - 0.32²).",
    "formula": "b = a √(1 - e²) = 17 · √(1 - 0.1024) = 16.11 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 31",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 17 · √(1 - 0.1024) = 16.11 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 16.11 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 17 · √(1 - 0.1024) = 16.11 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-032",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 19 AU and eccentricity e = 0.44. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 17.06 AU"
      },
      {
        "label": "B",
        "text": "b = 10.64 AU"
      },
      {
        "label": "C",
        "text": "b = 19 AU"
      },
      {
        "label": "D",
        "text": "b = 9.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 19 · √(1 - 0.44²).",
    "formula": "b = a √(1 - e²) = 19 · √(1 - 0.1936) = 17.06 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 32",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 19 · √(1 - 0.1936) = 17.06 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 17.06 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 19 · √(1 - 0.1936) = 17.06 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-033",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 21 AU and eccentricity e = 0.56. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 17.40 AU"
      },
      {
        "label": "B",
        "text": "b = 9.24 AU"
      },
      {
        "label": "C",
        "text": "b = 21 AU"
      },
      {
        "label": "D",
        "text": "b = 10.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 21 · √(1 - 0.56²).",
    "formula": "b = a √(1 - e²) = 21 · √(1 - 0.31360000000000005) = 17.40 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 33",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 21 · √(1 - 0.31360000000000005) = 17.40 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 17.40 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 21 · √(1 - 0.31360000000000005) = 17.40 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-034",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 23 AU and eccentricity e = 0.68. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 16.86 AU"
      },
      {
        "label": "B",
        "text": "b = 7.36 AU"
      },
      {
        "label": "C",
        "text": "b = 23 AU"
      },
      {
        "label": "D",
        "text": "b = 11.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 23 · √(1 - 0.68²).",
    "formula": "b = a √(1 - e²) = 23 · √(1 - 0.4624000000000001) = 16.86 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 34",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 23 · √(1 - 0.4624000000000001) = 16.86 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 16.86 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 23 · √(1 - 0.4624000000000001) = 16.86 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-035",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 25 AU and eccentricity e = 0.20. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 24.49 AU"
      },
      {
        "label": "B",
        "text": "b = 20.00 AU"
      },
      {
        "label": "C",
        "text": "b = 25 AU"
      },
      {
        "label": "D",
        "text": "b = 12.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 25 · √(1 - 0.20²).",
    "formula": "b = a √(1 - e²) = 25 · √(1 - 0.04000000000000001) = 24.49 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 35",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 25 · √(1 - 0.04000000000000001) = 24.49 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 24.49 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 25 · √(1 - 0.04000000000000001) = 24.49 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-036",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 27 AU and eccentricity e = 0.32. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 25.58 AU"
      },
      {
        "label": "B",
        "text": "b = 18.36 AU"
      },
      {
        "label": "C",
        "text": "b = 27 AU"
      },
      {
        "label": "D",
        "text": "b = 13.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 27 · √(1 - 0.32²).",
    "formula": "b = a √(1 - e²) = 27 · √(1 - 0.1024) = 25.58 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 36",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 27 · √(1 - 0.1024) = 25.58 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 25.58 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 27 · √(1 - 0.1024) = 25.58 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-037",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 29 AU and eccentricity e = 0.44. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 26.04 AU"
      },
      {
        "label": "B",
        "text": "b = 16.24 AU"
      },
      {
        "label": "C",
        "text": "b = 29 AU"
      },
      {
        "label": "D",
        "text": "b = 14.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 29 · √(1 - 0.44²).",
    "formula": "b = a √(1 - e²) = 29 · √(1 - 0.1936) = 26.04 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 37",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 29 · √(1 - 0.1936) = 26.04 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 26.04 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 29 · √(1 - 0.1936) = 26.04 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-038",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 31 AU and eccentricity e = 0.56. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 25.68 AU"
      },
      {
        "label": "B",
        "text": "b = 13.64 AU"
      },
      {
        "label": "C",
        "text": "b = 31 AU"
      },
      {
        "label": "D",
        "text": "b = 15.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 31 · √(1 - 0.56²).",
    "formula": "b = a √(1 - e²) = 31 · √(1 - 0.31360000000000005) = 25.68 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 38",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 31 · √(1 - 0.31360000000000005) = 25.68 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 25.68 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 31 · √(1 - 0.31360000000000005) = 25.68 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-039",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 33 AU and eccentricity e = 0.68. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 24.20 AU"
      },
      {
        "label": "B",
        "text": "b = 10.56 AU"
      },
      {
        "label": "C",
        "text": "b = 33 AU"
      },
      {
        "label": "D",
        "text": "b = 16.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 33 · √(1 - 0.68²).",
    "formula": "b = a √(1 - e²) = 33 · √(1 - 0.4624000000000001) = 24.20 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 39",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 33 · √(1 - 0.4624000000000001) = 24.20 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 24.20 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 33 · √(1 - 0.4624000000000001) = 24.20 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-040",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 35 AU and eccentricity e = 0.20. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 34.29 AU"
      },
      {
        "label": "B",
        "text": "b = 28.00 AU"
      },
      {
        "label": "C",
        "text": "b = 35 AU"
      },
      {
        "label": "D",
        "text": "b = 17.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 35 · √(1 - 0.20²).",
    "formula": "b = a √(1 - e²) = 35 · √(1 - 0.04000000000000001) = 34.29 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 40",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 35 · √(1 - 0.04000000000000001) = 34.29 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 34.29 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 35 · √(1 - 0.04000000000000001) = 34.29 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-041",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 37 AU and eccentricity e = 0.32. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 35.05 AU"
      },
      {
        "label": "B",
        "text": "b = 25.16 AU"
      },
      {
        "label": "C",
        "text": "b = 37 AU"
      },
      {
        "label": "D",
        "text": "b = 18.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 37 · √(1 - 0.32²).",
    "formula": "b = a √(1 - e²) = 37 · √(1 - 0.1024) = 35.05 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 41",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 37 · √(1 - 0.1024) = 35.05 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 35.05 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 37 · √(1 - 0.1024) = 35.05 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-042",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 39 AU and eccentricity e = 0.44. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 35.02 AU"
      },
      {
        "label": "B",
        "text": "b = 21.84 AU"
      },
      {
        "label": "C",
        "text": "b = 39 AU"
      },
      {
        "label": "D",
        "text": "b = 19.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 39 · √(1 - 0.44²).",
    "formula": "b = a √(1 - e²) = 39 · √(1 - 0.1936) = 35.02 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 42",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 39 · √(1 - 0.1936) = 35.02 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 35.02 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 39 · √(1 - 0.1936) = 35.02 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-043",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 41 AU and eccentricity e = 0.56. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 33.97 AU"
      },
      {
        "label": "B",
        "text": "b = 18.04 AU"
      },
      {
        "label": "C",
        "text": "b = 41 AU"
      },
      {
        "label": "D",
        "text": "b = 20.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 41 · √(1 - 0.56²).",
    "formula": "b = a √(1 - e²) = 41 · √(1 - 0.31360000000000005) = 33.97 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 43",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 41 · √(1 - 0.31360000000000005) = 33.97 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 33.97 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 41 · √(1 - 0.31360000000000005) = 33.97 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-044",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 43 AU and eccentricity e = 0.68. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 31.53 AU"
      },
      {
        "label": "B",
        "text": "b = 13.76 AU"
      },
      {
        "label": "C",
        "text": "b = 43 AU"
      },
      {
        "label": "D",
        "text": "b = 21.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 43 · √(1 - 0.68²).",
    "formula": "b = a √(1 - e²) = 43 · √(1 - 0.4624000000000001) = 31.53 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 44",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 43 · √(1 - 0.4624000000000001) = 31.53 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 31.53 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 43 · √(1 - 0.4624000000000001) = 31.53 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-045",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 45 AU and eccentricity e = 0.20. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 44.09 AU"
      },
      {
        "label": "B",
        "text": "b = 36.00 AU"
      },
      {
        "label": "C",
        "text": "b = 45 AU"
      },
      {
        "label": "D",
        "text": "b = 22.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 45 · √(1 - 0.20²).",
    "formula": "b = a √(1 - e²) = 45 · √(1 - 0.04000000000000001) = 44.09 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 45",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 45 · √(1 - 0.04000000000000001) = 44.09 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 44.09 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 45 · √(1 - 0.04000000000000001) = 44.09 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-046",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 47 AU and eccentricity e = 0.32. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 44.53 AU"
      },
      {
        "label": "B",
        "text": "b = 31.96 AU"
      },
      {
        "label": "C",
        "text": "b = 47 AU"
      },
      {
        "label": "D",
        "text": "b = 23.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 47 · √(1 - 0.32²).",
    "formula": "b = a √(1 - e²) = 47 · √(1 - 0.1024) = 44.53 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 46",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 47 · √(1 - 0.1024) = 44.53 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 44.53 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 47 · √(1 - 0.1024) = 44.53 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-047",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 49 AU and eccentricity e = 0.44. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 44.00 AU"
      },
      {
        "label": "B",
        "text": "b = 27.44 AU"
      },
      {
        "label": "C",
        "text": "b = 49 AU"
      },
      {
        "label": "D",
        "text": "b = 24.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 49 · √(1 - 0.44²).",
    "formula": "b = a √(1 - e²) = 49 · √(1 - 0.1936) = 44.00 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 47",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 49 · √(1 - 0.1936) = 44.00 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 44.00 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 49 · √(1 - 0.1936) = 44.00 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-048",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 51 AU and eccentricity e = 0.56. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 42.25 AU"
      },
      {
        "label": "B",
        "text": "b = 22.44 AU"
      },
      {
        "label": "C",
        "text": "b = 51 AU"
      },
      {
        "label": "D",
        "text": "b = 25.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 51 · √(1 - 0.56²).",
    "formula": "b = a √(1 - e²) = 51 · √(1 - 0.31360000000000005) = 42.25 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 48",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 51 · √(1 - 0.31360000000000005) = 42.25 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 42.25 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 51 · √(1 - 0.31360000000000005) = 42.25 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-049",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 53 AU and eccentricity e = 0.68. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 38.86 AU"
      },
      {
        "label": "B",
        "text": "b = 16.96 AU"
      },
      {
        "label": "C",
        "text": "b = 53 AU"
      },
      {
        "label": "D",
        "text": "b = 26.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 53 · √(1 - 0.68²).",
    "formula": "b = a √(1 - e²) = 53 · √(1 - 0.4624000000000001) = 38.86 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 49",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 53 · √(1 - 0.4624000000000001) = 38.86 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 38.86 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 53 · √(1 - 0.4624000000000001) = 38.86 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-050",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "An asteroid moves in an elliptical orbit around the Sun with semi-major axis a = 55 AU and eccentricity e = 0.20. What is the length of its semi-minor axis b in AU?",
    "options": [
      {
        "label": "A",
        "text": "b = 53.89 AU"
      },
      {
        "label": "B",
        "text": "b = 44.00 AU"
      },
      {
        "label": "C",
        "text": "b = 55 AU"
      },
      {
        "label": "D",
        "text": "b = 27.50 AU"
      }
    ],
    "correctAnswer": "A",
    "hint": "b = a √(1 - e²) = 55 · √(1 - 0.20²).",
    "formula": "b = a √(1 - e²) = 55 · √(1 - 0.04000000000000001) = 53.89 AU",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 50",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "b = a √(1 - e²) = 55 · √(1 - 0.04000000000000001) = 53.89 AU",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: b = 53.89 AU",
      "keyTakeaway": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²).",
      "commonTrap": "Using perihelion distance a(1 - e) in place of semi-minor axis."
    },
    "explanation": "The semi-minor axis b is related to semi-major axis by b = a √(1 - e²). Governed by b = a √(1 - e²) = 55 · √(1 - 0.04000000000000001) = 53.89 AU.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-051",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "If the semi-major axis of a satellite's orbit increases by 0.75%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 1.125%"
      },
      {
        "label": "B",
        "text": "Increases by 0.75%"
      },
      {
        "label": "C",
        "text": "Increases by 1.500%"
      },
      {
        "label": "D",
        "text": "Increases by 2.250%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 0.75%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 0.75% = 1.125%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 51",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 0.75% = 1.125%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 1.125%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 0.75% = 1.125%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-052",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "If the semi-major axis of a satellite's orbit increases by 1.00%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 1.500%"
      },
      {
        "label": "B",
        "text": "Increases by 1.00%"
      },
      {
        "label": "C",
        "text": "Increases by 2.000%"
      },
      {
        "label": "D",
        "text": "Increases by 3.000%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 1.00%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 1.00% = 1.500%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 52",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 1.00% = 1.500%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 1.500%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 1.00% = 1.500%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-053",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "If the semi-major axis of a satellite's orbit increases by 1.25%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 1.875%"
      },
      {
        "label": "B",
        "text": "Increases by 1.25%"
      },
      {
        "label": "C",
        "text": "Increases by 2.500%"
      },
      {
        "label": "D",
        "text": "Increases by 3.750%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 1.25%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 1.25% = 1.875%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 53",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 1.25% = 1.875%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 1.875%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 1.25% = 1.875%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-054",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "If the semi-major axis of a satellite's orbit increases by 1.50%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 2.250%"
      },
      {
        "label": "B",
        "text": "Increases by 1.50%"
      },
      {
        "label": "C",
        "text": "Increases by 3.000%"
      },
      {
        "label": "D",
        "text": "Increases by 4.500%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 1.50%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 1.50% = 2.250%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 54",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 1.50% = 2.250%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 2.250%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 1.50% = 2.250%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-055",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "If the semi-major axis of a satellite's orbit increases by 1.75%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 2.625%"
      },
      {
        "label": "B",
        "text": "Increases by 1.75%"
      },
      {
        "label": "C",
        "text": "Increases by 3.500%"
      },
      {
        "label": "D",
        "text": "Increases by 5.250%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 1.75%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 1.75% = 2.625%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 55",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 1.75% = 2.625%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 2.625%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 1.75% = 2.625%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-056",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "If the semi-major axis of a satellite's orbit increases by 2.00%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 3.000%"
      },
      {
        "label": "B",
        "text": "Increases by 2.00%"
      },
      {
        "label": "C",
        "text": "Increases by 4.000%"
      },
      {
        "label": "D",
        "text": "Increases by 6.000%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 2.00%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 2.00% = 3.000%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 56",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 2.00% = 3.000%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 3.000%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 2.00% = 3.000%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-057",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "If the semi-major axis of a satellite's orbit increases by 2.25%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 3.375%"
      },
      {
        "label": "B",
        "text": "Increases by 2.25%"
      },
      {
        "label": "C",
        "text": "Increases by 4.500%"
      },
      {
        "label": "D",
        "text": "Increases by 6.750%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 2.25%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 2.25% = 3.375%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 57",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 2.25% = 3.375%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 3.375%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 2.25% = 3.375%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-058",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "If the semi-major axis of a satellite's orbit increases by 2.50%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 3.750%"
      },
      {
        "label": "B",
        "text": "Increases by 2.50%"
      },
      {
        "label": "C",
        "text": "Increases by 5.000%"
      },
      {
        "label": "D",
        "text": "Increases by 7.500%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 2.50%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 2.50% = 3.750%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 58",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 2.50% = 3.750%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 3.750%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 2.50% = 3.750%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-059",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "If the semi-major axis of a satellite's orbit increases by 2.75%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 4.125%"
      },
      {
        "label": "B",
        "text": "Increases by 2.75%"
      },
      {
        "label": "C",
        "text": "Increases by 5.500%"
      },
      {
        "label": "D",
        "text": "Increases by 8.250%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 2.75%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 2.75% = 4.125%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 59",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 2.75% = 4.125%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 4.125%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 2.75% = 4.125%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-060",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "If the semi-major axis of a satellite's orbit increases by 3.00%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 4.500%"
      },
      {
        "label": "B",
        "text": "Increases by 3.00%"
      },
      {
        "label": "C",
        "text": "Increases by 6.000%"
      },
      {
        "label": "D",
        "text": "Increases by 9.000%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 3.00%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 3.00% = 4.500%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 60",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 3.00% = 4.500%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 4.500%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 3.00% = 4.500%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-061",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "If the semi-major axis of a satellite's orbit increases by 3.25%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 4.875%"
      },
      {
        "label": "B",
        "text": "Increases by 3.25%"
      },
      {
        "label": "C",
        "text": "Increases by 6.500%"
      },
      {
        "label": "D",
        "text": "Increases by 9.750%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 3.25%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 3.25% = 4.875%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 61",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 3.25% = 4.875%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 4.875%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 3.25% = 4.875%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-062",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "If the semi-major axis of a satellite's orbit increases by 3.50%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 5.250%"
      },
      {
        "label": "B",
        "text": "Increases by 3.50%"
      },
      {
        "label": "C",
        "text": "Increases by 7.000%"
      },
      {
        "label": "D",
        "text": "Increases by 10.500%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 3.50%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 3.50% = 5.250%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 62",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 3.50% = 5.250%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 5.250%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 3.50% = 5.250%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-063",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "If the semi-major axis of a satellite's orbit increases by 3.75%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 5.625%"
      },
      {
        "label": "B",
        "text": "Increases by 3.75%"
      },
      {
        "label": "C",
        "text": "Increases by 7.500%"
      },
      {
        "label": "D",
        "text": "Increases by 11.250%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 3.75%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 3.75% = 5.625%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 63",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 3.75% = 5.625%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 5.625%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 3.75% = 5.625%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-064",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "If the semi-major axis of a satellite's orbit increases by 4.00%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 6.000%"
      },
      {
        "label": "B",
        "text": "Increases by 4.00%"
      },
      {
        "label": "C",
        "text": "Increases by 8.000%"
      },
      {
        "label": "D",
        "text": "Increases by 12.000%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 4.00%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 4.00% = 6.000%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 64",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 4.00% = 6.000%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 6.000%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 4.00% = 6.000%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-065",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "If the semi-major axis of a satellite's orbit increases by 4.25%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 6.375%"
      },
      {
        "label": "B",
        "text": "Increases by 4.25%"
      },
      {
        "label": "C",
        "text": "Increases by 8.500%"
      },
      {
        "label": "D",
        "text": "Increases by 12.750%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 4.25%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 4.25% = 6.375%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 65",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 4.25% = 6.375%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 6.375%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 4.25% = 6.375%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-066",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "If the semi-major axis of a satellite's orbit increases by 4.50%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 6.750%"
      },
      {
        "label": "B",
        "text": "Increases by 4.50%"
      },
      {
        "label": "C",
        "text": "Increases by 9.000%"
      },
      {
        "label": "D",
        "text": "Increases by 13.500%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 4.50%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 4.50% = 6.750%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 66",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 4.50% = 6.750%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 6.750%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 4.50% = 6.750%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-067",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "If the semi-major axis of a satellite's orbit increases by 4.75%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 7.125%"
      },
      {
        "label": "B",
        "text": "Increases by 4.75%"
      },
      {
        "label": "C",
        "text": "Increases by 9.500%"
      },
      {
        "label": "D",
        "text": "Increases by 14.250%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 4.75%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 4.75% = 7.125%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 67",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 4.75% = 7.125%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 7.125%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 4.75% = 7.125%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-068",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "If the semi-major axis of a satellite's orbit increases by 5.00%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 7.500%"
      },
      {
        "label": "B",
        "text": "Increases by 5.00%"
      },
      {
        "label": "C",
        "text": "Increases by 10.000%"
      },
      {
        "label": "D",
        "text": "Increases by 15.000%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 5.00%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 5.00% = 7.500%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 68",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 5.00% = 7.500%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 7.500%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 5.00% = 7.500%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-069",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "If the semi-major axis of a satellite's orbit increases by 5.25%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 7.875%"
      },
      {
        "label": "B",
        "text": "Increases by 5.25%"
      },
      {
        "label": "C",
        "text": "Increases by 10.500%"
      },
      {
        "label": "D",
        "text": "Increases by 15.750%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 5.25%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 5.25% = 7.875%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 69",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 5.25% = 7.875%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 7.875%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 5.25% = 7.875%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-M-070",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "If the semi-major axis of a satellite's orbit increases by 5.50%, what is the approximate percentage increase in its orbital period T?",
    "options": [
      {
        "label": "A",
        "text": "Increases by 8.250%"
      },
      {
        "label": "B",
        "text": "Increases by 5.50%"
      },
      {
        "label": "C",
        "text": "Increases by 11.000%"
      },
      {
        "label": "D",
        "text": "Increases by 16.500%"
      }
    ],
    "correctAnswer": "A",
    "hint": "Differentiate T² = C a³: 2 (ΔT/T) = 3 (Δa/a) ⇒ ΔT/T = 1.5 · (Δa/a) = 1.5 × 5.50%.",
    "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 5.50% = 8.250%",
    "stepByStep": {
      "given": "Orbital parameters for KLP Medium Question 70",
      "asked": "Speed ratio, semi-minor axis, or percentage variation",
      "formula": "ΔT / T = 1.5 · (Δa / a) = 1.5 · 5.50% = 8.250%",
      "substitution": "Substitute eccentricity or semi-major axis into elliptical relations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by 8.250%",
      "keyTakeaway": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis.",
      "commonTrap": "Assuming a 1:1 percentage change."
    },
    "explanation": "For small percentage changes, orbital period changes by 1.5 times the change in semi-major axis. Governed by ΔT / T = 1.5 · (Δa / a) = 1.5 · 5.50% = 8.250%.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-001",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 12 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 7.2 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.1944 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (12 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (7.2 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (7.2 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(7.2×10⁶) - 1/(12×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/7.2 - 1/12) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 1",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/7.2 - 1/12) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.1944 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/7.2 - 1/12) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-002",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 14 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 8.4 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.1667 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (14 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (8.4 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (8.4 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(8.4×10⁶) - 1/(14×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/8.4 - 1/14) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 2",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/8.4 - 1/14) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.1667 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/8.4 - 1/14) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-003",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 16 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 9.6 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.1458 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (16 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (9.6 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (9.6 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(9.6×10⁶) - 1/(16×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/9.6 - 1/16) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 3",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/9.6 - 1/16) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.1458 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/9.6 - 1/16) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-004",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 18 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 10.8 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.1296 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (18 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (10.8 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (10.8 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(10.8×10⁶) - 1/(18×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/10.8 - 1/18) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 4",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/10.8 - 1/18) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.1296 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/10.8 - 1/18) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-005",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 20 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 12.0 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.1167 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (20 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (12.0 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (12.0 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(12.0×10⁶) - 1/(20×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/12.0 - 1/20) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 5",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/12.0 - 1/20) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.1167 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/12.0 - 1/20) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-006",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 22 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 13.2 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.1061 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (22 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (13.2 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (13.2 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(13.2×10⁶) - 1/(22×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/13.2 - 1/22) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 6",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/13.2 - 1/22) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.1061 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/13.2 - 1/22) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-007",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 24 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 14.4 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0972 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (24 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (14.4 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (14.4 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(14.4×10⁶) - 1/(24×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/14.4 - 1/24) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 7",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/14.4 - 1/24) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0972 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/14.4 - 1/24) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-008",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 26 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 15.6 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0897 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (26 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (15.6 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (15.6 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(15.6×10⁶) - 1/(26×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/15.6 - 1/26) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 8",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/15.6 - 1/26) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0897 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/15.6 - 1/26) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-009",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 28 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 16.8 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0833 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (28 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (16.8 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (16.8 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(16.8×10⁶) - 1/(28×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/16.8 - 1/28) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 9",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/16.8 - 1/28) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0833 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/16.8 - 1/28) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-010",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 30 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 18.0 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0778 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (30 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (18.0 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (18.0 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(18.0×10⁶) - 1/(30×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/18.0 - 1/30) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 10",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/18.0 - 1/30) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0778 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/18.0 - 1/30) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-011",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 32 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 19.2 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0729 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (32 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (19.2 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (19.2 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(19.2×10⁶) - 1/(32×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/19.2 - 1/32) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 11",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/19.2 - 1/32) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0729 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/19.2 - 1/32) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-012",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 34 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 20.4 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0686 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (34 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (20.4 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (20.4 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(20.4×10⁶) - 1/(34×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/20.4 - 1/34) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 12",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/20.4 - 1/34) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0686 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/20.4 - 1/34) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-013",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 36 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 21.6 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0648 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (36 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (21.6 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (21.6 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(21.6×10⁶) - 1/(36×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/21.6 - 1/36) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 13",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/21.6 - 1/36) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0648 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/21.6 - 1/36) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-014",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 38 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 22.8 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0614 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (38 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (22.8 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (22.8 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(22.8×10⁶) - 1/(38×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/22.8 - 1/38) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 14",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/22.8 - 1/38) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0614 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/22.8 - 1/38) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-015",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 40 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 24.0 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0583 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (40 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (24.0 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (24.0 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(24.0×10⁶) - 1/(40×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/24.0 - 1/40) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 15",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/24.0 - 1/40) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0583 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/24.0 - 1/40) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-016",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 42 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 25.2 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0556 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (42 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (25.2 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (25.2 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(25.2×10⁶) - 1/(42×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/25.2 - 1/42) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 16",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/25.2 - 1/42) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0556 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/25.2 - 1/42) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-017",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 44 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 26.4 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0530 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (44 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (26.4 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (26.4 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(26.4×10⁶) - 1/(44×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/26.4 - 1/44) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 17",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/26.4 - 1/44) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0530 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/26.4 - 1/44) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-018",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 46 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 27.6 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0507 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (46 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (27.6 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (27.6 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(27.6×10⁶) - 1/(46×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/27.6 - 1/46) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 18",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/27.6 - 1/46) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0507 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/27.6 - 1/46) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-019",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 48 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 28.8 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0486 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (48 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (28.8 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (28.8 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(28.8×10⁶) - 1/(48×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/28.8 - 1/48) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 19",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/28.8 - 1/48) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0486 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/28.8 - 1/48) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-020",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 50 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 30.0 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0467 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (50 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (30.0 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (30.0 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(30.0×10⁶) - 1/(50×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/30.0 - 1/50) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 20",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/30.0 - 1/50) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0467 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/30.0 - 1/50) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-021",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 52 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 31.2 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0449 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (52 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (31.2 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (31.2 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(31.2×10⁶) - 1/(52×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/31.2 - 1/52) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 21",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/31.2 - 1/52) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0449 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/31.2 - 1/52) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-022",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 54 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 32.4 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0432 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (54 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (32.4 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (32.4 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(32.4×10⁶) - 1/(54×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/32.4 - 1/54) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 22",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/32.4 - 1/54) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0432 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/32.4 - 1/54) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-023",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 56 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 33.6 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0417 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (56 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (33.6 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (33.6 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(33.6×10⁶) - 1/(56×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/33.6 - 1/56) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 23",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/33.6 - 1/56) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0417 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/33.6 - 1/56) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-024",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 58 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 34.8 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0402 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (58 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (34.8 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (34.8 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(34.8×10⁶) - 1/(58×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/34.8 - 1/58) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 24",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/34.8 - 1/58) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0402 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/34.8 - 1/58) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-025",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spacecraft orbits a central body of mass M in an elliptical orbit of semi-major axis a = 60 × 10⁶ m. What is the spacecraft's orbital speed v when it reaches a distance r = 36.0 × 10⁶ m from the center of mass?",
    "options": [
      {
        "label": "A",
        "text": "v = √[ G M · (0.0389 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)"
      },
      {
        "label": "B",
        "text": "v = √[ G M / (60 × 10⁶) ]"
      },
      {
        "label": "C",
        "text": "v = √[ 2 G M / (36.0 × 10⁶) ]"
      },
      {
        "label": "D",
        "text": "v = √[ G M / (36.0 × 10⁶) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Use Vis-Viva equation: v² = G M (2/r - 1/a) = G M [ 2/(36.0×10⁶) - 1/(60×10⁶) ].",
    "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/36.0 - 1/60) × 10⁻⁶ ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 25",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/36.0 - 1/60) × 10⁻⁶ ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v = √[ G M · (0.0389 × 10⁻⁶ m⁻¹) ] (via Vis-Viva equation)",
      "keyTakeaway": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit.",
      "commonTrap": "Using circular orbital speed formula √(GM/r) for an elliptical trajectory."
    },
    "explanation": "The Vis-Viva equation v² = GM(2/r - 1/a) gives exact orbital speed at any radial position in a Keplerian orbit. Formulated via v² = G M (2/r - 1/a) ⇒ v = √[ G M (2/36.0 - 1/60) × 10⁻⁶ ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-026",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two stars of mass M₁ = 1 M_Sun and M₂ = 2 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (3 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (1 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (2 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (3 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 3 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 26",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 3 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (3 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 3 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-027",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two stars of mass M₁ = 2 M_Sun and M₂ = 4 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (6 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (2 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (4 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (6 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 6 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 27",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 6 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (6 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 6 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-028",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two stars of mass M₁ = 3 M_Sun and M₂ = 6 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (9 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (3 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (6 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (9 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 9 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 28",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 9 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (9 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 9 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-029",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two stars of mass M₁ = 4 M_Sun and M₂ = 8 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (12 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (4 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (8 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (12 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 12 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 29",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 12 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (12 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 12 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-030",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two stars of mass M₁ = 5 M_Sun and M₂ = 10 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (15 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (5 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (10 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (15 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 15 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 30",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 15 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (15 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 15 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-031",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two stars of mass M₁ = 6 M_Sun and M₂ = 12 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (18 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (6 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (12 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (18 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 18 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 31",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 18 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (18 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 18 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-032",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two stars of mass M₁ = 7 M_Sun and M₂ = 14 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (21 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (7 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (14 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (21 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 21 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 32",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 21 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (21 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 21 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-033",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two stars of mass M₁ = 8 M_Sun and M₂ = 16 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (24 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (8 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (16 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (24 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 24 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 33",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 24 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (24 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 24 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-034",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two stars of mass M₁ = 9 M_Sun and M₂ = 18 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (27 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (9 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (18 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (27 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 27 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 34",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 27 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (27 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 27 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-035",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two stars of mass M₁ = 10 M_Sun and M₂ = 20 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (30 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (10 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (20 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (30 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 30 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 35",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 30 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (30 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 30 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-036",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two stars of mass M₁ = 11 M_Sun and M₂ = 22 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (33 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (11 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (22 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (33 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 33 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 36",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 33 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (33 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 33 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-037",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two stars of mass M₁ = 12 M_Sun and M₂ = 24 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (36 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (12 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (24 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (36 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 36 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 37",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 36 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (36 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 36 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-038",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two stars of mass M₁ = 13 M_Sun and M₂ = 26 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (39 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (13 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (26 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (39 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 39 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 38",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 39 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (39 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 39 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-039",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two stars of mass M₁ = 14 M_Sun and M₂ = 28 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (42 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (14 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (28 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (42 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 42 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 39",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 42 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (42 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 42 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-040",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two stars of mass M₁ = 15 M_Sun and M₂ = 30 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (45 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (15 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (30 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (45 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 45 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 40",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 45 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (45 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 45 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-041",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two stars of mass M₁ = 16 M_Sun and M₂ = 32 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (48 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (16 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (32 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (48 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 48 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 41",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 48 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (48 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 48 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-042",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two stars of mass M₁ = 17 M_Sun and M₂ = 34 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (51 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (17 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (34 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (51 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 51 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 42",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 51 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (51 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 51 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-043",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two stars of mass M₁ = 18 M_Sun and M₂ = 36 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (54 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (18 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (36 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (54 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 54 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 43",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 54 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (54 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 54 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-044",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two stars of mass M₁ = 19 M_Sun and M₂ = 38 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (57 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (19 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (38 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (57 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 57 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 44",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 57 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (57 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 57 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-045",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two stars of mass M₁ = 20 M_Sun and M₂ = 40 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (60 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (20 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (40 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (60 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 60 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 45",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 60 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (60 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 60 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-046",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two stars of mass M₁ = 21 M_Sun and M₂ = 42 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (63 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (21 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (42 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (63 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 63 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 46",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 63 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (63 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 63 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-047",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two stars of mass M₁ = 22 M_Sun and M₂ = 44 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (66 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (22 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (44 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (66 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 66 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 47",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 66 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (66 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 66 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-048",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two stars of mass M₁ = 23 M_Sun and M₂ = 46 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (69 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (23 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (46 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (69 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 69 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 48",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 69 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (69 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 69 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-049",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two stars of mass M₁ = 24 M_Sun and M₂ = 48 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (72 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (24 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (48 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (72 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 72 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 49",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 72 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (72 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 72 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-050",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two stars of mass M₁ = 25 M_Sun and M₂ = 50 M_Sun move in circular orbits around their common center of mass under mutual gravitation, separated by a constant distance d. What is the orbital period T of the binary system in terms of G and total separation d?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √[ d³ / (G · (75 M_Sun)) ]"
      },
      {
        "label": "B",
        "text": "T = 2π √[ d³ / (G · (25 M_Sun)) ]"
      },
      {
        "label": "C",
        "text": "T = 2π √[ d³ / (G · (50 M_Sun)) ]"
      },
      {
        "label": "D",
        "text": "T = 2π √[ d³ / (2 G · (75 M_Sun)) ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "In two-body systems, Kepler's 3rd law uses the TOTAL mass: T² = 4π² d³ / [ G (M₁ + M₂) ].",
    "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 75 M_Sun) ]",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 50",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 75 M_Sun) ]",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √[ d³ / (G · (75 M_Sun)) ]",
      "keyTakeaway": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂.",
      "commonTrap": "Using reduced mass μ in place of total mass in the period formula."
    },
    "explanation": "Binary orbital period depends on the sum of the two masses: M_total = M₁ + M₂. Formulated via T = 2π √[ d³ / (G (M₁ + M₂)) ] = 2π √[ d³ / (G · 75 M_Sun) ].",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-051",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 1.65 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 0.763 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 1.526 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 0.825 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 1.65)/2 = 1.325 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (1.325)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.325)^(1.5) = 0.763 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 51",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.325)^(1.5) = 0.763 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 0.763 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.325)^(1.5) = 0.763 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-052",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 1.80 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 0.828 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 1.656 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 0.900 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 1.80)/2 = 1.400 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (1.400)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.400)^(1.5) = 0.828 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 52",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.400)^(1.5) = 0.828 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 0.828 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.400)^(1.5) = 0.828 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-053",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 1.95 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 0.896 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 1.792 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 0.975 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 1.95)/2 = 1.475 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (1.475)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.475)^(1.5) = 0.896 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 53",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.475)^(1.5) = 0.896 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 0.896 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.475)^(1.5) = 0.896 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-054",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 2.10 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 0.965 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 1.930 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 1.050 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 2.10)/2 = 1.550 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (1.550)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.550)^(1.5) = 0.965 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 54",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.550)^(1.5) = 0.965 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 0.965 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.550)^(1.5) = 0.965 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-055",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 2.25 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 1.036 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 2.072 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 1.125 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 2.25)/2 = 1.625 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (1.625)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.625)^(1.5) = 1.036 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 55",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.625)^(1.5) = 1.036 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 1.036 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.625)^(1.5) = 1.036 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-056",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 2.40 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 1.108 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 2.216 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 1.200 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 2.40)/2 = 1.700 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (1.700)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.700)^(1.5) = 1.108 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 56",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.700)^(1.5) = 1.108 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 1.108 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.700)^(1.5) = 1.108 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-057",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 2.55 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 1.182 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 2.364 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 1.275 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 2.55)/2 = 1.775 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (1.775)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.775)^(1.5) = 1.182 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 57",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.775)^(1.5) = 1.182 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 1.182 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.775)^(1.5) = 1.182 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-058",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 2.70 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 1.258 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 2.516 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 1.350 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 2.70)/2 = 1.850 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (1.850)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.850)^(1.5) = 1.258 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 58",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.850)^(1.5) = 1.258 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 1.258 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.850)^(1.5) = 1.258 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-059",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 2.85 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 1.335 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 2.670 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 1.425 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 2.85)/2 = 1.925 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (1.925)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.925)^(1.5) = 1.335 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 59",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.925)^(1.5) = 1.335 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 1.335 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (1.925)^(1.5) = 1.335 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-060",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 3.00 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 1.414 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 2.828 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 1.500 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 3.00)/2 = 2.000 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (2.000)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.000)^(1.5) = 1.414 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 60",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.000)^(1.5) = 1.414 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 1.414 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.000)^(1.5) = 1.414 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-061",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 3.15 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 1.495 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 2.990 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 1.575 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 3.15)/2 = 2.075 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (2.075)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.075)^(1.5) = 1.495 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 61",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.075)^(1.5) = 1.495 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 1.495 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.075)^(1.5) = 1.495 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-062",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 3.30 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 1.576 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 3.152 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 1.650 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 3.30)/2 = 2.150 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (2.150)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.150)^(1.5) = 1.576 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 62",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.150)^(1.5) = 1.576 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 1.576 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.150)^(1.5) = 1.576 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-063",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 3.45 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 1.659 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 3.318 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 1.725 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 3.45)/2 = 2.225 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (2.225)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.225)^(1.5) = 1.659 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 63",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.225)^(1.5) = 1.659 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 1.659 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.225)^(1.5) = 1.659 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-064",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 3.60 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 1.744 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 3.488 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 1.800 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 3.60)/2 = 2.300 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (2.300)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.300)^(1.5) = 1.744 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 64",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.300)^(1.5) = 1.744 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 1.744 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.300)^(1.5) = 1.744 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-065",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 3.75 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 1.830 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 3.660 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 1.875 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 3.75)/2 = 2.375 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (2.375)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.375)^(1.5) = 1.830 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 65",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.375)^(1.5) = 1.830 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 1.830 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.375)^(1.5) = 1.830 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-066",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 3.90 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 1.917 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 3.834 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 1.950 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 3.90)/2 = 2.450 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (2.450)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.450)^(1.5) = 1.917 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 66",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.450)^(1.5) = 1.917 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 1.917 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.450)^(1.5) = 1.917 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-067",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 4.05 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 2.006 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 4.012 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 2.025 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 4.05)/2 = 2.525 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (2.525)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.525)^(1.5) = 2.006 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 67",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.525)^(1.5) = 2.006 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 2.006 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.525)^(1.5) = 2.006 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-068",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 4.20 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 2.096 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 4.192 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 2.100 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 4.20)/2 = 2.600 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (2.600)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.600)^(1.5) = 2.096 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 68",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.600)^(1.5) = 2.096 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 2.096 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.600)^(1.5) = 2.096 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-069",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 4.35 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 2.188 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 4.376 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 2.175 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 4.35)/2 = 2.675 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (2.675)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.675)^(1.5) = 2.188 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 69",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.675)^(1.5) = 2.188 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 2.188 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.675)^(1.5) = 2.188 yr.",
    "category": "keplerLaws"
  },
  {
    "id": "KLP-H-070",
    "topic": "keplerLaws",
    "topicName": "Kepler's Laws of Planetary Motion",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A space probe is sent on a Hohmann transfer ellipse from Earth's orbit (radius r₁ = 1.00 AU) to a planetary orbit of radius r₂ = 4.50 AU around the Sun. What is the duration of the one-way transfer flight in Earth years?",
    "options": [
      {
        "label": "A",
        "text": "t_transfer = 2.280 years (half of the transfer orbit period)"
      },
      {
        "label": "B",
        "text": "t_transfer = 4.560 years"
      },
      {
        "label": "C",
        "text": "t_transfer = 1.000 year"
      },
      {
        "label": "D",
        "text": "t_transfer = 2.250 years"
      }
    ],
    "correctAnswer": "A",
    "hint": "Transfer semi-major axis is a = (r₁ + r₂)/2 = (1.00 + 4.50)/2 = 2.750 AU. Transfer time is half the orbital period: t = 1/2 · a^(3/2) = 1/2 · (2.750)^(1.5).",
    "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.750)^(1.5) = 2.280 yr",
    "stepByStep": {
      "given": "Advanced orbital scenario for KLP Hard Question 70",
      "asked": "Instantaneous velocity, binary period, or transfer time",
      "formula": "t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.750)^(1.5) = 2.280 yr",
      "substitution": "Substitute orbital dimensions into Vis-Viva or two-body formulations",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: t_transfer = 2.280 years (half of the transfer orbit period)",
      "keyTakeaway": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years.",
      "commonTrap": "Forgetting to divide the full orbital period by 2 for a one-way trip."
    },
    "explanation": "One-way Hohmann transfer time is exactly half the period of the transfer ellipse: t = 0.5 · a^(3/2) years. Formulated via t = 1/2 · [ (r₁ + r₂) / 2 ]^(3/2) = 1/2 · (2.750)^(1.5) = 2.280 yr.",
    "category": "keplerLaws"
  }
];

export default questions;
