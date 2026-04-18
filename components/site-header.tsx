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
        <Link href="/" className="brand" aria-label="TESoul'RA home">
          <img src="/images/Logo.png" alt="TESoul'RA logo" className="brand-logo" />
          <span>TESoul'RA</span>
        </Link>
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
