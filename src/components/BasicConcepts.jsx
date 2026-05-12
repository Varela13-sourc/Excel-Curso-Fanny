import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

const BasicConcepts = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const explanations = {
    cell: {
      title: "Celda (C3)",
      text: "Es como una cajita. Aquí guardas un dato único, por ejemplo, si Mateo vino el martes. Es la intersección entre una columna y una fila."
    },
    row: {
      title: "Fila (3)",
      text: "Las filas van de lado a lado y tienen números. Piensa en una fila como la información completa de UN solo alumno (ej. Todo sobre Mateo)."
    },
    col: {
      title: "Columna (C)",
      text: "Las columnas van de arriba a abajo y tienen letras. Piensa en una columna como UN solo tipo de dato para todos los niños (ej. La asistencia del Martes)."
    }
  };

  return (
    <section id="basic-concepts" className="py-20 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Conoce tu Nuevo Salón de Clases Virtual
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Pasa el ratón (o toca) las áreas resaltadas para descubrir cómo funciona Excel.
          </motion.p>
        </div>

        <div className="relative glass rounded-2xl p-4 md:p-8 shadow-2xl mx-auto overflow-x-auto">
          {/* Faux Excel Interface */}
          <div className="min-w-[600px] border border-gray-200 bg-white rounded-lg overflow-hidden font-mono text-sm shadow-inner">
            {/* Header Row (Columns) */}
            <div className="flex bg-gray-100 border-b border-gray-300 font-bold text-gray-500">
              <div className="w-12 border-r border-gray-300 flex items-center justify-center bg-gray-200"></div>
              {['A', 'B', 'C', 'D'].map((letter, idx) => (
                <div 
                  key={letter}
                  onMouseEnter={() => setActiveTooltip('col')}
                  onMouseLeave={() => setActiveTooltip(null)}
                  className={`flex-1 flex items-center justify-center py-2 border-r border-gray-300 transition-colors ${letter === 'C' ? 'bg-pastel-mint/40 cursor-pointer hover:bg-pastel-mint' : ''}`}
                >
                  {letter}
                </div>
              ))}
            </div>

            {/* Data Rows */}
            {[
              { id: 1, name: 'Alumno', l: 'Lunes', m: 'Martes', x: 'Miércoles' },
              { id: 2, name: 'Sofía', l: 'Presente', m: 'Presente', x: 'Falta' },
              { id: 3, name: 'Mateo', l: 'Falta', m: 'Presente', x: 'Presente' },
              { id: 4, name: 'Valentina', l: 'Presente', m: 'Presente', x: 'Presente' }
            ].map((row, idx) => (
              <div 
                key={row.id} 
                className={`flex border-b border-gray-200 transition-colors ${row.id === 3 ? 'bg-pastel-pink/20' : ''}`}
                onMouseEnter={() => row.id === 3 ? setActiveTooltip('row') : null}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                {/* Row Number */}
                <div className={`w-12 bg-gray-100 flex items-center justify-center border-r border-gray-300 font-bold text-gray-500 ${row.id === 3 ? 'bg-pastel-pink/40 cursor-pointer' : ''}`}>
                  {row.id}
                </div>
                <div className="flex-1 py-3 px-4 border-r border-gray-200 text-gray-700">{row.name}</div>
                <div className="flex-1 py-3 px-4 border-r border-gray-200 text-gray-700">{row.l}</div>
                <div 
                  className={`flex-1 py-3 px-4 border-r border-gray-200 text-gray-700 relative ${row.id === 3 ? 'bg-pastel-mint/30 border-2 border-green-400 font-bold cursor-pointer' : ''}`}
                  onMouseEnter={(e) => { e.stopPropagation(); setActiveTooltip('cell'); }}
                  onMouseLeave={(e) => { e.stopPropagation(); setActiveTooltip(null); }}
                >
                  {row.m}
                </div>
                <div className="flex-1 py-3 px-4 border-gray-200 text-gray-700">{row.x}</div>
              </div>
            ))}
          </div>

          {/* Tooltip Overlay */}
          <div className="mt-8 flex justify-center min-h-[120px]">
            <AnimatePresence mode="wait">
              {activeTooltip ? (
                <motion.div
                  key={activeTooltip}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="bg-white border border-pink-200 shadow-xl rounded-xl p-6 max-w-md w-full flex gap-4 items-start"
                >
                  <div className="bg-pink-100 p-2 rounded-full text-pink-500 mt-1">
                    <Info className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">{explanations[activeTooltip].title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{explanations[activeTooltip].text}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-400 italic flex items-center justify-center h-full w-full"
                >
                  Interactúa con la tabla arriba para ver la magia.
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BasicConcepts;
