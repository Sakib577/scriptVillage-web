"use client";

import { useState, useEffect } from "react";
import { Icon } from "./Icons";

export function BrowserMockup({ card }) {
  const MOCKUPS = [
    {
      url: "yourportfolio.com",
      content: (
        <div className="p-5 h-full flex flex-col justify-between bg-slate-50/70">
          {/* Portfolio Nav */}
          <div className="flex items-center justify-between animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-indigo-500" />
              <div className="h-2.5 w-16 rounded-full bg-slate-800" />
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-8 rounded-full bg-slate-300" />
              <div className="h-2 w-8 rounded-full bg-slate-300" />
            </div>
          </div>

          {/* Portfolio Hero */}
          <div className="flex flex-col items-center text-center space-y-2 pt-1">
            {/* Person Portrait */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              <div className="h-14 w-14 rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-md">
                <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <div className="h-10 w-10 rounded-full bg-linear-to-b from-indigo-200 to-indigo-400 mt-2" />
                </div>
              </div>
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
            </div>

            {/* Person Info */}
            <div className="space-y-1.5 flex flex-col items-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="h-3.5 w-28 rounded-full bg-slate-800" />
              <div className="h-2 w-36 rounded-full bg-indigo-500" />
              <div className="h-2 w-48 rounded-full bg-slate-400 mt-0.5" />
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 pt-1 animate-fade-in-up" style={{ animationDelay: "450ms" }}>
              <div className="h-6 w-20 rounded-full bg-slate-800 shadow-sm" />
              <div className="h-6 w-16 rounded-full border border-slate-300 bg-white" />
            </div>
          </div>

          {/* Portfolio Works Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div 
              className="group relative aspect-[16/8] rounded-xl overflow-hidden shadow-xs animate-fade-in-up" 
              style={{ animationDelay: "600ms" }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-sky-400 opacity-90" />
              <div className="absolute bottom-1.5 left-2 right-2 h-1.5 w-2/3 rounded-full bg-white/80" />
            </div>
            <div 
              className="group relative aspect-[16/8] rounded-xl overflow-hidden shadow-xs animate-fade-in-up" 
              style={{ animationDelay: "750ms" }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-rose-400 opacity-90" />
              <div className="absolute bottom-1.5 left-2 right-2 h-1.5 w-2/3 rounded-full bg-white/80" />
            </div>
          </div>
        </div>
      ),
    },
    {
      url: "yourlandingpage.com",
      content: (
        <div className="p-5 h-full flex flex-col justify-between bg-rose-50/20">
          {/* Landing Nav */}
          <div className="flex justify-between items-center animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <div className="flex items-center gap-1.5">
              <div className="h-4 w-4 rounded-full bg-rose-500" />
              <div className="h-2.5 w-14 rounded-full bg-slate-800" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-6 rounded-full bg-slate-300" />
              <div className="h-2 w-6 rounded-full bg-slate-300" />
              <div className="h-5 w-14 rounded-full bg-rose-500" />
            </div>
          </div>

          {/* Landing Hero */}
          <div className="flex flex-col items-center text-center space-y-2 pt-1">
            <div className="h-4 w-3/4 rounded-full bg-slate-800 animate-fade-in-up" style={{ animationDelay: "150ms" }} />
            <div className="h-2 w-4/5 rounded-full bg-slate-400 animate-fade-in-up" style={{ animationDelay: "300ms" }} />
            <div className="flex gap-2 pt-1 animate-fade-in-up" style={{ animationDelay: "450ms" }}>
              <div className="h-6 w-20 rounded-full bg-rose-500 shadow-sm shadow-rose-200" />
              <div className="h-6 w-16 rounded-full border border-slate-300 bg-white" />
            </div>
          </div>

          {/* Landing Graphic Banner */}
          <div 
            className="w-full h-24 rounded-xl bg-linear-to-tr from-rose-200 via-orange-100 to-amber-100 relative overflow-hidden shadow-xs border border-rose-100 animate-fade-in-up" 
            style={{ animationDelay: "600ms" }}
          >
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/70 rounded-full blur-lg" />
            <div className="absolute top-3 left-3 h-2 w-1/3 bg-white/90 rounded-full" />
            <div className="absolute top-7 left-3 h-1.5 w-1/4 bg-white/70 rounded-full" />
            <div className="absolute bottom-2.5 right-3 h-10 w-20 bg-white/50 backdrop-blur-xs rounded-lg border border-white/60 p-1.5 space-y-1">
              <div className="h-1.5 w-full bg-rose-400/60 rounded-full" />
              <div className="h-1.5 w-2/3 bg-slate-300 rounded-full" />
            </div>
          </div>
        </div>
      ),
    },
    {
      url: "yourbusiness.com",
      content: (
        <div className="space-y-4 p-5 h-full flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-md bg-brand-500" />
              <div className="h-3 w-20 rounded-full bg-ink" />
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-8 rounded-full bg-slate-200" />
              <div className="h-2 w-8 rounded-full bg-slate-200" />
              <div className="h-2 w-8 rounded-full bg-slate-200" />
            </div>
          </div>

          {/* Hero split */}
          <div className="grid grid-cols-5 items-center gap-4 pt-1">
            <div className="col-span-3 space-y-2.5">
              <div className="h-3.5 w-full rounded-full bg-slate-800 animate-fade-in-up" style={{ animationDelay: "180ms" }} />
              <div className="h-3.5 w-4/5 rounded-full bg-slate-800 animate-fade-in-up" style={{ animationDelay: "180ms" }} />
              <div className="h-2 w-full rounded-full bg-slate-300 animate-fade-in-up" style={{ animationDelay: "360ms" }} />
              <div className="h-2 w-3/4 rounded-full bg-slate-300 animate-fade-in-up" style={{ animationDelay: "360ms" }} />
              <div className="flex gap-2 pt-1 animate-fade-in-up" style={{ animationDelay: "540ms" }}>
                <div className="h-7 w-20 rounded-full bg-brand-500 shadow-xs" />
                <div className="h-7 w-16 rounded-full border border-slate-300" />
              </div>
            </div>
            <div 
              className="col-span-2 aspect-square rounded-2xl bg-linear-to-br from-brand-400 via-brand-500 to-teal-600 p-3 shadow-md shadow-brand-100 animate-fade-in-up" 
              style={{ animationDelay: "720ms" }}
            >
              <div className="h-full w-full rounded-xl border border-white/40 bg-white/10" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-2.5 pt-1">
            <div 
              className="rounded-xl border border-slate-100 p-2.5 bg-white shadow-xs animate-fade-in-up" 
              style={{ animationDelay: "900ms" }}
            >
              <div className="mb-1.5 h-5 w-5 rounded-lg bg-amber-100 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200" />
              <div className="mt-1 h-1.5 w-2/3 rounded-full bg-slate-100" />
            </div>

            <div 
              className="rounded-xl border border-slate-100 p-2.5 bg-white shadow-xs animate-fade-in-up" 
              style={{ animationDelay: "1050ms" }}
            >
              <div className="mb-1.5 h-5 w-5 rounded-lg bg-sky-100 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-sky-500" />
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200" />
              <div className="mt-1 h-1.5 w-2/3 rounded-full bg-slate-100" />
            </div>

            <div 
              className="rounded-xl border border-slate-100 p-2.5 bg-white shadow-xs animate-fade-in-up" 
              style={{ animationDelay: "1200ms" }}
            >
              <div className="mb-1.5 h-5 w-5 rounded-lg bg-rose-100 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200" />
              <div className="mt-1 h-1.5 w-2/3 rounded-full bg-slate-100" />
            </div>
          </div>
        </div>
      ),
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Start with yourbusiness.com
  const [displayedText, setDisplayedText] = useState(MOCKUPS[2].url);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeoutId;
    
    const startCycle = () => {
      timeoutId = setTimeout(() => {
        const nextIndex = (currentIndex + 1) % MOCKUPS.length;
        const targetText = MOCKUPS[nextIndex].url;
        
        setIsTyping(true);
        
        let currentTextLength = MOCKUPS[currentIndex].url.length;
        
        // Phase 1: Backspace current text
        const backspaceChar = () => {
          if (currentTextLength > 0) {
            setDisplayedText(MOCKUPS[currentIndex].url.slice(0, currentTextLength - 1));
            currentTextLength--;
            timeoutId = setTimeout(backspaceChar, Math.floor(Math.random() * 20) + 30); // Delete: 30-50ms
          } else {
            // Phase 2: Pause briefly after backspace
            timeoutId = setTimeout(typeNextChar, 180);
          }
        };

        let charIndex = 0;
        
        // Phase 3: Type new text
        const typeNextChar = () => {
          if (charIndex < targetText.length) {
            setDisplayedText(targetText.slice(0, charIndex + 1));
            charIndex++;
            timeoutId = setTimeout(typeNextChar, Math.floor(Math.random() * 40) + 40); // Type: 40-80ms
          } else {
            setIsTyping(false);
            setCurrentIndex(nextIndex); // Switch page after URL typing finishes
            startCycle(); // Queue next cycle
          }
        };
        
        backspaceChar();
        
      }, 4500); // 4.5 seconds per slide
    };

    startCycle();

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  const currentMockup = MOCKUPS[currentIndex];

  return (
    <div className="relative mx-auto w-full max-w-lg transition-all duration-500">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-tr from-brand-200/60 via-amber-100/60 to-sky-100/60 blur-2xl transition-all duration-700" />

      {/* Browser Window */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
        {/* Top Browser Bar */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3 relative z-10">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <div className="ml-3 flex flex-1 items-center gap-2 rounded-md bg-white px-3 py-1 text-xs text-slate-500 ring-1 ring-slate-200">
            <svg viewBox="0 0 24 24" className="h-3 w-3 text-brand-600" fill="currentColor" aria-hidden>
              <path d="M17 10V8A5 5 0 0 0 7 8v2H5v12h14V10h-2Zm-8 0V8a3 3 0 0 1 6 0v2H9Z" />
            </svg>
            <span className={`border-slate-400 pr-0.5 ${isTyping ? "border-r-2 animate-pulse" : ""}`}>
              {displayedText}
            </span>
          </div>
        </div>
        
        {/* Dynamic Web Content (Fixed 340px Height) */}
        <div className="h-[340px] relative bg-white overflow-hidden">
          <div className="absolute inset-0" key={currentIndex}>
            {currentMockup.content}
          </div>
        </div>
      </div>

      {/* FLOATING TRUST BADGES - OUTSIDE THE BROWSER, NEVER CUT OFF */}
      <div className="animate-float absolute -left-4 top-24 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block z-20">
        <p className="text-xs font-medium text-slate-500">{card.speed}</p>
        <p className="font-display text-2xl font-extrabold text-brand-600">98</p>
        <div className="mt-1 h-1.5 w-20 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[98%] rounded-full bg-brand-500" />
        </div>
      </div>

      <div
        className="animate-float absolute -right-3 bottom-10 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:flex z-20"
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
