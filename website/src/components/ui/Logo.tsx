"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "white" | "navy" | "auto";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
};

export function Logo({
  variant = "white",
  size = "md",
  className,
  href = "/",
}: LogoProps) {
  // Enhanced height presets for prominent branding
  const heightMap = {
    sm: "h-10 md:h-12",
    md: "h-14 md:h-16",
    lg: "h-16 md:h-20",
    xl: "h-20 md:h-28",
  };

  const logoSrc =
    variant === "navy" ? "/helios-logo-navy.png" : "/helios-logo-white.png";

  const content = (
    <div
      className={cn(
        "group relative flex items-center transition-transform duration-300 hover:scale-[1.02]",
        heightMap[size],
        className
      )}
    >
      <div className="relative h-full aspect-[2.62/1] flex items-center">
        <Image
          src={logoSrc}
          alt="Helios Development Logo"
          fill
          priority
          className="object-contain object-left transition-all duration-300 group-hover:brightness-110"
          sizes="(max-width: 768px) 220px, 360px"
        />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Helios Development Home" className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
