// Mark: a small village of houses whose roofs read as code brackets "< / >".
export function LogoMark({ className = "h-9 w-9", onDark = false }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="11" fill="#0b1220" />
      {/* A faint outline keeps the dark tile visible on dark backgrounds. */}
      {onDark && <rect x="0.5" y="0.5" width="39" height="39" rx="10.5" fill="none" stroke="#ffffff" strokeOpacity="0.2" />}
      <path
        d="M9 21.5 14 16.5 19 21.5M21 21.5 26 16.5 31 21.5"
        stroke="#34d399"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M11 22v7h6v-7M23 22v7h6v-7" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
      <path d="M21.6 11.5 18.4 30" stroke="#fbbf24" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className = "", onDark = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark onDark={onDark} />
      <span className={`font-display text-lg font-bold tracking-tight ${onDark ? "text-white" : ""}`}>
        Script<span className={onDark ? "text-brand-400" : "text-brand-600"}>Village</span>
      </span>
    </span>
  );
}
