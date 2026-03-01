"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, ExternalLink, Download } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const roles = ["AI/ML Engineer", "Full-Stack Developer", "Problem Solver"];

function useTypingEffect(words: string[], typingSpeed = 100, deletingSpeed = 60, pauseDuration = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}

export default function Hero() {
  const typedText = useTypingEffect(roles);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <AnimatedBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-950/20 via-transparent to-surface-400" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm font-medium tracking-widest text-primary-400 uppercase"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Hammad{" "}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Amer
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 h-8 text-xl text-gray-400 sm:text-2xl"
            >
              <span>{typedText}</span>
              <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-primary-400 h-6 align-middle" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 max-w-lg text-gray-400 lg:max-w-md"
            >
              Software Engineer at the intersection of AI and Full-Stack Development.
              Building end-to-end products from multi-agent ML pipelines to robust web applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-all hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-600/25"
              >
                <ExternalLink size={16} />
                View My Work
              </a>
              <a
                href="/resume/Hammad-Amer-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-500/50 px-6 py-3 font-medium text-primary-400 transition-all hover:bg-primary-500/10"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Profile Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="animate-glow-pulse h-64 w-64 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-800/20 p-1 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-surface-300">
                  <span className="text-5xl font-bold text-primary-400 sm:text-6xl">
                    HA
                  </span>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-primary-500/20" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-gray-500 transition-colors hover:text-primary-400">
          <ArrowDown size={24} className="animate-bounce-slow" />
        </a>
      </motion.div>
    </section>
  );
}
