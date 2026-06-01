"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaUserPlus, FaFilter, FaHandshake, FaTrophy, FaArrowDown } from "react-icons/fa6";

export default function AnimatedFunnel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const funnelStages = [
    { name: "Visitantes (Tráfego)", width: "w-full", icon: <FaUserPlus />, color: "border-accent-blue/50 bg-accent-blue/10" },
    { name: "Leads (Captura)", width: "w-[80%]", icon: <FaFilter />, color: "border-indigo-500/50 bg-indigo-500/10" },
    { name: "Oportunidades (Qualificação)", width: "w-[60%]", icon: <FaHandshake />, color: "border-purple-500/50 bg-purple-500/10" },
    { name: "Vendas (Fechamento)", width: "w-[40%]", icon: <FaTrophy />, color: "border-accent-purple/50 bg-accent-purple/10" },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto h-[400px] md:h-[500px] flex flex-col items-center justify-between py-6 md:py-8">
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(80px); }
        }
        @keyframes falling-lead {
          0% { transform: translate(-50%, 0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          25% { transform: translate(-50%, 120px) scale(1.2); }
          50% { transform: translate(-50%, 240px) scale(1); }
          75% { transform: translate(-50%, 360px) scale(1.2); opacity: 1; }
          100% { transform: translate(-50%, 420px) scale(0); opacity: 0; }
        }
      `}</style>

      {/* O Lead Caindo (Bolinha Neon) - Apenas no Desktop */}
      {!isMobile && (
        <div
          className="absolute top-0 left-1/2 w-6 h-6 bg-white rounded-full shadow-[0_0_20px_#fff,0_0_40px_#00f0ff] z-20 flex items-center justify-center"
          style={{ animation: "falling-lead 3s infinite linear" }}
        >
          <FaArrowDown size={10} className="text-accent-purple" />
        </div>
      )}

      {/* Linha Central conectando o funil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-blue/20 via-purple-500/20 to-accent-purple/20 z-0" />

      {/* Estágios do Funil */}
      {funnelStages.map((stage, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className={`relative z-10 ${stage.width} h-16 md:h-20 rounded-xl border ${stage.color} backdrop-blur-md flex items-center justify-center gap-3 md:gap-4 shadow-[0_0_25px_rgba(0,0,0,0.4)] overflow-hidden group will-change-transform`}
        >
          {/* Efeito de Scanline passando pelo estágio - Apenas no Desktop */}
          {!isMobile && (
            <div 
              className="absolute top-0 left-0 w-full h-[2px] bg-white/40"
              style={{ animation: `scanline 2s infinite linear ${index * 0.5}s` }}
            />
          )}

          <div className="text-xl md:text-2xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            {stage.icon}
          </div>
          <h4 className="text-sm md:text-xl font-bold text-white tracking-widest uppercase">
            {stage.name}
          </h4>
        </motion.div>
      ))}
    </div>
  );
}
