import { whyChooseStats, whyChooseUs } from "./data";
import { Heart, Star, User } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/* Maps the icon keys used in data.js to their components */
const iconMap = {
  star: Star,
  user: User,
  heart: Heart,
};

/* Colored icon chips — one accent per card, mirroring the Realshed pattern */
const iconChip = {
  star: "bg-star/15 text-star",
  primary: "bg-primary/15 text-primary",
  sale: "bg-sale/15 text-sale",
};

/**
 * WhyChooseUs
 * Realshed-style "reasons to choose us" section: a light-green rounded panel
 * with three colored icon cards, followed by a stats counter row.
 */
export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="rounded-lg bg-primary-soft px-6 py-12 sm:px-12 sm:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Why Choose Us?"
              title="Reasons To Choose Us"
              description="More than a broker — a dedicated team that puts your goals first at every step of the journey."
            />
            <Reveal delay={100}>
              <a href="#contact" className="btn-primary shrink-0 px-6 py-3 text-[14px]">
                Contact Us
              </a>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/70">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <Reveal key={item.title} delay={index * 100} className="h-full">
                  <div className="flex h-full flex-col items-center px-0 text-center md:px-8">
                    <span
                      className={`flex h-16 w-16 items-center justify-center rounded-full ${iconChip[item.color]}`}
                    >
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Stats counter row */}
        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {whyChooseStats.map(([value, label], index) => (
            <Reveal key={label} delay={index * 80}>
              <div className="rounded-lg border border-line bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_15px_40px_rgba(45,190,108,0.15)] sm:p-7">
                <p className="text-[32px] font-semibold text-primary">{value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-muted">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
