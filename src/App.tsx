import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter basename="/webseite-andrea-wennecke">
        <div className="min-h-screen bg-therapy-warm/30">
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
        <Routes>
          <Route path="/" element={null} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
