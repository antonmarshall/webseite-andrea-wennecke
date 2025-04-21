import React from 'react';
import { Link } from '@/components/ui/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-3xl font-bold text-therapy-blue hover:no-underline">
            Impressum
          </Link>
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-therapy-blue"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Zurück
            </Link>
          </Button>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="mb-4">
            Andrea Wennecke<br />
            Kreativtherapie<br />
            Musterstraße 123<br />
            12345 Musterstadt
          </p>

          <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
          <p className="mb-4">
            Telefon: +49 (0) 123 456789<br />
            E-Mail: info@kreativtherapie-wennecke.de
          </p>

          <h2 className="text-xl font-semibold mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p className="mb-4">
            Berufsbezeichnung: Heilpraktikerin für Psychotherapie<br />
            Zuständige Kammer: [Name der Kammer]<br />
            Verliehen durch: [Verleihende Institution]
          </p>

          <h2 className="text-xl font-semibold mb-4">Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
