"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHeart, FaChartLine, FaMessage } from "react-icons/fa6";

export default function AnimatedAgencyImage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[600px]">
      {/* Imagem Principal Flutuante */}
      <motion.div
        animate={!isMobile ? { y: [0, -20, 0] } : {}}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(157,78,221,0.15)] will-change-transform"
      >
        <Image
          src="/images/social_klyon.png"
          alt="Social Media e Interações"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        {/* Camada de Gradiente Pulsante para dar vida */}
        <motion.div 
          animate={!isMobile ? { opacity: [0.1, 0.3, 0.1] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-tr from-accent-purple/40 to-accent-blue/10 mix-blend-overlay will-change-transform"
        />
      </motion.div>

      {/* Ícones/Widgets Flutuantes Interativos */}
      
      {/* Widget de Engajamento */}
      <motion.div
        animate={!isMobile ? { y: [0, -15, 0], rotate: [0, 5, 0] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-6 md:top-10 -left-4 md:-left-6 bg-secondary/80 backdrop-blur-xl border border-accent-purple/30 p-3 md:p-4 rounded-2xl shadow-[0_0_15px_rgba(157,78,221,0.2)] flex items-center gap-2 md:gap-3 z-10 will-change-transform"
      >
        <div className="w-8 h-8 md:w-10 md:h-10 bg-accent-purple/20 rounded-full flex items-center justify-center">
          <FaHeart className="text-accent-purple" size={14} />
        </div>
        <div>
          <p className="text-white font-bold text-xs md:text-sm">+24.5k</p>
          <p className="text-text-light text-[10px] md:text-xs">Engajamento</p>
        </div>
      </motion.div>

      {/* Widget de Vendas/Gráfico */}
      <motion.div
        animate={!isMobile ? { y: [0, 20, 0], rotate: [0, -5, 0] } : {}}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-10 md:bottom-16 -right-4 md:-right-6 bg-secondary/80 backdrop-blur-xl border border-accent-blue/30 p-3 md:p-4 rounded-2xl shadow-[0_0_15px_rgba(0,240,255,0.2)] flex items-center gap-2 md:gap-3 z-10 will-change-transform"
      >
        <div className="w-8 h-8 md:w-10 md:h-10 bg-accent-blue/20 rounded-full flex items-center justify-center">
          <FaChartLine className="text-accent-blue" size={14} />
        </div>
        <div>
          <p className="text-white font-bold text-xs md:text-sm">+315%</p>
          <p className="text-text-light text-[10px] md:text-xs">Conversão (ROI)</p>
        </div>
      </motion.div>

      {/* Ícone de Mensagem solto */}
      <motion.div
        animate={!isMobile ? { y: [0, -30, 0], scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 -right-2 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-primary border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.15)] z-10 will-change-transform"
      >
        <FaMessage className="text-white" size={14} />
      </motion.div>
    </div>
  );
}
