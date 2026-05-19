import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'
import { renderSekhemInline } from '@/lib/sekhem-links'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What is Sekhem Energy?',
  description: 'Discover Sekhem — the ancient Egyptian universal life-force energy connected to the goddess Sekhmet. Learn how Sekhem energy healing uses turquoise light frequencies, symbols, and divine guidance for transformation and renewal.'
}

export default function SekhemPage() {
  const page = siteContent.sekhemEnergy

  return (
    <div className="sekhem-energy-page">
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
    </div>
  )
}
