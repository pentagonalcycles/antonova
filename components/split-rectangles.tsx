type Rectangle = { title: string; text: string; imageSrc?: string; imageAlt?: string }

export function SplitRectangles({ items }: { items: Rectangle[] }) {
  return (
    <section className="content-section">
      <div className="container rectangles">
        {items.map((item) => (
          <article className="rectangle" key={item.title}>
            {item.imageSrc ? (
              <img src={item.imageSrc} alt={item.imageAlt || item.title} className="rectangle-image" />
            ) : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
