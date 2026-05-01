import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'
import { renderSekhemInline } from '@/lib/sekhem-links'

export default function SekhemPage() {
  const page = siteContent.sekhemEnergy

  return (
    <ContentSection title={page.title}>
      <img
        src="/images/WhatIsSekhemEnergy.jpg"
        alt="What is sekhem energy visual"
        className="page-image"
      />
      {page.sections.map((paragraph) => (
        <p key={paragraph}>{renderSekhemInline(paragraph)}</p>
      ))}
    </ContentSection>
  )
}
