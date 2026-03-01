"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import StaggerContainer from "@/components/animations/StaggerChildren";
import { projects } from "@/data/projects";

const filters = [
  { label: "All", value: "all" },
  { label: "AI/ML", value: "ai-ml" },
  { label: "Web", value: "web" },
  { label: "Systems", value: "systems" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <Section id="projects" className="bg-surface-500/50">
      <SectionHeading
        title="Projects"
        subtitle="A selection of projects I've built"
      />

      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              activeFilter === filter.value
                ? "bg-primary-600 text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <AnimatePresence mode="wait">
        <StaggerContainer
          key={activeFilter}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StaggerContainer>
      </AnimatePresence>
    </Section>
  );
}
