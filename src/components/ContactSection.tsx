import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CalendlyDialog } from '@/components/CalendlyDialog';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <section id="contact" className="section bg-therapy-warm/30 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-therapy-blue">Kontakt</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Kontaktieren Sie mich gerne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col min-h-[500px] bg-linen">
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
                <Button className="w-full bg-therapy-blue text-white hover:bg-therapy-blue-dark">
                  Termin vereinbaren
                </Button>
              </CalendlyDialog>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col min-h-[500px] bg-linen">
            <h3 className="text-xl font-semibold mb-6 text-therapy-blue">Schreiben Sie mir</h3>
            <form className="space-y-4 flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-blue/50"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-blue/50"
                  placeholder="Betreff"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapy-blue/50"
                  placeholder="Ihre Nachricht"
                ></textarea>
              </div>
            </form>
            <div className="mt-8">
              <Button
                type="submit"
                className={`w-full ${
                  isFormValid 
                    ? 'bg-therapy-blue text-white hover:bg-therapy-blue-dark' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!isFormValid}
              >
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
