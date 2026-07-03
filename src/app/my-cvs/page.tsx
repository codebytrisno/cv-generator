'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Plus, FileDown, Trash2, Calendar, Edit3, AlertTriangle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useCVList } from '@/hooks/useCV'
import { cn } from '@/lib/utils/cn'

function formatDate(ts: number) {
  return new Date(ts).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function MyCvsPage() {
  const { cvs, loading, remove } = useCVList()
  const [deleting, setDeleting] = useState<string | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    setDeleting(id)
    await remove(id)
    setDeleting(null)
    setConfirmDelete(null)
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-center text-sm text-text-secondary">Memuat data...</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 pb-20 md:pb-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold text-text-primary">CV Saya</h1>
          <p className="mt-1 text-sm text-text-secondary">Kelola CV yang sudah kamu buat</p>
        </div>
        <Link href="/builder" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" /> Buat CV Baru
          </Button>
        </Link>
      </div>

      {cvs.length === 0 ? (
        <Card className="py-12 text-center">
          <FileDown className="mx-auto mb-3 h-10 w-10 text-text-secondary" />
          <h2 className="mb-1 text-base font-semibold text-text-primary">Belum ada CV</h2>
          <p className="mb-4 text-sm text-text-secondary">Buat CV pertamamu dengan AI, gratis!</p>
          <Link href="/builder">
            <Button>Buat CV Sekarang</Button>
          </Link>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {cvs.map((cv) => (
            <Card key={cv.id}>
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-text-primary">
                    {cv.title || 'CV Tanpa Judul'}
                  </h3>
                  <div className="mt-1 flex items-center gap-3 text-xs text-text-secondary">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(cv.updatedAt)}
                    </span>
                    <span className="capitalize">{cv.templateId}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/builder?id=${cv.id}`}>
                    <Button variant="ghost" size="sm">
                      <Edit3 className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setConfirmDelete(cv.id)}
                    className="text-text-secondary hover:text-error"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div
                className={cn(
                  'mt-3 overflow-hidden transition-all',
                  confirmDelete === cv.id ? 'max-h-24' : 'max-h-0'
                )}
              >
                <div className="flex items-center gap-2 rounded-md bg-error/10 p-3">
                  <AlertTriangle className="h-4 w-4 shrink-0 text-error" />
                  <p className="flex-1 text-xs text-text-primary">Hapus CV ini?</p>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(cv.id)}
                    disabled={deleting === cv.id}
                  >
                    {deleting === cv.id ? '...' : 'Hapus'}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setConfirmDelete(null)}>
                    Batal
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
