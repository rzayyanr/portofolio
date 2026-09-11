# Portofolio — Zayyan Rizka

Website portofolio satu halaman, dua bahasa (Indonesia default + Inggris), dibangun dengan **Next.js + TypeScript + Tailwind CSS + Framer Motion**. Desain berbasis estetika minimalis dengan coretan tangan — semua kode & SVG 100% orisinal.

## Menjalankan secara lokal

```bash
npm install
npm run dev      # http://localhost:3000 → redirect ke /id
npm run build    # build produksi
npm run start    # jalankan hasil build
```

## Mengedit konten

**Semua teks ada di satu file:** `src/content/dictionary.ts` — versi Indonesia (`id`) dan Inggris (`en`) berdampingan per bagian (hero, proyek, tentang, kontak). Edit di sana, simpan, situs otomatis berubah.

Hal lain yang sering diganti:

| Apa | Di mana |
|---|---|
| Screenshot proyek | `public/images/pkm-upnvj.png` dan `public/images/capsl.png` (1280×800) |
| Foto/dokumen lain | folder `public/` |
| Palet warna & font | `src/app/globals.css` (blok `@theme`) |
| Dokumen konten (referensi) | `docs/konten.md` |

## ⚠️ Sebelum link situs disebar — checklist

- [ ] **Taruh `cv.pdf` di folder `public/`** — tombol "Unduh CV" akan 404 tanpa file ini
- [ ] Lengkapi placeholder **KSM Multimedia** di `dictionary.ts` (bagian `about.activities`) — atau hapus barisnya
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
3. Ubah nama produksi di Settings → General → "Renew Project Name" menjadi `rzayyanr` agar URL-nya `rzayyanr.vercel.app`.

**Cara 2 — Vercel CLI:**

```bash
npm i -g vercel
vercel        # ikuti pertanyaannya, lalu
vercel --prod
```

## Struktur proyek

```
├── docs/                 # brief, konten (review), sitemap, design system
├── public/
│   ├── images/           # screenshot proyek
│   └── cv.pdf            # ← taruh CV-mu di sini
├── src/
│   ├── app/
│   │   ├── [locale]/     # /id dan /en (layout + halaman)
│   │   ├── globals.css   # design tokens (warna, font, skala)
│   │   ├── icon.svg      # favicon
│   │   ├── opengraph-image.tsx
│   │   ├── sitemap.ts / robots.ts
│   ├── components/       # Navbar, Hero, Projects, About, Contact, Footer,
│   │                     # scribbles (coretan), HeroIllustration, Reveal
│   ├── content/
│   │   └── dictionary.ts # ← SEMUA teks dua bahasa
│   └── middleware.ts     # redirect / → /id
```

## Catatan desain

Referensi visualnya [nevinjojo.com](https://www.nevinjojo.com) (desain Nikolai Bain, tidak berlisensi) — yang diambil hanya *ide* layout & palet; seluruh kode, coretan SVG, dan ilustrasi dibuat orisinal. Rincian tokens ada di `docs/design-system.md`.
