import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'

const SEKHEM_SECTION_INDEX = {
  quote: 5
} as const

export default function SekhemPage() {
  const page = siteContent.sekhemEnergy
  return (
    <ContentSection title={page.title}>
      <img
        src="/images/WhatIsSekhemEnergy.png"
        alt="What is sekhem energy visual"
        className="page-image"
      />
      {page.sections.map((paragraph, index) => {
        if (index === SEKHEM_SECTION_INDEX.quote) {
          return (
            <p key={paragraph} className="about-quote">
              {paragraph}
            </p>
          )
        }

        return <p key={paragraph}>{paragraph}</p>
      })}
    </ContentSection>
  )
}
