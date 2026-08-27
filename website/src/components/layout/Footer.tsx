import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/8 bg-[#090a0d] relative z-10">
      <Container className="grid grid-cols-1 gap-8 py-[72px] md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo size="lg" className="mb-4" />
          <p className="text-[14px] leading-relaxed text-slate-400">{SITE.copyright}</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 md:col-span-7 md:justify-end">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-slate-400 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}


