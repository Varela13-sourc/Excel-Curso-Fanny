import React, { useState } from 'react';
import { Terminal, Play, Beaker } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CopyBlock from './CopyBlock';

const FormulaSimulator = ({ simulators }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!simulators || simulators.length === 0) return null;

  const activeSim = simulators[activeIndex];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
      <div className="bg-gray-900 px-6 py-4 flex items-center gap-3">
        <Beaker className="text-purple-400" size={20} />
        <h3 className="text-lg font-bold text-white">Simulador de Fórmulas</h3>
      </div>
      
      <div className="flex flex-col md:flex-row border-b border-gray-100">
        {simulators.map((sim, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors border-b-2 ${
              activeIndex === idx 
                ? 'border-purple-600 text-purple-700 bg-purple-50/50' 
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            {sim.formula.split('(')[0]}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Sintaxis</h4>
                <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 font-mono text-sm text-gray-700">
                  {activeSim.syntax}
                </div>
              </div>
              
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">¿Qué hace?</h4>
                <p className="text-gray-700 text-sm">{activeSim.action}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-purple-500 uppercase tracking-wider mb-2">Ejemplo Visual</h4>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-100 text-sm text-purple-900">
                  {activeSim.example}
                </div>
              </div>
              
              <div>
                 <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Copiar para practicar</h4>
                 <CopyBlock text={activeSim.formula} />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FormulaSimulator;
