import { Award } from 'lucide-react'
import { certifications } from '../../data/certifications'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Card } from '../ui/Card'

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Continuous learning across cloud, data, and security fundamentals."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.05}>
              <Card className="flex h-full items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold leading-snug text-ink">{cert.name}</h3>
                  <p className="mt-1 text-sm text-ink-faint">{cert.issuer}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
