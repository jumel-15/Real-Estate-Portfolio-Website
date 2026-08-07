import { amenities } from "./data";
import { Clubhouse, Garden, Gym, Parking, Pool, Security } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/* Maps the icon keys used in data.js to their components */
const iconMap = {
  pool: Pool,
  gym: Gym,
  security: Security,
  parking: Parking,
  garden: Garden,
  clubhouse: Clubhouse,
};

/**
 * Amenities
 * Realshed-style section listing the property's shared amenities as clean
 * white cards with green icon squares.
 */
export default function Amenities() {
  return (
    <section id="amenities" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Amenities"
          title="Everything You Need, Steps Away"
          description="Residents enjoy a suite of private amenities curated for comfort, wellness, and effortless entertaining."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, index) => {
            const Icon = iconMap[amenity.icon];
            return (
              <Reveal
                key={amenity.label}
                delay={index * 80}
                className="h-full"
              >
                <div className="group flex h-full items-start gap-5 rounded-lg border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_15px_40px_rgba(45,190,108,0.15)]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {amenity.label}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
