import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import TrustMetricsBanner from '../components/common/TrustMetricsBanner';

const Scanners = () => {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const especialidades = [
    { id: 'todos', nombre: 'Todos los Scanners' },
    { id: 'msk', nombre: 'MSK / Traumatología' },
    { id: 'obgyn', nombre: 'Ginecología / Obstetricia' },
    { id: 'emergencias', nombre: 'Emergencias / Cuidados Críticos' },
    { id: 'dermatologia', nombre: 'Dermatología / Estética' },
    { id: 'cardiaco', nombre: 'Cardiología' },
  ];

  const scanners = [
    {
      id: 'l15',
      nombre: 'L15 HD3',
      especialidades: ['msk', 'vascular', 'tiroides'],
      descripcion: 'Alta resolución para estructuras superficiales, ideal para medicina deportiva y procedimientos guiados',
      aplicaciones: ['MSK', 'Vascular', 'Tiroides', 'Nervios Periféricos'],
      frecuencia: '10-15 MHz',
      profundidad: 'Hasta 10 cm',
      imagen: '/images/l15.jpg',
    },
    {
      id: 'l20',
      nombre: 'L20 HD3',
      especialidades: ['dermatologia', 'estetica'],
      descripcion: 'Frecuencia ultra alta para análisis de piel, rellenos dérmicos y procedimientos estéticos',
      aplicaciones: ['Dermatología', 'Estética Avanzada', 'Análisis de Rellenos', 'Procedimientos Guiados'],
      frecuencia: '15-20 MHz',
      profundidad: 'Hasta 4 cm',
      imagen: '/images/l20.jpg',
    },
    {
      id: 'c3',
      nombre: 'C3 HD3',
      especialidades: ['obgyn', 'abdominal', 'pulmon'],
      descripcion: 'Exploraciones profundas con excelente penetración y definición',
      aplicaciones: ['Abdominal', 'Pulmón', 'OB-GYN', 'Urología'],
      frecuencia: '2-6 MHz',
      profundidad: 'Hasta 28 cm',
      imagen: '/images/c3.jpg',
    },
    {
      id: 'pa',
      nombre: 'PA HD3',
      especialidades: ['cardiaco', 'emergencias'],
      descripcion: 'Evaluación cardíaca portátil para UCI, emergencias y anestesia',
      aplicaciones: ['Cardíaco', 'Cuidados Críticos', 'Anestesia', 'Emergencias'],
      frecuencia: '2-5 MHz',
      profundidad: 'Hasta 28 cm',
      imagen: '/images/pa.jpg',
    },
    {
      id: 'ec7',
      nombre: 'EC7 HD3',
      especialidades: ['obgyn', 'fertilidad'],
      descripcion: 'Imagen endocavitaria precisa para diagnóstico pélvico y reproducción asistida',
      aplicaciones: ['Ginecología', 'Fertilidad', 'OB-GYN Temprana', 'Urología'],
      frecuencia: '5-10 MHz',
      profundidad: 'Hasta 12 cm',
      imagen: '/images/ec7.jpg',
    },
    {
      id: 'pal',
      nombre: 'PAL HD3',
      especialidades: ['msk', 'cardiaco', 'abdominal'],
      descripcion: 'Un solo equipo para estudios profundos y superficiales. Máxima versatilidad',
      aplicaciones: ['Multipropósito', 'Cardíaco', 'Abdominal', 'MSK'],
      frecuencia: '2-10 MHz',
      profundidad: 'Hasta 28 cm',
      imagen: '/images/pal.jpg',
    },
  ];

  const scannersFiltrados =
    filtroActivo === 'todos'
      ? scanners
      : scanners.filter((scanner) =>
          scanner.especialidades.some((esp) => esp.includes(filtroActivo))
        );

  const scrollToContact = () => {
    window.location.href = '/contacto';
  };

  return (
    <div className="py-20 bg-neutral-light">
      <div className="container-custom">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
            Familia de Scanners Clarius
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ultrasonido de alta definición para cada especialidad médica
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {especialidades.map((esp) => (
              <button
                key={esp.id}
                onClick={() => setFiltroActivo(esp.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filtroActivo === esp.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {esp.nombre}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid de Scanners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scannersFiltrados.map((scanner, index) => (
            <motion.div
              key={scanner.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                {/* Imagen del Scanner */}
                <div className="h-48 overflow-hidden bg-white flex items-center justify-center p-4">
                  <img
                    src={`/images/scanners/${scanner.id}.png`}
                    alt={`Ecógrafo ${scanner.nombre}`}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback si no existe la imagen
                      e.target.parentElement.innerHTML = `
                        <div class="h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                          <span class="text-white text-4xl font-bold">${scanner.nombre}</span>
                        </div>
                      `;
                    }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-neutral-dark mb-2">
                    {scanner.nombre}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {scanner.descripcion}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Aplicaciones:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {scanner.aplicaciones.map((app, idx) => (
                        <span
                          key={idx}
                          className="bg-accent text-primary text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500 font-medium">Frecuencia</p>
                        <p className="text-neutral-dark font-semibold">
                          {scanner.frecuencia}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Profundidad</p>
                        <p className="text-neutral-dark font-semibold">
                          {scanner.profundidad}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={scrollToContact}
                    className="w-full"
                  >
                    Solicitar Cotización
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {scannersFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-xl">
              No se encontraron scanners para esta especialidad
            </p>
          </div>
        )}
      </div>

      {/* Banner de Métricas de Confianza */}
      <TrustMetricsBanner />
    </div>
  );
};

export default Scanners;
