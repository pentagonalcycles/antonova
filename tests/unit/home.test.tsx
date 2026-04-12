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

  it('renders mapped homepage images without testimonials visual', () => {
    render(<HomePage />)
    expect(screen.getByRole('img', { name: /soul remembrance hero visual/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /in-person session/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /remote session/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /remembrance visual/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /alchemy visual/i })).toBeInTheDocument()
    expect(screen.queryByRole('img', { name: /testimonials visual/i })).not.toBeInTheDocument()
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

  it('renders only the sacred-container statement in post-hero intro with emphasis style', () => {
    render(<HomePage />)

    expect(screen.queryByRole('heading', { name: /^welcome$/i, level: 2 })).not.toBeInTheDocument()
    expect(
      screen.queryByText(/welcome to tesoul'ra - temple of embodied soul remembrance & alchemy\./i)
    ).not.toBeInTheDocument()

    const emphasis = screen.getByText(
      /the space i create in my healing sessions is a sacred container, a temple, for the restoration of your body and spirit\./i
    )
    expect(emphasis).toHaveClass('landing-intro-emphasis')
  })
})
