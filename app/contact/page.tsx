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

      <section className="session-types" aria-label="Session types">
        <h2>Session Types</h2>

        <article id="session-inperson" className="session-row">
          <img src="/images/SessionInPerson.png" alt="In-person session visual" className="session-row-image" />
          <div className="session-row-panel">
            <p>Book an in-person healing session</p>
            <p>(1.5 hours; £120)</p>
          </div>
        </article>

        <article id="session-distant" className="session-row">
          <img src="/images/SessionRemote.png" alt="Distant session visual" className="session-row-image" />
          <div className="session-row-panel">
            <p>Book a distant healing session</p>
            <p>(1 hour; £80)</p>
          </div>
        </article>

        <article id="session-free" className="session-row">
          <img src="/images/SessionPhoneFree.png" alt="Free consultation visual" className="session-row-image" />
          <div className="session-row-panel">
            <p>Book a free 15 min consultation</p>
          </div>
        </article>
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
