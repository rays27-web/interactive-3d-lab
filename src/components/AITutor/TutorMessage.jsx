import React, { useState } from 'react'
import PandaMascot from './PandaMascot'
import { renderMathExpression, cleanLatexString, formatInlineMathText } from '../MathFormulaRenderer'

/**
 * TutorMessage — Renders an individual user query or Panda Tutor response
 * with formal mathematical equations, step-by-step cards, symbol tables, and traps.
 */
export default function TutorMessage({ message, onAskSimilar, onRequestHint }) {
  const { sender, content, timestamp, image, data, isFallback, providerName, level } = message
  const isTutor = sender === 'tutor'
  const [showSimilarHint, setShowSimilarHint] = useState(false)

  if (!isTutor) {
    return (
      <div className="ai-tutor-message-row user-row">
        <div className="ai-tutor-bubble user-bubble">
          {image && (
            <div className="ai-tutor-attached-image">
              <img src={image} alt="User upload" />
            </div>
          )}
          <p className="ai-tutor-text">{content}</p>
          <span className="ai-tutor-timestamp">{timestamp}</span>
        </div>
      </div>
    )
  }

  // Panda Tutor Message
  const hasSteps = data?.steps && data.steps.length > 0
  const hasSymbols = data?.symbols && data.symbols.length > 0
  const hasKeyPoints = data?.keyPoints && data.keyPoints.length > 0
  const hasTraps = data?.traps && data.traps.length > 0
  const hasSimilar = Boolean(data?.similarProblem)

  return (
    <div className="ai-tutor-message-row tutor-row">
      <div className="ai-tutor-avatar-col">
        <PandaMascot variant="avatar" size={30} glow />
      </div>

      <div className="ai-tutor-bubble tutor-bubble">
        {/* Tutor Header Info Bar */}
        <div className="ai-tutor-meta-bar">
          <span className="ai-tutor-name-tag">Panda Tutor</span>
          {level && <span className="ai-tutor-level-badge">{level}</span>}
          <span className={`ai-tutor-provider-tag ${isFallback ? 'is-fallback' : 'is-ai'}`}>
            {isFallback ? '⚡ Local Physics Engine' : `✨ ${providerName || 'AI Connected'}`}
          </span>
        </div>

        {/* Primary Summary / Text */}
        {data?.summary && <h4 className="ai-tutor-summary-heading">{data.summary}</h4>}

        {/* Conceptual / Direct Answer */}
        {data?.answer && (
          <div className="ai-tutor-answer-box">
            <p className="ai-tutor-answer-text">{formatInlineMathText(data.answer, 'ans')}</p>
          </div>
        )}

        {/* Conceptual Formula */}
        {data?.formula && (
          <div className="ai-tutor-formula-card">
            <span className="ai-tutor-card-label">GOVERNING EQUATION</span>
            <div className="ai-tutor-formula-render">
              {renderMathExpression(cleanLatexString(data.formula), 'tutor-form')}
            </div>
          </div>
        )}

        {/* Conceptual Why / Reasoning */}
        {data?.why && (
          <div className="ai-tutor-why-box">
            <span className="ai-tutor-why-badge">PHYSICS RATIONALE</span>
            <p className="ai-tutor-why-text">{formatInlineMathText(data.why, 'why')}</p>
          </div>
        )}

        {/* Mistake Diagnosis Response */}
        {data?.likelyError && (
          <div className="ai-tutor-mistake-box">
            <div className="ai-tutor-mistake-header">
              <span className="ai-tutor-mistake-icon">🔍</span>
              <span className="ai-tutor-mistake-title">LIKELY ERROR IDENTIFIED</span>
            </div>
            <p className="ai-tutor-mistake-text">{data.likelyError}</p>

            {data?.whyItHappened && (
              <div className="ai-tutor-sub-section">
                <span className="ai-tutor-sub-label">WHY IT HAPPENED:</span>
                <p>{data.whyItHappened}</p>
              </div>
            )}

            {data?.howToAvoid && (
              <div className="ai-tutor-sub-section">
                <span className="ai-tutor-sub-label">HOW TO AVOID NEXT TIME:</span>
                <p>{data.howToAvoid}</p>
              </div>
            )}
          </div>
        )}

        {/* Scaffolding Hint Response */}
        {data?.hintText && (
          <div className="ai-tutor-hint-box">
            <div className="ai-tutor-hint-header">
              <span className="ai-tutor-hint-badge">PROGRESSIVE HINT #{data.hintLevel}</span>
              {data.nextHintAvailable && onRequestHint && (
                <button
                  type="button"
                  className="ai-tutor-next-hint-btn"
                  onClick={() => onRequestHint(data.hintLevel + 1)}
                >
                  Next Hint →
                </button>
              )}
            </div>
            <p className="ai-tutor-hint-text">{formatInlineMathText(data.hintText, 'hint')}</p>
          </div>
        )}

        {/* 9-Step Problem Solving Sequence */}
        {hasSteps && (
          <div className="ai-tutor-derivation-sequence">
            <div className="ai-tutor-sequence-badge">STEP-BY-STEP SOLUTION</div>
            <div className="ai-tutor-steps-list">
              {data.steps.map((step, idx) => (
                <div key={idx} className="ai-tutor-step-card">
                  <div className="ai-tutor-step-header">
                    <span className="ai-tutor-step-pill">{step.step}</span>
                    <span className="ai-tutor-step-title">{step.label}</span>
                  </div>

                  {step.content && (
                    <p className="ai-tutor-step-content">
                      {formatInlineMathText(step.content, `step-c-${idx}`)}
                    </p>
                  )}

                  {/* Givens & Unknown */}
                  {step.givens && (
                    <div className="ai-tutor-givens-box">
                      <div className="ai-tutor-givens-pills">
                        {step.givens.map((g, gIdx) => (
                          <span key={gIdx} className="ai-tutor-given-pill">
                            {formatInlineMathText(g, `given-${idx}-${gIdx}`)}
                          </span>
                        ))}
                      </div>
                      {step.unknown && (
                        <div className="ai-tutor-unknown-pill">
                          Target: {formatInlineMathText(step.unknown, `unk-${idx}`)}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step Formula */}
                  {step.formula && (
                    <div className="ai-tutor-step-formula-box">
                      <div className="ai-tutor-step-math">
                        {renderMathExpression(cleanLatexString(step.formula), `step-f-${idx}`)}
                      </div>
                    </div>
                  )}

                  {/* Step Symbols */}
                  {step.symbols && (
                    <div className="ai-tutor-symbols-table">
                      {step.symbols.map((sym, sIdx) => (
                        <div key={sIdx} className="ai-tutor-sym-row">
                          <span className="ai-tutor-sym-math">{sym.symbol}</span>
                          <span className="ai-tutor-sym-meaning">{sym.meaning}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Symbols Table for Conceptual Questions */}
        {hasSymbols && !hasSteps && (
          <div className="ai-tutor-symbols-section">
            <span className="ai-tutor-card-label">SYMBOL DEFINITIONS</span>
            <div className="ai-tutor-symbols-table">
              {data.symbols.map((sym, sIdx) => (
                <div key={sIdx} className="ai-tutor-sym-row">
                  <span className="ai-tutor-sym-math">{sym.symbol}</span>
                  <span className="ai-tutor-sym-meaning">{sym.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Transferable Key Points */}
        {hasKeyPoints && (
          <div className="ai-tutor-keypoints-card">
            <div className="ai-tutor-keypoints-title">
              <span className="ai-tutor-keypoints-icon">📌</span>
              <span>TRANSFERABLE KEY POINTS</span>
            </div>
            <ul className="ai-tutor-keypoints-list">
              {data.keyPoints.map((kp, kpIdx) => (
                <li key={kpIdx} className="ai-tutor-keypoint-item">
                  <span className="ai-tutor-bullet" aria-hidden="true">▪</span>
                  <span>{formatInlineMathText(kp, `kp-${kpIdx}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Question Pattern Recognition */}
        {data?.questionPattern && (
          <div className="ai-tutor-pattern-box">
            <span className="ai-tutor-pattern-badge">HOW TO RECOGNIZE THIS QUESTION</span>
            <p className="ai-tutor-pattern-text">{data.questionPattern}</p>
          </div>
        )}

        {/* Common JEE Traps */}
        {hasTraps && (
          <div className="ai-tutor-traps-card">
            <div className="ai-tutor-traps-title">
              <span className="ai-tutor-traps-icon">⚠</span>
              <span>COMMON JEE TRAPS</span>
            </div>
            <ul className="ai-tutor-traps-list">
              {data.traps.map((trap, tIdx) => (
                <li key={tIdx} className="ai-tutor-trap-item">
                  {formatInlineMathText(trap, `trap-${tIdx}`)}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Try A Similar Problem */}
        {hasSimilar && (
          <div className="ai-tutor-similar-box">
            <div className="ai-tutor-similar-header">
              <span className="ai-tutor-similar-badge">TRY A SIMILAR PROBLEM</span>
              <span className="ai-tutor-similar-title">{data.similarProblem.title}</span>
            </div>
            <p className="ai-tutor-similar-question">
              {formatInlineMathText(data.similarProblem.question, 'sim-q')}
            </p>

            <div className="ai-tutor-similar-actions">
              <button
                type="button"
                className="ai-tutor-hint-toggle-btn"
                onClick={() => setShowSimilarHint((prev) => !prev)}
              >
                {showSimilarHint ? 'Hide Clue' : 'Show Clue'}
              </button>
              {onAskSimilar && (
                <button
                  type="button"
                  className="ai-tutor-solve-similar-btn"
                  onClick={() => onAskSimilar(data.similarProblem.question)}
                >
                  Solve with Panda →
                </button>
              )}
            </div>

            {showSimilarHint && data.similarProblem.hint && (
              <div className="ai-tutor-similar-clue">
                💡 {formatInlineMathText(data.similarProblem.hint, 'sim-hint')}
              </div>
            )}
          </div>
        )}

        <span className="ai-tutor-timestamp">{timestamp}</span>
      </div>
    </div>
  )
}
