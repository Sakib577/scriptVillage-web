"use client";

import { useLanguage } from "../LanguageProvider";
import { Icon, WhatsAppIcon } from "../Icons";
import { whatsappLink } from "@/lib/site.config";

import { BrowserMockup } from "../BrowserMockup";

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:flex lg:min-h-[calc(100dvh-4.25rem)] lg:items-center lg:pt-20 lg:pb-6">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-800">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            {h.badge}
          </span>

          <h1 className="font-display mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {h.titleA}
            <br />
            {h.titleB}{" "}
            <span className="relative whitespace-nowrap text-brand-600">
              {h.titleC}
              <svg
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 h-3 w-full text-amber-400"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M2 9C80 3 220 3 298 9" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-slate-600">{h.subtitle}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(t.contact.form.intro)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-4 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              <WhatsAppIcon />
              {h.primary}
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink"
            >
              {h.secondary}
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-3 text-sm font-medium text-slate-700 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {h.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <BrowserMockup card={h.card} />
      </div>
    </section>
  );
}
