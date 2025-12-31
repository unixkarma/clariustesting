import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import {
  FaSyringe,
  FaAmbulance,
  FaBaby,
  FaSpa,
  FaBone,
  FaHeartbeat
} from 'react-icons/fa';

const Especialidades = () => {
  const especialidades = [
    {
      icon: <FaSyringe className="text-5xl text-primary" />,
      titulo: 'Anestesiología',
      descripcion: 'Bloqueos nerviosos más seguros y rápidos con visualización en tiempo real',
      aplicaciones: [
        'Bloqueos nerviosos guiados',
        'Accesos vasculares',
        'Evaluación preanestésica',
        'Monitoreo gástrico'
      ]
    },
    {
      icon: <FaAmbulance className="text-5xl text-primary" />,
      titulo: 'Emergencias',
      descripcion: 'Evaluación inmediata de trauma, pulmón y protocolo FAST',
      aplicaciones: [
        'Protocolo FAST/eFAST',
        'Evaluación pulmonar',
        'Ecocardiografía básica',
        'Procedimientos guiados'
      ]
    },
    {
      icon: <FaBaby className="text-5xl text-primary" />,
      titulo: 'Ginecología / Obstetricia',
      descripcion: 'Seguimiento de embarazo y diagnóstico pélvico de alta precisión',
      aplicaciones: [
        'Control prenatal',
        'Fertilidad',
        'Diagnóstico pélvico',
        'Procedimientos guiados'
      ]
    },
    {
      icon: <FaSpa className="text-5xl text-primary" />,
      titulo: 'Dermatología / Estética',
      descripcion: 'Control preciso de rellenos, análisis de grasa y calidad dérmica',
      aplicaciones: [
        'Evaluación de rellenos dérmicos',
        'Análisis de calidad de piel',
        'Procedimientos estéticos guiados',
        'Detección de patologías cutáneas'
      ]
    },
    {
      icon: <FaBone className="text-5xl text-primary" />,
      titulo: 'Traumatología / MSK',
      descripcion: 'Diagnóstico de lesiones musculares, tendinosas y guías de infiltración',
      aplicaciones: [
        'Lesiones deportivas',
        'Infiltraciones guiadas',
        'Evaluación tendinosa',
        'Diagnóstico de fracturas'
      ]
    },
    {
      icon: <FaHeartbeat className="text-5xl text-primary" />,
      titulo: 'Medicina Interna / Cuidados Críticos',
      descripcion: 'Monitoreo pulmonar y cardíaco en tiempo real para pacientes críticos',
      aplicaciones: [
        'Ecocardiografía point-of-care',
        'Evaluación pulmonar',
        'Valoración de volemia',
        'Procedimientos vasculares'
      ]
    },
  ];

  return (
    <div className="py-20 bg-neutral-light">
      <div className="container-custom">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
            Especialidades Médicas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ultrasonido Clarius para cada área de la práctica médica
          </p>
        </motion.div>

        {/* Grid de Especialidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {especialidades.map((especialidad, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {especialidad.icon}
                </div>

                <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                  {especialidad.titulo}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {especialidad.descripcion}
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Aplicaciones principales:
                  </p>
                  <ul className="text-left space-y-2">
                    {especialidad.aplicaciones.map((app, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-gray-600 text-sm">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿No encuentras tu especialidad?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contáctanos y te asesoramos sobre el scanner ideal para tu práctica médica
          </p>
          <a
            href="/contacto"
            className="bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-200 inline-block"
          >
            Contactar Asesor
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Especialidades;
