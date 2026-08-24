import { properties } from "./data";
import PropertyCard from "./PropertyCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SwipeCarousel from "./SwipeCarousel";

/**
 * FeaturedProperties
 * Realshed-style section that grids three <PropertyCard /> listings under a
 * heading, with a "View All Properties" call-to-action.
 */
export default function FeaturedProperties() {
  return (
    <section id="properties" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Properties"
          title="Residences Worth Falling For"
          description="A hand-picked selection from our current portfolio — each home is a statement of design, comfort, and location."
        />

        <SwipeCarousel
          ariaLabel="Featured properties"
          className="mt-14 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3"
        >
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              delay={index * 120}
              className="min-w-[85%] snap-start sm:min-w-[60%] md:min-w-0"
            />
          ))}
        </SwipeCarousel>

        <Reveal className="mt-12 text-center">
          <a href="#contact" className="btn-outline px-10">
            View All Properties
          </a>
        </Reveal>
      </div>
    </section>
  );
}
