"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Prevent execution on mobile/touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -100, mouseY = -100, frameX = -100, frameY = -100;
    let animationFrameId: number;

    const dot = dotRef.current;
    const frame = frameRef.current;
    const label = labelRef.current;

    if (!dot || !frame || !label) return;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const render = () => {
      // Lerp for trailing effect
      frameX += (mouseX - frameX) * 0.45;
      frameY += (mouseY - frameY) * 0.45;
      
      // Preserve scaling if mousedown is active
      const currentTransform = frame.style.transform;
      const scaleMatch = currentTransform.match(/scale\([^)]+\)/);
      const scaleStr = scaleMatch ? ` ${scaleMatch[0]}` : "";

      frame.style.transform = `translate3d(${frameX}px, ${frameY}px, 0)${scaleStr}`;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        frame.style.width = '48px';
        frame.style.height = '48px';
        frame.style.marginLeft = '-24px';
        frame.style.marginTop = '-24px';
        frame.style.borderColor = '#0038FF';
        frame.style.boxShadow = '4px 4px 0px #000';
        label.textContent = '[LOCK_ON]';
        label.style.opacity = '1';
        label.style.background = '#0038FF';
      } else {
        frame.style.width = '32px';
        frame.style.height = '32px';
        frame.style.marginLeft = '-16px';
        frame.style.marginTop = '-16px';
        frame.style.borderColor = '#000';
        frame.style.boxShadow = 'none';
        label.style.opacity = '0';
        label.style.background = '#000';
      }
    };

    const handleMouseDown = () => {
      const currentTransform = frame.style.transform;
      if (!currentTransform.includes("scale")) {
        frame.style.transform += ' scale(0.85)';
      }
    };

    const handleMouseUp = () => {
      frame.style.transform = frame.style.transform.replace(/ scale\([^)]+\)/, '');
    };

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
          transition: "width 0.15s ease-out, height 0.15s ease-out, border-color 0.15s, box-shadow 0.15s", 
          willChange: "transform", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          top: 0,
          left: 0
        }}
      >
        <span 
          ref={labelRef}
          id="sys-label" 
          style={{
            position: "absolute", 
            bottom: "-22px", 
            background: "#000", 
            color: "#fff", 
            fontFamily: "monospace", 
            fontSize: "8px", 
            padding: "2px 4px", 
            opacity: 0, 
            letterSpacing: "1px",
            transition: "opacity 0.15s, background-color 0.15s",
            whiteSpace: "nowrap"
          }}
        >
          [READY]
        </span>
      </div>
    </div>
  );
}
