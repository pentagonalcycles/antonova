# About and Contact Linking + Session Types Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add About-page inline links/styling and a three-item Contact session layout block with anchored destinations matching the approved visual/content requirements.

**Architecture:** Keep `lib/content.ts` as the primary text source, but render About paragraphs through a small formatter in `app/about/page.tsx` so only required phrases become links/styled text. Build the new Contact session section directly in `app/contact/page.tsx` with semantic anchors and image/panel rows, then style both pages via targeted classes in `app/globals.css`. Update unit/e2e tests to lock behaviors and prevent regressions.

**Tech Stack:** Next.js App Router, React/TypeScript, global CSS, Vitest + Testing Library, Playwright.

---

## File Structure

- Modify: `app/about/page.tsx`
- Modify: `app/contact/page.tsx`
- Modify: `app/globals.css`
- Modify: `lib/content.ts`
- Modify: `tests/unit/contact-page.test.tsx`
- Create: `tests/unit/about-page.test.tsx`
- Modify: `tests/e2e/smoke.spec.ts`

### Task 1: Lock About-page link and styling requirements with failing tests

**Files:**
- Create: `tests/unit/about-page.test.tsx`
- Reference: `app/about/page.tsx`

- [ ] **Step 1: Add failing About-page behavior tests**

```tsx
import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AboutPage from '@/app/about/page'

describe('about page', () => {
  it('links every Sekhem token to the Sekhem page', () => {
    render(<AboutPage />)

    const sekhemLinks = screen.getAllByRole('link', { name: /^sekhem$/i })
    expect(sekhemLinks.length).toBeGreaterThan(2)
    sekhemLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/what-is-sekhem-energy')
    })
  })

  it('renders consultation sentence with required contact anchor links', () => {
    render(<AboutPage />)

    expect(screen.getByRole('link', { name: /in-person/i })).toHaveAttribute('href', '/contact#session-inperson')
    expect(screen.getByRole('link', { name: /^distant$/i })).toHaveAttribute('href', '/contact#session-distant')
    expect(screen.getByRole('link', { name: /free 15/i })).toHaveAttribute('href', '/contact#session-free')
  })

  it('styles Einstein quote with dedicated class for visual accent', () => {
    render(<AboutPage />)

    const quote = screen.getByText(/there are only two ways to live your life/i)
    expect(quote).toHaveClass('about-quote')
  })
})
```

- [ ] **Step 2: Run About tests to confirm red state**

Run: `npm run test:unit -- tests/unit/about-page.test.tsx`
Expected: FAIL because About currently renders plain paragraphs without these links/classes.

- [ ] **Step 3: Commit failing tests**

```bash
git add tests/unit/about-page.test.tsx
git commit -m "test: add about page linking and quote style requirements"
```

### Task 2: Implement About rich paragraph rendering and copy update

**Files:**
- Modify: `app/about/page.tsx`
- Modify: `lib/content.ts`
- Test: `tests/unit/about-page.test.tsx`

- [ ] **Step 1: Update About copy sentence in content source**

```ts
// lib/content.ts (about.sections sentence)
'I offer both in-person and distant healing sessions and free 15 min consultations.'
```

- [ ] **Step 2: Implement targeted paragraph formatter in About page**

```tsx
import Link from 'next/link'
import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'

function renderSekhemLinkedText(paragraph: string) {
  const parts = paragraph.split(/(Sekhem)/g)
  return parts.map((part, index) =>
    part === 'Sekhem' ? (
      <Link key={`${part}-${index}`} href="/what-is-sekhem-energy">Sekhem</Link>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    )
  )
}

function renderAboutParagraph(paragraph: string) {
  if (paragraph.startsWith('"There are only two ways')) {
    return <p className="about-quote">{paragraph}</p>
  }

  if (paragraph.startsWith('I offer both in-person and distant healing sessions')) {
    return (
      <p>
        I offer both <Link href="/contact#session-inperson">in-person</Link> and{' '}
        <Link href="/contact#session-distant">distant</Link> healing sessions and{' '}
        <Link href="/contact#session-free">free 15</Link> min consultations.
      </p>
    )
  }

  if (paragraph.includes('Sekhem')) {
    return <p>{renderSekhemLinkedText(paragraph)}</p>
  }

  return <p>{paragraph}</p>
}

export default function AboutPage() {
  const about = siteContent.about

  return (
    <ContentSection title={about.title}>
      <img src="/images/AboutMe.png" alt="About me portrait" className="page-image" />
      {about.sections.map((paragraph) => (
        <div key={paragraph}>{renderAboutParagraph(paragraph)}</div>
      ))}
    </ContentSection>
  )
}
```

- [ ] **Step 3: Run About tests to verify green state**

Run: `npm run test:unit -- tests/unit/about-page.test.tsx`
Expected: PASS for Sekhem links, consultation anchors, and quote class.

- [ ] **Step 4: Commit About implementation**

```bash
git add app/about/page.tsx lib/content.ts tests/unit/about-page.test.tsx
git commit -m "feat: add about page sekhem and consultation links"
```

### Task 3: Add Contact Session Types section with anchors and image-panel rows

**Files:**
- Modify: `app/contact/page.tsx`
- Modify: `tests/unit/contact-page.test.tsx`

- [ ] **Step 1: Add failing contact tests for session rows and anchor ids**

```tsx
it('renders anchored session type rows with all three images', () => {
  render(<ContactPage />)

  expect(screen.getByRole('heading', { name: /session types/i })).toBeInTheDocument()

  expect(screen.getByRole('img', { name: /in-person session visual/i })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: /distant session visual/i })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: /free consultation visual/i })).toBeInTheDocument()

  expect(document.getElementById('session-inperson')).toBeTruthy()
  expect(document.getElementById('session-distant')).toBeTruthy()
  expect(document.getElementById('session-free')).toBeTruthy()
})
```

- [ ] **Step 2: Run contact tests to verify failure**

Run: `npm run test:unit -- tests/unit/contact-page.test.tsx`
Expected: FAIL because session-type section/anchors do not exist yet.

- [ ] **Step 3: Implement Contact session rows in required order**

```tsx
<section className="session-types" aria-label="Session types">
  <h2>Session Types</h2>

  <article id="session-inperson" className="session-row">
    <img src="/images/SessionInPerson.png" alt="In-person session visual" className="session-row-image" />
    <div className="session-row-panel">
      <p>Book an <em>in-person</em> healing session</p>
      <p>(1.5 hours; £120)</p>
    </div>
  </article>

  <article id="session-distant" className="session-row">
    <img src="/images/SessionRemote.png" alt="Distant session visual" className="session-row-image" />
    <div className="session-row-panel">
      <p>Book a <em>distant</em> healing session</p>
      <p>(1 hour; £80)</p>
    </div>
  </article>

  <article id="session-free" className="session-row">
    <img src="/images/SessionPhoneFree.png" alt="Free consultation visual" className="session-row-image" />
    <div className="session-row-panel">
      <p>Book a free 15 min consultation</p>
    </div>
  </article>
</section>
```

- [ ] **Step 4: Re-run contact tests to verify pass**

Run: `npm run test:unit -- tests/unit/contact-page.test.tsx`
Expected: PASS with session rows, anchor IDs, and images present.

- [ ] **Step 5: Commit Contact structure changes**

```bash
git add app/contact/page.tsx tests/unit/contact-page.test.tsx
git commit -m "feat: add anchored contact session types block"
```

### Task 4: Add CSS for screenshot-aligned layout and About quote accent

**Files:**
- Modify: `app/globals.css`
- Test: `tests/e2e/smoke.spec.ts`

- [ ] **Step 1: Add CSS classes for about quote and session layout**

```css
.about-quote {
  color: var(--color-gold);
  font-style: italic;
  font-size: 1.18rem;
  text-shadow: 0 0 14px rgba(215, 182, 99, 0.28);
}

.session-types {
  margin: var(--space-4) 0;
  display: grid;
  gap: 2.5rem;
}

.session-row {
  scroll-margin-top: 6rem;
  display: grid;
  grid-template-columns: minmax(140px, 220px) 1fr;
  align-items: center;
  gap: 2rem;
}

.session-row-image {
  width: 100%;
  height: auto;
  display: block;
  border: 1px solid rgba(215, 182, 99, 0.35);
}

.session-row-panel {
  border: 1px solid rgba(215, 182, 99, 0.35);
  min-height: 160px;
  display: grid;
  place-content: center;
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.04);
}

@media (max-width: 768px) {
  .session-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
```

- [ ] **Step 2: Add e2e assertion for contact session anchor presence**

```ts
await page.goto('/contact')
await expect(page.locator('#session-inperson')).toBeVisible()
await expect(page.locator('#session-distant')).toBeVisible()
await expect(page.locator('#session-free')).toBeVisible()
```

- [ ] **Step 3: Run e2e smoke test for updated route behavior**

Run: `npm run test:e2e -- tests/e2e/smoke.spec.ts`
Expected: PASS with contact anchors visible.

- [ ] **Step 4: Commit styling and e2e updates**

```bash
git add app/globals.css tests/e2e/smoke.spec.ts
git commit -m "feat: style session rows and accent about quote"
```

### Task 5: Full verification and final consistency checks

**Files:**
- Verify only: all modified source/test files

- [ ] **Step 1: Run full verification suite**

Run: `npm run test:unit && npm run test:e2e && npm run build`
Expected: all commands pass.

- [ ] **Step 2: Manual spot-check command for link targets**

Run: `npm run dev`
Expected: `/about` links navigate to `/what-is-sekhem-energy` and `/contact#session-*` anchors correctly.

- [ ] **Step 3: Commit final touch-ups if any verification fixes were needed**

```bash
git add app/about/page.tsx app/contact/page.tsx app/globals.css tests/unit/about-page.test.tsx tests/unit/contact-page.test.tsx tests/e2e/smoke.spec.ts lib/content.ts
git commit -m "chore: finalize about-contact linking and session layout verification"
```

## Plan Self-Review

- Spec coverage:
  - Every About `Sekhem` linked: Task 1 + Task 2.
  - Einstein quote styled distinct color: Task 1 + Task 4.
  - Updated sentence + three phrase links: Task 1 + Task 2.
  - Contact section with 3 image rows + anchor IDs: Task 3.
  - Screenshot-aligned left-image/right-panel layout + mobile stack: Task 4.
  - Validation commands unit/e2e/build: Task 5.
- Placeholder scan: no TODO/TBD placeholders present.
- Type consistency: anchor ids and href fragments use consistent names (`session-inperson`, `session-distant`, `session-free`) across tests, About links, and Contact markup.
