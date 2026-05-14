"use client";

import { motion } from "framer-motion";
import { FaUserPlus, FaFilter, FaHandshake, FaTrophy, FaArrowDown } from "react-icons/fa6";

export default function AnimatedFunnel() {
  const funnelStages = [
    { name: "Visitantes (Tráfego)", width: "w-full", icon: <FaUserPlus />, color: "border-accent-blue/50 bg-accent-blue/10" },
    { name: "Leads (Captura)", width: "w-[80%]", icon: <FaFilter />, color: "border-indigo-500/50 bg-indigo-500/10" },
    { name: "Oportunidades (Qualificação)", width: "w-[60%]", icon: <FaHandshake />, color: "border-purple-500/50 bg-purple-500/10" },
    { name: "Vendas (Fechamento)", width: "w-[40%]", icon: <FaTrophy />, color: "border-accent-purple/50 bg-accent-purple/10" },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto h-[500px] flex flex-col items-center justify-between py-8">
      {/* O Lead Caindo (Bolinha Neon) */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-[0_0_20px_#fff,0_0_40px_#00f0ff] z-20 flex items-center justify-center"
        animate={{
          y: [0, 120, 240, 360, 420],
          scale: [1, 1.2, 1, 1.2, 0],
          opacity: [0, 1, 1, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
      >
        <FaArrowDown size={10} className="text-accent-purple animate-pulse" />
      </motion.div>

      {/* Linha Central conectando o funil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-blue/20 via-purple-500/20 to-accent-purple/20 z-0" />

      {/* Estágios do Funil */}
      {funnelStages.map((stage, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className={`relative z-10 ${stage.width} h-20 rounded-xl border ${stage.color} backdrop-blur-md flex items-center justify-center gap-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden group`}
        >
          {/* Efeito de Scanline passando pelo estágio */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-[2px] bg-white/40"
            animate={{ y: [0, 80] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
          />

          <div className="text-2xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            {stage.icon}
          </div>
          <h4 className="text-lg md:text-xl font-bold text-white tracking-widest uppercase">
            {stage.name}
          </h4>
        </motion.div>
      ))}
    </div>
  );
}
