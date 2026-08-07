import Image from "next/image";
import PropertySearch from "./PropertySearch";
import { site } from "./data";
import Reveal from "./Reveal";

/**
 * Hero
 * Realshed-style full-bleed hero: dark background image, big bold headline,
 * and the floating BUY/RENT search widget card beneath the copy.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-6rem)] items-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero.svg"
        alt=""
        fill
        sizes="100vw"
        fetchPriority="high"
        loading="eager"
        className="object-cover"
      />

      {/* Overlay for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-navy/90 via-navy/60 to-navy/25"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="flex items-center gap-3 text-[15px] font-medium uppercase tracking-[0.2em] text-white/85">
            <span aria-hidden="true" className="h-px w-9 bg-primary" />
            {site.tagline}
          </p>
          <h1 className="mt-6 max-w-3xl text-[42px] font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Find Your Dream Home
            <span className="text-primary-soft">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Discover exceptional residences in the heart of the city — where
            timeless design, curated amenities, and unmatched locations come
            together.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-light">
              Schedule a Viewing
            </a>
            <a href="#properties" className="btn-outline-light">
              Explore Listings
            </a>
          </div>
        </Reveal>

        {/* Floating search widget */}
        <Reveal delay={120}>
          <PropertySearch className="mt-14" />
        </Reveal>
      </div>
    </section>
  );
}
