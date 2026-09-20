"use client";

import { motion } from "framer-motion";
import { useContainerVariants } from "@/components/scroll-fx";

/* Page-level entrance. The hero has variants but no initial/animate of its
   own, so it inherits hidden → show from this tree through context, even
   across the children boundary. */
export function MainShell({ children }: { children: React.ReactNode }) {
  const containerVariants = useContainerVariants();

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full pt-[68px] md:pt-24 pb-[80px] md:pb-12 min-h-[100dvh]"
      id="top"
    >
      {children}
    </motion.main>
  );
}
