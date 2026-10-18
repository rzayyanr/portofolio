import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/components/NotFound";
import LocaleSwap from "@/components/LocaleSwap";
import type { Locale } from "@/content/dictionary";

function Variant({ locale }: { locale: Locale }) {
  return (
    <>
      <Navbar locale={locale} />
      <main id="main-content" tabIndex={-1}>
        <NotFound locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

/**
 * Halaman 404 untuk rute di dalam [locale]. Kedua versi bahasa dirender di server,
 * lalu LocaleSwap memilih yang sesuai locale di URL.
 */
export default function LocaleNotFound() {
  return <LocaleSwap id={<Variant locale="id" />} en={<Variant locale="en" />} />;
}
