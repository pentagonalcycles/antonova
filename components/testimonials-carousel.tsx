type Testimonial = { quote: string; author: string }

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  return (
    <section className="content-section" aria-label="Testimonials list">
      <div className="container narrow">
        {items.length === 0 ? (
          <p>Testimonials coming soon.</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.author}>
                <blockquote>{item.quote}</blockquote>
                <p className="testimonial-author">{item.author}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
