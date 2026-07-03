export function buildCVPrompt(description: string): string {
  return `Buatkan CV profesional dalam bahasa Indonesia berdasarkan deskripsi berikut:

"${description}"

Berikan output dalam format JSON dengan struktur berikut (jangan ada teks lain, hanya JSON):
{
  "name": "Nama lengkap",
  "email": "email@example.com",
  "phone": "nomor telepon",
  "location": "kota, provinsi",
  "title": "posisi/role yang cocok",
  "summary": "Ringkasan profesional 2-3 kalimat",
  "education": [{ "institution": "universitas", "degree": "gelar", "field": "jurusan", "startYear": "2021", "endYear": "2025", "gpa": "3.8" }],
  "experience": [{ "company": "nama perusahaan", "role": "posisi", "location": "kota", "startDate": "2023", "endDate": "2025", "description": "deskripsi pekerjaan 1-2 kalimat", "isCurrent": false }],
  "skills": ["Skill1", "Skill2", "Skill3"],
  "certifications": [{ "name": "nama sertifikasi", "issuer": "penerbit", "year": "2024" }],
  "languages": [{ "name": "Bahasa Indonesia", "level": "Native" }],
  "socialLinks": { "linkedin": "", "github": "", "portfolio": "" }
}

Isi semua field dengan data yang sesuai. Jika ada informasi yang tidak disebutkan di deskripsi, buatkan yang realistis berdasarkan konteks.`
}

export function buildCoverLetterPrompt(
  cvData: string,
  companyName: string,
  position: string,
  jobDescription?: string
): string {
  return `Buatkan cover letter / surat lamaran kerja yang profesional dalam bahasa Indonesia.

Data pelamar:
${cvData}

Posisi yang dilamar: ${position}
Nama perusahaan: ${companyName}
${jobDescription ? `Deskripsi pekerjaan:\n${jobDescription}` : ''}

Buat surat lamaran yang formal, profesional, dan menarik. Format surat resmi bahasa Indonesia. Jangan gunakan template kaku, buat yang personal dan relevan dengan posisi tersebut.`
}

export function buildTailorPrompt(cvContent: string, jobDescription: string): string {
  return `Optimalkan CV berikut agar cocok dengan job description yang diberikan.

CV saat ini:
${cvContent}

Job Description:
${jobDescription}

Berikan output dalam format JSON dengan struktur yang SAMA seperti CV input, tapi dengan konten yang dioptimalkan:
- Tambahkan kata kunci yang relevan dari job description
- Sesuaikan pengalaman dan skill agar lebih relevan
- Highlight achievement yang paling sesuai
- Jangan membuat informasi palsu, optimasi dari data yang ada

Output hanya JSON, tanpa teks lain.`
}
