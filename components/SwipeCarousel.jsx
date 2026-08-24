"use client";

import { useRef } from "react";
import { ArrowRight } from "./icons";

/**
 * SwipeCarousel
 * Mobile-only horizontal scroll-snap carousel wrapper. On phones the grid
 * becomes a swipeable track with visible prev/next controls; on larger
 * screens the same element switches to a plain responsive grid.
 *
 * Props:
 *   - children          : the cards (each may carry its own slide width classes)
 *   - className         : extra classes merged onto the track (grid breakpoints)
 *   - ariaLabel         : accessible name for the region / buttons
 *   - controlsClassName : breakpoint at which the controls hide (default "md:hidden")
 */
export default function SwipeCarousel({
  children,
  className = "",
  ariaLabel = "Carousel",
  controlsClassName = "md:hidden",
}) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild;
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.85;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * amount, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        className={`no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-4 md:snap-none md:overflow-visible md:pb-0 ${className}`}
      >
        {children}
      </div>

      {/* Mobile-only prev / next controls */}
      <div className={`mt-6 flex items-center justify-center gap-3 ${controlsClassName}`}>
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label={`Previous ${ariaLabel}`}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white active:scale-95"
        >
          <ArrowRight className="h-5 w-5 rotate-180" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label={`Next ${ariaLabel}`}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white active:scale-95"
        >
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}