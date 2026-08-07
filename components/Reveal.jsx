"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal
 * Fades + slides its children into view the first time they scroll into the
 * viewport, using IntersectionObserver (no external animation library).
 *
 * Props:
 *   - children    : the content to reveal
 *   - className   : extra classes merged onto the wrapper element
 *   - delay       : transition delay in ms, useful for staggering grids
 *   - as          : wrapper element tag (defaults to "div")
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Fallback for browsers without IntersectionObserver: reveal content
    // after the first paint (deferred so we stay out of the effect body).
    if (!("IntersectionObserver" in window)) {
      const id = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
