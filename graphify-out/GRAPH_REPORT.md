# Graph Report - Portofolio  (2026-09-12)

## Corpus Check
- 28 files · ~41,405 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 170 nodes · 210 edges · 18 communities (12 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `15eab16d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- getDictionary
- devDependencies
- package.json
- compilerOptions
- Dokumen Konten — Portofolio Zayyan Rizka
- Design System — Portofolio Zayyan Rizka
- proses-foto.py
- Brief Proyek — Portofolio Zayyan Rizka
- Portofolio — Zayyan Rizka
- Hero.tsx
- opengraph-image.tsx
- eslint.config.mjs
- sitemap.md
- next.config.ts
- postcss.config.mjs
- HeroIllustration.tsx

## God Nodes (most connected - your core abstractions)
1. `getDictionary()` - 17 edges
2. `compilerOptions` - 16 edges
3. `Locale` - 8 edges
4. `Design System — Portofolio Zayyan Rizka` - 8 edges
5. `Dokumen Konten — Portofolio Zayyan Rizka` - 8 edges
6. `Portofolio — Zayyan Rizka` - 7 edges
7. `Brief Proyek — Portofolio Zayyan Rizka` - 7 edges
8. `isLocale()` - 6 edges
9. `include` - 6 edges
10. `Reveal()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `getDictionary()`  [EXTRACTED]
  src/app/[locale]/layout.tsx → src/content/dictionary.ts
- `LocaleLayout()` --calls--> `isLocale()`  [EXTRACTED]
  src/app/[locale]/layout.tsx → src/content/dictionary.ts
- `Page()` --calls--> `isLocale()`  [EXTRACTED]
  src/app/[locale]/page.tsx → src/content/dictionary.ts
- `ProjectCard()` --calls--> `getDictionary()`  [EXTRACTED]
  src/components/Projects.tsx → src/content/dictionary.ts
- `About()` --calls--> `getDictionary()`  [EXTRACTED]
  src/components/About.tsx → src/content/dictionary.ts

## Import Cycles
- None detected.

## Communities (18 total, 6 thin omitted)

### Community 0 - "getDictionary"
Cohesion: 0.13
Nodes (22): generateMetadata(), LocaleLayout(), publicSans, Page(), About(), Contact(), Footer(), Hero() (+14 more)

### Community 1 - "devDependencies"
Cohesion: 0.11
Nodes (19): eslint, eslint-config-next, @eslint/eslintrc, devDependencies, eslint, eslint-config-next, @eslint/eslintrc, tailwindcss (+11 more)

### Community 2 - "package.json"
Cohesion: 0.11
Nodes (18): framer-motion, next, dependencies, framer-motion, next, react, react-dom, @vercel/analytics (+10 more)

### Community 3 - "compilerOptions"
Cohesion: 0.07
Nodes (27): dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+19 more)

### Community 4 - "Dokumen Konten — Portofolio Zayyan Rizka"
Cohesion: 0.18
Nodes (10): 1. Identitas & SEO, 2. Hero (kalimat pembuka terbesar), 3.1 PKM UPNVJ, 3.2 CapSL — Belajar Bahasa Isyarat, 3. Proyek (2 unggulan, tampil berselang-seling), 4. Tentang Saya, 5. Kontak, 6. Footer (+2 more)

### Community 5 - "Design System — Portofolio Zayyan Rizka"
Cohesion: 0.22
Nodes (8): Aksesibilitas, Bentuk, Design System — Portofolio Zayyan Rizka, Komponen SVG khas (orisinal), Prinsip, Spasi & layout, Tipografi — Public Sans (OFL, self-host via next/font), Warna

### Community 7 - "Brief Proyek — Portofolio Zayyan Rizka"
Cohesion: 0.25
Nodes (7): Audiens, Brief Proyek — Portofolio Zayyan Rizka, Identitas, Keputusan inti, Rencana pengembangan, Struktur halaman, Tujuan

### Community 8 - "Portofolio — Zayyan Rizka"
Cohesion: 0.25
Nodes (7): Catatan desain, Deploy ke Vercel, Mengedit konten, Menjalankan secara lokal, Portofolio — Zayyan Rizka, ⚠️ Sebelum link situs disebar — checklist, Struktur proyek

### Community 9 - "Hero.tsx"
Cohesion: 0.39
Nodes (5): HeroPortrait(), Props, MarkProps, SquiggleMark(), TealDoodle()

### Community 10 - "opengraph-image.tsx"
Cohesion: 0.40
Nodes (3): alt, contentType, size

## Knowledge Gaps
- **86 isolated node(s):** `compat`, `eslintConfig`, `nextConfig`, `name`, `version` (+81 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **What connects `compat`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _86 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `getDictionary` be split into smaller, more focused modules?**
  _Cohesion score 0.1253968253968254 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._