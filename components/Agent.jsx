import Image from "next/image";
import { agents } from "./data";
import { Facebook, Instagram, Phone, TwitterX } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SwipeCarousel from "./SwipeCarousel";

const socials = [
  { label: "Facebook", Icon: Facebook },
  { label: "Instagram", Icon: Instagram },
  { label: "Twitter / X", Icon: TwitterX },
];

/**
 * Agent
 * Team grid: on tablet/desktop a full-bleed portrait card with a
 * social-links overlay on hover; on mobile the photo becomes a compact
 * circular avatar inside a swipeable carousel with prev/next controls.
 */
export default function Agent() {
  return (
    <section id="agent" className="bg-primary-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Agents"
          title="Meet Our Excellent Agents"
          description="A hand-picked team of specialists — each one dedicated to matching you with the home that fits your life."
        />

        <SwipeCarousel
          ariaLabel="Our agents"
          controlsClassName="sm:hidden"
          className="mt-14 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4"
        >
          {agents.map((agent, index) => (
            <Reveal
              key={agent.name}
              delay={index * 100}
              className="h-full min-w-[85%] snap-start sm:min-w-0"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_0_0_1px_var(--color-line)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(18,59,74,0.12)]">
                {/* Mobile: compact circular portrait */}
                <div className="flex flex-col items-center px-7 pt-7 pb-6 text-center sm:hidden">
                  <div className="relative h-36 w-36">
                    <Image
                      src={agent.image}
                      alt={agent.alt}
                      fill
                      sizes="144px"
                      className="rounded-full object-cover ring-4 ring-primary-soft"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-navy/0 transition-colors duration-300 group-hover:bg-navy/30"
                    />
                    <div className="absolute inset-0 flex items-center justify-center gap-2.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                      {socials.map(({ label, Icon }) => (
                        <a
                          key={label}
                          href="#agent"
                          aria-label={`${agent.name} on ${label}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur transition-all duration-300 hover:bg-primary hover:text-white"
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-ink">{agent.name}</h3>
                  <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.08em] text-primary-ink">
                    {agent.role}
                  </p>
                  <a
                    href={agent.phoneHref}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 text-[14px] font-medium text-muted transition-colors hover:text-primary-ink"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {agent.phone}
                  </a>
                </div>

                {/* Tablet / desktop: full-bleed portrait */}
                <div className="relative hidden aspect-[4/5] w-full overflow-hidden sm:block">
                  <Image
                    src={agent.image}
                    alt={agent.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex justify-center gap-3 bg-linear-to-t from-navy/80 to-navy/0 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                    {socials.map(({ label, Icon }) => (
                      <a
                        key={label}
                        href="#agent"
                        aria-label={`${agent.name} on ${label}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-all duration-300 hover:bg-primary hover:text-white"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Tablet / desktop: details */}
                <div className="hidden flex-1 flex-col p-5 text-center sm:flex">
                  <h3 className="text-lg font-semibold text-ink">{agent.name}</h3>
                  <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.08em] text-primary-ink">
                    {agent.role}
                  </p>
                  <a
                    href={agent.phoneHref}
                    className="mt-auto inline-flex items-center justify-center gap-1.5 pt-4 text-[14px] font-medium text-muted transition-colors hover:text-primary-ink"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {agent.phone}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </SwipeCarousel>
      </div>
    </section>
  );
}