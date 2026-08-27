"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SlideUp, FadeIn } from "@/components/animations/motion";
import { Container, SectionHeader } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import { ProjectCard } from "@/components/ui/Cards";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Authentic Editorial Workstudio Photography */}
      <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden border-b border-white/8 subtle-grid">
        {/* Real Architectural Studio Background with Natural Studio Lighting */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-editorial-bg.jpg"
            alt="Helios Digital Tech Studio"
            fill
            priority
            className="object-cover object-center opacity-30 saturate-[0.85] filter transition-transform duration-1000 scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0e12]/95 via-[#0d0e12]/80 to-[#0d0e12]" />
          <div className="absolute inset-0 natural-overlay" />
        </div>

        <Container className="relative z-10 py-[80px] md:py-[110px]">
          <div className="max-w-3xl">
            <SlideUp>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-[12px] font-medium tracking-wider uppercase text-slate-300">
                  Engenharia & Arquitetura Digital
                </span>
              </div>
            </SlideUp>

            <SlideUp>
              <h1 className="mb-6 text-[38px] font-extrabold leading-[1.12] tracking-tight md:text-[64px] text-white">
                {SITE.tagline}
              </h1>
            </SlideUp>

            <SlideUp>
              <p className="mb-10 max-w-2xl text-[18px] leading-relaxed text-slate-300 font-normal">
                {SITE.description}
              </p>
            </SlideUp>

            <FadeIn className="flex flex-wrap gap-4">
              <Button href="/institucional" size="lg" arrow>
                Conheça a Helios
              </Button>
              <Button href="/solucoes" variant="secondary" size="lg">
                Nossas Soluções
              </Button>
            </FadeIn>
          </div>

          {/* Key Tech Metrics Banner - Mineral Style */}
          <FadeIn className="mt-16 grid grid-cols-2 gap-6 rounded-2xl editorial-card p-6 md:grid-cols-4 md:p-8">
            {[
              { value: "99.9%", label: "Uptime & Disponibilidade" },
              { value: "100+", label: "Sistemas & Produtos Entregues" },
              { value: "< 50ms", label: "Latência Média de Resposta" },
              { value: "24/7", label: "Monitoramento & Suporte" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col border-l border-white/8 pl-5 first:border-l-0">
                <span className="text-[30px] font-bold text-white tracking-tight md:text-[38px]">
                  {stat.value}
                </span>
                <span className="text-[13px] font-medium text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </FadeIn>
        </Container>
      </section>

      {/* Services Preview Section */}
      <section className="relative border-b border-white/8 py-[96px] bg-[#0d0e12]">
        <Container>
          <SectionHeader
            label="SOLUÇÕES DE ENGENHARIA"
            title="Engenharia de precisão para impacto real"
            description="Desenvolvemos sistemas, produtos digitais robustos e consultoria estratégica para organizações que exigem alta performance e escalabilidade."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Software & Web Apps",
                desc: "Arquiteturas modernas, microsserviços e aplicações web de alta performance com código limpo.",
                href: "/solucoes/software",
                icon: "terminal",
              },
              {
                title: "Produtos Digitais",
                desc: "Discovery estratégico, design de interface intuitivo e prototipação focada em dados e UX.",
                href: "/solucoes/produtos-digitais",
                icon: "design_services",
              },
              {
                title: "Consultoria Tech",
                desc: "Consultoria em arquitetura de nuvem, segurança da informação e transformação digital.",
                href: "/solucoes/consultoria",
                icon: "architecture",
              },
            ].map((item, i) => (
              <SlideUp key={item.title}>
                <Link
                  href={item.href}
                  className="group relative flex h-full flex-col rounded-2xl editorial-card editorial-card-hover p-8"
                  data-cursor="VIEW"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#171922] text-slate-200">
                    <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                  </div>
                  <h3 className="mb-3 text-[22px] font-bold text-white transition-colors group-hover:text-indigo-300">
                    {item.title}
                  </h3>
                  <p className="mb-6 flex-grow text-[15px] leading-relaxed text-slate-400">{item.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-300 transition-all group-hover:gap-3 group-hover:text-white">
                    Saber mais <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </span>
                </Link>
              </SlideUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects Preview Section */}
      <section className="relative border-b border-white/8 py-[96px]">
        <Container>
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeader
              label="PORTFÓLIO E CASES"
              title="Projetos Selecionados"
              description="Soluções digitais construídas com rigor técnico e visão estratégica de longo prazo."
              className="mb-0"
            />
            <Button href="/projetos" variant="secondary" arrow>
              Ver todos os projetos
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard key={project.slug} {...project} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-[100px] overflow-hidden">
        <Container className="relative z-10 text-center">
          <SlideUp>
            <h2 className="mb-4 text-[32px] font-bold tracking-tight text-white md:text-[48px]">
              Pronto para construir o futuro digital da sua empresa?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-[17px] leading-relaxed text-slate-300">
              Converse com nossos especialistas sobre arquitetura, desenvolvimento e estratégias tecnológicas.
            </p>
            <Button href="/contato" size="lg" arrow>
              Iniciar Conversa
            </Button>
          </SlideUp>
        </Container>
      </section>
    </>
  );
}


