import { useState, useEffect } from 'react'
import {
  GRAVITATION_INDEX_MODULES,
  JEE_PROBLEM_FRAMEWORK,
  FORMULA_QUICK_SHEET,
} from '../../data/gravitationIndex'
import GravitationSection from './GravitationSection'
import ProblemSolvingGuide from './ProblemSolvingGuide'
import FormulaQuickSheet from './FormulaQuickSheet'

function GravitationIndexDrawer({ isOpen, onClose }) {
  // Only one section open at a time to keep UI focused and uncrowded
  const [activeModuleId, setActiveModuleId] = useState(null)

  // Listen for Escape key to close
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose?.()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleToggleModule = (moduleId) => {
    setActiveModuleId((prev) => (prev === moduleId ? null : moduleId))
  }

  return (
    <aside
      aria-label="Gravitation Index"
      className="grav-index-drawer"
      role="dialog"
    >
      {/* Drawer Header */}
      <div className="grav-drawer-header">
        <div className="grav-header-content">
          <div className="grav-header-tag-row">
            <span className="grav-curriculum-badge">CLASS 12 • JEE MAIN • JEE ADVANCED</span>
          </div>
          <h2 className="grav-drawer-title">GRAVITATION INDEX</h2>
          <p className="grav-drawer-desc">
            Learn the governing laws, understand the equations, avoid common traps, and practice with concept-linked JEE questions.
          </p>
        </div>
        <button
          aria-label="Close Gravitation Index"
          className="grav-drawer-close-btn"
          onClick={onClose}
          type="button"
        >
          ✕
        </button>
      </div>

      {/* Internal Scrollable Modules Container */}
      <div className="grav-drawer-body">
        {/* 5 Core Gravitation Modules */}
        <div className="grav-modules-list" role="tablist">
          {GRAVITATION_INDEX_MODULES.map((mod) => (
            <GravitationSection
              key={mod.id}
              isExpanded={activeModuleId === mod.id}
              module={mod}
              onToggle={() => handleToggleModule(mod.id)}
            />
          ))}
        </div>

        {/* JEE Problem-Solving Framework */}
        <ProblemSolvingGuide framework={JEE_PROBLEM_FRAMEWORK} />

        {/* Formula Quick Sheet */}
        <FormulaQuickSheet formulas={FORMULA_QUICK_SHEET} />
      </div>
    </aside>
  )
}

export default GravitationIndexDrawer
