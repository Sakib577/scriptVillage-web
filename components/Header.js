"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { Logo } from "./Logo";
import { Icon } from "./Icons";
import { whatsappLink } from "@/lib/site.config";

const sections = ["services", "work", "process", "pricing", "faq"];

function LanguageToggle({ className = "" }) {
  const { lang, setLang } = useLanguage();
  const options = [
    { code: "en", label: "EN" },
    { code: "bn", label: "বাংলা" },
  ];
  return (
    <div
      role="group"
      aria-label="Language"
      className={`relative inline-flex items-center rounded-full border border-slate-200 bg-white p-1 text-sm font-medium shadow-sm ${className}`}
    >
      <span
        aria-hidden
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-ink transition-transform duration-300 ${
          lang === "bn" ? "translate-x-full" : "translate-x-0"
        }`}
      />
      {options.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          className={`relative z-10 min-w-14 rounded-full px-3 py-1 transition-colors ${
            lang === o.code ? "text-white" : "text-slate-600 hover:text-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoverState, setHoverState] = useState({ id: null, left: 0, width: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b ${
        scrolled || open 
          ? "border-[#0A1118]/8 bg-canvas/90 backdrop-blur-md shadow-sm shadow-black/5" 
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          aria-label="Code Molecule home" 
          onClick={(e) => {
            setOpen(false);
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Logo />
        </Link>

        <nav 
          className="relative hidden items-center lg:flex" 
          aria-label="Main"
          onMouseLeave={() => setHoverState(prev => ({ ...prev, id: null }))}
        >
          {/* Magic Sliding Pill Background */}
          <div 
            className={`absolute left-0 h-[36px] rounded-full bg-white shadow-md shadow-brand-500/10 ring-1 ring-brand-200/50 transition-all duration-300 ease-out ${hoverState.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{
              width: hoverState.width || 0,
              transform: `translateX(${hoverState.left || 0}px)`,
            }}
          />

          {sections.map((id) => (
            <Link
              key={id}
              href={`/#${id}`}
              onMouseEnter={(e) => setHoverState({ id, left: e.currentTarget.offsetLeft, width: e.currentTarget.offsetWidth })}
              className={`relative z-10 px-4 py-2 text-[15px] font-medium transition-colors duration-300 ${hoverState.id === id ? 'text-brand-600' : 'text-slate-600'}`}
            >
              {t.nav[id]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle className="hidden sm:inline-flex" />
          <Link
            href="/#contact"
            className="group btn-fancy btn-shimmer btn-glow-brand hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-brand-700 md:inline-flex"
          >
            <span>{t.nav.cta}</span>
            <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
          <button
            type="button"
            className="btn-fancy inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-200/90 bg-white text-ink transition hover:border-brand-400 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t.nav.menu}
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-slate-200/70 bg-canvas lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6" aria-label="Mobile">
            {sections.map((id) => (
              <Link
                key={id}
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                className="font-display border-b border-slate-100 py-4 text-2xl font-bold text-ink"
              >
                {t.nav[id]}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <LanguageToggle className="self-start" />
              <a
                href={whatsappLink(t.contact.form.intro)}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-fancy btn-shimmer btn-glow-brand inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 font-medium text-white transition hover:bg-brand-700"
              >
                {t.hero.primary}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
