import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Search, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Consulta Inicial',
      subtitle: '30 min gratuitos',
      description: 'Conversamos sobre tu negocio, objetivos y necesidades específicas. Analizamos tu situación actual y definimos el alcance del proyecto.',
      duration: '1 día',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Search,
      title: 'Análisis y Estrategia',
      subtitle: 'Investigación profunda',
      description: 'Estudiamos tu mercado, competencia y audiencia. Creamos una estrategia digital personalizada que maximice tu ROI.',
      duration: '2-3 días',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      icon: Palette,
      title: 'Diseño y Prototipo',
      subtitle: 'Visualiza tu proyecto',
      description: 'Diseñamos mockups y prototipos interactivos. Te mostramos exactamente cómo se verá tu solución antes de programar.',
      duration: '3-5 días',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Code,
      title: 'Desarrollo',
      subtitle: 'Construcción técnica',
      description: 'Programamos tu solución usando las mejores tecnologías. Te mantenemos informado del progreso semanalmente.',
      duration: '1-4 semanas',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: TestTube,
      title: 'Pruebas y Ajustes',
      subtitle: 'Calidad garantizada',
      description: 'Realizamos pruebas exhaustivas en diferentes dispositivos y navegadores. Ajustamos detalles hasta que esté perfecto.',
      duration: '2-3 días',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      icon: Rocket,
      title: 'Lanzamiento y Soporte',
      subtitle: 'Tu proyecto en vivo',
      description: 'Lanzamos tu proyecto y te capacitamos para usarlo. Incluye 6 meses de soporte técnico gratuito.',
      duration: '1 día + soporte',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
  ];

  const benefits = [
    'Comunicación transparente en cada etapa',
    'Entregas parciales para tu aprobación',
    'Metodología ágil y flexible',
    'Soporte post-lanzamiento incluido'
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-accent-600 font-semibold text-sm uppercase tracking-wide mb-4">
            Nuestro Proceso
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 dark:text-white mb-6">
            Cómo Transformamos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              tu Idea en Realidad
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Un proceso probado, transparente y eficiente que garantiza resultados 
            excepcionales en cada proyecto que emprendemos juntos.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 to-accent-200 dark:from-primary-800 dark:to-accent-800"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <motion.div
                    className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-dark-700 relative"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white font-poppins">
                          {step.title}
                        </h3>
                        <span className="text-sm text-accent-600 font-medium bg-accent-100 dark:bg-accent-900/30 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      
                      <p className="text-sm text-primary-600 font-medium">
                        {step.subtitle}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Icon Circle */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-30`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-lg lg:block hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          className="mt-20 bg-white dark:bg-dark-900 rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-200 dark:border-dark-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Benefits */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">
                  ¿Por qué nuestro proceso funciona?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Hemos perfeccionado nuestra metodología para garantizar 
                  transparencia, calidad y resultados excepcionales.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - CTA */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-8 rounded-xl border border-primary-200 dark:border-primary-800">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white font-poppins">
                    ¿Listo para empezar?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Agenda tu consulta gratuita de 30 minutos y descubre 
                    cómo podemos ayudarte.
                  </p>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Agendar Consulta Gratuita</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;