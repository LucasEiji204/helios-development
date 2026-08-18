import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container, Section } from "@/components/ui/Container";
import { SlideUp } from "@/components/animations/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "Contato",
  description: "Entre em contato com a Helios Development para discutir seu próximo projeto digital.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <Container className="py-[96px] md:py-[160px]">
        <Breadcrumb items={[{ label: "Contato" }]} />
        <SlideUp>
          <h1 className="mb-6 text-[40px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[64px]">
            Contato
          </h1>
        </SlideUp>
        <SlideUp>
          <p className="max-w-2xl text-[18px] leading-[1.6] text-on-surface-variant">
            Conte-nos sobre seu projeto ou necessidade. Nossa equipe retornará em breve.
          </p>
        </SlideUp>
      </Container>

      <Section border className="pt-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SlideUp>
              <h2 className="mb-6 text-[28px] font-semibold text-on-surface">Informações</h2>
              <div className="flex flex-col gap-6">
                <div>
                  <span className="mb-1 block text-[14px] font-semibold uppercase tracking-[0.05em] text-primary">
                    E-mail
                  </span>
                  <a href="mailto:contato@heliosdevelopment.com.br" className="text-[16px] text-on-surface-variant transition-colors hover:text-primary">
                    contato@heliosdevelopment.com.br
                  </a>
                </div>
                <div>
                  <span className="mb-1 block text-[14px] font-semibold uppercase tracking-[0.05em] text-primary">
                    Carreiras
                  </span>
                  <a href="mailto:carreiras@heliosdevelopment.com.br" className="text-[16px] text-on-surface-variant transition-colors hover:text-primary">
                    carreiras@heliosdevelopment.com.br
                  </a>
                </div>
              </div>
            </SlideUp>
          </div>
          <div className="lg:col-span-3">
            <SlideUp>
              <ContactForm />
            </SlideUp>
          </div>
        </div>
      </Section>
    </>
  );
}
