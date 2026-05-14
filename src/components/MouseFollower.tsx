"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseFollower() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Valores fora do ciclo de renderização do React (muito mais rápido)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Molas físicas de alta performance
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28, mass: 0.1 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28, mass: 0.1 });
  
  const ringSpringX = useSpring(cursorX, { stiffness: 150, damping: 15, mass: 0.5 });
  const ringSpringY = useSpring(cursorY, { stiffness: 150, damping: 15, mass: 0.5 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-blue pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{
          x: ringSpringX,
          y: ringSpringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(0, 240, 255, 0.1)" : "transparent",
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent-purple rounded-full pointer-events-none z-[100] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
