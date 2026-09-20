import { ImageResponse } from "next/og";

export const alt = "Felipe Brigagão — Desenvolvedor fullstack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Same vocabulary as the page: dot-grid surface, black-bordered card, blue
   offset shadow (satori has no box-shadow, so the shadow is a rectangle
   painted under the card). */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#f8fafc",
          backgroundImage: "radial-gradient(#cbd5e1 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
          padding: 56,
        }}
      >
        <div style={{ display: "flex", position: "relative", width: 1088, height: 518 }}>
          <div
            style={{
              display: "flex",
              position: "absolute",
              left: 16,
              top: 16,
              width: 1072,
              height: 502,
              backgroundColor: "#0038FF",
            }}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              left: 0,
              top: 0,
              width: 1088,
              height: 518,
              backgroundColor: "#ffffff",
              border: "6px solid #0d0f14",
              padding: 56,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 108,
                  fontWeight: 800,
                  letterSpacing: "-3px",
                  lineHeight: 1.02,
                  color: "#0d0f14",
                }}
              >
                FELIPE
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 108,
                  fontWeight: 800,
                  letterSpacing: "-3px",
                  lineHeight: 1.02,
                  color: "#0038FF",
                }}
              >
                BRIGAGÃO
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 33,
                  fontWeight: 700,
                  letterSpacing: "1px",
                  color: "#0038FF",
                  marginTop: 28,
                }}
              >
                DESENVOLVEDOR FULLSTACK
              </div>
              <div style={{ display: "flex", width: 180, height: 10, backgroundColor: "#0d0f14", marginTop: 28 }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 22,
                letterSpacing: "2px",
                color: "#475569",
              }}
            >
              <div style={{ display: "flex", color: "#0d0f14", fontWeight: 700 }}>brigagao.dev</div>
              <div style={{ display: "flex" }}>JACAREÍ, SP — BRASIL</div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
