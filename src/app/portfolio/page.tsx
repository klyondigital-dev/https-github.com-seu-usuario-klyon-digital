"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedHeroBackground from '@/components/AnimatedHeroBackground';
import AnimatedText from '@/components/AnimatedText';
import MouseGlowCard from '@/components/MouseGlowCard';

export default function PortfolioPage() {
  const services = [
    {
      title: 'Websites & Landing Pages',
      desc: 'Sites institucionais, Landing pages, Páginas de conversão e Otimização mobile.',
      price: 'Sob consulta'
    },
    {
      title: 'Social Media',
      desc: 'Gestão de Instagram, Planejamento estratégico, Conteúdo viral e Autoridade digital.',
      price: 'Sob consulta'
    },
    {
      title: 'Automação & Sistemas',
      desc: 'Sistemas inteligentes com CRM, Automação WhatsApp, Integrações e Funis automatizados.',
      price: 'Sob consulta'
    },
    {
      title: 'Marketing & Performance',
      desc: 'Gestão de tráfego pago (Meta Ads e Google Ads), Estratégias de conversão, Escala de leads e Campanhas inteligentes.',
      price: 'Sob consulta'
    },
    {
      title: 'Branding & Design',
      desc: 'Identidade visual, Artes premium, Posicionamento visual e Criativos de alta conversão.',
      price: 'Sob consulta'
    },
    {
      title: 'Gestão Técnica Contínua',
      desc: 'Manutenção, suporte especializado, atualizações de segurança e otimização de performance.',
      price: 'Sob consulta'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-primary text-text-main font-sans">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
          <AnimatedHeroBackground />

          <div className="relative z-10 max-w-6xl text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex px-4 py-2 border border-accent-blue/30 rounded-full text-sm tracking-[3px] uppercase mb-8 backdrop-blur-xl bg-accent-blue/5 text-accent-blue font-bold shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            >
              Klyon Digital
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tight mb-8">
              <AnimatedText 
                text="SUA EMPRESA PRECISA PARECER GIGANTE." 
                highlightWords={["GIGANTE.", "PRECISA"]}
                className="text-white"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="max-w-3xl mx-auto text-text-light text-xl leading-relaxed mb-10"
            >
              Criamos estruturas digitais premium para empresas que desejam dominar seu mercado, aumentar autoridade e transformar presença digital em vendas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col md:flex-row gap-6 justify-center"
            >
              <a 
                href="https://wa.me/5518981290630" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-10 py-5 rounded-2xl bg-transparent font-bold text-lg overflow-hidden block"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-purple to-accent-blue opacity-100 transition-all duration-300 group-hover:scale-105"></div>
                <span className="relative text-white flex items-center justify-center gap-2">
                  SOLICITAR PROPOSTA
                </span>
              </a>

              <a 
                href="#servicos"
                className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                VER SERVIÇOS
              </a>
            </motion.div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="py-32 px-6 bg-secondary relative border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="uppercase tracking-[4px] text-accent-purple font-bold mb-4"
              >
                Diferenciais
              </motion.p>

              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <AnimatedText text="Não entregamos apenas design." />
              </h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-text-light max-w-3xl mx-auto text-lg"
              >
                Construímos percepção de valor, posicionamento estratégico e estruturas digitais preparadas para crescimento.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Design Premium', 'Estratégia de Conversão', 'Posicionamento Forte', 'Estrutura Profissional'].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <MouseGlowCard className="p-8 h-full group hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-primary border border-white/10 text-accent-blue flex items-center justify-center font-black text-2xl mb-6 shadow-[0_0_15px_rgba(0,240,255,0.1)] group-hover:text-accent-purple group-hover:scale-110 transition-all duration-500">
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {item}
                    </h3>
                    <p className="text-text-light leading-relaxed">
                      Estruturas desenvolvidas para transmitir autoridade e elevar a percepção da sua marca.
                    </p>
                  </MouseGlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="py-32 px-6 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 text-center">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="uppercase tracking-[4px] text-accent-blue font-bold mb-4"
              >
                Arsenal de Serviços
              </motion.p>

              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <AnimatedText text="Estruturas criadas para crescimento absoluto." highlightWords={["crescimento", "absoluto."]} />
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <MouseGlowCard className="p-8 h-full flex flex-col justify-between group cursor-default">
                    <div>
                      <div className="text-accent-purple text-sm tracking-[3px] font-bold uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                        Klyon Digital
                      </div>
                      <h3 className="text-3xl font-black mb-4 text-white">
                        {service.title}
                      </h3>
                      <p className="text-text-light leading-relaxed mb-8">
                        {service.desc}
                      </p>
                    </div>
                    
                    <div>
                      <div className="text-2xl font-bold mb-6 text-white">
                        {service.price}
                      </div>
                      <a 
                        href="https://wa.me/5518981290630" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full py-4 rounded-xl border border-white/10 bg-white/5 text-center text-white font-bold hover:bg-white hover:text-black transition-all duration-300"
                      >
                        QUERO ESSA ESTRUTURA
                      </a>
                    </div>
                  </MouseGlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="py-40 px-6 relative overflow-hidden bg-secondary border-t border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="uppercase tracking-[5px] text-accent-purple font-bold mb-6"
            >
              Posicionamento Estratégico
            </motion.p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-10">
              <AnimatedText 
                text="EMPRESAS QUE NÃO APARECEM, NÃO VENDEM." 
                highlightWords={["APARECEM,", "VENDEM."]}
                className="justify-center"
              />
            </h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-text-light text-xl max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Enquanto seus concorrentes ainda tentam parecer profissionais, a Klyon cria marcas que transformam líderes absolutos de seus segmentos.
            </motion.p>

            <motion.a 
              href="https://wa.me/5518981290630"
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="inline-block px-12 py-6 rounded-2xl bg-gradient-to-r from-accent-purple to-accent-blue text-white font-black text-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(157,78,221,0.5)] transition-all duration-300"
            >
              TRANSFORMAR MINHA EMPRESA
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
