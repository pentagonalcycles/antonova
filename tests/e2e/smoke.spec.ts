import { test, expect } from '@playwright/test'

const paths = ['/', '/about', '/what-is-energy-healing', '/what-is-sekhem-energy', '/contact']

test('all core routes load and show header nav', async ({ page }) => {
  for (const path of paths) {
    await page.goto(path)
    await expect(page.getByRole('navigation', { name: /main navigation/i })).toBeVisible()
  }
})

test('home has top-level heading and contact path is reachable', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await page.goto('/contact')
  await expect(page.getByRole('button', { name: /send/i })).toBeVisible()
})

test('named images are mapped to intended pages', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByAltText(/soul remembrance hero visual/i)).toBeVisible()
  await expect(page.getByAltText(/testimonials visual/i)).toBeVisible()

  await page.goto('/about')
  await expect(page.getByAltText(/about me portrait/i)).toBeVisible()

  await page.goto('/what-is-energy-healing')
  await expect(page.getByAltText(/what is energy healing visual/i)).toBeVisible()

  await page.goto('/what-is-sekhem-energy')
  await expect(page.getByAltText(/what is sekhem energy visual/i)).toBeVisible()

  await page.goto('/contact')
  await expect(page.getByAltText(/contact visual/i)).toBeVisible()
})
