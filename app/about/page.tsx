import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'
import { renderSekhemInline, renderConsultationLinks } from '@/lib/sekhem-links'

const ABOUT_SECTION_INDEX = {
  consultation: 5,
  quote: 6
} as const

export default function AboutPage() {
  const page = siteContent.about

  return (
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
  )
}
