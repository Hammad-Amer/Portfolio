import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code2",
    skills: [
      { name: "Python" },
      { name: "C++" },
      { name: "Java" },
      { name: "Kotlin" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "C#" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "Brain",
    skills: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Scikit-learn" },
      { name: "Computer Vision" },
      { name: "Generative AI" },
      { name: "MLflow" },
      { name: "Airflow" },
      { name: "LangChain" },
    ],
  },
  {
    title: "Web & Mobile",
    icon: "Globe",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Firebase" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "Cloud",
    skills: [
      { name: "AWS" },
      { name: "Microsoft Azure" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "GitHub Actions" },
      { name: "Linux" },
      { name: "CI/CD" },
      { name: "Git" },
    ],
  },
];
