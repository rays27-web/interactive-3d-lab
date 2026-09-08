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

  return (
    <aside aria-label="Laboratory telemetry" className="lab-telemetry">
      <div className="telemetry-item telemetry-status">
        <span className="telemetry-label">
          SYSTEM
          <InfoTooltip
            definition="Hardware-accelerated WebGL 2.0 rendering pipeline with 32-bit floating point buffers."
            significance="Executes GPU shader calculations and numerical symplectic integration."
            title="SYSTEM / WEBGL 2.0"
          />
        </span>
        <span className="telemetry-val">
          <i className="telemetry-dot" aria-hidden="true" />
          WEBGL 2.0
        </span>
      </div>

      <div className="telemetry-item telemetry-fps">
        <span className="telemetry-label">
          PERFORMANCE
          <InfoTooltip
            definition="Instantaneous animation refresh rate and frame delivery latency in milliseconds."
            significance="Guarantees real-time physics integration stability and continuous simulation flow."
            title="PERFORMANCE / FPS"
          />
        </span>
        <span className="telemetry-val telemetry-val-highlight">
          {metrics.fps} FPS <small>({metrics.frameTime}ms)</small>
        </span>
      </div>

      <div className="telemetry-item telemetry-entities">
        <span className="telemetry-label">
          SIMULATION FLUX
          <InfoTooltip
            definition="Count of active physical bodies, particles, and geometry vertices simulated."
            significance="Defines spatial resolution and particle density in the active field study."
            title="SIMULATION FLUX"
          />
        </span>
        <span className="telemetry-val" title={entityText}>
          {entityText}
        </span>
      </div>

      <div className="telemetry-item telemetry-viewport">
        <span className="telemetry-label">
          VIEWPORT
          <InfoTooltip
            definition="Display resolution and device pixel ratio (DPR) of the rendering viewport."
            significance="Calibrates camera projection aspect ratios and particle point sizes."
            title="VIEWPORT CALIBRATION"
          />
        </span>
        <span className="telemetry-val">
          {viewport.width}×{viewport.height} <small>DPR {viewport.dpr}</small>
        </span>
      </div>

      {paramEntries.length > 0 && (
        <div className="telemetry-item telemetry-params">
          <span className="telemetry-label">
            CALIBRATION DELTA
            <InfoTooltip
              definition="Comparison of active parameters against baseline reference calibration."
              onLearnMore={onOpenExplanation}
              significance="Reveals how perturbations from baseline drive physical responses."
              title="CALIBRATION DELTA"
            />
          </span>
          <span className="telemetry-val telemetry-params-list">
            {paramEntries.map(([k, v]) => {
              const base = defaultMap[k]
              let deltaStr = ''
              if (typeof v === 'number' && typeof base === 'number' && base !== 0 && v !== base) {
                const pct = ((v - base) / base) * 100
                deltaStr = ` (${pct > 0 ? '+' : ''}${Math.round(pct)}%)`
              }
              const display = typeof v === 'boolean'
                ? (v ? 'HALTED' : 'RUN')
                : typeof v === 'number'
                ? v.toFixed(1)
                : v
              return `${k.slice(0, 3).toUpperCase()}:${display}${deltaStr}`
            }).join(' · ')}
          </span>
        </div>
      )}
    </aside>
  )
}

export default LaboratoryTelemetry
