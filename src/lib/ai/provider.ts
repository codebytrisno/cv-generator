'use client'

import type { AIProvider, AIProviderName, AIResponse } from '@/types/ai'
import { generateWithGroq } from './groq'
import { generateWithOpenRouter } from './openrouter'
import { DEFAULT_MODELS } from '@/config/constants'

type ProviderFn = (prompt: string, model?: string) => Promise<AIResponse>

const providers: Record<AIProviderName, ProviderFn> = {
  groq: generateWithGroq,
  openrouter: generateWithOpenRouter,
}

const providerOrder: AIProviderName[] = ['groq', 'openrouter']

export function createAIProvider(preferred?: AIProviderName, preferredModel?: string): AIProvider {
  const name = preferred ?? 'groq'
  const model = preferredModel ?? DEFAULT_MODELS[name] ?? undefined
  return {
    name,
    async generate(prompt: string, modelOverride?: string): Promise<AIResponse> {
      const activeModel = modelOverride ?? model
      const startIndex = providerOrder.indexOf(name)
      const ordered = [
        ...providerOrder.slice(startIndex),
        ...providerOrder.slice(0, startIndex),
      ]

      let lastError: Error | null = null

      for (const providerName of ordered) {
        try {
          const apiKey = getApiKey(providerName)
          if (!apiKey) continue

          const m = providerName === name ? activeModel : DEFAULT_MODELS[providerName]
          return await providers[providerName](prompt, m)
        } catch (err) {
          lastError = err instanceof Error ? err : new Error(String(err))
          continue
        }
      }

      throw lastError ?? new Error('Semua AI provider tidak tersedia. Cek API key.')
    },
  }
}

function getApiKey(name: AIProviderName): string | undefined {
  switch (name) {
    case 'groq':
      return process.env.NEXT_PUBLIC_GROQ_API_KEY
    case 'openrouter':
      return process.env.NEXT_PUBLIC_OPENROUTER_API_KEY
  }
}

export { type AIProvider, type AIResponse, type AIProviderName }
