import resumePDF from '../assets/Resume_SAI.pdf'

export const profile = {
  name: 'Sai Ram Burri',
  initials: 'SB',
  primaryRole: 'Quality Engineer – AI & Test Automation',
  company: 'Cognizant Canada',
  secondaryRoles: [
    'Full Stack Developer',
    'Test Automation Engineer',
    'QA Engineer',
    'AI Quality Engineering',
  ],
  location: 'Mississauga, Ontario, Canada',
  email: 'burrisairam2000@gmail.com',
  phone: '+1 343-552-8696',
  linkedin: 'https://www.linkedin.com/in/sairamburri',
  github: 'https://github.com/sairam-burri',
  siteUrl: 'https://personal-portfolio-peach-sigma-87.vercel.app/',
  resumeUrl: resumePDF,
  resumeFileName: 'SaiRam_Burri_Resume.pdf',
  summary:
    "I'm a Quality Engineer specializing in AI and test automation at Cognizant Canada, focused on building reliable, scalable test frameworks for modern software systems. I combine hands-on automation engineering with a full-stack development background to design testing solutions that keep pace with fast-moving products.",
} as const
