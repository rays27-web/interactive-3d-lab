/**
 * Centralized Scientific Mission & Physics Catalog
 * Experiments 01 to 06:
 * 01 PLANET: Gravity & Surface Physics
 * 02 GALAXY: Gravity & Galactic Motion
 * 03 BLACK HOLE: Extreme Gravity
 * 04 FLUID: Pressure & Flow
 * 05 PULSAR: Rotation & Periodic Signals
 * 06 SOLAR SYSTEM: Orbital Mechanics
 */

export const EXPERIMENT_MISSIONS_DATA = {
  planet: {
    experimentId: 'planet',
    theme: 'Gravity & Distance',
    index: '01',
    name: 'PLANET',
    primaryQuestion: 'How does distance change gravity?',
    learningObjective: 'Discover how distance changes gravitational attraction. Gravity becomes weaker as distance increases, following the inverse-square law (F ∝ 1/r²).',
    governingPrinciple: 'Newton\'s Law of Universal Gravitation & Inverse-Square Law',
    formula: 'F = G \\frac{M m}{r^2}, \\quad g = \\frac{GM}{r^2}',
    controlsSummary: 'Distance (0.5× Closer .. 2.5× Farther)',
    observablesSummary: 'Gravitational pull arrow, distance dimension line, and acceleration',
    progressiveExplanation: {
      level1: {
        title: 'Level 1: Intuition (Gravity & Distance)',
        content: 'Gravity is an invisible pulling force between masses. As two objects move farther apart, their gravitational attraction quickly weakens. If you double the distance between an object and a planet, the gravitational pull becomes four times weaker!',
      },
      level2: {
        title: 'Level 2: Governing Equations',
        content: 'Newton\'s Inverse-Square Law of Gravitation:\n  F = G · (M · m) / r²\nLocal gravitational acceleration at distance r:\n  g(r) = G · M / r²\nWhen distance doubles (r → 2r), the force scales as:\n  F(2r) = F / 2² = F / 4 = 25% of baseline.',
      },
      level3: {
        title: 'Level 3: Geometric Flux Derivation',
        content: 'Gravitational field lines emanate symmetrically in three dimensions, spreading uniformly across an imaginary sphere of radius r. Because the surface area of a sphere scales as A = 4πr², the field line density (force per unit area) must decrease by 1/r², proving why gravity follows the exact inverse-square law.',
      },
      level4: {
        title: 'Level 4: Advanced Gravitational Mechanics',
        content: 'Gravitational potential Φ(r) = -GM/r satisfies Poisson\'s equation ∇²Φ = 4πGρ. In the vacuum exterior to a spherically symmetric body, Gauss\'s Law for gravity ensures that the field is mathematically identical to a point mass situated at the center of the planet.',
      },
    },
    parameterGuides: {
      distance: {
        label: 'DISTANCE',
        definition: 'Center-to-center distance (r) between the planet and the object.',
        significance: 'Governs gravitational attraction: force weakens quadratically with distance (F ∝ 1/r²).',
      },
    },
    missions: [
      {
        id: 'planet-mission-1',
        number: '01',
        title: 'How Distance Changes Gravity',
        question: 'If you move the object farther away, what will happen to gravity?',
        hypothesisPrompt: 'If you move the object farther away, what will happen to gravity?',
        predictions: [
          {
            id: 'opt-a',
            text: 'Stronger',
            isCorrect: false,
            rationale: 'Not quite. Moving farther away weakens gravitational attraction.',
          },
          {
            id: 'opt-b',
            text: 'Weaker',
            isCorrect: true,
            rationale: 'Correct. Gravity becomes weaker as distance increases.',
          },
          {
            id: 'opt-c',
            text: 'Stay the same',
            isCorrect: false,
            rationale: 'Not quite. Gravity is not constant; it depends directly on distance.',
          },
          {
            id: 'opt-d',
            text: 'Gravity disappears',
            isCorrect: false,
            rationale: 'Not quite. Gravity reaches infinitely far into space, but gets weaker with distance.',
          },
        ],
        targetParams: { distance: 2.0 },
        baselineParams: { distance: 1.0 },
        paramKey: 'distance',
        condition: {
          metric: 'distance',
          comparator: '>=',
          target: 2.0,
          unit: '×',
        },
        observableText: 'The distance indicator expands to 2.0× baseline and the gravitational force arrow shrinks to one-quarter length.',
        measurement: {
          metric: 'Gravitational Force Ratio (F / F₀)',
          baseline: '1.00× (100%) at 1.0× distance',
          calibrated: '0.25× (25%) at 2.0× distance',
          delta: '-75.0%',
          physicalMeaning: 'Doubling the distance makes the gravitational force four times weaker.',
        },
        conclusion: 'Confirmed that gravitational force decreases inversely with the square of distance: doubling distance cuts gravity to 25%.',
      },
      {
        id: 'planet-mission-2',
        number: '02',
        title: 'Moving Closer: Stronger Gravitational Pull',
        question: 'What happens to gravitational attraction if you move the object to half distance (0.5×)?',
        hypothesisPrompt: 'Predict the physical consequence of halving the distance to the planet:',
        predictions: [
          {
            id: 'opt-a',
            text: 'Gravitational pull quadruples to 4.0× baseline (F ∝ 1/r² = 1/0.5² = 4.0×).',
            isCorrect: true,
            rationale: 'Correct! Because gravity follows the inverse-square law, halving distance (0.5×) increases force by 1 / (0.5)² = 4.0×.',
          },
          {
            id: 'opt-b',
            text: 'Gravity drops to zero because the object enters the atmosphere.',
            isCorrect: false,
            rationale: 'Approaching the planet strengthens gravitational attraction.',
          },
          {
            id: 'opt-c',
            text: 'Gravity doubles to 2.0× because distance is cut in half.',
            isCorrect: false,
            rationale: 'Gravity scales inversely with the SQUARE of distance, not linearly.',
          },
          {
            id: 'opt-d',
            text: 'Gravity remains unchanged.',
            isCorrect: false,
            rationale: 'Distance directly controls the strength of gravitational attraction.',
          },
        ],
        targetParams: { distance: 0.5 },
        baselineParams: { distance: 1.0 },
        paramKey: 'distance',
        condition: {
          metric: 'distance',
          comparator: '<=',
          target: 0.5,
          unit: '×',
        },
        observableText: 'The gravitational attraction arrow grows thick and bright, showing 4× stronger pull toward the planet.',
        measurement: {
          metric: 'Gravitational Force Ratio (F / F₀)',
          baseline: '1.00× (100%) at 1.0× distance',
          calibrated: '4.00× (400%) at 0.5× distance',
          delta: '+300.0%',
          physicalMeaning: 'Halving the distance makes the gravitational force four times stronger.',
        },
        conclusion: 'Confirmed that reducing distance drastically amplifies gravitational force through the inverse-square relation.',
      },
      {
        id: 'planet-mission-3',
        number: '03',
        title: 'Mass vs Weight Across Planetary Gravities',
        question: 'If an object of mass m = 50 kg is transported from Earth (g = 9.81 m/s²) to Jupiter (g = 24.79 m/s²), what happens to its mass and its measured weight?',
        hypothesisPrompt: 'Predict how planetary surface gravity affects mass and weight:',
        predictions: [
          {
            id: 'opt-a',
            text: 'Mass remains strictly constant at 50 kg, while weight increases from 490.5 N on Earth to 1,239.5 N on Jupiter (W = mg).',
            isCorrect: true,
            rationale: 'Correct! Mass m is an intrinsic measure of inertia and matter quantity that never changes with location. Weight W = mg is the local gravitational pull exerted on that mass, which scales directly with surface gravity g.',
          },
          {
            id: 'opt-b',
            text: 'Both mass and weight increase to 2.53× because Jupiter is larger.',
            isCorrect: false,
            rationale: 'Mass is invariant. Only gravitational weight changes.',
          },
          {
            id: 'opt-c',
            text: 'Weight drops to zero because gas giants have no solid surface.',
            isCorrect: false,
            rationale: 'Even without a solid surface, gravitational acceleration at the 1-bar atmosphere level is 24.79 m/s².',
          },
          {
            id: 'opt-d',
            text: 'Mass increases while weight remains constant.',
            isCorrect: false,
            rationale: 'Matter cannot spontaneously be created when moving between planets.',
          },
        ],
        targetParams: { rotationSpeed: 1.0 },
        baselineParams: { rotationSpeed: 1.0 },
        paramKey: 'rotationSpeed',
        condition: {
          metric: 'rotationSpeed',
          comparator: '>=',
          target: 1.0,
          unit: '×',
        },
        observableText: 'Spring scale stretches to 1,239.5 N; downward weight force vector extends proportionately.',
        measurement: {
          metric: 'Weight Force (W = mg)',
          baseline: '490.5 N (Earth, g = 9.81 m/s²)',
          calibrated: '1,239.5 N (Jupiter, g = 24.79 m/s²)',
          delta: '+152.7%',
          physicalMeaning: 'Intrinsic mass m remains 50 kg, but downward gravitational force W increases by 2.53×.',
        },
        conclusion: 'Demonstrated the fundamental physical distinction: Mass is invariant matter quantity, whereas Weight is local gravitational force W = mg.',
      },
    ],
  },

  galaxy: {
    experimentId: 'galaxy',
    theme: 'Gravity & Galactic Motion',
    index: '02',
    name: 'GALAXY',
    primaryQuestion: 'Why do spiral galaxy arms maintain their structure over cosmic time instead of winding up and dispersing?',
    learningObjective: 'Master the Lin-Shu density wave hypothesis, differential galactic rotation, and vertical stellar velocity dispersion.',
    governingPrinciple: 'Lin-Shu Density Wave Theory & Epicyclic Resonance',
    formula: '\\theta(r) = r^{0.74} k + \\phi_{\\text{arm}}, \\quad \\Omega_p = \\text{const}, \\quad \\kappa^2 = 4\\Omega^2 + 2r\\Omega \\frac{d\\Omega}{dr}',
    controlsSummary: 'Pattern Velocity (Ω_p), Wave Intensity (A), Vertical Drift (σ_z)',
    observablesSummary: 'Logarithmic spiral arm coherence, Core spheroidal bulge density, Galactic disk vertical scale height',
    progressiveExplanation: {
      level1: {
        title: 'Level 1: Intuition (The Traffic Jam Analogy)',
        content: 'If spiral arms were made of permanent chains of stars, differential rotation would wind them up tightly like a ribbon in just a few galactic orbits (the "winding problem"). Instead, spiral arms are moving gravitational traffic jams: individual stars orbit into the arm, slow down due to the concentrated gravitational pull, and eventually exit the other side.',
      },
      level2: {
        title: 'Level 2: Governing Equations',
        content: 'Spiral density wave logarithmic phase function:\n  θ(r) = k · r^0.74 + φ_arm\nPattern speed Ω_p is constant across all radii r, while individual stars orbit at angular frequency:\n  Ω(r) = v_c(r) / r\nStars pass through the density wave with relative velocity:\n  v_rel = r · |Ω(r) - Ω_p|',
      },
      level3: {
        title: 'Level 3: Mathematical Derivation',
        content: 'Linearizing the collisionless Boltzmann equation with Poisson’s equation for a self-gravitating disk yields the Lin-Shu dispersion relation:\n  (ω - m Ω)² = κ² - 2π G Σ |k| + k² c_s²\nwhere κ is the radial epicyclic frequency (κ² = 4Ω² + r dΩ²/dr), Σ is surface mass density, and c_s is stellar velocity dispersion. Stable spiral density wave packets can persist quasi-statically between the Inner Lindblad Resonance (Ω - κ/m = Ω_p) and Outer Lindblad Resonance (Ω + κ/m = Ω_p).',
      },
      level4: {
        title: 'Level 4: Advanced Astrophysical Constraints',
        content: 'To prevent axisymmetric gravitational collapse and swing-amplified fragmentation into clumps, the disk must satisfy Toomre’s stability criterion:\n  Q = (σ_r · κ) / (3.36 G Σ) > 1\nFurthermore, the flat outer rotation curves of spiral galaxies (v_c(r) ≈ const) require an extended, non-luminous dark matter halo with gravitational potential Φ_DM(r) ∝ ln(r).',
      },
    },
    parameterGuides: {
      rotationSpeed: {
        label: 'PATTERN VELOCITY',
        definition: 'Global angular pattern speed (Ω_p) of the spiral gravitational potential perturbation.',
        significance: 'Governs the corotation radius where stars travel at the exact same speed as the spiral wave.',
      },
      densityWave: {
        label: 'WAVE INTENSITY',
        definition: 'Amplitude of the gravitational potential perturbation along the 4 spiral arms.',
        significance: 'Controls interstellar gas compression, stellar density contrast, and star formation triggers.',
      },
      stellarDrift: {
        label: 'VERTICAL DRIFT',
        definition: 'Root-mean-square vertical velocity dispersion (σ_z) of disk stars perpendicular to the galactic plane.',
        significance: 'Determines the vertical scale height (thickness) and kinetic stability of the galactic disk.',
      },
    },
    missions: [
      {
        id: 'galaxy-mission-1',
        number: '01',
        title: 'Resolving the Winding Dilemma',
        question: 'What happens when wave intensity is boosted to 1.8× while keeping pattern velocity steady?',
        hypothesisPrompt: 'Predict how increased density wave amplitude affects galactic spiral structure:',
        predictions: [
          {
            id: 'opt-a',
            text: 'Stellar concentration in the spiral arms sharpens significantly, highlighting the 4-arm logarithmic structure.',
            isCorrect: true,
            rationale: 'Correct! Higher wave intensity deepens the gravitational potential wells along the arms, drawing stars closer together as they pass through the density wave crests.',
          },
          {
            id: 'opt-b',
            text: 'The galaxy immediately tears itself apart into isolated globular clusters.',
            isCorrect: false,
            rationale: 'The overall axisymmetric gravitational potential of the galactic bulge and disk continues to dominate total binding energy.',
          },
          {
            id: 'opt-c',
            text: 'Stars in the spiral arms reverse their orbital direction.',
            isCorrect: false,
            rationale: 'Density waves perturb stellar orbits, causing epicyclic motion, but do not reverse global angular momentum.',
          },
          {
            id: 'opt-d',
            text: 'All stars instantly plunge into the central supermassive black hole.',
            isCorrect: false,
            rationale: 'Stellar orbital angular momentum prevents radial collapse unless severe dissipative braking occurs.',
          },
        ],
        targetParams: { densityWave: 1.8 },
        baselineParams: { densityWave: 1.0 },
        paramKey: 'densityWave',
        condition: {
          metric: 'densityWave',
          comparator: '>=',
          target: 1.8,
          unit: '×',
        },
        observableText: 'Spiral arms become markedly denser and brighter; inter-arm gaps appear clearer.',
        measurement: {
          metric: 'Gravitational Potential Perturbation (A_wave)',
          baseline: '100% (Standard Disk)',
          calibrated: '180% (High Density Wave)',
          delta: '+80.0%',
          physicalMeaning: 'Arm-to-interarm stellar density contrast increased by 80%, demonstrating gravitational compression.',
        },
        conclusion: 'Verified that spiral arms act as persistent gravitational density waves rather than material arms subject to the winding catastrophe.',
      },
    ],
  },

  'black-hole': {
    experimentId: 'black-hole',
    theme: 'Extreme Gravity',
    index: '03',
    name: 'BLACK HOLE',
    primaryQuestion: 'How does intense spacetime curvature bend photon trajectories and alter the observed luminosity of relativistic accretion disks?',
    learningObjective: 'Understand gravitational light deflection (Einstein ring, photon sphere), differential Keplerian shear, and relativistic Doppler beaming.',
    governingPrinciple: 'General Relativity & Relativistic Doppler Beaming',
    formula: '\\hat{\\alpha} = \\frac{4GM}{c^2 b}, \\quad \\Omega(r) \\propto r^{-3/2}, \\quad I_{\\text{obs}} = I_0 \\cdot \\delta^{3 + \\alpha}, \\quad \\delta = [\\gamma(1 - \\beta \\cos\\theta)]^{-1}',
    controlsSummary: 'Accretion Velocity (v), Lensing Strength (θ_E), Disk Density (ρ), Emission Flux (F)',
    observablesSummary: 'Approaching vs receding disk brightness asymmetry, Background star Einstein rings, Photon ring shadow boundary',
    progressiveExplanation: {
      level1: {
        title: 'Level 1: Intuition (Extreme Spacetime Curvature)',
        content: 'A black hole is not a cosmic vacuum cleaner that pulls everything in; it is an object with such intense mass that spacetime itself curves steeply. Light rays passing nearby are bent into curves like lenses in eyeglasses. Furthermore, gas on the side of the accretion disk spinning toward you appears blindingly bright due to the headlight effect of relativity (Doppler beaming).',
      },
      level2: {
        title: 'Level 2: Governing Equations',
        content: 'Schwarzschild event horizon radius:\n  r_s = 2GM / c²\nPhoton sphere radius (where light can orbit in circles):\n  r_ph = 1.5 r_s = 3GM / c²\nInnermost Stable Circular Orbit (ISCO):\n  r_ISCO = 3 r_s = 6GM / c²\nRelativistic Doppler factor:\n  δ = 1 / [γ (1 - β cos θ_los)]\nwhere β = v/c and γ = 1/√(1 - β²). Observed intensity:\n  I_obs(ν) = δ³⁺α I_emit(ν/δ)',
      },
      level3: {
        title: 'Level 3: Mathematical Derivation',
        content: 'In the Schwarzschild metric ds² = -(1 - 2M/r) dt² + (1 - 2M/r)⁻¹ dr² + r² (dθ² + sin²θ dφ²), the photon geodesic equation in the equatorial plane (θ = π/2) with impact parameter b = L/E yields:\n  (dr/dλ)² = E² [1 - (b²/r²) (1 - 2M/r)]\nThe effective potential V_eff(r) = (b²/r²)(1 - 2M/r) has a maximum at r = 3M = r_ph where dV/dr = 0. Photons with impact parameter b < b_crit = 3√3 M plunge through the horizon; photons with b > b_crit deflect outward by angle:\n  Δφ = 2 ∫ (dr / [r² √(1/b² - (1 - 2M/r)/r²)]) - π ≈ 4GM / (c² b)',
      },
      level4: {
        title: 'Level 4: Advanced Astrophysical Constraints',
        content: 'For spinning Kerr black holes (spin parameter a* = J / cM ≤ 1), the event horizon contracts to r_+ = M + √(M² - a²), and the ISCO for prograde orbits contracts down to r_ISCO = M (for a* = 1), dramatically boosting radiative accretion efficiency from 5.7% up to 42.3% of rest mass energy via the Shakura-Sunyaev thin disk mechanism.',
      },
    },
    parameterGuides: {
      accretionVelocity: {
        label: 'ACCRETION VELOCITY',
        definition: 'Tangential orbital velocity of plasma particles orbiting the black hole near the ISCO boundary.',
        significance: 'Controls relativistic Doppler beaming asymmetry between the approaching and receding disk lobes.',
      },
      lensingStrength: {
        label: 'LENSING STRENGTH',
        definition: 'Gravitational light deflection coefficient (θ_E / b) bending background photon geodesics.',
        significance: 'Governs the magnification and distortion of background stars and secondary accretion images.',
      },
      diskDensity: {
        label: 'DISK DENSITY',
        definition: 'Optical depth and particle concentration of the plasma accretion disk.',
        significance: 'Determines whether the accretion disk is optically thick or transparent to radiation.',
      },
      emissionIntensity: {
        label: 'EMISSION FLUX',
        definition: 'Bolometric radiant energy flux emitted by viscously heated plasma filaments.',
        significance: 'Controls the luminosity of the primary disk and the distinct thin photon ring ringlet.',
      },
    },
    missions: [
      {
        id: 'black-hole-mission-1',
        number: '01',
        title: 'Relativistic Doppler Beaming Asymmetry',
        question: 'Why does one side of the accretion disk appear much brighter than the other, and what happens when accretion velocity is increased to 2.2×?',
        hypothesisPrompt: 'Predict the visual asymmetry under 2.2× accretion velocity:',
        predictions: [
          {
            id: 'opt-a',
            text: 'The approaching plasma disk side becomes dramatically more luminous due to relativistic Doppler boosting (I_obs ∝ δ⁴).',
            isCorrect: true,
            rationale: 'Correct! As plasma velocity approaches c, photons emitted in the direction of motion are beamed into a forward cone of angle ~1/γ and blueshifted, multiplying observed brightness by δ^(3+α).',
          },
          {
            id: 'opt-b',
            text: 'Both sides of the disk become completely identical in brightness because gravity is symmetric.',
            isCorrect: false,
            rationale: 'While the gravitational field is spherically symmetric, the plasma disk is in rapid rotation, breaking symmetry along the observer line of sight.',
          },
          {
            id: 'opt-c',
            text: 'The entire black hole disappears from view.',
            isCorrect: false,
            rationale: 'Relativistic velocity does not obscure the black hole; it intensifies emission from the approaching side.',
          },
          {
            id: 'opt-d',
            text: 'The receding side becomes brighter because it is being pushed away.',
            isCorrect: false,
            rationale: 'Photons from the receding side are redshifted and de-beamed, making it appear significantly dimmer than the approaching side.',
          },
        ],
        targetParams: { accretionVelocity: 2.2 },
        baselineParams: { accretionVelocity: 1.0 },
        paramKey: 'accretionVelocity',
        condition: {
          metric: 'accretionVelocity',
          comparator: '>=',
          target: 2.0,
          unit: '×',
        },
        observableText: 'Approaching disk arm blazes with intense blue-white radiance; receding arm dims noticeably into deep amber.',
        measurement: {
          metric: 'Relativistic Accretion Speed (β = v/c)',
          baseline: '1.0× (Sub-relativistic)',
          calibrated: '2.2× (High Lorentz Factor)',
          delta: '+120.0%',
          physicalMeaning: 'Doppler factor δ amplified approaching photon flux by ~5.8× relative to receding plasma.',
        },
        conclusion: 'Confirmed that relativistic motion breaks disk symmetry via Doppler boosting and gravitational aberration.',
      },
      {
        id: 'black-hole-mission-2',
        number: '02',
        title: 'Spacetime Curvature & Gravitational Deflection',
        question: 'How does setting lensing strength to 2.0× alter the appearance of background stars passing behind the black hole?',
        hypothesisPrompt: 'Predict the optical distortion under 2.0× gravitational lensing:',
        predictions: [
          {
            id: 'opt-a',
            text: 'Background stellar light is deflected into arcs and circular Einstein rings around the photon sphere silhouette.',
            isCorrect: true,
            rationale: 'Correct! Intense spacetime curvature bends null geodesics, focusing light rays that pass on either side of the singularity toward the observer.',
          },
          {
            id: 'opt-b',
            text: 'Background stars travel in perfectly straight lines unaffected by mass.',
            isCorrect: false,
            rationale: 'General Relativity demonstrates that mass curves spacetime; photons follow curved geodesics.',
          },
          {
            id: 'opt-c',
            text: 'Light rays are reflected backward like a mirror.',
            isCorrect: false,
            rationale: 'Gravity refracts light trajectories forward around the mass rather than creating specular reflection.',
          },
          {
            id: 'opt-d',
            text: 'The stars turn green due to thermal cooling.',
            isCorrect: false,
            rationale: 'Gravitational deflection changes trajectory and angular magnification, not chemical emission spectra.',
          },
        ],
        targetParams: { lensingStrength: 2.0 },
        baselineParams: { lensingStrength: 1.0 },
        paramKey: 'lensingStrength',
        condition: {
          metric: 'lensingStrength',
          comparator: '>=',
          target: 2.0,
          unit: '×',
        },
        observableText: 'Background stellar points warp into curved arcs and luminous circular Einstein rings around the central shadow.',
        measurement: {
          metric: 'Einstein Radius Deflection Angle (θ_E)',
          baseline: '1.0× (Standard Schwarzschild)',
          calibrated: '2.0× (Strong Deflection)',
          delta: '+100.0%',
          physicalMeaning: 'Effective gravitational deflection angle doubled, widening the background Einstein ring radius.',
        },
        conclusion: 'Demonstrated gravitational light bending in accordance with Einsteinian null geodesic equations.',
      },
    ],
  },

  fluid: {
    experimentId: 'fluid',
    theme: 'Pressure & Flow',
    index: '04',
    name: 'FLUID',
    primaryQuestion: 'How do incompressible advection, vorticity, and thermal buoyancy govern turbulent energy cascades and stellar feedback in interstellar clouds?',
    learningObjective: 'Understand divergence-free velocity fields (∇ · v = 0), Kolmogorov cascades, and Boussinesq thermal buoyancy.',
    governingPrinciple: 'Navier-Stokes Hydrodynamics & Incompressible Curl Noise',
    formula: '\\mathbf{v}(\\mathbf{x}) = \\nabla \\times \\mathbf{\\Psi}, \\quad \\nabla \\cdot \\mathbf{v} \\equiv 0, \\quad \\frac{D\\boldsymbol{\\omega}}{Dt} = (\\boldsymbol{\\omega} \\cdot \\nabla)\\mathbf{v} + \\nu \\nabla^2 \\boldsymbol{\\omega}',
    controlsSummary: 'Advection Velocity (v), Vortex Scale (λ), Shear Viscosity (μ), Thermal Buoyancy (α)',
    observablesSummary: 'Kolmogorov eddy scale, Laminar vs turbulent streamlines, Convective buoyant plume ascent',
    progressiveExplanation: {
      level1: {
        title: 'Level 1: Intuition (Swirling Cosmic Smoke)',
        content: 'Gas in deep space behaves like an incompressible fluid. When you stir water, you see big whirlpools break into smaller and smaller eddies until the energy finally disappears as heat. In the same way, stellar winds create giant turbulent eddies in interstellar gas clouds that cascade down into microscopic molecular mixing.',
      },
      level2: {
        title: 'Level 2: Governing Equations',
        content: 'Divergence-free curl-noise velocity field:\n  v = ∇ × Ψ  ⟹  ∇ · v = 0 (exact incompressibility)\nNavier-Stokes equation:\n  ρ (∂v/∂t + v · ∇v) = -∇p + μ ∇²v + f_buoyant\nBoussinesq buoyancy acceleration:\n  a_buoyant = α (T - T₀) ŷ',
      },
      level3: {
        title: 'Level 3: Mathematical Derivation',
        content: 'Taking the curl of the Navier-Stokes equation eliminates the pressure gradient term (since ∇ × ∇p = 0) to yield the vorticity transport equation:\n  ∂ω/∂t + (v · ∇)ω = (ω · ∇)v + ν ∇²ω\nwhere ω = ∇ × v. The vortex stretching term (ω · ∇)v transfers kinetic energy from large spatial wavelengths to smaller wavelengths along the Kolmogorov -5/3 energy spectrum:\n  E(k) = C_K ε^(2/3) k^(-5/3)\nuntil reaching the viscous Kolmogorov dissipation microscale η = (ν³ / ε)^(1/4).',
      },
      level4: {
        title: 'Level 4: Advanced Astrophysical Constraints',
        content: 'In interstellar giant molecular clouds (GMCs), turbulence is supersonic with root-mean-square Mach numbers M = v_rms / c_s ~ 5 to 20. Supersonic isothermal shocks create log-normal gas density distributions P(s) = (1/√(2π σ²)) exp(-(s - s₀)² / 2σ²). High-density shock intersections exceed the local Jeans mass M_J ∝ T^(3/2) ρ^(-1/2), triggering gravitational collapse into protostellar cores.',
      },
    },
    parameterGuides: {
      flowVelocity: {
        label: 'ADVECTION VELOCITY',
        definition: 'Mean kinetic transport speed of fluid parcels traveling along divergence-free streamlines.',
        significance: 'Sets the macroscopic Reynolds number and kinetic energy flux through the nebula.',
      },
      vorticityScale: {
        label: 'VORTEX SCALE',
        definition: 'Spatial wavelength of turbulent Kelvin-Helmholtz shear instabilities and rotational eddies.',
        significance: 'Governs whether flow structures appear as broad coherent loops or fine swirling filaments.',
      },
      viscosity: {
        label: 'SHEAR VISCOSITY',
        definition: 'Kinematic resistance (ν = μ/ρ) to internal shear deformation and kinetic energy dissipation.',
        significance: 'Damps small-scale turbulence, smoothing eddies into calm, laminar flow streamlines.',
      },
      thermalBuoyancy: {
        label: 'THERMAL BUOYANCY',
        definition: 'Boussinesq vertical convective acceleration driven by stellar radiation heating.',
        significance: 'Causes hot, low-density gas parcels to rise vertically against ambient hydrostatic pressure.',
      },
    },
    missions: [
      {
        id: 'fluid-mission-1',
        number: '01',
        title: 'Viscous Dissipation & Eddy Cascade',
        question: 'What happens to turbulent eddies when shear viscosity is increased from 1.0× to 2.2×?',
        hypothesisPrompt: 'Formulate a hypothesis on how 2.2× viscosity affects turbulent vortices:',
        predictions: [
          {
            id: 'opt-a',
            text: 'Fine turbulent eddies are rapidly damped, smoothing chaotic filaments into coherent laminar streamlines.',
            isCorrect: true,
            rationale: 'Correct! Viscosity represents molecular friction. Higher viscosity dissipates kinetic energy (ν ∇²v), suppressing small-scale Kelvin-Helmholtz instabilities and increasing the dissipation scale.',
          },
          {
            id: 'opt-b',
            text: 'Turbulence intensifies and creates millions of violent shockwaves.',
            isCorrect: false,
            rationale: 'Higher viscosity suppresses turbulence; lower viscosity (higher Reynolds number) is what causes chaotic flow.',
          },
          {
            id: 'opt-c',
            text: 'Fluid parcels stop moving entirely and freeze into solid cubes.',
            isCorrect: false,
            rationale: 'Viscosity resists shear deformation, not global motion; advection continues smoothly.',
          },
          {
            id: 'opt-d',
            text: 'The fluid starts flowing backward against the velocity field.',
            isCorrect: false,
            rationale: 'Viscous drag dissipates kinetic energy into heat rather than reversing the sign of velocity.',
          },
        ],
        targetParams: { viscosity: 2.2 },
        baselineParams: { viscosity: 1.0 },
        paramKey: 'viscosity',
        condition: {
          metric: 'viscosity',
          comparator: '>=',
          target: 2.0,
          unit: '×',
        },
        observableText: 'Swirling micro-vortices dissolve; flow transitions from turbulent foam into smooth, sweeping laminar sheets.',
        measurement: {
          metric: 'Kinematic Shear Viscosity (ν)',
          baseline: '100% (Turbulent Regime)',
          calibrated: '220% (Laminar Regime)',
          delta: '+120.0%',
          physicalMeaning: 'Reynolds number decreased by 54%, suppressing high-frequency Kolmogorov turbulent cascade.',
        },
        conclusion: 'Demonstrated that viscous dissipation suppresses small-scale shear eddies in conformance with the Navier-Stokes diffusion term.',
      },
    ],
  },

  pulsar: {
    experimentId: 'pulsar',
    theme: 'Rotation & Periodic Signals',
    index: '05',
    name: 'PULSAR',
    primaryQuestion: 'How does an oblique rotating magnetic dipole generate periodic relativistic beam pulses across cosmic distances?',
    learningObjective: 'Master magnetic dipole radiation, relativistic synchrotron light cones, and the cosmic lighthouse geometry.',
    governingPrinciple: 'Relativistic Electrodynamics & Oblique Magnetic Dipole',
    formula: '\\dot{E} = \\frac{B^2 R^6 \\Omega^4}{6 c^3}, \\quad R_{\\text{LC}} = \\frac{c}{\\Omega}, \\quad \\Delta\\theta \\approx \\frac{1}{\\gamma}',
    controlsSummary: 'Spin Frequency (Ω), Magnetic Flux (B), Beam Collimation, Plasma Density (ρ)',
    observablesSummary: 'Pulse repetition frequency, Synchrotron polar beam sweep, Co-rotating magnetosphere light cylinder radius',
    progressiveExplanation: {
      level1: {
        title: 'Level 1: Intuition (The Cosmic Lighthouse)',
        content: 'A pulsar is a city-sized neutron star with the mass of the Sun, spinning hundreds of times every second. Its magnetic poles shoot out intense beams of light. Because the magnetic axis is tilted relative to the spin axis, these beams sweep through space like a lighthouse. Whenever the beam sweeps past Earth, our telescopes detect a sharp, regular pulse.',
      },
      level2: {
        title: 'Level 2: Governing Equations',
        content: 'Time-dependent magnetic dipole vector:\n  M(t) = M₀ [sin α cos(Ωt) x̂ + cos α ŷ + sin α sin(Ωt) ẑ]\nDipole radiated power (spin-down luminosity):\n  L = (B² R⁶ Ω⁴) / (6 c³)\nLight cylinder radius where co-rotation speed reaches c:\n  R_LC = c / Ω\nSynchrotron beaming half-angle:\n  θ_beam ≈ 1 / γ',
      },
      level3: {
        title: 'Level 3: Mathematical Derivation',
        content: 'In the co-rotating frame, the unipolar induction electric field is E = -(Ω × r) × B / c. The Goldreich-Julian charge density required to screen the parallel electric field is:\n  ρ_GJ = - (Ω · B) / (2π c)\nAt radii r > R_LC = c/Ω, magnetic field lines cannot co-rotate faster than light and must break open. Relativistic positrons and electrons accelerate along these open field lines, emitting curvature and synchrotron radiation collimated into tight cones of aperture Δθ ~ 1/γ.',
      },
      level4: {
        title: 'Level 4: Advanced Astrophysical Constraints',
        content: 'In extreme magnetic fields approaching the Schwinger quantum critical limit (B_QED = m_e² c³ / (e ħ) ≈ 4.414 × 10¹³ Gauss), magnetic photon splitting (γ → γ + γ) and single-photon pair production (γ + B → e⁻ + e⁺ + B) quench traditional radio emissions, producing the magnetar anomaly and super-luminous soft gamma-ray repeater (SGR) flares.',
      },
    },
    parameterGuides: {
      spinVelocity: {
        label: 'SPIN FREQUENCY',
        definition: 'Angular rotational frequency (Ω) of the neutron star around its geographical axis.',
        significance: 'Governs the pulse period P = 2π/Ω and the physical size of the light cylinder R_LC = c/Ω.',
      },
      magneticFlux: {
        label: 'MAGNETIC FLUX',
        definition: 'Magnetic surface field strength (B) of the inclined magnetic dipole.',
        significance: 'Powers synchrotron radiation luminosity and relativistic particle acceleration.',
      },
      beamCollimation: {
        label: 'BEAM COLLIMATION',
        definition: 'Lorentz factor focusing sharpness (1/γ) of polar synchrotron emissions.',
        significance: 'Dictates the narrowness of the observable radio/gamma-ray pulse profile.',
      },
      plasmaDensity: {
        label: 'PLASMA DENSITY',
        definition: 'Co-rotating magnetospheric Goldreich-Julian charge density in the polar cap accelerator gap.',
        significance: 'Controls optical emission intensity from secondary e⁺/e⁻ cascade plasma.',
      },
    },
    missions: [
      {
        id: 'pulsar-mission-1',
        number: '01',
        title: 'The Cosmic Lighthouse Geometry',
        question: 'What happens when spin frequency is increased to 2.5× while observing the polar synchrotron beams?',
        hypothesisPrompt: 'Predict how 2.5× spin frequency alters the lighthouse pulse signal:',
        predictions: [
          {
            id: 'opt-a',
            text: 'Pulse frequency increases by 2.5×, and the light cylinder contracts inward because R_LC = c / Ω.',
            isCorrect: true,
            rationale: 'Correct! Rotational period P scales as 1/Ω. As spin increases, the co-rotation radius where v = c shrinks inward (R_LC = c/Ω), driving faster periodic sweeps.',
          },
          {
            id: 'opt-b',
            text: 'The pulsar stops spinning because magnetic fields brake the star instantaneously.',
            isCorrect: false,
            rationale: 'Magnetic dipole braking occurs gradually over millions of years (spin-down timescale τ = P / 2Ṗ), not in seconds.',
          },
          {
            id: 'opt-c',
            text: 'The beams curve into circles and loop back into the core.',
            isCorrect: false,
            rationale: 'Relativistic particles along open field lines escape beyond the light cylinder, radiating collimated synchrotron photons outward.',
          },
          {
            id: 'opt-d',
            text: 'The pulsar expands to the size of a red giant star.',
            isCorrect: false,
            rationale: 'Degenerate neutron matter is held rigid by nuclear forces; faster rotation slightly flattens the star but does not trigger thermal expansion.',
          },
        ],
        targetParams: { spinVelocity: 2.5 },
        baselineParams: { spinVelocity: 1.0 },
        paramKey: 'spinVelocity',
        condition: {
          metric: 'spinVelocity',
          comparator: '>=',
          target: 2.5,
          unit: '×',
        },
        observableText: 'Synchrotron beams whip rapidly across the celestial sphere; periodic pulse flash rate accelerates noticeably.',
        measurement: {
          metric: 'Rotational Frequency (Ω)',
          baseline: '1.0× (Standard Pulsar)',
          calibrated: '2.5× (Millisecond Regime)',
          delta: '+150.0%',
          physicalMeaning: 'Light cylinder radius contracted to 40% of baseline; pulse repetition rate multiplied by 2.5×.',
        },
        conclusion: 'Demonstrated the periodic lighthouse effect and the inverse dependence of the co-rotation light cylinder on spin frequency.',
      },
    ],
  },

  'solar-system': {
    experimentId: 'solar-system',
    theme: 'Orbital Mechanics',
    index: '06',
    name: 'SOLAR SYSTEM',
    primaryQuestion: 'How do Newtonian gravity and conservation of angular momentum govern planetary orbits, orbital speeds, and escape trajectories?',
    learningObjective: 'Master Kepler\'s three laws, the inverse-square law, orbital energy conservation (vis-viva), and parabolic escape velocity.',
    governingPrinciple: 'Newtonian Celestial Mechanics & Conservation of Angular Momentum',
    formula: 'F = G \\frac{M m}{r^2}, \\quad v_{\\text{orb}} = \\sqrt{\\frac{GM}{r}}, \\quad v_e = \\sqrt{2} v_{\\text{orb}}, \\quad \\frac{T^2}{a^3} = \\frac{4\\pi^2}{GM}',
    controlsSummary: 'Simulation Speed (dt), Gravity Strength (G), Orbit Scale (a), Velocity Vectors',
    observablesSummary: 'Orbital period T, Trajectory eccentricity e, Bound ellipse vs hyperbolic escape, Planetary velocity v(r)',
    progressiveExplanation: {
      level1: {
        title: 'Level 1: Intuition (Falling Around the Sun)',
        content: 'Why does the Earth not plunge straight into the Sun? Because it is moving sideways extremely fast! In every second, gravity pulls Earth toward the Sun, but Earth’s sideways velocity carries it forward just enough that the planet falls "around" the Sun’s curve instead of into it. This perfect balance between sideways momentum and gravity creates a stable orbit.',
      },
      level2: {
        title: 'Level 2: Governing Equations',
        content: 'Newton\'s Law of Universal Gravitation:\n  F = G · (M☉ m) / r²\nCircular orbital speed condition (centripetal balance):\n  m v² / r = G M☉ m / r²  ⟹  v_orb = √(GM☉ / r)\nEscape velocity threshold (zero total energy boundary):\n  v_e = √(2 GM☉ / r) = √2 · v_orb ≈ 1.414 v_orb\nKepler\'s harmonic ratio:\n  T² / a³ = 4π² / (G M☉) = constant',
      },
      level3: {
        title: 'Level 3: Mathematical Derivation',
        content: 'Conservation of specific energy ε = ½ v² - μ/r and angular momentum h = r × v in polar coordinates (r, θ) gives the Binet orbital differential equation:\n  d²u/dθ² + u = μ / h²  (where u = 1/r)\nThe general solution is the conic section equation:\n  r(θ) = p / (1 + e cos θ)\nwhere semi-latus rectum p = h²/μ and eccentricity e = √(1 + 2ε h² / μ²):\n  • e = 0: Circular orbit (ε = -μ/2a < 0)\n  • 0 < e < 1: Elliptical Keplerian orbit\n  • e = 1: Parabolic escape trajectory (ε = 0, v = v_e)\n  • e > 1: Hyperbolic unbound flyby (ε > 0).',
      },
      level4: {
        title: 'Level 4: Advanced Astrophysical Constraints',
        content: 'In general relativity, the gravitational potential acquires a 1/r³ correction: Φ_GR(r) = -GM/r - G M L² / (c² r³). This produces relativistic perihelion precession: Δφ = (6π GM) / (c² a (1 - e²)) radians per orbit (accounting for Mercury’s 43 arcseconds/century anomaly). Furthermore, in multi-planet systems, non-integrable N-body secular resonances drive Kozai-Lidov oscillations between orbital inclination and eccentricity.',
      },
    },
    parameterGuides: {
      simulationSpeed: {
        label: 'SIMULATION SPEED',
        definition: 'Numerical time-step delta (dt) multiplier for the Velocity Verlet symplectic integrator.',
        significance: 'Accelerates planetary orbital progression to observe multi-year orbital harmonics in seconds.',
      },
      gravityStrength: {
        label: 'GRAVITY STRENGTH',
        definition: 'Universal gravitational coupling constant scaling factor (G / G₀).',
        significance: 'Controls gravitational attraction magnitude, orbital velocities, and trajectory binding.',
      },
      orbitScale: {
        label: 'ORBIT SCALE',
        definition: 'Radial semi-major axis distance multiplier between planetary bodies and the Sun.',
        significance: 'Alters orbital distances, demonstrating the inverse-square gravitational force decay.',
      },
      trailLength: {
        label: 'TRAIL LENGTH',
        definition: 'Orbital motion history ring buffer retention length.',
        significance: 'Visualizes the geometric shape (eccentricity and closed ellipses) of orbital paths.',
      },
    },
    missions: [
      {
        id: 'solar-mission-1',
        number: '01',
        title: 'Inverse-Square Gravitational Decay',
        question: 'What happens to the gravitational force on Earth if its orbital distance is doubled to 2.0× AU?',
        hypothesisPrompt: 'Predict the gravitational force ratio at 2.0× distance (r = 2.0 AU):',
        predictions: [
          {
            id: 'opt-a',
            text: 'Gravitational attraction drops to 25% of baseline (0.25 F₀) because force decays with 1/r².',
            isCorrect: true,
            rationale: 'Correct! By Newton\'s Inverse-Square Law (F ∝ 1/r²), doubling the distance spreads the gravitational field over 4× the surface area, reducing pull to exactly (1/2)² = 0.25 F₀.',
          },
          {
            id: 'opt-b',
            text: 'Gravitational attraction drops to 50% because distance is doubled.',
            isCorrect: false,
            rationale: 'Force does not scale linearly with 1/r. Because gravity radiates across a 3D sphere (Area = 4πr²), it decays with 1/r².',
          },
          {
            id: 'opt-c',
            text: 'Gravitational attraction remains completely unchanged.',
            isCorrect: false,
            rationale: 'Gravitational force is strictly dependent on distance (F = G M m / r²); moving farther away weakens attraction.',
          },
          {
            id: 'opt-d',
            text: 'Gravitational force increases by 400% due to centrifugal resistance.',
            isCorrect: false,
            rationale: 'Distance always reduces gravitational attraction. Centrifugal force is a kinematic effect of rotation, not an increase in gravity.',
          },
        ],
        targetParams: { orbitScale: 2.0 },
        baselineParams: { orbitScale: 1.0 },
        paramKey: 'orbitScale',
        condition: {
          metric: 'orbitScale',
          comparator: '>=',
          target: 2.0,
          unit: '×',
        },
        observableText: 'Planetary orbit dilates outward to 2.0× radius; orbital period lengthens significantly.',
        measurement: {
          metric: 'Gravitational Force Ratio (F / F₀)',
          baseline: '1.00 F₀ (1.0 AU Baseline)',
          calibrated: '0.25 F₀ (2.0 AU Orbit)',
          delta: '-75.0%',
          physicalMeaning: 'Gravitational attraction dropped by 75%, confirming the inverse-square law F ∝ 1/r².',
        },
        conclusion: 'Empirically validated Newton’s Inverse-Square Law of Gravitation (F ∝ 1/r²).',
      },
      {
        id: 'solar-mission-2',
        number: '02',
        title: 'Circular Velocity Equilibrium',
        question: 'What happens to an orbiting planet if its orbital velocity is reduced to 0.50× of circular speed?',
        hypothesisPrompt: 'Predict the planetary trajectory if tangential velocity falls to 0.50 v₀:',
        predictions: [
          {
            id: 'opt-a',
            text: 'Centripetal acceleration v²/r is insufficient to counteract gravity; the planet falls sunward into an inward decay trajectory.',
            isCorrect: true,
            rationale: 'Correct! Circular orbit requires exact balance: v_circ = √(GM/r). If speed drops below this, gravity overwhelms inertia and pulls the body inward toward perihelion.',
          },
          {
            id: 'opt-b',
            text: 'The planet instantly flies away into deep interstellar space.',
            isCorrect: false,
            rationale: 'Flying away requires excess kinetic energy (v ≥ v_escape = √2 v_circ), not a reduction in speed.',
          },
          {
            id: 'opt-c',
            text: 'The planet stays in the exact same circular orbit without changing position.',
            isCorrect: false,
            rationale: 'Without adequate velocity, the planet cannot maintain its radial distance against solar gravity.',
          },
          {
            id: 'opt-d',
            text: 'The planet instantly turns into a gas giant.',
            isCorrect: false,
            rationale: 'Kinematic orbital changes alter trajectory geometry, not planetary elemental composition.',
          },
        ],
        targetParams: { gravityStrength: 1.5 },
        baselineParams: { gravityStrength: 1.0 },
        paramKey: 'gravityStrength',
        condition: {
          metric: 'gravityStrength',
          comparator: '>=',
          target: 1.5,
          unit: '×',
        },
        observableText: 'Gravitational vectors intensify; orbits contract inward toward the Sun.',
        measurement: {
          metric: 'Gravitational Coupling (G / G₀)',
          baseline: '1.00× (Solar Reference)',
          calibrated: '1.50× (Enhanced Gravity)',
          delta: '+50.0%',
          physicalMeaning: 'Enhanced gravitational well requires higher orbital velocity to sustain stable circular balance.',
        },
        conclusion: 'Demonstrated the requirement of Keplerian circular velocity equilibrium (v_orb = √(GM/r)).',
      },
    ],
  },
}
