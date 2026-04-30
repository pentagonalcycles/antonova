import { headers } from 'next/headers'
import { cache } from 'react'

export function parseUserAgent(ua: string): { isMobile: boolean; deviceType: 'mobile' | 'tablet' | 'desktop' } {
  const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
  const tabletRegex = /ipad|android(?!.*mobile)/i

  if (tabletRegex.test(ua)) {
    return { isMobile: true, deviceType: 'tablet' }
  }
  if (mobileRegex.test(ua)) {
    return { isMobile: true, deviceType: 'mobile' }
  }
  return { isMobile: false, deviceType: 'desktop' }
}

export const getDevice = cache(async (): Promise<{ isMobile: boolean; deviceType: 'mobile' | 'tablet' | 'desktop' }> => {
  const h = await headers()
  const ua = h.get('user-agent') || ''
  return parseUserAgent(ua)
})
