import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TherapyServices from '../components/TherapyServices';
import PracticeGallery from '../components/PracticeGallery';
import Prices from '../components/Prices';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import Directions from '../components/Directions';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TherapyServices />
        <PracticeGallery />
        <Prices />
        <ContactSection />
        <Directions />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
