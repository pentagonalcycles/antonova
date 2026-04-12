import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ContactPage from '@/app/contact/page'

describe('contact page', () => {
  it('shows pricing for distant and in-person sessions', () => {
    render(<ContactPage />)
    expect(screen.getByText(/Distant healing session \(1 hour\): 80 GBP/i)).toBeInTheDocument()
    expect(screen.getByText(/In person session \(1h 30min\): 120 GBP/i)).toBeInTheDocument()
  })

  it('shows session types block with anchors and visuals', () => {
    const { container } = render(<ContactPage />)

    expect(screen.getByRole('heading', { name: /session types/i })).toBeInTheDocument()
    expect(container.querySelector('#session-inperson')).toBeInTheDocument()
    expect(container.querySelector('#session-distant')).toBeInTheDocument()
    expect(container.querySelector('#session-free')).toBeInTheDocument()
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
