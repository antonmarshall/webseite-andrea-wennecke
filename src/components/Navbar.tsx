import { Link } from 'react-scroll';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-therapy-warm/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-therapy-blue cursor-pointer"
          >
            Andrea Wennecke
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-therapy-blue transition-colors cursor-pointer"
            >
              Über Mich
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-therapy-blue transition-colors cursor-pointer"
            >
              Therapieangebote
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-therapy-blue transition-colors cursor-pointer"
            >
              Kontakt
            </Link>
          </div>
          <button className="md:hidden text-gray-600">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 