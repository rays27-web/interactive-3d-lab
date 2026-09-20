import React, { useState, useRef, useEffect } from 'react'
import PandaMascot from './PandaMascot'
import TutorMessage from './TutorMessage'
import TutorCameraModal from './TutorCameraModal'
import {
  AI_TUTOR_NAME,
  TUTOR_LEVELS,
  TUTOR_TOPIC_LIST,
  DEFAULT_EXAMPLE_PROMPTS,
  PROVIDER_STATUS,
} from '../../tutor/tutorConfig'
import { queryTutor, getProviderStatus } from '../../tutor/tutorService'

/**
 * AITutorDrawer — Main AI Physics Tutor side drawer
 * Docked to the side, preserving 3D canvas visibility while providing
 * complete multi-modal learning, hint scaffolding, and JEE level controls.
 */
export default function AITutorDrawer({
  isOpen,
  onClose,
  context,
  onUpdateContext,
}) {
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')
  const [explanationLevel, setExplanationLevel] = useState(context?.explanationLevel || 'LEARN')
  const [isLoading, setIsLoading] = useState(false)
  const [loadingStatus, setLoadingStatus] = useState('')
  const [attachedImage, setAttachedImage] = useState(null)
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [currentHintLevel, setCurrentHintLevel] = useState(1)

  const messagesEndRef = useRef(null)
  const fileInputRef = useRef(null)
  const recognitionRef = useRef(null)

  const providerStatus = getProviderStatus()

  // Auto-scroll messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen, isLoading])

  // Sync explanationLevel with context changes
  useEffect(() => {
    if (context?.explanationLevel && context.explanationLevel !== explanationLevel) {
      setExplanationLevel(context.explanationLevel)
    }
  }, [context?.explanationLevel])

  // Context greeting / auto-prime when opened with specific topic or quiz
  useEffect(() => {
    if (isOpen && messages.length === 0 && context?.source && context.source !== 'general') {
      let initialGreeting = ''
      if (context.source === 'quiz' && context.question) {
        initialGreeting = `I see you're working on a Quiz problem on "${context.topic || 'Gravitation'}":\n\n"${context.question.question}"\n\nWould you like a conceptual hint, formula guidance, or a step-by-step breakdown?`
      } else if (context.source === 'experiment') {
        const planet = context.telemetry?.planetName || 'Earth'
        const g = context.telemetry?.gravity || '9.81 m/s²'
        initialGreeting = `We are exploring the ${planet} 3D apparatus (surface gravity g = ${g}). What aspect of the planetary physics would you like to investigate?`
      } else if (context.source === 'index') {
        initialGreeting = `You opened the tutor from the Gravitation Index (${context.topic || 'Curriculum'}). How can I help you master this section?`
      }

      if (initialGreeting) {
        setMessages([
          {
            id: 'init-context',
            sender: 'tutor',
            content: initialGreeting,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            data: {
              summary: 'Active Context Linked:',
              answer: initialGreeting,
            },
            isFallback: providerStatus === PROVIDER_STATUS.LOCAL_FALLBACK,
            providerName: providerStatus === PROVIDER_STATUS.CONFIGURED ? 'Connected AI' : 'Local Physics Engine',
            level: explanationLevel,
          },
        ])
      }
    }
  }, [isOpen, context])

  // Handle Level Change
  const handleLevelChange = (lvl) => {
    setExplanationLevel(lvl)
    if (onUpdateContext) {
      onUpdateContext({ explanationLevel: lvl })
    }
  }

  // Handle Reset / New Chat
  const handleNewChat = () => {
    setMessages([])
    setAttachedImage(null)
    setCurrentHintLevel(1)
  }

  // Send message flow
  const handleSend = async (overridePrompt = null, overrideImage = null) => {
    const textToSend = (overridePrompt !== null ? overridePrompt : inputText).trim()
    const imageToSend = overrideImage !== null ? overrideImage : attachedImage

    if (!textToSend && !imageToSend) return

    const userMsg = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      content: textToSend || (imageToSend ? 'Physics problem image uploaded for analysis' : ''),
      image: imageToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => [...prev, userMsg])
    setInputText('')
    setAttachedImage(null)
    setIsLoading(true)
    setLoadingStatus(imageToSend ? 'PANDA IS ANALYSING...' : 'PANDA IS EXPLAINING...')

    try {
      const response = await queryTutor({
        prompt: textToSend,
        image: imageToSend,
        context: {
          ...context,
          explanationLevel,
        },
        history: messages,
        level: explanationLevel,
        hintLevel: currentHintLevel,
      })

      const tutorMsg = {
        id: `tut-${Date.now()}`,
        sender: 'tutor',
        content: response.summary || response.answer || '',
        data: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isFallback: response.isFallback,
        providerName: response.providerName,
        level: response.level || explanationLevel,
      }

      setMessages((prev) => [...prev, tutorMsg])
    } catch (err) {
      console.error('[PandaTutor] Query failed:', err)
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'tutor',
          content: 'I encountered an issue analyzing that question. Please try asking again!',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          data: {
            answer: 'I encountered an unexpected issue. Please ask your question again or request a hint!',
          },
          isFallback: true,
          providerName: 'Local Physics Engine',
          level: explanationLevel,
        },
      ])
    } finally {
      setIsLoading(false)
      setLoadingStatus('')
    }
  }

  // Handle Image Upload
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setAttachedImage(reader.result)
    }
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  // Handle Clipboard Paste
  const handlePaste = (e) => {
    const items = e.clipboardData?.items
    if (!items) return
    for (const item of items) {
      if (item.type.indexOf('image') !== -1) {
        const file = item.getAsFile()
        const reader = new FileReader()
        reader.onload = () => {
          setAttachedImage(reader.result)
        }
        reader.readAsDataURL(file)
        e.preventDefault()
        break
      }
    }
  }

  // Handle Camera Capture
  const handleCameraCapture = (dataUrl) => {
    setAttachedImage(dataUrl)
  }

  // Handle Microphone Speech-To-Text
  const handleVoiceToggle = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      alert('Speech Recognition is not supported by your browser.')
      return
    }

    if (isListening) {
      recognitionRef.current?.stop()
      setIsListening(false)
      return
    }

    try {
      const recognition = new SpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = 'en-US'

      recognition.onstart = () => setIsListening(true)
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        setInputText((prev) => (prev ? `${prev} ${transcript}` : transcript))
        setIsListening(false)
      }
      recognition.onerror = (err) => {
        console.warn('Speech recognition error:', err)
        setIsListening(false)
      }
      recognition.onend = () => setIsListening(false)

      recognitionRef.current = recognition
      recognition.start()
    } catch (err) {
      console.warn('Speech recognition failed to initialize:', err)
      setIsListening(false)
    }
  }

  // Progressive Hint Handler
  const handleRequestHint = (nextLvl) => {
    setCurrentHintLevel(nextLvl)
    handleSend(`Please give me hint level ${nextLvl}`)
  }

  if (!isOpen) return null

  return (
    <>
      <aside
        className="ai-tutor-drawer"
        role="dialog"
        aria-label={AI_TUTOR_NAME}
        onPaste={handlePaste}
      >
        {/* Drawer Header */}
        <div className="ai-tutor-drawer-header">
          <div className="ai-tutor-header-main">
            <PandaMascot variant="header" size={40} glow />
            <div className="ai-tutor-header-info">
              <div className="ai-tutor-title-row">
                <h3 className="ai-tutor-title">{AI_TUTOR_NAME}</h3>
                <span className={`ai-tutor-status-pill ${providerStatus === PROVIDER_STATUS.CONFIGURED ? 'is-connected' : 'is-local'}`}>
                  {providerStatus === PROVIDER_STATUS.CONFIGURED ? '● AI CONNECTED' : '● LOCAL FALLBACK'}
                </span>
              </div>
              <p className="ai-tutor-subtitle">Ask anything about the physics you're learning.</p>
            </div>

            <div className="ai-tutor-header-actions">
              <button
                type="button"
                className="ai-tutor-new-chat-btn"
                onClick={handleNewChat}
                title="Reset conversation context"
              >
                NEW CHAT
              </button>
              <button
                type="button"
                className="ai-tutor-close-btn"
                onClick={onClose}
                aria-label="Close AI Tutor"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Level Switcher */}
          <div className="ai-tutor-level-bar">
            <span className="ai-tutor-level-label">LEVEL:</span>
            <div className="ai-tutor-level-pills">
              {Object.values(TUTOR_LEVELS).map((lvl) => (
                <button
                  key={lvl.id}
                  type="button"
                  className={`ai-tutor-level-btn ${explanationLevel === lvl.id ? 'is-active' : ''}`}
                  onClick={() => handleLevelChange(lvl.id)}
                  title={lvl.title}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Context Banner */}
          {context?.source && context.source !== 'general' && (
            <div className="ai-tutor-context-banner">
              <span className="ai-tutor-context-badge">
                {context.source === 'quiz' ? 'QUIZ CONTEXT' : context.source === 'experiment' ? '3D LAB CONTEXT' : 'INDEX TOPIC'}
              </span>
              <span className="ai-tutor-context-details">
                {context.source === 'quiz'
                  ? `Question #${context.question?.number || ''}: ${context.question?.concept || context.topic}`
                  : context.source === 'experiment'
                  ? `${context.telemetry?.planetName || 'Earth'} • g = ${context.telemetry?.gravity || '9.81 m/s²'} • m = ${context.telemetry?.mass || '70 kg'}`
                  : context.topic}
              </span>
              {context.source === 'quiz' && context.question && (
                <button
                  type="button"
                  className="ai-tutor-banner-action-btn"
                  onClick={() => handleSend(`Explain Question #${context.question.number}: ${context.question.concept || ''}`)}
                  title="Ask Panda to explain this question"
                >
                  Explain Q#{context.question.number} →
                </button>
              )}
            </div>
          )}

          {/* Topic Quick Exploration Bar */}
          <div className="ai-tutor-topic-bar" role="toolbar" aria-label="Curriculum Topic Shortcuts">
            <span className="ai-tutor-topic-bar-label">TOPICS:</span>
            <div className="ai-tutor-topic-chips">
              {TUTOR_TOPIC_LIST.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  className="ai-tutor-topic-chip"
                  onClick={() => handleSend(topic.prompt)}
                  title={topic.description}
                >
                  <span className="topic-chip-icon" aria-hidden="true">{topic.icon}</span>
                  <span className="topic-chip-name">{topic.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Message Stream */}
        <div className="ai-tutor-messages-body">
          {messages.length === 0 ? (
            <div className="ai-tutor-empty-state">
              <PandaMascot variant="welcome" size={100} glow />
              <h4 className="ai-tutor-empty-title">Hi, I'm your Panda Physics Tutor!</h4>
              <p className="ai-tutor-empty-desc">
                I'm here to help you understand Class 11–12 and JEE Gravitation from first principles.
                Ask me a question, paste a problem from your notebook, or pick a topic below:
              </p>

              <div className="ai-tutor-quick-prompts">
                {DEFAULT_EXAMPLE_PROMPTS.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="ai-tutor-quick-btn"
                    onClick={() => handleSend(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="ai-tutor-message-list">
              {messages.map((msg) => (
                <TutorMessage
                  key={msg.id}
                  message={msg}
                  onAskSimilar={(q) => handleSend(q)}
                  onRequestHint={handleRequestHint}
                />
              ))}

              {isLoading && (
                <div className="ai-tutor-loading-indicator">
                  <div className="ai-tutor-loading-avatar">
                    <PandaMascot variant="avatar" size={26} />
                  </div>
                  <div className="ai-tutor-loading-content">
                    <span className="ai-tutor-loading-text">{loadingStatus || 'PANDA IS THINKING...'}</span>
                    <div className="ai-tutor-loading-dots">
                      <span className="dot" />
                      <span className="dot" />
                      <span className="dot" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Attached Image Review Bar */}
        {attachedImage && (
          <div className="ai-tutor-preview-bar">
            <div className="ai-tutor-preview-thumb-wrap">
              <img src={attachedImage} alt="Attachment preview" className="ai-tutor-preview-thumb" />
              <span className="ai-tutor-preview-label">[Preview]</span>
            </div>
            <div className="ai-tutor-preview-actions">
              <button
                type="button"
                className="ai-tutor-send-panda-btn"
                onClick={() => handleSend()}
              >
                [Send to Panda]
              </button>
              <button
                type="button"
                className="ai-tutor-remove-btn"
                onClick={() => setAttachedImage(null)}
              >
                [Remove]
              </button>
            </div>
          </div>
        )}

        {/* Multimodal Input Controls */}
        <div className="ai-tutor-input-container">
          <div className="ai-tutor-input-tools">
            {/* Image upload button */}
            <button
              type="button"
              className="ai-tutor-tool-btn"
              onClick={() => fileInputRef.current?.click()}
              title="Upload an image or textbook diagram"
            >
              📎
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />

            {/* Camera Capture button */}
            <button
              type="button"
              className="ai-tutor-tool-btn"
              onClick={() => setIsCameraOpen(true)}
              title="Take a photo with your camera"
            >
              📷
            </button>

            {/* Speech to text microphone button */}
            <button
              type="button"
              className={`ai-tutor-tool-btn ${isListening ? 'is-listening' : ''}`}
              onClick={handleVoiceToggle}
              title={isListening ? 'Listening... click to stop' : 'Ask using voice'}
            >
              {isListening ? '🔴' : '🎙️'}
            </button>

            {/* Progressive Hint Shortcut */}
            <button
              type="button"
              className="ai-tutor-hint-shortcut-btn"
              onClick={() => handleRequestHint(currentHintLevel)}
              title="Get progressive guidance without spoiling the answer"
            >
              💡 GIVE ME A HINT
            </button>
          </div>

          <form
            className="ai-tutor-input-form"
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
          >
            <textarea
              className="ai-tutor-textarea"
              placeholder="Ask a physics question or paste a problem..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
              rows={2}
            />
            <button
              type="submit"
              className="ai-tutor-send-btn"
              disabled={isLoading || (!inputText.trim() && !attachedImage)}
            >
              SEND
            </button>
          </form>
        </div>
      </aside>

      {/* Camera Capture Modal */}
      <TutorCameraModal
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        onCapture={handleCameraCapture}
      />
    </>
  )
}
