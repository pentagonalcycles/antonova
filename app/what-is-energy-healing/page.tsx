import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'

export default function EnergyHealingPage() {
  const page = siteContent.energyHealing
  const [introParagraph, ...remainingParagraphs] = page.sections

  return (
    <ContentSection title={page.title}>
      <div className="about-intro-layout">
        <img
          src="/images/WhatIsEnergyHealing.jpg"
          alt="What is energy healing visual"
          className="page-image"
        />
        <p className="about-intro-copy">{introParagraph}</p>
      </div>
      {remainingParagraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </ContentSection>
  )
}
