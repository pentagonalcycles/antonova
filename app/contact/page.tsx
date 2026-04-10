import { ContactForm } from '@/components/contact-form'
import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'

export default function ContactPage() {
  return (
    <ContentSection title={siteContent.contact.title}>
      <p>{siteContent.contact.sections[0]}</p>
      <ContactForm />
    </ContentSection>
  )
}
