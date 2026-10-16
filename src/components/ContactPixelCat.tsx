import { keJalur, susunSprite, type IsiSel } from "./pixelSprite";

/**
 * Kucing pixel putih di sudut atas kotak kontak.
 *
 * Digambar dari peta sel, sama seperti kucing hitam di bagian Pengalaman &
 * Kegiatan, dan siluetnya memang diambil dari kucing hitam supaya keduanya
 * terlihat sekeluarga: yang membedakan hanya warnanya. Garis tepi hitamnya
 * dihitung otomatis dari sel pinggir, jadi bentuknya tetap terbaca di atas
 * kertas putih, dan gerakannya menukar lapisan mata, bukan memutar bentuk.
 *
 * '1' = bagian bentuk, '#' = garis tepi, '.' = isi putih, 'm' = mata,
 * 'p' = pink (hidung dan dalaman telinga), 's' = abu muda (bercak dada).
 */

const LEBAR = 14;
const TINGGI = 13;

/** Skala 3 sama dengan kucing hitam: 3 pixel layar per sel. */
const SKALA = 3;

const SILUET = [
  "....1....1....",
  "...11.....11..",
  "..111.....111.",
  "..11111111111.",
  "..11111111111.",
  "..11111111111.",
  "..11111111111.",
  "..11111111111.",
  ".1111111111111",
  "11111111111111",
  "11111111111111",
  "11111111111111",
  "11111111111111",
];

const WARNA: Record<string, string> = {
  "#": "#131313",
  ".": "#ffffff",
  m: "#131313",
  p: "#e8758a",
  s: "#e8ebee",
};

const terisi: IsiSel = (tanda) => tanda === "1";

/** Sel fitur yang selalu ada, sama untuk kedua lapisan mata. */
const fiturTetap: [string, string][] = [
  ["6,7", "p"], ["7,7", "p"],
  ["3,2", "p"], ["11,2", "p"],
  ["6,9", "s"], ["7,9", "s"], ["6,10", "s"], ["7,10", "s"],
];

/** Mata terbuka: dua blok dua kali dua sel. */
const wajah = new Map<string, string>([
  ...fiturTetap,
  ["4,5", "m"], ["5,5", "m"], ["4,6", "m"], ["5,6", "m"],
  ["9,5", "m"], ["10,5", "m"], ["9,6", "m"], ["10,6", "m"],
]);

/** Mata terpejam: satu baris dua sel di baris bawah mata. */
const wajahTutup = new Map<string, string>([
  ...fiturTetap,
  ["4,6", "m"], ["5,6", "m"],
  ["9,6", "m"], ["10,6", "m"],
]);

const spriteDasar = susunSprite(SILUET, terisi, wajah);
const jalurDasar = ["#", ".", "p", "s"].map((kode) => ({ kode, d: keJalur(spriteDasar, kode) }));
const jalurMataBuka = keJalur(susunSprite(SILUET, terisi, wajah), "m");
const jalurMataTutup = keJalur(susunSprite(SILUET, terisi, wajahTutup), "m");

export default function ContactPixelCat({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${LEBAR} ${TINGGI}`}
      width={LEBAR * SKALA}
      height={TINGGI * SKALA}
      aria-hidden="true"
      focusable="false"
      shapeRendering="crispEdges"
      className={`contact-pixel-cat ${className ?? ""}`}
    >
      {jalurDasar.map((jalur) => (
        <path key={jalur.kode} d={jalur.d} fill={WARNA[jalur.kode]} />
      ))}
      <g className="contact-pixel-cat__mata-buka">
        <path d={jalurMataBuka} fill={WARNA.m} />
      </g>
      <g className="contact-pixel-cat__mata-tutup">
        <path d={jalurMataTutup} fill={WARNA.m} />
      </g>
    </svg>
  );
}
