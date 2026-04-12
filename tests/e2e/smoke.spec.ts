import { test, expect } from '@playwright/test'

const paths = ['/', '/about', '/what-is-energy-healing', '/what-is-sekhem-energy', '/testimonials', '/contact']

test('all core routes load and show header nav', async ({ page }) => {
  for (const path of paths) {
    await page.goto(path)
    const nav = page.getByRole('navigation', { name: /main navigation/i })
    await expect(nav).toBeVisible()

    const navLinkTexts = await nav
      .getByRole('link')
      .allTextContents()
    const normalizedTexts = navLinkTexts.map((text) => text.replace(/\s+/g, ' ').trim())
    const testimonialsIndex = normalizedTexts.findIndex((text) => /testimonials/i.test(text))
    const contactIndex = normalizedTexts.findIndex((text) => /^contact$/i.test(text))

    expect(testimonialsIndex).toBeGreaterThanOrEqual(0)
    expect(contactIndex).toBeGreaterThanOrEqual(0)
    expect(testimonialsIndex).toBeLessThan(contactIndex)
  }
})

test('home has top-level heading and contact path is reachable', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await page.goto('/contact')
  await expect(page.getByRole('button', { name: /send/i })).toBeVisible()
  await expect(page.locator('#session-inperson')).toBeVisible()
  await expect(page.locator('#session-distant')).toBeVisible()
  await expect(page.locator('#session-free')).toBeVisible()
})

test('named images are mapped to intended pages', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByAltText(/soul remembrance hero visual/i)).toBeVisible()

  await page.goto('/about')
  await expect(page.getByAltText(/about me portrait/i)).toBeVisible()

  await page.goto('/what-is-energy-healing')
  await expect(page.getByAltText(/what is energy healing visual/i)).toBeVisible()

  await page.goto('/what-is-sekhem-energy')
  await expect(page.getByAltText(/what is sekhem energy visual/i)).toBeVisible()

  await page.goto('/contact')
  await expect(page.getByAltText(/contact visual/i)).toBeVisible()
})
