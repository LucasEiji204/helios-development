import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";
import { jobs } from "@/data/jobs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const staticPages = [
    "",
    "/institucional",
    "/institucional/historia",
    "/solucoes",
    "/tecnologia",
    "/projetos",
    "/sustentabilidade",
    "/conteudos",
    "/carreiras",
    "/contato",
    "/privacidade",
    "/termos",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${base}/solucoes/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...projects.map((p) => ({
      url: `${base}/projetos/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${base}/conteudos/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...jobs.map((j) => ({
      url: `${base}/carreiras/${j.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
