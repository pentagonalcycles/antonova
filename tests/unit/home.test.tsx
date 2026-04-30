import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '@/app/page'
import { siteContent } from '@/lib/content'

describe('home page', () => {
  it('does not render testimonials content on home page', () => {
    render(<HomePage />)
    expect(screen.queryByText(/amazing healing with t'iam'arhat/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/claire p/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/emma s/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/natasha k/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/ash k/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/steve b/i)).not.toBeInTheDocument()
  })

  it('renders the hero title and subtitle', () => {
    render(<HomePage />)
    const heroRegion = screen.getByRole('region', { name: /welcome hero/i })
    expect(within(heroRegion).getByRole('heading', { level: 1 })).toHaveTextContent(siteContent.home.title)
    expect(within(heroRegion).getByText(siteContent.home.subtitle)).toBeInTheDocument()
  })

  it('renders the Why paragraphs with italic terms', () => {
    render(<HomePage />)
    expect(screen.getByText(/sacred container/i)).toBeInTheDocument()
    expect(screen.getByText(/physical vessel/i)).toBeInTheDocument()
    expect(screen.getByText(/remembrance changes everything/i)).toBeInTheDocument()
    expect(screen.getByText(/unity and wholeness/i)).toBeInTheDocument()
    // italic terms are rendered inside <em> elements
    expect(document.querySelector('em')).toBeInTheDocument()
  })
})
