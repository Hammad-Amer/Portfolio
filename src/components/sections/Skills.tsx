"use client";

import { Code2, Brain, Globe, Cloud } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import StaggerContainer from "@/components/animations/StaggerChildren";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Brain,
  Globe,
  Cloud,
};

export default function Skills() {
  return (
    <Section id="skills" className="bg-surface-500/50">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="The tools and technologies I work with"
      />

      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category, i) => {
          const IconComponent = iconMap[category.icon];
          return (
            <FadeInWhenVisible key={category.title} delay={i * 0.1}>
              <div className="rounded-xl border border-white/5 bg-surface-200/50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  {IconComponent && (
                    <IconComponent size={20} className="text-primary-400" />
                  )}
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <StaggerContainer className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill.name} name={skill.name} />
                  ))}
                </StaggerContainer>
              </div>
            </FadeInWhenVisible>
          );
        })}
      </div>
    </Section>
  );
}
