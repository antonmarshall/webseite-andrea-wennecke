import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE } from '@/constants/images';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-gradient-to-b from-surface-muted to-surface"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-8 md:grid-cols-2">
        <div className="max-w-2xl">
          <h1 className="mb-3 text-4xl font-bold text-brand-primary md:text-5xl">
            Praxis für Psychotherapie &amp; Kunsttherapie
          </h1>
          <h2 className="mb-6 text-2xl text-brand-accent">
            Andrea Wennecke – Lübeck
          </h2>
          <p className="mb-8 text-lg text-[var(--text-secondary)]">
            Körperorientierte Therapie für Erwachsene und Jugendliche in einem
            geschützten Raum.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('therapy')}
              className="flex items-center rounded-full border-2 border-brand-primary bg-transparent px-6 py-3 text-brand-primary transition duration-300 hover:bg-brand-primary hover:text-white"
            >
              Therapieangebote <ArrowRight className="ml-2" size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="flex items-center rounded-full bg-brand-primary px-6 py-3 text-white transition duration-300 hover:bg-brand-primary-hover"
            >
              Kontakt aufnehmen <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="overflow-hidden rounded-2xl border-4 border-surface-elevated shadow-xl">
            <img
              alt="Therapieraum der Praxis Andrea Wennecke in Lübeck"
              className="h-[500px] w-full object-cover object-center"
              src={HERO_IMAGE}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
