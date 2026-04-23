"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: "cyan" | "gold" | "white" | "heineken-green";
  title?: string;
  subtitle?: string;
  tags?: string[];
}

const borderColors = {
  cyan: "hover:border-accent/40",
  gold: "hover:border-accent/30", // Re-mapped to accent for consistency
  white: "hover:border-white/20",
  "heineken-green": "hover:border-accent/30",
};

const glowColors = {
  cyan: "rgba(0, 229, 255, 0.05)",
  gold: "rgba(255, 255, 255, 0.05)",
  white: "rgba(255, 255, 255, 0.05)",
  "heineken-green": "rgba(0, 229, 255, 0.05)",
};

export function BentoCard({
  children,
  className,
  borderColor = "white",
  title,
  subtitle,
  tags,
}: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.005,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-none border-[0.5px] border-white/10 bg-white/[0.03] backdrop-blur-md p-4 md:p-6 flex flex-col justify-between transition-all duration-500",
        borderColors[borderColor],
        className
      )}
    >
      {/* Corner Markers */}
      <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white/0 group-hover:border-accent/50 transition-colors duration-500" />
      <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-white/0 group-hover:border-accent/50 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-white/0 group-hover:border-accent/50 transition-colors duration-500" />
      <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-white/0 group-hover:border-accent/50 transition-colors duration-500" />

      <div className="relative z-10 h-full flex flex-col">
        {tags && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] tracking-[0.2em] uppercase py-1 px-2 border-[0.5px] border-white/10 bg-white/[0.02] text-white/40 group-hover:text-accent/60 group-hover:border-accent/20 transition-colors duration-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {children}

        {(title || subtitle) && (
          <div className="mt-auto pt-6">
            {subtitle && (
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/30 mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h3 className="text-xl font-bodoni italic group-hover:text-accent transition-colors duration-500">
                {title}
              </h3>
            )}
          </div>
        )}
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
    </motion.div>
  );
}
