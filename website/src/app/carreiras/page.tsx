import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { jobs } from "@/data/jobs";
import { Container, Section } from "@/components/ui/Container";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/animations/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "Carreiras",
  description: "Junte-se à Helios Development. Oportunidades para profissionais que valorizam excelência técnica.",
  path: "/carreiras",
});

export default function CarreirasPage() {
  return (
    <>
      <Container className="py-[96px] md:py-[160px]">
        <Breadcrumb items={[{ label: "Carreiras" }]} />
        <SlideUp>
          <h1 className="mb-6 text-[40px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[64px]">
            Carreiras
          </h1>
        </SlideUp>
        <SlideUp>
          <p className="max-w-2xl text-[18px] leading-[1.6] text-on-surface-variant">
            Buscamos profissionais que compartilham nossa paixão por engenharia de qualidade e impacto duradouro.
          </p>
        </SlideUp>
      </Container>

      <Section border className="pt-0">
        <StaggerContainer className="flex flex-col gap-6">
          {jobs.map((job) => (
            <StaggerItem key={job.slug}>
              <Link
                href={`/carreiras/${job.slug}`}
                className="group block border border-card-border bg-card-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-action-hover/30"
              >
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h2 className="text-[28px] font-semibold text-on-surface transition-colors group-hover:text-primary">
                    {job.title}
                  </h2>
                  <span className="rounded border border-outline-variant px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
                    {job.department}
                  </span>
                </div>
                <p className="mb-3 text-[16px] text-on-surface-variant">{job.description}</p>
                <div className="flex gap-4 text-[14px] text-on-surface-variant">
                  <span>{job.location}</span>
                  <span>·</span>
                  <span>{job.type}</span>
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.05em] text-primary transition-all group-hover:gap-3">
                  Ver vaga
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </>
  );
}
