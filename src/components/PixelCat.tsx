import { keJalur } from "./pixelSprite";

// Kucing pixel yang duduk di tepi atas kotak Pengalaman & Kegiatan.
//
// Digambar dari peta karakter, bukan dari berkas gambar, supaya pixelnya tetap
// tajam di semua ukuran layar dan warnanya bisa disesuaikan kapan saja. Bentuk
// bergerak dengan menukar posisi, bukan dengan memutar, karena memutar akan
// merusak kotak-kotak pixelnya.
//
// '#' = hitam tinta, 'o' = hijau mata, '.' = kosong. Baris 0 sampai 12 adalah
// badan, baris 13 ke atas adalah ekor yang menjuntai melewati tepi kotak.

const LEBAR = 14;
const TINGGI = 13;
const SKALA = 3;

const badan = [
  "....#.....#...",
  "...##.....##..",
  "..###.....###.",
  "..###########.",
  "..###########.",
  "..#ooo###ooo#.",
  "..#o#o###o#o#.",
  "..###########.",
  ".#############",
  "##############",
  "##############",
  "##############",
  "##############",
];

// Ekor versi diam, jadi titik pangkal ayunan. Baris paling atas menempel pada
// badan, jadi baris itu tidak pernah bergeser dan sambungannya tidak berlubang.
const ekor = [
  "####..........",
  "####..........",
  ".####.........",
  ".####.........",
  "..####........",
  "..####........",
  "...####.......",
  "...####.......",
  "....###.......",
];

/**
 * Jumlah frame kibasan ekor. Satu putaran penuh dibagi rata ke frame-frame ini
 * supaya gerakannya mengalir seperti animasi sprite, bukan goyangan dua posisi.
 */
const JUMLAH_FRAME = 12;

/** Lama tiap frame dalam detik. Harus cocok dengan durasi di globals.css. */
const DURASI_FRAME = 0.12;

/** Jarak terjauh ujung ekor bergeser, dalam satuan pixel sprite. */
const GESER_MAKS = 2;

function geserBaris(baris: string, geser: number): string {
  if (geser === 0) {
    return baris;
  }
  if (geser > 0) {
    return ".".repeat(geser) + baris.slice(0, LEBAR - geser);
  }
  const jumlah = -geser;
  return baris.slice(jumlah).padEnd(LEBAR, ".");
}

/**
 * Satu frame ekor. Makin ke ujung ekor, makin jauh pergeserannya, jadi
 * kibasannya seperti cambuk dan bukan seperti tongkat yang diputar.
 */
function frameEkor(frame: number): string[] {
  const ayun = Math.sin((2 * Math.PI * frame) / JUMLAH_FRAME) * GESER_MAKS;
  return ekor.map((baris, y) => {
    const kedalaman = y / (ekor.length - 1);
    return geserBaris(baris, Math.round(ayun * kedalaman));
  });
}

export default function PixelCat({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${LEBAR} ${TINGGI + 10}`}
      width={LEBAR * SKALA}
      height={(TINGGI + 10) * SKALA}
      aria-hidden="true"
      focusable="false"
      className={`pixel-cat ${className ?? ""}`}
    >
      <g className="pixel-cat__ekor">
        {Array.from({ length: JUMLAH_FRAME }, (_, frame) => (
          <g
            key={frame}
            className="pixel-cat__ekor-frame"
            style={{ animationDelay: `${(-frame * DURASI_FRAME).toFixed(2)}s` }}
          >
            <path d={keJalur(frameEkor(frame), "#", TINGGI)} fill="#131313" />
          </g>
        ))}
      </g>
      <g className="pixel-cat__badan">
        <path d={keJalur(badan, ["#", "o"])} fill="#131313" />
        <g className="pixel-cat__mata">
          <path d={keJalur(badan, "o")} fill="#A6E22E" />
        </g>
      </g>
    </svg>
  );
}
