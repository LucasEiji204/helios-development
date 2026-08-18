import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-outline-variant bg-surface-container-lowest">
      <Container className="grid grid-cols-1 gap-8 py-[96px] md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo size="lg" className="mb-4" />
          <p className="text-[16px] leading-[1.6] text-on-surface-variant">{SITE.copyright}</p>
        </div>
        <div className="flex flex-wrap gap-8 md:col-span-8 md:justify-end">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-brand text-[15px] font-bold uppercase tracking-[0.08em] text-on-surface-variant transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
