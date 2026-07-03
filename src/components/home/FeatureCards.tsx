import Link from 'next/link'
import { FilePenLine, ScrollText, FileText, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const features = [
  {
    icon: FilePenLine,
    title: 'CV Builder',
    description: 'Generate CV lengkap dari deskripsi singkat. Edit, preview, dan download dalam hitungan menit.',
    href: '/builder',
  },
  {
    icon: ScrollText,
    title: 'Cover Letter',
    description: 'Buat surat lamaran profesional otomatis berdasarkan CV dan job description.',
    href: '/cover-letter',
  },
  {
    icon: FileText,
    title: 'Tailor to Job',
    description: 'Optimasi CV lo biar cocok sama posisi yang dilamar. Tinggal paste job description.',
    href: '/tailor',
  },
]

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold text-text-primary">
        Semua yang lo butuh, dalam satu tempat
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Link key={feature.href} href={feature.href}>
            <Card hover className="group h-full">
              <div className="flex h-full flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary">{feature.title}</h3>
                <p className="flex-1 text-sm text-text-secondary">{feature.description}</p>
                <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                  Coba sekarang <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
