"use client";

import { useLanguage } from "../LanguageProvider";
import { FacebookIcon, Icon, LinkedInIcon, WhatsAppIcon } from "../Icons";
import { Reveal } from "../Reveal";
import { site, whatsappLink } from "@/lib/site.config";

const inputClass =
  "w-full rounded-xl border border-slate-200/90 bg-slate-50/70 px-4 py-3 text-[15px] text-ink placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15 focus:shadow-sm";

export function Contact() {
  const { t, lang } = useLanguage();
  const c = t.contact;
  const f = c.form;

  // No backend needed: the form composes a message and opens WhatsApp with it.
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const fields = ["name", "email", "service", "message"]
      .filter((key) => data.get(key)?.trim())
      .map((key) => `${f.labels[key]}: ${data.get(key).trim()}`);
    const text = [f.intro, "", ...fields].join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  const channels = [
    {
      label: c.whatsapp,
      value: site.whatsappDisplay || `+${site.whatsapp}`,
      href: whatsappLink(f.intro),
      icon: <WhatsAppIcon className="h-6 w-6" />,
      gradient: "from-[#25D366] to-[#128C7E]",
      glow: "group-hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)]",
      badge: lang === "bn" ? "দ্রুত উত্তর" : "Fast Reply",
    },
    {
      label: c.facebook,
      value: "fb.com/codemolecule",
      href: site.facebook,
      icon: <FacebookIcon className="h-6 w-6" />,
      gradient: "from-[#1877F2] to-[#0D5EC8]",
      glow: "group-hover:shadow-[0_8px_24px_rgba(24,119,242,0.35)]",
    },
    {
      label: c.linkedin,
      value: "linkedin.com/company/codemolecule",
      href: site.linkedin,
      icon: <LinkedInIcon className="h-6 w-6" />,
      gradient: "from-[#0A66C2] to-[#004182]",
      glow: "group-hover:shadow-[0_8px_24px_rgba(10,102,194,0.35)]",
    },
    {
      label: c.email,
      value: site.email,
      href: `mailto:${site.email}`,
      icon: <Icon name="mail" className="h-6 w-6" />,
      gradient: "from-[#059669] to-[#047857]",
      glow: "group-hover:shadow-[0_8px_24px_rgba(5,150,105,0.35)]",
    },
  ];

  return (
    <section id="contact" className="relative px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
      {/* Main Glass / Luminous Card */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-emerald-500/20 bg-gradient-to-br from-[#072417] via-[#051810] to-[#030e0a] px-6 py-14 shadow-[0_30px_90px_-20px_rgba(5,24,16,0.7)] sm:px-12 sm:py-20 lg:p-16">
        {/* Ambient Glowing Orbs */}
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-[100px]" />
        <div aria-hidden className="pointer-events-none absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-teal-400/15 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-emerald-600/15 blur-[90px]" />

        {/* Subtle Dotted Pattern Mesh */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] bg-[size:28px_28px] opacity-80"
        />

        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column: Heading & Interactive Channels */}
          <Reveal className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              {c.eyebrow}
            </div>

            <h2 className="font-display mt-4 text-3xl font-light tracking-tight sm:text-5xl lg:text-[46px] leading-[1.15]">
              {c.title}
            </h2>
            <p className="mt-4 max-w-md text-base sm:text-lg text-emerald-100/75 leading-relaxed">
              {c.subtitle}
            </p>

            <ul className="mt-10 space-y-3.5">
              {channels.map((ch) => (
                <li key={ch.label}>
                  <a
                    href={ch.href}
                    target={ch.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className={`group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 sm:p-4 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.09] hover:shadow-xl ${ch.glow}`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${ch.gradient} text-white shadow-md transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6`}
                    >
                      {ch.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300/80">
                          {ch.label}
                        </span>
                        {ch.badge && (
                          <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                            {ch.badge}
                          </span>
                        )}
                      </div>
                      <span className="block truncate text-sm sm:text-[15px] font-medium text-white/95 transition-colors group-hover:text-emerald-200">
                        {ch.value}
                      </span>
                    </div>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/40 transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:text-emerald-200 group-hover:translate-x-1">
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right Column: Modern Glass-White Form */}
          <Reveal delay={120}>
            <div className="relative rounded-[28px] bg-white p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] ring-1 ring-black/5 sm:p-9">
              {/* Form Card Header */}
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">
                    {lang === "bn" ? "সরাসরি বার্তা পাঠান" : "Send us a message"}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {lang === "bn" ? "WhatsApp-এ সরাসরি কথা বলুন" : "Connect straight to our team"}
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 shadow-sm">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                      {f.name} *
                    </span>
                    <input name="name" required autoComplete="name" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                      {f.email}
                    </span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <label className="mt-4 block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                    {f.service} *
                  </span>
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
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                    {f.message}
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={lang === "bn" ? "আপনার প্রজেক্ট বা বাজেট সম্পর্কে জানান..." : "Tell us about your requirements or budget..."}
                    className={`${inputClass} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="mt-6 group btn-fancy btn-shimmer btn-glow-whatsapp relative inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#16a34a] px-6 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#1ebc57] hover:to-[#15803d] hover:shadow-[0_14px_32px_rgba(37,211,102,0.45)]"
                >
                  <WhatsAppIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                  <span>{f.submit}</span>
                </button>

                <div className="mt-3.5 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
                  <Icon name="check" className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>{f.hint}</span>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
