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

export default function Home() {
  return (
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
  );
}
