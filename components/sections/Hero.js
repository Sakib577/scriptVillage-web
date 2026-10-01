"use client";

import { useLanguage } from "../LanguageProvider";
import { Icon, WhatsAppIcon } from "../Icons";
import { whatsappLink } from "@/lib/site.config";

function BrowserMockup({ card }) {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-tr from-brand-200/60 via-amber-100/60 to-sky-100/60 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <div className="ml-3 flex flex-1 items-center gap-2 rounded-md bg-white px-3 py-1 text-xs text-slate-500 ring-1 ring-slate-200">
            <svg viewBox="0 0 24 24" className="h-3 w-3 text-brand-600" fill="currentColor" aria-hidden>
              <path d="M17 10V8A5 5 0 0 0 7 8v2H5v12h14V10h-2Zm-8 0V8a3 3 0 0 1 6 0v2H9Z" />
            </svg>
            {card.url}
          </div>
        </div>

        <div className="space-y-5 p-6">
          <div className="flex items-center justify-between">
            <div className="h-3 w-20 rounded-full bg-ink" />
            <div className="flex gap-2">
              <div className="h-2 w-8 rounded-full bg-slate-200" />
              <div className="h-2 w-8 rounded-full bg-slate-200" />
              <div className="h-2 w-8 rounded-full bg-slate-200" />
            </div>
          </div>
          <div className="grid grid-cols-5 items-center gap-5 pt-2">
            <div className="col-span-3 space-y-3">
              <div className="h-4 w-full rounded-full bg-slate-800" />
              <div className="h-4 w-4/5 rounded-full bg-slate-800" />
              <div className="h-2 w-full rounded-full bg-slate-200" />
              <div className="h-2 w-3/4 rounded-full bg-slate-200" />
              <div className="flex gap-2 pt-2">
                <div className="h-7 w-20 rounded-full bg-brand-500" />
                <div className="h-7 w-16 rounded-full border border-slate-300" />
              </div>
            </div>
            <div className="col-span-2 aspect-square rounded-2xl bg-linear-to-br from-brand-400 via-brand-500 to-teal-600 p-3">
              <div className="h-full w-full rounded-xl border-2 border-white/40 bg-white/10" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-2">
            {["bg-amber-100", "bg-sky-100", "bg-rose-100"].map((c) => (
              <div key={c} className="rounded-xl border border-slate-100 p-3">
                <div className={`mb-2 h-6 w-6 rounded-lg ${c}`} />
                <div className="h-2 w-full rounded-full bg-slate-200" />
                <div className="mt-1.5 h-2 w-2/3 rounded-full bg-slate-100" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="animate-float absolute -left-4 top-24 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
        <p className="text-xs font-medium text-slate-500">{card.speed}</p>
        <p className="font-display text-2xl font-extrabold text-brand-600">98</p>
        <div className="mt-1 h-1.5 w-20 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[98%] rounded-full bg-brand-500" />
        </div>
      </div>

      <div
        className="animate-float absolute -right-3 bottom-10 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:flex"
        style={{ animationDelay: "1.5s" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-700">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-bold text-ink">{card.delivered}</p>
          <p className="text-xs text-slate-500">{card.mobile} · {card.live}</p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:flex lg:min-h-[calc(100dvh-4.25rem)] lg:items-center lg:pt-20 lg:pb-6">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-brand-200/40 blur-3xl" />
      <div className="absolute top-40 -left-40 h-[24rem] w-[24rem] rounded-full bg-amber-100/60 blur-3xl" />

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
