"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { TimelineEvent } from "@/data/timeline";
import { cn } from "@/lib/utils";

type TimelineProps = {
  events: TimelineEvent[];
};

export function Timeline({ events }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative py-12">
      {/* Desktop center line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-outline-variant md:block">
        <motion.div
          className="w-full bg-primary"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Mobile left line */}
      <div className="absolute left-5 top-0 h-full w-px bg-outline-variant md:hidden">
        <motion.div
          className="w-full bg-primary"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="relative space-y-24">
        {events.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group relative flex flex-col items-center justify-between md:flex-row",
                !isEven && "md:flex-row-reverse"
              )}
            >
              {/* Year side */}
              <div
                className={cn(
                  "w-full pb-4 pl-12 md:w-5/12 md:pb-0 md:pl-0",
                  isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                )}
              >
                <h3 className="mb-1 text-[36px] font-semibold leading-[1.2] text-primary transition-colors group-hover:text-primary-fixed">
                  {event.year}
                </h3>
                <div className="text-[14px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
                  {event.title}
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-5 top-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_0_4px_#121318] md:left-1/2 md:top-1/2 md:-translate-y-1/2" />

              {/* Content side */}
              <div
                className={cn(
                  "w-full pl-12 md:w-5/12 md:pl-0",
                  isEven ? "md:pl-12" : "md:pr-12 md:text-right"
                )}
              >
                <div className="rounded border border-card-border bg-card-bg p-6 transition-colors duration-300 hover:border-action-hover">
                  <p className="text-[16px] leading-[1.6] text-on-surface-variant">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
