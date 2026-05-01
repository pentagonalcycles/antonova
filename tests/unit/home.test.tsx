import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '@/app/page'
import { siteContent } from '@/lib/content'

describe('home page', () => {
  it('renders testimonials carousel on home page', () => {
    render(<HomePage />)
    expect(screen.getByText(/amazing healing with t'iam'arhat/i)).toBeInTheDocument()
    expect(screen.getByText(/marco b/i)).toBeInTheDocument()
  })

  it('renders the hero title and subtitle', () => {
    render(<HomePage />)
    const heroRegion = screen.getByRole('region', { name: /welcome hero/i })
    expect(within(heroRegion).getByRole('heading', { level: 1 })).toHaveTextContent("TESoul'RA")
    expect(within(heroRegion).getByRole('heading', { level: 2 })).toHaveTextContent('Welcome to TESoul\'RA')
    siteContent.home.subtitle.forEach((line) => {
      expect(within(heroRegion).getByText(line)).toBeInTheDocument()
    })
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
