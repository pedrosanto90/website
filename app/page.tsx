import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import CTASection from "@/components/sections/CTASection";
import siteContent from "@/data/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <Hero />
      <ServicesSection />
      <CTASection
        title={siteContent.ctaSections.afterServices.title}
        description={siteContent.ctaSections.afterServices.description}
      />
      <ProcessSection />
      <CaseStudiesSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <CTASection
        title={siteContent.ctaSections.beforeFooter.title}
        description={siteContent.ctaSections.beforeFooter.description}
      />
      <Footer />
    </div>
  );
}
