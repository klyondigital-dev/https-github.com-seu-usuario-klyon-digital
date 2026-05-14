"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

interface MouseGlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function MouseGlowCard({ children, className = "" }: MouseGlowCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative group ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(157, 78, 221, 0.25),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
}
