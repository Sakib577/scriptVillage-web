"use client";

import Link from "next/link";
import { useLanguage } from "../LanguageProvider";
import { Icon } from "../Icons";
import { Reveal, SectionHeading } from "../Reveal";
import { services } from "@/lib/services";

export const serviceAccents = [
  "bg-brand-50 text-brand-700 ring-brand-100",
  "bg-violet-50 text-violet-700 ring-violet-100",
  "bg-amber-50 text-amber-700 ring-amber-100",
  "bg-sky-50 text-sky-700 ring-sky-100",
  "bg-rose-50 text-rose-700 ring-rose-100",
  "bg-teal-50 text-sky-700 ring-teal-100",
];

import { useRef, useState } from "react";

function ServiceCard({ service, item, i, t }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Link
      ref={ref}
      href={`/services/${service.slug}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-200/80 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-xl hover:shadow-brand-900/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
    >
      {/* Dotted grid spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out"
        style={{
          opacity,
          backgroundImage: `radial-gradient(rgb(59 107 156 / 0.35) 1.5px, transparent 1.5px)`,
          backgroundSize: '22px 22px',
          maskImage: `radial-gradient(260px circle at ${position.x}px ${position.y}px, black 30%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(260px circle at ${position.x}px ${position.y}px, black 30%, transparent 100%)`,
        }}
        aria-hidden="true"
      />
      {/* Soft color glow spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out mix-blend-multiply"
        style={{
          opacity,
          background: `radial-gradient(380px circle at ${position.x}px ${position.y}px, rgba(59, 107, 156, 0.20), transparent 65%)`,
        }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xs ring-1 ${serviceAccents[i]}`}>
          <Icon name={service.icon} className="h-7 w-7" />
        </span>
        <h3 className="font-display mt-6 text-xl font-bold text-ink group-hover:text-brand-800 transition-colors">{item.title}</h3>
        <p className="mt-3 flex-1 text-slate-600">{item.summary}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 transition-colors group-hover:text-brand-900">
          {t.serviceDetail.viewDetails}
          <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function Services() {
  const { t, lang } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const item = service[lang];
            return (
              <Reveal key={service.slug} delay={(i % 3) * 90}>
                <ServiceCard service={service} item={item} i={i} t={t} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
