import Image from "next/image";
import { archivePath, getDictionary, type Locale } from "@/content/dictionary";
import { casePath, caseStudies, type CaseSlug } from "@/content/cases";
import { OvalMark, SquiggleMark } from "./scribbles";
import Reveal from "./Reveal";

type Props = {
  locale: Locale;
  caseSlug: CaseSlug;
};

export default function CaseStudy({ locale, caseSlug }: Props) {
  const dict = getDictionary(locale);
  const c = caseStudies[caseSlug][locale];
  const nextSlug: CaseSlug = caseSlug === "pkm-upnvj" ? "capsl" : "pkm-upnvj";
  const next = caseStudies[nextSlug][locale];

  return (
    <section className="pt-[120px] lg:pt-[180px]">
      <div className="container-site">
        <Reveal>
          <p className="text-[14px] text-muted">
            <a href={`/${locale}`} className="transition-colors hover:text-accent-dark hover:underline">
              {dict.nav.home}
            </a>
            <span className="mx-2 text-ink/30">/</span>
            <a href={archivePath(locale)} className="transition-colors hover:text-accent-dark hover:underline">
              {dict.nav.projects}
            </a>
            <span className="mx-2 text-ink/30">/</span>
            <span className="text-ink/70">{c.title}</span>
          </p>
          <h1 className="text-title mt-6 max-w-[720px] text-ink">
            <span className="relative inline-block">
              <OvalMark className="absolute -left-[3%] top-[-8%] -z-10 h-[118%] w-[106%]" />
              {c.title}
            </span>
          </h1>
          <p className="text-lead mt-5 max-w-[620px] text-body">{c.tagline}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {c.stack.map((item) => (
              <li
                key={item}
                className="rounded-full bg-tag-bg px-3.5 py-1.5 text-[13px] font-medium text-tag-text"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-12 grid grid-cols-3 gap-6 rounded-[6px] bg-btn/60 p-7">
            {c.stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-[38px] font-bold leading-none text-ink sm:text-[48px]">
                  {stat.value}
                </dd>
                <dd className="mt-2 text-[13px] text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15}>
          <Image
            src={c.image}
            alt={c.imageAlt}
            width={1280}
            height={800}
            priority
            className="mt-12 w-full rounded-[6px]"
          />
        </Reveal>

        {c.sections.map((section) => (
          <Reveal key={section.number} className="mt-20">
            <div className="flex items-baseline gap-5">
              <span className="text-[56px] font-bold leading-none text-scribble-blue/40">
                {section.number}
              </span>
              <h2 className="text-title relative inline-block text-ink">
                {section.title}
                <SquiggleMark className="absolute -bottom-[6px] left-0 h-[10px] w-full" />
              </h2>
            </div>
            <div className="mt-7 max-w-[680px] space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-desc text-muted">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-3 pt-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 24)} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-scribble-blue"
                      />
                      <span className="text-desc text-muted">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}

        <Reveal className="mt-20">
          <div className="flex flex-wrap items-center gap-5 rounded-[6px] bg-btn/60 p-7">
            <a
              href={c.links.live.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 text-[15px] font-bold text-ink transition-colors hover:bg-btn-hover"
            >
              {c.links.live.label}
            </a>
            <a
              href={c.links.github.href}
              target="_blank"
              rel="noreferrer"
              className="text-[15px] font-semibold text-accent-dark transition-colors hover:text-[#004a94] hover:underline"
            >
              {dict.projects.githubLabel}
            </a>
            {c.links.docs && (
              <a
                href={c.links.docs.href}
                target="_blank"
                rel="noreferrer"
                className="text-[15px] font-semibold text-accent-dark transition-colors hover:text-[#004a94] hover:underline"
              >
                {c.links.docs.label}
              </a>
            )}
          </div>
        </Reveal>

        <Reveal className="mt-12 pb-[120px] lg:pb-[150px]">
          <a
            href={casePath(locale, nextSlug)}
            className="group flex items-center justify-between gap-4 rounded-[6px] border-[1.5px] border-ink/10 bg-white p-6 transition-all duration-200 hover:-translate-y-[3px] hover:border-scribble-blue/70"
          >
            <div>
              <p className="text-[13px] text-muted">{dict.case.next}</p>
              <p className="mt-1 text-[20px] font-bold text-ink">{next.title}</p>
            </div>
            <span aria-hidden="true" className="text-[24px] text-ink transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
