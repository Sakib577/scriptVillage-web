"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import { dictionary } from "@/lib/dictionary";

const STORAGE_KEY = "sv-lang";
const DEFAULT_LANG = "en";
const listeners = new Set();

const isLang = (v) => v === "bn" || v === "en";

// A ?lang=bn link (e.g. from a Bangla Facebook ad) wins over the saved choice.
function readLang() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLang(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return isLang(saved) ? saved : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

function subscribe(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => DEFAULT_LANG);

  const setLang = useCallback((next) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode) — language just won't persist.
    }
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.delete("lang");
      window.history.replaceState(null, "", url);
    }
    listeners.forEach((l) => l());
  }, []);

  const toggle = useCallback(() => setLang(lang === "en" ? "bn" : "en"), [lang, setLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: dictionary[lang], setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
