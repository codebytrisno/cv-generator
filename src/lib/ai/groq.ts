import type { AIResponse } from '@/types/ai'

const API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY ?? ''
const API_URL = 'https://api.groq.com/openai/v1/chat/completions'

export async function generateWithGroq(prompt: string, modelName?: string): Promise<AIResponse> {
  if (!API_KEY) {
    throw new Error('Groq API key tidak ditemukan. Set NEXT_PUBLIC_GROQ_API_KEY di .env.local')
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: modelName ?? 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    }),
  })

  if (!res.ok) {
    let errorMessage = `Groq API error: ${res.status}`
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
