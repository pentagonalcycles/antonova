'use client'

import { useState, useCallback, useRef } from 'react'

type Testimonial = { quote: string; author: string }

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0)
  const touchRef = useRef<{ start: number; end: number }>({ start: 0, end: 0 })
  const minSwipe = 50

  const next = useCallback(() => {
    setActive((p) => (p + 1) % items.length)
  }, [items.length])

  const prev = useCallback(() => {
    setActive((p) => (p - 1 + items.length) % items.length)
  }, [items.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchRef.current.start = e.targetTouches[0].clientX
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    touchRef.current.end = e.targetTouches[0].clientX
  }
  const handleTouchEnd = () => {
    const { start, end } = touchRef.current
    if (!start || !end) return
    const diff = start - end
    if (diff > minSwipe) next()
    else if (diff < -minSwipe) prev()
    touchRef.current = { start: 0, end: 0 }
  }

  if (items.length === 0) {
    return (
      <section className="content-section" aria-label="Testimonials">
        <div className="container narrow"><p>Testimonials coming soon.</p></div>
      </section>
    )
  }

  return (
    <section className="testimonials-section" aria-label="Testimonials">
      <div className="carousel-viewport" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div className="carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {items.map((item, i) => (
            <div key={item.author} className="carousel-slide" aria-hidden={i !== active}>
              <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
              <p className="testimonial-author">{item.author}</p>
            </div>
          ))}
        </div>

        {items.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={prev} aria-label="Previous">&#9664;</button>
            <button className="carousel-btn next" onClick={next} aria-label="Next">&#9654;</button>
            <div className="carousel-dots" role="tablist">
              {items.map((_, i) => (
                <button key={i} className={`carousel-dot${i === active ? ' active' : ''}`} onClick={() => setActive(i)} role="tab" aria-selected={i === active} aria-label={`Go to testimonial ${i + 1}`} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
