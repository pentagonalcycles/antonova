# TESoul'RA Website Design Spec

Date: 2026-04-10
Project: Client website for TESoul'RA
Platform: Next.js on Vercel (primary)
Status: Implemented and updated through latest client-approved landing copy, About/Energy/Sekhem intro layout alignment, testimonials ordering refinements, and Contact/logo behavior updates

## 1. Goals and Scope

### Primary goals
- Deliver a visually distinctive, high-fidelity spiritual healing website aligned with the client brief.
- Preserve source copy fidelity from the LibreOffice document while improving structure and readability.
- Launch on Vercel using the user's standard client workflow.

### In-scope (Phase 1) implemented
- Core pages:
  - Landing/Welcome
  - About
  - What is Energy Healing
  - What is Sekhem Energy
  - Testimonials
  - Contact
- Visual system implementation with approved palette and atmospheric treatment.
- Dedicated testimonials page now populated with client-provided testimonials (no longer empty scaffolding).
- Contact page with pricing/contact details and session booking blocks:
  - Distant healing session (1 hour): 80 GBP
  - In-person healing session (1.5 hours): 120 GBP
  - Free 15 min consultation row included with dedicated anchor target
  - WhatsApp and email details included

### Out of scope (Phase 1)
- Booking/payment flow integrations.
- Full CMS/editor backend beyond lightweight content update pathways.
- Analytics dashboards beyond minimal deployment-level observability.

## 2. Source Inputs

### Content source
- Primary source document: `Website layout and text.odt`.
- Working extracted text: `Website layout and text.txt`.
- Follow-up client copy updates (About, Energy Healing, Sekhem, testimonials, pricing, contact details) applied.

### Visual direction from source
- Lapis lazuli background direction with gold speck atmosphere.
- Yellow-gold welcome banner accent.
- Light blue/turquoise body text palette.
- Parallax effect request for welcome experience.
- Side-by-side rectangle layout rule where space allows; stacked fallback on narrower viewports.

## 3. Architecture

### Deployment model
- Framework: Next.js (App Router).
- Hosting: Vercel project connected to repository with branch-based preview deployments.
- Domain/DNS: Vercel project workflow active; Hostinger retained only for external services if needed.

### Route structure
- `/` - Landing/Welcome
- `/about`
- `/what-is-energy-healing`
- `/what-is-sekhem-energy`
- `/testimonials`
- `/contact`

### Component structure (implemented)
- `HeroParallax` (image-led hero with floating, word-level title motion)
- `ContentSection` (long-form section wrapper with consistent rhythm)
- `SplitRectangles` (responsive card grid with optional images)
- `TestimonialsCarousel` (renders full testimonial list)
- `ContactForm` (submission + success/error states)
- `SiteHeader` / `SiteFooter`

### Styling strategy
- Tokenized design layer (colors, typography, spacing).
- Reusable section/image classes to keep visual consistency.
- Mobile-first responsive behavior with progressive enhancements.

## 4. Content and Information Design

### Content handling principles
- Preserve client language and terminology exactly where meaningful.
- Keep long-form blocks readable while retaining meaning.
- Keep client quotes and testimonial names as provided.

### Implemented page composition
- Landing: image-led hero followed by a post-hero canonical copy block containing the Welcome line and the four `Why ...` statements as text-only content (no extra post-hero images).
- About: full long-form practitioner profile copy with Sekhem word-linking, consultation anchor links, and quote moved to top intro layout at the right of the About image.
- Energy Healing: full explanatory long-form copy with same split intro layout pattern as About (image left, first paragraph right).
- Sekhem Energy: full explanatory long-form copy with split intro layout (image left, quote right), and quote removed from lower duplicate position.
- Testimonials: dedicated route with one `Testimonials` heading at top, then `/images/Testimonials.png`, followed by testimonial list.
- Contact: pricing, WhatsApp, email, social links, anchored session-type blocks, contact form, and enlarged TESoul'RA logo image at the end of the page.

### Testimonials status
- Testimonials are now hosted on dedicated `/testimonials` page and include all approved entries in current order:
  - Marco B
  - Claire P
  - Emma S
  - Natasha K
  - Ash K
  - Steve B

## 5. Motion, Accessibility, and Performance

### Motion
- Landing hero now uses image-led composition with floating, word-level headline motion over the hero image.
- Hero readability is controlled with overlay contrast and reduced headline scale tuned from client feedback.
- Reduced-motion behavior is implemented for both smaller screens and `prefers-reduced-motion`.

### Accessibility baseline
- Semantic heading hierarchy and landmarks.
- Focus and skip-link support.
- Form labels and status messaging.
- Alt text coverage for mapped imagery.

### Performance baseline
- Static-first pages for content routes.
- Minimal client-side logic.
- Build/test verification in place for release checks.

## 6. Contact Flow and Ops

### Contact flow
- Server-side contact submission route implemented.
- Validation + honeypot anti-spam baseline implemented.
- User-facing success/failure states implemented.

### Credentials and security handling
- Secrets not committed to repo.
- `.env.example` used for variable guidance.
- Git pushes and Vercel deployments handled through connected branch workflow.

## 7. QA and Acceptance Criteria

### QA checklist (current)
- Visual palette direction implemented and verified.
- Copy fidelity updated to latest client-provided text blocks.
- Testimonials route (`/testimonials`) rendered with heading-image-list order and single visible `Testimonials` heading.
- About inline link behavior implemented (`Sekhem`, consultation anchors).
- About, Energy Healing, and Sekhem intro blocks use consistent split image/text layout with responsive stacking.
- Contact pricing/session blocks/details/form visible and functioning, with enlarged logo image rendered at end of page.
- Header brand click behavior restored to home navigation (`/`).
- Unit/e2e/build checks passing in branch workflow.

### Acceptance criteria
- All core routes are present and internally navigable, including `/testimonials`.
- Design language is consistent and intentional.
- Landing hero shows full image visibility with smaller floating headline text overlay.
- Testimonials are presented on dedicated page with approved order/content and right-aligned author labels.
- About links and Contact session anchors navigate correctly.
- Deployment is live through Vercel branch workflow.

## 8. Remaining Work

1. Monitor Vercel preview feedback for any final copy/layout polish requests.
2. Prepare final production sign-off and merge to main when approved.

## 9. Risks and Mitigations

- Risk: Additional visual tuning requests may emerge after live preview review.
  - Mitigation: Keep hero motion and typography values centralized in `app/globals.css` for quick, low-risk adjustments.
- Risk: Ongoing copy updates can drift from source consistency.
  - Mitigation: Keep `lib/content.ts` as single source and re-run QA checks after each update.
- Risk: Social links are currently generic placeholders.
  - Mitigation: Replace with final account URLs when provided.
