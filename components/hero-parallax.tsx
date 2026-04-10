export function HeroParallax({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section aria-label="Welcome hero" className="hero">
      <div className="hero-layer hero-back" aria-hidden="true" />
      <div className="hero-layer hero-front" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-kicker">Welcome</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}
