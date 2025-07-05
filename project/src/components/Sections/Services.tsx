import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  BarChart3, 
  Settings, 
  ArrowRight,
  Check,
  Star,
  Zap
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Globe,
      title: 'Landing Pages Profesionales',
      subtitle: '¡OFERTA FIESTAS PATRIAS!',
      description: 'Landing pages modernas y optimizadas que convierten visitantes en clientes. Incluye hosting y dominio por 1 año completo.',
      features: [
        'Diseño responsive para todos los dispositivos',
        'Optimización SEO incluida',
        'Hosting y dominio por 1 año',
        'Formularios de contacto',
        'Integración con redes sociales',
        'Certificado SSL gratuito'
      ],
      pricing: 'S/. 350',
      originalPrice: 'S/. 600',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-200 dark:border-red-800',
      isOffer: true,
      offerText: 'Hasta 31 de Julio'
    },
    {
      icon: Smartphone,
      title: 'Apps Móviles',
      subtitle: 'Tu negocio en el bolsillo de tus clientes',
      description: 'Aplicaciones móviles nativas y multiplataforma que conectan directamente con tus clientes, aumentando la fidelización.',
      features: [
        'Apps para iOS y Android',
        'Notificaciones push personalizadas',
        'Diseño intuitivo y moderno',
        'Integración con redes sociales',
        'Panel de administración',
        'Soporte técnico incluido'
      ],
      pricing: 'Desde S/. 500',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      icon: BarChart3,
      title: 'CRM Básico',
      subtitle: 'Gestiona tu inventario en la nube',
      description: 'Sistema de gestión básico para pequeñas empresas. Controla inventario, clientes y ventas desde cualquier lugar.',
      features: [
        'Gestión de inventario',
        'Base de datos de clientes',
        'Reportes de ventas',
        'Acceso desde cualquier dispositivo',
        'Respaldos automáticos',
        'Capacitación incluida'
      ],
      pricing: 'S/. 500',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      subtitle: 'Vende online las 24 horas',
      description: 'Tienda online completa con pasarelas de pago, gestión de inventario y panel administrativo para hacer crecer tus ventas.',
      features: [
        'Pasarelas de pago integradas',
        'Gestión de inventario automática',
        'Panel de ventas en tiempo real',
        'Carritos de compra optimizados',
        'Integración con delivery',
        'Marketing por email incluido'
      ],
      pricing: 'S/. 700',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      borderColor: 'border-cyan-200 dark:border-cyan-800'
    },
    {
      icon: Settings,
      title: 'Automatización',
      subtitle: 'Automatiza y crece sin límites',
      description: 'Sistemas de automatización que te ahorran tiempo y dinero. Procesos automáticos para hacer más eficiente tu negocio.',
      features: [
        'Automatización de procesos',
        'Integración con WhatsApp',
        'Email marketing automático',
        'Seguimiento de leads',
        'Reportes automatizados',
        'Notificaciones inteligentes'
      ],
      pricing: 'Desde S/. 600',
      color: 'from-blue-700 to-cyan-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-cyan-500 font-semibold text-sm uppercase tracking-wide mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 dark:text-white mb-6">
            Soluciones Digitales{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Accesibles
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Desde landing pages hasta automatización empresarial, 
            tenemos la solución perfecta para digitalizar tu negocio a precios justos.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative cursor-pointer transition-all duration-300 w-full max-w-sm ${
                activeService === index 
                  ? 'scale-105 z-10' 
                  : 'hover:scale-102'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setActiveService(index)}
            >
              <div className={`bg-white dark:bg-dark-900 rounded-2xl p-8 h-full border-2 transition-all duration-300 ${
                activeService === index 
                  ? service.borderColor + ' shadow-2xl' 
                  : 'border-gray-200 dark:border-dark-700 shadow-lg hover:shadow-xl'
              }`}>
                {/* Offer Badge */}
                {service.isOffer && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 animate-pulse">
                    <Zap className="w-3 h-3" />
                    <span>OFERTA</span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${service.color}`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-poppins">
                    {service.title}
                  </h3>
                  <p className={`text-sm font-medium ${service.isOffer ? 'text-red-600' : 'text-gray-500 dark:text-gray-400'}`}>
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-700">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-blue-600 font-poppins">
                        {service.pricing}
                      </div>
                      {service.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {service.originalPrice}
                        </div>
                      )}
                      {service.offerText && (
                        <div className="text-xs text-red-600 font-medium">
                          {service.offerText}
                        </div>
                      )}
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-colors ${
                      activeService === index ? 'text-cyan-500' : 'text-gray-400'
                    }`} />
                  </div>
                </div>

                {/* Active Indicator */}
                {activeService === index && (
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-dark-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Features */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">
                    {services[activeService].title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Todo lo que incluye este servicio:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[activeService].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right - CTA */}
              <div className={`${services[activeService].bgColor} p-8 rounded-xl border ${services[activeService].borderColor}`}>
                <div className="text-center space-y-6">
                  {services[activeService].isOffer && (
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      🎉 OFERTA ESPECIAL FIESTAS PATRIAS
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Calidad garantizada
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-gray-900 dark:text-white font-poppins">
                        {services[activeService].pricing}
                      </div>
                      {services[activeService].originalPrice && (
                        <div className="text-lg text-gray-500 line-through">
                          Antes: {services[activeService].originalPrice}
                        </div>
                      )}
                      {services[activeService].offerText && (
                        <div className="text-sm text-red-600 font-medium">
                          ⏰ {services[activeService].offerText}
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      * Precio puede variar según requerimientos específicos
                    </p>
                  </div>

                  <div className="space-y-3">
                    <motion.button
                      className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Solicitar Cotización
                    </motion.button>
                    
                    <button className="w-full text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                      Más información →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Special Offer Banner */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-poppins">
              🎉 ¡OFERTA ESPECIAL FIESTAS PATRIAS! 🇵🇪
            </h3>
            <p className="text-lg">
              Landing Pages profesionales por solo <span className="font-bold text-3xl">S/. 350</span>
            </p>
            <p className="text-sm opacity-90">
              Incluye hosting y dominio por 1 año completo • Válido hasta el 31 de Julio
            </p>
            <motion.button
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              ¡Aprovecha la Oferta!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;