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
  cyan: "hover:border-cyan/50",
  gold: "hover:border-gold/50",
  white: "hover:border-white/50",
  "heineken-green": "hover:border-[#008200]/50",
};

const glowColors = {
  cyan: "rgba(62, 219, 240, 0.1)",
  gold: "rgba(200, 162, 78, 0.1)",
  white: "rgba(255, 255, 255, 0.1)",
  "heineken-green": "rgba(0, 130, 0, 0.1)",
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
        scale: 1.01,
        boxShadow: `0 0 20px ${glowColors[borderColor]}`,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/5 bg-surface p-6 flex flex-col justify-between transition-colors duration-300",
        borderColors[borderColor],
        className
      )}
    >
      <div className="relative z-10 h-full flex flex-col">
        {tags && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-widest uppercase py-1 px-2 border border-white/10 bg-white/5 text-white/60"
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
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-1">
                {subtitle}
              </p>
            )}
            {title && (
              <h3 className="text-xl font-syne group-hover:text-glow transition-all duration-300">
                {title}
              </h3>
            )}
          </div>
        )}
      </div>

      {/* Subtle Gradient Overlay on Hover */}
      <div 
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          borderColor === 'cyan' && "bg-radial-[at_top_right,_var(--tw-gradient-stops)] from-cyan/5 via-transparent to-transparent",
          borderColor === 'gold' && "bg-radial-[at_top_right,_var(--tw-gradient-stops)] from-gold/5 via-transparent to-transparent",
          borderColor === 'white' && "bg-radial-[at_top_right,_var(--tw-gradient-stops)] from-white/5 via-transparent to-transparent",
          borderColor === 'heineken-green' && "bg-radial-[at_top_right,_var(--tw-gradient-stops)] from-[#008200]/5 via-transparent to-transparent"
        )}
      />
    </motion.div>
  );
}
