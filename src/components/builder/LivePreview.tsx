import { Card } from '@/components/ui/Card'
import type { CVData } from '@/types/cv'

interface LivePreviewProps {
  data: CVData
  templateId: string
}

function ModernTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-sans text-sm">
      <div className="mb-4 border-b-2 border-primary pb-3">
        <h2 className="text-lg font-bold text-text-primary">{data.name || 'Nama Lengkap'}</h2>
        <p className="text-sm text-primary">{data.title || 'Posisi / Role'}</p>
        <div className="mt-1 flex flex-wrap gap-x-3 text-xs text-text-secondary">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>{data.phone}</span>}
          {data.location && <span>{data.location}</span>}
        </div>
      </div>

      {data.summary && (
        <div className="mb-3">
          <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">Ringkasan</h3>
          <p className="text-xs leading-relaxed text-text-primary">{data.summary}</p>
        </div>
      )}

      {data.experience?.length > 0 && (
        <div className="mb-3">
          <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">Pengalaman</h3>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-2">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-medium text-text-primary">{exp.role}</span>
                  <span className="text-xs text-text-secondary"> — {exp.company}</span>
                </div>
                <span className="text-xs text-text-secondary">
                  {exp.startDate} - {exp.isCurrent ? 'Sekarang' : exp.endDate}
                </span>
              </div>
              {exp.description && (
                <p className="mt-0.5 text-xs leading-relaxed text-text-secondary">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {data.education?.length > 0 && (
        <div className="mb-3">
          <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">Pendidikan</h3>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-1.5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-medium text-text-primary">{edu.institution}</span>
                  <span className="text-xs text-text-secondary"> — {edu.degree} {edu.field}</span>
                </div>
                <span className="text-xs text-text-secondary">
                  {edu.startYear} - {edu.endYear}
                </span>
              </div>
              {edu.gpa && <p className="text-xs text-text-secondary">IPK: {edu.gpa}</p>}
            </div>
          ))}
        </div>
      )}

      {data.skills?.length > 0 && (
        <div>
          <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">Skill</h3>
          <div className="flex flex-wrap gap-1">
            {data.skills.map((skill, i) => (
              <span key={i} className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ClassicTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-serif text-sm">
      <div className="mb-4 border-b border-border pb-3 text-center">
        <h2 className="text-lg font-bold text-text-primary">{data.name || 'Nama Lengkap'}</h2>
        <p className="text-sm text-text-secondary">{data.title || 'Posisi / Role'}</p>
        <div className="mt-1 text-xs text-text-secondary">
          {[data.email, data.phone, data.location].filter(Boolean).join(' | ')}
        </div>
      </div>

      {data.summary && (
        <div className="mb-3">
          <h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-text-primary">Ringkasan</h3>
          <p className="text-xs leading-relaxed text-text-primary">{data.summary}</p>
        </div>
      )}

      {data.experience?.length > 0 && (
        <div className="mb-3">
          <h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-text-primary">Pengalaman</h3>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-2">
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium text-text-primary">{exp.company}</span>
                <span className="text-xs text-text-secondary">{exp.startDate} - {exp.isCurrent ? 'Sekarang' : exp.endDate}</span>
              </div>
              <p className="text-xs italic text-text-primary">{exp.role}</p>
              {exp.description && <p className="text-xs text-text-secondary">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {data.education?.length > 0 && (
        <div className="mb-3">
          <h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-text-primary">Pendidikan</h3>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-1">
              <p className="text-xs font-medium text-text-primary">{edu.institution}</p>
              <p className="text-xs text-text-secondary">{edu.degree} {edu.field} — {edu.startYear} - {edu.endYear}</p>
            </div>
          ))}
        </div>
      )}

      {data.skills?.length > 0 && (
        <div>
          <h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-text-primary">Skill</h3>
          <p className="text-xs text-text-secondary">{data.skills.join(', ')}</p>
        </div>
      )}
    </div>
  )
}

function MinimalTemplate({ data }: { data: CVData }) {
  return (
    <div className="text-sm">
      <div className="mb-5">
        <h2 className="text-xl font-light text-text-primary">{data.name || 'Nama Lengkap'}</h2>
        <p className="mt-0.5 text-sm text-text-secondary">{data.title || 'Posisi / Role'}</p>
        <div className="mt-2 flex flex-col gap-0.5 text-xs text-text-secondary">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>{data.phone}</span>}
          {data.location && <span>{data.location}</span>}
        </div>
      </div>

      {data.summary && (
        <div className="mb-4">
          <h3 className="mb-1.5 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">Tentang</h3>
          <p className="text-xs leading-relaxed text-text-primary">{data.summary}</p>
        </div>
      )}

      {data.experience?.length > 0 && (
        <div className="mb-4">
          <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">Pengalaman</h3>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <p className="text-xs font-medium text-text-primary">{exp.role}</p>
              <p className="text-xs text-text-secondary">{exp.company} — {exp.startDate} - {exp.isCurrent ? 'Sekarang' : exp.endDate}</p>
              {exp.description && <p className="mt-0.5 text-xs leading-relaxed text-text-secondary">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {data.education?.length > 0 && (
        <div className="mb-4">
          <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">Pendidikan</h3>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-1">
              <p className="text-xs text-text-primary">{edu.institution}</p>
              <p className="text-xs text-text-secondary">{edu.degree} {edu.field} ({edu.startYear} - {edu.endYear})</p>
            </div>
          ))}
        </div>
      )}

      {data.skills?.length > 0 && (
        <div>
          <h3 className="mb-1.5 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">Skill</h3>
          <div className="flex flex-wrap gap-x-2 gap-y-0.5">
            {data.skills.map((skill, i) => (
              <span key={i} className="text-xs text-text-primary after:ml-2 after:content-['|'] last:after:content-none">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const templates: Record<string, React.FC<{ data: CVData }>> = {
  modern: ModernTemplate,
  classic: ClassicTemplate,
  minimal: MinimalTemplate,
}

export function LivePreview({ data, templateId }: LivePreviewProps) {
  const Template = templates[templateId] ?? ModernTemplate

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-text-primary">Preview CV</h3>
      <Card className="min-h-[400px]">
        <Template data={data} />
      </Card>
    </div>
  )
}
