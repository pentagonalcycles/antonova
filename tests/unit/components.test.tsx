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

    const testimonialsLink = screen.getByRole('link', { name: /testimonials/i })
    const contactLink = screen.getByRole('link', { name: /contact/i })

    expect(testimonialsLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
    expect(
      testimonialsLink.compareDocumentPosition(contactLink) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })
})
