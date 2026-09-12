import type { Metadata } from "next";
import {
  getDictionary,
  isLocale,
  localizedSlugs,
  locales,
  type Locale,
} from "@/content/dictionary";
import { caseStudies, caseSlugs, type CaseSlug } from "@/content/cases";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudy from "@/components/CaseStudy";
import NotFound from "@/components/NotFound";

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
  return {
    title: `${c.title} | Zayyan Rizka`,
    description: c.tagline,
  };
}

export default async function CasePage({ params }: Props) {
  const { locale, slug, case: caseSlug } = await params;
  if (!isLocale(locale)) {
    return (
      <>
        <Navbar locale="id" />
        <NotFound locale="id" />
        <Footer locale="id" />
      </>
    );
  }
  const resolved = resolveCase(locale, slug, caseSlug);
  if (!resolved) {
    return (
      <>
        <Navbar locale={locale} />
        <NotFound locale={locale} />
        <Footer locale={locale} />
      </>
    );
  }
  return (
    <>
      <Navbar locale={locale} activePage="archive" />
      <main>
        <CaseStudy locale={locale} caseSlug={resolved} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
