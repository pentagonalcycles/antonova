import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'

export default function SekhemPage() {
  const page = siteContent.sekhemEnergy
  return (
    <ContentSection title={page.title}>
      {page.sections.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </ContentSection>
  )
}
