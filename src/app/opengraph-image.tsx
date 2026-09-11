import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Zayyan Rizka — Portofolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpengraphImage() {
  const photoBuffer = await readFile(
    path.join(process.cwd(), "public", "images", "foto-final.png")
  );
  // Satori membaca magic bytes dari ArrayBuffer murni; cast hanya untuk TS.
  const photo = photoBuffer.buffer.slice(
    photoBuffer.byteOffset,
    photoBuffer.byteOffset + photoBuffer.byteLength
  ) as unknown as string;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
            width: "760px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#5a6065",
              letterSpacing: 6,
            }}
          >
            PORTOFOLIO
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              color: "#131313",
              marginTop: 16,
            }}
          >
            Zayyan Rizka
          </div>
          <div
            style={{
              display: "flex",
              width: 240,
              height: 14,
              borderRadius: 9999,
              background: "#a4dcfe",
              marginTop: 30,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#5a6065",
              marginTop: 30,
              lineHeight: 1.4,
              maxWidth: 620,
            }}
          >
            Mahasiswa Sistem Informasi yang membangun produk web yang rapi dan
            berguna.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            width: "440px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 150,
              width: 380,
              height: 180,
              borderRadius: 9999,
              background: "#aedffd",
              opacity: 0.55,
              display: "flex",
            }}
          />
          <img
            src={photo}
            width={220}
            height={598}
            style={{ position: "relative", marginBottom: -6 }}
          />
        </div>
      </div>
    ),
    size
  );
}
