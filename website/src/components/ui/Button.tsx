"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  arrow?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-slate-100 text-slate-950 font-semibold hover:bg-white shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98]",
  secondary:
    "bg-[#171922] text-slate-200 border border-white/10 hover:border-white/20 hover:bg-[#1f222e] hover:text-white focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-[0.98]",
  ghost:
    "bg-transparent text-slate-300 hover:text-white hover:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-slate-400",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[13px] rounded-full",
  md: "px-6 py-2.5 text-[14px] rounded-full",
  lg: "px-8 py-3.5 text-[15px] rounded-full",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  disabled,
  loading,
  type = "button",
  onClick,
  arrow,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded font-semibold uppercase tracking-[0.05em] transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none group",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {loading ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      <span>{children}</span>
      {arrow && !loading && (
        <motion.span
          className="inline-block"
          initial={false}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} data-cursor="OPEN">
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      data-cursor={variant === "primary" ? "OPEN" : undefined}
    >
      {content}
    </button>
  );
}
