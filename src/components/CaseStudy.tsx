import Image from "next/image";
import { archivePath, getDictionary, type Locale } from "@/content/dictionary";
import { casePath, caseSlugs, caseStudies, type CaseSlug } from "@/content/cases";
import { OvalMark, SquiggleMark } from "./scribbles";
import Reveal from "./Reveal";

type Props = {
  locale: Locale;
  caseSlug: CaseSlug;
};

/**
 * Potongan tangkapan layar proyek untuk tiap bagian penjelasan. Berkasnya
 * dinamai mengikuti nomor bagian, jadi mengganti gambar cukup dengan
 * menaruh berkas baru dengan nama yang sama di folder images.
 */
function gambarBagian(caseSlug: CaseSlug, nomor: string): string | null {
  if (caseSlug === "luma") return `/images/luma-${nomor}.png`;
  const berkas = caseSlug === "pkm-upnvj" ? "pkm" : "capsl";
  return `/images/${berkas}-${nomor}.png`;
}

export default function CaseStudy({ locale, caseSlug }: Props) {
  const dict = getDictionary(locale);
  const c = caseStudies[caseSlug][locale];
  const currentIndex = caseSlugs.indexOf(caseSlug);
  const nextSlug = caseSlugs[(currentIndex + 1) % caseSlugs.length];
  const next = caseStudies[nextSlug][locale];

  return (
    <section className="pt-10 lg:pt-16">
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
              <OvalMark className="absolute -left-[20%] top-[-32%] -z-10 h-[160%] w-[140%]" />
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

        {/* Gambar proyek di kiri, kartu statistik di kanan, mengikuti pola di
            referensi. Dari 1024 pixel ke atas keduanya sudah berdampingan
            dengan lebar yang dibagi menurut perbandingan, bukan lebar tetap,
            supaya layar laptop pun ikut berdampingan. Dari 1280 pixel ke atas
            kolom gambarnya dikunci 720 pixel seperti semula, karena di layar
            selebar itu ruangnya memang cukup. Di bawah 1024 pixel keduanya
            ditumpuk ke bawah supaya angkanya tetap terbaca. */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,720px)_1fr]">
            <Image
              src={c.image}
              alt={c.imageAlt}
              width={1280}
              height={800}
              priority
              className="sticker w-full bg-white [--tilt:-0.3deg]"
            />
            <dl className="sticker grid gap-6 bg-btn p-7 [--tilt:0.4deg] sm:grid-cols-3 lg:grid-cols-1">
              {c.stats.map((stat) => (
                /* flex-col-reverse: nilai tampil di atas label, urutan DOM tetap dt lalu dd. */
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="mt-2 text-[13px] text-body">{stat.label}</dt>
                  <dd className="text-[34px] font-bold leading-none text-ink sm:text-[48px] lg:text-[40px]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* Empat bagian dipisah jadi empat kotak sendiri yang berselang-seling
            kiri dan kanan, supaya halamannya tidak terasa penuh. Di sisi
            seberangnya ditemani potongan tangkapan layar proyek. Sama seperti
            blok atas: dari 1024 pixel keduanya berdampingan dengan lebar yang
            dibagi menurut perbandingan, lalu dari 1280 pixel ke atas kolom
            teksnya dikunci 720 pixel. */}
        {c.sections.map((section, index) => {
          const gambarDiKiri = index % 2 === 1;
          const gambar = gambarBagian(caseSlug, section.number);
          return (
            <Reveal key={section.number} className={index === 0 ? "mt-20" : "mt-12 lg:mt-16"}>
              <div
                className={
                  gambar
                    ? `grid items-center gap-8 lg:gap-10 ${
                        gambarDiKiri
                          ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,720px)]"
                          : "lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,720px)_minmax(0,1fr)]"
                      }`
                    : "grid max-w-[1000px]"
                }
              >
                <article
                  className={`sticker bg-white p-7 sm:p-10 ${
                    index % 2 === 0 ? "[--tilt:-0.3deg]" : "[--tilt:0.3deg]"
                  } ${gambar && gambarDiKiri ? "lg:order-2" : ""}`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                    <span className="text-[56px] font-bold leading-none text-accent">
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
                </article>
                {gambar && (
                  <figure
                    className={`sticker bg-white p-2 ${
                      index % 2 === 0 ? "[--tilt:0.4deg]" : "[--tilt:-0.4deg]"
                    } ${gambarDiKiri ? "lg:order-1" : ""}`}
                  >
                    <Image
                      src={gambar}
                      alt={section.imageAlt ?? `${c.title} · ${section.title}`}
                      width={0}
                      height={0}
                      sizes="(min-width: 1280px) 370px, (min-width: 1024px) 420px, 100vw"
                      className="h-auto w-full"
                    />
                  </figure>
                )}
              </div>
            </Reveal>
          );
        })}

        {(c.links.live || c.links.docs) && (
          <Reveal className="mt-20">
            <div className="sticker flex flex-wrap items-center gap-5 bg-btn p-7">
              {c.links.live && (
                <a
                  href={c.links.live.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-[15px] font-bold text-ink transition-colors hover:bg-btn-hover"
                >
                  {c.links.live.label}
                </a>
              )}
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
        )}

        <Reveal className="mt-12 pb-[120px] lg:pb-[150px]">
          <a
            href={casePath(locale, nextSlug)}
            className="sticker group flex max-w-[1000px] items-center justify-between gap-4 bg-white p-6 [--tilt:-0.4deg]"
          >
            <div>
              <p className="text-[13px] text-muted">{dict.case.next}</p>
              <p className="mt-1 text-[20px] font-bold text-ink">{next.title}</p>
            </div>
            <span aria-hidden="true" className="next-case-arrow text-[24px] text-ink transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
