"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeart, FaChartLine, FaMessage } from "react-icons/fa6";

export default function AnimatedAgencyImage() {
  return (
    <div className="relative w-full h-[600px]">
      {/* Imagem Principal Flutuante */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(157,78,221,0.2)]"
      >
        <Image
          src="/images/social_klyon.png"
          alt="Social Media e Interações"
          fill
          className="object-cover"
        />
        {/* Camada de Gradiente Pulsante para dar vida */}
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-tr from-accent-purple/40 to-accent-blue/10 mix-blend-overlay"
        />
      </motion.div>

      {/* Ícones/Widgets Flutuantes Interativos */}
      
      {/* Widget de Engajamento */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-10 -left-6 bg-secondary/80 backdrop-blur-xl border border-accent-purple/30 p-4 rounded-2xl shadow-[0_0_20px_rgba(157,78,221,0.3)] flex items-center gap-3 z-10"
      >
        <div className="w-10 h-10 bg-accent-purple/20 rounded-full flex items-center justify-center">
          <FaHeart className="text-accent-purple" />
        </div>
        <div>
          <p className="text-white font-bold text-sm">+24.5k</p>
          <p className="text-text-light text-xs">Engajamento</p>
        </div>
      </motion.div>

      {/* Widget de Vendas/Gráfico */}
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-16 -right-6 bg-secondary/80 backdrop-blur-xl border border-accent-blue/30 p-4 rounded-2xl shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-3 z-10"
      >
        <div className="w-10 h-10 bg-accent-blue/20 rounded-full flex items-center justify-center">
          <FaChartLine className="text-accent-blue" />
        </div>
        <div>
          <p className="text-white font-bold text-sm">+315%</p>
          <p className="text-text-light text-xs">Conversão (ROI)</p>
        </div>
      </motion.div>

      {/* Ícone de Mensagem solto */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 -right-4 w-12 h-12 bg-primary border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] z-10"
      >
        <FaMessage className="text-white" />
      </motion.div>
    </div>
  );
}
