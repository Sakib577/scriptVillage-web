"use client";

import { useRef, useState, useEffect, useCallback } from "react";

/**
 * MobileCarousel
 * – On mobile (< sm): shows a horizontal snap-scroll carousel with
 *   dot indicators, a right-edge fade, and a swipe hint.
 * – On sm+ breakpoints: renders children unchanged in a regular grid.
 *
 * Props:
 *   children      – array of card elements (each gets snap & sizing applied)
 *   count         – number of cards (used for dots)
 *   cardWidth     – Tailwind arbitrary-value class for card width on mobile, e.g. "w-[76vw]"
 *   fadeColor     – CSS color for the right-edge fade, e.g. "rgba(8,17,29,1)"
 *   gridClass     – Tailwind classes for the sm+ grid layout
 *   className     – extra classes on the outer wrapper
 */
export function MobileCarousel({
  children,
  cardWidth = "w-[82vw] max-w-[340px] sm:w-[46vw] sm:max-w-[380px] md:w-[44vw] md:max-w-[400px]",
  gridClass = "lg:grid-cols-3",
  className = "",
  dark = false,
}) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = Array.isArray(children) ? children : [children];

  // Update active dot on scroll
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const childNodes = el.querySelectorAll(":scope > div[data-slide]");
    if (!childNodes.length) return;

    let closestIdx = 0;
    let minDistance = Infinity;

    childNodes.forEach((node, idx) => {
      const distance = Math.abs(node.offsetLeft - scrollLeft - 16);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    const childNodes = el.querySelectorAll(":scope > div[data-slide]");
    if (childNodes[idx]) {
      childNodes[idx].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* ── Mobile & Tablet (< lg): horizontal touch carousel ── */}
      <div className="lg:hidden">
        {/* Scrollable track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="-mx-4 sm:-mx-6 flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 px-4 sm:px-6 pb-2 scroll-pl-4 sm:scroll-pl-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {items.map((child, i) => (
            <div
              key={i}
              data-slide={i}
              className={`${cardWidth} shrink-0 snap-start flex`}
            >
              {child}
            </div>
          ))}
          <div className="w-1 shrink-0" aria-hidden />
        </div>

        {/* Dot indicators & Arrows */}
        {items.length > 1 && (
          <div className="mt-5 sm:mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className={`p-1 rounded-full transition-colors ${activeIndex === 0 ? "text-slate-300 opacity-50" : dark ? "text-white/70 hover:text-white hover:bg-white/10" : "text-slate-400 hover:text-ink hover:bg-slate-100"}`}
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to card ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIndex
                      ? "w-6 h-2 bg-brand-500 shadow-sm"
                      : dark
                      ? "w-2 h-2 bg-white/20 hover:bg-white/40"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollTo(Math.min(items.length - 1, activeIndex + 1))}
              disabled={activeIndex === items.length - 1}
              className={`p-1 rounded-full transition-colors ${activeIndex === items.length - 1 ? "text-slate-300 opacity-50" : dark ? "text-white/70 hover:text-white hover:bg-white/10" : "text-slate-400 hover:text-ink hover:bg-slate-100"}`}
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* ── Desktop (lg+): normal grid ── */}
      <div className={`hidden lg:grid gap-6 ${gridClass}`}>
        {items}
      </div>
    </div>
  );
}

