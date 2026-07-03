# PRD: CV Generator AI

---

## BAGIAN 1: Visi & Tujuan Produk

### Visi Produk
Menjadi platform pembuat CV berbasis AI #1 di Indonesia yang **100% gratis selamanya** — memberdayakan setiap pencari kerja, terutama fresh graduate, untuk membuat CV profesional tanpa terkendala biaya berlangganan.

### Tujuan Utama
1. **Memudahkan bikin CV** — User cukup ceritain background, AI generate CV lengkap dalam detik
2. **100% gratis tanpa paywall** — Semua fitur bisa dipakai tanpa bayar, beda dari kompetitor
3. **ATS-friendly untuk pasar Indonesia** — Template CV yang optimal untuk sistem rekrutmen lokal
4. **Multi-fitur dalam satu tempat** — CV Builder, Cover Letter, Tailor to Job tanpa ganti aplikasi

### Value Proposition
- **AI gratis permanen** — Pake API key dari provider gratis (Gemini API, Groq, HuggingFace Inference), tanpa credit system
- **No signup required** — Langsung bikin CV tanpa daftar, data simpan di local storage
- **Fresh graduate focused** — Template ATS lokal + Bahasa Indonesia first

---

## BAGIAN 2: User Persona

### Persona 1: Rina — Fresh Graduate

- **Usia/Pekerjaan:** 22 tahun, fresh graduate S1 Teknik Informatika
- **Level Teknis:** Menengah — paham teknologi tapi belum pengalaman kerja formal
- **Tujuan:** Bikin CV profesional buat lamaran pertama tanpa bayar
- **Pain Points:** Bingung format CV yang bener, nggak punya budget buat tools berbayar, takut CV ditolak ATS
- **Motivasi:** Dapet panggilan interview pertamanya

### Persona 2: Dimas — Karyawan Swasta (Mid-Career)

- **Usia/Pekerjaan:** 28 tahun, Software Engineer dengan 3 tahun pengalaman
- **Level Teknis:** Mahir
- **Tujuan:** Nyari kerja baru, perlu tailor CV buat tiap lamaran
- **Pain Points:** Capek edit CV manual tiap ganti perusahaan, nggak mau bayar subscription bulanan cuma buat generate cover letter
- **Motivasi:** Pengalaman yang udah ada dimaksimalin biar cocok sama job desc

---

## BAGIAN 3: User Stories

### Modul 1: CV Builder

- Sebagai **pencari kerja**, saya ingin **mengetik deskripsi background saya**, agar AI bisa generate CV otomatis tanpa isi form panjang.
- Sebagai **pencari kerja**, saya ingin **mengedit hasil generate CV**, agar bisa menyesuaikan konten sesuai keinginan.
- Sebagai **pencari kerja**, saya ingin **melihat live preview CV**, agar tau hasil akhir sebelum download.
- Sebagai **pencari kerja**, saya ingin **memilih template CV**, agar tampilan CV sesuai preferensi.
- Sebagai **pencari kerja**, saya ingin **mendownload CV dalam format PDF**, agar siap dikirim ke rekruter.

### Modul 2: Cover Letter

- Sebagai **pelamar kerja**, saya ingin **generate cover letter dari CV saya**, agar nggak perlu nulis dari nol.
- Sebagai **pelamar kerja**, saya ingin **mengedit hasil cover letter**, agar bisa dipersonalisasi.
- Sebagai **pelamar kerja**, saya ingin **copy atau download cover letter**, agar bisa langsung dipakai.

### Modul 3: Tailor to Job

- Sebagai **pencari kerja aktif**, saya ingin **upload CV + paste job description**, agar AI optimasi CV sesuai posisi yang dilamar.
- Sebagai **pencari kerja aktif**, saya ingin **melihat perbandingan CV lama vs baru**, agar tau apa yang diubah.
- Sebagai **pencari kerja aktif**, saya ingin **download CV yang sudah di-tailor**, agar langsung bisa dipakai daftar.

### Modul 4: Manajemen CV

- Sebagai **pengguna**, saya ingin **melihat daftar CV yang pernah dibuat**, agar bisa mengelola semuanya di satu tempat.
- Sebagai **pengguna**, saya ingin **mengedit ulang CV yang sudah dibuat**, agar nggak perlu bikin dari awal.
- Sebagai **pengguna**, saya ingin **menghapus CV yang tidak dipakai**, agar daftar tetap rapi.

---

## BAGIAN 4: Functional Requirements

### Modul 1: CV Builder

**FR-01: AI Generate CV dari Deskripsi**
- **Input:** Text deskripsi background user
- **Proses:** Kirim text ke AI API (Gemini/Groq/HuggingFace), AI generate struktur CV (nama, pendidikan, pengalaman, skill)
- **Output:** CV terstruktur siap edit
- **Aturan:** Minimal 10 karakter, AI response < 10 detik

**FR-02: Edit Manual CV**
- **Input:** Field form (Nama, Email, No HP, Pendidikan, Pengalaman, Skill)
- **Proses:** Update state CV secara real-time
- **Output:** Form terisi + preview terupdate
- **Aturan:** Validasi email, no HP format Indonesia

**FR-03: Live Preview CV**
- **Input:** Data CV dari form
- **Proses:** Render CV ke template yang dipilih secara real-time
- **Output:** Preview CV seperti tampilan PDF
- **Aturan:** Update < 100ms setelah user edit

**FR-04: Pilih Template CV**
- **Input:** Pilihan template dari gallery
- **Proses:** Ganti style rendering CV sesuai template
- **Output:** Preview CV dengan template baru
- **Aturan:** Minimal 3 template ATS-friendly

**FR-05: Export PDF**
- **Input:** Data CV + template terpilih
- **Proses:** Generate PDF via html-to-pdf (html2pdf.js / jsPDF)
- **Output:** File PDF siap download
- **Aturan:** PDF ukuran A4, < 2MB, tanpa watermark

### Modul 2: Cover Letter

**FR-06: AI Generate Cover Letter**
- **Input:** CV terpilih + nama perusahaan + posisi + job description (opsional)
- **Proses:** Kirim data ke AI API, AI generate cover letter profesional
- **Output:** Text cover letter siap edit
- **Aturan:** Include nama perusahaan, posisi, dan skill relevan dari CV

**FR-07: Edit & Export Cover Letter**
- **Input:** Hasil generate + edit user
- **Proses:** Render ke format surat
- **Output:** Copy text atau download PDF
- **Aturan:** Format surat formal Indonesia/Inggris

### Modul 3: Tailor to Job

**FR-08: Upload CV + Paste Job Description**
- **Input:** File PDF CV atau pilih CV existing + paste job description
- **Proses:** Parsing CV, bandingkan dengan job description, AI optimasi
- **Output:** CV baru yang sudah di-tailor + diff highlight
- **Aturan:** Support PDF upload, parsing teks dari CV

**FR-09: Side-by-side Comparison**
- **Input:** CV lama + CV baru hasil AI
- **Proses:** Tampilkan perbedaan dengan highlight
- **Output:** View perbandingan
- **Aturan:** Highlight bagian yang berubah dengan warna berbeda

### Modul 4: Manajemen CV

**FR-10: Simpan CV ke Local Storage**
- **Input:** Data CV lengkap
- **Proses:** Serialize JSON, simpan ke localStorage / IndexedDB
- **Output:** CV tersimpan, muncul di My CVs
- **Aturan:** Auto-save tiap 30 detik

**FR-11: List & Manage My CVs**
- **Input:** - (load dari storage)
- **Proses:** Read semua CV dari storage, render card list
- **Output:** Daftar CV dengan thumbnail, judul, tanggal
- **Aturan:** Urutkan berdasarkan modified date descending

**FR-12: Delete CV**
- **Input:** Klik icon delete
- **Proses:** Konfirmasi → hapus dari storage
- **Output:** CV hilang dari list
- **Aturan:** Confirm dialog before delete

---

## BAGIAN 5: Non-Functional Requirements

### Performa
- Waktu muat halaman < 2 detik (First Contentful Paint)
- AI response < 10 detik (dengan loading skeleton)
- Live preview update < 100ms setelah user edit
- PDF export < 5 detik
- Support 1000 user concurrent (static hosting + client-side AI)

### Keamanan
- API key AI disimpan di client-side (via env variable atau proxy endpoint)
- Semua data user **hanya di client** (localStorage/IndexedDB) — nggak ada server DB
- HTTPS wajib
- Validasi input di client-side sebelum kirim ke AI API

### Skalabilitas
- **Zero backend** — murni static site + AI API calls dari client
- Static hosting (Vercel / Netlify / GitHub Pages) — auto scale
- Bisa tambah provider AI fallback jika satu API rate-limited

### Usability
- Responsive: Mobile (< 768px), Tablet (768-1024px), Desktop (> 1024px)
- Bahasa Indonesia sebagai bahasa utama, Inggris sebagai opsi
- No signup required — langsung bisa dipakai
- Dark mode support

### Kompatibilitas
- Browser: Chrome, Firefox, Safari, Edge (2 versi terakhir)
- PDF export compatible dengan ATS (text-based PDF, bukan image)
- Font: Inter (Google Fonts, loading < 1 detik)

---

## BAGIAN 6: Out of Scope & Dependensi

### Out of Scope (V1 — Tidak Dikerjakan)

| Fitur | Alasan | Rencana |
|-------|--------|---------|
| Multi-language CV (selain ID/EN) | Scope terlalu luas | V2 |
| LinkedIn Import | Butuh OAuth + API integration | V2 |
| Job Board Integration | Butuh scraping/API eksternal | V2 |
| AI Interview Simulator | Fitur tambahan, bukan core | V2/V3 |
| Backend User Accounts | Bertentangan dengan "no signup, zero backend" | Tidak ada |
| Premium/Paid Features | Bertentangan dengan UVP 100% gratis | Tidak ada |

### Dependensi

| Dependency | Fungsi | Alternatif |
|-----------|--------|------------|
| React / Next.js | Framework frontend | SvelteKit, Solid |
| Tailwind CSS | Styling utility-first | UnoCSS, vanilla CSS |
| Lucide React | Icon set | Heroicons, Tabler |
| Inter Font (Google Fonts) | Typography | System UI font stack |
| AI API Provider (Gemini API / Groq / HuggingFace) | Generate CV & Cover Letter | Multiple fallback |
| html2pdf.js / jsPDF | Export PDF | Print API, Puppeteer (server) |
| localStorage / IndexedDB | Penyimpanan data client | Dexie.js (IndexedDB wrapper) |

### Asumsi
- User punya koneksi internet stabil (untuk AI API calls & Google Fonts)
- AI API provider gratisan punya rate limit yang cukup (Gemini: 60 request/menit, Groq: 30 req/min)
- User menggunakan browser modern yang support ES6+, localStorage, IndexedDB
- PDF export dilakukan client-side (nggak perlu server)
- Rata-rata user bikin 1-3 CV per sesi
