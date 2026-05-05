import Link from 'next/link'

export function renderSekhemInline(text: string) {
  const parts = text.split(/(\bSekhem\b|\bBi-Aura Therapy\b|\benergy healing\b)/gi)
  return parts.map((part, index) => {
    if (/^sekhem$/i.test(part)) {
      return (
        <Link
          key={`sekhem-${index}`}
          href="/what-is-sekhem-energy"
          style={{ color: 'var(--color-turquoise)', fontStyle: 'italic', textDecoration: 'none' }}
        >
          {part}
        </Link>
      )
    }
    if (/^bi-aura therapy$/i.test(part)) {
      return (
        <Link
          key={`biaura-${index}`}
          href="https://www.bi-aura.com/what-is-bi-aura-therapy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--color-turquoise)', textDecoration: 'none' }}
        >
          {part}
        </Link>
      )
    }
    if (/^energy healing$/i.test(part)) {
      return (
        <Link
          key={`energyhealing-${index}`}
          href="/what-is-energy-healing"
          style={{ color: 'var(--color-turquoise)', textDecoration: 'none' }}
        >
          {part}
        </Link>
      )
    }
    return part
  })
}
