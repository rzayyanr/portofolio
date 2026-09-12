import Image from "next/image";

type Props = {
  className?: string;
  alt: string;
};

/** Bingkai coretan tangan yang mencong-mencong, stroke biru identitas situs. */
function FrameMark() {
  return (
    <svg
      viewBox="0 0 400 480"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className="absolute -left-[6%] -top-[3%] -z-10 h-[106%] w-[112%]"
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
    <div className={`relative mx-auto w-full max-w-[360px] ${className ?? ""}`}>
      <FrameMark />
      <svg
        viewBox="0 0 400 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute -left-[4%] top-[36%] -z-10 h-[42%] w-[108%]"
      >
        <path
          d="M14 52 C10 26 96 8 208 10 C310 12 388 26 386 48 C384 70 300 84 186 82 C88 80 18 68 16 48 C14 32 74 20 150 16"
          fill="#AEDFFD"
          fillOpacity="0.55"
        />
      </svg>
      <div
        aria-hidden="true"
        className="absolute -bottom-[4px] left-1/2 z-0 h-[18px] w-[72%] -translate-x-1/2 rounded-full bg-[#F4F7F9]"
      />
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
