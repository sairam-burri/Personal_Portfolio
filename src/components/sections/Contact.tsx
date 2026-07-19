import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../../data/profile'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

const contactMethods = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail, external: false },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`, icon: Phone, external: false },
  { label: 'LinkedIn', value: 'linkedin.com/in/sairamburri', href: profile.linkedin, icon: LinkedinIcon, external: true },
  { label: 'GitHub', value: 'github.com/sairam-burri', href: profile.github, icon: GithubIcon, external: true },
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Connect"
          description="Open to Quality Engineering and Test Automation opportunities — feel free to reach out."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 rounded-2xl border border-hairline bg-card p-5 transition-colors hover:border-cyan/30 hover:bg-cyan/5"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                  <method.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-ink-faint">
                    {method.label}
                  </span>
                  <span className="block text-sm font-medium text-ink">{method.value}</span>
                </span>
              </a>
            ))}
            <div className="flex items-center gap-4 rounded-2xl border border-hairline bg-card p-5 sm:col-span-2 lg:col-span-1">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  Location
                </span>
                <span className="block text-sm font-medium text-ink">{profile.location}</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card>
              <h3 className="text-base font-bold text-ink">Send a Message</h3>

              {status === 'success' ? (
                <p role="status" className="mt-6 rounded-xl bg-emerald/10 p-4 text-sm text-emerald">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {status === 'error' && (
                    <p role="alert" className="rounded-xl bg-orange/10 p-4 text-sm text-orange">
                      {errorMessage}
                    </p>
                  )}
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-soft">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-hairline bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-soft">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full rounded-lg border border-hairline bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-soft">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      className="w-full resize-none rounded-lg border border-hairline bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint"
                    />
                  </div>
                  <Button type="submit" className="w-full disabled:cursor-not-allowed disabled:opacity-60" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </Button>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
