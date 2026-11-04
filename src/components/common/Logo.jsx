export default function Logo({ size = 36, showText = false, className = '', onClick }) {
  return (
    <div
      className={`brand-logo-wrapper ${className}`}
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand-logo-svg"
        style={{ flexShrink: 0, transition: 'transform 0.3s ease' }}
      >
        <defs>
          <linearGradient id="ndCopperComp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff0e2" />
            <stop offset="35%" stopColor="#f8c69f" />
            <stop offset="70%" stopColor="#e28a52" />
            <stop offset="100%" stopColor="#b85d26" />
          </linearGradient>
          <linearGradient id="ndGoldComp" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e28a52" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fedec5" />
          </linearGradient>
          <radialGradient id="ndGlowComp" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e28a52" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#090b0f" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ndBorderComp" x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#fce8d5" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#e28a52" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#9a4c1f" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Ambient Core Glow */}
        <circle cx="60" cy="60" r="48" fill="url(#ndGlowComp)" />

        {/* Outer Glass Ring / Shield */}
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="#0d1017"
          fillOpacity="0.9"
          stroke="url(#ndBorderComp)"
          strokeWidth="1.75"
        />

        {/* Inner Subtle Accent Ring */}
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#e28a52"
          strokeOpacity="0.2"
          strokeDasharray="3 4"
          strokeWidth="1"
        />

        {/* Code Bracket Left: < */}
        <path
          d="M 23 52 L 16 60 L 23 68"
          fill="none"
          stroke="url(#ndGoldComp)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />

        {/* Code Bracket Right: > */}
        <path
          d="M 97 52 L 104 60 L 97 68"
          fill="none"
          stroke="url(#ndGoldComp)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />

        {/* Monogram Letter "N" — Left Vertical Stem */}
        <path
          d="M 37 36 L 47 36 M 42 36 L 42 84 M 37 84 L 47 84"
          fill="none"
          stroke="url(#ndCopperComp)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Monogram Letter "N" — Right Vertical Stem */}
        <path
          d="M 73 36 L 83 36 M 78 36 L 78 84 M 73 84 L 83 84"
          fill="none"
          stroke="url(#ndCopperComp)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Monogram Letter "N" — Diagonal Stroke */}
        <path
          d="M 42 37 L 78 83"
          fill="none"
          stroke="url(#ndCopperComp)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Botanical Vine Entwining the Monogram */}
        <path
          d="M 38 78 C 45 74, 52 68, 56 60 C 60 52, 63 45, 76 43"
          fill="none"
          stroke="url(#ndGoldComp)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Leaf 1 (Left Climbing) */}
        <path
          d="M 48 68 C 47 62, 53 59, 56 62 C 55 68, 50 70, 48 68 Z"
          fill="url(#ndGoldComp)"
          opacity="0.95"
        />

        {/* Leaf 2 (Center Sprout) */}
        <path
          d="M 58 57 C 64 54, 67 59, 65 63 C 60 63, 58 59, 58 57 Z"
          fill="url(#ndCopperComp)"
          opacity="0.9"
        />

        {/* Leaf 3 (Top Right Tip) */}
        <path
          d="M 73 44 C 77 39, 83 40, 84 44 C 80 47, 75 46, 73 44 Z"
          fill="url(#ndGoldComp)"
          opacity="0.95"
        />

        {/* Sparkle Star at Top Right */}
        <g transform="translate(86, 26)">
          <path d="M 0 -5 Q 0 0 5 0 Q 0 0 0 5 Q 0 0 -5 0 Q 0 0 0 -5 Z" fill="#fff5ea" />
          <circle cx="0" cy="0" r="1.2" fill="#f59e0b" />
        </g>

        {/* Twinkle at Bottom Left */}
        <g transform="translate(30, 88)">
          <path d="M 0 -3.5 Q 0 0 3.5 0 Q 0 0 0 3.5 Q 0 0 -3.5 0 Q 0 0 0 -3.5 Z" fill="#f8c69f" opacity="0.85" />
        </g>
      </svg>

      {showText && (
        <span className="brand-logo-text" style={{ display: 'inline-flex', alignItems: 'baseline', gap: '3px' }}>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '18px',
              fontWeight: 600,
              color: '#ffffff',
              letterSpacing: '-0.3px',
            }}
          >
            Nissrin
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--text-copper)',
              letterSpacing: '-0.2px',
            }}
          >
            .dev
          </span>
        </span>
      )}
    </div>
  );
}

