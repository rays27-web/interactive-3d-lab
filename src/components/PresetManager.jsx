import { useCallback, useEffect, useState } from 'react'
import { deletePreset, loadPresets, resetAllPresets, savePreset } from '../utils/presetStorage'

function PresetManager({ experiment, values, onApplyPreset, onResetBaseline }) {
  const [presets, setPresets] = useState([])
  const [presetName, setPresetName] = useState('')
  const [isNaming, setIsNaming] = useState(false)
  const [feedback, setFeedback] = useState('')

  const refreshPresets = useCallback(() => {
    if (!experiment?.id) return
    const loaded = loadPresets(experiment.id, experiment.controls)
    setPresets(loaded)
  }, [experiment])

  useEffect(() => {
    refreshPresets()
    setIsNaming(false)
    setFeedback('')
  }, [refreshPresets])

  const notify = (msg) => {
    setFeedback(msg)
    window.setTimeout(() => setFeedback(''), 2200)
  }

  const handleSave = (e) => {
    e.preventDefault()
    const result = savePreset(experiment.id, presetName, values, experiment.controls)
    if (result.success) {
      setPresetName('')
      setIsNaming(false)
      refreshPresets()
      notify('PRESET SAVED')
    } else {
      notify(result.error || 'SAVE FAILED')
    }
  }

  const handleDelete = (presetId, e) => {
    e.stopPropagation()
    const ok = deletePreset(experiment.id, presetId)
    if (ok) {
      refreshPresets()
      notify('PRESET REMOVED')
    }
  }

  const handleResetAll = () => {
    resetAllPresets(experiment.id)
    refreshPresets()
    notify('ALL PRESETS CLEARED')
  }

  const handleLoad = (preset) => {
    onApplyPreset(preset.params)
    notify(`APPLIED: ${preset.name}`)
  }

  return (
    <div className="preset-manager" aria-label="Experiment presets">
      <div className="preset-header">
        <span className="preset-title">SAVED PRESETS</span>
        {feedback && <span className="preset-feedback" role="status">{feedback}</span>}
      </div>

      <div className="preset-list">
        {presets.length === 0 ? (
          <div className="preset-empty">NO SAVED CONFIGURATIONS</div>
        ) : (
          presets.map((p) => (
            <div className="preset-item" key={p.id}>
              <button
                aria-label={`Load preset ${p.name}`}
                className="preset-load-btn"
                onClick={() => handleLoad(p)}
                type="button"
              >
                <span className="preset-name">{p.name}</span>
                <span className="preset-action">LOAD</span>
              </button>
              <button
                aria-label={`Delete preset ${p.name}`}
                className="preset-del-btn"
                onClick={(e) => handleDelete(p.id, e)}
                type="button"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>

      <div className="preset-actions">
        {isNaming ? (
          <form className="preset-save-form" onSubmit={handleSave}>
            <input
              aria-label="Preset name"
              autoFocus
              className="preset-name-input"
              maxLength={24}
              onChange={(e) => setPresetName(e.target.value)}
              placeholder={`PRESET 0${presets.length + 1}`}
              type="text"
              value={presetName}
            />
            <div className="preset-form-btns">
              <button className="preset-btn-submit" type="submit">SAVE</button>
              <button className="preset-btn-cancel" onClick={() => setIsNaming(false)} type="button">CANCEL</button>
            </div>
          </form>
        ) : (
          <div className="preset-btn-row">
            <button
              className="preset-action-btn"
              disabled={presets.length >= 6}
              onClick={() => setIsNaming(true)}
              type="button"
            >
              + SAVE CURRENT
            </button>
            {presets.length > 0 && (
              <button
                className="preset-clear-btn"
                onClick={handleResetAll}
                type="button"
              >
                CLEAR ALL
              </button>
            )}
          </div>
        )}
      </div>

      <div className="preset-footer">
        <button
          className="controls-reset-btn"
          onClick={() => {
            onResetBaseline()
            notify('BASELINE RESTORED')
          }}
          type="button"
        >
          RESTORE DEFAULTS
        </button>
      </div>
    </div>
  )
}

export default PresetManager
