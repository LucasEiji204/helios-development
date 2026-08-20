"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useIsTouchDevice } from "@/lib/hooks/useMediaQuery";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const visibleRef = useRef(false);

  useEffect(() => {
    if (isTouch || reduced) return;

    document.body.classList.add("custom-cursor-active");

    const setVisibleState = (state: boolean) => {
      if (visibleRef.current === state) return;
      visibleRef.current = state;
      setVisible(state);
    };

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisibleState(true);
    };

    const leave = () => setVisibleState(false);
    const enter = () => setVisibleState(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mouseenter", enter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mouseenter", enter);
    };
  }, [isTouch, reduced, cursorX, cursorY]);

  if (isTouch || reduced) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      style={{ x: cursorX, y: cursorY }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <span className="block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
    </motion.div>
  );
}