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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex h-full flex-col overflow-hidden editorial-card editorial-card-hover p-6 md:p-8"
      data-cursor="VIEW"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#171922] text-indigo-400">
        <span className="material-symbols-outlined text-[24px] text-slate-200">{service.icon}</span>
      </div>
      <h3 className="mb-3 text-[22px] font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-indigo-300">
        {service.title}
      </h3>
      <p className="mb-6 flex-grow text-[15px] leading-relaxed text-slate-400">
        {service.description}
      </p>
      <ul className="mb-8 flex flex-col gap-2.5">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-[13px] font-medium text-slate-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={`/solucoes/${service.slug}`}
        className="mt-auto inline-flex items-center gap-2 text-[14px] font-semibold text-slate-200 transition-all duration-300 group-hover:gap-3 group-hover:text-white"
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
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="flex flex-col gap-4 editorial-card editorial-card-hover p-6 md:p-8"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#171922]">
        <span className="material-symbols-outlined text-[26px] text-slate-200">{icon}</span>
      </div>
      <h3 className="text-[20px] font-bold leading-snug tracking-tight text-white">{title}</h3>
      <p className="text-[15px] leading-relaxed text-slate-400">{description}</p>
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      layout
      className="group editorial-card editorial-card-hover p-4 md:p-5"
      data-cursor="VIEW"
    >
      <Link href={`/projetos/${slug}`} className="block">
        <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-20" />
          <span className="absolute bottom-4 left-4 rounded-full bg-[#0d0e12]/85 border border-white/10 px-3.5 py-1 text-[11px] font-medium tracking-wider text-slate-300 backdrop-blur-md">
            {category}
          </span>
        </div>
        <h3 className="mb-2 text-[22px] font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-slate-200">
          {title}
        </h3>
        <p className="text-[15px] leading-relaxed text-slate-400">{excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-slate-300 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
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
            data-cursor="EXPLORE"
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
      data-cursor="EXPLORE"
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
    </motion.div>
  );
}
