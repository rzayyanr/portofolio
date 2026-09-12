import Image from "next/image";
import { getDictionary, type Locale } from "@/content/dictionary";
import { casePath } from "@/content/cases";
import { SquiggleMark } from "./scribbles";
import Reveal from "./Reveal";

export default function Archive({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <section className="pt-[120px] lg:pt-[180px]">
      <div className="container-site">
        <Reveal>
          <p className="text-[14px] text-muted">
            <a
              href={`/${locale}`}
              className="transition-colors hover:text-accent-dark hover:underline"
            >
              {dict.nav.home}
            </a>
            <span className="mx-2 text-ink/30">/</span>
            <span className="text-ink/70">{dict.nav.projects}</span>
          </p>
          <h1 className="text-title mt-6 text-ink">{dict.archive.heading}</h1>
          <p className="text-desc mt-4 max-w-[520px] text-muted">{dict.archive.intro}</p>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dict.projects.items.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 0.1} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[6px] border-[1.5px] border-ink/10 bg-white transition-all duration-200 hover:-translate-y-[3px] hover:border-scribble-blue/70 hover:shadow-[0_12px_32px_-14px_rgba(19,19,19,0.18)]">
                <a href={project.links.live.href} target="_blank" rel="noreferrer" className="block overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1280}
                    height={800}
                    className="w-full transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </a>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="relative inline-block">
                      <h2 className="text-[24px] font-bold text-ink">{project.title}</h2>
                      <SquiggleMark
                        animated
                        className="absolute -bottom-[5px] left-0 h-[10px] w-full"
                      />
                    </div>
                    <span className="text-[13px] text-muted">{project.year}</span>
                  </div>
                  <p className="mt-3 text-[16px] leading-relaxed text-muted">{project.tagline}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-tag-bg px-3 py-1 text-[12px] font-medium text-tag-text"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center gap-4 pt-6">
                    <a
                      href={project.links.live.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-5 py-2.5 text-[14px] font-bold text-ink transition-colors hover:bg-btn-hover"
                    >
                      {project.links.live.label}
                    </a>
                    <a
                      href={casePath(locale, project.caseSlug)}
                      className="text-[14px] font-semibold text-accent-dark transition-colors hover:text-[#004a94] hover:underline"
                    >
                      {dict.projects.caseLabel}
                    </a>
                    <a
                      href={project.links.github.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[14px] font-semibold text-accent-dark transition-colors hover:text-[#004a94] hover:underline"
                    >
                      {dict.projects.githubLabel}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
