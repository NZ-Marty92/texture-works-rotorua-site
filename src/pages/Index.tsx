import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Finishes from "@/components/Finishes";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Update page title and meta description
    document.title = "Texture Works - Venetian Plaster & Micro Cement Specialists | Rotorua, NZ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Premium venetian plaster and micro cement specialists in Rotorua, New Zealand. Transform your space with luxury finishes and artisanal craftsmanship. Free consultations available.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Finishes />
      <Gallery />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
