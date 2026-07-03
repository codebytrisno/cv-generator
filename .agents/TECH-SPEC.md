# TECH SPEC: CV Generator AI

---

## BAGIAN 1: Tech Stack & Arsitektur

### Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Frontend | Next.js (App Router) | 16.2.9 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| State | React Context + hooks | - |
| AI Integration | Client-side API (Gemini / Groq / HuggingFace) | - |
| PDF Export | html2pdf.js / jsPDF | - |
| Storage | localStorage / IndexedDB | - |
| Hosting | Vercel (free tier) | - |

### Arsitektur Sistem

```
Browser (Next.js Static Site)
│
├── localStorage / IndexedDB ──── Data CV & Cover Letter
│
└── AI Provider API (client-side)
    ├── Gemini API (Google AI Studio — free tier)
    ├── Groq (free tier, 30 req/min)
    └── HuggingFace Inference (free tier)
```

**Zero Backend** — Semua proses di client-side. Static site di Vercel.

### Struktur Folder

```
src/
├── app/
│   ├── layout.tsx              # Root layout + providers
│   ├── page.tsx                # Home / Landing
│   ├── globals.css             # Tailwind directives + design tokens
│   ├── builder/
│   │   └── page.tsx            # CV Builder
│   ├── cover-letter/
│   │   └── page.tsx            # Cover Letter Generator
│   ├── tailor/
│   │   └── page.tsx            # Tailor to Job
│   └── my-cvs/
│       └── page.tsx            # My CVs
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Select.tsx
│   │   └── Card.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── BottomNav.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── FeatureCards.tsx
│   │   ├── StatsBar.tsx
│   │   ├── HowItWorks.tsx
│   │   └── TemplateCarousel.tsx
│   ├── builder/
│   │   ├── AIInput.tsx
│   │   ├── CVForm.tsx
│   │   ├── LivePreview.tsx
│   │   └── TemplatePicker.tsx
│   ├── cover-letter/
│   │   ├── CoverLetterInput.tsx
│   │   └── CoverLetterResult.tsx
│   ├── tailor/
│   │   ├── TailorInput.tsx
│   │   └── ComparisonView.tsx
│   └── cv/
│       ├── CVCard.tsx
│       └── EmptyState.tsx
├── lib/
│   ├── ai/
│   │   ├── provider.ts         # AI provider selector
│   │   ├── gemini.ts           # Gemini API handler
│   │   ├── groq.ts             # Groq API handler
│   │   └── prompt-templates.ts # Prompt untuk generate CV/Cover Letter
│   ├── storage/
│   │   ├── index.ts            # Storage abstraction
│   │   └── db.ts               # IndexedDB wrapper
│   ├── pdf/
│   │   └── export.ts           # PDF generation
│   └── utils/
│       ├── cn.ts               # classnames utility
│       └── validators.ts       # Form validators
├── hooks/
│   ├── useAI.ts                # AI generation hook
│   ├── useCV.ts                # CV CRUD hook
│   └── useLocalStorage.ts      # localStorage hook
├── types/
│   ├── cv.ts                   # CV type definitions
│   ├── cover-letter.ts
│   └── ai.ts                   # AI response types
└── config/
    └── constants.ts            # App constants, API keys, etc.
```

### Justifikasi
- **Next.js 16:** App Router, RSC untuk SEO landing, Client Components untuk interaksi AI
- **Frontend-only:** Zero backend cost, deploy gratis di Vercel, sesuai UVP "100% gratis"
- **Tailwind CSS:** Design system dari DESIGN.md bisa diimplementasi langsung via config
- **localStorage/IndexedDB:** No signup required, data tetap aman di browser user

---

## BAGIAN 2: Database Design

Karena **zero backend**, database = **localStorage / IndexedDB** di browser user.

### Ringkasan Storage

| Item | Detail |
|------|--------|
| Storage | IndexedDB via Dexie.js (wrapper) |
| Fallback | localStorage untuk data kecil (preferences) |
| Pendekatan | Document-based (JSON) |
| Tools | Dexie.js |

### Entity Overview

**Entity: CV**

| Field | Type | Contoh | Wajib |
|-------|------|--------|-------|
| `id` | string (UUID) | `cv_1709428800000` | ✅ |
| `title` | string | `CV Frontend Developer` | ✅ |
| `templateId` | string | `modern` | ✅ |
| `data.name` | string | `Rina Amelia` | ✅ |
| `data.email` | string | `rina@email.com` | ✅ |
| `data.phone` | string | `0812-3456-7890` | |
| `data.summary` | string | `Fresh graduate...` | |
| `data.education` | `Education[]` | `[{ institution, degree, year }]` | |
| `data.experience` | `Experience[]` | `[{ company, role, period, desc }]` | |
| `data.skills` | `string[]` | `[React, TypeScript]` | |
| `data.certifications` | `Certification[]` | | |
| `data.languages` | `Language[]` | | |
| `createdAt` | timestamp | | ✅ |
| `updatedAt` | timestamp | | ✅ |

**Entity: Cover Letter**

| Field | Type | Contoh |
|-------|------|--------|
| `id` | string (UUID) | `cl_1709428800000` |
| `cvId` | string | `cv_1709428800000` |
| `companyName` | string | `PT Maju Jaya` |
| `position` | string | `Frontend Developer` |
| `content` | string (markdown) | `Dengan hormat,...` |
| `createdAt` | timestamp | |

**Entity: App Preferences**

| Field | Type | Contoh |
|-------|------|--------|
| `theme` | `"light" \| "dark"` | `light` |
| `language` | `"id" \| "en"` | `id` |
| `aiProvider` | `"gemini" \| "groq" \| "huggingface"` | `gemini` |
| `lastUsedTemplate` | string | `modern` |

### Index Strategy (IndexedDB)

| Table | Index | Purpose |
|-------|-------|---------|
| `cvs` | `updatedAt` | Sort by last modified |
| `cvs` | `createdAt` | Sort by creation date |
| `coverLetters` | `cvId` | Find cover letter by CV |
| `coverLetters` | `createdAt` | Sort by date |

### Data Flow

```
User input di form → React state → Preview (real-time)
                            ↘ Auto-save (30 detik) → Dexie.js → IndexedDB
                            
Klik Export → Baca data dari state → html2pdf.js → Download PDF

AI Generate → Send prompt ke API (Gemini/Groq) → Parse response → Update state + storage
```

---

## BAGIAN 3: Interface Design

### Routes (Next.js App Router)

| Route | Page | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home/Landing |
| `/builder` | `app/builder/page.tsx` | CV Builder (Client Component) |
| `/cover-letter` | `app/cover-letter/page.tsx` | Cover Letter Generator (Client) |
| `/tailor` | `app/tailor/page.tsx` | Tailor to Job (Client Component) |
| `/my-cvs` | `app/my-cvs/page.tsx` | My CVs (Client Component) |

### Client Components Key

| Component | File | Type |
|-----------|------|------|
| `RootLayout` | `app/layout.tsx` | Server Component (metadata, Inter font) |
| `LandingPage` | `app/page.tsx` | Server + Client (Hero input) |
| `BuilderPage` | `app/builder/page.tsx` | Client (`"use client"`) |
| `CoverLetterPage` | `app/cover-letter/page.tsx` | Client (`"use client"`) |
| `TailorPage` | `app/tailor/page.tsx` | Client (`"use client"`) |
| `MyCVsPage` | `app/my-cvs/page.tsx` | Client (`"use client"`) |

### AI Provider Interface

```typescript
// src/lib/ai/provider.ts
interface AIProvider {
  name: 'gemini' | 'groq' | 'huggingface'
  generate(prompt: string): Promise<AIResponse>
}

// Response structure
interface AIResponse {
  content: string
  usage?: {
    promptTokens: number
    completionTokens: number
  }
}
```

### Storage Interface

```typescript
// src/lib/storage/index.ts
interface StorageProvider {
  getCVs(): Promise<CV[]>
  getCV(id: string): Promise<CV | null>
  saveCV(cv: CV): Promise<void>
  deleteCV(id: string): Promise<void>
  getCoverLetters(): Promise<CoverLetter[]>
  saveCoverLetter(cl: CoverLetter): Promise<void>
}
```

### External Dependencies

| Library | Usage | Import |
|---------|-------|--------|
| `@google/generative-ai` | Gemini AI SDK | `npm i @google/generative-ai` |
| `dexie` | IndexedDB wrapper | `npm i dexie` |
| `html2pdf.js` | PDF export | `npm i html2pdf.js` |
| `lucide-react` | Icons | `npm i lucide-react` |
| `clsx` + `tailwind-merge` | Classnames | `npm i clsx tailwind-merge` |

---

## BAGIAN 4: Alur Logika & Business Rules

### Alur 1: Generate CV dari Deskripsi

```
User di /builder
    │
    ├── Ketik deskripsi di AIInput
    │
    ├── Klik "Generate CV"
    │     │
    │     ├── Validasi: min 10 karakter
    │     │     └── Gagal → error toast "Minimal 10 karakter"
    │     │
    │     ├── Set loading state (shimmer di preview)
    │     │
    │     ├── Panggil useAI().generateCV(deskripsi)
    │     │     ├── Pilih provider (gemini/groq/huggingface dari config)
    │     │     ├── Build prompt dari prompt-templates.ts
    │     │     ├── Call AI API (client-side fetch)
    │     │     └── Parse response → CV object
    │     │
    │     ├── Gagal?
    │     │     └── Error toast + retry button
    │     │
    │     └── Berhasil?
    │           ├── Update form fields dengan hasil AI
    │           ├── Update live preview
    │           └── Auto-save ke IndexedDB (30 detik timer)
    │
    └── User edit manual → preview real-time update
         │
         └── Export PDF → html2pdf.js → download
```

### Alur 2: Generate Cover Letter

```
User di /cover-letter
    │
    ├── Pilih CV dari dropdown (load dari storage)
    ├── Input nama perusahaan + posisi
    ├── Paste job description (opsional)
    │
    ├── Klik "Generate Cover Letter"
    │     ├── Build prompt: data CV + company + position + JD
    │     ├── Call AI API
    │     └── Parse response → cover letter text
    │
    ├── Hasil muncul di preview panel
    ├── User bisa edit langsung
    └── Copy / Download PDF
```

### Alur 3: Tailor CV to Job

```
User di /tailor
    │
    ├── Pilih CV existing (dari storage) ATAU upload PDF
    │     └── Upload PDF → parse text (PDF.js / file reader)
    │
    ├── Paste job description
    │
    ├── Klik "Sesuaikan CV"
    │     ├── Build prompt: CV content + job description
    │     ├── Call AI API → optimized CV + diff data
    │     └── Parse response
    │
    ├── Result: side-by-side comparison
    │     ├── Kiri: CV lama
    │     ├── Kanan: CV baru dengan highlight perubahan
    │     └── [Download CV Baru]
    │
    └── Simpan sebagai CV baru (opsional)
```

### Business Rules

| Rule | Deskripsi |
|------|-----------|
| **BR-01** | Minimal input 10 karakter sebelum AI generate |
| **BR-02** | Auto-save CV setiap 30 detik ke IndexedDB |
| **BR-03** | Prioritas AI provider: Gemini → Groq → HuggingFace (fallback jika rate limited) |
| **BR-04** | PDF export A4, tanpa watermark, < 2MB |
| **BR-05** | Validasi email & no HP format Indonesia |
| **BR-06** | Delete CV harus konfirmasi dialog |
| **BR-07** | CV diurutkan berdasarkan modified date (terbaru di atas) |
| **BR-08** | API key AI disimpan di env variable (NEXT_PUBLIC_) |

---

## BAGIAN 5: Keamanan, Performa, & Deployment

### Keamanan
- **API key via env** — `NEXT_PUBLIC_GEMINI_API_KEY` di `.env.local`
- **HTTPS** otomatis dari Vercel
- **No backend DB** — data user cuma di browser, nggak ada risiko bocor dari server
- **Sanitasi input** — validasi form sebelum kirim ke AI API
- **CORS** — AI provider udah support client-side requests

### Performa
- **Static Generation** — Landing page di-generate statis (ISR/SSG)
- **Client Components** cuma di halaman interaktif (builder, cover letter, tailor)
- **Lazy load** — AI libraries (Gemini SDK, html2pdf) di-load on demand via dynamic import
- **Shimmer/Skeleton** — preview pake skeleton saat AI generating biar UX tetap responsif
- **Debounce auto-save** — 30 detik interval, nggak nge-save tiap ketik
- **Image optimization** — Next.js Image component untuk template preview

### Deployment

**Platform:** Vercel (Hobby — free tier)

| Langkah | Command |
|---------|---------|
| Init project | `npx create-next-app@latest cv-generator --ts --tailwind --app` |
| Install dependensi | `npm install dexie @google/generative-ai html2pdf.js lucide-react clsx tailwind-merge` |
| Run local | `npm run dev` |
| Build | `npm run build` |
| Deploy | `npx vercel` atau hubungkan GitHub repo ke Vercel |

**Environment Variables:**

```
NEXT_PUBLIC_GEMINI_API_KEY=your_key_here
NEXT_PUBLIC_GROQ_API_KEY=your_key_here
NEXT_PUBLIC_HF_API_KEY=your_key_here
```

### Development Setup

```bash
npx create-next-app@latest cv-generator --ts --tailwind --app --src-dir
cd cv-generator
npm install dexie @google/generative-ai html2pdf.js lucide-react clsx tailwind-merge
npm run dev
```
