import { Briefcase } from 'lucide-react'
import { experience } from '../../data/experience'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Career Journey"
          title="Experience"
          description="Professional experience in quality engineering, test automation, and DevOps."
        />

        <div className="mx-auto max-w-3xl">
          <ol className="relative border-l border-hairline pl-8 sm:pl-10">
            {experience.map((entry, index) => (
              <li key={entry.id} className={index === experience.length - 1 ? '' : 'pb-12'}>
                <Reveal delay={index * 0.08}>
                  <span className="absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-canvas bg-cyan">
                    <span className="sr-only">Milestone</span>
                  </span>

                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-ink sm:text-xl">{entry.title}</h3>
                    {entry.current && (
                      <span className="inline-flex items-center rounded-full bg-emerald/10 px-2.5 py-0.5 text-xs font-semibold text-emerald">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-cyan">
                    <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                    {entry.company} · {entry.location}
                  </p>
                  <p className="mt-0.5 text-sm text-ink-faint">{entry.period}</p>

                  <ul className="mt-4 space-y-2.5">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft sm:text-base">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink-faint" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
