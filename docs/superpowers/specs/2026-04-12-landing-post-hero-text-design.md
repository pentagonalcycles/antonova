# Landing Post-Hero Welcome Text Simplification Design Spec

Date: 2026-04-12
Project: TESoul'RA Next.js site
Scope: Landing page post-hero text cleanup and emphasis sizing (later superseded by canonical full copy block request)

## Objective

Original objective (2026-04-12): simplify the post-hero content block to one emphasized sacred-container sentence.

Current implemented objective (superseding update): render only the client-provided canonical landing copy block after the hero image, containing:
- `Welcome to TESoul’RA -Temple of Embodied Soul Remembrance & Alchemy`
- `Why Temple? ...`
- `Why Embodied Soul? ...`
- `Why Remembrance? ...`
- `Why Alchemy? ...`
with no extra post-hero images or additional text.

## Approved Direction

User-approved approach: **Option 1 (Home-section-only update)**.

- Keep hero area unchanged.
- Update only the content section immediately after hero.
- Remove post-hero `Welcome` heading and the duplicated welcome sentence.
- Keep one sentence and display it larger.

## Requirements

1. Remove post-hero heading text: `Welcome`.
2. Remove post-hero sentence:
   - `Welcome to TESoul'RA - Temple of Embodied Soul Remembrance & Alchemy.`
3. Retain only:
   - `The space I create in my healing sessions is a sacred container, a temple, for the restoration of your body and spirit.`
4. Render retained sentence in larger text style than surrounding default paragraph size.

## Design Decisions

### 1) Scope Isolation

- Implement changes in `app/page.tsx` and `app/globals.css` only.
- Keep `lib/content.ts` unchanged in this pass to minimize risk and avoid cross-page side effects.

### 2) Rendering Strategy

- Replace section paragraph mapping logic in Home post-hero block with a single explicit `<p>` element containing the retained sentence.
- Use empty section title value to suppress visible heading while preserving section wrapper spacing/layout.

### 3) Emphasis Styling

- Add dedicated class (e.g., `.landing-intro-emphasis`) for larger font size, balanced line-height, and centered readability.
- Reuse existing design tokens and color system; no palette changes.

## Files to Modify

- `app/page.tsx`
- `app/globals.css`
- `tests/unit/home.test.tsx` (assert updated content behavior)

## Out of Scope

- Hero animation/copy changes.
- Broader home layout restructuring.
- Content model refactor in `lib/content.ts`.

## Acceptance Criteria

1. Hero section remains image-led and unchanged in structure.
2. Post-hero section shows only the canonical five-paragraph copy block requested by client.
3. No post-hero session cards or extra post-hero images are rendered.
4. Content appears in the exact order provided by client (Welcome line, then four `Why ...` paragraphs).
5. Verification passes:
   - `npm run test:unit -- tests/unit/home.test.tsx`
   - `npm run test:e2e`
   - `npm run build`
