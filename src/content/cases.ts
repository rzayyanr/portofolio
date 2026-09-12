import { localizedSlugs, type Locale } from "./dictionary";

export const caseSlugs = ["pkm-upnvj", "capsl"] as const;
export type CaseSlug = (typeof caseSlugs)[number];

export type CaseSection = {
  number: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type CaseContent = {
  title: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  image: string;
  imageAlt: string;
  stats: { value: string; label: string }[];
  sections: CaseSection[];
  links: {
    live: { label: string; href: string };
    github: { href: string };
    docs: { label: string; href: string } | null;
  };
};

export function casePath(locale: Locale, caseSlug: string): string {
  return `/${locale}/${localizedSlugs[locale].archive}/${caseSlug}`;
}

export const caseStudies: Record<CaseSlug, Record<Locale, CaseContent>> = {
  "pkm-upnvj": {
    id: {
      title: "PKM UPNVJ",
      tagline: "Satu pintu informasi Program Kreativitas Mahasiswa kampus, yang bisa dikelola tanpa koding",
      year: "2026",
      role: "Solo developer & product owner",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      image: "/images/pkm-upnvj.png",
      imageAlt: "Tangkapan layar beranda website PKM UPNVJ",
      stats: [
        { value: "10", label: "bidang PKM terstruktur" },
        { value: "11", label: "panduan resmi diolah" },
        { value: "v1.1", label: "rilis terbaru" },
      ],
      sections: [
        {
          number: "01",
          title: "Latar Belakang",
          paragraphs: [
            "Setiap tahun ribuan mahasiswa UPN Veteran Jakarta menekuni Program Kreativitas Mahasiswa (PKM), tetapi informasinya tersebar di berbagai kanal dan panduan resminya tersedia sebagai belasan file PDF panjang. Calon peserta kesulitan menemukan alur, tema, dan tips yang relevan.",
            "Saya melihat kesempatan yang jelas: satu pintu informasi yang selalu terbarui, yang bisa dikelola sendiri oleh pembina tanpa perlu seorang programmer.",
          ],
        },
        {
          number: "02",
          title: "Yang Saya Kerjakan",
          paragraphs: [
            "Semuanya mulai dari riset. Sebelas panduan resmi PKM 2026 saya baca dan petakan menjadi data terstruktur, lalu dituangkan ke PRD, ERD, dan serangkaian ADR sebelum satu baris antarmuka ditulis.",
          ],
          bullets: [
            "Membangun situs publik dengan Next.js, TypeScript, dan Tailwind CSS: panduan 10 bidang, alur pendaftaran, tema 2026, tips proposal, dan unduhan resmi",
            "Merancang panel admin ber-autentikasi Google (Supabase) agar pengelola dapat memperbarui pengumuman dan agenda tanpa menyentuh kode, lengkap dengan hapus dua langkah dan ekspor cadangan JSON",
            "Menjaga aksesibilitas: skip link, hierarki heading, dan kontras yang lolos audit",
            "Menyiapkan RUNBOOK dan MANUAL-ADMIN agar situs bisa dilanjutkan organisasi tanpa saya",
          ],
        },
        {
          number: "03",
          title: "Hasil",
          paragraphs: [
            "Situs rilis sebagai v1.1 dan digunakan pengelola untuk memperbarui informasi secara mandiri. Seluruh siklus dari riset sampai serah terima saya kerjakan sendiri, dengan setiap keputusan penting terdokumentasi dan bisa ditelusuri.",
          ],
        },
        {
          number: "04",
          title: "Pelajaran",
          paragraphs: [
            "Dokumentasi bukan pelengkap. PRD dan ADR mempercepat pengambilan keputusan, dan RUNBOOK membuat kata selesai berarti bisa dilanjutkan orang lain. Pembiasaan inilah yang saya bawa ke setiap proyek berikutnya.",
          ],
        },
      ],
      links: {
        live: { label: "Kunjungi Website", href: "https://pkm-upnvj.vercel.app" },
        github: { href: "https://github.com/rzayyanr/pkm-upnvj" },
        docs: { label: "PRD & ADR", href: "https://github.com/rzayyanr/pkm-upnvj/tree/main/website/docs" },
      },
    },
    en: {
      title: "PKM UPNVJ",
      tagline: "A single gateway to the campus Student Creativity Program, manageable without code",
      year: "2026",
      role: "Solo developer & product owner",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      image: "/images/pkm-upnvj.png",
      imageAlt: "Screenshot of the PKM UPNVJ website homepage",
      stats: [
        { value: "10", label: "PKM fields structured" },
        { value: "11", label: "official guides processed" },
        { value: "v1.1", label: "latest release" },
      ],
      sections: [
        {
          number: "01",
          title: "Background",
          paragraphs: [
            "Every year, thousands of students at UPN Veteran Jakarta pursue the Student Creativity Program (PKM), yet the information lives across scattered channels and the official guides come as a dozen long PDF files. Prospective participants struggle to find the right flow, themes, and tips.",
            "I saw a clear opportunity: one always-up-to-date gateway that staff could manage themselves, without needing a programmer.",
          ],
        },
        {
          number: "02",
          title: "What I Did",
          paragraphs: [
            "It all started with research. I read and mapped eleven official PKM 2026 guides into structured data, then wrote the PRD, ERD, and a series of ADRs before writing a single line of UI.",
          ],
          bullets: [
            "Built the public site with Next.js, TypeScript, and Tailwind CSS: guides for all 10 fields, the application flow, 2026 themes, proposal tips, and official downloads",
            "Designed a Google-authenticated admin panel (Supabase) so staff can update announcements and schedules without touching code, complete with two-step deletes and JSON backup export",
            "Kept accessibility in check: skip links, heading hierarchy, and contrast that passes audit",
            "Prepared a RUNBOOK and an ADMIN MANUAL so the organization can continue the site without me",
          ],
        },
        {
          number: "03",
          title: "Results",
          paragraphs: [
            "The site shipped as v1.1 and is used by staff to keep information up to date on their own. I handled the entire cycle from research to handover solo, with every major decision documented and traceable.",
          ],
        },
        {
          number: "04",
          title: "Lessons",
          paragraphs: [
            "Documentation is not decoration. The PRD and ADRs sped up decision-making, and the RUNBOOK turned done into someone else can continue this. That habit now travels with me into every project.",
          ],
        },
      ],
      links: {
        live: { label: "Visit Website", href: "https://pkm-upnvj.vercel.app" },
        github: { href: "https://github.com/rzayyanr/pkm-upnvj" },
        docs: { label: "PRD & ADRs", href: "https://github.com/rzayyanr/pkm-upnvj/tree/main/website/docs" },
      },
    },
  },
  capsl: {
    id: {
      title: "CapSL",
      tagline: "Aplikasi belajar Bahasa Isyarat Indonesia dengan koreksi gestur real-time di kamera",
      year: "2026",
      role: "Sole developer (tim dua orang)",
      stack: ["React", "Vite", "MediaPipe", "Python", "scikit-learn"],
      image: "/images/capsl.png",
      imageAlt: "Tangkapan layar aplikasi CapSL dengan latihan isyarat lewat kamera",
      stats: [
        { value: "89,9%", label: "akurasi model" },
        { value: "24", label: "huruf SIBI" },
        { value: "0", label: "server, murni browser" },
      ],
      sections: [
        {
          number: "01",
          title: "Latar Belakang",
          paragraphs: [
            "Membelajar Bahasa Isyarat Indonesia (SIBI) dari gambar statis itu sulit: pembelajar tidak pernah tahu apakah gerakan tangannya sudah benar. Kebanyakan aplikasi hanya menyajikan kamus, tanpa umpan balik apa pun.",
            "Bersama satu teman satu tim (yang menangani riset konten dan QA), saya mengambil tantangan ini sebagai proyek capstone: aplikasi web yang mengoreksi gerakan secara real-time, langsung dari kamera browser.",
          ],
        },
        {
          number: "02",
          title: "Yang Saya Kerjakan",
          paragraphs: [
            "Sebagai satu-satunya developer di tim, saya membangun seluruh sisi teknisnya dari nol, dengan setiap keputusan besar dicatat sebagai ADR.",
          ],
          bullets: [
            "Menyiapkan pipeline data: dataset fingerspelling, lalu ekstraksi 21 landmark tangan MediaPipe menjadi vektor fitur",
            "Melatih model MLP dan mengekspornya ke JavaScript murni tanpa runtime TensorFlow, agar seluruh inferensi berjalan di browser pengguna",
            "Membangun pengalaman belajar: latihan terpandu dengan progres, umpan balik korektif berbasis geometri tangan, kuis hafalan, dan gamifikasi XP & streak",
            "Menjaga kualitas dengan 25 unit test dan lima ADR",
          ],
        },
        {
          number: "03",
          title: "Hasil",
          paragraphs: [
            "Model mencapai akurasi 89,9% pada data uji, melampaui target PRD sebesar 85%. Aplikasi menayangkan 24 huruf SIBI dan berjalan penuh di browser tanpa server, sudah dipublikasikan lewat Vercel.",
          ],
        },
        {
          number: "04",
          title: "Pelajaran",
          paragraphs: [
            "Batasan justru mempercepat. Huruf dinamis J dan Z sengaja dikecualikan, dan dukungan BISINDO ditunda, supaya versi pertama benar-benar selesai. Mengevaluasi trade-off dengan tenang lewat ADR ternyata lebih berharga daripada menambah fitur.",
          ],
        },
      ],
      links: {
        live: { label: "Coba Aplikasi", href: "https://capstone-sign-language.vercel.app" },
        github: { href: "https://github.com/rzayyanr/capstone-sign-language" },
        docs: null,
      },
    },
    en: {
      title: "CapSL",
      tagline: "An Indonesian Sign Language learning app with real-time camera gesture feedback",
      year: "2026",
      role: "Sole developer (two-person team)",
      stack: ["React", "Vite", "MediaPipe", "Python", "scikit-learn"],
      image: "/images/capsl.png",
      imageAlt: "Screenshot of CapSL practicing sign language with the camera",
      stats: [
        { value: "89.9%", label: "model accuracy" },
        { value: "24", label: "SIBI letters" },
        { value: "0", label: "servers, fully in-browser" },
      ],
      sections: [
        {
          number: "01",
          title: "Background",
          paragraphs: [
            "Learning Indonesian Sign Language (SIBI) from static images is hard: learners never know whether their hand movements are correct. Most apps only offer a dictionary, with no feedback at all.",
            "Together with one teammate (who handled content research and QA), I took this on as our capstone project: a web app that corrects gestures in real time, straight from the browser camera.",
          ],
        },
        {
          number: "02",
          title: "What I Did",
          paragraphs: [
            "As the only developer on the team, I built the entire technical side from scratch, logging every major decision as an ADR.",
          ],
          bullets: [
            "Set up the data pipeline: a fingerspelling dataset, then MediaPipe hand-landmark extraction into feature vectors",
            "Trained an MLP model and exported it to pure JavaScript without a TensorFlow runtime, so all inference runs in the user's browser",
            "Built the learning experience: guided practice with progress, geometry-based corrective feedback, memory quizzes, and XP & streak gamification",
            "Kept quality in check with 25 unit tests and five ADRs",
          ],
        },
        {
          number: "03",
          title: "Results",
          paragraphs: [
            "The model reached 89.9% accuracy on held-out data, beating the PRD target of 85%. The app covers 24 SIBI letters and runs fully in the browser without a server, published through Vercel.",
          ],
        },
        {
          number: "04",
          title: "Lessons",
          paragraphs: [
            "Constraints actually sped us up. Dynamic letters J and Z were deliberately excluded, and BISINDO support was postponed, so the first version could truly ship. Calmly evaluating trade-offs through ADRs turned out to be more valuable than adding features.",
          ],
        },
      ],
      links: {
        live: { label: "Try the App", href: "https://capstone-sign-language.vercel.app" },
        github: { href: "https://github.com/rzayyanr/capstone-sign-language" },
        docs: null,
      },
    },
  },
};
