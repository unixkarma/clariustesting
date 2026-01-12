import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import Button from './Button';

const ScannerModal = ({ scanner, isOpen, onClose }) => {
  if (!scanner) return null;

  const scrollToScanner = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(scanner.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Botón de cierre */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
                aria-label="Cerrar"
              >
                <FaTimes size={24} />
              </button>

              {/* Contenido del Modal */}
              <div className="p-6 md:p-8">
                {/* Imagen del Scanner */}
                <div className="h-64 overflow-hidden bg-gradient-to-br from-neutral-light to-white flex items-center justify-center p-6 rounded-lg mb-6">
                  <img
                    src={`/images/scanners/${scanner.id}.png`}
                    alt={`Ecógrafo ${scanner.nombre}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.parentElement.innerHTML = `
                        <div class="h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center rounded-lg">
                          <span class="text-white text-5xl font-bold">${scanner.nombre}</span>
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Información */}
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                  {scanner.nombre}
                </h2>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {scanner.descripcion}
                </p>

                {/* Aplicaciones */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Aplicaciones:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {scanner.aplicaciones.map((app, idx) => (
                      <span
                        key={idx}
                        className="bg-accent text-primary text-sm font-medium px-4 py-2 rounded-full"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Especificaciones Técnicas */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Especificaciones Técnicas:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-neutral-light p-4 rounded-lg">
                      <p className="text-gray-600 font-medium mb-1">Frecuencia</p>
                      <p className="text-neutral-dark font-bold text-lg">
                        {scanner.frecuencia}
                      </p>
                    </div>
                    <div className="bg-neutral-light p-4 rounded-lg">
                      <p className="text-gray-600 font-medium mb-1">Profundidad</p>
                      <p className="text-neutral-dark font-bold text-lg">
                        {scanner.profundidad}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="primary"
                    onClick={scrollToScanner}
                    className="flex-1"
                  >
                    Ver en la Galería
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => window.location.href = '/contacto'}
                    className="flex-1"
                  >
                    Solicitar Cotización
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ScannerModal;
