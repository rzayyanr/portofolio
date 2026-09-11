import { getDictionary, type Locale } from "@/content/dictionary";
import { TealDoodle } from "./scribbles";
import Reveal from "./Reveal";

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
            <ul className="mt-4 space-y-4">
              {dict.about.activities.map((activity) => (
                <li key={activity.name} className="rounded-2xl bg-btn px-5 py-4">
                  <p className="font-semibold text-ink">{activity.name}</p>
                  <p className="mt-1 text-[14px] text-muted">{activity.note}</p>
                </li>
              ))}
            </ul>
            <h3 className="mt-10 text-[17px] font-bold text-ink">{dict.about.skillsTitle}</h3>
            <p className="text-desc mt-3 text-muted">{dict.about.skills.join(" · ")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
