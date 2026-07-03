import { Shield, Users, Database, Code2 } from 'lucide-react'

const badges = [
  { icon: Users, label: 'No Signup', desc: 'Langsung pakai' },
  { icon: Database, label: 'Data di Browser', desc: 'Zero backend' },
  { icon: Shield, label: '100% Gratis', desc: 'Selamanya' },
  { icon: Code2, label: 'Open Source', desc: 'Transparan' },
]

export function TrustBadges() {
  return (
    <section className="border-y border-border bg-surface/50">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-4 px-4 py-6">
        {badges.map((badge) => (
          <div key={badge.label} className="flex items-center gap-2">
            <badge.icon className="h-4 w-4 text-primary" />
            <div>
              <span className="text-sm font-medium text-text-primary">{badge.label}</span>
              <span className="ml-1 text-xs text-text-secondary">— {badge.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
