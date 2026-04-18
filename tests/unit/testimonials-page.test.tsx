import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TestimonialsPage from '@/app/testimonials/page'

describe('testimonials page', () => {
  it('renders a single testimonials heading followed by image', () => {
    render(<TestimonialsPage />)

    const main = screen.getByRole('main', { name: /testimonials page/i })
    expect(main).toBeInTheDocument()

    const heading = within(main).getByRole('heading', { level: 1, name: /testimonials/i })
    const image = within(main).getByRole('img', { name: /testimonials visual/i })

    expect(heading.compareDocumentPosition(image) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(within(main).getAllByRole('heading', { name: /testimonials/i })).toHaveLength(1)
  })

  it('renders testimonials carousel content with expected quote and author', () => {
    render(<TestimonialsPage />)

    expect(screen.getByText(/amazing healing with t'iam'arhat that cannot describe in words/i)).toBeInTheDocument()
    expect(screen.getByText(/marco b/i)).toBeInTheDocument()
  })
})
