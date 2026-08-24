"use client";

import { useEffect, useRef, useState } from "react";
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
 * top on scroll. Includes a responsive mobile menu that opens as a fixed
 * overlay pinned under the header — it never moves the page or jumps to the
 * top, and stays open until dismissed.
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
  const firstLinkRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll WITHOUT moving the page: pin the body at the
  // current scroll offset and restore it exactly on close. This is what
  // stops mobile browsers from snapping the page to the top.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const original = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${original}px`;
    body.style.left = "0";
    body.style.right = "0";
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      const html = document.documentElement;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, original);
      html.style.scrollBehavior = "";
    };
  }, [menuOpen]);

  // Focus the first menu link on open, close on Escape, and return focus to
  // the toggle button on close.
  useEffect(() => {
    if (!menuOpen) return undefined;
    firstLinkRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Dark utility bar */}
      <div className="hidden bg-navy text-white/75 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-2.5 text-[13px]">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary-soft" />
              {site.address}
            </span>
            <span className="hidden items-center gap-1.5 xl:inline-flex">
              <Clock className="h-4 w-4 text-primary-soft" />
              Mon – Sat: 9:00am – 6:00pm
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
              <Phone className="h-4 w-4 text-primary-soft" />
              {site.phone}
            </a>
            <div className="flex items-center gap-3 border-l border-white/15 pl-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-white/60 transition-colors hover:text-primary-soft"
                >
                  <SocialIcon name={s.key} className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:text-primary-soft">
              <User className="h-4 w-4" />
              Sign In
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div
        className={`border-b border-line bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_30px_rgba(18,59,74,0.06)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2.5" aria-label={`${site.name} — back to top`}>
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-charcoal text-[15px] font-bold text-white"
            >
              A
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[19px] font-semibold tracking-tight text-ink">Emilia</span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-primary-ink">
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
                className="text-[15px] font-medium text-ink/70 transition-colors duration-200 hover:text-primary-ink"
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
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-primary-soft lg:hidden"
          >
            {menuOpen ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — fixed overlay pinned under the header. The page keeps
          its scroll position and the menu stays open until dismissed. */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-[45] lg:hidden"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="absolute inset-0 h-full w-full cursor-default bg-navy/40 backdrop-blur-[2px]"
          />

          {/* Panel */}
          <div className="absolute inset-x-0 top-0 mx-4 mt-20 overflow-hidden rounded-2xl bg-white p-3 shadow-[0_30px_80px_rgba(18,59,74,0.25)]">
            <nav
              aria-label="Mobile"
              className="flex max-h-[calc(100dvh-8rem)] flex-col overflow-y-auto overscroll-contain"
            >
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3.5 text-[16px] font-medium text-ink transition-colors hover:bg-primary-soft hover:text-primary-ink"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={closeMenu} className="btn-primary mt-2 px-6 py-3 text-[14px]">
                Schedule a Viewing
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

/* Tiny local helper so the topbar social links stay tidy */
function SocialIcon({ name, className }) {
  const map = { facebook: Facebook, instagram: Instagram, twitter: TwitterX, linkedin: LinkedIn };
  const Icon = map[name] ?? Facebook;
  return <Icon className={className} />;
}