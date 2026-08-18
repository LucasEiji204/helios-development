"use client";

import { useState, FormEvent } from "react";
import { Input, Textarea, Select } from "@/components/forms/FormFields";
import { Button } from "@/components/ui/Button";
import { SlideUp } from "@/components/animations/motion";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Nome é obrigatório";
    if (!email) newErrors.email = "E-mail é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "E-mail inválido";
    if (!message) newErrors.message = "Mensagem é obrigatória";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setState("loading");

    // Prepared for future API integration
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setState("success");
    form.reset();
  }

  if (state === "success") {
    return (
      <SlideUp className="rounded-lg border border-card-border bg-card-bg p-8 text-center">
        <span className="material-symbols-outlined mb-4 text-[48px] text-primary">check_circle</span>
        <h3 className="mb-2 text-[28px] font-semibold text-on-surface">Mensagem enviada</h3>
        <p className="mb-6 text-[16px] text-on-surface-variant">
          Recebemos sua mensagem e retornaremos em breve.
        </p>
        <Button variant="secondary" onClick={() => setState("idle")}>
          Enviar nova mensagem
        </Button>
      </SlideUp>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input name="name" label="Nome" placeholder="Seu nome completo" error={errors.name} required />
        <Input
          name="email"
          label="E-mail"
          type="email"
          placeholder="seu@email.com"
          error={errors.email}
          required
        />
      </div>
      <Select
        name="subject"
        label="Assunto"
        options={[
          { value: "projeto", label: "Novo projeto" },
          { value: "consultoria", label: "Consultoria" },
          { value: "parceria", label: "Parceria" },
          { value: "carreira", label: "Carreiras" },
          { value: "outro", label: "Outro" },
        ]}
      />
      <Textarea
        name="message"
        label="Mensagem"
        placeholder="Conte-nos sobre seu projeto ou necessidade..."
        error={errors.message}
        required
      />
      <Button type="submit" loading={state === "loading"} size="lg" className="self-start">
        Enviar mensagem
      </Button>
    </form>
  );
}

export function CareersApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Nome é obrigatório";
    if (!email) newErrors.email = "E-mail é obrigatório";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setState("loading");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setState("success");
    form.reset();
  }

  if (state === "success") {
    return (
      <div className="rounded-lg border border-card-border bg-card-bg p-8 text-center">
        <span className="material-symbols-outlined mb-4 text-[48px] text-primary">check_circle</span>
        <h3 className="mb-2 text-[28px] font-semibold text-on-surface">Candidatura enviada</h3>
        <p className="text-[16px] text-on-surface-variant">
          Obrigado pelo interesse na vaga de {jobTitle}. Entraremos em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input type="hidden" name="job" value={jobTitle} />
      <Input name="name" label="Nome" error={errors.name} required />
      <Input name="email" label="E-mail" type="email" error={errors.email} required />
      <Input name="linkedin" label="LinkedIn" placeholder="https://linkedin.com/in/..." />
      <Textarea name="cover" label="Apresentação" placeholder="Conte-nos sobre sua experiência..." />
      <Button type="submit" loading={state === "loading"}>
        Enviar candidatura
      </Button>
    </form>
  );
}
