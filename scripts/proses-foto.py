"""Proses foto hero: crop setengah badan + hapus latar belakang.

Pemakaian:
    python scripts/proses-foto.py [sumber] [tujuan]

Default sumber: IMG_4890.JPG (foto Zayyan) di folder Downloads.
Output: PNG transparan siap web (tinggi maks 1100px).
Butuh: pillow, rembg (pip install pillow rembg)
"""

import sys
from pathlib import Path

from PIL import Image, ImageOps
from rembg import new_session, remove

SOURCE = Path(sys.argv[1]) if len(sys.argv) > 1 else Path.home() / "Downloads" / "IMG_4890.JPG"
TARGET = Path(sys.argv[2]) if len(sys.argv) > 2 else Path(__file__).parent.parent / "public" / "images" / "foto.png"
CROP_FRACTION = float(sys.argv[3]) if len(sys.argv) > 3 else 0.55  # 0.55=setengah badan; 0.74=sampai bawah lutut
MAX_HEIGHT = 1100
PAD = 8

def main() -> None:
    image = ImageOps.exif_transpose(Image.open(SOURCE))
    has_alpha = image.mode in ("RGBA", "LA") or (
        image.mode == "P" and "transparency" in image.info
    )

    if has_alpha:
        # Foto sudah cutout (berlatar transparan) — lewati crop & penghapusan latar.
        print(f"Sumber: {SOURCE} ({image.size[0]}x{image.size[1]}, sudah transparan)")
        cutout = image
    else:
        image = image.convert("RGB")
        width, height = image.size
        print(f"Sumber: {SOURCE} ({width}x{height})")
        half_body = image.crop((0, 0, width, int(height * CROP_FRACTION)))
        print(f"Crop setengah badan: {half_body.size[0]}x{half_body.size[1]}")
        session = new_session("u2net")
        cutout = remove(half_body, session=session)

    box = cutout.getbbox()
    if box:
        left, top, right, bottom = box
        cutout = cutout.crop(
            (
                max(0, left - PAD),
                max(0, top - PAD),
                min(cutout.width, right + PAD),
                min(cutout.height, bottom + PAD),
            )
        )

    if cutout.height > MAX_HEIGHT:
        ratio = MAX_HEIGHT / cutout.height
        cutout = cutout.resize(
            (round(cutout.width * ratio), MAX_HEIGHT), Image.LANCZOS
        )

    TARGET.parent.mkdir(parents=True, exist_ok=True)
    cutout.save(TARGET)
    print(f"Selesai: {TARGET} ({cutout.size[0]}x{cutout.size[1]})")

if __name__ == "__main__":
    main()
