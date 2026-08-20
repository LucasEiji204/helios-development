"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        // Hysteresis: evita oscilação do estado perto do topo (scroll bounce)
        if (prev && y < 10) return false;
        if (!prev && y > 30) return true;
        return prev;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 w-full border-b backdrop-blur-md transition-[height,background-color,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled ? "h-[72px] border-outline-variant bg-[rgba(18,19,24,0.92)] shadow-[0_1px_0_rgba(183,196,255,0.05)]" : "h-[96px] border-outline-variant bg-[rgba(18,19,24,0.9)]"
        )}
      >
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-[20px] md:px-[64px]">
          <Logo size={scrolled ? "sm" : "md"} />

          <ul className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-brand text-[15px] font-bold uppercase tracking-[0.08em] transition-all duration-200",
                    isActive(link.href)
                      ? "border-b-2 border-primary pb-1 text-primary"
                      : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary rounded px-2.5 py-1.5"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Button href="/contato" size="sm" className="hidden md:inline-flex">
              Contato
            </Button>
            <button
              type="button"
              className="text-on-surface-variant md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
            >
              <span className="material-symbols-outlined text-[32px]">menu</span>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-base-dark/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex h-full flex-col px-[20px] py-8">
              <div className="mb-12 flex items-center justify-between">
                <Logo size="md" />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Fechar menu"
                  className="text-on-surface-variant"
                >
                  <span className="material-symbols-outlined text-[32px]">close</span>
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "font-brand block text-[32px] font-bold tracking-[0.04em] uppercase",
                        isActive(link.href) ? "text-primary" : "text-on-surface"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                  className="mt-4"
                >
                  <Button href="/contato" size="lg" className="w-full">
                    Contato
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}