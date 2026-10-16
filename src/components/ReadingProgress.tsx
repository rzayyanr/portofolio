"use client";

import { useEffect, useRef } from "react";

/**
 * Bilah progres baca di tepi bawah navbar. Lebarnya mengikuti seberapa jauh
 * halaman sudah digulir. Perubahan ditulis langsung ke transform elemen supaya
 * tidak memicu render React pada setiap peristiwa gulir.
 */
export default function ReadingProgress() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.transform = `scaleX(${ratio})`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{ transform: "scaleX(0)" }}
      className="pointer-events-none absolute inset-x-0 bottom-[-1.5px] block h-[3px] origin-left bg-accent"
    />
  );
}
