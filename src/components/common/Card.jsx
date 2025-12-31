import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' } : {}}
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
