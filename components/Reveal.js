"use client";

import { useEffect, useRef } from "react";

// Fades children in the first time they scroll into view.
export function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Anything already on screen stays visible; only content below the fold animates in.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("is-visible");
    }
    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...props}>
      {children}
    </Tag>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = true, dark = false }) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow text-sm font-semibold uppercase tracking-[0.18em] ${dark ? "text-brand-400" : "text-brand-600"}`}>{eyebrow}</p>
      <h2 className={`font-display mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>{subtitle}</p>}
    </Reveal>
  );
}
