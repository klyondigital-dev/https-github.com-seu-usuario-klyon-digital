"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function AnimatedHeroBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Usando setTimeout para evitar chamadas síncronas de setState dentro do effect, o que causa erro no linter do Next 15.
    // Isso também previne problemas de hidratação pois os valores randômicos são gerados puramente no cliente.
    const isMobile = window.innerWidth < 768;
    const t = setTimeout(() => {
      setParticles(
        Array.from({ length: isMobile ? 15 : 40 }).map((_, i) => ({
          id: i,
          size: Math.random() * 4 + 1,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.5 + 0.2,
        }))
      );
    }, 0);
    return () => clearTimeout(t);
  }, []);

  if (particles.length === 0) return <div className="absolute inset-0 bg-[#050508] z-0" />;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#050508]">
      {/* Grade de fundo tecnológica */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

      {/* Orbes de luz flutuantes - Animação simplificada via CSS ou reduzida */}
      <motion.div
        animate={typeof window !== 'undefined' && window.innerWidth >= 768 ? {
          x: ["0%", "20%", "0%", "-20%", "0%"],
          y: ["0%", "20%", "-20%", "10%", "0%"],
          scale: [1, 1.2, 0.8, 1.1, 1],
        } : {}}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
      />
      
      <motion.div
        animate={typeof window !== 'undefined' && window.innerWidth >= 768 ? {
          x: ["0%", "-30%", "10%", "20%", "0%"],
          y: ["0%", "-10%", "30%", "-20%", "0%"],
          scale: [1, 0.9, 1.3, 0.9, 1],
        } : {}}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-accent-blue/15 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
      />

      {/* Partículas brilhantes */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white shadow-[0_0_10px_#fff] pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Camada de escurecimento para dar contraste ao texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary pointer-events-none" />
    </div>
  );
}
