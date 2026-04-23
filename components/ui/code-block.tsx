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
    <div className="border border-faint bg-paper">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-faint">
        <span className="font-mono text-[10px] tracking-wider text-accent uppercase">
          pipeline.ts
        </span>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-faint" />
          <div className="w-1.5 h-1.5 rounded-full bg-faint" />
          <div className="w-1.5 h-1.5 rounded-full bg-faint" />
        </div>
      </div>

      <div className="p-4 md:p-6 overflow-x-auto">
        <pre className="font-mono text-[11px] md:text-xs leading-[1.8]">
          {CODE_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.04, duration: 0.3 }}
              style={{ paddingLeft: `${line.indent * 20}px` }}
              className="whitespace-nowrap"
            >
              {line.content.length === 0
                ? "\u00A0"
                : line.content.map((seg, j) => (
                    <span key={j} className={colorMap[seg.color]}>
                      {seg.text}
                    </span>
                  ))}
            </motion.div>
          ))}
        </pre>
      </div>
    </div>
  );
};
