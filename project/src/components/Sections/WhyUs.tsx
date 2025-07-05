import React from 'react';
import { motion } from 'framer-motion';
import { 
  HandHeart, 
  DollarSign, 
  Settings, 
  TrendingUp, 
  Clock, 
  Shield,
  Users,
  Zap
} from 'lucide-react';

const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: HandHeart,
      title: 'Acompañamiento Personalizado',
      description: 'Te acompañamos en cada paso del proceso, desde la consultoría inicial hasta el soporte post-lanzamiento.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: DollarSign,
      title: 'Precios Justos y Flexibles',
      description: 'Planes de pago adaptados a tu presupuesto con opciones de financiamiento sin intereses.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Settings,
      title: 'Automatización Inteligente',
      description: 'Implementamos sistemas que trabajan por ti, ahorrándote tiempo y aumentando tu productividad.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: TrendingUp,
      title: 'Soluciones que Crecen Contigo',
      description: 'Arquitectura escalable que se adapta al crecimiento de tu negocio sin necesidad de cambios drásticos.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      icon: Clock,
      title: 'Entregas Rápidas',
      description: 'Metodología ágil que garantiza entregas en tiempo récord sin sacrificar la calidad.',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      icon: Shield,
      title: 'Seguridad Garantizada',
      description: 'Implementamos las mejores prácticas de seguridad para proteger tu negocio y tus clientes.',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      icon: Users,
      title: 'Equipo Especializado',
      description: 'Profesionales certificados con experiencia comprobada en proyectos exitosos.',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20'
    },
    {
      icon: Zap,
      title: 'Tecnología de Vanguardia',
      description: 'Utilizamos las últimas tecnologías y tendencias para mantener tu negocio a la vanguardia.',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-accent-500 font-semibold text-sm uppercase tracking-wide mb-4">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 dark:text-white mb-6">
            8 Razones para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
              Confiar en Nosotros
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            No somos solo otra agencia digital. Somos tu socio estratégico 
            en la transformación digital de tu negocio.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-700 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${reason.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-poppins group-hover:text-primary-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-12 border border-primary-200 dark:border-primary-800">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
                ¿Listo para Transformar tu Negocio?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Únete a más de 50 empresas que ya confían en nosotros para su éxito digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Solicitar Consulta Gratuita
                </motion.button>
                <motion.button
                  className="border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Ver Nuestro Trabajo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;