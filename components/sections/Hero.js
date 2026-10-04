"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "../LanguageProvider";
import { Icon, WhatsAppIcon } from "../Icons";
import { whatsappLink } from "@/lib/site.config";

import { BrowserMockup } from "../BrowserMockup";

const HERO_VARIATIONS = {
  en: [
    // 0: yourportfolio.com
    {
      badge: "Personal Brands & Portfolios",
      titleA: "Personal websites",
      titleB: "built to establish",
      titleC: "authority & trust",
      subtitle:
        "Whether you're an industry expert, consultant, founder, or professional — stand out with a custom, fast personal website that turns your work into lasting authority.",
    },
    // 1: yourlandingpage.com
    {
      badge: "High-Converting Sales Pages",
      titleA: "High-impact pages",
      titleB: "built to turn",
      titleC: "clicks into sales",
      subtitle:
        "Laser-focused landing pages engineered for maximum conversions. Blazing fast speeds and compelling design that turn visitors into paying customers.",
    },
    // 2: yourbusiness.com
    {
      badge: "Now booking new projects",
      titleA: "Beautiful websites",
      titleB: "for your business",
      titleC: "delivered in days",
      subtitle:
        "Code Molecule designs and builds fast, modern landing pages, portfolios and business websites. Everything is agreed upfront — scope, price and timeline — so there are no surprises.",
    },
  ],
  bn: [
    // 0: yourportfolio.com
    {
      badge: "পার্সোনাল ব্র্যান্ড ও পোর্টফোলিও",
      titleA: "আপনার কাজ ও অভিজ্ঞতায়",
      titleB: "গড়ে তুলুন স্ট্রং",
      titleC: "পার্সোনাল ব্র্যান্ড",
      subtitle:
        "আপনি কনসালট্যান্ট, উদ্যোক্তা, টেক এক্সপার্ট বা প্রফেশনাল যাই হোন না কেন — একটি প্রিমিয়াম পোর্টফোলিও ওয়েবসাইট আপনার কাজের সুনাম ও পরিচিতি বহুগুণ বাড়িয়ে দেবে।",
    },
    // 1: yourlandingpage.com
    {
      badge: "হাই-কনভার্সন ল্যান্ডিং পেজ",
      titleA: "আপনার ক্যাম্পেইন ও পণ্যের",
      titleB: "জন্য তৈরি",
      titleC: "কনভার্টিং ল্যান্ডিং পেজ",
      subtitle:
        "ভিজিটরদের কাস্টমারে রূপান্তর করার জন্য অপটিমাইজড সেলস পেজ। দ্রুত স্পিড ও আধুনিক ডিজাইনে আপনার ব্যবসা ও সেলস বাড়িয়ে নিন কয়েক গুণ।",
    },
    // 2: yourbusiness.com
    {
      badge: "নতুন প্রজেক্ট নেওয়া হচ্ছে",
      titleA: "আপনার ব্যবসার জন্য",
      titleB: "সুন্দর ওয়েবসাইট",
      titleC: "মাত্র কয়েক দিনে",
      subtitle:
        "Code Molecule দ্রুত ও আধুনিক ল্যান্ডিং পেজ, পোর্টফোলিও আর বিজনেস ওয়েবসাইট ডিজাইন করে বানিয়ে দেয়। কাজের পরিধি, দাম আর সময় — সবকিছু শুরুর আগেই ঠিক করে নেওয়া হয়, তাই পরে কোনো ঝামেলা নেই।",
    },
  ],
};

// =========================================================================
// CONFIG TOGGLES: সহজে true / false করে নিয়ন্ত্রণ করতে পারেন
// =========================================================================
const DYNAMIC_HERO = true;     // false করলে সম্পূর্ণ Hero সেকশন (Headline, Badge, Subtitle) একবারে স্ট্যাটিক থাকবে
const DYNAMIC_SUBTITLE = true; // DYNAMIC_HERO true থাকলেও শুধু প্যারাগ্রাফ সাবটাইটেল স্ট্যাটিক রাখতে false দিন

export function Hero() {
  const { t, lang } = useLanguage();
  const h = t.hero;

  const [displayedSlide, setDisplayedSlide] = useState(2); // starts with yourbusiness.com (index 2)
  const [animPhase, setAnimPhase] = useState("visible"); // "visible" | "exiting" | "idle-bottom"
  const switchTimerRef = useRef(null);

  const handleSlideChange = useCallback((nextIndex) => {
    if (!DYNAMIC_HERO) return; // স্ট্যাটিক মোডে থাকলে স্লাইড পরিবর্তনের কোনো দরকার নেই
    if (switchTimerRef.current) clearTimeout(switchTimerRef.current);

    // Starts animation only when the link is entered into the website
    setAnimPhase("exiting");
    switchTimerRef.current = setTimeout(() => {
      setDisplayedSlide(nextIndex);
      setAnimPhase("idle-bottom");
      requestAnimationFrame(() => {
        setTimeout(() => setAnimPhase("visible"), 20);
      });
    }, 280);
  }, []);

  useEffect(() => {
    return () => {
      if (switchTimerRef.current) clearTimeout(switchTimerRef.current);
    };
  }, []);

  const langKey = lang === "bn" ? "bn" : "en";
  const variations = HERO_VARIATIONS[langKey] || HERO_VARIATIONS.en;

  // DYNAMIC_HERO false হলে সম্পূর্ণ স্ট্যাটিক ডিফল্ট টেক্সট দেখাবে
  const currentHero = DYNAMIC_HERO
    ? (variations[displayedSlide] || variations[2])
    : {
        badge: h.badge,
        titleA: h.titleA,
        titleB: h.titleB,
        titleC: h.titleC,
        subtitle: h.subtitle,
      };

  const animClass =
    !DYNAMIC_HERO
      ? ""
      : animPhase === "visible"
      ? "hero-text-enter"
      : animPhase === "exiting"
      ? "hero-text-exit"
      : "hero-text-idle-bottom";

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:flex lg:min-h-[calc(100dvh-4.25rem)] lg:items-center lg:pt-20 lg:pb-6">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className={animClass}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-800">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              {currentHero.badge}
            </span>

            <h1 className="font-display mt-6 min-h-[140px] text-4xl font-light tracking-tight text-ink sm:min-h-[160px] sm:text-5xl lg:min-h-[190px] lg:text-6xl">
              {currentHero.titleA}
              <br />
              {currentHero.titleB}{" "}
              <span className="relative whitespace-nowrap text-brand-600">
                {currentHero.titleC}
                {/* 
                  ====================================================
                  HIGHLIGHT OPTIONS (Comment / Uncomment to test)
                  ====================================================
                */}

                {/* OPTION 1: Hand-drawn smile/underline (Amazon style) */}
                {/* <svg viewBox="0 0 300 12" className="absolute -bottom-2 left-0 h-3 w-full text-amber-400" preserveAspectRatio="none" aria-hidden>
                  <path d="M2 9C80 3 220 3 298 9" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg> */}

                {/* OPTION 2 (Previous Option 3): Full-width Animated Glowing Pulse Line */}
                {/* 
                <span className="absolute -bottom-1.5 left-0 block h-[3px] w-full rounded-full bg-gradient-to-r from-brand-500 via-amber-400 to-brand-400 shadow-[0_0_12px_rgba(34,197,94,0.45)] animate-pulse" />
                */}

                {/* OPTION 3 (Previous Option 4): Sleek Gradient Line (Fade out style) - Currently Active */}
                <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-brand-400 via-amber-400 to-transparent"></span>

                
              </span>
            </h1>

            {DYNAMIC_HERO && DYNAMIC_SUBTITLE && (
              <p className="mt-8 min-h-[5.5rem] max-w-xl text-lg text-slate-600 sm:min-h-[4.5rem]">
                {currentHero.subtitle}
              </p>
            )}
          </div>

          {(!DYNAMIC_HERO || !DYNAMIC_SUBTITLE) && (
            <p className="mt-8 max-w-xl text-lg text-slate-600">{h.subtitle}</p>
          )}

          <div className="mt-10 flex flex-col gap-3.5 sm:flex-row">
            <a
              href={whatsappLink(t.contact.form.intro)}
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-fancy btn-shimmer btn-glow-whatsapp inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#20ba59]"
            >
              <WhatsAppIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
              <span>{h.primary}</span>
            </a>
            <a
              href="#pricing"
              className="group btn-fancy inline-flex items-center justify-center gap-2 rounded-full border border-brand-200/90 bg-white px-7 py-4 font-semibold text-ink shadow-xs transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600 hover:shadow-md hover:shadow-brand-500/10"
            >
              <span>{h.secondary}</span>
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
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

        <BrowserMockup card={h.card} onSlideChange={handleSlideChange} />
      </div>
    </section>
  );
}
