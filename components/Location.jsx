import Image from "next/image";
import { landmarks, site } from "./data";
import { MapPin } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Location
 * Realshed-style section: map placeholder (local SVG) beside a list of
 * nearby landmarks. Swap the image for a real <iframe> embed when ready.
 */
export default function Location() {
  return (
    <section id="location" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Prime Location"
          title="In the Heart of the City"
          description="Perfectly connected to business, culture, and green space — everything that matters is minutes away."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Map placeholder */}
          <Reveal variant="left" className="lg:col-span-3">
            <div className="group relative aspect-16/10 overflow-hidden rounded-lg shadow-[0_20px_50px_rgba(18,59,74,0.12)]">
              <Image
                src="/images/map.svg"
                alt="Stylized map showing the property location near the marina"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 rounded-[3px] bg-navy/80 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
                {site.address}
              </span>
            </div>
          </Reveal>

          {/* Nearby landmarks */}
          <Reveal variant="right" delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center rounded-lg bg-white p-7 shadow-[0_0_0_1px_var(--color-line)] sm:p-9">
              <h3 className="text-2xl font-semibold text-ink">
                Nearby Landmarks
              </h3>
              <ul className="mt-6 divide-y divide-line">
                {landmarks.map((landmark) => (
                  <li
                    key={landmark.label}
                    className="group flex items-center justify-between gap-4 py-3.5 transition-transform duration-300 hover:translate-x-1.5"
                  >
                    <span className="flex items-center gap-3 text-sm font-medium text-ink">
                      <MapPin
                        className="h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {landmark.label}
                    </span>
                    <span className="shrink-0 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary-ink">
                      {landmark.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
