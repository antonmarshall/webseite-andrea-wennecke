import React from 'react';
import TherapyServices from './TherapyServices';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-b from-therapy-orange/30 to-white px-4">
      <TherapyServices />
    </section>
  );
};

export default Hero;
