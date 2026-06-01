import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio & Serviços Premium | Klyon Digital",
  description: "Explore o nosso arsenal de serviços de alta performance. Desenvolvemos landing pages de alta conversão, gestão de tráfego pago agressivo e automações inteligentes para a sua empresa.",
  keywords: [
    "Portfólio Klyon Digital",
    "Serviços Klyon Digital",
    "Criar site profissional",
    "Tráfego pago alta conversão",
    "Automações de Vendas",
    "Design Premium"
  ],
  openGraph: {
    title: "Portfólio & Serviços Premium | Klyon Digital",
    description: "Explore o nosso arsenal de serviços de alta performance. Desenvolvemos landing pages de alta conversão, gestão de tráfego pago agressivo e automações inteligentes.",
    url: "https://klyondigital.com.br/portfolio",
    type: "website",
  }
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
