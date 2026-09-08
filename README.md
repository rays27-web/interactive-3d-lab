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
  components/
    SceneCanvas.jsx             React lifecycle wrapper for the active Three.js scene
    ExperimentNavigator.jsx     Accessible experiment index control
    ExperimentControls.jsx      Contextual parameter controls & preset integration
    PresetManager.jsx           Safe localStorage parameter preset manager
    LaboratoryTelemetry.jsx     Throttled, non-allocating FPS & WebGL telemetry HUD
    ExperimentInfoPanel.jsx     Collapsible scientific dossier & physical equations
    LabModeToggle.jsx           Lab Mode vs Clean Mode presentation toggle
    PlanetSelector.jsx          Docked celestial selector bar with real-time status pips
    SolarSystemMiniMap.jsx      High-DPI 2D SVG radar overview & direct target selector
    PlanetDetailPanel.jsx       Floating celestial telemetry dossier & kinematics HUD
  utils/
    presetStorage.js            Schema-validated localStorage with bounds clamping
  experiments/
    registry.js                 Single source of truth for experiment configurations & dossier
  scenes/
    PlanetScene.js              Experiment 01: scene, lights, stars, interaction, animation
    GalaxyScene.js              Experiment 02: 4-arm spiral, 3D bulge, stellar drift
    BlackHoleScene.js           Experiment 03: gravitational lensing, accretion disk, photon ring
    FluidScene.js               Experiment 04: curl-noise advection, kinetic impeller, thermal plume
    PulsarScene.js              Experiment 05: oblique dipole, relativistic polar beams, synchrotron plasma
    SolarSystemScene.js         Experiment 06: symplectic Velocity Verlet N-body gravity, 8 procedural planets
  styles/
    global.css                  Command Center visual layout, telemetry HUD, and responsive styling
  App.jsx                       Command Center shell & keyboard orchestration
  main.jsx                      React entry point
```

## Experiment architecture

The React application shell owns the active experiment state and navigation. The Three.js scenes remain completely decoupled from UI markup and labels. `experiments/registry.js` acts as the single source of truth for all experiment configurations and scientific metadata:
- **Experiment 01 — PLANET**: Procedural physical icosahedron, atmospheric Fresnel scattering, and 3-tier stellar parallax.
- **Experiment 02 — GALAXY**: 4-arm logarithmic spiral density waves, 3D oblate central bulge, and GPU-driven stellar kinematics.
- **Experiment 03 — BLACK HOLE**: Relativistic gravitational lensing approximation, differential Keplerian shear, Doppler beaming asymmetry, and photon sphere silhouette.
- **Experiment 04 — FLUID**: Incompressible divergence-free curl-noise advection, kinetic pointer vortex impeller, and astrochemical thermal plume.
- **Experiment 05 — PULSAR**: Oblique rotator dipole precession, relativistic synchrotron lighthouse beams, and co-rotating magnetospheric plasma.
- **Experiment 06 — SOLAR SYSTEM**: Symplectic Velocity Verlet N-body gravitation, Sun granulation & corona glow, 8 procedural planets with axial tilts and Saturnian rings, ring-buffered orbital trails, and real-time astronomical kinematics.

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

## Experiment 04: Astrochemical Hydrodynamics & Fluid Vorticity

### Physical principles & computational architecture

Experiment 04 simulates the complex turbulent hydrodynamics of interstellar molecular clouds where star formation and shock waves take place:

1. **Divergence-Free Curl Velocity Field ($\nabla \cdot \vec{v} \equiv 0$)**:
   - Rather than relying on a heavy 3D grid solver requiring multi-pass ping-pong textures, the velocity field is computed directly on the GPU as the curl of a 3D procedural vector potential:
     $$\vec{v}(\vec{x}, t) = \nabla \times \vec{\Psi}(\vec{x}, t)$$
   - By vector calculus identity $\nabla \cdot (\nabla \times \vec{\Psi}) \equiv 0$, the velocity field is mathematically divergence-free everywhere in 3D space, guaranteeing strict volume preservation and eliminating unnatural particle clustering or artificial compression.
   - Evaluated via exact analytical partial derivatives in the custom GLSL vertex shader.

2. **Kinetic Pointer Vortex Impeller**:
   - Pointer coordinates and instantaneous velocity inject localized rotational shear into the fluid medium:
     $$\vec{F}_{\text{vortex}}(\vec{x}) = \frac{\vec{v}_{\text{pointer}} \times (\vec{x} - \vec{p}_{\text{pointer}})}{\|\vec{x} - \vec{p}_{\text{pointer}}\|^2 + \delta^2} \cdot \exp\left(-\frac{\|\vec{x} - \vec{p}_{\text{pointer}}\|^2}{2\sigma^2}\right)$$
   - Swirling eddies propagate across streamlines as the user moves their cursor or drags on touch displays.

3. **Thermal Convection & Buoyancy (Boussinesq Approximation)**:
   - Simulates temperature-driven buoyancy where core energized plasma filaments experience upward convective lift:
     $$\vec{a}_{\text{buoyant}} = \alpha (T_i - T_{\text{ambient}}) \hat{y}$$
   - Cooler outer filaments descend gently in dissipative recirculation loops.

4. **Astrochemical Spectral Mapping**:
   - High kinetic shear / core shock: Doubly ionized oxygen $[O_{III}]$ emission at $500.7\text{ nm}$ ($\text{electric cyan/teal}$).
   - Mid-velocity laminar filaments: Hydrogen-Alpha $H_\alpha$ spectral line at $656.3\text{ nm}$ ($\text{rich crimson/vermilion}$).
   - Low-velocity dissipative margins: Polycyclic aromatic hydrocarbon dust and neutral gas in deep ultraviolet/violet.

### Real-Time Laboratory Controls

Experiment 04 exposes 4 parameters through `ExperimentControls.jsx`:
- **Advection Velocity** ($0.2\times - 3.0\times$): Modulates the global kinetic energy and streamline transport speed.
- **Vortex Scale** ($0.3\times - 2.5\times$): Modulates the spatial wavelength of turbulent eddies.
- **Shear Viscosity** ($10\% - 250\%$): Tunes viscous dissipation between chaotic micro-turbulence and laminar flow.
- **Thermal Buoyancy** ($0\% - 200\%$): Adjusts vertical convective lift and plume elongation.

## Experiment 05: Pulsar & Relativistic Magnetosphere

### Physical principles & computational architecture

Experiment 05 models the high-energy electrodynamics of a rapidly rotating, magnetized neutron star (pulsar):

1. **Oblique Rotator Precession**:
   - The neutron star spins rapidly around a rotation axis $\hat{\Omega}$ while its magnetic dipole axis $\vec{M}(t)$ is tilted by an obliquity angle $\alpha \approx 36.7^\circ$ ($0.64\text{ rad}$).
   - As the star rotates, the magnetic axis precesses in a 3D cone through space:
     $$\vec{M}(t) = \sin\alpha \cos(\Omega t) \hat{x} + \cos\alpha \hat{y} + \sin\alpha \sin(\Omega t) \hat{z}$$
   - This precession drives the iconic astrophysical "lighthouse effect".

2. **Dipolar Magnetic Field Loops ($r(\theta) = r_0 \sin^2\theta$)**:
   - Closed magnetic field lines are derived from the dipole potential in cylindrical coordinates:
     $$\rho(\theta) = r_0 \sin^3\theta, \quad z(\theta) = r_0 \sin^2\theta \cos\theta$$
   - Rendered via high-density line loops with a custom shader simulating relativistic electron-positron ($e^\pm$) wave packets streaming along the lines.

3. **Relativistic Polar Radiation Beams ("Lighthouse Cones")**:
   - Dual open cones expand outward from both magnetic poles.
   - A custom GLSL shader calculates lateral collimation, longitudinal flux decay ($1/r^{1.6}$), and real-time observer line-of-sight interception.
   - When the precessing magnetic beam sweeps across the camera's view vector, an intense optical pulsation flare is rendered via:
     $$I_{\text{pulse}} = 1.0 + (\hat{M}_{\text{world}} \cdot \hat{v}_{\text{obs}})^{8 \cdot \theta_c} \cdot 4.2 \cdot \theta_c$$

4. **Co-Rotating Magnetospheric Synchrotron Plasma Torus**:
   - High-energy particles orbiting within the light cylinder radius $R_{\text{LC}} = c/\Omega$ are energized by synchrotron radiation.
   - 12,000 particles on desktop (6,000 on mobile) rotate with relativistic shear $\Omega(r) \propto r^{-0.5}$, transitioning from cyan near the inner boundary to electric violet at the outer rim.

5. **Neutron Star Core & Polar Cap Hotspots**:
   - Superdense spherical core displaying relativistic limb darkening:
     $$I_{\text{limb}} \propto (\hat{n} \cdot \hat{v})^{0.65}$$
   - Incandescent magnetic polar cap hotspots ($T \sim 10^6\text{ K}$) glow at the magnetic poles and rotate synchronously with the magnetic axis.

### Real-Time Laboratory Controls

Experiment 05 exposes 4 parameters through `ExperimentControls.jsx`:
- **Spin Frequency** ($0.2\times - 3.0\times$): Modulates the rotational angular velocity $\Omega$ and pulse rate.
- **Magnetic Flux** ($0.2\times - 2.5\times$): Modulates dipole field line luminance and beam radiation flux.
- **Beam Collimation** ($0.3\times - 2.5\times$): Adjusts polar beam cone tightness and observer pulse sharpness.
- **Plasma Density** ($20\% - 200\%$): Tunes magnetospheric particle density, opacity, and polar cap hotspot intensity.

## Experiment 06: Solar System & N-Body Gravitation

### Physical principles & computational architecture

Experiment 06 models the celestial mechanics of our solar system using an authentic N-body Newtonian gravitation framework integrated with a stable, symplectic numerical solver:

1. **Newtonian Gravitation & N-Body Dynamics**:
   - Universal Law of Gravitation:
     $$\vec{F}_{ij} = -G \frac{m_i m_j}{\|\vec{r}_i - \vec{r}_j\|^2} \frac{\vec{r}_i - \vec{r}_j}{\|\vec{r}_i - \vec{r}_j\|}$$
   - Acceleration on body $i$ due to the central mass and interplanetary gravitational perturbations with Plummer softening ($\epsilon = 0.5$):
     $$\vec{a}_i = -\sum_{j \ne i} \frac{G m_j (\vec{r}_i - \vec{r}_j)}{(\|\vec{r}_i - \vec{r}_j\|^2 + \epsilon^2)^{3/2}}$$

2. **Symplectic Velocity Verlet Numerical Integrator**:
   - Standard Forward Euler integration causes rapid artificial energy growth and orbital spiral-out within seconds.
   - Experiment 06 implements a symplectic **Velocity Verlet** scheme that preserves phase space volume and angular momentum over indefinite runtimes:
     $$\vec{r}(t + \Delta t) = \vec{r}(t) + \vec{v}(t)\Delta t + \frac{1}{2}\vec{a}(t)\Delta t^2$$
     $$\vec{v}(t + \Delta t) = \vec{v}(t) + \frac{1}{2}\left[\vec{a}(t) + \vec{a}(t + \Delta t)\right]\Delta t$$
   - Multi-substep integration: executes 3 micro-steps per frame ($\Delta t_{\text{sub}} = \Delta t / 3$) to maintain orbital stability even at $50\times$ simulation speed.

3. **Visual Scale Calibration vs. Physical Realism**:
   - In physical reality, Neptune orbits at $30.1\text{ AU}$ while Mercury orbits at $0.39\text{ AU}$ (a $77:1$ distance ratio), and the Sun's radius is $109\times$ Earth's radius. A 1:1 linear scale renders inner planets invisible or outer planets far off-screen.
   - Calibrated visualization scale:
     $$r_{\text{vis}} = r_{\text{base}} \cdot a^{0.58}$$
   - Compresses the distance ratio to $\approx 7.7:1$, keeping all 8 planets visible and interactable simultaneously while strictly maintaining relative orbital ordering, orbital velocities, and Kepler's Third Law ($T^2 \propto a^3$).

4. **Procedural Celestial Bodies & Shaders**:
   - **The Sun**: Dynamic procedural granulation shader driven by harmonic high-frequency noise, overlaid with an additive solar corona billboard and dynamic point light.
   - **Earth**: Procedural terrestrial shader with continent/ocean elevation thresholds, atmospheric blue Rayleigh scattering, and semi-transparent orbiting cloud layer.
   - **Jupiter**: Multi-frequency latitudinal bands with Great Red Spot atmospheric vortex perturbation.
   - **Saturn**: Double-sided ring geometry with procedural radial Cassini division and density opacity gradient.
   - **Uranus & Neptune**: Methane ice giants rendered in ice-cyan and azure with Uranus's realistic $97.8^\circ$ retrograde axial tilt.
   - **Mercury, Venus, & Mars**: Distinct surface albedos, crater roughness, and Venusian sulfuric cloud blanket.

5. **Preallocated Ring-Buffered Orbital Motion Trails**:
   - Each planet records its trajectory into a fixed `Float32Array(MAX_TRAIL_POINTS * 3)` ring buffer.
   - Zero heap allocations during animation: points are written directly into the preallocated buffer and flagged with `geometry.attributes.position.needsUpdate = true`.

6. **Single-Canvas Invariant & High-DPI Radar Mini-Map (`SolarSystemMiniMap.jsx`)**:
   - Displays a live 2D SVG radar overview of orbital tracks and planetary positions without creating a secondary WebGL canvas context.
   - Features direct orbit/planet targeting and pulsing active target beacons.

### Real-Time Laboratory Controls

Experiment 06 exposes 9 laboratory parameters through `ExperimentControls.jsx`:
- **Simulation Speed** ($0.1\times - 50.0\times$): Modulates physical time step $\Delta t$.
- **Gravity Strength** ($0\% - 200\%$): Scales gravitational constant $G$.
- **Orbit Scale** ($0.5\times - 2.0\times$): Expands or contracts orbital semi-major axes.
- **Trail Length** ($0\% - 100\%$): Adjusts motion trail point retention.
- **Time Integration** (`RUNNING` / `PAUSED`): Pauses physical integration while maintaining camera navigation.
- **Orbit Paths** (`VISIBLE` / `HIDDEN`): Toggles precalculated elliptical orbit guide rings.
- **Motion Trails** (`VISIBLE` / `HIDDEN`): Toggles dynamic historical trajectory trails.
- **Gravity Vectors** (`VISIBLE` / `HIDDEN`): Renders real-time gravitational acceleration vectors pointing toward the Sun.
- **Follow Planet** (`ENGAGED` / `DISENGAGED`): Locks camera focus to the selected celestial body.

## Phase 10: Laboratory Command Center

Phase 10 transforms the Interactive 3D Lab into a unified scientific **Laboratory Command Center** while preserving existing WebGL scene lifecycle and rendering performance:

### 1. Throttled Telemetry Layer (`LaboratoryTelemetry.jsx`)
- Displays live system status (`WebGL 2.0 · ACTIVE`), real-time FPS and frame time, active simulation entity count, viewport dimensions, and device pixel ratio (DPR).
- **Performance Discipline**: Utilizes an internal `requestAnimationFrame` delta accumulator that flushes to React state strictly once every 500ms. Eliminates per-frame garbage generation and prevents unnecessary React component re-renders.

### 2. Scientific Dossier & Physical Formulations (`ExperimentInfoPanel.jsx`)
- An accessible, collapsible scientific dossier detailing:
  - Scientific field and sub-discipline.
  - Core mathematical models and governing equations.
  - Physical phenomenon observation guide.
  - Parameter operational guides explaining what each slider physically modulates.
- Dismissible via on-screen close button, backdrop click, or keyboard `Escape`.

### 3. Lab Mode vs. Clean Mode (`LabModeToggle.jsx`)
- **Lab Mode**: Full telemetry HUD, active parameter controls, and scientific dossier access.
- **Clean Mode**: Uncluttered, minimalist presentation focusing entirely on the 3D visualization.
- **Scene Preservation**: Mode switching is implemented purely through React UI state and CSS transitions. The underlying WebGL canvas, Three.js scene, geometry, and shader programs are **never** recreated or unmounted when switching modes.

### 4. Local Storage Preset Management (`presetStorage.js` & `PresetManager.jsx`)
- Allows users to save up to 6 custom parameter presets per experiment to `localStorage` (`i3d_lab_presets_v1`).
- **Defense-in-Depth Validation**:
  - Validates JSON parse and handles corrupted storage safely without runtime crashes.
  - Sanitizes all stored parameters by clamping numerical values strictly to `[min, max]` matching experiment control bounds.
  - Protects against prototype pollution by discarding disallowed keys (`__proto__`, `constructor`, `prototype`).
  - Gracefully recovers from storage quota limits or disabled `localStorage` (e.g. strict private browsing modes).
  - Enables one-click preset loading, individual preset deletion, and restoration to baseline laboratory defaults.

### 5. Accessibility & Keyboard Navigation
- Enhanced semantic HTML controls (`button`, `role="region"`, `role="dialog"`, `role="tablist"`).
- Visible focus rings (`*:focus-visible`) for keyboard navigation.
- Global `Escape` key shortcut closes all open drawers, parameter panels, and dossiers.

## Security & Deployment

The Interactive 3D Lab applies a **defense-in-depth, security-hardened** design tailored for static single-page application (SPA) architectures and WebGL graphics runtimes.

### Implemented Security Protections

1. **Content Security Policy (CSP)**:
   - Configured via `<meta http-equiv="Content-Security-Policy">` in `index.html` and HTTP response headers in `public/_headers`.
   - Restricts resource loading strictly to trusted sources:
     - `default-src 'self'`
     - `script-src 'self' 'unsafe-inline'`
     - `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`
     - `font-src 'self' https://fonts.gstatic.com data:`
     - `img-src 'self' data:`
     - `connect-src 'self' ws: wss: https://fonts.googleapis.com https://fonts.gstatic.com`
     - `object-src 'none'` (disables legacy plugins like Flash or Java)
     - `media-src 'none'` (blocks audio/video media execution since all audio/video is excluded)
     - `base-uri 'self'` (prevents `<base>` tag injection attacks)
     - `frame-ancestors 'none'` (mitigates clickjacking attacks in HTTP headers)
     - `form-action 'self'`
2. **MIME Sniffing & Referrer Defense**:
   - `X-Content-Type-Options: nosniff` prevents browsers from MIME-sniffing responses away from declared content types.
   - `Referrer-Policy: strict-origin-when-cross-origin` restricts referrer leakage across cross-origin requests.
3. **Zero HTML Injection Surfaces**:
   - React manages all UI state and text nodes declaratively.
   - The codebase contains zero calls to `dangerouslySetInnerHTML`, `innerHTML`, `outerHTML`, `document.write`, or `eval()`.
4. **Hardened Git Ignore Rules**:
   - `.gitignore` strictly blocks all environment files (`.env`, `.env.local`, `.env.*.local`, `*.env`), certificates and keys (`*.pem`, `*.key`, `*.p12`, `*.pfx`), editor configurations, temporary test files, and build outputs (`dist/`).
5. **Optimized Code Splitting & WebGL Memory Pooling**:
   - `vite.config.js` separates `three` (~533 kB) and `react`/`react-dom` (~189 kB) into dedicated, long-term cacheable vendor chunks.
   - The main application entry bundle is reduced to **~56 kB** (gzip ~15 kB).
   - In `PulsarScene.js`, scratchpad math instances (`THREE.Quaternion`, `THREE.Vector3`) are pooled in module scope rather than allocated per frame inside the `animate()` loop, eliminating ~120 heap allocations per second and preventing garbage collector stutter.

### What Must NEVER Be Committed

- API keys, service tokens, personal access tokens (PATs), or passwords.
- Private encryption keys and certificates (`.pem`, `.key`, `.p12`, `.pfx`).
- Local `.env` or `.env.*` configuration files containing credentials.
- Test artifacts or debugging session dumps.

### Environment Variable Rules

- Vite embeds all variables prefixed with `VITE_` into client-side bundles in plain text at build time.
- **Rule**: NEVER store sensitive API secrets, server credentials, or private access tokens in `VITE_*` environment variables.
- Environment variables should only be used for public, non-sensitive application settings (e.g. public API endpoints or feature flags).

### Deployment-Level Protections

When hosting the production build on a CDN or static hosting platform (e.g., Cloudflare Pages, Netlify, Vercel, Nginx, AWS CloudFront), ensure the following server-side response headers are enforced:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`

> Note: The included `public/_headers` file automatically applies these response headers for platforms supporting `_headers` syntax (Cloudflare Pages, Netlify).

### GitHub Repository Security Recommendations

For repository governance and automated supply-chain security on GitHub:

1. **Branch Protection Rules** (for `main` branch):
   - Require pull request reviews before merging.
   - Require status checks (build & automated tests) to pass before merging.
   - Restrict force pushes and branch deletions.
2. **Secret Scanning & Push Protection**:
   - Enable GitHub Secret Scanning to detect accidentally committed tokens or credentials.
   - Enable Push Protection to block commits that contain detected credentials before they reach the remote repository.
3. **Dependabot Alerts & Updates**:
   - Enable Dependabot alerts and automated security updates to receive notices when security advisories affect project dependencies.

### Pre-Release Security Checklist

Before releasing updates or deploying to production, execute the following audit routine:

```bash
# 1. Verify dependency security
pnpm audit

# 2. Check that no secret or environment files are tracked
git status --ignored
git ls-files | grep -E "(\.env|key|secret|token|credential)"

# 3. Verify clean production build and chunk sizes
pnpm build

# 4. Verify test suite, WebGL lifecycle, and responsive UI
node scratch/test_phase11.cjs
```




