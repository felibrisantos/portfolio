"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent execution on mobile/touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -100, mouseY = -100, frameX = -100, frameY = -100;
    let scale = 1, targetScale = 1;
    let animationFrameId: number;

    const dot = dotRef.current;
    const frame = frameRef.current;

    if (!dot || !frame) return;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const render = () => {
      // Lerp for trailing effect
      frameX += (mouseX - frameX) * 0.45;
      frameY += (mouseY - frameY) * 0.45;
      scale += (targetScale - scale) * 0.2;

      frame.style.transform = `translate3d(${frameX}px, ${frameY}px, 0) scale(${scale})`;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = !!target.closest('a, button, [role="button"]');
      frame.style.borderColor = interactive ? "#0038FF" : "#000";
      targetScale = interactive ? 1.5 : 1;
    };

    const handleMouseDown = () => { targetScale *= 0.85; };
    const handleMouseUp = () => { targetScale /= 0.85; };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="brutalist-cursor-hub" className="hidden md:block pointer-events-none fixed inset-0 z-[99999]">
      <div
        ref={dotRef}
        id="sys-dot"
        style={{
          position: "fixed",
          width: "10px",
          height: "10px",
          marginLeft: "-5px",
          marginTop: "-5px",
          background: "#0038FF",
          border: "1.5px solid #000",
          willChange: "transform",
          top: 0,
          left: 0
        }}
      />
      <div
        ref={frameRef}
        id="sys-frame"
        style={{
          position: "fixed",
          width: "32px",
          height: "32px",
          marginLeft: "-16px",
          marginTop: "-16px",
          border: "2px solid #000",
          transition: "border-color 0.15s",
          willChange: "transform",
          top: 0,
          left: 0
        }}
      />
    </div>
  );
}
