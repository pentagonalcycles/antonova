# TESoul'RA Website Design Spec

Date: 2026-04-10
Project: Client website for TESoul'RA
Platform: Next.js on Vercel (primary)
Status: Implemented baseline (content and imagery updated), with one known visual gap remaining

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
  - Contact
- Visual system implementation with approved palette and atmospheric treatment.
- Testimonials section now populated with client-provided testimonials (no longer empty scaffolding).
- Contact page with pricing and contact details:
  - 80 pounds for 1 hour distant healing session
  - 120 pounds for 1 hour and 30 minutes session in person
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
- `/contact`

### Component structure (implemented)
- `HeroParallax` (layered atmospheric hero)
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
- Landing: welcome narrative, purpose framing, visual hero treatment, 4 “Why ...” cards, testimonial section.
- About: full long-form practitioner profile copy plus quote.
- Energy Healing: full explanatory long-form copy.
- Sekhem Energy: full explanatory long-form copy plus quote.
- Contact: pricing, WhatsApp, email, social links, and contact form.

### Testimonials status
- Testimonials section is populated with all client-provided entries:
  - Claire P
  - Emma S
  - Natasha K
  - Ash K
  - Steve B
  - Marco, London

## 5. Motion, Accessibility, and Performance

### Motion
- Current implementation uses layered hero visuals and restrained styling.
- Known gap: true scroll-speed differential parallax (foreground text vs background layer movement) is not yet implemented.
- Reduced-motion preference handling is implemented.

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
- Responsive rectangle behavior implemented.
- Testimonials content rendered on page.
- Contact pricing/details/form visible and functioning.
- Unit/e2e/build checks passing in branch workflow.

### Acceptance criteria
- All core routes are present and internally navigable.
- Design language is consistent and intentional.
- Deployment is live through Vercel branch workflow.
- Remaining parity item: implement true scroll parallax behavior per client instruction.

## 8. Remaining Work

1. Implement true parallax scrolling behavior on the landing hero (text moving faster than background).
2. Final visual pass against client expectation once parallax is implemented.
3. Final production sign-off and merge to main.

## 9. Risks and Mitigations

- Risk: Client expects strict parallax behavior and perceives current hero as incomplete.
  - Mitigation: Implement scroll-driven parallax transforms with reduced-motion fallback.
- Risk: Ongoing copy updates can drift from source consistency.
  - Mitigation: Keep `lib/content.ts` as single source and re-run QA checks after each update.
- Risk: Social links are currently generic placeholders.
  - Mitigation: Replace with final account URLs when provided.
