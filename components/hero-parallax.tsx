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
        <img src="/images/Logo.png" alt="TESoul'RA logo" className="hero-logo-large" />
        <h1 className="hero-title-standalone" dangerouslySetInnerHTML={{ __html: renderTitle("TESoul'RA") }} />
        <div className="hero-parallax-image" aria-hidden="true" />
        <div className="hero-welcome">
          <h2 className="hero-welcome-title">Welcome to TESoul'RA</h2>
          <p className="hero-welcome-subtitle">{subtitle.map((line, i) => (
            <span key={i}>
              {line}
              {i < subtitle.length - 1 && <br />}
            </span>
          ))}</p>
        </div>
      </div>
    </section>
  )
}
