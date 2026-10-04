import Image from "next/image";

export function LogoMark({ className = "h-14 w-14" }) {
  return (
    <span className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden ${className}`}>
      <Image
        src="/codemolecule-logo.png"
        alt="Code Molecule logo"
        width={1024}
        height={1024}
        quality={100}
        unoptimized={true}
        className="h-full w-full object-contain"
        priority
      />
    </span>
  );
}

export function Logo({ className = "", onDark = false }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-18 w-18 shrink-0 drop-shadow-sm" />
      
      <span className={`font-display text-[26px] font-bold tracking-tight ${onDark ? "text-slate-100" : "text-ink"}`}>
        Code Molecule
      </span>
    </span>
  );
}
