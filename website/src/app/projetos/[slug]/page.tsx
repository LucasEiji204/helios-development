import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { Container, Section } from "@/components/ui/Container";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/animations/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.excerpt,
    path: `/projetos/${slug}`,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-dark via-base-dark/50 to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-12">
          <Breadcrumb items={[{ label: "Projetos", href: "/projetos" }, { label: project.title }]} />
          <SlideUp>
            <span className="mb-2 block text-[14px] font-semibold uppercase tracking-[0.05em] text-primary">
              {project.category} · {project.year}
            </span>
            <h1 className="max-w-4xl text-[40px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[64px]">
              {project.title}
            </h1>
          </SlideUp>
        </Container>
      </div>

      <Section>
        <SlideUp>
          <h2 className="mb-4 text-[36px] font-semibold tracking-[-0.01em]">Resumo</h2>
          <p className="max-w-3xl text-[18px] leading-[1.6] text-on-surface-variant">{project.summary}</p>
        </SlideUp>
      </Section>

      <Section border>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <SlideUp>
            <h2 className="mb-4 text-[36px] font-semibold tracking-[-0.01em]">Problema</h2>
            <p className="text-[16px] leading-[1.6] text-on-surface-variant">{project.problem}</p>
          </SlideUp>
          <SlideUp>
            <h2 className="mb-4 text-[36px] font-semibold tracking-[-0.01em]">Solução</h2>
            <p className="text-[16px] leading-[1.6] text-on-surface-variant">{project.solution}</p>
          </SlideUp>
        </div>
      </Section>

      <Section border>
        <SlideUp>
          <h2 className="mb-6 text-[36px] font-semibold tracking-[-0.01em]">Tecnologias</h2>
        </SlideUp>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-outline-variant bg-surface-container-low px-4 py-2 text-[14px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <Section border>
        <SlideUp>
          <h2 className="mb-8 text-[36px] font-semibold tracking-[-0.01em]">Galeria</h2>
        </SlideUp>
        <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((img, i) => (
            <StaggerItem key={img}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-card-border">
                <Image src={img} alt={`${project.title} - imagem ${i + 1}`} fill className="object-cover" sizes="33vw" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section border>
        <SlideUp>
          <h2 className="mb-6 text-[36px] font-semibold tracking-[-0.01em]">Resultados</h2>
        </SlideUp>
        <ul className="flex flex-col gap-4">
          {project.results.map((result) => (
            <li key={result} className="flex items-start gap-3 text-[16px] leading-[1.6] text-on-surface-variant">
              <span className="material-symbols-outlined mt-0.5 text-action-hover">check_circle</span>
              {result}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="flex flex-col justify-between gap-6 border-t border-outline-variant pt-8 md:flex-row">
          {prev ? (
            <Link href={`/projetos/${prev.slug}`} className="group flex flex-col gap-2" data-cursor="VIEW">
              <span className="text-[14px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
                ← Projeto anterior
              </span>
              <span className="text-[28px] font-semibold text-on-surface transition-colors group-hover:text-primary">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link href={`/projetos/${next.slug}`} className="group flex flex-col gap-2 text-right md:items-end" data-cursor="VIEW">
              <span className="text-[14px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
                Próximo projeto →
              </span>
              <span className="text-[28px] font-semibold text-on-surface transition-colors group-hover:text-primary">
                {next.title}
              </span>
            </Link>
          ) : null}
        </div>
        <div className="mt-12 text-center">
          <Button href="/contato" arrow>
            Iniciar um projeto similar
          </Button>
        </div>
      </Section>
    </>
  );
}
