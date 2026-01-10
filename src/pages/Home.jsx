import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import ScannerReveal from '../components/sections/ScannerReveal';
import Card from '../components/common/Card';
import TrustMetricsBanner from '../components/common/TrustMetricsBanner';
import {
  FaBrain,
  FaWifi,
  FaMobileAlt,
  FaCloud,
  FaHospital,
  FaSyncAlt
} from 'react-icons/fa';

const Home = () => {
  const clinicalImages = [
    '/images/imagenes_clinicas /Cardiac_EMED_CC_MR w Color.jpeg',
    '/images/imagenes_clinicas /Breast_Carcinoma.jpg',
    '/images/imagenes_clinicas /Aesth_Facial artery_L20_HD_Tablet.jpeg',
    '/images/imagenes_clinicas /Aesth_Facial Artery and Vein_L20_HD3_Tablet (3).jpeg',
    '/images/imagenes_clinicas /Aesth_Labiomental-Artery_L20_HD3_Tablet.jpg',
    '/images/imagenes_clinicas /Aesth_Facial Artery and Vein_L20_HD3_Tablet (2).jpeg',
    '/images/imagenes_clinicas /Aesth_Angular Artery Pyriform_L20_HD3_Tablet (1).jpeg',
    '/images/imagenes_clinicas /OB_PC_Fetal Profile_C3_HD_Tablet.jpg',
    '/images/imagenes_clinicas /Ped Hip L15.jpeg',
    '/images/imagenes_clinicas /Prostate AI sag.jpeg',
    '/images/imagenes_clinicas /Aesth_Angular Artery Pyriform_L20_HD3_Tablet.jpeg',
    '/images/imagenes_clinicas /Breast Elast 2.jpeg',
    '/images/imagenes_clinicas /Breast_Carcinoma2.jpg',
    '/images/imagenes_clinicas /injection1.jpeg',
    '/images/imagenes_clinicas /Aesth_Superficial-Temporal-Art_L20_HD3_Tablet.jpg',
    '/images/imagenes_clinicas /Breast_Ca with Elasto_L15_HD3_Tablet.jpeg',
    '/images/imagenes_clinicas /Aesth_Labiomental-Artery_L20_HD3_Tablet (1).jpg',
    '/images/imagenes_clinicas /Median Nerve AI.jpeg',
    '/images/imagenes_clinicas /Aesth_superiorlabialartery_L20_HD3_Tablet.jpeg',
    '/images/imagenes_clinicas /Dorsal-Nasal-Artery.jpg',
  ];
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

      {/* Sección de Carrusel de Imágenes Clínicas */}
      <section className="py-20 bg-black overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Imágenes Clínicas de Alta Definición
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre la calidad de imagen excepcional que ofrece la tecnología Clarius
            </p>
          </motion.div>
        </div>

        {/* Carrusel infinito */}
        <div className="relative">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 35s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex animate-scroll">
            {/* Primera copia de las imágenes */}
            {clinicalImages.map((image, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-[400px] md:w-[500px] px-4"
              >
                <div className="bg-black rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
                  <img
                    src={image}
                    alt={`Imagen clínica ${index + 1}`}
                    className="w-full h-[300px] md:h-[350px] object-contain"
                  />
                </div>
              </div>
            ))}
            {/* Segunda copia de las imágenes para el loop infinito */}
            {clinicalImages.map((image, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-[400px] md:w-[500px] px-4"
              >
                <div className="bg-black rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
                  <img
                    src={image}
                    alt={`Imagen clínica ${index + 1}`}
                    className="w-full h-[300px] md:h-[350px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gradientes laterales para efecto fade */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </div>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          {/* Sección visual con imágenes de uso clínico */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Tecnología en Acción
              </h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Clarius es utilizado por profesionales médicos en todo Ecuador para diagnósticos precisos y procedimientos guiados en tiempo real.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Desde consultorios privados hasta hospitales de alta complejidad, Clarius se adapta a cualquier entorno clínico.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <img
                src="/images/extra/210825_CLRS_1283.jpg"
                alt="Clarius en uso clínico"
                className="rounded-2xl shadow-2xl w-full max-w-md"
              />
            </motion.div>
          </div>

          {/* Galería de Imágenes de Uso Clínico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center text-neutral-dark mb-12">
              Clarius en la Práctica Médica Real
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/images/extra/new1.jpg"
                  alt="Clarius en uso clínico profesional"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <img
                  src="/images/extra/new2.jpg"
                  alt="Médico usando Clarius"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Banner de Métricas de Confianza */}
      <TrustMetricsBanner />

      {/* Sección CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              ¿Listo para transformar tu práctica médica?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
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
                href="https://wa.me/593959253505?text=Hola,%20me%20gustaría%20agendar%20una%20demo"
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
