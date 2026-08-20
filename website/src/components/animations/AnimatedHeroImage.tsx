"use client";

import { motion } from "framer-motion";

export function AnimatedHeroImage() {
    return (
        <motion.div
            className="relative hidden h-[420px] w-[420px] md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
        >
            {/* Anel externo com rotação lenta */}
            <div className="absolute inset-0 animate-[spin_40s_linear_infinite] rounded-full border border-primary/20">
                <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_20px_rgba(183,196,255,0.8)]" />
            </div>

            {/* Anel interno com rotação reversa */}
            <div className="absolute inset-8 animate-[spin_30s_linear_infinite_reverse] rounded-full border border-dashed border-action-hover/30" />

            {/* Núcleo com gradiente animado */}
            <div className="absolute inset-16 animate-pulse rounded-full bg-gradient-to-br from-action/20 via-primary/10 to-transparent blur-2xl" />

            {/* Ponto orbital intermediário */}
            <div className="absolute inset-[15%] animate-[spin_25s_linear_infinite_reverse] rounded-full border border-primary/10">
                <div className="absolute bottom-1/2 right-0 h-1.5 w-1.5 rounded-full bg-action-hover shadow-[0_0_15px_rgba(61,124,255,0.8)]" />
            </div>

            {/* Ícone central */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined animate-pulse text-[120px] text-primary/80">
                    rocket_launch
                </span>
            </div>
        </motion.div>
    );
}