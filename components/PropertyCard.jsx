import Image from "next/image";
import { Area, ArrowRight, Bath, Bed, Heart, MapPin } from "./icons";
import Reveal from "./Reveal";

/**
 * PropertyCard
 * Realshed-style featured-property listing: image with badges, "Start From"
 * price, title, location, room stats and a green "See Details" button.
 *
 * Props:
 *   - property : one entry from the `properties` array in data.js
 *   - delay    : stagger delay (ms) for the reveal animation
 */
export default function PropertyCard({ property, delay = 0, className = "" }) {
  return (
    <Reveal delay={delay} className={`h-full ${className}`}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[8px] bg-white shadow-[0_0_0_1px_var(--color-line)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(18,59,74,0.12)]">
        {/* Top accent line that sweeps in on hover */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
        />

        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.image}
            alt={property.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-[3px] bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-charcoal">
            For Sale
          </span>
          <button
            type="button"
            aria-label={`Save ${property.name} to favourites`}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white active:scale-95"
          >
            <Heart className="h-[18px] w-[18px]" />
          </button>
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col p-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
            Start From
          </span>
          <p className="mt-1 text-[26px] font-semibold leading-tight text-ink">
            {property.price}
          </p>
          <h3 className="mt-2 text-[19px] font-semibold text-ink transition-colors duration-300 group-hover:text-primary-ink">
            {property.name}
          </h3>
          <p className="mt-2 flex items-center gap-1.5 text-[14px] text-muted">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {property.location}
          </p>

          {/* Stats */}
          <dl className="mt-5 flex items-center gap-5 border-t border-line pt-5 text-[14px] font-medium text-ink">
            <div className="flex items-center gap-1.5">
              <Bed className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
              <dt className="sr-only">Bedrooms</dt>
              <dd>{property.beds}</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
              <dt className="sr-only">Bathrooms</dt>
              <dd>{property.baths}</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <Area className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
              <dt className="sr-only">Living area</dt>
              <dd>{property.sqm} m²</dd>
            </div>
          </dl>

          <a
            href="#contact"
            className="btn-primary mt-6 w-full px-6 py-3 text-[14px]"
          >
            See Details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}
