import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Sitios Web' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'app', label: 'Apps Móviles' },
    { id: 'dashboard', label: 'Dashboards' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Boutique Bella - Tienda Online',
      category: 'ecommerce',
      description: 'Tienda de ropa femenina con pasarela de pagos integrada y sistema de inventario automático.',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['E-commerce', 'React', 'Stripe', 'Dashboard'],
      results: '+300% ventas online',
      client: 'Boutique Bella',
      year: '2024'
    },
    {
      id: 2,
      title: 'RestauApp - App de Pedidos',
      category: 'app',
      description: 'Aplicación móvil para pedidos de restaurante con notificaciones push y sistema de loyalty.',
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['React Native', 'Firebase', 'Push Notifications'],
      results: '250% más pedidos',
      client: 'Restaurante Don Carlos',
      year: '2024'
    },
    {
      id: 3,
      title: 'Centro AnaRosa - Sistema de Citas',
      category: 'web',
      description: 'Sistema web para agendamiento de citas con recordatorios automáticos y panel administrativo.',
      image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Vue.js', 'Calendar API', 'Email Automation'],
      results: '-80% no-asistencias',
      client: 'Centro de Belleza AnaRosa',
      year: '2023'
    },
    {
      id: 4,
      title: 'Dashboard Comercial - Analytics',
      category: 'dashboard',
      description: 'Panel de control para seguimiento de ventas, leads y métricas comerciales en tiempo real.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Dashboard', 'Chart.js', 'Real-time'],
      results: '+150% conversión',
      client: 'Distribuidora Lima Norte',
      year: '2023'
    },
    {
      id: 5,
      title: 'Librería El Saber - Catálogo Digital',
      category: 'web',
      description: 'Sitio web con catálogo de libros, sistema de reservas y control de inventario automático.',
      image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['WordPress', 'WooCommerce', 'Inventory System'],
      results: 'Inventario 100% digital',
      client: 'Librería El Saber',
      year: '2023'
    },
    {
      id: 6,
      title: 'FarmApp - Delivery de Medicamentos',
      category: 'app',
      description: 'Aplicación para delivery de medicamentos con recetas digitales y tracking en tiempo real.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Flutter', 'GPS Tracking', 'Digital Prescriptions'],
      results: '24/7 disponibilidad',
      client: 'Farmacia San Martín',
      year: '2024'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-dark-800">
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
            Nuestro Portafolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 dark:text-white mb-6">
            Casos de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
              Éxito Reales
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explora algunos de nuestros proyectos más exitosos y los resultados 
            extraordinarios que hemos logrado para nuestros clientes.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filtrar por:</span>
          </div>
          
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-accent-500 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-accent-100 dark:hover:bg-accent-900/20 border border-gray-200 dark:border-dark-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-700"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-white text-sm font-medium">
                        {project.year}
                      </span>
                      <div className="flex space-x-2">
                        <motion.button
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Play className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white font-poppins group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.client}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Results Badge */}
                  <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.results}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-xs rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            ¿Te gustó lo que viste? Tenemos muchos más casos de éxito para mostrarte.
          </p>
          <motion.button
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Ver Portafolio Completo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;