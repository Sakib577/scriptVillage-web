"use client";

import { useLanguage } from "../LanguageProvider";
import { Icon } from "../Icons";
import { Reveal } from "../Reveal";

const icons = ["clipboard", "bolt", "mobile", "key"];

export function WhyUs() {
  const { t } = useLanguage();
  const w = t.why;

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[28px_28px]" />
      <div className="absolute -top-32 left-1/2 h-80 w-160 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-sm font-semibold uppercase tracking-[0.18em] text-brand-400">{w.eyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{w.title}</h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {w.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="rounded-3xl border border-white/10 bg-white/4 p-7 backdrop-blur transition hover:border-brand-400/40 hover:bg-white/7"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                <Icon name={icons[i]} className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-6 text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-[15px] text-slate-300">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
