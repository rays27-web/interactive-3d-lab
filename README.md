# Interactive 3D Lab

An evolving collection of immersive browser-based 3D experiments. This first experiment is a mouse-reactive, planet-like visual built as a clean foundation for future scenes such as a black hole, galaxy, fluid, or fractal study.

## Technology

- **React** provides the page and UI component structure.
- **Vite** is the fast local development and production-build tool.
- **Three.js** creates the WebGL scene, camera, lights, geometry, particles, and animation.
- **JavaScript** is used intentionally at this stage: it keeps the core Three.js concepts easy to inspect while learning. TypeScript can be introduced later if the scene configuration becomes substantially larger.

## Run locally

This environment uses `pnpm` because `npm` is not installed.

```bash
pnpm install
pnpm dev
```

Open the local URL Vite prints (normally `http://localhost:5173`). To create a production build:

```bash
pnpm build
pnpm preview
```

## Architecture

```text
src/
  components/SceneCanvas.jsx  React lifecycle wrapper for the active Three.js scene
  components/ExperimentNavigator.jsx  Minimal experiment index control
  components/ExperimentControls.jsx   Contextual laboratory parameter controls
  experiments/registry.js     Single source of truth for available and future experiments
  scenes/PlanetScene.js       Experiment 01: scene, lights, stars, interaction, animation
  scenes/GalaxyScene.js       Experiment 02: 4-arm spiral, 3D bulge, stellar drift
  scenes/BlackHoleScene.js    Experiment 03: gravitational lensing, accretion disk, photon ring
  styles/global.css           Visual layout and responsive styling
  App.jsx                     Page content around the canvas
  main.jsx                    React entry point
```

## Experiment architecture

The React application shell owns the active experiment state and navigation. The Three.js scenes remain completely decoupled from UI markup and labels. `experiments/registry.js` acts as the single source of truth for all experiment configurations and scientific metadata:
- **Experiment 01 — PLANET**: Procedural physical icosahedron, atmospheric Fresnel scattering, and 3-tier stellar parallax.
- **Experiment 02 — GALAXY**: 4-arm logarithmic spiral density waves, 3D oblate central bulge, and GPU-driven stellar kinematics.
- **Experiment 03 — BLACK HOLE**: Relativistic gravitational lensing approximation, differential Keplerian shear, Doppler beaming asymmetry, and photon sphere silhouette.
- **Future studies (Fluid)**: Maintained as locked signals in the registry until their scene factories are implemented.

Each registry entry exposes metadata (`eyebrow`, `titleLead`, `titleAccent`, `description`, `parameters`) that dynamically populates the laboratory shell. When switching experiments, `SceneCanvas` manages a three-stage lifecycle:
1. **Visual withdrawal**: Canvas and typography dim while a status indicator announces the target experiment.
2. **Resource disposal & scene factory mount**: The active scene invokes its WebGL cleanup callback and the incoming scene factory initializes.
3. **Emergence & stabilization**: The new scene and updated scientific parameters fade smoothly into view and settle into motion.


## How the 3D scene works

`PlanetScene.js` makes a **scene** (the 3D world), a perspective **camera** (the viewer), and a WebGL **renderer** (the GPU drawing surface). The planet is an icosahedron mesh with a physical material. A slightly larger shader-driven sphere creates its blue edge glow. Directional and point lights give the object shape; thousands of `Points` form the star field.

The `animate()` function runs once per display frame via `requestAnimationFrame`. It smoothly rotates and floats the planet, gently turns the star field, updates the camera, then renders the scene.

Pointer coordinates are converted to values from roughly `-1` to `1`. Instead of immediately applying them, `lerp()` eases the camera and world rotation toward them. This makes mouse interaction feel cinematic rather than twitchy. The resize handler recalculates camera proportions and renderer size whenever the window changes.

## Visual Techniques

### Procedural surface and physical lighting

The planet keeps a `MeshPhysicalMaterial`, so Three.js lights still create believable highlights and shadows. Its shader is extended with two inexpensive sine-wave patterns. Those patterns create gentle color bands and tiny surface displacement without downloading an image texture. The pattern runs on the GPU and receives only one changing value per frame: elapsed time.

### Atmosphere and Fresnel rim lighting

The atmosphere is a second, slightly larger sphere rendered with additive blending. Its shader compares the surface normal with the direction toward the camera. A surface pointing toward us receives little glow; a surface viewed edge-on receives more. This is called a **Fresnel effect** or **rim lighting**, and it is why the glow hugs the edge of the planet.

### Particle depth

The stars are three `Points` layers: distant, middle-distance, and nearby. Each has a different radius range, point size, opacity, and rotation speed. Their different motion creates parallax, which helps the brain read the scene as deep space rather than a flat backdrop. The stars twinkle in a small GPU shader, so JavaScript does not need to update thousands of stars individually every frame.

### Pointer interpolation and animation

Pointer coordinates become a target value from about `-1` to `1`. `lerp()` moves the current pointer value gradually toward that target. The eased value shifts the camera, planet group, and each star layer by different small amounts. `requestAnimationFrame` updates the time uniforms, movement, and render once per browser frame.

### Why GPU rendering helps

WebGL sends geometry and shader programs to the GPU, which is designed to calculate many vertices and pixels in parallel. That makes it practical to render the lit planet, atmosphere, and thousands of star particles while JavaScript focuses on high-level scene control.

## Experiment 02: Procedural Galaxy

### Spiral galaxy mathematics

The galaxy starts in polar coordinates: every particle receives a **radius** and an **angle**. Four spiral arms receive equally spaced starting angles. The arm progression follows a logarithmic curve:

```text
angle = radius^0.74 × spiralFactor + armOffset
```

The code converts polar coordinates into the 3D plane with `x = cos(angle) × distance` and `z = sin(angle) × distance`. Rather than a flat disk, an astrophysical **oblate bulge** concentrates vertical thickness in the core with exponential falloff (`h ~ exp(-radius / 1.7)`), flattening into an accretion disk toward the rim. Inter-arm disk stars (~22%) provide cohesive interstellar density.

### Particle data and GPU rendering

Galaxy generation fills typed arrays for position, color, size, brightness, phase, and radius. Those arrays become `BufferGeometry` attributes, and one `THREE.Points` object draws the whole galaxy. This is important: tens of thousands of individual `Mesh` objects would be expensive for JavaScript and the renderer to manage.

The particle shader uses the GPU to make each point soft, gently twinkle, and drift vertically. JavaScript updates only a time uniform and the group/camera transforms each frame. Desktop uses 30,000 galaxy particles; smaller viewports start with 14,000 to protect mobile performance.

### Interaction and transition

The Galaxy camera and the galaxy group follow an eased pointer value, creating small parallax shifts rather than direct mouse attachment. When switching Planet and Galaxy, `SceneCanvas` briefly fades the mounted canvas, disposes the old scene through its existing cleanup function, mounts the selected experiment, then fades it in. The app shell supplies the restrained initialization message while this occurs.

## Experiment 03: Black Hole & Gravitational Lensing

### Astrophysical approximations & rendering architecture

Experiment 03 models an extreme relativistic gravitational environment centered on a Schwarzschild black hole with an active accretion disk and background gravitational lensing:

1. **Central Event Horizon & Shadow ($R \approx 1.35$)**:
   - A pure matte-black light-absorption sphere rendered with `depthWrite: true` and `color: 0x000000`.
   - Naturally occludes the rear section of the equatorial accretion disk and background celestial objects, defining the photon capture shadow boundary.

2. **Equatorial Accretion Disk**:
   - **Differential Keplerian Shear**: Angular velocity follows Kepler's third law, $\Omega(r) \propto r^{-1.5}$, causing inner plasma rings near the Innermost Stable Circular Orbit (ISCO) to orbit dramatically faster than the outer rim.
   - **Procedural Plasma Turbulence**: Multi-frequency harmonic sinusoids combined directly on the GPU create dynamic plasma filaments without image texture overhead.
   - **Radial Density Gradient**: A steep ramp at ISCO ($r \approx 1.42$) transitioning into an exponential outer dropoff ($r \approx 6.40$).
   - **Relativistic Doppler Beaming**: Plasma moving toward the observer (left limb) undergoes relativistic flux beaming and Doppler blueshift $(1 + \beta)^{3.2}$, appearing brighter and hotter ($T \sim \text{blue-white}$). Receding plasma (right limb) is redshifted and dimmed into deep amber-red.

3. **Gravitational Lensing Upper & Lower Arcs**:
   - In general relativity, strong spacetime curvature bends light rays emitted from the back of the accretion disk over and under the horizon toward the observer.
   - Modeled via complementary curved geometry (`THREE.RingGeometry`) elevated and warped into the vertical observer plane, sharing the Keplerian shear and Doppler beaming GLSL pipeline.

4. **Photon Ring Caustic ($r \in [1.36, 1.48]$)**:
   - A concentrated, razor-sharp circular emission ring hugging the event horizon boundary, simulating photons trapped in unstable circular orbits at the photon sphere before escaping to infinity.

5. **Gravitationally Lensed Starfield**:
   - 1,200 background stars deflected dynamically on the GPU in a custom GLSL vertex shader.
   - Uses the Einstein deflection approximation $\Delta \vec{r} = \frac{\theta_E^2}{r} \hat{r}$ away from the singularity.
   - Incorporates central horizon shadow masking ($r < R_{\text{shadow}} \implies \text{discard}$) and flux amplification near the Einstein ring radius.

### Real-Time Laboratory Controls

The experiment exposes 4 laboratory parameters through `ExperimentControls.jsx`:
- **Accretion Velocity** ($0.1\times - 3.0\times$): Modulates the Keplerian angular shear rate across the disk.
- **Lensing Strength** ($0.2\times - 2.5\times$): Modulates the Einstein deflection coefficient $\theta_E$ in the starfield vertex shader.
- **Disk Density** ($20\% - 200\%$): Adjusts plasma opacity and radial filament thickness.
- **Emission Flux** ($20\% - 250\%$): Tunes the relativistic radiance and additive blending luminance of the disk and photon ring.

All parameter updates mutate Three.js GLSL uniform values in place without scene disposal, texture re-allocation, or shader recompilation.

