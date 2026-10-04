"use client";

import { useLanguage } from "../LanguageProvider";
import { Icon, MessengerIcon, WhatsAppIcon } from "../Icons";
import { Reveal } from "../Reveal";
import { messengerLink, site, whatsappLink } from "@/lib/site.config";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-ink placeholder:text-slate-400 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const f = c.form;

  // No backend needed: the form composes a message and opens WhatsApp with it.
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const fields = ["name", "business", "service", "message"]
      .filter((key) => data.get(key)?.trim())
      .map((key) => `${f.labels[key]}: ${data.get(key).trim()}`);
    const text = [f.intro, "", ...fields].join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  const channels = [
    { label: c.whatsapp, value: `+${site.whatsapp}`, href: whatsappLink(f.intro), icon: <WhatsAppIcon className="h-6 w-6" />, tone: "bg-[#25D366]" },
    { label: c.messenger, value: `m.me/${site.messenger}`, href: messengerLink, icon: <MessengerIcon className="h-6 w-6" />, tone: "bg-[#0866FF]" },
    { label: c.email, value: site.email, href: `mailto:${site.email}`, icon: <Icon name="mail" className="h-6 w-6" />, tone: "bg-ink" },
  ];

  return (
    <section id="contact" className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-linear-to-br from-brand-700 via-brand-800 to-ink px-6 py-14 sm:px-12 sm:py-20">
        <div className="bg-grid absolute inset-0 opacity-20 invert" />
        <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="text-white">
            <p className="eyebrow text-sm font-medium uppercase tracking-[0.18em] text-brand-300">{c.eyebrow}</p>
            <h2 className="font-display mt-3 text-3xl font-light tracking-tight sm:text-5xl">{c.title}</h2>
            <p className="mt-5 max-w-md text-lg text-brand-100/90">{c.subtitle}</p>

            <ul className="mt-10 space-y-4">
              {channels.map((ch) => (
                <li key={ch.label}>
                  <a
                    href={ch.href}
                    target={ch.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${ch.tone}`}>
                      {ch.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-brand-200">{ch.label}</span>
                      <span className="block truncate font-medium">{ch.value}</span>
                    </span>
                    <Icon name="arrow" className="ml-auto h-5 w-5 shrink-0 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-700">{f.name} *</span>
                  <input name="name" required autoComplete="name" className={inputClass} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-700">{f.business}</span>
                  <input name="business" autoComplete="organization" className={inputClass} />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">{f.service} *</span>
                <select name="service" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    —
                  </option>
                  {f.options.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">{f.message}</span>
                <textarea name="message" rows={4} className={`${inputClass} resize-none`} />
              </label>
              <button
                type="submit"
                className="mt-6 group btn-fancy btn-shimmer btn-glow-whatsapp inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#20ba59]"
              >
                <WhatsAppIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                <span>{f.submit}</span>
              </button>
              <p className="mt-3 text-center text-sm text-slate-500">{f.hint}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
