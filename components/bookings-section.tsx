export function BookingsSection() {
  const sessions = [
    {
      img: '/images/SessionInPerson.png',
      alt: 'In-person healing session',
      title: 'In-Person Session',
      desc: '1.5 hours — £120',
      id: 'session-inperson'
    },
    {
      img: '/images/SessionRemote.png',
      alt: 'Distant healing session',
      title: 'Distant Session',
      desc: '1 hour — £80',
      id: 'session-distant'
    }
  ]

  return (
    <section className="bookings-section" aria-label="Bookings">
      <h2>Book a session</h2>
      <div className="bookings-grid">
        {sessions.map((s) => (
          <div key={s.id} id={s.id} className="booking-card">
            <img src={s.img} alt={s.alt} className="booking-image" />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
