import { testimonials } from "./data";
import { Quote, Star } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SwipeCarousel from "./SwipeCarousel";

/**
 * Testimonials
 * Responsive testimonial grid on the soft background: each client is a card
 * with a circular avatar + quote badge, star rating, quote text and info.
 * All testimonials are visible at once (staggered reveal), instead of a
 * single-slide carousel.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-soft py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_50%_45%_at_50%_50%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What They Say About Us"
          description="Real words from the families who trusted Emilia Estates to find their perfect home."
        />

        <SwipeCarousel
          ariaLabel="Client testimonials"
          className="mt-14 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        >
          {testimonials.map((t, index) => (
            <Reveal
              key={t.name}
              delay={index * 100}
              className="h-full min-w-[85%] snap-start sm:min-w-[60%] md:min-w-0"
            >
              <figure className="group flex h-full flex-col items-center rounded-lg border border-line bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(18,59,74,0.12)] sm:p-9">
                {/* Avatar with quote badge */}
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-[24px] font-semibold text-white">
                    <span aria-hidden="true">{t.initials}</span>
                    <span className="sr-only">Portrait of {t.name}</span>
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-star text-charcoal ring-4 ring-white">
                    <Quote className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                {/* Rating */}
                <div
                  className="mt-6 flex gap-1 text-star"
                  role="img"
                  aria-label="Rated 5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-5 w-5" aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="mt-5 text-[16px] leading-relaxed text-ink sm:text-[17px]">
                  “{t.quote}”
                </blockquote>

                <figcaption className="mt-auto pt-6">
                  <span className="block text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-primary-ink">
                    {t.name}
                  </span>
                  <span className="mt-0.5 block text-[14px] text-muted">
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </SwipeCarousel>
      </div>
    </section>
  );
}