/**
 * Alat bersama untuk kucing pixel. Dipakai kucing hitam di bagian Pengalaman &
 * Kegiatan dan kucing putih di kartu kontak, supaya keduanya dibangun dengan
 * aturan yang sama: bentuk dipetakan per sel, pixelnya tetap tajam di semua
 * ukuran layar, dan gerakannya berpindah petak, bukan memutar bentuk (memutar
 * akan merusak kotak-kotak pixelnya).
 */

/** Tanda sel yang dianggap bagian dari bentuk. */
export type IsiSel = (tanda: string) => boolean;

/**
 * Sel yang bersinggungan dengan luar, yaitu atas, bawah, kiri, atau kanannya
 * kosong. Sel seperti ini jadi garis tepi.
 */
export function garisTepi(peta: string[], x: number, y: number, isi: IsiSel): boolean {
  const terisi = (dx: number, dy: number) => {
    const baris = peta[y + dy];
    return baris ? isi(baris[x + dx] ?? " ") : false;
  };
  return !terisi(0, -1) || !terisi(0, 1) || !terisi(-1, 0) || !terisi(1, 0);
}

/**
 * Menyusun sprite jadi peta tanda per sel: tandaTepi untuk sel pinggir, tandaIsi
 * untuk sel dalam, dan sel fitur (mata, hidung, bercak) menimpa keduanya. Sel di
 * luar bentuk jadi spasi, jadi tidak ikut jadi jalur.
 */
export function susunSprite(
  peta: string[],
  isi: IsiSel,
  fitur: Map<string, string> = new Map(),
  tandaTepi = "#",
  tandaIsi = "."
): string[] {
  return peta.map((baris, y) =>
    baris
      .split("")
      .map((tanda, x) => {
        if (!isi(tanda)) return " ";
        const selFitur = fitur.get(`${x},${y}`);
        if (selFitur) return selFitur;
        return garisTepi(peta, x, y, isi) ? tandaTepi : tandaIsi;
      })
      .join("")
  );
}

/**
 * Mengubah peta tanda jadi satu jalur SVG: satu sub-jalur per kelompok sel yang
 * bersebelahan dalam satu baris. Jauh lebih ringkas daripada satu kotak per sel.
 * `kode` boleh beberapa tanda sekaligus kalau keduanya digambar dengan warna
 * yang sama. `geserY` dipakai untuk menempelkan ekor di bawah badan.
 */
export function keJalur(peta: string[], kode: string | string[], geserY = 0): string {
  const kodeSet = new Set(Array.isArray(kode) ? kode : [kode]);
  const bagian: string[] = [];
  peta.forEach((baris, y) => {
    let x = 0;
    while (x < baris.length) {
      if (kodeSet.has(baris[x])) {
        let lebar = 1;
        while (kodeSet.has(baris[x + lebar])) {
          lebar += 1;
        }
        bagian.push(`M${x} ${y + geserY}h${lebar}v1h-${lebar}z`);
        x += lebar;
      } else {
        x += 1;
      }
    }
  });
  return bagian.join("");
}
