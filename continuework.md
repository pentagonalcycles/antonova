# Next Session — Booking & Payment Integration

## Context

The TESoul'RA website (Next.js 16, React 19, TypeScript) is live on the `feat/tesoulra-nextjs` branch, deployed to Vercel. The landing page currently has:

1. Hero section (logo, "WELCOME TO TESoul'RA" with "oul" in small-caps at 0.8em, two-line subtitle)
2. "Why" paragraphs (italic terms in turquoise, justified)
3. Einstein quote divider between "Why" section and About Me
4. About Me section (shared component with `/about` page)
5. Francisco Varela quote divider between About Me and Book a session
6. **Bookings section** (heading: "Book a session") — 2 session cards (In-Person, Distant) with egg images using object-contain (no cropping). Currently informational only.
7. Testimonials carousel (8 testimonials with decorative quotation marks, turquoise dots)
8. Footer with gold text and turquoise "Art is by Damian Nola" credit

Landing page color scheme: dark navy-to-lapis gradient background, turquoise for menu text and "Why" terms, gold for headings and quote frame bars. Responsive burger menu in gold for mobile (≤768px).

All 16 unit tests pass. CSS is clean (`globals.css`).

## Next Task: Booking & Payment Integration

The user wants the two session images in the Bookings section (`SessionInPerson.png`, `SessionRemote.png`) to be clickable, leading to a booking flow where users can:

1. **Book a session on a calendar** — select date/time from an appointments calendar
2. **Pay for the session** — handle payment transactions

The user will provide more details about payment transaction modalities.

## Landing Page Updates Completed (May 1, 2026)

- Hero: subtitle split into two lines, "oul" size increased to 0.8em
- "Why" paragraphs: italic terms styled in turquoise + italic
- Landing page quotes: added gold vertical side bars, turquoise text, equal vertical spacing
- Burger menu: golden yellow for mobile (≤768px)
- Section order: Bookings before Testimonials
- Heading changed from "Bookings" to "Book a session"
- Phone Consultation card removed from bookings (grid adjusted to 2 columns)
- Booking images: object-contain (no cropping)
- Einstein quote moved to landing page (removed from About page); typo fixed (Elbert → Albert)
- Francisco Varela quote added between About Me and Book a session
- About Me description updated: "a channel of sound and light language"
- About Me text revisions ("remembering rather than learning", em dash, removed "15 min consultations")
- Footer: added "Art is by Damian Nola" credit in turquoise with link
- Testimonial carousel dots: smaller turquoise circles
- Contact page logo: centered and enlarged
- Energy Healing page: text moved below image (no side text)
- Sekhem Energy page: quote removed, text moved below image

## Key Files

- `components/bookings-section.tsx` — the component to modify (make images clickable)
- `app/page.tsx` — landing page that uses BookingsSection
- `app/globals.css` — styles for `.booking-card`, `.booking-image`
- `lib/device.ts` + `components/device-provider.tsx` — device detection

## Spec & Plan

- Full design spec: `docs/superpowers/specs/2026-04-30-tesoulra-full-site-design.md`
- Use the brainstorming skill before implementation to discuss booking/payment approach
- Use writing-plans before coding

## Working Directory & Branch

- Repo: `/home/marco/Desktop/projects/websites/antonova`
- Worktree: `.worktrees/tesoulra-nextjs/`
- Branch: `feat/tesoulra-nextjs`

## Quality Gates

Before claiming completion:
- `npm run test:unit` — all tests must pass
- `npm run build` — must succeed
- Commit and push to Vercel

## Important Guardrails

- Do not change hero layout or hero fonts unless explicitly requested
- Keep working on `feat/tesoulra-nextjs` unless asked to branch
- Run `npm run test:unit` and `npm run build` before committing
