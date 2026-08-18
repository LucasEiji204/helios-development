"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsTouchDevice } from "@/lib/hooks/useMediaQuery";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const reduced = useReducedMotion();
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { stiffness: 500, damping: 35 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isTouch || reduced) return;

    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;
      setLabel(cursorEl?.dataset.cursor || "");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mouseenter", enter);
    document.addEventListener("mouseover", handleOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [isTouch, reduced, cursorX, cursorY]);

  if (isTouch || reduced) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      style={{ x, y }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: label ? 2.5 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {label ? (
        <span className="flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 text-[8px] font-bold uppercase tracking-wider text-white">
          {label}
        </span>
      ) : (
        <span className="block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      )}
    </motion.div>
  );
}
