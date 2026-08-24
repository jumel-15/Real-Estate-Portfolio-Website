# Emilia Estates — Luxury Real Estate Landing Page

A polished, fully responsive single-page real estate website built with **Next.js (App Router)**, **React**, and **Tailwind CSS**. Built as a frontend portfolio project — there is **no database, authentication, CMS, or backend**. Everything is static, local, and works offline.

## ✨ Features

- **Modern Coastal design system** — Deep Ocean `#123B4A` + Ocean Blue `#2F7180` accents on Pale Coastal Blue `#DCECEF` and Coastal White `#FAFAF7` surfaces, with Warm Sand `#E8D9C3` / `#C49A6C` gold accents, Rubik typeface, dark utility topbar, hero search widget, deep ocean footer
- **Fully responsive & touch-friendly** — mobile, tablet, and desktop layouts with comfortable tap targets and a visible keyboard-focus ring
- **Mobile navigation menu** — accessible hamburger toggle
- **Smooth scrolling** — native `scroll-behavior: smooth` with navbar offset
- **Fade-in on scroll** — lightweight `IntersectionObserver` `<Reveal />` component (no animation library)
- **Working demo contact form** — client-side validation + success state in React (no backend)
- **Testimonials, why-choose-us & team sections** — responsive testimonial grid, reasons-to-choose panel with counters, and a 4-agent team grid
- **Optimized images** — `next/image` with responsive `srcset`; local photography in `public/images` so nothing requires internet
- **Semantic HTML & accessibility** — ARIA labels, `role="alert"`/`role="status"` regions, `sr-only` labels, keyboard focus styles, `prefers-reduced-motion` support

## 🧱 Tech Stack

| Layer      | Technology                                              |
| ---------- | ------------------------------------------------------- |
| Framework  | [Next.js](https://nextjs.org) 16 (App Router)           |
| UI         | React 19                                                 |
| Styling    | Tailwind CSS v4 (CSS-first config via `@theme`)          |
| Fonts      | `next/font` (Rubik, self-hosted)                          |
| Language   | JavaScript (JSX)                                         |
| Icons      | Custom inline SVG components (no icon library)           |

## 📁 Project Structure

```
real_estate_project/
├── app/
│   ├── layout.js          # Root layout — fonts, metadata, global styles
│   ├── page.js            # Home page — assembles all sections
│   ├── globals.css        # Tailwind import, design tokens, buttons, reveal animation
│   └── icon.svg           # Favicon (Next.js serves it automatically)
├── components/
│   ├── Navbar.jsx         # Sticky header: dark utility bar + nav + mobile menu
│   ├── Hero.jsx           # Full-bleed hero with search widget
│   ├── PropertySearch.jsx # BUY/RENT tabbed search widget (demo only)
│   ├── PropertyCard.jsx   # Reusable listing card
│   ├── FeaturedProperties.jsx  # 3-card grid
│   ├── About.jsx          # Description + feature checklist
│   ├── Amenities.jsx      # Icons + labels grid
│   ├── WhyChooseUs.jsx    # "Reasons to choose us" panel + stat counters
│   ├── Testimonials.jsx   # Responsive testimonial card grid
│   ├── SwipeCarousel.jsx  # Mobile swipe carousel wrapper + controls
│   ├── Location.jsx       # Map placeholder + nearby landmarks
│   ├── Agent.jsx          # Team grid — agent cards with social overlay
│   ├── ContactForm.jsx    # Front-end inquiry form (React state)
│   ├── BackToTop.jsx      # Floating "back to top" button
│   ├── Footer.jsx         # Dark ocean footer — nav, contact, socials
│   ├── Reveal.jsx         # Scroll-reveal wrapper (IntersectionObserver)
│   ├── SectionHeading.jsx # Consistent kicker + title + lead
│   ├── icons.jsx          # Inline SVG icon set
│   └── data.js            # ✏️ All site content (edit this to customize)
└── public/images/         # Property & agent photography
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) **18.18+** (this project was built with Node 24)
- npm (ships with Node)

### Run locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> `next/font` downloads Rubik **once at build/install time** and self-hosts it — the browser makes no request to Google Fonts.

### Other commands

```bash
npm run lint   # ESLint
npm run build  # Production build (outputs a static `/.next` build)
npm run start  # Serve the production build locally
```

## ✏️ Customizing the Content

Almost all copy lives in **[components/data.js](components/data.js)**:

- **Site & brand** — `site` (name, phone, email, address)
- **Navigation** — `navLinks`
- **Search widget** — `searchOptions` (locations & property types for the hero dropdowns)
- **Listings** — `properties` (add/remove cards, change prices/stats)
- **Amenities** — `amenities` (icons keys map in `components/Amenities.jsx`)
- **Why choose us** — `whyChooseUs` + `whyChooseStats` (icon cards + counters)
- **Testimonials** — `testimonials` (name, role, initials, quote)
- **Landmarks** — `landmarks`
- **Agents** — `agents` (team grid: name, role, phone, portrait)

**Swapping images:** replace the files in `public/images/` with your own JPEG/PNG files (keep the same filenames, or update the paths in `data.js` / the component `src` attributes).

**Real map:** in `components/Location.jsx`, replace the `<Image />` map placeholder with a Google Maps / OpenStreetMap `<iframe>` embed of the address you want.

**Contact form:** the form is intentionally front-end only. To capture real leads, point `handleSubmit` in `components/ContactForm.jsx` at a form service such as [Formspree](https://formspree.io) or [Basin](https://usebasin.com), or a small Next.js Route Handler.

## 🌐 Deploying to Vercel

This is a standard Next.js app, so deployment is one click.

### Option A — Deploy from the dashboard

1. Push this folder to a GitHub, GitLab, or Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects **Next.js** — leave the defaults and click **Deploy**.
4. Your site is live at `https://<project>.vercel.app`.

### Option B — Deploy with the Vercel CLI

```bash
# 1. Install the CLI globally
npm i -g vercel

# 2. From the project folder, log in and deploy
vercel

# 3. Once you're happy, promote to production
vercel --prod
```

### After deploying

- Rename the project / set a custom domain under **Settings → Domains**.
- Re-run `vercel --prod` (or push to your repo) whenever you change content.

## 🎨 Design Tokens

Custom colors are defined in `app/globals.css` under `@theme` and compile to Tailwind utilities:

| Token              | Value      | Used for                        |
| ------------------ | ---------- | ------------------------------- |
| `background`       | `#fafaf7`  | Main page background (coastal)  |
| `primary`          | `#2f7180`  | Links, icons, hovers, gradients |
| `primary-dark`     | `#123b4a`  | Strong hover fills              |
| `primary-ink`      | `#1d5f6d`  | Readable accent text (kickers)  |
| `primary-soft`     | `#dcecef`  | Pale coastal surfaces / cards   |
| `accent`           | `#e8d9c3`  | Warm sand surfaces & badges     |
| `gold`             | `#c49a6c`  | Muted gold premium accents      |
| `ink`              | `#123b4a`  | Main body text                  |
| `charcoal`         | `#123b4a`  | Darkest fills + text on primary |
| `navy`             | `#123b4a`  | Footer + utility bar            |
| `muted`            | `#4d6067`  | Secondary text                  |
| `line`             | `#d3e3e6`  | Borders & dividers              |
| `soft`             | `#fafaf7`  | Light section backgrounds       |
| `sale`             | `#f94c4c`  | Sale / error accents            |
| `star`             | `#c49a6c`  | Ratings                         |

Try tweaking a value and the entire site updates — utilities like `text-primary` or `bg-navy` are generated from these tokens.

## 🙌 Credits

- **Designed & built by Jumel Fernandez**
- All property names, people, testimonials, and prices are fictional.

## 📄 License

Free to use for your portfolio. The property names, people, and prices are fictional.
