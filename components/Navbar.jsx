"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "./data";
import {
  Clock,
  Close,
  Facebook,
  Instagram,
  LinkedIn,
  MapPin,
  Menu,
  Phone,
  TwitterX,
  User,
} from "./icons";

/**
 * Navbar
 * Realshed-style header: a dark navy utility bar (address, hours, phone,
 * socials, sign-in) above a solid white navigation bar that sticks to the
 * top on scroll. Includes a responsive mobile menu with accessible toggle
 * semantics.
 */
const socials = [
  { label: "Facebook", href: "#", key: "facebook" },
  { label: "Instagram", href: "#", key: "instagram" },
  { label: "Twitter", href: "#", key: "twitter" },
  { label: "LinkedIn", href: "#", key: "linkedin" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Dark utility bar */}
      <div className="hidden bg-navy text-white/75 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-2.5 text-[13px]">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              {site.address}
            </span>
            <span className="hidden items-center gap-1.5 xl:inline-flex">
              <Clock className="h-4 w-4 text-primary" />
              Mon – Sat: 9:00am – 6:00pm
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
              <Phone className="h-4 w-4 text-primary" />
              {site.phone}
            </a>
            <div className="flex items-center gap-3 border-l border-white/15 pl-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-white/60 transition-colors hover:text-primary"
                >
                  <SocialIcon name={s.key} className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:text-primary">
              <User className="h-4 w-4" />
              Sign In
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div
        className={`border-b border-line bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_30px_rgba(15,23,43,0.06)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2.5" aria-label={`${site.name} — back to top`}>
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-primary text-[15px] font-bold text-white"
            >
              A
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[19px] font-semibold tracking-tight text-ink">Emilia</span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-primary">
                Estates
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-ink/70 transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary px-6 py-3 text-[14px]">
              Schedule a Viewing
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-soft lg:hidden"
          >
            {menuOpen ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-b border-line bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen ? "max-h-[34rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="mx-5 my-3 flex flex-col rounded-xl bg-white p-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-primary-soft hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary mt-2 px-6 py-3 text-[14px]">
            Schedule a Viewing
          </a>
        </nav>
      </div>
    </header>
  );
}

/* Tiny local helper so the topbar social links stay tidy */
function SocialIcon({ name, className }) {
  const map = { facebook: Facebook, instagram: Instagram, twitter: TwitterX, linkedin: LinkedIn };
  const Icon = map[name] ?? Facebook;
  return <Icon className={className} />;
}
