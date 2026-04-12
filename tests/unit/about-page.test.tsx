import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AboutPage from '@/app/about/page'

describe('about page', () => {
  it('links every visible Sekhem token to the Sekhem page', () => {
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
