"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useIsDesktop } from "@/lib/hooks/useMediaQuery";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type TiltCardProps = {
    children: React.ReactNode;
    className?: string;
    maxTilt?: number;
};

export function TiltCard({ children, className, maxTilt = 6 }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isDesktop = useIsDesktop();
    const reduced = useReducedMotion();

    const mx = useMotionValue(0.5);
    const my = useMotionValue(0.5);
    const rotateX = useSpring(useTransform(my, [0, 1], [maxTilt, -maxTilt]), {
        stiffness: 200,
        damping: 25,
    });
    const rotateY = useSpring(useTransform(mx, [0, 1], [-maxTilt, maxTilt]), {
        stiffness: 200,
        damping: 25,
    });

    if (!isDesktop || reduced) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
            onMouseMove={(e) => {
                const rect = ref.current!.getBoundingClientRect();
                mx.set((e.clientX - rect.left) / rect.width);
                my.set((e.clientY - rect.top) / rect.height);
            }}
            onMouseLeave={() => {
                mx.set(0.5);
                my.set(0.5);
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}