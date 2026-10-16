type MarkProps = {
  className?: string;
};

type AnimatedMarkProps = MarkProps & {
  /** Bila true, goresan menggambar sendiri mengikuti animasi di globals.css. */
  animated?: boolean;
  /** Bila true, dipakai bentuk yang sisi atas-bawahnya lebih rata. Bentuk ini
   *  untuk melingkari blok teks yang lebar: lonjong penuh akan turun tepat di
   *  sudut huruf dan memotongnya. */
  wide?: boolean;
};

const JALUR_OVAL =
  "M 387 45 C 387 63.2, 303.2 78, 200 78 C 96.8 78, 13 63.2, 13 45 C 13 26.8, 96.8 12, 200 12 C 303.2 12, 387 26.8, 387 45 Z";

const JALUR_LEBAR =
  "M 30 9 C 60 6, 130 5, 200 6 C 280 7, 350 6, 372 9 C 382 11, 386 16, 386 24 C 386 42, 385 60, 384 70 C 383 78, 378 82, 368 83 C 300 85, 120 85, 34 83 C 22 82, 16 78, 15 70 C 14 58, 15 34, 16 24 C 17 15, 22 11, 30 9 Z";

export function OvalMark({ className, animated = false, wide = false }: AnimatedMarkProps) {
  return (
    <svg
      viewBox="0 0 400 90"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={`${animated ? "oval-draw " : ""}${className ?? ""}`}
    >
      <path
        d={wide ? JALUR_LEBAR : JALUR_OVAL}
        stroke="#A4DCFE"
        strokeWidth={4}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        pathLength={animated ? 1 : undefined}
      />
    </svg>
  );
}

type SquiggleProps = MarkProps & {
  /** Bila true, garis menggambar sendiri saat induk .group di-hover. */
  animated?: boolean;
  /** Bila true, garis menggambar sendiri begitu halaman dibuka atau di-refresh,
   *  seperti stabilo yang ditarik dari kiri ke kanan. */
  drawOnLoad?: boolean;
};

export function SquiggleMark({ className, animated = false, drawOnLoad = false }: SquiggleProps) {
  // pathLength hanya berguna kalau salah satu animasi goresan menyala: keduanya
  // memakai satuan panjang 1 supaya dasharray bisa ditulis dalam pecahan jalur.
  const menggambar = animated || drawOnLoad;
  return (
    <svg
      viewBox="0 0 250 22"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={`${animated ? "squiggle-draw " : ""}${drawOnLoad ? "squiggle-load " : ""}${className ?? ""}`}
    >
      <path
        d="M4 13 C18 5 30 19 46 12 C62 5 74 18 90 11 C106 4 118 17 134 11 C150 5 162 17 178 11 C194 5 206 16 222 10 C232 6 240 12 246 9"
        stroke="#FF9595"
        strokeWidth={4}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        pathLength={menggambar ? 1 : undefined}
      />
    </svg>
  );
}

export function TealDoodle({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 130 60" fill="none" aria-hidden="true" className={className}>
      <path
        d="M10 42 C28 18 44 10 42 26 C40 42 58 14 64 28 C70 42 80 18 88 30 C94 40 104 22 112 28 C118 33 122 26 124 22"
        stroke="#7CDFCD"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <circle cx="117" cy="46" r="3" fill="#7CDFCD" />
    </svg>
  );
}
