"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "@/data/projects";
import { ProjectCard } from "@/components/ui/Cards";
import { Container, Section } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section border className="pt-0">
      <Container className="px-0">
        <div className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={cn(
                "rounded border px-4 py-2 text-[14px] font-semibold uppercase tracking-[0.05em] transition-all duration-200",
                filter === cat.id
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-outline-variant text-on-surface-variant hover:border-action-hover hover:text-primary"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  excerpt={project.excerpt}
                  image={project.image}
                  category={project.category}
                  index={i}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
}
