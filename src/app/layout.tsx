import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.labcanna.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CannaLab – Cannabis Medicinal com Acompanhamento Real no Brasil",
    template: "%s | CannaLab",
  },
  description:
    "Conecte-se a médicos especialistas em cannabis medicinal. A CannaLab cuida de tudo: consulta online, autorização ANVISA e acompanhamento contínuo do seu tratamento. Legal, seguro e 100% online.",
  keywords: [
    "cannabis medicinal",
    "cannalab",
    "CBD medicinal",
    "tratamento com cannabis",
    "cannabis medicinal Brasil",
    "autorização ANVISA cannabis",
    "telemedicina cannabis",
    "médico cannabis online",
    "cannabis ansiedade",
    "cannabis dor crônica",
    "cannabis insônia",
    "cannabis depressão",
    "cannabis fibromialgia",
    "cannabis epilepsia",
    "cannabis TDAH",
    "cannabis autismo",
    "cannabis Parkinson",
    "labcanna",
  ],
  authors: [{ name: "CannaLab", url: siteUrl }],
  creator: "CannaLab",
  publisher: "CannaLab",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "CannaLab",
    title: "CannaLab – Cannabis Medicinal com Acompanhamento Real no Brasil",
    description:
      "Conecte-se a médicos especialistas em cannabis medicinal. A CannaLab cuida de tudo: consulta online, autorização ANVISA e acompanhamento contínuo do seu tratamento. Legal, seguro e 100% online.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CannaLab – Cannabis Medicinal com Acompanhamento Real",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CannaLab – Cannabis Medicinal com Acompanhamento Real no Brasil",
    description:
      "Médicos especialistas, autorização ANVISA e acompanhamento contínuo. Tratamento com cannabis medicinal 100% online e legal.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-sans antialiased text-gray-500 bg-white`}>
        {children}
      </body>
    </html>
  );
}
