import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
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
  title: "Klyon Digital | Aceleradora de Resultados",
  description: "Tráfego pago, Social Media, Sites e Automações com foco extremo em conversão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${space.variable} ${inter.variable} h-full antialiased cursor-none`}
    >
      <body className="min-h-full flex flex-col bg-primary font-sans text-text-main">
        <MouseFollower />
        {children}
      </body>
    </html>
  );
}
