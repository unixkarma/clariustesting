import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    productos: [
      { name: 'L15 HD3', path: '/scanners#l15' },
      { name: 'L20 HD3', path: '/scanners#l20' },
      { name: 'C3 HD3', path: '/scanners#c3' },
      { name: 'PA HD3', path: '/scanners#pa' },
      { name: 'EC7 HD3', path: '/scanners#ec7' },
      { name: 'PAL HD3', path: '/scanners#pal' },
    ],
    empresa: [
      { name: 'Inicio', path: '/' },
      { name: 'Beneficios', path: '/beneficios' },
      { name: 'Testimonios', path: '/testimonios' },
      { name: 'Contacto', path: '/contacto' },
    ],
    especialidades: [
      { name: 'Anestesiología', path: '/especialidades#anestesiologia' },
      { name: 'Emergencias', path: '/especialidades#emergencias' },
      { name: 'Ginecología', path: '/especialidades#ginecologia' },
      { name: 'Dermatología', path: '/especialidades#dermatologia' },
      { name: 'Traumatología', path: '/especialidades#traumatologia' },
    ],
  };

  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la Empresa */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">CLARIUS.EC</h3>
            <p className="text-gray-300 mb-4">
              Distribuidores autorizados de ecógrafos portátiles Clarius en Ecuador.
              Tecnología de ultrasonido de última generación para profesionales médicos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Enlaces - Productos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Productos</h4>
            <ul className="space-y-2">
              {navigation.productos.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces - Empresa */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-2">
              {navigation.empresa.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <a href="tel:+593992186927" className="text-gray-300 hover:text-white transition-colors">
                    0992186927
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <a href="mailto:operaciones@jafpharma.com" className="text-gray-300 hover:text-white transition-colors break-all">
                    operaciones@jafpharma.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  Pasaje Amazonas<br />
                  Ecuador
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} JAF-PHARMA SAS. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terminos" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
