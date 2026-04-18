import Link from 'next/link'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Energy Healing', '/what-is-energy-healing'],
  ['Sekhem Energy', '/what-is-sekhem-energy'],
  ['Testimonials', '/testimonials'],
  ['Contact', '/contact']
] as const

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="nav">
        <div className="brand">
          <Link
            href="/images/Logo.png"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open TESoul'RA logo in full size"
            className="brand-logo-link"
          >
            <img src="/images/Logo.png" alt="TESoul'RA logo" className="brand-logo" />
          </Link>
          <Link href="/" className="brand-home">
            TESoul'RA
          </Link>
        </div>
        <ul className="nav-links">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
