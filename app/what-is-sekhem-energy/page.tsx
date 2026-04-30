import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'

const SEKHEM_SECTION_INDEX = {
  quote: 5
} as const

export default function SekhemPage() {
  const page = siteContent.sekhemEnergy
  const quoteParagraph = page.sections[SEKHEM_SECTION_INDEX.quote]

  return (
    <ContentSection title={page.title}>
      <div className="about-intro-layout">
        <img
          src="/images/WhatIsSekhemEnergy.jpg"
          alt="What is sekhem energy visual"
          className="page-image"
        />
        <p className="about-quote">{quoteParagraph}</p>
      </div>
      {page.sections.map((paragraph, index) => {
        if (index === SEKHEM_SECTION_INDEX.quote) {
          return null
        }

        return <p key={paragraph}>{paragraph}</p>
      })}
    </ContentSection>
  )
}
