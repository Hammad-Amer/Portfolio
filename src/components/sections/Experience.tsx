"use client";

import Image from "next/image";

const experiences = [
  {
    date: "Jun 2025 — Sep 2025",
    company: "Code Generation",
    position: "AI/ML Developer Intern",
    description:
      "Architected an automated Financial Data Parser using multi-agent architectures and genetic algorithms. Owned end-to-end ML model integration into production software.",
    image: "/images/experience/codegeneration.jpg",
  },
  {
    date: "May 2023 — Feb 2024",
    company: "Fiverr",
    position: "Freelance Technical Consultant",
    description:
      "Provided technical consulting improving website performance and search visibility through infrastructure audits, technical SEO optimizations, and performance tuning.",
    image: "/images/experience/fiverr.jpg",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 w-full">
      {/* Side glows */}
      <div className="glow-1 absolute -left-48 top-0 pointer-events-none" />
      <div className="glow-3 absolute -right-56 top-20 pointer-events-none" />

      <div className="mx-auto max-w-3xl px-4 pt-10 md:px-0 md:pt-20 animate-fade-up" style={{ animationDelay: "600ms" }}>
        <p className="mb-5 text-left text-xl font-light tracking-widest text-neutral-300">
          Experience
        </p>

        {/* Timeline */}
        <div className="rounded-lg border border-neutral-700">
          <ul className="ml-10 list-none border-l border-neutral-600">
            {experiences.map((exp, i) => (
              <li key={i} className="relative ml-10 py-4 pr-4">
                {/* Company logo */}
                <div className="absolute -left-16 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-1 text-white">
                  <time className="text-xs text-gray-400">{exp.date}</time>
                  <h2 className="font-semibold leading-none">{exp.company}</h2>
                  <p className="text-sm text-gray-400">{exp.position}</p>
                  <p className="text-sm text-neutral-300 mt-1">{exp.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
