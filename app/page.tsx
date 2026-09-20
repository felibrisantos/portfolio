import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Research } from "@/components/research";
import { About } from "@/components/about";
import { StackSection } from "@/components/stack";
import { Contact } from "@/components/contact";
import { MainShell } from "@/components/main-shell";
import { SiteFooter } from "@/components/site-footer";

/* Server composition. Each section owns its own "use client" boundary; the
   footer and this page never ship to the browser. */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <MainShell>
        <div className="w-full max-w-[1360px] mx-auto px-4 md:px-8 py-2 md:py-10 space-y-14 md:space-y-24">
          <Hero />
          <Work />
          <Research />
          <About />
          <StackSection />
          <Contact />
        </div>
      </MainShell>
      <SiteFooter />
    </>
  );
}
