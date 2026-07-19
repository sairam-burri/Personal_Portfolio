import { profile } from '../../data/profile'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-14 sm:py-20">
      <Container>
        <SectionHeading eyebrow="About" title="Who I am" />
        <Reveal className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
          <p>
            My career started at Cognizant in Chennai, India, where I worked hands-on with Azure
            DevOps — building CI/CD pipelines, managing version control, and collaborating with
            cross-functional teams on deployment workflows. That experience gave me a strong
            foundation in how software actually ships, not just how it&apos;s written.
          </p>
          <p>
            Today, I bring that foundation to Cognizant Canada as a{' '}
            <span className="font-medium text-ink">{profile.primaryRole}</span>, where I focus on
            building reliable automated testing frameworks, validating APIs, and applying
            AI-assisted approaches to quality engineering. I care about catching issues before they
            reach production and about building test suites that scale alongside fast-moving
            products.
          </p>
          <p>
            My full-stack development background — from React front ends to Python and SQL-backed
            services — shapes how I approach testing: I think like an engineer building the system,
            not just one verifying it. I&apos;m continually learning, whether that&apos;s a new
            automation tool, a cloud platform, or a better way to reason about quality at scale.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
