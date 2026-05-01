'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Energy Healing', '/what-is-energy-healing'],
  ['Sekhem Energy', '/what-is-sekhem-energy'],
  ['Contact', '/contact']
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="nav">
        <Link href="/" className="brand" aria-label="TESoul'RA home" onClick={() => setOpen(false)}>
          <img src="/images/Logo.png" alt="TESoul'RA logo" className="brand-logo" />
          <span>TESoul'RA</span>
        </Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(([label, href]) => (
            <li key={href}>
              <Link href={href} onClick={() => setOpen(false)}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
