"use client";

import { useRef, useState } from "react";

export function SpotlightCard({ children, className = "", as: Component = "div", ...props }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`group relative overflow-hidden rounded-3xl border border-brand-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-xl hover:shadow-brand-900/5 ${className}`}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out"
        style={{
          opacity,
          backgroundImage: `radial-gradient(rgb(22 163 74 / 0.5) 1.5px, transparent 1.5px)`,
          backgroundSize: '22px 22px',
          maskImage: `radial-gradient(260px circle at ${position.x}px ${position.y}px, black 30%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(260px circle at ${position.x}px ${position.y}px, black 30%, transparent 100%)`,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out mix-blend-multiply"
        style={{
          opacity,
          background: `radial-gradient(380px circle at ${position.x}px ${position.y}px, rgba(34, 197, 94, 0.20), transparent 65%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </Component>
  );
}
