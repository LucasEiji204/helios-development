export type Job = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
};

export const jobs: Job[] = [
  {
    slug: "desenvolvedor-fullstack-senior",
    title: "Desenvolvedor Full Stack Sênior",
    department: "Engenharia",
    location: "Remoto / Híbrido",
    type: "Tempo integral",
    description:
      "Buscamos profissional sênior para liderar desenvolvimento de sistemas corporativos com foco em arquitetura, qualidade e mentoria técnica.",
    requirements: [
      "5+ anos de experiência com desenvolvimento web",
      "Domínio de TypeScript, React e Node.js",
      "Experiência com arquitetura de sistemas escaláveis",
      "Comunicação clara e capacidade de mentoria",
    ],
  },
  {
    slug: "designer-produto",
    title: "Designer de Produto",
    department: "Design",
    location: "Remoto",
    type: "Tempo integral",
    description:
      "Profissional para conduzir discovery, UX/UI e prototipação de produtos digitais em projetos institucionais e corporativos.",
    requirements: [
      "3+ anos de experiência em product design",
      "Portfólio com cases de produtos digitais",
      "Domínio de Figma e metodologias de discovery",
      "Capacidade de traduzir requisitos complexos em interfaces claras",
    ],
  },
  {
    slug: "engenheiro-devops",
    title: "Engenheiro DevOps",
    department: "Infraestrutura",
    location: "Remoto / Híbrido",
    type: "Tempo integral",
    description:
      "Responsável por pipelines CI/CD, infraestrutura cloud e práticas de observabilidade em projetos de alta disponibilidade.",
    requirements: [
      "Experiência com AWS ou Azure",
      "Domínio de Docker, Kubernetes e Terraform",
      "Conhecimento em monitoramento e alertas",
      "Experiência com pipelines de CI/CD",
    ],
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
