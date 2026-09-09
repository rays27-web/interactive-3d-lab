import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ExperimentControls from './components/ExperimentControls'
import ExperimentInfoPanel from './components/ExperimentInfoPanel'
import ExperimentNavigator from './components/ExperimentNavigator'
import LaboratoryTelemetry from './components/LaboratoryTelemetry'
import LabModeToggle from './components/LabModeToggle'
import PlanetDetailPanel from './components/PlanetDetailPanel'
import PlanetSelector from './components/PlanetSelector'
import SceneCanvas from './components/SceneCanvas'
import SolarSystemMiniMap from './components/SolarSystemMiniMap'
import SolarSystemToolbar from './components/SolarSystemToolbar'
import PhysicsInspector from './components/PhysicsInspector'
import MeasurementOverlay from './components/MeasurementOverlay'
import ExperimentHistory from './components/ExperimentHistory'
import ExperimentChallenge from './components/ExperimentChallenge'
import AskTheLab from './components/AskTheLab'
import ExperimentMission from './components/ExperimentMission'
import ExperimentHeader from './components/ExperimentHeader'
import PlanetComparisonCard from './components/PlanetComparisonCard'
import SignalOscilloscope from './components/SignalOscilloscope'
import ScientificIcon from './components/ScientificIcon'
import GravityFieldInspector from './components/GravityFieldInspector'
import { PLANETS_DATA } from './data/planets'
import { availableExperiments, experimentRegistry } from './experiments/registry'
import { CELESTIAL_BODIES } from './scenes/SolarSystemScene'
import { CELESTIAL_PHYSICS_DATA } from './physics/celestialConstants'

function getDefaultParams(experiment) {
  const defaults = {}
  experiment.controls?.forEach((ctrl) => {
    defaults[ctrl.id] = ctrl.default
  })
  return defaults
}

function App() {
  const [activeExperiment, setActiveExperiment] = useState(availableExperiments[0])
  const [displayedExperiment, setDisplayedExperiment] = useState(availableExperiments[0])
  const [transition, setTransition] = useState(null)
  const [labMode, setLabMode] = useState(true)
  const [isControlsOpen, setIsControlsOpen] = useState(false)
  const [isInfoOpen, setIsInfoOpen] = useState(false)

  // Phase 12 & 14: Physics Laboratory & Missions state
  const [isMissionOpen, setIsMissionOpen] = useState(false)
  const [isPhysicsOpen, setIsPhysicsOpen] = useState(false)
  const [isMeasureOpen, setIsMeasureOpen] = useState(false)
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const [isChallengeOpen, setIsChallengeOpen] = useState(false)
  const [isAskLabOpen, setIsAskLabOpen] = useState(false)
  const [isIndexOpen, setIsIndexOpen] = useState(false)

  // Phase 29 & 38: Planet and Pulsar dedicated laboratory instruments
  const [selectedPlanetComparisonId, setSelectedPlanetComparisonId] = useState('earth')
  const [objectMassKg, setObjectMassKg] = useState(70)
  const [isPlanetCardOpen, setIsPlanetCardOpen] = useState(false)
  const [isOscilloscopeOpen, setIsOscilloscopeOpen] = useState(false)

  // Phase 1.1: Gravity Field Inspector panel state & auto-collapse
  const [isInspectorUserCollapsed, setIsInspectorUserCollapsed] = useState(false)
  const [isAutoCollapsedByOverlay, setIsAutoCollapsedByOverlay] = useState(false)
  const prevHasActiveOverlayRef = useRef(false)

  const hasActiveOverlay = Boolean(
    isHistoryOpen ||
    isPhysicsOpen ||
    isControlsOpen ||
    isMeasureOpen ||
    isChallengeOpen ||
    isInfoOpen ||
    isAskLabOpen ||
    isMissionOpen ||
    isPlanetCardOpen ||
    isIndexOpen
  )

  useEffect(() => {
    const wasActive = prevHasActiveOverlayRef.current
    prevHasActiveOverlayRef.current = hasActiveOverlay

    if (!wasActive && hasActiveOverlay) {
      // Major overlay opened: auto-collapse if currently open
      if (!isInspectorUserCollapsed) {
        setIsAutoCollapsedByOverlay(true)
      }
    } else if (wasActive && !hasActiveOverlay) {
      // Overlays closed: restore if it was auto-collapsed
      if (isAutoCollapsedByOverlay) {
        setIsAutoCollapsedByOverlay(false)
      }
    }
  }, [hasActiveOverlay, isInspectorUserCollapsed, isAutoCollapsedByOverlay])

  const isInspectorCollapsed = isInspectorUserCollapsed || isAutoCollapsedByOverlay

  const handleToggleInspectorCollapse = useCallback(() => {
    if (isInspectorCollapsed) {
      // Student manually expanded it: override any overlay collapse and remember preference
      setIsInspectorUserCollapsed(false)
      setIsAutoCollapsedByOverlay(false)
    } else {
      // Student manually collapsed it
      setIsInspectorUserCollapsed(true)
      setIsAutoCollapsedByOverlay(false)
    }
  }, [isInspectorCollapsed])

  const [selectedPhysicsTarget, setSelectedPhysicsTarget] = useState(CELESTIAL_PHYSICS_DATA[3]) // Earth default
  const [experimentHistory, setExperimentHistory] = useState(() => [
    {
      id: 'init-1',
      timestamp: '12:00:00',
      experiment: '06 SOLAR SYSTEM',
      parameter: 'Initial Orbital Distance (Earth)',
      prevValue: '1.00 AU',
      newValue: '1.00 AU',
      measuredResult: '1.00 F₀ (Baseline Gravitational Attraction)',
      explanation: 'Established baseline gravitational force F₀ for circular Earth orbit at 1.0 AU.',
    },
  ])

  // Solar System specific state
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const [planetStates, setPlanetStates] = useState([])
  const [sceneApi, setSceneApi] = useState(null)
  const [solCameraView, setSolCameraView] = useState('system')
  const [solVisualToggles, setSolVisualToggles] = useState({
    showOrbits: true,
    showVelocityVectors: false,
    showGravityVectors: false,
    showDistance: false,
  })
  const [solIsPaused, setSolIsPaused] = useState(false)
  const [solSimSpeed, setSolSimSpeed] = useState(1.0)

  const [paramsByExperiment, setParamsByExperiment] = useState(() => {
    const initial = {}
    experimentRegistry.forEach((exp) => {
      initial[exp.id] = getDefaultParams(exp)
    })
    return initial
  })

  const currentParams = paramsByExperiment[activeExperiment.id] || {}

  const handleParamChange = useCallback((paramId, value) => {
    setParamsByExperiment((prev) => ({
      ...prev,
      [activeExperiment.id]: {
        ...prev[activeExperiment.id],
        [paramId]: value,
      },
    }))
  }, [activeExperiment.id])

  const handleParamReset = useCallback(() => {
    setParamsByExperiment((prev) => ({
      ...prev,
      [activeExperiment.id]: getDefaultParams(activeExperiment),
    }))
  }, [activeExperiment])

  const handleApplyPreset = useCallback((presetParams) => {
    setParamsByExperiment((prev) => ({
      ...prev,
      [activeExperiment.id]: {
        ...prev[activeExperiment.id],
        ...presetParams,
      },
    }))
  }, [activeExperiment.id])

  const handleTransitionChange = useCallback((transitionState) => {
    setTransition(transitionState)
    if (transitionState?.phase === 'emerging') {
      setDisplayedExperiment(transitionState.experiment)
      if (transitionState.experiment.id !== 'solar-system') {
        setSelectedPlanet(null)
        setPlanetStates([])
      }
      setIsPlanetCardOpen(false)
      setIsOscilloscopeOpen(false)
    }
  }, [])

  // Solar system selection and focus handlers
  const handleSelectPlanet = useCallback((planetId) => {
    if (!planetId) {
      setSelectedPlanet(null)
      sceneApi?.selectPlanet?.(null)
      return
    }
    const body = CELESTIAL_BODIES.find((b) => b.id === planetId)
    if (body) {
      setSelectedPlanet(body)
      sceneApi?.selectPlanet?.(planetId)
    }
  }, [sceneApi])

  const handleFocusPlanet = useCallback((planetId) => {
    sceneApi?.focusPlanet?.(planetId)
  }, [sceneApi])

  const handleToggleFollow = useCallback(() => {
    setParamsByExperiment((prev) => {
      const currentVal = Boolean(prev['solar-system']?.followPlanet)
      return {
        ...prev,
        'solar-system': {
          ...prev['solar-system'],
          followPlanet: !currentVal,
        },
      }
    })
  }, [])

  const handleSelectCameraView = useCallback((view) => {
    setSolCameraView(view)
    sceneApi?.setCameraView?.(view)
  }, [sceneApi])

  const handleToggleVisual = useCallback((key) => {
    setSolVisualToggles((prev) => {
      const next = { ...prev, [key]: !prev[key] }
      sceneApi?.setVisualToggles?.(next)
      return next
    })
  }, [sceneApi])

  const handleToggleSolPause = useCallback(() => {
    setSolIsPaused((prev) => {
      const next = !prev
      sceneApi?.setPaused?.(next)
      return next
    })
  }, [sceneApi])

  const handleSetSolSpeed = useCallback((speed) => {
    setSolSimSpeed(speed)
    sceneApi?.setSimulationSpeed?.(speed)
    if (solIsPaused) {
      setSolIsPaused(false)
      sceneApi?.setPaused?.(false)
    }
  }, [sceneApi, solIsPaused])

  const handleWatchPlanet = useCallback((planetId) => {
    const body = CELESTIAL_BODIES.find((b) => b.id === planetId)
    if (body) {
      setSelectedPlanet(body)
    }
    setSolCameraView('follow')
    setSolVisualToggles((prev) => {
      const next = {
        ...prev,
        showVelocityVectors: true,
        showGravityVectors: true,
        showDistance: true,
      }
      sceneApi?.setVisualToggles?.(next)
      return next
    })
    sceneApi?.watchPlanet?.(planetId)
  }, [sceneApi])

  const handleResetOrbits = useCallback(() => {
    CELESTIAL_BODIES.forEach((b) => {
      if (b.id !== 'sun') {
        sceneApi?.setBodyVelocity?.(b.id, 1.0)
        sceneApi?.setBodyDistance?.(b.id, 1.0)
      }
    })
    sceneApi?.setCameraView?.(solCameraView)
  }, [sceneApi, solCameraView])

  const handleSelectPlanetComparison = useCallback((planetId) => {
    setSelectedPlanetComparisonId(planetId)
    sceneApi?.selectPlanet?.(planetId)
    handleParamChange('selectedPlanetId', planetId)
  }, [sceneApi, handleParamChange])

  const handleChangeObjectMass = useCallback((mass) => {
    setObjectMassKg(mass)
    sceneApi?.setObjectMass?.(mass)
    handleParamChange('objectMass', mass)
  }, [sceneApi, handleParamChange])

  const handleTriggerDrop = useCallback((g) => {
    sceneApi?.triggerDrop?.(g)
  }, [sceneApi])

  // Callbacks passed to active scene
  const sceneCallbacks = useMemo(() => ({
    onSelectPlanet: (planetData) => {
      setSelectedPlanet(planetData)
    },
    onTelemetry: (states) => {
      setPlanetStates(states)
    },
  }), [])

  // Synchronize target when planet selection changes
  useEffect(() => {
    if (selectedPlanet) {
      const match = CELESTIAL_PHYSICS_DATA.find((c) => c.id === selectedPlanet.id)
      if (match) setSelectedPhysicsTarget(match)
    }
  }, [selectedPlanet])

  // Observation logging handlers
  const handleAddObservation = useCallback((customEntry) => {
    const now = new Date()
    const timeStr = now.toTimeString().split(' ')[0]
    const target = selectedPlanet || selectedPhysicsTarget
    const currentSpeed = currentParams.simulationSpeed || 1.0
    const currentGravity = currentParams.gravityStrength || 1.0

    let newEntry
    if (customEntry && customEntry.experimentTitle) {
      newEntry = {
        id: `obs-${Date.now()}`,
        timestamp: timeStr,
        experiment: customEntry.experimentTitle,
        parameter: customEntry.parameterChanged || 'Parameter Adjustment',
        prevValue: 'Baseline 1.00×',
        newValue: customEntry.parameterChanged,
        measuredResult: customEntry.consequence || 'Live 3D result verified',
        observed: customEntry.observed,
        principle: customEntry.principle,
        curriculum: customEntry.curriculum,
      }
    } else {
      newEntry = {
        id: `obs-${Date.now()}`,
        timestamp: timeStr,
        experiment: displayedExperiment.name,
        parameter: `Target: ${target?.name || 'Primary'} (Gravity: ${(currentGravity * 100).toFixed(0)}%)`,
        prevValue: 'Baseline 1.0×',
        newValue: `${currentGravity.toFixed(2)}× G`,
        measuredResult: `${(currentGravity * 1.0).toFixed(2)} F₀`,
        observed: `Dynamic orbital state under ${currentSpeed.toFixed(1)}× time compression.`,
        principle: 'F = G·(M·m)/r²',
        explanation: `Observed dynamic state under ${currentSpeed.toFixed(1)}× simulation time compression and ${(currentGravity * 100).toFixed(0)}% gravitational coupling.`,
      }
    }

    setExperimentHistory((prev) => [newEntry, ...prev.slice(0, 49)])
  }, [displayedExperiment, selectedPlanet, selectedPhysicsTarget, currentParams])

  const handleClearHistory = useCallback(() => {
    setExperimentHistory([])
  }, [])

  // Global keyboard shortcut listener: Escape closes open panels
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        if (isIndexOpen) {
          setIsIndexOpen(false)
        } else if (isMissionOpen) {
          setIsMissionOpen(false)
        } else if (isAskLabOpen) {
          setIsAskLabOpen(false)
        } else if (isPhysicsOpen) {
          setIsPhysicsOpen(false)
        } else if (isMeasureOpen) {
          setIsMeasureOpen(false)
        } else if (isHistoryOpen) {
          setIsHistoryOpen(false)
        } else if (isChallengeOpen) {
          setIsChallengeOpen(false)
        } else if (selectedPlanet) {
          setSelectedPlanet(null)
          sceneApi?.selectPlanet?.(null)
        } else if (isInfoOpen) {
          setIsInfoOpen(false)
        } else if (isControlsOpen) {
          setIsControlsOpen(false)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [
    isIndexOpen,
    isMissionOpen,
    isAskLabOpen,
    isPhysicsOpen,
    isMeasureOpen,
    isHistoryOpen,
    isChallengeOpen,
    selectedPlanet,
    isInfoOpen,
    isControlsOpen,
    sceneApi,
  ])

  const isSolarSystem = displayedExperiment.id === 'solar-system'

  const handleSceneReady = (api) => {
    setSceneApi(api)
    if (typeof window !== 'undefined') {
      window.__testSceneApi = api
    }
  }

  return (
    <main className={`app-shell ${labMode ? 'mode-lab' : 'mode-clean'}`}>
      <SceneCanvas
        callbacks={sceneCallbacks}
        experiment={activeExperiment}
        onSceneReady={handleSceneReady}
        onTransitionChange={handleTransitionChange}
        params={currentParams}
      />

      {transition && (
        <div className="transition-status" role="status">
          <span>INITIALIZING EXPERIMENT {transition.experiment.index}</span>
          <strong>GENERATING {transition.experiment.name}</strong>
        </div>
      )}

      <header className="topbar">
        <div className="topbar-left">
          <a className="brand" href="#top" aria-label="Interactive 3D Lab home">
            <span className="brand-mark" />
            INTERACTIVE 3D LAB
          </a>

          <button
            aria-controls="experiment-index-drawer"
            aria-expanded={isIndexOpen}
            aria-label="Open experiment index"
            className={`topbar-index-btn ${isIndexOpen ? 'is-active' : ''}`}
            onClick={() => setIsIndexOpen((prev) => !prev)}
            type="button"
          >
            <span aria-hidden="true" className="index-btn-icon">☰</span>
            <span>INDEX</span>
          </button>
        </div>

        <div className="topbar-actions">
          <LabModeToggle
            labMode={labMode}
            onToggle={() => setLabMode((prev) => !prev)}
          />

          {/* Phase 2: Physics Laboratory Tools & Supporting Information */}
          {labMode && (
            <div aria-label="Physics Laboratory Tools" className="physics-nav-cluster" role="group">
              {/* Supporting Information Segmented Group: [ LOG ] [ PHYSICS ] [ VISUAL ] */}
              <div
                aria-label="Supporting Information Panels"
                className="supporting-info-segment"
                role="tablist"
              >
                <button
                  aria-expanded={isHistoryOpen}
                  aria-selected={isHistoryOpen}
                  className={`physics-nav-btn segment-tab-btn ${isHistoryOpen ? 'is-active' : ''}`}
                  onClick={() => {
                    const next = !isHistoryOpen
                    setIsHistoryOpen(next)
                    if (next) {
                      setIsPhysicsOpen(false)
                      setIsControlsOpen(false)
                      setIsMissionOpen(false)
                      setIsMeasureOpen(false)
                      setIsChallengeOpen(false)
                      setIsAskLabOpen(false)
                    }
                  }}
                  role="tab"
                  title="Observation Log & Recorded Notes"
                  type="button"
                >
                  <ScientificIcon name="clipboard" size={13} className="nav-btn-icon" />
                  <span>LOG</span>
                </button>

                <button
                  aria-expanded={isPhysicsOpen}
                  aria-selected={isPhysicsOpen}
                  className={`physics-nav-btn segment-tab-btn ${isPhysicsOpen ? 'is-active' : ''}`}
                  onClick={() => {
                    const next = !isPhysicsOpen
                    setIsPhysicsOpen(next)
                    if (next) {
                      setIsHistoryOpen(false)
                      setIsControlsOpen(false)
                      setIsMissionOpen(false)
                      setIsMeasureOpen(false)
                      setIsChallengeOpen(false)
                      setIsAskLabOpen(false)
                    }
                  }}
                  role="tab"
                  title="Physics Inspector & Reference Laws"
                  type="button"
                >
                  <ScientificIcon name="atom" size={13} className="nav-btn-icon" />
                  <span>PHYSICS</span>
                </button>

                <button
                  aria-expanded={isControlsOpen}
                  aria-selected={isControlsOpen}
                  className={`physics-nav-btn segment-tab-btn ${isControlsOpen ? 'is-active' : ''}`}
                  onClick={() => {
                    const next = !isControlsOpen
                    setIsControlsOpen(next)
                    if (next) {
                      setIsHistoryOpen(false)
                      setIsPhysicsOpen(false)
                      setIsMissionOpen(false)
                      setIsMeasureOpen(false)
                      setIsChallengeOpen(false)
                      setIsAskLabOpen(false)
                    }
                  }}
                  role="tab"
                  title="Visual Parameters & Controls"
                  type="button"
                >
                  <span className="segment-icon" aria-hidden="true">⌁</span>
                  <span>VISUAL</span>
                </button>
              </div>

              {/* Secondary / Auxiliary Exploratory Tools */}
              <div className="auxiliary-nav-group">
                <button
                  aria-expanded={isMissionOpen}
                  className={`physics-nav-btn ${isMissionOpen ? 'is-active' : ''}`}
                  onClick={() => {
                    const next = !isMissionOpen
                    setIsMissionOpen(next)
                    if (next) {
                      setIsPhysicsOpen(false)
                      setIsMeasureOpen(false)
                      setIsHistoryOpen(false)
                      setIsChallengeOpen(false)
                      setIsAskLabOpen(false)
                      setIsControlsOpen(false)
                    }
                  }}
                  type="button"
                >
                  <ScientificIcon name="target" size={13} className="nav-btn-icon" />
                  <span>MISSION</span>
                </button>

                <button
                  aria-expanded={isMeasureOpen}
                  className={`physics-nav-btn ${isMeasureOpen ? 'is-active' : ''}`}
                  onClick={() => {
                    const next = !isMeasureOpen
                    setIsMeasureOpen(next)
                    if (next) {
                      setIsMissionOpen(false)
                      setIsPhysicsOpen(false)
                      setIsHistoryOpen(false)
                      setIsChallengeOpen(false)
                      setIsAskLabOpen(false)
                      setIsControlsOpen(false)
                    }
                  }}
                  type="button"
                >
                  <ScientificIcon name="ruler" size={13} className="nav-btn-icon" />
                  <span>MEASURE</span>
                </button>

                <button
                  aria-expanded={isChallengeOpen}
                  className={`physics-nav-btn ${isChallengeOpen ? 'is-active' : ''}`}
                  onClick={() => {
                    const next = !isChallengeOpen
                    setIsChallengeOpen(next)
                    if (next) {
                      setIsMissionOpen(false)
                      setIsPhysicsOpen(false)
                      setIsMeasureOpen(false)
                      setIsHistoryOpen(false)
                      setIsAskLabOpen(false)
                      setIsControlsOpen(false)
                    }
                  }}
                  type="button"
                >
                  <ScientificIcon name="planet" size={13} className="nav-btn-icon" />
                  <span>DEMOS</span>
                </button>

                <button
                  aria-expanded={isAskLabOpen}
                  className={`physics-nav-btn ${isAskLabOpen ? 'is-active' : ''}`}
                  onClick={() => {
                    const next = !isAskLabOpen
                    setIsAskLabOpen(next)
                    if (next) {
                      setIsMissionOpen(false)
                      setIsPhysicsOpen(false)
                      setIsMeasureOpen(false)
                      setIsHistoryOpen(false)
                      setIsChallengeOpen(false)
                      setIsControlsOpen(false)
                    }
                  }}
                  type="button"
                >
                  <ScientificIcon name="atom" size={13} className="nav-btn-icon" />
                  <span>ASK THE LAB</span>
                </button>

                {displayedExperiment.id === 'planet' && (
                  <button
                    aria-expanded={isPlanetCardOpen}
                    className={`physics-nav-btn ${isPlanetCardOpen ? 'is-active' : ''}`}
                    onClick={() => setIsPlanetCardOpen((prev) => !prev)}
                    type="button"
                  >
                    <ScientificIcon name="ruler" size={13} className="nav-btn-icon" />
                    <span>APPARATUS</span>
                  </button>
                )}

                {displayedExperiment.id === 'pulsar' && (
                  <button
                    aria-expanded={isOscilloscopeOpen}
                    className={`physics-nav-btn ${isOscilloscopeOpen ? 'is-active' : ''}`}
                    onClick={() => setIsOscilloscopeOpen((prev) => !prev)}
                    type="button"
                  >
                    <ScientificIcon name="time" size={13} className="nav-btn-icon" />
                    <span>OSCILLOSCOPE</span>
                  </button>
                )}
              </div>
            </div>
          )}

          <button
            aria-controls="dossier-panel"
            aria-expanded={isInfoOpen}
            className={`dossier-trigger ${isInfoOpen ? 'is-open' : ''}`}
            onClick={() => setIsInfoOpen((prev) => !prev)}
            type="button"
          >
            <span className="dossier-trigger-icon" aria-hidden="true">✦</span>
            <span>DOSSIER</span>
          </button>

          <span className="status"><i /> LIVE EXP {displayedExperiment.index}</span>

          <ExperimentControls
            experiment={displayedExperiment}
            isOpen={isControlsOpen}
            onApplyPreset={handleApplyPreset}
            onChange={handleParamChange}
            onLearnMore={() => setIsPhysicsOpen(true)}
            onReset={handleParamReset}
            onToggleOpen={() => setIsControlsOpen((prev) => !prev)}
            values={paramsByExperiment[displayedExperiment.id] || {}}
          />
        </div>
      </header>

      {labMode && (
        <LaboratoryTelemetry
          experiment={displayedExperiment}
          onOpenExplanation={() => setIsPhysicsOpen(true)}
          values={paramsByExperiment[displayedExperiment.id] || {}}
        />
      )}

      {/* Solar System Specific HUD: Physics Toolbar */}
      {isSolarSystem && labMode && (
        <SolarSystemToolbar
          cameraView={solCameraView}
          isPaused={solIsPaused}
          onResetOrbits={handleResetOrbits}
          onSelectCameraView={handleSelectCameraView}
          onSetSpeed={handleSetSolSpeed}
          onTogglePause={handleToggleSolPause}
          onToggleVisual={handleToggleVisual}
          selectedPlanet={selectedPlanet}
          simSpeed={solSimSpeed}
          toggles={solVisualToggles}
        />
      )}

      {/* Solar System Specific HUD: Mini-Map */}
      {isSolarSystem && labMode && (
        <SolarSystemMiniMap
          onSelectPlanet={handleSelectPlanet}
          planetStates={planetStates}
          selectedPlanetId={selectedPlanet?.id}
        />
      )}

      {/* Solar System Specific HUD: Planet Details */}
      {isSolarSystem && labMode && selectedPlanet && (
        <PlanetDetailPanel
          isFollowing={solCameraView === 'follow'}
          isPaused={solIsPaused}
          onClose={() => {
            setSelectedPlanet(null)
            sceneApi?.selectPlanet?.(null)
            if (solCameraView === 'follow') {
              handleSelectCameraView('system')
            }
          }}
          onFocus={handleFocusPlanet}
          onSetSpeed={handleSetSolSpeed}
          onToggleFollow={handleToggleFollow}
          onTogglePause={handleToggleSolPause}
          onWatchPlanet={handleWatchPlanet}
          planet={selectedPlanet}
          sceneApi={sceneApi}
          simulationSpeed={solSimSpeed}
        />
      )}

      {/* Phase 12–16: Physics Laboratory & Missions Overlays */}
      {labMode && (
        <>
          <ExperimentMission
            currentParams={currentParams}
            experiment={displayedExperiment}
            isOpen={isMissionOpen}
            onApplyParams={handleApplyPreset}
            onClose={() => setIsMissionOpen(false)}
            onRecordObservation={handleAddObservation}
            sceneApi={sceneApi}
          />

          <PhysicsInspector
            isOpen={isPhysicsOpen}
            onClose={() => setIsPhysicsOpen(false)}
            onSelectTarget={setSelectedPhysicsTarget}
            target={selectedPlanet || selectedPhysicsTarget}
          />

          <MeasurementOverlay
            activeTarget={selectedPlanet || selectedPhysicsTarget}
            isOpen={isMeasureOpen}
            onClose={() => setIsMeasureOpen(false)}
            sceneApi={sceneApi}
            simulationDistance={selectedPlanet?.orbitRadius || 11.18}
            simulationSpeed={selectedPlanet?.orbitalSpeed || 9.45}
          />

          <ExperimentHistory
            activeExperiment={displayedExperiment}
            history={experimentHistory}
            isOpen={isHistoryOpen}
            onAddObservation={handleAddObservation}
            onClearHistory={handleClearHistory}
            onClose={() => setIsHistoryOpen(false)}
          />

          <ExperimentChallenge
            isOpen={isChallengeOpen}
            onClose={() => setIsChallengeOpen(false)}
            onRecordObservation={handleAddObservation}
            sceneApi={sceneApi}
          />

          <AskTheLab
            isOpen={isAskLabOpen}
            onClose={() => setIsAskLabOpen(false)}
            onOpenChallengeWithIndex={() => {
              setIsChallengeOpen(true)
            }}
            onRecordObservation={handleAddObservation}
            onSelectExperiment={(expId) => {
              const exp = availableExperiments.find((e) => e.id === expId)
              if (exp) setActiveExperiment(exp)
            }}
            sceneApi={sceneApi}
          />

          {/* Phase 59 & Phase 1.1: 3D Gravity Field Chamber Inspector */}
          {displayedExperiment.id === 'planet' && labMode && (
            <GravityFieldInspector
              hasActiveOverlay={hasActiveOverlay}
              isCollapsed={isInspectorCollapsed}
              objectMassKg={objectMassKg}
              onSelectPlanet={handleSelectPlanetComparison}
              onToggleCollapse={handleToggleInspectorCollapse}
              onTriggerDrop={handleTriggerDrop}
              planet={PLANETS_DATA.find((p) => p.id === selectedPlanetComparisonId) || PLANETS_DATA[2]}
            />
          )}

          {/* Phase 29: Planet Comparison Card (Mass vs Weight Apparatus) */}
          {displayedExperiment.id === 'planet' && isPlanetCardOpen && (
            <PlanetComparisonCard
              isPlanetExperiment={true}
              objectMassKg={objectMassKg}
              onChangeObjectMass={handleChangeObjectMass}
              onClose={() => setIsPlanetCardOpen(false)}
              onSelectPlanet={handleSelectPlanetComparison}
              onTriggerDrop={handleTriggerDrop}
              selectedPlanetId={selectedPlanetComparisonId}
            />
          )}

          {/* Phase 38: Real-Time Signal Oscilloscope for Pulsar */}
          {displayedExperiment.id === 'pulsar' && isOscilloscopeOpen && (
            <SignalOscilloscope
              isOpen={isOscilloscopeOpen}
              onClose={() => setIsOscilloscopeOpen(false)}
              spinFrequency={currentParams.spinVelocity || currentParams.rotationSpeed || 1.0}
            />
          )}
        </>
      )}

      {/* Phase 41: Compact Educational Experiment Header */}
      {labMode && (
        <ExperimentHeader
          experiment={displayedExperiment}
          onOpenMission={() => setIsMissionOpen(true)}
        />
      )}

      <section
        aria-labelledby="hero-title"
        className={`hero ${transition ? 'is-transitioning' : ''} ${labMode ? '' : 'is-clean-hero'}`}
        id="top"
      >
        <p className="eyebrow">{displayedExperiment.eyebrow}</p>
        <h1 id="hero-title">
          {displayedExperiment.titleLead}<br />
          <em>{displayedExperiment.titleAccent}</em>
        </h1>
        <p className="intro">{displayedExperiment.description}</p>
        <div className="instruction">
          <span className="cursor-icon">⌁</span> MOVE TO EXPLORE
        </div>

        {/* Phase 12 Milestone 2: Mission Control Quick Physics Explorers */}
        {labMode && (
          <div aria-label="Interactive Physics Explorers" className="hero-mission-control">
            <button
              className="mission-card"
              onClick={() => {
                setIsMissionOpen(true)
              }}
              type="button"
            >
              <div className="mission-card-top">
                <span className="mission-tag">INQUIRY</span>
                <span className="mission-formula">START MISSION</span>
              </div>
              <strong className="mission-title">SCIENTIFIC MISSION</strong>
              <span className="mission-desc">Formulate hypothesis & calibrate variables</span>
            </button>

            <button
              className="mission-card"
              onClick={() => {
                const solarExp = availableExperiments.find((e) => e.id === 'solar-system')
                if (solarExp) setActiveExperiment(solarExp)
                sceneApi?.setBodyVelocity?.('earth', 0.5)
                setIsChallengeOpen(true)
              }}
              type="button"
            >
              <div className="mission-card-top">
                <span className="mission-tag">DEMO 01</span>
                <span className="mission-formula">v = √(GM/r)</span>
              </div>
              <strong className="mission-title">EXPLORE ORBITS</strong>
              <span className="mission-desc">Simulate 0.50× orbital velocity decay</span>
            </button>

            <button
              className="mission-card"
              onClick={() => {
                const solarExp = availableExperiments.find((e) => e.id === 'solar-system')
                if (solarExp) setActiveExperiment(solarExp)
                sceneApi?.setBodyVelocity?.('earth', 1.45)
                setIsChallengeOpen(true)
              }}
              type="button"
            >
              <div className="mission-card-top">
                <span className="mission-tag">DEMO 02</span>
                <span className="mission-formula">v_e = √2 · v₀</span>
              </div>
              <strong className="mission-title">EXPLORE ESCAPE</strong>
              <span className="mission-desc">Break gravitational binding energy</span>
            </button>
          </div>
        )}
      </section>

      {/* Solar System Bottom Planet Selector */}
      {isSolarSystem && (
        <PlanetSelector
          onSelectPlanet={handleSelectPlanet}
          selectedPlanetId={selectedPlanet?.id}
        />
      )}

      <footer className="footer-note">
        <span className="footer-params">{displayedExperiment.parameters}</span>
        <span className="footer-nav-hint">EXPLORE THE INDEX</span>
      </footer>

      <ExperimentNavigator
        activeExperiment={activeExperiment}
        isOpen={isIndexOpen}
        onClose={() => setIsIndexOpen(false)}
        onOpenAskLab={() => {
          setIsAskLabOpen(true)
          setIsMissionOpen(false)
          setIsPhysicsOpen(false)
          setIsMeasureOpen(false)
          setIsHistoryOpen(false)
          setIsChallengeOpen(false)
        }}
        onOpenChallenge={() => {
          setIsChallengeOpen(true)
          setIsMissionOpen(false)
          setIsPhysicsOpen(false)
          setIsMeasureOpen(false)
          setIsHistoryOpen(false)
          setIsAskLabOpen(false)
        }}
        onOpenGravityLab={() => {
          const solarExp = availableExperiments.find((e) => e.id === 'solar-system')
          if (solarExp) setActiveExperiment(solarExp)
          setIsChallengeOpen(true)
        }}
        onOpenHistory={() => {
          setIsHistoryOpen(true)
          setIsMissionOpen(false)
          setIsPhysicsOpen(false)
          setIsMeasureOpen(false)
          setIsChallengeOpen(false)
          setIsAskLabOpen(false)
        }}
        onOpenMeasure={() => {
          setIsMeasureOpen(true)
          setIsMissionOpen(false)
          setIsPhysicsOpen(false)
          setIsHistoryOpen(false)
          setIsChallengeOpen(false)
          setIsAskLabOpen(false)
        }}
        onOpenMission={() => {
          setIsMissionOpen(true)
          setIsPhysicsOpen(false)
          setIsMeasureOpen(false)
          setIsHistoryOpen(false)
          setIsChallengeOpen(false)
          setIsAskLabOpen(false)
        }}
        onSelect={setActiveExperiment}
        onToggleOpen={() => setIsIndexOpen((prev) => !prev)}
      />

      <ExperimentInfoPanel
        experiment={displayedExperiment}
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
    </main>
  )
}

export default App
