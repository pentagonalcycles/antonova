import { HeroParallax } from '@/components/hero-parallax'
import { siteContent } from '@/lib/content'

function formatWhyParagraph(text: string) {
  // Italicise the word(s) between "Why " and "?"
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
    </>
  )
}
