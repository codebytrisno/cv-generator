'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const faqs = [
  {
    q: 'Apakah CV Generator ini benar-benar gratis?',
    a: 'Iya, 100% gratis selamanya. Nggak ada biaya tersembunyi, nggak ada credit system, nggak ada upgrade ke premium. Kami pakai API gratis dari Gemini, Groq, dan HuggingFace.',
  },
  {
    q: 'CV yang dihasilkan ATS-friendly?',
    a: 'ATS (Applicant Tracking System) adalah software yang dipakai HRD untuk menyaring CV. Template kami dirancang agar bisa dibaca ATS dengan baik — text-based PDF, nggak pakai kolom/gambar kompleks, struktur rapi.',
  },
  {
    q: 'Apakah data saya aman?',
    a: 'Semua data lo cuma disimpan di browser lo sendiri (IndexedDB). Nggak ada server backend, nggak ada database cloud. Data lo nggak pernah dikirim ke mana-mana selain ke AI provider untuk generate CV.',
  },
  {
    q: 'Format apa aja yang didukung?',
    a: 'Saat ini support export PDF via html2pdf.js. Untuk input, lo bisa ngetik manual atau kasih deskripsi singkat dan AI kita yang akan menyusun CV lengkap.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold text-text-primary">
        Pertanyaan Umum
      </h2>

      <div className="flex flex-col gap-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-md border border-border bg-surface transition-shadow hover:shadow-sm"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-text-primary"
            >
              <span>{faq.q}</span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 shrink-0 text-text-secondary transition-transform',
                  open === i && 'rotate-180'
                )}
              />
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-200',
                open === i ? 'max-h-48' : 'max-h-0'
              )}
            >
              <p className="border-t border-border px-4 py-3 text-sm leading-relaxed text-text-secondary">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
