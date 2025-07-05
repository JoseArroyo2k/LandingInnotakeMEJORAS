import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Servicios', href: '#services' },
    // { label: 'Portafolio', href: '#portfolio' }, // Comentado para integrar después
    { label: 'Contacto', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ];

  const services = [
    'Landing Pages',
    'Apps Móviles',
    'CRM Básico',
    'E-commerce',
    'Automatización',
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-900 dark:bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/images/logoinnotakeblanconegro-Photoroom.png" 
                alt="InnoTake Tech Solutions" 
                className="w-12 h-12"
              />
              <span className="text-2xl font-bold font-poppins">InnoTake</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transformamos micro y pequeñas empresas con soluciones digitales accesibles, 
              escalables y personalizadas en Lima, Perú.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/people/Innotake-Tech-Solutions-Per%C3%BA/100065046667887/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 rounded-lg hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://instagram.com/innotaketech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 rounded-lg hover:bg-pink-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@innotake"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 rounded-lg hover:bg-black transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://wa.me/51917425215"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 rounded-lg hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold font-poppins">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-cyan-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold font-poppins">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold font-poppins">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span className="text-gray-300">Lima, Perú</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span className="text-gray-300">+51 917 425 215</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span className="text-gray-300">servicioalcliente@inno-take.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-dark-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm">
            © 2024 InnoTake Tech Solutions. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <button className="text-gray-400 hover:text-cyan-500 transition-colors">
              Política de Privacidad
            </button>
            <button className="text-gray-400 hover:text-cyan-500 transition-colors">
              Términos de Servicio
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;