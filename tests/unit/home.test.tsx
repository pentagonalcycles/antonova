import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '@/app/page'

describe('home page', () => {
  it('renders updated testimonial content set', () => {
    render(<HomePage />)
    expect(screen.getByText(/amazing healing with t'iam'arhat/i)).toBeInTheDocument()
    expect(screen.getByText(/claire p/i)).toBeInTheDocument()
    expect(screen.getByText(/emma s/i)).toBeInTheDocument()
    expect(screen.getByText(/natasha k/i)).toBeInTheDocument()
    expect(screen.getByText(/ash k/i)).toBeInTheDocument()
    expect(screen.getByText(/steve b/i)).toBeInTheDocument()
  })

  it('renders mapped homepage images', () => {
    render(<HomePage />)
    expect(screen.getAllByAltText(/landing visual/i).length).toBeGreaterThan(0)
    expect(screen.getAllByAltText(/testimonials visual/i).length).toBeGreaterThan(0)
    expect(screen.getAllByAltText(/in-person session/i).length).toBeGreaterThan(0)
    expect(screen.getAllByAltText(/remote session/i).length).toBeGreaterThan(0)
  })
})
