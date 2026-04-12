import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TestimonialsPage from '@/app/testimonials/page'

describe('testimonials page', () => {
  it('renders page-level landmark and heading', () => {
    render(<TestimonialsPage />)

    const main = screen.getByRole('main', { name: /testimonials page/i })
    expect(main).toBeInTheDocument()
    expect(within(main).getByRole('heading', { level: 1, name: /testimonials/i })).toBeInTheDocument()
  })

  it('renders testimonials carousel content with expected quote and author', () => {
    render(<TestimonialsPage />)

    expect(screen.getByText(/amazing healing with t'iam'arhat that cannot describe in words/i)).toBeInTheDocument()
    expect(screen.getByText(/marco b/i)).toBeInTheDocument()
  })
})
