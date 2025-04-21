import React from 'react';
import { Link } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-therapy-orange/10 py-16 px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-6xl font-bold mb-4 text-therapy-blue">404</h1>
          <p className="text-xl text-gray-600 mb-8">Die gesuchte Seite wurde nicht gefunden.</p>
          <Link 
            to="/webseite-andrea-wennecke/" 
            className="inline-block bg-therapy-blue hover:bg-therapy-blue/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
