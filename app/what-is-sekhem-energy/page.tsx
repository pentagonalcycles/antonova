import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'

export default function SekhemPage() {
  const page = siteContent.sekhemEnergy
  return (
    <ContentSection title={page.title}>
      <img
        src="/images/WhatIsSekhemEnergy.png"
        alt="What is sekhem energy visual"
        className="page-image"
      />
      {page.sections.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </ContentSection>
  )
}
