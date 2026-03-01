"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        {title}
        <span className="text-primary-400">.</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-primary-700" />
    </motion.div>
  );
}
