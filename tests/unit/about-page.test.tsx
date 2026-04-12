import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AboutPage from '@/app/about/page'

describe('about page', () => {
  it('links every visible Sekhem token to the Sekhem page', () => {
    const { container } = render(<AboutPage />)

    const paragraphs = Array.from(container.querySelectorAll('p'))
    const sekhemTokenCount = paragraphs.reduce((count, paragraph) => {
      const matches = paragraph.textContent?.match(/\bsekhem\b/gi)
      return count + (matches?.length ?? 0)
    }, 0)

    const sekhemLinks = screen.getAllByRole('link', { name: /^sekhem$/i })
    expect(sekhemTokenCount).toBeGreaterThan(2)
    expect(sekhemLinks).toHaveLength(sekhemTokenCount)
    sekhemLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/what-is-sekhem-energy')
    })
  })

  it('renders consultation sentence with required contact anchor links', () => {
    render(<AboutPage />)

    const consultationParagraph = screen.getByText((_, element) => {
      return (
        element?.tagName.toLowerCase() === 'p' &&
        /in-person/i.test(element.textContent ?? '') &&
        /distant/i.test(element.textContent ?? '')
      )
    })

    expect(within(consultationParagraph).getByRole('link', { name: /in-person/i })).toHaveAttribute(
      'href',
      '/contact#session-inperson'
    )
    expect(within(consultationParagraph).getByRole('link', { name: /^distant$/i })).toHaveAttribute(
      'href',
      '/contact#session-distant'
    )
    expect(within(consultationParagraph).getByRole('link', { name: /free 15/i })).toHaveAttribute(
      'href',
      '/contact#session-free'
    )
  })

  it('styles Einstein quote with dedicated class for visual accent', () => {
    render(<AboutPage />)

    const quote = screen.getByText(/einstein/i, { selector: '.about-quote' })
    expect(quote.textContent).toMatch(/".+"/)
  })
})
