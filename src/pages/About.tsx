import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { PORTRAIT_IMAGE } from '@/constants/images';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-8 py-12">
        <div className="mx-auto mb-10 flex max-w-4xl flex-col items-center gap-6 md:flex-row md:items-start">
          <div className="w-full max-w-xs shrink-0 overflow-hidden rounded-2xl border-4 border-surface-elevated shadow-lg">
            <img
              src={PORTRAIT_IMAGE}
              alt="Andrea Wennecke"
              className="aspect-[3/4] w-full object-cover object-top"
            />
          </div>
          <div>
            <h1 className="mb-3 text-3xl font-bold text-brand-primary">
              Andrea Wennecke
            </h1>
            <p className="leading-relaxed text-[var(--text-secondary)]">
              Psychotherapeutin und Kunsttherapeutin in Lübeck.
            </p>
          </div>
        </div>

        <h2 className="mx-auto mb-6 max-w-4xl text-2xl font-bold text-brand-primary">
          Mein beruflicher Werdegang
        </h2>

        <div className="mx-auto max-w-4xl space-y-8">
          <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-[var(--border-subtle)]">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Qualifikationen & Ausbildung</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-primary/10 rounded-full text-brand-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Studium der Psychologie</h3>
                  <p className="text-gray-600">Universität Hamburg, Abschluss mit Diplom</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-primary/10 rounded-full text-brand-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Weiterbildungen & Zertifizierungen</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Zertifizierte Kunsttherapeutin</li>
                    <li>Traumatherapie-Ausbildung</li>
                    <li>Supervisionsausbildung</li>
                    <li>Fortbildungen in verschiedenen therapeutischen Methoden</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-[var(--border-subtle)]">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Berufserfahrung</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-primary/10 rounded-full text-brand-primary">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Therapeutische Tätigkeit</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Langjährige Erfahrung in der psychotherapeutischen Praxis</li>
                    <li>Spezialisierung auf Kunsttherapie und Traumatherapie</li>
                    <li>Arbeit mit Jugendlichen und Erwachsenen</li>
                    <li>Erfahrung in kultursensibler Therapie und migrationssensiblen Kontexten</li>
                    <li>Supervision und Weiterbildung für Fachkräfte</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-[var(--border-subtle)]">
            <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Therapeutischer Ansatz</h2>
            <p className="text-gray-600">
              Als studierte Psychologin und erfahrene Therapeutin verbinde ich wissenschaftlich fundierte 
              Methoden mit kreativen Ansätzen. Mein therapeutischer Werdegang ist geprägt von kontinuierlicher 
              Weiterbildung und der Integration verschiedener therapeutischer Methoden, um meinen Klienten 
              eine umfassende und individuelle Begleitung zu bieten.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About; 