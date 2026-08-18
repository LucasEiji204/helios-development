import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { IMAGES } from "@/lib/constants";
import { values, methodology } from "@/data/timeline";
import { ValueCard } from "@/components/ui/Cards";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/animations/motion";
import { RadialGradient } from "@/components/layout/Backgrounds";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "Institucional",
  description:
    "Tecnologia, estratégia e desenvolvimento para construir soluções que evoluem com nossos clientes.",
  path: "/institucional",
});

export default function InstitucionalPage() {
  return (
    <>
      <RadialGradient position="top-right" />
      <Container className="py-[96px] md:py-[160px]">
        <Breadcrumb items={[{ label: "Institucional" }]} />
        <SlideUp>
          <h1 className="mb-6 text-[40px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[64px] md:leading-[1.1]">
            Quem somos
          </h1>
        </SlideUp>
        <SlideUp>
          <p className="max-w-[800px] text-[28px] font-semibold leading-[1.3] tracking-[-0.01em] text-on-surface-variant">
            Tecnologia, estratégia e desenvolvimento para construir soluções que evoluem com nossos clientes.
          </p>
        </SlideUp>
      </Container>

      <Section border>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="flex flex-col gap-12 md:col-span-4">
            <SlideUp>
              <div>
                <h2 className="mb-2 text-[14px] font-semibold uppercase tracking-[0.05em] text-primary">Missão</h2>
                <p className="text-[18px] leading-[1.6] text-on-surface-variant">
                  Fornecer infraestrutura tecnológica inabalável e estratégias escaláveis que garantam a perpetuidade e o crescimento institucional de nossos parceiros.
                </p>
              </div>
            </SlideUp>
            <SlideUp>
              <div>
                <h2 className="mb-2 text-[14px] font-semibold uppercase tracking-[0.05em] text-primary">Visão</h2>
                <p className="text-[18px] leading-[1.6] text-on-surface-variant">
                  Ser o pilar fundamental da transformação digital no setor corporativo, reconhecidos pela precisão, segurança e visão de longo prazo.
                </p>
              </div>
            </SlideUp>
          </div>
          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-8">
            {values.map((value, i) => (
              <StaggerItem key={value.title}>
                <ValueCard {...value} index={i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <Section border>
        <SectionHeader title="Nossa forma de trabalhar" />
        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {methodology.map((item) => (
            <StaggerItem key={item.step}>
              <div className="flex flex-col gap-4 border-t-2 border-outline-variant pt-4">
                <span className="text-[14px] font-semibold uppercase tracking-[0.05em] text-primary">{item.step}</span>
                <h3 className="text-[28px] font-semibold text-on-surface">{item.title}</h3>
                <p className="text-[16px] leading-[1.6] text-on-surface-variant">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section border>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <SlideUp>
            <div className="relative mb-6 h-[400px] overflow-hidden border border-outline-variant">
              <Image src={IMAGES.techPillar} alt="Visualização abstrata de arquitetura digital" fill className="object-cover" sizes="50vw" />
            </div>
            <h2 className="mb-4 text-[36px] font-semibold tracking-[-0.01em]">Tecnologia</h2>
            <p className="text-[18px] leading-[1.6] text-on-surface-variant">
              Nossa infraestrutura é construída sobre fundações sólidas, utilizando as tecnologias mais robustas e confiáveis do mercado. Não buscamos a novidade pela novidade, mas sim a ferramenta exata que garantirá a máxima eficiência, segurança e escalabilidade para operações de missão crítica.
            </p>
          </SlideUp>
          <SlideUp className="md:mt-[96px]">
            <div className="relative mb-6 h-[400px] overflow-hidden border border-outline-variant">
              <Image src={IMAGES.peoplePillar} alt="Profissionais colaborando em ambiente corporativo" fill className="object-cover" sizes="50vw" />
            </div>
            <h2 className="mb-4 text-[36px] font-semibold tracking-[-0.01em]">Pessoas</h2>
            <p className="text-[18px] leading-[1.6] text-on-surface-variant">
              O verdadeiro motor por trás de cada linha de código. Reunimos especialistas sêniores com profunda expertise de domínio, capazes de traduzir complexidade de negócios em soluções elegantes. Valorizamos a estabilidade intelectual e a capacidade de resolução de problemas complexos.
            </p>
          </SlideUp>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-center gap-6 text-center">
          <SlideUp>
            <h2 className="text-[36px] font-semibold tracking-[-0.01em]">Conheça nossa trajetória</h2>
            <p className="mt-4 max-w-xl text-[18px] text-on-surface-variant">
              Uma história construída através de tecnologia, aprendizado e evolução.
            </p>
          </SlideUp>
          <Button href="/institucional/historia" variant="secondary" arrow>
            Nossa história
          </Button>
        </div>
      </Section>
    </>
  );
}
