import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '@/app/page'

describe('home page', () => {
  it('renders testimonials empty state text', () => {
    render(<HomePage />)
    expect(screen.getByText(/testimonials coming soon/i)).toBeInTheDocument()
  })

  it('renders mapped homepage images', () => {
    render(<HomePage />)
    expect(screen.getAllByAltText(/landing visual/i).length).toBeGreaterThan(0)
    expect(screen.getAllByAltText(/testimonials visual/i).length).toBeGreaterThan(0)
    expect(screen.getAllByAltText(/in-person session/i).length).toBeGreaterThan(0)
    expect(screen.getAllByAltText(/remote session/i).length).toBeGreaterThan(0)
  })
})
