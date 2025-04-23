import React from 'react';

const LocationSection = () => {
  return (
    <section id="location" className="section bg-sand">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-therapy-blue">Anfahrt</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meine Praxis befindet sich in zentraler Lage in Lübeck und ist gut mit öffentlichen Verkehrsmitteln zu erreichen.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-[400px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.414498313953!2d10.683594115539839!3d53.86334264838907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2097a2ed35d7b%3A0x426b2b00b1d697eb!2sBeckergrube%2011%2C%2023552%20L%C3%BCbeck%2C%20Germany!5e0!3m2!1sen!2sus!4v1650121234567!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              title="Praxisstandort"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
