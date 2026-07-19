import { Download, Mail, MapPin } from 'lucide-react'
import { profile } from '../../data/profile'
import profileImage from '../../assets/profile.jpg'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'

export function Hero() {
  return (
    <section id="home" className="scroll-mt-20 pb-14 pt-12 sm:pb-20 sm:pt-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1">
            <Reveal>
              <span className="inline-block rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan">
                {profile.company}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
                Hi, I&apos;m {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-xl font-semibold text-ink sm:text-2xl">{profile.primaryRole}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-3 flex items-center gap-2 text-sm text-ink-soft">
                <MapPin className="h-4 w-4 text-ink-faint" aria-hidden="true" />
                {profile.location}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
                {profile.summary}
              </p>
            </Reveal>

            <Reveal delay={0.25} className="mt-8 flex flex-wrap gap-3">
              {profile.secondaryRoles.map((role) => (
                <Tag key={role}>{role}</Tag>
              ))}
            </Reveal>

            <Reveal delay={0.3} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                icon={<Download className="h-4 w-4" aria-hidden="true" />}
              >
                Download Resume
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                icon={<Mail className="h-4 w-4" aria-hidden="true" />}
              >
                Contact Me
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative aspect-square w-56 sm:w-64 lg:w-80">
              <div
                className="absolute -inset-3 rounded-full bg-gradient-to-br from-cyan/25 via-purple/25 to-transparent blur-2xl"
                aria-hidden="true"
              />
              <img
                src={profileImage}
                alt={`Portrait of ${profile.name}`}
                width={420}
                height={420}
                loading="eager"
                className="relative aspect-square w-full rounded-full border border-hairline object-cover shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
