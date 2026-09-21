import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { COPY, SITE } from "@/lib/content";
import type { Lang } from "@/lib/lang";
import { PALETTE } from "@/lib/palette";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/* Satori resolves neither Tailwind nor a webfont the browser loaded, so the
   display family is handed to it as bytes. Without this the card came out in
   the renderer's default face: a preview that did not look like the page it
   pointed at. A TTF because satori does not read woff2, which is all
   `next/font` keeps. */
const displayFont = readFileSync(join(process.cwd(), "assets/SpaceGrotesk-Bold.ttf"));

export function ogAlt(lang: Lang) {
  return `${SITE.name} — ${COPY[lang].role}`;
}

export function renderOgCard(lang: Lang) {
  const role = COPY[lang].role.toUpperCase();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: PALETTE.background,
          backgroundImage: `radial-gradient(${PALETTE.dot} 1.2px, transparent 1.2px)`,
          backgroundSize: "24px 24px",
          fontFamily: "Space Grotesk",
          padding: 56,
        }}
      >
        {/* The offset shadow, as a blue block the card sits on top-left of.
            Not `position: absolute`: satori silently drops an absolutely
            positioned empty div, so the site's one signature never reached
            the card. Nesting needs no positioning to work. */}
        <div
          style={{
            display: "flex",
            width: 1088,
            height: 518,
            backgroundColor: PALETTE.primary,
            /* Without these the card stretches to fill the blue block and
               the offset disappears again, which is how the shadow stayed
               invisible through two attempts. */
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 1072,
              height: 502,
              flexGrow: 0,
              flexShrink: 0,
              boxSizing: "border-box",
              backgroundColor: PALETTE.surface,
              border: `6px solid ${PALETTE.ink}`,
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
                  color: PALETTE.ink,
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
                  color: PALETTE.primary,
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
                  color: PALETTE.primary,
                  marginTop: 28,
                }}
              >
                {role}
              </div>
              <div style={{ display: "flex", width: 180, height: 10, backgroundColor: PALETTE.ink, marginTop: 28 }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 22,
                letterSpacing: "2px",
                color: PALETTE.onSurfaceMuted,
              }}
            >
              <div style={{ display: "flex", color: PALETTE.ink, fontWeight: 700 }}>brigagao.dev</div>
              <div style={{ display: "flex" }}>{SITE.location.toUpperCase()}</div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [{ name: "Space Grotesk", data: displayFont, weight: 700, style: "normal" }],
    },
  );
}
