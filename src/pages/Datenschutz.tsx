import React from 'react';
import { Link } from '@/components/ui/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-3xl font-bold text-therapy-blue hover:no-underline">
            Datenschutzerklärung
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
          <h2 className="text-xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
          <p className="mb-6">
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf unserer Website.
          </p>

          <h2 className="text-xl font-semibold mb-4">2. Verantwortliche Stelle</h2>
          <p className="mb-6">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
            Andrea Wennecke<br />
            Kreativtherapie<br />
            Musterstraße 123<br />
            12345 Musterstadt
          </p>

          <h2 className="text-xl font-semibold mb-4">3. Ihre Rechte</h2>
          <p className="mb-6">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
          </p>

          <h2 className="text-xl font-semibold mb-4">4. Datensicherheit</h2>
          <p className="mb-6">
            Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
          </p>

          <h2 className="text-xl font-semibold mb-4">5. Kontakt</h2>
          <p>
            Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten können Sie uns jederzeit kontaktieren. Die Kontaktdaten finden Sie im Impressum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
