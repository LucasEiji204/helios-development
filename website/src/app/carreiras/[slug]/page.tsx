import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { jobs, getJobBySlug } from "@/data/jobs";
import { Container, Section } from "@/components/ui/Container";
import { SlideUp } from "@/components/animations/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CareersApplicationForm } from "@/components/forms/ContactForm";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return createMetadata({
    title: job.title,
    description: job.description,
    path: `/carreiras/${slug}`,
  });
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <>
      <Container className="py-[96px]">
        <Breadcrumb items={[{ label: "Carreiras", href: "/carreiras" }, { label: job.title }]} />
        <SlideUp>
          <div className="mb-4 flex flex-wrap gap-3">
            <span className="rounded border border-outline-variant px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.05em] text-primary">
              {job.department}
            </span>
            <span className="text-[14px] text-on-surface-variant">{job.location}</span>
            <span className="text-[14px] text-on-surface-variant">{job.type}</span>
          </div>
          <h1 className="mb-6 text-[40px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[56px]">
            {job.title}
          </h1>
          <p className="max-w-3xl text-[18px] leading-[1.6] text-on-surface-variant">{job.description}</p>
        </SlideUp>
      </Container>

      <Section border>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <SlideUp>
            <h2 className="mb-6 text-[36px] font-semibold tracking-[-0.01em]">Requisitos</h2>
            <ul className="flex flex-col gap-3">
              {job.requirements.map((req) => (
                <li key={req} className="flex items-start gap-3 text-[16px] text-on-surface-variant">
                  <span className="material-symbols-outlined mt-0.5 text-action-hover">check</span>
                  {req}
                </li>
              ))}
            </ul>
          </SlideUp>
          <SlideUp>
            <h2 className="mb-6 text-[36px] font-semibold tracking-[-0.01em]">Candidatar-se</h2>
            <CareersApplicationForm jobTitle={job.title} />
          </SlideUp>
        </div>
      </Section>
    </>
  );
}
