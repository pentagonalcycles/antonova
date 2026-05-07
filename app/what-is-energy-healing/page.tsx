import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'
import { renderConsultationLinks } from '@/lib/sekhem-links'

export default function EnergyHealingPage() {
  const page = siteContent.energyHealing

  return (
    <ContentSection title={page.title}>
      <img
        src="/images/WhatIsEnergyHealing.jpg"
        alt="What is energy healing visual"
        className="page-image"
      />
      {page.sections.map((paragraph) => (
        <p key={paragraph}>{renderConsultationLinks(paragraph)}</p>
      ))}
    </ContentSection>
  )
}
