import Link from 'next/link'
import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'

const consultationSentence =
  'I offer both in-person and distant healing sessions and free 15 min consultations.'

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

export default function AboutPage() {
  const about = siteContent.about

  return (
    <ContentSection title={about.title}>
      <img src="/images/AboutMe.png" alt="About me portrait" className="page-image" />
      {about.sections.map((paragraph) => {
        if (paragraph === consultationSentence) {
          return (
            <p key={paragraph}>
              I offer both <Link href="/contact#session-inperson">in-person</Link> and{' '}
              <Link href="/contact#session-distant">distant</Link> healing sessions and{' '}
              <Link href="/contact#session-free">free 15</Link> min consultations.
            </p>
          )
        }

        if (paragraph.includes('There are only two ways to live your life.')) {
          return (
            <p key={paragraph} className="about-quote">
              {paragraph}
            </p>
          )
        }

        return <p key={paragraph}>{renderSekhemLinks(paragraph)}</p>
      })}
    </ContentSection>
  )
}
