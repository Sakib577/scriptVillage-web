export function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="-10 -5 115 110" className={className} aria-hidden>
      {/* Connecting Lines */}
      <path d="M 50 50 L 80 25 M 50 50 L 80 75" stroke="#869DCC" strokeWidth="8" />

      {/* Main 'C' */}
      <path d="M 65 15 A 40 40 0 1 0 65 85" stroke="#3B6B9C" strokeWidth="18" strokeLinecap="round" fill="none" />

      {/* Nodes */}
      <circle cx="50" cy="50" r="16" fill="#869DCC" />
      <circle cx="80" cy="25" r="14" fill="#869DCC" />
      <circle cx="80" cy="75" r="14" fill="#869DCC" />

      {/* Server Icon (Center) */}
      <g fill="#FFF">
        <rect x="42" y="42" width="16" height="3" rx="1" />
        <rect x="42" y="48.5" width="16" height="3" rx="1" />
        <rect x="42" y="55" width="16" height="3" rx="1" />
      </g>
      
      {/* Laptop Icon (Top) */}
      <g fill="#FFF">
        <rect x="73" y="19" width="14" height="9" rx="1" />
        <path d="M 71 29 H 89 V 30 A 1 1 0 0 1 88 31 H 72 A 1 1 0 0 1 71 30 Z" />
      </g>

      {/* Mobile Icon (Bottom) */}
      <g fill="#FFF">
        <rect x="76" y="67" width="8" height="16" rx="2" />
      </g>
    </svg>
  );
}

export function Logo({ className = "", onDark = false }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* The new Code Molecule icon */}
      <LogoMark className="h-10 w-10 shrink-0" />
      
      {/* The text stays outside the icon in HTML */}
      <span className={`font-display text-[22px] font-bold tracking-tight ${onDark ? "text-slate-100" : "text-ink"}`}>
        codemolecule.com
      </span>
    </span>
  );
}
