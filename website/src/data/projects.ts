export type Project = {
  slug: string;
  title: string;
  category: "web" | "sistemas" | "produtos" | "ux";
  excerpt: string;
  image: string;
  client?: string;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  gallery: string[];
  results: string[];
};

export const projectCategories = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "sistemas", label: "Sistemas" },
  { id: "produtos", label: "Produtos" },
  { id: "ux", label: "UX/UI" },
] as const;

export const projects: Project[] = [
  {
    slug: "plataforma-gestao-corporativa",
    title: "Plataforma de Gestão Corporativa",
    category: "sistemas",
    excerpt: "Sistema integrado para gestão operacional e analítica em tempo real.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    year: "2025",
    summary:
      "Plataforma unificada de gestão corporativa com dashboards analíticos, workflows automatizados e integração multi-sistema.",
    problem:
      "A organização operava com múltiplos sistemas desconectados, gerando retrabalho, inconsistência de dados e baixa visibilidade operacional.",
    solution:
      "Desenvolvemos uma plataforma centralizada com arquitetura modular, APIs unificadas e dashboards em tempo real para tomada de decisão estratégica.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1504868580979-f8e8b4b6d7e3?w=1200&q=80",
    ],
    results: [
      "Redução significativa no tempo de processos operacionais",
      "Visibilidade unificada de indicadores em tempo real",
      "Integração com sistemas legados existentes",
    ],
  },
  {
    slug: "portal-institucional",
    title: "Portal Institucional",
    category: "web",
    excerpt: "Website institucional com arquitetura de conteúdo escalável.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    year: "2024",
    summary:
      "Portal institucional moderno com CMS headless, performance otimizada e experiência responsiva premium.",
    problem:
      "Presença digital desatualizada, sem estrutura de conteúdo escalável e com performance abaixo do esperado para o mercado.",
    solution:
      "Portal construído com Next.js, CMS headless e design system consistente, garantindo performance, SEO e facilidade de gestão de conteúdo.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80",
    ],
    results: [
      "Melhoria significativa em performance e SEO",
      "Gestão de conteúdo autônoma pela equipe interna",
      "Experiência responsiva em todos os dispositivos",
    ],
  },
  {
    slug: "app-produto-digital",
    title: "Aplicação de Produto Digital",
    category: "produtos",
    excerpt: "Produto digital com discovery completo e MVP iterativo.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    year: "2025",
    summary:
      "Produto digital desenvolvido com metodologia de discovery, prototipação e entregas iterativas validadas com usuários.",
    problem:
      "Necessidade de validar uma proposta de valor digital antes de investimento significativo em desenvolvimento completo.",
    solution:
      "Conduzimos discovery estruturado, prototipação de alta fidelidade e MVP iterativo com ciclos de feedback contínuo.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Figma"],
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
    ],
    results: [
      "Validação de proposta de valor com usuários reais",
      "MVP funcional entregue em ciclo reduzido",
      "Base sólida para evolução do produto",
    ],
  },
  {
    slug: "redesign-experiencia-digital",
    title: "Redesign de Experiência Digital",
    category: "ux",
    excerpt: "Redesign completo de jornada digital com foco em conversão.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    year: "2024",
    summary:
      "Redesign estratégico de jornada digital com pesquisa de usuários, novo design system e protótipos validados.",
    problem:
      "Taxa de conversão abaixo do benchmark do setor e jornada do usuário fragmentada com alta taxa de abandono.",
    solution:
      "Redesign baseado em pesquisa qualitativa e quantitativa, com novo design system e protótipos testados antes da implementação.",
    technologies: ["Figma", "React", "A/B Testing"],
    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80",
    ],
    results: [
      "Melhoria mensurável na taxa de conversão",
      "Redução de abandono na jornada principal",
      "Design system reutilizável para evolução contínua",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
