export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";

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
      illustrationAlt:
        "Ilustrasi karakter yang sedang menulis kode di laptop dengan gitar bersandar di sebelahnya",
    },
    projects: {
      heading: "Proyek Pilihan",
      liveLabel: "Kunjungi Website",
      codelabLabel: "Coba Aplikasi",
      githubLabel: "GitHub",
      docsLabel: "PRD & ADR",
      items: [
        {
          title: "PKM UPNVJ",
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
      illustrationAlt:
        "Illustration of a character writing code on a laptop with a guitar leaning beside them",
    },
    projects: {
      heading: "Selected Projects",
      liveLabel: "Visit Website",
      codelabLabel: "Try the App",
      githubLabel: "GitHub",
      docsLabel: "PRD & ADRs",
      items: [
        {
          title: "PKM UPNVJ",
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
