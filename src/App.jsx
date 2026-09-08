import { useCallback, useState } from 'react'
import ExperimentControls from './components/ExperimentControls'
import ExperimentNavigator from './components/ExperimentNavigator'
import SceneCanvas from './components/SceneCanvas'
import { availableExperiments, experimentRegistry } from './experiments/registry'

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

  const handleTransitionChange = useCallback((transitionState) => {
    setTransition(transitionState)
    if (transitionState?.phase === 'emerging') {
      setDisplayedExperiment(transitionState.experiment)
    }
  }, [])

  return (
    <main className="app-shell">
      <SceneCanvas
        experiment={activeExperiment}
        params={currentParams}
        onTransitionChange={handleTransitionChange}
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
          <span className="status"><i /> LIVE EXPERIMENT {displayedExperiment.index}</span>
          <ExperimentControls
            experiment={displayedExperiment}
            values={paramsByExperiment[displayedExperiment.id] || {}}
            onChange={handleParamChange}
            onReset={handleParamReset}
          />
        </div>
      </header>

      <section className={`hero ${transition ? 'is-transitioning' : ''}`} id="top" aria-labelledby="hero-title">
        <p className="eyebrow">{displayedExperiment.eyebrow}</p>
        <h1 id="hero-title">{displayedExperiment.titleLead}<br /><em>{displayedExperiment.titleAccent}</em></h1>
        <p className="intro">{displayedExperiment.description}</p>
        <div className="instruction"><span className="cursor-icon">⌁</span> MOVE TO EXPLORE</div>
      </section>

      <footer className="footer-note">
        <span className="footer-params">{displayedExperiment.parameters}</span>
        <span className="footer-nav-hint">EXPLORE THE INDEX</span>
      </footer>
      <ExperimentNavigator activeExperiment={activeExperiment} onSelect={setActiveExperiment} />
    </main>
  )
}

export default App

