
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-therapy-blue">Impressum</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-therapy-blue">Angaben gemäß § 5 TMG:</h2>
            <p className="mb-2">Andrea Wennecke</p>
            <p className="mb-2">Kreativtherapie</p>
            <p>Beckergrube 11, 23552 Lübeck</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-therapy-blue">Kontakt:</h2>
            <p className="mb-2">Telefon: +49 451 47047/42</p>
            <p className="mb-2">Email: info@kreativtherapie-wennecke.de</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-therapy-blue">Berufshaftpflichtversicherung:</h2>
            <p className="mb-2">Name und Sitz der Gesellschaft:</p>
            <p>Berufshaftpflichtversicherung XYZ, Musterstraße 1, 12345 Musterstadt</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-therapy-blue">Berufsbezeichnung und berufsrechtliche Regelungen:</h2>
            <p className="mb-2">Berufsbezeichnung: Kreativtherapeutin</p>
            <p className="mb-2">Zuständige Kammer: Musterkammer</p>
            <p className="mb-2">Verliehen durch: Bundesland Musterbundesland</p>
            <p>Es gelten folgende berufsrechtliche Regelungen: Berufsordnung der Musterkammer, einsehbar unter www.musterkammer.de</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-therapy-blue">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
            <p className="mb-2">Andrea Wennecke</p>
            <p>Beckergrube 11, 23552 Lübeck</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
