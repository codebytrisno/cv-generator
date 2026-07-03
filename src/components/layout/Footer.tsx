import Link from 'next/link'
import { FileText } from 'lucide-react'

const links = [
  { href: '/builder', label: 'Buat CV' },
  { href: '/cover-letter', label: 'Cover Letter' },
  { href: '/tailor', label: 'Sesuaikan CV' },
  { href: '/my-cvs', label: 'CV Saya' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 font-semibold text-text-primary">
            <FileText className="h-5 w-5 text-primary" />
            <span>CV Generator AI</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-6 border-t border-border pt-4 text-center text-sm text-text-secondary">
          <p>100% gratis, open source, tanpa backend.</p>
          <p className="mt-1">Dibuat untuk membantu pencari kerja Indonesia.</p>
        </div>
      </div>
    </footer>
  )
}
