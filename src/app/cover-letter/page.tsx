'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Sparkles, Loader2, FileDown } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { useAI } from '@/hooks/useAI'
import { useAIProvider } from '@/hooks/useAIProvider'
import { AIProviderSelect } from '@/components/ui/AIProviderSelect'

function CoverLetterContent() {
  const searchParams = useSearchParams()
  const cvDesc = searchParams.get('cv') ?? ''
  const [cvData, setCvData] = useState(cvDesc)
  const [companyName, setCompanyName] = useState('')
  const [position, setPosition] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const { generateCoverLetter, loading } = useAI()
  const { provider, model, setProvider, setModel } = useAIProvider()

  const handleGenerate = async () => {
    if (!cvData.trim() || !companyName.trim() || !position.trim()) return

    try {
      const letter = await generateCoverLetter(cvData, companyName, position, jobDescription || undefined, provider, model)
      setResult(letter)
    } catch {
      // handled by useAI
    }
  }

  const handleExport = () => {
    if (!result) return
    const blob = new Blob([result], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `Cover_Letter_${companyName.replace(/\s+/g, '_')}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const isValid = cvData.trim().length > 0 && companyName.trim().length > 0 && position.trim().length > 0

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 pb-20 md:pb-8">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-text-primary">Cover Letter</h1>
        <p className="mt-1 text-sm text-text-secondary">Generate surat lamaran profesional dengan AI</p>
      </div>

      <Card className="mb-4">
        <div className="flex flex-col gap-4">
          <Textarea
            label="Data CV / Ringkasan Diri"
            value={cvData}
            onChange={(e) => setCvData(e.target.value)}
            placeholder="Masukkan data CV atau ringkasan pengalaman kamu..."
            rows={4}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label="Nama Perusahaan"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="PT Maju Bersama"
            />
            <Input
              label="Posisi yang Dilamar"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Frontend Developer"
            />
          </div>
          <Textarea
            label="Deskripsi Pekerjaan (opsional)"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Tempel job description di sini agar cover letter lebih relevan..."
            rows={3}
          />
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary">Hasil bisa di-copy atau di-download</span>
              <AIProviderSelect provider={provider} model={model} onProviderChange={setProvider} onModelChange={setModel} />
            </div>
            <div className="flex gap-2">
              {result && (
                <Button variant="secondary" onClick={handleExport} size="sm">
                  <FileDown className="mr-2 h-4 w-4" /> Download
                </Button>
              )}
              <Button onClick={handleGenerate} disabled={!isValid || loading} className="w-full sm:w-auto">
                {loading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>
                ) : (
                  <><Sparkles className="mr-2 h-4 w-4" /> Generate</>
                )}
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {result && (
        <Card>
          <div className="whitespace-pre-wrap text-sm leading-relaxed text-text-primary">
            {result}
          </div>
        </Card>
      )}
    </div>
  )
}

export default function CoverLetterPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl px-4 py-8"><p className="text-sm text-text-secondary">Loading...</p></div>}>
      <CoverLetterContent />
    </Suspense>
  )
}
