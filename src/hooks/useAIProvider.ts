'use client'

import { useState, useEffect, useCallback } from 'react'
import type { AIProviderName } from '@/types/ai'
import { STORAGE_KEYS, DEFAULT_MODELS } from '@/config/constants'

function readStoredProvider(): AIProviderName {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.AI_PROVIDER)
    if (stored === 'groq' || stored === 'openrouter') return stored
  } catch {}
  return 'groq'
}

function readStoredModel(): string {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.AI_MODEL)
    if (stored) return stored
  } catch {}
  return ''
}

export function useAIProvider() {
  const [provider, setProviderState] = useState<AIProviderName>('groq')
  const [model, setModelState] = useState<string>('')
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const p = readStoredProvider()
    const m = readStoredModel() || DEFAULT_MODELS[p]
    setProviderState(p)
    setModelState(m)
    setHydrated(true)
  }, [])

  const setProvider = useCallback((next: AIProviderName) => {
    const defaultModel = DEFAULT_MODELS[next]
    setProviderState(next)
    setModelState(defaultModel)
    try {
      localStorage.setItem(STORAGE_KEYS.AI_PROVIDER, next)
      localStorage.setItem(STORAGE_KEYS.AI_MODEL, defaultModel)
    } catch {}
  }, [])

  const setModel = useCallback((next: string) => {
    const resolved = next || DEFAULT_MODELS[provider]
    setModelState(resolved)
    try {
      localStorage.setItem(STORAGE_KEYS.AI_MODEL, resolved)
    } catch {}
  }, [provider])

  return { provider, model, setProvider, setModel, hydrated }
}
