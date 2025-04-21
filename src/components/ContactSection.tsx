import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CalendlyDialog } from '@/components/CalendlyDialog';

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-therapy-orange/30 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-therapy-blue">Kontakt</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Kontaktieren Sie mich gerne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col min-h-[500px]">
            <h3 className="text-xl font-semibold mb-6 text-therapy-blue">Kontaktinformationen</h3>
            
            <div className="space-y-6 flex-grow">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-therapy-blue mr-4 mt-1" />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-gray-600">Beckergrube 11, 23552 Lübeck</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-therapy-blue mr-4 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@kreativtherapie-wennecke.de" className="text-gray-600 hover:text-therapy-blue transition-colors">
                    info@kreativtherapie-wennecke.de
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-therapy-blue mr-4 mt-1" />
                <div>
                  <p className="font-medium">Telefon</p>
                  <a href="tel:+4945147047/42" className="text-gray-600 hover:text-therapy-blue transition-colors">
                    +49 451 47047/42
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-therapy-blue mr-4 mt-1" />
                <div>
                  <p className="font-medium">Öffnungszeiten</p>
                  <p className="text-gray-600">Montag - Freitag: 9:00 - 18:00 Uhr</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <CalendlyDialog>
                <div className="w-full bg-white border border-gray-200 rounded-lg p-4 text-left cursor-pointer hover:bg-therapy-blue/5 transition-colors">
                  <span className="text-gray-700">Termin vereinbaren</span>
                </div>
              </CalendlyDialog>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col min-h-[500px]">
            <h3 className="text-xl font-semibold mb-6 text-therapy-blue">Schreiben Sie mir</h3>
            <form className="space-y-4 flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-blue/50"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-blue/50"
                    placeholder="Ihre Email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Betreff</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-blue/50"
                  placeholder="Betreff"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-blue/50"
                  placeholder="Ihre Nachricht"
                ></textarea>
              </div>
            </form>
            <div className="mt-8">
              <Button className="w-full bg-therapy-blue hover:bg-therapy-blue/90">
                Nachricht senden
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
