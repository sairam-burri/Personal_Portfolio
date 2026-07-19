import { AudioLines, ShoppingCart, Sparkles, type LucideIcon } from 'lucide-react'
import { projects } from '../../data/projects'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Card } from '../ui/Card'
import { Tag } from '../ui/Tag'
import { Button } from '../ui/Button'
import { GithubIcon } from '../ui/BrandIcons'

const projectIcons: Record<string, LucideIcon> = {
  visionai: Sparkles,
  'ecommerce-platform': ShoppingCart,
  'telugu-speech-recognition': AudioLines,
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects"
          description="Case studies from full-stack development and applied AI/ML work."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = projectIcons[project.id] ?? Sparkles
            return (
              <Reveal key={project.id} delay={index * 0.08} className="h-full">
                <Card className="flex h-full flex-col">
                  <div className="flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/10 via-purple/10 to-transparent">
                    <Icon className="h-10 w-10 text-cyan" aria-hidden />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-ink">{project.title}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-faint">
                    {project.period}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      className="w-full"
                      icon={<GithubIcon className="h-4 w-4" aria-hidden="true" />}
                    >
                      View on GitHub
                    </Button>
                  </div>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
