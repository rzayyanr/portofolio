import type { MetadataRoute } from "next";
import { localizedSlugs, locales } from "@/content/dictionary";

const base = "https://rzayyanr.vercel.app";

/** Ubah tanggal ini setiap kali isi situs berubah; jangan pakai waktu build. */
const contentUpdated = new Date("2026-10-16");

/** Pasangan URL antar bahasa untuk satu halaman yang sama. */
function alternates(paths: string[]) {
  return {
    languages: Object.fromEntries(
      locales.map((locale, index) => [locale, `${base}${paths[index]}`])
    ),
  };
}

function caseAlternates(caseSlug: string) {
  return alternates(
    locales.map((locale) => `/${locale}/${localizedSlugs[locale].archive}/${caseSlug}`)
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${base}/id`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { id: `${base}/id`, en: `${base}/en` } },
    },
    {
      url: `${base}/en`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { id: `${base}/id`, en: `${base}/en` } },
    },
    {
      url: `${base}/id/proyek`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { id: `${base}/id/proyek`, en: `${base}/en/projects` } },
    },
    {
      url: `${base}/en/projects`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { id: `${base}/id/proyek`, en: `${base}/en/projects` } },
    },
    {
      url: `${base}/id/proyek/pkm-upnvj`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: caseAlternates("pkm-upnvj"),
    },
    {
      url: `${base}/id/proyek/capsl`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: caseAlternates("capsl"),
    },
    {
      url: `${base}/id/proyek/luma`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: caseAlternates("luma"),
    },
    {
      url: `${base}/en/projects/pkm-upnvj`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: caseAlternates("pkm-upnvj"),
    },
    {
      url: `${base}/en/projects/capsl`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: caseAlternates("capsl"),
    },
    {
      url: `${base}/en/projects/luma`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: caseAlternates("luma"),
    },
  ];
}
