import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SlideUp } from "@/components/animations/motion";

export const metadata: Metadata = createMetadata({
  title: "Termos de Uso",
  description: "Termos de uso do website da Helios Development.",
  path: "/termos",
});

export default function TermosPage() {
  return (
    <Container className="py-[96px]">
      <SlideUp>
        <h1 className="mb-8 text-[40px] font-bold tracking-[-0.02em] md:text-[56px]">Termos de Uso</h1>
        <div className="max-w-3xl space-y-6 text-[16px] leading-[1.8] text-on-surface-variant">
          <p>
            Estes termos regem o uso deste website. O conteúdo completo será disponibilizado em breve.
          </p>
          <p>
            Para dúvidas, entre em contato pelo e-mail contato@heliosdevelopment.com.br.
          </p>
        </div>
      </SlideUp>
    </Container>
  );
}
