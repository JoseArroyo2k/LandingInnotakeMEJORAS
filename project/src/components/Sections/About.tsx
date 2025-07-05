import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Nuestra Misión',
      description: 'Democratizar la tecnología para micro y pequeñas empresas, brindándoles herramientas digitales de calidad mundial a precios accesibles.',
    },
    {
      icon: Eye,
      title: 'Nuestra Visión',
      description: 'Ser la agencia digital líder en Perú para la transformación tecnológica de MyPEs, construyendo el futuro digital del emprendimiento nacional.',
    },
    {
      icon: Users,
      title: 'Nuestro Equipo',
      description: 'Profesionales especializados en desarrollo, diseño UX/UI y marketing digital, comprometidos con el éxito de cada cliente.',
    },
    {
      icon: Award,
      title: 'Nuestro Compromiso',
      description: 'Acompañamiento personalizado desde la idea hasta el lanzamiento, con soporte continuo y evolución constante de tus soluciones.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.span
                className="inline-block text-accent-500 font-semibold text-sm uppercase tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Sobre Nosotros
              </motion.span>
              
              <motion.h2
                className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 dark:text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Transformamos{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                  MyPEs
                </span>{' '}
                en Gigantes Digitales
              </motion.h2>
              
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Desde Lima, Perú, ayudamos a micro y pequeñas empresas a dar el salto digital 
                con soluciones tecnológicas innovadoras, accesibles y completamente personalizadas. 
                Creemos que cada negocio, sin importar su tamaño, merece tener presencia digital 
                de clase mundial.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { number: '3+', label: 'Años de Experiencia' },
                { number: '50+', label: 'Proyectos Completados' },
                { number: '98%', label: 'Clientes Satisfechos' },
                { number: '24/7', label: 'Soporte Continuo' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-gray-50 dark:bg-dark-800 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-primary-600 font-poppins">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-poppins">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;