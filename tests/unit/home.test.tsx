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

  it('does not render the old content section paragraphs', () => {
    render(<HomePage />)
    expect(screen.queryByText(/why temple\?/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/why embodied soul\?/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/why remembrance\?/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/why alchemy\?/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sacred container/i)).not.toBeInTheDocument()
  })
})
