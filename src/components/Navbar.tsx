"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

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
        <nav className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase text-text-light">
          <Link href="#servicos" className="hover:text-accent-blue transition-colors">Serviços</Link>
          <Link href="#agencia" className="hover:text-accent-blue transition-colors">A Agência</Link>
          <Link href="#metodo" className="hover:text-accent-blue transition-colors">Método</Link>
        </nav>
        <a
          href="https://wa.me/5518981290630"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 py-2 rounded-full font-bold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
        >
          Falar com Especialista
        </a>
      </div>
    </header>
  );
}
