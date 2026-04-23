"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LOG_MESSAGES = [
  "CYMA_ENGINE_ACTIVE",
  "NEURAL_MODELS_SYNCED",
  "PROMPT_VERIFIED_STRICT",
  "CORE_KERNEL_LOADED",
  "VIRTUAL_DOM_SYNCING",
  "DATA_STREAM_ESTABLISHED",
  "AGENT_MESH_ONLINE",
  "SECURE_LAYER_STABLE",
];

export const TerminalPreview = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextLogs = [...prev, LOG_MESSAGES[index]];
        if (nextLogs.length > 5) return nextLogs.slice(1);
        return nextLogs;
      });
      setIndex((prev) => (prev + 1) % LOG_MESSAGES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative w-full max-w-[400px] aspect-video bg-surface/80 backdrop-blur-md border border-white/10 rounded-none p-4 font-mono overflow-hidden mx-auto">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 bg-white/10" />
          <div className="w-1.5 h-1.5 bg-white/10" />
          <div className="w-1.5 h-1.5 bg-white/10" />
        </div>
        <div className="text-[9px] text-white/40 uppercase tracking-[0.3em]">AI_CORE_VISUALIZER</div>
      </div>

      <div className="space-y-1.5">
        <AnimatePresence mode="popLayout">
          {logs.map((log, i) => (
            <motion.div
              key={`${log}-${i}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] flex items-center gap-2"
            >
              <span className="text-accent/50">›</span>
              <span className="text-white/70 tracking-tight">{log}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-1 h-3 bg-accent/40"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 right-4">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-12 h-12 rounded-none border-[0.5px] border-accent/20 flex items-center justify-center"
        >
          <div className="w-6 h-6 bg-accent/10 blur-md" />
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(0,229,255,0.02),rgba(0,0,0,0),rgba(0,229,255,0.02))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
};
