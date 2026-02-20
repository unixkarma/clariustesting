import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Card from '../components/common/Card';
import TrustMetricsBanner from '../components/common/TrustMetricsBanner';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonios = () => {
  const testimonios = [
    {
      nombre: 'Dr. Pablo A.',
      especialidad: 'Especialista en Medicina Estética',
      testimonio: 'Clarius es uno de los mejores ecógrafos portátiles para el abordaje facial. Ofrece excelente definición de imagen, IA y tecnologías como Power Doppler y T-Mode, brindando seguridad y tranquilidad al médico y al paciente.',
      imagen: '/images/testimonios/doctor1.jpg'
    },
    {
      nombre: 'Dr. Alfredo H.',
      especialidad: 'Cirujano Dentista / Radiólogo Oral y Maxilofacial',
      testimonio: 'El L15 de Clarius destaca por su calidad de imagen, software avanzado e inteligencia artificial. Es superior a muchos equipos del mercado y aporta un gran valor académico y clínico.',
      imagen: '/images/testimonios/doctor2.jpg'
    },
    {
      nombre: 'Dra. Geovana G.',
      especialidad: 'Especialista en Dermatología',
      testimonio: 'Clarius es clave para el diagnóstico dermatológico y la seguridad en procedimientos estéticos. Permite visualizar vasos y estructuras profundas, mejorando la precisión y reduciendo riesgos.',
      imagen: '/images/testimonios/doctora3.jpg'
    },
    {
      nombre: 'Dr. Alexander E.',
      especialidad: 'Cirujano Plástico',
      testimonio: 'Clarius permite visualizar en tiempo real las estructuras internas durante procedimientos como la lipotransferencia. Su tecnología e IA aumentan la precisión, reducen complicaciones y mejoran la seguridad del paciente.',
      imagen: '/images/testimonios/doctor4.jpg'
    },
    {
      nombre: 'Dr. Marcos I.',
      especialidad: 'Anestesiólogo',
      testimonio: 'Clarius destaca por su fidelidad de imagen e inteligencia artificial, facilitando accesos vasculares y cardíacos. Su portabilidad y comandos de voz son clave para mantener la esterilidad, diferenciándolo claramente de otros equipos.',
      imagen: '/images/testimonios/doctor5.jpg'
    },
    {
      nombre: 'Dr. Donovan R.',
      especialidad: 'Médico Vascular',
      testimonio: 'Comprar Clarius es similar a comprar un Mercedes Benz. Es uno de los mejores ecógrafos portátiles e inalámbricos del mercado, con excelente calidad y desempeño clínico. Un insumo de alto nivel para la práctica médica.',
      imagen: '/images/testimonios/doctor6.jpg'
    },
  ];

  return (
    <div className="py-20">
      <SEO
        title="Testimonios de Médicos | Ecógrafos Clarius Ecuador"
        description="Lo que dicen los médicos ecuatorianos sobre Clarius. Testimonios reales de especialistas que usan ecógrafos portátiles Clarius en su práctica clínica diaria."
        keywords="testimonios ecógrafo Clarius, médicos Ecuador ecógrafo portátil, reseñas Clarius Ecuador, experiencias ultrasonido portátil"
        canonical="/testimonios"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 mb-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Testimonios de Médicos en Ecuador
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Descubre cómo Clarius está transformando la práctica médica de profesionales ecuatorianos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid de Testimonios */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonios.map((testimonio, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="p-8">
                {/* Quote Icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl text-accent" />
                </div>

                {/* Testimonio */}
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonio.testimonio}"
                </p>

                {/* Separador */}
                <div className="border-t border-gray-200 pt-6">
                  {/* Avatar Placeholder */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonio.nombre.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-neutral-dark">
                        {testimonio.nombre}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonio.especialidad}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Banner de Métricas de Confianza */}
      <TrustMetricsBanner />

      {/* Estadísticas */}
      <section className="container-custom mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <p className="text-gray-600">Países alrededor del mundo que ahora usan Clarius</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2">2x</div>
            <p className="text-gray-600">Crecimiento en la región del Indo-Pacífico</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2">30+</div>
            <p className="text-gray-600">Países que utilizan nuestra tecnología de inteligencia artificial</p>
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-secondary to-secondary-light text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sé parte de la Revolución del Ultrasonido Portátil
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de médicos que ya mejoraron su práctica con Clarius
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-white text-secondary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-200 inline-block"
            >
              Solicitar Demo Gratuita
            </a>
            <a
              href="/scanners"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-secondary text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 inline-block"
            >
              Ver Equipos
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Testimonios;
