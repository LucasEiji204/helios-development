"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const reducedMotion = useReducedMotion();

  // Fecha o menu e revela a nav ao trocar de rota (ajuste de estado
  // durante a renderização, sem precisar de efeito).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setNavHidden(false);
  }

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      // A nav não pode atrapalhar o fluxo de tela: ela se esconde ao rolar
      // para baixo e reaparece ao rolar para cima ou perto do topo.
      if (!reducedMotion && !mobileOpen) {
        const delta = y - lastScrollY.current;
        if (Math.abs(delta) > 4) {
          setNavHidden(delta > 0 && y > 140);
        }
      }

      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion, mobileOpen]);

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
      <motion.header
        initial={false}
        animate={{ y: navHidden ? "-110%" : 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
        onFocusCapture={() => setNavHidden(false)}
        className="pointer-events-none sticky top-0 z-50 w-full px-4 pt-4 pb-2"
      >
        <motion.nav
          initial={false}
          animate={{
            height: scrolled ? 64 : 72,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "pointer-events-auto mx-auto flex max-w-[1120px] items-center justify-between px-6 rounded-full border backdrop-blur-xl transition-all duration-300",
            scrolled
              ? "border-white/12 bg-[#0d0e12]/90 shadow-2xl shadow-black/50"
              : "border-white/8 bg-[#0d0e12]/70 shadow-lg shadow-black/20"
          )}
        >
          <Logo size="sm" />

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-[13px] font-medium transition-all duration-200 rounded-full",
                      active
                        ? "text-white bg-white/10 font-semibold"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Button href="/contato" size="sm" className="hidden md:inline-flex">
              Contato
            </Button>
            <button
              type="button"
              className="text-slate-300 hover:text-white md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
            >
              <span className="material-symbols-outlined text-[28px]">menu</span>
            </button>
          </div>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#090a0d]/98 backdrop-blur-2xl md:hidden"
          >
            <div className="flex h-full flex-col px-6 py-8">
              <div className="mb-10 flex items-center justify-between">
                <Logo size="md" />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Fechar menu"
                  className="text-slate-400 hover:text-white"
                >
                  <span className="material-symbols-outlined text-[30px]">close</span>
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block text-[24px] font-semibold tracking-tight transition-colors",
                        isActive(link.href) ? "text-white" : "text-slate-400 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.04 }}
                  className="mt-6"
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


