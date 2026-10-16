import Image from "next/image";
import {
  archivePath,
  getDictionary,
  type Locale,
  type ProjectItem,
} from "@/content/dictionary";
import { casePath } from "@/content/cases";
import { SquiggleMark } from "./scribbles";
import Reveal from "./Reveal";

type CardProps = {
  project: ProjectItem;
  index: number;
  locale: Locale;
};

function ProjectCard({ project, index, locale }: CardProps) {
  const dict = getDictionary(locale);
  return (
    <article className="group h-full">
      <div
        className={`sticker flex h-full flex-col overflow-hidden bg-white ${
          index % 2 === 0 ? "[--tilt:-0.5deg]" : "[--tilt:0.6deg]"
        }`}
      >
        <div>
          {project.links.live ? (
            <a
              href={project.links.live.href}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1280}
                height={800}
                priority={index === 0}
                className="w-full transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>
          ) : (
            <div className="block overflow-hidden">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1280}
              height={800}
              priority={index === 0}
              className="w-full"
            />
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          {/* Goresan merah di bawah judul, menggambar sendiri saat kursornya
              menyentuh kartu. Sama seperti kartu di halaman semua proyek. */}
          <div className="relative inline-block w-fit">
            <h3 className="text-[22px] font-bold leading-snug text-ink">{project.title}</h3>
            <SquiggleMark animated className="absolute -bottom-[5px] left-0 h-[10px] w-full" />
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.description}</p>
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
          <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
            {project.links.live && (
              <a
                href={project.links.live.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-btn px-5 py-2.5 text-[14px] font-bold text-ink transition-colors hover:bg-btn-hover"
              >
                {project.links.live.label}
              </a>
            )}
            <a
              href={casePath(locale, project.caseSlug)}
              className="text-[14px] font-semibold text-accent-dark transition-colors hover:text-[#004a94] hover:underline"
            >
              {dict.projects.caseLabel}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const featured = dict.projects.items.filter((project) => project.featured);
  return (
    <section id="proyek" className="scroll-mt-24">
      <div className="container-site">
        <Reveal>
          <h2 className="text-title text-ink">{dict.projects.heading}</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 0.08} className="h-full">
              <ProjectCard project={project} index={index} locale={locale} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16 flex justify-center lg:mt-[100px]">
          <a
            href={archivePath(locale)}
            className="rounded-full bg-btn px-7 py-3.5 text-[17px] font-bold text-ink transition-colors hover:bg-btn-hover"
          >
            {dict.projects.allButton}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
