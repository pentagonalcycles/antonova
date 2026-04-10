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
            text: 'The healing session is a sacred container for restoration of body and spirit.',
            imageSrc: '/images/SessionInPerson.png',
            imageAlt: 'In-person session'
          },
          {
            title: 'Why Embodied Soul?',
            text: 'The soul anchors into the body so joy and harmony can be fully lived in this realm.',
            imageSrc: '/images/SessionRemote.png',
            imageAlt: 'Remote session'
          }
        ]}
      />
      <section className="content-section">
        <div className="container narrow">
          <img src="/images/Testimonials.png" alt="Testimonials visual" className="page-image" />
        </div>
      </section>
      <TestimonialsCarousel items={[]} />
    </>
  )
}
