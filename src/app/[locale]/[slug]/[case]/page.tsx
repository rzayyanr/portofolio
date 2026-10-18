import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  isLocale,
  localizedSlugs,
  locales,
  type Locale,
} from "@/content/dictionary";
import { buildMetadata } from "@/lib/metadata";
import { caseStudies, caseSlugs, type CaseSlug } from "@/content/cases";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudy from "@/components/CaseStudy";

type Props = {
  params: Promise<{ locale: string; slug: string; case: string }>;
};

function resolveCase(locale: Locale, slug: string, caseSlug: string): CaseSlug | null {
  if (slug !== localizedSlugs[locale].archive) return null;
  return (caseSlugs as readonly string[]).includes(caseSlug) ? (caseSlug as CaseSlug) : null;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    caseSlugs.map((caseSlug) => ({
      locale,
      slug: localizedSlugs[locale].archive,
      case: caseSlug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug, case: caseSlug } = await params;
  if (!isLocale(locale)) return {};
  const resolved = resolveCase(locale, slug, caseSlug);
  if (!resolved) return {};
  const c = caseStudies[resolved][locale];
  return buildMetadata({
    locale,
    path: `/${slug}/${caseSlug}`,
    title: `${c.title} | Zayyan Rizka`,
    description: c.tagline,
  });
}

export default async function CasePage({ params }: Props) {
  const { locale, slug, case: caseSlug } = await params;
  if (!isLocale(locale)) notFound();
  const resolved = resolveCase(locale, slug, caseSlug);
  if (!resolved) notFound();
  return (
    <>
      <Navbar locale={locale} activePage="archive" path={`/${slug}/${caseSlug}`} />
      <main id="main-content" tabIndex={-1}>
        <CaseStudy locale={locale} caseSlug={resolved} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
