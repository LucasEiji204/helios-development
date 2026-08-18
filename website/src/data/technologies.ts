export type TechCategory = "frontend" | "backend" | "database" | "cloud" | "devops" | "design";

export type Technology = {
  name: string;
  category: TechCategory;
  description: string;
};

export const techCategories: { id: TechCategory; label: string }[] = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "cloud", label: "Cloud" },
  { id: "devops", label: "DevOps" },
  { id: "design", label: "Design" },
];

export const technologies: Technology[] = [
  { name: "React", category: "frontend", description: "Interfaces reativas e componentizadas" },
  { name: "Next.js", category: "frontend", description: "Aplicações web full-stack performáticas" },
  { name: "TypeScript", category: "frontend", description: "Tipagem estática para código robusto" },
  { name: "Tailwind CSS", category: "frontend", description: "Estilização utilitária e consistente" },
  { name: "Node.js", category: "backend", description: "Runtime JavaScript server-side" },
  { name: "Python", category: "backend", description: "Backend e automação de processos" },
  { name: "Go", category: "backend", description: "Serviços de alta performance" },
  { name: "PostgreSQL", category: "database", description: "Banco relacional enterprise-grade" },
  { name: "MongoDB", category: "database", description: "Armazenamento document-oriented" },
  { name: "Redis", category: "database", description: "Cache e filas em memória" },
  { name: "AWS", category: "cloud", description: "Infraestrutura cloud escalável" },
  { name: "Azure", category: "cloud", description: "Soluções cloud corporativas" },
  { name: "Docker", category: "devops", description: "Containerização de aplicações" },
  { name: "Kubernetes", category: "devops", description: "Orquestração de containers" },
  { name: "GitHub Actions", category: "devops", description: "Pipelines de CI/CD" },
  { name: "Figma", category: "design", description: "Design colaborativo de interfaces" },
];
