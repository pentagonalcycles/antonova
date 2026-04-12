import type { CSSProperties } from 'react'

export function HeroParallax({ title }: { title: string }) {
  const words = title.split(/\s+/).filter(Boolean)

  return (
    <section aria-label="Welcome hero" className="hero">
      <div className="hero-layer hero-back" aria-hidden="true" />
      <div className="hero-layer hero-front" aria-hidden="true" />
      <img src="/images/LandingPage.png" alt="Soul remembrance hero visual" className="hero-image" />
      <div className="hero-content">
        <h1>
          {words.map((word, index) => {
            const motionStyle = {
              '--word-index': index,
              '--word-float-x': `${(index % 2 === 0 ? 1 : -1) * (8 + index * 2)}px`,
              '--word-float-y': `${((index % 3) - 1) * 6}px`,
              '--word-delay': `${index * 90}ms`
            } as CSSProperties

            return (
              <span key={`${word}-${index}`} className="hero-title-word" style={motionStyle}>
                {word}{' '}
              </span>
            )
          })}
        </h1>
      </div>
    </section>
  )
}
