import Image from "next/image";
import { aboutFeatures } from "./data";
import { Check } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * About
 * Realshed-style two-column section on the light-green background: editorial
 * image with a floating stat card on one side, copy + feature checklist on
 * the other.
 */
export default function About() {
  return (
    <section id="about" className="bg-primary-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-[0_20px_60px_rgba(15,23,43,0.12)]">
              <Image
                src="/images/about.svg"
                alt="A bright, modern living space with floor-to-ceiling windows overlooking the city"
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 right-6 hidden rounded-lg bg-navy px-7 py-5 text-white shadow-[0_20px_50px_rgba(15,23,43,0.35)] sm:block">
              <p className="text-[34px] font-semibold leading-none text-primary-soft">15+</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-white/60">
                Years of Excellence
              </p>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="About the Residence"
              title="A Home Designed Around You"
            />
            <Reveal delay={100}>
              <p className="mt-5 text-[17px] leading-relaxed text-muted">
                The residence at Emilia has been imagined as a sanctuary in the
                sky — interiors bathed in natural light, materials chosen to age
                gracefully, and every detail considered so you can simply live
                beautifully.
              </p>

              <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {aboutFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[15px] font-medium text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-primary mt-9">
                Discover More
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
