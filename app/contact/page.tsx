import { ContactForm } from '@/components/contact-form'
import { ContentSection } from '@/components/content-section'
import { siteContent } from '@/lib/content'

export default function ContactPage() {
  return (
    <ContentSection title={siteContent.contact.title}>
      <img src="/images/Contact.png" alt="Contact visual" className="page-image" />
      {siteContent.contact.sections.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p><strong>WhatsApp:</strong> +44 77 888 47 113</p>
      <p><strong>Email:</strong> contact@tesoulra.com</p>
      <p className="social-links-inline">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">[FB icon] Facebook</a>{' '}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">[Instagram icon] Instagram</a>
      </p>
      <ContactForm />
    </ContentSection>
  )
}
