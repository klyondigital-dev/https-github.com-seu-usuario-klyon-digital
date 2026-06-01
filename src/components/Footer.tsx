import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-secondary text-text-main pt-16 pb-8 border-t border-accent-purple/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <div>
          <h2 className="text-3xl font-heading font-extrabold mb-4 text-white">
            Klyon <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Digital</span>
          </h2>
          <p className="text-text-light max-w-sm mb-6 leading-relaxed">
            Escale suas vendas e automatize seus processos com a agência focada em performance absoluta.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/klyon_digital" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary border border-accent-purple/30 text-accent-purple flex items-center justify-center hover:bg-accent-purple hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(157,78,221,0.2)]">
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/5518981290630" target="_blank" rel="noopener noreferrer" title="Fale no WhatsApp (DDD 18)" className="w-10 h-10 rounded-full bg-primary border border-accent-blue/30 text-accent-blue flex items-center justify-center hover:bg-accent-blue hover:text-primary transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://wa.me/5538997368504" target="_blank" rel="noopener noreferrer" title="Fale no WhatsApp (DDD 38)" className="w-10 h-10 rounded-full bg-primary border border-accent-blue/30 text-accent-blue flex items-center justify-center hover:bg-accent-blue hover:text-primary transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Aceleração</h4>
          <ul className="space-y-3 text-text-light">
            <li><Link href="#servicos" className="hover:text-accent-blue transition-colors">Nossos Serviços</Link></li>
            <li><Link href="#agencia" className="hover:text-accent-blue transition-colors">Sobre a Agência</Link></li>
            <li><Link href="#metodo" className="hover:text-accent-blue transition-colors">Como Trabalhamos</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Contato</h4>
          <ul className="space-y-3 text-text-light">
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-accent-blue" />
              <a href="https://wa.me/5518981290630" className="hover:text-accent-blue transition-colors">+55 18 98129-0630</a>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-accent-blue" />
              <a href="https://wa.me/5538997368504" className="hover:text-accent-blue transition-colors">+55 38 99736-8504</a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-accent-purple" />
              <a href="https://www.instagram.com/klyon_digital" className="hover:text-accent-purple transition-colors">@klyon_digital</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-accent-purple/10 flex flex-col md:flex-row justify-between items-center text-sm text-text-light">
        <p>&copy; {new Date().getFullYear()} Klyon Digital. Todos os direitos reservados.</p>
        <p className="mt-4 md:mt-0 flex items-center gap-1">Dominando o digital.</p>
      </div>
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5518981290630"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-accent-purple to-accent-blue p-[2px] rounded-full z-50 hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
      >
        <div className="w-full h-full bg-primary rounded-full flex items-center justify-center">
          <FaWhatsapp size={32} className="text-accent-blue" />
        </div>
      </a>
    </footer>
  );
}
