import type { Metadata } from "next";
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
import NotFound from "@/components/NotFound";

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
  const valid: Locale = isLocale(locale) ? locale : "id";
  const kind = resolveKind(valid, slug);
  if (!kind) {
    return (
      <>
        <Navbar locale={valid} />
        <main>
          <NotFound locale={valid} />
        </main>
        <Footer locale={valid} />
      </>
    );
  }
  return (
    <>
      <Navbar locale={valid} activePage={kind === "archive" ? "archive" : undefined} />
      <main>{kind === "archive" ? <Archive locale={valid} /> : <Catalog locale={valid} />}</main>
      <Footer locale={valid} />
    </>
  );
}
