# Next Session — Booking & Payment Integration

## Instructions for Starting a New Session

1. Read this `continuework.md` file first for full context
2. Recreate the worktree if needed: `git worktree add .worktrees/tesoulra-nextjs feat/tesoulra-nextjs`
3. Start the dev server: `cd .worktrees/tesoulra-nextjs && npm run dev`
4. Always work in the `.worktrees/tesoulra-nextjs` directory — never the main repo
5. Before committing: run `npm run test:unit` then `npm run build` — both must pass
6. Commit and push: `git commit -m "..." && git push` (triggers Vercel deploy)

## Context

The TESoul'RA website (Next.js 16, React 19, TypeScript) is live on the `feat/tesoulra-nextjs` branch, deployed to Vercel. The landing page currently has:

1. Hero section — large centered logo, "TESoul'RA" title (with "oul" in small-caps at 0.8em), landscape parallax image, then two golden-yellow lines: "Welcome to TESoul'RA" and "Temple of Embodied Soul / Remembrance & Alchemy"
2. "Why" paragraphs (italic terms in turquoise, justified)
3. Einstein quote divider between "Why" section and About Me
4. About Me section (shared component with `/about` page)
5. Francisco Varela quote divider between About Me and Book a session
6. **Bookings section** (heading: "Book a session") — 3 session cards (Phone Consultation, In-Person, Distant) in a 3-column grid on desktop, 1-column on mobile. Card images use object-contain (no cropping). Currently informational only.
7. Tahkamenon quote divider between Bookings and Testimonials
8. Testimonials carousel (9 testimonials with decorative quotation marks, turquoise dots)
9. Footer with gold text and turquoise "Art is by Damian Nola" credit

Landing page color scheme: dark lapis lazuli texture background (fixed, full-bleed, no overlay), turquoise for menu text and "Why" terms, gold for headings and quote frame bars. Responsive burger menu in gold for mobile (≤768px).

All 16 unit tests pass. CSS is clean (`globals.css`).

## Next Task: Booking & Payment Integration

The user wants the session images in the Bookings section to be clickable, leading to a booking flow where users can:

1. **Book a session on a calendar** — select date/time from an appointments calendar (e.g., Calendly, Cal.com, or custom solution)
2. **Pay for the session** — handle payment transactions (Stripe, PayPal, or similar)

The user will provide more details about preferred payment provider and calendar integration modality.

## Landing Page Updates Completed (May 1, 2026)

- **Hero restructured**: large centered logo first, standalone "TESoul'RA" title, landscape image, then golden-yellow welcome text in two lines
- **"Why" paragraphs**: italic terms styled in turquoise + italic
- **Landing page quotes**: gold vertical side bars, turquoise text, equal vertical spacing normalized (last "Why" paragraph bottom margin removed, about-content h2 margin-top removed)
- **Burger menu**: golden yellow for mobile (≤768px)
- **Section order**: Bookings before Testimonials
- **Heading**: "Book a session"
- **Phone Consultation card** added back to bookings (3-column grid on desktop, 1-column on mobile)
- **Booking images**: object-contain (no cropping)
- **Einstein quote**: moved to landing page (removed from About page); typo fixed (Elbert → Albert)
- **Francisco Varela quote**: added between About Me and Book a session
- **Tahkamenon quote**: "Love is truth. Truth is love" — added between Bookings and Testimonials
- **About Me description**: "a channel of sound and light language"
- **About Me text revisions**: "remembering rather than learning", em dash, removed "15 min consultations"
- **Footer**: added "Art is by Damian Nola" credit in turquoise with link
- **Testimonial carousel dots**: fixed class name mismatch, all dots turquoise (inactive 35% opacity, active full opacity with scale)
- **Testimonial author names**: turquoise
- **Testimonial quote text**: turquoise
- **Sekhem links** in body text: turquoise + italic, linking to /what-is-sekhem-energy (headings remain gold)
- **Page titles**: "What is Energy Healing?" and "What is Sekhem Energy?" now include question marks
- **Booking card pricing text**: turquoise
- **Page images** (About Me, Energy Healing, Sekhem Energy): capped max-width to 480px on desktop, centered with bottom margin
- **Alchemy paragraph**: updated with new text about "golden light of our Soul"
- **Contact page**: WhatsApp number is now a clickable tel: link
- **Contact page**: logo removed from bottom
- **Energy Healing page**: text moved below image (no side text)
- **Sekhem Energy page**: quote removed, text moved below image
- **Testimonials carousel**: added Lee E testimonial (9 total)
- **Background**: replaced gradient with lapis lazuli texture (`BackgroundChatGPT05.jpeg`), fixed full-bleed, no CSS overlay

## Key Files

- `components/bookings-section.tsx` — booking cards component (3 cards: Phone, In-Person, Distant; to be enhanced with booking flow)
- `components/hero-parallax.tsx` — hero section (logo, title, landscape image, welcome text)
- `components/testimonials-carousel.tsx` — testimonials carousel (dot class name fixed)
- `components/about-content.tsx` — shared About Me content (h2 margin normalized)
- `lib/sekhem-links.tsx` — Sekhem inline link renderer (turquoise + italic)
- `app/page.tsx` — landing page (hero → why → Einstein quote → About → Varela quote → Bookings → Tahkamenon quote → Testimonials)
- `app/globals.css` — all styling (page-image max-width 480px, quote spacing normalized, hero restructured)
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
