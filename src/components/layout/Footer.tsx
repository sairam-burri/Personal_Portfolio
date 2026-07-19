import { Mail, ArrowUp } from 'lucide-react'
import { navLinks } from '../../data/nav'
import { profile } from '../../data/profile'
import { Container } from '../ui/Container'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

const socials = [
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon, external: true },
  { label: 'GitHub', href: profile.github, icon: GithubIcon, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail, external: false },
]

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <Container className="py-12 sm:py-16">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <a
              href="#home"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 text-sm font-bold text-cyan"
            >
              {profile.initials}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              {profile.primaryRole} at {profile.company}, based in {profile.location}.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-start">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline text-ink-soft transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-hairline pt-6 sm:flex-row">
          <p className="text-sm text-ink-faint">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-cyan"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
