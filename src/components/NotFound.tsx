import { getDictionary, type Locale } from "@/content/dictionary";
import { TealDoodle } from "./scribbles";

export default function NotFound({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <section className="flex min-h-[70vh] items-center py-16">
      <div className="container-site text-center">
        <div className="relative inline-block">
          <p
            aria-hidden="true"
            className="text-[110px] font-bold leading-none text-accent sm:text-[150px]"
          >
            404
          </p>
          <TealDoodle className="absolute -right-[70px] top-[10px] hidden h-[46px] w-[64px] sm:block" />
        </div>
        <h1 className="text-title mt-2 text-ink">{dict.notFound.title}</h1>
        <p className="text-desc mx-auto mt-4 max-w-[440px] text-muted">{dict.notFound.text}</p>
        <a
          href={`/${locale}`}
          className="mt-10 inline-block rounded-full bg-btn px-7 py-3.5 text-[17px] font-bold text-ink transition-colors hover:bg-btn-hover"
        >
          {dict.notFound.back}
        </a>
      </div>
    </section>
  );
}
