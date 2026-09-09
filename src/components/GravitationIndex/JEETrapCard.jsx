function JEETrapCard({ traps, title = 'COMMON JEE TRAPS & PITFALLS' }) {
  if (!traps || traps.length === 0) return null

  return (
    <article className="grav-card grav-trap-card">
      <div className="grav-trap-header">
        <span className="grav-trap-icon" aria-hidden="true">⚠️</span>
        <h4 className="grav-trap-title">{title}</h4>
      </div>

      <div className="grav-traps-list">
        {traps.map((item, idx) => (
          <div key={idx} className="grav-trap-item">
            <div className="grav-trap-danger">
              <span className="trap-danger-badge">PITFALL</span>
              <p className="trap-danger-text">{item.trap}</p>
            </div>
            <div className="grav-trap-remedy">
              <span className="trap-remedy-badge">CORRECT APPROACH</span>
              <p className="trap-remedy-text">{item.remedy}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default JEETrapCard
