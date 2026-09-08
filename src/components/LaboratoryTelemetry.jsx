import { useEffect, useRef, useState } from 'react'
import InfoTooltip from './InfoTooltip'

function LaboratoryTelemetry({ experiment, values = {}, onOpenExplanation }) {
  const [metrics, setMetrics] = useState({
    fps: 60,
    frameTime: 16.6,
  })
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1280,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
    dpr: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  })

  const rafIdRef = useRef(null)
  const lastSampleTimeRef = useRef(performance.now())
  const frameCountRef = useRef(0)

  // Lightweight non-allocating FPS meter updating React state strictly every 500ms
  useEffect(() => {
    lastSampleTimeRef.current = performance.now()
    frameCountRef.current = 0

    function sampleLoop(now) {
      frameCountRef.current += 1
      const delta = now - lastSampleTimeRef.current

      if (delta >= 500) {
        const calculatedFps = Math.round((frameCountRef.current * 1000) / delta)
        const avgFrameMs = Number((delta / frameCountRef.current).toFixed(1))
        setMetrics({
          fps: Math.min(144, Math.max(1, calculatedFps)),
          frameTime: avgFrameMs,
        })
        frameCountRef.current = 0
        lastSampleTimeRef.current = now
      }

      rafIdRef.current = requestAnimationFrame(sampleLoop)
    }

    rafIdRef.current = requestAnimationFrame(sampleLoop)

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [])

  // Viewport resize tracking with passive listener
  useEffect(() => {
    function handleResize() {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
        dpr: Number((window.devicePixelRatio || 1).toFixed(1)),
        isMobile: window.innerWidth < 768,
      })
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const entityText = viewport.isMobile
    ? experiment?.entityBudget?.mobile || 'MOBILE BUDGET'
    : experiment?.entityBudget?.desktop || 'GPU STREAM'

  // Map controls to baseline defaults for delta calculation
  const controls = experiment?.controls || []
  const defaultMap = {}
  controls.forEach((ctrl) => {
    defaultMap[ctrl.id] = ctrl.default
  })

  // Format parameter readouts with deltas
  const paramEntries = Object.entries(values).slice(0, 3)

  // Physical measurement calculation per experiment
  const getPhysicsReadout = () => {
    const expId = experiment?.id || 'planet'
    const grav = values.gravityStrength ?? 1.0
    const rot = values.rotationSpeed ?? 1.0
    const mass = values.objectMass ?? 50
    const spin = values.spinVelocity ?? 1.0

    if (expId === 'planet') {
      const d = values.distance ?? 1.0
      const forceRatio = 1 / (d * d)
      const accel = (9.81 / (d * d)).toFixed(2)
      const percent = Math.round(forceRatio * 100)
      const changePct = d !== 1.0 ? `${Math.round((forceRatio - 1) * 100)}%` : '0%'
      const deltaText =
        Math.abs(d - 2.0) < 0.05
          ? 'Doubling the distance makes the gravitational force four times weaker.'
          : Math.abs(d - 0.5) < 0.05
          ? 'Halving the distance makes the gravitational force four times stronger.'
          : d > 1.05
          ? `Moving ${d.toFixed(1)}× farther reduces gravity to ${percent}% of baseline.`
          : d < 0.95
          ? `Moving ${d.toFixed(1)}× closer increases gravity to ${percent}% of baseline.`
          : 'Baseline distance: gravitational attraction is at 100%.'

      return {
        name: 'Gravitational Force',
        value: `${forceRatio.toFixed(2)}× baseline`,
        unit: 'Force Ratio',
        explanation: 'How strongly the planet pulls the object.',
        before: '1.00× (100%)',
        change: changePct,
        subMetrics: [
          { label: 'DISTANCE', val: `${d.toFixed(2)}× baseline`, note: 'Distance between planet and object' },
          { label: 'GRAVITATIONAL FORCE', val: `${forceRatio.toFixed(2)}× baseline (${percent}%)`, note: 'How strongly the planet pulls the object' },
          { label: 'ACCELERATION', val: `${accel} m/s²`, note: 'Rate object accelerates toward planet' },
        ],
        plainTakeaway: deltaText,
      }
    }
    if (expId === 'solar-system') {
      return {
        name: 'Gravitational Pull (F / F₀)',
        value: `${grav.toFixed(2)} F₀`,
        unit: 'Force Ratio',
        explanation: 'How strongly the Sun pulls on the orbiting body.',
        before: '1.00 F₀',
        change: grav !== 1.0 ? `${((grav - 1) * 100).toFixed(0)}%` : '0%',
      }
    }
    if (expId === 'galaxy') {
      const coreMass = values.coreMass ?? 1.0
      const vel = (220 * Math.sqrt(coreMass)).toFixed(0)
      return {
        name: 'Orbital Velocity',
        value: `${vel} km/s`,
        unit: 'km/s',
        explanation: 'Tangential speed of outer stars in the galactic disk.',
        before: '220 km/s',
        change: coreMass !== 1.0 ? `${((Math.sqrt(coreMass) - 1) * 100).toFixed(0)}%` : '0%',
      }
    }
    if (expId === 'pulsar') {
      return {
        name: 'Pulse Frequency',
        value: `${(1.4 * spin).toFixed(2)} Hz`,
        unit: 'Hertz',
        explanation: 'Lighthouse beam sweep rate per second.',
        before: '1.40 Hz',
        change: spin !== 1.0 ? `${((spin - 1) * 100).toFixed(0)}%` : '0%',
      }
    }
    if (expId === 'fluid') {
      const visc = values.viscosity ?? 1.0
      return {
        name: 'Fluid Circulation',
        value: `${(1.0 / visc).toFixed(2)} Re`,
        unit: 'Reynolds',
        explanation: 'Ratio of fluid flow momentum to viscous drag.',
        before: '1.00 Re',
        change: visc !== 1.0 ? `${(((1 / visc) - 1) * 100).toFixed(0)}%` : '0%',
      }
    }
    return {
      name: 'Spacetime Curvature',
      value: `${(2.95 * (values.schwarzschildRadius ?? 1.0)).toFixed(1)} km`,
      unit: 'Horizon Radius',
      explanation: 'Distance where escape velocity reaches the speed of light.',
      before: '2.95 km',
      change: (values.schwarzschildRadius ?? 1.0) !== 1.0 ? `${(((values.schwarzschildRadius ?? 1.0) - 1) * 100).toFixed(0)}%` : '0%',
    }
  }

  const readout = getPhysicsReadout()

  return (
    <aside aria-label="Laboratory telemetry" className="lab-telemetry">
      {/* Primary Educational Measurement */}
      <div className="telemetry-item telemetry-primary-measurement">
        <span className="telemetry-label">
          WHAT AM I MEASURING?
          <InfoTooltip
            definition="Primary physical observable calculated in real-time from active simulation variables."
            significance={readout.explanation}
            title={readout.name}
          />
        </span>
        <div className="telemetry-main-row">
          <span className="telemetry-measure-name">{readout.name}</span>
          <strong className="telemetry-val telemetry-val-highlight">{readout.value}</strong>
        </div>
        <p className="telemetry-sub-desc">{readout.explanation}</p>
      </div>

      {/* Delta Comparison */}
      <div className="telemetry-item telemetry-delta-card">
        <span className="telemetry-label">BASELINE COMPARISON</span>
        <div className="telemetry-delta-row">
          <span className="delta-stat">Before: <strong>{readout.before}</strong></span>
          <span className="delta-stat">Now: <strong>{readout.value}</strong></span>
          <span className={`delta-badge ${readout.change.startsWith('-') ? 'is-negative' : ''}`}>
            Change: {readout.change}
          </span>
        </div>
        {readout.plainTakeaway && (
          <p className="telemetry-plain-takeaway">{readout.plainTakeaway}</p>
        )}
      </div>

      {readout.subMetrics && (
        <div className="telemetry-item telemetry-submetrics-card">
          <span className="telemetry-label">KEY MEASUREMENTS</span>
          <div className="telemetry-submetrics-list">
            {readout.subMetrics.map((sm) => (
              <div className="submetric-row" key={sm.label}>
                <span className="submetric-label">{sm.label}:</span>
                <strong className="submetric-val">{sm.val}</strong>
                <small className="submetric-note">{sm.note}</small>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subdued Technical & Diagnostics */}
      <div className="telemetry-item telemetry-fps telemetry-subtle">
        <span className="telemetry-label">SYSTEM / FPS</span>
        <span className="telemetry-val">
          <i className="telemetry-dot" aria-hidden="true" />
          {metrics.fps} FPS <small>({metrics.frameTime}ms)</small>
        </span>
      </div>

      <div className="telemetry-item telemetry-viewport telemetry-subtle">
        <span className="telemetry-label">VIEWPORT</span>
        <span className="telemetry-val">
          {viewport.width}×{viewport.height} <small>DPR {viewport.dpr}</small>
        </span>
      </div>
    </aside>
  )
}

export default LaboratoryTelemetry
