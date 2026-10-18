# Dokumen Konten — Portofolio Zayyan Rizka

> **Untuk Zayyan:** ini satu-satunya dokumen yang wajib kamu review.
> Semua teks di bawah ini akan tampil persis di website (versi Indonesia & Inggris).
> Tandai bagian yang kurang pas — angka, kata, atau kalimat — dan saya perbarui.
> Sumber data: folder proyek PKM & capstone-sign-language + jawaban wawancara kita.

---

## 1. Identitas & SEO

| Item | Indonesia (default) | Inggris |
|---|---|---|
| Nama situs | Zayyan Rizka | Zayyan Rizka |
| Judul tab | Zayyan Rizka — Frontend Engineer & Mahasiswa Sistem Informasi | Zayyan Rizka — Frontend Engineer & Information Systems Student |
| Meta deskripsi | Mahasiswa Sistem Informasi UPN Veteran Jakarta yang membangun produk web yang rapi dan berguna — portal PKM kampus & aplikasi belajar bahasa isyarat. | An Information Systems student at UPN Veteran Jakarta who builds clean and useful web products — a campus PKM portal & a sign-language learning app. |
| Subdomain | rzayyanr.vercel.app | — |
| Email | rzayyanrizka@gmail.com | — |
| GitHub | https://github.com/rzayyanr | — |
| LinkedIn | https://www.linkedin.com/in/rzayyanr/ | — |

---

## 2. Hero (kalimat pembuka terbesar)

**Indonesia:**
> Saya ~frontend engineer~ sekaligus mahasiswa Sistem Informasi yang senang membangun **produk web yang rapi dan berguna.**

**Inggris:**
> I'm a ~frontend engineer~ and Information Systems student who builds **clean and useful web products.**

- `~gelombang~` = diberi coretan oval biru tangan (seperti referensi)
- `**tebal**` = diberi garis coretan merah di bawahnya

**Paragraf kecil di bawahnya:**

| Indonesia | Inggris |
|---|---|
| Dua produk saya sudah hidup dan dipakai: portal informasi PKM untuk kampus, dan aplikasi belajar Bahasa Isyarat dengan pengenalan gestur real-time. Di sela kuliah, saya bekerja sebagai frontend engineer di Skalar Solution. Lihat selengkapnya di [GitHub] dan [LinkedIn], atau [kirim email] bilang halo. | Two of my products are live and in use: a campus PKM information portal, and a sign-language learning app with real-time gesture recognition. Between classes, I work as a frontend engineer at Skalar Solution. See more on [GitHub] and [LinkedIn], or just [send an email] saying hi. |

**Tombol:** `Lihat Proyek` / `View Projects` (scroll ke bagian proyek) · `Unduh CV` / `Download CV` (file `/cv.pdf` — **kamu yang menaruh filenya**)

**Ilustrasi kanan:** foto Zayyan (setengah badan, tangan menyilang, latar dihapus) dengan **bingkai coret biru** mencong-mencong — diproses dari `IMG_4890.JPG` via `scripts/proses-foto.py`.

---

## 3. Proyek (3 unggulan, tampil berselang-seling)

### 3.1 PKM UPNVJ

| Item | Isi |
|---|---|
| Tagline ID | Website pusat informasi PKM kampus — dengan panel admin tanpa koding |
| Tagline EN | The campus PKM information hub — with a no-code admin panel |
| Deskripsi ID | Website pusat informasi Program Kreativitas Mahasiswa untuk UPN Veteran Jakarta: panduan 10 bidang, alur pendaftaran, tema 2026, tips proposal, dan unduhan panduan resmi. Panel admin ber-autentikasi Google memungkinkan pengelola memperbarui pengumuman dan agenda tanpa menyentuh kode. |
| Deskripsi EN | A centralized PKM information website for UPN Veteran Jakarta: guides for all 10 fields, application flow, 2026 themes, proposal tips, and official downloads. A Google-authenticated admin panel lets staff update announcements and schedules without touching any code. |
| Angka faktual | 10 bidang PKM terstruktur · Rilis v1.1 · 100% riset dari 11 panduan resmi |
| Peran ID | Riset kebutuhan, PRD, design system, pengembangan, deploy, hingga runbook serah terima — semua dikerjakan sendiri dari nol. |
| Peran EN | Requirements research, PRD, design system, development, deployment, and handover runbook — done solo from zero. |
| Tech | Next.js · TypeScript · Tailwind CSS · Supabase |
| Link | [pkm-upnvj.vercel.app](https://pkm-upnvj.vercel.app) · [GitHub](https://github.com/rzayyanr/pkm-upnvj) · [PRD & ADR](https://github.com/rzayyanr/pkm-upnvj/tree/main/website/docs) |
| Screenshot | Diambil dari live demo (tangkapan layar beranda) |

### 3.2 CapSL — Belajar Bahasa Isyarat

| Item | Isi |
|---|---|
| Tagline ID | Belajar bahasa isyarat dengan koreksi gerakan real-time di kamera |
| Tagline EN | Learn sign language with real-time camera gesture feedback |
| Deskripsi ID | Aplikasi web belajar Bahasa Isyarat Indonesia (SIBI) dengan pengenalan gestur real-time lewat kamera: MediaPipe melacak 21 titik tangan, model MLP yang saya latih menilai pose dengan akurasi 89,9% — lengkap dengan umpan balik korektif, kuis hafalan, dan gamifikasi XP & streak. Semua berjalan di browser, tanpa server. |
| Deskripsi EN | A web app for learning Indonesian Sign Language (SIBI) with real-time camera gesture recognition: MediaPipe tracks 21 hand landmarks and an MLP model I trained scores poses at 89.9% accuracy — with corrective feedback, memory quizzes, and XP & streak gamification. Everything runs in the browser, no server needed. |
| Angka faktual | 89,9% akurasi model · 24 huruf SIBI · Berjalan penuh di browser |
| Peran ID | Satu-satunya developer di tim dua orang — dari pipeline dataset & pelatihan model hingga produk akhir. |
| Peran EN | The sole developer in a two-person team — from dataset pipeline & model training to the final product. |
| Tech | React · Vite · MediaPipe · Python · scikit-learn |
| Link | [capstone-sign-language.vercel.app](https://capstone-sign-language.vercel.app) · [GitHub](https://github.com/rzayyanr/capstone-sign-language) |
| Screenshot | Diambil dari live demo |

---

## 4. Tentang Saya

**Judul:** `Tentang Saya` / `About Me` (dengan anotasi coretan teal)

**Cerita:**

| Indonesia | Inggris |
|---|---|
| Saya Zayyan, mahasiswa Sistem Informasi semester 5 (IPK 3,82) di UPN Veteran Jakarta. Saya suka membangun hal-hal yang benar-benar dipakai orang — bukan sekadar tugas yang selesai. | I'm Zayyan, a 5th-semester Information Systems student (GPA 3.82) at UPN Veteran Jakarta. I like building things people actually use — not just assignments that get done. |

**Cara saya kerja** *(kalimat yang dilihat reviewer Academy — bukti proses)*:

| Indonesia | Inggris |
|---|---|
| Cara saya kerja: riset dulu, tulis PRD, catat keputusan penting sebagai ADR, bangun, lalu serahkan dengan dokumentasi rapi — supaya apa pun yang saya buat bisa dilanjutkan orang lain. | How I work: research first, write the PRD, log key decisions as ADRs, build, then hand over with clean documentation — so anything I make can be continued by someone else. |

**Pengalaman & Kegiatan:**

| Pengalaman | Catatan |
|---|---|
| Frontend Engineer — Skalar Solution | 2026–sekarang · implementasi UI, menjaga design system, integrasi API |
| CEO & Co-Founder — Pronuts | 2026–sekarang · startup donat protein tinggi — Juara 2 UNEX 2026 tingkat nasional |
| Beasiswa Bank Indonesia — GENBI Jakarta | Penerima beasiswa & anggota aktif GENBI Jakarta |
| KSM Multimedia — UPNVJ | Staf Divisi Humas — komunikasi & kemitraan |

**Strip skill:** React · Next.js · TypeScript · Tailwind CSS · Supabase · Python · MediaPipe · Figma

---

## 5. Kontak

| Indonesia | Inggris |
|---|---|
| Punya ide, lowongan magang, atau sekadar ingin menyapa? **Kirim saya email.** | Have an idea, an internship opening, or just want to say hi? **Send me an email.** |

Link bawahnya: GitHub · LinkedIn · (email = mailto:rzayyanrizka@gmail.com)

---

## 6. Footer

| Indonesia | Inggris |
|---|---|
| © 2026 Zayyan Rizka — dirancang & dikode sendiri. | © 2026 Zayyan Rizka — designed & coded from scratch. |

---

## Checklist sebelum link situs disebar
- [ ] `cv.pdf` sudah ditaruh di folder `public/` (tombol "Unduh CV" akan 404 kalau belum)
- [ ] Placeholder KSM Multimedia sudah diisi ATAU barisnya dihapus
- [ ] LinkedIn sudah rapi & publik
- [ ] Semua link sudah diklik satu per satu (demi layar)
- [ ] Cek tampilan di HP
