"use client";

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
    // Generate particles only on the client
    const isMobileDevice = window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches;
    
    setParticles(
      Array.from({ length: isMobileDevice ? 8 : 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 15 + 15, // Slower, lighter animation
        delay: Math.random() * 5,
        opacity: Math.random() * 0.4 + 0.1,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#050508]">
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-200px); opacity: 0; }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
      `}</style>

      {/* Grade de fundo tecnológica */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

      {/* Orbes de luz flutuantes (Agora mais leves e usando CSS puro) */}
      <div
        className="absolute top-[20%] left-[20%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-accent-purple/15 md:bg-accent-purple/20 rounded-full blur-[80px] pointer-events-none"
        style={{ animation: "glow-pulse 8s infinite ease-in-out" }}
      />
      
      <div
        className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent-blue/10 md:bg-accent-blue/15 rounded-full blur-[80px] pointer-events-none"
        style={{ animation: "glow-pulse 10s infinite ease-in-out reverse" }}
      />

      {/* Partículas brilhantes com CSS Nativo (Sem impacto na thread do React) */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: 0, // Starts hidden, animated via CSS
            animation: `float-up ${particle.duration}s infinite linear ${particle.delay}s`,
          }}
        />
      ))}

      {/* Camada de escurecimento para dar contraste ao texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary pointer-events-none" />
    </div>
  );
}
