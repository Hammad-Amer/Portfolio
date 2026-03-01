"use client";

import { motion } from "motion/react";
import { Code2, Award, Layers } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

const stats = [
  { icon: Layers, value: "7+", label: "Projects" },
  { icon: Award, value: "2x", label: "Dean's List" },
  { icon: Code2, value: "15+", label: "Technologies" },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        title="About Me"
        subtitle="A brief introduction to who I am and what I do"
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Photo side */}
        <FadeInWhenVisible direction="left">
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-72 w-72 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-800/20 p-1 sm:h-80 sm:w-80">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-surface-200">
                  <span className="text-5xl font-bold text-primary-400/50">
                    HA
                  </span>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl border-2 border-primary-500/20" />
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-2xl bg-primary-600/10" />
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Text side */}
        <FadeInWhenVisible direction="right">
          <div className="space-y-5">
            <p className="leading-relaxed text-gray-300">
              I&apos;m a <span className="text-primary-400 font-medium">Computer Science</span> student
              at FAST National University (NUCES), Islamabad, graduating in 2026. My passion lies at the
              intersection of <span className="text-primary-400 font-medium">Artificial Intelligence</span> and
              <span className="text-primary-400 font-medium"> Full-Stack Development</span>.
            </p>
            <p className="leading-relaxed text-gray-400">
              I specialize in deploying PyTorch models within scalable MERN architectures, building
              end-to-end products from multi-agent ML pipelines to robust, user-facing web and mobile
              applications. I&apos;ve worked on everything from medical AI diagnostics to real-time
              social platforms.
            </p>
            <p className="leading-relaxed text-gray-400">
              When I&apos;m not coding, I&apos;m exploring new ML research papers, contributing to
              open-source projects, or diving into high-performance computing challenges.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-xl border border-white/5 bg-surface-200/50 p-6 text-center transition-all hover:border-primary-500/30"
          >
            <stat.icon
              size={24}
              className="mx-auto mb-3 text-primary-400 transition-transform group-hover:scale-110"
            />
            <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
