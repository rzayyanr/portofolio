import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/components/NotFound";
import { isLocale } from "@/content/dictionary";

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ locale: string; rest: string[] }>;
}) {
  const { locale } = await params;
  const valid = isLocale(locale) ? locale : "id";
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
