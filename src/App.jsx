import { useCallback, useEffect, useMemo, useState } from 'react'
import ExperimentControls from './components/ExperimentControls'
import ExperimentInfoPanel from './components/ExperimentInfoPanel'
import ExperimentNavigator from './components/ExperimentNavigator'
import LaboratoryTelemetry from './components/LaboratoryTelemetry'
import LabModeToggle from './components/LabModeToggle'
import PlanetDetailPanel from './components/PlanetDetailPanel'
import PlanetSelector from './components/PlanetSelector'
import SceneCanvas from './components/SceneCanvas'
import SolarSystemMiniMap from './components/SolarSystemMiniMap'
import { availableExperiments, experimentRegistry } from './experiments/registry'
import { CELESTIAL_BODIES } from './scenes/SolarSystemScene'

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

  // Solar System specific state
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const [planetStates, setPlanetStates] = useState([])
  const [sceneApi, setSceneApi] = useState(null)

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

  // Callbacks passed to active scene
  const sceneCallbacks = useMemo(() => ({
    onSelectPlanet: (planetData) => {
      setSelectedPlanet(planetData)
    },
    onTelemetry: (states) => {
      setPlanetStates(states)
    },
  }), [])

  // Global keyboard shortcut listener: Escape closes open panels
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        if (selectedPlanet) {
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
  }, [selectedPlanet, isInfoOpen, isControlsOpen, sceneApi])

  const isSolarSystem = displayedExperiment.id === 'solar-system'

  return (
    <main className={`app-shell ${labMode ? 'mode-lab' : 'mode-clean'}`}>
      <SceneCanvas
        callbacks={sceneCallbacks}
        experiment={activeExperiment}
        onSceneReady={setSceneApi}
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
        <a className="brand" href="#top" aria-label="Interactive 3D Lab home">
          <span className="brand-mark" />
          INTERACTIVE 3D LAB
        </a>

        <div className="topbar-actions">
          <LabModeToggle
            labMode={labMode}
            onToggle={() => setLabMode((prev) => !prev)}
          />

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
            onReset={handleParamReset}
            onToggleOpen={() => setIsControlsOpen((prev) => !prev)}
            values={paramsByExperiment[displayedExperiment.id] || {}}
          />
        </div>
      </header>

      {labMode && (
        <LaboratoryTelemetry
          experiment={displayedExperiment}
          values={paramsByExperiment[displayedExperiment.id] || {}}
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
          isFollowing={Boolean(currentParams.followPlanet)}
          onClose={() => {
            setSelectedPlanet(null)
            sceneApi?.selectPlanet?.(null)
          }}
          onFocus={handleFocusPlanet}
          onToggleFollow={handleToggleFollow}
          planet={selectedPlanet}
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
        onSelect={setActiveExperiment}
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
