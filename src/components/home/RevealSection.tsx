'use client'

import { cn } from '@/lib/utils/cn'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  as?: 'section' | 'div'
}

export function RevealSection({ children, className, as: Tag = 'section' }: RevealSectionProps) {
  const { ref, visible } = useScrollReveal()

  return (
    <Tag ref={ref} className={cn('reveal', visible && 'visible', className)}>
      {children}
    </Tag>
  )
}
