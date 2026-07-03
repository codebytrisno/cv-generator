# CV Generator AI

Buat CV profesional dengan AI, gratis selamanya. Generate CV, cover letter, dan tailor CV sesuai job description — tanpa signup, tanpa paywall.

**Live demo:** [cv-generator.vercel.app](https://cv-generator.vercel.app)

## Fitur

- **CV Builder** — Generate CV lengkap dari deskripsi singkat. Edit, preview 3 template, download PDF.
- **Cover Letter Generator** — Buat surat lamaran profesional otomatis.
- **Tailor to Job** — Optimasi CV biar cocok sama job description yang dilamar.
- **3 Template CV** — Modern, Klasik, Minimal — ATS-friendly, text-based PDF.
- **Dark Mode** — Toggle light/dark, persist ke localStorage.
- **Auto-save** — Semua perubahan auto-simpan ke IndexedDB tiap 30 detik.
- **Multi AI Provider** — Pilih provider AI (Groq atau OpenRouter) dan model sesuai kebutuhan.
- **100% Gratis** — No signup, no paywall, no credit system. Selamanya.

## Tech Stack

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| Next.js | 16.2.10 | Framework (App Router, webpack) |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling + dark mode |
| Dexie.js | 4.4.4 | IndexedDB wrapper (client-side storage) |
| html2pdf.js | 0.14.0 | Export PDF client-side |
| lucide-react | 1.23.0 | Icons |

## AI Providers

CV Generator AI menggunakan API gratis dari 2 provider dengan **auto fallback chain**:

1. **Groq** — Llama 3.3 70B, 30 req/menit gratis
2. **OpenRouter** — 5+ model (GPT-4o Mini, GPT-4o, Claude 3.5 Sonnet, Gemini 2.0 Flash, Llama 3.3 70B), pay-as-you-go via credit

Jika provider pertama rate-limited atau gagal, otomatis fallback ke provider berikutnya.

## Setup

### 1. Clone & Install

```bash
git clone <repo-url>
cd cv-generator
npm install
```

### 2. Environment Variables

Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key
NEXT_PUBLIC_OPENROUTER_API_KEY=your_openrouter_api_key
```

Cara dapet API key (gratis/berbayar rendah):
- **Groq:** https://console.groq.com/keys
- **OpenRouter:** https://openrouter.ai/keys

Minimal 1 API key cukup, tapi makin banyak makin reliable (auto fallback).

### 3. Run

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### 4. Build

```bash
npm run build
```

Output static di folder `.next`.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout + theme provider + toast
│   ├── page.tsx                # Landing page
│   ├── builder/page.tsx        # CV Builder
│   ├── cover-letter/page.tsx   # Cover Letter generator
│   ├── tailor/page.tsx         # Tailor CV to job description
│   └── my-cvs/page.tsx         # Saved CVs list
├── components/
│   ├── ui/                     # Shared UI (Button, Input, Card, Toast, AIProviderSelect, dll)
│   ├── layout/                 # Header, Footer, BottomNav
│   ├── home/                   # Landing page sections
│   └── builder/                # CV Form, Live Preview, Template Picker, AIInput
├── hooks/
│   ├── useAI.ts                # AI generation hooks
│   ├── useAIProvider.ts        # Provider/model selection with localStorage
│   ├── useCV.ts                # CV CRUD + auto-save hooks
│   └── useScrollReveal.ts      # IntersectionObserver scroll animation
├── lib/
│   ├── ai/                     # AI provider (Groq, OpenRouter, prompts, factory)
│   ├── storage/                # Dexie.js IndexedDB layer
│   └── utils/                  # cn(), validators
├── types/
│   ├── cv.ts                   # CVData, CV, Education, Experience types
│   ├── ai.ts                   # AIResponse, AIProviderName types
│   └── cover-letter.ts         # CoverLetter type
└── config/
    └── constants.ts            # App constants (templates, providers, models, defaults)
```

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Set environment variables di dashboard Vercel (settings → Environment Variables).

## Arsitektur

- **Zero backend** — Semua data di browser (IndexedDB via Dexie.js)
- **No signup** — Langsung pakai, data privacy terjaga
- **Client-side AI** — API call langsung dari browser ke provider gratis
- **Multi-provider fallback** — Jika provider A gagal, auto pindah ke provider B
- **Static export** — Bisa deploy ke Vercel, Netlify, atau static hosting mana aja

## Changelog

### v1.1.0
- Ganti Gemini + HuggingFace → OpenRouter (5 model)
- Tambah Groq Llama 3.3 70B model terbaru
- Tambah AI provider selector (pill-style UI)
- Tambah model selector per provider
- Fix error handling dengan toast notifications
- Fix dark mode (Tailwind v3 + CSS variables RGB)
- Fix Tailwind v4 → v3 (kompatibilitas Next.js)
- Fix hydration mismatch localStorage

## License

MIT
