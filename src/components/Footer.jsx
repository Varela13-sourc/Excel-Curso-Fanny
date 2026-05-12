import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-pink-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-gray-600 font-medium">Hecho con</span>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
          </motion.div>
          <span className="text-gray-600 font-medium">para Fanny.</span>
        </div>
        
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-500 mb-2">
          ¡Tú puedes con todo!
        </h2>
        <p className="text-sm text-gray-400">
          Domina Excel y sigue siendo la mejor maestra del mundo.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
