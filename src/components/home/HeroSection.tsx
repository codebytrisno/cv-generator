import { AIInput } from '@/components/builder/AIInput'

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-6 px-4 py-16 text-center md:py-24">
      <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
        Buat CV Profesional
        <br />
        dengan AI,{' '}
        <span className="text-primary">Gratis!</span>
      </h1>

      <p className="max-w-xl text-base text-text-secondary md:text-lg">
        Cukup ceritain background lo, AI langsung generate CV lengkap.
        No signup, no paywall, 100% gratis selamanya.
      </p>

      <AIInput variant="hero" />

      <p className="text-xs text-text-secondary">
        Tekan <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-xs">⌘Enter</kbd> atau klik tombol untuk mulai
      </p>
    </section>
  )
}
