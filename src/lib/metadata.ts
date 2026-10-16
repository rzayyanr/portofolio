import type { Metadata } from "next";
import { localizePath, type Locale } from "@/content/dictionary";

export const siteUrl = "https://rzayyanr.vercel.app";
const siteName = "Zayyan Rizka";

/**
 * Metadata halaman dihitung dari sisa path setelah prefix locale, supaya setiap
 * halaman mengiklankan URL-nya sendiri (canonical), pasangan bahasa yang benar,
 * dan preview sosial yang sesuai isi halaman.
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  index = true,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  index?: boolean;
}): Metadata {
  const other: Locale = locale === "id" ? "en" : "id";
  const canonical = `/${locale}${path}`;
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical,
      languages: {
        [locale]: `/${locale}${path}`,
        [other]: localizePath(locale, other, path),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale,
      type: "website",
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Zayyan Rizka, Portofolio",
        },
      ],
    },
    ...(index ? {} : { robots: { index: false, follow: true } }),
  };
}
