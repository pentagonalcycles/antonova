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

1. **Book a session on a calendar** — select date/time from an appointments calendar (e.g., Calendly, Cal.com, or custom solution)
2. **Pay for the session** — handle payment transactions (Stripe, PayPal, or similar)

The user will provide more details about preferred payment provider and calendar integration modality.

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
- Testimonial carousel dots: fixed class name mismatch, all dots turquoise (inactive 35% opacity, active full opacity with scale)
- Testimonial author names: turquoise
- Testimonial quote text: turquoise
- Sekhem links in body text: turquoise + italic, linking to /what-is-sekhem-energy (headings remain gold)
- Page titles: "What is Energy Healing?" and "What is Sekhem Energy?" now include question marks
- Booking card pricing text: turquoise
- About Me image: full-width (matching Energy Healing and Sekhem Energy pages)
- Alchemy paragraph updated with new text about "golden light of our Soul"
- Contact page: WhatsApp number is now a clickable tel: link
- Contact page logo: centered and enlarged
- Energy Healing page: text moved below image (no side text)
- Sekhem Energy page: quote removed, text moved below image

## Key Files

- `components/bookings-section.tsx` — booking cards component (to be enhanced with booking flow)
- `components/testimonials-carousel.tsx` — testimonials carousel (dot class name fixed)
- `components/about-content.tsx` — shared About Me content
- `lib/sekhem-links.tsx` — Sekhem inline link renderer (turquoise + italic)
- `app/page.tsx` — landing page
- `app/globals.css` — all styling
- `lib/content.ts` — site text content

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
