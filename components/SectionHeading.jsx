import Reveal from "./Reveal";

/**
 * SectionHeading
 * Realshed-style section intro: green uppercase kicker + bold title + lead.
 *
 * Props:
 *   - eyebrow      : small uppercase kicker line
 *   - title        : main heading
 *   - description  : optional supporting paragraph
 *   - align        : "center" (default) or "left"
 *   - dark         : render on a dark background (white text)
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}) {
  const centered = align === "center";

  return (
    <Reveal className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className={`kicker ${centered ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[40px] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-[17px] leading-relaxed ${
            dark ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
