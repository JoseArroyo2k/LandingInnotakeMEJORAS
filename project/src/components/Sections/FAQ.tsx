import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuánto cuesta una landing page?',
      answer: '¡Tenemos una oferta especial por Fiestas Patrias! Landing pages profesionales por solo S/. 350 (precio normal S/. 600). Incluye hosting y dominio por 1 año completo, diseño responsivo, optimización SEO básica y formularios de contacto. Esta oferta es válida hasta el 31 de julio.'
    },
    {
      question: '¿Qué incluye el precio de S/. 350?',
      answer: 'El precio incluye diseño profesional responsivo, hosting por 1 año, dominio .com por 1 año, certificado SSL, optimización SEO básica, formularios de contacto, integración con redes sociales y hasta 3 revisiones sin costo adicional. Es un paquete completo para que tu negocio esté online inmediatamente.'
    },
    {
      question: '¿Tienen planes de pago mensuales?',
      answer: 'Sí, ofrecemos diferentes modalidades de pago para adaptarnos a tu presupuesto. Puedes elegir entre pago al contado con descuento, financiamiento sin intereses hasta en 6 cuotas, o planes de mantenimiento mensual que incluyen actualizaciones y soporte continuo.'
    },
    {
      question: '¿Cuánto cuestan las apps móviles?',
      answer: 'Las apps móviles empiezan desde S/. 500 para aplicaciones básicas. El precio varía según la complejidad: apps simples (S/. 500-800), apps con funciones intermedias (S/. 800-1200), y apps complejas con múltiples funciones (desde S/. 1200). Incluimos diseño, desarrollo y publicación en las tiendas.'
    },
    {
      question: '¿Qué es un CRM básico y cuánto cuesta?',
      answer: 'Nuestro CRM básico cuesta S/. 500 e incluye gestión de inventario, base de datos de clientes, reportes de ventas, acceso desde cualquier dispositivo y respaldos automáticos. Es perfecto para pequeñas empresas que quieren organizar su información y trabajar en la nube.'
    },
    {
      question: '¿Cuánto tiempo toma completar un proyecto?',
      answer: 'Los tiempos varían según el servicio: landing pages 5-7 días, CRM básico 1-2 semanas, apps móviles 2-4 semanas, y e-commerce 2-3 semanas. Trabajamos con metodología ágil y te mantenemos informado del progreso constantemente.'
    },
    {
      question: '¿Ofrecen soporte después de la entrega?',
      answer: 'Sí, todos nuestros proyectos incluyen soporte técnico gratuito: landing pages 3 meses, apps y CRM 6 meses. Después ofrecemos planes de mantenimiento desde S/. 80 mensuales que incluyen actualizaciones, backups automáticos y soporte prioritario.'
    },
    {
      question: '¿La oferta de S/. 350 es real? ¿Hay costos ocultos?',
      answer: 'La oferta es 100% real y no tiene costos ocultos. Por S/. 350 recibes todo lo prometido: landing page profesional + hosting + dominio por 1 año completo. Después del primer año, solo pagarás el hosting y dominio (aproximadamente S/. 200 anuales) para mantener tu sitio activo.'
    }
  ];

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-accent-500 font-semibold text-sm uppercase tracking-wide mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 dark:text-white mb-6">
            Resolvemos tus{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
              Dudas
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Las preguntas más frecuentes sobre nuestros servicios, precios especiales 
            y procesos. Si no encuentras lo que buscas, contáctanos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Illustration */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-poppins mb-4">
                ¿Tienes otras preguntas?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Nuestro equipo está listo para resolver todas tus dudas sobre 
                nuestros servicios y ofertas especiales.
              </p>
              <motion.button
                className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Hacer una Pregunta
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              {[
                { label: 'Respuesta promedio', value: '< 2 horas' },
                { label: 'Consultas resueltas', value: '200+' },
                { label: 'Satisfacción cliente', value: '98%' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-dark-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-dark-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl font-bold text-primary-600 font-poppins">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - FAQ List */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-6 text-left focus:outline-none focus:bg-gray-50 dark:focus:bg-dark-700 transition-colors hover:bg-gray-50 dark:hover:bg-dark-700"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-poppins pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeQuestion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {activeQuestion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-12 border border-red-200 dark:border-red-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins mb-4">
            🎉 ¡No pierdas la oportunidad!
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Landing pages profesionales por solo S/. 350 hasta el 31 de julio. 
            ¡Incluye hosting y dominio por 1 año completo!
          </p>
          <motion.button
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Aprovechar Oferta Especial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;