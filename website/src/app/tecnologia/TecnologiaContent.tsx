"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techCategories, technologies, type TechCategory } from "@/data/technologies";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { SlideUp } from "@/components/animations/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { cn } from "@/lib/utils";

export function TecnologiaContent() {
  const [active, setActive] = useState<TechCategory | "all">("all");

  const filtered =
    active === "all" ? technologies : technologies.filter((t) => t.category === active);

  return (
    <>
      <Container className="py-[96px] md:py-[160px]">
        <Breadcrumb items={[{ label: "Tecnologia" }]} />
        <SlideUp>
          <h1 className="mb-6 text-[40px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[64px]">
            Stack tecnológico
          </h1>
        </SlideUp>
        <SlideUp>
          <p className="max-w-2xl text-[18px] leading-[1.6] text-on-surface-variant">
            Utilizamos tecnologias robustas e comprovadas, selecionadas pela adequação a cada desafio — não pela novidade.
          </p>
        </SlideUp>
      </Container>

      <Section border>
        <SectionHeader
          title="Nossas ferramentas"
          description="Explore as tecnologias que compõem nossa stack de desenvolvimento."
        />
        <div className="mb-8 flex flex-wrap gap-2">
          <FilterButton label="Todos" active={active === "all"} onClick={() => setActive("all")} />
          {techCategories.map((cat) => (
            <FilterButton
              key={cat.id}
              label={cat.label}
              active={active === cat.id}
              onClick={() => setActive(cat.id)}
            />
          ))}
        </div>
        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group border border-card-border bg-card-bg p-6 transition-colors hover:border-action-hover/30 hover:bg-[#0A1A35]"
              >
                <h3 className="mb-2 text-[28px] font-semibold text-on-surface group-hover:text-primary">
                  {tech.name}
                </h3>
                <p className="text-[16px] leading-[1.6] text-on-surface-variant">{tech.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded border px-4 py-2 text-[14px] font-semibold uppercase tracking-[0.05em] transition-all duration-200",
        active
          ? "border-primary bg-primary/10 text-primary"
          : "border-outline-variant text-on-surface-variant hover:border-action-hover hover:text-primary"
      )}
    >
      {label}
    </button>
  );
}
