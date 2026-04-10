import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '@/app/page'

describe('home page', () => {
  it('renders testimonials empty state text', () => {
    render(<HomePage />)
    expect(screen.getByText(/testimonials coming soon/i)).toBeInTheDocument()
  })
})
