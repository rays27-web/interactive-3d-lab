// Topic 1: Fundamental & Newton's Universal Law
// Total Questions: 210

export const questions = [
  {
    "id": "FNL-E-001",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the dimensional formula of the Universal Gravitational Constant G?",
    "options": [
      {
        "label": "A",
        "text": "[M⁻¹ L³ T⁻²]"
      },
      {
        "label": "B",
        "text": "[M L³ T⁻²]"
      },
      {
        "label": "C",
        "text": "[M⁻¹ L² T⁻¹]"
      },
      {
        "label": "D",
        "text": "[M⁻² L³ T⁻¹]"
      }
    ],
    "correctAnswer": "A",
    "hint": "From Newton's law: G = F·r² / (m₁·m₂). Substitute dimensions of force [M L T⁻²], length, and mass.",
    "formula": "G = F r² / (m₁ m₂)",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 1",
      "asked": "Resulting force or physical constant",
      "formula": "G = F r² / (m₁ m₂)",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: [M⁻¹ L³ T⁻²]",
      "keyTakeaway": "Universal constant G has dimensions [M⁻¹ L³ T⁻²] and SI units N·m²/kg².",
      "commonTrap": "Confusing G with acceleration due to gravity g which has dimensions [L T⁻²]."
    },
    "explanation": "Universal constant G has dimensions [M⁻¹ L³ T⁻²] and SI units N·m²/kg². Mathematically, G = F r² / (m₁ m₂).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-002",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Which of the following is the standard SI unit of the Universal Gravitational Constant G?",
    "options": [
      {
        "label": "A",
        "text": "N·m²/kg²"
      },
      {
        "label": "B",
        "text": "N·kg²/m²"
      },
      {
        "label": "C",
        "text": "N·m/kg"
      },
      {
        "label": "D",
        "text": "m/s²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Rearrange F = G m₁ m₂ / r² for G.",
    "formula": "G = F · r² / (m₁ · m₂)",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 2",
      "asked": "Resulting force or physical constant",
      "formula": "G = F · r² / (m₁ · m₂)",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: N·m²/kg²",
      "keyTakeaway": "In SI units, G is measured in N·m²/kg² (or m³·kg⁻¹·s⁻²).",
      "commonTrap": "Selecting N/kg which is the unit of gravitational field intensity."
    },
    "explanation": "In SI units, G is measured in N·m²/kg² (or m³·kg⁻¹·s⁻²). Mathematically, G = F · r² / (m₁ · m₂).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-003",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the numerical value of the Universal Gravitational Constant G in standard SI units?",
    "options": [
      {
        "label": "A",
        "text": "6.674 × 10⁻¹¹ N·m²/kg²"
      },
      {
        "label": "B",
        "text": "6.674 × 10⁻⁸ N·m²/kg²"
      },
      {
        "label": "C",
        "text": "9.81 × 10⁻¹¹ N·m²/kg²"
      },
      {
        "label": "D",
        "text": "6.674 × 10¹¹ N·m²/kg²"
      }
    ],
    "correctAnswer": "A",
    "hint": "G is on the order of 10⁻¹¹ in SI units.",
    "formula": "G ≈ 6.674 × 10⁻¹¹ N·m²/kg²",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 3",
      "asked": "Resulting force or physical constant",
      "formula": "G ≈ 6.674 × 10⁻¹¹ N·m²/kg²",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 6.674 × 10⁻¹¹ N·m²/kg²",
      "keyTakeaway": "G has the extremely small value of 6.674 × 10⁻¹¹ N·m²/kg² in SI units.",
      "commonTrap": "Confusing the power of 10 with the CGS value (10⁻⁸)."
    },
    "explanation": "G has the extremely small value of 6.674 × 10⁻¹¹ N·m²/kg² in SI units. Mathematically, G ≈ 6.674 × 10⁻¹¹ N·m²/kg².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-004",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the numerical value of G in CGS units (dyn·cm²/g²)?",
    "options": [
      {
        "label": "A",
        "text": "6.674 × 10⁻⁸ dyn·cm²/g²"
      },
      {
        "label": "B",
        "text": "6.674 × 10⁻¹¹ dyn·cm²/g²"
      },
      {
        "label": "C",
        "text": "6.674 × 10⁻⁵ dyn·cm²/g²"
      },
      {
        "label": "D",
        "text": "6.674 × 10⁻¹⁴ dyn·cm²/g²"
      }
    ],
    "correctAnswer": "A",
    "hint": "1 N = 10⁵ dyn, 1 m = 10² cm, 1 kg = 10³ g. Multiply 10⁻¹¹ by 10⁵ × 10⁴ / 10⁶ = 10³.",
    "formula": "G_CGS = G_SI × 10³ = 6.674 × 10⁻⁸ dyn·cm²/g²",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 4",
      "asked": "Resulting force or physical constant",
      "formula": "G_CGS = G_SI × 10³ = 6.674 × 10⁻⁸ dyn·cm²/g²",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 6.674 × 10⁻⁸ dyn·cm²/g²",
      "keyTakeaway": "In CGS units, G = 6.674 × 10⁻⁸ dyn·cm²/g².",
      "commonTrap": "Dividing by 10³ instead of multiplying."
    },
    "explanation": "In CGS units, G = 6.674 × 10⁻⁸ dyn·cm²/g². Mathematically, G_CGS = G_SI × 10³ = 6.674 × 10⁻⁸ dyn·cm²/g².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-005",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "If two lead spheres are placed in water instead of vacuum at the same separation, how does the gravitational force between them change?",
    "options": [
      {
        "label": "A",
        "text": "Remains exactly the same"
      },
      {
        "label": "B",
        "text": "Decreases due to buoyant shielding"
      },
      {
        "label": "C",
        "text": "Increases due to water density"
      },
      {
        "label": "D",
        "text": "Reduces to zero"
      }
    ],
    "correctAnswer": "A",
    "hint": "Gravitational force is independent of the intervening medium.",
    "formula": "F = G m₁ m₂ / r²",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 5",
      "asked": "Resulting force or physical constant",
      "formula": "F = G m₁ m₂ / r²",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Remains exactly the same",
      "keyTakeaway": "Unlike electrostatic force, gravitational force is completely independent of the medium.",
      "commonTrap": "Assuming gravity behaves like Coulomb's law where dielectric constant weakens the force."
    },
    "explanation": "Unlike electrostatic force, gravitational force is completely independent of the medium. Mathematically, F = G m₁ m₂ / r².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-006",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Which of the following statements correctly describes the fundamental nature of the gravitational force between two isolated point masses?",
    "options": [
      {
        "label": "A",
        "text": "Always attractive and directed along the line joining the masses"
      },
      {
        "label": "B",
        "text": "Can be attractive or repulsive depending on mass sign"
      },
      {
        "label": "C",
        "text": "Perpendicular to the line joining them"
      },
      {
        "label": "D",
        "text": "Directly proportional to the distance between them"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass is always positive in classical physics, making gravity strictly attractive and central.",
    "formula": "F⃗₁₂ = -G m₁ m₂ / r² r̂₁₂",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 6",
      "asked": "Resulting force or physical constant",
      "formula": "F⃗₁₂ = -G m₁ m₂ / r² r̂₁₂",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Always attractive and directed along the line joining the masses",
      "keyTakeaway": "Gravitation is strictly an attractive, central, and conservative force.",
      "commonTrap": "Thinking negative mass exists in classical mechanics to create repulsion."
    },
    "explanation": "Gravitation is strictly an attractive, central, and conservative force. Mathematically, F⃗₁₂ = -G m₁ m₂ / r² r̂₁₂.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-007",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "The Earth attracts an apple with gravitational force F_E. The apple attracts the Earth with gravitational force F_A. Which relation is correct according to Newton's Third Law?",
    "options": [
      {
        "label": "A",
        "text": "F_E = F_A in magnitude, but opposite in direction"
      },
      {
        "label": "B",
        "text": "F_E >> F_A because Earth has vastly greater mass"
      },
      {
        "label": "C",
        "text": "F_A = 0 because the apple is too small to generate gravity"
      },
      {
        "label": "D",
        "text": "F_E = 2 F_A"
      }
    ],
    "correctAnswer": "A",
    "hint": "Newton's third law states action and reaction are strictly equal in magnitude and opposite in direction.",
    "formula": "F⃗_Earth-apple = - F⃗_apple-Earth",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 7",
      "asked": "Resulting force or physical constant",
      "formula": "F⃗_Earth-apple = - F⃗_apple-Earth",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_E = F_A in magnitude, but opposite in direction",
      "keyTakeaway": "Gravitational force pairs are mutual and obey Newton's 3rd law regardless of mass difference.",
      "commonTrap": "Assuming the much larger body exerts a stronger force on the smaller body."
    },
    "explanation": "Gravitational force pairs are mutual and obey Newton's 3rd law regardless of mass difference. Mathematically, F⃗_Earth-apple = - F⃗_apple-Earth.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-008",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "If the separation distance between two point masses is doubled, the gravitational force between them becomes:",
    "options": [
      {
        "label": "A",
        "text": "One-fourth of the initial value"
      },
      {
        "label": "B",
        "text": "Half of the initial value"
      },
      {
        "label": "C",
        "text": "Double the initial value"
      },
      {
        "label": "D",
        "text": "Four times the initial value"
      }
    ],
    "correctAnswer": "A",
    "hint": "Gravitational force scales as 1/r².",
    "formula": "F ∝ 1 / r²",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 8",
      "asked": "Resulting force or physical constant",
      "formula": "F ∝ 1 / r²",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: One-fourth of the initial value",
      "keyTakeaway": "Doubling separation distance reduces gravitational attraction by 2² = 4 times.",
      "commonTrap": "Assuming linear reduction (half) instead of inverse-square."
    },
    "explanation": "Doubling separation distance reduces gravitational attraction by 2² = 4 times. Mathematically, F ∝ 1 / r².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-009",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "If the separation distance between two identical masses is tripled, the mutual gravitational force is scaled by:",
    "options": [
      {
        "label": "A",
        "text": "1/9"
      },
      {
        "label": "B",
        "text": "1/3"
      },
      {
        "label": "C",
        "text": "1/6"
      },
      {
        "label": "D",
        "text": "9"
      }
    ],
    "correctAnswer": "A",
    "hint": "F' / F = (r / 3r)².",
    "formula": "F' = F / 3² = F / 9",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 9",
      "asked": "Resulting force or physical constant",
      "formula": "F' = F / 3² = F / 9",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1/9",
      "keyTakeaway": "Tripling distance reduces the force by a factor of 9.",
      "commonTrap": "Dividing by 3 rather than 3²."
    },
    "explanation": "Tripling distance reduces the force by a factor of 9. Mathematically, F' = F / 3² = F / 9.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-010",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "If the separation distance between two fixed masses is quadrupled (multiplied by 4), the mutual force is scaled by:",
    "options": [
      {
        "label": "A",
        "text": "1/16"
      },
      {
        "label": "B",
        "text": "1/4"
      },
      {
        "label": "C",
        "text": "1/8"
      },
      {
        "label": "D",
        "text": "16"
      }
    ],
    "correctAnswer": "A",
    "hint": "F ∝ 1 / r² ⇒ F' / F = 1 / 4² = 1/16.",
    "formula": "F' = F / 16",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 10",
      "asked": "Resulting force or physical constant",
      "formula": "F' = F / 16",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1/16",
      "keyTakeaway": "Quadrupling separation reduces gravitational pull to 1/16th.",
      "commonTrap": "Dividing by 4 or 8."
    },
    "explanation": "Quadrupling separation reduces gravitational pull to 1/16th. Mathematically, F' = F / 16.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-011",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "If the distance between two fixed masses is reduced to half its original value, the gravitational force between them:",
    "options": [
      {
        "label": "A",
        "text": "Increases by a factor of 4"
      },
      {
        "label": "B",
        "text": "Doubles"
      },
      {
        "label": "C",
        "text": "Decreases by half"
      },
      {
        "label": "D",
        "text": "Remains unchanged"
      }
    ],
    "correctAnswer": "A",
    "hint": "F' ∝ 1 / (r/2)² = 4 / r².",
    "formula": "F' = 4 F",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 11",
      "asked": "Resulting force or physical constant",
      "formula": "F' = 4 F",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by a factor of 4",
      "keyTakeaway": "Halving the distance quadruples the gravitational force.",
      "commonTrap": "Multiplying by 2 instead of 2²."
    },
    "explanation": "Halving the distance quadruples the gravitational force. Mathematically, F' = 4 F.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-012",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "If the distance between two fixed masses is reduced to one-third of its original value, the gravitational force:",
    "options": [
      {
        "label": "A",
        "text": "Increases by a factor of 9"
      },
      {
        "label": "B",
        "text": "Increases by a factor of 3"
      },
      {
        "label": "C",
        "text": "Decreases by 1/9"
      },
      {
        "label": "D",
        "text": "Increases by a factor of 6"
      }
    ],
    "correctAnswer": "A",
    "hint": "F' ∝ 1 / (r/3)² = 9 / r².",
    "formula": "F' = 9 F",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 12",
      "asked": "Resulting force or physical constant",
      "formula": "F' = 9 F",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by a factor of 9",
      "keyTakeaway": "Reducing distance to 1/3 multiplies gravitational force by 9.",
      "commonTrap": "Multiplying by 3."
    },
    "explanation": "Reducing distance to 1/3 multiplies gravitational force by 9. Mathematically, F' = 9 F.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-013",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "If the distance between two fixed masses is reduced to one-fourth of its original value, the gravitational force:",
    "options": [
      {
        "label": "A",
        "text": "Increases by a factor of 16"
      },
      {
        "label": "B",
        "text": "Increases by a factor of 4"
      },
      {
        "label": "C",
        "text": "Increases by a factor of 8"
      },
      {
        "label": "D",
        "text": "Decreases to 1/16"
      }
    ],
    "correctAnswer": "A",
    "hint": "F' ∝ 1 / (r/4)² = 16 / r².",
    "formula": "F' = 16 F",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 13",
      "asked": "Resulting force or physical constant",
      "formula": "F' = 16 F",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by a factor of 16",
      "keyTakeaway": "Reducing distance to 1/4 multiplies the force by 16.",
      "commonTrap": "Multiplying by 4 or 8."
    },
    "explanation": "Reducing distance to 1/4 multiplies the force by 16. Mathematically, F' = 16 F.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-014",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "If both interacting masses are doubled while their separation remains constant, the gravitational force:",
    "options": [
      {
        "label": "A",
        "text": "Increases by a factor of 4"
      },
      {
        "label": "B",
        "text": "Doubles"
      },
      {
        "label": "C",
        "text": "Increases by a factor of 8"
      },
      {
        "label": "D",
        "text": "Remains unchanged"
      }
    ],
    "correctAnswer": "A",
    "hint": "F ∝ m₁ · m₂. If m₁' = 2m₁ and m₂' = 2m₂, F' = 4F.",
    "formula": "F' = G (2m₁) (2m₂) / r² = 4 F",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 14",
      "asked": "Resulting force or physical constant",
      "formula": "F' = G (2m₁) (2m₂) / r² = 4 F",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by a factor of 4",
      "keyTakeaway": "Force is bilinear in the interacting masses: doubling both yields a 4-fold increase.",
      "commonTrap": "Adding the factors (2+2) instead of multiplying them (2×2)."
    },
    "explanation": "Force is bilinear in the interacting masses: doubling both yields a 4-fold increase. Mathematically, F' = G (2m₁) (2m₂) / r² = 4 F.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-015",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "If both interacting masses are tripled while their separation remains constant, the gravitational force:",
    "options": [
      {
        "label": "A",
        "text": "Increases by a factor of 9"
      },
      {
        "label": "B",
        "text": "Increases by a factor of 3"
      },
      {
        "label": "C",
        "text": "Increases by a factor of 6"
      },
      {
        "label": "D",
        "text": "Increases by a factor of 27"
      }
    ],
    "correctAnswer": "A",
    "hint": "F' ∝ (3m₁) · (3m₂) = 9 m₁ m₂.",
    "formula": "F' = 9 F",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 15",
      "asked": "Resulting force or physical constant",
      "formula": "F' = 9 F",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Increases by a factor of 9",
      "keyTakeaway": "Tripling both masses increases gravitational force by 9 times.",
      "commonTrap": "Multiplying 3 by 2 to get 6."
    },
    "explanation": "Tripling both masses increases gravitational force by 9 times. Mathematically, F' = 9 F.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-016",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "If one of the interacting masses is doubled and the separation distance between them is also doubled, the new force is:",
    "options": [
      {
        "label": "A",
        "text": "Half of the original force"
      },
      {
        "label": "B",
        "text": "Equal to the original force"
      },
      {
        "label": "C",
        "text": "One-fourth of the original force"
      },
      {
        "label": "D",
        "text": "Double the original force"
      }
    ],
    "correctAnswer": "A",
    "hint": "F' = G (2m₁) m₂ / (2r)² = (2/4) F = F/2.",
    "formula": "F' = 2/4 F = 0.5 F",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 16",
      "asked": "Resulting force or physical constant",
      "formula": "F' = 2/4 F = 0.5 F",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Half of the original force",
      "keyTakeaway": "A 2x mass increase is outweighed by a 4x drop from doubling separation, giving a net 0.5x force.",
      "commonTrap": "Assuming the 2 in the numerator cancels the 2 in the denominator before squaring."
    },
    "explanation": "A 2x mass increase is outweighed by a 4x drop from doubling separation, giving a net 0.5x force. Mathematically, F' = 2/4 F = 0.5 F.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-017",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "If one of the interacting masses is halved and the distance between them is halved, the new force is:",
    "options": [
      {
        "label": "A",
        "text": "Double the original force"
      },
      {
        "label": "B",
        "text": "Equal to the original force"
      },
      {
        "label": "C",
        "text": "Half of the original force"
      },
      {
        "label": "D",
        "text": "Four times the original force"
      }
    ],
    "correctAnswer": "A",
    "hint": "F' = G (m₁/2) m₂ / (r/2)² = (1/2) / (1/4) F = 2F.",
    "formula": "F' = (0.5 / 0.25) F = 2 F",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 17",
      "asked": "Resulting force or physical constant",
      "formula": "F' = (0.5 / 0.25) F = 2 F",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Double the original force",
      "keyTakeaway": "Halving distance increases force by 4x, while halving one mass reduces it by 2x, yielding a net 2x increase.",
      "commonTrap": "Thinking the factors of 1/2 cancel out."
    },
    "explanation": "Halving distance increases force by 4x, while halving one mass reduces it by 2x, yielding a net 2x increase. Mathematically, F' = (0.5 / 0.25) F = 2 F.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-018",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Who was the English scientist who first measured the value of G in a laboratory in 1798 using a torsion balance?",
    "options": [
      {
        "label": "A",
        "text": "Henry Cavendish"
      },
      {
        "label": "B",
        "text": "Isaac Newton"
      },
      {
        "label": "C",
        "text": "Robert Hooke"
      },
      {
        "label": "D",
        "text": "Michael Faraday"
      }
    ],
    "correctAnswer": "A",
    "hint": "He famously described the experiment as 'weighing the Earth'.",
    "formula": "Cavendish Experiment (1798)",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 18",
      "asked": "Resulting force or physical constant",
      "formula": "Cavendish Experiment (1798)",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Henry Cavendish",
      "keyTakeaway": "Henry Cavendish measured G using a torsion balance in 1798.",
      "commonTrap": "Assuming Newton measured G himself."
    },
    "explanation": "Henry Cavendish measured G using a torsion balance in 1798. Mathematically, Cavendish Experiment (1798).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-019",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What material is commonly used for the suspension fiber in a sensitive Cavendish torsion balance due to its high tensile strength and low elastic hysteresis?",
    "options": [
      {
        "label": "A",
        "text": "Phosphor bronze or fused quartz"
      },
      {
        "label": "B",
        "text": "Soft copper wire"
      },
      {
        "label": "C",
        "text": "Aluminum filament"
      },
      {
        "label": "D",
        "text": "Nylon thread"
      }
    ],
    "correctAnswer": "A",
    "hint": "Requires a material with very small and consistent torsional spring constant.",
    "formula": "τ = κ · θ",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 19",
      "asked": "Resulting force or physical constant",
      "formula": "τ = κ · θ",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Phosphor bronze or fused quartz",
      "keyTakeaway": "Phosphor bronze and quartz fibers have ideal elastic properties with minimal hysteresis for measuring tiny gravitational torques.",
      "commonTrap": "Selecting copper which exhibits significant plastic deformation."
    },
    "explanation": "Phosphor bronze and quartz fibers have ideal elastic properties with minimal hysteresis for measuring tiny gravitational torques. Mathematically, τ = κ · θ.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-020",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the order of magnitude of the ratio of gravitational force to electrostatic force between two electrons?",
    "options": [
      {
        "label": "A",
        "text": "10⁻⁴²"
      },
      {
        "label": "B",
        "text": "10⁻²"
      },
      {
        "label": "C",
        "text": "10⁰ (equal strength)"
      },
      {
        "label": "D",
        "text": "10⁴²"
      }
    ],
    "correctAnswer": "A",
    "hint": "F_g / F_e = (G m_e²) / (k e²). G is ~10⁻¹¹ while k is ~10⁹.",
    "formula": "F_g / F_e ≈ 2.4 × 10⁻⁴³ ≈ 10⁻⁴²",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 20",
      "asked": "Resulting force or physical constant",
      "formula": "F_g / F_e ≈ 2.4 × 10⁻⁴³ ≈ 10⁻⁴²",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 10⁻⁴²",
      "keyTakeaway": "Gravitational force is approximately 42 orders of magnitude weaker than electrostatic force for elementary particles.",
      "commonTrap": "Confusing the sign of the exponent (+42 instead of -42)."
    },
    "explanation": "Gravitational force is approximately 42 orders of magnitude weaker than electrostatic force for elementary particles. Mathematically, F_g / F_e ≈ 2.4 × 10⁻⁴³ ≈ 10⁻⁴².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-021",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 2 kg and 5 kg separated by a distance of 1 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "66.74 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "133.48 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "33.37 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "266.96 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 2 kg, m₂ = 5 kg, and r = 1 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (2 · 5) / (1)² = 66.74 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 21",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (2 · 5) / (1)² = 66.74 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 66.74 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (2 · 5) / (1)² = 66.74 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-022",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 5 kg and 7 kg separated by a distance of 1.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "103.82 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "207.64 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "51.91 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "415.28 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 5 kg, m₂ = 7 kg, and r = 1.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (5 · 7) / (1.5)² = 103.82 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 22",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (5 · 7) / (1.5)² = 103.82 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 103.82 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (5 · 7) / (1.5)² = 103.82 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-023",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 8 kg and 9 kg separated by a distance of 2 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "120.13 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "240.26 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "60.06 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "480.52 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 8 kg, m₂ = 9 kg, and r = 2 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (8 · 9) / (2)² = 120.13 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 23",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (8 · 9) / (2)² = 120.13 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 120.13 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (8 · 9) / (2)² = 120.13 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-024",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 11 kg and 11 kg separated by a distance of 2.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "129.21 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "258.42 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "64.61 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "516.84 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 11 kg, m₂ = 11 kg, and r = 2.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (11 · 11) / (2.5)² = 129.21 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 24",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (11 · 11) / (2.5)² = 129.21 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 129.21 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (11 · 11) / (2.5)² = 129.21 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-025",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 14 kg and 13 kg separated by a distance of 3 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "134.96 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "269.92 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "67.48 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "539.84 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 14 kg, m₂ = 13 kg, and r = 3 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (14 · 13) / (3)² = 134.96 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 25",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (14 · 13) / (3)² = 134.96 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 134.96 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (14 · 13) / (3)² = 134.96 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-026",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 17 kg and 15 kg separated by a distance of 3.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "138.93 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "277.86 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "69.47 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "555.72 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 17 kg, m₂ = 15 kg, and r = 3.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (17 · 15) / (3.5)² = 138.93 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 26",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (17 · 15) / (3.5)² = 138.93 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 138.93 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (17 · 15) / (3.5)² = 138.93 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-027",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 20 kg and 17 kg separated by a distance of 4 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "141.82 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "283.64 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "70.91 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "567.28 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 20 kg, m₂ = 17 kg, and r = 4 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (20 · 17) / (4)² = 141.82 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 27",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (20 · 17) / (4)² = 141.82 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 141.82 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (20 · 17) / (4)² = 141.82 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-028",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 23 kg and 19 kg separated by a distance of 1 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "2916.54 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "5833.08 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "1458.27 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "11666.16 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 23 kg, m₂ = 19 kg, and r = 1 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (23 · 19) / (1)² = 2916.54 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 28",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (23 · 19) / (1)² = 2916.54 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 2916.54 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (23 · 19) / (1)² = 2916.54 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-029",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 26 kg and 21 kg separated by a distance of 1.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "1619.56 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "3239.12 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "809.78 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "6478.24 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 26 kg, m₂ = 21 kg, and r = 1.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (26 · 21) / (1.5)² = 1619.56 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 29",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (26 · 21) / (1.5)² = 1619.56 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1619.56 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (26 · 21) / (1.5)² = 1619.56 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-030",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 29 kg and 23 kg separated by a distance of 2 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "1112.89 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "2225.78 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "556.45 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "4451.56 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 29 kg, m₂ = 23 kg, and r = 2 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (29 · 23) / (2)² = 1112.89 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 30",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (29 · 23) / (2)² = 1112.89 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1112.89 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (29 · 23) / (2)² = 1112.89 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-031",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 32 kg and 25 kg separated by a distance of 2.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "854.27 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "1708.54 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "427.13 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "3417.08 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 32 kg, m₂ = 25 kg, and r = 2.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (32 · 25) / (2.5)² = 854.27 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 31",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (32 · 25) / (2.5)² = 854.27 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 854.27 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (32 · 25) / (2.5)² = 854.27 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-032",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 35 kg and 27 kg separated by a distance of 3 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "700.77 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "1401.54 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "350.38 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "2803.08 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 35 kg, m₂ = 27 kg, and r = 3 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (35 · 27) / (3)² = 700.77 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 32",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (35 · 27) / (3)² = 700.77 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 700.77 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (35 · 27) / (3)² = 700.77 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-033",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 38 kg and 29 kg separated by a distance of 3.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "600.39 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "1200.78 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "300.19 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "2401.56 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 38 kg, m₂ = 29 kg, and r = 3.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (38 · 29) / (3.5)² = 600.39 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 33",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (38 · 29) / (3.5)² = 600.39 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 600.39 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (38 · 29) / (3.5)² = 600.39 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-034",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 41 kg and 31 kg separated by a distance of 4 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "530.17 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "1060.34 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "265.08 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "2120.68 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 41 kg, m₂ = 31 kg, and r = 4 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (41 · 31) / (4)² = 530.17 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 34",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (41 · 31) / (4)² = 530.17 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 530.17 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (41 · 31) / (4)² = 530.17 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-035",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 44 kg and 33 kg separated by a distance of 1 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "9690.65 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "19381.30 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "4845.32 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "38762.60 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 44 kg, m₂ = 33 kg, and r = 1 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (44 · 33) / (1)² = 9690.65 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 35",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (44 · 33) / (1)² = 9690.65 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 9690.65 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (44 · 33) / (1)² = 9690.65 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-036",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 47 kg and 35 kg separated by a distance of 1.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "4879.44 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "9758.88 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "2439.72 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "19517.76 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 47 kg, m₂ = 35 kg, and r = 1.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (47 · 35) / (1.5)² = 4879.44 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 36",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (47 · 35) / (1.5)² = 4879.44 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 4879.44 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (47 · 35) / (1.5)² = 4879.44 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-037",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 50 kg and 37 kg separated by a distance of 2 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "3086.73 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "6173.46 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "1543.37 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "12346.92 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 50 kg, m₂ = 37 kg, and r = 2 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (50 · 37) / (2)² = 3086.73 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 37",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (50 · 37) / (2)² = 3086.73 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 3086.73 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (50 · 37) / (2)² = 3086.73 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-038",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 53 kg and 39 kg separated by a distance of 2.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "2207.23 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "4414.46 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "1103.62 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "8828.92 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 53 kg, m₂ = 39 kg, and r = 2.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (53 · 39) / (2.5)² = 2207.23 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 38",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (53 · 39) / (2.5)² = 2207.23 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 2207.23 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (53 · 39) / (2.5)² = 2207.23 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-039",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 56 kg and 41 kg separated by a distance of 3 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "1702.61 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "3405.22 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "851.30 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "6810.44 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 56 kg, m₂ = 41 kg, and r = 3 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (56 · 41) / (3)² = 1702.61 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 39",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (56 · 41) / (3)² = 1702.61 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1702.61 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (56 · 41) / (3)² = 1702.61 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-040",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 59 kg and 43 kg separated by a distance of 3.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "1382.20 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "2764.40 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "691.10 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "5528.80 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 59 kg, m₂ = 43 kg, and r = 3.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (59 · 43) / (3.5)² = 1382.20 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 40",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (59 · 43) / (3.5)² = 1382.20 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1382.20 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (59 · 43) / (3.5)² = 1382.20 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-041",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 62 kg and 45 kg separated by a distance of 4 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "1163.78 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "2327.56 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "581.89 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "4655.12 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 62 kg, m₂ = 45 kg, and r = 4 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (62 · 45) / (4)² = 1163.78 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 41",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (62 · 45) / (4)² = 1163.78 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 1163.78 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (62 · 45) / (4)² = 1163.78 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-042",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 65 kg and 47 kg separated by a distance of 1 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "20389.07 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "40778.14 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "10194.53 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "81556.28 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 65 kg, m₂ = 47 kg, and r = 1 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (65 · 47) / (1)² = 20389.07 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 42",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (65 · 47) / (1)² = 20389.07 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 20389.07 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (65 · 47) / (1)² = 20389.07 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-043",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 68 kg and 49 kg separated by a distance of 1.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "9883.45 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "19766.90 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "4941.73 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "39533.80 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 68 kg, m₂ = 49 kg, and r = 1.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (68 · 49) / (1.5)² = 9883.45 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 43",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (68 · 49) / (1.5)² = 9883.45 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 9883.45 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (68 · 49) / (1.5)² = 9883.45 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-044",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 71 kg and 51 kg separated by a distance of 2 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "6041.64 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "12083.28 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "3020.82 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "24166.56 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 71 kg, m₂ = 51 kg, and r = 2 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (71 · 51) / (2)² = 6041.64 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 44",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (71 · 51) / (2)² = 6041.64 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 6041.64 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (71 · 51) / (2)² = 6041.64 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-045",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 74 kg and 53 kg separated by a distance of 2.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "4188.07 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "8376.14 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "2094.03 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "16752.28 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 74 kg, m₂ = 53 kg, and r = 2.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (74 · 53) / (2.5)² = 4188.07 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 45",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (74 · 53) / (2.5)² = 4188.07 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 4188.07 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (74 · 53) / (2.5)² = 4188.07 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-046",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 77 kg and 55 kg separated by a distance of 3 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "3140.49 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "6280.98 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "1570.24 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "12561.96 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 77 kg, m₂ = 55 kg, and r = 3 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (77 · 55) / (3)² = 3140.49 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 46",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (77 · 55) / (3)² = 3140.49 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 3140.49 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (77 · 55) / (3)² = 3140.49 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-047",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 80 kg and 57 kg separated by a distance of 3.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "2484.36 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "4968.72 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "1242.18 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "9937.44 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 80 kg, m₂ = 57 kg, and r = 3.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (80 · 57) / (3.5)² = 2484.36 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 47",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (80 · 57) / (3.5)² = 2484.36 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 2484.36 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (80 · 57) / (3.5)² = 2484.36 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-048",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 83 kg and 59 kg separated by a distance of 4 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "2042.66 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "4085.32 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "1021.33 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "8170.64 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 83 kg, m₂ = 59 kg, and r = 4 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (83 · 59) / (4)² = 2042.66 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 48",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (83 · 59) / (4)² = 2042.66 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 2042.66 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (83 · 59) / (4)² = 2042.66 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-049",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 86 kg and 61 kg separated by a distance of 1 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "35011.80 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "70023.60 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "17505.90 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "140047.20 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 86 kg, m₂ = 61 kg, and r = 1 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (86 · 61) / (1)² = 35011.80 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 49",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (86 · 61) / (1)² = 35011.80 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 35011.80 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (86 · 61) / (1)² = 35011.80 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-050",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 89 kg and 63 kg separated by a distance of 1.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "16631.61 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "33263.22 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "8315.81 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "66526.44 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 89 kg, m₂ = 63 kg, and r = 1.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (89 · 63) / (1.5)² = 16631.61 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 50",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (89 · 63) / (1.5)² = 16631.61 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 16631.61 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (89 · 63) / (1.5)² = 16631.61 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-051",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 92 kg and 65 kg separated by a distance of 2 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "9977.63 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "19955.26 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "4988.81 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "39910.52 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 92 kg, m₂ = 65 kg, and r = 2 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (92 · 65) / (2)² = 9977.63 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 51",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (92 · 65) / (2)² = 9977.63 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 9977.63 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (92 · 65) / (2)² = 9977.63 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-052",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 95 kg and 67 kg separated by a distance of 2.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "6796.80 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "13593.60 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "3398.40 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "27187.20 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 95 kg, m₂ = 67 kg, and r = 2.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (95 · 67) / (2.5)² = 6796.80 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 52",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (95 · 67) / (2.5)² = 6796.80 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 6796.80 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (95 · 67) / (2.5)² = 6796.80 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-053",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 98 kg and 69 kg separated by a distance of 3 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "5014.40 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "10028.80 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "2507.20 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "20057.60 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 98 kg, m₂ = 69 kg, and r = 3 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (98 · 69) / (3)² = 5014.40 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 53",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (98 · 69) / (3)² = 5014.40 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 5014.40 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (98 · 69) / (3)² = 5014.40 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-054",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 101 kg and 71 kg separated by a distance of 3.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "3906.88 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "7813.76 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "1953.44 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "15627.52 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 101 kg, m₂ = 71 kg, and r = 3.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (101 · 71) / (3.5)² = 3906.88 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 54",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (101 · 71) / (3.5)² = 3906.88 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 3906.88 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (101 · 71) / (3.5)² = 3906.88 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-055",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 104 kg and 73 kg separated by a distance of 4 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "3166.81 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "6333.62 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "1583.40 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "12667.24 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 104 kg, m₂ = 73 kg, and r = 4 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (104 · 73) / (4)² = 3166.81 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 55",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (104 · 73) / (4)² = 3166.81 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 3166.81 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (104 · 73) / (4)² = 3166.81 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-056",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 107 kg and 75 kg separated by a distance of 1 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "53558.85 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "107117.70 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "26779.42 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "214235.40 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 107 kg, m₂ = 75 kg, and r = 1 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (107 · 75) / (1)² = 53558.85 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 56",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (107 · 75) / (1)² = 53558.85 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 53558.85 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (107 · 75) / (1)² = 53558.85 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-057",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 110 kg and 77 kg separated by a distance of 1.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "25123.90 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "50247.80 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "12561.95 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "100495.60 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 110 kg, m₂ = 77 kg, and r = 1.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (110 · 77) / (1.5)² = 25123.90 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 57",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (110 · 77) / (1.5)² = 25123.90 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 25123.90 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (110 · 77) / (1.5)² = 25123.90 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-058",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 113 kg and 79 kg separated by a distance of 2 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "14894.70 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "29789.40 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "7447.35 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "59578.80 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 113 kg, m₂ = 79 kg, and r = 2 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (113 · 79) / (2)² = 14894.70 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 58",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (113 · 79) / (2)² = 14894.70 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 14894.70 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (113 · 79) / (2)² = 14894.70 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-059",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 116 kg and 81 kg separated by a distance of 2.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "10033.42 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "20066.84 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "5016.71 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "40133.68 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 116 kg, m₂ = 81 kg, and r = 2.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (116 · 81) / (2.5)² = 10033.42 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 59",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (116 · 81) / (2.5)² = 10033.42 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 10033.42 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (116 · 81) / (2.5)² = 10033.42 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-060",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 119 kg and 83 kg separated by a distance of 3 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "7324.34 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "14648.68 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "3662.17 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "29297.36 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 119 kg, m₂ = 83 kg, and r = 3 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (119 · 83) / (3)² = 7324.34 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 60",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (119 · 83) / (3)² = 7324.34 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 7324.34 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (119 · 83) / (3)² = 7324.34 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-061",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 122 kg and 85 kg separated by a distance of 3.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "5649.75 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "11299.50 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "2824.88 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "22599.00 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 122 kg, m₂ = 85 kg, and r = 3.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (122 · 85) / (3.5)² = 5649.75 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 61",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (122 · 85) / (3.5)² = 5649.75 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 5649.75 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (122 · 85) / (3.5)² = 5649.75 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-062",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 125 kg and 87 kg separated by a distance of 4 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "4536.23 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "9072.46 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "2268.11 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "18144.92 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 125 kg, m₂ = 87 kg, and r = 4 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (125 · 87) / (4)² = 4536.23 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 62",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (125 · 87) / (4)² = 4536.23 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 4536.23 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (125 · 87) / (4)² = 4536.23 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-063",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 128 kg and 89 kg separated by a distance of 1 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "76030.21 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "152060.42 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "38015.11 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "304120.84 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 128 kg, m₂ = 89 kg, and r = 1 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (128 · 89) / (1)² = 76030.21 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 63",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (128 · 89) / (1)² = 76030.21 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 76030.21 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (128 · 89) / (1)² = 76030.21 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-064",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 131 kg and 91 kg separated by a distance of 1.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "35360.34 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "70720.68 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "17680.17 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "141441.36 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 131 kg, m₂ = 91 kg, and r = 1.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (131 · 91) / (1.5)² = 35360.34 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 64",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (131 · 91) / (1.5)² = 35360.34 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 35360.34 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (131 · 91) / (1.5)² = 35360.34 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-065",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 134 kg and 93 kg separated by a distance of 2 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "20792.85 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "41585.70 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "10396.42 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "83171.40 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 134 kg, m₂ = 93 kg, and r = 2 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (134 · 93) / (2)² = 20792.85 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 65",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (134 · 93) / (2)² = 20792.85 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 20792.85 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (134 · 93) / (2)² = 20792.85 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-066",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 137 kg and 95 kg separated by a distance of 2.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "13897.94 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "27795.88 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "6948.97 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "55591.76 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 137 kg, m₂ = 95 kg, and r = 2.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (137 · 95) / (2.5)² = 13897.94 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 66",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (137 · 95) / (2.5)² = 13897.94 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 13897.94 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (137 · 95) / (2.5)² = 13897.94 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-067",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 140 kg and 97 kg separated by a distance of 3 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "10070.32 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "20140.64 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "5035.16 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "40281.28 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 140 kg, m₂ = 97 kg, and r = 3 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (140 · 97) / (3)² = 10070.32 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 67",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (140 · 97) / (3)² = 10070.32 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 10070.32 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (140 · 97) / (3)² = 10070.32 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-068",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 143 kg and 99 kg separated by a distance of 3.5 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "7712.96 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "15425.92 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "3856.48 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "30851.84 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 143 kg, m₂ = 99 kg, and r = 3.5 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (143 · 99) / (3.5)² = 7712.96 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 68",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (143 · 99) / (3.5)² = 7712.96 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 7712.96 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (143 · 99) / (3.5)² = 7712.96 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-069",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 146 kg and 101 kg separated by a distance of 4 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "6150.93 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "12301.86 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "3075.47 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "24603.72 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 146 kg, m₂ = 101 kg, and r = 4 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (146 · 101) / (4)² = 6150.93 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 69",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (146 · 101) / (4)² = 6150.93 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 6150.93 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (146 · 101) / (4)² = 6150.93 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-E-070",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Calculate the gravitational attraction between two isolated point particles of mass 149 kg and 103 kg separated by a distance of 1 meters in free space.",
    "options": [
      {
        "label": "A",
        "text": "102425.88 × 10⁻¹¹ N"
      },
      {
        "label": "B",
        "text": "204851.76 × 10⁻¹¹ N"
      },
      {
        "label": "C",
        "text": "51212.94 × 10⁻¹¹ N"
      },
      {
        "label": "D",
        "text": "409703.52 × 10⁻¹¹ N"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply F = G m₁ m₂ / r² with m₁ = 149 kg, m₂ = 103 kg, and r = 1 m.",
    "formula": "F = (6.674 × 10⁻¹¹) · (149 · 103) / (1)² = 102425.88 × 10⁻¹¹ N",
    "stepByStep": {
      "given": "Physical scenario for FNL Easy Question 70",
      "asked": "Resulting force or physical constant",
      "formula": "F = (6.674 × 10⁻¹¹) · (149 · 103) / (1)² = 102425.88 × 10⁻¹¹ N",
      "substitution": "Substitute physical quantities into standard equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: 102425.88 × 10⁻¹¹ N",
      "keyTakeaway": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation.",
      "commonTrap": "Forgetting to square the distance in the denominator."
    },
    "explanation": "Gravitational force is directly proportional to mass product and inversely proportional to squared separation. Mathematically, F = (6.674 × 10⁻¹¹) · (149 · 103) / (1)² = 102425.88 × 10⁻¹¹ N.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-001",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two point masses M and 4M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 3"
      },
      {
        "label": "B",
        "text": "x = L / 2"
      },
      {
        "label": "C",
        "text": "x = L / 4"
      },
      {
        "label": "D",
        "text": "x = L / 4"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (4M) m / (L - x)². Take square roots: 1/x = 2/(L - x).",
    "formula": "x = L / (1 + √4) = L / 3",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 1",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √4) = L / 3",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 3",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √4) = L / 3.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-002",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two point masses M and 9M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 4"
      },
      {
        "label": "B",
        "text": "x = L / 3"
      },
      {
        "label": "C",
        "text": "x = L / 9"
      },
      {
        "label": "D",
        "text": "x = L / 5"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (9M) m / (L - x)². Take square roots: 1/x = 3/(L - x).",
    "formula": "x = L / (1 + √9) = L / 4",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 2",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √9) = L / 4",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 4",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √9) = L / 4.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-003",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two point masses M and 16M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 5"
      },
      {
        "label": "B",
        "text": "x = L / 4"
      },
      {
        "label": "C",
        "text": "x = L / 16"
      },
      {
        "label": "D",
        "text": "x = L / 6"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (16M) m / (L - x)². Take square roots: 1/x = 4/(L - x).",
    "formula": "x = L / (1 + √16) = L / 5",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 3",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √16) = L / 5",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 5",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √16) = L / 5.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-004",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two point masses M and 25M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 6"
      },
      {
        "label": "B",
        "text": "x = L / 5"
      },
      {
        "label": "C",
        "text": "x = L / 25"
      },
      {
        "label": "D",
        "text": "x = L / 7"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (25M) m / (L - x)². Take square roots: 1/x = 5/(L - x).",
    "formula": "x = L / (1 + √25) = L / 6",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 4",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √25) = L / 6",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 6",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √25) = L / 6.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-005",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two point masses M and 36M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 7"
      },
      {
        "label": "B",
        "text": "x = L / 6"
      },
      {
        "label": "C",
        "text": "x = L / 36"
      },
      {
        "label": "D",
        "text": "x = L / 8"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (36M) m / (L - x)². Take square roots: 1/x = 6/(L - x).",
    "formula": "x = L / (1 + √36) = L / 7",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 5",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √36) = L / 7",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 7",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √36) = L / 7.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-006",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two point masses M and 49M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 8"
      },
      {
        "label": "B",
        "text": "x = L / 7"
      },
      {
        "label": "C",
        "text": "x = L / 49"
      },
      {
        "label": "D",
        "text": "x = L / 9"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (49M) m / (L - x)². Take square roots: 1/x = 7/(L - x).",
    "formula": "x = L / (1 + √49) = L / 8",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 6",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √49) = L / 8",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 8",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √49) = L / 8.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-007",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two point masses M and 64M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 9"
      },
      {
        "label": "B",
        "text": "x = L / 8"
      },
      {
        "label": "C",
        "text": "x = L / 64"
      },
      {
        "label": "D",
        "text": "x = L / 10"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (64M) m / (L - x)². Take square roots: 1/x = 8/(L - x).",
    "formula": "x = L / (1 + √64) = L / 9",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 7",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √64) = L / 9",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 9",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √64) = L / 9.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-008",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two point masses M and 81M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 10"
      },
      {
        "label": "B",
        "text": "x = L / 9"
      },
      {
        "label": "C",
        "text": "x = L / 81"
      },
      {
        "label": "D",
        "text": "x = L / 11"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (81M) m / (L - x)². Take square roots: 1/x = 9/(L - x).",
    "formula": "x = L / (1 + √81) = L / 10",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 8",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √81) = L / 10",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 10",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √81) = L / 10.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-009",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two point masses M and 100M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 11"
      },
      {
        "label": "B",
        "text": "x = L / 10"
      },
      {
        "label": "C",
        "text": "x = L / 100"
      },
      {
        "label": "D",
        "text": "x = L / 12"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (100M) m / (L - x)². Take square roots: 1/x = 10/(L - x).",
    "formula": "x = L / (1 + √100) = L / 11",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 9",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √100) = L / 11",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 11",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √100) = L / 11.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-010",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two point masses M and 121M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 12"
      },
      {
        "label": "B",
        "text": "x = L / 11"
      },
      {
        "label": "C",
        "text": "x = L / 121"
      },
      {
        "label": "D",
        "text": "x = L / 13"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (121M) m / (L - x)². Take square roots: 1/x = 11/(L - x).",
    "formula": "x = L / (1 + √121) = L / 12",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 10",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √121) = L / 12",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 12",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √121) = L / 12.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-011",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two point masses M and 144M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 13"
      },
      {
        "label": "B",
        "text": "x = L / 12"
      },
      {
        "label": "C",
        "text": "x = L / 144"
      },
      {
        "label": "D",
        "text": "x = L / 14"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (144M) m / (L - x)². Take square roots: 1/x = 12/(L - x).",
    "formula": "x = L / (1 + √144) = L / 13",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 11",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √144) = L / 13",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 13",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √144) = L / 13.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-012",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two point masses M and 169M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 14"
      },
      {
        "label": "B",
        "text": "x = L / 13"
      },
      {
        "label": "C",
        "text": "x = L / 169"
      },
      {
        "label": "D",
        "text": "x = L / 15"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (169M) m / (L - x)². Take square roots: 1/x = 13/(L - x).",
    "formula": "x = L / (1 + √169) = L / 14",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 12",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √169) = L / 14",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 14",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √169) = L / 14.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-013",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two point masses M and 196M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 15"
      },
      {
        "label": "B",
        "text": "x = L / 14"
      },
      {
        "label": "C",
        "text": "x = L / 196"
      },
      {
        "label": "D",
        "text": "x = L / 16"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (196M) m / (L - x)². Take square roots: 1/x = 14/(L - x).",
    "formula": "x = L / (1 + √196) = L / 15",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 13",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √196) = L / 15",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 15",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √196) = L / 15.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-014",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two point masses M and 225M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 16"
      },
      {
        "label": "B",
        "text": "x = L / 15"
      },
      {
        "label": "C",
        "text": "x = L / 225"
      },
      {
        "label": "D",
        "text": "x = L / 17"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (225M) m / (L - x)². Take square roots: 1/x = 15/(L - x).",
    "formula": "x = L / (1 + √225) = L / 16",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 14",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √225) = L / 16",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 16",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √225) = L / 16.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-015",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two point masses M and 256M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 17"
      },
      {
        "label": "B",
        "text": "x = L / 16"
      },
      {
        "label": "C",
        "text": "x = L / 256"
      },
      {
        "label": "D",
        "text": "x = L / 18"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (256M) m / (L - x)². Take square roots: 1/x = 16/(L - x).",
    "formula": "x = L / (1 + √256) = L / 17",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 15",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √256) = L / 17",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 17",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √256) = L / 17.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-016",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two point masses M and 289M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 18"
      },
      {
        "label": "B",
        "text": "x = L / 17"
      },
      {
        "label": "C",
        "text": "x = L / 289"
      },
      {
        "label": "D",
        "text": "x = L / 19"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (289M) m / (L - x)². Take square roots: 1/x = 17/(L - x).",
    "formula": "x = L / (1 + √289) = L / 18",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 16",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √289) = L / 18",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 18",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √289) = L / 18.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-017",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two point masses M and 324M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 19"
      },
      {
        "label": "B",
        "text": "x = L / 18"
      },
      {
        "label": "C",
        "text": "x = L / 324"
      },
      {
        "label": "D",
        "text": "x = L / 20"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (324M) m / (L - x)². Take square roots: 1/x = 18/(L - x).",
    "formula": "x = L / (1 + √324) = L / 19",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 17",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √324) = L / 19",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 19",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √324) = L / 19.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-018",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two point masses M and 361M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 20"
      },
      {
        "label": "B",
        "text": "x = L / 19"
      },
      {
        "label": "C",
        "text": "x = L / 361"
      },
      {
        "label": "D",
        "text": "x = L / 21"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (361M) m / (L - x)². Take square roots: 1/x = 19/(L - x).",
    "formula": "x = L / (1 + √361) = L / 20",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 18",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √361) = L / 20",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 20",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √361) = L / 20.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-019",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two point masses M and 400M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 21"
      },
      {
        "label": "B",
        "text": "x = L / 20"
      },
      {
        "label": "C",
        "text": "x = L / 400"
      },
      {
        "label": "D",
        "text": "x = L / 22"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (400M) m / (L - x)². Take square roots: 1/x = 20/(L - x).",
    "formula": "x = L / (1 + √400) = L / 21",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 19",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √400) = L / 21",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 21",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √400) = L / 21.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-020",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two point masses M and 441M are fixed at a distance L apart along the x-axis. At what position x measured from mass M along the line segment between them is the net gravitational force on a test mass m equal to zero?",
    "options": [
      {
        "label": "A",
        "text": "x = L / 22"
      },
      {
        "label": "B",
        "text": "x = L / 21"
      },
      {
        "label": "C",
        "text": "x = L / 441"
      },
      {
        "label": "D",
        "text": "x = L / 23"
      }
    ],
    "correctAnswer": "A",
    "hint": "Set G M m / x² = G (441M) m / (L - x)². Take square roots: 1/x = 21/(L - x).",
    "formula": "x = L / (1 + √441) = L / 22",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 20",
      "asked": "Net interaction force or equilibrium position",
      "formula": "x = L / (1 + √441) = L / 22",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = L / 22",
      "keyTakeaway": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)).",
      "commonTrap": "Measuring x from the larger mass instead of the smaller mass."
    },
    "explanation": "The zero-force equilibrium point lies closer to the smaller mass at distance x = L / (1 + √(m₂/m₁)). Formulated via x = L / (1 + √441) = L / 22.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-021",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Three identical point masses of mass m = 1 kg are positioned at the three vertices of an equilateral triangle of side length a = 2 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (1)² / (2)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (1)² / (2)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (1)² / (2)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 21",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (1)² / (2)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-022",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Three identical point masses of mass m = 2 kg are positioned at the three vertices of an equilateral triangle of side length a = 3 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (2)² / (3)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (2)² / (3)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (2)² / (3)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 22",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (2)² / (3)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-023",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Three identical point masses of mass m = 3 kg are positioned at the three vertices of an equilateral triangle of side length a = 4 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (3)² / (4)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (3)² / (4)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (3)² / (4)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 23",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (3)² / (4)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-024",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Three identical point masses of mass m = 4 kg are positioned at the three vertices of an equilateral triangle of side length a = 5 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (4)² / (5)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (4)² / (5)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (4)² / (5)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 24",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (4)² / (5)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-025",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Three identical point masses of mass m = 5 kg are positioned at the three vertices of an equilateral triangle of side length a = 6 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (5)² / (6)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (5)² / (6)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (5)² / (6)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 25",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (5)² / (6)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-026",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Three identical point masses of mass m = 6 kg are positioned at the three vertices of an equilateral triangle of side length a = 7 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (6)² / (7)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (6)² / (7)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (6)² / (7)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 26",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (6)² / (7)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-027",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Three identical point masses of mass m = 7 kg are positioned at the three vertices of an equilateral triangle of side length a = 8 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (7)² / (8)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (7)² / (8)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (7)² / (8)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 27",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (7)² / (8)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-028",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Three identical point masses of mass m = 8 kg are positioned at the three vertices of an equilateral triangle of side length a = 9 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (8)² / (9)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (8)² / (9)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (8)² / (9)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 28",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (8)² / (9)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-029",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Three identical point masses of mass m = 9 kg are positioned at the three vertices of an equilateral triangle of side length a = 10 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (9)² / (10)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (9)² / (10)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (9)² / (10)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 29",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (9)² / (10)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-030",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Three identical point masses of mass m = 10 kg are positioned at the three vertices of an equilateral triangle of side length a = 11 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (10)² / (11)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (10)² / (11)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (10)² / (11)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 30",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (10)² / (11)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-031",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Three identical point masses of mass m = 11 kg are positioned at the three vertices of an equilateral triangle of side length a = 12 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (11)² / (12)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (11)² / (12)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (11)² / (12)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 31",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (11)² / (12)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-032",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Three identical point masses of mass m = 12 kg are positioned at the three vertices of an equilateral triangle of side length a = 13 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (12)² / (13)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (12)² / (13)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (12)² / (13)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 32",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (12)² / (13)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-033",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Three identical point masses of mass m = 13 kg are positioned at the three vertices of an equilateral triangle of side length a = 14 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (13)² / (14)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (13)² / (14)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (13)² / (14)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 33",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (13)² / (14)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-034",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Three identical point masses of mass m = 14 kg are positioned at the three vertices of an equilateral triangle of side length a = 15 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (14)² / (15)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (14)² / (15)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (14)² / (15)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 34",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (14)² / (15)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-035",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Three identical point masses of mass m = 15 kg are positioned at the three vertices of an equilateral triangle of side length a = 16 m. What is the magnitude of the net gravitational force acting on any one of the vertex masses?",
    "options": [
      {
        "label": "A",
        "text": "F_net = √3 · G · (15)² / (16)²"
      },
      {
        "label": "B",
        "text": "F_net = 2 · G · (15)² / (16)²"
      },
      {
        "label": "C",
        "text": "F_net = (√3/2) · G · (15)² / (16)²"
      },
      {
        "label": "D",
        "text": "F_net = 0"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two equal forces of magnitude F₀ = G m² / a² act at an angle of 60° to each other. Use vector resultant: 2 F₀ cos(30°) = √3 F₀.",
    "formula": "F_net = √3 · G · m² / a²",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 35",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = √3 · G · m² / a²",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = √3 · G · (15)² / (16)²",
      "keyTakeaway": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector.",
      "commonTrap": "Adding forces as simple scalars (2 F₀) instead of vector addition."
    },
    "explanation": "For an equilateral triangle, the resultant force on each vertex is √3 times the side interaction force, pointing along the angle bisector. Formulated via F_net = √3 · G · m² / a².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-036",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Four equal point particles of mass m = 1 kg are arranged at the corners of a flat square of side length a = 2 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (1)² / (2)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (1)² / (2)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (1)² / (2)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (1)² / (2)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 36",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (1)² / (2)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-037",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Four equal point particles of mass m = 2 kg are arranged at the corners of a flat square of side length a = 4 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (2)² / (4)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (2)² / (4)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (2)² / (4)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (2)² / (4)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 37",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (2)² / (4)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-038",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Four equal point particles of mass m = 3 kg are arranged at the corners of a flat square of side length a = 6 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (3)² / (6)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (3)² / (6)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (3)² / (6)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (3)² / (6)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 38",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (3)² / (6)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-039",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Four equal point particles of mass m = 4 kg are arranged at the corners of a flat square of side length a = 8 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (4)² / (8)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (4)² / (8)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (4)² / (8)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (4)² / (8)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 39",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (4)² / (8)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-040",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Four equal point particles of mass m = 5 kg are arranged at the corners of a flat square of side length a = 10 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (5)² / (10)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (5)² / (10)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (5)² / (10)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (5)² / (10)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 40",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (5)² / (10)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-041",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Four equal point particles of mass m = 6 kg are arranged at the corners of a flat square of side length a = 12 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (6)² / (12)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (6)² / (12)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (6)² / (12)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (6)² / (12)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 41",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (6)² / (12)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-042",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Four equal point particles of mass m = 7 kg are arranged at the corners of a flat square of side length a = 14 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (7)² / (14)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (7)² / (14)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (7)² / (14)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (7)² / (14)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 42",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (7)² / (14)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-043",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Four equal point particles of mass m = 8 kg are arranged at the corners of a flat square of side length a = 16 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (8)² / (16)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (8)² / (16)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (8)² / (16)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (8)² / (16)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 43",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (8)² / (16)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-044",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Four equal point particles of mass m = 9 kg are arranged at the corners of a flat square of side length a = 18 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (9)² / (18)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (9)² / (18)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (9)² / (18)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (9)² / (18)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 44",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (9)² / (18)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-045",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Four equal point particles of mass m = 10 kg are arranged at the corners of a flat square of side length a = 20 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (10)² / (20)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (10)² / (20)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (10)² / (20)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (10)² / (20)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 45",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (10)² / (20)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-046",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Four equal point particles of mass m = 11 kg are arranged at the corners of a flat square of side length a = 22 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (11)² / (22)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (11)² / (22)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (11)² / (22)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (11)² / (22)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 46",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (11)² / (22)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-047",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Four equal point particles of mass m = 12 kg are arranged at the corners of a flat square of side length a = 24 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (12)² / (24)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (12)² / (24)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (12)² / (24)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (12)² / (24)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 47",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (12)² / (24)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-048",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Four equal point particles of mass m = 13 kg are arranged at the corners of a flat square of side length a = 26 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (13)² / (26)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (13)² / (26)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (13)² / (26)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (13)² / (26)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 48",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (13)² / (26)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-049",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Four equal point particles of mass m = 14 kg are arranged at the corners of a flat square of side length a = 28 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (14)² / (28)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (14)² / (28)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (14)² / (28)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (14)² / (28)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 49",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (14)² / (28)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-050",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Four equal point particles of mass m = 15 kg are arranged at the corners of a flat square of side length a = 30 m. What is the net gravitational force experienced by any one of the corner particles?",
    "options": [
      {
        "label": "A",
        "text": "F_net = (G · (15)² / (30)²) · (√2 + 1/2)"
      },
      {
        "label": "B",
        "text": "F_net = 3 · G · (15)² / (30)²"
      },
      {
        "label": "C",
        "text": "F_net = 2√2 · G · (15)² / (30)²"
      },
      {
        "label": "D",
        "text": "F_net = (G · (15)² / (30)²) · (1 + √2)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Two adjacent masses at distance a exert perpendicular forces (resultant √2 F₀). The diagonally opposite mass at distance a√2 exerts F₀/2 in the same direction.",
    "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 50",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F_net = (G m² / a²) · (√2 + 1/2)",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F_net = (G · (15)² / (30)²) · (√2 + 1/2)",
      "keyTakeaway": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center.",
      "commonTrap": "Forgetting that diagonal distance is a√2 so its denominator is (a√2)² = 2a²."
    },
    "explanation": "In a square of four equal masses, corner force equals (√2 + 0.5) G m² / a² directed toward the center. Formulated via F_net = (G m² / a²) · (√2 + 1/2).",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-051",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A uniform thin straight rod of mass M = 10 kg and length L = 1 m lies on the x-axis from x = 0 to x = 1 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 3 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [3 · (4)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (3.5)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (3)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(3)² + (1)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [3 · 4]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 51",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [3 · 4]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [3 · (4)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [3 · 4].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-052",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A uniform thin straight rod of mass M = 20 kg and length L = 2 m lies on the x-axis from x = 0 to x = 2 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 4 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [4 · (6)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (5)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (4)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(4)² + (2)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [4 · 6]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 52",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [4 · 6]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [4 · (6)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [4 · 6].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-053",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A uniform thin straight rod of mass M = 30 kg and length L = 3 m lies on the x-axis from x = 0 to x = 3 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 5 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [5 · (8)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (6.5)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (5)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(5)² + (3)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [5 · 8]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 53",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [5 · 8]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [5 · (8)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [5 · 8].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-054",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A uniform thin straight rod of mass M = 40 kg and length L = 4 m lies on the x-axis from x = 0 to x = 4 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 6 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [6 · (10)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (8)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (6)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(6)² + (4)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [6 · 10]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 54",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [6 · 10]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [6 · (10)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [6 · 10].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-055",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A uniform thin straight rod of mass M = 50 kg and length L = 5 m lies on the x-axis from x = 0 to x = 5 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 7 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [7 · (12)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (9.5)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (7)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(7)² + (5)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [7 · 12]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 55",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [7 · 12]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [7 · (12)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [7 · 12].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-056",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A uniform thin straight rod of mass M = 60 kg and length L = 6 m lies on the x-axis from x = 0 to x = 6 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 8 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [8 · (14)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (11)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (8)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(8)² + (6)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [8 · 14]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 56",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [8 · 14]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [8 · (14)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [8 · 14].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-057",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A uniform thin straight rod of mass M = 70 kg and length L = 7 m lies on the x-axis from x = 0 to x = 7 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 9 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [9 · (16)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (12.5)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (9)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(9)² + (7)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [9 · 16]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 57",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [9 · 16]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [9 · (16)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [9 · 16].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-058",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A uniform thin straight rod of mass M = 80 kg and length L = 8 m lies on the x-axis from x = 0 to x = 8 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 10 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [10 · (18)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (14)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (10)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(10)² + (8)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [10 · 18]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 58",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [10 · 18]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [10 · (18)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [10 · 18].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-059",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A uniform thin straight rod of mass M = 90 kg and length L = 9 m lies on the x-axis from x = 0 to x = 9 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 11 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [11 · (20)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (15.5)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (11)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(11)² + (9)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [11 · 20]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 59",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [11 · 20]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [11 · (20)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [11 · 20].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-060",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A uniform thin straight rod of mass M = 100 kg and length L = 10 m lies on the x-axis from x = 0 to x = 10 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 12 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [12 · (22)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (17)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (12)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(12)² + (10)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [12 · 22]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 60",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [12 · 22]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [12 · (22)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [12 · 22].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-061",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A uniform thin straight rod of mass M = 110 kg and length L = 11 m lies on the x-axis from x = 0 to x = 11 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 13 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [13 · (24)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (18.5)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (13)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(13)² + (11)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [13 · 24]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 61",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [13 · 24]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [13 · (24)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [13 · 24].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-062",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A uniform thin straight rod of mass M = 120 kg and length L = 12 m lies on the x-axis from x = 0 to x = 12 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 14 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [14 · (26)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (20)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (14)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(14)² + (12)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [14 · 26]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 62",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [14 · 26]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [14 · (26)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [14 · 26].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-063",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A uniform thin straight rod of mass M = 130 kg and length L = 13 m lies on the x-axis from x = 0 to x = 13 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 15 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [15 · (28)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (21.5)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (15)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(15)² + (13)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [15 · 28]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 63",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [15 · 28]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [15 · (28)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [15 · 28].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-064",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A uniform thin straight rod of mass M = 140 kg and length L = 14 m lies on the x-axis from x = 0 to x = 14 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 16 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [16 · (30)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (23)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (16)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(16)² + (14)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [16 · 30]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 64",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [16 · 30]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [16 · (30)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [16 · 30].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-065",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A uniform thin straight rod of mass M = 150 kg and length L = 15 m lies on the x-axis from x = 0 to x = 15 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 17 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [17 · (32)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (24.5)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (17)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(17)² + (15)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [17 · 32]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 65",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [17 · 32]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [17 · (32)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [17 · 32].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-066",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A uniform thin straight rod of mass M = 160 kg and length L = 16 m lies on the x-axis from x = 0 to x = 16 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 18 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [18 · (34)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (26)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (18)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(18)² + (16)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [18 · 34]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 66",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [18 · 34]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [18 · (34)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [18 · 34].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-067",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A uniform thin straight rod of mass M = 170 kg and length L = 17 m lies on the x-axis from x = 0 to x = 17 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 19 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [19 · (36)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (27.5)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (19)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(19)² + (17)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [19 · 36]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 67",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [19 · 36]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [19 · (36)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [19 · 36].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-068",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A uniform thin straight rod of mass M = 180 kg and length L = 18 m lies on the x-axis from x = 0 to x = 18 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 20 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [20 · (38)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (29)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (20)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(20)² + (18)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [20 · 38]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 68",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [20 · 38]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [20 · (38)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [20 · 38].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-069",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "A uniform thin straight rod of mass M = 190 kg and length L = 19 m lies on the x-axis from x = 0 to x = 19 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 21 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [21 · (40)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (30.5)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (21)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(21)² + (19)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [21 · 40]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 69",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [21 · 40]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [21 · (40)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [21 · 40].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-M-070",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "A uniform thin straight rod of mass M = 200 kg and length L = 20 m lies on the x-axis from x = 0 to x = 20 m. What is the gravitational force exerted by this rod on a point mass m located on the x-axis at distance d = 22 m from the nearest end?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [22 · (42)]"
      },
      {
        "label": "B",
        "text": "F = G M m / (32)²"
      },
      {
        "label": "C",
        "text": "F = G M m / (22)²"
      },
      {
        "label": "D",
        "text": "F = G M m / [(22)² + (20)²]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate element dF = G m (M/L dx) / x² from x = d to x = d + L.",
    "formula": "F = G M m / [d (d + L)] = G M m / [22 · 42]",
    "stepByStep": {
      "given": "Configuration for FNL Medium Question 70",
      "asked": "Net interaction force or equilibrium position",
      "formula": "F = G M m / [d (d + L)] = G M m / [22 · 42]",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [22 · (42)]",
      "keyTakeaway": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²!",
      "commonTrap": "Assuming the entire mass of the rod can be placed at its center of mass."
    },
    "explanation": "A uniform rod acts as if the effective distance squared is d(d+L), NOT the center of mass squared (d + L/2)²! Formulated via F = G M m / [d (d + L)] = G M m / [22 · 42].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-001",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A uniform circular ring of mass M = 5 kg and radius R = 1 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 1 / √2 m (approx. 0.707 m)"
      },
      {
        "label": "B",
        "text": "x = 1 m"
      },
      {
        "label": "C",
        "text": "x = 0.5 m"
      },
      {
        "label": "D",
        "text": "x = 1 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 1",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 1 / √2 m (approx. 0.707 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-002",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A uniform circular ring of mass M = 10 kg and radius R = 2 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 2 / √2 m (approx. 1.414 m)"
      },
      {
        "label": "B",
        "text": "x = 2 m"
      },
      {
        "label": "C",
        "text": "x = 1 m"
      },
      {
        "label": "D",
        "text": "x = 2 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 2",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 2 / √2 m (approx. 1.414 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-003",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A uniform circular ring of mass M = 15 kg and radius R = 3 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 3 / √2 m (approx. 2.121 m)"
      },
      {
        "label": "B",
        "text": "x = 3 m"
      },
      {
        "label": "C",
        "text": "x = 1.5 m"
      },
      {
        "label": "D",
        "text": "x = 3 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 3",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 3 / √2 m (approx. 2.121 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-004",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A uniform circular ring of mass M = 20 kg and radius R = 4 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 4 / √2 m (approx. 2.828 m)"
      },
      {
        "label": "B",
        "text": "x = 4 m"
      },
      {
        "label": "C",
        "text": "x = 2 m"
      },
      {
        "label": "D",
        "text": "x = 4 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 4",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 4 / √2 m (approx. 2.828 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-005",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A uniform circular ring of mass M = 25 kg and radius R = 5 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 5 / √2 m (approx. 3.536 m)"
      },
      {
        "label": "B",
        "text": "x = 5 m"
      },
      {
        "label": "C",
        "text": "x = 2.5 m"
      },
      {
        "label": "D",
        "text": "x = 5 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 5",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 5 / √2 m (approx. 3.536 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-006",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A uniform circular ring of mass M = 30 kg and radius R = 6 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 6 / √2 m (approx. 4.243 m)"
      },
      {
        "label": "B",
        "text": "x = 6 m"
      },
      {
        "label": "C",
        "text": "x = 3 m"
      },
      {
        "label": "D",
        "text": "x = 6 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 6",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 6 / √2 m (approx. 4.243 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-007",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A uniform circular ring of mass M = 35 kg and radius R = 7 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 7 / √2 m (approx. 4.950 m)"
      },
      {
        "label": "B",
        "text": "x = 7 m"
      },
      {
        "label": "C",
        "text": "x = 3.5 m"
      },
      {
        "label": "D",
        "text": "x = 7 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 7",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 7 / √2 m (approx. 4.950 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-008",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A uniform circular ring of mass M = 40 kg and radius R = 8 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 8 / √2 m (approx. 5.657 m)"
      },
      {
        "label": "B",
        "text": "x = 8 m"
      },
      {
        "label": "C",
        "text": "x = 4 m"
      },
      {
        "label": "D",
        "text": "x = 8 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 8",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 8 / √2 m (approx. 5.657 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-009",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A uniform circular ring of mass M = 45 kg and radius R = 9 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 9 / √2 m (approx. 6.364 m)"
      },
      {
        "label": "B",
        "text": "x = 9 m"
      },
      {
        "label": "C",
        "text": "x = 4.5 m"
      },
      {
        "label": "D",
        "text": "x = 9 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 9",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 9 / √2 m (approx. 6.364 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-010",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A uniform circular ring of mass M = 50 kg and radius R = 10 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 10 / √2 m (approx. 7.071 m)"
      },
      {
        "label": "B",
        "text": "x = 10 m"
      },
      {
        "label": "C",
        "text": "x = 5 m"
      },
      {
        "label": "D",
        "text": "x = 10 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 10",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 10 / √2 m (approx. 7.071 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-011",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A uniform circular ring of mass M = 55 kg and radius R = 11 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 11 / √2 m (approx. 7.778 m)"
      },
      {
        "label": "B",
        "text": "x = 11 m"
      },
      {
        "label": "C",
        "text": "x = 5.5 m"
      },
      {
        "label": "D",
        "text": "x = 11 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 11",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 11 / √2 m (approx. 7.778 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-012",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A uniform circular ring of mass M = 60 kg and radius R = 12 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 12 / √2 m (approx. 8.485 m)"
      },
      {
        "label": "B",
        "text": "x = 12 m"
      },
      {
        "label": "C",
        "text": "x = 6 m"
      },
      {
        "label": "D",
        "text": "x = 12 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 12",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 12 / √2 m (approx. 8.485 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-013",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A uniform circular ring of mass M = 65 kg and radius R = 13 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 13 / √2 m (approx. 9.192 m)"
      },
      {
        "label": "B",
        "text": "x = 13 m"
      },
      {
        "label": "C",
        "text": "x = 6.5 m"
      },
      {
        "label": "D",
        "text": "x = 13 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 13",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 13 / √2 m (approx. 9.192 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-014",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A uniform circular ring of mass M = 70 kg and radius R = 14 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 14 / √2 m (approx. 9.899 m)"
      },
      {
        "label": "B",
        "text": "x = 14 m"
      },
      {
        "label": "C",
        "text": "x = 7 m"
      },
      {
        "label": "D",
        "text": "x = 14 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 14",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 14 / √2 m (approx. 9.899 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-015",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A uniform circular ring of mass M = 75 kg and radius R = 15 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 15 / √2 m (approx. 10.607 m)"
      },
      {
        "label": "B",
        "text": "x = 15 m"
      },
      {
        "label": "C",
        "text": "x = 7.5 m"
      },
      {
        "label": "D",
        "text": "x = 15 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 15",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 15 / √2 m (approx. 10.607 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-016",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A uniform circular ring of mass M = 80 kg and radius R = 16 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 16 / √2 m (approx. 11.314 m)"
      },
      {
        "label": "B",
        "text": "x = 16 m"
      },
      {
        "label": "C",
        "text": "x = 8 m"
      },
      {
        "label": "D",
        "text": "x = 16 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 16",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 16 / √2 m (approx. 11.314 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-017",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A uniform circular ring of mass M = 85 kg and radius R = 17 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 17 / √2 m (approx. 12.021 m)"
      },
      {
        "label": "B",
        "text": "x = 17 m"
      },
      {
        "label": "C",
        "text": "x = 8.5 m"
      },
      {
        "label": "D",
        "text": "x = 17 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 17",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 17 / √2 m (approx. 12.021 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-018",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A uniform circular ring of mass M = 90 kg and radius R = 18 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 18 / √2 m (approx. 12.728 m)"
      },
      {
        "label": "B",
        "text": "x = 18 m"
      },
      {
        "label": "C",
        "text": "x = 9 m"
      },
      {
        "label": "D",
        "text": "x = 18 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 18",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 18 / √2 m (approx. 12.728 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-019",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A uniform circular ring of mass M = 95 kg and radius R = 19 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 19 / √2 m (approx. 13.435 m)"
      },
      {
        "label": "B",
        "text": "x = 19 m"
      },
      {
        "label": "C",
        "text": "x = 9.5 m"
      },
      {
        "label": "D",
        "text": "x = 19 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 19",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 19 / √2 m (approx. 13.435 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-020",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A uniform circular ring of mass M = 100 kg and radius R = 20 m is fixed in the y-z plane centered at the origin. At what distance x > 0 along the x-axis is the gravitational attraction exerted by this ring on an axial test mass m at its maximum value?",
    "options": [
      {
        "label": "A",
        "text": "x = 20 / √2 m (approx. 14.142 m)"
      },
      {
        "label": "B",
        "text": "x = 20 m"
      },
      {
        "label": "C",
        "text": "x = 10 m"
      },
      {
        "label": "D",
        "text": "x = 20 · √2 m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Force along axis is F(x) = G M m x / (R² + x²)^(3/2). Set dF/dx = 0 to find the extremum.",
    "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 20",
      "asked": "Derived expression or critical value",
      "formula": "dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: x = 20 / √2 m (approx. 14.142 m)",
      "keyTakeaway": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center.",
      "commonTrap": "Assuming the maximum occurs at x = R or x = 0."
    },
    "explanation": "The gravitational force of a uniform ring peaks at distance x = R / √2 from its center. Formulated via dF/dx = 0 ⇒ R² - 2x² = 0 ⇒ x = R / √2.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-021",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A solid uniform sphere of radius R = 3 m and mass M has a spherical cavity of radius R/3 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (27 · (d - 0.6666666666666666R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (3 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (26/27) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/3)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/3)³ / R³ = M / 27. Center of cavity is displaced by R - R/3 = 0.6666666666666666R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 21",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (27 · (d - 0.6666666666666666R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-022",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A solid uniform sphere of radius R = 6 m and mass M has a spherical cavity of radius R/4 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (64 · (d - 0.75R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (4 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (63/64) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/4)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/4)³ / R³ = M / 64. Center of cavity is displaced by R - R/4 = 0.75R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 22",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (64 · (d - 0.75R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-023",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A solid uniform sphere of radius R = 9 m and mass M has a spherical cavity of radius R/5 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (125 · (d - 0.8R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (5 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (124/125) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/5)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/5)³ / R³ = M / 125. Center of cavity is displaced by R - R/5 = 0.8R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 23",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (125 · (d - 0.8R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-024",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A solid uniform sphere of radius R = 12 m and mass M has a spherical cavity of radius R/2 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (8 · (d - 0.5R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (2 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (7/8) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/2)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/2)³ / R³ = M / 8. Center of cavity is displaced by R - R/2 = 0.5R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 24",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (8 · (d - 0.5R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-025",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A solid uniform sphere of radius R = 15 m and mass M has a spherical cavity of radius R/3 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (27 · (d - 0.6666666666666666R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (3 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (26/27) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/3)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/3)³ / R³ = M / 27. Center of cavity is displaced by R - R/3 = 0.6666666666666666R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 25",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (27 · (d - 0.6666666666666666R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-026",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A solid uniform sphere of radius R = 18 m and mass M has a spherical cavity of radius R/4 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (64 · (d - 0.75R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (4 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (63/64) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/4)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/4)³ / R³ = M / 64. Center of cavity is displaced by R - R/4 = 0.75R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 26",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (64 · (d - 0.75R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-027",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A solid uniform sphere of radius R = 21 m and mass M has a spherical cavity of radius R/5 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (125 · (d - 0.8R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (5 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (124/125) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/5)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/5)³ / R³ = M / 125. Center of cavity is displaced by R - R/5 = 0.8R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 27",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (125 · (d - 0.8R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-028",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A solid uniform sphere of radius R = 24 m and mass M has a spherical cavity of radius R/2 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (8 · (d - 0.5R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (2 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (7/8) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/2)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/2)³ / R³ = M / 8. Center of cavity is displaced by R - R/2 = 0.5R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 28",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (8 · (d - 0.5R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-029",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A solid uniform sphere of radius R = 27 m and mass M has a spherical cavity of radius R/3 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (27 · (d - 0.6666666666666666R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (3 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (26/27) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/3)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/3)³ / R³ = M / 27. Center of cavity is displaced by R - R/3 = 0.6666666666666666R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 29",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (27 · (d - 0.6666666666666666R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-030",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A solid uniform sphere of radius R = 30 m and mass M has a spherical cavity of radius R/4 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (64 · (d - 0.75R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (4 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (63/64) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/4)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/4)³ / R³ = M / 64. Center of cavity is displaced by R - R/4 = 0.75R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 30",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (64 · (d - 0.75R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-031",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A solid uniform sphere of radius R = 33 m and mass M has a spherical cavity of radius R/5 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (125 · (d - 0.8R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (5 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (124/125) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/5)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/5)³ / R³ = M / 125. Center of cavity is displaced by R - R/5 = 0.8R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 31",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (125 · (d - 0.8R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-032",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A solid uniform sphere of radius R = 36 m and mass M has a spherical cavity of radius R/2 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (8 · (d - 0.5R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (2 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (7/8) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/2)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/2)³ / R³ = M / 8. Center of cavity is displaced by R - R/2 = 0.5R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 32",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (8 · (d - 0.5R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-033",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A solid uniform sphere of radius R = 39 m and mass M has a spherical cavity of radius R/3 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (27 · (d - 0.6666666666666666R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (3 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (26/27) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/3)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/3)³ / R³ = M / 27. Center of cavity is displaced by R - R/3 = 0.6666666666666666R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 33",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (27 · (d - 0.6666666666666666R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-034",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A solid uniform sphere of radius R = 42 m and mass M has a spherical cavity of radius R/4 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (64 · (d - 0.75R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (4 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (63/64) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/4)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/4)³ / R³ = M / 64. Center of cavity is displaced by R - R/4 = 0.75R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 34",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (64 · (d - 0.75R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-035",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A solid uniform sphere of radius R = 45 m and mass M has a spherical cavity of radius R/5 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (125 · (d - 0.8R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (5 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (124/125) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/5)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/5)³ / R³ = M / 125. Center of cavity is displaced by R - R/5 = 0.8R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 35",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (125 · (d - 0.8R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-036",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A solid uniform sphere of radius R = 48 m and mass M has a spherical cavity of radius R/2 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (8 · (d - 0.5R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (2 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (7/8) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/2)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/2)³ / R³ = M / 8. Center of cavity is displaced by R - R/2 = 0.5R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 36",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (8 · (d - 0.5R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-037",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A solid uniform sphere of radius R = 51 m and mass M has a spherical cavity of radius R/3 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (27 · (d - 0.6666666666666666R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (3 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (26/27) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/3)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/3)³ / R³ = M / 27. Center of cavity is displaced by R - R/3 = 0.6666666666666666R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 37",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (27 · (d - 0.6666666666666666R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/27) m / (d - 0.6666666666666666R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-038",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A solid uniform sphere of radius R = 54 m and mass M has a spherical cavity of radius R/4 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (64 · (d - 0.75R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (4 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (63/64) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/4)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/4)³ / R³ = M / 64. Center of cavity is displaced by R - R/4 = 0.75R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 38",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (64 · (d - 0.75R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/64) m / (d - 0.75R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-039",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A solid uniform sphere of radius R = 57 m and mass M has a spherical cavity of radius R/5 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (125 · (d - 0.8R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (5 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (124/125) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/5)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/5)³ / R³ = M / 125. Center of cavity is displaced by R - R/5 = 0.8R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 39",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (125 · (d - 0.8R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/125) m / (d - 0.8R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-040",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A solid uniform sphere of radius R = 60 m and mass M has a spherical cavity of radius R/2 hollowed out inside it, tangential to its outer surface. What is the gravitational force exerted by this hollowed sphere on an external point mass m located at distance d from the sphere's center along the line of centers on the cavity side?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m · [ 1/d² - 1 / (8 · (d - 0.5R)²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m · [ 1/d² - 1 / (2 · (d - R/2)²) ]"
      },
      {
        "label": "C",
        "text": "F = (7/8) · G M m / d²"
      },
      {
        "label": "D",
        "text": "F = G M m / (d - R/2)²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Cavity mass scales with volume: M_cav = M · (R/2)³ / R³ = M / 8. Center of cavity is displaced by R - R/2 = 0.5R.",
    "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)²",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 40",
      "asked": "Derived expression or critical value",
      "formula": "F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)²",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m · [ 1/d² - 1 / (8 · (d - 0.5R)²) ]",
      "keyTakeaway": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force.",
      "commonTrap": "Scaling cavity mass with radius (1/n) instead of volume (1/n³)."
    },
    "explanation": "Cavity problems are solved by subtracting the force of the removed cavity mass from the intact body force. Formulated via F_net = F_solid - F_cavity = G M m / d² - G (M/8) m / (d - 0.5R)².",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-041",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two identical uniform solid spheres, each of radius r = 0.5 m and density ρ = 1500 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 41",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-042",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two identical uniform solid spheres, each of radius r = 1 m and density ρ = 2000 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 42",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-043",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two identical uniform solid spheres, each of radius r = 1.5 m and density ρ = 2500 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 43",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-044",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two identical uniform solid spheres, each of radius r = 2 m and density ρ = 3000 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 44",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-045",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two identical uniform solid spheres, each of radius r = 2.5 m and density ρ = 3500 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 45",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-046",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two identical uniform solid spheres, each of radius r = 3 m and density ρ = 4000 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 46",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-047",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two identical uniform solid spheres, each of radius r = 3.5 m and density ρ = 4500 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 47",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-048",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two identical uniform solid spheres, each of radius r = 4 m and density ρ = 5000 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 48",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-049",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two identical uniform solid spheres, each of radius r = 4.5 m and density ρ = 5500 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 49",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-050",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two identical uniform solid spheres, each of radius r = 5 m and density ρ = 6000 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 50",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-051",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two identical uniform solid spheres, each of radius r = 5.5 m and density ρ = 6500 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 51",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-052",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two identical uniform solid spheres, each of radius r = 6 m and density ρ = 7000 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 52",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-053",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two identical uniform solid spheres, each of radius r = 6.5 m and density ρ = 7500 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 53",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-054",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "Two identical uniform solid spheres, each of radius r = 7 m and density ρ = 8000 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 54",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-055",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "Two identical uniform solid spheres, each of radius r = 7.5 m and density ρ = 8500 kg/m³, are placed in contact touching each other. How does the mutual gravitational attraction F between them scale if both spheres have their radius scaled by a factor of k while maintaining constant density?",
    "options": [
      {
        "label": "A",
        "text": "F ∝ k⁴ (scales with the fourth power of linear dimension)"
      },
      {
        "label": "B",
        "text": "F ∝ k²"
      },
      {
        "label": "C",
        "text": "F ∝ k⁶"
      },
      {
        "label": "D",
        "text": "F ∝ 1 / k²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Mass m ∝ ρ r³ ∝ k³. Separation distance between centers is 2r ∝ k. F = G m² / (2r)² ∝ (k³)² / k² = k⁴.",
    "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 55",
      "asked": "Derived expression or critical value",
      "formula": "F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F ∝ k⁴ (scales with the fourth power of linear dimension)",
      "keyTakeaway": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴).",
      "commonTrap": "Applying the inverse-square law without accounting for mass growth."
    },
    "explanation": "For touching spheres of constant density, gravitational force scales as the fourth power of radius (r⁴). Formulated via F = G [ (4/3)πρ r³ ]² / (2r)² = (4/9) π² G ρ² r⁴ ∝ r⁴.",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-056",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A thin uniform straight rod of total length 2L = 2 m and mass M lies on the x-axis centered at the origin (from x = -1 m to x = +1 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 2 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 2 · √(2² + 1²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (2² + 1²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 2²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 2² + 1² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 56",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 2 · √(2² + 1²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-057",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A thin uniform straight rod of total length 2L = 4 m and mass M lies on the x-axis centered at the origin (from x = -2 m to x = +2 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 3 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 3 · √(3² + 2²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (3² + 2²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 3²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 3² + 2² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 57",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 3 · √(3² + 2²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-058",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A thin uniform straight rod of total length 2L = 6 m and mass M lies on the x-axis centered at the origin (from x = -3 m to x = +3 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 4 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 4 · √(4² + 3²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (4² + 3²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 4²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 4² + 3² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 58",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 4 · √(4² + 3²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-059",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A thin uniform straight rod of total length 2L = 8 m and mass M lies on the x-axis centered at the origin (from x = -4 m to x = +4 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 5 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 5 · √(5² + 4²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (5² + 4²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 5²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 5² + 4² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 59",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 5 · √(5² + 4²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-060",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A thin uniform straight rod of total length 2L = 10 m and mass M lies on the x-axis centered at the origin (from x = -5 m to x = +5 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 6 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 6 · √(6² + 5²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (6² + 5²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 6²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 6² + 5² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 60",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 6 · √(6² + 5²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-061",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A thin uniform straight rod of total length 2L = 12 m and mass M lies on the x-axis centered at the origin (from x = -6 m to x = +6 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 7 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 7 · √(7² + 6²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (7² + 6²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 7²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 7² + 6² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 61",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 7 · √(7² + 6²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-062",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A thin uniform straight rod of total length 2L = 14 m and mass M lies on the x-axis centered at the origin (from x = -7 m to x = +7 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 8 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 8 · √(8² + 7²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (8² + 7²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 8²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 8² + 7² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 62",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 8 · √(8² + 7²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-063",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A thin uniform straight rod of total length 2L = 16 m and mass M lies on the x-axis centered at the origin (from x = -8 m to x = +8 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 9 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 9 · √(9² + 8²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (9² + 8²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 9²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 9² + 8² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 63",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 9 · √(9² + 8²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-064",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A thin uniform straight rod of total length 2L = 18 m and mass M lies on the x-axis centered at the origin (from x = -9 m to x = +9 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 10 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 10 · √(10² + 9²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (10² + 9²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 10²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 10² + 9² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 64",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 10 · √(10² + 9²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-065",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A thin uniform straight rod of total length 2L = 20 m and mass M lies on the x-axis centered at the origin (from x = -10 m to x = +10 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 11 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 11 · √(11² + 10²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (11² + 10²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 11²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 11² + 10² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 65",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 11 · √(11² + 10²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-066",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A thin uniform straight rod of total length 2L = 22 m and mass M lies on the x-axis centered at the origin (from x = -11 m to x = +11 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 12 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 12 · √(12² + 11²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (12² + 11²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 12²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 12² + 11² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 66",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 12 · √(12² + 11²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-067",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A thin uniform straight rod of total length 2L = 24 m and mass M lies on the x-axis centered at the origin (from x = -12 m to x = +12 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 13 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 13 · √(13² + 12²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (13² + 12²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 13²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 13² + 12² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 67",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 13 · √(13² + 12²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-068",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A thin uniform straight rod of total length 2L = 26 m and mass M lies on the x-axis centered at the origin (from x = -13 m to x = +13 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 14 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 14 · √(14² + 13²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (14² + 13²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 14²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 14² + 13² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 68",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 14 · √(14² + 13²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-069",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A thin uniform straight rod of total length 2L = 28 m and mass M lies on the x-axis centered at the origin (from x = -14 m to x = +14 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 15 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 15 · √(15² + 14²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (15² + 14²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 15²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 15² + 14² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 69",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 15 · √(15² + 14²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  },
  {
    "id": "FNL-H-070",
    "topic": "fundamentalNewtonLaw",
    "topicName": "Fundamental & Newton's Universal Law",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A thin uniform straight rod of total length 2L = 30 m and mass M lies on the x-axis centered at the origin (from x = -15 m to x = +15 m). What is the gravitational force exerted by this rod on a point particle of mass m located on the y-axis at y = 16 m?",
    "options": [
      {
        "label": "A",
        "text": "F = G M m / [ 16 · √(16² + 15²) ]"
      },
      {
        "label": "B",
        "text": "F = G M m / (16² + 15²)"
      },
      {
        "label": "C",
        "text": "F = G M m / 16²"
      },
      {
        "label": "D",
        "text": "F = 2 G M m / [ 16² + 15² ]"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dF_y = G m (M/2L dx) cos θ / r² over x from -L to +L.",
    "formula": "F = G M m / [ y √(y² + L²) ]",
    "stepByStep": {
      "given": "JEE Advanced problem scenario for FNL Hard Question 70",
      "asked": "Derived expression or critical value",
      "formula": "F = G M m / [ y √(y² + L²) ]",
      "substitution": "Apply integral calculus / volume scaling / superposition",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: F = G M m / [ 16 · √(16² + 15²) ]",
      "keyTakeaway": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)].",
      "commonTrap": "Forgetting to resolve vector components along the bisector."
    },
    "explanation": "Gravitational pull on the perpendicular bisector of a rod is G M m / [y √(y² + L²)]. Formulated via F = G M m / [ y √(y² + L²) ].",
    "category": "fundamentalNewtonLaw"
  }
];

export default questions;
