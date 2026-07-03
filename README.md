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
- **100% Gratis** — No signup, no paywall, no credit system. Selamanya.

## Tech Stack

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| Next.js | 16.2.10 | Framework (App Router, Turbopack) |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling + dark mode |
| Dexie.js | 4.4.4 | IndexedDB wrapper (client-side storage) |
| html2pdf.js | 0.14.0 | Export PDF client-side |
| lucide-react | 1.23.0 | Icons |
| @google/generative-ai | 0.24.1 | Gemini AI provider |

## AI Providers

CV Generator AI pake API gratis dari 3 provider dengan **auto fallback chain**:

1. **Gemini API** (Google) — Gemini 2.0 Flash, 60 req/menit gratis
2. **Groq** — Mixtral 8x7B, 30 req/menit gratis
3. **HuggingFace Inference** — Open source models

Jika provider pertama rate-limited, otomatis fallback ke provider berikutnya tanpa user notice.

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
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key
NEXT_PUBLIC_HF_API_KEY=your_huggingface_api_key
```

Cara dapet API key (semua gratis):
- **Gemini:** https://aistudio.google.com/apikey
- **Groq:** https://console.groq.com/keys
- **HuggingFace:** https://huggingface.co/settings/tokens

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
│   ├── layout.tsx          # Root layout + theme provider + toast
│   ├── page.tsx            # Landing page (hero, stats, features, carousel, faq, cta)
│   ├── builder/page.tsx    # CV Builder (AI generate, form, preview, PDF, auto-save)
│   ├── cover-letter/page.tsx   # Cover Letter generator
│   ├── tailor/page.tsx     # Tailor CV to job description
│   └── my-cvs/page.tsx     # Saved CVs list
├── components/
│   ├── ui/                 # Shared UI (Button, Input, Card, Toast, dll)
│   ├── layout/             # Header, Footer, BottomNav
│   ├── home/               # Landing page sections
│   └── builder/            # CV Form, Live Preview, Template Picker, AIInput
├── hooks/
│   ├── useAI.ts            # AI generation hooks
│   ├── useCV.ts            # CV CRUD + auto-save hooks
│   └── useScrollReveal.ts  # IntersectionObserver scroll animation
├── lib/
│   ├── ai/                 # AI provider (Gemini, Groq, HuggingFace, prompts)
│   ├── storage/            # Dexie.js IndexedDB layer
│   └── utils/              # cn(), validators
├── types/
│   ├── cv.ts               # CVData, CV, Education, Experience types
│   ├── ai.ts               # AIResponse, AIProvider types
│   └── cover-letter.ts     # CoverLetter type
└── config/
    └── constants.ts        # App constants (templates, providers, defaults)
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
- **Static export** — Bisa deploy ke Vercel, Netlify, atau static hosting mana aja

## Roadmap

- [x] Setup project + design system
- [x] Landing page (hero, stats, features, how it works, templates)
- [x] CV Builder (AI generate, form, preview 3 template, PDF export, auto-save)
- [x] My CVs (list, edit, delete)
- [x] Cover Letter generator
- [x] Tailor CV to job description
- [x] Dark mode
- [x] Toast notifications
- [ ] Responsive testing & polish
- [ ] More CV templates
- [ ] Export PDF with proper fonts

## Lisensi

MIT
