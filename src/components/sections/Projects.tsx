"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProjectEntry {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  cardColor: string;
  image?: string;
}

interface ProjectsProps {
  limit?: number;
}

const projects: ProjectEntry[] = [
  {
    title: "SpineScan",
    description:
      "AI-powered Lumbar Spine MRI diagnostic tool using YOLOX and timm backbones, achieving 94% multi-label accuracy with Grad-CAM explainability.",
    technologies: ["PyTorch", "YOLOX", "React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Hammad-Amer/SpineScan",
    cardColor: "#60a5fa",
    image: "/images/projects/spinescan.png",
  },
  {
    title: "Multimodal RAG",
    description:
      "Retrieval-Augmented Generation pipeline handling text and image queries from PDFs with LLaMA2, Sentence-BERT and CLIP/BLIP.",
    technologies: ["LLaMA2", "Sentence-BERT", "CLIP", "FAISS", "Flask"],
    githubUrl: "https://github.com/Hammad-Amer/MultiModalRag",
    cardColor: "#a78bfa",
    image: "/images/projects/multimodalrag.png",
  },
  {
    title: "ConnectMe",
    description:
      "Real-time social media Android app with messaging, audio/video calls, stories, and posts. Built with Firebase and FastAPI.",
    technologies: ["Kotlin", "Firebase", "FastAPI", "SQL"],
    githubUrl: "https://github.com/Hammad-Amer/ConnectMe",
    cardColor: "#4ade80",
    image: "/images/projects/connect_me.jpg",
  },
  {
    title: "Autonomous Driving AI",
    description:
      "Self-driving car in TORCS simulator using TensorFlow and behavioral cloning to predict steering from sensor data.",
    technologies: ["Python", "TensorFlow", "Neural Networks"],
    githubUrl: "https://github.com/Hammad-Amer/TORCS-Simulator",
    cardColor: "#fbbf24",
    image: "/images/projects/torcs.jpg",
  },
  {
    title: "Parallel SSSP",
    description:
      "Parallel Single Source Shortest Path algorithm using MPI, OpenMP, and METIS, achieving 10x speedup on large dynamic graphs.",
    technologies: ["C++", "MPI", "OpenMP", "METIS"],
    githubUrl: "https://github.com/Hammad-Amer/Parallel-Single-Shortest-Path-Update",
    cardColor: "#22d3ee",
    image: "/images/projects/parallel-sssp.jpg",
  },
  {
    title: "StitchCraft",
    description:
      "Backend infrastructure and secure RESTful APIs for a custom tailoring marketplace with authentication and order processing.",
    technologies: ["Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Affan-Swati/StitchCraft",
    cardColor: "#fb7185",
  },
];

export default function Projects({ limit }: ProjectsProps = {}) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="relative z-10 pb-16 w-full">
      {/* Side glows */}
      <div className="glow-3 absolute -left-48 top-10 pointer-events-none" />
      <div className="glow-2 absolute -right-56 top-[40%] pointer-events-none" />
      <div className="glow-1 absolute -left-56 bottom-0 pointer-events-none" />

      <div className="mx-auto max-w-3xl px-4 pt-10 md:px-0 md:pt-20">
        <div className="flex items-baseline justify-between mb-5">
          <p className="text-xl font-light text-neutral-300 tracking-widest">
            Projects
          </p>
          <a
            href={limit ? "/projects" : "https://github.com/Hammad-Amer"}
            {...(!limit && { target: "_blank", rel: "noopener noreferrer" })}
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            View More
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950/30"
            >
              {/* Header area — image or colored gradient */}
              <div
                className="relative h-44 flex items-end p-4"
                style={
                  project.image
                    ? { backgroundColor: "#0a0a0a" }
                    : {
                        background: `linear-gradient(135deg, ${project.cardColor}15 0%, ${project.cardColor}30 100%)`,
                        borderBottom: `1px solid ${project.cardColor}25`,
                      }
                }
              >
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="relative z-10 text-lg font-semibold font-display text-white drop-shadow-lg">
                      {project.title}
                    </span>
                  </>
                ) : (
                  <span
                    className="text-lg font-semibold font-display"
                    style={{ color: project.cardColor }}
                  >
                    {project.title}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">{project.title}</h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine-sweep flex items-center gap-1 rounded-full border border-neutral-600 px-3 py-1 text-xs text-white transition-transform duration-500 hover:scale-105"
                  >
                    Discover <ArrowRight size={12} />
                  </a>
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-neutral-900 border border-neutral-700 px-2 py-0.5 text-[11px] text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
