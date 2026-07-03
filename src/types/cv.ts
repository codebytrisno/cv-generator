export interface Education {
  institution: string
  degree: string
  field: string
  startYear: string
  endYear: string
  gpa?: string
}

export interface Experience {
  company: string
  role: string
  location?: string
  startDate: string
  endDate: string
  description: string
  isCurrent?: boolean
}

export interface Certification {
  name: string
  issuer: string
  year: string
  url?: string
}

export interface Language {
  name: string
  level: 'Basic' | 'Intermediate' | 'Advanced' | 'Native'
}

export interface CVData {
  name: string
  email: string
  phone: string
  location?: string
  title?: string
  summary: string
  education: Education[]
  experience: Experience[]
  skills: string[]
  certifications: Certification[]
  languages: Language[]
  socialLinks?: {
    linkedin?: string
    github?: string
    portfolio?: string
  }
}

export interface CV {
  id: string
  title: string
  templateId: string
  data: CVData
  createdAt: number
  updatedAt: number
}
