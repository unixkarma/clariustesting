import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import ScannerReveal from '../components/sections/ScannerReveal';
import Card from '../components/common/Card';
import {
  FaBrain,
  FaWifi,
  FaMobileAlt,
  FaCloud,
  FaHospital,
  FaSyncAlt
} from 'react-icons/fa';

const Home = () => {
  const beneficios = [
    {
      icon: <FaBrain className="text-4xl text-primary" />,
      title: 'Alta definición con IA',
      description: 'Imágenes claras con optimización automática mediante inteligencia artificial',
    },
    {
      icon: <FaWifi className="text-4xl text-primary" />,
      title: '100% Inalámbrico',
      description: 'Sin cables ni consolas pesadas. Libertad total de movimiento',
    },
    {
      icon: <FaMobileAlt className="text-4xl text-primary" />,
      title: 'App iOS y Android',
      description: 'Interfaz intuitiva con control táctil y comandos de voz',
    },
    {
      icon: <FaCloud className="text-4xl text-primary" />,
      title: 'Gestión completa',
      description: 'Exporta DICOM, almacenamiento en nube segura y gestión de pacientes',
    },
    {
      icon: <FaHospital className="text-4xl text-primary" />,
      title: 'Cualquier entorno',
      description: 'Consulta, hospital, brigadas médicas o atención domiciliaria',
    },
    {
      icon: <FaSyncAlt className="text-4xl text-primary" />,
      title: 'Actualizaciones constantes',
      description: 'Tu equipo evoluciona con nuevas funciones sin cambiar hardware',
    },
  ];

  return (
    <div>
      <Hero />

      {/* Sección de Animación de Scanners */}
      <ScannerReveal />

      {/* Sección de Beneficios */}
      <section className="py-20 bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              ¿Por qué elegir Clarius?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnología de ultrasonido portátil que revoluciona la práctica médica en Ecuador
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <Card key={index} delay={index * 0.1}>
                <div className="p-6">
                  <div className="mb-4">
                    {beneficio.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">
                    {beneficio.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {beneficio.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para transformar tu práctica médica?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Solicita una cotización personalizada o agenda una demostración gratuita
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-200 inline-block"
              >
                Solicitar Cotización
              </a>
              <a
                href="https://wa.me/593992186927?text=Hola,%20me%20gustaría%20agendar%20una%20demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-200 inline-block"
              >
                Agenda tu Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
