export interface NavLink {
  id: string
  label: string
}

export interface ExperienceEntry {
  id: string
  company: string
  location: string
  title: string
  period: string
  current?: boolean
  bullets: string[]
}

export interface EducationEntry {
  id: string
  degree: string
  school: string
  period: string
  gpa: string
  courses: string[]
}

export interface ProjectEntry {
  id: string
  title: string
  period: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  image?: string
}

export interface SkillCategory {
  id: string
  title: string
  skills: string[]
}

export interface Certification {
  id: string
  name: string
  issuer: string
}
