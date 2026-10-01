"use client";

import { useLanguage } from "../LanguageProvider";
import { Icon } from "../Icons";
import { Reveal, SectionHeading } from "../Reveal";
import { whatsappLink } from "@/lib/site.config";

export function Pricing() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section id="pricing" className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[28px_28px] opacity-[0.06]" />
      <div aria-hidden className="absolute top-1/2 left-1/2 h-96 w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} dark />

        <div className="mx-auto mt-16 grid max-w-6xl items-stretch gap-6 lg:grid-cols-3">
          {p.plans.map((plan, i) => {
            const featured = plan.popular;
            return (
              <Reveal
                key={plan.name}
                delay={i * 100}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  featured
                    ? "bg-white text-ink shadow-2xl shadow-brand-500/20 lg:-my-4 lg:py-12"
                    : "border border-white/10 bg-white/5 backdrop-blur"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold whitespace-nowrap text-ink shadow">
                    {p.popular}
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className={`mt-2 text-[15px] ${featured ? "text-slate-600" : "text-slate-300"}`}>{plan.desc}</p>

                <div className="mt-6">
                  <p className={`text-sm ${featured ? "text-slate-500" : "text-slate-400"}`}>{p.from}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-extrabold tracking-tight">{plan.price}</span>
                    <span className={`text-sm ${featured ? "text-brand-700" : "text-brand-300"}`}>· {plan.time}</span>
                  </div>
                </div>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px]">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          featured ? "bg-brand-100 text-brand-700" : "bg-brand-500/20 text-brand-300"
                        }`}
                      >
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      <span className={featured ? "text-slate-700" : "text-slate-200"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(`${t.contact.form.intro}\n${t.contact.form.labels.service}: ${plan.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition ${
                    featured ? "bg-brand-600 text-white hover:bg-brand-700" : "bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/20"
                  }`}
                >
                  {p.cta}
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-12 max-w-2xl text-center text-[15px] text-slate-400">{p.note}</Reveal>
      </div>
    </section>
  );
}
