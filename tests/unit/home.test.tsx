import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '@/app/page'
import { siteContent } from '@/lib/content'

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
    expect(screen.getByRole('img', { name: /soul remembrance hero visual/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /in-person session/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /remote session/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /remembrance visual/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /alchemy visual/i })).toBeInTheDocument()
  })

  it('removes kicker and subtitle, and renders image-led floating hero headline', () => {
    render(<HomePage />)

    const heroRegion = screen.getByRole('region', { name: /welcome hero/i })

    expect(within(heroRegion).queryByText(/sacred container/i)).not.toBeInTheDocument()
    expect(within(heroRegion).getByText(/^welcome$/i)).toBeInTheDocument()

    expect(within(heroRegion).getByRole('img', { name: /soul remembrance hero visual/i })).toBeInTheDocument()

    const floatingWords = heroRegion.querySelectorAll('.hero-title-word')
    const titleWordCount = siteContent.home.title.split(/\s+/).filter(Boolean).length
    expect(floatingWords.length).toBe(titleWordCount)
  })
})
