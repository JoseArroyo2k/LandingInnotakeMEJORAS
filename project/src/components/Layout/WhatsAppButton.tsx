import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      '¡Hola! Me interesa conocer más sobre los servicios digitales de InnoTake. ¿Podrían ayudarme?'
    );
    window.open(`https://wa.me/51917425215?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors overflow-hidden"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 2 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img 
        src="/assets/images/WhatsApp.png" 
        alt="WhatsApp" 
        className="w-8 h-8"
      />
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
};

export default WhatsAppButton;