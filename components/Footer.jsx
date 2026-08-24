import { navLinks, site } from "./data";
import { Facebook, Instagram, LinkedIn, Mail, MapPin, Phone, TwitterX } from "./icons";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "Twitter / X", href: "https://x.com", Icon: TwitterX },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedIn },
];

/**
 * Footer
 * Realshed-style dark navy footer with brand blurb, quick navigation,
 * contact details and social links, plus a copyright bar.
 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white" id="footer">
      {/* Soft glow accent at the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-primary/15 to-transparent"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2.5" aria-label={`${site.name} — back to top`}>
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-charcoal text-sm font-bold text-white"
              >
                A
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-semibold tracking-tight">Emilia</span>
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-primary-soft">
                  Estates
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${label} page`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-soft">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-primary-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-soft">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-soft" aria-hidden="true" />
                {site.address}
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 transition-colors hover:text-primary-soft">
                  <Phone className="h-4 w-4 shrink-0 text-primary-soft" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition-colors hover:text-primary-soft">
                  <Mail className="h-4 w-4 shrink-0 text-primary-soft" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p className="flex flex-col gap-1 text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </span>
            <span className="text-white/45">
              Designed &amp; Built by{" "}
              <span className="font-medium text-primary-soft">{site.developer}</span>
            </span>
          </p>
          <p className="flex gap-6">
            <a href="#home" className="transition-colors hover:text-primary-soft">
              Privacy Policy
            </a>
            <a href="#home" className="transition-colors hover:text-primary-soft">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
