"use client";

import { motion } from "motion/react";
import { itemVariants } from "@/components/animations/StaggerChildren";

interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.span
      variants={itemVariants}
      className="inline-flex items-center rounded-lg border-l-2 border-primary-500/50 bg-surface-100 px-3 py-2 text-sm text-gray-300 transition-all hover:border-primary-400 hover:bg-surface-50 hover:text-white hover:shadow-md hover:shadow-primary-500/5"
    >
      {name}
    </motion.span>
  );
}
