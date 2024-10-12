import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/AboutSection";
import FoundAnimalSection from "../components/FoundAnimalSection";
import AdoptAnimalSection from "../components/AdoptAnimalSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <About />
      <FoundAnimalSection />
      <AdoptAnimalSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
