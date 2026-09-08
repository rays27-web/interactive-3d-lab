import { useEffect, useRef, useState } from 'react'

function InfoTooltip({
  title,
  definition,
  significance,
  onLearnMore,
  ariaLabel,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    function handlePointerDown(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('pointerdown', handlePointerDown)
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <span className="info-tooltip-wrapper" ref={containerRef}>
      <button
        aria-expanded={isOpen}
        aria-label={ariaLabel || `Physics explanation for ${title || 'metric'}`}
        className={`info-tooltip-trigger ${isOpen ? 'is-active' : ''}`}
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen((prev) => !prev)
        }}
        type="button"
      >
        <span aria-hidden="true">?</span>
      </button>

      {isOpen && (
        <span
          className="info-tooltip-popover"
          role="tooltip"
        >
          {title && <strong className="info-tooltip-title">{title}</strong>}
          {definition && (
            <span className="info-tooltip-text">
              <span className="info-tooltip-tag">DEFINITION</span> {definition}
            </span>
          )}
          {significance && (
            <span className="info-tooltip-text">
              <span className="info-tooltip-tag">SIGNIFICANCE</span> {significance}
            </span>
          )}
          {onLearnMore && (
            <button
              className="info-tooltip-learn-btn"
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(false)
                onLearnMore()
              }}
              type="button"
            >
              LEARN MORE →
            </button>
          )}
        </span>
      )}
    </span>
  )
}

export default InfoTooltip
