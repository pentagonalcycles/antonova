import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'
import { renderConsultationLinks } from '@/lib/sekhem-links'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What is Energy Healing?',
  description: 'Learn how energy healing works through quantum principles of vibration and frequency. Discover how clearing, shifting, and realigning your energy field can restore health and well-being in London and online.'
}

export default function EnergyHealingPage() {
  const page = siteContent.energyHealing

  return (
    <div className="energy-healing-page">
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
    </div>
  )
}
