import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, BookOpen, Clock, Award } from 'lucide-react';

const HeroSection = ({ setActiveModule }) => {
  return (
    <section className="min-h-full flex flex-col items-center justify-center p-6 text-center lg:py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full shadow-sm"
        >
          <Sparkles className="w-5 h-5 text-green-600" />
          <span className="text-sm font-bold text-green-700 uppercase tracking-wider">Versión Oficina Pro</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight"
        >
          Domina Excel y <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
            Acelera tu Trabajo
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Un curso interactivo, directo al grano y enfocado en resolver problemas reales de oficina. Olvídate de la teoría aburrida y aprende haciendo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => setActiveModule('m1')}
            className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            Comenzar Módulo 1
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setActiveModule('intensive')}
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 font-bold rounded-xl shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
          >
            Ver Ruta Intensiva
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left"
        >
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">10 Módulos</h3>
            <p className="text-gray-600 text-sm">Desde captura de datos hasta control de inventarios.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">100% Práctico</h3>
            <p className="text-gray-600 text-sm">Simuladores, ejercicios interactivos y casos reales.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Evaluación</h3>
            <p className="text-gray-600 text-sm">Checklist de habilidades listos para aplicar en tu CV.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
