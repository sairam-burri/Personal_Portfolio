import type { ExperienceEntry } from '../types'

export const experience: ExperienceEntry[] = [
  {
    id: 'cognizant-canada',
    company: 'Cognizant',
    location: 'Mississauga, ON, Canada',
    title: 'Quality Engineer – AI & Test Automation',
    period: 'June 2026 – Present',
    current: true,
    bullets: [
      'Design and execute automated test scripts using Selenium WebDriver and Playwright (Java/Python) to validate functional, regression, and smoke test coverage across web applications.',
      'Perform API testing with Postman against REST APIs, validating request/response schemas, status codes, and data integrity across service layers.',
      'Write and maintain SQL queries for backend and database validation to verify data accuracy across test environments.',
      'Collaborate within Agile/Scrum teams, contributing to sprint planning, BDD scenario definition, and test case design, and participating in defect triage using JIRA and Azure DevOps.',
      'Support version control and CI/CD pipeline integration using Git, GitLab, and Azure DevOps to enable continuous testing and reliable releases.',
    ],
  },
  {
    id: 'cognizant-india',
    company: 'Cognizant Technologies',
    location: 'Chennai, India',
    title: 'Azure DevOps Trainee',
    period: 'January 2024 – May 2024',
    bullets: [
      'Designed, implemented, and maintained CI/CD pipelines in Azure DevOps, automating build, test, and release processes, reducing manual deployment effort by ~30% and improving release reliability and consistency.',
      'Managed source control workflows using Git and Azure Repos, enforcing branching strategies and code review policies across a team of 10+ engineers within an Agile/Scrum delivery framework.',
      'Tracked and reported pipeline health and release quality via Azure DevOps, improving defect visibility and transparency across cross-functional teams.',
      'Documented pipeline configurations and operational runbooks, reducing onboarding time and promoting knowledge transfer across the engineering team.',
    ],
  },
]
