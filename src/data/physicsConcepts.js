/**
 * Reusable Centralized Physics Concepts Knowledge Base
 * Phase 54: Beginner-Friendly Conceptual Foundation
 *
 * Each concept provides:
 * - title: Clear question or title
 * - simpleExplanation: Intuitive, jargon-free summary
 * - everydayExample: Real-world, grounded observation
 * - analogy: Memorable physical intuition
 * - formula: Optional mathematical law
 * - variables: Symbol definitions with SI units
 * - coreUnderstanding: Synthesized physical takeaway
 * - relatedExperiment: Linked 3D laboratory experiment
 * - linkedExperimentId: Corresponding empirical investigation ID
 */

export const PHYSICS_CONCEPTS = [
  {
    id: 'concept-gravity',
    title: 'What is gravity?',
    curriculum: 'Class 11 Physics, Chapter 8: Gravitation — Universal Attraction',
    experimentId: 'solar-system',
    experimentName: '06 / SOLAR SYSTEM',
    simpleExplanation:
      'Gravity is an invisible force of attraction that pulls objects with mass toward each other. In simple terms: Earth pulls objects toward its center, which is why objects fall toward the ground and why we stay firmly on the surface.',
    everydayExample:
      'If you drop an apple, Earth pulls the apple downward. The apple also pulls upward on the Earth, but because Earth is so massive, its movement is completely imperceptible.',
    analogy:
      'Imagine placing a heavy bowling ball onto a soft mattress or trampoline: it creates a dip in the fabric, causing any smaller marbles rolled nearby to curve toward it.',
    formula: 'F = G · (M · m) / r²',
    variables: [
      { sym: 'F', desc: 'Gravitational force (Newtons, N)' },
      { sym: 'G', desc: 'Gravitational constant (6.674 × 10⁻¹¹ N·m²/kg²)' },
      { sym: 'M, m', desc: 'Masses of the two interacting objects (kg)' },
      { sym: 'r', desc: 'Distance between their centers of mass (m)' },
    ],
    coreUnderstanding:
      'More mass generally means stronger gravitational attraction, while greater distance weakens the force according to the inverse-square law.',
    linkedExperimentId: 'exp-distance',
    keywords: ['gravity', 'what is gravity', 'fall', 'attract', 'pull', 'mass', 'newton'],
  },
  {
    id: 'concept-mass',
    title: 'What is mass?',
    curriculum: 'Class 9/11 Physics, Mechanics — Inertia & Matter Invariance',
    experimentId: 'planet',
    experimentName: '01 / PLANET',
    simpleExplanation:
      'Mass is the fundamental quantity of matter inside an object. It also measures inertia—an object’s natural resistance to speeding up, slowing down, or changing direction.',
    everydayExample:
      'A 50 kg boulder contains 50 kg of rock whether you weigh it on Earth, transport it to the Moon, or float it weightless inside the International Space Station.',
    analogy:
      'Think of counting all the individual atoms sealed inside a sturdy box: traveling to a different planet never changes the number of atoms inside the box.',
    formula: 'm = F / a',
    variables: [
      { sym: 'm', desc: 'Invariant mass (kilograms, kg)' },
      { sym: 'F', desc: 'Net force applied (Newtons, N)' },
      { sym: 'a', desc: 'Resulting acceleration (m/s²)' },
    ],
    coreUnderstanding:
      'Mass is an invariant intrinsic property of matter that never changes from place to place across the cosmos.',
    linkedExperimentId: 'exp-planet-mass',
    keywords: ['mass', 'what is mass', 'matter', 'inertia', 'invariant', 'kg'],
  },
  {
    id: 'concept-weight',
    title: 'What is weight?',
    curriculum: 'Class 9/11 Physics, Mechanics — Gravitational Contact Force',
    experimentId: 'planet',
    experimentName: '01 / PLANET',
    simpleExplanation:
      'Weight is the downward gravitational pull exerted on an object’s mass by a nearby celestial body (like Earth or the Moon).',
    everydayExample:
      'A person with a mass of 50 kg weighs about 490 N on Earth, but would register roughly 1,240 N on massive Jupiter because Jupiter pulls downward 2.5× harder.',
    analogy:
      'Mass is the backpack you carry; weight is how hard the planet beneath your feet pulls that backpack downward toward the floor.',
    formula: 'W = m · g',
    variables: [
      { sym: 'W', desc: 'Weight force (Newtons, N)' },
      { sym: 'm', desc: 'Mass (kg)' },
      { sym: 'g', desc: 'Local surface gravitational acceleration (Earth = 9.81 m/s², Moon = 1.62 m/s²)' },
    ],
    coreUnderstanding:
      'Weight is not fixed; it is a localized gravitational interaction force that changes depending on which planet or moon you are standing upon.',
    linkedExperimentId: 'exp-planet-mass',
    keywords: ['weight', 'what is weight', 'newtons', 'scale', 'gravity', 'jupiter'],
  },
  {
    id: 'concept-force',
    title: 'What is force?',
    curriculum: 'Class 9/11 Physics, Mechanics — Newton’s Laws of Motion',
    experimentId: 'solar-system',
    experimentName: '06 / SOLAR SYSTEM',
    simpleExplanation:
      'A force is any push or pull acting upon an object resulting from its interaction with another object.',
    everydayExample:
      'Kicking a soccer ball pushes it into motion across the grass; friction and air drag act as opposing forces that gradually slow it down.',
    analogy:
      'An invisible hand pushing a shopping cart forward or pulling back on a leash.',
    formula: 'F = m · a',
    variables: [
      { sym: 'F', desc: 'Net force (Newtons, N)' },
      { sym: 'm', desc: 'Object mass (kg)' },
      { sym: 'a', desc: 'Acceleration produced (m/s²)' },
    ],
    coreUnderstanding:
      'Forces do not merely keep objects moving; unbalanced net forces cause objects to accelerate, decelerate, or change trajectory.',
    linkedExperimentId: 'exp-distance',
    keywords: ['force', 'what is force', 'push', 'pull', 'newton', 'motion'],
  },
  {
    id: 'concept-acceleration',
    title: 'What is acceleration?',
    curriculum: 'Class 9/11 Physics, Kinematics — Rate of Velocity Change',
    experimentId: 'solar-system',
    experimentName: '06 / SOLAR SYSTEM',
    simpleExplanation:
      'Acceleration is the rate at which an object changes its velocity over time—whether speeding up, slowing down (braking), or turning around a bend.',
    everydayExample:
      'Pressing down on a car’s accelerator pedal pushes you back into your seat as your speed climbs from 0 to 60 km/h.',
    analogy:
      'Watching the needle on a speedometer sweep upward, or feeling yourself tilt sideways as a train curves around a bend at constant speed.',
    formula: 'a = Δv / Δt',
    variables: [
      { sym: 'a', desc: 'Acceleration (m/s²)' },
      { sym: 'Δv', desc: 'Change in velocity (m/s)' },
      { sym: 'Δt', desc: 'Elapsed time interval (seconds, s)' },
    ],
    coreUnderstanding:
      'Any change in speed or travel direction is an acceleration and always requires an applied net force.',
    linkedExperimentId: 'exp-slow-down',
    keywords: ['acceleration', 'speed up', 'turn', 'velocity change', 'kinematics'],
  },
  {
    id: 'concept-velocity',
    title: 'What is velocity?',
    curriculum: 'Class 9/11 Physics, Kinematics — Speed with Direction',
    experimentId: 'solar-system',
    experimentName: '06 / SOLAR SYSTEM',
    simpleExplanation:
      'Velocity is an object’s speed combined with its direction of motion. Speed only tells you how fast you are moving; velocity tells you where you are heading.',
    everydayExample:
      'A passenger jet cruising at 900 km/h heading due North has a different velocity than a jet traveling 900 km/h heading due South.',
    analogy:
      'A speedometer gives you speed; a speedometer paired with a compass gives you velocity.',
    formula: 'v = Δx / Δt',
    variables: [
      { sym: 'v', desc: 'Velocity vector (m/s)' },
      { sym: 'Δx', desc: 'Displacement vector (m)' },
      { sym: 'Δt', desc: 'Time taken (s)' },
    ],
    coreUnderstanding:
      'Because velocity includes direction, an object traveling in a circle at constant speed is constantly changing its velocity and therefore accelerating.',
    linkedExperimentId: 'exp-escape',
    keywords: ['velocity', 'speed', 'direction', 'vector', 'kinematics'],
  },
  {
    id: 'concept-distance',
    title: 'What is distance and how does it affect gravity?',
    curriculum: 'Class 11 Physics, Chapter 8: Gravitation — Inverse-Square Law',
    experimentId: 'solar-system',
    experimentName: '06 / SOLAR SYSTEM',
    simpleExplanation:
      'Distance is the physical separation between two objects. In gravity, distance has a dramatic exponential weakening effect: doubling distance slashes gravity to one-fourth.',
    everydayExample:
      'Stand twice as far from a campfire: the radiated warmth you feel drops to one-fourth (25%) because the heat spreads out over a spherical area.',
    analogy:
      'Spray paint exiting a nozzle: holding the can twice as far from the paper spreads the paint across 4× the surface area, leaving a layer only 25% as thick.',
    formula: 'F ∝ 1 / r²',
    variables: [
      { sym: 'F', desc: 'Gravitational force' },
      { sym: 'r', desc: 'Separation distance between centers of mass' },
    ],
    coreUnderstanding:
      'The Inverse-Square Law means that small increases in distance cause steep drops in gravitational attraction.',
    linkedExperimentId: 'exp-distance',
    keywords: ['distance', 'separation', 'inverse square', 'decay', 'radius'],
  },
  {
    id: 'concept-orbit',
    title: 'What is an orbit?',
    curriculum: 'Class 11 Physics, Chapter 8: Gravitation — Satellite Motion & Perpetual Freefall',
    experimentId: 'solar-system',
    experimentName: '06 / SOLAR SYSTEM',
    simpleExplanation:
      'An orbit is a curved path an object takes around a central body due to gravity. The orbiting object is actually in continuous freefall, but moves sideways so fast that it curves around the planet without ever hitting.',
    everydayExample:
      'The International Space Station circles Earth once every 90 minutes. Astronauts float not because there is no gravity, but because they and the station are falling together around Earth.',
    analogy:
      'Newton’s Mountain Cannon: shoot a cannonball horizontally. Shoot it fast enough (7.9 km/s for low Earth orbit), and the ground curves downward beneath it at the exact same rate it falls.',
    formula: 'v_orb = √(G · M / r)',
    variables: [
      { sym: 'v_orb', desc: 'Circular orbital velocity (m/s)' },
      { sym: 'M', desc: 'Mass of the central body (kg)' },
      { sym: 'r', desc: 'Orbital radius (m)' },
    ],
    coreUnderstanding:
      'An orbit is not zero gravity; it is perpetual freefall perfectly balanced by sideways tangential momentum.',
    linkedExperimentId: 'exp-slow-down',
    keywords: ['orbit', 'what is an orbit', 'satellite', 'freefall', 'balance', 'circle'],
  },
  {
    id: 'concept-pressure',
    title: 'What is pressure?',
    curriculum: 'Fluid Dynamics & Thermodynamics — Force Distribution',
    experimentId: 'fluid',
    experimentName: '04 / FLUID',
    simpleExplanation:
      'Pressure is the amount of force distributed across a given surface area.',
    everydayExample:
      'Wearing wide snowshoes prevents you from sinking into powdery snow by spreading your body weight over a large surface area.',
    analogy:
      'Pressing a sharp needle against an inflated balloon pops it easily because all your force is concentrated on a microscopic tip, creating intense local pressure.',
    formula: 'P = F / A',
    variables: [
      { sym: 'P', desc: 'Pressure (Pascals, Pa = N/m²)' },
      { sym: 'F', desc: 'Applied perpendicular force (N)' },
      { sym: 'A', desc: 'Contact surface area (m²)' },
    ],
    coreUnderstanding:
      'Concentrating a force onto a smaller surface area multiplies the pressure, while distributing it over a larger area reduces the pressure.',
    linkedExperimentId: 'exp-fluid-viscosity',
    keywords: ['pressure', 'what is pressure', 'pascals', 'area', 'fluid'],
  },
  {
    id: 'concept-fluid-flow',
    title: 'What is fluid flow and viscosity?',
    curriculum: 'Fluid Dynamics — Incompressible Navier-Stokes & Reynolds Number',
    experimentId: 'fluid',
    experimentName: '04 / FLUID',
    simpleExplanation:
      'Fluid flow describes the continuous motion of liquids or gases under applied forces. Viscosity is the fluid’s internal friction that resists sliding and resists deformation.',
    everydayExample:
      'Water splashes and swirls into chaotic eddies easily (low viscosity), whereas cold honey flows smoothly in orderly sheets and resists swirling (high viscosity).',
    analogy:
      'Shuffling a smooth plastic deck of cards (low viscosity cards slide freely) versus trying to slide cards coated in sticky syrup (high viscosity resists sliding).',
    formula: 'Re = (ρ · v · L) / μ',
    variables: [
      { sym: 'Re', desc: 'Reynolds number (flow turbulence indicator)' },
      { sym: 'ρ', desc: 'Fluid density (kg/m³)' },
      { sym: 'v', desc: 'Flow velocity (m/s)' },
      { sym: 'μ', desc: 'Dynamic viscosity (Pa·s)' },
    ],
    coreUnderstanding:
      'Fluid motion is a competition between inertial momentum (driving chaotic swirling eddies) and viscous friction (smoothing flow into laminar streamlines).',
    linkedExperimentId: 'exp-fluid-viscosity',
    keywords: ['fluid flow', 'fluid', 'viscosity', 'turbulence', 'reynolds', 'honey'],
  },
  {
    id: 'concept-density',
    title: 'What is density?',
    curriculum: 'Class 9/11 Physics — Compactness of Matter',
    experimentId: 'planet',
    experimentName: '01 / PLANET',
    simpleExplanation:
      'Density measures how much mass is packed inside a specific amount of volume (space).',
    everydayExample:
      'A solid iron cannonball sinks instantly in water, while an enormous wooden ship floats because wood has a lower average density than water.',
    analogy:
      'A crowded subway train packed shoulder-to-shoulder with passengers has high density; an empty subway car with two passengers has low density.',
    formula: 'ρ = m / V',
    variables: [
      { sym: 'ρ', desc: 'Density (kg/m³)' },
      { sym: 'm', desc: 'Total mass (kg)' },
      { sym: 'V', desc: 'Total volume occupied (m³)' },
    ],
    coreUnderstanding:
      'Objects with higher density than the surrounding fluid sink; objects with lower density rise or float.',
    linkedExperimentId: 'exp-planet-mass',
    keywords: ['density', 'what is density', 'volume', 'mass', 'float', 'sink'],
  },
  {
    id: 'concept-rotation',
    title: 'What is rotation?',
    curriculum: 'Rotational Mechanics — Spin Around an Internal Axis',
    experimentId: 'planet',
    experimentName: '01 / PLANET',
    simpleExplanation:
      'Rotation is the circular spinning motion of an object around an internal central axis that passes through its own body.',
    everydayExample:
      'Earth spinning on its axis once every 24 hours creates day (facing the Sun) and night (facing away from the Sun).',
    analogy:
      'A spinning basketball balanced on the tip of a player’s finger, or a spinning figure skater executing a pirouette.',
    formula: 'ω = 2π / T',
    variables: [
      { sym: 'ω', desc: 'Angular rotational velocity (rad/s)' },
      { sym: 'T', desc: 'Rotation period (time for one full 360° spin, s)' },
    ],
    coreUnderstanding:
      'Rotation causes day-night cycles and produces outward centrifugal effects that make spinning planets bulge slightly at their equators.',
    linkedExperimentId: 'exp-planet-mass',
    keywords: ['rotation', 'what is rotation', 'spin', 'axis', 'day', 'night'],
  },
  {
    id: 'concept-revolution',
    title: 'What is revolution?',
    curriculum: 'Orbital Mechanics — Journey Around an External Body',
    experimentId: 'solar-system',
    experimentName: '06 / SOLAR SYSTEM',
    simpleExplanation:
      'Revolution is the orbital movement of one body traveling completely around an external central body.',
    everydayExample:
      'Earth completing one full orbit around the Sun every 365.25 days, which defines the length of our calendar year.',
    analogy:
      'A runner jogging around a circular running track around an athletic field.',
    formula: 'T = 2π · √(r³ / (G · M))',
    variables: [
      { sym: 'T', desc: 'Orbital revolution period (s)' },
      { sym: 'r', desc: 'Orbital radius / semi-major axis (m)' },
      { sym: 'M', desc: 'Central star mass (kg)' },
    ],
    coreUnderstanding:
      'Rotation is spinning on your own internal axis; revolution is traveling around an external center.',
    linkedExperimentId: 'exp-distance',
    keywords: ['revolution', 'revolve', 'year', 'orbit', 'sun', 'earth'],
  },
  {
    id: 'concept-orbital-period',
    title: 'What is orbital period?',
    curriculum: 'Class 11 Physics, Chapter 8: Gravitation — Kepler’s Third Law',
    experimentId: 'solar-system',
    experimentName: '06 / SOLAR SYSTEM',
    simpleExplanation:
      'Orbital period is the total time it takes an orbiting planet or satellite to complete one full revolution around its star.',
    everydayExample:
      'Mercury (closest to the Sun) completes an orbit in just 88 Earth days, while distant Neptune takes 165 Earth years.',
    analogy:
      'Running on the innermost lane of a track: the lap distance is short and your pace is fast, while the outermost lane is much longer and slower.',
    formula: 'T² ∝ a³',
    variables: [
      { sym: 'T', desc: 'Orbital period (years)' },
      { sym: 'a', desc: 'Semi-major axis / distance from Sun (Astronomical Units, AU)' },
    ],
    coreUnderstanding:
      'Kepler’s Third Law: outer planets take dramatically longer to orbit because gravity is weaker and their paths are much longer.',
    linkedExperimentId: 'exp-distance',
    keywords: ['orbital period', 'period', 'kepler', 'year', 'neptune', 'mercury'],
  },
  {
    id: 'concept-escape-velocity',
    title: 'What is escape velocity?',
    curriculum: 'Class 11 Physics, Chapter 8: Gravitation — Escape Speed Threshold',
    experimentId: 'solar-system',
    experimentName: '06 / SOLAR SYSTEM',
    simpleExplanation:
      'Escape velocity is the minimum launch speed an unpowered object needs to permanently break free from a planet’s gravitational pull without ever falling back.',
    everydayExample:
      'NASA spacecraft like Voyager 1 were launched at escape speed to break out of Earth’s and the Sun’s gravitational wells into interstellar space.',
    analogy:
      'Pedaling a bicycle fast enough up and over the crest of a steep hill so you coast down the far side instead of rolling backwards.',
    formula: 'v_e = √(2 · G · M / r) = √2 · v_orb ≈ 1.414 · v_orb',
    variables: [
      { sym: 'v_e', desc: 'Escape velocity (m/s)' },
      { sym: 'v_orb', desc: 'Circular orbital speed at that distance' },
      { sym: 'E', desc: 'Total mechanical energy (E = K + U ≥ 0 for escape)' },
    ],
    coreUnderstanding:
      'At √2 × orbital speed (roughly 1.41×), kinetic energy strictly equals gravitational potential energy, turning closed orbits into unbound escape hyperbolas.',
    linkedExperimentId: 'exp-escape',
    keywords: ['escape velocity', 'escape', 'speed', 'threshold', 'hyperbola', 'voyager'],
  },
  {
    id: 'concept-centripetal-force',
    title: 'What is centripetal force?',
    curriculum: 'Class 11 Physics, Mechanics — Circular Motion & Inward Acceleration',
    experimentId: 'solar-system',
    experimentName: '06 / SOLAR SYSTEM',
    simpleExplanation:
      'Centripetal force is the net inward force required to make an object turn and follow a curved circular path instead of continuing in a straight line.',
    everydayExample:
      'Tension in a string pulling inward on a ball as you whirl it in a circle above your head.',
    analogy:
      'Turning a car’s steering wheel: tire friction pulls inward toward the center of the curve; without that friction, the car skids straight off the road.',
    formula: 'F_c = (m · v²) / r',
    variables: [
      { sym: 'F_c', desc: 'Inward centripetal force (N)' },
      { sym: 'm', desc: 'Object mass (kg)' },
      { sym: 'v', desc: 'Speed along the curve (m/s)' },
      { sym: 'r', desc: 'Curve radius (m)' },
    ],
    coreUnderstanding:
      'In planetary orbits, gravity acts as the centripetal force that perpetually pulls the planet sideways into a closed elliptical curve.',
    linkedExperimentId: 'exp-slow-down',
    keywords: ['centripetal force', 'centripetal', 'curve', 'turn', 'circle', 'inward'],
  },
  {
    id: 'concept-black-holes',
    title: 'What is a black hole?',
    curriculum: 'Relativistic Astrophysics — Spacetime Curvature & Event Horizons',
    experimentId: 'black-hole',
    experimentName: '03 / BLACK HOLE',
    simpleExplanation:
      'A black hole is a region in space where mass is concentrated so densely that its gravitational pull prevents anything—even light—from escaping.',
    everydayExample:
      'If you crushed the entire mass of planet Earth into a sphere the size of a small marble (9 mm wide), it would become a black hole.',
    analogy:
      'A waterfall where water accelerates toward an abyss: upstream a fish can swim against the current, but past the brink the water flows faster than any fish can swim.',
    formula: 'r_s = (2 · G · M) / c²',
    variables: [
      { sym: 'r_s', desc: 'Schwarzschild radius / Event horizon boundary (m)' },
      { sym: 'c', desc: 'Speed of light (3 × 10⁸ m/s)' },
      { sym: 'M', desc: 'Black hole mass (kg)' },
    ],
    coreUnderstanding:
      'Mass warps the geometry of spacetime; beyond the event horizon, all forward paths lead inexorably inward toward the center.',
    linkedExperimentId: null,
    keywords: ['black holes', 'black hole', 'event horizon', 'singularity', 'gravity', 'light'],
  },
  {
    id: 'concept-galaxy',
    title: 'What keeps a spiral galaxy together?',
    curriculum: 'Astrophysics — Galactic Dynamics & Dark Matter Halos',
    experimentId: 'galaxy',
    experimentName: '02 / GALAXY',
    simpleExplanation:
      'A spiral galaxy is a colossal gravitationally bound collection of hundreds of billions of stars, gas, and dark matter orbiting a common center of mass.',
    everydayExample:
      'Our Milky Way contains over 100 billion stars, including our Sun, rotating together around the galactic center over 230 million years.',
    analogy:
      'A swirling whirlpool in a pond where thousands of leaves rotate together around a central vortex.',
    formula: 'v_c = √(G · M(r) / r)',
    variables: [
      { sym: 'v_c', desc: 'Orbital velocity of stars at radius r' },
      { sym: 'M(r)', desc: 'Total enclosed mass inside radius r' },
    ],
    coreUnderstanding:
      'Outer stars in spiral galaxies rotate unexpectedly fast, providing key empirical evidence for an unseen, massive halo of dark matter.',
    linkedExperimentId: null,
    keywords: ['galaxy', 'spiral galaxy', 'stars', 'milky way', 'dark matter'],
  },
  {
    id: 'concept-pulsar',
    title: 'What is a pulsar?',
    curriculum: 'Astrophysics & Electrodynamics — Rotating Magnetic Dipoles',
    experimentId: 'pulsar',
    experimentName: '05 / PULSAR',
    simpleExplanation:
      'A pulsar is a city-sized, rapidly spinning neutron star that shoots twin beams of radiation from its magnetic poles like a cosmic lighthouse.',
    everydayExample:
      'Astronomers observe periodic radio and light pulses from pulsars with stopwatch precision, sometimes flashing hundreds of times every second.',
    analogy:
      'A harbor lighthouse lantern that rotates continuously: you only see a bright flash when the sweeping beam points directly toward your eyes.',
    formula: 'P = 2π / ω',
    variables: [
      { sym: 'P', desc: 'Pulse period (seconds, s)' },
      { sym: 'ω', desc: 'Spin angular frequency (rad/s)' },
    ],
    coreUnderstanding:
      'Pulsars do not blink on and off; their radiation beams shine steadily, but appear as rapid pulses as their tilted magnetic poles sweep past Earth.',
    linkedExperimentId: 'exp-pulsar-spin',
    keywords: ['pulsar', 'what is a pulsar', 'lighthouse', 'neutron star', 'pulse', 'spin'],
  },
  {
    id: 'concept-solar-system',
    title: 'What is the Solar System?',
    curriculum: 'Class 11 Physics, Chapter 8: Gravitation — Planetary Systems',
    experimentId: 'solar-system',
    experimentName: '06 / SOLAR SYSTEM',
    simpleExplanation:
      'The Solar System is our gravitationally bound planetary family, consisting of the Sun at the center and the 8 primary planets orbiting around it.',
    everydayExample:
      'The 8 planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune) all travel in nearly circular, concentric orbits around the Sun.',
    analogy:
      'A giant concentric racetrack where the Sun sits on the infield, and 8 race cars travel in lanes of increasing distance.',
    formula: 'T² / a³ = 4π² / (G · M_☉)',
    variables: [
      { sym: 'T', desc: 'Planetary orbital period (years)' },
      { sym: 'a', desc: 'Orbital radius (Astronomical Units, AU)' },
      { sym: 'M_☉', desc: 'Solar mass (1.989 × 10³⁰ kg, 99.86% of Solar System mass)' },
    ],
    coreUnderstanding:
      'The Sun contains 99.86% of the Solar System’s total mass, acting as the dominant gravitational anchor that governs all planetary motions.',
    linkedExperimentId: 'exp-distance',
    keywords: ['solar system', 'what is the solar system', 'sun', 'planets', 'earth', 'jupiter'],
  },
]
