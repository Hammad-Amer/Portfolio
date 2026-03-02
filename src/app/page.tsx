import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-hidden">
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
    </div>
  );
}
