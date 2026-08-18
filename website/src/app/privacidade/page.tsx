import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/ui/Container";
import { SlideUp } from "@/components/animations/motion";

export const metadata: Metadata = createMetadata({
  title: "Privacidade",
  description: "Política de privacidade da Helios Development.",
  path: "/privacidade",
});

export default function PrivacidadePage() {
  return (
    <Container className="py-[96px]">
      <SlideUp>
        <h1 className="mb-8 text-[40px] font-bold tracking-[-0.02em] md:text-[56px]">Política de Privacidade</h1>
        <div className="prose-dark max-w-3xl space-y-6 text-[16px] leading-[1.8] text-on-surface-variant">
          <p>
            Esta página descreve como a Helios Development coleta, utiliza e protege informações pessoais. O conteúdo completo será disponibilizado em breve.
          </p>
          <p>
            Para dúvidas sobre privacidade, entre em contato pelo e-mail contato@heliosdevelopment.com.br.
          </p>
        </div>
      </SlideUp>
    </Container>
  );
}
