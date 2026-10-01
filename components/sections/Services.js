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
  "bg-teal-50 text-teal-700 ring-teal-100",
];

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
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-2xl hover:shadow-slate-900/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
                >
                  <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${serviceAccents[i]}`}>
                    <Icon name={service.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="font-display mt-6 text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 flex-1 text-slate-600">{item.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    {t.serviceDetail.viewDetails}
                    <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
