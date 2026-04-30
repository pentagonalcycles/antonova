import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { DeviceProvider } from '@/components/device-provider'
import { getDevice } from '@/lib/device'

export const metadata = {
  title: "TESoul'RA",
  description: 'Temple of Embodied Soul Remembrance & Alchemy'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const device = await getDevice()
  return (
    <html lang="en">
      <body>
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
