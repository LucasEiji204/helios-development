import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { timelineEvents } from "@/data/timeline";
import { Timeline } from "@/components/timeline/Timeline";
import { Container } from "@/components/ui/Container";
import { SlideUp } from "@/components/animations/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "Nossa História",
  description: "Uma história construída através de tecnologia, aprendizado e evolução.",
  path: "/institucional/historia",
});

export default function HistoriaPage() {
  return (
    <div className="relative overflow-hidden py-[96px]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15">
        <div className="h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,#b7c4ff_0%,transparent_70%)] blur-[100px]" />
      </div>
      <Container className="relative z-10">
        <Breadcrumb items={[{ label: "Institucional", href: "/institucional" }, { label: "História" }]} />
        <div className="mb-16 text-center">
          <SlideUp>
            <h1 className="mb-6 text-[40px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[64px]">
              Nossa trajetória
            </h1>
          </SlideUp>
          <SlideUp>
            <p className="mx-auto max-w-2xl text-[18px] leading-[1.6] text-on-surface-variant">
              Uma história construída através de tecnologia, aprendizado e evolução.
            </p>
          </SlideUp>
        </div>
        <Timeline events={timelineEvents} />
      </Container>
    </div>
  );
}
