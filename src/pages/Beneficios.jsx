import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import TrustMetricsBanner from '../components/common/TrustMetricsBanner';
import {
  FaGlobe,
  FaMobileAlt,
  FaGraduationCap,
  FaTools,
  FaHandshake,
  FaAward,
  FaBrain,
  FaMicrophone,
  FaImage
} from 'react-icons/fa';

const Beneficios = () => {
  const beneficios = [
    {
      icon: <FaGlobe className="text-5xl text-primary" />,
      titulo: 'Tecnología Líder Mundial',
      descripcion: 'Clarius es reconocido mundialmente por su innovación en ultrasonido portátil. Utilizado por miles de médicos en más de 100 países alrededor del mundo.',
    },
    {
      icon: <FaMobileAlt className="text-5xl text-primary" />,
      titulo: 'Portabilidad Real',
      descripcion: 'Cabe en tu bolsillo. Lleva tecnología de nivel hospitalario a cualquier lugar: consulta, domicilio, brigadas médicas o zonas rurales en Ecuador.',
    },
    {
      icon: <FaGraduationCap className="text-5xl text-primary" />,
      titulo: 'Capacitación Incluida',
      descripcion: 'Te acompañamos desde el primer día con entrenamiento personalizado para que aproveches al máximo tu equipo Clarius.',
    },
    {
      icon: <FaTools className="text-5xl text-primary" />,
      titulo: 'Soporte Técnico Local',
      descripcion: 'Equipo técnico en Ecuador disponible para resolver dudas, dar soporte y garantizar el funcionamiento óptimo de tu scanner.',
    },
    {
      icon: <FaHandshake className="text-5xl text-primary" />,
      titulo: 'Acompañamiento Integral',
      descripcion: 'Antes, durante y después de tu compra. Asesoría en selección del equipo, instalación, capacitación y seguimiento continuo.',
    },
    {
      icon: <FaAward className="text-5xl text-primary" />,
      titulo: 'Garantía y Respaldo',
      descripcion: 'Equipos con garantía de 3 años del fabricante. Respaldo de JAF-PHARMA, distribuidores autorizados en Ecuador.',
    },
  ];

  const caracteristicas = [
    {
      icon: <FaBrain className="text-3xl text-secondary mb-3" />,
      titulo: 'Inteligencia Artificial Avanzada',
      descripcion: 'Optimización automática de imagen con IA de última generación para diagnósticos más precisos y rápidos',
      destacado: true,
    },
    {
      icon: <FaMicrophone className="text-3xl text-secondary mb-3" />,
      titulo: 'Control por Voz',
      descripcion: 'Controla tu scanner con comandos de voz para mantener la esterilidad durante procedimientos',
      destacado: true,
    },
    {
      icon: <FaImage className="text-3xl text-secondary mb-3" />,
      titulo: 'T Mode - Modo Tejido Avanzado',
      descripcion: 'Visualización mejorada de tejidos blandos con claridad excepcional para evaluaciones más detalladas',
      destacado: true,
    },
    {
      titulo: 'Sin cables, sin consolas',
      descripcion: 'El scanner más pequeño del mundo que cabe en tu bolsillo',
    },
    {
      titulo: 'Conexión directa a tu dispositivo',
      descripcion: 'Compatible con smartphones y tablets iOS y Android',
    },
    {
      titulo: 'Nube segura HIPAA',
      descripcion: 'Almacenamiento y gestión de estudios con máxima seguridad',
    },
    {
      titulo: 'Exportación DICOM',
      descripcion: 'Compatible con cualquier sistema de gestión hospitalaria',
    },
    {
      titulo: 'Actualizaciones gratuitas',
      descripcion: 'Tu equipo evoluciona con nuevas funciones vía software',
    },
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 mb-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ¿Por qué elegir Clarius.EC?
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Más que un equipo, una solución completa de ultrasonido portátil para médicos en Ecuador
            </p>
          </motion.div>
        </div>
      </section>

      {/* Beneficios Grid */}
      <section className="container-custom mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagen Clarius */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/images/clariusia.jpg"
              alt="Clarius Ecuador - Tecnología de Ultrasonido Portátil"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </motion.div>

          {/* Texto descriptivo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Tecnología que Revoluciona la Medicina
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Clarius es el líder mundial en ultrasonido portátil de alta definición. Nuestros scanners combinan inteligencia artificial avanzada, conectividad inalámbrica y la más alta calidad de imagen en un dispositivo que cabe en tu bolsillo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Únete a miles de profesionales médicos en Ecuador y más de 100 países alrededor del mundo que ya transformaron su práctica con Clarius.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {beneficio.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                  {beneficio.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {beneficio.descripcion}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Características Técnicas */}
      <section className="bg-neutral-light py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Características Destacadas
            </h2>
            <p className="text-xl text-gray-600">
              Tecnología que marca la diferencia en tu práctica diaria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {caracteristicas.map((caracteristica, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white p-6 rounded-lg shadow-md ${
                  caracteristica.destacado
                    ? 'border-2 border-secondary ring-2 ring-secondary/20'
                    : ''
                }`}
              >
                {caracteristica.icon && (
                  <div className="flex justify-center">
                    {caracteristica.icon}
                  </div>
                )}
                <h4 className={`font-bold mb-2 ${
                  caracteristica.destacado
                    ? 'text-primary text-lg'
                    : 'text-neutral-dark'
                }`}>
                  {caracteristica.titulo}
                </h4>
                <p className="text-gray-600 text-sm">
                  {caracteristica.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Alianzas Farmacéuticas y CROs */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border-2 border-primary/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <svg
                    className="w-24 h-24 md:w-32 md:h-32 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4">
                    Clarius es aliado de líderes farmacéuticos y CROs
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Para avanzar en investigación clínica en medición de volumen vesical,
                    reumatología y mucho más, con impacto real en la práctica médica.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección T Mode con Imágenes */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              T Mode: Visualización Avanzada de Tejidos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnología exclusiva de Clarius para una mejor diferenciación de estructuras tisulares
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Imagen T Mode 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/t_mode/1 Select T-Mode2.jpg"
                alt="T Mode - Selección"
                className="rounded-xl shadow-2xl w-full border-2 border-gray-200"
              />
              <p className="text-center text-gray-600 mt-4 font-medium">
                Activación sencilla del modo T
              </p>
            </motion.div>

            {/* Comparación B Mode vs T Mode */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  ¿Qué es T Mode?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  T Mode es una tecnología avanzada de procesamiento de imagen que mejora
                  significativamente la visualización de tejidos blandos, permitiendo una mejor
                  diferenciación entre estructuras anatómicas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 text-xl font-bold">✓</span>
                    <span className="text-gray-700">Mayor contraste en tejidos blandos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 text-xl font-bold">✓</span>
                    <span className="text-gray-700">Identificación precisa de capas tisulares</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 text-xl font-bold">✓</span>
                    <span className="text-gray-700">Ideal para procedimientos estéticos y MSK</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Comparación visual B Mode vs T Mode */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Comparación: Modo B vs T Mode
            </h3>
            <div className="flex justify-center">
              <img
                src="/images/t_mode/3 BMode TMode2.PNG"
                alt="Comparación B Mode vs T Mode"
                className="rounded-lg w-full"
              />
            </div>
            <p className="text-gray-300 text-center mt-6">
              Nota la diferencia en claridad y definición de estructuras tisulares con T Mode activado
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección de Aplicaciones Clínicas con Imagen */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Aplicaciones en Procedimientos Guiados
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Clarius ofrece visualización en tiempo real para procedimientos invasivos y
                no invasivos, mejorando la precisión y seguridad del paciente.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-2xl font-bold">→</span>
                  <div>
                    <span className="text-gray-900 font-semibold">Infiltraciones guiadas</span>
                    <p className="text-gray-600">Precisión milimétrica en articulaciones y tejidos blandos</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-2xl font-bold">→</span>
                  <div>
                    <span className="text-gray-900 font-semibold">Procedimientos estéticos</span>
                    <p className="text-gray-600">Visualización de rellenos dérmicos y estructuras vasculares</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-2xl font-bold">→</span>
                  <div>
                    <span className="text-gray-900 font-semibold">Bloqueos nerviosos</span>
                    <p className="text-gray-600">Identificación precisa de nervios y fascias</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <video
                src="/images/mejoramiento_aguja.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-2xl w-full border-2 border-gray-200"
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banner de Métricas de Confianza */}
      <TrustMetricsBanner />

      {/* CTA Final */}
      <section className="container-custom mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-secondary to-secondary-light text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Únete a la revolución del ultrasonido portátil
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Miles de médicos ya confían en Clarius para mejorar su práctica médica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-white text-secondary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-200 inline-block"
            >
              Solicitar Información
            </a>
            <a
              href="/scanners"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-secondary text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 inline-block"
            >
              Ver Productos
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Beneficios;
