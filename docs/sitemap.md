# Sitemap & Struktur Section

Situs satu halaman utama + 2 halaman pendukung. Routing: `/` → redirect `/id`; `/id` default; `/en` alternatif. Toggle bahasa di navbar menukar prefix locale.

```
/id  (default, bahasa Indonesia)      /en  (bahasa Inggris)
├─ Page (beranda)
│   ├─ Navbar        — nama kiri; Proyek · GitHub · LinkedIn · toggle ID/EN kanan
│   ├─ Hero          — id="beranda" · 110vh · kalimat besar + coretan SVG +
│   │                  foto cutout · CTA: Lihat Proyek / Unduh CV
│   ├─ Proyek        — id="proyek" · 2 kartu unggulan berselang-seling 7/5:
│   │                  PKM UPNVJ → CapSL · tombol "Lihat semua proyek →"
│   ├─ Tentang       — id="tentang" · cerita + cara kerja + kegiatan + skill
│   ├─ Kontak        — id="kontak" · "Kirim saya email" + link sosial
│   └─ Footer        — kredit + ©
├─ /id/proyek  (/en/projects)     — Arsip Proyek: grid kompak seluruh proyek
└─ /id/design-system (/en sama)   — Katalog Komponen (tersembunyi, tanpa index)
```

Navigasi anchor: `#proyek`, `#tentang`, `#kontak` (smooth scroll).

Sitemap.xml untuk mesin pencari dibuat sebagai `/sitemap.xml` berisi beranda + arsip (kedua locale + hreflang); katalog design system sengaja tidak diindeks.
