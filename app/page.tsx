import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Ecosystem } from "@/components/sections/ecosystem";
import { AiAgents } from "@/components/sections/ai-agents";
import { TechStack } from "@/components/sections/tech-stack";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ecosystem />
      <AiAgents />
      <TechStack />
      <Footer />
    </main>
  );
}
