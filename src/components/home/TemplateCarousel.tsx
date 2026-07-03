import { Card } from '@/components/ui/Card'

const templates = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Desain bersih dengan aksen warna biru, cocok untuk tech & creative roles',
    preview: (
      <svg viewBox="0 0 280 180" className="h-48 w-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="180" fill="#F8F9FA" rx="4" />
        <rect x="16" y="14" width="80" height="6" rx="3" fill="#1A73E8" />
        <rect x="16" y="24" width="120" height="4" rx="2" fill="#6B7280" />
        <rect x="16" y="34" width="100" height="3" rx="1.5" fill="#9CA3AF" />
        <line x1="16" y1="46" x2="264" y2="46" stroke="#E5E7EB" strokeWidth="1" />
        <rect x="16" y="54" width="60" height="4" rx="2" fill="#374151" />
        <rect x="16" y="66" width="240" height="3" rx="1.5" fill="#9CA3AF" />
        <rect x="16" y="74" width="200" height="3" rx="1.5" fill="#D1D5DB" />
        <rect x="16" y="90" width="60" height="4" rx="2" fill="#374151" />
        <rect x="16" y="100" width="80" height="3" rx="1.5" fill="#1A73E8" opacity="0.6" />
        <rect x="16" y="108" width="160" height="3" rx="1.5" fill="#9CA3AF" />
        <rect x="16" y="116" width="140" height="3" rx="1.5" fill="#D1D5DB" />
        <rect x="16" y="132" width="60" height="4" rx="2" fill="#374151" />
        <rect x="16" y="142" width="100" height="3" rx="1.5" fill="#9CA3AF" />
        <rect x="16" y="150" width="180" height="3" rx="1.5" fill="#D1D5DB" />
        <circle cx="248" cy="18" r="16" fill="#1A73E8" opacity="0.15" />
        <rect x="200" y="54" width="64" height="4" rx="2" fill="#1A73E8" opacity="0.4" />
        <rect x="200" y="62" width="48" height="12" rx="2" fill="#1A73E8" opacity="0.15" />
      </svg>
    ),
  },
  {
    id: 'classic',
    name: 'Klasik',
    description: 'Format tradisional, ATS-friendly, cocok untuk corporate & formal',
    preview: (
      <svg viewBox="0 0 280 180" className="h-48 w-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="180" fill="#FAFAFA" rx="4" />
        <rect x="80" y="14" width="120" height="6" rx="1" fill="#374151" />
        <rect x="110" y="24" width="60" height="4" rx="1" fill="#6B7280" />
        <line x1="16" y1="46" x2="264" y2="46" stroke="#E5E7EB" strokeWidth="1" />
        <rect x="16" y="54" width="80" height="4" rx="1" fill="#374151" />
        <rect x="16" y="66" width="240" height="3" rx="1" fill="#9CA3AF" />
        <rect x="16" y="74" width="200" height="3" rx="1" fill="#D1D5DB" />
        <rect x="16" y="90" width="80" height="4" rx="1" fill="#374151" />
        <rect x="16" y="100" width="160" height="3" rx="1" fill="#9CA3AF" />
        <rect x="16" y="116" width="80" height="4" rx="1" fill="#374151" />
        <rect x="16" y="126" width="240" height="3" rx="1" fill="#9CA3AF" />
        <rect x="16" y="134" width="200" height="3" rx="1" fill="#D1D5DB" />
        <rect x="16" y="150" width="80" height="4" rx="1" fill="#374151" />
        <rect x="16" y="160" width="140" height="3" rx="1" fill="#9CA3AF" />
      </svg>
    ),
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Sederhana dan elegan, fokus pada konten tanpa distraksi',
    preview: (
      <svg viewBox="0 0 280 180" className="h-48 w-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="180" fill="#FFFFFF" rx="4" />
        <rect x="16" y="16" width="100" height="5" rx="1" fill="#1F2937" />
        <rect x="16" y="26" width="60" height="3" rx="1" fill="#6B7280" />
        <rect x="16" y="52" width="40" height="3" rx="1" fill="#9CA3AF" />
        <rect x="16" y="62" width="240" height="3" rx="1" fill="#D1D5DB" />
        <rect x="16" y="90" width="40" height="3" rx="1" fill="#9CA3AF" />
        <rect x="16" y="100" width="200" height="3" rx="1" fill="#D1D5DB" />
        <rect x="16" y="108" width="160" height="3" rx="1" fill="#D1D5DB" />
        <rect x="16" y="136" width="40" height="3" rx="1" fill="#9CA3AF" />
        <rect x="16" y="146" width="80" height="3" rx="1" fill="#D1D5DB" />
        <rect x="16" y="156" width="60" height="3" rx="1" fill="#D1D5DB" />
        <line x1="16" y1="44" x2="264" y2="44" stroke="#F3F4F6" strokeWidth="1" />
        <line x1="16" y1="82" x2="264" y2="82" stroke="#F3F4F6" strokeWidth="1" />
        <line x1="16" y1="128" x2="264" y2="128" stroke="#F3F4F6" strokeWidth="1" />
      </svg>
    ),
  },
]

export function TemplateCarousel() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold text-text-primary">
        Pilih Template Favorit
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {templates.map((template) => (
          <div key={template.id} className="min-w-[280px] flex-shrink-0 snap-start md:min-w-[320px]">
            <Card className="h-full">
              <div className="mb-4 overflow-hidden rounded-md border border-border bg-white">
                {template.preview}
              </div>
              <h3 className="font-semibold text-text-primary">{template.name}</h3>
              <p className="mt-1 text-sm text-text-secondary">{template.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
