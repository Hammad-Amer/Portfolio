"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface-300/80 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a
            href="#"
            className="text-xl font-bold text-white transition-colors hover:text-primary-400"
          >
            HA<span className="text-primary-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  activeSection === link.href
                    ? "text-primary-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume/Hammad-Amer-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-500/50 px-4 py-2 text-sm text-primary-400 transition-all hover:bg-primary-500/10"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-400 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-surface-400/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-gray-300 transition-colors hover:text-primary-400"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume/Hammad-Amer-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-primary-500/50 px-6 py-3 text-primary-400 transition-all hover:bg-primary-500/10"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
