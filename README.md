# Portofolio — Zayyan Rizka

Website portofolio satu halaman, dua bahasa (Indonesia default + Inggris), dibangun dengan **Next.js + TypeScript + Tailwind CSS**. Desain berbasis estetika minimalis dengan coretan tangan — semua kode & SVG 100% orisinal.

## Menjalankan secara lokal

```bash
npm install
npm run dev       # http://localhost:3000 → redirect ke /id
npm run build     # build produksi
npm run start     # jalankan hasil build
npm run lint      # ESLint
npm run typecheck # cek tipe TypeScript
```

## Mengedit konten

**Teks antarmuka ada di satu file:** `src/content/dictionary.ts` — versi Indonesia (`id`) dan Inggris (`en`) berdampingan per bagian (hero, proyek, tentang, kontak, arsip, katalog). Edit di sana, simpan, situs otomatis berubah.

**Isi studi kasus ada di** `src/content/cases.ts` (bagian `caseStudies`), juga dua bahasa.

**Menambah proyek baru ke Arsip Proyek** (`/id/proyek` · `/en/projects`):
1. Buka `src/content/dictionary.ts`, cari `projects.items`.
2. Salin salah satu entri, ganti isinya (title, tagline, year, tech, links, image), set `featured: false` kalau tidak ingin tampil di beranda — atau `true` untuk kartu besar di beranda.
3. Taruh screenshot di `public/images/` (1280×800).

Halaman lain yang sering diganti:

| Apa | Di mana |
|---|---|
| Screenshot proyek | `public/images/` (1280×800) |
| Foto/dokumen lain | folder `public/` |
| Palet warna & font | `src/app/globals.css` (blok `@theme`) |
| Dokumentasi konten (referensi) | `docs/konten.md` |
| Glosarium istilah | `CONTEXT.md` |

Halaman tersembunyi **/design-system** adalah katalog visual semua warna, tipografi, dan komponen — berguna saat menambah/mengubah komponen.

## ⚠️ Sebelum link situs disebar — checklist

- [x] **Taruh `cv.pdf` di folder `public/`** — tombol "Unduh CV" akan 404 tanpa file ini
- [ ] LinkedIn sudah rapi & bisa dilihat publik
- [ ] Klik semua link satu per satu
- [ ] Cek tampilan di HP
- [ ] (Opsional) Aktifkan **Web Analytics** di dashboard Vercel — skripnya sudah terpasang (`@vercel/analytics`)

## Deploy ke Vercel

**Cara 1 — lewat GitHub (disarankan, auto-deploy setiap push):**

1. Buat repo baru di GitHub (mis. `portofolio`), lalu:
   ```bash
   git remote add origin https://github.com/rzayyanr/portofolio.git
   git push -u origin main
   ```
2. Di [vercel.com/new](https://vercel.com/new), import repo tersebut — pengaturan default (framework: Next.js) sudah cukup. Deploy.
3. Ubah nama produksi di Settings → General → "Renew Project Name" menjadi `rzayyanr` agar alamat bawaannya `rzayyanr.vercel.app`. Domain resminya sekarang `zayyan.tech`, diatur di Settings → Domains.

**Cara 2 — Vercel CLI:**

```bash
npm i -g vercel
vercel        # ikuti pertanyaannya, lalu
vercel --prod
```

## Struktur proyek

```
├── CONTEXT.md            # glosarium istilah proyek
├── docs/                 # brief, konten (review), sitemap, design system
├── public/
│   ├── images/           # screenshot proyek + foto hero
│   └── cv.pdf            # ← taruh CV-mu di sini
├── src/
│   ├── app/
│   │   ├── [locale]/     # /id & /en: beranda, [slug] (proyek, design-system),
│   │   │                 # [slug]/[case] (studi kasus), not-found, opengraph-image
│   │   ├── globals.css   # design tokens (warna, font, skala)
│   │   ├── icon.svg      # favicon
│   │   ├── sitemap.ts / robots.ts
│   ├── components/       # Navbar, Hero, HeroPortrait, Projects, Archive,
│   │                     # Catalog, CaseStudy, About, Contact, Footer,
│   │                     # scribbles, Reveal, LocaleSwap
│   ├── content/
│   │   ├── dictionary.ts # ← SEMUA teks antarmuka, dua bahasa
│   │   └── cases.ts      # isi studi kasus, dua bahasa
│   ├── lib/
│   │   └── metadata.ts   # canonical, hreflang, Open Graph per halaman
│   └── middleware.ts     # redirect / → /id
└── scripts/
    └── proses-foto.py    # crop + hapus latar foto hero
```

## Catatan desain

Referensi visualnya [nevinjojo.com](https://www.nevinjojo.com) (desain Nikolai Bain, tidak berlisensi) — yang diambil hanya *ide* layout & palet; seluruh kode, coretan SVG, dan ilustrasi dibuat orisinal. Rincian tokens ada di `docs/design-system.md`.
