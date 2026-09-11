export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";

/** Slug halaman yang berbeda per bahasa (keputusan: /id/proyek + /en/projects). */
export const localizedSlugs = {
  id: { archive: "proyek", catalog: "design-system" },
  en: { archive: "projects", catalog: "design-system" },
} as const;

export function archivePath(locale: Locale): string {
  return `/${locale}/${localizedSlugs[locale].archive}`;
}

export function catalogPath(locale: Locale): string {
  return `/${locale}/${localizedSlugs[locale].catalog}`;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const dictionary = {
  id: {
    meta: {
      title: "Zayyan Rizka — Mahasiswa Sistem Informasi",
      description:
        "Mahasiswa Sistem Informasi UPN Veteran Jakarta yang membangun produk web yang rapi dan berguna — portal PKM kampus & aplikasi belajar bahasa isyarat.",
    },
    nav: {
      name: "Zayyan Rizka",
      home: "Beranda",
      projects: "Proyek",
      toLang: "EN",
      toLangAria: "Beralih ke bahasa Inggris",
      githubAria: "GitHub Zayyan Rizka",
      linkedinAria: "LinkedIn Zayyan Rizka",
    },
    hero: {
      intro: {
        start: "Saya ",
        mark: "mahasiswa Sistem Informasi",
        middle: " yang senang membangun ",
        underlined: "produk web yang rapi dan berguna.",
      },
      paragraphLead:
        "Dua produk saya sudah hidup dan dipakai: portal informasi PKM untuk kampus, dan aplikasi belajar Bahasa Isyarat dengan pengenalan gestur real-time.",
      paragraphLinks: {
        pre: " Lihat selengkapnya di ",
        github: "GitHub",
        mid: " dan ",
        linkedin: "LinkedIn",
        mid2: ", atau ",
        email: "kirim email",
        post: " bilang halo.",
      },
      ctaProjects: "Lihat Proyek",
      ctaCv: "Unduh CV",
      portraitAlt: "Foto Zayyan Rizka, setengah badan, dengan tangan menyilang",
    },
    projects: {
      heading: "Proyek Pilihan",
      allButton: "Lihat semua proyek",
      liveLabel: "Kunjungi Website",
      codelabLabel: "Coba Aplikasi",
      githubLabel: "GitHub",
      docsLabel: "PRD & ADR",
      items: [
        {
          title: "PKM UPNVJ",
          tagline: "Portal informasi PKM kampus dengan panel admin tanpa koding",
          year: "2026",
          featured: true,
          description:
            "Website pusat informasi Program Kreativitas Mahasiswa untuk UPN Veteran Jakarta: panduan 10 bidang, alur pendaftaran, tema 2026, tips proposal, dan unduhan panduan resmi. Panel admin ber-autentikasi Google memungkinkan pengelola memperbarui pengumuman dan agenda tanpa menyentuh kode.",
          role: "Peran — riset kebutuhan, PRD, design system, pengembangan, deploy, hingga runbook serah terima; semua dikerjakan sendiri dari nol.",
          stats: [
            { value: "10", label: "bidang PKM terstruktur" },
            { value: "11", label: "panduan resmi diolah" },
            { value: "v1.1", label: "rilis terbaru" },
          ],
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
          links: {
            live: { label: "Kunjungi Website", href: "https://pkm-upnvj.vercel.app" },
            github: { href: "https://github.com/rzayyanr/pkm-upnvj" },
            docs: { href: "https://github.com/rzayyanr/pkm-upnvj/tree/main/website/docs" },
          },
          image: "/images/pkm-upnvj.png",
          imageAlt: "Tangkapan layar beranda website PKM UPNVJ",
        },
        {
          title: "CapSL",
          tagline: "Belajar SIBI dengan koreksi gestur real-time di kamera",
          year: "2026",
          featured: true,
          description:
            "Aplikasi web belajar Bahasa Isyarat Indonesia (SIBI) dengan pengenalan gestur real-time lewat kamera: MediaPipe melacak 21 titik tangan, model MLP yang saya latih menilai pose — lengkap dengan umpan balik korektif, kuis hafalan, dan gamifikasi XP & streak. Semua berjalan di browser, tanpa server.",
          role: "Peran — satu-satunya developer di tim dua orang, dari pipeline dataset & pelatihan model hingga produk akhir.",
          stats: [
            { value: "89,9%", label: "akurasi model" },
            { value: "24", label: "huruf SIBI" },
            { value: "0", label: "server — murni browser" },
          ],
          tech: ["React", "Vite", "MediaPipe", "Python", "scikit-learn"],
          links: {
            live: { label: "Coba Aplikasi", href: "https://capstone-sign-language.vercel.app" },
            github: { href: "https://github.com/rzayyanr/capstone-sign-language" },
            docs: null,
          },
          image: "/images/capsl.png",
          imageAlt: "Tangkapan layar aplikasi CapSL dengan latihan isyarat lewat kamera",
        },
      ] as ProjectItem[],
    },
    archive: {
      heading: "Semua Proyek",
      intro: "Seluruh proyek yang pernah saya bangun — dari yang unggulan sampai eksperimen kecil.",
      back: "Kembali ke beranda",
    },
    catalog: {
      heading: "Katalog Design System",
      short: "Design System",
      intro: "Warna, tipografi, dan komponen yang membangun situs ini — dokumentasi visual untuk diriku sendiri.",
      back: "Kembali ke beranda",
      labels: {
        colors: "Warna",
        typography: "Tipografi",
        buttons: "Tombol & Tautan",
        scribbles: "Coretan Tangan",
        components: "Komponen",
      },
      colors: [
        { hex: "#131313", name: "Ink", role: "Judul & teks utama" },
        { hex: "#5a6065", name: "Body", role: "Paragraf hero & tautan" },
        { hex: "#69737c", name: "Muted", role: "Deskripsi proyek & About" },
        { hex: "#1e8bf1", name: "Accent", role: "Aksen dekoratif & hover" },
        { hex: "#005bb1", name: "Accent Dark", role: "Tautan teks (kontras AA)" },
        { hex: "#a4dcfe", name: "Scribble Blue", role: "Coretan oval kata kunci" },
        { hex: "#ff9595", name: "Scribble Red", role: "Garis coret frasa" },
        { hex: "#7cdfcd", name: "Scribble Teal", role: "Anotasi doodle" },
        { hex: "#edf2f5", name: "Button", role: "Latar tombol pill & kartu" },
      ],
      typography: [
        { label: "Hero — 26–38px, semi-bold", className: "text-hero", text: "Membangun produk web" },
        { label: "Judul — 28–34px, bold", className: "text-title", text: "Proyek Pilihan" },
        { label: "Deskripsi — 18–20px", className: "text-desc", text: "Dua produk saya sudah hidup dan dipakai orang." },
      ],
      fontNote: "Public Sans — bobot 400/500/600/700 (Google Fonts, lisensi OFL)",
      components: [
        { name: "Navbar", path: "src/components/Navbar.tsx", role: "Nama + ikon sosial + toggle bahasa" },
        { name: "Hero", path: "src/components/Hero.tsx", role: "Kalimat pembuka + coretan + CTA" },
        { name: "HeroPortrait", path: "src/components/HeroPortrait.tsx", role: "Foto + oval backdrop + doodle" },
        { name: "Projects", path: "src/components/Projects.tsx", role: "Kartu proyek unggulan berselang-seling" },
        { name: "About", path: "src/components/About.tsx", role: "Cerita, cara kerja, kegiatan, skill" },
        { name: "Contact", path: "src/components/Contact.tsx", role: "CTA email + tautan sosial" },
        { name: "Footer", path: "src/components/Footer.tsx", role: "Kredit + hak cipta" },
        { name: "Reveal", path: "src/components/Reveal.tsx", role: "Animasi muncul saat scroll" },
        { name: "scribbles", path: "src/components/scribbles.tsx", role: "OvalMark, SquiggleMark, TealDoodle" },
        { name: "Archive", path: "src/components/Archive.tsx", role: "Grid kartu Arsip Proyek" },
      ],
    },
    about: {
      heading: "Tentang Saya",
      story: [
        "Saya Zayyan, mahasiswa Sistem Informasi semester 5 di UPN Veteran Jakarta. Saya suka membangun hal-hal yang benar-benar dipakai orang — bukan sekadar tugas yang selesai.",
        "Kalau tidak di depan layar, saya biasanya main gitar atau menumpuk komik yang belum selesai dibaca.",
      ],
      howTitle: "Cara saya kerja",
      how: "Riset dulu, tulis PRD, catat keputusan penting sebagai ADR, bangun, lalu serahkan dengan dokumentasi rapi — supaya apa pun yang saya buat bisa dilanjutkan orang lain.",
      activitiesTitle: "Kegiatan & pencapaian",
      activities: [
        {
          name: "Beasiswa Bank Indonesia — GENBI Jakarta",
          note: "Penerima beasiswa & anggota aktif GENBI Jakarta",
        },
        {
          name: "KSM Multimedia — UPNVJ",
          note: "Organisasi kemahasiswaan — detail menyusul",
        },
      ],
      skillsTitle: "Perkakas yang biasa saya pakai",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Python", "MediaPipe", "Figma"],
    },
    contact: {
      pre: "Punya ide, lowongan magang, atau sekadar ingin menyapa? ",
      link: "Kirim saya email",
      email: "mailto:rzayyanrizka@gmail.com",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
    },
    footer: "© 2026 Zayyan Rizka — dirancang & dikode sendiri.",
  },
  en: {
    meta: {
      title: "Zayyan Rizka — Information Systems Student",
      description:
        "An Information Systems student at UPN Veteran Jakarta who builds clean and useful web products — a campus PKM portal & a sign-language learning app.",
    },
    nav: {
      name: "Zayyan Rizka",
      home: "Home",
      projects: "Projects",
      toLang: "ID",
      toLangAria: "Switch to Indonesian",
      githubAria: "Zayyan Rizka on GitHub",
      linkedinAria: "Zayyan Rizka on LinkedIn",
    },
    hero: {
      intro: {
        start: "I'm an ",
        mark: "Information Systems student",
        middle: " who builds ",
        underlined: "clean and useful web products.",
      },
      paragraphLead:
        "Two of my products are live and in use: a campus PKM information portal, and a sign-language learning app with real-time gesture recognition.",
      paragraphLinks: {
        pre: " See more on ",
        github: "GitHub",
        mid: " and ",
        linkedin: "LinkedIn",
        mid2: ", or just ",
        email: "send an email",
        post: " saying hi.",
      },
      ctaProjects: "View Projects",
      ctaCv: "Download CV",
      portraitAlt: "Photo of Zayyan Rizka, half-body, with crossed arms",
    },
    projects: {
      heading: "Selected Projects",
      allButton: "View all projects",
      liveLabel: "Visit Website",
      codelabLabel: "Try the App",
      githubLabel: "GitHub",
      docsLabel: "PRD & ADRs",
      items: [
        {
          title: "PKM UPNVJ",
          tagline: "The campus PKM information hub with a no-code admin panel",
          year: "2026",
          featured: true,
          description:
            "A centralized PKM information website for UPN Veteran Jakarta: guides for all 10 fields, the application flow, 2026 themes, proposal tips, and official downloads. A Google-authenticated admin panel lets staff update announcements and schedules without touching any code.",
          role: "Role — requirements research, PRD, design system, development, deployment, and handover runbook; done solo from zero.",
          stats: [
            { value: "10", label: "PKM fields structured" },
            { value: "11", label: "official guides processed" },
            { value: "v1.1", label: "latest release" },
          ],
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
          links: {
            live: { label: "Visit Website", href: "https://pkm-upnvj.vercel.app" },
            github: { href: "https://github.com/rzayyanr/pkm-upnvj" },
            docs: { href: "https://github.com/rzayyanr/pkm-upnvj/tree/main/website/docs" },
          },
          image: "/images/pkm-upnvj.png",
          imageAlt: "Screenshot of the PKM UPNVJ website homepage",
        },
        {
          title: "CapSL",
          tagline: "Learn SIBI with real-time camera gesture feedback",
          year: "2026",
          featured: true,
          description:
            "A web app for learning Indonesian Sign Language (SIBI) with real-time camera gesture recognition: MediaPipe tracks 21 hand landmarks and an MLP model I trained scores poses — with corrective feedback, memory quizzes, and XP & streak gamification. Everything runs in the browser, no server needed.",
          role: "Role — the sole developer in a two-person team, from the dataset pipeline & model training to the final product.",
          stats: [
            { value: "89.9%", label: "model accuracy" },
            { value: "24", label: "SIBI letters" },
            { value: "0", label: "servers — fully in-browser" },
          ],
          tech: ["React", "Vite", "MediaPipe", "Python", "scikit-learn"],
          links: {
            live: { label: "Try the App", href: "https://capstone-sign-language.vercel.app" },
            github: { href: "https://github.com/rzayyanr/capstone-sign-language" },
            docs: null,
          },
          image: "/images/capsl.png",
          imageAlt: "Screenshot of CapSL practicing sign language with the camera",
        },
      ] as ProjectItem[],
    },
    archive: {
      heading: "All Projects",
      intro: "Everything I've built — from featured work to small experiments.",
      back: "Back to home",
    },
    catalog: {
      heading: "Design System Catalog",
      short: "Design System",
      intro: "The colors, typography, and components powering this site — a visual documentation for myself.",
      back: "Back to home",
      labels: {
        colors: "Colors",
        typography: "Typography",
        buttons: "Buttons & Links",
        scribbles: "Hand-drawn Scribbles",
        components: "Components",
      },
      colors: [
        { hex: "#131313", name: "Ink", role: "Headings & primary text" },
        { hex: "#5a6065", name: "Body", role: "Hero paragraphs & links" },
        { hex: "#69737c", name: "Muted", role: "Project & about text" },
        { hex: "#1e8bf1", name: "Accent", role: "Decorative accent & hover" },
        { hex: "#005bb1", name: "Accent Dark", role: "Text links (AA contrast)" },
        { hex: "#a4dcfe", name: "Scribble Blue", role: "Oval keyword highlight" },
        { hex: "#ff9595", name: "Scribble Red", role: "Phrase underline" },
        { hex: "#7cdfcd", name: "Scribble Teal", role: "Doodle annotation" },
        { hex: "#edf2f5", name: "Button", role: "Pill buttons & card background" },
      ],
      typography: [
        { label: "Hero — 26–38px, semi-bold", className: "text-hero", text: "Building web products" },
        { label: "Title — 28–34px, bold", className: "text-title", text: "Selected Projects" },
        { label: "Description — 18–20px", className: "text-desc", text: "Two of my products are live and in use." },
      ],
      fontNote: "Public Sans — weights 400/500/600/700 (Google Fonts, OFL license)",
      components: [
        { name: "Navbar", path: "src/components/Navbar.tsx", role: "Name + social icons + language toggle" },
        { name: "Hero", path: "src/components/Hero.tsx", role: "Opening line + scribbles + CTA" },
        { name: "HeroPortrait", path: "src/components/HeroPortrait.tsx", role: "Photo + oval backdrop + doodles" },
        { name: "Projects", path: "src/components/Projects.tsx", role: "Alternating featured project cards" },
        { name: "About", path: "src/components/About.tsx", role: "Story, process, activities, skills" },
        { name: "Contact", path: "src/components/Contact.tsx", role: "Email CTA + social links" },
        { name: "Footer", path: "src/components/Footer.tsx", role: "Credit + copyright" },
        { name: "Reveal", path: "src/components/Reveal.tsx", role: "Scroll-in animation" },
        { name: "scribbles", path: "src/components/scribbles.tsx", role: "OvalMark, SquiggleMark, TealDoodle" },
        { name: "Archive", path: "src/components/Archive.tsx", role: "Project archive card grid" },
      ],
    },
    about: {
      heading: "About Me",
      story: [
        "I'm Zayyan, a 5th-semester Information Systems student at UPN Veteran Jakarta. I like building things people actually use — not just assignments that get done.",
        "When I'm not in front of a screen, I'm usually playing guitar or stacking up comics I haven't finished reading.",
      ],
      howTitle: "How I work",
      how: "Research first, write the PRD, log key decisions as ADRs, build, then hand over with clean documentation — so anything I make can be continued by someone else.",
      activitiesTitle: "Activities & achievements",
      activities: [
        {
          name: "Bank Indonesia Scholarship — GENBI Jakarta",
          note: "Scholarship recipient & active GENBI Jakarta member",
        },
        {
          name: "KSM Multimedia — UPNVJ",
          note: "Student organization — details to follow",
        },
      ],
      skillsTitle: "Tools I usually work with",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Python", "MediaPipe", "Figma"],
    },
    contact: {
      pre: "Have an idea, an internship opening, or just want to say hi? ",
      link: "Send me an email",
      email: "mailto:rzayyanrizka@gmail.com",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
    },
    footer: "© 2026 Zayyan Rizka — designed & coded from scratch.",
  },
} as const;

export type ProjectItem = {
  title: string;
  tagline: string;
  year: string;
  featured: boolean;
  description: string;
  role: string;
  stats: { value: string; label: string }[];
  tech: string[];
  links: {
    live: { label: string; href: string };
    github: { href: string };
    docs: { href: string } | null;
  };
  image: string;
  imageAlt: string;
};

export function getDictionary(locale: string) {
  return isLocale(locale) ? dictionary[locale] : dictionary[defaultLocale];
}
