# TESoul'RA — Site Design Specification

Date: 2026-04-30
Project: antonova
Branch: `feat/tesoulra-nextjs`

## Overview

TESoul'RA is a website for an energy healing practice operating under the name T'iam'arhat. The site is built with Next.js 16 (App Router), React 19, and TypeScript, deployed to Vercel. All pages are server-rendered dynamically due to user-agent device detection.

## Visual Identity

### Color Palette

| Token | Value | Use |
|-------|-------|-----|
| `--color-bg-lapis` | `#18327a` | Lighter end of page background gradient |
| `--color-bg-deep` | `#0a1238` | Deeper end of page background gradient |
| `--color-gold` | `#d7b663` | All headings, hero title/subtitle, brand, links, accents |
| `--color-turquoise` | `#79d7da` | Body links (fallback) |
| `--color-text` | `#d9f6f8` | Body text |
| `--color-surface` | `#1a2d66` | Card and panel backgrounds |

### Typography

| Token | Value | Use |
|-------|-------|-----|
| `--font-display` | Cinzel, Georgia, serif | Headings, hero title, nav brand, testimonial authors |
| `--font-body` | Cormorant Garamond, Georgia, serif | All body paragraphs, quote blocks |

### Background

The `body` uses a uniform linear gradient from deep blue (`#0a1238`) to lapis (`#18327a`). No radial overlays are applied (they were removed for visual uniformity).

### Logo

A circular gold/blue emblem with an egg outline, golden triangle containing a spiral. Used in:
- Site header nav (top-left, 40px)
- Hero header (above the hero image, 60–90px)
- Contact page footer detail view

## Site Structure & Navigation

### Header

Sticky top bar with gold border, semi-transparent dark background with backdrop blur. Contains:
- Brand link (logo + "TESoul'RA" text) → links to `/`
- Nav links: Home, About, Energy Healing, Sekhem Energy, Contact

Note: The "Testimonials" nav link was removed; testimonials are now embedded on the landing page as a carousel.

### Pages

| Route | Content |
|-------|---------|
| `/` | Hero → "Why" paragraphs → Einstein quote → About Me → Varela quote → Learn-more panels → Book a session → Tahkamenon quote → Testimonials carousel |
| `/about` | About Me heading + full About Me content |
| `/what-is-energy-healing` | Energy Healing content (image above all text) |
| `/what-is-sekhem-energy` | Sekhem Energy content (image above all text) |
| `/contact` | Contact details (WhatsApp — clickable tel link, email — clickable mailto link, social links), contact form |

No dedicated `/testimonials` route is used (the `/testimonials` page exists but the nav link was removed).

## Landing Page (`/`) — Section by Section

### 1. Hero Section

**Component:** `HeroParallax`

Structure (left-to-right, top-to-bottom):
- **Logo** (60–90px, left-aligned)
- **Title:** "WELCOME TO TES<small>oul</small>'RA" — gold, Cinzel, uppercase, single-line. The "oul" portion renders in small-caps style (lowercased, smaller font, `font-variant-caps: small-caps`).
- **Subtitle:** "Temple of Soul Remembrance & Alchemy" — gold, Cinzel, sized to approximately match the title's visual line width.
- **Hero image:** `LandingPage.jpg` displayed below the header text, using `background-size: contain` to show the full image without cropping, within the same column width (max 760px).

**Mobile behavior (<768px):** The hero header stacks vertically — logo (50px) centered above the title and subtitle, all center-aligned. The title wraps naturally (`white-space: normal`) and scales down to `clamp(1rem, 5.5vw, 1.6rem)` to fit narrow screens.

The hero header text, image, and all subsequent content share a common column (`.hero-column`, max-width 760px) for consistent left-edge alignment.

### 2. "Why" Paragraphs

Four paragraphs explaining the meaning of Temple, Embodied Soul, Remembrance, and Alchemy. Rendered as `<p>` elements with:
- Justified text alignment
- Italic formatting on the term between "Why" and "?" (e.g., "Why *Temple*?")
- The same column width as the hero

### 3. About Me Section

**Component:** `AboutContent` (shared with `/about` page)

Renders an `<h2>` heading "About Me" (gold, Cinzel — matching all other h2s), followed by:
- **Intro layout:** Image only (AboutMe.jpg portrait) — no side text
- **Body paragraphs:** Full About Me text content
- **Cross-links:** Every occurrence of "Sekhem" in the text is a turquoise italic link to `/what-is-sekhem-energy`. Every occurrence of "energy healing" is a turquoise link to `/what-is-energy-healing`. "Bi-Aura Therapy" is a turquoise link (opens in new tab) to `https://www.bi-aura.com/what-is-bi-aura-therapy`. The paragraph about session types has links for "in-person" → `/contact#session-inperson`, "distant" → `/contact#session-distant`

All paragraphs are justified.

### 4.5 Learn-More Panels

Two larger panel buttons (styled like booking cards but with gold display text) placed between the Varela quote and the Book a session section. They appear side-by-side on desktop and stack vertically on mobile:

1. **"What is energy healing?"** — links to `/what-is-energy-healing`, with `WhatIsEnergyHealing.png` image below the text
2. **"What is Sekhem energy?"** — links to `/what-is-sekhem-energy`, with `WhatIsSekhemEnergy.png` image below the text

Images are sized slightly larger than the booking card images (max-width 320px). Hover effect darkens the card background and highlights the gold border.

### 4.6 Testimonials Carousel

**Component:** `TestimonialsCarousel` (client component)

Displays 8 testimonials in a horizontal sliding carousel:
- **Marco B** — "Amazing healing..."
- **Claire P** — "I've been seeing T'iam'arhat for healing for a few years..."
- **Emma S** — "T'iam'arhat was recommended to me..."
- **Natasha K** — "I booked a session..."
- **Ash K** — "Had the most incredible session..."
- **Steve B** — "I had a session with T'iam'arhat..."
- **Kunal M** — "I had a healing session..."
- **Nicholas G** — "I was introduced to T'iam'arhat two years ago..."

Features:
- Left/right arrow buttons
- Dot navigation (1 per testimonial)
- Auto-rotation every 12 seconds (resets on user interaction)
- Touch swipe support (50px minimum swipe distance)
- Smooth CSS transition (0.5s ease)
- Quotes styled in italic, centered text with golden vertical side bars; author names right-aligned
- Cards: dark semi-transparent background with gold border
- Dot navigation (small turquoise circles, 6px)

### 5. Quote Dividers

Two blockquote elements with turquoise text, gold vertical side bars, and semi-transparent dark background:
- Einstein quote ("There are only two ways to live your life...") between "Why" section and About Me
- Francisco Varela quote ("When a living system is suffering...") between About Me and Learn-More panels

### 6. Bookings Section

**Component:** `BookingsSection`

Displays three session types as equal-sized cards in a 3-column row:
1. **Phone Consultation** — 15 minutes, Free — `SessionPhoneFree.png`
2. **In-Person Session** — 1.5 hours, £120 — `SessionInPerson.png`
3. **Distant Session** — 1 hour, £80 — `SessionRemote.png`

Each card contains a clickable square image (1:1 aspect ratio, object-contain, links to `/contact?booking=...` with pre-filled message), a title (gold h3), and a description. On mobile (<768px), cards stack vertically.

Clicking a session image navigates to the Contact page with the message field pre-filled:
- Phone Consultation → "I would like to make a booking for free phone consultation."
- In-Person Session → "I would like to make a booking for an in-person session."
- Distant Session → "I would like to make a booking for a distant session."

The pre-filled message is editable by the user. Hover effect applies a subtle opacity change to the images.

### 7. Tahkamenon Quote

A blockquote with turquoise text and gold vertical side bars:
- "Love is truth. Truth is love." — Tahkamenon

Placed between the Bookings section and the Testimonials carousel.

## Inner Pages

### About Page (`/about`)

Uses the same `AboutContent` component but renders with an `<h1>` "About Me" heading inside a `content-section` wrapper (narrow container, 760px max). The shared component omits the heading (`heading={false}` by default) when embedded on the landing page. Image only in intro layout (no side text).

### Energy Healing Page (`/what-is-energy-healing`)

- Page heading: "What is Energy Healing" (gold, h2)
- Hero image: `WhatIsEnergyHealing.jpg` (JPG, not PNG) above all text paragraphs
- All text below image
- All text justified

### Sekhem Energy Page (`/what-is-sekhem-energy`)

- Page heading: "What is Sekhem Energy" (gold, h2)
- Hero image: `WhatIsSekhemEnergy.jpg` (JPG, not PNG) above all text paragraphs
- No closing quote
- All text justified

### Sekhem Energy Page (`/what-is-sekhem-energy`)

- Page heading: "What is Sekhem Energy" (gold, h2)
- Hero image: `WhatIsSekhemEnergy.jpg` (JPG, not PNG) above all text paragraphs
- No closing quote
- All text justified

### Contact Page (`/contact`)

- Page heading: "Contact" (gold, h2)
- WhatsApp number: `+44 77 888 47 113` (clickable `tel:` link)
- Email: `contact@tesoulra.com` (clickable `mailto:` link)
- Social links: Facebook, Instagram (inline with SVG icons)
- Contact form (client component) with honeypot spam protection
- Logo detailed view image at the bottom (centered, larger size)

Note: The Contact page was simplified — the hero image, intro text, and session types rows were removed since that information now lives on the landing page Bookings section.

## Device Detection

The site implements server-side user-agent device detection:

**Component:** `DeviceProvider` (React Context) + `useDevice()` hook
**Utility:** `lib/device.ts` — parses User-Agent header to determine `{ isMobile, deviceType }`
**Usage:** `getDevice()` is called in the root layout on every request, making pages dynamically server-rendered. The device info is provided via React Context for use by any client component.

Current detection rules:
- iPad or Android without "mobile" → tablet
- Android/iPhone/iPod/BlackBerry/IE Mobile/Opera Mini → mobile
- Everything else → desktop

## Content Source

All text content is stored in `lib/content.ts` as a single exported `siteContent` object with sections for: `home`, `about`, `energyHealing`, `sekhemEnergy`, `contact`. Each page's sections are rendered from this central data source.

## Images

All images are served from `/public/images/`. Five images use high-resolution JPG format; remaining images (logo, session types, testimonials, contact) use PNG:

| File | Format | Use |
|------|--------|-----|
| `Logo.png` | PNG | Header, hero, contact page |
| `LandingPage.jpg` | JPG | Landing page hero |
| `AboutMe.jpg` | JPG | About Me portrait |
| `WhatIsEnergyHealing.jpg` | JPG | Energy Healing page |
| `WhatIsSekhemEnergy.jpg` | JPG | Sekhem Energy page |
| `Contact.jpg` | JPG | Contact page |
| `SessionInPerson.png` | PNG | Session type card |
| `SessionRemote.png` | PNG | Session type card |
| `SessionPhoneFree.png` | PNG | Session type card |
| `Testimonials.png` | PNG | Testimonials page |

## Testing

**Framework:** Vitest + React Testing Library (jsdom environment)
**Test files:** `tests/unit/*.test.{ts,tsx}`
**16 tests total across 8 test files:**
- `home.test.tsx` — hero, why paragraphs, testimonials
- `about-page.test.tsx` — Sekhem links, consultation links (in-person, distant)
- `contact-page.test.tsx` — contact details and links
- `testimonials-page.test.tsx` — heading order, carousel content
- `components.test.tsx` — header nav, brand, link ordering
- `content.test.ts` — page coverage
- `contact.test.ts` — Zod schema validation
- `validation.test.ts` — tooling bootstrap

**Quality gates:** `npm run test:unit`, `npm run build`

## Footer

Simple footer: "Temple of Embodied Soul Remembrance & Alchemy" centered, gold border top.
Second line: "Art is by Damian Nola" in turquoise, linking to `https://www.merlinsheart.com`.

## Header (Mobile)

Responsive burger menu (golden yellow, 3-bar icon) replaces nav links on screens ≤768px. Tapping reveals nav links in a vertical dropdown.
Second line: "Art is by Damian Nola" in turquoise, linking to `https://www.merlinsheart.com`.

## Header (Mobile)

Responsive burger menu (golden yellow, 3-bar icon) replaces nav links on screens ≤768px. Tapping reveals nav links in a vertical dropdown.

## Out of Scope (Not Implemented)

- Actual booking/payment system (Bookings section is informational only)
- Contact form backend (form posts to `/api/contact` which would need a server implementation)
- E2E test coverage (Playwright config exists but no e2e tests written)
- Parallax scroll effect (was attempted with CSS `background-attachment: fixed` but removed due to image distortion; may be revisited with JS-driven approach)
