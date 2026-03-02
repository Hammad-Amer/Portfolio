"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-neutral-800 bg-neutral-950/50">
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-0">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0">
          {/* Big name */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-semibold text-white font-display leading-tight">
              Hammad
              <br />
              Amer.
            </h2>
          </div>

          {/* Columns */}
          <div className="flex gap-16">
            <div>
              <h3 className="text-sm font-medium text-neutral-400 mb-3">Explore</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-neutral-500 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-neutral-500 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/projects" className="text-neutral-500 hover:text-white transition-colors">Projects</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-neutral-400 mb-3">Let&apos;s Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hammadamer386@gmail.com" className="text-neutral-500 hover:text-white transition-colors">Email</a></li>
                <li><a href="https://www.linkedin.com/in/hammad-amer26/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/Hammad-Amer" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()}</p>
          <p>Hammad Amer.</p>
        </div>
      </div>
    </footer>
  );
}
