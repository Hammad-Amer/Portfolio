"use client";

import { Send, Linkedin, Github, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen relative overflow-hidden pt-16 flex items-center justify-center">
      {/* Glow */}
      <div className="absolute left-1/2 top-[20%] -translate-x-1/2 pointer-events-none">
        <div className="relative">
          <div className="glow-1" style={{ left: -100, top: 0 }} />
          <div className="glow-3" style={{ left: 100, top: -50 }} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-white font-display">
          Let&apos;s Connect
        </h1>
        <p className="mt-4 text-neutral-400 text-lg">
          Feel free to reach out for collaborations, opportunities, or just to say hi.
        </p>

        <a
          href="mailto:hammadamer386@gmail.com"
          className="shine-sweep mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-600 px-6 py-3 text-white transition-transform duration-500 hover:scale-105"
        >
          <Send size={16} />
          <span className="font-display">hammadamer386@gmail.com</span>
        </a>

        <div className="flex justify-center gap-4 mt-10">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/hammad-amer26/", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/Hammad-Amer", label: "GitHub" },
            { icon: Mail, href: "mailto:hammadamer386@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="shine-sweep flex flex-col items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-950/30 px-6 py-4 text-neutral-300 transition-transform duration-500 hover:scale-105 hover:text-white"
            >
              <Icon size={24} strokeWidth={1.5} />
              <span className="text-xs">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
