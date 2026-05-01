import Link from 'next/link'

export function renderSekhemInline(text: string) {
  const parts = text.split(/(\bSekhem\b)/gi)
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
    return part
  })
}
