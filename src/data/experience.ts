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
      'Design and execute software testing and automation testing strategies across web applications and APIs, working within Agile delivery teams.',
      'Build and maintain automated test suites using Selenium and Playwright, covering functional, regression, and API testing with a BDD-driven approach.',
      'Validate REST APIs and backend data using SQL and API testing tools to ensure data integrity and correct business logic.',
      'Apply AI-assisted quality engineering practices to strengthen test coverage and improve testing efficiency.',
      'Integrate automated test suites into CI/CD pipelines using Azure DevOps and GitLab to support continuous, reliable delivery.',
    ],
  },
  {
    id: 'cognizant-india',
    company: 'Cognizant Technologies',
    location: 'Chennai, India',
    title: 'Azure DevOps Trainee',
    period: 'January 2023 – May 2024',
    bullets: [
      'Gained hands-on experience with Azure DevOps, focusing on CI/CD pipelines, Git version control, and Azure Repos.',
      'Assisted in automating build and release pipelines, ensuring seamless testing and deployment processes.',
      'Collaborated with cross-functional teams to configure infrastructure and optimize development and production workflows.',
    ],
  },
]
