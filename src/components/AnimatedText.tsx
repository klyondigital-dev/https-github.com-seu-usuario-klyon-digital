"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
}

export default function AnimatedText({ text, className = "", delay = 0, highlightWords = [] }: AnimatedTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap justify-center ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
        return (
          <motion.span
            variants={child}
            style={{ marginRight: "0.25em" }}
            key={index}
            className={isHighlighted ? "text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue" : ""}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
