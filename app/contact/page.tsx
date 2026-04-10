import { ContactForm } from '@/components/contact-form'
import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'

export default function ContactPage() {
  return (
    <ContentSection title={siteContent.contact.title}>
      <img src="/images/SessionPhoneFree.png" alt="Free phone session visual" className="page-image" />
      {siteContent.contact.sections.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <ContactForm />
    </ContentSection>
  )
}
