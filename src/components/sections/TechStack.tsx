"use client";

const techs = [
  "Python", "C++", "TypeScript", "JavaScript", "Java", "Kotlin", "SQL",
  "PyTorch", "TensorFlow", "Scikit-learn", "LangChain",
  "React", "Next.js", "Node.js", "Express",
  "Tailwind CSS", "MongoDB", "MySQL", "Firebase",
  "Docker", "AWS", "Azure", "Git", "Linux",
];

export default function TechStack() {
  return (
    <section id="techstack" className="relative z-10 w-full">
      {/* Side glows */}
      <div className="glow-2 absolute -right-48 top-0 pointer-events-none" />
      <div className="glow-1 absolute -left-56 bottom-0 pointer-events-none" />

      <div className="mx-auto max-w-3xl px-4 pt-10 md:px-0 md:pt-20 animate-fade-up" style={{ animationDelay: "300ms" }}>
        <p className="text-xl font-light text-neutral-300 mb-5 tracking-widest text-left">
          Tech Stack
        </p>

        <div className="flex flex-wrap gap-2 items-center">
          {techs.map((tech) => (
            <div
              key={tech}
              className="flex items-center p-2 bg-neutral-950/50 rounded-xl border border-neutral-800"
            >
              <p className="ml-1 mr-1 text-sm text-neutral-300">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
