import { useEffect, useRef, useState } from 'react'

function SceneCanvas({
  experiment,
  params,
  onTransitionChange,
  callbacks,
  onSceneReady,
}) {
  const containerRef = useRef(null)
  const currentExperimentId = useRef(experiment.id)
  const sceneApiRef = useRef(null)
  const [mountedExperiment, setMountedExperiment] = useState(experiment)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (experiment.id === currentExperimentId.current) return undefined

    setIsTransitioning(true)
    onTransitionChange({ isTransitioning: true, experiment, phase: 'withdrawing' })
    const switchTimer = window.setTimeout(() => {
      currentExperimentId.current = experiment.id
      setMountedExperiment(experiment)
      onTransitionChange({ isTransitioning: true, experiment, phase: 'emerging' })
    }, 330)
    const settleTimer = window.setTimeout(() => {
      setIsTransitioning(false)
      onTransitionChange(null)
    }, 720)

    return () => {
      window.clearTimeout(switchTimer)
      window.clearTimeout(settleTimer)
    }
  }, [experiment, onTransitionChange])

  useEffect(() => {
    const sceneInstance = mountedExperiment.createScene(containerRef.current, params, callbacks)
    sceneApiRef.current = sceneInstance
    onSceneReady?.(sceneInstance)

    return () => {
      if (typeof sceneInstance === 'function') {
        sceneInstance()
      } else if (sceneInstance?.dispose) {
        sceneInstance.dispose()
      }
      sceneApiRef.current = null
      onSceneReady?.(null)
    }
  }, [mountedExperiment])

  useEffect(() => {
    if (sceneApiRef.current?.updateParams && params) {
      sceneApiRef.current.updateParams(params)
    }
  }, [params])

  return <div className={`scene-canvas ${isTransitioning ? 'is-transitioning' : ''}`} ref={containerRef} aria-hidden="true" />
}

export default SceneCanvas
