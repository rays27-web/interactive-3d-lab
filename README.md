# Interactive 3D Lab

An evolving collection of immersive, browser-based 3D physics experiments designed to make scientific concepts **observable, interactive, and measurable**.

The project combines **React, Three.js, WebGL, procedural graphics, numerical simulation, and physics-based computation** into a virtual laboratory where users can change physical parameters, observe the consequences in real time, and connect those observations to the underlying mathematics.

> **Status:** Active / Ongoing Project
> **Current focus:** Interactive physics visualization, scientific learning UX, simulation accuracy, and reusable laboratory infrastructure.

---

## What is this project?

Interactive 3D Lab is being developed as a long-term experimental platform rather than a single finished application.

The goal is to create a collection of browser-based scientific experiments where the user can:

* Explore physical phenomena in 3D.
* Change meaningful physical parameters.
* Observe the resulting change visually.
* Measure simulation values.
* Compare simulation values with astronomical reference data.
* Understand the mathematical model behind the visualization.
* Run interactive physics challenges.
* Record observations.
* Ask questions and connect them directly to visual experiments.

The core learning loop is:

**OBSERVE → CHANGE A PHYSICAL PARAMETER → SEE THE 3D CONSEQUENCE → MEASURE → UNDERSTAND WHY**

---

# Technology Stack

* **React** — application shell, UI components, state management, and interaction flow.
* **Vite** — development server and production build system.
* **Three.js** — WebGL scenes, cameras, lighting, geometry, particles, shaders, and animation.
* **JavaScript** — intentionally used at the current stage to keep the Three.js and physics implementation easy to inspect while learning.
* **WebGL / GLSL** — GPU-based rendering, procedural effects, particle systems, and shader-driven simulations.
* **CSS** — laboratory interface, responsive layouts, transitions, HUDs, and presentation modes.
* **localStorage** — client-side experiment preset persistence.

TypeScript may be introduced later if the scene configuration and application architecture become substantially larger.

---

# Experiments

The laboratory currently contains six major 3D experiments.

## Experiment 01 — Planet

A procedural planet visualization demonstrating:

* Physical icosahedron geometry.
* Procedural surface patterns.
* Physical lighting.
* Atmospheric Fresnel scattering.
* Multi-layer stellar parallax.
* Pointer-reactive camera movement.
* GPU-driven star twinkling.

---

## Experiment 02 — Galaxy

A procedural spiral galaxy containing:

* Four logarithmic spiral arms.
* A three-dimensional central bulge.
* Inter-arm stellar density.
* GPU-driven particle rendering.
* Stellar drift and twinkling.
* Pointer-based camera parallax.

The galaxy uses polar coordinates and a logarithmic spiral relationship:

```text
angle = radius^0.74 × spiralFactor + armOffset
```

Polar coordinates are converted into the 3D scene using:

```text
x = cos(angle) × distance
z = sin(angle) × distance
```

Desktop rendering uses approximately 30,000 galaxy particles, while smaller viewports reduce the particle count for performance.

---

## Experiment 03 — Black Hole & Gravitational Lensing

A visual approximation of an extreme relativistic gravitational environment around a Schwarzschild black hole.

The experiment includes:

* Central event-horizon shadow.
* Equatorial accretion disk.
* Differential Keplerian shear.
* Procedural plasma turbulence.
* Radial density gradients.
* Relativistic Doppler-beaming approximation.
* Photon-ring caustic.
* Upper and lower gravitational-lensing arcs.
* GPU-driven lensed background stars.

The accretion disk uses approximately:

```text
Ω(r) ∝ r^-1.5
```

The experiment also exposes real-time controls for:

* Accretion velocity.
* Lensing strength.
* Disk density.
* Emission flux.

> This experiment uses physically motivated approximations for visualization rather than attempting to perform a full general-relativistic ray-tracing simulation.

---

## Experiment 04 — Astrochemical Hydrodynamics & Fluid Vorticity

A procedural visualization inspired by turbulent molecular clouds and astrophysical fluid dynamics.

The simulation includes:

* Divergence-free curl-noise velocity fields.
* Pointer-driven vortex injection.
* Thermal convection and buoyancy.
* Procedural plasma filaments.
* Astrochemical spectral mapping.

The velocity field is constructed from a vector potential:

```text
v = ∇ × Ψ
```

Because:

```text
∇ · (∇ × Ψ) = 0
```

the resulting velocity field is mathematically divergence-free.

The experiment exposes controls for:

* Advection velocity.
* Vortex scale.
* Shear viscosity.
* Thermal buoyancy.

---

## Experiment 05 — Pulsar & Relativistic Magnetosphere

A procedural visualization of a rapidly rotating, magnetized neutron star.

The experiment includes:

* Oblique magnetic dipole rotation.
* Dipolar magnetic field lines.
* Relativistic polar radiation beams.
* Lighthouse-effect visualization.
* Co-rotating magnetospheric plasma.
* Synchrotron-inspired particle effects.
* Polar-cap hotspots.
* Relativistic limb-darkening approximation.

The magnetic dipole is tilted relative to the rotation axis, producing a continuously precessing magnetic field.

The experiment exposes controls for:

* Spin frequency.
* Magnetic flux.
* Beam collimation.
* Plasma density.

---

## Experiment 06 — Solar System & N-Body Gravitation

A numerical solar-system simulation using Newtonian N-body gravity and a symplectic Velocity Verlet integrator.

The simulation includes:

* The Sun.
* Mercury.
* Venus.
* Earth.
* Mars.
* Jupiter.
* Saturn.
* Uranus.
* Neptune.
* Mutual gravitational interactions.
* Orbital trajectories.
* Motion trails.
* Gravity vectors.
* Planet-following camera mode.
* Live astronomical measurements.

The gravitational acceleration is calculated using an N-body formulation with Plummer softening:

```text
aᵢ = -Σ Gmⱼ(rᵢ-rⱼ) / (|rᵢ-rⱼ|² + ε²)^(3/2)
```

The simulation uses **Velocity Verlet** integration rather than basic Forward Euler integration:

```text
r(t+Δt) = r(t) + v(t)Δt + ½a(t)Δt²

v(t+Δt) = v(t) + ½[a(t)+a(t+Δt)]Δt
```

Multiple micro-steps are used per rendered frame to improve orbital stability at higher simulation speeds.

---

# Physics Infrastructure

The project contains a reusable physics layer under:

```text
src/physics/
```

### `gravity.js`

Contains reusable calculations for:

* Newtonian gravitational force.
* Surface gravity.
* Orbital velocity.
* Escape velocity.

Examples include:

```text
F = Gm₁m₂ / r²

g = GM / R²

v = √(GM / r)

vₑ = √(2GM / R)
```

Input validation is included to avoid invalid `NaN` or `Infinity` propagation.

### `orbitalMechanics.js`

Contains reusable calculations for:

* Circular orbital period.
* Keplerian orbital period.
* Centripetal acceleration.
* Kepler harmonic ratio.

### `formatPhysicsValue.js`

Provides standardized scientific formatting for:

* SI units.
* Scientific notation.
* Astronomical units.
* Years.
* Velocity.
* Acceleration.
* Mass and distance values.

### `celestialConstants.js`

Contains numerical reference data for:

* Sun.
* Mercury.
* Venus.
* Earth.
* Mars.
* Jupiter.
* Saturn.
* Uranus.
* Neptune.

---

# Measurement & Scientific Learning Layer

The laboratory is designed to go beyond visual effects.

Reusable components provide scientific measurement and explanation:

```text
src/components/
```

Important components include:

* `PhysicsInspector.jsx`
* `MeasurementOverlay.jsx`
* `ExperimentHistory.jsx`
* `ExperimentChallenge.jsx`
* `PhysicsExplanation.jsx`
* `AskTheLab.jsx`

## Measurement model

Measurements are separated into three levels:

### Tier 1 — Astronomical Ground Truth

Reference values such as:

* AU.
* Kilometres.
* km/s.
* Planetary masses.
* Planetary radii.
* Orbital periods.

### Tier 2 — Numerical Simulation State

Values calculated directly from the simulation:

* Position.
* Velocity.
* Distance.
* Acceleration.
* Gravitational force.
* Orbital state.

### Tier 3 — Visual Projection Scale

The visualization may intentionally compress astronomical distances so that multiple bodies remain visible and interactable.

For the solar-system visualization, the calibrated display scale follows approximately:

```text
r_visual ∝ a^0.58
```

This means the visualization scale is **not treated as physical distance**. The simulation preserves the relevant physical relationships while the rendering layer uses a calibrated visual representation.

---

# Interactive Physics Demonstrations

The laboratory currently contains several focused demonstrations.

## Demo 01 — Inverse-Square Gravitation

Explores:

```text
F ∝ 1/r²
```

Changing orbital distance demonstrates how gravitational attraction changes with separation.

---

## Demo 02 — Orbital Velocity & Stability

Compares different initial orbital velocities:

* Too slow.
* Circular-orbit velocity.
* Super-circular velocity.

The resulting trajectories demonstrate how velocity changes orbital behaviour.

---

## Demo 03 — Escape Velocity

Explores the relationship between orbital velocity and escape velocity.

The visualization connects:

* Kinetic energy.
* Gravitational potential energy.
* Total mechanical energy.
* Bound trajectories.
* Escape trajectories.

---

## Demo 04 — Gravitational Acceleration Comparison

Compares surface gravity across selected planets, including:

* Mercury.
* Earth.
* Mars.
* Jupiter.

---

## Demo 05 — Kepler's Harmonic Law

Demonstrates:

```text
T² ∝ a³
```

and the relationship:

```text
T² / a³ = constant
```

for planetary orbital motion.

---

# Scientific Explanation System

The project includes a contextual explanation layer designed to answer:

### What changed?

Example:

> Orbital speed was changed to 0.50× the reference value.

### What happened?

Example:

> Centripetal acceleration decreased relative to gravitational acceleration, causing the simulated orbit to move inward.

### Why did it happen?

The explanation connects the observed result to the governing physical relationship.

### Curriculum connection

Relevant experiments can be connected to foundational physics concepts such as:

* Gravity.
* Force.
* Acceleration.
* Velocity.
* Orbital motion.
* Escape velocity.
* Centripetal force.
* Kepler's laws.

The intended educational flow is:

**Concept → Experiment → Parameter Change → Observation → Measurement → Explanation**

---

# Laboratory Command Center

The application has evolved into a unified laboratory interface rather than a collection of isolated scenes.

## Telemetry

`LaboratoryTelemetry.jsx` provides:

* WebGL status.
* FPS.
* Frame time.
* Active simulation entity count.
* Viewport dimensions.
* Device pixel ratio.

Telemetry updates are throttled rather than forcing React state updates every animation frame.

---

## Scientific Dossier

`ExperimentInfoPanel.jsx` provides:

* Scientific field.
* Sub-discipline.
* Governing equations.
* Physical phenomenon explanations.
* Parameter guides.
* Experiment context.

The dossier can be dismissed through:

* Close controls.
* Backdrop interaction.
* `Escape` key.

---

## Lab Mode & Clean Mode

The application supports two presentation modes.

### Lab Mode

Provides:

* Telemetry.
* Parameters.
* Scientific instruments.
* Measurement tools.
* Experiment information.

### Clean Mode

Provides:

* Minimal interface.
* Maximum visualization area.
* Reduced interface clutter.

Switching modes does not recreate the WebGL scene.

---

# Preset Management

Experiment parameters can be saved using:

```text
localStorage
```

Preset management supports:

* Up to six presets per experiment.
* One-click loading.
* Preset deletion.
* Restoration of baseline parameters.

Stored values are validated and clamped to experiment-specific parameter ranges.

The storage layer also protects against:

* Corrupted JSON.
* Invalid parameter values.
* Prototype-pollution keys.
* Storage quota failures.
* Disabled localStorage environments.

---

# Accessibility

The interface uses semantic HTML and keyboard-friendly controls.

Current accessibility features include:

* Semantic buttons.
* Dialog regions.
* Tab lists.
* Visible focus states.
* Keyboard navigation.
* Global `Escape` handling for open panels and drawers.

The project also follows a strict **zero-auto-open** interaction philosophy.

Panels and instruments should not automatically open when:

* The application starts.
* An experiment changes.
* A scene finishes loading.

Users explicitly open instruments through interaction.

---

# Application Architecture

The project follows a separation between the React application layer and the Three.js rendering layer.

```text
src/
├── physics/
│   ├── gravity.js
│   ├── orbitalMechanics.js
│   ├── formatPhysicsValue.js
│   └── celestialConstants.js
│
├── components/
│   ├── SceneCanvas.jsx
│   ├── ExperimentNavigator.jsx
│   ├── ExperimentControls.jsx
│   ├── PresetManager.jsx
│   ├── LaboratoryTelemetry.jsx
│   ├── ExperimentInfoPanel.jsx
│   ├── LabModeToggle.jsx
│   ├── PlanetSelector.jsx
│   ├── SolarSystemMiniMap.jsx
│   ├── PlanetDetailPanel.jsx
│   ├── PhysicsInspector.jsx
│   ├── MeasurementOverlay.jsx
│   ├── ExperimentHistory.jsx
│   ├── ExperimentChallenge.jsx
│   ├── PhysicsExplanation.jsx
│   └── AskTheLab.jsx
│
├── experiments/
│   └── registry.js
│
├── scenes/
│   ├── PlanetScene.js
│   ├── GalaxyScene.js
│   ├── BlackHoleScene.js
│   ├── FluidScene.js
│   ├── PulsarScene.js
│   └── SolarSystemScene.js
│
├── utils/
│   └── presetStorage.js
│
├── App.jsx
└── main.jsx
```

---

# Experiment Registry

`experiments/registry.js` acts as the single source of truth for experiment configuration and scientific metadata.

Each experiment exposes metadata such as:

* Eyebrow.
* Title.
* Description.
* Parameters.
* Scientific information.

This allows the application shell to dynamically adapt when experiments change.

---

# Scene Lifecycle

`SceneCanvas` manages experiment transitions through three stages.

### 1. Visual Withdrawal

The current canvas and interface gradually dim.

### 2. Scene Disposal & Mount

The current Three.js scene executes its cleanup logic and the next scene factory initializes.

### 3. Emergence & Stabilization

The new experiment fades into view and stabilizes.

The goal is to keep scenes decoupled from UI markup while ensuring WebGL resources are properly released.

---

# Rendering & Performance Philosophy

Performance is treated as part of the architecture rather than an afterthought.

Current principles include:

### Single WebGL Canvas

The application maintains one primary WebGL canvas.

### GPU-first rendering

Large particle systems and procedural visual effects are pushed toward shaders and GPU computation where practical.

### Preallocated simulation buffers

For example, solar-system orbital trails use fixed typed arrays rather than continuously creating new arrays.

### Reduced per-frame allocations

Reusable mathematical objects and buffers are preferred over creating temporary objects inside animation loops.

### Throttled React updates

Telemetry and other rapidly changing values are not unnecessarily pushed into React state every frame.

### Responsive particle counts

Heavy particle experiments reduce rendering density on smaller devices.

---

# Visual Techniques

The project uses a mixture of procedural mathematics, shader programming, and conventional Three.js rendering.

## Procedural surfaces

Planetary surfaces use shader-generated patterns instead of requiring large texture assets.

## Fresnel lighting

Atmospheric effects use the relationship between surface normals and camera direction to create edge illumination.

## Particle systems

Large collections of stars and astrophysical particles are rendered using `THREE.Points` and GPU shaders.

## Procedural turbulence

Fluid and plasma experiments use mathematical noise and analytical fields to create dynamic motion.

## GPU shaders

GLSL is used for:

* Particle movement.
* Twinkling.
* Atmospheric effects.
* Plasma turbulence.
* Gravitational-lensing approximations.
* Procedural surfaces.
* Radiation beams.

---

# Security

The project follows a defense-in-depth approach appropriate for a static client-side application.

## Content Security Policy

The application uses CSP configuration through:

```text
index.html
public/_headers
```

The policy restricts resource loading and disables unnecessary capabilities such as legacy plugins and media execution.

## DOM injection protection

The application intentionally avoids:

```text
dangerouslySetInnerHTML
innerHTML
outerHTML
document.write
eval()
```

## Environment variables

Vite variables beginning with:

```text
VITE_
```

are exposed to the client bundle.

Therefore:

> Never place API keys, passwords, private tokens, or server credentials inside `VITE_*` variables.

Only public configuration values should be exposed this way.

---

# Files That Must Never Be Committed

Never commit:

* API keys.
* Service tokens.
* GitHub personal access tokens.
* Passwords.
* Private encryption keys.
* Certificates.
* `.env` files containing secrets.
* Debugging dumps containing sensitive information.

The `.gitignore` is configured to exclude sensitive and generated files.

---

# Deployment Security

When deploying the production build to a CDN or static hosting platform, recommended security headers include:

```text
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

Platforms supporting `_headers`, such as Cloudflare Pages and Netlify, can use:

```text
public/_headers
```

---

# GitHub Repository Security

Recommended repository protections include:

* Branch protection for `main`.
* Pull-request review requirements.
* Required build/test checks.
* Restricted force pushes.
* Secret scanning.
* Push protection.
* Dependabot alerts.
* Automated dependency security updates.

---

# Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Vite will provide the local development URL, normally:

```text
http://localhost:5173
```

---

# Production Build

Create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

---

# Validation & Testing

The project contains automated validation for the physics question system and other laboratory functionality.

Example validation commands include:

```bash
node scripts/validateQuestionBank.cjs
```

and:

```bash
node scripts/testQuizSystem.cjs
```

The automated quiz system validates properties such as:

* Question counts.
* Topic isolation.
* Difficulty isolation.
* Duplicate detection.
* Question history behaviour.
* Exhausted-question behaviour.
* Question-bank integrity.
* Large question-pool selection.

The question-bank architecture currently supports more than 1,000 physics questions across multiple gravitation topics.

---

# Physics Quiz System

The laboratory includes a structured physics question system designed to complement the visual experiments.

Current gravitation topics include:

* Fundamental & Newton's Universal Law.
* Gravitational Field & Potential.
* Kepler's Laws of Planetary Motion.
* Satellite & Escape Velocity.

The question system supports:

* Easy.
* Medium.
* Hard.

Questions can be selected according to topic, difficulty, and requested count.

The system also tracks question history to support an **Always New Questions** behaviour when sufficient unseen questions are available.

---

# Educational Philosophy

The project is intentionally designed around the idea that physics should not be limited to reading formulas.

Instead:

```text
Formula
   ↓
Physical meaning
   ↓
Interactive parameter
   ↓
3D consequence
   ↓
Measurement
   ↓
Explanation
   ↓
Question / Challenge
```

The long-term goal is to make the laboratory useful both as a visual exploration tool and as a learning environment.

---

# Current Project Direction

Interactive 3D Lab is an **ongoing project**.

The architecture is intentionally designed so new experiments, simulations, measurements, challenges, and learning modules can be added without rebuilding the entire application.

Potential future directions include:

* Additional classical-mechanics experiments.
* Electromagnetism visualizations.
* Wave and oscillation experiments.
* Optics simulations.
* Thermodynamics visualizations.
* More fluid simulations.
* Advanced orbital mechanics.
* Relativistic visualization experiments.
* Additional astronomical systems.
* More interactive mathematical demonstrations.
* Expanded question banks.
* Scientific experiment reports.
* Improved mobile interaction.
* WebGPU exploration.
* Optional TypeScript migration.
* More advanced GPU-based simulation techniques.

---

# Project Structure Philosophy

The project follows several architectural principles:

### Separate simulation from presentation

Physics calculations should remain reusable and independent from UI components wherever possible.

### Keep scenes independent

Three.js scenes should not depend directly on React markup.

### Make scientific assumptions explicit

Approximations used for visualization should be documented rather than presented as exact physical simulations.

### Prefer reusable infrastructure

Measurement, telemetry, presets, explanations, challenges, and experiment navigation should work across multiple experiments.

### Treat performance as a design constraint

Rendering, memory usage, GPU workload, and React state updates should be considered during feature development.

### Build incrementally

The laboratory is intended to evolve through experiments and milestones rather than being treated as a single finished release.

---

# Development Philosophy

This project is also a learning environment.

The code is intentionally structured so that the underlying ideas remain inspectable:

* Physics formulas are kept in reusable modules.
* Three.js scene logic remains visible.
* GLSL shaders are used where GPU computation provides a clear advantage.
* Scientific metadata is separated from presentation.
* Experiments can be studied individually.
* Automated validation is used to prevent regressions.

The objective is not simply to produce visually impressive effects.

The objective is to understand how **physics, mathematics, simulation, graphics programming, and software architecture** can work together in an interactive environment.

---

# License

This project is released under the **MIT License**.

---

## Project Status

**Interactive 3D Lab is actively evolving.**

Experiments, physics models, learning systems, UI architecture, performance optimizations, and scientific explanations will continue to change as the laboratory grows.

The current implementation should therefore be viewed as a **living research-and-learning project**, not a final static product.
