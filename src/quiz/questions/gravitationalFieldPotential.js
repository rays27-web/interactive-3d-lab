// Topic 3: Gravitational Field & Potential
// Total Questions: 211

export const questions = [
  {
    "id": "GFP-E-001",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the SI unit of gravitational potential V?",
    "options": [
      {
        "label": "A",
        "text": "J / kg (or m²/s²)"
      },
      {
        "label": "B",
        "text": "N / kg"
      },
      {
        "label": "C",
        "text": "J · kg"
      },
      {
        "label": "D",
        "text": "N · m"
      }
    ],
    "correctAnswer": "A",
    "hint": "Gravitational potential is potential energy per unit mass: V = U / m = Joules / kg.",
    "formula": "V = U / m ⇒ [J/kg]",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 1",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = U / m ⇒ [J/kg]",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: J / kg (or m²/s²)",
      "keyTakeaway": "Gravitational potential has SI units of Joules per kilogram (J/kg).",
      "commonTrap": "Confusing potential (J/kg) with field intensity (N/kg)."
    },
    "explanation": "Gravitational potential has SI units of Joules per kilogram (J/kg). Formulated via V = U / m ⇒ [J/kg].",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-002",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the SI unit of gravitational field intensity g⃗?",
    "options": [
      {
        "label": "A",
        "text": "N / kg (or m/s²)"
      },
      {
        "label": "B",
        "text": "J / kg"
      },
      {
        "label": "C",
        "text": "N · m"
      },
      {
        "label": "D",
        "text": "kg / m²"
      }
    ],
    "correctAnswer": "A",
    "hint": "Field intensity is force per unit mass: g⃗ = F⃗ / m.",
    "formula": "g⃗ = F⃗ / m ⇒ [N/kg] = [m/s²]",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 2",
      "asked": "Gravitational potential or field intensity",
      "formula": "g⃗ = F⃗ / m ⇒ [N/kg] = [m/s²]",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: N / kg (or m/s²)",
      "keyTakeaway": "Gravitational field intensity has units of N/kg, dimensionally identical to acceleration (m/s²).",
      "commonTrap": "Thinking field intensity has energy units."
    },
    "explanation": "Gravitational field intensity has units of N/kg, dimensionally identical to acceleration (m/s²). Formulated via g⃗ = F⃗ / m ⇒ [N/kg] = [m/s²].",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-003",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Why is gravitational potential defined with a negative sign (e.g. V = -GM/r)?",
    "options": [
      {
        "label": "A",
        "text": "Because the reference zero is at infinity and gravity is attractive, requiring positive work to separate masses"
      },
      {
        "label": "B",
        "text": "Because mass is considered negative in relativity"
      },
      {
        "label": "C",
        "text": "Because potential energy cannot be positive in physics"
      },
      {
        "label": "D",
        "text": "It is purely arbitrary with no physical meaning"
      }
    ],
    "correctAnswer": "A",
    "hint": "As a mass falls toward the source from infinity, gravity does positive work, lowering potential below zero.",
    "formula": "V(r) = - ∫_∞^r g⃗ · dr⃗ < 0",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 3",
      "asked": "Gravitational potential or field intensity",
      "formula": "V(r) = - ∫_∞^r g⃗ · dr⃗ < 0",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Because the reference zero is at infinity and gravity is attractive, requiring positive work to separate masses",
      "keyTakeaway": "Negative potential signifies a bound system in an attractive field with zero reference at infinity.",
      "commonTrap": "Thinking the negative sign means energy doesn't exist."
    },
    "explanation": "Negative potential signifies a bound system in an attractive field with zero reference at infinity. Formulated via V(r) = - ∫_∞^r g⃗ · dr⃗ < 0.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-004",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Inside a uniform thin spherical shell of mass M and radius R, the gravitational field intensity at any interior point is:",
    "options": [
      {
        "label": "A",
        "text": "Zero everywhere"
      },
      {
        "label": "B",
        "text": "- G M / R²"
      },
      {
        "label": "C",
        "text": "- G M / r²"
      },
      {
        "label": "D",
        "text": "- G M / (2R²)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Newton's shell theorem proves gravitational forces from opposite shell elements cancel completely inside.",
    "formula": "g_inside = 0",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 4",
      "asked": "Gravitational potential or field intensity",
      "formula": "g_inside = 0",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Zero everywhere",
      "keyTakeaway": "Inside a uniform spherical shell, gravitational field is strictly zero everywhere.",
      "commonTrap": "Assuming field is zero only at the geometric center."
    },
    "explanation": "Inside a uniform spherical shell, gravitational field is strictly zero everywhere. Formulated via g_inside = 0.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-005",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Inside a uniform thin spherical shell of mass M and radius R, the gravitational potential at any interior point is:",
    "options": [
      {
        "label": "A",
        "text": "Constant and equal to - G M / R"
      },
      {
        "label": "B",
        "text": "Zero everywhere"
      },
      {
        "label": "C",
        "text": "- G M / r (varying with distance from center)"
      },
      {
        "label": "D",
        "text": "- G M / (2R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Since g = - dV/dr = 0 inside, potential V must be constant and continuous with the surface value.",
    "formula": "V_inside = V_surface = - G M / R",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 5",
      "asked": "Gravitational potential or field intensity",
      "formula": "V_inside = V_surface = - G M / R",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Constant and equal to - G M / R",
      "keyTakeaway": "Potential inside a spherical shell is constant and equals the surface potential -GM/R.",
      "commonTrap": "Assuming potential is zero because field is zero (dV/dr = 0 implies V = constant, not V = 0!)."
    },
    "explanation": "Potential inside a spherical shell is constant and equals the surface potential -GM/R. Formulated via V_inside = V_surface = - G M / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-006",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at the exact center of a uniform solid sphere of mass M and radius R?",
    "options": [
      {
        "label": "A",
        "text": "- 1.5 · (G M / R)"
      },
      {
        "label": "B",
        "text": "- G M / R"
      },
      {
        "label": "C",
        "text": "Zero"
      },
      {
        "label": "D",
        "text": "- 2 · (G M / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Inside a solid sphere: V(r) = - (GM / 2R³) · (3R² - r²). At r = 0, V(0) = - 3/2 (GM/R).",
    "formula": "V_center = - (3/2) G M / R = 1.5 V_surface",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 6",
      "asked": "Gravitational potential or field intensity",
      "formula": "V_center = - (3/2) G M / R = 1.5 V_surface",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: - 1.5 · (G M / R)",
      "keyTakeaway": "Potential at the center of a solid sphere is 1.5 times deeper than at the surface: V_c = 1.5 V_s.",
      "commonTrap": "Assuming center potential is zero because center field is zero."
    },
    "explanation": "Potential at the center of a solid sphere is 1.5 times deeper than at the surface: V_c = 1.5 V_s. Formulated via V_center = - (3/2) G M / R = 1.5 V_surface.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-007",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "How does the gravitational field intensity g(r) vary with radial distance r inside a uniform solid sphere of radius R?",
    "options": [
      {
        "label": "A",
        "text": "Directly proportional to r (g ∝ r)"
      },
      {
        "label": "B",
        "text": "Inversely proportional to r² (g ∝ 1/r²)"
      },
      {
        "label": "C",
        "text": "Remains constant"
      },
      {
        "label": "D",
        "text": "Inversely proportional to r (g ∝ 1/r)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Enclosed mass M(r) ∝ r³. Field g = G M(r) / r² ∝ r³ / r² = r.",
    "formula": "g_inside = (G M / R³) r = (4/3) π G ρ r",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 7",
      "asked": "Gravitational potential or field intensity",
      "formula": "g_inside = (G M / R³) r = (4/3) π G ρ r",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Directly proportional to r (g ∝ r)",
      "keyTakeaway": "Inside a uniform solid planet, gravitational field increases linearly with distance from the center.",
      "commonTrap": "Assuming 1/r² applies inside the mass distribution."
    },
    "explanation": "Inside a uniform solid planet, gravitational field increases linearly with distance from the center. Formulated via g_inside = (G M / R³) r = (4/3) π G ρ r.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-008",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "Two point masses m are separated by distance 2d. What is the net gravitational field intensity at the exact midpoint between them?",
    "options": [
      {
        "label": "A",
        "text": "Zero"
      },
      {
        "label": "B",
        "text": "2 G m / d²"
      },
      {
        "label": "C",
        "text": "G m / d²"
      },
      {
        "label": "D",
        "text": "G m / (2d²)"
      }
    ],
    "correctAnswer": "A",
    "hint": "The two equal masses pull in exactly opposite directions with equal magnitude G m / d².",
    "formula": "g⃗_net = g⃗₁ + g⃗₂ = (G m / d²) - (G m / d²) = 0",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 8",
      "asked": "Gravitational potential or field intensity",
      "formula": "g⃗_net = g⃗₁ + g⃗₂ = (G m / d²) - (G m / d²) = 0",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: Zero",
      "keyTakeaway": "At the midpoint between equal masses, gravitational fields cancel completely by symmetry.",
      "commonTrap": "Adding the fields as scalars (yielding 2Gm/d²) instead of vectors."
    },
    "explanation": "At the midpoint between equal masses, gravitational fields cancel completely by symmetry. Formulated via g⃗_net = g⃗₁ + g⃗₂ = (G m / d²) - (G m / d²) = 0.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-009",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "Two point masses m are separated by distance 2d. What is the gravitational potential at the exact midpoint between them?",
    "options": [
      {
        "label": "A",
        "text": "- 2 G m / d"
      },
      {
        "label": "B",
        "text": "Zero"
      },
      {
        "label": "C",
        "text": "- G m / d"
      },
      {
        "label": "D",
        "text": "- G m / (2d)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Potential is a scalar: V_net = V₁ + V₂ = (-Gm/d) + (-Gm/d) = -2Gm/d.",
    "formula": "V_net = - 2 G m / d",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 9",
      "asked": "Gravitational potential or field intensity",
      "formula": "V_net = - 2 G m / d",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: - 2 G m / d",
      "keyTakeaway": "Gravitational potentials add as scalars; at a null-field point, potential is NOT zero!",
      "commonTrap": "Thinking potential is zero because field is zero."
    },
    "explanation": "Gravitational potentials add as scalars; at a null-field point, potential is NOT zero! Formulated via V_net = - 2 G m / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-010",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the relationship between gravitational field vector g⃗ and gravitational potential V?",
    "options": [
      {
        "label": "A",
        "text": "g⃗ = - ∇V (field is the negative gradient of potential)"
      },
      {
        "label": "B",
        "text": "g⃗ = + ∇V"
      },
      {
        "label": "C",
        "text": "g⃗ = ∫ V dr"
      },
      {
        "label": "D",
        "text": "g⃗ = V / r"
      }
    ],
    "correctAnswer": "A",
    "hint": "Conservative force relation: F⃗ = - ∇U, dividing by test mass gives g⃗ = - ∇V.",
    "formula": "g⃗ = - ∇V = - (∂V/∂x î + ∂V/∂y ĵ + ∂V/∂z k̂)",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 10",
      "asked": "Gravitational potential or field intensity",
      "formula": "g⃗ = - ∇V = - (∂V/∂x î + ∂V/∂y ĵ + ∂V/∂z k̂)",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: g⃗ = - ∇V (field is the negative gradient of potential)",
      "keyTakeaway": "Gravitational field points in the direction of steepest decrease of potential: g⃗ = - ∇V.",
      "commonTrap": "Forgetting the negative sign."
    },
    "explanation": "Gravitational field points in the direction of steepest decrease of potential: g⃗ = - ∇V. Formulated via g⃗ = - ∇V = - (∂V/∂x î + ∂V/∂y ĵ + ∂V/∂z k̂).",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-011",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 2 m from an isolated point mass of 10 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-33.37 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "33.37 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-66.74 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 10 kg, r = 2 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 10 / 2 = -33.37 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 11",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 10 / 2 = -33.37 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -33.37 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 10 / 2 = -33.37 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-012",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 2.5 m from an isolated point mass of 15 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-40.04 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "40.04 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-80.08 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 15 kg, r = 2.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 15 / 2.5 = -40.04 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 12",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 15 / 2.5 = -40.04 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -40.04 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 15 / 2.5 = -40.04 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-013",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 3 m from an isolated point mass of 20 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-44.49 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "44.49 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-88.98 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 20 kg, r = 3 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 20 / 3 = -44.49 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 13",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 20 / 3 = -44.49 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -44.49 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 20 / 3 = -44.49 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-014",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 3.5 m from an isolated point mass of 25 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-47.67 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "47.67 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-95.34 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 25 kg, r = 3.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 25 / 3.5 = -47.67 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 14",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 25 / 3.5 = -47.67 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -47.67 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 25 / 3.5 = -47.67 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-015",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 4 m from an isolated point mass of 30 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-50.05 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "50.05 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-100.10 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 30 kg, r = 4 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 30 / 4 = -50.05 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 15",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 30 / 4 = -50.05 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -50.05 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 30 / 4 = -50.05 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-016",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 4.5 m from an isolated point mass of 35 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-51.91 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "51.91 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-103.82 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 35 kg, r = 4.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 35 / 4.5 = -51.91 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 16",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 35 / 4.5 = -51.91 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -51.91 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 35 / 4.5 = -51.91 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-017",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 5 m from an isolated point mass of 40 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-53.39 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "53.39 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-106.78 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 40 kg, r = 5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 40 / 5 = -53.39 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 17",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 40 / 5 = -53.39 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -53.39 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 40 / 5 = -53.39 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-018",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 5.5 m from an isolated point mass of 45 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-54.61 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "54.61 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-109.22 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 45 kg, r = 5.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 45 / 5.5 = -54.61 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 18",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 45 / 5.5 = -54.61 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -54.61 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 45 / 5.5 = -54.61 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-019",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 6 m from an isolated point mass of 50 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-55.62 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "55.62 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-111.24 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 50 kg, r = 6 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 50 / 6 = -55.62 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 19",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 50 / 6 = -55.62 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -55.62 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 50 / 6 = -55.62 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-020",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 6.5 m from an isolated point mass of 55 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-56.47 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "56.47 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-112.94 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 55 kg, r = 6.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 55 / 6.5 = -56.47 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 20",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 55 / 6.5 = -56.47 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -56.47 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 55 / 6.5 = -56.47 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-021",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 7 m from an isolated point mass of 60 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-57.21 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "57.21 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-114.42 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 60 kg, r = 7 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 60 / 7 = -57.21 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 21",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 60 / 7 = -57.21 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -57.21 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 60 / 7 = -57.21 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-022",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 7.5 m from an isolated point mass of 65 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-57.84 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "57.84 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-115.68 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 65 kg, r = 7.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 65 / 7.5 = -57.84 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 22",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 65 / 7.5 = -57.84 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -57.84 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 65 / 7.5 = -57.84 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-023",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 8 m from an isolated point mass of 70 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-58.40 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "58.40 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-116.80 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 70 kg, r = 8 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 70 / 8 = -58.40 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 23",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 70 / 8 = -58.40 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -58.40 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 70 / 8 = -58.40 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-024",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 8.5 m from an isolated point mass of 75 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-58.89 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "58.89 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-117.78 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 75 kg, r = 8.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 75 / 8.5 = -58.89 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 24",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 75 / 8.5 = -58.89 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -58.89 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 75 / 8.5 = -58.89 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-025",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 9 m from an isolated point mass of 80 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-59.32 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "59.32 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-118.64 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 80 kg, r = 9 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 80 / 9 = -59.32 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 25",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 80 / 9 = -59.32 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -59.32 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 80 / 9 = -59.32 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-026",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 9.5 m from an isolated point mass of 85 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-59.71 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "59.71 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-119.42 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 85 kg, r = 9.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 85 / 9.5 = -59.71 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 26",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 85 / 9.5 = -59.71 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -59.71 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 85 / 9.5 = -59.71 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-027",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 10 m from an isolated point mass of 90 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-60.07 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "60.07 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-120.14 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 90 kg, r = 10 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 90 / 10 = -60.07 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 27",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 90 / 10 = -60.07 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -60.07 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 90 / 10 = -60.07 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-028",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 10.5 m from an isolated point mass of 95 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-60.38 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "60.38 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-120.76 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 95 kg, r = 10.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 95 / 10.5 = -60.38 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 28",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 95 / 10.5 = -60.38 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -60.38 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 95 / 10.5 = -60.38 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-029",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 11 m from an isolated point mass of 100 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-60.67 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "60.67 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-121.34 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 100 kg, r = 11 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 100 / 11 = -60.67 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 29",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 100 / 11 = -60.67 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -60.67 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 100 / 11 = -60.67 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-030",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 11.5 m from an isolated point mass of 105 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-60.94 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "60.94 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-121.88 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 105 kg, r = 11.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 105 / 11.5 = -60.94 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 30",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 105 / 11.5 = -60.94 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -60.94 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 105 / 11.5 = -60.94 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-031",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 12 m from an isolated point mass of 110 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-61.18 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "61.18 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-122.36 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 110 kg, r = 12 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 110 / 12 = -61.18 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 31",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 110 / 12 = -61.18 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -61.18 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 110 / 12 = -61.18 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-032",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 12.5 m from an isolated point mass of 115 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-61.40 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "61.40 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-122.80 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 115 kg, r = 12.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 115 / 12.5 = -61.40 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 32",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 115 / 12.5 = -61.40 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -61.40 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 115 / 12.5 = -61.40 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-033",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 13 m from an isolated point mass of 120 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-61.61 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "61.61 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-123.22 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 120 kg, r = 13 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 120 / 13 = -61.61 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 33",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 120 / 13 = -61.61 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -61.61 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 120 / 13 = -61.61 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-034",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 13.5 m from an isolated point mass of 125 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-61.80 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "61.80 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-123.60 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 125 kg, r = 13.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 125 / 13.5 = -61.80 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 34",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 125 / 13.5 = -61.80 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -61.80 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 125 / 13.5 = -61.80 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-035",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 14 m from an isolated point mass of 130 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-61.97 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "61.97 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-123.94 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 130 kg, r = 14 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 130 / 14 = -61.97 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 35",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 130 / 14 = -61.97 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -61.97 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 130 / 14 = -61.97 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-036",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 14.5 m from an isolated point mass of 135 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-62.14 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "62.14 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-124.28 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 135 kg, r = 14.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 135 / 14.5 = -62.14 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 36",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 135 / 14.5 = -62.14 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -62.14 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 135 / 14.5 = -62.14 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-037",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 15 m from an isolated point mass of 140 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-62.29 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "62.29 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-124.58 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 140 kg, r = 15 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 140 / 15 = -62.29 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 37",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 140 / 15 = -62.29 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -62.29 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 140 / 15 = -62.29 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-038",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 15.5 m from an isolated point mass of 145 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-62.43 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "62.43 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-124.86 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 145 kg, r = 15.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 145 / 15.5 = -62.43 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 38",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 145 / 15.5 = -62.43 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -62.43 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 145 / 15.5 = -62.43 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-039",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 16 m from an isolated point mass of 150 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-62.57 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "62.57 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-125.14 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 150 kg, r = 16 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 150 / 16 = -62.57 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 39",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 150 / 16 = -62.57 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -62.57 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 150 / 16 = -62.57 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-040",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 16.5 m from an isolated point mass of 155 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-62.70 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "62.70 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-125.40 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 155 kg, r = 16.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 155 / 16.5 = -62.70 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 40",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 155 / 16.5 = -62.70 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -62.70 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 155 / 16.5 = -62.70 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-041",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 17 m from an isolated point mass of 160 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-62.81 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "62.81 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-125.62 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 160 kg, r = 17 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 160 / 17 = -62.81 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 41",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 160 / 17 = -62.81 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -62.81 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 160 / 17 = -62.81 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-042",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 17.5 m from an isolated point mass of 165 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-62.93 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "62.93 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-125.86 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 165 kg, r = 17.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 165 / 17.5 = -62.93 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 42",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 165 / 17.5 = -62.93 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -62.93 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 165 / 17.5 = -62.93 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-043",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 18 m from an isolated point mass of 170 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-63.03 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "63.03 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-126.06 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 170 kg, r = 18 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 170 / 18 = -63.03 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 43",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 170 / 18 = -63.03 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -63.03 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 170 / 18 = -63.03 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-044",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 18.5 m from an isolated point mass of 175 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-63.13 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "63.13 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-126.26 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 175 kg, r = 18.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 175 / 18.5 = -63.13 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 44",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 175 / 18.5 = -63.13 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -63.13 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 175 / 18.5 = -63.13 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-045",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 19 m from an isolated point mass of 180 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-63.23 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "63.23 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-126.46 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 180 kg, r = 19 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 180 / 19 = -63.23 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 45",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 180 / 19 = -63.23 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -63.23 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 180 / 19 = -63.23 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-046",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 19.5 m from an isolated point mass of 185 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-63.32 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "63.32 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-126.64 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 185 kg, r = 19.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 185 / 19.5 = -63.32 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 46",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 185 / 19.5 = -63.32 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -63.32 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 185 / 19.5 = -63.32 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-047",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 20 m from an isolated point mass of 190 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-63.40 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "63.40 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-126.80 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 190 kg, r = 20 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 190 / 20 = -63.40 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 47",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 190 / 20 = -63.40 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -63.40 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 190 / 20 = -63.40 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-048",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 20.5 m from an isolated point mass of 195 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-63.48 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "63.48 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-126.96 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 195 kg, r = 20.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 195 / 20.5 = -63.48 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 48",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 195 / 20.5 = -63.48 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -63.48 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 195 / 20.5 = -63.48 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-049",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 21 m from an isolated point mass of 200 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-63.56 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "63.56 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-127.12 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 200 kg, r = 21 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 200 / 21 = -63.56 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 49",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 200 / 21 = -63.56 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -63.56 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 200 / 21 = -63.56 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-050",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 21.5 m from an isolated point mass of 205 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-63.64 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "63.64 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-127.28 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 205 kg, r = 21.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 205 / 21.5 = -63.64 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 50",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 205 / 21.5 = -63.64 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -63.64 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 205 / 21.5 = -63.64 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-051",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 22 m from an isolated point mass of 210 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-63.71 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "63.71 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-127.42 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 210 kg, r = 22 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 210 / 22 = -63.71 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 51",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 210 / 22 = -63.71 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -63.71 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 210 / 22 = -63.71 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-052",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 22.5 m from an isolated point mass of 215 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-63.77 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "63.77 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-127.54 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 215 kg, r = 22.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 215 / 22.5 = -63.77 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 52",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 215 / 22.5 = -63.77 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -63.77 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 215 / 22.5 = -63.77 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-053",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 23 m from an isolated point mass of 220 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-63.84 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "63.84 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-127.68 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 220 kg, r = 23 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 220 / 23 = -63.84 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 53",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 220 / 23 = -63.84 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -63.84 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 220 / 23 = -63.84 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-054",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 23.5 m from an isolated point mass of 225 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-63.90 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "63.90 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-127.80 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 225 kg, r = 23.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 225 / 23.5 = -63.90 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 54",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 225 / 23.5 = -63.90 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -63.90 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 225 / 23.5 = -63.90 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-055",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 24 m from an isolated point mass of 230 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-63.96 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "63.96 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-127.92 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 230 kg, r = 24 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 230 / 24 = -63.96 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 55",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 230 / 24 = -63.96 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -63.96 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 230 / 24 = -63.96 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-056",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 24.5 m from an isolated point mass of 235 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.02 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.02 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-128.04 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 235 kg, r = 24.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 235 / 24.5 = -64.02 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 56",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 235 / 24.5 = -64.02 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.02 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 235 / 24.5 = -64.02 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-057",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 25 m from an isolated point mass of 240 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.07 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.07 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-128.14 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 240 kg, r = 25 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 240 / 25 = -64.07 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 57",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 240 / 25 = -64.07 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.07 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 240 / 25 = -64.07 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-058",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 25.5 m from an isolated point mass of 245 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.12 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.12 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-128.24 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 245 kg, r = 25.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 245 / 25.5 = -64.12 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 58",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 245 / 25.5 = -64.12 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.12 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 245 / 25.5 = -64.12 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-059",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 26 m from an isolated point mass of 250 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.17 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.17 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-128.34 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 250 kg, r = 26 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 250 / 26 = -64.17 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 59",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 250 / 26 = -64.17 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.17 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 250 / 26 = -64.17 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-060",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 26.5 m from an isolated point mass of 255 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.22 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.22 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-128.44 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 255 kg, r = 26.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 255 / 26.5 = -64.22 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 60",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 255 / 26.5 = -64.22 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.22 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 255 / 26.5 = -64.22 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-061",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 27 m from an isolated point mass of 260 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.27 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.27 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-128.54 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 260 kg, r = 27 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 260 / 27 = -64.27 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 61",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 260 / 27 = -64.27 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.27 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 260 / 27 = -64.27 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-062",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 27.5 m from an isolated point mass of 265 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.31 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.31 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-128.62 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 265 kg, r = 27.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 265 / 27.5 = -64.31 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 62",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 265 / 27.5 = -64.31 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.31 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 265 / 27.5 = -64.31 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-063",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 28 m from an isolated point mass of 270 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.36 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.36 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-128.72 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 270 kg, r = 28 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 270 / 28 = -64.36 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 63",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 270 / 28 = -64.36 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.36 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 270 / 28 = -64.36 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-064",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 28.5 m from an isolated point mass of 275 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.40 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.40 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-128.80 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 275 kg, r = 28.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 275 / 28.5 = -64.40 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 64",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 275 / 28.5 = -64.40 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.40 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 275 / 28.5 = -64.40 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-065",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 29 m from an isolated point mass of 280 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.44 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.44 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-128.88 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 280 kg, r = 29 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 280 / 29 = -64.44 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 65",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 280 / 29 = -64.44 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.44 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 280 / 29 = -64.44 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-066",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 29.5 m from an isolated point mass of 285 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.48 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.48 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-128.96 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 285 kg, r = 29.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 285 / 29.5 = -64.48 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 66",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 285 / 29.5 = -64.48 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.48 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 285 / 29.5 = -64.48 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-067",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 30 m from an isolated point mass of 290 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.52 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.52 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-129.04 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 290 kg, r = 30 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 290 / 30 = -64.52 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 67",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 290 / 30 = -64.52 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.52 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 290 / 30 = -64.52 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-068",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 30.5 m from an isolated point mass of 295 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.55 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.55 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-129.10 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 295 kg, r = 30.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 295 / 30.5 = -64.55 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 68",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 295 / 30.5 = -64.55 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.55 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 295 / 30.5 = -64.55 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-069",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "conceptual",
    "question": "What is the gravitational potential at a distance r = 31 m from an isolated point mass of 300 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.59 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.59 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-129.18 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 300 kg, r = 31 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 300 / 31 = -64.59 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 69",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 300 / 31 = -64.59 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.59 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 300 / 31 = -64.59 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-E-070",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "EASY",
    "examLevel": "CLASS 11-12",
    "type": "numerical",
    "question": "What is the gravitational potential at a distance r = 31.5 m from an isolated point mass of 305 kg in empty space? (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    "options": [
      {
        "label": "A",
        "text": "-64.62 × 10⁻¹¹ J/kg"
      },
      {
        "label": "B",
        "text": "64.62 × 10⁻¹¹ J/kg"
      },
      {
        "label": "C",
        "text": "-129.24 × 10⁻¹¹ J/kg"
      },
      {
        "label": "D",
        "text": "0 J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "Apply V = - G M / r with M = 305 kg, r = 31.5 m.",
    "formula": "V = - (6.674 × 10⁻¹¹) · 305 / 31.5 = -64.62 × 10⁻¹¹ J/kg",
    "stepByStep": {
      "given": "Physical configuration for GFP Easy Question 70",
      "asked": "Gravitational potential or field intensity",
      "formula": "V = - (6.674 × 10⁻¹¹) · 305 / 31.5 = -64.62 × 10⁻¹¹ J/kg",
      "substitution": "Substitute mass and separation distance into potential equation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: -64.62 × 10⁻¹¹ J/kg",
      "keyTakeaway": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r.",
      "commonTrap": "Omitting the negative sign in the answer."
    },
    "explanation": "Gravitational potential of an isolated point mass is strictly negative: V = -GM/r. Formulated via V = - (6.674 × 10⁻¹¹) · 305 / 31.5 = -64.62 × 10⁻¹¹ J/kg.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-001",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two isolated point masses M and 4M are fixed at separation distance d = 10 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 9 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 3 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 4 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √4) = d / 3 from mass M. Potential is V = -GM/x - G(4M)/(d - x).",
    "formula": "V = - G M (1 + √4)² / d = - 9 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 1",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √4)² / d = - 9 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 9 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √4)² / d = - 9 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-002",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two isolated point masses M and 9M are fixed at separation distance d = 20 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 16 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 4 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 9 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √9) = d / 4 from mass M. Potential is V = -GM/x - G(9M)/(d - x).",
    "formula": "V = - G M (1 + √9)² / d = - 16 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 2",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √9)² / d = - 16 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 16 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √9)² / d = - 16 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-003",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two isolated point masses M and 16M are fixed at separation distance d = 30 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 25 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 5 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 16 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √16) = d / 5 from mass M. Potential is V = -GM/x - G(16M)/(d - x).",
    "formula": "V = - G M (1 + √16)² / d = - 25 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 3",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √16)² / d = - 25 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 25 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √16)² / d = - 25 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-004",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two isolated point masses M and 25M are fixed at separation distance d = 40 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 36 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 6 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 25 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √25) = d / 6 from mass M. Potential is V = -GM/x - G(25M)/(d - x).",
    "formula": "V = - G M (1 + √25)² / d = - 36 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 4",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √25)² / d = - 36 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 36 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √25)² / d = - 36 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-005",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two isolated point masses M and 36M are fixed at separation distance d = 50 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 49 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 7 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 36 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √36) = d / 7 from mass M. Potential is V = -GM/x - G(36M)/(d - x).",
    "formula": "V = - G M (1 + √36)² / d = - 49 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 5",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √36)² / d = - 49 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 49 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √36)² / d = - 49 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-006",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two isolated point masses M and 49M are fixed at separation distance d = 60 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 64 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 8 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 49 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √49) = d / 8 from mass M. Potential is V = -GM/x - G(49M)/(d - x).",
    "formula": "V = - G M (1 + √49)² / d = - 64 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 6",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √49)² / d = - 64 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 64 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √49)² / d = - 64 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-007",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two isolated point masses M and 64M are fixed at separation distance d = 70 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 81 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 9 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 64 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √64) = d / 9 from mass M. Potential is V = -GM/x - G(64M)/(d - x).",
    "formula": "V = - G M (1 + √64)² / d = - 81 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 7",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √64)² / d = - 81 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 81 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √64)² / d = - 81 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-008",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two isolated point masses M and 81M are fixed at separation distance d = 80 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 100 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 10 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 81 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √81) = d / 10 from mass M. Potential is V = -GM/x - G(81M)/(d - x).",
    "formula": "V = - G M (1 + √81)² / d = - 100 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 8",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √81)² / d = - 100 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 100 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √81)² / d = - 100 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-009",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two isolated point masses M and 100M are fixed at separation distance d = 90 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 121 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 11 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 100 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √100) = d / 11 from mass M. Potential is V = -GM/x - G(100M)/(d - x).",
    "formula": "V = - G M (1 + √100)² / d = - 121 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 9",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √100)² / d = - 121 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 121 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √100)² / d = - 121 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-010",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two isolated point masses M and 121M are fixed at separation distance d = 100 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 144 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 12 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 121 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √121) = d / 12 from mass M. Potential is V = -GM/x - G(121M)/(d - x).",
    "formula": "V = - G M (1 + √121)² / d = - 144 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 10",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √121)² / d = - 144 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 144 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √121)² / d = - 144 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-011",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two isolated point masses M and 144M are fixed at separation distance d = 110 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 169 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 13 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 144 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √144) = d / 13 from mass M. Potential is V = -GM/x - G(144M)/(d - x).",
    "formula": "V = - G M (1 + √144)² / d = - 169 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 11",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √144)² / d = - 169 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 169 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √144)² / d = - 169 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-012",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two isolated point masses M and 169M are fixed at separation distance d = 120 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 196 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 14 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 169 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √169) = d / 14 from mass M. Potential is V = -GM/x - G(169M)/(d - x).",
    "formula": "V = - G M (1 + √169)² / d = - 196 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 12",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √169)² / d = - 196 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 196 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √169)² / d = - 196 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-013",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two isolated point masses M and 196M are fixed at separation distance d = 130 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 225 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 15 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 196 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √196) = d / 15 from mass M. Potential is V = -GM/x - G(196M)/(d - x).",
    "formula": "V = - G M (1 + √196)² / d = - 225 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 13",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √196)² / d = - 225 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 225 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √196)² / d = - 225 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-014",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two isolated point masses M and 225M are fixed at separation distance d = 140 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 256 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 16 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 225 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √225) = d / 16 from mass M. Potential is V = -GM/x - G(225M)/(d - x).",
    "formula": "V = - G M (1 + √225)² / d = - 256 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 14",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √225)² / d = - 256 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 256 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √225)² / d = - 256 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-015",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two isolated point masses M and 256M are fixed at separation distance d = 150 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 289 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 17 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 256 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √256) = d / 17 from mass M. Potential is V = -GM/x - G(256M)/(d - x).",
    "formula": "V = - G M (1 + √256)² / d = - 289 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 15",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √256)² / d = - 289 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 289 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √256)² / d = - 289 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-016",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two isolated point masses M and 289M are fixed at separation distance d = 160 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 324 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 18 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 289 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √289) = d / 18 from mass M. Potential is V = -GM/x - G(289M)/(d - x).",
    "formula": "V = - G M (1 + √289)² / d = - 324 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 16",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √289)² / d = - 324 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 324 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √289)² / d = - 324 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-017",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two isolated point masses M and 324M are fixed at separation distance d = 170 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 361 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 19 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 324 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √324) = d / 19 from mass M. Potential is V = -GM/x - G(324M)/(d - x).",
    "formula": "V = - G M (1 + √324)² / d = - 361 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 17",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √324)² / d = - 361 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 361 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √324)² / d = - 361 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-018",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two isolated point masses M and 361M are fixed at separation distance d = 180 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 400 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 20 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 361 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √361) = d / 20 from mass M. Potential is V = -GM/x - G(361M)/(d - x).",
    "formula": "V = - G M (1 + √361)² / d = - 400 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 18",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √361)² / d = - 400 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 400 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √361)² / d = - 400 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-019",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two isolated point masses M and 400M are fixed at separation distance d = 190 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 441 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 21 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 400 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √400) = d / 21 from mass M. Potential is V = -GM/x - G(400M)/(d - x).",
    "formula": "V = - G M (1 + √400)² / d = - 441 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 19",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √400)² / d = - 441 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 441 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √400)² / d = - 441 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-020",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two isolated point masses M and 441M are fixed at separation distance d = 200 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 484 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 22 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 441 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √441) = d / 22 from mass M. Potential is V = -GM/x - G(441M)/(d - x).",
    "formula": "V = - G M (1 + √441)² / d = - 484 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 20",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √441)² / d = - 484 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 484 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √441)² / d = - 484 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-021",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two isolated point masses M and 484M are fixed at separation distance d = 210 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 529 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 23 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 484 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √484) = d / 23 from mass M. Potential is V = -GM/x - G(484M)/(d - x).",
    "formula": "V = - G M (1 + √484)² / d = - 529 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 21",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √484)² / d = - 529 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 529 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √484)² / d = - 529 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-022",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two isolated point masses M and 529M are fixed at separation distance d = 220 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 576 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 24 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 529 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √529) = d / 24 from mass M. Potential is V = -GM/x - G(529M)/(d - x).",
    "formula": "V = - G M (1 + √529)² / d = - 576 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 22",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √529)² / d = - 576 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 576 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √529)² / d = - 576 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-023",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two isolated point masses M and 576M are fixed at separation distance d = 230 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 625 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 25 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 576 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √576) = d / 25 from mass M. Potential is V = -GM/x - G(576M)/(d - x).",
    "formula": "V = - G M (1 + √576)² / d = - 625 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 23",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √576)² / d = - 625 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 625 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √576)² / d = - 625 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-024",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two isolated point masses M and 625M are fixed at separation distance d = 240 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 676 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 26 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 625 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √625) = d / 26 from mass M. Potential is V = -GM/x - G(625M)/(d - x).",
    "formula": "V = - G M (1 + √625)² / d = - 676 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 24",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √625)² / d = - 676 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 676 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √625)² / d = - 676 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-025",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two isolated point masses M and 676M are fixed at separation distance d = 250 m. What is the value of the gravitational potential V at the unique point on the segment between them where the net gravitational field intensity is zero?",
    "options": [
      {
        "label": "A",
        "text": "V = - 729 · G M / d"
      },
      {
        "label": "B",
        "text": "V = 0 J/kg"
      },
      {
        "label": "C",
        "text": "V = - 27 · G M / d"
      },
      {
        "label": "D",
        "text": "V = - 676 · G M / d"
      }
    ],
    "correctAnswer": "A",
    "hint": "Null point is at x = d / (1 + √676) = d / 27 from mass M. Potential is V = -GM/x - G(676M)/(d - x).",
    "formula": "V = - G M (1 + √676)² / d = - 729 G M / d",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 25",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M (1 + √676)² / d = - 729 G M / d",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 729 · G M / d",
      "keyTakeaway": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d.",
      "commonTrap": "Assuming potential is zero where the field is zero."
    },
    "explanation": "At the null-field point between two masses, gravitational potential is strictly negative: V = - (1 + √(m₂/m₁))² GM/d. Governed by V = - G M (1 + √676)² / d = - 729 G M / d.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-026",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two thin concentric spherical shells have radii R₁ = 1 m and R₂ = 2 m with masses M₁ = 5 kg and M₂ = 10 kg respectively. What is the gravitational potential at a distance r = 1.5 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 26",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-027",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two thin concentric spherical shells have radii R₁ = 2 m and R₂ = 4 m with masses M₁ = 10 kg and M₂ = 20 kg respectively. What is the gravitational potential at a distance r = 3.0 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 27",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-028",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two thin concentric spherical shells have radii R₁ = 3 m and R₂ = 6 m with masses M₁ = 15 kg and M₂ = 30 kg respectively. What is the gravitational potential at a distance r = 4.5 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 28",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-029",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two thin concentric spherical shells have radii R₁ = 4 m and R₂ = 8 m with masses M₁ = 20 kg and M₂ = 40 kg respectively. What is the gravitational potential at a distance r = 6.0 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 29",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-030",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two thin concentric spherical shells have radii R₁ = 5 m and R₂ = 10 m with masses M₁ = 25 kg and M₂ = 50 kg respectively. What is the gravitational potential at a distance r = 7.5 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 30",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-031",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two thin concentric spherical shells have radii R₁ = 6 m and R₂ = 12 m with masses M₁ = 30 kg and M₂ = 60 kg respectively. What is the gravitational potential at a distance r = 9.0 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 31",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-032",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two thin concentric spherical shells have radii R₁ = 7 m and R₂ = 14 m with masses M₁ = 35 kg and M₂ = 70 kg respectively. What is the gravitational potential at a distance r = 10.5 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 32",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-033",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two thin concentric spherical shells have radii R₁ = 8 m and R₂ = 16 m with masses M₁ = 40 kg and M₂ = 80 kg respectively. What is the gravitational potential at a distance r = 12.0 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 33",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-034",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two thin concentric spherical shells have radii R₁ = 9 m and R₂ = 18 m with masses M₁ = 45 kg and M₂ = 90 kg respectively. What is the gravitational potential at a distance r = 13.5 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 34",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-035",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two thin concentric spherical shells have radii R₁ = 10 m and R₂ = 20 m with masses M₁ = 50 kg and M₂ = 100 kg respectively. What is the gravitational potential at a distance r = 15.0 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 35",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-036",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two thin concentric spherical shells have radii R₁ = 11 m and R₂ = 22 m with masses M₁ = 55 kg and M₂ = 110 kg respectively. What is the gravitational potential at a distance r = 16.5 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 36",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-037",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two thin concentric spherical shells have radii R₁ = 12 m and R₂ = 24 m with masses M₁ = 60 kg and M₂ = 120 kg respectively. What is the gravitational potential at a distance r = 18.0 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 37",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-038",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two thin concentric spherical shells have radii R₁ = 13 m and R₂ = 26 m with masses M₁ = 65 kg and M₂ = 130 kg respectively. What is the gravitational potential at a distance r = 19.5 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 38",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-039",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two thin concentric spherical shells have radii R₁ = 14 m and R₂ = 28 m with masses M₁ = 70 kg and M₂ = 140 kg respectively. What is the gravitational potential at a distance r = 21.0 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 39",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-040",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two thin concentric spherical shells have radii R₁ = 15 m and R₂ = 30 m with masses M₁ = 75 kg and M₂ = 150 kg respectively. What is the gravitational potential at a distance r = 22.5 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 40",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-041",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two thin concentric spherical shells have radii R₁ = 16 m and R₂ = 32 m with masses M₁ = 80 kg and M₂ = 160 kg respectively. What is the gravitational potential at a distance r = 24.0 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 41",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-042",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two thin concentric spherical shells have radii R₁ = 17 m and R₂ = 34 m with masses M₁ = 85 kg and M₂ = 170 kg respectively. What is the gravitational potential at a distance r = 25.5 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 42",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-043",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two thin concentric spherical shells have radii R₁ = 18 m and R₂ = 36 m with masses M₁ = 90 kg and M₂ = 180 kg respectively. What is the gravitational potential at a distance r = 27.0 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 43",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-044",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two thin concentric spherical shells have radii R₁ = 19 m and R₂ = 38 m with masses M₁ = 95 kg and M₂ = 190 kg respectively. What is the gravitational potential at a distance r = 28.5 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 44",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-045",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two thin concentric spherical shells have radii R₁ = 20 m and R₂ = 40 m with masses M₁ = 100 kg and M₂ = 200 kg respectively. What is the gravitational potential at a distance r = 30.0 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 45",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-046",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two thin concentric spherical shells have radii R₁ = 21 m and R₂ = 42 m with masses M₁ = 105 kg and M₂ = 210 kg respectively. What is the gravitational potential at a distance r = 31.5 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 46",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-047",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two thin concentric spherical shells have radii R₁ = 22 m and R₂ = 44 m with masses M₁ = 110 kg and M₂ = 220 kg respectively. What is the gravitational potential at a distance r = 33.0 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 47",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-048",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two thin concentric spherical shells have radii R₁ = 23 m and R₂ = 46 m with masses M₁ = 115 kg and M₂ = 230 kg respectively. What is the gravitational potential at a distance r = 34.5 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 48",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-049",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "Two thin concentric spherical shells have radii R₁ = 24 m and R₂ = 48 m with masses M₁ = 120 kg and M₂ = 240 kg respectively. What is the gravitational potential at a distance r = 36.0 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 49",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-050",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "Two thin concentric spherical shells have radii R₁ = 25 m and R₂ = 50 m with masses M₁ = 125 kg and M₂ = 250 kg respectively. What is the gravitational potential at a distance r = 37.5 m from their common center?",
    "options": [
      {
        "label": "A",
        "text": "V = - 8.33 G J/kg"
      },
      {
        "label": "B",
        "text": "V = - 12.50 G J/kg"
      },
      {
        "label": "C",
        "text": "V = 0 J/kg"
      },
      {
        "label": "D",
        "text": "V = - 4.17 G J/kg"
      }
    ],
    "correctAnswer": "A",
    "hint": "At r = 1.5 R₁, the point is outside the inner shell (potential -GM₁/r) and inside the outer shell (constant potential -GM₂/R₂). Sum the two contributions.",
    "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 50",
      "asked": "Potential, work done, or field intensity",
      "formula": "V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: V = - 8.33 G J/kg",
      "keyTakeaway": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells.",
      "commonTrap": "Using r instead of R₂ for the outer shell contribution."
    },
    "explanation": "For concentric shells, add the exterior potential of enclosed shells to the constant interior potential of outer shells. Governed by V = - G M₁ / (1.5 R₁) - G M₂ / R₂ = - 8.33 G.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-051",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 1 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (1 / 2) m g R (approx. 0.500 m g R)"
      },
      {
        "label": "B",
        "text": "W = 1 m g R"
      },
      {
        "label": "C",
        "text": "W = (2 / 1) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 2) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (1 R) / (1 + 1) = (1 / 2) m g R.",
    "formula": "W = ΔU = [ 1 / (1 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 51",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 1 / (1 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (1 / 2) m g R (approx. 0.500 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 1 / (1 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-052",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 2 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (2 / 3) m g R (approx. 0.667 m g R)"
      },
      {
        "label": "B",
        "text": "W = 2 m g R"
      },
      {
        "label": "C",
        "text": "W = (3 / 2) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 4) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (2 R) / (1 + 2) = (2 / 3) m g R.",
    "formula": "W = ΔU = [ 2 / (2 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 52",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 2 / (2 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (2 / 3) m g R (approx. 0.667 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 2 / (2 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-053",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 3 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (3 / 4) m g R (approx. 0.750 m g R)"
      },
      {
        "label": "B",
        "text": "W = 3 m g R"
      },
      {
        "label": "C",
        "text": "W = (4 / 3) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 6) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (3 R) / (1 + 3) = (3 / 4) m g R.",
    "formula": "W = ΔU = [ 3 / (3 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 53",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 3 / (3 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (3 / 4) m g R (approx. 0.750 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 3 / (3 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-054",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 4 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (4 / 5) m g R (approx. 0.800 m g R)"
      },
      {
        "label": "B",
        "text": "W = 4 m g R"
      },
      {
        "label": "C",
        "text": "W = (5 / 4) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 8) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (4 R) / (1 + 4) = (4 / 5) m g R.",
    "formula": "W = ΔU = [ 4 / (4 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 54",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 4 / (4 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (4 / 5) m g R (approx. 0.800 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 4 / (4 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-055",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 5 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (5 / 6) m g R (approx. 0.833 m g R)"
      },
      {
        "label": "B",
        "text": "W = 5 m g R"
      },
      {
        "label": "C",
        "text": "W = (6 / 5) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 10) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (5 R) / (1 + 5) = (5 / 6) m g R.",
    "formula": "W = ΔU = [ 5 / (5 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 55",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 5 / (5 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (5 / 6) m g R (approx. 0.833 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 5 / (5 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-056",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 6 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (6 / 7) m g R (approx. 0.857 m g R)"
      },
      {
        "label": "B",
        "text": "W = 6 m g R"
      },
      {
        "label": "C",
        "text": "W = (7 / 6) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 12) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (6 R) / (1 + 6) = (6 / 7) m g R.",
    "formula": "W = ΔU = [ 6 / (6 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 56",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 6 / (6 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (6 / 7) m g R (approx. 0.857 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 6 / (6 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-057",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 7 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (7 / 8) m g R (approx. 0.875 m g R)"
      },
      {
        "label": "B",
        "text": "W = 7 m g R"
      },
      {
        "label": "C",
        "text": "W = (8 / 7) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 14) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (7 R) / (1 + 7) = (7 / 8) m g R.",
    "formula": "W = ΔU = [ 7 / (7 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 57",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 7 / (7 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (7 / 8) m g R (approx. 0.875 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 7 / (7 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-058",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 8 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (8 / 9) m g R (approx. 0.889 m g R)"
      },
      {
        "label": "B",
        "text": "W = 8 m g R"
      },
      {
        "label": "C",
        "text": "W = (9 / 8) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 16) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (8 R) / (1 + 8) = (8 / 9) m g R.",
    "formula": "W = ΔU = [ 8 / (8 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 58",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 8 / (8 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (8 / 9) m g R (approx. 0.889 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 8 / (8 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-059",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 9 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (9 / 10) m g R (approx. 0.900 m g R)"
      },
      {
        "label": "B",
        "text": "W = 9 m g R"
      },
      {
        "label": "C",
        "text": "W = (10 / 9) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 18) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (9 R) / (1 + 9) = (9 / 10) m g R.",
    "formula": "W = ΔU = [ 9 / (9 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 59",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 9 / (9 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (9 / 10) m g R (approx. 0.900 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 9 / (9 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-060",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 10 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (10 / 11) m g R (approx. 0.909 m g R)"
      },
      {
        "label": "B",
        "text": "W = 10 m g R"
      },
      {
        "label": "C",
        "text": "W = (11 / 10) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 20) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (10 R) / (1 + 10) = (10 / 11) m g R.",
    "formula": "W = ΔU = [ 10 / (10 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 60",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 10 / (10 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (10 / 11) m g R (approx. 0.909 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 10 / (10 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-061",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 11 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (11 / 12) m g R (approx. 0.917 m g R)"
      },
      {
        "label": "B",
        "text": "W = 11 m g R"
      },
      {
        "label": "C",
        "text": "W = (12 / 11) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 22) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (11 R) / (1 + 11) = (11 / 12) m g R.",
    "formula": "W = ΔU = [ 11 / (11 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 61",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 11 / (11 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (11 / 12) m g R (approx. 0.917 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 11 / (11 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-062",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 12 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (12 / 13) m g R (approx. 0.923 m g R)"
      },
      {
        "label": "B",
        "text": "W = 12 m g R"
      },
      {
        "label": "C",
        "text": "W = (13 / 12) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 24) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (12 R) / (1 + 12) = (12 / 13) m g R.",
    "formula": "W = ΔU = [ 12 / (12 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 62",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 12 / (12 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (12 / 13) m g R (approx. 0.923 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 12 / (12 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-063",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 13 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (13 / 14) m g R (approx. 0.929 m g R)"
      },
      {
        "label": "B",
        "text": "W = 13 m g R"
      },
      {
        "label": "C",
        "text": "W = (14 / 13) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 26) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (13 R) / (1 + 13) = (13 / 14) m g R.",
    "formula": "W = ΔU = [ 13 / (13 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 63",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 13 / (13 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (13 / 14) m g R (approx. 0.929 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 13 / (13 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-064",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 14 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (14 / 15) m g R (approx. 0.933 m g R)"
      },
      {
        "label": "B",
        "text": "W = 14 m g R"
      },
      {
        "label": "C",
        "text": "W = (15 / 14) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 28) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (14 R) / (1 + 14) = (14 / 15) m g R.",
    "formula": "W = ΔU = [ 14 / (14 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 64",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 14 / (14 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (14 / 15) m g R (approx. 0.933 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 14 / (14 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-065",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 15 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (15 / 16) m g R (approx. 0.938 m g R)"
      },
      {
        "label": "B",
        "text": "W = 15 m g R"
      },
      {
        "label": "C",
        "text": "W = (16 / 15) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 30) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (15 R) / (1 + 15) = (15 / 16) m g R.",
    "formula": "W = ΔU = [ 15 / (15 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 65",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 15 / (15 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (15 / 16) m g R (approx. 0.938 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 15 / (15 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-066",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 16 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (16 / 17) m g R (approx. 0.941 m g R)"
      },
      {
        "label": "B",
        "text": "W = 16 m g R"
      },
      {
        "label": "C",
        "text": "W = (17 / 16) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 32) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (16 R) / (1 + 16) = (16 / 17) m g R.",
    "formula": "W = ΔU = [ 16 / (16 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 66",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 16 / (16 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (16 / 17) m g R (approx. 0.941 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 16 / (16 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-067",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 17 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (17 / 18) m g R (approx. 0.944 m g R)"
      },
      {
        "label": "B",
        "text": "W = 17 m g R"
      },
      {
        "label": "C",
        "text": "W = (18 / 17) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 34) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (17 R) / (1 + 17) = (17 / 18) m g R.",
    "formula": "W = ΔU = [ 17 / (17 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 67",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 17 / (17 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (17 / 18) m g R (approx. 0.944 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 17 / (17 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-068",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 18 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (18 / 19) m g R (approx. 0.947 m g R)"
      },
      {
        "label": "B",
        "text": "W = 18 m g R"
      },
      {
        "label": "C",
        "text": "W = (19 / 18) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 36) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (18 R) / (1 + 18) = (18 / 19) m g R.",
    "formula": "W = ΔU = [ 18 / (18 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 68",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 18 / (18 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (18 / 19) m g R (approx. 0.947 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 18 / (18 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-069",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "conceptual",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 19 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (19 / 20) m g R (approx. 0.950 m g R)"
      },
      {
        "label": "B",
        "text": "W = 19 m g R"
      },
      {
        "label": "C",
        "text": "W = (20 / 19) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 38) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (19 R) / (1 + 19) = (19 / 20) m g R.",
    "formula": "W = ΔU = [ 19 / (19 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 69",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 19 / (19 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (19 / 20) m g R (approx. 0.950 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 19 / (19 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-M-070",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "MEDIUM",
    "examLevel": "JEE MAIN",
    "type": "numerical",
    "question": "How much work W must an external agent do to slowly lift a body of mass m from Earth's surface (radius R, surface gravity g) to an altitude of h = 20 R above the surface?",
    "options": [
      {
        "label": "A",
        "text": "W = (20 / 21) m g R (approx. 0.952 m g R)"
      },
      {
        "label": "B",
        "text": "W = 20 m g R"
      },
      {
        "label": "C",
        "text": "W = (21 / 20) m g R"
      },
      {
        "label": "D",
        "text": "W = (1 / 40) m g R"
      }
    ],
    "correctAnswer": "A",
    "hint": "Work equals increase in potential energy: W = ΔU = m g h / (1 + h/R) = m g (20 R) / (1 + 20) = (20 / 21) m g R.",
    "formula": "W = ΔU = [ 20 / (20 + 1) ] m g R",
    "stepByStep": {
      "given": "Problem specifications for GFP Medium Question 70",
      "asked": "Potential, work done, or field intensity",
      "formula": "W = ΔU = [ 20 / (20 + 1) ] m g R",
      "substitution": "Substitute geometric coordinates and mass values",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: W = (20 / 21) m g R (approx. 0.952 m g R)",
      "keyTakeaway": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞.",
      "commonTrap": "Using W = mgh = n mgR which neglects the reduction of gravitational attraction with altitude."
    },
    "explanation": "At altitude h = n R, the work done to lift a mass is [n / (n + 1)] m g R, asymptotically approaching m g R as n → ∞. Governed by W = ΔU = [ 20 / (20 + 1) ] m g R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-001",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spherical cavity of radius b is hollowed out inside a uniform solid sphere of density ρ, such that the center of the cavity is displaced by vector d⃗ from the center of the sphere. What is the gravitational field g⃗ inside the cavity?",
    "options": [
      {
        "label": "A",
        "text": "A completely uniform vector field: g⃗ = - (4/3) π G ρ d⃗"
      },
      {
        "label": "B",
        "text": "Zero everywhere inside the cavity"
      },
      {
        "label": "C",
        "text": "A radially diverging field centered on the cavity"
      },
      {
        "label": "D",
        "text": "A field inversely proportional to distance from the wall"
      }
    ],
    "correctAnswer": "A",
    "hint": "Superposition: inside a solid sphere, g⃗ = -(4/3)πGρ r⃗. Add the negative mass field of the cavity.",
    "formula": "g⃗_net = - (4/3)πGρ r⃗₁ - [ - (4/3)πGρ (r⃗₁ - d⃗) ] = - (4/3) π G ρ d⃗",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 1",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "g⃗_net = - (4/3)πGρ r⃗₁ - [ - (4/3)πGρ (r⃗₁ - d⃗) ] = - (4/3) π G ρ d⃗",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: A completely uniform vector field: g⃗ = - (4/3) π G ρ d⃗",
      "keyTakeaway": "The gravitational field inside ANY spherical cavity in a uniform solid sphere is completely uniform, pointing antiparallel to displacement vector d⃗!",
      "commonTrap": "Assuming the field inside the cavity must be zero like a concentric spherical shell."
    },
    "explanation": "The gravitational field inside ANY spherical cavity in a uniform solid sphere is completely uniform, pointing antiparallel to displacement vector d⃗! Formulated via g⃗_net = - (4/3)πGρ r⃗₁ - [ - (4/3)πGρ (r⃗₁ - d⃗) ] = - (4/3) π G ρ d⃗.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-002",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 2.00e+20 kg and radius R = 1000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 2",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-003",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 4.00e+20 kg and radius R = 2000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 3",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-004",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 6.00e+20 kg and radius R = 3000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 4",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-005",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 8.00e+20 kg and radius R = 4000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 5",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-006",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 1.00e+21 kg and radius R = 5000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 6",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-007",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 1.20e+21 kg and radius R = 6000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 7",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-008",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 1.40e+21 kg and radius R = 7000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 8",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-009",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 1.60e+21 kg and radius R = 8000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 9",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-010",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 1.80e+21 kg and radius R = 9000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 10",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-011",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 2.00e+21 kg and radius R = 10000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 11",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-012",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 2.20e+21 kg and radius R = 11000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 12",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-013",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 2.40e+21 kg and radius R = 12000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 13",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-014",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 2.60e+21 kg and radius R = 13000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 14",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-015",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 2.80e+21 kg and radius R = 14000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 15",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-016",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 3.00e+21 kg and radius R = 15000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 16",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-017",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 3.20e+21 kg and radius R = 16000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 17",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-018",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 3.40e+21 kg and radius R = 17000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 18",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-019",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 3.60e+21 kg and radius R = 18000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 19",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-020",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 3.80e+21 kg and radius R = 19000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 20",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-021",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 4.00e+21 kg and radius R = 20000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 21",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-022",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 4.20e+21 kg and radius R = 21000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 22",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-023",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 4.40e+21 kg and radius R = 22000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 23",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-024",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 4.60e+21 kg and radius R = 23000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 24",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-025",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 4.80e+21 kg and radius R = 24000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 25",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-026",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "What is the total gravitational self-energy U_self of a uniform solid celestial body of mass M = 5.00e+21 kg and radius R = 25000 km?",
    "options": [
      {
        "label": "A",
        "text": "U_self = - (3/5) · (G M² / R)"
      },
      {
        "label": "B",
        "text": "U_self = - (1/2) · (G M² / R)"
      },
      {
        "label": "C",
        "text": "U_self = - (3/4) · (G M² / R)"
      },
      {
        "label": "D",
        "text": "U_self = - (5/3) · (G M² / R)"
      }
    ],
    "correctAnswer": "A",
    "hint": "Integrate dU = - G m(r) dm / r from r = 0 to R, where m(r) = (4/3)πρ r³ and dm = 4πρ r² dr.",
    "formula": "U_self = - (3/5) G M² / R",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 26",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "U_self = - (3/5) G M² / R",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: U_self = - (3/5) · (G M² / R)",
      "keyTakeaway": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R.",
      "commonTrap": "Confusing with the self-energy of a hollow spherical shell (-1/2 GM²/R)."
    },
    "explanation": "The gravitational self-energy of a uniform solid sphere is strictly -3/5 GM²/R. Formulated via U_self = - (3/5) G M² / R.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-027",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 200 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (200 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 27",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-028",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 400 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (400 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 28",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-029",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 600 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (600 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 29",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-030",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 800 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (800 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 30",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-031",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 1000 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (1000 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 31",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-032",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 1200 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (1200 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 32",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-033",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 1400 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (1400 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 33",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-034",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 1600 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (1600 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 34",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-035",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 1800 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (1800 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 35",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-036",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 2000 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (2000 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 36",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-037",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 2200 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (2200 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 37",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-038",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 2400 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (2400 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 38",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-039",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 2600 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (2600 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 39",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-040",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 2800 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (2800 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 40",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-041",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 3000 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (3000 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 41",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-042",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 3200 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (3200 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 42",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-043",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 3400 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (3400 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 43",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-044",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 3600 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (3600 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 44",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-045",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 3800 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (3800 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 45",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-046",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A straight frictionless tunnel is drilled through a uniform spherical planet of radius R = 6400 km and surface gravity g = 9.8 m/s² along a chord that passes at a perpendicular distance of y₀ = 4000 km from the center. What is the period T of simple harmonic oscillations of a particle dropped into this tunnel?",
    "options": [
      {
        "label": "A",
        "text": "T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)"
      },
      {
        "label": "B",
        "text": "T = 2π √( (4000 km) / g )"
      },
      {
        "label": "C",
        "text": "T = 42.3 minutes"
      },
      {
        "label": "D",
        "text": "T depends on the mass of the dropped particle"
      }
    ],
    "correctAnswer": "A",
    "hint": "The radial restoring force is F_r = - (mg/R) r. The component along the tunnel is F_x = F_r (x/r) = - (mg/R) x, which is independent of y₀!",
    "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 46",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: T = 2π √(R / g) ≈ 84.6 minutes (strictly independent of the chord distance y₀!)",
      "keyTakeaway": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset!",
      "commonTrap": "Assuming the period depends on chord offset or tunnel length."
    },
    "explanation": "The period of motion in ANY straight frictionless tunnel through a uniform sphere is invariant: T = 2π√(R/g) ≈ 84.6 minutes, regardless of chord offset! Formulated via F_x = - (m g / R) x ⇒ T = 2π √(R / g) ≈ 84.6 min.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-047",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 4200 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 47",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-048",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 4400 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 48",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-049",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 4600 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 49",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-050",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 4800 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 50",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-051",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 5000 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 51",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-052",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 5200 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 52",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-053",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 5400 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 53",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-054",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 5600 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 54",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-055",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 5800 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 55",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-056",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 6000 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 56",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-057",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 6200 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 57",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-058",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 6400 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 58",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-059",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 6600 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 59",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-060",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 6800 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 60",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-061",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 7000 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 61",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-062",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 7200 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 62",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-063",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 7400 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 63",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-064",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 7600 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 64",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-065",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 7800 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 65",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-066",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 8000 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 66",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-067",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 8200 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 67",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-068",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 8400 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 68",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-069",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 8600 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 69",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "GFP-H-070",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "numerical",
    "question": "A test particle is located at the center of a uniform solid planet of radius R = 8800 km and surface escape velocity v_s. What is the minimum projection speed v_c required to launch this particle from the center so that it escapes to infinity?",
    "options": [
      {
        "label": "A",
        "text": "v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)"
      },
      {
        "label": "B",
        "text": "v_c = v_s = √(2 G M / R)"
      },
      {
        "label": "C",
        "text": "v_c = 2 · v_s"
      },
      {
        "label": "D",
        "text": "v_c = √2 · v_s"
      }
    ],
    "correctAnswer": "A",
    "hint": "Energy conservation: 1/2 m v_c² + m V_center = 0. Since V_center = -1.5 GM/R, 1/2 m v_c² = 1.5 GMm/R ⇒ v_c = √(3GM/R) = √1.5 v_s.",
    "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 70",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: v_c = √1.5 · v_s ≈ 1.225 · v_s = √(3 G M / R)",
      "keyTakeaway": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater.",
      "commonTrap": "Using surface escape speed √(2GM/R) from the center."
    },
    "explanation": "Because the potential well at the center is 1.5 times deeper than at the surface, escape speed from the center is √1.5 times greater. Formulated via v_c = √(3 G M / R) = √1.5 v_s ≈ 1.225 v_s.",
    "category": "gravitationalFieldPotential"
  },
  {
    "id": "q-field-h03",
    "topic": "gravitationalFieldPotential",
    "topicName": "Gravitational Field & Potential",
    "difficulty": "HARD",
    "examLevel": "JEE ADVANCED",
    "type": "derivation",
    "question": "A spherical cavity of radius b is hollowed out inside a uniform solid sphere of density ρ, such that the center of the cavity is displaced by vector d⃗ from the center of the sphere. What is the gravitational field g⃗ inside the cavity?",
    "options": [
      {
        "label": "A",
        "text": "A completely uniform vector field: g⃗ = - (4/3) π G ρ d⃗"
      },
      {
        "label": "B",
        "text": "Zero everywhere inside the cavity"
      },
      {
        "label": "C",
        "text": "A radially diverging field centered on the cavity"
      },
      {
        "label": "D",
        "text": "A field inversely proportional to distance from the wall"
      }
    ],
    "correctAnswer": "A",
    "hint": "Superposition: inside a solid sphere, g⃗ = -(4/3)πGρ r⃗. Add the negative mass field of the cavity.",
    "formula": "g⃗_net = - (4/3)πGρ r⃗₁ - [ - (4/3)πGρ (r⃗₁ - d⃗) ] = - (4/3) π G ρ d⃗",
    "stepByStep": {
      "given": "Advanced field & potential problem setup 1",
      "asked": "Derived field vector, self-energy, or center escape velocity",
      "formula": "g⃗_net = - (4/3)πGρ r⃗₁ - [ - (4/3)πGρ (r⃗₁ - d⃗) ] = - (4/3) π G ρ d⃗",
      "substitution": "Apply superposition / integral energy conservation",
      "calculation": "Evaluation yields Option A",
      "finalAnswer": "Option A: A completely uniform vector field: g⃗ = - (4/3) π G ρ d⃗",
      "keyTakeaway": "The gravitational field inside ANY spherical cavity in a uniform solid sphere is completely uniform, pointing antiparallel to displacement vector d⃗!",
      "commonTrap": "Assuming the field inside the cavity must be zero like a concentric spherical shell."
    },
    "explanation": "The gravitational field inside ANY spherical cavity in a uniform solid sphere is completely uniform, pointing antiparallel to displacement vector d⃗! Formulated via g⃗_net = - (4/3)πGρ r⃗₁ - [ - (4/3)πGρ (r⃗₁ - d⃗) ] = - (4/3) π G ρ d⃗.",
    "category": "gravitationalFieldPotential"
  }
];

export default questions;
