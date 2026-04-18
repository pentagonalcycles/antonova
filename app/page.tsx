import { HeroParallax } from '@/components/hero-parallax'
import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'

export default function HomePage() {
  const home = siteContent.home

  return (
    <>
      <HeroParallax title={home.title} />
      <ContentSection title="">
        <p>Welcome to TESoul’RA -Temple of Embodied Soul Remembrance & Alchemy</p>
        <p>
          Why Temple? The space I create in my healing sessions is a sacred container, a temple, for
          the restoration of your body and spirit.
        </p>
        <p>
          Why Embodied Soul? For the Soul to have truly joyous and harmonious experiences in this
          physical realm, it needs to be anchored into and aligned with its physical vessel – the body.
        </p>
        <p>
          Why Remembrance? The greatest awakening occurs when we remember that we are eternal
          beings of pure love and light having this earthly experience to expand our wisdom and
          compassion. This remembrance changes everything.
        </p>
        <p>
          Why Alchemy? The deepest and most transformative healing occurs when we transmute all
          we have suppressed, denied, judged as negative or painful back into unity and wholeness.
        </p>
      </ContentSection>
    </>
  )
}
