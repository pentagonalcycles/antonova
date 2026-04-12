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

  it('renders Testimonials nav link before Contact', () => {
    render(<SiteHeader />)

    const navLinkTexts = screen
      .getAllByRole('link')
      .map((link) => link.textContent?.replace(/\s+/g, ' ').trim() ?? '')

    const testimonialsIndex = navLinkTexts.findIndex((text) => /testimonials/i.test(text))
    const contactIndex = navLinkTexts.findIndex((text) => /^contact$/i.test(text))

    expect(testimonialsIndex).toBeGreaterThanOrEqual(0)
    expect(contactIndex).toBeGreaterThanOrEqual(0)
    expect(testimonialsIndex).toBeLessThan(contactIndex)
  })
})
