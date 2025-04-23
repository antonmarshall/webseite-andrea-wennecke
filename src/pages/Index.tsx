import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PricesSection from '@/components/PricesSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <FaqSection />
        <PricesSection />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
