import type { AIResponse } from '@/types/ai'

const API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY ?? ''
const API_URL = 'https://openrouter.ai/api/v1/chat/completions'

export async function generateWithOpenRouter(prompt: string, modelName?: string): Promise<AIResponse> {
  if (!API_KEY) {
    throw new Error('OpenRouter API key tidak ditemukan. Set NEXT_PUBLIC_OPENROUTER_API_KEY di .env.local')
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
      'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000',
      'X-Title': 'CV Generator AI',
    },
    body: JSON.stringify({
      model: modelName ?? 'openai/gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    }),
  })

  if (!res.ok) {
    let errorMessage = `OpenRouter API error: ${res.status}`
    try {
      const errorData = await res.json()
      if (errorData.error?.message) {
        errorMessage = errorData.error.message
      } else if (errorData.message) {
        errorMessage = errorData.message
      }
    } catch {
      // Ignore JSON parse errors
    }
    throw new Error(errorMessage)
  }

  const data = await res.json()

  return {
    content: data.choices[0]?.message?.content ?? '',
    usage: {
      promptTokens: data.usage?.prompt_tokens ?? 0,
      completionTokens: data.usage?.completion_tokens ?? 0,
    },
  }
}
