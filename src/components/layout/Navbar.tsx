"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-8 py-5 backdrop-blur-sm bg-black/20">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`text-sm transition-colors ${
            pathname === link.href
              ? "text-white"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          {link.label}
        </Link>
      ))}
      <a
        href="/resume/Hammad-Amer-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-full border border-neutral-600 px-3 py-1.5 text-xs text-neutral-300 transition-all hover:text-white hover:border-neutral-400"
      >
        <FileText size={13} />
        Resume
      </a>
    </nav>
  );
}
