import type { SkillCategory } from '../types'

export const skills: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'SQL', 'C#'],
  },
  {
    id: 'testing',
    title: 'Testing',
    skills: ['Selenium', 'Playwright', 'Postman', 'REST Assured', 'TestNG', 'JUnit', 'PyTest'],
  },
  {
    id: 'devops',
    title: 'DevOps',
    skills: ['Azure DevOps', 'Git', 'GitLab', 'CI/CD', 'Docker'],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    skills: ['Azure', 'AWS'],
  },
  {
    id: 'web',
    title: 'Web',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Flask', 'MySQL'],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Communication', 'Collaboration', 'Analytical Thinking'],
  },
]
