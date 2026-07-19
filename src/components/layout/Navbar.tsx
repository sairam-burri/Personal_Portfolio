import { useState } from 'react'
import { Menu } from 'lucide-react'
import { navLinks } from '../../data/nav'
import { profile } from '../../data/profile'
import { useActiveSection } from '../../lib/useActiveSection'
import { Container } from '../ui/Container'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(navLinks.map((link) => link.id))

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/80 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-4">
        <a
          href="#home"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 text-sm font-bold tracking-wide text-cyan"
        >
          {profile.initials}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  className={
                    'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ' +
                    (activeId === link.id
                      ? 'text-cyan'
                      : 'text-ink-soft hover:text-ink')
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </Container>

      <MobileMenu
        id="mobile-menu"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeId={activeId}
      />
    </header>
  )
}
