"use client";

import { useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";
import { Icon } from "../Icons";
import { Reveal, SectionHeading } from "../Reveal";
import { whatsappLink } from "@/lib/site.config";

/* ==========================================================================
   SPOTLIGHT EFFECT OPTIONS (Uncomment one option below to use it):
   --------------------------------------------------------------------------
   Option 1: Clean background + Dotted spotlight on cards (Recommended ⭐)
   Option 2: Background dots + Smooth glow on cards (No inner dots)
   Option 3: Background dots + Aligned 28px dot grid on cards
   ========================================================================== */
const SPOTLIGHT_OPTION = 1; // <-- Option 1 ACTIVE
// const SPOTLIGHT_OPTION = 2; // <-- Option 2 ACTIVE
// const SPOTLIGHT_OPTION = 3; // <-- Option 3 ACTIVE

export function Pricing() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section id="pricing" className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
      {/* Background Dots: Only visible in Option 2 & Option 3 */}
      {(SPOTLIGHT_OPTION === 2 || SPOTLIGHT_OPTION === 3) && (
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[28px_28px] opacity-[0.06]" />
      )}

      {/* Ambient background glow blob */}
      <div aria-hidden className="absolute top-1/2 left-1/2 h-96 w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} dark />

        <div className="mx-auto mt-16 grid max-w-6xl items-stretch gap-6 lg:grid-cols-3">
          {p.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <PricingCard plan={plan} p={p} t={t} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-2xl text-center text-[15px] text-slate-400">{p.note}</Reveal>
      </div>
    </section>
  );
}

function PricingCard({ plan, p, t }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40"
    >
      {/* 
        [OPTION 1 & 3] Dotted Grid Spotlight Layer:
        - In Option 1: 24px grid on clean background
        - In Option 3: 28px grid to align with background
        - In Option 2: Hidden (no inner dots)
      */}
      {(SPOTLIGHT_OPTION === 1 || SPOTLIGHT_OPTION === 3) && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out"
          style={{
            opacity,
            backgroundImage: `radial-gradient(rgb(255 255 255 / 0.15) 1px, transparent 1px)`,
            backgroundSize: SPOTLIGHT_OPTION === 3 ? "28px 28px" : "24px 24px",
            maskImage: `radial-gradient(250px circle at ${position.x}px ${position.y}px, black 20%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(250px circle at ${position.x}px ${position.y}px, black 20%, transparent 100%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* 
        [ALL OPTIONS] Soft Color Glow Spotlight:
        - In Option 2: Slightly wider radius & opacity for smooth spotlight look
      */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(${
            SPOTLIGHT_OPTION === 2 ? "450px" : "400px"
          } circle at ${position.x}px ${position.y}px, rgba(34, 197, 94, ${
            SPOTLIGHT_OPTION === 2 ? "0.14" : "0.08"
          }), transparent 60%)`,
          mixBlendMode: "screen",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
        <p className="mt-2 text-[15px] text-slate-300">{plan.desc}</p>

        <div className="mt-6">
          <p className="text-sm text-slate-400">{p.from}</p>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-4xl font-bold tracking-tight text-white">{plan.price}</span>
            <span className="text-sm text-brand-300">· {plan.time}</span>
          </div>
        </div>

        <ul className="mt-8 flex-1 space-y-3.5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-[15px]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
                <Icon name="check" className="h-3.5 w-3.5" />
              </span>
              <span className="text-slate-200">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={whatsappLink(`${t.contact.form.intro}\n${t.contact.form.labels.service}: ${plan.name}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-20 mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3.5 font-medium text-white ring-1 ring-white/15 transition hover:bg-white/20"
      >
        {p.cta}
        <Icon name="arrow" className="h-4 w-4" />
      </a>
    </div>
  );
}
