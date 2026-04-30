export function HeroParallax({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section aria-label="Welcome hero" className="hero">
      <div className="hero-header">
        <div className="hero-header-text">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="hero-parallax-image" aria-hidden="true" />
    </section>
  )
}
