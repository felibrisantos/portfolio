"use client";

import { motion } from "framer-motion";

type Segment = { text: string; color: "ink" | "accent" | "muted" };
type CodeLine = { indent: number; content: Segment[] };

const CODE_LINES: CodeLine[] = [
  { indent: 0, content: [{ text: "// cyma-ai/pipeline.ts", color: "muted" }] },
  { indent: 0, content: [] },
  {
    indent: 0,
    content: [
      { text: "import", color: "accent" },
      { text: " { Agent, Pipeline } ", color: "ink" },
      { text: "from", color: "accent" },
      { text: ' "@cyma/core"', color: "muted" },
    ],
  },
  {
    indent: 0,
    content: [
      { text: "import", color: "accent" },
      { text: " { rag, mcp } ", color: "ink" },
      { text: "from", color: "accent" },
      { text: ' "@cyma/tools"', color: "muted" },
    ],
  },
  { indent: 0, content: [] },
  {
    indent: 0,
    content: [
      { text: "const", color: "accent" },
      { text: " architect = ", color: "ink" },
      { text: "new", color: "accent" },
      { text: " Agent({", color: "ink" },
    ],
  },
  {
    indent: 1,
    content: [
      { text: "model: ", color: "ink" },
      { text: '"claude-sonnet-4.7"', color: "muted" },
      { text: ",", color: "ink" },
    ],
  },
  {
    indent: 1,
    content: [
      { text: "role: ", color: "ink" },
      { text: '"architect"', color: "muted" },
      { text: ",", color: "ink" },
    ],
  },
  {
    indent: 1,
    content: [{ text: "tools: [rag, mcp],", color: "ink" }],
  },
  { indent: 0, content: [{ text: "})", color: "ink" }] },
  { indent: 0, content: [] },
  {
    indent: 0,
    content: [
      { text: "export const", color: "accent" },
      { text: " pipeline = Pipeline", color: "ink" },
    ],
  },
  { indent: 1, content: [{ text: ".chain(architect)", color: "ink" }] },
  { indent: 1, content: [{ text: ".transform(cleaner)", color: "ink" }] },
  { indent: 1, content: [{ text: ".output(designer)", color: "ink" }] },
  { indent: 1, content: [{ text: ".build()", color: "ink" }] },
];

const colorMap: Record<string, string> = {
  ink: "text-ink",
  accent: "text-accent",
  muted: "text-muted",
};

export const CodeBlock = () => {
  return (
    <div className="border-[0.5px] border-white/10 bg-white/[0.03] backdrop-blur-md rounded-none">
      <div className="flex items-center justify-between px-4 py-3 border-b-[0.5px] border-white/10">
        <span className="font-mono text-[9px] tracking-[0.4em] text-accent/60 uppercase">
          src/kernel/pipeline.ts
        </span>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 bg-white/5" />
          <div className="w-1.5 h-1.5 bg-white/5" />
          <div className="w-1.5 h-1.5 bg-accent/20" />
        </div>
      </div>

      <div className="p-4 md:p-8 overflow-x-auto">
        <pre className="font-mono text-[10px] md:text-[11px] leading-[2] tracking-tight">
          {CODE_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.03, duration: 0.4 }}
              style={{ paddingLeft: `${line.indent * 24}px` }}
              className="whitespace-nowrap flex gap-4"
            >
              <span className="text-white/10 w-4 text-right select-none">{i + 1}</span>
              <div className="flex">
                {line.content.length === 0
                  ? "\u00A0"
                  : line.content.map((seg, j) => (
                      <span key={j} className={colorMap[seg.color]}>
                        {seg.text}
                      </span>
                    ))}
              </div>
            </motion.div>
          ))}
        </pre>
      </div>
    </div>
  );
};
