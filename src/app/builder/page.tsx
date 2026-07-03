'use client'

import { Suspense, useState, useCallback, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { FileDown, Sparkles, Loader2, Eye, EyeOff } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Textarea } from '@/components/ui/Textarea'
import { CVForm } from '@/components/builder/CVForm'
import { LivePreview } from '@/components/builder/LivePreview'
import { TemplatePicker } from '@/components/builder/TemplatePicker'
import { useAI } from '@/hooks/useAI'
import { useAIProvider } from '@/hooks/useAIProvider'
import { useCVDetail, useAutoSave } from '@/hooks/useCV'
import { useToast } from '@/components/ui/Toast'
import { AIProviderSelect } from '@/components/ui/AIProviderSelect'
import { DEFAULT_TEMPLATE_ID } from '@/config/constants'
import { cn } from '@/lib/utils/cn'
import type { CVData } from '@/types/cv'

const initialData: CVData = {
  name: '',
  email: '',
  phone: '',
  location: '',
  title: '',
  summary: '',
  education: [],
  experience: [],
  skills: [],
  certifications: [],
  languages: [],
}

function generateId() {
  return `cv_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
}

function BuilderContent() {
  const searchParams = useSearchParams()
  const desc = searchParams.get('desc')
  const editId = searchParams.get('id')

  const [cvId, setCvId] = useState(generateId)
  const [data, setData] = useState<CVData>(initialData)
  const [templateId, setTemplateId] = useState(DEFAULT_TEMPLATE_ID)
  const [aiInput, setAiInput] = useState(desc ?? '')
  const [showPreview, setShowPreview] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)

  const { generateCV, loading: generating } = useAI()
  const { provider, model, setProvider, setModel } = useAIProvider()
  const { cv: existingCv } = useCVDetail(editId ?? undefined)
  const { save } = useAutoSave()
  const { toast } = useToast()

  useEffect(() => {
    if (existingCv && !loaded) {
      setCvId(existingCv.id)
      setData(existingCv.data)
      setTemplateId(existingCv.templateId)
      setLoaded(true)
    }
  }, [existingCv, loaded])

  const handleGenerate = useCallback(async () => {
    if (!aiInput.trim() || aiInput.length < 10) {
      toast('warning', 'Minimal 10 karakter untuk generate CV')
      return
    }
    try {
      const result = await generateCV(aiInput, provider, model)
      setData((prev) => ({ ...prev, ...result }))
      toast('success', 'CV berhasil di-generate!')
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Gagal generate CV. Coba lagi.'
      toast('error', message)
      console.error('Generate CV error:', err)
    }
  }, [aiInput, provider, model, generateCV, toast])

  const handleExport = useCallback(async () => {
    const html2pdf = (await import('html2pdf.js')).default
    const el = previewRef.current
    if (!el) return
    const opt = {
      margin: [10, 10] as [number, number],
      filename: `CV_${data.name || 'untitled'}.pdf`,
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
    }
    html2pdf().set(opt).from(el).save()
  }, [data.name])

  useEffect(() => {
    save({ id: cvId, title: data.name || 'Untitled', templateId, data })
  }, [data, templateId, cvId, save])

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 pb-20 md:pb-6">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-text-primary">
          {editId ? 'Edit CV' : 'Buat CV Baru'}
        </h1>
        <p className="mt-1 text-sm text-text-secondary">Generate CV dengan AI atau isi manual</p>
      </div>

      <Card className="mb-6">
        <div className="flex flex-col gap-3">
          <Textarea
            value={aiInput}
            onChange={(e) => setAiInput(e.target.value)}
            placeholder={`Ceritakan tentang kamu...

Contoh: Saya fresh graduate S1 Teknik Informatika UI, punya pengalaman magang sebagai Frontend Developer di PT Startup Maju selama 6 bulan. Menguasai React, TypeScript, dan Tailwind CSS.`}
            rows={3}
          />
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary">Min. 10 karakter</span>
              <AIProviderSelect provider={provider} model={model} onProviderChange={setProvider} onModelChange={setModel} />
            </div>
            <Button
              onClick={handleGenerate}
              disabled={aiInput.trim().length < 10 || generating}
              className="w-full sm:w-auto"
            >
              {generating ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>
              ) : (
                <><Sparkles className="mr-2 h-4 w-4" /> Generate CV dengan AI</>
              )}
            </Button>
          </div>
        </div>
      </Card>

      <div className="lg:grid lg:grid-cols-2 lg:gap-6">
        <div className="flex flex-col gap-4">
          <Card>
            <TemplatePicker selected={templateId} onChange={setTemplateId} />
          </Card>
          <Card>
            <CVForm data={data} onChange={setData} />
          </Card>

          <div className="flex gap-2">
            <Button onClick={handleExport} className="flex-1">
              <FileDown className="mr-2 h-4 w-4" /> Export PDF
            </Button>
            <Button
              variant="secondary"
              className="lg:hidden"
              onClick={() => setShowPreview(!showPreview)}
            >
              {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showPreview ? 'Tutup' : 'Preview'}
            </Button>
          </div>
        </div>

        <div className={cn('mt-6 lg:mt-0', showPreview ? 'block' : 'hidden', 'lg:block')}>
          <div ref={previewRef}>
            <LivePreview data={data} templateId={templateId} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BuilderPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-6"><p className="text-sm text-text-secondary">Loading...</p></div>}>
      <BuilderContent />
    </Suspense>
  )
}
