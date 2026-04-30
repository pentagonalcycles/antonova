import { HeroParallax } from '@/components/hero-parallax'
import { siteContent } from '@/lib/content'

export default function HomePage() {
  const home = siteContent.home

  return (
    <HeroParallax title={home.title} subtitle={home.subtitle} />
  )
}
