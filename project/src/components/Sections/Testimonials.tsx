import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'María González',
      position: 'Dueña de Boutique Bella',
      company: 'Boutique de Ropa',
      content: 'InnoTake transformó completamente mi negocio. Mi tienda online ha aumentado las ventas en un 300% en solo 6 meses. El equipo es increíblemente profesional y siempre están disponibles para resolver cualquier duda.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      results: '+300% ventas online'
    },
    {
      name: 'Carlos Mendoza',
      position: 'Gerente General',
      company: 'Restaurante Don Carlos',
      content: 'Desde que implementamos el sistema de pedidos online y la app móvil, nuestros clientes están más conectados que nunca. El proceso fue súper transparente y el resultado superó nuestras expectativas.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      results: '250% más pedidos'
    },
    {
      name: 'Ana Ruiz',
      position: 'Fundadora',
      company: 'Centro de Belleza AnaRosa',
      content: 'El dashboard administrativo que crearon me permite controlar todo mi negocio desde cualquier lugar. Las citas online y el sistema de recordatorios automáticos han reducido las no-asistencias en un 80%.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      results: '-80% no-asistencias'
    },
    {
      name: 'Roberto Silva',
      position: 'Director Comercial',
      company: 'Distribuidora Lima Norte',
      content: 'La automatización de procesos que implementaron nos ahorra más de 20 horas semanales. El CRM personalizado nos ha ayudado a aumentar la conversión de leads en un 150%. Altamente recomendados.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      results: '+150% conversión'
    },
    {
      name: 'Lucía Vásquez',
      position: 'Propietaria',
      company: 'Librería El Saber',
      content: 'Pensé que mi pequeña librería no necesitaba tecnología, pero InnoTake me demostró lo contrario. Ahora tengo ventas online, control de inventario automático y mis clientes pueden reservar libros desde la web.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      results: 'Inventario 100% digital'
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
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
            Testimonios
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 dark:text-white mb-6">
            Lo que Dicen{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
              Nuestros Clientes
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Más de 50 empresas han transformado su negocio con nuestras soluciones. 
            Estas son sus historias de éxito.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTestimonial(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'bg-accent-500 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-accent-300'
                  }`}
                />
              ))}
            </div>

            <div className="flex space-x-2">
              <motion.button
                onClick={() => {
                  prevTestimonial();
                  setIsAutoPlaying(false);
                }}
                className="p-2 bg-white dark:bg-dark-800 rounded-lg shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-accent-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => {
                  nextTestimonial();
                  setIsAutoPlaying(false);
                }}
                className="p-2 bg-white dark:bg-dark-800 rounded-lg shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-accent-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              className="bg-white dark:bg-dark-900 rounded-2xl shadow-2xl p-8 lg:p-12 border border-gray-200 dark:border-dark-700"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Left - Profile */}
                <div className="text-center lg:text-left space-y-4">
                  <div className="relative inline-block">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0 border-4 border-accent-200"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-accent-500 rounded-full p-2">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white font-poppins">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonials[activeTestimonial].position}
                    </p>
                    <p className="text-primary-600 font-medium text-sm">
                      {testimonials[activeTestimonial].company}
                    </p>
                  </div>

                  {/* Result Badge */}
                  <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonials[activeTestimonial].results}
                  </div>
                </div>

                {/* Right - Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-accent-500/30" />
                  
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    "{testimonials[activeTestimonial].content}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: '98%', label: 'Satisfacción del Cliente' },
              { number: '50+', label: 'Proyectos Completados' },
              { number: '24/7', label: 'Soporte Continuo' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 font-poppins mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;