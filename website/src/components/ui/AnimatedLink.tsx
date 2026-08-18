"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  external?: boolean;
  arrow?: boolean;
};

export function AnimatedLink({
  href,
  children,
  className,
  active,
  external,
  arrow,
}: AnimatedLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.05em] transition-colors duration-200",
    active
      ? "text-primary border-b-2 border-primary pb-1"
      : "text-on-surface-variant hover:text-primary",
    className
  );

  const content = (
    <>
      {children}
      {arrow && (
        <motion.span
          className="material-symbols-outlined text-[18px]"
          initial={false}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          arrow_forward
        </motion.span>
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
