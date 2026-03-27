import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import QuemSomos from "@/components/QuemSomos";
import Quiz from "@/components/Quiz";
import Jornada from "@/components/Jornada";
import Patologias from "@/components/Patologias";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import Artigos from "@/components/Artigos";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsappPopup from "@/components/WhatsappPopup";
import FixedCta from "@/components/FixedCta";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "CannaLab",
  alternateName: "LabCanna",
  url: "https://www.labcanna.com.br",
  logo: "https://www.labcanna.com.br/new_logo.svg",
  description:
    "Plataforma de facilitação de tratamento com cannabis medicinal com médicos especialistas, autorização ANVISA e acompanhamento humanizado do início ao fim. 100% online e legal no Brasil.",
  telephone: "+55-67-99876-0007",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-67-99876-0007",
    contactType: "customer service",
    contactOption: "TollFree",
    availableLanguage: "Portuguese",
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  knowsAbout: [
    "Cannabis Medicinal",
    "CBD",
    "Canabidiol",
    "Telemedicina",
    "Ansiedade",
    "Dor Crônica",
    "Insônia",
    "Fibromialgia",
    "Epilepsia",
    "TDAH",
    "Autismo",
    "Parkinson",
    "Esclerose Múltipla",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CannaLab",
  url: "https://www.labcanna.com.br",
  description:
    "Cannabis medicinal com acompanhamento real, do início ao fim. Médicos especialistas + autorização ANVISA + suporte contínuo.",
  inLanguage: "pt-BR",
  publisher: {
    "@type": "Organization",
    name: "CannaLab",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "É legal usar cannabis medicinal no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, o uso medicinal da Cannabis é 100% legal no Brasil. Todo o processo segue regulamentações rígidas da Anvisa (RDC 660/2022), garantindo que o tratamento seja feito de maneira segura e amparada por lei.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso de receita médica para usar cannabis medicinal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Como qualquer tratamento sério, a Cannabis Medicinal exige prescrição médica. A CannaLab conecta você a médicos especializados que avaliarão o seu caso clínico para fazer a prescrição adequada.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a consulta médica na CannaLab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A consulta é feita 100% online, via telemedicina, no conforto da sua casa. O médico especializado irá avaliar seu histórico, ouvir suas queixas e recomendar a melhor abordagem terapêutica para você.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para iniciar o tratamento com cannabis medicinal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O processo é desenhado para ser o mais rápido possível. Após o pré-cadastro, nossa equipe entra em contato rapidamente. Com a documentação e consulta aprovadas, a liberação pela Anvisa leva poucos dias.",
      },
    },
    {
      "@type": "Question",
      name: "O que diferencia a CannaLab das outras plataformas de cannabis medicinal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nosso foco é humano. Não somos apenas um marketplace de produtos. Nós oferecemos um acompanhamento tipo concierge, desde a sua primeira dúvida até o pós-consulta. Aqui, você não é um número e não caminha sozinho(a) em nenhuma etapa do processo.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: "https://www.labcanna.com.br",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <div id="inicio"><Hero /></div>
        <Quiz />
        <Diferenciais />
        <Jornada />
        <Patologias />
        <QuemSomos />
        <Depoimentos />
        <Artigos />
        <FAQ />
        <CtaFinal />
        <Footer />
        <WhatsappPopup />
        <FixedCta />
      </main>
    </>
  );
}
