import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AboutPage from '@/app/about/page'

describe('about page', () => {
  it('links every Sekhem token rendered in about paragraphs to the Sekhem page', () => {
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

  it('renders consultation paragraph with required contact anchor links', () => {
    const { container } = render(<AboutPage />)

    const paragraphs = Array.from(container.querySelectorAll('p'))
    const consultationParagraph = paragraphs.find((paragraph) => {
      const links = Array.from(paragraph.querySelectorAll('a')).map((link) => link.getAttribute('href'))
      return (
        links.includes('/contact#session-inperson') &&
        links.includes('/contact#session-distant')
      )
    })

    expect(consultationParagraph).toBeDefined()
    expect(within(consultationParagraph as HTMLParagraphElement).getByRole('link', { name: /in-person/i })).toHaveAttribute(
      'href',
      '/contact#session-inperson'
    )
    expect(within(consultationParagraph as HTMLParagraphElement).getByRole('link', { name: /^distant$/i })).toHaveAttribute(
      'href',
      '/contact#session-distant'
    )
  })

  it('links punctuation-adjacent Sekhem token in sentence ending with punctuation', () => {
    const { container } = render(<AboutPage />)

    const punctuationParagraph = Array.from(container.querySelectorAll('p')).find((paragraph) =>
      /the word\s+sekhem\s+at the time;/i.test(paragraph.textContent ?? '')
    )

    expect(punctuationParagraph).toBeDefined()
    const sekhemLinks = within(punctuationParagraph as HTMLParagraphElement).getAllByRole('link', {
      name: /^sekhem$/i
    })
    expect(sekhemLinks).toHaveLength(2)
    expect(punctuationParagraph).toHaveTextContent(/sekhem at the time;/i)
    sekhemLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/what-is-sekhem-energy')
    })
  })
})
