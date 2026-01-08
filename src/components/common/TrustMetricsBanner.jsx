import { motion } from 'framer-motion';

const TrustMetricsBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white py-8 md:py-12"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 md:gap-8">
          <p className="text-lg md:text-xl font-light">
            Con la confianza de los clínicos durante más de
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-bold text-secondary">
                1,659,579
              </span>
              <span className="text-base md:text-lg font-light">
                sesiones de escaneo con
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-bold text-secondary">
                40,630
              </span>
              <span className="text-base md:text-lg font-light">
                cuentas de Clarius Cloud
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TrustMetricsBanner;
