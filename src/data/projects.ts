import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "spinescan",
    title: "SpineScan",
    description:
      "AI-powered Lumbar Spine MRI diagnostic tool using YOLOX detection and timm backbones to classify 25 spinal conditions from DICOM MRI scans, achieving 94% multi-label accuracy. Full-stack MERN dashboard with Grad-CAM explainability.",
    technologies: ["PyTorch", "YOLOX", "React", "Node.js", "MongoDB", "Express"],
    category: "ai-ml",
    githubUrl: "https://github.com/Hammad-Amer/SpineScan",
    featured: true,
  },
  {
    id: "multimodal-rag",
    title: "Multimodal RAG System",
    description:
      "Retrieval-Augmented Generation pipeline handling text and image queries from PDFs, integrating LLaMA2 with Sentence-BERT and CLIP/BLIP for context-aware answers with CoT/few-shot prompting.",
    technologies: ["LLaMA2", "Sentence-BERT", "CLIP", "FAISS", "LlamaIndex", "Flask"],
    category: "ai-ml",
    githubUrl: "https://github.com/Hammad-Amer/MultiModalRag",
    featured: true,
  },
  {
    id: "connectme",
    title: "ConnectMe",
    description:
      "Real-time social media Android app with messaging, audio/video calls, stories, posts, followers, and profile management. Built with Firebase, later migrated to XAMPP/PHP with Flask/FastAPI spam classifier.",
    technologies: ["Kotlin", "Firebase", "FastAPI", "Flask", "SQL", "Agora API"],
    category: "web",
    githubUrl: "https://github.com/Hammad-Amer/ConnectMe",
    featured: true,
  },
  {
    id: "autonomous-driving",
    title: "Autonomous Driving AI",
    description:
      "Self-driving car in TORCS simulator using Python, TensorFlow, and neural networks with behavioral cloning to predict steering from sensor data and drive autonomously.",
    technologies: ["Python", "TensorFlow", "Neural Networks", "TORCS"],
    category: "ai-ml",
    githubUrl: "https://github.com/Hammad-Amer/TORCS-Simulator",
    featured: false,
  },
  {
    id: "parallel-sssp",
    title: "Parallel SSSP Update",
    description:
      "Parallel Single Source Shortest Path algorithm using C++, MPI, OpenMP, and METIS, achieving 10x speedup on large dynamic graphs through scalable partitioned processing.",
    technologies: ["C++", "MPI", "OpenMP", "METIS"],
    category: "systems",
    githubUrl: "https://github.com/Hammad-Amer/Parallel-Single-Shortest-Path-Update",
    featured: false,
  },
  {
    id: "stitchcraft",
    title: "StitchCraft",
    description:
      "Backend infrastructure and secure RESTful APIs for a custom tailoring marketplace, managing authentication, inventory, and real-time order processing.",
    technologies: ["Node.js", "Express", "MongoDB", "REST APIs"],
    category: "web",
    githubUrl: "https://github.com/Affan-Swati/StitchCraft",
    featured: false,
  },
  {
    id: "pacman",
    title: "Pacman Clone",
    description:
      "High-performance Pacman recreation in C++ using SFML, with multiprocessing via forks and threads for smooth, responsive gameplay on Linux.",
    technologies: ["C++", "SFML", "Linux", "Multithreading"],
    category: "game",
    githubUrl: "https://github.com/Hammad-Amer/Pacman-in-SFML",
    featured: false,
  },
];
