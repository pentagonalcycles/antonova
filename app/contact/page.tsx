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
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
            <path
              fill="currentColor"
              d="M13.5 8.5V6.9c0-.7.5-.9.8-.9h2V3h-2.8C10.8 3 10 5.1 10 6.5v2H8v3h2V21h3.5v-9.5h2.4l.3-3z"
            />
          </svg>{' '}
          Facebook
        </a>{' '}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
            <path
              fill="currentColor"
              d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3m0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7zm9.45 1.35a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05M12 7.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8m0 1.8A2.4 2.4 0 1 0 14.4 12 2.4 2.4 0 0 0 12 9.6"
            />
          </svg>{' '}
          Instagram
        </a>
      </p>
      <ContactForm />
    </ContentSection>
  )
}
