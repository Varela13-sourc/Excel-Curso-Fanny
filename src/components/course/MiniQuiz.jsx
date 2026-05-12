import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const MiniQuiz = ({ quiz }) => {
  const [selected, setSelected] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isCorrect = selected === quiz.correct;

  const handleSubmit = () => {
    if (selected !== null) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 overflow-hidden mb-6">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-6 py-4 border-b border-indigo-100 flex items-center justify-between">
        <h3 className="text-lg font-bold text-indigo-900 flex items-center gap-2">
          <HelpCircle size={20} className="text-indigo-600" />
          Mini Quiz
        </h3>
        <span className="text-xs font-bold bg-white text-indigo-600 px-2 py-1 rounded-full shadow-sm">Test rápido</span>
      </div>
      
      <div className="p-6">
        <p className="text-gray-800 font-medium text-lg mb-5">{quiz.question}</p>
        
        <div className="space-y-3 mb-6">
          {quiz.options.map((option, idx) => {
            const isThisSelected = selected === idx;
            const isThisCorrect = isSubmitted && idx === quiz.correct;
            const isThisWrong = isSubmitted && isThisSelected && !isCorrect;

            return (
              <button
                key={idx}
                onClick={() => !isSubmitted && setSelected(idx)}
                disabled={isSubmitted}
                className={clsx(
                  "w-full text-left px-5 py-3 rounded-xl border-2 transition-all flex items-center justify-between",
                  {
                    "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700": !isSubmitted && !isThisSelected,
                    "border-indigo-500 bg-indigo-50 text-indigo-900 shadow-sm": !isSubmitted && isThisSelected,
                    "border-green-500 bg-green-50 text-green-900": isThisCorrect,
                    "border-red-500 bg-red-50 text-red-900": isThisWrong,
                    "opacity-50 cursor-not-allowed": isSubmitted && !isThisCorrect && !isThisWrong
                  }
                )}
              >
                <span>{option}</span>
                {isThisCorrect && <CheckCircle2 className="text-green-500" size={20} />}
                {isThisWrong && <XCircle className="text-red-500" size={20} />}
              </button>
            );
          })}
        </div>

        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            className={clsx(
              "w-full py-3 rounded-xl font-bold transition-all",
              selected !== null 
                ? "bg-indigo-600 text-white shadow-md hover:bg-indigo-700 hover:shadow-lg" 
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
          >
            Comprobar Respuesta
          </button>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={clsx(
                "p-4 rounded-xl flex items-start gap-3",
                isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              )}
            >
              {isCorrect ? (
                <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-bold mb-1">{isCorrect ? "¡Excelente!" : "Casi lo logras"}</p>
                <p className="text-sm opacity-90">{quiz.feedback}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default MiniQuiz;
