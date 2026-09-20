/**
 * Centralized educational data structure for the Gravitation Learning Index
 * Tailored for Class 12 • JEE Main • JEE Advanced
 */

export const GRAVITATION_INDEX_MODULES = [
  {
    id: 'section-01',
    number: '01',
    title: "FUNDAMENTAL & NEWTON'S UNIVERSAL LAW",
    tag: 'UNIVERSAL INTERACTION',
    description: 'The foundational law of gravitational attraction governing all celestial and terrestrial masses.',
    subsections: [
      {
        id: '1-a',
        type: 'concept',
        title: 'A. DEFINITION OF GRAVITATION',
        summary: 'Gravitation is the universal force of mutual attraction between any two masses in the universe.',
        points: [
          'It acts universally between all masses, regardless of size, charge, or physical state.',
          'It is strictly attractive in Newtonian mechanics (no repulsive gravitational mass exists).',
          'It acts along the line joining the centres of the two interacting bodies (central force).',
          'It is an action-at-a-distance long-range force having infinite range (F → 0 as r → ∞).',
          'It requires no physical contact or material medium to transmit the interaction.',
        ],
      },
      {
        id: '1-b',
        type: 'formula',
        title: "B. NEWTON'S UNIVERSAL LAW",
        statement:
          'Every two masses in the universe attract each other with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres.',
        formulaDisplay: 'F = G · (m₁ · m₂) / r²',
        variables: [
          { symbol: 'F', name: 'Gravitational Force', unit: 'N (Newton)' },
          { symbol: 'm₁, m₂', name: 'Interacting Point Masses', unit: 'kg' },
          { symbol: 'r', name: 'Centre-to-Centre Distance', unit: 'm' },
          { symbol: 'G', name: 'Universal Gravitational Constant', unit: 'N·m²/kg²' },
        ],
        notes: 'Inverse-Square Law: Doubling distance reduces force to 1/4th (F ∝ 1/r²).',
      },
      {
        id: '1-c',
        type: 'constant',
        title: 'C. UNIVERSAL GRAVITATIONAL CONSTANT (G)',
        valueDisplay: 'G ≈ 6.674 × 10⁻¹¹ N·m²·kg⁻²',
        siUnit: 'N·m²·kg⁻² or m³·kg⁻¹·s⁻²',
        dimension: '[M⁻¹ L³ T⁻²]',
        points: [
          'G is a scalar universal physical constant — identical everywhere in the cosmos.',
          'Its numerical value is independent of the planet, temperature, pressure, medium, or epoch.',
          'Measured experimentally first by Henry Cavendish (1798) using a torsion balance.',
        ],
        distinction: {
          gCapital: 'G = 6.674 × 10⁻¹¹ N·m²/kg² (Universal Constant, Scalar, invariant everywhere)',
          gSmall: 'g = GM/R² ≈ 9.81 m/s² on Earth (Local Gravitational Acceleration, Vector, varies by location)',
        },
      },
      {
        id: '1-d',
        type: 'vector-law',
        title: 'D. VECTOR FORM OF GRAVITATIONAL LAW',
        formulaDisplay: 'F⃗₁₂ = - (G m₁ m₂ / r²) · r̂₁₂',
        formulaAlt: 'F⃗₁₂ = -G · [m₁ m₂ / |r⃗₁ - r⃗₂|³] · (r⃗₁ - r⃗₂)',
        points: [
          'Force is a vector quantity with both magnitude and direction.',
          'F⃗₁₂ is the gravitational force exerted ON mass 1 BY mass 2.',
          'The negative sign represents attraction directed toward mass 2 (opposite to position vector r̂₁₂).',
          "Newton's Third Law holds strictly: F⃗₁₂ = -F⃗₂₁ (action and reaction are equal and opposite).",
        ],
      },
      {
        id: '1-e',
        type: 'properties',
        title: 'E. PROPERTIES OF GRAVITATIONAL FORCE',
        properties: [
          { name: 'Always Attractive', desc: 'Never repels; masses always pull each other together.' },
          { name: 'Central Force', desc: 'Line of action passes directly through the centres of mass (torque τ = 0).' },
          { name: 'Conservative Force', desc: 'Work done along a closed path is zero (∮ F⃗·dr⃗ = 0); potential energy is definable.' },
          { name: 'Long-Range Force', desc: 'Acts over astronomical distances; effective range is infinite (∝ 1/r²).' },
          { name: 'Inverse-Square Law', desc: 'Force falls off with the second power of separation distance.' },
          { name: 'Superposition Principle', desc: 'Net force on a mass is the vector sum of individual forces: F⃗_net = Σ F⃗ᵢ.' },
          { name: 'Line-of-Centres Action', desc: 'Acts strictly collinear with the position vectors of both centres.' },
          { name: 'Medium Independent', desc: 'Gravitational attraction is unaffected by intervening physical media in classical mechanics.' },
        ],
      },
      {
        id: '1-f',
        type: 'special-case',
        title: 'F. IMPORTANT SPECIAL CASES',
        cases: [
          {
            title: 'Spherically Symmetric Body (Newton’s Shell Theorem I)',
            desc: 'For any point outside a spherically symmetric mass distribution, the entire gravitational attraction is identical to that of a single point mass concentrated at the geometric centre.',
          },
          {
            title: 'Inside a Uniform Spherical Shell (Shell Theorem II)',
            desc: 'The gravitational force (and gravitational field) exerted on any particle anywhere inside a uniform spherical shell of mass M is identically ZERO (g_inside = 0, V_inside = -GM/R = constant).',
          },
        ],
      },
      {
        id: '1-g',
        type: 'traps',
        title: 'G. COMMON JEE TRAPS',
        traps: [
          {
            trap: 'TRAP 1: Using surface-to-surface distance instead of centre-to-centre distance.',
            remedy: 'Always set r = R₁ + R₂ + d, where d is the surface gap and R₁, R₂ are body radii.',
          },
          {
            trap: 'TRAP 2: Confusing universal G with local acceleration g.',
            remedy: 'G is invariant universal constant (6.674×10⁻¹¹). g is local field strength (GM/R²).',
          },
          {
            trap: 'TRAP 3: Adding gravitational forces algebraically as scalars.',
            remedy: 'Gravitational forces are vectors! Resolve into components or use vector addition (F⃗_net = Σ F⃗ᵢ).',
          },
          {
            trap: 'TRAP 4: Forgetting that gravitational pull is mutual and equal.',
            remedy: 'Earth pulls an apple with force mg, and the apple pulls Earth with the exact same force mg (Third Law).',
          },
          {
            trap: 'TRAP 5: Forgetting the inverse-square dependence when distance changes.',
            remedy: 'If distance triples (3r), force decreases by a factor of 9 (F/9), NOT by 3.',
          },
        ],
      },
      {
        id: '1-h',
        type: 'quick-check',
        title: 'H. QUICK CHECK',
        question: 'If the distance between two masses becomes 2r, what happens to the gravitational force?',
        answer: "F' = F / (2)² = F / 4 (Force is quartered).",
        rules: [
          'If one mass doubles (m₁ → 2m₁) → Force doubles (F → 2F).',
          'If both masses double (m₁ → 2m₁, m₂ → 2m₂) → Force quadruples (F → 4F).',
          'If separation is halved (r → r/2) → Force quadruples (F → 4F).',
        ],
      },
    ],
    pyqs: [
      {
        id: 'pyq-1-1',
        source: 'JEE Main',
        year: '2023',
        difficulty: 'FOUNDATION',
        concept: 'Inverse-Square Force Scaling with Density',
        question:
          'Two identical spherical balls each of mass M and radius R are placed in contact with each other. The gravitational attraction between them is directly proportional to which power of their radius R (assuming uniform mass density ρ)?',
        options: [
          { label: 'A', text: 'R²' },
          { label: 'B', text: 'R⁴' },
          { label: 'C', text: '1/R²' },
          { label: 'D', text: 'R⁶' },
        ],
        hint: 'Express mass in terms of volume and density: M = (4/3)π R³ ρ. Distance between centres in contact is r = 2R.',
        correctAnswer: 'B (F ∝ R⁴)',
        solution:
          'Centre-to-centre distance in contact is r = 2R.\nMass M = (4/3)π R³ ρ ∝ R³.\nForce F = G M² / r² = G (M)² / (2R)² ∝ (R³)² / R² = R⁶ / R² = R⁴.\nHence, F ∝ R⁴. Option (B) is correct.',
      },
      {
        id: 'pyq-1-2',
        source: 'JEE Main',
        year: '2021',
        difficulty: 'MODERATE',
        concept: 'Vector Superposition at Square Vertices',
        question:
          'Four point masses, each of mass m, are placed at the four corners of a square of side a. What is the net gravitational force on any one mass due to the other three?',
        options: [
          { label: 'A', text: '(G m² / a²) [2 + 1/√2]' },
          { label: 'B', text: '(G m² / a²) [√2 + 1/2]' },
          { label: 'C', text: '(2√2 G m² / a²)' },
          { label: 'D', text: '(G m² / 2a²)' },
        ],
        hint: 'The two adjacent masses exert perpendicular forces F₁ = F₂ = Gm²/a². The diagonally opposite mass is at distance r = a√2.',
        correctAnswer: 'B ((Gm²/a²)(√2 + 1/2))',
        solution:
          'Forces due to adjacent masses: F₁ = F₂ = Gm²/a² at 90°.\nTheir resultant: F_adj = √(F₁² + F₂²) = √2 (Gm²/a²), directed along the diagonal.\nForce due to diagonally opposite mass: F_diag = Gm² / (a√2)² = Gm² / (2a²), also along the diagonal.\nTotal net force: F_net = F_adj + F_diag = (Gm²/a²)[√2 + 1/2]. Option (B) is correct.',
      },
      {
        id: 'pyq-1-3',
        source: 'JEE Advanced',
        year: '2019',
        difficulty: 'ADVANCED',
        concept: 'Gravitational Force with Spherical Cavity',
        question:
          'A solid uniform sphere of radius R and mass M has a spherical cavity of radius R/2 scooped out, touching the outer surface. What is the gravitational force exerted by this hollowed sphere on a point mass m located at distance d (d > R) along the line of centres from the sphere’s centre?',
        options: [
          { label: 'A', text: '(GMm/d²) [1 - 1/(8(1 - R/2d)²)]' },
          { label: 'B', text: '(GMm/d²) [1 - 1/(4(1 - R/2d)²)]' },
          { label: 'C', text: '(GMm/8d²)' },
          { label: 'D', text: '(7GMm/8d²)' },
        ],
        hint: 'Use the principle of negative mass: Full sphere of mass M minus removed sphere of radius R/2 (mass M/8) located at distance d - R/2.',
        correctAnswer: 'A ((GMm/d²)[1 - 1/(8(1 - R/2d)²)])',
        solution:
          'Mass of full sphere = M. Cavity has radius R/2, so volume is (1/2)³ = 1/8 of full volume.\nMass of cavity = M_cav = M/8. Centre of cavity is at x = R/2.\nDistance of mass m from cavity centre = (d - R/2).\nBy superposition: F_net = F_full - F_cav = GMm/d² - G(M/8)m / (d - R/2)²\n= (GMm/d²) [1 - (1/8) / (1 - R/2d)²]. Option (A) is correct.',
      },
    ],
  },
  {
    id: 'section-02',
    number: '02',
    title: 'ACCELERATION DUE TO GRAVITY',
    tag: 'FIELD DYNAMICS',
    description: 'Variation of g with altitude, depth, planetary mass, mass vs weight, and rotational latitude.',
    subsections: [
      {
        id: '2-a',
        type: 'concept',
        title: 'A. DEFINITION OF g',
        summary:
          'g is the acceleration produced in any freely falling body under the gravitational attraction of a celestial body, independent of the falling body’s mass.',
        points: [
          'Measured in m/s² or N/kg.',
          'It is a vector quantity pointing toward the centre of the attracting celestial mass.',
          'All bodies fall with the identical acceleration in vacuum: g = GM/R².',
        ],
      },
      {
        id: '2-b',
        type: 'formula',
        title: 'B. SURFACE GRAVITY',
        formulaDisplay: 'g = GM / R²',
        statement: 'Surface gravitational acceleration depends solely on the planet mass M and radius R.',
        variables: [
          { symbol: 'g', name: 'Surface Gravity Acceleration', unit: 'm/s²' },
          { symbol: 'G', name: 'Gravitational Constant', unit: '6.674×10⁻¹¹ N·m²/kg²' },
          { symbol: 'M', name: 'Celestial Body Mass', unit: 'kg' },
          { symbol: 'R', name: 'Celestial Body Radius', unit: 'm' },
        ],
        notes: 'Earth standard reference: g ≈ 9.81 m/s² (varies from 9.78 at equator to 9.83 at poles).',
      },
      {
        id: '2-c',
        type: 'formula',
        title: 'C. VARIATION WITH HEIGHT (ALTITUDE)',
        formulaDisplay: 'g_h = GM / (R + h)² = g · [R / (R + h)]²',
        notes: 'For small heights (h ≪ R, e.g. h < 5% of R): g_h ≈ g · (1 - 2h/R).',
        points: [
          'g strictly decreases with height as an inverse-square law.',
          'The fractional decrease in g is: Δg/g ≈ -2h/R (for h ≪ R).',
          'At h = R (one Earth radius above surface): g_h = g / (1 + 1)² = g / 4.',
        ],
      },
      {
        id: '2-d',
        type: 'formula',
        title: 'D. VARIATION WITH DEPTH',
        formulaDisplay: 'g_d = g · (1 - d / R)',
        notes: 'Strictly valid under the UNIFORM-DENSITY Earth model (M_internal ∝ r³).',
        points: [
          'Only the mass inside sphere of radius r = (R - d) exerts net gravitational force.',
          'The outer shell of thickness d exerts ZERO net force by Newton’s Shell Theorem II.',
          'At the geometric centre of Earth (d = R): g_centre = 0.',
          'Variation is strictly linear: g_d ∝ r inside a uniform solid sphere.',
        ],
      },
      {
        id: '2-e',
        type: 'concept',
        title: 'E. MASS VS WEIGHT',
        points: [
          'Mass (m): Intrinsic quantity of matter in an object. Constant everywhere in the universe (kg).',
          'Weight (W = mg): Gravitational force exerted by a planet on mass m (Newtons).',
          'Because g varies from planet to planet, an object’s mass is invariant, but weight scales with g (e.g. W_Earth = 686.7 N, W_Jupiter = 1735.3 N for m = 70 kg).',
        ],
      },
      {
        id: '2-f',
        type: 'formula',
        title: 'F. FREE FALL KINEMATICS',
        formulaDisplay: 'v = u + gt   |   s = ut + ½gt²   |   v² = u² + 2gs',
        notes: 'Drop from rest (u = 0) through vertical height h:',
        points: [
          'Time of descent: t = √(2h / g)',
          'Impact velocity: v = √(2gh)',
          'Time of fall is strictly independent of the mass of the dropped object (Galileo’s principle).',
        ],
      },
      {
        id: '2-g',
        type: 'concept',
        title: 'G. LATITUDE & PLANETARY ROTATION',
        formulaDisplay: "g' = g - ω² R cos²λ",
        points: [
          'Because Earth rotates with angular speed ω ≈ 7.29 × 10⁻⁵ rad/s, an apparent centrifugal reduction acts outward.',
          'At the Equator (λ = 0°): g_eq = g - ω² R (minimum value).',
          'At the Poles (λ = 90°): g_pole = g (maximum value, zero centrifugal effect).',
          'Earth is also an oblate spheroid (equatorial radius is ~21 km larger than polar radius).',
        ],
      },
      {
        id: '2-h',
        type: 'traps',
        title: 'H. COMMON JEE TRAPS',
        traps: [
          {
            trap: 'TRAP 1: Using the linear approximation g_h ≈ g(1 - 2h/R) when h is large.',
            remedy: 'Only use g(1 - 2h/R) when h ≪ R (h < ~300 km). For h comparable to R, always use exact formula g_h = g [R/(R+h)]².',
          },
          {
            trap: 'TRAP 2: Believing mass becomes zero in orbit or free fall (weightlessness).',
            remedy: 'Mass is constant! Only the normal contact reaction N is zero because everything accelerates together.',
          },
          {
            trap: 'TRAP 3: Equating rate of decrease with height and depth blindly.',
            remedy: 'For h ≪ R: Δg/g with height is -2h/R. With depth it is -d/R. Decrease rate with height is twice that of depth!',
          },
          {
            trap: 'TRAP 4: Using g = 9.8 m/s² on other planets.',
            remedy: 'Always calculate g_planet = G M_planet / R_planet² or use given ratio factors.',
          },
        ],
      },
    ],
    pyqs: [
      {
        id: 'pyq-2-1',
        source: 'JEE Main',
        year: '2022',
        difficulty: 'FOUNDATION',
        concept: 'Equal Value of g at Height and Depth',
        question:
          'At what height h above Earth’s surface is the acceleration due to gravity the same as at a depth d = 32 km below the surface? (Take Earth radius R = 6400 km and assume h ≪ R).',
        options: [
          { label: 'A', text: '16 km' },
          { label: 'B', text: '32 km' },
          { label: 'C', text: '64 km' },
          { label: 'D', text: '8 km' },
        ],
        hint: 'For h ≪ R, g_h = g(1 - 2h/R). For depth d, g_d = g(1 - d/R). Equate both.',
        correctAnswer: 'A (16 km)',
        solution:
          'Given g_h = g_d.\nSince d = 32 km ≪ R, h will also be ≪ R.\nUsing approximations:\ng(1 - 2h/R) = g(1 - d/R) ⟹ 2h = d ⟹ h = d / 2.\nWith d = 32 km: h = 32 / 2 = 16 km. Option (A) is correct.',
      },
      {
        id: 'pyq-2-2',
        source: 'JEE Main',
        year: '2020',
        difficulty: 'MODERATE',
        concept: 'Height vs Depth Exact Relationship',
        question:
          'The acceleration due to gravity at height h above the surface of Earth is g/9. What is the value of h in terms of Earth’s radius R?',
        options: [
          { label: 'A', text: 'R' },
          { label: 'B', text: '2R' },
          { label: 'C', text: '3R' },
          { label: 'D', text: '8R' },
        ],
        hint: 'Since g/9 is a huge drop, h is NOT small! Use exact formula g_h = g [R / (R + h)]².',
        correctAnswer: 'B (2R)',
        solution:
          'g_h = g [R / (R + h)]² = g / 9.\nTaking square root on both sides:\nR / (R + h) = 1 / 3 ⟹ R + h = 3R ⟹ h = 2R. Option (B) is correct.',
      },
      {
        id: 'pyq-2-3',
        source: 'JEE Advanced',
        year: '2021',
        difficulty: 'ADVANCED',
        concept: 'Rotational Speed for Apparent Weightlessness at Equator',
        question:
          'With what angular speed ω should Earth rotate about its polar axis so that weight of a body on the equator becomes zero? (Take R = 6400 km, g = 10 m/s²).',
        options: [
          { label: 'A', text: '1.25 × 10⁻³ rad/s' },
          { label: 'B', text: '1.25 × 10⁻⁴ rad/s' },
          { label: 'C', text: '2.5 × 10⁻³ rad/s' },
          { label: 'D', text: '7.29 × 10⁻⁵ rad/s' },
        ],
        hint: 'Effective gravity at equator is g_eff = g - ω² R. For weightlessness, set g_eff = 0 ⟹ ω = √(g / R).',
        correctAnswer: 'A (1.25 × 10⁻³ rad/s)',
        solution:
          'g_eff = g - ω² R = 0 ⟹ ω = √(g / R).\nω = √(10 / (6.4 × 10⁶)) = √(1.5625 × 10⁻⁶) = 1.25 × 10⁻³ rad/s.\n(This represents Earth rotating roughly 17 times faster than its current rotation rate). Option (A) is correct.',
      },
    ],
  },
  {
    id: 'section-03',
    number: '03',
    title: 'GRAVITATIONAL FIELD & POTENTIAL',
    tag: 'ENERGY & CONSERVATIVE DYNAMICS',
    description: 'Vector field intensity, scalar potential, potential energy of bound systems, and equipotentials.',
    subsections: [
      {
        id: '3-a',
        type: 'field-hierarchy',
        title: 'A. GRAVITATIONAL FIELD INTENSITY',
        statement: 'Gravitational field is the gravitational force exerted per unit test mass at a given point in space.',
        formulaDisplay: 'g⃗ = F⃗ / m   ⟹   g⃗ = -(GM / r²) · r̂',
        magnitude: '|g⃗| = GM / r²',
        direction: 'Radially inward toward source mass M',
        points: [
          'Field is a VECTOR pointing radially inward toward the source mass.',
          'SI unit: N/kg or m/s².',
          'Dimension: [L T⁻²] (identical to acceleration).',
        ],
      },
      {
        id: '3-b',
        type: 'superposition',
        title: 'B. PRINCIPLE OF SUPERPOSITION',
        formulaDisplay: 'g⃗_net = Σ g⃗ᵢ = g⃗₁ + g⃗₂ + ... + g⃗ₙ',
        points: [
          'Field from multiple masses must be added VECTORIALLY by resolving into Cartesian components (x, y, z).',
          'At any neutral point between two masses where fields are equal and opposite: g⃗_net = 0.',
        ],
      },
      {
        id: '3-c',
        type: 'formula',
        title: 'C. GRAVITATIONAL POTENTIAL (V)',
        statement:
          'The work done by an external agent in bringing a unit mass from infinity to a point in the gravitational field without acceleration.',
        formulaDisplay: 'V = -GM / r',
        points: [
          'Potential is a SCALAR quantity (no direction, simple algebraic summation: V_net = Σ V_i).',
          'Always negative for attractive fields with conventional reference V(∞) = 0.',
          'SI unit: J/kg or m²/s².',
        ],
      },
      {
        id: '3-d',
        type: 'formula',
        title: 'D. GRAVITATIONAL POTENTIAL ENERGY (U)',
        formulaDisplay: 'U = -GMm / r',
        statement:
          'Potential energy of a two-mass system is the work done in bringing mass m from infinity to separation r.',
        points: [
          'Negative sign signifies an attractive bound gravitational system.',
          'To separate two masses to infinity, an energy equal to +GMm/r (binding energy) must be supplied.',
          'Change in potential energy from surface to height h: ΔU = U_h - U_surface = mgh / (1 + h/R).',
        ],
      },
      {
        id: '3-e',
        type: 'formula',
        title: 'E. FIELD-POTENTIAL RELATION',
        formulaDisplay: 'g⃗ = -∇V = -[ (∂V/∂x)î + (∂V/∂y)ĵ + (∂V/∂z)k̂ ]',
        notes: 'For purely radial symmetry: g = -dV/dr (Field points in direction of steepest decrease of potential).',
      },
      {
        id: '3-f',
        type: 'concept',
        title: 'F. EQUIPOTENTIAL SURFACES',
        points: [
          'A surface on which gravitational potential V is constant everywhere.',
          'Work done in moving a mass along an equipotential surface is ZERO (W = m · ΔV = 0).',
          'Gravitational field lines are always strictly perpendicular to equipotential surfaces.',
          'For a point mass, equipotential surfaces are concentric spheres centred on the mass.',
        ],
      },
      {
        id: '3-g',
        type: 'formula',
        title: 'G. MECHANICAL ENERGY CONSERVATION',
        formulaDisplay: 'E = K + U = ½mv² - (GMm / r) = constant',
        points: [
          'Because gravity is a conservative force, total mechanical energy remains invariant throughout motion.',
          'Bound orbit: E < 0 (ellipse or circle).',
          'Escape threshold: E = 0 (parabolic trajectory).',
          'Unbound trajectory: E > 0 (hyperbolic trajectory).',
        ],
      },
      {
        id: '3-h',
        type: 'traps',
        title: 'H. COMMON JEE TRAPS',
        traps: [
          {
            trap: 'TRAP 1: Treating Potential V as a vector or Field g as a scalar.',
            remedy: 'Field is vector (add with cosθ, sinθ). Potential is scalar (add numbers with their negative signs: V = V₁ + V₂).',
          },
          {
            trap: 'TRAP 2: Using ΔU = mgh when height h is comparable to Earth radius R.',
            remedy: 'ΔU = mgh is valid ONLY for h ≪ R. For general h, use ΔU = mgh / (1 + h/R) = GMm (1/R - 1/(R+h)).',
          },
          {
            trap: 'TRAP 3: Dropping the negative sign in potential energy.',
            remedy: 'Gravitational potential and potential energy are strictly NEGATIVE for bound systems with reference at infinity.',
          },
        ],
      },
    ],
    pyqs: [
      {
        id: 'pyq-3-1',
        source: 'JEE Main',
        year: '2023',
        difficulty: 'FOUNDATION',
        concept: 'Field from Potential Gradient',
        question:
          'The gravitational potential in a region is given by V = (2x - 3y + 4z) J/kg. What is the magnitude of the gravitational field intensity at point (1, 1, 1)?',
        options: [
          { label: 'A', text: '√29 N/kg' },
          { label: 'B', text: '5 N/kg' },
          { label: 'C', text: '3 N/kg' },
          { label: 'D', text: '9 N/kg' },
        ],
        hint: 'Use g⃗ = -∇V = -(∂V/∂x î + ∂V/∂y ĵ + ∂V/∂z k̂). Then compute magnitude |g⃗| = √(gx² + gy² + gz²).',
        correctAnswer: 'A (√29 N/kg)',
        solution:
          'g_x = -∂V/∂x = -2\ng_y = -∂V/∂y = -(-3) = 3\ng_z = -∂V/∂z = -4\ng⃗ = -2 î + 3 ĵ - 4 k̂\nMagnitude |g⃗| = √((-2)² + (3)² + (-4)²) = √(4 + 9 + 16) = √29 N/kg. Option (A) is correct.',
      },
      {
        id: 'pyq-3-2',
        source: 'JEE Main',
        year: '2021',
        difficulty: 'MODERATE',
        concept: 'Potential Energy of Multi-Particle Configuration',
        question:
          'Three identical point masses each of mass m are placed at the vertices of an equilateral triangle of side length a. What is the total gravitational potential energy of the system?',
        options: [
          { label: 'A', text: '-3 G m² / a' },
          { label: 'B', text: '-G m² / a' },
          { label: 'C', text: '-3/2 G m² / a' },
          { label: 'D', text: '-6 G m² / a' },
        ],
        hint: 'Sum the interaction potential energy for each unique pair: U_total = Σ U_ij. For 3 masses, there are 3 pairs.',
        correctAnswer: 'A (-3 G m² / a)',
        solution:
          'Number of pairs = ³C₂ = 3.\nPair 1-2: U₁₂ = -G m² / a\nPair 2-3: U₂₃ = -G m² / a\nPair 3-1: U₃₁ = -G m² / a\nTotal U = U₁₂ + U₂₃ + U₃₁ = -3 G m² / a. Option (A) is correct.',
      },
      {
        id: 'pyq-3-3',
        source: 'JEE Advanced',
        year: '2020',
        difficulty: 'ADVANCED',
        concept: 'Work Done in Shifting Mass from Surface to Height',
        question:
          'What is the work done by an external agent to slowly shift a mass m from Earth’s surface (radius R) to a height h = 2R above the surface?',
        options: [
          { label: 'A', text: '2/3 mgR' },
          { label: 'B', text: '1/3 mgR' },
          { label: 'C', text: '2 mgR' },
          { label: 'D', text: '3/4 mgR' },
        ],
        hint: 'Work done W = ΔU = U_final - U_initial. Substitute r_initial = R and r_final = 3R.',
        correctAnswer: 'A (2/3 mgR)',
        solution:
          'U_initial = -GMm / R\nr_final = R + h = R + 2R = 3R ⟹ U_final = -GMm / (3R)\nWork W = U_final - U_initial = -GMm/(3R) - (-GMm/R) = GMm/R [1 - 1/3] = (2/3) GMm/R.\nSince GM/R² = g ⟹ GM/R = gR:\nTherefore, W = (2/3) mgR. Option (A) is correct.',
      },
    ],
  },
  {
    id: 'section-04',
    number: '04',
    title: "KEPLER'S LAWS OF PLANETARY MOTION",
    tag: 'ORBITAL MECHANICS',
    description: 'Elliptical orbits, areal velocity conservation, harmonic period scaling, and variable orbital speed.',
    subsections: [
      {
        id: '4-a',
        type: 'concept',
        title: "FIRST LAW: LAW OF ORBITS",
        statement:
          'All planets move in elliptical orbits with the Sun situated at one of the two foci of the ellipse.',
        points: [
          'An ellipse has semi-major axis a, semi-minor axis b, and eccentricity e (0 ≤ e < 1).',
          'Closest distance to Sun: Perihelion r_p = a(1 - e).',
          'Farthest distance from Sun: Aphelion r_a = a(1 + e).',
          'Circular orbit is the special limiting case where eccentricity e = 0 and both foci merge at the centre (a = b = r).',
        ],
      },
      {
        id: '4-b',
        type: 'formula',
        title: "SECOND LAW: LAW OF AREAS",
        statement:
          'The radius vector drawn from the Sun to a planet sweeps out equal areas in equal intervals of time.',
        formulaDisplay: 'dA / dt = L / (2m) = constant',
        points: [
          'Areal velocity (dA/dt) is strictly constant throughout the orbit.',
          'Direct physical consequence of CONSERVATION OF ANGULAR MOMENTUM (L⃗ = r⃗ × p⃗ = const).',
          'Because gravitational force is purely central, torque τ⃗ = r⃗ × F⃗ = 0, so dL⃗/dt = 0.',
        ],
      },
      {
        id: '4-c',
        type: 'formula',
        title: "THIRD LAW: LAW OF PERIODS",
        statement:
          'The square of the orbital period T of a planet is directly proportional to the cube of the semi-major axis a of its orbit.',
        formulaDisplay: 'T² ∝ a³   ⟹   T² = (4π² · a³) / (GM)',
        points: [
          'For any two planets orbiting the same central mass: (T₁ / T₂)² = (a₁ / a₂)³.',
          'M is the mass of the central attracting body (Sun), NOT the planet.',
          'In a circular orbit, semi-major axis a equals radius r: T² = 4π² r³ / (GM).',
        ],
      },
      {
        id: '4-d',
        type: 'concept',
        title: 'VARIABLE SPEED IN ELLIPTICAL ORBITS',
        points: [
          'Orbital speed is NOT constant in an elliptical orbit.',
          'At Perihelion (closest): Speed is MAXIMUM (v_max).',
          'At Aphelion (farthest): Speed is MINIMUM (v_min).',
          'Angular momentum conservation gives: r_p · v_p = r_a · v_a ⟹ v_p / v_a = r_a / r_p = (1 + e) / (1 - e).',
        ],
      },
      {
        id: '4-e',
        type: 'traps',
        title: 'COMMON JEE TRAPS',
        traps: [
          {
            trap: 'TRAP 1: Using perihelion or aphelion distance instead of semi-major axis in Kepler’s Third Law.',
            remedy: 'Always use a = (r_p + r_a) / 2. Kepler’s Third Law depends solely on semi-major axis a, regardless of eccentricity.',
          },
          {
            trap: 'TRAP 2: Assuming planet speed is constant because areal velocity is constant.',
            remedy: 'Areal velocity dA/dt is constant; linear velocity v is NOT constant. Planet speeds up near Sun and slows down far away.',
          },
          {
            trap: 'TRAP 3: Forgetting that Kepler’s Third Law constant (4π²/GM) depends on central mass M.',
            remedy: 'For planets orbiting Sun, M = M_Sun. For moons/satellites orbiting Earth, M = M_Earth.',
          },
        ],
      },
    ],
    pyqs: [
      {
        id: 'pyq-4-1',
        source: 'JEE Main',
        year: '2022',
        difficulty: 'FOUNDATION',
        concept: 'Orbital Period Ratio from Radius Ratio',
        question:
          'Two satellites A and B are revolving around Earth in circular orbits of radii R and 4R respectively. If the time period of satellite A is 8 hours, what is the time period of satellite B?',
        options: [
          { label: 'A', text: '16 hours' },
          { label: 'B', text: '32 hours' },
          { label: 'C', text: '64 hours' },
          { label: 'D', text: '128 hours' },
        ],
        hint: 'Use Kepler’s Third Law: (T_B / T_A)² = (R_B / R_A)³ ⟹ T_B = T_A · (R_B / R_A)^(3/2).',
        correctAnswer: 'C (64 hours)',
        solution:
          '(T_B / T_A) = (4R / R)^(3/2) = (4)^(3/2) = (2²)³ᐟ² = 2³ = 8.\nT_B = 8 × T_A = 8 × 8 hours = 64 hours. Option (C) is correct.',
      },
      {
        id: 'pyq-4-2',
        source: 'JEE Main',
        year: '2021',
        difficulty: 'MODERATE',
        concept: 'Conservation of Angular Momentum in Orbit',
        question:
          'A planet moves around the Sun in an elliptical orbit. The ratio of its maximum distance to its minimum distance from the Sun is 4. What is the ratio of its maximum orbital speed to its minimum orbital speed?',
        options: [
          { label: 'A', text: '2' },
          { label: 'B', text: '4' },
          { label: 'C', text: '16' },
          { label: 'D', text: '1/4' },
        ],
        hint: 'Angular momentum is conserved: L = m · r_p · v_max = m · r_a · v_min ⟹ v_max / v_min = r_a / r_p.',
        correctAnswer: 'B (4)',
        solution:
          'By conservation of angular momentum: r_min · v_max = r_max · v_min.\nv_max / v_min = r_max / r_min = 4. Option (B) is correct.',
      },
      {
        id: 'pyq-4-3',
        source: 'JEE Advanced',
        year: '2018',
        difficulty: 'ADVANCED',
        concept: 'Keplerian Areal Velocity and Energy',
        question:
          'A planet of mass m moves in an elliptical orbit of semi-major axis a and eccentricity e around a star of mass M. The total mechanical energy of the planet is:',
        options: [
          { label: 'A', text: '-GMm / (2a)' },
          { label: 'B', text: '-GMm / a' },
          { label: 'C', text: '-GMm / (2a(1-e²))' },
          { label: 'D', text: '+GMm / (2a)' },
        ],
        hint: 'The total mechanical energy of an elliptical orbit depends solely on the semi-major axis a, identical to a circular orbit of radius a.',
        correctAnswer: 'A (-GMm / (2a))',
        solution:
          'In any Keplerian ellipse, total energy E = K + U = -GMm / (2a).\nIt depends purely on semi-major axis a and is completely independent of eccentricity e.\nNegative sign indicates a bound orbit. Option (A) is correct.',
      },
    ],
  },
  {
    id: 'section-05',
    number: '05',
    title: 'SATELLITE & ESCAPE VELOCITY',
    tag: 'ASTRONOMICAL KINEMATICS',
    description: 'Orbital velocity, period, escape threshold, binding energy, and weightlessness physics.',
    subsections: [
      {
        id: '5-a',
        type: 'formula',
        title: 'A. ORBITAL VELOCITY (v_o)',
        statement:
          'The horizontal speed required for a satellite to maintain a stable circular orbit at radius r around a celestial body.',
        formulaDisplay: 'v_o = \\sqrt{\\frac{GM}{r}}',
        sequence: [
          {
            step: 'STEP 01',
            label: 'Centripetal Force = Gravitational Attraction',
            formula: '\\frac{m v_o^2}{r} = \\frac{GMm}{r^2}',
            explanation: 'Gravity provides the inward centripetal acceleration required to maintain a closed circular orbit.',
          },
          {
            step: 'STEP 02',
            label: 'Orbital Speed Expression (Mass m Cancels)',
            formula: 'v_o = \\sqrt{\\frac{GM}{r}}',
            explanation: 'Orbital speed decays with the square root of radial distance (v_o ∝ 1/√r) and is independent of satellite mass.',
          },
          {
            step: 'STEP 03',
            label: 'Near Earth Surface Reference (r ≈ R)',
            formula: 'v_o = \\sqrt{gR} \\approx 7.92\\text{ km/s}',
            explanation: 'Substituting Earth radius R = 6,400 km and g = 9.81 m/s² yields approximately 7.92 km/s (~8 km/s).',
          },
        ],
        notes: 'Near Earth surface (r ≈ R): v_o = √(gR) ≈ 7.92 km/s (~8 km/s).',
        points: [
          'Derived by balancing centripetal force with gravitational force: m v_o² / r = G M m / r².',
          'Independent of the mass of the satellite.',
          'Orbital speed decreases as orbital radius increases (v_o ∝ 1/√r).',
        ],
      },
      {
        id: '5-b',
        type: 'formula',
        title: 'B. ORBITAL PERIOD OF SATELLITE (T)',
        statement: 'The time duration required for a satellite to complete one full revolution in a circular orbit of radius r.',
        formulaDisplay: 'T = \\frac{2\\pi r}{v_o} = 2\\pi \\sqrt{\\frac{r^3}{GM}}',
        sequence: [
          {
            step: 'STEP 01',
            label: 'Circumference over Orbital Velocity',
            formula: 'T = \\frac{2\\pi r}{v_o}',
            explanation: 'Total circular orbit perimeter (2πr) divided by constant orbital tangential speed v_o.',
          },
          {
            step: 'STEP 02',
            label: 'Substituting v_o = √(GM/r)',
            formula: 'T = \\frac{2\\pi r}{\\sqrt{GM / r}} = 2\\pi \\sqrt{\\frac{r^3}{GM}}',
            explanation: 'Directly relates orbital period T to the semi-major orbital radius r.',
          },
          {
            step: 'STEP 03',
            label: 'Keplerian Harmonic Formulation (Squaring Both Sides)',
            formula: 'T^2 = \\left(\\frac{4\\pi^2}{GM}\\right) r^3 \\implies T^2 \\propto r^3',
            explanation: 'Rigorously derives Kepler’s Third Law of Periods from Newtonian universal gravitation.',
          },
        ],
        notes: 'Near Earth surface orbit (r ≈ R = 6400 km): T ≈ 84.6 minutes ≈ 1.41 hours.',
        points: [
          'Geostationary satellite: Orbit in equatorial plane with T = 24 hours, parked at altitude h ≈ 35,786 km (r ≈ 42,164 km).',
          'Polar satellite: Lower altitude (~500–800 km), T ≈ 100 min, useful for environmental mapping.',
        ],
      },
      {
        id: '5-c',
        type: 'formula',
        title: 'C. ESCAPE VELOCITY (v_e)',
        statement:
          'The minimum speed with which an object must be projected from the surface of a celestial body to overcome its gravitational field and never return.',
        formulaDisplay: 'v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}',
        notes: 'On Earth: v_e = √(2 × 9.81 × 6.4×10⁶) ≈ 11.2 km/s.',
        points: [
          'On Moon: v_e ≈ 2.38 km/s (thermal speed of gas molecules exceeds v_e, explaining absence of lunar atmosphere).',
          'On Jupiter: v_e ≈ 59.5 km/s (massive gravity holds thick atmosphere of light gases H₂ and He).',
        ],
      },
      {
        id: '5-d',
        type: 'formula',
        title: 'D. COMPARISON: ESCAPE VS ORBITAL VELOCITY',
        statement: 'Exact mathematical relationship between circular orbital speed and parabolic escape threshold.',
        formulaDisplay: 'v_e = \\sqrt{2} \\cdot v_o \\approx 1.414 \\cdot v_o',
        sequence: [
          {
            step: 'STEP 01',
            label: 'Surface Circular Orbital Speed',
            formula: 'v_o = \\sqrt{\\frac{GM}{R}}',
            explanation: 'Speed required to sustain a stable circular orbit skimming the planetary surface.',
          },
          {
            step: 'STEP 02',
            label: 'Surface Parabolic Escape Speed',
            formula: 'v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2} \\cdot \\sqrt{\\frac{GM}{R}}',
            explanation: 'Speed required to achieve parabolic unbound trajectory with zero total mechanical energy.',
          },
          {
            step: 'STEP 03',
            label: 'Exact Ratio & Relationship',
            formula: 'v_e = \\sqrt{2} \\cdot v_o \\approx 1.414 \\cdot v_o',
            explanation: 'Escape velocity from the planetary surface is exactly √2 (≈ 1.414) times the surface orbital velocity.',
          },
          {
            step: 'STEP 04',
            label: 'Velocity Boost to Escape from Circular Orbit',
            formula: '\\Delta v = (\\sqrt{2} - 1) \\cdot v_o \\approx +41.4%',
            explanation: 'A satellite in circular orbit requires an extra 41.4% speed boost (or doubling kinetic energy by 100%) to escape.',
          },
        ],
        points: [
          'Escape velocity from the surface is exactly √2 times the surface orbital velocity.',
          'Percentage increase needed to escape from circular orbit: (√2 - 1) × 100% ≈ 41.4%.',
        ],
      },
      {
        id: '5-e',
        type: 'formula',
        title: 'E. ENERGY INTERPRETATION AT ESCAPE THRESHOLD',
        statement: 'First-principles derivation of escape velocity using conservation of total mechanical energy.',
        formulaDisplay: 'v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}',
        sequence: [
          {
            step: 'STEP 01',
            label: 'Total Mechanical Energy at Surface (r = R)',
            formula: 'E = K + U = \\frac{1}{2}m v_e^2 - \\frac{GMm}{R}',
            explanation: 'Sum of initial kinetic energy (launch velocity v_e) and negative gravitational potential energy in Earth’s well.',
          },
          {
            step: 'STEP 02',
            label: 'Escape Boundary Condition at Infinity (r → ∞)',
            formula: 'E_{\\text{final}} = K_{∞} + U_{∞} \\ge 0 \\implies E_{\\text{min}} = 0',
            explanation: 'To just barely escape, the projectile reaches r → ∞ with zero residual kinetic energy (K_∞ = 0) and zero potential energy (U_∞ = 0).',
          },
          {
            step: 'STEP 03',
            label: 'Conservation of Energy Balance',
            formula: '\\frac{1}{2}m v_e^2 = \\frac{GMm}{R}',
            explanation: 'Equating surface energy to zero threshold (E = 0 ⟹ ½m v_e² - GMm/R = 0): launch kinetic energy must equal gravitational potential well depth.',
          },
          {
            step: 'STEP 04',
            label: 'Solving for Escape Velocity (Mass m Cancels)',
            formula: 'v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}',
            explanation: 'Because mass m cancels out on both sides, escape speed is independent of projectile mass (substituting GM = gR² gives √(2gR)).',
          },
        ],
        points: [
          'At infinity, both kinetic energy and potential energy can reach zero asymptotically (E = 0).',
          'The mass m of the projectile cancels out on both sides of the energy conservation equation.',
        ],
      },
      {
        id: '5-f',
        type: 'concept',
        title: 'F. MASS & ANGLE INDEPENDENCE',
        points: [
          'Escape velocity is strictly independent of the mass of the escaping body — a pebble, a feather, or a superheavy rocket require the exact same 11.2 km/s escape speed on Earth.',
          'In the absence of air resistance, escape velocity is independent of the projection angle θ (whether fired vertically or at 45°, as long as it does not collide with the surface).',
        ],
      },
      {
        id: '5-g',
        type: 'concept',
        title: 'G. APPARENT WEIGHTLESSNESS IN ORBIT',
        points: [
          'An astronaut in orbit is in continuous state of free fall toward Earth alongside their spacecraft.',
          'Gravity is NOT zero in orbit! At ISS altitude (h ≈ 400 km), g is still ~8.9 m/s² (~90% of surface gravity).',
          'The sensation of weightlessness occurs because normal contact force N is zero (N = m(g - a) = m(g - g) = 0).',
        ],
      },
      {
        id: '5-h',
        type: 'traps',
        title: 'H. COMMON JEE TRAPS',
        traps: [
          {
            trap: 'TRAP 1: Confusing orbital velocity v_o with escape velocity v_e.',
            remedy: 'v_o = √(GM/r) to stay in orbit. v_e = √(2GM/r) to escape entirely. v_e is √2 times v_o.',
          },
          {
            trap: 'TRAP 2: Believing heavier rockets require greater escape speed.',
            remedy: 'Escape speed is strictly mass-independent (11.2 km/s for all masses). Heavier rockets only require more total kinetic energy (E = ½ m v_e²).',
          },
          {
            trap: 'TRAP 3: Calculating escape velocity from altitude h using surface radius R.',
            remedy: 'From height h above surface, the distance from centre is r = R + h. Therefore, v_e(h) = √(2GM / (R + h)).',
          },
          {
            trap: 'TRAP 4: Forgetting the negative sign of total orbital energy.',
            remedy: 'Total energy of a satellite in orbit is NEGATIVE: E = -GMm / (2r) = -K = U / 2.',
          },
        ],
      },
    ],
    pyqs: [
      {
        id: 'pyq-5-1',
        source: 'JEE Main',
        year: '2023',
        difficulty: 'FOUNDATION',
        concept: 'Escape Velocity from Altitude h = R',
        question:
          'The escape velocity of a body from Earth’s surface is v_e = 11.2 km/s. What is its escape velocity when projected from a height h = R above Earth’s surface?',
        options: [
          { label: 'A', text: '11.2 km/s' },
          { label: 'B', text: '11.2 / √2 km/s ≈ 7.92 km/s' },
          { label: 'C', text: '11.2 / 2 km/s = 5.6 km/s' },
          { label: 'D', text: '11.2 × √2 km/s' },
        ],
        hint: 'Distance from centre at height h = R is r = R + h = 2R. v_e(r) = √(2GM / r).',
        correctAnswer: 'B (11.2 / √2 km/s ≈ 7.92 km/s)',
        solution:
          'At surface: v_e = √(2GM/R) = 11.2 km/s.\nAt height h = R: r = 2R.\nv_e\' = √(2GM / 2R) = (1/√2) √(2GM/R) = v_e / √2 = 11.2 / 1.414 ≈ 7.92 km/s. Option (B) is correct.',
      },
      {
        id: 'pyq-5-2',
        source: 'JEE Main',
        year: '2022',
        difficulty: 'MODERATE',
        concept: 'Satellite Kinetic, Potential, and Total Energy Relations',
        question:
          'A satellite of mass m revolves in a circular orbit of radius r around Earth of mass M. What is the ratio of its kinetic energy to its total mechanical energy?',
        options: [
          { label: 'A', text: '1' },
          { label: 'B', text: '-1' },
          { label: 'C', text: '2' },
          { label: 'D', text: '-1/2' },
        ],
        hint: 'Kinetic energy K = GMm/(2r). Total energy E = -GMm/(2r). Find the ratio K / E.',
        correctAnswer: 'B (-1)',
        solution:
          'K = (1/2) m v_o² = (1/2) m (GM/r) = +GMm / (2r).\nPotential energy U = -GMm / r.\nTotal energy E = K + U = +GMm/(2r) - GMm/r = -GMm / (2r).\nRatio K / E = (+GMm/2r) / (-GMm/2r) = -1. Option (B) is correct.',
      },
      {
        id: 'pyq-5-3',
        source: 'JEE Advanced',
        year: '2022',
        difficulty: 'ADVANCED',
        concept: 'Projection Velocity Greater than Escape Velocity',
        question:
          'A projectile is fired vertically upward from Earth’s surface with initial velocity v = 2 v_e (where v_e is escape velocity). What will be its residual velocity when it escapes to infinity in interplanetary space (neglecting other celestial bodies and air resistance)?',
        options: [
          { label: 'A', text: 'v_e' },
          { label: 'B', text: '√3 v_e' },
          { label: 'C', text: '2 v_e' },
          { label: 'D', text: '√5 v_e' },
        ],
        hint: 'Apply conservation of mechanical energy: (1/2)m v² - GMm/R = (1/2)m v_∞² + 0. Note GMm/R = (1/2)m v_e².',
        correctAnswer: 'B (√3 v_e)',
        solution:
          'E_initial = (1/2)m v² - GMm/R = (1/2)m (2v_e)² - (1/2)m v_e² = (1/2)m [4 v_e² - v_e²] = (1/2)m [3 v_e²].\nE_final = (1/2)m v_∞² + 0.\nEquating energies: (1/2)m v_∞² = (1/2)m (3 v_e²) ⟹ v_∞ = √3 v_e. Option (B) is correct.',
      },
    ],
  },
]

/**
 * 8-Step JEE Problem-Solving Framework
 */
export const JEE_PROBLEM_FRAMEWORK = {
  title: 'HOW TO START A GRAVITATION PROBLEM',
  subtitle: 'The 8-Step Systematic Approach for JEE Main & Advanced',
  warning:
    'Most gravitation mistakes happen before calculation — students often choose the wrong quantity, wrong distance, or wrong formula.',
  steps: [
    {
      step: '1',
      title: 'Identify the System',
      description: 'Define the interacting bodies: Is it two point masses, a planet and satellite, a ring, or a sphere with a cavity?',
    },
    {
      step: '2',
      title: 'Identify What the Question Asks',
      description: 'Determine the exact target quantity: Force (F), Local field (g), Potential (V), Potential Energy (U), Orbital speed (v_o), Escape speed (v_e), or Period (T)?',
    },
    {
      step: '3',
      title: 'Identify the Correct Distance',
      description: 'Always use centre-to-centre distance! If altitude h above surface of radius R is given, the separation is r = R + h.',
    },
    {
      step: '4',
      title: 'Determine Scalar vs Vector',
      description: 'Potential (V), Potential Energy (U), and Total Energy (E) are SCALARS (algebraic sum with signs). Force (F) and Field (g) are VECTORS (resolve into components).',
    },
    {
      step: '5',
      title: 'Choose the Governing Law',
      description: 'Newton’s Law for forces, Gauss/Shell Theorem for spherical distributions, Energy Conservation for velocities, or Kepler’s Laws for orbital periods.',
    },
    {
      step: '6',
      title: 'Write the Symbolic Equation First',
      description: 'Always manipulate algebra symbolically before substituting numerical constants. Masses and radii frequently cancel out.',
    },
    {
      step: '7',
      title: 'Check Units & Approximations',
      description: 'Verify SI units (convert km to m!). Never use linear approximations like g(1 - 2h/R) unless h ≪ R is explicitly satisfied.',
    },
    {
      step: '8',
      title: 'Sanity Check the Physical Outcome',
      description: 'Does g decrease with height? Is bound potential negative? Is escape velocity greater than orbital speed (v_e = √2 v_o)?',
    },
  ],
}

/**
 * Consolidated Gravitation Formula Quick Sheet
 */
export const FORMULA_QUICK_SHEET = [
  {
    id: 'f1',
    name: "Newton's Universal Law",
    formula: 'F = G · m₁m₂ / r²',
    category: 'Forces',
  },
  {
    id: 'f2',
    name: 'Surface Acceleration (g)',
    formula: 'g = GM / R²',
    category: 'Gravity',
  },
  {
    id: 'f3',
    name: 'Gravity at Altitude (h)',
    formula: 'g_h = g · [R / (R + h)]²',
    category: 'Gravity',
  },
  {
    id: 'f4',
    name: 'Gravity at Depth (d)',
    formula: 'g_d = g · (1 - d / R)',
    category: 'Gravity',
  },
  {
    id: 'f5',
    name: 'Weight Force',
    formula: 'W = m · g',
    category: 'Forces',
  },
  {
    id: 'f6',
    name: 'Free Fall Drop Time',
    formula: 't = √(2h / g)',
    category: 'Kinematics',
  },
  {
    id: 'f7',
    name: 'Gravitational Field',
    formula: 'g⃗ = -(GM / r²) r̂  [|g⃗| = GM / r²]',
    category: 'Field',
  },
  {
    id: 'f8',
    name: 'Gravitational Potential',
    formula: 'V = -GM / r',
    category: 'Potential',
  },
  {
    id: 'f9',
    name: 'Potential Energy',
    formula: 'U = -GMm / r',
    category: 'Potential',
  },
  {
    id: 'f10',
    name: 'Field-Potential Relation',
    formula: 'g = -dV / dr  (g⃗ = -∇V)',
    category: 'Field',
  },
  {
    id: 'f11',
    name: "Kepler's Third Law",
    formula: 'T² = 4π² a³ / (GM)',
    category: 'Orbits',
  },
  {
    id: 'f12',
    name: 'Orbital Velocity',
    formula: 'v_o = √(GM / r)',
    category: 'Satellites',
  },
  {
    id: 'f13',
    name: 'Orbital Period',
    formula: 'T = 2π √(r³ / GM)',
    category: 'Satellites',
  },
  {
    id: 'f14',
    name: 'Escape Velocity',
    formula: 'v_e = √(2GM / R) = √(2gR)',
    category: 'Escape',
  },
  {
    id: 'f15',
    name: 'Escape / Orbital Ratio',
    formula: 'v_e = √2 · v_o',
    category: 'Escape',
  },
  {
    id: 'f16',
    name: 'Total Satellite Energy',
    formula: 'E = -GMm / (2r) = -K',
    category: 'Satellites',
  },
]
