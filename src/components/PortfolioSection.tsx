"use client";

import AnimatedSection from "./AnimatedSection";
import MouseGlowCard from "./MouseGlowCard";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "Sorridente Lab",
    category: "Web & Posicionamento",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "E-commerce Premium",
    category: "Design & Tráfego",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Dashboard de Performance",
    category: "Sistemas & Automação",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Lançamento Digital",
    category: "Performance & Copy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.05)_0%,transparent_60%)] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_60%)] pointer-events-none translate-x-1/2" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-accent-blue font-bold tracking-widest uppercase text-sm mb-4">Nossos Trabalhos</h2>
          <h3 className="text-4xl md:text-5xl font-heading text-white font-bold">
            O resultado fala <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">por si só</span>
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={0.1 * index}>
              <MouseGlowCard className="group overflow-hidden rounded-[2rem] border border-white/10 bg-secondary/50 p-4 h-full cursor-default">
                <div className="relative h-72 md:h-96 w-full overflow-hidden rounded-[1.5rem] mb-6">
                  {/* Imagem do Projeto */}
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay gradiente para dar contraste ao texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Categoria */}
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-1.5 bg-black/40 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="px-4 pb-4">
                  <h4 className="text-3xl font-heading font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-text-light text-base leading-relaxed">
                    Estrutura desenvolvida sob medida com foco extremo em autoridade, alta conversão e aceleração de resultados no ambiente digital.
                  </p>
                </div>
              </MouseGlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
