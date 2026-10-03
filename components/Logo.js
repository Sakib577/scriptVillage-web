export function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      {/* Dark Square Background (Dark version base) */}
      <rect width="40" height="40" rx="10" fill="#0A1118" />
      
      {/* House Outline (White) */}
      <path 
        d="M 7 19 L 20 7 L 33 19 M 11 15 V 31 H 29 V 15" 
        stroke="#F8FAFC" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
      />
      
      {/* Terminal Prompt > (Neon Green) */}
      <path 
        d="M 15 18 L 19 22 L 15 26" 
        stroke="#22C55E" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
      />
      
      {/* Terminal Prompt _ (Neon Green) */}
      <path 
        d="M 22 26 H 26" 
        stroke="#22C55E" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
      />
    </svg>
  );
}

export function Logo({ className = "", onDark = false }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* The square dark icon stays outside */}
      <LogoMark className="h-10 w-10 shrink-0 shadow-sm" />
      
      {/* The text stays outside the icon in HTML */}
      <span className={`font-display text-[22px] font-bold tracking-tight ${onDark ? "text-slate-100" : "text-ink"}`}>
        scriptvillage.com
      </span>
    </span>
  );
}
