import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Smartphone, Globe, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Globe, position: { top: '20%', left: '10%' }, delay: 0 },
    { Icon: Smartphone, position: { top: '15%', right: '15%' }, delay: 0.5 },
    { Icon: BarChart3, position: { bottom: '30%', left: '5%' }, delay: 1 },
    { Icon: Zap, position: { bottom: '20%', right: '10%' }, delay: 1.5 },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-black dark:via-slate-900 dark:to-black">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-tech-pattern opacity-20"></div>
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, position, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-400/30"
          style={position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{ 
            opacity: { delay: delay + 2, duration: 0.8 },
            scale: { delay: delay + 2, duration: 0.8 },
            y: { 
              delay: delay + 3,
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
        >
          <Icon className="w-12 h-12" />
        </motion.div>
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Zap className="w-4 h-4" />
              <span>Soluciones Digitales Innovadoras</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold font-poppins text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Tailored{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Digital
              </span>{' '}
              Solutions
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Transformamos micro y pequeñas empresas con desarrollo web, e-commerce, 
              apps móviles y automatización. <span className="text-cyan-400 font-semibold">
              Simple, accesible y escalable.</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('services')}
                className="group bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explorar Servicios</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-white/20 hover:border-cyan-500 text-white hover:text-cyan-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Solicitar Cotización</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              {[
                { number: '10+', label: 'Proyectos Planeados' },
                { number: '100%', label: 'Dedicación' },
                { number: '24/7', label: 'Soporte Técnico' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-cyan-400 font-poppins">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="relative z-10">
              {/* Main Dashboard Mockup */}
              <motion.div
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded w-3/4"></div>
                  <div className="h-3 bg-white/20 rounded w-1/2"></div>
                  <div className="h-3 bg-white/20 rounded w-2/3"></div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/10 rounded-lg p-4 space-y-2">
                      <div className="h-8 bg-cyan-400/50 rounded"></div>
                      <div className="h-2 bg-white/20 rounded w-3/4"></div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 space-y-2">
                      <div className="h-8 bg-blue-400/50 rounded"></div>
                      <div className="h-2 bg-white/20 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-6 -right-6 bg-cyan-500 rounded-lg p-4 shadow-lg"
                animate={{ 
                  rotate: [0, 5, 0],
                  y: [0, -5, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <BarChart3 className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-blue-600 rounded-lg p-4 shadow-lg"
                animate={{ 
                  rotate: [0, -5, 0],
                  y: [0, 5, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <Globe className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;