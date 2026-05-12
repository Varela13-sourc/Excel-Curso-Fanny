import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Eraser, CheckCircle2 } from 'lucide-react';

const formulaPieces = [
  { id: 'p1', text: ')' },
  { id: 'p2', text: 'B2:B5' },
  { id: 'p3', text: '=' },
  { id: 'p4', text: 'SUMA' },
  { id: 'p5', text: '(' }
];

const correctOrder = ['=', 'SUMA', '(', 'B2:B5', ')'];

const InteractivePractice = () => {
  const [selectedPieces, setSelectedPieces] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePieceClick = (piece) => {
    if (isSuccess) return;
    if (!selectedPieces.find(p => p.id === piece.id)) {
      setSelectedPieces([...selectedPieces, piece]);
    }
  };

  const handleReset = () => {
    setSelectedPieces([]);
    setIsSuccess(false);
  };

  useEffect(() => {
    if (selectedPieces.length === correctOrder.length) {
      const currentFormula = selectedPieces.map(p => p.text).join('');
      const expectedFormula = correctOrder.join('');
      
      if (currentFormula === expectedFormula) {
        setIsSuccess(true);
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f472b6', '#a78bfa', '#34d399', '#fcd34d']
        });
      }
    }
  }, [selectedPieces]);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          ¡A Practicar, Maestra!
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.2 }}
          className="text-lg text-gray-600 mb-12"
        >
          <strong>Problema:</strong> Fanny, necesitas saber cuántos niños asistieron en total en la semana (rango B2:B5). Arma la fórmula correcta haciendo clic en las piezas.
        </motion.p>

        <div className="glass rounded-3xl p-8 shadow-xl border border-white/60 relative overflow-hidden">
          
          {/* Formula Builder Area */}
          <div className="bg-white/80 rounded-xl p-4 mb-8 min-h-[80px] flex items-center justify-start flex-wrap gap-2 border-2 border-dashed border-gray-300 shadow-inner">
            <AnimatePresence>
              {selectedPieces.length === 0 && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-400 italic px-4"
                >
                  Tu fórmula aparecerá aquí...
                </motion.span>
              )}
              {selectedPieces.map((piece) => (
                <motion.div
                  key={piece.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-gray-800 text-white font-mono text-lg px-4 py-2 rounded-lg shadow-md"
                >
                  {piece.text}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Success Message */}
          <AnimatePresence>
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-6 rounded-2xl shadow-2xl border-2 border-mint-400 z-20 flex flex-col items-center text-center"
              >
                <CheckCircle2 className="w-16 h-16 text-mint-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Excelente, maestra!</h3>
                <p className="text-gray-600 mb-6">Has armado la fórmula como toda una profesional.</p>
                <button 
                  onClick={handleReset}
                  className="px-6 py-2 bg-gradient-to-r from-mint-400 to-teal-400 text-white rounded-full font-bold hover:shadow-lg transition-all"
                >
                  Intentar de nuevo
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Available Pieces Area */}
          <div className={`transition-opacity duration-300 ${isSuccess ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
            <p className="text-gray-500 mb-4 text-sm font-medium uppercase tracking-wide">Piezas disponibles:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {formulaPieces.map((piece) => {
                const isSelected = selectedPieces.find(p => p.id === piece.id);
                return (
                  <motion.button
                    key={piece.id}
                    whileHover={!isSelected ? { scale: 1.05, y: -2 } : {}}
                    whileTap={!isSelected ? { scale: 0.95 } : {}}
                    onClick={() => handlePieceClick(piece)}
                    disabled={isSelected}
                    className={`text-xl font-mono px-6 py-3 rounded-xl font-bold shadow-sm transition-all border-2 
                      ${isSelected 
                        ? 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed' 
                        : 'bg-white text-pink-500 border-pink-200 hover:border-pink-400 hover:shadow-md'
                      }`}
                  >
                    {piece.text}
                  </motion.button>
                );
              })}
            </div>

            {/* Controls */}
            <div className="mt-8 flex justify-center">
              <button 
                onClick={handleReset}
                disabled={selectedPieces.length === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedPieces.length === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-500 hover:text-red-500 hover:bg-red-50'}`}
              >
                <Eraser className="w-4 h-4" />
                Borrar todo
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractivePractice;
