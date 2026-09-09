import { useState } from 'react'

function FormulaQuickSheet({ formulas }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`grav-sheet-section ${isExpanded ? 'is-open' : ''}`}>
      <button
        aria-expanded={isExpanded}
        className="grav-sheet-header-btn"
        onClick={() => setIsExpanded((prev) => !prev)}
        type="button"
      >
        <div className="sheet-header-titles">
          <span className="sheet-eyebrow">REVISION ARSENAL</span>
          <h3 className="sheet-main-title">GRAVITATION FORMULA SHEET</h3>
          <span className="sheet-subtitle">16 High-Yield Equations for JEE Main & Advanced</span>
        </div>
        <span className="sheet-toggle-icon" aria-hidden="true">
          {isExpanded ? '[ − ]' : '[ + ]'}
        </span>
      </button>

      {isExpanded && (
        <div className="grav-sheet-body">
          <div className="sheet-grid">
            {formulas.map((item) => (
              <div key={item.id} className="sheet-formula-card">
                <div className="sheet-card-top">
                  <span className="sheet-card-name">{item.name}</span>
                  <span className="sheet-category-badge">{item.category}</span>
                </div>
                <code className="sheet-formula-code">{item.formula}</code>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default FormulaQuickSheet
