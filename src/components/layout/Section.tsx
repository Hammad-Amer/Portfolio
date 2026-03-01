import { type ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
