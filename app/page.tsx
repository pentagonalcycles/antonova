import { HeroParallax } from '@/components/hero-parallax'
import { ContentSection } from '@/components/content-section'
import { SplitRectangles } from '@/components/split-rectangles'
import { siteContent } from '@/lib/content'

export default function HomePage() {
  const home = siteContent.home

  return (
    <>
      <HeroParallax title={home.title} />
      <ContentSection title="">
        <p className="landing-intro-emphasis">
          The space I create in my healing sessions is a sacred container, a temple, for the restoration of your body and spirit.
        </p>
      </ContentSection>
      <SplitRectangles
        items={[
          {
            title: 'Why Temple?',
            text: 'The space I create in my healing sessions is a sacred container, a temple, for the restoration of your body and spirit. In-person healing session pricing: 120 pounds for 1 hour and 30 minutes.',
            imageSrc: '/images/SessionInPerson.png',
            imageAlt: 'In-person session'
          },
          {
            title: 'Why Embodied Soul?',
            text: 'For the Soul to have truly joyous and harmonious experiences in this physical realm, it needs to be anchored into and aligned with its physical vessel - the body. Distant healing session pricing: 80 pounds for 1 hour.',
            imageSrc: '/images/SessionRemote.png',
            imageAlt: 'Remote session'
          },
          {
            title: 'Why Remembrance?',
            text: 'The greatest awakening occurs when we remember that we are eternal beings of pure love and light having this earthly experience to expand our wisdom and compassion. This remembrance changes everything.',
            imageSrc: '/images/LandingPage.png',
            imageAlt: 'Remembrance visual'
          },
          {
            title: 'Why Alchemy?',
            text: 'The deepest and most transformative healing occurs when we transmute all we have suppressed, denied, judged as negative or painful back into unity and wholeness.',
            imageSrc: '/images/Testimonials.png',
            imageAlt: 'Alchemy visual'
          }
        ]}
      />
    </>
  )
}
