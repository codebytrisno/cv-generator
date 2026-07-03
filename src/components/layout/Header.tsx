'use client'

import Link from 'next/link'
import { FileText, Menu, X, Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils/cn'
import { useTheme } from '@/components/ThemeProvider'

const navLinks = [
  { href: '/builder', label: 'Buat CV' },
  { href: '/cover-letter', label: 'Cover Letter' },
  { href: '/tailor', label: 'Sesuaikan CV' },
  { href: '/my-cvs', label: 'CV Saya' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-text-primary">
          <FileText className="h-5 w-5 text-primary" />
          <span>CV Generator</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="rounded-md p-1.5 text-text-secondary transition-colors hover:bg-gray-100 hover:text-text-primary"
            aria-label={theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border transition-all duration-200 md:hidden',
          open ? 'max-h-64' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-gray-50 hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => { toggle(); setOpen(false) }}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-gray-50 hover:text-text-primary"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
          </button>
        </nav>
      </div>
    </header>
  )
}
