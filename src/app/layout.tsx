import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CannaLab - Tratamento com Cannabis Medicinal",
  description: "Plataforma de facilitação de tratamento com cannabis medicinal com atendimento humanizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400,300&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-sans antialiased text-gray-500 bg-white`}>
        {children}
      </body>
    </html>
  );
}
