import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { DeviceProvider } from '@/components/device-provider'
import { getDevice } from '@/lib/device'

export const metadata = {
  title: {
    default: "Sekhem Energy Healing | Spiritual Awakening | Embodied Soul Remembrance & Alchemy | London, UK",
    template: "%s | TESoul'RA"
  },
  description: 'TESoul\'RA offers body, mind and spirit healing using Sekhem energy and sound resonance to support spiritual awakening and inner transformation through nervous system regulation, chakra clearing and balancing, energetic realignment, coherence restoration, and reconnection with one\'s Essence Self in London, United Kingdom, and online.',
  icons: {
    icon: '/images/LogoFavicon.png',
    apple: '/images/LogoFavicon.png',
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const device = await getDevice()
  return (
    <html lang="en">
      <body>
        <div className="fixed-background" aria-hidden="true" />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <DeviceProvider value={device}>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </DeviceProvider>
      </body>
    </html>
  )
}
