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

      <section aria-labelledby="session-types-heading">
        <h2 id="session-types-heading">Session Types</h2>

        <div id="session-inperson">
          <img src="/images/SessionInPerson.png" alt="In-person session visual" className="page-image" />
          <p>In-person session (1.5 hours; £120)</p>
        </div>

        <div id="session-distant">
          <img src="/images/SessionRemote.png" alt="Distant session visual" className="page-image" />
          <p>Distant session (1 hour; £80)</p>
        </div>

        <div id="session-free">
          <img src="/images/SessionPhoneFree.png" alt="Free consultation visual" className="page-image" />
          <p>Free 15 min consultation</p>
        </div>
      </section>

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
