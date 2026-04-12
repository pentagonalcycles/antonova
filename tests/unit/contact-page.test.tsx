import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ContactPage from '@/app/contact/page'

describe('contact page', () => {
  it('shows session types rows in required order with scoped pricing', () => {
    const { container } = render(<ContactPage />)

    expect(screen.getByRole('heading', { name: /session types/i })).toBeInTheDocument()

    const inPersonRow = container.querySelector('#session-inperson')
    const distantRow = container.querySelector('#session-distant')
    const freeRow = container.querySelector('#session-free')

    expect(inPersonRow).toBeInTheDocument()
    expect(distantRow).toBeInTheDocument()
    expect(freeRow).toBeInTheDocument()

    expect(within(inPersonRow as HTMLElement).getByText(/\(1\.5 hours; £120\)/i)).toBeInTheDocument()
    expect(within(distantRow as HTMLElement).getByText(/\(1 hour; £80\)/i)).toBeInTheDocument()

    const sessionRows = Array.from(container.querySelectorAll('#session-inperson, #session-distant, #session-free'))
    expect(sessionRows[0]).toHaveAttribute('id', 'session-inperson')
    expect(sessionRows[1]).toHaveAttribute('id', 'session-distant')
    expect(sessionRows[2]).toHaveAttribute('id', 'session-free')

    expect(screen.getByAltText(/In-person session visual/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Distant session visual/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Free consultation visual/i)).toBeInTheDocument()
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
