function LabModeToggle({ labMode, onToggle }) {
  return (
    <button
      aria-label={`Switch to ${labMode ? 'Clean Mode' : 'Lab Mode'}`}
      className={`lab-mode-toggle ${labMode ? 'is-lab-mode' : 'is-clean-mode'}`}
      onClick={onToggle}
      title={labMode ? 'Switch to Clean Mode (Minimalist View)' : 'Switch to Lab Mode (Command Telemetry)'}
      type="button"
    >
      <span className="mode-toggle-indicator" aria-hidden="true" />
      <span className="mode-toggle-label">{labMode ? 'LAB MODE' : 'CLEAN MODE'}</span>
    </button>
  )
}

export default LabModeToggle
