import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import Button from '../components/common/Button';

const Contacto = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const especialidades = [
    'Anestesiología',
    'Emergencias',
    'Ginecología/Obstetricia',
    'Dermatología/Estética',
    'Traumatología/MSK',
    'Medicina Interna',
    'Cardiología',
    'Urología',
    'Otro'
  ];

  const ciudades = [
    'Quito',
    'Guayaquil',
    'Cuenca',
    'Ambato',
    'Manta',
    'Loja',
    'Riobamba',
    'Machala',
    'Otra'
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Aquí se conectará con la API PHP del backend
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        // Scroll to success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      setSubmitError('Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente o contáctanos por WhatsApp.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-neutral-light">
      <SEO
        title="Contacto | Cotiza tu Ecógrafo Clarius en Ecuador"
        description="Solicita una cotización o agenda una demo gratuita de ecógrafos Clarius en Ecuador. Llámanos al +593 959 253505 o escríbenos por WhatsApp. Quito, Ecuador."
        keywords="contacto Clarius Ecuador, cotizar ecógrafo Ecuador, demo ecógrafo portátil, comprar ecógrafo Quito, ecógrafo WhatsApp Ecuador"
        canonical="/contacto"
      />
      <div className="container-custom">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
            Solicita tu Cotización
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Completa el formulario y te contactaremos en menos de 24 horas con una propuesta personalizada
          </p>
        </motion.div>

        {/* Success Message */}
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-8 max-w-2xl mx-auto"
          >
            <div className="flex items-start">
              <FaCheckCircle className="text-green-500 text-3xl mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-green-800 font-bold text-xl mb-2">
                  ¡Solicitud Enviada Exitosamente!
                </h3>
                <p className="text-green-700">
                  Gracias por tu interés en Clarius. Hemos recibido tu solicitud y nos pondremos en contacto contigo muy pronto.
                  Revisa tu correo electrónico para más detalles.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border-2 border-red-500 rounded-lg p-6 mb-8 max-w-2xl mx-auto"
          >
            <p className="text-red-700">{submitError}</p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    {...register('nombre', {
                      required: 'El nombre es obligatorio',
                      minLength: {
                        value: 3,
                        message: 'El nombre debe tener al menos 3 caracteres'
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.nombre ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Ej: Dr. Juan Pérez"
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
                  )}
                </div>

                {/* Especialidad */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Especialidad Médica *
                  </label>
                  <select
                    {...register('especialidad', {
                      required: 'La especialidad es obligatoria'
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.especialidad ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecciona tu especialidad</option>
                    {especialidades.map((esp) => (
                      <option key={esp} value={esp}>
                        {esp}
                      </option>
                    ))}
                  </select>
                  {errors.especialidad && (
                    <p className="text-red-500 text-sm mt-1">{errors.especialidad.message}</p>
                  )}
                </div>

                {/* Ciudad */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Ciudad *
                  </label>
                  <select
                    {...register('ciudad', {
                      required: 'La ciudad es obligatoria'
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.ciudad ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecciona tu ciudad</option>
                    {ciudades.map((ciudad) => (
                      <option key={ciudad} value={ciudad}>
                        {ciudad}
                      </option>
                    ))}
                  </select>
                  {errors.ciudad && (
                    <p className="text-red-500 text-sm mt-1">{errors.ciudad.message}</p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    {...register('telefono', {
                      required: 'El teléfono es obligatorio',
                      pattern: {
                        value: /^[0-9+\-\s()]+$/,
                        message: 'Formato de teléfono inválido'
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.telefono ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Ej: 0992186927"
                  />
                  {errors.telefono && (
                    <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'El correo electrónico es obligatorio',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Correo electrónico inválido'
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mensaje (Opcional)
                  </label>
                  <textarea
                    {...register('mensaje')}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Cuéntanos más sobre tus necesidades o preguntas..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Cotización'}
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Información de Contacto */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 sticky top-24"
            >
              <h3 className="text-2xl font-bold text-neutral-dark mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <FaPhone className="text-primary text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Teléfono</p>
                    <a
                      href="tel:+593959253505"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      0959253505
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaEnvelope className="text-primary text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Email</p>
                    <a
                      href="mailto:operaciones@jafpharma.com"
                      className="text-gray-600 hover:text-primary transition-colors break-all"
                    >
                      operaciones@jafpharma.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-primary text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Dirección</p>
                    <p className="text-gray-600">
                      Pasaje Amazonas<br />
                      Ecuador
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <a
                  href="https://wa.me/593959253505?text=Hola,%20quiero%20más%20información%20sobre%20Clarius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg w-full inline-block text-center transition-colors"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
