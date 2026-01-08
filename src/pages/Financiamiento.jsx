import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import { FaCreditCard, FaUniversity, FaHandHoldingUsd, FaPercentage } from 'react-icons/fa';

const Financiamiento = () => {
  const opciones = [
    {
      icon: <FaPercentage className="text-5xl text-primary" />,
      titulo: 'Descuentos por Pago al Contado',
      descripcion: 'Obtén el mejor precio pagando el valor total del equipo al momento de la compra',
    },
    {
      icon: <FaHandHoldingUsd className="text-5xl text-primary" />,
      titulo: 'Financiamiento Personalizado',
      descripcion: 'Diseñamos un plan de pago ajustado a tus necesidades y capacidad económica',
    },
    {
      icon: <FaCreditCard className="text-5xl text-primary" />,
      titulo: 'Entrada + Cuotas Mensuales',
      descripcion: 'Financia tu equipo Clarius con una entrada inicial y cuotas mensuales adaptadas a tu flujo de ingresos',
    },
    {
      icon: <FaUniversity className="text-5xl text-primary" />,
      titulo: 'Planes Institucionales',
      descripcion: 'Soluciones especiales para clínicas, hospitales e instituciones médicas con múltiples equipos',
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
              Opciones de Financiamiento
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Facilidades de pago para que puedas adquirir tu ecógrafo Clarius sin complicaciones
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opciones de Financiamiento */}
      <section className="container-custom mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opciones.map((opcion, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="p-8">
                <div className="mb-6">
                  {opcion.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                  {opcion.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {opcion.descripcion}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Sección Visual con Imágenes */}
      <section className="container-custom mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Invierte en Tecnología de Primer Nivel
          </h2>
          <p className="text-xl text-gray-600">
            Clarius es la inversión que transforma tu práctica médica
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/extra/new3.jpg"
              alt="Profesional médico usando Clarius"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src="/images/extra/new4.png"
              alt="Tecnología Clarius en acción"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Proceso de Adquisición */}
      <section className="bg-neutral-light py-16 mb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              ¿Cómo Adquirir tu Equipo?
            </h2>
            <p className="text-xl text-gray-600">
              Proceso simple y transparente
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { num: '1', titulo: 'Contacto', desc: 'Completa el formulario o escríbenos por WhatsApp' },
              { num: '2', titulo: 'Asesoría', desc: 'Te ayudamos a elegir el scanner ideal para ti' },
              { num: '3', titulo: 'Cotización', desc: 'Recibe una propuesta económica personalizada' },
              { num: '4', titulo: 'Compra', desc: 'Finaliza tu compra y recibe capacitación completa' },
            ].map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {paso.num}
                </div>
                <h4 className="font-bold text-neutral-dark mb-2 text-lg">
                  {paso.titulo}
                </h4>
                <p className="text-gray-600 text-sm">
                  {paso.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Métodos de Pago */}
      <section className="container-custom mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-neutral-dark mb-6 text-center">
            Métodos de Pago Aceptados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-primary mb-3 text-lg">Transferencia Bancaria</h4>
              <p className="text-gray-600 mb-4">
                Realiza tu pago mediante transferencia bancaria directa. Te proporcionaremos
                los datos de la cuenta al momento de coordinar tu compra.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3 text-lg">Coordinación vía WhatsApp</h4>
              <p className="text-gray-600 mb-4">
                Para facilitar tu proceso de pago, coordina directamente con nuestro equipo
                comercial a través de WhatsApp. Atención personalizada.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Final */}
      <section className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-secondary to-secondary-light text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Invertir en tu Práctica Médica?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Solicita una cotización personalizada sin compromiso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-white text-secondary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-200 inline-block"
            >
              Cotiza Ahora
            </a>
            <a
              href="https://wa.me/593959253505?text=Hola,%20quiero%20información%20sobre%20financiamiento"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-secondary text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 inline-block"
            >
              Hablar con Asesor
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Financiamiento;
