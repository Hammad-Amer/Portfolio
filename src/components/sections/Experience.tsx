"use client";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey so far"
      />

      <div className="mx-auto max-w-3xl">
        {experiences.map((exp, i) => (
          <TimelineItem key={exp.company} experience={exp} index={i} />
        ))}
      </div>
    </Section>
  );
}
