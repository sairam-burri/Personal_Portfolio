import { skills } from '../../data/skills'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Card } from '../ui/Card'
import { Tag } from '../ui/Tag'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Technical Toolkit"
          title="Skills & Technologies"
          description="A comprehensive toolkit spanning testing, automation, DevOps, and full-stack development."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.05}>
              <Card className="h-full">
                <h3 className="text-base font-bold text-ink">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
