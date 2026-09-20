import { useEffect, useMemo, useState } from 'react'
import { EXPERIMENT_MISSIONS_DATA, getMissionGoverningLaw } from '../physics/experimentMissions'
import PhysicsExplanation from './PhysicsExplanation'
import { VectorSym, UnitVectorSym, Fraction, QuantityBadge } from './GravitationIndex/MathEquation'
import { renderMathExpression, cleanLatexString, formatInlineMathText } from './MathFormulaRenderer'

const SUB_MAP = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  'ₑ': 'e', 'ₚ': 'p'
}

export function formatMathSymbol(symbolStr) {
  if (!symbolStr) return null
  if (typeof symbolStr !== 'string') return symbolStr
  const str = String(symbolStr).trim()

  // Fractions / ratios like 'a_c / a_c0' or 'I / I₀'
  if (str.includes('/')) {
    const parts = str.split('/')
    return (
      <span className="math-ratio-sym">
        {formatMathSymbol(parts[0].trim())}
        <span className="math-ratio-slash"> / </span>
        {formatMathSymbol(parts[1].trim())}
      </span>
    )
  }

  // Vector with combining arrow or literal arrow
  if (str.includes('\u20D7') || str.includes('⃗')) {
    const cleanSym = str.replace(/[\u20D7⃗]/g, '')
    if (cleanSym.includes('_')) {
      const parts = cleanSym.split('_')
      return <VectorSym symbol={parts[0]} sub={parts.slice(1).join('_')} />
    }
    return <VectorSym symbol={cleanSym} />
  }

  // Unit vector with hat
  if (str.includes('\u0302') || str.includes('̂')) {
    const cleanSym = str.replace(/[\u0302̂]/g, '')
    if (cleanSym.includes('_')) {
      const parts = cleanSym.split('_')
      return <UnitVectorSym symbol={parts[0]} sub={parts.slice(1).join('_')} />
    }
    return <UnitVectorSym symbol={cleanSym} />
  }

  // Unicode subscripts like τ₀, ω₀, R₀, g₀, I₀
  const subMatch = str.match(/^([a-zA-Zα-ωΑ-ΩΔ]+)([₀-₉ₑₚ]+)$/)
  if (subMatch) {
    const base = subMatch[1]
    const rawSub = subMatch[2].split('').map((ch) => SUB_MAP[ch] || ch).join('')
    return (
      <span className="math-sub-wrap">
        <span className="math-base-sym">{base}</span>
        <sub className="math-sub">{rawSub}</sub>
      </span>
    )
  }

  if (str.includes('_')) {
    const parts = str.split('_')
    const base = parts[0]
    const sub = parts.slice(1).join('_')
    return (
      <span className="math-sub-wrap">
        <span className="math-base-sym">{base}</span>
        <sub className="math-sub">{sub}</sub>
      </span>
    )
  }
  return str
}

/**
 * Format numerical/scientific readout values with clean typography,
 * separate unit/note badges, and zero slashed zeros.
 */
export function formatReadoutValue(valStr) {
  if (!valStr) return null
  const str = String(valStr).trim()

  // Match optional parenthetical descriptor at the end, e.g. (nominal envelope), (dense), (≫ H), (+153%), (constant)
  const parenMatch = str.match(/^(.*?)\s*(\([^(]+\))$/)
  const mainText = parenMatch ? parenMatch[1].trim() : str
  const pillText = parenMatch ? parenMatch[2].trim() : null

  // Helper to parse superscripts, subscripts, greek symbols, and exponents inside text
  const parseValueSegments = (text) => {
    const tokens = []
    const regex = /(10⁻[¹²³⁴⁵⁶⁷⁸⁹⁰]+|e⁻[¹²³⁴⁵⁶⁷⁸⁹⁰]+|[a-zA-Z0-9\/]+²|[a-zA-Z0-9\/]+³|([ττωωgGRrsI])([₀₁₂₃₄₅₆₇₈₉])|([a-zA-Zα-ωΑ-Ω])_([a-zA-Z0-9]+))/g
    let last = 0
    let m
    let k = 0

    while ((m = regex.exec(text)) !== null) {
      if (m.index > last) {
        tokens.push(text.slice(last, m.index))
      }
      if (m[1] && m[1].startsWith('10⁻')) {
        const exp = m[1].slice(3).replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]/g, (ch) => ({ '¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁰':'0' }[ch] || ch))
        tokens.push(<span key={k++} className="readout-sci-exp">10<sup>−{exp}</sup></span>)
      } else if (m[1] && m[1].startsWith('e⁻')) {
        const exp = m[1].slice(2).replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]/g, (ch) => ({ '¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁰':'0' }[ch] || ch))
        tokens.push(<span key={k++} className="readout-exp">e<sup>−{exp}</sup></span>)
      } else if (m[1] && (m[1].endsWith('²') || m[1].endsWith('³'))) {
        const base = m[1].slice(0, -1)
        const sup = m[1].slice(-1) === '²' ? '2' : '3'
        tokens.push(<span key={k++}>{base}<sup>{sup}</sup></span>)
      } else if (m[2] && m[3]) {
        const subDigit = SUB_MAP[m[3]] || m[3]
        tokens.push(
          <span key={k++} className="readout-sub-wrap">
            <span className="readout-base">{m[2]}</span>
            <sub className="readout-sub">{subDigit}</sub>
          </span>
        )
      } else if (m[4] && m[5]) {
        tokens.push(
          <span key={k++} className="readout-sub-wrap">
            <span className="readout-base">{m[4]}</span>
            <sub className="readout-sub">{m[5]}</sub>
          </span>
        )
      }
      last = m.index + m[0].length
    }
    if (last < text.length) {
      tokens.push(text.slice(last))
    }
    return tokens.length > 0 ? tokens : text
  }

  return (
    <span className="readout-val-container">
      <span className="readout-val-primary">{parseValueSegments(mainText)}</span>
      {pillText && (
        <span className="readout-val-pill">{pillText}</span>
      )}
    </span>
  )
}


const DEFAULT_SYMBOL_GUIDE = [
  { symbol: '₀', symbolNode: <>₀</>, name: 'baseline / reference value' },
  { symbol: 'Δ', symbolNode: <>Δ</>, name: 'change from the baseline' },
  { symbol: 'ₑ', symbolNode: <>ₑ</>, name: 'equatorial' },
  { symbol: 'ₚ', symbolNode: <>ₚ</>, name: 'polar' },
  { symbol: 'eff', symbolNode: <>eff</>, name: 'effective / net value' },
  { symbol: 'ω', symbolNode: <>ω</>, name: 'angular speed' },
  { symbol: 'a_c', symbolNode: <>a<sub>c</sub></>, name: 'centrifugal acceleration' },
]

const MISSION_PROBLEM_BREAKDOWNS = {
  'planet-mission-1': {
    given: [
      {
        symbol: 'ω₀',
        symbolNode: <>ω<sub>0</sub></>,
        name: 'Baseline angular speed',
        val: '7.292 × 10⁻⁵ rad/s',
        label: 'Baseline Angular Speed (ω₀)',
      },
      {
        symbol: 'ω',
        symbolNode: <>ω</>,
        name: 'Target angular speed',
        val: '2.5 ω₀ = 18.23 × 10⁻⁵ rad/s',
        label: 'Target Rotation Rate (ω)',
      },
      {
        symbol: 'R₀',
        symbolNode: <>R<sub>0</sub></>,
        name: 'Mean Earth radius',
        val: '6,371 km',
        label: 'Mean Radius (R₀)',
      },
      {
        symbol: 'g₀',
        symbolNode: <>g<sub>0</sub></>,
        name: 'Baseline surface gravity',
        val: '9.78 m/s²',
        label: 'Baseline Surface Gravity (g₀)',
      },
    ],
    find: [
      {
        symbol: 'a_c / a_c0',
        symbolNode: <>a<sub>c</sub> / a<sub>c0</sub></>,
        name: 'Centrifugal acceleration multiplier',
        val: '6.25×',
        label: 'Centrifugal Acceleration Multiplier',
      },
      {
        symbol: 'ΔR_e',
        symbolNode: <>ΔR<sub>e</sub></>,
        name: 'Equatorial radius change',
        val: '+115 km',
        trend: 'up',
        arrow: '↑',
        label: 'Equatorial Radius Expansion',
      },
      {
        symbol: 'ΔR_p',
        symbolNode: <>ΔR<sub>p</sub></>,
        name: 'Polar radius change',
        val: '−57 km',
        trend: 'down',
        arrow: '↓',
        label: 'Polar Flattening',
      },
      {
        symbol: 'g_eff',
        symbolNode: <>g<sub>eff</sub></>,
        name: 'Net equatorial surface gravity',
        val: '9.60 m/s²',
        label: 'Net Equatorial Surface Gravity',
      },
    ],
    symbolGuide: [
      { symbol: '₀', symbolNode: <>₀</>, name: 'baseline / reference value' },
      { symbol: 'Δ', symbolNode: <>Δ</>, name: 'change from the baseline' },
      { symbol: 'ₑ', symbolNode: <>ₑ</>, name: 'equatorial' },
      { symbol: 'ₚ', symbolNode: <>ₚ</>, name: 'polar' },
      { symbol: 'eff', symbolNode: <>eff</>, name: 'effective / net value' },
      { symbol: 'ω', symbolNode: <>ω</>, name: 'angular speed' },
      { symbol: 'a_c', symbolNode: <>a<sub>c</sub></>, name: 'centrifugal acceleration' },
    ],
    concept: 'Rotation creates an outward inertial centrifugal acceleration perpendicular to the rotational axis. Because centrifugal acceleration scales quadratically with angular velocity (a_c = ω² R), increasing spin to 2.5× magnifies outward centrifugal force by (2.5)² = 6.25×. Under hydrostatic equilibrium, this outward force forces mass toward the equator, creating an oblate spheroid and diminishing net downward surface gravity.',
    governingEquations: [
      {
        id: 'eq-ac',
        name: 'Centripetal & Centrifugal Acceleration Law',
        badge: 'QUADRATIC ACCELERATION',
        type: 'scalar',
        render: (
          <div className="math-display-row">
            <span className="math-sym">a<sub>c</sub></span>
            <span className="math-op">=</span>
            <span className="math-sym">ω²</span>
            <span className="math-sym">R</span>
          </div>
        ),
        subtext: 'Centrifugal acceleration scales quadratically with angular rotation rate ω at distance R from the rotation axis.',
        where: [
          { symbol: 'a_c', name: 'Centrifugal acceleration', unit: 'm/s²', type: 'scalar' },
          { symbol: 'ω', name: 'Angular velocity (spin rate)', unit: 'rad/s', type: 'scalar' },
          { symbol: 'R', name: 'Equatorial distance from rotation axis', unit: 'm or km', type: 'scalar' },
        ],
      },
      {
        id: 'eq-omega',
        name: 'Angular Velocity Definition',
        badge: 'KINEMATIC DEFINITION',
        type: 'scalar',
        render: (
          <div className="math-display-row">
            <span className="math-sym">ω</span>
            <span className="math-op">=</span>
            <Fraction num={<span>Δθ</span>} den={<span>Δt</span>} />
            <span className="math-op">=</span>
            <Fraction num={<span>2π</span>} den={<span>T</span>} />
          </div>
        ),
        subtext: 'Angular velocity is the time rate of angular displacement, inversely proportional to rotational period T.',
        where: [
          { symbol: 'ω', name: 'Angular velocity', unit: 'rad/s', type: 'scalar' },
          { symbol: 'Δθ', name: 'Angular rotation angle', unit: 'rad', type: 'scalar' },
          { symbol: 'Δt', name: 'Elapsed time interval', unit: 's', type: 'scalar' },
          { symbol: 'T', name: 'Sidereal rotational period', unit: 's', type: 'scalar' },
        ],
      },
      {
        id: 'eq-scaling',
        name: 'Kinematic Scaling Ratio (2.5× Rotation)',
        badge: 'EQUATORIAL RATIO',
        type: 'scalar',
        render: (
          <div className="math-display-row">
            <Fraction
              num={<span>a<sub>c</sub>(2.5×)</span>}
              den={<span>a<sub>c</sub>(1.0×)</span>}
            />
            <span className="math-op">=</span>
            <span className="math-paren">(</span>
            <Fraction num={<span>ω</span>} den={<span>ω₀</span>} />
            <span className="math-paren">)</span>
            <sup className="math-sup">2</sup>
            <span className="math-op">=</span>
            <span className="math-sym">(2.5)²</span>
            <span className="math-op">=</span>
            <strong className="math-sym highlight text-cyan">6.25×</strong>
          </div>
        ),
        subtext: 'Outward centrifugal force at the equator multiplies to (2.5)² = 6.25× of baseline, counteracting gravity.',
        where: [
          { symbol: 'ω₀', name: 'Baseline rotational velocity (1.0×)', unit: '7.292 × 10⁻⁵ rad/s', type: 'scalar' },
          { symbol: 'ω', name: 'Calibrated rotational velocity (2.5×)', unit: '18.23 × 10⁻⁵ rad/s', type: 'scalar' },
          { symbol: '6.25×', name: 'Quadratic outward force amplification ratio', unit: 'dimensionless', type: 'scalar' },
        ],
      },
      {
        id: 'eq-geff',
        name: 'Effective Equatorial Surface Gravity',
        badge: 'NET GRAVITY',
        type: 'scalar',
        render: (
          <div className="math-display-row">
            <span className="math-sym">g<sub>eff</sub></span>
            <span className="math-op">≈</span>
            <Fraction num={<span>G · M</span>} den={<span>R<sub>e</sub>²</span>} />
            <span className="math-op">−</span>
            <span className="math-sym">ω² R<sub>e</sub></span>
            <span className="math-op">≈</span>
            <span className="math-sym">9.78</span>
            <span className="math-op">−</span>
            <span className="math-sym">0.18</span>
            <span className="math-op">=</span>
            <strong className="math-sym highlight text-amber">9.60 m/s²</strong>
          </div>
        ),
        subtext: 'Centrifugal force counteracts gravity, causing a net 0.18 m/s² reduction in equatorial weight.',
        where: [
          { symbol: 'g_eff', name: 'Effective surface gravity at equator', unit: 'm/s²', type: 'scalar' },
          { symbol: 'G', name: 'Universal gravitational constant', unit: '6.674 × 10⁻¹¹ N·m²/kg²', type: 'scalar' },
          { symbol: 'M', name: 'Planetary mass', unit: '5.972 × 10²⁴ kg', type: 'scalar' },
          { symbol: 'R_e', name: 'Equatorial planetary radius', unit: '6,378 km', type: 'scalar' },
          { symbol: 'ω² R_e', name: 'Centrifugal reduction term', unit: '0.18 m/s²', type: 'scalar' },
        ],
      },
      {
        id: 'eq-vector-g',
        name: 'Gravitational Field (Vector Formulation)',
        badge: 'VECTOR LAW',
        type: 'vector',
        render: (
          <div className="math-display-row">
            <VectorSym symbol="g" />
            <span className="math-op">=</span>
            <Fraction num={<VectorSym symbol="F" />} den={<span className="math-sym">m</span>} />
            <span className="math-op">=</span>
            <span className="math-minus-sign">−</span>
            <Fraction num={<span>G · M</span>} den={<span>r²</span>} />
            <UnitVectorSym symbol="r" />
          </div>
        ),
        subtext: 'Gravitational field vector g⃗ is defined per unit mass and points inward toward the planetary centre of mass.',
        where: [
          { symbol: 'g⃗', name: 'Gravitational field vector', unit: 'N/kg or m/s²', type: 'vector' },
          { symbol: 'F⃗', name: 'Gravitational force vector on test mass', unit: 'N', type: 'vector' },
          { symbol: 'm', name: 'Test mass', unit: 'kg', type: 'scalar' },
          { symbol: 'r̂', name: 'Radial unit vector pointing outward', unit: 'dimensionless', type: 'vector' },
          { symbol: '− sign', name: 'Negative sign represents pull directed inward toward source mass', unit: 'direction' },
        ],
      },
      {
        id: 'eq-deformation',
        name: 'Hydrostatic Spheroid Deformation (Clairaut Relation)',
        badge: 'OBLATE SPHEROID',
        type: 'scalar',
        render: (
          <div className="math-display-row">
            <span className="math-sym">ΔR<sub>e</sub> = <strong className="text-green">+115 km</strong></span>
            <span className="math-sep">·</span>
            <span className="math-sym">ΔR<sub>p</sub> = <strong className="text-coral">−57 km</strong></span>
          </div>
        ),
        subtext: 'Conservation of planetary volume causes polar flattening as equatorial radius expands.',
        where: [
          { symbol: 'ΔR_e', name: 'Equatorial radius expansion (+1.8%)', unit: '+115 km', type: 'scalar' },
          { symbol: 'ΔR_p', name: 'Polar radius compression (−0.9%)', unit: '−57 km', type: 'scalar' },
          { symbol: 'f', name: 'Flattening ratio (f = (Re - Rp) / Re)', unit: '0.0265', type: 'scalar' },
        ],
      },
    ],
  },
  'planet-mission-2': {
    given: [
      {
        symbol: 'τ₀',
        symbolNode: <>τ<sub>0</sub></>,
        name: 'Baseline optical depth',
        val: '1.0 (nominal envelope)',
        label: 'Baseline Optical Depth (τ₀)',
      },
      {
        symbol: 'τ',
        symbolNode: <>τ</>,
        name: 'Target optical depth',
        val: '2.0 × τ₀ = 2.0 (dense)',
        label: 'Target Optical Depth (τ)',
      },
      {
        symbol: 'H',
        symbolNode: <>H</>,
        name: 'Atmosphere scale height',
        val: '8.5 km',
        label: 'Atmosphere Scale Height (H)',
      },
      {
        symbol: 'R',
        symbolNode: <>R</>,
        name: 'Mean planetary radius',
        val: '6,371 km',
        label: 'Mean Planetary Radius (R)',
      },
    ],
    find: [
      {
        symbol: 's_limb',
        symbolNode: <>s<sub>limb</sub></>,
        name: 'Grazing limb path length',
        val: '≈ 370 km (≫ H)',
        label: 'Grazing Limb Path Length',
      },
      {
        symbol: 'I / I₀',
        symbolNode: <>I / I<sub>0</sub></>,
        name: 'Direct transmittance ratio',
        val: 'e⁻² ≈ 0.135',
        label: 'Direct Transmittance Ratio',
      },
      {
        symbol: 'I_scatter',
        symbolNode: <>I<sub>scatter</sub></>,
        name: 'Limb scattering brightness',
        val: '2.0× amplification',
        trend: 'up',
        arrow: '↑',
        label: 'Limb Halo Scattering Brightness',
      },
    ],
    symbolGuide: [
      { symbol: '₀', symbolNode: <><sub>0</sub></>, name: 'baseline / reference value' },
      { symbol: 'τ', symbolNode: <>τ</>, name: 'optical thickness / column depth' },
      { symbol: 'H', symbolNode: <>H</>, name: 'scale height' },
      { symbol: 's', symbolNode: <>s</>, name: 'path length' },
      { symbol: 'I', symbolNode: <>I</>, name: 'light intensity' },
      { symbol: 'λ', symbolNode: <>λ</>, name: 'photon wavelength' },
    ],
    concept: 'Light passing tangentially through the atmospheric limb traverses an optical path length s ≈ √(2π R H) that is orders of magnitude longer than vertical transit. Doubling optical density doubles extinction and Rayleigh scattering along this tangent line of sight, creating an intense, radiant limb halo.',
    governingEquations: [
      {
        id: 'eq-beer',
        name: 'Beer-Lambert Extinction Law',
        badge: 'TRANSMITTANCE',
        type: 'scalar',
        render: (
          <div className="math-display-row">
            <span className="math-sym">I</span>
            <span className="math-op">=</span>
            <span className="math-sym">I₀</span>
            <span className="math-sym">e<sup>−τ</sup></span>
          </div>
        ),
        subtext: 'Direct transmission decays exponentially as optical depth τ increases.',
        where: [
          { symbol: 'I', name: 'Transmitted photon flux intensity', unit: 'W/m²', type: 'scalar' },
          { symbol: 'I₀', name: 'Incident unattenuated intensity', unit: 'W/m²', type: 'scalar' },
          { symbol: 'τ', name: 'Optical thickness / column depth', unit: 'dimensionless', type: 'scalar' },
        ],
      },
      {
        id: 'eq-tau',
        name: 'Optical Depth Integral',
        badge: 'COLUMN DENSITY',
        type: 'scalar',
        render: (
          <div className="math-display-row">
            <span className="math-sym">τ</span>
            <span className="math-op">=</span>
            <span className="math-op">∫</span>
            <span className="math-sym">ρ(z)</span>
            <span className="math-sym">κ</span>
            <span className="math-sym">dz</span>
          </div>
        ),
        subtext: 'Cumulative scattering and absorption along the line-of-sight path length.',
        where: [
          { symbol: 'τ', name: 'Total optical depth', unit: 'dimensionless', type: 'scalar' },
          { symbol: 'ρ(z)', name: 'Atmospheric density profile', unit: 'kg/m³', type: 'scalar' },
          { symbol: 'κ', name: 'Mass opacity coefficient', unit: 'm²/kg', type: 'scalar' },
        ],
      },
      {
        id: 'eq-rayleigh',
        name: 'Rayleigh Scattering Intensity',
        badge: 'WAVELENGTH SCALING',
        type: 'scalar',
        render: (
          <div className="math-display-row">
            <span className="math-sym">I<sub>scatter</sub></span>
            <span className="math-op">∝</span>
            <Fraction num={<span>1</span>} den={<span>λ⁴</span>} />
          </div>
        ),
        subtext: 'Short-wavelength blue photons scatter 10× more intensely than red, forming a cyan limb glow.',
        where: [
          { symbol: 'I_scatter', name: 'Scattered light intensity', unit: 'W/m²', type: 'scalar' },
          { symbol: 'λ', name: 'Wavelength of incident photon', unit: 'nm or m', type: 'scalar' },
        ],
      },
    ],
  },
  'planet-mission-3': {
    given: [
      {
        symbol: 'm',
        symbolNode: <>m</>,
        name: 'Object invariant mass',
        val: '50 kg (constant scalar matter)',
        label: 'Object Invariant Mass (m)',
      },
      {
        symbol: 'g_Earth',
        symbolNode: <>g<sub>Earth</sub></>,
        name: 'Earth surface gravity',
        val: '9.81 m/s²',
        label: 'Earth Surface Gravity (g_Earth)',
      },
      {
        symbol: 'g_Jup',
        symbolNode: <>g<sub>Jup</sub></>,
        name: 'Jupiter surface gravity',
        val: '24.79 m/s² (2.53× Earth)',
        label: 'Jupiter Surface Gravity (g_Jup)',
      },
    ],
    find: [
      {
        symbol: 'm_Jup',
        symbolNode: <>m<sub>Jup</sub></>,
        name: 'Object mass on Jupiter',
        val: '50 kg (Strictly Invariant)',
        label: 'Object Mass on Jupiter',
      },
      {
        symbol: 'W_Earth',
        symbolNode: <>W<sub>Earth</sub></>,
        name: 'Measured weight on Earth',
        val: '490.5 N',
        label: 'Measured Weight on Earth',
      },
      {
        symbol: 'W_Jup',
        symbolNode: <>W<sub>Jup</sub></>,
        name: 'Measured weight on Jupiter',
        val: '1,239.5 N (+153%)',
        trend: 'up',
        arrow: '↑',
        label: 'Measured Weight on Jupiter',
      },
    ],
    symbolGuide: [
      { symbol: 'm', symbolNode: <>m</>, name: 'invariant mass' },
      { symbol: 'W', symbolNode: <>W</>, name: 'gravitational weight force' },
      { symbol: 'g', symbolNode: <>g</>, name: 'surface gravity acceleration' },
      { symbol: 'G', symbolNode: <>G</>, name: 'universal gravitational constant' },
      { symbol: 'Δ', symbolNode: <>Δ</>, name: 'change from baseline' },
    ],
    concept: 'Mass (m) is an intrinsic scalar property quantifying the amount of matter and inertia in an object — it remains identical everywhere in the universe. Weight (W = mg) is the local gravitational force exerted on that mass, scaling directly with the celestial body\'s surface gravity.',
    governingEquations: [
      {
        id: 'eq-weight',
        name: 'Weight Force Equation (Mass vs Weight)',
        badge: 'FORCE LAW',
        type: 'scalar',
        render: (
          <div className="math-display-row">
            <span className="math-sym">W</span>
            <span className="math-op">=</span>
            <span className="math-sym">m</span>
            <span className="math-op">·</span>
            <span className="math-sym">g</span>
          </div>
        ),
        subtext: 'Weight is the downward gravitational pull (in Newtons, N) on invariant mass m (in kg).',
        where: [
          { symbol: 'W', name: 'Gravitational weight force', unit: 'N (Newton)', type: 'scalar' },
          { symbol: 'm', name: 'Invariant scalar mass (identical everywhere)', unit: 'kg', type: 'scalar' },
          { symbol: 'g', name: 'Local gravitational acceleration', unit: 'm/s²', type: 'scalar' },
        ],
      },
      {
        id: 'eq-surface-g',
        name: 'Universal Surface Gravitational Acceleration',
        badge: 'NEWTONIAN ACCELERATION',
        type: 'scalar',
        render: (
          <div className="math-display-row">
            <span className="math-sym">g</span>
            <span className="math-op">=</span>
            <Fraction num={<span>G · M</span>} den={<span>R²</span>} />
          </div>
        ),
        subtext: 'Surface gravitational acceleration determined by planetary mass M and radius R.',
        where: [
          { symbol: 'g', name: 'Surface gravitational acceleration', unit: 'm/s²', type: 'scalar' },
          { symbol: 'G', name: 'Universal gravitational constant', unit: '6.674 × 10⁻¹¹ N·m²/kg²', type: 'scalar' },
          { symbol: 'M', name: 'Planetary mass (Earth: 1.0 M⊕, Jupiter: 317.8 M⊕)', unit: 'kg', type: 'scalar' },
          { symbol: 'R', name: 'Planetary radius (Earth: 1.0 R⊕, Jupiter: 10.97 R⊕)', unit: 'm', type: 'scalar' },
        ],
      },
      {
        id: 'eq-vector-w',
        name: 'Weight Force Vector Formulation',
        badge: 'VECTOR LAW',
        type: 'vector',
        render: (
          <div className="math-display-row">
            <VectorSym symbol="W" />
            <span className="math-op">=</span>
            <span className="math-sym">m</span>
            <VectorSym symbol="g" />
            <span className="math-op">=</span>
            <span className="math-minus-sign">−</span>
            <Fraction num={<span>G · M · m</span>} den={<span>R²</span>} />
            <UnitVectorSym symbol="r" />
          </div>
        ),
        subtext: 'Downward weight force vector W⃗ points toward the center of mass along radial unit vector -r̂.',
        where: [
          { symbol: 'W⃗', name: 'Downward gravitational weight force vector', unit: 'N', type: 'vector' },
          { symbol: 'g⃗', name: 'Downward gravitational acceleration vector', unit: 'm/s²', type: 'vector' },
          { symbol: 'm', name: 'Scalar mass (invariant)', unit: 'kg', type: 'scalar' },
          { symbol: 'r̂', name: 'Outward radial unit vector', unit: 'dimensionless', type: 'vector' },
        ],
      },
      {
        id: 'eq-calc',
        name: 'Quantitative Weight Comparison (50 kg Mass)',
        badge: 'EMPIRICAL CALCULATION',
        type: 'scalar',
        render: (
          <div className="math-display-row">
            <span className="math-sym">W<sub>Earth</sub> = 50 × 9.81 = <strong className="text-amber">490.5 N</strong></span>
            <span className="math-sep">|</span>
            <span className="math-sym">W<sub>Jup</sub> = 50 × 24.79 = <strong className="text-green">1,239.5 N</strong></span>
          </div>
        ),
        subtext: 'Weight increases by 2.53× on Jupiter while mass remains strictly 50 kg.',
        where: [
          { symbol: 'W_Earth', name: 'Measured weight on Earth (g = 9.81 m/s²)', unit: '490.5 N', type: 'scalar' },
          { symbol: 'W_Jup', name: 'Measured weight on Jupiter (g = 24.79 m/s²)', unit: '1,239.5 N', type: 'scalar' },
          { symbol: 'ΔW', name: 'Weight force increase (+153%)', unit: '+749.0 N', type: 'scalar' },
        ],
      },
    ],
  },
}

function MissionProblemHierarchy({ activeMission, expData }) {
  const breakdown = MISSION_PROBLEM_BREAKDOWNS[activeMission?.id]

  if (!breakdown) {
    const governingLaw = getMissionGoverningLaw(activeMission, expData)
    return (
      <div className="mission-hierarchy-container">
        <div className="hierarchy-section concept-section">
          <span className="hierarchy-label">CONCEPT & GOVERNING PRINCIPLE</span>
          <p className="concept-text">{expData?.learningObjective || activeMission?.observableText}</p>
        </div>
        <div className="hierarchy-section equations-section">
          <span className="hierarchy-label">GOVERNING LAW</span>
          <div className="fallback-law-card">
            <div className="fallback-law-header">
              <span className="fallback-law-badge">VERIFIED PRINCIPLE</span>
              <h4 className="fallback-law-name">{governingLaw.name}</h4>
            </div>
            <div className="fallback-law-hero">
              <div className="math-display-row hero-eq">
                {renderMathExpression(cleanLatexString(governingLaw.formula), `fallback-${activeMission?.id}`)}
              </div>
              {governingLaw.secondaryFormula && (
                <div className="fallback-law-secondary">
                  <span className="fallback-sec-label">Associated:</span>
                  <span className="fallback-sec-math">
                    {renderMathExpression(cleanLatexString(governingLaw.secondaryFormula), `fallback-sec-${activeMission?.id}`)}
                  </span>
                </div>
              )}
            </div>
            {governingLaw.description && (
              <p className="fallback-law-desc">{formatInlineMathText(governingLaw.description, `fb-desc-${activeMission?.id}`)}</p>
            )}
          </div>
        </div>
      </div>
    )
  }

  const symbolGuide = breakdown.symbolGuide || DEFAULT_SYMBOL_GUIDE

  return (
    <div className="mission-hierarchy-container" aria-label="Problem Specification and Governing Laws">
      {/* 3-COLUMN STRUCTURED READOUTS */}
      <div className="hierarchy-given-find-grid">
        {/* EXPERIMENTAL CONSTANTS & INPUTS */}
        <div className="hierarchy-section given-section">
          <div className="hierarchy-header">
            <span className="hierarchy-section-dot dot-cyan" aria-hidden="true" />
            <span className="hierarchy-title">Experimental Constants &amp; Inputs</span>
          </div>
          <div className="mission-readout-table" role="table" aria-label="Experimental Constants & Inputs">
            <div className="readout-header-row" role="row">
              <span className="readout-col-head col-sym" role="columnheader">SYMBOL</span>
              <span className="readout-col-head col-qty" role="columnheader">PHYSICAL QUANTITY</span>
              <span className="readout-col-head col-val" role="columnheader">VALUE</span>
            </div>
            <div className="readout-body" role="rowgroup">
              {breakdown.given.map((item, i) => (
                <div key={i} className="readout-row" role="row">
                  <div className="readout-cell col-sym" role="cell">
                    <code className="readout-symbol-tag">
                      {item.symbolNode || formatMathSymbol(item.symbol) || item.label}
                    </code>
                  </div>
                  <div className="readout-cell col-qty" role="cell">
                    <span className="readout-name-text">{item.name || item.label}</span>
                  </div>
                  <div className="readout-cell col-val" role="cell">
                    <span className="readout-val-text highlight-cyan">{formatReadoutValue(item.val)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TARGET PHYSICAL QUANTITIES */}
        <div className="hierarchy-section find-section">
          <div className="hierarchy-header">
            <span className="hierarchy-section-dot dot-amber" aria-hidden="true" />
            <span className="hierarchy-title">Target Physical Quantities</span>
          </div>
          <div className="mission-readout-table" role="table" aria-label="Target Physical Quantities">
            <div className="readout-header-row" role="row">
              <span className="readout-col-head col-sym" role="columnheader">SYMBOL</span>
              <span className="readout-col-head col-qty" role="columnheader">PHYSICAL QUANTITY</span>
              <span className="readout-col-head col-val" role="columnheader">RESULT</span>
            </div>
            <div className="readout-body" role="rowgroup">
              {breakdown.find.map((item, i) => (
                <div key={i} className={`readout-row ${item.trend ? `trend-${item.trend}` : ''}`} role="row">
                  <div className="readout-cell col-sym" role="cell">
                    <code className="readout-symbol-tag find-sym">
                      {item.symbolNode || formatMathSymbol(item.symbol) || item.label}
                    </code>
                  </div>
                  <div className="readout-cell col-qty" role="cell">
                    <span className="readout-name-text">{item.name || item.label}</span>
                  </div>
                  <div className="readout-cell col-val" role="cell">
                    {item.trend === 'up' && (
                      <span className="trend-badge trend-up">
                        <span className="trend-arrow" aria-hidden="true">↑</span>
                        <span className="trend-val">{formatReadoutValue(item.val)}</span>
                      </span>
                    )}
                    {item.trend === 'down' && (
                      <span className="trend-badge trend-down">
                        <span className="trend-arrow" aria-hidden="true">↓</span>
                        <span className="trend-val">{formatReadoutValue(item.val)}</span>
                      </span>
                    )}
                    {!item.trend && (
                      <span className="readout-val-text highlight-amber">{formatReadoutValue(item.val)}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SYMBOL GUIDE DIRECTLY BELOW CONSTANTS AND TARGETS */}
      {symbolGuide && symbolGuide.length > 0 && (
        <div className="mission-symbol-guide" aria-label="Symbol & Notation Guide">
          <div className="symbol-guide-header">
            <span className="symbol-guide-badge">NOTATION GUIDE</span>
            <span className="symbol-guide-title">Symbol &amp; Subscript Conventions</span>
          </div>
          <div className="symbol-guide-grid">
            {symbolGuide.map((entry, idx) => (
              <div key={idx} className="symbol-guide-chip">
                <code className="guide-sym">{entry.symbolNode || entry.symbol}</code>
                <span className="guide-eq">=</span>
                <span className="guide-meaning">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CONCEPT */}
      <div className="hierarchy-section concept-section">
        <div className="hierarchy-header">
          <span className="hierarchy-badge badge-concept">CONCEPT</span>
          <span className="hierarchy-title">Underlying Physical Mechanism</span>
        </div>
        <p className="concept-text">{breakdown.concept}</p>
      </div>

      {/* GOVERNING EQUATIONS — STRICT GRAVITATION INDEX TYPOGRAPHY */}
      <div className="hierarchy-section equations-section">
        <div className="hierarchy-header">
          <span className="hierarchy-badge badge-equation">GOVERNING EQUATIONS</span>
          <span className="hierarchy-title">Mathematical Formulation &amp; Physical Laws</span>
        </div>
        <div className="equations-cards-grid">
          {breakdown.governingEquations.map((eq) => (
            <article key={eq.id} className="grav-card grav-formula-card mission-eq-card">
              <div className="grav-card-header-row">
                <h4 className="grav-card-title">{eq.name}</h4>
                <div className="eq-header-badges">
                  {eq.type && <QuantityBadge type={eq.type} />}
                  {eq.badge && <span className="grav-hierarchy-pill">{eq.badge}</span>}
                </div>
              </div>

              <div className="grav-formula-hero">
                <div className="math-eq-row hero-eq">
                  {eq.render}
                </div>
              </div>

              {eq.subtext && (
                <p className="grav-formula-statement">{eq.subtext}</p>
              )}

              {eq.where && eq.where.length > 0 && (
                <div className="grav-vars-container">
                  <span className="grav-vars-header">WHERE / SYMBOL MEANING:</span>
                  <div className="grav-vars-table">
                    {eq.where.map((v, vIdx) => (
                      <div key={vIdx} className="grav-var-row">
                        <code className="grav-var-symbol">{formatMathSymbol(v.symbol)}</code>
                        <span className="grav-var-name">{v.name}</span>
                        {v.unit && <span className="grav-var-unit">[{v.unit}]</span>}
                        {v.type && <QuantityBadge type={v.type} />}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

function MissionEquationsReference({ activeMission }) {
  const breakdown = MISSION_PROBLEM_BREAKDOWNS[activeMission?.id]
  if (!breakdown) return null

  return (
    <div className="mission-predict-equations-ref" aria-label="Governing Equations Reference">
      <div className="predict-ref-header">
        <span className="hierarchy-badge badge-equation">GOVERNING LAWS REFERENCE</span>
        <span className="predict-ref-title">Review the mathematical principles before predicting:</span>
      </div>
      <div className="predict-eq-grid">
        {breakdown.governingEquations.slice(0, 2).map((eq) => (
          <div key={eq.id} className="grav-card grav-formula-card predict-eq-chip">
            <div className="grav-card-header-row">
              <span className="grav-card-title">{eq.name}</span>
              {eq.type && <QuantityBadge type={eq.type} />}
            </div>
            <div className="grav-formula-hero is-compact">
              <div className="math-eq-row">
                {eq.render}
              </div>
            </div>
            {eq.where && eq.where.length > 0 && (
              <div className="predict-where-brief">
                <span className="where-label">Where:</span>
                <div className="where-token-list">
                  {eq.where.slice(0, 3).map((w, wIdx) => (
                    <div key={wIdx} className="where-token">
                      <code className="readout-symbol-tag is-compact">
                        {formatMathSymbol(w.symbol)}
                      </code>
                      <span className="where-sep">=</span>
                      <span className="where-name">{w.name}</span>
                      {w.unit && <span className="where-unit">({w.unit})</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const STEPS = [
  { id: 'question', label: 'QUESTION' },
  { id: 'predict', label: 'PREDICT' },
  { id: 'run', label: 'RUN' },
  { id: 'observe', label: 'OBSERVE' },
  { id: 'measure', label: 'MEASURE' },
  { id: 'understand', label: 'UNDERSTAND' },
  { id: 'conclusion', label: 'CONCLUSION' },
]

function ExperimentMission({
  isOpen,
  onClose,
  experiment,
  currentParams = {},
  onApplyParams,
  onRecordObservation,
  sceneApi,
  initialStepIndex = 0,
  initialMissionIndex = 0,
  onTransitionTo3D,
}) {
  const expData = EXPERIMENT_MISSIONS_DATA[experiment.id] || EXPERIMENT_MISSIONS_DATA.planet
  const missions = expData.missions || []
  const [selectedMissionIndex, setSelectedMissionIndex] = useState(0)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [userPrediction, setUserPrediction] = useState(null)
  const [hasRunSimulation, setHasRunSimulation] = useState(false)
  const [recordedSuccess, setRecordedSuccess] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  // Phase 3A: Scientific Mission Simulation State Pipeline
  const [isSimulating, setIsSimulating] = useState(false)
  const [angularVelocity, setAngularVelocity] = useState(2.5)
  const [targetOblateness, setTargetOblateness] = useState(0.0)
  const [simulationStatus, setSimulationStatus] = useState('idle') // 'idle' | 'calibrating' | 'running'

  // Synchronize incoming step or mission index
  useEffect(() => {
    if (isOpen) {
      if (typeof initialStepIndex === 'number' && initialStepIndex >= 0) {
        setCurrentStepIndex(initialStepIndex)
        if (initialStepIndex >= 2) {
          setHasRunSimulation(true)
          setSimulationStatus('running')
        }
      }
      if (typeof initialMissionIndex === 'number' && initialMissionIndex >= 0) {
        setSelectedMissionIndex(initialMissionIndex)
      }
    }
  }, [isOpen, initialStepIndex, initialMissionIndex])

  const activeMission = missions[selectedMissionIndex] || missions[0]

  // Reset steps and calibration if mission changes
  const handleSelectMission = (index) => {
    setSelectedMissionIndex(index)
    setCurrentStepIndex(0)
    setUserPrediction(null)
    setHasRunSimulation(false)
    setRecordedSuccess(false)
    if (sceneApi?.resetCalibration) {
      sceneApi.resetCalibration()
    }
    setIsSimulating(false)
    setSimulationStatus('idle')
    setTargetOblateness(0.0)
  }

  const handleSelectPrediction = (option) => {
    setUserPrediction(option)
  }

  const handleResetCalibration = () => {
    if (sceneApi?.resetCalibration) {
      sceneApi.resetCalibration()
    }
    setIsSimulating(false)
    setSimulationStatus('idle')
    setTargetOblateness(0.0)
    setHasRunSimulation(false)
  }

  const handleRunExperiment = () => {
    // 1. Set simulationStatus = 'calibrating'
    setSimulationStatus('calibrating')
    // 2. Set isSimulating = true
    setIsSimulating(true)

    // 3. Send angularVelocity = 2.5 to active PlanetScene & calculate targetOblateness
    const targetOmega = activeMission.targetParams?.rotationSpeed ?? 2.5
    setAngularVelocity(targetOmega)
    // Educational visualization factor for oblateness: bulgeFactor = (omega - 1.0) * 0.12
    const visualOblateness = Math.max(0, (targetOmega - 1.0) * 0.12)
    setTargetOblateness(visualOblateness)

    if (sceneApi?.setCalibration) {
      sceneApi.setCalibration({
        angularVelocity: targetOmega,
        targetOblateness: visualOblateness,
        active: true,
      })
    }

    if (activeMission.targetParams && onApplyParams) {
      onApplyParams(activeMission.targetParams)
    }

    // If solar system special API available, trigger it too
    if (experiment.id === 'solar-system' && sceneApi) {
      if (activeMission.id === 'solar-mission-1') {
        sceneApi.setBodyDistance?.('earth', 2.0)
      } else if (activeMission.id === 'solar-mission-2') {
        sceneApi.setBodyVelocity?.('earth', 0.5)
      }
    }

    // 5 & 6. 3D response started, set simulationStatus = 'running'
    setSimulationStatus('running')
    setHasRunSimulation(true)
  }

  const handleNextStep = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex((prev) => prev + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1)
    }
  }

  const handleRecordToLog = () => {
    if (onRecordObservation && activeMission) {
      const entry = {
        experimentTitle: `${experiment.index} ${experiment.name} · MISSION ${activeMission.number}`,
        parameterChanged: `${activeMission.measurement?.metric || activeMission.paramKey} calibrated to ${activeMission.measurement?.calibrated || 'Target'}`,
        consequence: activeMission.measurement?.physicalMeaning || activeMission.observableText,
        observed: activeMission.observableText,
        principle: expData.governingPrinciple,
        curriculum: `${expData.name}: ${expData.theme}`,
      }
      onRecordObservation(entry)
      setRecordedSuccess(true)
    }
  }

  if (!isOpen) return null

  const currentStep = STEPS[currentStepIndex]

  return (
    <div
      aria-label="Experiment Mission Drawer"
      className={`mission-overlay-backdrop ${isMinimized ? 'is-minimized' : ''}`}
      role="dialog"
    >
      <div className={`mission-drawer ${isMinimized ? 'is-minimized' : ''}`}>
        {/* Header */}
        <div className="mission-drawer-header">
          <div className="mission-title-area">
            <span className="mission-badge">
              <span className="mission-badge-dot" aria-hidden="true" />
              SCIENTIFIC MISSION · {experiment.index} {experiment.name}
            </span>
            <h2 className="mission-drawer-heading">{activeMission.title}</h2>
            {isMinimized && (
              <span className="mission-minimized-step">
                STEP {String(currentStepIndex + 1).padStart(2, '0')}/07: {currentStep.label}
              </span>
            )}
          </div>
          <div className="mission-header-actions">
            <button
              aria-label={isMinimized ? 'Expand mission drawer' : 'Minimize mission drawer'}
              className="mission-minimize-btn"
              onClick={() => setIsMinimized((prev) => !prev)}
              type="button"
            >
              {isMinimized ? '▴ EXPAND' : '▾ MINIMIZE'}
            </button>
            <button
              aria-label="Close mission drawer"
              className="mission-close-btn"
              onClick={onClose}
              type="button"
            >
              ✕
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>

        {/* Mission Tabs if multiple missions exist */}
        {missions.length > 1 && (
          <div aria-label="Available missions" className="mission-selection-tabs" role="tablist">
            {missions.map((m, idx) => (
              <button
                aria-selected={selectedMissionIndex === idx}
                className={`mission-tab ${selectedMissionIndex === idx ? 'is-active' : ''}`}
                key={m.id}
                onClick={() => handleSelectMission(idx)}
                role="tab"
                type="button"
              >
                MISSION {m.number}: {m.title.slice(0, 24)}...
              </button>
            ))}
          </div>
        )}

        {/* Progress Stepper Bar */}
        <div aria-label="Mission investigation progress" className="mission-stepper" role="group">
          {STEPS.map((step, idx) => {
            const isCompleted = idx < currentStepIndex
            const isCurrent = idx === currentStepIndex
            const stepNumberStr = String(idx + 1).padStart(2, '0')
            return (
              <button
                aria-current={isCurrent ? 'step' : undefined}
                className={`mission-step-pill ${isCompleted ? 'is-done' : ''} ${isCurrent ? 'is-active' : ''}`}
                key={step.id}
                onClick={() => {
                  // Only allow jumping back or forward if prediction/run happened
                  if (idx <= currentStepIndex || (idx === 2 && userPrediction) || (idx > 2 && hasRunSimulation)) {
                    setCurrentStepIndex(idx)
                  }
                }}
                type="button"
              >
                <span className="step-num">{isCompleted ? `✓ ${stepNumberStr}` : stepNumberStr}</span>
                <span className="step-label">{step.label}</span>
              </button>
            )
          })}
        </div>

        {/* Dynamic Body Content according to active step */}
        <div className="mission-content-area">
          {/* STEP 01: QUESTION */}
          {currentStep.id === 'question' && (
            <div className="mission-step-view">
              <span className="step-view-tag">STEP 01 · SCIENTIFIC QUESTION</span>
              <h3 className="step-view-question">{activeMission.question}</h3>

              {/* Structured Problem Breakdown & High-Visibility Equations */}
              <MissionProblemHierarchy
                activeMission={activeMission}
                expData={expData}
              />

              <div className="mission-classroom-task">
                <span className="task-badge">YOUR TASK</span>
                <ol className="task-steps-list">
                  <li>Study the problem specification and governing mathematical laws above.</li>
                  <li>Formulate your scientific hypothesis based on the equations.</li>
                  <li>Run the 3D simulation to calibrate variables in real time.</li>
                  <li>Observe how the physical planetary body deforms and responds on canvas.</li>
                  <li>Measure the quantitative delta between baseline and calibrated states.</li>
                </ol>
              </div>

              <div className="step-actions">
                <button
                  className="step-primary-btn"
                  onClick={() => setCurrentStepIndex(1)}
                  type="button"
                >
                  PROCEED TO PREDICT →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PREDICT (Phase 15: 4 Choices, Non-Punitive Feedback) */}
          {currentStep.id === 'predict' && (
            <div className="mission-step-view">
              <span className="step-view-tag">STEP 02 · FORMULATE YOUR PREDICTION</span>
              <p className="predict-prompt">{activeMission.hypothesisPrompt}</p>

              {/* Governing Equations Reference for Informed Hypothesis */}
              <MissionEquationsReference activeMission={activeMission} />

              <div className="prediction-options-grid" role="radiogroup">
                {activeMission.predictions.map((opt) => {
                  const isSelected = userPrediction?.id === opt.id
                  return (
                    <button
                      aria-checked={isSelected}
                      className={`prediction-option-card ${isSelected ? 'is-selected' : ''}`}
                      key={opt.id}
                      onClick={() => handleSelectPrediction(opt)}
                      role="radio"
                      type="button"
                    >
                      <span className="option-indicator">{isSelected ? '◉' : '○'}</span>
                      <span className="option-text">{opt.text}</span>
                    </button>
                  )
                })}
              </div>

              {userPrediction && (
                <div className="prediction-feedback-card">
                  <span className="feedback-tag">
                    {userPrediction.isCorrect ? '✓ SCIENTIFIC HYPOTHESIS ALIGNED' : 'ℹ SCIENTIFIC REASONING NOTE'}
                  </span>
                  <p className="feedback-text">{userPrediction.rationale}</p>
                </div>
              )}

              <div className="step-actions">
                <button
                  className="step-secondary-btn"
                  onClick={handlePrevStep}
                  type="button"
                >
                  ← BACK
                </button>
                <button
                  className="step-primary-btn"
                  disabled={!userPrediction}
                  onClick={() => setCurrentStepIndex(2)}
                  type="button"
                >
                  CONFIRM HYPOTHESIS & CALIBRATE →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: RUN (Phase 14 & 3A: Apply Variable Calibration & 3D Execution) */}
          {currentStep.id === 'run' && (
            <div className="mission-step-view">
              <span className="step-view-tag">STEP 03 · EXECUTE VARIABLE CALIBRATION</span>
              <h3 className="step-view-title">Apply Experimental Parameters</h3>
              <p className="step-view-desc">
                Execute the target calibration in the live 3D simulation to test your hypothesis:
              </p>

              <div className="calibration-summary-card">
                <div className="calib-row">
                  <span className="calib-label">PARAMETER TARGET</span>
                  <strong className="calib-val">{activeMission.measurement?.metric || activeMission.paramKey}</strong>
                </div>
                <div className="calib-row">
                  <span className="calib-label">TARGET VALUE</span>
                  <strong className="calib-val highlight">{activeMission.measurement?.calibrated || '2.5×'}</strong>
                </div>
              </div>

              {/* Phase 3A: Real-Time Telemetry Model (Simulation Approximation) */}
              {activeMission.id === 'planet-mission-1' && (
                <div className="telemetry-model-card">
                  <div className="telemetry-model-header">
                    <span className="telemetry-badge-sim">SIMULATION MODEL · EDUCATIONAL APPROXIMATION</span>
                    <span className={`telemetry-model-status ${simulationStatus === 'running' ? 'is-active' : ''}`}>
                      {simulationStatus === 'running' ? '● 3D CALIBRATION ACTIVE' : '○ BASELINE STATE'}
                    </span>
                  </div>

                  <div className="telemetry-comparison-grid">
                    <div className="telemetry-tier baseline-tier">
                      <span className="tier-tag">BASELINE (1.0× ROTATION)</span>
                      <div className="tier-metrics">
                        <div className="tier-metric-item">
                          <span className="metric-name">POLAR RADIUS (R<sub>p</sub>)</span>
                          <strong className="metric-num">6,371 km</strong>
                        </div>
                        <div className="tier-metric-item">
                          <span className="metric-name">EQUATORIAL RADIUS (R<sub>e</sub>)</span>
                          <strong className="metric-num">6,371 km</strong>
                        </div>
                        <div className="tier-metric-item">
                          <span className="metric-name">EQUATORIAL SURFACE GRAVITY (g<sub>eq</sub>)</span>
                          <strong className="metric-num">9.78 m/s²</strong>
                        </div>
                      </div>
                    </div>

                    <div className={`telemetry-tier calibrated-tier ${simulationStatus === 'running' ? 'is-active' : ''}`}>
                      <span className="tier-tag">
                        {simulationStatus === 'running' ? 'CALIBRATED (2.5× SPIN · OBLATE)' : 'CALIBRATED (NOT RUN YET)'}
                      </span>
                      <div className="tier-metrics">
                        <div className="tier-metric-item">
                          <span className="metric-name">POLAR RADIUS (R<sub>p</sub>)</span>
                          <strong className="metric-num highlight">
                            {simulationStatus === 'running' ? '6,314 km' : '—'}
                          </strong>
                          {simulationStatus === 'running' && <span className="metric-delta delta-neg">−57 km (−0.9%)</span>}
                        </div>
                        <div className="tier-metric-item">
                          <span className="metric-name">EQUATORIAL RADIUS (R<sub>e</sub>)</span>
                          <strong className="metric-num highlight">
                            {simulationStatus === 'running' ? '6,486 km' : '—'}
                          </strong>
                          {simulationStatus === 'running' && <span className="metric-delta delta-pos">+115 km (+1.8%)</span>}
                        </div>
                        <div className="tier-metric-item">
                          <span className="metric-name">EQUATORIAL SURFACE GRAVITY (g<sub>eq</sub>)</span>
                          <strong className="metric-num highlight">
                            {simulationStatus === 'running' ? '9.60 m/s²' : '—'}
                          </strong>
                          {simulationStatus === 'running' && <span className="metric-delta delta-gravity">−0.18 m/s² centrifugal drop</span>}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="telemetry-note">
                    * Physical safety note: Displayed 2.5× is a relative experimental multiplier over baseline sidereal rotation rate (ω₀ ≈ 7.292×10⁻⁵ rad/s). Calculated centrifugal acceleration a_c = ω²Re scales to ~6.25× baseline, reducing net downward surface gravity at the bulging equator.
                  </p>
                </div>
              )}

              {/* Phase 3A: Real-Time Execution Feedback Card */}
              {simulationStatus === 'running' && (
                <div className="mission-calib-active-card">
                  <div className="calib-active-header">
                    <span className="calib-active-badge">
                      <span className="calib-pulse-dot" />
                      ● CALIBRATION ACTIVE · ω = {angularVelocity}×
                    </span>
                  </div>
                  <div className="calib-active-grid">
                    <div className="calib-metric-pill">
                      <span className="pill-name">Rotation</span>
                      <strong className="pill-status is-active">ACTIVE ({angularVelocity}× SPIN)</strong>
                    </div>
                    <div className="calib-metric-pill">
                      <span className="pill-name">Deformation</span>
                      <strong className="pill-status is-active">ACTIVE (OBLATE SPHEROID)</strong>
                    </div>
                    <div className="calib-metric-pill">
                      <span className="pill-name">Simulation</span>
                      <strong className="pill-status is-active">RUNNING (REAL-TIME 3D)</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Prominent Governing Equations with Stacked Fractions in Step 03 */}
              {MISSION_PROBLEM_BREAKDOWNS[activeMission?.id] && (
                <div className="mission-run-equations-container">
                  <div className="run-eq-header">
                    <span className="hierarchy-badge badge-equation">GOVERNING LAWS & SCALING RATIO</span>
                    <span className="run-eq-title">Mathematical Formulation of Simulation Mechanics</span>
                  </div>
                  <div className="equations-cards-grid">
                    {MISSION_PROBLEM_BREAKDOWNS[activeMission.id].governingEquations.map((eq) => (
                      <div key={eq.id} className="mission-equation-card is-compact">
                        <div className="eq-card-header">
                          <span className="eq-card-name">{eq.name}</span>
                          {eq.badge && <span className="eq-card-badge">{eq.badge}</span>}
                        </div>
                        <div className="eq-card-body">
                          {eq.render}
                        </div>
                        <span className="eq-card-subtext">{eq.subtext}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="step-actions">
                <button
                  className="step-secondary-btn"
                  onClick={handlePrevStep}
                  type="button"
                >
                  ← BACK
                </button>
                <button
                  className={`step-primary-btn run-btn ${simulationStatus === 'running' ? 'is-active-calibrating' : ''}`}
                  onClick={handleRunExperiment}
                  type="button"
                >
                  <span>⚡</span> {simulationStatus === 'running' ? `CALIBRATION ACTIVE — ${angularVelocity}× SPIN` : 'EXECUTE 3D SIMULATION CALIBRATION →'}
                </button>
                {simulationStatus === 'running' && (
                  <>
                    <button
                      className="step-secondary-btn step-reset-btn"
                      onClick={handleResetCalibration}
                      type="button"
                    >
                      ↺ RESET CALIBRATION
                    </button>
                    <button
                      className="step-primary-btn"
                      onClick={() => setCurrentStepIndex(3)}
                      type="button"
                    >
                      PROCEED TO OBSERVE →
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {/* STEP 4: OBSERVE */}
          {currentStep.id === 'observe' && (
            <div className="mission-step-view">
              <span className="step-view-tag">STEP 04 · LIVE 3D OBSERVATION</span>
              <h3 className="step-view-title">Observe Physical Response</h3>

              {/* Observation Guidance Directive */}
              <div className="grav-card observation-guidance-card">
                <div className="grav-card-header-row">
                  <span className="hierarchy-badge badge-concept">OBSERVATION DIRECTIVE</span>
                  <span className="grav-hierarchy-pill">VISUAL COMPARISON</span>
                </div>
                <p className="observation-directive-text">
                  Compare the calibrated planet with its original spherical reference. Notice how the equatorial region expands while the polar axes compress due to the centrifugal potential <span className="math-mono">½ω²R²</span>.
                </p>
              </div>

              <div className="observation-highlight-box">
                <span className="box-badge">REAL-TIME SIMULATION FEEDBACK</span>
                <p className="box-text">
                  The active WebGL physics model has updated its numerical integration state. Watch the canvas in the background to observe the physical transformation.
                </p>
              </div>

              {/* Real-Time Telemetry with Gravitation Index Table Typography */}
              {activeMission.id === 'planet-mission-1' && (
                <article className="grav-card grav-formula-card observe-telemetry-card">
                  <div className="grav-card-header-row">
                    <h4 className="grav-card-title">Live Planetary Telemetry</h4>
                    <div className="eq-header-badges">
                      <span className="grav-hierarchy-pill">● 2.5× SPIN ACTIVE</span>
                    </div>
                  </div>

                  <div className="grav-vars-container">
                    <span className="grav-vars-header">DERIVED FROM SIMULATION STATE:</span>
                    <div className="grav-vars-table">
                      <div className="grav-var-row">
                        <code className="grav-var-symbol">
                          R<sub>p</sub>
                        </code>
                        <span className="grav-var-name">Polar Radius (Flattened)</span>
                        <span className="grav-var-unit">6,314 km (−57 km / −0.9%)</span>
                        <QuantityBadge type="scalar" />
                      </div>
                      <div className="grav-var-row">
                        <code className="grav-var-symbol">
                          R<sub>e</sub>
                        </code>
                        <span className="grav-var-name">Equatorial Radius (Bulged)</span>
                        <span className="grav-var-unit">6,486 km (+115 km / +1.8%)</span>
                        <QuantityBadge type="scalar" />
                      </div>
                      <div className="grav-var-row">
                        <code className="grav-var-symbol">
                          g<sub>eff</sub>
                        </code>
                        <span className="grav-var-name">Net Equatorial Surface Gravity</span>
                        <span className="grav-var-unit">9.60 m/s² (−0.18 m/s² drop)</span>
                        <QuantityBadge type="scalar" />
                      </div>
                    </div>
                  </div>

                  <p className="telemetry-note">
                    * Educational approximation model based on Clairaut's formula and hydrostatic equilibrium for rotating self-gravitating fluids.
                  </p>
                </article>
              )}

              <div className="step-actions">
                <button
                  className="step-secondary-btn"
                  onClick={handlePrevStep}
                  type="button"
                >
                  ← BACK
                </button>
                <button
                  className="step-primary-btn"
                  onClick={handleNextStep}
                  type="button"
                >
                  PROCEED TO MEASUREMENT →
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: MEASURE (Phase 18: Baseline vs Current Delta) */}
          {currentStep.id === 'measure' && (
            <div className="mission-step-view">
              <span className="step-view-tag">STEP 05 · QUANTITATIVE MEASUREMENTS</span>
              <h3 className="step-view-title">Empirical Delta Analysis</h3>

              <div className="measurement-table-card">
                <div className="measure-metric-header">
                  <span className="measure-metric-title">{activeMission.measurement?.metric || 'Simulation Metric'}</span>
                  <span className="measure-delta-badge">{activeMission.measurement?.delta || '+100%'}</span>
                </div>

                <div className="measure-comparison-grid">
                  <div className="measure-col">
                    <span className="col-label">BASELINE CALIBRATION</span>
                    <strong className="col-val">{activeMission.measurement?.baseline || '1.0×'}</strong>
                  </div>
                  <div className="measure-arrow" aria-hidden="true">➔</div>
                  <div className="measure-col">
                    <span className="col-label">ACTIVE VALUE</span>
                    <strong className="col-val highlight">{activeMission.measurement?.calibrated || 'Target'}</strong>
                  </div>
                </div>

                <div className="measure-meaning-row">
                  <span className="meaning-tag">PHYSICAL INTERPRETATION</span>
                  <p className="meaning-desc">{activeMission.measurement?.physicalMeaning}</p>
                </div>
              </div>

              <div className="step-actions">
                <button
                  className="step-secondary-btn"
                  onClick={handlePrevStep}
                  type="button"
                >
                  ← BACK
                </button>
                <button
                  className="step-primary-btn"
                  onClick={handleNextStep}
                  type="button"
                >
                  UNDERSTAND WHY (4-LEVEL EXPLANATION) →
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: UNDERSTAND (Phases 19 & 20: 4-Level Progressive Disclosure) */}
          {currentStep.id === 'understand' && (
            <div className="mission-step-view">
              <span className="step-view-tag">STEP 06 · CONTEXTUAL PHYSICS EXPLANATION</span>
              <PhysicsExplanation
                curriculumRef={`${experiment.name}: ${expData.theme}`}
                formula={expData.formula}
                isOpen={true}
                progressiveData={expData.progressiveExplanation}
                title={`${expData.theme} · ${expData.governingPrinciple}`}
                whatChanged={activeMission.measurement?.metric}
                whatHappened={activeMission.measurement?.physicalMeaning}
              />

              <div className="step-actions">
                <button
                  className="step-secondary-btn"
                  onClick={handlePrevStep}
                  type="button"
                >
                  ← BACK
                </button>
                <button
                  className="step-primary-btn"
                  onClick={handleNextStep}
                  type="button"
                >
                  VIEW CONCLUSION SUMMARY →
                </button>
              </div>
            </div>
          )}

          {/* STEP 7: CONCLUSION (Phase 21: Conclusion Card) */}
          {currentStep.id === 'conclusion' && (() => {
            const governingLaw = getMissionGoverningLaw(activeMission, expData)
            return (
              <div className="mission-step-view">
                <span className="step-view-tag">STEP 07 · MISSION COMPLETE</span>
                <div className="conclusion-summary-card">
                  <div className="conclusion-header">
                    <span className="conclusion-icon" aria-hidden="true">✓</span>
                    <h3 className="conclusion-title">Mission Complete: What Did You Learn?</h3>
                  </div>
                  <p className="conclusion-desc">{activeMission.conclusion}</p>

                  <div className="conclusion-takeaways">
                    <div className="takeaway-item">
                      <span className="takeaway-bullet">1</span>
                      <div className="takeaway-body">
                        <span className="takeaway-label">Hypothesis Tested:</span>
                        <span className="takeaway-value">
                          {userPrediction?.text ? (
                            formatInlineMathText(userPrediction.text, `pred-${activeMission?.id}`)
                          ) : (
                            'Tested hypothesis'
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="conclusion-law-card">
                      <div className="conclusion-law-header">
                        <span className="takeaway-bullet">2</span>
                        <div className="conclusion-law-titles">
                          <span className="conclusion-law-badge">GOVERNING LAW VERIFIED</span>
                          <h4 className="conclusion-law-title">{governingLaw.name}</h4>
                        </div>
                      </div>

                      <div className="conclusion-law-hero">
                        <div className="conclusion-law-equation">
                          {renderMathExpression(cleanLatexString(governingLaw.formula), `conclusion-law-${activeMission?.id}`)}
                        </div>
                        {governingLaw.secondaryFormula && (
                          <div className="conclusion-law-secondary">
                            <span className="conclusion-sec-label">Associated:</span>
                            <span className="conclusion-sec-math">
                              {renderMathExpression(cleanLatexString(governingLaw.secondaryFormula), `conclusion-sec-${activeMission?.id}`)}
                            </span>
                          </div>
                        )}
                      </div>

                      {governingLaw.description && (
                        <p className="conclusion-law-desc">
                          {formatInlineMathText(governingLaw.description, `conclusion-desc-${activeMission?.id}`)}
                        </p>
                      )}
                    </div>

                    <div className="takeaway-item">
                      <span className="takeaway-bullet">3</span>
                      <div className="takeaway-body">
                        <span className="takeaway-label">Quantitative Outcome:</span>
                        <span className="takeaway-value">
                          {formatInlineMathText(activeMission.measurement?.physicalMeaning || '', `outcome-${activeMission?.id}`)}
                        </span>
                      </div>
                    </div>
                  </div>

                <div className="conclusion-cta-row">
                  <button
                    className={`conclusion-record-btn ${recordedSuccess ? 'is-recorded' : ''}`}
                    disabled={recordedSuccess}
                    onClick={handleRecordToLog}
                    type="button"
                  >
                    {recordedSuccess ? '✓ RECORDED TO EXPERIMENT LOG' : '⏱ RECORD TO EXPERIMENT LOG'}
                  </button>

                  {missions.length > selectedMissionIndex + 1 ? (
                    <button
                      className="conclusion-next-btn"
                      onClick={() => handleSelectMission(selectedMissionIndex + 1)}
                      type="button"
                    >
                      TRY NEXT MISSION →
                    </button>
                  ) : (
                    <button
                      className="conclusion-next-btn"
                      onClick={onClose}
                      type="button"
                    >
                      RETURN TO EXPLORATION
                    </button>
                  )}
                </div>
              </div>

              <div className="step-actions">
                <button
                  className="step-secondary-btn"
                  onClick={handlePrevStep}
                  type="button"
                >
                  ← BACK
                </button>
                <button
                  className="step-primary-btn"
                  onClick={onClose}
                  type="button"
                >
                  CLOSE MISSION
                </button>
              </div>
            </div>
          )})()}
        </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ExperimentMission
