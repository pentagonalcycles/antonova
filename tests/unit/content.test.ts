import { describe, it, expect } from 'vitest'
import { siteContent } from '@/lib/content'

describe('site content', () => {
  it('contains all planned pages', () => {
    expect(Object.keys(siteContent)).toEqual(['home', 'about', 'energyHealing', 'sekhemEnergy', 'contact'])
  })
})
