# TASK LIST: CV Generator AI

---

## Module 1: Setup Project

### T-01: Init Next.js + Install Dependencies
- **Deskripsi:** Init project Next.js 16 dengan App Router, TypeScript, Tailwind CSS, dan install semua dependencies
- **Prioritas:** High | **Status:** Done
- **File:** `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`

### T-02: Konfigurasi Design System (Tailwind Tokens)
- **Deskripsi:** Setup design tokens sesuai DESIGN.md — colors, typography, spacing, border radius, shadows di globals.css
- **Prioritas:** High | **Status:** Done
- **File:** `src/app/globals.css`

### T-03: Setup Storage Layer (Dexie.js + IndexedDB)
- **Deskripsi:** Buat abstraksi database client-side dengan Dexie.js — definisi tabel CV, CoverLetter + CRUD
- **Prioritas:** High | **Status:** Done
- **File:** `src/lib/storage/db.ts`, `src/lib/storage/index.ts`

### T-04: Setup AI Provider Layer
- **Deskripsi:** Interface dan implementasi 3 AI provider (Gemini, Groq, HuggingFace) dengan fallback + prompt templates
- **Prioritas:** High | **Status:** Done
- **File:** `src/lib/ai/provider.ts`, `src/lib/ai/gemini.ts`, `src/lib/ai/groq.ts`, `src/lib/ai/prompt-templates.ts`

### T-05: Buat Shared UI Components
- **Deskripsi:** Komponen reusable Button, Input, Textarea, Select, Card dengan semua variant & states
- **Prioritas:** High | **Status:** Done
- **File:** `src/components/ui/Button.tsx`, `src/components/ui/Input.tsx`, `src/components/ui/Textarea.tsx`, `src/components/ui/Select.tsx`, `src/components/ui/Card.tsx`

### T-06: Buat Layout Components + Root Layout
- **Deskripsi:** Header, Footer, BottomNav (mobile), Root Layout dengan Inter font + metadata
- **Prioritas:** High | **Status:** Done
- **File:** `src/app/layout.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/BottomNav.tsx`

---

## Module 2: Home & Landing Page

### T-07: Buat Hero Section + AIInput Component
- **Deskripsi:** Hero section dengan headline, subtitle, AIInput (textarea + CTA)
- **Prioritas:** High | **Status:** Done
- **File:** `src/components/home/HeroSection.tsx`, `src/components/builder/AIInput.tsx`

### T-08: Buat Stats Bar Component
- **Deskripsi:** Stats bar dengan 3 kolom (10K+ CV, 20+ Template, 100% Gratis)
- **Prioritas:** Mid | **Status:** Done
- **File:** `src/components/home/StatsBar.tsx`

### T-09: Buat Feature Cards + How It Works Section
- **Deskripsi:** 3 feature cards (CV Builder, Cover Letter, Tailor) + How It Works 3 langkah
- **Prioritas:** High | **Status:** Done
- **File:** `src/components/home/FeatureCards.tsx`, `src/components/home/HowItWorks.tsx`

### T-10: Buat Template Carousel + Landing Page Utuh
- **Deskripsi:** Carousel template preview (3 template dengan SVG mockup) + landing page utuh
- **Prioritas:** Mid | **Status:** Done
- **File:** `src/components/home/TemplateCarousel.tsx`, `src/app/page.tsx`

### Bonus: CTA Akhir + FAQ + Trust Badges
- **Deskripsi:** Section "Siap Buat CV?", FAQ accordion (4 pertanyaan), trust indicator badges
- **Status:** Done
- **File:** `src/components/home/CTASection.tsx`, `src/components/home/FAQ.tsx`, `src/components/home/TrustBadges.tsx`

### Bonus: Scroll Reveal Animation
- **Deskripsi:** Fade-in-up animation tiap section via IntersectionObserver + CSS
- **Status:** Done
- **File:** `src/hooks/useScrollReveal.ts`, `src/components/home/RevealSection.tsx`

---

## Module 3: CV Builder

### T-11: Buat Halaman Builder + Split Layout
- **Deskripsi:** Layout /builder — split panel desktop, stack mobile + bottom sheet preview toggle
- **Prioritas:** High | **Status:** Done
- **File:** `src/app/builder/page.tsx`

### T-12: Integrasi AI Generate CV + useAI Hook
- **Deskripsi:** Hook useAI — generateCV, generateCoverLetter, tailorCV via AI provider fallback
- **Prioritas:** High | **Status:** Done
- **File:** `src/hooks/useAI.ts`

### T-13: Buat CV Form + CV Type Definitions
- **Deskripsi:** Form sections collapsible (Data Pribadi, Ringkasan, Pendidikan, Pengalaman, Skill) + add/delete education & experience
- **Prioritas:** High | **Status:** Done
- **File:** `src/types/cv.ts`, `src/components/builder/CVForm.tsx`

### T-14: Buat Live Preview Component + Template Picker
- **Deskripsi:** Preview CV real-time 3 template (Modern/Classic/Minimal), template picker buttons
- **Prioritas:** High | **Status:** Done
- **File:** `src/components/builder/LivePreview.tsx`, `src/components/builder/TemplatePicker.tsx`

### T-15: Implementasi Export PDF
- **Deskripsi:** html2pdf.js export PDF A4 portrait, 2x scale, no watermark
- **Prioritas:** High | **Status:** Done
- **File:** `src/app/builder/page.tsx`

### T-16: Auto-save + useCV Hook
- **Deskripsi:** Hook useCVList/useCVDetail/useAutoSave — 30s debounce auto-save ke IndexedDB
- **Prioritas:** High | **Status:** Done
- **File:** `src/hooks/useCV.ts`

---

## Module 4: My CVs, Cover Letter & Tailor

### T-17: Buat Halaman My CVs
- **Deskripsi:** List CV cards + empty state + edit/delete action + confirm dialog
- **Prioritas:** High | **Status:** Done
- **File:** `src/app/my-cvs/page.tsx`

### T-18: Buat Halaman Cover Letter Generator
- **Deskripsi:** Input CV text + company/position/JD → AI generate → download .txt
- **Prioritas:** Mid | **Status:** Done
- **File:** `src/app/cover-letter/page.tsx`

### T-19: Buat Halaman Tailor to Job
- **Deskripsi:** Input CV + JD → AI optimize → preview 3 template → PDF export
- **Prioritas:** Mid | **Status:** Done
- **File:** `src/app/tailor/page.tsx`

---

## Module 5: Polish & Final

### T-20: Implementasi Dark Mode
- **Deskripsi:** Dark mode toggle (Moon/Sun di header) + persist localStorage + CSS var override + Tailwind dark variant
- **Prioritas:** Mid | **Status:** Done
- **File:** `src/components/ThemeProvider.tsx`, `src/app/globals.css`, `src/components/layout/Header.tsx`

### Bonus: Toast Notification
- **Deskripsi:** Toast system (success/error/info/warning) auto-dismiss 4s + ToastProvider
- **Status:** Done
- **File:** `src/components/ui/Toast.tsx`, `src/app/layout.tsx`

### T-21: Responsive Testing & Fix
- **Deskripsi:** Testing di 3 breakpoint, fix layout issues
- **Prioritas:** Mid | **Status:** Done

### T-22: AI Provider Fallback + Error Handling
- **Deskripsi:** Fallback chain Gemini → Groq → HuggingFace, user-friendly error messages
- **Prioritas:** High | **Status:** Done (sudah implement fallback chain di provider.ts)

### T-23: Final Testing & README
- **Deskripsi:** Tes semua flow E2E, buat README dengan setup guide + env variables
- **Prioritas:** Low | **Status:** Done

---

## Progress Overview

| Modul | Total | Done | Todo |
|-------|-------|------|------|
| Module 1: Setup | 6 | 6 | 0 |
| Module 2: Home & Landing | 6 | 6 | 0 |
| Module 3: CV Builder | 6 | 6 | 0 |
| Module 4: My CVs, Cover Letter & Tailor | 3 | 3 | 0 |
| Module 5: Polish & Final | 4 | 4 | 0 |
| **Total** | **25** | **25** | **0** |
