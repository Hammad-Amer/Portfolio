"use client";

import { GraduationCap, Award } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { education } from "@/data/education";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading
        title="Education"
        subtitle="My academic background"
      />

      <FadeInWhenVisible>
        <div className="mx-auto max-w-3xl rounded-xl border border-white/5 bg-surface-200/50 p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-600/10">
              <GraduationCap size={24} className="text-primary-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {education.institution}
                </h3>
                <span className="text-sm text-primary-400">{education.duration}</span>
              </div>
              <p className="mt-1 text-gray-400">{education.degree}</p>

              {/* Honors */}
              <div className="mt-4 flex flex-wrap gap-2">
                {education.honors.map((honor) => (
                  <span
                    key={honor}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary-600/10 px-3 py-1.5 text-sm font-medium text-primary-400"
                  >
                    <Award size={14} />
                    {honor}
                  </span>
                ))}
              </div>

              {/* Coursework */}
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-medium text-gray-300">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-md bg-surface-50 px-3 py-1 text-xs text-gray-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </Section>
  );
}
