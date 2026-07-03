'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'

interface AIInputProps {
  variant?: 'hero' | 'compact'
  onSubmit?: (text: string) => void
}

export function AIInput({ variant = 'compact', onSubmit }: AIInputProps) {
  const router = useRouter()
  const [text, setText] = useState('')

  const handleSubmit = () => {
    const trimmed = text.trim()
    if (trimmed.length < 10) return

    if (onSubmit) {
      onSubmit(trimmed)
    } else {
      router.push(`/builder?desc=${encodeURIComponent(trimmed)}`)
    }
  }

  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        variant === 'hero' && 'w-full max-w-2xl'
      )}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ceritain background lo...&#10;&#10;&quot;Fresh graduate S1 Teknik Informatika, pengalaman magang 6 bulan sebagai frontend developer di startup, dan beberapa project web development.&quot;"
        className={cn(
          'w-full rounded-md border border-border bg-white text-text-primary transition-colors placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none',
          variant === 'hero'
            ? 'min-h-[140px] p-5 text-base'
            : 'min-h-[100px] p-4 text-sm'
        )}
      />

      <div className="flex items-center justify-between">
        <span className="text-xs text-text-secondary">
          Minimal 10 karakter
        </span>

        <Button
          onClick={handleSubmit}
          disabled={text.trim().length < 10}
          size={variant === 'hero' ? 'lg' : 'md'}
        >
          <Sparkles className="h-4 w-4" />
          {variant === 'hero' ? 'Buat CV Sekarang' : 'Generate CV'}
        </Button>
      </div>
    </div>
  )
}
