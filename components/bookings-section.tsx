import Link from 'next/link'

const BOOKING_MESSAGES: Record<string, string> = {
  phone: 'I would like to book a free phone consultation.',
  inperson: 'I would like to book an in-person healing session.',
  distant: 'I would like to book a distant healing session.'
}

export function BookingsSection() {
  const sessions = [
    {
      img: '/images/SessionPhoneFree.png',
      alt: 'Free phone consultation',
      title: 'Phone Consultation',
      desc: '15 minutes — Free',
      id: 'session-phone',
      booking: 'phone'
    },
    {
      img: '/images/SessionInPerson.png',
      alt: 'In-person healing session',
      title: 'In-Person Session',
      desc: '1.5 hours — £120',
      id: 'session-inperson',
      booking: 'inperson'
    },
    {
      img: '/images/SessionRemote.png',
      alt: 'Distant healing session',
      title: 'Distant Session',
      desc: '1 hour — £80',
      id: 'session-distant',
      booking: 'distant'
    }
  ]

  return (
    <section className="bookings-section" aria-label="Bookings">
      <h2>Book a session</h2>
      <div className="bookings-grid">
        {sessions.map((s) => (
          <div key={s.id} id={s.id} className="booking-card">
            <Link href={`/contact?booking=${s.booking}`} className="booking-link">
              <img src={s.img} alt={s.alt} className="booking-image" />
              <h3>{s.title}</h3>
              <p className="booking-desc">{s.desc}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
