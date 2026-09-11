# Sitemap & Struktur Section

Situs satu halaman (one-page scroll). Routing: `/` → redirect `/id`; `/id` default; `/en` alternatif. Toggle bahasa di navbar menukar prefix locale.

```
/id  (default, bahasa Indonesia)      /en  (bahasa Inggris)
└─ Page
   ├─ Navbar        — nama kiri; GitHub · LinkedIn · toggle ID/EN kanan
   ├─ Hero          — id="beranda" · 110vh · kalimat besar + coretan SVG +
   │                  ilustrasi coding+gitar · CTA: Lihat Proyek / Unduh CV
   ├─ Proyek        — id="proyek" · 2 kartu berselang-seling 7/5:
   │                  PKM UPNVJ → CapSL
   ├─ Tentang       — id="tentang" · cerita + cara kerja + kegiatan + skill
   ├─ Kontak        — id="kontak" · "Kirim saya email" + link sosial
   └─ Footer        — kredit + ©
```

Navigasi anchor: `#proyek`, `#tentang`, `#kontak` (smooth scroll).

Sitemap.xml untuk mesin pencari dibuat sebagai `/sitemap.xml` statis berisi kedua locale + hreflang.
