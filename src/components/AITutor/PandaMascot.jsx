import React from 'react'

/**
 * PandaMascot — Original Physics Tutor Mascot Component
 *
 * Designed specifically for the Interactive 3D Physics Lab:
 * - 100% original vector SVG (no copyrighted or third-party assets)
 * - Friendly, intelligent, focused study companion
 * - Academic / technological feel matching the cyan/teal space lab theme
 * - Supports 4 variants: 'icon', 'header', 'avatar', 'welcome'
 */
export default function PandaMascot({ variant = 'icon', size, className = '', glow = false }) {
  // Determine pixel dimension based on variant if size is omitted
  const resolvedSize =
    size ||
    (variant === 'welcome' ? 104 : variant === 'header' ? 38 : variant === 'avatar' ? 28 : 20)

  return (
    <div
      className={`panda-mascot-container panda-mascot-${variant} ${glow ? 'has-glow' : ''} ${className}`}
      style={{ width: resolvedSize, height: resolvedSize, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        width={resolvedSize}
        height={resolvedSize}
        className="panda-mascot-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle head gradient */}
          <linearGradient id="pandaHeadGrad" x1="50" y1="15" x2="50" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="85%" stopColor="#e2ecf7" />
            <stop offset="100%" stopColor="#cfdfee" />
          </linearGradient>

          {/* Dark fur gradient (slate / deep navy-black with cyan bounce) */}
          <linearGradient id="pandaFurGrad" x1="20" y1="10" x2="80" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#080e1a" />
          </linearGradient>

          {/* Holographic sci-fi glasses tint */}
          <linearGradient id="pandaLensGrad" x1="30" y1="40" x2="70" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#73ffd3" stopOpacity="0.10" />
          </linearGradient>

          {/* Soft outer glow */}
          <filter id="pandaNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Orbit ring around head for welcome / header variants */}
        {(variant === 'welcome' || variant === 'header') && (
          <ellipse
            cx="50"
            cy="52"
            rx="46"
            ry="18"
            transform="rotate(-18 50 52)"
            stroke="url(#pandaLensGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.8"
          />
        )}

        {/* Left Ear */}
        <circle cx="25" cy="24" r="14" fill="url(#pandaFurGrad)" />
        <circle cx="25" cy="24" r="8" fill="#334155" opacity="0.6" />

        {/* Right Ear */}
        <circle cx="75" cy="24" r="14" fill="url(#pandaFurGrad)" />
        <circle cx="75" cy="24" r="8" fill="#334155" opacity="0.6" />

        {/* Small physics sensor pin on right ear */}
        {(variant === 'welcome' || variant === 'header') && (
          <circle cx="79" cy="18" r="2.5" fill="#73ffd3" filter="url(#pandaNeonGlow)" />
        )}

        {/* Main Head Shape (Friendly round silhouette) */}
        <ellipse cx="50" cy="54" rx="36" ry="32" fill="url(#pandaHeadGrad)" />

        {/* Left Eye Patch */}
        <ellipse
          cx="36"
          cy="51"
          rx="10"
          ry="12"
          transform="rotate(-15 36 51)"
          fill="url(#pandaFurGrad)"
        />

        {/* Right Eye Patch */}
        <ellipse
          cx="64"
          cy="51"
          rx="10"
          ry="12"
          transform="rotate(15 64 51)"
          fill="url(#pandaFurGrad)"
        />

        {/* Left Eye (Intelligent, warm expression) */}
        <circle cx="37" cy="51" r="4.2" fill="#030712" />
        <circle cx="38.5" cy="49.5" r="1.6" fill="#ffffff" />
        <circle cx="36" cy="52.5" r="0.8" fill="#73ffd3" />

        {/* Right Eye */}
        <circle cx="63" cy="51" r="4.2" fill="#030712" />
        <circle cx="64.5" cy="49.5" r="1.6" fill="#ffffff" />
        <circle cx="62" cy="52.5" r="0.8" fill="#73ffd3" />

        {/* Cute Rounded Nose */}
        <path
          d="M47 62 C48 60 52 60 53 62 C54 64 51.5 66 50 66 C48.5 66 46 64 47 62 Z"
          fill="url(#pandaFurGrad)"
        />

        {/* Gentle Encouraging Smile */}
        <path
          d="M45 68 Q50 73 55 68"
          stroke="#1e293b"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Modern Scientific Wireframe Glasses (subtle, academic, clean) */}
        <rect
          x="25"
          y="42"
          width="21"
          height="18"
          rx="6"
          stroke="#73ffd3"
          strokeWidth="1.6"
          fill="url(#pandaLensGrad)"
        />
        <rect
          x="54"
          y="42"
          width="21"
          height="18"
          rx="6"
          stroke="#73ffd3"
          strokeWidth="1.6"
          fill="url(#pandaLensGrad)"
        />
        {/* Glasses Bridge */}
        <path d="M46 48 Q50 46 54 48" stroke="#73ffd3" strokeWidth="1.6" strokeLinecap="round" />
        {/* Glasses Temple arms */}
        <path d="M25 48 L17 45" stroke="#73ffd3" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
        <path d="M75 48 L83 45" stroke="#73ffd3" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />

        {/* Rosy/Friendly Cheek Highlights */}
        <circle cx="26" cy="62" r="4" fill="#38bdf8" opacity="0.15" />
        <circle cx="74" cy="62" r="4" fill="#38bdf8" opacity="0.15" />

        {/* Tiny orbital electron dot on the outer ring for welcome variant */}
        {variant === 'welcome' && (
          <circle cx="92" cy="46" r="3" fill="#00f0ff" filter="url(#pandaNeonGlow)" />
        )}
      </svg>
    </div>
  )
}
