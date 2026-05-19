export function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="content-section" aria-label={title}>
      <div className="container narrow">
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  )
}
