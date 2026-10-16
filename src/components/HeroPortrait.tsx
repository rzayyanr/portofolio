import Image from "next/image";

type Props = {
  className?: string;
  alt: string;
};

/**
 * Bingkai coretan tangan yang mencong-mencong, stroke biru identitas situs.
 * Dua hal yang disengaja:
 * 1. Digambar di atas foto (z-20, fotonya z-10) supaya goresannya tidak bisa
 *    terpotong apa pun yang ada di dalam foto.
 * 2. Tingginya 108,9 persen, bukan 106 persen seperti ukuran kotaknya. Goresan
 *    bawah bingkai ini bergelombang dan ujung kanannya naik lebih tinggi dari
 *    bagian tengahnya, jadi tingginya ditentukan dari titik tertinggi itu:
 *    diukur dari ujung kaki, pada 108,5 persen goresan sudah menyentuh kaki
 *    kanan 0,4 px, sedangkan pada 108,9 persen masih tersisa 0,8 px di titik
 *    terdekat. Jadi goresannya mendarat tepat di bawah kaki, terbaca seperti
 *    garis pembatas tempat kaki berpijak, tanpa kakinya menembus bingkai.
 */
function FrameMark() {
  return (
    <svg
      viewBox="0 0 400 480"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className="absolute -left-[6%] -top-[3%] z-20 h-[108.9%] w-[112%]"
    >
      <path
        d="M 22 34 C 70 20 160 13 245 17 C 325 21 380 28 382 58 C 385 118 379 198 383 278 C 386 338 381 408 371 448 C 300 462 178 467 94 459 C 47 454 15 446 17 406 C 21 342 13 242 17 162 C 19 112 15 66 19 36 C 21 26 33 22 47 20"
        stroke="#A4DCFE"
        strokeWidth={4}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function HeroPortrait({ className, alt }: Props) {
  return (
    <div className={`relative mx-auto w-full max-w-[360px] sm:[transform:rotate(-0.8deg)] ${className ?? ""}`}>
      <FrameMark />
      <Image
        src="/images/foto-final.png"
        alt={alt}
        width={491}
        height={1100}
        priority
        className="relative z-10 mx-auto h-auto w-[50%]"
      />
    </div>
  );
}
