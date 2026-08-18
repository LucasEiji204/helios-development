import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import {
  sustainabilityPillars,
  sustainabilityMetrics,
  sustainabilityInitiatives,
} from "@/data/sustainability";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/animations/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "Sustentabilidade",
  description:
    "Compromisso com práticas sustentáveis em tecnologia, impacto social e governança responsável.",
  path: "/sustentabilidade",
});

export default function SustentabilidadePage() {
  return (
    <>
      <Container className="py-[96px] md:py-[160px]">
        <Breadcrumb items={[{ label: "Sustentabilidade" }]} />
        <SlideUp>
          <h1 className="mb-6 text-[40px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[64px]">
            Sustentabilidade
          </h1>
        </SlideUp>
        <SlideUp>
          <p className="max-w-2xl text-[18px] leading-[1.6] text-on-surface-variant">
            Tecnologia responsável, impacto social positivo e governança transparente em todas as nossas operações.
          </p>
        </SlideUp>
      </Container>

      <Section border>
        <SectionHeader title="Nossos pilares" />
        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sustainabilityPillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="flex h-full flex-col gap-4 border border-card-border bg-card-bg p-6 transition-colors hover:border-action-hover/30">
                <span className="material-symbols-outlined text-[32px] text-primary">{pillar.icon}</span>
                <h3 className="text-[28px] font-semibold text-on-surface">{pillar.title}</h3>
                <p className="text-[16px] leading-[1.6] text-on-surface-variant">{pillar.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section border>
        <SectionHeader title="Indicadores" description="Métricas de acompanhamento das nossas iniciativas." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sustainabilityMetrics.map((metric, i) => (
            <SlideUp key={metric.label}>
              <div className="border border-outline-variant bg-surface-container-low p-6 text-center">
                <div className="mb-2 text-[48px] font-bold tracking-[-0.02em] text-primary">{metric.value}</div>
                <div className="mb-1 text-[14px] font-semibold uppercase tracking-[0.05em] text-on-surface">
                  {metric.label}
                </div>
                <div className="text-[12px] text-on-surface-variant">{metric.note}</div>
              </div>
            </SlideUp>
          ))}
        </div>
      </Section>

      <Section border>
        <SectionHeader title="Iniciativas" />
        <StaggerContainer className="flex flex-col gap-6">
          {sustainabilityInitiatives.map((initiative) => (
            <StaggerItem key={initiative.title}>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="mb-2 text-[28px] font-semibold text-on-surface">{initiative.title}</h3>
                <p className="text-[16px] leading-[1.6] text-on-surface-variant">{initiative.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </>
  );
}
