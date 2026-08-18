import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { articles, getArticleBySlug } from "@/data/articles";
import { Container, Section } from "@/components/ui/Container";
import { SlideUp } from "@/components/animations/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/conteudos/${slug}`,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <div className="relative h-[40vh] min-h-[300px]">
        <Image src={article.image} alt={article.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-base-dark to-transparent" />
      </div>
      <Container className="py-12">
        <Breadcrumb items={[{ label: "Conteúdos", href: "/conteudos" }, { label: article.title }]} />
        <SlideUp>
          <span className="mb-4 block text-[14px] font-semibold uppercase tracking-[0.05em] text-primary">
            {article.category}
          </span>
          <h1 className="mb-4 max-w-4xl text-[40px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[56px]">
            {article.title}
          </h1>
          <div className="mb-8 flex gap-4 text-[14px] text-on-surface-variant">
            <time>
              {new Date(article.date).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{article.readTime} de leitura</span>
          </div>
        </SlideUp>
      </Container>
      <Section border className="pt-0">
        <article className="mx-auto max-w-3xl">
          {article.content.map((paragraph, i) => (
            <SlideUp key={i}>
              <p className="mb-6 text-[18px] leading-[1.8] text-on-surface-variant">{paragraph}</p>
            </SlideUp>
          ))}
        </article>
        <div className="mt-12 text-center">
          <Button href="/conteudos" variant="secondary" arrow>
            Voltar aos conteúdos
          </Button>
        </div>
      </Section>
    </>
  );
}
