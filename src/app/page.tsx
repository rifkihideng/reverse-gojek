import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import LajuPlus from "@/components/LajuPlus";
import JacketShowcase from "@/components/JacketShowcase";
import Partner from "@/components/Partner";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Achievements />
        <Stats />
        <Services />
        <HowItWorks />
        <Features />
        <Testimonials />
        <LajuPlus />
        <JacketShowcase />
        <Partner />
        <Download />
      </main>
      <Footer />
    </>
  );
}
