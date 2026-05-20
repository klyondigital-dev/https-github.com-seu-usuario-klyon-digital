"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/90 backdrop-blur-md py-4 border-b border-accent-purple/20" : "bg-transparent py-6"
      }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-accent-purple to-accent-blue origin-left"
        style={{ scaleX: scrollYProgress, width: "100%" }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-2xl font-heading font-extrabold tracking-tight text-white drop-shadow-[0_0_10px_rgba(157,78,221,0.5)]">
              Klyon <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Digital</span>
            </span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase text-text-light">
          <Link href="/#servicos" className="hover:text-accent-blue transition-colors">Serviços</Link>
          <Link href="/#agencia" className="hover:text-accent-blue transition-colors">A Agência</Link>
          <Link href="/#metodo" className="hover:text-accent-blue transition-colors">Método</Link>
          <Link href="/portfolio" className="hover:text-accent-blue transition-colors text-white drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">Portfólio</Link>
        </nav>
        
        <a
          href="https://wa.me/5518981290630"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 py-2 rounded-full font-bold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
        >
          Falar com Especialista
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <motion.div 
        initial={false}
        animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-primary/95 backdrop-blur-xl border-b border-white/10"
      >
        <nav className="flex flex-col items-center gap-6 py-8 text-sm font-bold tracking-widest uppercase text-text-light">
          <Link href="/#servicos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent-blue transition-colors">Serviços</Link>
          <Link href="/#agencia" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent-blue transition-colors">A Agência</Link>
          <Link href="/#metodo" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent-blue transition-colors">Método</Link>
          <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent-blue transition-colors text-white">Portfólio</Link>
          
          <a
            href="https://wa.me/5518981290630"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-gradient-to-r from-accent-purple to-accent-blue text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide"
          >
            Falar com Especialista
          </a>
        </nav>
      </motion.div>
    </header>
  );
}
