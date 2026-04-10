import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'

export default function AboutPage() {
  const about = siteContent.about
  return (
    <ContentSection title={about.title}>
      <img src="/images/AboutMe.png" alt="About me portrait" className="page-image" />
      {about.sections.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </ContentSection>
  )
}
