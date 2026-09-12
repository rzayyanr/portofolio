import { getDictionary, type Locale } from "@/content/dictionary";
import { TealDoodle } from "./scribbles";
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
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="space-y-6">
            {dict.about.story.map((paragraph, index) => (
              <p key={index} className="text-desc text-muted">
                {paragraph}
              </p>
            ))}
            <div className="pt-2">
              <h3 className="text-[17px] font-bold text-ink">{dict.about.howTitle}</h3>
              <p className="text-desc mt-3 text-muted">{dict.about.how}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-[17px] font-bold text-ink">{dict.about.activitiesTitle}</h3>
            <div className="relative mt-5">
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
                        className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-scribble-blue bg-white text-ink transition-transform duration-200 group-hover:scale-125"
                      >
                        {activityIcons[activity.icon]}
                      </span>
                      <div className="pt-0.5 transition-transform duration-200 group-hover:translate-x-1">
                        <p className="font-semibold text-ink">{activity.name}</p>
                        <p className="mt-1 text-[14px] leading-relaxed text-muted">{activity.note}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <h3 className="mt-10 text-[17px] font-bold text-ink">{dict.about.skillsTitle}</h3>
            <p className="text-desc mt-3 text-muted">{dict.about.skills.join(" · ")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
