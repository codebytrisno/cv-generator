import { cn } from '@/lib/utils/cn'
import { TEMPLATES } from '@/config/constants'

interface TemplatePickerProps {
  selected: string
  onChange: (id: string) => void
}

export function TemplatePicker({ selected, onChange }: TemplatePickerProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold text-text-primary">Template</h3>
      <div className="flex gap-2">
        {TEMPLATES.map((t) => (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={cn(
              'flex-1 rounded-md border px-3 py-2 text-left text-xs transition-all',
              selected === t.id
                ? 'border-primary bg-primary/5 text-primary'
                : 'border-border text-text-secondary hover:border-primary/50'
            )}
          >
            <span className="block font-medium">{t.name}</span>
            <span className="block text-[10px] opacity-70">{t.description}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
