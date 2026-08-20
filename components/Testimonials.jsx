"use client";

import { useState } from "react";
import { testimonials } from "./data";
import { ArrowRight, Quote, Star } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Testimonials
 * Realshed-style testimonial carousel on the soft background: circular
 * avatar with a quote badge, star rating, quote text and client info.
 * Dependency-free — a small flex track plus prev/next + dots.
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="testimonials" className="bg-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What They Say About Us"
          description="Real words from the families who trusted Emilia Estates to find their perfect home."
        />

        <Reveal delay={100}>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            className="relative mx-auto mt-14 max-w-3xl overflow-hidden"
          >
            {/* Slides */}
            <div
              className="flex w-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t, i) => {
                const active = testimonials[index].name === t.name;
                return (
                <figure
                  key={t.name}
                  aria-hidden={!active}
                  inert={!active}
                  className="flex w-full shrink-0 flex-col items-center px-1 text-center sm:px-6"
                >
                  {/* Avatar with quote badge */}
                  <div className="relative">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-[26px] font-semibold text-white">
                      <span aria-hidden="true">{t.initials}</span>
                      <span className="sr-only">Portrait of {t.name}</span>
                    </div>
                    <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-star text-white ring-4 ring-soft">
                      <Quote className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  {/* Rating */}
                  <div
                    className="mt-7 flex gap-1 text-star"
                    role="img"
                    aria-label="Rated 5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-5 w-5" aria-hidden="true" />
                    ))}
                  </div>

                  <blockquote className="mt-6 text-lg leading-relaxed text-ink sm:text-[21px] sm:leading-relaxed">
                    “{t.quote}”
                  </blockquote>

                  <figcaption className="mt-7">
                    <span className="block text-lg font-semibold text-ink">
                      {t.name}
                    </span>
                    <span className="mt-0.5 block text-[14px] text-muted">
                      {t.role}
                    </span>
                  </figcaption>
                </figure>
                );
              })}
            </div>

            {/* Prev / Next */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute -left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white sm:-left-16"
            >
              <ArrowRight className="h-5 w-5 rotate-180" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="absolute -right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white sm:-right-16"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="mt-9 flex justify-center gap-2.5">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-primary" : "w-2.5 bg-line hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
