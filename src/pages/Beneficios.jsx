import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import {
  FaGlobe,
  FaMobileAlt,
  FaGraduationCap,
  FaTools,
  FaHandshake,
  FaAward
} from 'react-icons/fa';

const Beneficios = () => {
  const beneficios = [
    {
      icon: <FaGlobe className="text-5xl text-primary" />,
      titulo: 'Tecnología Líder Mundial',
      descripcion: 'Clarius es reconocido mundialmente por su innovación en ultrasonido portátil. Utilizado por miles de médicos en más de 100 países.',
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
      titulo: 'Sin cables, sin consolas',
      descripcion: 'El scanner más pequeño del mundo que cabe en tu bolsillo',
    },
    {
      titulo: 'Conexión directa a tu dispositivo',
      descripcion: 'Compatible con smartphones y tablets iOS y Android',
    },
    {
      titulo: 'Inteligencia Artificial integrada',
      descripcion: 'Optimización automática de imagen para diagnósticos más precisos',
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {caracteristicas.map((caracteristica, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h4 className="font-bold text-neutral-dark mb-2">
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
