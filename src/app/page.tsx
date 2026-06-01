import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import MouseGlowCard from "@/components/MouseGlowCard";
// import VslSection from "@/components/VslSection";
import AnimatedFunnel from "@/components/AnimatedFunnel";
import AnimatedAgencyImage from "@/components/AnimatedAgencyImage";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import { FaChartLine, FaShareNodes, FaLaptopCode, FaRobot, FaDatabase, FaArrowRight, FaBolt, FaCircleCheck, FaPalette } from "react-icons/fa6";

export default function Home() {
  const whatsappUrl1 = "https://wa.me/5518981290630";
  const whatsappUrl2 = "https://wa.me/5538997368504";

  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <AnimatedHeroBackground />

          <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-20">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-blue/30 bg-accent-blue/5 mb-8">
                  <FaBolt className="text-accent-blue" />
                  <span className="text-accent-blue text-sm font-bold tracking-widest uppercase">Marketing de Alta Performance</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-heading text-white font-extrabold leading-tight mb-8">
                  Transformamos Tecnologia e Tráfego em <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Escala Absoluta</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <p className="text-lg md:text-2xl text-text-light mb-12 font-light max-w-3xl mx-auto leading-relaxed">
                  Não somos apenas uma agência. Somos a engrenagem que automatiza seus processos, domina suas redes sociais e injeta previsibilidade de vendas no seu negócio.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                  <a
                    href={whatsappUrl1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-transparent border-2 border-transparent rounded-full overflow-hidden"
                  >
                    <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-purple to-accent-blue rounded-full opacity-100"></div>
                    <div className="absolute inset-0 w-full h-full transition-all duration-500 ease-out scale-0 translate-x-0 translate-y-0 bg-white group-hover:scale-100 group-hover:opacity-10 rounded-full"></div>
                    <span className="relative flex items-center gap-2 text-lg">Começar a Escalar <FaArrowRight className="group-hover:translate-x-1 transition-transform" /></span>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* NOSSOS SERVIÇOS */}
        <section id="servicos" className="py-24 bg-primary relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="text-center mb-20">
              <h2 className="text-accent-purple font-bold tracking-widest uppercase text-sm mb-4">Nosso Arsenal</h2>
              <h3 className="text-4xl md:text-5xl font-heading text-white font-bold">
                Soluções para o Domínio Digital
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <FaChartLine size={32} />, title: "Gestão de Tráfego Pago", desc: "Campanhas ultra-segmentadas no Meta e Google Ads para atrair clientes qualificados e maximizar o seu ROAS." },
                { icon: <FaShareNodes size={32} />, title: "Social Media", desc: "Posicionamento estratégico, design premium e gestão de comunidade para transformar seguidores em fãs." },
                { icon: <FaPalette size={32} />, title: "Criação de Artes (Design)", desc: "Criativos de altíssima conversão para anúncios e identidades visuais personalizadas que valorizam a sua marca." },
                { icon: <FaLaptopCode size={32} />, title: "Criação de Sites", desc: "Landing pages e plataformas web rápidas de altíssima conversão, com design moderno e tempo de carregamento otimizado." },
                { icon: <FaRobot size={32} />, title: "Automação de Sistemas", desc: "Robôs e fluxos inteligentes para WhatsApp e redes sociais. Atenda 24/7 sem depender de humanos." },
                { icon: <FaDatabase size={32} />, title: "Sistemas com CRM", desc: "Desenvolvimento de dashboards personalizados para rastreamento de leads, controle de vendas e retenção." },
              ].map((servico, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={0.1 * index}
                >
                  <MouseGlowCard className="h-full">
                    <div className="bg-secondary/50 backdrop-blur-xl border border-white/5 p-10 rounded-3xl transition-all duration-500 h-full flex flex-col group relative overflow-hidden z-10">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-purple to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="w-16 h-16 bg-primary border border-white/10 rounded-2xl flex items-center justify-center text-accent-blue mb-8 group-hover:scale-110 group-hover:text-accent-purple transition-all duration-500 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                        {servico.icon}
                      </div>
                      <h4 className="text-2xl font-heading font-bold text-white mb-4">{servico.title}</h4>
                      <p className="text-text-light leading-relaxed flex-1">
                        {servico.desc}
                      </p>
                    </div>
                  </MouseGlowCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* IMAGEM E SOBRE A AGÊNCIA */}
        <section id="agencia" className="py-24 bg-secondary relative overflow-hidden border-y border-white/5">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-accent-blue font-bold tracking-widest uppercase text-sm mb-4">A Klyon Digital</h2>
              <h3 className="text-4xl md:text-5xl font-heading text-white font-bold mb-8 leading-tight">
                Engenharia reversa <br/> para o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">sucesso</span>.
              </h3>
              <p className="text-text-light text-lg mb-8 leading-relaxed">
                Nós não fazemos apostas com o seu orçamento. A Klyon Digital nasceu da necessidade de unir tecnologia de ponta com estratégias de marketing agressivas. Mapeamos os dados, estruturamos os funis e automatizamos a conversão.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-text-main">
                  <FaCircleCheck className="text-accent-purple" /> Abordagem Data-Driven
                </li>
                <li className="flex items-center gap-3 text-text-main">
                  <FaCircleCheck className="text-accent-purple" /> Foco em Retorno de Investimento (ROI)
                </li>
                <li className="flex items-center gap-3 text-text-main">
                  <FaCircleCheck className="text-accent-purple" /> Transparência Total e Dashboards
                </li>
              </ul>
              
              <a href={whatsappUrl2} target="_blank" rel="noopener noreferrer" className="text-accent-blue font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Conhecer a agência por dentro <FaArrowRight />
              </a>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <AnimatedAgencyImage />
            </AnimatedSection>
          </div>
        </section>

        {/* MÉTODO DE TRABALHO */}
        <section id="metodo" className="py-24 bg-primary relative">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-20">
              <h2 className="text-accent-purple font-bold tracking-widest uppercase text-sm mb-4">Como Operamos</h2>
              <h3 className="text-4xl font-heading text-white font-bold">Método de Aceleração</h3>
            </AnimatedSection>

            <div className="relative">
              {/* Linha conectora desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-accent-purple/50 via-accent-blue/50 to-accent-purple/50 -translate-y-1/2 z-0" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                {[
                  { num: "01", title: "Diagnóstico Profundo", desc: "Analisamos sua presença atual, concorrentes e falhas no funil." },
                  { num: "02", title: "Setup Tecnológico", desc: "Criamos a infraestrutura: Sites, CRMs, Pixels e Automações." },
                  { num: "03", title: "Injeção de Tráfego", desc: "Ativamos campanhas agressivas com foco no público comprador." },
                  { num: "04", title: "Escala e Otimização", desc: "Lemos os dados e escalamos os investimentos que trazem lucro." },
                ].map((step, i) => (
                  <AnimatedSection key={i} delay={0.1 * i} className="bg-secondary/80 backdrop-blur-md p-8 rounded-2xl border border-white/5 text-center relative hover:-translate-y-2 transition-transform">
                    <div className="w-12 h-12 bg-primary border border-accent-blue/30 text-accent-blue font-bold rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                      {step.num}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-sm text-text-light leading-relaxed">{step.desc}</p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DASHBOARD / CRM SHOWCASE */}
        <section className="py-24 bg-secondary border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <AnimatedSection>
              <h2 className="text-accent-blue font-bold tracking-widest uppercase text-sm mb-4">Poder dos Dados</h2>
              <h3 className="text-4xl md:text-5xl font-heading text-white font-bold mb-12">
                Você no controle do seu crescimento
              </h3>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <AnimatedFunnel />
            </AnimatedSection>
          </div>
        </section>

        {/* VSL & BENEFÍCIOS INTERATIVOS (Oculto temporariamente a pedido do usuário) */}
        {/* 
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-accent-purple font-bold tracking-widest uppercase text-sm mb-4">A Revolução Digital</h2>
              <h3 className="text-4xl md:text-5xl font-heading text-white font-bold">
                Por que a sua empresa precisa <br className="hidden md:block" /> estar no topo agora?
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <VslSection />

              <div className="space-y-6">
                {[
                  { title: "Escala Absolutamente Infinita", desc: "Diferente de um ponto físico, na internet não há limites geográficos. Multiplicamos a sua capacidade de encontrar clientes ideais em escala nacional ou global." },
                  { title: "Mensuração Exata (ROI)", desc: "Com os nossos sistemas de rastreamento, você sabe exatamente qual anúncio, palavra ou imagem gerou cada centavo no seu bolso. Zero achismo, 100% matemática." },
                  { title: "Automação 24/7", desc: "Nossos robôs e processos de CRM nunca dormem. Eles continuam atendendo, nutrindo e vendendo para os seus clientes de madrugada ou nos finais de semana." },
                ].map((item, index) => (
                  <AnimatedSection key={index} delay={0.2 + (0.1 * index)}>
                    <div className="group bg-secondary/30 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:bg-secondary/80 hover:border-accent-purple/40 transition-all duration-300 cursor-default">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary border border-white/10 rounded-xl flex items-center justify-center text-accent-blue group-hover:bg-accent-purple group-hover:text-white group-hover:border-accent-purple transition-all duration-300 shrink-0">
                          <span className="font-bold font-heading">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent-blue transition-colors duration-300">{item.title}</h4>
                          <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
        */}

        {/* PROVA SOCIAL / DEPOIMENTOS */}
        <TestimonialsSection />

        {/* FAQ / PERGUNTAS FREQUENTES */}
        <FaqSection />

        {/* CTA FINAL */}
        <section className="py-32 relative overflow-hidden bg-primary">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-blue/10 z-0" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl">
            <AnimatedSection>
              <h2 className="text-5xl md:text-6xl font-heading text-white font-bold mb-8">
                Pronto para a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Revolução Digital?</span>
              </h2>
              <p className="text-text-light text-xl mb-12 font-light">
                Pare de perder vendas para a concorrência. Clique abaixo e fale diretamente com a nossa equipe de especialistas.
              </p>
              <a
                href={whatsappUrl2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary px-12 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300"
              >
                Agendar Reunião Estratégica
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
