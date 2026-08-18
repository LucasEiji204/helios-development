"use client";

import { PageTransition } from "@/components/animations/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
