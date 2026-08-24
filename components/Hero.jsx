import Image from "next/image";
import PropertySearch from "./PropertySearch";
import { site } from "./data";
import Reveal from "./Reveal";

/**
 * Hero
 * Full-bleed hero: background photo (with a subtle, slow Ken Burns drift), a
 * dark legibility scrim, a staggered load entrance for the copy, and the
 * floating BUY/RENT search widget card beneath it.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-6rem)] items-center overflow-hidden"
    >
      {/* Background photo with a slow, subtle scale/pan */}
      <Image
        src="/images/Hero Section Image.jpg"
        alt=""
        fill
        sizes="100vw"
        fetchPriority="high"
        loading="eager"
        className="object-cover animate-kenburns"
      />

      {/* Legibility scrim — keeps the photo visible while the copy stays
          readable (darkens toward the left where the text sits) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-charcoal/60 via-charcoal/25 to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <p
          className="animate-fade-up text-shadow-hero flex items-center gap-3 text-[14px] font-medium uppercase tracking-[0.2em] text-white/90 sm:text-[15px]"
          style={{ animationDelay: "0.05s" }}
        >
          <span aria-hidden="true" className="h-px w-9 bg-primary" />
          {site.tagline}
        </p>
        <h1
          className="animate-fade-up text-shadow-hero mt-6 max-w-3xl text-balance text-[38px] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.15s" }}
        >
          Find Your Dream Home
          <span className="text-accent">.</span>
        </h1>
        <p
          className="animate-fade-up text-shadow-hero mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          style={{ animationDelay: "0.25s" }}
        >
          Discover exceptional residences in the heart of the city — where
          timeless design, curated amenities, and unmatched locations come
          together.
        </p>
        <div
          className="animate-fade-up mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4"
          style={{ animationDelay: "0.35s" }}
        >
          <a href="#contact" className="btn-primary">
            Schedule a Viewing
          </a>
          <a href="#properties" className="btn-outline-light">
            Explore Listings
          </a>
        </div>

        {/* Floating search widget — revealed on scroll */}
        <Reveal delay={150}>
          <PropertySearch className="mt-12 sm:mt-14" />
        </Reveal>
      </div>
    </section>
  );
}