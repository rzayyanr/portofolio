# Design System — Portofolio Zayyan Rizka

Base visual: nevinjojo.com (ide & proporsi; semua kode & SVG orisinal — desain asli milik Nikolai Bain dan tidak berlisensi).

## Prinsip
1. **Konten adalah desain** — tipografi besar, banyak whitespace, warna netral, satu aksen.
2. **Coretan tangan = kepribadian** — SVG stroke di belakang/di bawah kata kunci, tidak pernah lebih dari 2 per layar.
3. **Gerak secukupnya** — reveal saat scroll, hover terangkat 3px, transisi 200ms; hormati `prefers-reduced-motion`.

## Warna
| Token | Nilai | Peran |
|---|---|---|
| `ink` | `#131313` | Judul & teks utama |
| `body` | `#5a6065` | Paragraf hero & tautan |
| `muted` | `#69737c` | Deskripsi proyek & teks About |
| `accent` | `#1e8bf1` | Tautan aksen (hover `#005bb1`) |
| `scribble-blue` | `#A4DCFE` | Coretan oval kata kunci hero |
| `scribble-red` | `#FF9595` | Garis coret bawah frasa |
| `scribble-teal` | `#7CDFCD` | Anotasi doodle heading About |
| `btn` | `#edf2f5` (hover `#e0e7eb`) | Tombol pill |
| `tag-bg` / `tag-text` | `#ebeef3` / `#595d6d` | Pill teknologi |
| Latar | `#ffffff` | Seluruh halaman |

## Tipografi — Public Sans (OFL, self-host via next/font)
| Gaya | Ukuran desktop → mobile |
|---|---|
| Hero (600) | 38 → 26px, leading 1.25, letter-spacing 0.5px |
| Judul section/proyek (700) | 34 → 28px |
| Deskripsi (400) | 20 → 18px, leading 1.4–1.5 |
| Paragraf About (400) | 20 → 18px, leading 1.5 |
| Navbar nama (700) | 35 → 25px |
| Tag/pill (500) | 13px |

## Spasi & layout
- Container: max-width **1140px**; gutter sisi **80px** → 50px (≤991) → 20px (≤479)
- Hero tinggi **110vh**, tengah vertikal, split 7/5
- Kartu proyek: jarak vertikal **150px** → 120 (≤767) → 100 (≤479); split 7/5 berselang-seling
- About: split 6/6; Kontak: satu baris tengah
- Breakpoints: 1280 / 991 / 767 / 479 (mengikuti referensi)

## Bentuk
- Screenshot proyek: radius **6px**, hover naik 3px (200ms ease)
- Tombol: pill (radius penuh), bg `btn`
- Tag: pill kecil radius 30px

## Komponen SVG khas (orisinal)
| Komponen | Bentuk | Pemakaian |
|---|---|---|
| `OvalMark` | oval coretan tangan, stroke 4, `scribble-blue` | di belakang "mahasiswa Sistem Informasi" |
| `SquiggleMark` | garis bergelombang, stroke 4, `scribble-red` | di bawah frasa penutup hero |
| `TealDoodle` | swash/kusut kecil, `scribble-teal` | samping heading "Tentang Saya" |
| `HeroIllustration` | karakter flat coding + gitar | sisi kanan hero |

## Aksesibilitas
- Kontras teks ≥ 4.5:1 (ink & body di atas putih aman)
- `alt` deskriptif untuk screenshot & ilustrasi
- Focus state terlihat (outline accent)
- `prefers-reduced-motion` mematikan animasi reveal
