export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  category: "ai-ml" | "web" | "systems" | "game";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  type: "work" | "freelance";
}

export interface NavLink {
  label: string;
  href: string;
}
