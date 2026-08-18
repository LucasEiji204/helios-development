import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { services, getServiceBySlug } from "@/data/services";
import { Container, Section } from "@/components/ui/Container";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/animations/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.heroDescription,
    path: `/solucoes/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Container className="py-[96px] md:py-[160px]">
        <Breadcrumb
          items={[
            { label: "Soluções", href: "/solucoes" },
            { label: service.title },
          ]}
        />
        <SlideUp>
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded border border-outline-variant bg-surface-container">
            <span className="material-symbols-outlined text-primary">{service.icon}</span>
          </div>
          <h1 className="mb-6 max-w-3xl text-[40px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[64px]">
            {service.heroTitle}
          </h1>
        </SlideUp>
        <SlideUp>
          <p className="max-w-2xl text-[18px] leading-[1.6] text-on-surface-variant">
            {service.heroDescription}
          </p>
        </SlideUp>
      </Container>

      <Section border>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <SlideUp>
            <h2 className="mb-4 text-[36px] font-semibold tracking-[-0.01em]">O que entregamos</h2>
            <p className="text-[16px] leading-[1.6] text-on-surface-variant">{service.description}</p>
          </SlideUp>
          <StaggerContainer className="flex flex-col gap-4">
            {service.details.map((detail) => (
              <StaggerItem key={detail}>
                <div className="flex items-center gap-3 border border-card-border bg-card-bg p-4">
                  <span className="material-symbols-outlined text-action-hover">check</span>
                  <span className="text-[16px] text-on-surface">{detail}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-center gap-6 text-center">
          <SlideUp>
            <h2 className="text-[36px] font-semibold">Vamos conversar sobre seu projeto?</h2>
          </SlideUp>
          <Button href="/contato" size="lg" arrow>
            Entrar em contato
          </Button>
        </div>
      </Section>
    </>
  );
}
