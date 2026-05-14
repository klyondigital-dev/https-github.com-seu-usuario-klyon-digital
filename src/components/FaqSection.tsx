"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import AnimatedSection from "./AnimatedSection";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Serve para o meu nicho de negócio?",
      answer: "Sim! Trabalhamos com metodologia data-driven (baseada em dados). Isso significa que não tentamos adivinhar o que funciona: nós testamos, medimos e escalamos o que traz resultado, seja você um e-commerce, prestador de serviço, clínica ou infoprodutor."
    },
    {
      question: "Em quanto tempo eu vejo o retorno (ROI) das campanhas?",
      answer: "Embora o marketing digital não seja uma fórmula mágica, nosso setup inicial focado em tráfego direto de alta conversão costuma gerar as primeiras métricas de ROI positivo logo nas semanas 2 a 4 de operação completa."
    },
    {
      question: "Qual o orçamento mínimo para começar a anunciar?",
      answer: "Recomendamos um investimento mínimo de R$ 1.500 mensais nas plataformas de anúncios (Google/Meta) para que os algoritmos tenham inteligência de dados suficiente para encontrar o seu público comprador com consistência."
    },
    {
      question: "Vocês cuidam apenas dos anúncios ou também do conteúdo?",
      answer: "A Klyon Digital atua como uma aceleradora completa. Nossos serviços vão desde a Gestão de Tráfego até o planejamento de Social Media, criação de Landing Pages de alta conversão e automações de atendimento."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-secondary border-t border-white/5 relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-accent-purple font-bold tracking-widest uppercase text-sm mb-4">Ainda tem dúvidas?</h2>
          <h3 className="text-4xl font-heading text-white font-bold">
            Perguntas Frequentes
          </h3>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <div 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-accent-blue/50 bg-primary shadow-[0_0_20px_rgba(0,240,255,0.1)]' : 'border-white/10 bg-secondary/50 hover:border-white/20'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-white' : 'text-text-light'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 ml-4"
                  >
                    <FaChevronDown className={openIndex === index ? "text-accent-blue" : "text-white/50"} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-text-light leading-relaxed border-t border-white/5 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
