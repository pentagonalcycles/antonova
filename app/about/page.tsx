import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'
import { renderSekhemInline, renderConsultationLinks } from '@/lib/sekhem-links'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About T\'iam\'arhat — Energy Healer & Sekhem Practitioner',
  description: 'Meet T\'iam\'arhat, an energy healer, channel of sound and light language, metaphysics teacher, and Sekhem energy practitioner offering bespoke healing sessions in London and online.'
}

const ABOUT_SECTION_INDEX = {
  consultation: 5,
  quote: 6
} as const

export default function AboutPage() {
  const page = siteContent.about

  return (
    <div className="about-page">
      <ContentSection title={page.title}>
        <img src="/images/AboutMe.jpg" alt="About me portrait" className="page-image" />
        {page.sections.map((paragraph, index) => {
          if (index === ABOUT_SECTION_INDEX.quote) {
            return null
          }
          if (index === ABOUT_SECTION_INDEX.consultation) {
            return <p key={paragraph}>{renderConsultationLinks(paragraph)}</p>
          }
          return <p key={paragraph}>{renderSekhemInline(paragraph)}</p>
        })}
      </ContentSection>
    </div>
  )
}
