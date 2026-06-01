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
      <style>{`
        @keyframes float-img {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-overlay {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes float-widget-1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-widget-2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        @keyframes float-icon {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
      `}</style>

      {/* Imagem Principal Flutuante */}
      <div
        className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(157,78,221,0.15)]"
        style={{ animation: !isMobile ? "float-img 6s ease-in-out infinite" : "none" }}
      >
        <Image
          src="/images/social_klyon.png"
          alt="Social Media e Interações"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        {/* Camada de Gradiente Pulsante para dar vida */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-accent-purple/40 to-accent-blue/10 mix-blend-overlay"
          style={{ animation: !isMobile ? "pulse-overlay 4s ease-in-out infinite" : "none" }}
        />
      </div>

      {/* Ícones/Widgets Flutuantes Interativos */}
      
      {/* Widget de Engajamento */}
      <div
        className="absolute top-6 md:top-10 -left-4 md:-left-6 bg-secondary/80 backdrop-blur-xl border border-accent-purple/30 p-3 md:p-4 rounded-2xl shadow-[0_0_15px_rgba(157,78,221,0.2)] flex items-center gap-2 md:gap-3 z-10"
        style={{ animation: !isMobile ? "float-widget-1 4s ease-in-out infinite 1s" : "none" }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10 bg-accent-purple/20 rounded-full flex items-center justify-center">
          <FaHeart className="text-accent-purple" size={14} />
        </div>
        <div>
          <p className="text-white font-bold text-xs md:text-sm">+24.5k</p>
          <p className="text-text-light text-[10px] md:text-xs">Engajamento</p>
        </div>
      </div>

      {/* Widget de Vendas/Gráfico */}
      <div
        className="absolute bottom-10 md:bottom-16 -right-4 md:-right-6 bg-secondary/80 backdrop-blur-xl border border-accent-blue/30 p-3 md:p-4 rounded-2xl shadow-[0_0_15px_rgba(0,240,255,0.2)] flex items-center gap-2 md:gap-3 z-10"
        style={{ animation: !isMobile ? "float-widget-2 5s ease-in-out infinite 0.5s" : "none" }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10 bg-accent-blue/20 rounded-full flex items-center justify-center">
          <FaChartLine className="text-accent-blue" size={14} />
        </div>
        <div>
          <p className="text-white font-bold text-xs md:text-sm">+315%</p>
          <p className="text-text-light text-[10px] md:text-xs">Conversão (ROI)</p>
        </div>
      </div>

      {/* Ícone de Mensagem solto */}
      <div
        className="absolute top-1/2 -right-2 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-primary border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.15)] z-10"
        style={{ animation: !isMobile ? "float-icon 3s ease-in-out infinite 2s" : "none" }}
      >
        <FaMessage className="text-white" size={14} />
      </div>
    </div>
  );
}
