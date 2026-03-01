"use client";

import { motion } from "motion/react";
import { Briefcase, Globe } from "lucide-react";
import type { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex gap-6 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary-500 bg-surface-300"
        >
          {experience.type === "work" ? (
            <Briefcase size={16} className="text-primary-400" />
          ) : (
            <Globe size={16} className="text-primary-400" />
          )}
        </motion.div>
        <div className="w-px flex-1 bg-gradient-to-b from-primary-500/50 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex-1 rounded-xl border border-white/5 bg-surface-200/50 p-6 transition-all hover:border-primary-500/20"
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
          <span className="text-sm text-primary-400">{experience.duration}</span>
        </div>
        <p className="mt-1 text-sm text-gray-400">{experience.company}</p>
        <ul className="mt-4 space-y-2">
          {experience.description.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
