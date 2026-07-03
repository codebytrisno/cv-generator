'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, Plus, Trash2 } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'
import type { CVData, Education, Experience, Certification, Language } from '@/types/cv'

interface CVFormProps {
  data: CVData
  onChange: (data: CVData) => void
}

function SectionHeader({
  title,
  open,
  onToggle,
}: {
  title: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold text-text-primary hover:bg-gray-50"
    >
      {title}
      {open ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
    </button>
  )
}

export function CVForm({ data, onChange }: CVFormProps) {
  const [sections, setSections] = useState<Record<string, boolean>>({
    personal: true,
    summary: true,
    education: true,
    experience: true,
    skills: true,
    certifications: false,
    languages: false,
  })

  const toggle = (key: string) =>
    setSections((prev) => ({ ...prev, [key]: !prev[key] }))

  const update = (partial: Partial<CVData>) => {
    onChange({ ...data, ...partial })
  }

  return (
    <div className="flex flex-col gap-2">
      <div className={cn('overflow-hidden transition-all', sections.personal ? 'max-h-[400px]' : 'max-h-10')}>
        <SectionHeader title="Data Pribadi" open={sections.personal} onToggle={() => toggle('personal')} />
        {sections.personal && (
          <div className="flex flex-col gap-3 px-3 pb-3">
            <Input label="Nama Lengkap" value={data.name} onChange={(e) => update({ name: e.target.value })} placeholder="Rina Amelia" />
            <Input label="Email" type="email" value={data.email} onChange={(e) => update({ email: e.target.value })} placeholder="rina@email.com" />
            <Input label="No HP" value={data.phone} onChange={(e) => update({ phone: e.target.value })} placeholder="0812-3456-7890" />
            <Input label="Lokasi" value={data.location ?? ''} onChange={(e) => update({ location: e.target.value })} placeholder="Jakarta, Indonesia" />
            <Input label="Judul Profesional" value={data.title ?? ''} onChange={(e) => update({ title: e.target.value })} placeholder="Frontend Developer" />
          </div>
        )}
      </div>

      <div className={cn('overflow-hidden transition-all', sections.summary ? 'max-h-[300px]' : 'max-h-10')}>
        <SectionHeader title="Ringkasan" open={sections.summary} onToggle={() => toggle('summary')} />
        {sections.summary && (
          <div className="px-3 pb-3">
            <Textarea label="Ringkasan Profesional" value={data.summary} onChange={(e) => update({ summary: e.target.value })} rows={3} placeholder="Fresh graduate S1 Teknik Informatika dengan pengalaman magang..." />
          </div>
        )}
      </div>

      <div className={cn('overflow-hidden transition-all', sections.education ? 'max-h-[800px]' : 'max-h-10')}>
        <SectionHeader title="Pendidikan" open={sections.education} onToggle={() => toggle('education')} />
        {sections.education && (
          <div className="flex flex-col gap-3 px-3 pb-3">
            {data.education.map((edu, i) => (
              <EducationForm
                key={i}
                edu={edu}
                onChange={(updated) => {
                  const education = [...data.education]
                  education[i] = updated
                  update({ education })
                }}
                onDelete={() => {
                  const education = data.education.filter((_, j) => j !== i)
                  update({ education })
                }}
              />
            ))}
            <Button variant="ghost" size="sm" onClick={() => update({ education: [...data.education, { institution: '', degree: '', field: '', startYear: '', endYear: '' }] })}>
              <Plus className="h-4 w-4" /> Tambah Pendidikan
            </Button>
          </div>
        )}
      </div>

      <div className={cn('overflow-hidden transition-all', sections.experience ? 'max-h-[1000px]' : 'max-h-10')}>
        <SectionHeader title="Pengalaman" open={sections.experience} onToggle={() => toggle('experience')} />
        {sections.experience && (
          <div className="flex flex-col gap-3 px-3 pb-3">
            {data.experience.map((exp, i) => (
              <ExperienceForm
                key={i}
                exp={exp}
                onChange={(updated) => {
                  const experience = [...data.experience]
                  experience[i] = updated
                  update({ experience })
                }}
                onDelete={() => {
                  const experience = data.experience.filter((_, j) => j !== i)
                  update({ experience })
                }}
              />
            ))}
            <Button variant="ghost" size="sm" onClick={() => update({ experience: [...data.experience, { company: '', role: '', startDate: '', endDate: '', description: '' }] })}>
              <Plus className="h-4 w-4" /> Tambah Pengalaman
            </Button>
          </div>
        )}
      </div>

      <div className={cn('overflow-hidden transition-all', sections.skills ? 'max-h-[400px]' : 'max-h-10')}>
        <SectionHeader title="Skill" open={sections.skills} onToggle={() => toggle('skills')} />
        {sections.skills && (
          <div className="px-3 pb-3">
            <Input
              label="Skill (pisahkan dengan koma)"
              value={data.skills.join(', ')}
              onChange={(e) => update({ skills: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })}
              placeholder="React, TypeScript, Tailwind CSS"
            />
          </div>
        )}
      </div>
    </div>
  )
}

function EducationForm({
  edu,
  onChange,
  onDelete,
}: {
  edu: Education
  onChange: (edu: Education) => void
  onDelete: () => void
}) {
  return (
    <div className="relative rounded-md border border-border p-3">
      <button onClick={onDelete} className="absolute right-2 top-2 text-text-secondary hover:text-error" aria-label="Hapus">
        <Trash2 className="h-4 w-4" />
      </button>
      <div className="grid gap-2 md:grid-cols-2">
        <Input label="Institusi" value={edu.institution} onChange={(e) => onChange({ ...edu, institution: e.target.value })} placeholder="Universitas Indonesia" className="md:col-span-2" />
        <Input label="Gelar" value={edu.degree} onChange={(e) => onChange({ ...edu, degree: e.target.value })} placeholder="S1" />
        <Input label="Jurusan" value={edu.field} onChange={(e) => onChange({ ...edu, field: e.target.value })} placeholder="Teknik Informatika" />
        <Input label="Tahun Mulai" value={edu.startYear} onChange={(e) => onChange({ ...edu, startYear: e.target.value })} placeholder="2021" />
        <Input label="Tahun Lulus" value={edu.endYear} onChange={(e) => onChange({ ...edu, endYear: e.target.value })} placeholder="2025" />
      </div>
    </div>
  )
}

function ExperienceForm({
  exp,
  onChange,
  onDelete,
}: {
  exp: Experience
  onChange: (exp: Experience) => void
  onDelete: () => void
}) {
  return (
    <div className="relative rounded-md border border-border p-3">
      <button onClick={onDelete} className="absolute right-2 top-2 text-text-secondary hover:text-error" aria-label="Hapus">
        <Trash2 className="h-4 w-4" />
      </button>
      <div className="grid gap-2 md:grid-cols-2">
        <Input label="Perusahaan" value={exp.company} onChange={(e) => onChange({ ...exp, company: e.target.value })} placeholder="PT Startup Maju" className="md:col-span-2" />
        <Input label="Posisi" value={exp.role} onChange={(e) => onChange({ ...exp, role: e.target.value })} placeholder="Frontend Developer" />
        <Input label="Lokasi" value={exp.location ?? ''} onChange={(e) => onChange({ ...exp, location: e.target.value })} placeholder="Jakarta" />
        <Input label="Mulai" value={exp.startDate} onChange={(e) => onChange({ ...exp, startDate: e.target.value })} placeholder="2023" />
        <Input label="Selesai" value={exp.endDate} onChange={(e) => onChange({ ...exp, endDate: e.target.value })} placeholder="2025" />
        <Textarea label="Deskripsi" value={exp.description} onChange={(e) => onChange({ ...exp, description: e.target.value })} rows={2} placeholder="Job desc & pencapaian..." className="md:col-span-2" />
      </div>
    </div>
  )
}
