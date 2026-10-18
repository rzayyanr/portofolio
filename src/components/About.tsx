import { getDictionary, type Locale } from "@/content/dictionary";
import { TealDoodle } from "./scribbles";
import PixelCat from "./PixelCat";
import Reveal from "./Reveal";
import type { ReactNode } from "react";

const activityIcons: Record<string, ReactNode> = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M8 6 L3 12 L8 18" />
      <path d="M16 6 L21 12 L16 18" />
    </svg>
  ),
  donut: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-4 w-4">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4 v2" />
      <path d="M19.3 8 l-1.8 1" />
      <path d="M19.3 16 l-1.8 -1" />
      <path d="M4.7 8 l1.8 1" />
      <path d="M4.7 16 l1.8 -1" />
    </svg>
  ),
  medal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13 L7 21 L12 18 L17 21 L15 13" />
    </svg>
  ),
  megaphone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M3 10 L14 5 L14 19 L3 14 Z" />
      <path d="M17 8 C19 10 19 14 17 16" />
      <path d="M6 15 v4" />
    </svg>
  ),
};

export default function About({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <section id="tentang" className="scroll-mt-24 py-[100px] lg:py-[150px]">
      <div className="container-site">
        <Reveal>
          <div className="relative inline-block">
            <h2 className="text-title text-ink">{dict.about.heading}</h2>
            <TealDoodle className="absolute -right-[58px] bottom-[0px] hidden h-[46px] w-[64px] sm:block" />
          </div>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <Reveal>
            <div className="sticker drift bg-white p-7 [--tilt:-0.3deg] sm:p-9">
              <div className="space-y-6">
                {dict.about.story.map((paragraph, index) => (
                  <p key={index} className="text-desc text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 border-t border-dashed border-ink/15 pt-6">
                <h3 className="text-[17px] font-bold text-ink">{dict.about.educationTitle}</h3>
                <p className="mt-3 font-semibold text-ink">{dict.about.education.name}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-muted">
                  {dict.about.education.note}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="sticker drift relative bg-white p-7 [--tilt:0.3deg] sm:p-9">
              {/* Kucing duduk tepat di tepi atas kotak, ekornya menjuntai masuk
                  melewati garis tepi. Sengaja tidak ikut miring supaya terlihat
                  benar-benar duduk di atas tepi, bukan menempel di kotaknya. */}
              <PixelCat className="absolute -top-[40px] right-5 sm:right-7" />
              <h3 className="text-[17px] font-bold text-ink">{dict.about.activitiesTitle}</h3>
              <div className="relative mt-6">
                <svg
                  viewBox="0 0 10 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute bottom-4 left-[9px] top-4 w-[10px]"
                >
                  <path
                    d="M5 0 C 7 15, 3 30, 5 45 C 7 60, 3 75, 5 90 C 5.5 95, 5 98, 5 100"
                    stroke="#A4DCFE"
                    strokeWidth={3}
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                <div className="space-y-7">
                  {dict.about.activities.map((activity, index) => (
                    <Reveal key={activity.name} delay={0.1 + index * 0.08}>
                      <div className="group relative flex gap-4">
                        <span
                          aria-hidden="true"
                          className="activity-icon relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-scribble-blue bg-white text-ink transition-transform duration-200 group-hover:scale-125"
                        >
                          {activityIcons[activity.icon]}
                        </span>
                        <div className="activity-copy pt-0.5 transition-transform duration-200 group-hover:translate-x-1">
                          <p className="font-semibold text-ink">{activity.name}</p>
                          <p className="mt-1 text-[14px] leading-relaxed text-muted">
                            {activity.note}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="sticker drift mx-auto mt-10 max-w-[820px] bg-white px-8 py-8 text-center [--tilt:-1.2deg]">
            <h3 className="text-[17px] font-bold text-ink">{dict.about.skillsTitle}</h3>
            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-3">
              {dict.about.skills.map((skill, index) => {
                // Selang-seling: yang disorot dapat stabilo, sisanya polos.
                // Padding keduanya disamakan supaya tinggi dan jaraknya sejajar.
                const disorot = index % 2 === 0;
                const urutan = Math.floor(index / 2);
                const varian = urutan % 3;
                return (
                  <span
                    key={skill}
                    className={`inline-block px-[0.4em] py-[0.08em] text-[15px] ${
                      disorot ? `mark-stabilo mark-stabilo--${varian}` : "text-muted"
                    }`}
                    // Jeda singkat setelah kotak muncul; sela antar goresan dipercepat
                    // agar seluruh stabilo selesai lebih cepat.
                    style={disorot ? { transitionDelay: `${0.25 + urutan * 0.06}s` } : undefined}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
