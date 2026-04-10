import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ContactPage from '@/app/contact/page'

describe('contact page', () => {
  it('shows pricing for distant and in-person sessions', () => {
    render(<ContactPage />)
    expect(screen.getByText(/80 pounds for 1 hour distant healing session/i)).toBeInTheDocument()
    expect(screen.getByText(/120 pounds for 1 hour and 30 minutes session in person/i)).toBeInTheDocument()
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
