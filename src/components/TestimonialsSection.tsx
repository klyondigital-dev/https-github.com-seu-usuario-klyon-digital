"use client";

import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import AnimatedSection from "./AnimatedSection";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rafael S.",
      role: "Dono de E-commerce",
      text: "Nós tínhamos um bom produto, mas o tráfego não convertia. A Klyon refez nosso funil e automações. Resultado: faturamento triplicou no segundo mês.",
      results: "+210% de ROI"
    },
    {
      name: "Mariana L.",
      role: "Clínica de Estética",
      text: "Eu gastava muito tempo respondendo WhatsApp. A automação com CRM que eles montaram encheu minha agenda sem eu precisar falar com os leads o dia todo.",
      results: "Agenda Lotada 30 dias"
    },
    {
      name: "Carlos M.",
      role: "Infoprodutor",
      text: "Transparência total. É a primeira agência que me mostra um dashboard claro onde eu sei exatamente para onde está indo cada centavo do meu tráfego.",
      results: "R$ 500k+ Escalados"
    }
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Luz de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-accent-blue font-bold tracking-widest uppercase text-sm mb-4">A Prova Final</h2>
          <h3 className="text-4xl md:text-5xl font-heading text-white font-bold">
            Empresários que já <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Escalaram</span>
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <AnimatedSection key={index} delay={0.2 * index}>
              <div className="bg-secondary/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl relative h-full flex flex-col group hover:border-accent-blue/30 transition-all duration-300">
                <FaQuoteLeft className="text-accent-purple/20 text-6xl absolute top-6 right-6 z-0 group-hover:scale-110 group-hover:text-accent-purple/40 transition-all duration-500" />
                
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" size={16} />
                  ))}
                </div>
                
                <p className="text-text-light italic mb-8 relative z-10 flex-1">
                  &quot;{item.text}&quot;
                </p>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-6 relative z-10">
                  <div>
                    <h5 className="font-bold text-white">{item.name}</h5>
                    <p className="text-xs text-accent-blue">{item.role}</p>
                  </div>
                  <div className="bg-accent-purple/10 border border-accent-purple/30 px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-accent-purple">{item.results}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
