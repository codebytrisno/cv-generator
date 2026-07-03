const steps = [
  {
    number: '1',
    title: 'Ceritain Diri',
    description:
      'Tulis beberapa kalimat tentang background, skill, dan pengalaman lo.',
  },
  {
    number: '2',
    title: 'AI Generate',
    description:
      'AI kita otomatis bikin CV profesional yang rapi dan ATS-friendly.',
  },
  {
    number: '3',
    title: 'Download Gratis',
    description:
      'Edit kalo perlu, langsung download PDF tanpa watermark, gratis!',
  },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="mb-12 text-center text-2xl font-semibold text-text-primary">
        Cara Kerjanya
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
              {step.number}
            </div>
            <h3 className="font-semibold text-text-primary">{step.title}</h3>
            <p className="text-sm text-text-secondary">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
