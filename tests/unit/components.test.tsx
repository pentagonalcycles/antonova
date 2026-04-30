import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SiteHeader } from '@/components/site-header'

describe('header baseline', () => {
  it('renders main navigation landmark', () => {
    render(<SiteHeader />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })

  it('renders brand logo image', () => {
    render(<SiteHeader />)
    expect(screen.getAllByAltText(/tesoul'ra logo/i).length).toBeGreaterThan(0)
  })

  it('uses the top-left brand as a link back to home', () => {
    render(<SiteHeader />)

    const logoLink = screen.getByRole('link', { name: /tesoul'ra home/i })
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('renders Sekhem Energy nav link before Contact', () => {
    render(<SiteHeader />)

    const navLinkTexts = screen
      .getAllByRole('link')
      .map((link) => link.textContent?.replace(/\s+/g, ' ').trim() ?? '')

    const sekhemIndex = navLinkTexts.findIndex((text) => /sekhem energy/i.test(text))
    const contactIndex = navLinkTexts.findIndex((text) => /^contact$/i.test(text))

    expect(sekhemIndex).toBeGreaterThanOrEqual(0)
    expect(contactIndex).toBeGreaterThanOrEqual(0)
    expect(sekhemIndex).toBeLessThan(contactIndex)
  })
})
