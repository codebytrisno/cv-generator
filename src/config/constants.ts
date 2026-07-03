export const APP_NAME = 'CV Generator AI'
export const APP_TAGLINE = 'Buat CV Profesional dengan AI, Gratis!'

export const DEFAULT_TEMPLATE_ID = 'modern'

export const TEMPLATES = [
  { id: 'modern', name: 'Modern', description: 'Desain bersih dan profesional' },
  { id: 'classic', name: 'Klasik', description: 'Format tradisional ATS-friendly' },
  { id: 'minimal', name: 'Minimal', description: 'Sederhana, fokus pada konten' },
] as const

export const AI_PROVIDERS = [
  { id: 'groq', name: 'Groq', description: 'Inferensi super cepat — gratis' },
  { id: 'openrouter', name: 'OpenRouter', description: 'Akses banyak model AI — pay-per-use' },
] as const

export const AI_MODELS: Record<string, { id: string; name: string; description: string }[]> = {
  groq: [
    { id: 'llama-3.3-70b-versatile', name: 'Llama 3.3 70B', description: 'Powerful & akurat' },
    { id: 'llama-3.1-8b-instant', name: 'Llama 3.1 8B', description: 'Super cepat' },
  ],
  openrouter: [
    { id: 'openai/gpt-4o-mini', name: 'GPT-4o Mini', description: 'Cepat & murah' },
    { id: 'openai/gpt-4o', name: 'GPT-4o', description: 'Kualitas terbaik OpenAI' },
    { id: 'anthropic/claude-3.5-sonnet', name: 'Claude 3.5 Sonnet', description: 'Akurat & aman' },
    { id: 'google/gemini-2.0-flash-001', name: 'Gemini 2.0 Flash', description: 'Cepat dari Google' },
    { id: 'meta-llama/llama-3.3-70b-instruct', name: 'Llama 3.3 70B', description: 'Open source powerful' },
  ],
}

export const DEFAULT_MODELS: Record<string, string> = {
  groq: 'llama-3.3-70b-versatile',
  openrouter: 'openai/gpt-4o-mini',
}

export const STORAGE_KEYS = {
  PREFERENCES: 'cv_preferences',
  AI_PROVIDER: 'ai_provider',
  AI_MODEL: 'ai_model',
  AUTO_SAVE_INTERVAL: 30000,
} as const
