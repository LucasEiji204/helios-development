import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/ui/Cards";
import { Container, Section } from "@/components/ui/Container";
import { SlideUp } from "@/components/animations/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "Conteúdos",
  description: "Artigos sobre engenharia de software, design e transformação digital.",
  path: "/conteudos",
});

export default function ConteudosPage() {
  return (
    <>
      <Container className="py-[96px] md:py-[160px]">
        <Breadcrumb items={[{ label: "Conteúdos" }]} />
        <SlideUp>
          <h1 className="mb-6 text-[40px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[64px]">
            Conteúdos
          </h1>
        </SlideUp>
        <SlideUp>
          <p className="max-w-2xl text-[18px] leading-[1.6] text-on-surface-variant">
            Insights sobre engenharia de software, design de produto e estratégia digital.
          </p>
        </SlideUp>
      </Container>
      <Section border className="pt-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <ArticleCard key={article.slug} {...article} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
}
