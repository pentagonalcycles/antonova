# TESoul'RA Website Design Spec

Date: 2026-04-10
Project: Client website for TESoul'RA
Platform: Next.js on Vercel (primary)
Status: Approved design baseline, pre-implementation planning

## 1. Goals and Scope

### Primary goals
- Deliver a visually distinctive, high-fidelity spiritual healing website aligned with the client brief.
- Preserve source copy fidelity from the LibreOffice document while improving structure and readability.
- Launch on Vercel using the user's standard client workflow.

### In-scope (Phase 1)
- Core pages:
  - Landing/Welcome
  - About
  - What is Energy Healing
  - What is Sekhem Energy
  - Contact
- Testimonials carousel scaffolding with intentional empty state (content to be added later).
- Visual system implementation with palette, typography, spacing, and atmospheric background direction from brief.
- Parallax-style hero treatment with performance-aware motion.

### Out of scope (Phase 1)
- Booking/payment flow integrations.
- Full CMS/editor backend beyond lightweight content update pathways.
- Analytics dashboards beyond minimal deployment-level observability.

## 2. Source Inputs

### Content source
- Primary source document: `Website layout and text.odt`.
- Working extracted text: `Website layout and text.txt`.

### Visual direction from source
- Lapis lazuli background direction with gold speck atmosphere.
- Yellow-gold welcome banner accent.
- Light blue/turquoise body text palette.
- Parallax effect request for welcome experience.
- Side-by-side rectangle layout rule where space allows; stacked fallback on narrower viewports.

## 3. Architecture

### Deployment model
- Framework: Next.js (App Router).
- Hosting: Vercel project under the user's existing Vercel workspace.
- Domain/DNS: mapped through existing client setup; Hostinger only used where necessary for DNS/email/legacy hosting coordination.

### Route structure
- `/` - Landing/Welcome
- `/about`
- `/what-is-energy-healing`
- `/what-is-sekhem-energy`
- `/contact`

### Component structure (planned)
- `HeroParallax` (layered atmospheric hero)
- `ContentSection` (long-form section wrapper with consistent rhythm)
- `SplitRectangles` (2-up cards that collapse to 1 column)
- `TestimonialsCarousel` (empty-state capable)
- `ContactForm` (submission + success/error states)
- `SiteHeader` / `SiteFooter`

### Styling strategy
- Tokenized design layer (colors, typography, spacing, motion timing).
- Scoped reusable section primitives to avoid one-off styling drift.
- Mobile-first responsive behavior with progressive enhancements for larger screens.

## 4. Content and Information Design

### Content handling principles
- Preserve client language and terminology exactly where meaningful (including names and spiritual terms).
- Normalize long-form text into readable paragraphs/sections without changing meaning.
- Mark incomplete sections from source as placeholders with clear editorial labels.

### Planned page composition
- Landing: welcome narrative + purpose framing + visual hero/parallax.
- About: practitioner profile, background, modality experience.
- Energy Healing: explanatory long-form educational content.
- Sekhem Energy: dedicated explanatory section (content placeholder if source remains incomplete).
- Contact: concise contact pathway and expectation-setting text.

### Testimonials scaffolding
- Add carousel container and controls with an explicit empty state.
- Support easy future insertion of testimonial entries without structural refactor.

## 5. Motion, Accessibility, and Performance

### Motion
- Use restrained parallax and reveal motion, tuned for readability and calm tone.
- Respect reduced-motion preferences.

### Accessibility baseline
- Semantic heading hierarchy and landmarks.
- Sufficient contrast for selected palette.
- Keyboard-focus visibility for interactive elements.
- Form labels and accessible status messaging.

### Performance baseline
- Favor optimized assets, minimal JS overhead for static content pages.
- Avoid heavy animation libraries unless needed.
- Verify key pages load quickly on mobile networks.

## 6. Contact Flow and Ops

### Contact flow
- Implement contact submission path with server-side handling suitable for Vercel deployment.
- Include anti-spam measure (honeypot and/or challenge service as needed).
- Provide user-facing success and failure states.

### Credentials and security handling
- Do not store Hostinger or Vercel credentials in repository files.
- Keep secrets in environment configuration only.
- Use least-privilege/project-specific accounts where possible.
- Rotate shared credentials after setup and handoff.

## 7. QA and Acceptance Criteria

### QA checklist
- Visual fidelity against approved direction on desktop and mobile.
- Copy fidelity against source document.
- Responsive behavior for side-by-side rectangle sections.
- Testimonials scaffold renders correctly in empty state.
- Contact flow successfully submits and reports outcome.

### Acceptance criteria
- All Phase 1 routes are present and internally navigable.
- Design language is consistent and intentional, not template-generic.
- Motion effects are smooth and non-disruptive.
- Deployment is live on Vercel with production URL and rollback-capable history.

## 8. Delivery Sequence (Implementation Planning Input)

1. Project scaffold and deployment baseline on Vercel.
2. Design token system and global layout shell.
3. Landing page hero/parallax and visual foundation.
4. Long-form content pages and typography rhythm.
5. Testimonials scaffold and contact flow.
6. QA pass (responsive, accessibility, performance, content fidelity).
7. Production release and handoff checklist.

## 9. Risks and Mitigations

- Risk: Source content gaps (e.g., incomplete Sekhem section).
  - Mitigation: explicit placeholders and content-ready structure.
- Risk: Heavy parallax harming performance/readability.
  - Mitigation: restrained implementation + reduced-motion handling.
- Risk: Palette contrast issues.
  - Mitigation: early contrast validation and token adjustment before full page rollout.
- Risk: Credential sprawl across tools.
  - Mitigation: centralized secret handling and post-setup credential rotation.
