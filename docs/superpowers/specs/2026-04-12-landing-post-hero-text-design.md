# Landing Post-Hero Welcome Text Simplification Design Spec

Date: 2026-04-12
Project: TESoul'RA Next.js site
Scope: Landing page post-hero text cleanup and emphasis sizing

## Objective

Simplify the post-hero content block on the landing page by removing redundant welcome text and retaining only the requested sacred-container sentence in a larger emphasis style.

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

1. No visible post-hero `Welcome` heading.
2. No visible post-hero `Welcome to TESoul'RA...` sentence.
3. Required sacred-container sentence is visible once in post-hero section.
4. Sentence uses larger emphasis style class.
5. Verification passes:
   - `npm run test:unit -- tests/unit/home.test.tsx`
   - `npm run build`
