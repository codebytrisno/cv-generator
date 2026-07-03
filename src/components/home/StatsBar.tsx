const stats = [
  { value: '10K+', label: 'CV Dibuat' },
  { value: '20+', label: 'Template' },
  { value: '100%', label: 'Gratis' },
]

export function StatsBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto flex max-w-2xl justify-around py-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-primary md:text-3xl">
              {stat.value}
            </span>
            <span className="text-sm text-text-secondary">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
