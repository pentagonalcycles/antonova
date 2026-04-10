type Testimonial = { quote: string; author: string }

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  return (
    <section className="content-section" aria-label="Testimonials">
      <div className="container narrow">
        <h2>Testimonials</h2>
        {items.length === 0 ? (
          <p>Testimonials coming soon.</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.author}>
                <blockquote>{item.quote}</blockquote>
                <p>{item.author}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
