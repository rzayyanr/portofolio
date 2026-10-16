import { getDictionary, type Locale } from "@/content/dictionary";
import { OvalMark, SquiggleMark } from "./scribbles";
import HeroPortrait from "./HeroPortrait";
import Reveal from "./Reveal";
import { Fragment, type CSSProperties, type ReactNode } from "react";

type Bagian =
  | { jenis: "teks"; isi: string }
  | { jenis: "tautan"; href: string; label: string; luar: boolean };

type Token = { isi: ReactNode; teks: string; kunci: string };

/**
 * Memecah paragraf hero jadi kata-kata yang naik satu per satu dari balik garis
 * dasarnya, sejalur dengan goresan nama dan peran di atasnya: nomor urut tiap
 * kata dipakai menghitung jeda lewat --i, jadi kedatangannya beruntun dari kiri
 * ke kanan. Tautan tetap utuh sebagai satu unit supaya bisa diklik. Teksnya cuma
 * dibungkus, bukan dipotong, jadi tetap terbaca utuh oleh pembaca layar maupun
 * saat disalin.
 */
function kataNaik(bagian: Bagian[]): ReactNode[] {
  const tokens: Token[] = [];

  bagian.forEach((potongan, indeks) => {
    if (potongan.jenis === "tautan") {
      tokens.push({
        isi: (
          <a
            href={potongan.href}
            target={potongan.luar ? "_blank" : undefined}
            rel={potongan.luar ? "noreferrer" : undefined}
            className="text-accent-dark underline decoration-scribble-blue decoration-2 underline-offset-4 transition-colors hover:text-[#004a94]"
          >
            {potongan.label}
          </a>
        ),
        teks: potongan.label,
        kunci: `tautan-${indeks}`,
      });
      return;
    }
    potongan.isi
      .split(" ")
      .filter(Boolean)
      .forEach((kata, urutanKata) =>
        tokens.push({ isi: kata, teks: kata, kunci: `kata-${indeks}-${urutanKata}` })
      );
  });

  // Tanda baca yang mengawali potongan berikutnya (", atau") tidak boleh
  // didahului spasi, jadi spasi hanya dipasang saat memang perlu. Spasinya
  // sengaja di luar wadah kata: spasi di dalam wadah yang ber-overflow
  // tersembunyi akan dibuang browser karena dianggap awal baris, dan kata-kata
  // jadi menempel.
  return tokens.map((token, nomor) => {
    const perluSpasi = nomor > 0 && !/^[,.;:!?)\]]/.test(token.teks);
    return (
      <Fragment key={token.kunci}>
        {perluSpasi ? " " : null}
        <span className="kata" style={{ "--i": nomor } as CSSProperties}>
          <span className="kata-isi">{token.isi}</span>
        </span>
      </Fragment>
    );
  });
}

export default function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { paragraphLinks } = dict.hero;
  const paragraf = kataNaik([
    { jenis: "teks", isi: dict.hero.paragraphLead },
    { jenis: "teks", isi: paragraphLinks.pre },
    { jenis: "tautan", href: "https://github.com/rzayyanr", label: paragraphLinks.github, luar: true },
    { jenis: "teks", isi: paragraphLinks.mid },
    {
      jenis: "tautan",
      href: "https://www.linkedin.com/in/rzayyanr/",
      label: paragraphLinks.linkedin,
      luar: true,
    },
    { jenis: "teks", isi: paragraphLinks.mid2 },
    { jenis: "tautan", href: dict.contact.email, label: paragraphLinks.email, luar: false },
    { jenis: "teks", isi: paragraphLinks.post },
  ]);
  return (
    <section id="beranda" className="flex min-h-[76vh] items-center py-16 lg:min-h-[82vh] lg:py-24">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-8">
          {/* Nama jadi judul, peran menyusul di baris bawahnya. Kalimat panjang
              yang lama dihapus karena ujungnya cuma klaim umum. Label kecil di
              atas nama menegaskan bahwa ini nama orang, bukan judul halaman. */}
          <p className="text-[15px] font-semibold tracking-[0.02em] text-muted">
            {dict.hero.nameLabel}
          </p>
          <h1 className="text-hero mt-10 text-ink">
            {/* Nama lengkap dalam satu baris, dilingkari utuh dengan oval yang
                sengaja dilebihkan dari kotak katanya supaya tidak mepet. */}
            <span className="relative inline-block">
              {dict.hero.name}
              <OvalMark
                animated
                className="absolute -left-[9%] -top-[52%] -z-10 h-[205%] w-[118%]"
              />
            </span>
          </h1>
          <p className="text-lead relative mt-12 inline-block font-semibold text-ink/80">
            <SquiggleMark
              drawOnLoad
              className="absolute -bottom-[5px] left-0 -z-10 h-[12px] w-full"
            />
            {dict.hero.role}
          </p>
          <p className="text-lead mt-8 max-w-[470px] text-body">{paragraf}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#proyek"
              style={{ "--i": 0 } as CSSProperties}
              className="tombol-hero rounded-full bg-btn px-7 py-3.5 text-[17px] font-bold text-ink transition-colors hover:bg-btn-hover"
            >
              {dict.hero.ctaProjects}
            </a>
            <a
              href="/cv.pdf"
              download
              style={{ "--i": 1 } as CSSProperties}
              className="tombol-hero rounded-full border-2 border-ink/15 px-7 py-3.5 text-[17px] font-bold text-ink transition-colors hover:border-ink/40 hover:bg-btn"
            >
              {dict.hero.ctaCv}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-4">
          <HeroPortrait className="mt-4" alt={dict.hero.portraitAlt} />
        </Reveal>
      </div>
    </section>
  );
}
