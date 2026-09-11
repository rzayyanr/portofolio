import { ImageResponse } from "next/og";

export const alt = "Zayyan Rizka — Portofolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          color: "#131313",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, color: "#5a6065", display: "flex" }}>Portofolio</div>
        <div style={{ fontSize: 92, fontWeight: 700, display: "flex", marginTop: 12 }}>
          Zayyan Rizka
        </div>
        <div style={{ fontSize: 36, color: "#5a6065", display: "flex", marginTop: 20, maxWidth: 900 }}>
          Mahasiswa Sistem Informasi yang membangun produk web yang rapi dan berguna.
        </div>
        <div
          style={{
            width: 240,
            height: 12,
            borderRadius: 9999,
            background: "#a4dcfe",
            marginTop: 40,
            display: "flex",
          }}
        />
      </div>
    ),
    size
  );
}
