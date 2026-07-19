import { GraduationCap } from 'lucide-react'
import { education } from '../../data/education'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Card } from '../ui/Card'
import { Tag } from '../ui/Tag'

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Academic Background" title="Education" />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.08}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-purple/10 text-purple">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold leading-snug text-ink">{entry.degree}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{entry.school}</p>
                    <p className="mt-0.5 text-sm text-ink-faint">{entry.period}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm font-semibold text-ink-soft">GPA: {entry.gpa}</p>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                    Key Courses
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {entry.courses.map((course) => (
                      <Tag key={course}>{course}</Tag>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
