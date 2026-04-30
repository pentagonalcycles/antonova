import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ContactPage from '@/app/contact/page'

describe('contact page', () => {
  it('shows contact details and links', () => {
    render(<ContactPage />)
    expect(screen.getByText(/\+44 77 888 47 113/i)).toBeInTheDocument()
    expect(screen.getByText(/contact@tesoulra.com/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByAltText(/tesoul'ra logo detailed view/i)).toHaveClass('contact-logo-image')
  })
})
