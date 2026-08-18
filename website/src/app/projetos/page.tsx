import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { Container } from "@/components/ui/Container";
import { SlideUp } from "@/components/animations/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "Projetos",
  description: "Soluções digitais construídas com rigor técnico e visão estratégica.",
  path: "/projetos",
});

export default function ProjetosPage() {
  return (
    <>
      <Container className="py-[96px] md:py-[160px]">
        <Breadcrumb items={[{ label: "Projetos" }]} />
        <SlideUp>
          <h1 className="mb-6 text-[40px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[64px]">
            Projetos
          </h1>
        </SlideUp>
        <SlideUp>
          <p className="max-w-2xl text-[18px] leading-[1.6] text-on-surface-variant">
            Uma seleção de soluções digitais desenvolvidas com precisão técnica e foco em resultados mensuráveis.
          </p>
        </SlideUp>
      </Container>
      <ProjectsGrid />
    </>
  );
}
