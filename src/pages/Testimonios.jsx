import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import TrustMetricsBanner from '../components/common/TrustMetricsBanner';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonios = () => {
  const testimonios = [
    {
      nombre: 'Dr. Pablo Abarca',
      especialidad: 'Medicina Estética',
      testimonio: 'Clarius ha sido reconocido como uno de los mejores ecógrafos portátiles para el abordaje facial y representa una verdadera vanguardia en la medicina estética. Nos permite trabajar con total tranquilidad, ya que podemos evaluar profundidades entre 1 y 4 cm durante todo el acto médico. La ecografía se integra en cada etapa del procedimiento, brindándonos imágenes de excelente definición. Además, Clarius ofrece ventajas clave como la inteligencia artificial, la identificación de estructuras ecográficas y un software especializado con Power Doppler y T-Mode. Esta tecnología es una novedad, ya que anteriormente no contábamos con equipos de ultralta frecuencia. El principal beneficio, tanto para el médico como para el paciente, es la seguridad y la tranquilidad.',
      imagen: '/images/testimonios/doctor1.jpg'
    },
    {
      nombre: 'Dr. Alfredo Haristoy',
      especialidad: 'Cirujano Dentista – Radiólogo Oral y Maxilofacial',
      testimonio: 'Considero que el L15 es un dispositivo excelente. Clarius es superior a muchos equipos de la competencia, especialmente en software, calidad de imagen y desarrollo tecnológico. La inteligencia artificial es una herramienta muy importante desde el punto de vista académico y clínico. Invito a todos los profesionales a interesarse en la ecografía, ya que aporta un valor significativo a la práctica médica.',
      imagen: '/images/testimonios/doctor2.jpg'
    },
    {
      nombre: 'Dra. Geovana Gutiérrez',
      especialidad: 'Dermatología',
      testimonio: 'Clarius es de gran utilidad en dermatología, tanto para el diagnóstico adecuado de enfermedades como para la seguridad en procedimientos estéticos. Nos permite conocer a profundidad estructuras que antes no podíamos visualizar con precisión. Gracias a la ecografía, podemos identificar vasos sanguíneos antes de intervenir y evaluar exactamente procedimientos previos, lo que incrementa notablemente la seguridad del paciente.',
      imagen: '/images/testimonios/doctora3.jpg'
    },
    {
      nombre: 'Dr. Alexander Egas',
      especialidad: 'Cirujano Plástico',
      testimonio: 'Clarius es un sistema de ultrasonido que nos permite visualizar de manera directa todas las estructuras internas donde vamos a realizar nuestros procedimientos. Lo que antes se hacía únicamente por palpación, hoy, gracias a este sistema con inteligencia artificial, puede realizarse de forma precisa y directa. Esto es especialmente importante en procedimientos como la lipotransferencia, ya que nos permite saber exactamente dónde colocar la grasa, reduciendo complicaciones que antes eran frecuentes. Logramos mayor seguridad para nuestros pacientes, por lo que considero que debería ser una herramienta fundamental dentro de los procedimientos de lipoescultura y en el seguimiento de la recuperación.',
      imagen: '/images/testimonios/doctor4.jpg'
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
            <div className="text-4xl font-bold text-primary mb-2">70+</div>
            <p className="text-gray-600">Número de países que ahora usan Clarius</p>
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
