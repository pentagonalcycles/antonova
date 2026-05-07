import Link from 'next/link'

export function renderConsultationLinks(text: string) {
  return text
    .split(/(in-person|distant)/gi)
    .map((part, index) => {
      if (/^in-person$/i.test(part)) {
        return (
          <Link key={`${part}-${index}`} href="/#session-inperson" style={{ color: 'var(--color-turquoise)', textDecoration: 'none' }}>
            {part}
          </Link>
        )
      }
      if (/^distant$/i.test(part)) {
        return (
          <Link key={`${part}-${index}`} href="/#session-distant" style={{ color: 'var(--color-turquoise)', textDecoration: 'none' }}>
            {part}
          </Link>
        )
      }
      return part
    })
}

export function renderSekhemInline(text: string) {
  const parts = text.split(/(\bSekhem\b|\bBi-Aura Therapy\b)/gi)
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
    return part
  })
}
