"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-surface-500 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <a
              href="#"
              className="text-xl font-bold text-white transition-colors hover:text-primary-400"
            >
              Hammad Amer<span className="text-primary-400">.</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              AI/ML & Full-Stack Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Hammad-Amer"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-gray-400 transition-all hover:bg-white/5 hover:text-primary-400"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hammad-amer-ch"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-gray-400 transition-all hover:bg-white/5 hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hammadamer386@gmail.com"
              className="rounded-lg p-2 text-gray-400 transition-all hover:bg-white/5 hover:text-primary-400"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="rounded-lg border border-white/10 p-2 text-gray-400 transition-all hover:border-primary-500/50 hover:text-primary-400"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Hammad Amer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
