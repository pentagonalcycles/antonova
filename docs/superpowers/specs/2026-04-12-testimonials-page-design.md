# TESoul'RA Dedicated Testimonials Page Design Spec

Date: 2026-04-12
Project: TESoul'RA Next.js site
Scope: Move testimonial content from Home to a new dedicated Testimonials page and update navigation/tests (later refined with heading/image ordering updates)

## Objective

Create a dedicated `Testimonials` page and remove testimonial content from the Home page, while preserving testimonial order, styling, and wording exactly as currently approved.

## Approved Direction

User-approved implementation direction: **Option 1 (Direct route extraction)**.

- Add `/testimonials` route.
- Reuse existing `TestimonialsCarousel` presentation.
- Add `Testimonials` nav item before `Contact`.
- Remove both the testimonial image block and testimonial list from Home.
- Keep current testimonial text/order as-is.
- Do not refactor testimonial data model in this pass.

## Design Decisions

### 1) Routing and Navigation

- Add a new page route: `/testimonials`.
- Update header nav sequence to:
  - Home
  - About
  - Energy Healing
  - Sekhem Energy
  - Testimonials
  - Contact

No route slug changes for existing pages.

### 2) Home Page Composition Change

Remove these sections from `/`:

1. The standalone testimonials image section (`Testimonials visual`).
2. The `<TestimonialsCarousel />` section and its inline testimonial array.

All testimonial content should exist only on `/testimonials` after the change.

### 3) Dedicated Testimonials Page Rendering

- New page should render `TestimonialsCarousel` with current approved testimonial entries in the same order and wording.
- Keep existing author alignment behavior and overall component styling.
- Final approved top-of-page order is:
  1. `Testimonials` page heading (single occurrence)
  2. `/images/Testimonials.png`
  3. testimonial list content

### 4) Data Placement (Option 1 Scope)

- Keep testimonial data page-local for this pass (no centralized data refactor).
- Prioritize low-risk move with minimal surface area.

## Files Expected to Change

- `app/testimonials/page.tsx` (new)
- `components/site-header.tsx`
- `app/page.tsx`
- `tests/unit/home.test.tsx`
- `tests/e2e/smoke.spec.ts`
- Optional: add route-focused unit test if needed (`tests/unit/components.test.tsx` or new page test)

## Out of Scope

- New testimonial filtering/searching UX.
- Testimonial data normalization/refactor to `lib/content.ts`.
- Copy updates to testimonial text.

## Acceptance Criteria

1. A `Testimonials` nav link appears before `Contact`.
2. `/testimonials` route loads and displays all currently approved testimonials.
3. Home page does not render testimonial image block or testimonial list.
4. `/testimonials` renders heading first, image second, and list content below, with only one visible `Testimonials` heading.
5. Existing routes continue to load correctly.
6. Automated checks pass:
   - `npm run test:unit`
   - `npm run test:e2e`
   - `npm run build`

## Risk and Mitigation

- Risk: Test breakage due to Home assumptions about testimonial content.
  - Mitigation: Update unit/e2e assertions in same change set to reflect new source of truth at `/testimonials`.
- Risk: Navigation ordering drift.
  - Mitigation: Explicit nav ordering assertion in tests where practical.
