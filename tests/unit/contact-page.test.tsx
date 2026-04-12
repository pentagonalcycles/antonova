import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ContactPage from '@/app/contact/page'

describe('contact page', () => {
  it('shows session types rows with required structure, order, and pricing', () => {
    const { container } = render(<ContactPage />)

    const sessionSection = container.querySelector('section.session-types[aria-label="Session types"]')
    expect(sessionSection).toBeInTheDocument()

    const sessionRows = Array.from(container.querySelectorAll('article.session-row'))
    expect(sessionRows).toHaveLength(3)
    expect(sessionRows[0]).toHaveAttribute('id', 'session-inperson')
    expect(sessionRows[1]).toHaveAttribute('id', 'session-distant')
    expect(sessionRows[2]).toHaveAttribute('id', 'session-free')

    const inPersonRow = container.querySelector('#session-inperson.session-row') as HTMLElement
    const distantRow = container.querySelector('#session-distant.session-row') as HTMLElement
    const freeRow = container.querySelector('#session-free.session-row') as HTMLElement

    expect(within(inPersonRow).getByText(/Book an in-person healing session/i)).toBeInTheDocument()
    expect(within(inPersonRow).getByText(/\(1\.5 hours; £120\)/i)).toBeInTheDocument()
    expect(within(distantRow).getByText(/Book a distant healing session/i)).toBeInTheDocument()
    expect(within(distantRow).getByText(/\(1 hour; £80\)/i)).toBeInTheDocument()
    expect(within(freeRow).getByText(/Book a free 15 min consultation/i)).toBeInTheDocument()

    expect(within(inPersonRow).getByAltText(/In-person session visual/i)).toHaveClass('session-row-image')
    expect(within(distantRow).getByAltText(/Distant session visual/i)).toHaveClass('session-row-image')
    expect(within(freeRow).getByAltText(/Free consultation visual/i)).toHaveClass('session-row-image')

    expect(inPersonRow.querySelector('.session-row-panel')).toBeInTheDocument()
    expect(distantRow.querySelector('.session-row-panel')).toBeInTheDocument()
    expect(freeRow.querySelector('.session-row-panel')).toBeInTheDocument()
  })

  it('shows contact details and links', () => {
    render(<ContactPage />)
    expect(screen.getByAltText(/contact visual/i)).toBeInTheDocument()
    expect(screen.getByText(/\+44 77 888 47 113/i)).toBeInTheDocument()
    expect(screen.getByText(/contact@tesoulra.com/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })
})
