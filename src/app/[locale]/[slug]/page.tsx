import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getDictionary,
  isLocale,
  localizedSlugs,
  locales,
  type Locale,
} from "@/content/dictionary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Archive from "@/components/Archive";
import Catalog from "@/components/Catalog";

type Kind = "archive" | "catalog";

function resolveKind(locale: Locale, slug: string): Kind | null {
  if (slug === localizedSlugs[locale].archive) return "archive";
  if (slug === localizedSlugs[locale].catalog) return "catalog";
  return null;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.values(localizedSlugs[locale]).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const kind = resolveKind(locale, slug);
  const dict = getDictionary(locale);
  if (kind === "archive") {
    return {
      title: `${dict.archive.heading} | Zayyan Rizka`,
      description: dict.archive.intro,
      alternates: {
        canonical: `/${locale}/${slug}`,
        languages: { id: "/id/proyek", en: "/en/projects" },
      },
    };
  }
  if (kind === "catalog") {
    return {
      title: `${dict.catalog.heading} | Zayyan Rizka`,
      robots: { index: false },
    };
  }
  return {};
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const kind = resolveKind(locale, slug);
  if (!kind) {
    notFound();
  }
  return (
    <>
      <Navbar locale={locale} activePage={kind === "archive" ? "archive" : undefined} />
      <main>{kind === "archive" ? <Archive locale={locale} /> : <Catalog locale={locale} />}</main>
      <Footer locale={locale} />
    </>
  );
}
