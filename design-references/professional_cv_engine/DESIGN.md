---
name: Professional CV Engine
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#414754'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#727785'
  outline-variant: '#c1c6d6'
  surface-tint: '#005bc0'
  primary: '#005bbf'
  on-primary: '#ffffff'
  primary-container: '#1a73e8'
  on-primary-container: '#ffffff'
  inverse-primary: '#adc7ff'
  secondary: '#4d41df'
  on-secondary: '#ffffff'
  secondary-container: '#675df9'
  on-secondary-container: '#fffbff'
  tertiary: '#006c49'
  on-tertiary: '#ffffff'
  tertiary-container: '#00885d'
  on-tertiary-container: '#000703'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e3dfff'
  secondary-fixed-dim: '#c4c0ff'
  on-secondary-fixed: '#100069'
  on-secondary-fixed-variant: '#3622ca'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  h1:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
---

## Brand & Style

The design system is built on the principles of **Utility, Transparency, and Empowerment**. Targeting fresh graduates in Indonesia, the aesthetic is deliberately "Pro-Tool" but accessible—removing the anxiety of the job hunt through a high-performance, minimalist interface.

The style is **Modern Corporate Minimalism**. It avoids decorative fluff to focus entirely on content creation. By utilizing a "White-Label" UI approach, the platform remains neutral, ensuring the user's professional data remains the hero of the experience. The interface feels like a high-end productivity suite: reliable, fast, and institutional.

Key attributes:
- **Zero Friction:** No signup or paywalls; the UI must reflect this immediacy.
- **ATS-Centric:** Visuals mirror the structured, clean nature of an Applicant Tracking System.
- **Local Context:** While the UI uses a global aesthetic, the information architecture is optimized for Indonesian recruitment norms (Data Pribadi, Riwayat Pendidikan, Pengalaman Kerja).

## Colors

The palette is anchored by a trustworthy "Google Blue" (`#1A73E8`), signaling professional reliability and technical competence. 

- **Primary:** Used for main actions (Buat CV, Download PDF) and active states.
- **Secondary:** An accent violet used sparingly for AI-enhanced features or "Pro Tips."
- **Surface & Background:** A clear distinction is made between the canvas (`#F8F9FA`) and the document editor (`#FFFFFF`) to mimic a physical sheet of paper.
- **Semantic Colors:** Success green for "Auto-saved" indicators; Error red for validation in required fields like "Email" or "Nomor Telepon."

**Dark Mode:** When active, the background shifts to `#111827`, surfaces to `#1F2937`, and text primary to `#F9FAFB`. The border contrast is softened to `#374151`.

## Typography

This design system utilizes **Inter** exclusively to leverage its exceptional legibility and systematic feel. 

- **Scale:** The hierarchy is tight. Since CV data is often information-dense, the 14px body size ensures readability without requiring excessive scrolling.
- **Language Nuance:** Indonesian titles (e.g., "Pengalaman Profesional") tend to be longer than English counterparts; the H2 and H3 levels are tuned with slightly tighter letter-spacing to prevent awkward line breaks in sidebars.
- **Functional Use:** `Label` is used for form field headers (e.g., NAMA LENGKAP). `Caption` is used for helper text (e.g., "Gunakan format PDF").

## Layout & Spacing

The system uses a strictly enforced **4px grid**. All margins, paddings, and component heights must be multiples of 4.

- **The Editor Layout:** A split-view approach is recommended for desktop. 
    - **Left Column (40%):** Form inputs and AI controls.
    - **Right Column (60%):** Live PDF preview (Sticky).
- **Mobile Reflow:** On mobile devices, the editor becomes a step-by-step wizard. The PDF preview is hidden behind a floating "Lihat Preview" button to maximize screen real estate for typing.
- **Rhythm:** Use `16px` (md) for standard element spacing and `24px` (lg) for section spacing (e.g., between "Education" and "Experience").

## Elevation & Depth

To maintain a clean, professional aesthetic, this design system uses **low-contrast shadows** and **tonal layering** rather than heavy borders.

- **Level 0 (Background):** `#F8F9FA`. The foundation.
- **Level 1 (Cards/Inputs):** `#FFFFFF` with a 1px border of `#E5E7EB`. No shadow.
- **Level 2 (Floating Preview/Modals):** `Shadow-MD` (0px 4px 6px -1px rgba(0, 0, 0, 0.1)). Used for the CV paper preview to make it appear as if it is sitting on top of the desk.
- **Level 3 (Dropdowns/Context Menus):** `Shadow-LG` (0px 10px 15px -3px rgba(0, 0, 0, 0.1)).

Interactive elements like buttons use a subtle `Shadow-SM` on hover to provide tactile feedback without breaking the minimalist flat-design language.

## Shapes

The shape language is **geometric and soft**. It strikes a balance between the "hardness" of a resume and the "friendliness" of a supportive tool.

- **Small (6px):** Standard buttons, text inputs, and checkboxes.
- **Medium (12px):** Container cards for CV sections (e.g., an individual "Work Experience" block).
- **Large (16px):** Main layout wrappers and large modals.
- **Full (999px):** Status badges (e.g., "Terisi") and toggle switches.

## Components

### Buttons
- **Primary:** Background `#1A73E8`, Text `#FFFFFF`, 6px radius. On hover, darken to `#1557B0`.
- **Secondary/Ghost:** Transparent background, Border `1px solid #E5E7EB`. Used for "Tambah Pencapaian" or "Hapus."

### Input Fields
- Labels must always be visible (never placeholder-only) using the `Label` typography role.
- Active state: Border changes to `#1A73E8` with a 2px outer glow (focus-ring).
- Validation: Error text appears in `#EF4444` below the field.

### Chips (Badges)
- Used for "Skills" or "Keywords." 
- Style: Light grey background `#F3F4F6`, 999px radius, with a small "x" icon for removal.

### CV Section Cards
- Each section (e.g., "Pendidikan") should be a white card with a subtle border. 
- Use drag-handles (six-dot icon) in the top right to indicate re-orderable sections.

### Empty States
- When a section is empty, use a dashed border `2px dashed #E5E7EB` with a centered "Tambah" button to invite action.

### Progress Indicator
- A slim bar at the top of the viewport indicating "Kelengkapan CV" (CV Completeness) using the Primary color.