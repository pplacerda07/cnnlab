import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import Jornada from "@/components/Jornada";
import Patologias from "@/components/Patologias";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import Artigos from "@/components/Artigos";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsappPopup from "@/components/WhatsappPopup";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="inicio"><Hero /></div>
      <Diferenciais />
      <Jornada />
      <Patologias />
      <Depoimentos />
      <Artigos />
      <FAQ />
      <CtaFinal />
      <Footer />
      <WhatsappPopup />
    </main>
  );
}
