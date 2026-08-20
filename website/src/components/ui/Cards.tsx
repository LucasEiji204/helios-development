"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-card-border bg-card-bg p-6 transition-colors duration-300 hover:bg-[#0A1A35]"
    >
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-action to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-outline-variant bg-surface-container">
        <span className="material-symbols-outlined text-primary">{service.icon}</span>
      </div>
      <h3 className="mb-2 text-[28px] font-semibold leading-[1.3] tracking-[-0.01em] text-on-background">
        {service.title}
      </h3>
      <p className="mb-6 flex-grow text-[16px] leading-[1.6] text-on-surface-variant">
        {service.description}
      </p>
      <ul className="mb-8 flex flex-col gap-2">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-[16px] text-action-hover">check</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={`/solucoes/${service.slug}`}
        className="mt-auto inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.05em] text-primary transition-all duration-300 group-hover:gap-3"
      >
        Saber mais
        <motion.span
          className="material-symbols-outlined text-[18px]"
          initial={false}
          whileHover={{ x: 4 }}
        >
          arrow_forward
        </motion.span>
      </Link>
    </motion.article>
  );
}

type ValueCardProps = {
  icon: string;
  title: string;
  description: string;
  index?: number;
};

export function ValueCard({ icon, title, description, index = 0 }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -2 }}
      className="flex h-[240px] flex-col gap-4 border border-outline-variant bg-surface-container-low p-6 transition-colors duration-300 hover:border-action-hover/30 hover:bg-surface-container"
    >
      <span className="material-symbols-outlined text-[32px] text-primary">{icon}</span>
      <h3 className="text-[28px] font-semibold leading-[1.3] text-on-surface">{title}</h3>
      <p className="mt-auto text-[16px] leading-[1.6] text-on-surface-variant">{description}</p>
    </motion.div>
  );
}

type ProjectCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  index?: number;
};

export function ProjectCard({ slug, title, excerpt, image, category, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      layout
      className="group"
    >
      <Link href={`/projetos/${slug}`} className="block">
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg border border-card-border">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute bottom-4 left-4 rounded bg-surface-container/90 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.05em] text-primary backdrop-blur-sm">
            {category}
          </span>
        </div>
        <h3 className="mb-2 text-[28px] font-semibold leading-[1.3] text-on-surface transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="text-[16px] leading-[1.6] text-on-surface-variant">{excerpt}</p>
        <span className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.05em] text-primary transition-all duration-300 group-hover:gap-3">
          Ver projeto
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </span>
      </Link>
    </motion.article>
  );
}

type ArticleCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  index?: number;
};

export function ArticleCard({ slug, title, excerpt, image, category, date, index = 0 }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group"
    >
      <Link href={`/conteudos/${slug}`} className="block">
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg border border-card-border">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <span className="absolute left-4 top-4 rounded bg-surface-container/90 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.05em] text-primary backdrop-blur-sm">
            {category}
          </span>
        </div>
        <time className="mb-2 block text-[12px] text-on-surface-variant">
          {new Date(date).toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        <h3 className="mb-2 text-[28px] font-semibold leading-[1.3] text-on-surface transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="text-[16px] leading-[1.6] text-on-surface-variant">{excerpt}</p>
        <span className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.05em] text-primary transition-all duration-300 group-hover:gap-3">
          Ler artigo
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </span>
      </Link>
    </motion.article>
  );
}

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ImageReveal({ src, alt, className }: ImageRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn("relative overflow-hidden border border-outline-variant", className)}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
    </motion.div>
  );
}
