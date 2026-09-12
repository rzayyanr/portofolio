import Image from "next/image";
import {
  archivePath,
  getDictionary,
  type Locale,
  type ProjectItem,
} from "@/content/dictionary";
import { casePath } from "@/content/cases";
import Reveal from "./Reveal";

type CardProps = {
  project: ProjectItem;
  index: number;
  locale: Locale;
};

function ProjectCard({ project, index, locale }: CardProps) {
  const dict = getDictionary(locale);
  const imageRight = index % 2 === 1;
  return (
    <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
      <Reveal className={`lg:col-span-7 ${imageRight ? "lg:order-2" : ""}`}>
        <a
          href={project.links.live.href}
          target="_blank"
          rel="noreferrer"
          className="block transition-transform duration-200 hover:-translate-y-[3px]"
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1280}
            height={800}
            priority={index === 0}
            className="w-full rounded-[6px]"
          />
        </a>
      </Reveal>
      <Reveal
        delay={0.1}
        className={`lg:col-span-5 ${imageRight ? "lg:order-1 lg:pr-[70px]" : "lg:pl-[70px]"}`}
      >
        <h3 className="text-title text-ink">{project.title}</h3>
        <p className="text-desc mt-5 max-w-[380px] text-muted">{project.description}</p>
        <p className="mt-4 max-w-[380px] text-[15px] leading-relaxed text-muted">{project.role}</p>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-xl font-bold text-ink">{stat.value}</dd>
              <dd className="mt-0.5 text-[13px] text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-full bg-tag-bg px-3.5 py-1.5 text-[13px] font-medium text-tag-text"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href={project.links.live.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-btn px-6 py-3 text-[15px] font-bold text-ink transition-colors hover:bg-btn-hover"
          >
            {project.links.live.label}
          </a>
          <a
            href={project.links.github.href}
            target="_blank"
            rel="noreferrer"
            className="text-[15px] font-semibold text-accent-dark transition-colors hover:text-[#004a94] hover:underline"
          >
            {dict.projects.githubLabel}
          </a>
          <a
            href={casePath(locale, project.caseSlug)}
            className="text-[15px] font-semibold text-accent-dark transition-colors hover:text-[#004a94] hover:underline"
          >
            {dict.projects.caseLabel}
          </a>
          {project.links.docs && (
            <a
              href={project.links.docs.href}
              target="_blank"
              rel="noreferrer"
              className="text-[15px] font-semibold text-accent-dark transition-colors hover:text-[#004a94] hover:underline"
            >
              {dict.projects.docsLabel}
            </a>
          )}
        </div>
      </Reveal>
    </article>
  );
}

export default function Projects({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <section id="proyek" className="scroll-mt-24">
      <div className="container-site">
        <Reveal>
          <h2 className="text-title text-ink">{dict.projects.heading}</h2>
        </Reveal>
        <div className="mt-16 flex flex-col gap-y-[100px] lg:mt-[150px] lg:gap-y-[150px]">
          {dict.projects.items
            .filter((project) => project.featured)
            .map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} locale={locale} />
            ))}
        </div>
        <Reveal className="mt-16 flex justify-center lg:mt-[100px]">
          <a
            href={archivePath(locale)}
            className="rounded-full bg-btn px-7 py-3.5 text-[17px] font-bold text-ink transition-colors hover:bg-btn-hover"
          >
            {dict.projects.allButton} →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
