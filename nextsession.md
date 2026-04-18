# Next Session Handoff (TESoul'RA)

Date: 2026-04-18
Repo: `/home/marco/Desktop/projects/websites/antonova`
Active worktree: `/home/marco/Desktop/projects/websites/antonova/.worktrees/tesoulra-nextjs`
Branch: `feat/tesoulra-nextjs`

## Start Here Every Session

1. Work in the `tesoulra-nextjs` worktree on `feat/tesoulra-nextjs`.
2. Read these specs first:
   - `docs/superpowers/specs/2026-04-10-tesoulra-nextjs-design.md`
   - `docs/superpowers/specs/2026-04-12-about-contact-linking-design.md`
   - `docs/superpowers/specs/2026-04-12-testimonials-page-design.md`
   - `docs/superpowers/specs/2026-04-12-landing-post-hero-text-design.md`
3. Check git state and recent commits.
4. Apply only the newly requested changes for that session.

## Current Confirmed UI State

- Landing `/`:
  - Hero remains image-led.
  - Post-hero shows only the canonical 5-paragraph text block:
    - `Welcome to TESoul’RA -Temple of Embodied Soul Remembrance & Alchemy`
    - `Why Temple? ...`
    - `Why Embodied Soul? ...`
    - `Why Remembrance? ...`
    - `Why Alchemy? ...`
  - No extra post-hero images/cards.

- Header:
  - Top-left brand (logo + TESoul'RA text) links to `/` (home).

- About `/about`:
  - Quote moved to top intro layout, right of About image.
  - `Sekhem` links to `/what-is-sekhem-energy`.
  - Consultation links route to contact anchors:
    - `/contact#session-inperson`
    - `/contact#session-distant`
    - `/contact#session-free`

- Energy Healing `/what-is-energy-healing`:
  - Uses same split intro layout pattern as About (image left, first paragraph right).

- Sekhem Energy `/what-is-sekhem-energy`:
  - Uses split intro layout (image left, quote right).
  - Quote is not duplicated lower on the page.

- Testimonials `/testimonials`:
  - Order is:
    1. `Testimonials` heading (single occurrence)
    2. `/images/Testimonials.png`
    3. testimonial list

- Contact `/contact`:
  - Session rows and anchors exist.
  - WhatsApp/email/social links present.
  - Enlarged logo image added at page end for detailed viewing.

## Important Guardrails

- Do **not** reintroduce the old hero-logo experiment unless explicitly requested.
- Keep working on `feat/tesoulra-nextjs` unless asked to branch.
- Keep documentation in `docs/superpowers/specs/` synchronized with implementation after significant changes.

## Required Verification Before Claiming Completion

Run:
- `npm run test:unit`
- `npm run test:e2e`
- `npm run build`

## Vercel Preview Publishing Procedure

If user asks to publish/check on Vercel preview:
1. Commit requested edits.
2. Push `feat/tesoulra-nextjs` to `origin`.
3. Report pushed commit hash.

## Session Notes

- Specs were updated on 2026-04-18 to reflect latest approved implementation details.
- There is an untracked plan file in this branch history context:
  - `docs/superpowers/plans/2026-04-12-landing-post-hero-text-implementation.md`
