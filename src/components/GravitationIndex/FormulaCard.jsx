function FormulaCard({ subsection }) {
  const { title, statement, formulaDisplay, variables, notes, points } = subsection

  return (
    <article className="grav-card grav-formula-card">
      <h4 className="grav-card-title">{title}</h4>

      {statement && <p className="grav-formula-statement">{statement}</p>}

      {formulaDisplay && (
        <div className="grav-formula-hero">
          <code className="grav-formula-large">{formulaDisplay}</code>
        </div>
      )}

      {variables && variables.length > 0 && (
        <div className="grav-vars-container">
          <span className="grav-vars-header">VARIABLE SPECIFICATIONS</span>
          <div className="grav-vars-table">
            {variables.map((v, idx) => (
              <div key={idx} className="grav-var-row">
                <code className="grav-var-symbol">{v.symbol}</code>
                <span className="grav-var-name">{v.name}</span>
                <span className="grav-var-unit">[{v.unit}]</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {points && points.length > 0 && (
        <ul className="grav-point-list">
          {points.map((pt, idx) => (
            <li key={idx} className="grav-point-item">
              <span className="grav-bullet" aria-hidden="true">▪</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      )}

      {notes && (
        <div className="grav-note-box">
          <span className="grav-note-icon">💡</span>
          <span className="grav-note-text">{notes}</span>
        </div>
      )}
    </article>
  )
}

export default FormulaCard
