import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../common/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', path: '/' },
    { name: 'Scanners', path: '/scanners' },
    { name: 'Especialidades', path: '/especialidades' },
    { name: 'Beneficios', path: '/beneficios' },
    { name: 'Financiamiento', path: '/financiamiento' },
    { name: 'Testimonios', path: '/testimonios' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path) => location.pathname === path;

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contacto';
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo y Leyenda Canadiense */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo/logo.png"
              alt="Clarius Logo"
              className="h-10 md:h-14"
            />
            <div className="hidden md:flex items-center gap-3">
              <span className="text-gray-300 text-2xl font-light">|</span>
              <div className="flex items-center gap-2">
                <img
                  src="/images/logo/mapleleaf.png"
                  alt="Canadian Maple Leaf"
                  className="w-5 h-5 md:w-6 md:h-6 object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-[9px] md:text-[10px] text-gray-600 uppercase tracking-wide">
                    Orgullosamente
                  </span>
                  <span className="text-[9px] md:text-[10px] text-gray-600 uppercase tracking-wide">
                    Origen Canadiense
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive(item.path) ? 'text-primary border-b-2 border-primary pb-1' : 'text-neutral-dark'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="primary" size="sm" onClick={scrollToContact}>
              Solicitar Cotización
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-neutral-dark text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container-custom py-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-base font-medium transition-colors duration-200 hover:text-primary ${
                    isActive(item.path) ? 'text-primary font-semibold' : 'text-neutral-dark'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="primary"
                size="md"
                onClick={scrollToContact}
                className="w-full"
              >
                Solicitar Cotización
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
