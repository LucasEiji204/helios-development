"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useIsDesktop } from "@/lib/hooks/useMediaQuery";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type ParallaxProps = {
  children: React.ReactNode;
  strength?: number;
  className?: string;
};

export function Parallax({ children, strength = 15, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-strength, strength]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-strength, strength]), springConfig);

  useEffect(() => {
    if (!isDesktop || reduced) return;
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, [isDesktop, reduced, mouseX, mouseY]);

  if (!isDesktop || reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ x, y }}>{children}</motion.div>
    </div>
  );
}

type MouseParallaxLayerProps = {
  children: React.ReactNode;
  depth?: number;
  className?: string;
};

export function MouseParallaxLayer({ children, depth = 10, className }: MouseParallaxLayerProps) {
  const isDesktop = useIsDesktop();
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(useTransform(mouseX, [-1, 1], [-depth, depth]), { stiffness: 100, damping: 25 });
  const y = useSpring(useTransform(mouseY, [-1, 1], [-depth, depth]), { stiffness: 100, damping: 25 });

  useEffect(() => {
    if (!isDesktop || reduced) return;
    const handleMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set((e.clientX - cx) / cx);
      mouseY.set((e.clientY - cy) / cy);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isDesktop, reduced, mouseX, mouseY]);

  if (!isDesktop || reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}
