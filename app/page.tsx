import { HeroParallax } from '@/components/hero-parallax'
import { AboutContent } from '@/components/about-content'
import { siteContent } from '@/lib/content'

function formatWhyParagraph(text: string) {
  return text.replace(/^(Why )([^?]+)(\?)/, (_, why, term, q) => (
    `${why}<em>${term}</em>${q}`
  ))
}

export default function HomePage() {
  const home = siteContent.home

  return (
    <>
      <HeroParallax title={home.title} subtitle={home.subtitle} />
      <div className="hero-column home-body">
        {home.sections.map((paragraph) => (
          <p
            key={paragraph}
            className="home-why"
            dangerouslySetInnerHTML={{ __html: formatWhyParagraph(paragraph) }}
          />
        ))}
      </div>
      <AboutContent />
    </>
  )
}
