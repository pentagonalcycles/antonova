import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'

export default function AboutPage() {
  const about = siteContent.about
  return (
    <ContentSection title={about.title}>
      {about.sections.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </ContentSection>
  )
}
