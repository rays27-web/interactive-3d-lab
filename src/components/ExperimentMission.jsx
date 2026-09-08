import { useMemo, useState } from 'react'
import { EXPERIMENT_MISSIONS_DATA } from '../physics/experimentMissions'
import PhysicsExplanation from './PhysicsExplanation'

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
}) {
  const expData = EXPERIMENT_MISSIONS_DATA[experiment.id] || EXPERIMENT_MISSIONS_DATA.planet
  const missions = expData.missions || []
  const [selectedMissionIndex, setSelectedMissionIndex] = useState(0)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [userPrediction, setUserPrediction] = useState(null)
  const [hasRunSimulation, setHasRunSimulation] = useState(false)
  const [recordedSuccess, setRecordedSuccess] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const activeMission = missions[selectedMissionIndex] || missions[0]

  // Reset steps if mission changes
  const handleSelectMission = (index) => {
    setSelectedMissionIndex(index)
    setCurrentStepIndex(0)
    setUserPrediction(null)
    setHasRunSimulation(false)
    setRecordedSuccess(false)
  }

  const handleSelectPrediction = (option) => {
    setUserPrediction(option)
  }

  const handleRunExperiment = () => {
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
    setHasRunSimulation(true)
    setCurrentStepIndex(3) // Jump to OBSERVE
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
                STEP {currentStepIndex + 1}/7: {currentStep.label}
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
                <span className="step-num">{idx + 1}</span>
                <span className="step-label">{step.label}</span>
              </button>
            )
          })}
        </div>

        {/* Dynamic Body Content according to active step */}
        <div className="mission-content-area">
          {/* STEP 1: QUESTION */}
          {currentStep.id === 'question' && (
            <div className="mission-step-view">
              <span className="step-view-tag">STEP 1 · HYPOTHESIS & SCIENTIFIC QUESTION</span>
              <h3 className="step-view-question">{activeMission.question}</h3>
              <div className="mission-context-card">
                <span className="context-label">THEORETICAL CONTEXT</span>
                <p className="context-text">{expData.learningObjective}</p>
                <div className="context-principle">
                  <span className="principle-tag">GOVERNING LAW</span>
                  <code>{expData.formula}</code>
                </div>
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
              <span className="step-view-tag">STEP 2 · FORMULATE YOUR PREDICTION</span>
              <p className="predict-prompt">{activeMission.hypothesisPrompt}</p>

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

          {/* STEP 3: RUN (Phase 14: Apply Variable Calibration) */}
          {currentStep.id === 'run' && (
            <div className="mission-step-view">
              <span className="step-view-tag">STEP 3 · EXECUTE VARIABLE CALIBRATION</span>
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
                  <strong className="calib-val highlight">{activeMission.measurement?.calibrated || '2.0×'}</strong>
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
                  className="step-primary-btn run-btn"
                  onClick={handleRunExperiment}
                  type="button"
                >
                  <span>⚡</span> EXECUTE 3D SIMULATION CALIBRATION →
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: OBSERVE */}
          {currentStep.id === 'observe' && (
            <div className="mission-step-view">
              <span className="step-view-tag">STEP 4 · LIVE 3D OBSERVATION</span>
              <h3 className="step-view-title">Observe Physical Response</h3>
              <p className="step-view-desc">{activeMission.observableText}</p>

              <div className="observation-highlight-box">
                <span className="box-badge">REAL-TIME SIMULATION FEEDBACK</span>
                <p className="box-text">
                  The active WebGL physics model has updated its numerical integration state. Watch the canvas in the background to observe the physical transformation.
                </p>
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
                  PROCEED TO MEASUREMENT →
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: MEASURE (Phase 18: Baseline vs Current Delta) */}
          {currentStep.id === 'measure' && (
            <div className="mission-step-view">
              <span className="step-view-tag">STEP 5 · QUANTITATIVE MEASUREMENTS</span>
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
              <span className="step-view-tag">STEP 6 · CONTEXTUAL PHYSICS EXPLANATION</span>
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
          {currentStep.id === 'conclusion' && (
            <div className="mission-step-view">
              <span className="step-view-tag">STEP 7 · EXPERIMENT CONCLUSION</span>
              <div className="conclusion-summary-card">
                <div className="conclusion-header">
                  <span className="conclusion-icon" aria-hidden="true">✦</span>
                  <h3 className="conclusion-title">Mission Investigation Complete</h3>
                </div>
                <p className="conclusion-desc">{activeMission.conclusion}</p>

                <div className="conclusion-takeaways">
                  <div className="takeaway-item">
                    <span className="takeaway-bullet">1</span>
                    <span>Hypothesis tested: <strong>{userPrediction?.text || 'Tested hypothesis'}</strong></span>
                  </div>
                  <div className="takeaway-item">
                    <span className="takeaway-bullet">2</span>
                    <span>Governing Law verified: <code>{expData.formula}</code></span>
                  </div>
                  <div className="takeaway-item">
                    <span className="takeaway-bullet">3</span>
                    <span>Quantitative Outcome: {activeMission.measurement?.physicalMeaning}</span>
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
          )}
        </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ExperimentMission
