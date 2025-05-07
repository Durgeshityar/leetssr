import { create } from 'zustand'

interface Certification {
  id: string
  title: string
  issuer: string
  dateEarned?: string
  hidden: boolean
}

interface Coursework {
  id: string
  title: string
  institution: string
  date: string
  hidden: boolean
}

interface Education {
  id: string
  degree: string
  institution: string
  startDate: string
  endDate?: string
  hidden: boolean
}

interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate?: string
  description?: string
  hidden: boolean
}

interface Project {
  id: string
  title: string
  description?: string
  techStack: string[]
  hidden: boolean
}

interface Contact {
  name: string
  email: string
  phone: string
  address?: string
}

interface Skills {
  skills: string[]
}

interface Summary {
  summary: string[]
}

interface ResumeState {
  // Dynamic components
  certifications: Certification[]
  coursework: Coursework[]
  education: Education[]
  experience: Experience[]
  projects: Project[]

  // Single-instance components
  contact: Contact | null
  skillsSummary: Skills | null
  summary: Summary | null

  // Actions for dynamic components
  addCertification: (cert: Certification) => void
  updateCertification: (id: string, cert: Partial<Certification>) => void
  deleteCertification: (id: string) => void
  toggleCertificationVisibility: (id: string) => void

  addCoursework: (course: Coursework) => void
  updateCoursework: (id: string, course: Partial<Coursework>) => void
  deleteCoursework: (id: string) => void
  toggleCourseworkVisibility: (id: string) => void

  // ... Similarly for Education, Experience, and Projects

  // Actions for single-instance components
  updateContact: (contact: Contact) => void
  updateSkillsSummary: (skills: string[]) => void
  updateAICoverLetter: (content: string) => void

  // General actions
  resetResume: () => void
}
