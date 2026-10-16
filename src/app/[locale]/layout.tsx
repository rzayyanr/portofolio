import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { getDictionary, isLocale, locales, type Locale } from "@/content/dictionary";
import { buildMetadata } from "@/lib/metadata";
import PaperBackground from "@/components/PaperBackground";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const valid: Locale = isLocale(locale) ? locale : "id";
  const dict = getDictionary(valid);
  return buildMetadata({
    locale: valid,
    path: "",
    title: dict.meta.title,
    description: dict.meta.description,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale: Locale = isLocale(locale) ? locale : "id";
  return (
    <html lang={validLocale} className={publicSans.variable}>
      <head>
        {/* Menandai bahwa JS aktif supaya animasi masuk tidak menyembunyikan konten
            ketika JavaScript gagal dimuat. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body>
        <PaperBackground />
        {children}
        {process.env.NEXT_PUBLIC_VERCEL_ENV ? <Analytics /> : null}
      </body>
    </html>
  );
}
