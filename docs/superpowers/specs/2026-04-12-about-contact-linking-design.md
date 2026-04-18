# TESoul'RA About + Contact Linking and Session Layout Design Spec

Date: 2026-04-12
Project: TESoul'RA Next.js site
Scope: About page inline linking/styling updates and Contact page session-type layout section (later refined with intro-layout and logo-detail updates)

## Objective

Implement client-requested text linking and visual emphasis updates on the About page, and introduce a screenshot-aligned three-session layout block on the Contact page using the existing session image assets.

## Approved Requirements

1. On About page, every occurrence of the word `Sekhem` should link to `/what-is-sekhem-energy`.
2. The Einstein quote at the bottom of About should use a non-white accent color to stand out.
3. Update About sentence:
   - From: `I offer both in-person and distant healing sessions.`
   - To: `I offer both in-person and distant healing sessions and free 15 min consultations.`
4. In that sentence, apply links:
   - `in-person` → `/contact#session-inperson`
   - `distant` → `/contact#session-distant`
   - `free 15` → `/contact#session-free`
5. On Contact page, add a new `Session Types` visual section aligned with `antonova01.png` style.
6. Session Types section must include all three consultation options with PNG images.

## Design Decisions

### 1) About Page Rich Text Rendering

Because About content currently comes from plain string paragraphs, text-level linking requires controlled rich rendering for specific paragraphs.

- Keep most About paragraphs as plain text.
- Introduce targeted render logic for:
  - paragraphs containing `Sekhem`
  - the consultation sentence paragraph
  - Einstein quote paragraph
- Convert only required text fragments into link-styled inline elements.

This preserves content fidelity while allowing the required interactivity.

### 2) Sekhem Autolinking Rule

- Apply a deterministic transform on About paragraph text:
  - detect exact word token `Sekhem`
  - wrap with anchor to `/what-is-sekhem-energy`
- Do not alter other words (e.g., `Sekhmet` remains untouched).
- Keep punctuation and spacing unchanged.

### 3) Consultation Sentence Link Mapping

Render the updated consultation line with three inline anchors:

- `in-person` → `/contact#session-inperson`
- `distant` → `/contact#session-distant`
- `free 15` → `/contact#session-free`

Only the specified text fragments are links; surrounding words remain plain text.

### 4) Einstein Quote Accent

- Add dedicated class for quote paragraph (e.g., `.about-quote`).
- Use existing palette accent color (gold/turquoise family) rather than white body text.
- Keep readable contrast against current background.

## Contact Page Session Types Layout

### Placement

- Add `Session Types` block after introductory contact paragraphs and before `ContactForm`.

### Row Structure (Desktop)

Each session row includes:

- Left: image column (session PNG)
- Right: bordered panel with centered text

Rows in this order:

1. In-person session (`/images/SessionInPerson.png`) with text: `Book an in-person healing session (1.5 hours; £120)`
2. Distant session (`/images/SessionRemote.png`) with text: `Book a distant healing session (1 hour; £80)`
3. Free consultation (`/images/SessionPhoneFree.png`) with text: `Book a free 15 min consultation`

### Anchor Targets

Assign IDs on rows/panels:

- `session-inperson`
- `session-distant`
- `session-free`

About links land on these anchors.

### Responsive Behavior

- Desktop/tablet wide: two-column row (image + bordered panel).
- Mobile narrow: stack image above panel.
- Preserve spacing rhythm and centered text hierarchy.

### Visual Style Matching

To align with `antonova01.png`:

- Clear framed right-side panel (`1px` subtle border).
- Generous white-space in panel.
- Emphasize session type words (`in-person`, `distant`) with italic style where appropriate.
- Keep overall palette integrated with TESoul'RA site tokens.

## Files to Modify

- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/globals.css`
- Optional test updates if existing assertions need to reflect new structure:
  - `tests/unit/contact-page.test.tsx`
  - `tests/unit/content.test.ts`

## Out of Scope

- Route additions or navigation changes.
- Pricing model/content changes beyond requested wording.
- Site-wide typography redesign.
- Non-About/Contact content rewrites.

## Acceptance Criteria

1. Every `Sekhem` occurrence on About links to `/what-is-sekhem-energy`.
2. Einstein quote has a visibly distinct non-white accent style.
3. Updated consultation sentence appears exactly with added text and required links.
4. Contact page shows three session rows with corresponding images.
5. About links scroll to the correct Contact anchors.
6. Desktop layout visually matches the screenshot pattern (image left, framed panel right).
7. Mobile layout stacks cleanly and remains readable.
8. About quote appears in top intro block (right of About image) rather than bottom duplicate placement.
9. Contact page ends with an enlarged TESoul'RA logo image for detailed viewing.
10. Unit/e2e/build checks pass after implementation.
