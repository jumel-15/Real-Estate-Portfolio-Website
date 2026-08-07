/* ---------------------------------------------------------------------------
   icons.jsx
   Small, dependency-free inline SVG icon set. Every icon accepts a
   `className` prop so it can be sized/colored with Tailwind utilities
   (`<MapPin className="h-4 w-4 text-primary" />`).
--------------------------------------------------------------------------- */

const defaults = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

/* --- Property stats ------------------------------------------------------ */

export function Bed(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
      <path d="M3 16h18" />
      <path d="M6 20v-2M18 20v-2" />
      <path d="M7 12V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
    </svg>
  );
}

export function Bath(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.68 3 4 3.68 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" y1="5" x2="8" y2="7" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="7" y1="19" x2="7" y2="21" />
      <line x1="17" y1="19" x2="17" y2="21" />
    </svg>
  );
}

/* Maximize-style glyph used for "square meters" */
export function Area(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

export function MapPin(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* --- Amenities ----------------------------------------------------------- */

export function Pool(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M3 6c1.5 1.2 3 1.2 4.5 0 1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0" />
      <path d="M3 12c1.5 1.2 3 1.2 4.5 0 1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0" />
      <path d="M3 18c1.5 1.2 3 1.2 4.5 0 1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0" />
    </svg>
  );
}

export function Gym(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="m14.4 14.4-4.8-4.8" />
      <path d="M18.66 21.49a2 2 0 1 1-2.83-2.83l-1.77 1.77a2 2 0 1 1-2.83-2.83l6.37-6.36a2 2 0 1 1 2.83 2.83l-1.77 1.77a2 2 0 1 1 2.83 2.83z" />
      <path d="m21.5 21.5-1.4-1.4M3.9 3.9 2.5 2.5" />
      <path d="M6.4 12.77a2 2 0 1 1-2.83-2.83l1.77-1.77a2 2 0 1 1-2.83-2.83l2.83-2.83a2 2 0 1 1 2.83 2.83l1.77-1.77a2 2 0 1 1 2.83 2.83z" />
    </svg>
  );
}

export function Security(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Parking(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

export function Garden(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 22v-9" />
      <path d="M12 13c0-4 3-7 7-7-1 5-3.5 7-7 7Z" />
      <path d="M12 17c0-3 2.5-5 5-5-1 3.5-3 5-5 5Z" />
    </svg>
  );
}

export function Clubhouse(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M9 21v-4h6v4" />
      <path d="M9 12h6" />
      <path d="M12 12v5" />
    </svg>
  );
}

/* --- Contact ------------------------------------------------------------- */

export function Phone(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function Mail(props) {
  return (
    <svg {...defaults} {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function Clock(props) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

/* --- UI / navigation ----------------------------------------------------- */

export function Menu(props) {
  return (
    <svg {...defaults} {...props}>
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function Close(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function ArrowRight(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowDown(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

export function ArrowUp(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}

export function Check(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Search(props) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export function Heart(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

export function User(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function Building(props) {
  return (
    <svg {...defaults} {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01M12 14h.01M16 14h.01M8 14h.01" />
    </svg>
  );
}

export function Home(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

/* Filled star (ratings) */
export function Star(props) {
  return (
    <svg {...defaults} fill="currentColor" stroke="none" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* Filled quotation mark (testimonials) */
export function Quote(props) {
  return (
    <svg {...defaults} fill="currentColor" stroke="none" {...props}>
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </svg>
  );
}

/* --- Social (brand marks use fill) --------------------------------------- */

const brandDefaults = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
};

export function Facebook(props) {
  return (
    <svg {...brandDefaults} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Instagram(props) {
  return (
    <svg {...brandDefaults} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function TwitterX(props) {
  return (
    <svg {...brandDefaults} {...props}>
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.49h2.04L6.49 3.24H4.3l13.31 17.4Z" />
    </svg>
  );
}

export function LinkedIn(props) {
  return (
    <svg {...brandDefaults} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v1.5A6 6 0 0 1 16 8z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect width="4" height="12" x="2" y="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
