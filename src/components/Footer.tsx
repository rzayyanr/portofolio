import { getDictionary, type Locale } from "@/content/dictionary";

export default function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <footer className="pb-10">
      <div className="container-site text-[15px] text-muted">{dict.footer}</div>
    </footer>
  );
}
