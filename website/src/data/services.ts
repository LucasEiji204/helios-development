export type Service = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  heroTitle: string;
  heroDescription: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "software",
    icon: "terminal",
    title: "Software",
    description:
      "Desenvolvimento de sistemas customizados e web apps escaláveis. Construímos arquiteturas resilientes desenhadas para alta disponibilidade e performance em ambientes institucionais críticos.",
    features: ["Sistemas Customizados", "Web Apps Escaláveis", "Integração de APIs"],
    heroTitle: "Engenharia de software sob medida",
    heroDescription:
      "Sistemas corporativos projetados para alta disponibilidade, segurança e escalabilidade em ambientes de missão crítica.",
    details: [
      "Arquitetura modular e testável",
      "Integração com sistemas legados",
      "Monitoramento e observabilidade",
      "CI/CD e entrega contínua",
    ],
  },
  {
    slug: "produtos-digitais",
    icon: "design_services",
    title: "Digital Products",
    description:
      "Do discovery ao protótipo de alta fidelidade. Metodologias estruturadas de UX/UI para traduzir requisitos complexos em interfaces eficientes, duradouras e centradas no usuário.",
    features: ["Product Discovery", "UX/UI Design", "Prototipação Rápida"],
    heroTitle: "Produtos digitais centrados no usuário",
    heroDescription:
      "Metodologias estruturadas de discovery e design para traduzir requisitos complexos em experiências digitais eficientes.",
    details: [
      "Pesquisa e validação com usuários",
      "Design systems escaláveis",
      "Prototipação interativa",
      "Testes de usabilidade",
    ],
  },
  {
    slug: "consultoria",
    icon: "architecture",
    title: "Tech Consulting",
    description:
      "Consultoria estratégica para modernização de infraestrutura. Desenhamos arquiteturas corporativas e orientamos jornadas de transformação digital com foco em segurança e governança.",
    features: [
      "Arquitetura de Sistemas",
      "Transformação Digital",
      "Auditoria de Código",
    ],
    heroTitle: "Consultoria estratégica em tecnologia",
    heroDescription:
      "Arquiteturas corporativas e jornadas de transformação digital com foco em segurança, governança e resultados mensuráveis.",
    details: [
      "Assessment de maturidade tecnológica",
      "Roadmap de modernização",
      "Governança e compliance",
      "Capacitação de equipes",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
