import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTASection() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
        Siap Buat CV Profesional?
      </h2>
      <p className="mt-3 text-base text-text-secondary">
        Gratis, tanpa signup, tanpa ribet. Hasilnya langsung bisa lo download.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link href="/builder">
          <Button size="lg">
            <Sparkles className="mr-2 h-4 w-4" /> Buat CV Sekarang
          </Button>
        </Link>
        <Link href="/my-cvs">
          <Button variant="secondary" size="lg">
            Lihat CV Saya <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
