import { ImageResponse } from "next/og";

export const alt = "Laju — Semua Kebutuhan, Satu Aplikasi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#101418",
          color: "#ffffff",
          gap: 48,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 104,
              height: 104,
              borderRadius: 30,
              background: "#c8f135",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="58" height="58" viewBox="0 0 24 24" fill="#131511">
              <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2z" />
            </svg>
          </div>
          <div
            style={{
              fontSize: 108,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#ffffff",
            }}
          >
            Laju
          </div>
        </div>
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: "#c8f135",
          }}
        >
          Semua kebutuhan, satu aplikasi.
        </div>
      </div>
    ),
    { ...size },
  );
}
