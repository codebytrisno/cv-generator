'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText, FilePenLine, Home, ScrollText, Files } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const items = [
  { href: '/', label: 'Beranda', icon: Home },
  { href: '/builder', label: 'Buat CV', icon: FilePenLine },
  { href: '/cover-letter', label: 'Cover', icon: ScrollText },
  { href: '/tailor', label: 'Sesuaikan', icon: FileText },
  { href: '/my-cvs', label: 'CV Saya', icon: Files },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface md:hidden">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-0.5 px-3 py-2 text-xs transition-colors',
                isActive ? 'text-primary' : 'text-text-secondary'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
