import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import CRTOverlay from "@/components/CRTOverlay";

export default function Home() {
  return (
    <main className="min-h-screen">
      <CRTOverlay />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Certificates />
      <Footer />
    </main>
  );
}
