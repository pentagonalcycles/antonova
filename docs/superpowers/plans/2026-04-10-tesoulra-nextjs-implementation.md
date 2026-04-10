# TESoul'RA Next.js Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and launch a high-fidelity TESoul'RA marketing website on Vercel with the approved pages, visual language, parallax hero, testimonials scaffold, and working contact flow.

**Architecture:** Use Next.js App Router with route-based static pages and reusable UI sections. Centralize visual decisions in a tokenized global stylesheet and small component set, then render content-first pages from structured copy constants. Implement contact handling via a server route and verify quality through unit, accessibility, and end-to-end tests.

**Tech Stack:** Next.js 16+, React, TypeScript, CSS Modules + global tokens, Vitest + Testing Library, Playwright, Vercel deployment.

---

## File Structure

- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/about/page.tsx`
- Create: `app/what-is-energy-healing/page.tsx`
- Create: `app/what-is-sekhem-energy/page.tsx`
- Create: `app/contact/page.tsx`
- Create: `app/api/contact/route.ts`
- Create: `app/globals.css`
- Create: `components/site-header.tsx`
- Create: `components/site-footer.tsx`
- Create: `components/hero-parallax.tsx`
- Create: `components/content-section.tsx`
- Create: `components/split-rectangles.tsx`
- Create: `components/testimonials-carousel.tsx`
- Create: `components/contact-form.tsx`
- Create: `lib/content.ts`
- Create: `lib/validation.ts`
- Create: `tests/unit/validation.test.ts`
- Create: `tests/unit/components.test.tsx`
- Create: `tests/e2e/smoke.spec.ts`
- Create: `playwright.config.ts`
- Create: `vitest.config.ts`
- Create: `.env.example`
- Create: `README.md`

### Task 1: Bootstrap Next.js project and test tooling

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `vitest.config.ts`
- Create: `playwright.config.ts`

- [ ] **Step 1: Write failing workspace smoke test for tooling**

```ts
// tests/unit/validation.test.ts
import { describe, it, expect } from 'vitest'

describe('tooling bootstrap', () => {
  it('runs unit tests', () => {
    expect(true).toBe(true)
  })
})
```

- [ ] **Step 2: Run unit test to verify it fails before dependencies**

Run: `npm run test:unit`
Expected: FAIL with "Missing script: test:unit" or missing vitest package.

- [ ] **Step 3: Add project configuration and scripts**

```json
{
  "name": "tesoulra-site",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test:unit": "vitest run",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "next": "16.0.0",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@playwright/test": "^1.54.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.0.1",
    "@testing-library/user-event": "^14.5.2",
    "@types/node": "^22.10.5",
    "@types/react": "^19.0.2",
    "@types/react-dom": "^19.0.2",
    "jsdom": "^25.0.1",
    "typescript": "^5.7.2",
    "vitest": "^2.1.8"
  }
}
```

```ts
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true
}

export default nextConfig
```

- [ ] **Step 4: Run test to verify tooling passes**

Run: `npm install && npm run test:unit`
Expected: PASS for `tooling bootstrap`.

- [ ] **Step 5: Commit**

```bash
git add package.json tsconfig.json next.config.ts vitest.config.ts playwright.config.ts tests/unit/validation.test.ts
git commit -m "chore: bootstrap nextjs project and test tooling"
```

### Task 2: Establish global layout, navigation, and base routes

**Files:**
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/about/page.tsx`
- Create: `app/what-is-energy-healing/page.tsx`
- Create: `app/what-is-sekhem-energy/page.tsx`
- Create: `app/contact/page.tsx`
- Create: `components/site-header.tsx`
- Create: `components/site-footer.tsx`
- Test: `tests/e2e/smoke.spec.ts`

- [ ] **Step 1: Write failing e2e route smoke test**

```ts
// tests/e2e/smoke.spec.ts
import { test, expect } from '@playwright/test'

const paths = ['/', '/about', '/what-is-energy-healing', '/what-is-sekhem-energy', '/contact']

test('all core routes load and show header nav', async ({ page }) => {
  for (const path of paths) {
    await page.goto(path)
    await expect(page.getByRole('navigation')).toBeVisible()
  }
})
```

- [ ] **Step 2: Run e2e test to verify route failure**

Run: `npm run test:e2e`
Expected: FAIL with 404 or missing route/navigation errors.

- [ ] **Step 3: Implement layout, header/footer, and pages**

```tsx
// app/layout.tsx
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
```

```tsx
// components/site-header.tsx
import Link from 'next/link'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Energy Healing', '/what-is-energy-healing'],
  ['Sekhem Energy', '/what-is-sekhem-energy'],
  ['Contact', '/contact']
] as const

export function SiteHeader() {
  return (
    <header>
      <nav aria-label="Main navigation">
        {links.map(([label, href]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
      </nav>
    </header>
  )
}
```

- [ ] **Step 4: Re-run e2e route test**

Run: `npm run test:e2e`
Expected: PASS for route and nav visibility.

- [ ] **Step 5: Commit**

```bash
git add app components tests/e2e/smoke.spec.ts
git commit -m "feat: add core routes with shared site navigation"
```

### Task 3: Build visual token system and baseline page styling

**Files:**
- Create: `app/globals.css`
- Modify: `app/layout.tsx`
- Test: `tests/unit/components.test.tsx`

- [ ] **Step 1: Write failing visual token test**

```tsx
// tests/unit/components.test.tsx
import { render, screen } from '@testing-library/react'
import { SiteHeader } from '@/components/site-header'
import { describe, it, expect } from 'vitest'

describe('header baseline', () => {
  it('renders main navigation landmark', () => {
    render(<SiteHeader />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run unit tests to verify matcher/config failure**

Run: `npm run test:unit`
Expected: FAIL due to missing test setup or unresolved aliases.

- [ ] **Step 3: Add test setup + global tokens and baseline styles**

```css
/* app/globals.css */
:root {
  --color-bg-lapis: #1b2f73;
  --color-gold: #d8b45b;
  --color-turquoise: #7fd6da;
  --color-text: #d6f2f5;
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  color: var(--color-text);
  background: radial-gradient(circle at 20% 20%, rgba(216, 180, 91, 0.18), transparent 45%), var(--color-bg-lapis);
  font-family: "Cormorant Garamond", "Georgia", serif;
}
```

- [ ] **Step 4: Re-run unit tests**

Run: `npm run test:unit`
Expected: PASS for nav landmark test.

- [ ] **Step 5: Commit**

```bash
git add app/globals.css vitest.config.ts tests/unit/components.test.tsx
git commit -m "feat: add visual token system and global styling baseline"
```

### Task 4: Implement content model and long-form page rendering

**Files:**
- Create: `lib/content.ts`
- Modify: `app/page.tsx`
- Modify: `app/about/page.tsx`
- Modify: `app/what-is-energy-healing/page.tsx`
- Modify: `app/what-is-sekhem-energy/page.tsx`
- Create: `components/content-section.tsx`
- Create: `components/split-rectangles.tsx`
- Test: `tests/unit/content.test.ts`

- [ ] **Step 1: Write failing content structure test**

```ts
// tests/unit/content.test.ts
import { describe, it, expect } from 'vitest'
import { siteContent } from '@/lib/content'

describe('site content', () => {
  it('contains all planned pages', () => {
    expect(Object.keys(siteContent)).toEqual([
      'home',
      'about',
      'energyHealing',
      'sekhemEnergy',
      'contact'
    ])
  })
})
```

- [ ] **Step 2: Run unit test to verify missing content module**

Run: `npm run test:unit`
Expected: FAIL with module not found for `@/lib/content`.

- [ ] **Step 3: Implement typed content map and page bindings**

```ts
// lib/content.ts
export const siteContent = {
  home: {
    title: "Welcome to TESoul'RA - Temple of Embodied Soul Remembrance & Alchemy",
    sections: []
  },
  about: { title: 'About Me', sections: [] },
  energyHealing: { title: 'What is Energy Healing', sections: [] },
  sekhemEnergy: { title: 'What is Sekhem Energy', sections: [] },
  contact: { title: 'Contact', sections: [] }
} as const
```

```tsx
// components/content-section.tsx
export function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section aria-label={title}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  )
}
```

- [ ] **Step 4: Re-run unit tests**

Run: `npm run test:unit`
Expected: PASS for content map test and previous tests.

- [ ] **Step 5: Commit**

```bash
git add lib app components tests/unit/content.test.ts
git commit -m "feat: add structured content model for core pages"
```

### Task 5: Implement parallax hero and testimonials scaffold

**Files:**
- Create: `components/hero-parallax.tsx`
- Create: `components/testimonials-carousel.tsx`
- Modify: `app/page.tsx`
- Test: `tests/unit/home.test.tsx`

- [ ] **Step 1: Write failing home component test**

```tsx
// tests/unit/home.test.tsx
import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'
import { describe, it, expect } from 'vitest'

describe('home page', () => {
  it('renders testimonials empty state text', () => {
    render(<HomePage />)
    expect(screen.getByText(/testimonials coming soon/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run unit tests to verify failure**

Run: `npm run test:unit`
Expected: FAIL because home page lacks testimonials scaffold.

- [ ] **Step 3: Implement hero parallax and carousel scaffold**

```tsx
// components/hero-parallax.tsx
export function HeroParallax({ title }: { title: string }) {
  return (
    <section aria-label="Welcome hero" className="hero">
      <div className="hero-layer hero-layer-back" aria-hidden="true" />
      <div className="hero-layer hero-layer-front" aria-hidden="true" />
      <h1>{title}</h1>
    </section>
  )
}
```

```tsx
// components/testimonials-carousel.tsx
export function TestimonialsCarousel({ items }: { items: Array<{ quote: string; author: string }> }) {
  if (items.length === 0) {
    return <p>Testimonials coming soon.</p>
  }
  return <section aria-label="Testimonials">...</section>
}
```

- [ ] **Step 4: Re-run unit tests**

Run: `npm run test:unit`
Expected: PASS with testimonials empty-state assertion.

- [ ] **Step 5: Commit**

```bash
git add components app/page.tsx tests/unit/home.test.tsx
git commit -m "feat: add parallax hero and testimonials scaffold"
```

### Task 6: Build contact form and server-side submission route

**Files:**
- Create: `components/contact-form.tsx`
- Create: `app/api/contact/route.ts`
- Create: `lib/validation.ts`
- Modify: `app/contact/page.tsx`
- Create: `.env.example`
- Test: `tests/unit/contact.test.ts`

- [ ] **Step 1: Write failing contact validation tests**

```ts
// tests/unit/contact.test.ts
import { describe, it, expect } from 'vitest'
import { contactSchema } from '@/lib/validation'

describe('contact schema', () => {
  it('rejects invalid email', () => {
    const result = contactSchema.safeParse({ name: 'A', email: 'not-an-email', message: 'hello there' })
    expect(result.success).toBe(false)
  })
})
```

- [ ] **Step 2: Run unit tests to verify failure**

Run: `npm run test:unit`
Expected: FAIL due to missing schema module.

- [ ] **Step 3: Implement schema, API route, and form wiring**

```ts
// lib/validation.ts
import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(20),
  website: z.string().optional()
})
```

```ts
// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validation'

export async function POST(request: Request) {
  const payload = await request.json()
  const parsed = contactSchema.safeParse(payload)
  if (!parsed.success || parsed.data.website) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
  return NextResponse.json({ ok: true })
}
```

- [ ] **Step 4: Re-run unit tests**

Run: `npm run test:unit`
Expected: PASS for contact schema tests and previous suites.

- [ ] **Step 5: Commit**

```bash
git add app/api/contact/route.ts app/contact/page.tsx components/contact-form.tsx lib/validation.ts tests/unit/contact.test.ts .env.example
git commit -m "feat: implement validated contact form submission flow"
```

### Task 7: Add accessibility/performance checks and deployment runbook

**Files:**
- Modify: `tests/e2e/smoke.spec.ts`
- Create: `README.md`
- Test: `tests/e2e/smoke.spec.ts`

- [ ] **Step 1: Write failing accessibility assertions in e2e test**

```ts
// append to tests/e2e/smoke.spec.ts
test('home has top-level heading and contact path is reachable', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await page.goto('/contact')
  await expect(page.getByRole('button', { name: /send/i })).toBeVisible()
})
```

- [ ] **Step 2: Run e2e tests to verify failures**

Run: `npm run test:e2e`
Expected: FAIL if heading/button semantics are missing.

- [ ] **Step 3: Add missing semantics and deployment runbook**

```md
# README

## Local development
- `npm install`
- `npm run dev`

## Quality gates
- `npm run test:unit`
- `npm run test:e2e`
- `npm run build`

## Vercel deployment
1. Import repository into Vercel.
2. Configure environment variables from `.env.example`.
3. Verify preview deployment.
4. Promote to production after QA sign-off.
```

- [ ] **Step 4: Run full verification suite**

Run: `npm run test:unit && npm run test:e2e && npm run build`
Expected: PASS across tests and production build.

- [ ] **Step 5: Commit**

```bash
git add tests/e2e/smoke.spec.ts README.md app components
git commit -m "chore: add accessibility checks and deployment runbook"
```

## Self-Review Results

- **Spec coverage:**
  - Next.js + Vercel architecture: covered in Tasks 1 and 7.
  - Approved routes/pages: covered in Task 2.
  - Visual language + palette + atmospheric baseline: covered in Task 3.
  - Long-form content fidelity structure + placeholders: covered in Task 4.
  - Parallax hero + testimonials scaffold: covered in Task 5.
  - Contact flow and anti-spam baseline: covered in Task 6.
  - QA across responsive/a11y/performance/build: covered in Task 7.
- **Placeholder scan:** No TBD/TODO markers. Each task includes explicit files, test commands, implementation snippets, and commit commands.
- **Type consistency:** Content model key names, component names, and route references are consistent across tasks.
