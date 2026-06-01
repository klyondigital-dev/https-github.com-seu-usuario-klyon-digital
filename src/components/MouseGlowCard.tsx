"use client";

import { ReactNode } from "react";

interface MouseGlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function MouseGlowCard({ children, className = "" }: MouseGlowCardProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Glow Effect Simplificado e Super Leve (Apenas CSS) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(157,78,221,0.2)_0%,transparent_70%)]"
      />
      {children}
    </div>
  );
}
