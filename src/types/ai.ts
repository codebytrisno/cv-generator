export interface AIResponse {
  content: string
  usage?: {
    promptTokens: number
    completionTokens: number
  }
}

export type AIProviderName = 'groq' | 'openrouter'

export interface AIModelOption {
  id: string
  name: string
  description: string
}

export interface AIProvider {
  name: AIProviderName
  generate(prompt: string, model?: string): Promise<AIResponse>
}
