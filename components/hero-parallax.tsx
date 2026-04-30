export function HeroParallax({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section aria-label="Welcome hero" className="hero">
      <div className="hero-column">
        <div className="hero-header">
          <img src="/images/Logo.png" alt="TESoul'RA logo" className="hero-logo" />
          <div className="hero-header-text">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
          </div>
        </div>
        <div className="hero-parallax-image" aria-hidden="true" />
      </div>
    </section>
  )
}
