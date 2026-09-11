import Image from "next/image";
import { SquiggleMark } from "./scribbles";

type Props = {
  className?: string;
  alt: string;
};

export default function HeroPortrait({ className, alt }: Props) {
  return (
    <div className={`relative mx-auto w-full max-w-[360px] ${className ?? ""}`}>
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
        src="/images/foto.png"
        alt={alt}
        width={406}
        height={1100}
        priority
        className="relative z-10 mx-auto h-auto w-[46%]"
      />
      <SquiggleMark className="absolute left-[0%] top-[3%] z-0 h-[14px] w-[86px]" />
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="absolute right-[6%] top-[10%] z-0 h-[20px] w-[20px]"
      >
        <path d="M12 3 L12 21 M3 12 L21 12" stroke="#7CDFCD" strokeWidth={4} strokeLinecap="round" />
      </svg>
      <svg
        viewBox="0 0 20 20"
        aria-hidden="true"
        className="absolute bottom-[10%] left-[2%] z-0 h-[16px] w-[16px]"
      >
        <circle cx="10" cy="10" r="7" stroke="#A4DCFE" strokeWidth={4} fill="none" />
      </svg>
    </div>
  );
}
