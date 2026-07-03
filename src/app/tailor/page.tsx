'use client'

import { Suspense, useState, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { Sparkles, Loader2, FileDown } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Textarea } from '@/components/ui/Textarea'
import { LivePreview } from '@/components/builder/LivePreview'
import { useAI } from '@/hooks/useAI'
import { useAIProvider } from '@/hooks/useAIProvider'
import { AIProviderSelect } from '@/components/ui/AIProviderSelect'
import { DEFAULT_TEMPLATE_ID } from '@/config/constants'
import { TemplatePicker } from '@/components/builder/TemplatePicker'
import type { CVData } from '@/types/cv'

function TailorContent() {
  const searchParams = useSearchParams()
  const desc = searchParams.get('desc') ?? ''
  const [cvContent, setCvContent] = useState(desc)
  const [jobDescription, setJobDescription] = useState('')
  const [result, setResult] = useState<CVData | null>(null)
  const [templateId, setTemplateId] = useState(DEFAULT_TEMPLATE_ID)
  const previewRef = useRef<HTMLDivElement>(null)

  const { tailorCV, loading } = useAI()
  const { provider, model, setProvider, setModel } = useAIProvider()

  const handleTailor = async () => {
    if (!cvContent.trim() || !jobDescription.trim()) return

    try {
      const tailored = await tailorCV(cvContent, jobDescription, provider, model)
      setResult(tailored)
    } catch {
      // handled by useAI
    }
  }

  const handleExport = async () => {
    const html2pdf = (await import('html2pdf.js')).default
    const el = previewRef.current
    if (!el || !result) return

    const opt = {
      margin: [10, 10] as [number, number],
      filename: `CV_Tailored_${result.name || 'untitled'}.pdf`,
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
    }
    html2pdf().set(opt).from(el).save()
  }

  const isValid = cvContent.trim().length > 0 && jobDescription.trim().length > 0

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 pb-20 md:pb-8">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-text-primary">Sesuaikan CV</h1>
        <p className="mt-1 text-sm text-text-secondary">Optimasi CV kamu agar cocok dengan job description</p>
      </div>

      <Card className="mb-4">
        <div className="flex flex-col gap-4">
          <Textarea
            label="CV Kamu"
            value={cvContent}
            onChange={(e) => setCvContent(e.target.value)}
            placeholder="Masukkan data CV kamu..."
            rows={4}
          />
          <Textarea
            label="Job Description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Tempel job description di sini..."
            rows={4}
          />
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary">AI akan mengoptimasi CV sesuai JD</span>
              <AIProviderSelect provider={provider} model={model} onProviderChange={setProvider} onModelChange={setModel} />
            </div>
            <Button onClick={handleTailor} disabled={!isValid || loading} className="w-full sm:w-auto">
              {loading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Mengoptimasi...</>
              ) : (
                <><Sparkles className="mr-2 h-4 w-4" /> Sesuaikan CV</>
              )}
            </Button>
          </div>
        </div>
      </Card>

      {result && (
        <div className="flex flex-col gap-4">
          <Card>
            <TemplatePicker selected={templateId} onChange={setTemplateId} />
          </Card>
          <div ref={previewRef}>
            <LivePreview data={result} templateId={templateId} />
          </div>
          <Button onClick={handleExport}>
            <FileDown className="mr-2 h-4 w-4" /> Export PDF
          </Button>
        </div>
      )}
    </div>
  )
}

export default function TailorPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-4xl px-4 py-8"><p className="text-sm text-text-secondary">Loading...</p></div>}>
      <TailorContent />
    </Suspense>
  )
}
