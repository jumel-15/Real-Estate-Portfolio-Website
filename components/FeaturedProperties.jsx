import { properties } from "./data";
import PropertyCard from "./PropertyCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/**
 * FeaturedProperties
 * Realshed-style section that grids three <PropertyCard /> listings under a
 * heading, with a "View All Properties" call-to-action.
 */
export default function FeaturedProperties() {
  return (
    <section id="properties" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Properties"
          title="Residences Worth Falling For"
          description="A hand-picked selection from our current portfolio — each home is a statement of design, comfort, and location."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} delay={index * 120} />
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a href="#contact" className="btn-outline px-10">
            View All Properties
          </a>
        </Reveal>
      </div>
    </section>
  );
}
