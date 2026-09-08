import { useEffect, useRef, useState } from 'react'
import ScientificIcon from './ScientificIcon'

function SignalOscilloscope({
  spinFrequency = 1.0,
  observerAngleDeg = 45,
  magneticTiltDeg = 30,
  isOpen = true,
  onClose,
}) {
  const canvasRef = useRef(null)
  const [livePulse, setLivePulse] = useState(false)
  const [pulseCount, setPulseCount] = useState(0)

  // f = spinFrequency (Hz), T = 1 / f
  const periodSec = (1 / Math.max(0.1, spinFrequency)).toFixed(2)
  const freqHz = spinFrequency.toFixed(1)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let startTime = performance.now()
    const history = new Array(180).fill(0.05)

    function renderLoop(now) {
      const t = (now - startTime) / 1000
      const phase = (t * spinFrequency * Math.PI * 2) % (Math.PI * 2)

      // Beam profile: sharp Gaussian peak when rotating beam aligns with observer
      const beamCollimation = 16.0
      // Alignment angle between rotating beam and line-of-sight
      const alignment = Math.cos(phase)
      const intensity = Math.pow(Math.max(0, (alignment + 1) / 2), beamCollimation)

      history.push(intensity)
      history.shift()

      const isPeaking = intensity > 0.65
      setLivePulse(isPeaking)
      if (isPeaking && Math.random() < 0.08) {
        setPulseCount((c) => c + 1)
      }

      // Draw oscilloscope waveform
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Gridlines
      ctx.strokeStyle = 'rgba(133, 189, 255, 0.12)'
      ctx.lineWidth = 1
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Base zero line
      ctx.strokeStyle = 'rgba(115, 255, 211, 0.25)'
      ctx.beginPath()
      ctx.moveTo(0, canvas.height - 12)
      ctx.lineTo(canvas.width, canvas.height - 12)
      ctx.stroke()

      // Trace waveform
      ctx.strokeStyle = isPeaking ? '#73ffd3' : '#85bdff'
      ctx.lineWidth = 2
      ctx.shadowColor = isPeaking ? '#73ffd3' : '#4e93ff'
      ctx.shadowBlur = isPeaking ? 8 : 2
      ctx.beginPath()

      const step = canvas.width / history.length
      for (let i = 0; i < history.length; i++) {
        const val = history[i]
        const px = i * step
        const py = canvas.height - 12 - val * (canvas.height - 24)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.stroke()
      ctx.shadowBlur = 0

      animId = requestAnimationFrame(renderLoop)
    }

    animId = requestAnimationFrame(renderLoop)
    return () => cancelAnimationFrame(animId)
  }, [spinFrequency, observerAngleDeg, magneticTiltDeg])

  if (!isOpen) return null

  return (
    <aside
      aria-label="Pulsar Signal Oscilloscope"
      className="signal-oscilloscope-card"
      role="region"
    >
      <div className="oscilloscope-header">
        <div className="oscilloscope-title-group">
          <ScientificIcon name="time" size={15} />
          <div>
            <span className="oscilloscope-tag">RADIO / SYNCHROTRON FLUX DETECTOR</span>
            <h3 className="oscilloscope-title">PERIODIC PULSE OSCILLOSCOPE</h3>
          </div>
        </div>
        {onClose && (
          <button aria-label="Close oscilloscope" className="card-close-btn" onClick={onClose} type="button">
            ✕
          </button>
        )}
      </div>

      <div className="oscilloscope-canvas-wrapper">
        <canvas
          aria-label={`Live signal trace showing pulse frequency ${freqHz} Hertz`}
          className="oscilloscope-canvas"
          height={90}
          ref={canvasRef}
          role="img"
          width={300}
        />
        <div className={`pulse-indicator-badge ${livePulse ? 'is-flashing' : ''}`}>
          <span className="indicator-dot" />
          <span>{livePulse ? 'BEAM INTERSECTING SIGHTLINE' : 'OFF-AXIS'}</span>
        </div>
      </div>

      <div className="oscilloscope-metrics-row">
        <div className="osc-metric">
          <span className="osc-metric-label">FREQUENCY (f = 1/T)</span>
          <strong className="osc-metric-val highlight">{freqHz} Hz</strong>
        </div>
        <div className="osc-metric">
          <span className="osc-metric-label">PERIOD (T)</span>
          <strong className="osc-metric-val">{periodSec} s</strong>
        </div>
        <div className="osc-metric">
          <span className="osc-metric-label">PULSE ACCUMULATION</span>
          <strong className="osc-metric-val">{pulseCount} pulses</strong>
        </div>
      </div>

      <div className="oscilloscope-explanation">
        <span className="explanation-bullet">⚛</span>
        <p className="explanation-text">
          Because the magnetic emission axis is inclined to the spin axis, collimated beams sweep through 3D space like a lighthouse beam. An observer detects distinct periodic spikes only when the beam sweeps across their line of sight.
        </p>
      </div>
    </aside>
  )
}

export default SignalOscilloscope
