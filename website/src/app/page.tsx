"use client";

import { Button } from "@/components/ui/Button";
import { SlideUp, FadeIn } from "@/components/animations/motion";
import { MouseParallaxLayer } from "@/components/animations/Parallax";
import { RadialGradient } from "@/components/layout/Backgrounds";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import Link from "next/link";
import { ProjectCard } from "@/components/ui/Cards";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/Container";

function OrbitGeometry() {
  return (
    <MouseParallaxLayer depth={8} className="absolute right-0 top-1/4 hidden h-1/2 w-1/2 opacity-20 md:block">
      <svg className="h-full w-full animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 6" />
      </svg>
    </MouseParallaxLayer>
  );
}

export default function HomePage() {
  return (
    <>
      <RadialGradient />
      {/* Hero */}
      <section className="relative flex min-h-[80vh] flex-col justify-center radial-overlay">
        <Container className="relative z-10 py-[96px]">
          <div className="max-w-3xl">
            <SlideUp>
              <h1 className="mb-6 text-[40px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[64px] md:leading-[1.1]">
                {SITE.tagline}
              </h1>
            </SlideUp>
            <SlideUp>
              <p className="mb-12 max-w-2xl text-[18px] leading-[1.6] text-on-surface-variant">
                {SITE.description}
              </p>
            </SlideUp>
            <FadeIn className="flex flex-wrap gap-4">
              <Button href="/institucional" size="lg" arrow>
                Conheça a Helios
              </Button>
              <Button href="/solucoes" variant="secondary" size="lg">
                Nossas soluções
              </Button>
            </FadeIn>
          </div>
          <OrbitGeometry />
        </Container>
      </section>

      {/* Services preview */}
      <section className="border-t border-outline-variant py-[96px]">
        <Container>
          <SectionHeader
            label="Soluções"
            title="Engenharia para impacto real"
            description="Desenvolvemos sistemas, produtos digitais e consultoria estratégica para organizações que exigem precisão e escalabilidade."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: "Software", desc: "Sistemas customizados e web apps escaláveis.", href: "/solucoes/software", icon: "terminal" },
              { title: "Digital Products", desc: "Discovery, UX/UI e prototipação de produtos.", href: "/solucoes/produtos-digitais", icon: "design_services" },
              { title: "Tech Consulting", desc: "Arquitetura e transformação digital.", href: "/solucoes/consultoria", icon: "architecture" },
            ].map((item, i) => (
              <SlideUp key={item.title}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col border border-card-border bg-card-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-action-hover/30"
                  data-cursor="VIEW"
                >
                  <span className="material-symbols-outlined mb-4 text-[32px] text-primary">{item.icon}</span>
                  <h3 className="mb-2 text-[28px] font-semibold text-on-surface group-hover:text-primary">{item.title}</h3>
                  <p className="mb-4 flex-grow text-[16px] text-on-surface-variant">{item.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.05em] text-primary transition-all group-hover:gap-3">
                    Saber mais <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </span>
                </Link>
              </SlideUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects preview */}
      <section className="border-t border-outline-variant py-[96px]">
        <Container>
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeader
              title="Projetos selecionados"
              description="Soluções digitais construídas com rigor técnico e visão estratégica."
              className="mb-0"
            />
            <Button href="/projetos" variant="secondary" arrow>
              Ver todos
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard key={project.slug} {...project} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-outline-variant py-[96px]">
        <Container className="text-center">
          <SlideUp>
            <h2 className="mb-4 text-[36px] font-semibold tracking-[-0.01em] md:text-[48px]">
              Pronto para construir algo duradouro?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-[18px] text-on-surface-variant">
              Converse com nossa equipe sobre seu próximo projeto digital.
            </p>
            <Button href="/contato" size="lg" arrow>
              Iniciar conversa
            </Button>
          </SlideUp>
        </Container>
      </section>
    </>
  );
}
