import Link from 'next/link'
import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'

const ABOUT_SECTION_INDEX = {
  consultation: 6,
  quote: 7
} as const

function renderSekhemLinks(paragraph: string) {
  return paragraph.split(/(\bSekhem\b)/gi).map((part, index) => {
    if (/^sekhem$/i.test(part)) {
      return (
        <Link key={`${part}-${index}`} href="/what-is-sekhem-energy">
          {part}
        </Link>
      )
    }

    return part
  })
}

function renderConsultationLinks(paragraph: string) {
  return paragraph
    .split(/(in-person|distant|free 15)/gi)
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

      if (/^free 15$/i.test(part)) {
        return (
          <Link key={`${part}-${index}`} href="/contact#session-free">
            {part}
          </Link>
        )
      }

      return part
    })
}

export default function AboutPage() {
  const about = siteContent.about
  const quoteParagraph = about.sections[ABOUT_SECTION_INDEX.quote]

  return (
    <ContentSection title={about.title}>
      <div className="about-intro-layout">
        <img src="/images/AboutMe.png" alt="About me portrait" className="page-image" />
        <p className="about-quote">{quoteParagraph}</p>
      </div>
      {about.sections.map((paragraph, index) => {
        if (index === ABOUT_SECTION_INDEX.quote) {
          return null
        }

        if (index === ABOUT_SECTION_INDEX.consultation) {
          return <p key={paragraph}>{renderConsultationLinks(paragraph)}</p>
        }

        return <p key={paragraph}>{renderSekhemLinks(paragraph)}</p>
      })}
    </ContentSection>
  )
}
