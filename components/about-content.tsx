import Link from 'next/link'
import { siteContent } from '@/lib/content'
import { renderSekhemInline } from '@/lib/sekhem-links'

const ABOUT_SECTION_INDEX = {
  consultation: 5,
  quote: 6
} as const

function renderConsultationLinks(paragraph: string) {
  return paragraph
    .split(/(in-person|distant)/gi)
    .map((part, index) => {
      if (/^in-person$/i.test(part)) {
        return (
          <Link key={`${part}-${index}`} href="/contact#session-inperson">
            {part}
          </Link>
        )
      }
      if (/^distant$/i.test(part)) {
        return (
          <Link key={`${part}-${index}`} href="/contact#session-distant">
            {part}
          </Link>
        )
      }
      return part
    })
}

export function AboutContent({ heading = false }: { heading?: boolean }) {
  const about = siteContent.about

  return (
    <div className="about-content">
      {heading && <h2>{about.title}</h2>}
      <img src="/images/AboutMe.jpg" alt="About me portrait" className="page-image" />
      {about.sections.map((paragraph, index) => {
        if (index === ABOUT_SECTION_INDEX.quote) {
          return null
        }
        if (index === ABOUT_SECTION_INDEX.consultation) {
          return <p key={paragraph}>{renderConsultationLinks(paragraph)}</p>
        }
        return <p key={paragraph}>{renderSekhemInline(paragraph)}</p>
      })}
    </div>
  )
}
