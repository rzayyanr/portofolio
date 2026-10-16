import { getDictionary, type Locale } from "@/content/dictionary";
import { OvalMark, SquiggleMark, TealDoodle } from "./scribbles";
import Reveal from "./Reveal";

export default function Catalog({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const c = dict.catalog;
  return (
    <section className="pt-10 lg:pt-16">
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
            <span className="text-ink/70">{c.short}</span>
          </p>
          <h1 className="text-title mt-6 text-ink">{c.heading}</h1>
          <p className="text-desc mt-4 max-w-[560px] text-muted">{c.intro}</p>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="text-[20px] font-bold text-ink">{c.labels.colors}</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {c.colors.map((color) => (
              <div key={color.hex} className="sticker bg-btn p-4">
                <div
                  className="h-16 w-full rounded-[6px] border border-ink/10"
                  style={{ background: color.hex }}
                />
                <p className="mt-3 text-[14px] font-bold text-ink">{color.name}</p>
                <p className="text-[12px] text-body">{color.hex}</p>
                <p className="mt-1 text-[12px] text-body">{color.role}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="text-[20px] font-bold text-ink">{c.labels.typography}</h2>
          <p className="mt-2 text-[14px] text-muted">{c.fontNote}</p>
          <div className="mt-6 space-y-6">
            {c.typography.map((sample) => (
              <div key={sample.label} className="sticker bg-btn p-6">
                <p className="text-[12px] text-body">{sample.label}</p>
                <p className={`${sample.className} mt-2 text-ink`}>{sample.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="text-[20px] font-bold text-ink">{c.labels.buttons}</h2>
          <div className="sticker mt-6 flex flex-wrap items-center gap-5 bg-btn p-6">
            <span className="rounded-full bg-white px-6 py-3 text-[15px] font-bold text-ink">
              {dict.hero.ctaProjects}
            </span>
            <span className="rounded-full border-2 border-ink/15 px-6 py-3 text-[15px] font-bold text-ink">
              {dict.hero.ctaCv}
            </span>
            <span className="rounded-full bg-tag-bg px-3.5 py-1.5 text-[13px] font-medium text-tag-text">
              Next.js
            </span>
            <span className="text-[15px] font-semibold text-accent-dark underline decoration-scribble-blue decoration-2 underline-offset-4">
              {dict.contact.githubLabel}
            </span>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="text-[20px] font-bold text-ink">{c.labels.scribbles}</h2>
          <div className="sticker mt-6 flex flex-wrap items-center gap-10 bg-btn p-6">
            <div className="text-center">
              <OvalMark className="h-[52px] w-[220px]" />
              <p className="mt-2 text-[12px] text-body">OvalMark</p>
            </div>
            <div className="text-center">
              <SquiggleMark className="h-[16px] w-[180px]" />
              <p className="mt-2 text-[12px] text-body">SquiggleMark</p>
            </div>
            <div className="text-center">
              <TealDoodle className="h-[46px] w-[64px]" />
              <p className="mt-2 text-[12px] text-body">TealDoodle</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16 pb-[120px] lg:pb-[150px]">
          <h2 className="text-[20px] font-bold text-ink">{c.labels.components}</h2>
          <ul className="sticker mt-6 divide-y divide-ink/5 bg-btn">
            {c.components.map((component) => (
              <li key={component.name} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 p-4">
                <span className="font-bold text-ink">{component.name}</span>
                <code className="text-[12px] text-accent-dark">{component.path}</code>
                <span className="text-[14px] text-body">{component.role}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
