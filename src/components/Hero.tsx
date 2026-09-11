import { getDictionary, type Locale } from "@/content/dictionary";
import { SquiggleMark } from "./scribbles";
import HeroIllustration from "./HeroIllustration";
import Reveal from "./Reveal";

export default function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { intro, paragraphLinks } = dict.hero;
  return (
    <section id="beranda" className="flex min-h-[110vh] items-center pt-[100px] lg:pt-[140px]">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <h1 className="text-hero text-ink">
            {intro.start}
            <span className="mark-oval">{intro.mark}</span>
            {intro.middle}
            <span className="relative inline-block">
              <SquiggleMark className="absolute -bottom-[5px] left-0 -z-10 h-[12px] w-full" />
              {intro.underlined}
            </span>
          </h1>
          <p className="text-lead mt-8 max-w-[470px] text-body">
            {dict.hero.paragraphLead}
            {paragraphLinks.pre}
            <a
              href="https://github.com/rzayyanr"
              target="_blank"
              rel="noreferrer"
              className="text-accent transition-colors hover:text-accent-dark hover:underline"
            >
              {paragraphLinks.github}
            </a>
            {paragraphLinks.mid}
            <a
              href="https://www.linkedin.com/in/rzayyanr/"
              target="_blank"
              rel="noreferrer"
              className="text-accent transition-colors hover:text-accent-dark hover:underline"
            >
              {paragraphLinks.linkedin}
            </a>
            {paragraphLinks.mid2}
            <a
              href={dict.contact.email}
              className="text-accent transition-colors hover:text-accent-dark hover:underline"
            >
              {paragraphLinks.email}
            </a>
            {paragraphLinks.post}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#proyek"
              className="rounded-full bg-btn px-7 py-3.5 text-[17px] font-bold text-ink transition-colors hover:bg-btn-hover"
            >
              {dict.hero.ctaProjects}
            </a>
            <a
              href="/cv.pdf"
              download
              className="rounded-full border-2 border-ink/15 px-7 py-3.5 text-[17px] font-bold text-ink transition-colors hover:border-ink/40 hover:bg-btn"
            >
              {dict.hero.ctaCv}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-5">
          <HeroIllustration className="mx-auto w-full max-w-[340px]" title={dict.hero.illustrationAlt} />
        </Reveal>
      </div>
    </section>
  );
}
