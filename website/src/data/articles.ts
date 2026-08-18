export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "arquitetura-software-escalavel",
    title: "Arquitetura de software escalável para operações críticas",
    category: "Engenharia",
    excerpt:
      "Princípios fundamentais para construir sistemas que crescem com o negócio sem comprometer estabilidade.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    date: "2025-11-15",
    readTime: "8 min",
    content: [
      "A escalabilidade não é um recurso que se adiciona posteriormente — é uma decisão arquitetural tomada desde o início do projeto.",
      "Sistemas corporativos de missão crítica exigem abordagens que balanceiem performance, manutenibilidade e capacidade de evolução.",
      "Neste artigo, exploramos padrões arquiteturais, estratégias de decomposição e práticas de observabilidade que sustentam operações em escala.",
    ],
  },
  {
    slug: "design-systems-instituicionais",
    title: "Design systems para ambientes institucionais",
    category: "Design",
    excerpt:
      "Como criar sistemas de design que garantem consistência visual e eficiência de desenvolvimento em larga escala.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    date: "2025-10-02",
    readTime: "6 min",
    content: [
      "Design systems institucionais diferem de abordagens consumer-first: priorizam legibilidade, consistência e durabilidade visual.",
      "A construção de um design system eficiente começa com tokens fundamentais — cores, tipografia, espaçamento — e evolui para componentes reutilizáveis.",
      "Compartilhamos nossa metodologia para implementar design systems que aceleram entregas sem sacrificar qualidade visual.",
    ],
  },
  {
    slug: "transformacao-digital-estrategica",
    title: "Transformação digital com visão de longo prazo",
    category: "Estratégia",
    excerpt:
      "Por que jornadas de transformação digital bem-sucedidas priorizam fundamentos sobre modismos tecnológicos.",
    image: "https://images.unsplash.com/photo-1454165804604-c3d57bc86b40?w=1200&q=80",
    date: "2025-09-18",
    readTime: "10 min",
    content: [
      "Transformação digital não é sobre adotar a tecnologia mais recente — é sobre alinhar capacidades tecnológicas com objetivos estratégicos de negócio.",
      "Organizações que priorizam fundamentos sólidos — arquitetura, dados, processos — obtêm resultados mais duradouros do que aquelas que perseguem tendências.",
      "Apresentamos um framework prático para conduzir transformações digitais com governança, métricas claras e visão de longo prazo.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
