# Dedicated Testimonials Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move testimonial content from Home to a dedicated `/testimonials` page and place Testimonials navigation before Contact.

**Architecture:** Reuse the existing `TestimonialsCarousel` component and current testimonial dataset by adding a new route page that owns testimonial rendering. Remove testimonial image/list sections from `app/page.tsx` and update header link order in `components/site-header.tsx`. Adjust unit/e2e tests to validate the new route and Home content removal.

**Tech Stack:** Next.js App Router, React/TypeScript, Vitest + Testing Library, Playwright.

---

## File Structure

- Create: `app/testimonials/page.tsx`
- Modify: `app/page.tsx`
- Modify: `components/site-header.tsx`
- Modify: `tests/unit/home.test.tsx`
- Modify: `tests/unit/components.test.tsx`
- Modify: `tests/e2e/smoke.spec.ts`

### Task 1: Add failing tests for new Testimonials route and nav order

**Files:**
- Modify: `tests/unit/components.test.tsx`
- Modify: `tests/e2e/smoke.spec.ts`

- [ ] **Step 1: Add failing unit test for header nav including Testimonials before Contact**

```tsx
it('renders testimonials nav before contact', () => {
  render(<SiteHeader />)

  const nav = screen.getByRole('navigation', { name: /main navigation/i })
  const links = within(nav).getAllByRole('link')
  const linkLabels = links.map((link) => link.textContent?.trim())

  expect(linkLabels).toContain('Testimonials')
  expect(linkLabels.indexOf('Testimonials')).toBeLessThan(linkLabels.indexOf('Contact'))
})
```

- [ ] **Step 2: Add failing e2e route expectation for `/testimonials`**

```ts
const paths = ['/', '/about', '/what-is-energy-healing', '/what-is-sekhem-energy', '/testimonials', '/contact']
```

- [ ] **Step 3: Run tests to confirm red state**

Run: `npm run test:unit -- tests/unit/components.test.tsx && npm run test:e2e -- tests/e2e/smoke.spec.ts`
Expected: FAIL because nav lacks Testimonials and `/testimonials` route does not yet exist.

- [ ] **Step 4: Commit failing tests**

```bash
git add tests/unit/components.test.tsx tests/e2e/smoke.spec.ts
git commit -m "test: add testimonials route and nav order requirements"
```

### Task 2: Implement Testimonials route and move content from Home

**Files:**
- Create: `app/testimonials/page.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create dedicated testimonials page using existing component and current testimonial copy**

```tsx
// app/testimonials/page.tsx
import { TestimonialsCarousel } from '@/components/testimonials-carousel'

const testimonials = [
  {
    quote: "Amazing healing with T'iam'arhat that cannot describe in words. I am forever grateful.",
    author: 'Marco B'
  },
  {
    quote:
      "I've been seeing T'iam'arhat for healing for a few years now and every session blows me away. Her healing range is incredible - nothing seems to be off limits for her. I've experienced health issues resolving spontaneously, puzzling the medical professionals, ancestral healing, past life trauma healing, soul fragment retrieval, implant removal, Galactic consciousness activation, and so much more. After each session I feel reborn, with flow and synchronicities flooding back into my life. Thank you, T'iam'arhat, for all the magic you brought into my life.",
    author: 'Claire P'
  },
  {
    quote:
      "T'iam'arhat was recommended to me by a psychic reader that I used to see regularly, who spoke very highly of her. I was still recovering from a painful breakup and betrayal at the time, struggling to find trust with a new man I was seeing. I was also stuck in a job I've outgrown, lacking courage and motivation to pursue my passion. After two sessions with T'iam'arhat, I was full of clarity, vitality, inspiration and peace. I left the job to build my own business as if it was a piece of cake. My new relationship also blossomed, and I'm now happily married with two beautiful children. So I feel it's no exaggeration to say that healing with T'iam'arhat has changed my life.",
    author: 'Emma S'
  },
  {
    quote:
      "I booked a session with T'iam'arhat on a friend's recommendation. I didn't know what to expect as I never had an energy healing before. I felt a lot of heat and other sensations during the session and had a significant shift in myself afterwards. I was calmer and kinder towards myself and others. The tension in my family dynamics magically dissolved somehow. During the session, she was spot on about the places where I had aches and pains in my body, which all disappeared after the session. Everything she was saying felt like exactly what I needed to hear. She also uncannily knew my self-sabotaging thought patterns, like she was reading my mind. Her knowledge, wisdom and compassion are deeply inspiring. I cannot recommend her strongly enough.",
    author: 'Natasha K'
  },
  {
    quote:
      "Had the most incredible session with T'iam'arhat. It was like a combination of Egyptian, Shamanic and Galactic ancestral healing all in one. I removed so much stuck, lower vibrational energy, trauma and released karmic soul contracts. I feel so much lighter, happier and free and have so much more energy and peace in my life.",
    author: 'Ash K'
  },
  {
    quote:
      "I had a session with T'iam'arhat, and it was a powerful experience. She's warm, professional and instantly puts you at ease. Her energy work is deeply effective, leaving me feeling lighter and more grounded. I couldn't recommend her more highly.",
    author: 'Steve B'
  }
] as const

export default function TestimonialsPage() {
  return <TestimonialsCarousel items={[...testimonials]} />
}
```

- [ ] **Step 2: Remove testimonials image block and carousel from Home page**

```tsx
// app/page.tsx
// Remove import:
// import { TestimonialsCarousel } from '@/components/testimonials-carousel'

// Remove testimonials visual section and <TestimonialsCarousel ... /> block entirely.
```

- [ ] **Step 3: Add unit test updates for Home no longer rendering testimonials**

```tsx
it('does not render testimonials content on home', () => {
  render(<HomePage />)

  expect(screen.queryByText(/testimonials/i)).not.toBeInTheDocument()
  expect(screen.queryByAltText(/testimonials visual/i)).not.toBeInTheDocument()
  expect(screen.queryByText(/amazing healing with t'iam'arhat/i)).not.toBeInTheDocument()
})
```

- [ ] **Step 4: Run updated unit tests for home and components**

Run: `npm run test:unit -- tests/unit/home.test.tsx tests/unit/components.test.tsx`
Expected: PASS with home testimonial removal and new nav order behavior.

- [ ] **Step 5: Commit route extraction changes**

```bash
git add app/testimonials/page.tsx app/page.tsx tests/unit/home.test.tsx
git commit -m "feat: move testimonials from home to dedicated page"
```

### Task 3: Update header nav and e2e assertions to new IA

**Files:**
- Modify: `components/site-header.tsx`
- Modify: `tests/e2e/smoke.spec.ts`

- [ ] **Step 1: Insert Testimonials link before Contact in header links array**

```tsx
const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Energy Healing', '/what-is-energy-healing'],
  ['Sekhem Energy', '/what-is-sekhem-energy'],
  ['Testimonials', '/testimonials'],
  ['Contact', '/contact']
] as const
```

- [ ] **Step 2: Remove obsolete home testimonials image assertion from e2e smoke**

```ts
// Remove:
await expect(page.getByAltText(/testimonials visual/i)).toBeVisible()
```

- [ ] **Step 3: Run e2e smoke tests for route and content expectations**

Run: `npm run test:e2e -- tests/e2e/smoke.spec.ts`
Expected: PASS with `/testimonials` in core paths and updated home checks.

- [ ] **Step 4: Commit nav and e2e updates**

```bash
git add components/site-header.tsx tests/e2e/smoke.spec.ts tests/unit/components.test.tsx
git commit -m "feat: add testimonials nav item before contact"
```

### Task 4: Full verification and regression sweep

**Files:**
- Verify all modified files

- [ ] **Step 1: Run full verification suite**

Run: `npm run test:unit && npm run test:e2e && npm run build`
Expected: all commands pass.

- [ ] **Step 2: Spot-check route behavior manually**

Run: `npm run dev`
Expected: `/testimonials` loads list; Home no longer shows testimonial list/image; nav order includes Testimonials before Contact.

- [ ] **Step 3: Commit any final test-alignment touchups (only if needed)**

```bash
git add app/testimonials/page.tsx app/page.tsx components/site-header.tsx tests/unit/home.test.tsx tests/unit/components.test.tsx tests/e2e/smoke.spec.ts
git commit -m "chore: finalize testimonials page extraction verification"
```

## Plan Self-Review

- Spec coverage:
  - New `/testimonials` route: Task 2.
  - Nav item before Contact: Task 1 + Task 3.
  - Home testimonials and image removal: Task 2.
  - Test updates for route and home expectations: Tasks 1, 2, 3.
  - Full verification with unit/e2e/build: Task 4.
- Placeholder scan: no TODO/TBD placeholders present.
- Type/identifier consistency: route path `/testimonials` and nav label `Testimonials` used consistently across header, unit tests, and e2e checks.
