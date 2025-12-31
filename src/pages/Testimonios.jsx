import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonios = () => {
  const testimonios = [
    {
      nombre: 'Dr. Carlos M.',
      especialidad: 'Emergencias',
      ciudad: 'Quito',
      testimonio: 'Desde que uso Clarius he reducido significativamente los tiempos de diagnóstico en emergencias. La portabilidad del equipo me permite hacer evaluaciones FAST al pie de la cama del paciente, lo que ha mejorado la confianza de mis pacientes y la calidad de atención en el servicio.',
      imagen: '/images/testimonios/doctor1.jpg'
    },
    {
      nombre: 'Dra. Andrea V.',
      especialidad: 'Ginecología',
      ciudad: 'Guayaquil',
      testimonio: 'Es increíble tener un ecógrafo de alta definición en mi bolsillo. Puedo llevar mi scanner Clarius a consultas domiciliarias y ofrecer el mismo nivel de diagnóstico que en mi consultorio. Mis pacientes quedan sorprendidos con la calidad de las imágenes.',
      imagen: '/images/testimonios/doctora2.jpg'
    },
    {
      nombre: 'Dr. Roberto S.',
      especialidad: 'Traumatología',
      ciudad: 'Cuenca',
      testimonio: 'Como traumatólogo deportivo, el Clarius L15 ha sido un cambio total en mi práctica. Puedo evaluar lesiones musculares y tendinosas en tiempo real, guiar infiltraciones con precisión milimétrica y dar respuestas inmediatas a mis pacientes deportistas.',
      imagen: '/images/testimonios/doctor3.jpg'
    },
    {
      nombre: 'Dra. María F.',
      especialidad: 'Anestesiología',
      ciudad: 'Ambato',
      testimonio: 'Los bloqueos nerviosos guiados por ultrasonido han mejorado notablemente con Clarius. La calidad de imagen es excepcional y la interfaz es muy intuitiva. Además, el soporte técnico local de JAF-PHARMA ha sido excelente.',
      imagen: '/images/testimonios/doctora4.jpg'
    },
    {
      nombre: 'Dr. Luis P.',
      especialidad: 'Medicina Interna',
      ciudad: 'Loja',
      testimonio: 'En cuidados críticos, cada segundo cuenta. Clarius me permite hacer evaluaciones pulmonares y cardíacas point-of-care sin necesidad de trasladar al paciente. La conectividad con mi tablet es perfecta y las imágenes se guardan automáticamente en la nube.',
      imagen: '/images/testimonios/doctor5.jpg'
    },
    {
      nombre: 'Dra. Patricia G.',
      especialidad: 'Dermatología Estética',
      ciudad: 'Quito',
      testimonio: 'El Clarius L20 ha revolucionado mi consulta estética. Puedo evaluar con precisión milimétrica los rellenos dérmicos, analizar la calidad de la piel y realizar procedimientos guiados con total seguridad. Mis pacientes valoran mucho esta tecnología.',
      imagen: '/images/testimonios/doctora6.jpg'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Testimonios de Médicos en Ecuador
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
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
                        {testimonio.especialidad} • {testimonio.ciudad}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <p className="text-gray-600">Países usando Clarius</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2">500K+</div>
            <p className="text-gray-600">Médicos en el mundo</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2">15M+</div>
            <p className="text-gray-600">Estudios realizados</p>
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
