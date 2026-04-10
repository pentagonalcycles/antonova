import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SiteHeader } from '@/components/site-header'

describe('header baseline', () => {
  it('renders main navigation landmark', () => {
    render(<SiteHeader />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })
})
