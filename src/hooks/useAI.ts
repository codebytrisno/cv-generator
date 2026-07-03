'use client'

import { useState, useCallback } from 'react'
import { createAIProvider } from '@/lib/ai/provider'
import { buildCVPrompt, buildCoverLetterPrompt, buildTailorPrompt } from '@/lib/ai/prompt-templates'
import type { AIProviderName } from '@/types/ai'

export function useAI() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const generateCV = useCallback(async (description: string, provider?: AIProviderName, model?: string) => {
    setLoading(true)
    setError(null)

    try {
      const ai = createAIProvider(provider, model)
      const prompt = buildCVPrompt(description)
      const response = await ai.generate(prompt)

      const jsonStart = response.content.indexOf('{')
      const jsonEnd = response.content.lastIndexOf('}')
      if (jsonStart === -1 || jsonEnd === -1) {
        throw new Error('AI response tidak valid')
      }

      const jsonStr = response.content.slice(jsonStart, jsonEnd + 1)
      const cvData = JSON.parse(jsonStr)
      return cvData
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Gagal generate CV'
      setError(msg)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const generateCoverLetter = useCallback(
    async (
      cvData: string,
      companyName: string,
      position: string,
      jobDescription?: string,
      provider?: AIProviderName,
      model?: string
    ) => {
      setLoading(true)
      setError(null)

      try {
        const ai = createAIProvider(provider, model)
        const prompt = buildCoverLetterPrompt(cvData, companyName, position, jobDescription)
        const response = await ai.generate(prompt)
        return response.content
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Gagal generate cover letter'
        setError(msg)
        throw err
      } finally {
        setLoading(false)
      }
    },
    []
  )

  const tailorCV = useCallback(
    async (cvContent: string, jobDescription: string, provider?: AIProviderName, model?: string) => {
      setLoading(true)
      setError(null)

      try {
        const ai = createAIProvider(provider, model)
        const prompt = buildTailorPrompt(cvContent, jobDescription)
        const response = await ai.generate(prompt)

        const jsonStart = response.content.indexOf('{')
        const jsonEnd = response.content.lastIndexOf('}')
        if (jsonStart === -1 || jsonEnd === -1) {
          throw new Error('AI response tidak valid')
        }

        const jsonStr = response.content.slice(jsonStart, jsonEnd + 1)
        return JSON.parse(jsonStr)
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Gagal tailor CV'
        setError(msg)
        throw err
      } finally {
        setLoading(false)
      }
    },
    []
  )

  return { generateCV, generateCoverLetter, tailorCV, loading, error }
}
