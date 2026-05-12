import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CaminhoFlix — Entretenimento Cristão para Crianças",
  description: "A plataforma de entretenimento cristão mais completa para crianças. +300 filmes, histórias bíblicas, jogos educativos e muito mais!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
