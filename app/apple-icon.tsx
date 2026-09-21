import { ImageResponse } from "next/og";
import { PALETTE } from "@/lib/palette";

/* A .tsx, not the .svg that used to sit here: the framework only accepts
   png/jpg (or a generator) under this name, so the SVG produced no route at
   all and no `apple-touch-icon` link was ever emitted. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: PALETTE.primary,
          color: "#ffffff",
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: "-2px",
        }}
      >
        FB
      </div>
    ),
    { ...size },
  );
}
