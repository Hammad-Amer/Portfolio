"use client";

import { motion } from "motion/react";
import { Github, ExternalLink, Folder } from "lucide-react";
import type { Project } from "@/types";
import { itemVariants } from "@/components/animations/StaggerChildren";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/5 bg-surface-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/5"
    >
      {/* Image / Placeholder */}
      <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-surface-100 to-surface-300 overflow-hidden">
        <Folder size={48} className="text-primary-500/20 transition-transform duration-300 group-hover:scale-110" />
        {/* Overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-primary-600/0 transition-all duration-300 group-hover:bg-primary-600/10">
          {project.featured && (
            <span className="absolute top-3 right-3 rounded-full bg-primary-600/90 px-3 py-1 text-xs font-medium text-white">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-primary-400">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-primary-950/50 px-2 py-1 text-xs text-primary-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex items-center gap-3 border-t border-white/5 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-primary-400"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-primary-400"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
