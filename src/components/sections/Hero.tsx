"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Mail, Send } from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isNear, setIsNear] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        const dist = Math.sqrt((e.clientX - center.x) ** 2 + (e.clientY - center.y) ** 2);
        setIsNear(dist < 500);
      }
    };
    const handleLeave = () => setIsNear(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const parallax = isNear
    ? {
        transform: `translate(${(mousePos.x - (typeof window !== "undefined" ? window.innerWidth / 2 : 0)) * 0.02}px, ${(mousePos.y - (typeof window !== "undefined" ? window.innerHeight / 2 : 0)) * 0.02}px)`,
        transition: "transform 0.2s ease-out",
      }
    : { transform: "translate(0, 0)", transition: "transform 0.5s ease-out" };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center overflow-hidden w-full">
      {/* Glow background */}
      <div className="absolute left-1/2 top-[10%] z-0 -translate-x-1/2 pointer-events-none">
        <div className="relative">
          <div className="glow-1" style={{ left: -200, top: -50 }} />
          <div className="glow-2" style={{ left: -350, top: 50 }} />
          <div className="glow-3" style={{ left: 150, top: -30 }} />
        </div>
      </div>

      {/* Content with parallax */}
      <div
        ref={contentRef}
        className="z-10 pt-36 pb-20 px-6 animate-fade-up w-full"
        style={{ animationDelay: "300ms", ...parallax }}
      >
        <div className="max-w-2xl mx-auto text-center">
          {/* Profile + Name */}
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 overflow-hidden flex-shrink-0">
              <Image
                src="/images/profile.png"
                alt="Hammad Amer"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-gray-50 text-xl text-left leading-5">
              <span className="font-display font-semibold">Hammad Amer.</span>
              <br />
              <span className="text-xs text-neutral-400">
                <Image src="/images/pakistan.png" alt="Pakistan" width={20} height={14} className="inline-block mr-1 -mt-0.5" />
                Based in Pakistan
              </span>
            </h1>
          </div>

          {/* Big Title */}
          <h2 className="mt-4 text-5xl md:text-7xl lg:text-8xl text-gray-50 font-semibold font-display leading-none">
            AI/ML
          </h2>
          <div className="flex items-center justify-center gap-3 mt-1 flex-wrap">
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-gray-50 font-semibold font-display leading-none">
              DEVELOPER
            </h2>
            <Link
              href="/contact"
              className="shine-sweep rounded-full border border-neutral-600 px-4 py-2 text-sm text-gray-50 flex items-center gap-2 transition-transform duration-500 hover:scale-105 flex-shrink-0"
            >
              <Send size={14} />
              <span className="font-display">Contact me</span>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 pt-5">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/hammad-amer26/" },
              { icon: Github, href: "https://github.com/Hammad-Amer" },
              { icon: Mail, href: "mailto:hammadamer386@gmail.com" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="shine-sweep rounded-full border border-neutral-600 p-2.5 text-gray-50 transition-transform duration-500 hover:scale-105 hover:-rotate-12"
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
