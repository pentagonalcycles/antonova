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

  it('renders only the hero image on the home page', () => {
    render(<HomePage />)
    expect(screen.getByRole('img', { name: /soul remembrance hero visual/i })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(1)
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

  it('renders only the requested post-hero copy block', () => {
    render(<HomePage />)

    expect(screen.getByText(/welcome to tesoul.ra -temple of embodied soul remembrance & alchemy/i)).toBeInTheDocument()
    expect(
      screen.getByText(
        /why temple\? the space i create in my healing sessions is a sacred container, a temple, for the restoration of your body and spirit\./i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /why embodied soul\? for the soul to have truly joyous and harmonious experiences in this physical realm, it needs to be anchored into and aligned with its physical vessel/i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /why remembrance\? the greatest awakening occurs when we remember that we are eternal beings of pure love and light having this earthly experience to expand our wisdom and compassion\. this remembrance changes everything\./i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /why alchemy\? the deepest and most transformative healing occurs when we transmute all we have suppressed, denied, judged as negative or painful back into unity and wholeness\./i
      )
    ).toBeInTheDocument()
  })
})
