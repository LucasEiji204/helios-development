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
    "bg-action text-action-text hover:bg-action-hover focus-visible:ring-2 focus-visible:ring-action-hover focus-visible:ring-offset-2 focus-visible:ring-offset-base-dark",
  secondary:
    "bg-transparent text-primary border border-action-hover hover:bg-action-hover/10 focus-visible:ring-2 focus-visible:ring-action-hover",
  ghost:
    "bg-transparent text-primary hover:bg-surface-container-low focus-visible:ring-2 focus-visible:ring-primary",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[14px]",
  md: "px-6 py-3 text-[14px]",
  lg: "px-12 py-4 text-[14px]",
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
      <Link href={href} className={classes}>
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
    >
      {content}
    </button>
  );
}
