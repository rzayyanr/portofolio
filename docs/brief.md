# Brief Proyek — Portofolio Zayyan Rizka

## Tujuan
Website portofolio satu halaman untuk mendukung **pendaftaran Apple Developer Academy** (penutupan 14 Sep 2026) dan **lamaran magang**. Menampilkan bukti pertumbuhan: 2 proyek end-to-end yang hidup, budaya dokumentasi (PRD/ADR), dan kegiatan (beasiswa BI/GENBI).

## Audiens
1. Reviewer Apple Developer Academy (menilai proses, pertumbuhan, kolaborasi)
2. Recruiter magang (menilai bukti kerja nyata)

## Identitas
- Nama brand: **Zayyan Rizka** (lengkap: Muhammad Zayyan Rizka)
- Mahasiswa S1 Sistem Informasi semester 5, UPN "Veteran" Jakarta
- Kontak: rzayyanrizka@gmail.com · linkedin.com/in/rzayyanr · github.com/rzayyanr
- Hosting: Vercel → zayyan.tech (alamat bawaan rzayyanr.vercel.app masih hidup)

## Keputusan inti
| Aspek | Keputusan |
|---|---|
| Stack | Next.js + TypeScript + Tailwind CSS + Framer Motion |
| Bahasa | Indonesia default + Inggris (routing `/id`, `/en`) |
| Referensi desain | nevinjojo.com — ditiru ide & proporsinya, **kode & SVG 100% orisinal** (desain asli tak berlisensi) |
| Tone | Profesional-personal: bukti kerja dulu, kepribadian secukupnya |
| CTA | Hero: Lihat Proyek + Unduh CV; penutup: kirim email |
| Analytics | Vercel Web Analytics |
| Di luar v1 | Testimoni (slot disiapkan), sinyal minat Swift, fitur gambar "chaos" |

## Struktur halaman
Navbar → Hero (coretan biru/merah + ilustrasi coding+gitar) → Proyek (PKM UPNVJ, CapSL — berselang-seling) → Tentang (cerita + cara kerja + kegiatan + skill) → Kontak → Footer.

## Rencana pengembangan
- `docs/konten.md` — sumber kebenaran seluruh teks (review user)
- `docs/design-system.md` — tokens dari analisis referensi
- `src/content/dictionary.ts` — seluruh teks bilingual terpusat
