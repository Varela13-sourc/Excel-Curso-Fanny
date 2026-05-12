import React, { useState } from 'react';
import { Target, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PracticalExercise = ({ exercise }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden mb-6 relative">
      <div className="absolute top-0 left-0 w-2 h-full bg-orange-400"></div>
      
      <div className="p-6 pl-8">
        <div className="flex items-center gap-2 mb-4">
          <Target size={20} className="text-orange-500" />
          <h3 className="text-lg font-bold text-gray-900">Ejercicio Práctico</h3>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Contexto</span>
            <p className="text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm">
              {exercise.context}
            </p>
          </div>
          
          <div>
            <span className="text-xs font-bold text-orange-500 uppercase tracking-wider block mb-1">Instrucción</span>
            <p className="text-gray-900 font-medium text-lg">
              {exercise.instruction}
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowSolution(!showSolution)}
          className="flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors bg-orange-50 hover:bg-orange-100 px-4 py-2 rounded-lg"
        >
          {showSolution ? <EyeOff size={16} /> : <Eye size={16} />}
          {showSolution ? "Ocultar Solución" : "Ver Solución"}
        </button>

        <AnimatePresence>
          {showSolution && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mt-4"
            >
              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-2">Respuesta Correcta</span>
                <p className="font-mono text-green-900 bg-white px-3 py-2 rounded border border-green-100 mb-3 font-semibold shadow-sm inline-block">
                  {exercise.expected}
                </p>
                <p className="text-sm text-green-800">
                  <span className="font-bold">¿Por qué? </span> {exercise.solution}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PracticalExercise;
