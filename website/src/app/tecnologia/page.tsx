import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { TecnologiaContent } from "./TecnologiaContent";

export const metadata: Metadata = createMetadata({
  title: "Tecnologia",
  description:
    "Stack tecnológico robusto e comprovado, selecionado pela adequação a cada desafio.",
  path: "/tecnologia",
});

export default function TecnologiaPage() {
  return <TecnologiaContent />;
}
