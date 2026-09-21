import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

/* Self-hosted by the framework: no stylesheet is fetched at runtime. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const fontClassNames = `${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`;
