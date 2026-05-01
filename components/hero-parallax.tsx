function renderTitle(text: string) {
  // Wrap "oul" in TESoul'RA as small-caps
  return text.replace(/(TES)(oul)('RA)/, (_, t1, t2, t3) => (
    `${t1}<small>${t2}</small>${t3}`
  ))
}

export function HeroParallax({ title, subtitle }: { title: string; subtitle: readonly string[] }) {
  return (
    <section aria-label="Welcome hero" className="hero">
      <div className="hero-column">
        <div className="hero-header">
          <img src="/images/Logo.png" alt="TESoul'RA logo" className="hero-logo" />
          <div className="hero-header-text">
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: renderTitle(title) }} />
            <p className="hero-subtitle">{subtitle.map((line, i) => (
              <span key={i}>
                {line}
                {i < subtitle.length - 1 && <br />}
              </span>
            ))}</p>
          </div>
        </div>
        <div className="hero-parallax-image" aria-hidden="true" />
      </div>
    </section>
  )
}
