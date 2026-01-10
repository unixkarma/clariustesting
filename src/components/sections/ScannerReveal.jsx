import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const ScannerReveal = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('scanner-reveal');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress when section enters viewport
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Start animation when section is at 50% of viewport
      const startPoint = windowHeight * 0.5;
      const animationRange = sectionHeight * 0.6;

      let progress = 0;
      if (sectionTop < startPoint) {
        progress = Math.min((startPoint - sectionTop) / animationRange, 1);
      }

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contacto';
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '593959253505';
    const message = 'Hola, me gustaría agendar una demostración de los ecógrafos Clarius';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Calculate transforms based on scroll progress
  // Start at edges, move completely off screen on scroll
  const leftScannerX = scrollProgress * -100; // Start at 0%, move to -100% (off screen)
  const rightScannerX = scrollProgress * 100; // Start at 0%, move to 100% (off screen)
  // Text reaches full opacity faster (at 60% scroll progress)
  const textOpacity = Math.min(scrollProgress * 1.67, 1);
  const textScale = 0.8 + (Math.min(scrollProgress * 1.67, 1) * 0.2); // Scale from 0.8 to 1

  return (
    <section
      id="scanner-reveal"
      className="relative bg-gradient-to-b from-white to-gray-50 text-gray-900 overflow-hidden min-h-screen"
    >
      {/* Scanner Animation Container */}
      <div className="relative w-full min-h-screen flex items-center justify-center pt-8 pb-20">
        {/* Left Scanner */}
        <motion.div
          className="absolute z-20 left-0"
          style={{
            x: `${leftScannerX}%`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <img
            src="/images/hero/left-scanner.webp"
            alt="Clarius Scanner Izquierdo"
            className="w-[350px] md:w-[450px] lg:w-[550px] h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Scanner */}
        <motion.div
          className="absolute z-20 right-0"
          style={{
            x: `${rightScannerX}%`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <img
            src="/images/hero/right-scanner.webp"
            alt="Clarius Scanner Derecho"
            className="w-[350px] md:w-[450px] lg:w-[550px] h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Center Text Content */}
        <motion.div
          className="absolute z-10 text-center px-4 max-w-4xl"
          style={{
            opacity: textOpacity,
            scale: textScale,
            transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
          }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Ultrasonido para{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Todos
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Fácil de usar desde el primer momento, Clarius lleva el ultrasonido donde nunca ha estado antes – pero debería estar.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToContact}
              className="shadow-xl"
            >
              Solicitar Cotización
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={openWhatsApp}
              className="shadow-xl"
            >
              Agenda tu Demo
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 1 }}
          animate={{ opacity: scrollProgress > 0.2 ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500">Continúa explorando</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full p-1"
            >
              <motion.div
                className="w-1.5 h-1.5 bg-gray-600 rounded-full mx-auto"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScannerReveal;
