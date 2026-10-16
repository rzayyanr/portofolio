"use client";

import { useParams } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Memilih satu dari dua subtree yang sudah dirender di server berdasarkan locale
 * di URL. Dipakai halaman 404, karena Next tidak mengirim params ke not-found,
 * sementara komponen di sini sengaja tidak mengimpor kamus teks supaya kamus
 * tidak ikut masuk ke bundle klien.
 */
export default function LocaleSwap({ id, en }: { id: ReactNode; en: ReactNode }) {
  const params = useParams<{ locale?: string }>();
  return <>{params?.locale === "en" ? en : id}</>;
}
