# DESIGN SPEC: CV Generator AI

**Unique Value Proposition:** CV Generator AI 100% Gratis — Open Source AI, No Credit System, No Paywall
**Platform:** All Platforms (Responsive)
**Style:** Minimalist

---

## BAGIAN 1: Design System

### Design Style
- **Style:** Minimalist
- **Platform:** All Platforms (Responsive)
- **Mode:** Light mode default, Dark mode support
- **Unique Value Proposition:** "CV Generator AI 100% Gratis — Open Source AI, No Credit System, No Paywall"

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#1A73E8` | Brand color, main CTA |
| `--color-primary-hover` | `#1557B0` | Hover state primary |
| `--color-secondary` | `#6C63FF` | Secondary actions, AI badge |
| `--color-surface` | `#FFFFFF` | Card/container bg |
| `--color-background` | `#F8F9FA` | Page background |
| `--color-text-primary` | `#1F2937` | Main text |
| `--color-text-secondary` | `#6B7280` | Muted text |
| `--color-error` | `#EF4444` | Error state |
| `--color-success` | `#10B981` | Success state |
| `--color-border` | `#E5E7EB` | Dividers, borders |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| Font Family | Inter (sans-serif) | |
| `--font-h1` | 32px, Bold, 1.2 | Page title |
| `--font-h2` | 24px, Semibold, 1.3 | Section title |
| `--font-h3` | 18px, Semibold, 1.4 | Card title |
| `--font-body` | 14px, Regular, 1.5 | Body text |
| `--font-caption` | 12px, Regular, 1.4 | Labels, helper |
| `--font-button` | 14px, Semibold, 1 | Button text |

### Spacing (4px Grid)

| Token | Value |
|-------|-------|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 16px |
| `--space-lg` | 24px |
| `--space-xl` | 32px |
| `--space-2xl` | 48px |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 6px | Input fields |
| `--radius-md` | 12px | Cards |
| `--radius-lg` | 16px | Modals |
| `--radius-full` | 999px | Chips, avatars |

### Elevation / Shadow

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.06)` | Cards raised |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Dropdown |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` | Modal |

### Icon Style
- **Outline** — Lucide icons
- **Size:** 20px default, 24px for nav

---

## BAGIAN 2: Screen Map & User Flow

### Screen Inventory

| # | Screen | Route | Module |
|---|--------|-------|--------|
| 1 | **Home/Landing** | `/` | Onboarding |
| 2 | **CV Builder** | `/builder` | Builder |
| 3 | **CV Preview** | `/preview` | Builder |
| 4 | **Cover Letter Generator** | `/cover-letter` | AI Tools |
| 5 | **Tailor to Job** | `/tailor` | AI Tools |
| 6 | **My CVs** | `/my-cvs` | Dashboard |

### User Flow Diagram

```
[Home] ──→ [Builder] ──→ [Preview] ──→ [Export PDF]
   │
   ├──→ [Cover Letter]
   │
   ├──→ [Tailor to Job] ←────┘
   │
   └──→ [My CVs]
```

### Main Flows

**Flow 1: Create CV from Scratch**
1. Home → klik "Buat CV Baru"
2. Builder → isi deskripsi diri, AI generate konten
3. Preview → lihat hasil, edit jika perlu
4. Export → download PDF gratis

**Flow 2: Cover Letter Generator**
1. Home → klik "Buat Cover Letter"
2. Cover Letter → input job + pengalaman
3. Result → AI generate, user edit
4. Export → download PDF

**Flow 3: Tailor CV to Job**
1. Home → klik "Sesuaikan CV"
2. Tailor → upload CV + paste job description
3. Result → CV dioptimalkan untuk job tersebut
4. Export → download PDF

### Responsive Behavior

| Breakpoint | Layout | Nav |
|------------|--------|-----|
| **Mobile (< 768px)** | Stack layout, full-width cards | Bottom tab bar |
| **Tablet (768-1024px)** | 2-column grid, side panel | Side nav collapsible |
| **Desktop (> 1024px)** | Builder left + Preview right | Sidebar fixed |

---

## BAGIAN 3: Per-Screen Design

### Screen 01: Home / Landing

**Purpose:** First screen user lihat — menjelaskan value proposition, ajak user langsung actions.
**UVP Highlight:** "100% Gratis, No Signup" langsung visible biar user percaya.

**Route:** `/`
**Access:** Public

#### Layout Structure
```
┌──────────────────────────────┐
│  Header: Logo        [Menu]  │
├──────────────────────────────┤
│  Hero Section                │
│  "Buat CV Profesional        │
│   dengan AI, Gratis!"        │
│  [Input: ceritain background]│
│  [Tombol: "Buat CV Sekarang"]│
├──────────────────────────────┤
│  Stats Bar                   │
│  [X CV] [X Template] [X Gratis]│
├──────────────────────────────┤
│  Fitur Cards (3 kolom)       │
│  [CV Builder] [Cover Letter] │
│  [Tailor to Job]             │
├──────────────────────────────┤
│  How It Works (3 steps)      │
│  1. Ceritain diri            │
│  2. AI generate              │
│  3. Download gratis           │
├──────────────────────────────┤
│  Template Preview            │
│  [Carousel template cards]   │
├──────────────────────────────┤
│  Footer                      │
└──────────────────────────────┘
```

#### Components Used
| Component | Position | Description |
|-----------|----------|-------------|
| Header | Top | Logo + nav menu |
| Hero Input | Center-top | Textarea + CTA button |
| Feature Cards | Middle | 3 fitur utama icon + text |
| Step Indicator | Middle | 3 step dengan ilustrasi |
| Template Carousel | Bottom | Preview template CV |

#### States
| State | Visual | Trigger |
|-------|--------|---------|
| **Default** | Hero + features + templates | Normal load |
| **Loading** | Skeleton cards | Fetching templates |
| **Error** | Retry banner | API fail |

#### Interactions
| Element | Interaction | Feedback |
|---------|------------|----------|
| Hero CTA | Klik | Scroll ke builder / navigate |
| Template Card | Klik | Preview template |
| Feature Card | Klik | Navigate ke fitur |
| Menu | Klik | Slide drawer (mobile) / dropdown (desktop) |

---

### Screen 02: CV Builder

**Purpose:** Screen utama tempat user input data diri dan AI generate konten CV.
**UVP Highlight:** Input minimal (cuma deskripsi singkat), AI langsung generate CV lengkap.

**Route:** `/builder`
**Access:** Public

#### Layout Structure
```
┌──────────────────────────────────┐
│  Back: ←  Buat CV Baru           │
├──────────────────────────────────┤
│                                  │
│  ┌─ Left Panel ──────────────┐   │
│  │  Step 1: Ceritain Diri    │   │
│  │  ┌──────────────────────┐ │   │
│  │  │ "Fresh graduate S1   │ │   │
│  │  │  Teknik Informatika, │ │   │
│  │  │  pengalaman magang.."│ │   │
│  │  └──────────────────────┘ │   │
│  │  [AI Generate CV]         │   │
│  │                           │   │
│  │  Step 2: Edit Manual      │   │
│  │  [Nama] [Email] [No HP]   │   │
│  │  [Pendidikan]             │   │
│  │  [Pengalaman]             │   │
│  │  [Skill]                  │   │
│  └───────────────────────────┘   │
│                                  │
│  ┌─ Right Panel ─────────────┐   │
│  │  Live Preview CV          │   │
│  │  ┌────────────────────┐   │   │
│  │  │ [Preview CV card]   │   │   │
│  │  │ [Pilih template]    │   │   │
│  │  │ [Download PDF]      │   │   │
│  │  └────────────────────┘   │   │
│  └───────────────────────────┘   │
│                                  │
└──────────────────────────────────┘
```

> **Mobile (< 768px):** Left panel full-width, preview di-accordion "Lihat Preview" atau bottom sheet.
> **Desktop (> 1024px):** Split panel — kiri form, kanan preview.

#### Components Used
| Component | Position | Description |
|-----------|----------|-------------|
| AI Input | Top-left | Textarea + AI generate button |
| Form Sections | Middle-left | Collapsible form fields |
| Live Preview | Right panel | Real-time CV preview |
| Template Selector | Bottom-right | Pilih template CV |
| Export Button | Bottom-right | Download PDF button |

#### States
| State | Visual | Trigger |
|-------|--------|---------|
| **Default** | Empty form + placeholder | First load |
| **AI Generating** | Skeleton shimmer on preview | Klik "AI Generate" |
| **AI Generated** | Preview populated + form filled | AI selesai |
| **Editing** | User edit form fields | User ketik |
| **Empty** | Ilustrasi + prompt "ceritain diri lo" | No input yet |
| **Error** | Error toast | AI/Api gagal |

#### Interactions
| Element | Interaction | Feedback |
|---------|------------|----------|
| AI Textarea | User ketik deskripsi | Character count |
| AI Generate | Klik | Loading skeleton → Preview update |
| Form Field | Edit | Preview real-time update |
| Template Picker | Tap/Click | Preview ganti template instantly |
| Download | Klik | Success toast + file download |

---

### Screen 03: Cover Letter Generator

**Purpose:** Generate surat lamaran otomatis berdasarkan data CV + job description.
**Route:** `/cover-letter`
**Access:** Public

#### Layout Structure
```
┌──────────────────────────────────┐
│  Back: ←  Cover Letter           │
├──────────────────────────────────┤
│                                  │
│  ┌─ Input Panel ──────────────┐  │
│  │  Pilih CV                  │  │
│  │  [Dropdown: My CVs]        │  │
│  │                             │  │
│  │  Nama Perusahaan            │  │
│  │  [Input: "PT Maju Jaya"]   │  │
│  │                             │  │
│  │  Posisi yang Dilamar        │  │
│  │  [Input: "Frontend Dev"]   │  │
│  │                             │  │
│  │  Job Description (opsional) │  │
│  │  [Textarea: paste JD]      │  │
│  │                             │  │
│  │  [Generate Cover Letter]    │  │
│  └─────────────────────────────┘  │
│                                  │
│  ┌─ Result Panel ─────────────┐  │
│  │  [Preview Cover Letter]    │  │
│  │  [Edit button]             │  │
│  │  [Copy] [Download PDF]     │  │
│  └─────────────────────────────┘  │
│                                  │
└──────────────────────────────────┘
```

#### Components Used
| Component | Position | Description |
|-----------|----------|-------------|
| Input Fields | Left/top | Form data cover letter |
| Generate Button | Bottom input | Trigger AI |
| Preview Panel | Right/bottom | Hasil cover letter |
| Action Buttons | Bottom result | Copy, download, edit |

#### States
| State | Visual | Trigger |
|-------|--------|---------|
| **Default** | Empty form | First load |
| **Generating** | Loading skeleton | Klik generate |
| **Generated** | Preview muncul | AI selesai |
| **Empty** | Ilustrasi | Belum generate |
| **Error** | Error message + retry | Gagal generate |

#### Interactions
| Element | Interaction | Feedback |
|---------|------------|----------|
| Pilih CV | Dropdown select | Auto-fill data diri |
| Generate | Klik | Loading → Preview muncul |
| Copy | Klik | Toast "Copied!" |
| Download | Klik | File download |

---

### Screen 04: Tailor to Job

**Purpose:** User upload CV + paste job description, AI optimize CV biar cocok sama posisi yang dilamar.
**Route:** `/tailor`
**Access:** Public

#### Layout Structure
```
┌──────────────────────────────────┐
│  Back: ←  Sesuaikan CV dengan Job│
├──────────────────────────────────┤
│                                  │
│  ┌─ Upload / Select ──────────┐  │
│  │  Pilih CV yang ada         │  │
│  │  [Dropdown: My CVs]        │  │
│  │  atau upload CV baru       │  │
│  │  [Upload PDF/DOCX]         │  │
│  └────────────────────────────┘  │
│                                  │
│  ┌─ Job Description ──────────┐  │
│  │  Paste job description     │  │
│  │  ┌──────────────────────┐  │  │
│  │  │ "We are looking for  │  │  │
│  │  │  a senior frontend   │  │  │
│  │  │  developer with...   │  │  │
│  │  └──────────────────────┘  │  │
│  │  [Sesuaikan CV]            │  │
│  └────────────────────────────┘  │
│                                  │
│  ┌─ Comparison ───────────────┐  │
│  │  CV Lama   →   CV Baru     │  │
│  │  ┌─────┐       ┌─────┐    │  │
│  │  │Old  │  →   │New  │    │  │
│  │  │CV   │       │CV   │    │  │
│  │  └─────┘       └─────┘    │  │
│  │  [Download CV Baru]        │  │
│  └────────────────────────────┘  │
│                                  │
└──────────────────────────────────┘
```

#### States
| State | Visual | Trigger |
|-------|--------|---------|
| **Default** | Select CV + paste JD | First load |
| **Processing** | Loading bar | Klik "Sesuaikan CV" |
| **Done** | Side-by-side comparison | AI selesai |
| **Empty CV** | Ilustrasi + "Buat CV dulu" | Belum punya CV |
| **Error** | Error toast | Gagal proses |

#### Interactions
| Element | Interaction | Feedback |
|---------|------------|----------|
| Upload CV | File picker | File name appears |
| Paste JD | Text input | Character count |
| Sesuaikan | Klik | Progress bar → Result |
| Download | Klik | File download |

---

### Screen 05: My CVs

**Purpose:** User melihat dan manage semua CV yang pernah dibuat.
**Route:** `/my-cvs`
**Access:** Public (disimpan di local storage / indexed DB biar gratis tanpa backend)

#### Layout Structure
```
┌──────────────────────────────┐
│  My CVs                  [+  ]│
├──────────────────────────────┤
│                              │
│  ┌─ CV Card ──────────────┐  │
│  │ [Template Preview Thumb]│  │
│  │ CV Frontend Developer   │  │
│  │ Dibuat: 2 Jul 2026      │  │
│  │ [Edit] [Download] [X]   │  │
│  └─────────────────────────┘  │
│                              │
│  ┌─ CV Card ──────────────┐  │
│  │ [Template Preview Thumb]│  │
│  │ CV Fullstack            │  │
│  │ Dibuat: 1 Jul 2026      │  │
│  │ [Edit] [Download] [X]   │  │
│  └─────────────────────────┘  │
│                              │
│  [Buat CV Baru]              │
│                              │
└──────────────────────────────┘
```

#### States
| State | Visual | Trigger |
|-------|--------|---------|
| **Default** | List of CV cards | Loaded |
| **Empty** | Ilustrasi + "Belum ada CV — Buat CV pertama lo!" | No CVs |
| **Loading** | Skeleton cards | Fetching |

---

## BAGIAN 4: Component Specs

### Component: Button

**Usage:** All screens — CTA, actions, secondary actions
**Category:** Atom

#### Variants
| Variant | Visual | When to use |
|---------|--------|-------------|
| Primary | Bg `#1A73E8`, text white | Main CTA |
| Secondary | Bg `#F3F4F6`, text `#1F2937` | Secondary action |
| Ghost | No bg, text `#1A73E8` | Subtle action |
| Danger | Bg `#EF4444`, text white | Delete / destructive |

#### States
| State | Visual Change |
|-------|--------------|
| Default | Normal appearance |
| Hover | Opacity 90% / bg darker |
| Active/Pressed | Scale 0.97 |
| Disabled | Opacity 50%, cursor not-allowed |
| Loading | Spinner replaces text |

#### Props / API
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `primary \| secondary \| ghost \| danger` | `primary` | Visual style |
| `size` | `sm \| md \| lg` | `md` | Size |
| `fullWidth` | `boolean` | `false` | Full width |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading state |
| `onClick` | `function` | `-` | Click handler |
| `children` | `ReactNode` | `-` | Button text/icon |

#### Accessibility
- Keyboard: Enter/Space to activate
- ARIA: `role="button"`, `aria-label` if icon-only
- Focus: Visible ring `--color-primary`

---

### Component: Input Field

**Usage:** Forms — text, textarea, dropdown
**Category:** Atom

#### Variants
| Variant | Visual | When to use |
|---------|--------|-------------|
| Text | Single line | Nama, email, posisi |
| Textarea | Multi line | Deskripsi diri, job desc |
| Select | Dropdown | Pilih CV, template |

#### States
| State | Visual Change |
|-------|--------------|
| Default | Border `#E5E7EB`, bg white |
| Focus | Border `#1A73E8`, ring 2px |
| Filled | Border `#D1D5DB` |
| Error | Border `#EF4444` + error message |
| Disabled | Bg `#F9FAFB`, opacity 60% |

#### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `-` | Field label |
| `placeholder` | `string` | `-` | Placeholder text |
| `error` | `string` | `-` | Error message |
| `disabled` | `boolean` | `false` | Disabled state |
| `rows` | `number` | `3` | Textarea rows |

---

### Component: AIChatInput (Hero Input)

**Usage:** Home screen & CV Builder — input deskripsi diri untuk AI generate
**Category:** Molecule

#### Structure
```
┌───────────────────────────────────┐
│ Ceritain background lo...         │
│                                   │
│ "Fresh graduate S1 Teknik         │
│  Informatika, pengalaman magang.."│
├───────────────────────────────────┤
│  [✨ Generate CV]        ⌘+Enter │
└───────────────────────────────────┘
```

#### Variants
| Variant | Visual | When to use |
|---------|--------|-------------|
| Hero | Large, centered | Home screen |
| Compact | Normal size, left-aligned | Builder sidebar |

#### States
| State | Visual |
|-------|--------|
| Empty | Placeholder text + subtle border |
| Typing | Character count, live |
| AI Generating | Button loading, shimmer on preview |
| Generated | Success check on button, preview updated |

---

### Component: CV Preview Card

**Usage:** Builder right panel, My CVs list
**Category:** Molecule

#### Structure
```
┌────────────────────┐
│ [CV Mini Preview]  │
│   ┌────────────┐   │
│   │ Nama       │   │
│   │ Title      │   │
│   │ Experience │   │
│   │ Skills     │   │
│   └────────────┘   │
│                    │
│ [Template] [Download]
└────────────────────┘
```

#### States
| State | Visual |
|-------|--------|
| Empty | Skeleton placeholder |
| Filled | Full CV preview |
| Generating | Shimmer overlay |
| Error | "Gagal generate" + retry |

---

### Component: Comparison Slider

**Usage:** Tailor to Job screen
**Category:** Organism

#### Structure
```
┌─────────────┬─────────────┐
│  CV Lama    │  CV Baru    │
│             │             │
│ - React     │ - React 5th │ ← changed
│ - CSS       │ - Tailwind  │ ← changed
│ - 2 years   │ - 3 years   │ ← changed
└─────────────┴─────────────┘
  [Download CV Baru]
```

#### States
| State | Visual |
|-------|--------|
| Loading | Dual skeleton |
| Done | Side-by-side with highlight diff |
| Error | Retry button |

---

### Component: Stats Bar

**Usage:** Home screen
**Category:** Molecule

#### Structure
```
┌──────┬──────┬──────┐
│ 10K+ │ 20+  │ 100% │
│ CV   │ Temp │ Gratis│
└──────┴──────┴──────┘
```

---

## BAGIAN 5: Google Stitch Prompt

```
=== GOOGLE STITCH PROMPT ===
(Copy and paste this into stitch.withgoogle.com)

---

## PROJECT OVERVIEW
CV Generator AI — Aplikasi web untuk membuat CV profesional dengan bantuan AI. 
100% gratis, open source AI, no credit system, no paywall.

## UNIQUE VALUE PROPOSITION
"CV Generator AI 100% Gratis — Open Source AI, No Credit System, No Paywall"
Beda dari kompetitor (CVmake, Rezly, Kickresume) yang pake freemium/credit system. 
Semua fitur gratis selamanya. Fokus fresh graduate Indonesia dengan template ATS lokal.

## PLATFORM
All Platforms (Responsive) — Mobile < 768px stack layout + bottom nav, 
Tablet 768-1024px 2-column grid, Desktop > 1024px split panel + sidebar.

## DESIGN SYSTEM

### Style
Minimalist, clean, light mode default with dark mode support.

### Colors
- Primary: #1A73E8
- Primary Hover: #1557B0
- Secondary: #6C63FF
- Surface: #FFFFFF
- Background: #F8F9FA
- Text Primary: #1F2937
- Text Secondary: #6B7280
- Error: #EF4444
- Success: #10B981
- Border: #E5E7EB

### Typography
- Font Family: Inter (sans-serif)
- H1: 32px Bold
- H2: 24px Semibold
- H3: 18px Semibold
- Body: 14px Regular
- Caption: 12px Regular

### Spacing
4px grid system: 4, 8, 16, 24, 32, 48px

### Border Radius
- Small: 6px (inputs)
- Medium: 12px (cards)
- Large: 16px (modals)
- Full: 999px (chips, avatars)

### Shadows
- SM: 0 1px 3px rgba(0,0,0,0.06)
- MD: 0 4px 12px rgba(0,0,0,0.08)
- LG: 0 8px 24px rgba(0,0,0,0.12)

## SCREENS TO DESIGN

### Screen 1: Home/Landing
Route: /

Hero section dengan input textarea "Ceritain background lo" + tombol "Buat CV Sekarang".
Stats bar (10K+ CV, 20+ Template, 100% Gratis).
3 feature cards: CV Builder, Cover Letter, Tailor to Job.
How it works section: 3 langkah (ceritain diri → AI generate → download gratis).
Template preview carousel.
Footer.

States: default, loading (skeleton cards), error (retry banner).

### Screen 2: CV Builder
Route: /builder

Split layout:
- LEFT: Step 1 — Textarea "Ceritain background lo" + AI Generate button. 
  Step 2 — Form sections (Nama, Email, No HP, Pendidikan, Pengalaman, Skill) — collapsible.
- RIGHT: Live preview CV, template selector, download button.

Mobile: left panel full-width, preview accessible via bottom sheet "Lihat Preview".
Desktop: persistent side-by-side.

States: default (empty form), AI Generating (shimmer on preview), AI Generated (preview + form filled), editing (preview real-time updates), empty state (ilustrasi + prompt), error toast.

### Screen 3: Cover Letter Generator
Route: /cover-letter

Select CV from dropdown → input nama perusahaan + posisi + job description (opsional) → Generate.
Result panel: preview cover letter, edit button, copy, download PDF.

States: default, generating (loading skeleton), generated, empty (ilustrasi), error.

### Screen 4: Tailor to Job
Route: /tailor

Select/upload CV → paste job description → "Sesuaikan CV" button.
Result: side-by-side comparison (CV lama vs CV baru with highlighted changes) + download.

States: default, processing (progress bar), done (comparison), empty CV (ilustrasi), error.

### Screen 5: My CVs
Route: /my-cvs

List of saved CVs as cards — each shows: thumbnail preview, title, date created, [Edit] [Download] [Delete].
Empty state: "Belum ada CV — Buat CV pertama lo!" + CTA button.
FAB button "+" to create new CV.

States: default, empty, loading (skeleton cards).

## USER FLOWS

### Flow 1: Create CV from Scratch
1. Home → klik "Buat CV Baru"
2. Builder → isi deskripsi diri → AI generate
3. Preview → lihat + edit → download PDF

### Flow 2: Cover Letter
1. Home → klik "Buat Cover Letter"
2. Select CV + input details → generate
3. Result → edit/copy/download

### Flow 3: Tailor to Job
1. Home → klik "Sesuaikan CV"
2. Upload CV + paste job description
3. AI optimize → comparison view → download

## KEY COMPONENTS

### Button
Variants: primary (#1A73E8), secondary (gray), ghost (transparent), danger (red).
States: default, hover, active (scale 0.97), disabled (opacity 50%), loading (spinner).
Sizes: sm, md, lg.

### Input Field
Types: text, textarea, select (dropdown).
States: default, focus (blue ring), filled, error (red border + msg), disabled.

### AIChatInput (Hero Input)
Large textarea with AI generate button. States: empty, typing, generating (shimmer), generated.

### CV Preview Card
Mini CV preview + template selector + download button.
States: empty skeleton, filled, generating (shimmer), error.

### Comparison Slider
Side-by-side CV old vs new with diff highlights. States: loading (dual skeleton), done, error.

### Stats Bar
3-column: jumlah CV, template, "100% Gratis".

## IMPORTANT DESIGN NOTES
- 100% gratis — no pricing page, no credit system, no "upgrade to premium" UI
- Data disimpan di local storage / IndexedDB — tidak perlu backend
- AI pake open source model (Llama/Mistral/Qwen via Ollama atau Transformers.js)
- Template CV ATS-friendly untuk fresh graduate Indonesia
- Bahasa Indonesia first, English optional
- No signup required — user langsung bisa bikin CV

=== END OF PROMPT ===
```
