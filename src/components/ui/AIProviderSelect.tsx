'use client'

import { Zap, Globe } from 'lucide-react'
import { AI_PROVIDERS, AI_MODELS } from '@/config/constants'
import type { AIProviderName } from '@/types/ai'
import { cn } from '@/lib/utils/cn'

const icons: Record<string, React.FC<{ className?: string }>> = {
  groq: Zap,
  openrouter: Globe,
}

interface AIProviderSelectProps {
  provider: AIProviderName
  model: string
  onProviderChange: (value: AIProviderName) => void
  onModelChange: (model: string) => void
  className?: string
}

export function AIProviderSelect({ provider, model, onProviderChange, onModelChange, className }: AIProviderSelectProps) {
  const models = AI_MODELS[provider] ?? []

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <div className="flex flex-wrap gap-1.5">
        {AI_PROVIDERS.map((p) => {
          const Icon = icons[p.id]
          const isActive = provider === p.id
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                onProviderChange(p.id as AIProviderName)
                onModelChange('')
              }}
              title={p.description}
              className={cn(
                'flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-all',
                isActive
                  ? 'border-primary bg-primary/10 text-primary shadow-sm'
                  : 'border-border text-text-secondary hover:border-primary/50 hover:text-text-primary'
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {p.name}
            </button>
          )
        })}
      </div>

      {models.length > 1 && (
        <div className="flex flex-wrap gap-1">
          {models.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => onModelChange(m.id)}
              title={m.description}
              className={cn(
                'rounded-md border px-2 py-0.5 text-[11px] font-medium transition-all',
                model === m.id
                  ? 'border-secondary/50 bg-secondary/10 text-secondary'
                  : 'border-transparent text-text-secondary hover:border-border hover:text-text-primary'
              )}
            >
              {m.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
