"use client";

import { useState, type FormEvent } from "react";
import { Send, Github, Linkedin, Mail, Loader2, CheckCircle, XCircle } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-white/10 bg-surface-200 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50";

  return (
    <Section id="contact" className="bg-surface-500/50">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a question or want to work together? Drop me a message"
      />

      <div className="mx-auto max-w-4xl">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <FadeInWhenVisible className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-gray-400">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    minLength={2}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm text-gray-400">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  minLength={3}
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  minLength={10}
                  rows={5}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-all hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-600/25 disabled:opacity-50 sm:w-auto"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle size={16} />
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <XCircle size={16} />
                  Failed to send message. Please try again or email me directly.
                </p>
              )}
            </form>
          </FadeInWhenVisible>

          {/* Contact info */}
          <FadeInWhenVisible direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Let&apos;s connect
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  I&apos;m always open to discussing new projects, creative ideas, or
                  opportunities to be part of something great.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:hammadamer386@gmail.com"
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-surface-200/50 p-4 text-gray-400 transition-all hover:border-primary-500/30 hover:text-primary-400"
                >
                  <Mail size={20} />
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm">hammadamer386@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Hammad-Amer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-surface-200/50 p-4 text-gray-400 transition-all hover:border-primary-500/30 hover:text-primary-400"
                >
                  <Github size={20} />
                  <div>
                    <p className="text-xs text-gray-500">GitHub</p>
                    <p className="text-sm">Hammad-Amer</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/hammad-amer-ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-surface-200/50 p-4 text-gray-400 transition-all hover:border-primary-500/30 hover:text-primary-400"
                >
                  <Linkedin size={20} />
                  <div>
                    <p className="text-xs text-gray-500">LinkedIn</p>
                    <p className="text-sm">Hammad Amer</p>
                  </div>
                </a>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </Section>
  );
}
