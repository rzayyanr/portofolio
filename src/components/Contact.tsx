import { getDictionary, type Locale } from "@/content/dictionary";
import Reveal from "./Reveal";

export default function Contact({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <section id="kontak" className="scroll-mt-24 py-[100px] lg:py-[150px]">
      <div className="container-site text-center">
        <Reveal>
          <h2 className="text-title mx-auto max-w-[640px] text-ink">
            {dict.contact.pre}
            <a
              href={dict.contact.email}
              className="text-ink underline decoration-scribble-blue decoration-4 underline-offset-[6px] transition-colors hover:text-accent"
            >
              {dict.contact.link}
            </a>
          </h2>
          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://github.com/rzayyanr"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] font-semibold text-accent-dark transition-colors hover:text-[#004a94] hover:underline"
            >
              {dict.contact.githubLabel}
            </a>
            <a
              href="https://www.linkedin.com/in/rzayyanr/"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] font-semibold text-accent-dark transition-colors hover:text-[#004a94] hover:underline"
            >
              {dict.contact.linkedinLabel}
            </a>
            <a
              href="https://www.instagram.com/rzayyanr/"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] font-semibold text-accent-dark transition-colors hover:text-[#004a94] hover:underline"
            >
              {dict.contact.instagramLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
