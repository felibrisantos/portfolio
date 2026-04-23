"use client";

import { motion } from "framer-motion";

export const CyanGlow = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{
        scale: [0.8, 1.1, 0.8],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`pointer-events-none w-[500px] h-[500px] rounded-full blur-[120px] bg-[radial-gradient(circle,_rgba(62,219,240,0.08)_0%,_transparent_70%)] ${className}`}
    />
  );
};
