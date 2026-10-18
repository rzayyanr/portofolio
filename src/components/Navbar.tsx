import { archivePath, getDictionary, localizePath, type Locale } from "@/content/dictionary";
import ReadingProgress from "./ReadingProgress";

function GithubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export default function Navbar({
  locale,
  activePage,
  path = "",
}: {
  locale: Locale;
  activePage?: "archive";
  /** Sisa path setelah prefix locale, supaya tombol bahasa tetap di halaman yang sama. */
  path?: string;
}) {
  const dict = getDictionary(locale);
  const other: Locale = locale === "id" ? "en" : "id";
  return (
    <>
      <a href="#main-content" className="skip-link">{dict.nav.skipToContent}</a>
      <header className="sticky top-0 z-30 border-b-[1.5px] border-ink bg-white/85 backdrop-blur-md">
      <div className="container-site flex flex-col gap-2 py-3 sm:h-[76px] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
        <a
          href={`/${locale}`}
          className="text-[23px] font-bold tracking-tight text-ink lg:text-[32px]"
        >
          {dict.nav.name}
        </a>
        <nav aria-label={dict.nav.menuAria} className="flex items-center gap-3 sm:gap-5">
          <a
            href={archivePath(locale)}
            className={
              activePage === "archive"
                ? "text-[15px] font-semibold text-accent-dark underline decoration-scribble-blue decoration-2 underline-offset-4"
                : "text-[15px] font-semibold text-ink transition-colors hover:text-accent-dark"
            }
          >
            {dict.nav.projects}
          </a>
          <a
            href="https://github.com/rzayyanr"
            target="_blank"
            rel="noreferrer"
            aria-label={dict.nav.githubAria}
            className="flex h-11 w-11 shrink-0 items-center justify-center text-ink transition-colors hover:text-accent sm:h-auto sm:w-auto sm:p-1"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/rzayyanr/"
            target="_blank"
            rel="noreferrer"
            aria-label={dict.nav.linkedinAria}
            className="flex h-11 w-11 shrink-0 items-center justify-center text-ink transition-colors hover:text-accent sm:h-auto sm:w-auto sm:p-1"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://www.instagram.com/rzayyanr/"
            target="_blank"
            rel="noreferrer"
            aria-label={dict.nav.instagramAria}
            className="flex h-11 w-11 shrink-0 items-center justify-center text-ink transition-colors hover:text-accent sm:h-auto sm:w-auto sm:p-1"
          >
            <InstagramIcon />
          </a>
          <a
            href={localizePath(locale, other, path)}
            lang={other}
            aria-label={`${dict.nav.toLang} · ${dict.nav.toLangAria}`}
            className="rounded-full border-2 border-ink/10 px-3.5 py-1.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {dict.nav.toLang}
          </a>
        </nav>
        </div>
        <ReadingProgress />
      </header>
    </>
  );
}
