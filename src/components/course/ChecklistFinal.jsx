import React, { useState } from 'react';
import { CheckSquare, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const ChecklistFinal = () => {
  const [checkedItems, setCheckedItems] = useState({});
  
  const checklist = [
    "Sé capturar datos correctamente sin espacios extra.",
    "Sé inmovilizar paneles y dar formato de tabla.",
    "Sé usar SUMA, PROMEDIO y CONTARA.",
    "Sé usar la función condicional SI.",
    "Sé limpiar datos con NOMPROPIO, ESPACIOS y Texto en Columnas.",
    "Sé cruzar información usando BUSCARV o BUSCARX.",
    "Sé aplicar filtros y ordenar datos de mayor a menor.",
    "Sé quitar duplicados sin arruinar la base.",
    "Sé hacer un resumen rápido usando SUBTOTALES."
  ];

  const handleCheck = (index) => {
    const newChecked = { ...checkedItems, [index]: !checkedItems[index] };
    setCheckedItems(newChecked);
    
    // Check if all are true
    if (Object.keys(newChecked).length === checklist.length && Object.values(newChecked).every(v => v)) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#3b82f6', '#f59e0b']
      });
    }
  };

  const isComplete = Object.keys(checkedItems).length === checklist.length && Object.values(checkedItems).every(v => v);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden max-w-3xl mx-auto my-12">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-8 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Trophy size={120} className="-mt-4 -mr-4" />
        </div>
        <Trophy size={48} className="mx-auto mb-4 text-yellow-400" />
        <h2 className="text-3xl font-bold mb-2">Checklist de Graduación</h2>
        <p className="text-gray-300">Marca las habilidades que ya dominas. ¡Sé honesto contigo mismo!</p>
      </div>
      
      <div className="p-8">
        <div className="space-y-4">
          {checklist.map((item, idx) => (
            <label 
              key={idx} 
              className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all border-2 ${
                checkedItems[idx] 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-100 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="pt-0.5">
                <input 
                  type="checkbox" 
                  className="w-6 h-6 rounded text-green-600 focus:ring-green-500 cursor-pointer"
                  checked={checkedItems[idx] || false}
                  onChange={() => handleCheck(idx)}
                />
              </div>
              <span className={`text-lg font-medium transition-all ${checkedItems[idx] ? 'text-green-900 line-through opacity-70' : 'text-gray-800'}`}>
                {item}
              </span>
            </label>
          ))}
        </div>

        {isComplete && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-8 bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-200 rounded-xl p-6 text-center"
          >
            <h3 className="text-2xl font-bold text-yellow-800 mb-2">¡Felicidades, Experto! 🎉</h3>
            <p className="text-yellow-900 font-medium">
              Has completado todas las competencias esenciales de Excel para oficina. Estás listo para cualquier reto administrativo.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ChecklistFinal;
