# Landing Post-Hero Text Simplification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove redundant post-hero welcome text on the landing page and retain only the sacred-container sentence with larger emphasis styling.

**Architecture:** Keep the hero and content source unchanged, and implement this as a local rendering/styling adjustment in Home. Replace the post-hero `ContentSection` paragraph mapping with one explicit emphasized paragraph in `app/page.tsx`, add a dedicated style class in `app/globals.css`, and update home unit tests to enforce the new output.

**Tech Stack:** Next.js App Router, React/TypeScript, global CSS, Vitest + Testing Library.

---

## File Structure

- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `tests/unit/home.test.tsx`

### Task 1: Lock new landing text behavior with failing unit tests

**Files:**
- Modify: `tests/unit/home.test.tsx`
- Reference: `app/page.tsx`

- [ ] **Step 1: Add failing assertions for post-hero heading/text removal and emphasis class**

```tsx
it('renders only the sacred-container statement in post-hero intro with emphasis style', () => {
  render(<HomePage />)

  expect(screen.queryByRole('heading', { name: /^welcome$/i, level: 2 })).not.toBeInTheDocument()
  expect(
    screen.queryByText(/welcome to tesoul'ra - temple of embodied soul remembrance & alchemy\./i)
  ).not.toBeInTheDocument()

  const emphasis = screen.getByText(
    /the space i create in my healing sessions is a sacred container, a temple, for the restoration of your body and spirit\./i
  )
  expect(emphasis).toHaveClass('landing-intro-emphasis')
})
```

- [ ] **Step 2: Run home tests to verify red state**

Run: `npm run test:unit -- tests/unit/home.test.tsx`
Expected: FAIL because current post-hero still renders heading/title mapping and no `landing-intro-emphasis` class.

- [ ] **Step 3: Commit failing test updates**

```bash
git add tests/unit/home.test.tsx
git commit -m "test: define landing post-hero text simplification behavior"
```

### Task 2: Implement post-hero content simplification in Home

**Files:**
- Modify: `app/page.tsx`
- Test: `tests/unit/home.test.tsx`

- [ ] **Step 1: Replace mapped section content with single explicit emphasized paragraph and blank title**

```tsx
<ContentSection title="">
  <p className="landing-intro-emphasis">
    The space I create in my healing sessions is a sacred container, a temple, for the restoration of your body and spirit.
  </p>
</ContentSection>
```

- [ ] **Step 2: Ensure removed text is no longer rendered in post-hero block**

- Remove any `home.sections.map(...)` usage for the post-hero section in `app/page.tsx`.
- Keep hero call and split-rectangles unchanged.

- [ ] **Step 3: Run home tests to verify pass**

Run: `npm run test:unit -- tests/unit/home.test.tsx`
Expected: PASS for new post-hero text behavior.

- [ ] **Step 4: Commit Home rendering change**

```bash
git add app/page.tsx tests/unit/home.test.tsx
git commit -m "feat: simplify post-hero landing text to single emphasis statement"
```

### Task 3: Add emphasis styling in global CSS

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Add dedicated style class for landing intro emphasis paragraph**

```css
.landing-intro-emphasis {
  margin: 0;
  font-size: clamp(1.2rem, 2.1vw, 1.8rem);
  line-height: 1.55;
  text-align: center;
}
```

- [ ] **Step 2: Ensure style fits existing section rhythm**

- Keep current color inheritance and spacing system.
- Do not alter hero, rectangles, testimonials, or contact style blocks.

- [ ] **Step 3: Run focused unit + build verification**

Run: `npm run test:unit -- tests/unit/home.test.tsx && npm run build`
Expected: both commands pass.

- [ ] **Step 4: Commit style addition**

```bash
git add app/globals.css
git commit -m "feat: add landing post-hero emphasis typography"
```

### Task 4: Full verification and regression check

**Files:**
- Verify only all modified files

- [ ] **Step 1: Run full verification suite**

Run: `npm run test:unit && npm run test:e2e && npm run build`
Expected: all checks pass.

- [ ] **Step 2: Spot-check Home route rendering**

Run: `npm run dev`
Expected: post-hero heading/sentence removed; only sacred-container sentence shown in larger style.

- [ ] **Step 3: Commit any verification-driven touchups (if needed)**

```bash
git add app/page.tsx app/globals.css tests/unit/home.test.tsx
git commit -m "chore: finalize landing post-hero text simplification verification"
```

## Plan Self-Review

- Spec coverage:
  - Remove post-hero heading `Welcome`: Task 1 + Task 2.
  - Remove post-hero `Welcome to TESoul'RA...` sentence: Task 1 + Task 2.
  - Retain only sacred-container sentence: Task 2.
  - Larger emphasized typography: Task 1 + Task 3.
  - Verification commands (`home` unit + build, then full suite): Tasks 3 and 4.
- Placeholder scan: no TODO/TBD placeholders included.
- Consistency check: `landing-intro-emphasis` class name used consistently between `app/page.tsx`, tests, and `app/globals.css`.
