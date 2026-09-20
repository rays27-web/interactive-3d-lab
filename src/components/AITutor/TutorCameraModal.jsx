import React, { useRef, useState, useEffect } from 'react'

/**
 * TutorCameraModal — Live camera snapshot capture modal
 * Allows students to photograph physics problems from textbooks or notebooks.
 */
export default function TutorCameraModal({ isOpen, onClose, onCapture }) {
  const videoRef = useRef(null)
  const [stream, setStream] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isOpen) {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
        setStream(null)
      }
      return
    }

    let activeStream = null
    async function startCamera() {
      setError(null)
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          setError('Camera API is not supported on this browser.')
          return
        }
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false,
        })
        activeStream = mediaStream
        setStream(mediaStream)
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream
        }
      } catch (err) {
        console.warn('Camera access error:', err)
        setError('Could not access camera. Please check browser permissions.')
      }
    }

    startCamera()

    return () => {
      if (activeStream) {
        activeStream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSnap = () => {
    if (!videoRef.current) return
    const video = videoRef.current
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth || 640
    canvas.height = video.videoHeight || 480
    const ctx = canvas.getContext('2d')
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    const dataUrl = canvas.toDataURL('image/jpeg', 0.85)

    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
      setStream(null)
    }
    onCapture(dataUrl)
    onClose()
  }

  return (
    <div className="tutor-camera-modal-backdrop" role="dialog" aria-modal="true">
      <div className="tutor-camera-modal-card">
        <div className="tutor-camera-header">
          <span className="tutor-camera-title">📷 Capture Physics Problem</span>
          <button type="button" className="tutor-camera-close-btn" onClick={onClose} aria-label="Close Camera">
            ✕
          </button>
        </div>

        <div className="tutor-camera-viewport">
          {error ? (
            <div className="tutor-camera-error">{error}</div>
          ) : (
            <video ref={videoRef} autoPlay playsInline muted className="tutor-camera-video" />
          )}
        </div>

        <div className="tutor-camera-actions">
          <button type="button" className="tutor-camera-cancel-btn" onClick={onClose}>
            Cancel
          </button>
          {!error && (
            <button type="button" className="tutor-camera-snap-btn" onClick={handleSnap}>
              📸 Snap Photo
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
