import { HeroParallax } from '@/components/hero-parallax'
import { ContentSection } from '@/components/content-section'
import { SplitRectangles } from '@/components/split-rectangles'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'
import { siteContent } from '@/lib/content'

export default function HomePage() {
  const home = siteContent.home

  return (
    <>
      <HeroParallax title={home.title} subtitle={home.subtitle} />
      <section className="content-section">
        <div className="container narrow">
          <img src="/images/LandingPage.png" alt="Landing visual" className="page-image" />
        </div>
      </section>
      <ContentSection title="Welcome">
        {home.sections.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ContentSection>
      <SplitRectangles
        items={[
          {
            title: 'Why Temple?',
            text: 'The space I create in my healing sessions is a sacred container, a temple, for the restoration of your body and spirit.',
            imageSrc: '/images/SessionInPerson.png',
            imageAlt: 'In-person session'
          },
          {
            title: 'Why Embodied Soul?',
            text: 'For the Soul to have truly joyous and harmonious experiences in this physical realm, it needs to be anchored into and aligned with its physical vessel - the body.',
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
      <section className="content-section">
        <div className="container narrow">
          <img src="/images/Testimonials.png" alt="Testimonials visual" className="page-image" />
        </div>
      </section>
      <TestimonialsCarousel
        items={[
          {
            quote: 'Amazing healing with Elena, which cannot be described in words. I am very grateful.',
            author: 'Marco, London'
          }
        ]}
      />
    </>
  )
}
