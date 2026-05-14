"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay, FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function VslSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Aqui você colocará o link do seu vídeo do YouTube, Vimeo ou Panda Video
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; 

  return (
    <>
      <AnimatedSection>
        <div 
          onClick={() => setIsVideoOpen(true)}
          className="group relative w-full aspect-video rounded-3xl overflow-hidden cursor-pointer shadow-[0_0_40px_rgba(0,240,255,0.1)] hover:shadow-[0_0_60px_rgba(0,240,255,0.3)] transition-all duration-700"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10 opacity-60" />
          <Image
            src="/images/vsl_thumb.png"
            alt="Vídeo de Apresentação Klyon Digital"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-20 h-20 bg-accent-blue/30 rounded-full animate-ping" />
              <div className="w-24 h-24 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(157,78,221,0.6)] group-hover:scale-110 transition-transform duration-300">
                <FaPlay size={32} className="text-white ml-2" />
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-6 left-6 z-20">
            <span className="bg-primary/80 backdrop-blur-md text-white font-bold px-4 py-2 rounded-lg border border-white/10 text-sm group-hover:bg-accent-purple transition-colors">
              Assistir Apresentação Completa
            </span>
          </div>
        </div>
      </AnimatedSection>

      {/* MODAL DO VÍDEO */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-accent-purple/30 shadow-[0_0_100px_rgba(157,78,221,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-accent-purple text-white rounded-full flex items-center justify-center transition-colors"
              >
                <FaXmark size={24} />
              </button>
              
              <iframe 
                src={videoUrl} 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
