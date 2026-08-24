"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "./icons";

/**
 * BackToTop
 * Floating circular button in the bottom-right corner. Fades in after the
 * visitor scrolls down and smooth-scrolls back to the hero on click.
 * Honors prefers-reduced-motion.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll(); // set initial state on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-white shadow-[0_10px_30px_rgba(18,59,74,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
