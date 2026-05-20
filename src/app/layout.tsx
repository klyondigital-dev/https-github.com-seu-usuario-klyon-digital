import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import MouseFollower from "@/components/MouseFollower";
import "./globals.css";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klyon Digital | Aceleradora de Resultados e Tráfego Pago",
  description: "Agência de Marketing Digital especializada em Tráfego pago, Social Media, Criação de Sites e Automações com foco extremo em conversão e previsibilidade de vendas.",
  keywords: ["Tráfego Pago", "Gestão de Tráfego", "Agência de Marketing", "Criação de Sites", "Landing Pages", "Social Media", "Klyon Digital", "Automação de Vendas"],
  authors: [{ name: "Klyon Digital" }],
  creator: "Klyon Digital",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://klyondigital.com.br",
    title: "Klyon Digital | Marketing de Alta Performance",
    description: "Transformamos Tecnologia e Tráfego em Escala Absoluta para sua empresa.",
    siteName: "Klyon Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klyon Digital | Aceleradora de Resultados",
    description: "Tráfego pago, Social Media, Sites e Automações com foco em conversão.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${space.variable} ${inter.variable} antialiased cursor-none`}
    >
      <body className="bg-primary font-sans text-text-main">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5NK3M9NRV1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5NK3M9NRV1');
          `}
        </Script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1528893535543889');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1528893535543889&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* Schema.org / SEO Estruturado */}
        <Script id="schema-local-business" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              "name": "Klyon Digital",
              "url": "https://klyondigital.com.br",
              "telephone": "+5518981290630",
              "description": "Agência de marketing de alta performance especializada em tráfego pago, criação de sites, landing pages e automações de vendas.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
                "addressRegion": "SP"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Brazil"
                }
              ],
              "knowsAbout": [
                "Tráfego Pago",
                "Gestão de Anúncios",
                "Google Ads",
                "Meta Ads",
                "Criação de Sites",
                "Landing Pages",
                "Social Media",
                "Marketing Digital",
                "Automação de Vendas"
              ],
              "sameAs": [
                "https://www.instagram.com/klyon_digital"
              ],
              "priceRange": "$$$",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços Klyon Digital",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gestão de Tráfego Pago"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Criação de Landing Pages e Sites"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Automações e CRM"
                    }
                  }
                ]
              }
            }
          `}
        </Script>
        <MouseFollower />
        {children}
      </body>
    </html>
  );
}
