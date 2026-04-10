export function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="content-section" aria-label={title}>
      <div className="container narrow">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  )
}
