import type { Metadata } from "next";
import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { IMAGES } from "@/lib/constants";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/Cards";
import { Container } from "@/components/ui/Container";
import { SlideUp } from "@/components/animations/motion";
import { BlueprintGrid } from "@/components/layout/Backgrounds";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "Soluções",
  description:
    "Soluções tecnológicas desenvolvidas para diferentes necessidades e desafios. Engenharia robusta com design focado no usuário.",
  path: "/solucoes",
});

export default function SolucoesPage() {
  return (
    <div className="relative">
      <BlueprintGrid />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-[20%] -top-[50%] h-full w-full rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -right-[30%] top-[30%] h-[80%] w-[80%] rounded-full bg-secondary-container/5 blur-[100px]" />
      </div>
      <Container className="relative z-10 flex flex-col gap-[96px] py-[96px]">
        <Breadcrumb items={[{ label: "Soluções" }]} />
        <header className="max-w-3xl">
          <SlideUp>
            <h1 className="relative mb-4 inline-block text-[40px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[64px]">
              Produtos e serviços
              <span className="absolute -bottom-2 left-0 h-px w-1/3 origin-left scale-x-100 bg-primary" />
            </h1>
          </SlideUp>
          <SlideUp>
            <p className="max-w-2xl text-[18px] leading-[1.6] text-on-surface-variant">
              Soluções tecnológicas desenvolvidas para diferentes necessidades e desafios. Combinamos engenharia robusta com design focado no usuário para entregar infraestrutura digital de alto impacto.
            </p>
          </SlideUp>
        </header>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </section>

        <section>
          <div className="relative h-64 overflow-hidden rounded-lg border border-card-border md:h-96">
            <Image
              src={IMAGES.solutionsBanner}
              alt="Data center moderno com iluminação azul"
              fill
              className="object-cover opacity-60"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-dark to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-2xl p-6 md:p-12">
              <SlideUp>
                <h2 className="mb-2 text-[36px] font-semibold tracking-[-0.01em]">Infraestrutura como pilar.</h2>
                <p className="text-[16px] leading-[1.6] text-on-surface-variant">
                  Tecnologia desenvolvida com a precisão e a durabilidade necessárias para sustentar as operações de amanhã.
                </p>
              </SlideUp>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
