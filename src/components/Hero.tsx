import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE } from '@/constants/images';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(165deg, var(--hero-gradient-start) 0%, var(--hero-gradient-end) 55%, var(--surface) 100%)`,
      }}
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-12 md:py-20 lg:px-8">
        <div className="order-2 md:order-1">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-brand-primary md:text-5xl lg:text-[2.75rem]">
            Andrea Wennecke
          </h1>
          <p className="mb-4 text-xl font-medium text-brand-accent md:text-2xl">
            Psychotherapie &amp; Kunsttherapie in L{'\u00fc'}beck
          </p>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-[var(--text-secondary)]">
            K{'\u00f6'}rperorientierte und ausdrucksorientierte Therapie f{'\u00fc'}r
            Erwachsene und Jugendliche {'\u2013'} in einem gesch{'\u00fc'}tzten,
            kreativen Raum.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-brand-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] focus-visible:ring-offset-2 sm:text-base"
            >
              Kontakt aufnehmen
              <ArrowRight className="ml-2" size={18} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('therapy')}
              className="inline-flex items-center rounded-full border-2 border-brand-accent bg-transparent px-6 py-3 text-sm font-medium text-brand-accent transition hover:bg-brand-accent hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] focus-visible:ring-offset-2 sm:text-base"
            >
              Therapieangebote
              <ArrowRight className="ml-2" size={18} aria-hidden />
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-2xl border-4 border-white/90 shadow-xl ring-1 ring-[var(--border-subtle)]">
            <img
              src={HERO_IMAGE}
              alt={`Therapieraum der Praxis Andrea Wennecke in L\u00fcbeck`}
              className="aspect-[4/3] w-full object-cover object-center md:aspect-auto md:h-[420px] lg:h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
